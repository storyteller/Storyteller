using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FubuCore;
using Rhino.Mocks;
using Shouldly;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using ST.Client;
using Xunit;

namespace StoryTeller.Testing.ST
{
    public class PersistenceControllerTester : InteractionContext<PersistenceController>
    {
        public PersistenceControllerTester()
        {
            CopyFiles();
        }

        private string thePath;
        private NulloSpecFileWatcher theFileWatcher;

        public void CopyFiles()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs");

            thePath = ".".ToFullPath().AppendPath(Guid.NewGuid().ToString());
            var fileSystem = new FileSystem();

            var files = fileSystem.FindFiles(path, FileSet.Deep("*.xml"));
            files.Each(file =>
            {
                var relativePath = file.PathRelativeTo(path);
                var destination = Path.Combine(thePath, relativePath);

                fileSystem.Copy(file, destination);
            });

            theFileWatcher = new NulloSpecFileWatcher();
            Services.Inject<ISpecFileWatcher>(theFileWatcher);

            ClassUnderTest.StartWatching(thePath);
        }


        [Fact]
        public void add_a_suite_to_the_parent()
        {
            ClassUnderTest.StartWatching(thePath);


            ClassUnderTest.AddSuite("", "Foo Specs");

            Directory.Exists(thePath.AppendPath("Foo Specs"));

            MockFor<IClientConnector>()
                .AssertWasCalled(x => x.SendMessageToClient(new SuiteAdded(ClassUnderTest.Hierarchy.Top)));

            var newSuite = ClassUnderTest.Hierarchy.Suites["Foo Specs"];
            newSuite.name.ShouldBe("Foo Specs");
            newSuite.Specifications.Length.ShouldBe(0);
            newSuite.suites.Length.ShouldBe(0);
            newSuite.path.ShouldBe("Foo Specs");

            ClassUnderTest.Hierarchy.Suites[""].suites.ShouldContain(newSuite);
        }

        [Fact]
        public void add_spec()
        {
            var added = ClassUnderTest.AddSpec("Sentences", "The Third Sentence");

            var expectedPath = thePath.AppendPath("Sentences", "The_Third_Sentence.xml");

            added.data.name.ShouldBe("The Third Sentence");
            added.data.Filename.ShouldBe(expectedPath);
            added.data.Lifecycle.ShouldBe(Lifecycle.Acceptance);

            added.data.Filename.ShouldBe(expectedPath);

            ClassUnderTest.Hierarchy.Specifications[added.data.id].ShouldBeTheSameAs(added.data);

            var specification = XmlReader.ReadFromFile(expectedPath);
            specification.name.ShouldBe("The Third Sentence");

            // Adds the spec to the node
            var suite = ClassUnderTest.Hierarchy.Suites["Sentences"];
            suite.Specifications.ShouldContain(added.data);
        }


        [Fact]
        public void add_spec_with_illegal_chars()
        {
            var added = ClassUnderTest.AddSpec("Sentences", "The Third Sentence??");

            var expectedPath = thePath.AppendPath("Sentences", "The_Third_Sentence.xml");

            added.data.name.ShouldBe("The Third Sentence??");
            added.data.Filename.ShouldBe(expectedPath);
            added.data.Lifecycle.ShouldBe(Lifecycle.Acceptance);

            added.data.Filename.ShouldBe(expectedPath);

            ClassUnderTest.Hierarchy.Specifications[added.data.id].ShouldBeTheSameAs(added.data);

            var specification = XmlReader.ReadFromFile(expectedPath);
            specification.name.ShouldBe("The Third Sentence??");

            // Adds the spec to the node
            var suite = ClassUnderTest.Hierarchy.Suites["Sentences"];
            suite.Specifications.ShouldContain(added.data);
        }

        [Fact]
        public void add_suite_to_a_child_suite()
        {
            ClassUnderTest.StartWatching(thePath);


            ClassUnderTest.AddSuite("Tables", "Special Tables");

            Directory.Exists(thePath.AppendPath("Tables", "Special Tables"));

            MockFor<IClientConnector>()
                .AssertWasCalled(x => x.SendMessageToClient(new SuiteAdded(ClassUnderTest.Hierarchy.Top)));

            var newSuite = ClassUnderTest.Hierarchy.Suites["Tables/Special Tables"];
            newSuite.name.ShouldBe("Special Tables");
            newSuite.Specifications.Length.ShouldBe(0);
            newSuite.suites.Length.ShouldBe(0);
            newSuite.path.ShouldBe("Tables/Special Tables");

            ClassUnderTest.Hierarchy.Suites["Tables"].suites
                .ShouldContain(newSuite);
        }

