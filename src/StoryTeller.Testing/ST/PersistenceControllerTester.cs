using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FubuCore;
using NUnit.Framework;
using Rhino.Mocks;
using Shouldly;
using ST.Client;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Testing.ST
{
    [TestFixture]
    public class PersistenceControllerTester : InteractionContext<PersistenceController>
    {
        private string thePath;
        private NulloSpecFileWatcher theFileWatcher;

        [TestFixtureSetUp]
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
        }

        protected override void beforeEach()
        {
            theFileWatcher = new NulloSpecFileWatcher();
            Services.Inject<ISpecFileWatcher>(theFileWatcher);

            ClassUnderTest.StartWatching(thePath);
        }

        [Test]
        public void caches_the_last_execution_for_a_suite()
        {
            var completed = new SpecExecutionCompleted("sentence4", new SpecResults(), new Specification());
            ClassUnderTest.Receive(completed);

            ClassUnderTest.AllCachedResults().ShouldContain(completed);

        }

        [Test]
        public void clear_all_results()
        {
            ClassUnderTest.Receive(new SpecExecutionCompleted("sentence4", new SpecResults(), new Specification()));
            ClassUnderTest.Receive(new SpecExecutionCompleted("general1", new SpecResults(), new Specification()));
            ClassUnderTest.Receive(new SpecExecutionCompleted("general2", new SpecResults(), new Specification()));
            ClassUnderTest.Receive(new SpecExecutionCompleted("table1", new SpecResults(), new Specification()));

            ClassUnderTest.ClearAllResults();

            ClassUnderTest.AllCachedResults().Any().ShouldBeFalse();

            var hierarchyLoaded = new HierarchyLoaded
            {
                hierarchy = ClassUnderTest.Hierarchy.Top
            };

            MockFor<IClientConnector>().AssertWasCalled(x => x.SendMessageToClient(hierarchyLoaded));
        }

        [Test]
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

        [Test]
        public void should_have_a_hierarchy_upon_starting()
        {
            ClassUnderTest.Hierarchy.Suites.Any().ShouldBe(true);
            ClassUnderTest.Hierarchy.Specifications.Any().ShouldBe(true);
        }

        [Test]
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


        [Test]
        public void clone_a_specification()
        {
            // This *should* be broken up into its own fixture, but I'm feeling lazy
            // today


            // sentence2 is marked as regression, but the newly cloned one
            // should be acceptance

            var added = ClassUnderTest.CloneSpecification("sentence2", "New Sentence");

            var expectedPath = thePath.AppendPath("Sentences", "New_Sentence.xml");

            added.suite.ShouldBe("Sentences");
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
            suite.specs.ShouldContain(added.data);
        }

        [Test]
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
            suite.specs.ShouldContain(added.data);
        }


        [Test]
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
            suite.specs.ShouldContain(added.data);
        }


        [Test]
        public void add_a_suite_to_the_parent()
        {
            ClassUnderTest.StartWatching(thePath);


            ClassUnderTest.AddSuite("", "Foo Specs");

            Directory.Exists(thePath.AppendPath("Foo Specs"));

            MockFor<IClientConnector>().AssertWasCalled(x => x.SendMessageToClient(new SuiteAdded {path = "Foo Specs"}));

            var newSuite = ClassUnderTest.Hierarchy.Suites["Foo Specs"];
            newSuite.name.ShouldBe("Foo Specs");
            newSuite.specs.Length.ShouldBe(0);
            newSuite.suites.Length.ShouldBe(0);
            newSuite.path.ShouldBe("Foo Specs");

            ClassUnderTest.Hierarchy.Suites[""].suites.ShouldContain(newSuite);
        }

        [Test]
        public void add_suite_to_a_child_suite()
        {
            ClassUnderTest.StartWatching(thePath);


            ClassUnderTest.AddSuite("Tables", "Special Tables");

            Directory.Exists(thePath.AppendPath("Tables", "Special Tables"));

            MockFor<IClientConnector>()
                .AssertWasCalled(x => x.SendMessageToClient(new SuiteAdded {path = "Tables/Special Tables"}));

            var newSuite = ClassUnderTest.Hierarchy.Suites["Tables/Special Tables"];
            newSuite.name.ShouldBe("Special Tables");
            newSuite.specs.Length.ShouldBe(0);
            newSuite.suites.Length.ShouldBe(0);
            newSuite.path.ShouldBe("Tables/Special Tables");

            ClassUnderTest.Hierarchy.Suites["Tables"].suites
                .ShouldContain(newSuite);
        }

        [Test]
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
                .specs.ShouldContain(newNode);

            MockFor<IClientConnector>().AssertWasCalled(x => x.SendMessageToClient(new SpecChanged
            {
                node = newNode
            }));
        }

        [Test]
        public void file_added()
        {
            var specification = new Specification {name = "Foo"};

            var file = thePath.AppendPath("General", "Foo.xml");

            XmlWriter.WriteToXml(specification).Save(file);

            ClassUnderTest.Added(file);

            ClassUnderTest.Hierarchy.Specifications[specification.id].name.ShouldBe("Foo");
        }

        [Test]
        public void file_deleted()
        {
            var file = ClassUnderTest.Hierarchy.Specifications["paragraph1"].Filename;

            File.Delete(file);

            ClassUnderTest.Deleted(file);

            ClassUnderTest.Hierarchy.Specifications.Has("paragraph").ShouldBe(false);
        }
    }

    public class NulloSpecFileWatcher : ISpecFileWatcher
    {
        public void Dispose()
        {
            // nothing
        }

        public IDisposable LatchFile(string file)
        {
            var disposable = new Disposable(file);

            Disposables.Add(disposable);

            return disposable;
        }

        public readonly IList<Disposable> Disposables = new List<Disposable>();

        public void StartWatching(string path, ISpecFileObserver observer)
        {
            Path = path;
            Observer = observer;
        }

        public ISpecFileObserver Observer { get; set; }

        public string Path { get; set; }

        public class Disposable : IDisposable
        {
            private readonly string _file;

            public Disposable(string file)
            {
                _file = file;
            }

            public string file
            {
                get { return _file; }
            }

            public void Dispose()
            {
                WasDisposed = true;
            }

            public bool WasDisposed { get; set; }
        }
    }
}