        [Fact]
        public void caches_the_last_execution_for_a_suite()
        {
            var completed = new SpecExecutionCompleted("sentence4", new SpecResults(), new Specification());
            ClassUnderTest.Receive(completed);

            ClassUnderTest.AllCachedResults().ShouldContain(completed);
        }

        [Fact]
        public void change_a_file()
        {
            var file = ClassUnderTest.Hierarchy.Specifications["general1"].Filename;
            var old = XmlReader.ReadFromFile(file);
            old.Lifecycle = Lifecycle.Regression;
            XmlWriter.WriteToXml(old).Save(file);

            ClassUnderTest.Changed(file);

            var newNode = ClassUnderTest.Hierarchy.Specifications["general1"];

            newNode.ShouldNotBeTheSameAs(old);
            newNode.Lifecycle.ShouldBe(Lifecycle.Regression);

            ClassUnderTest.Hierarchy.Suites["General"]
                .Specifications.ShouldContain(newNode);

            var sent =
                MockFor<IClientConnector>().GetArgumentsForCallsMadeOn(x => x.SendMessageToClient(new SpecData()))[0][0]
                    as SpecData;

            sent.ShouldNotBeNull();

            sent.data.ShouldBe(newNode);
            sent.id.ShouldBe("general1");
        }

        [Fact]
        public void clear_all_results()
        {
            ClassUnderTest.Receive(new SpecExecutionCompleted("sentence4", new SpecResults(), new Specification()));
            ClassUnderTest.Receive(new SpecExecutionCompleted("general1", new SpecResults(), new Specification()));
            ClassUnderTest.Receive(new SpecExecutionCompleted("general2", new SpecResults(), new Specification()));
            ClassUnderTest.Receive(new SpecExecutionCompleted("table1", new SpecResults(), new Specification()));

            ClassUnderTest.ClearAllResults();

            ClassUnderTest.AllCachedResults().Any().ShouldBeFalse();

            var hierarchyLoaded = new HierarchyLoaded(ClassUnderTest.Hierarchy.Top, ClassUnderTest.Results);
            MockFor<IClientConnector>().AssertWasCalled(x => x.SendMessageToClient(hierarchyLoaded));
        }


        [Fact]
        public void clone_a_specification()
        {
            // This *should* be broken up into its own fixture, but I'm feeling lazy
            // today


            // sentence2 is marked as regression, but the newly cloned one
            // should be acceptance

            var added = ClassUnderTest.CloneSpecification("sentence2", "New Sentence");

            var expectedPath = thePath.AppendPath("Sentences", "New_Sentence.xml");

            added.hierarchy.ShouldBeTheSameAs(ClassUnderTest.Hierarchy.Top);
            added.data.Lifecycle.ShouldBe(Lifecycle.Acceptance);
            added.data.id.ShouldNotBe("sentence2");
            added.data.name.ShouldBe("New Sentence");

            added.data.Filename.ShouldBe(expectedPath);

            ClassUnderTest.Hierarchy.Specifications[added.data.id].ShouldBeTheSameAs(added.data);

            var specification = XmlReader.ReadFromFile(expectedPath);
            specification.name.ShouldBe("New Sentence");
            specification.Children.Any().ShouldBe(true);

            // Adds the spec to the node
            var suite = ClassUnderTest.Hierarchy.Suites["Sentences"];
            suite.Specifications.ShouldContain(added.data);
        }

        [Fact]
        public void file_added()
        {
            var specification = new Specification {name = "Foo"};

            var file = thePath.AppendPath("General", "Foo.xml");

            XmlWriter.WriteToXml(specification).Save(file);

            ClassUnderTest.Added(file);

            ClassUnderTest.Hierarchy.Specifications[specification.id].name.ShouldBe("Foo");
        }

        [Fact]
        public void file_deleted()
        {
            var file = ClassUnderTest.Hierarchy.Specifications["paragraph1"].Filename;

            File.Delete(file);

            ClassUnderTest.Deleted(file);

            ClassUnderTest.Hierarchy.Specifications.Has("paragraph").ShouldBe(false);
        }

        [Fact]
        public void load_specification_returns_the_specifiction_and_result_if_it_exists()
        {
            var theResults = new SpecResults();
            var completed = new SpecExecutionCompleted("sentence4", theResults, new Specification());
            ClassUnderTest.Receive(completed);

            var message = ClassUnderTest.LoadSpecification("sentence4");
            message.id.ShouldBe("sentence4");
            message.data.ShouldBeOfType<Specification>().id.ShouldBe("sentence4");
            message.results.ShouldContain(completed);
        }

        [Fact]
        public void save_specification_body()
        {
            var node = ClassUnderTest.Hierarchy.Specifications["embeds"];
            var specification = XmlReader.ReadFromFile(node.Filename);
            specification.Children.Add(new Comment {Text = "a new comment"});

            ClassUnderTest.SaveSpecification(node.id, specification);

            var written = XmlReader.ReadFromFile(node.Filename);
            written.Children.Last().ShouldBeOfType<Comment>()
                .Text.ShouldBe("a new comment");
        }

        [Fact]
        public void save_specification_updates_expiration_period()
        {
            var node = ClassUnderTest.Hierarchy.Specifications["embeds"];
            var specification = XmlReader.ReadFromFile(node.Filename);
            specification.ExpirationPeriod = 5;

            ClassUnderTest.SaveSpecification(node.id, specification);
            var written = XmlReader.ReadFromFile(node.Filename);
            written.ExpirationPeriod.ShouldBe(5);
        }

        [Fact]
        public void save_specification_updates_last_updated_time()
        {
            var node = ClassUnderTest.Hierarchy.Specifications["embeds"];
            var specification = XmlReader.ReadFromFile(node.Filename);
            var theTime = new DateTime(2015, 5, 24);
            LocalSystemTime = theTime;

            ClassUnderTest.SaveSpecification(node.id, specification);
            var written = XmlReader.ReadFromFile(node.Filename);
            written.LastUpdated.ShouldBe(theTime);
        }

        [Fact]
        public void setting_the_lifecycle_when_the_lifecycle_matches_already()
        {
            var spec = ClassUnderTest.Hierarchy.Specifications["general1"];
            var lifecycle = spec.Lifecycle;

            ClassUnderTest.SetLifecycle("general1", lifecycle);

            // Nothing should happen here
            MockFor<IClientConnector>().AssertWasNotCalled(x => x.SendMessageToClient(null), x => x.IgnoreArguments());
        }

        [Fact]
        public void setting_the_lifecycle_when_the_new_lifecycle_is_different()
        {
            var spec = ClassUnderTest.Hierarchy.Specifications["general1"];
            var newLifecycle = spec.Lifecycle == Lifecycle.Acceptance ? Lifecycle.Regression : Lifecycle.Acceptance;

            var completed1 = new SpecExecutionCompleted {Id = spec.id};
            var completed2 = new SpecExecutionCompleted {Id = spec.id};
            var completed3 = new SpecExecutionCompleted {Id = spec.id};

            ClassUnderTest.Results.Store(completed1);
            ClassUnderTest.Results.Store(completed2);
            ClassUnderTest.Results.Store(completed3);

            ClassUnderTest.SetLifecycle("general1", newLifecycle);

            // Did save
            XmlReader.ReadFromFile(spec.Filename).Lifecycle
                .ShouldBe(newLifecycle);


            var message = MockFor<IClientConnector>().GetArgumentsForCallsMadeOn(x => x.SendMessageToClient(null))
                [0][0].As<SpecData>();

            message.data.ShouldBeSameAs(spec);
            message.data.id.ShouldBe(spec.id);
            message.results.Any(x => ReferenceEquals(x, completed1)).ShouldBeTrue();
            message.results.Any(x => ReferenceEquals(x, completed2)).ShouldBeTrue();
            message.results.Any(x => ReferenceEquals(x, completed3)).ShouldBeTrue();
        }

        [Fact]
        public void should_have_a_hierarchy_upon_starting()
        {
            ClassUnderTest.Hierarchy.Suites.Any().ShouldBe(true);
            ClassUnderTest.Hierarchy.Specifications.Any().ShouldBe(true);
        }
    }

    public class StubClientConnector : IClientConnector
    {
        public readonly IList<object> Messages = new List<object>();
        public string WebSocketsAddress { get; private set; }

        public void Start()
        {
            throw new NotImplementedException();
        }

        public void SendMessageToClient(object message)
        {
            Messages.Add(message);
        }
    }


    public class NulloSpecFileWatcher : ISpecFileWatcher
    {
        public readonly IList<Disposable> Disposables = new List<Disposable>();

        public ISpecFileObserver Observer { get; set; }

        public string Path { get; set; }

        public void Dispose()
        {
            // nothing
        }

        public void StartWatching(string path, ISpecFileObserver observer)
        {
            Path = path;
            Observer = observer;
        }

        public void WriteFiles(Action action)
        {
            action();
        }

        public class Disposable : IDisposable
        {
            public Disposable(string file)
            {
                this.file = file;
            }

            public string file { get; }

            public bool WasDisposed { get; set; }

            public void Dispose()
            {
                WasDisposed = true;
            }
        }
    }
}