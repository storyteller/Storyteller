using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FubuCore;
using NUnit.Framework;
using Rhino.Mocks;
using ST.Client;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

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
            var completed = new SpecExecutionCompleted("sentence4", new SpecResults());
            ClassUnderTest.Receive(completed);

            ClassUnderTest.Hierarchy.Nodes["sentence4"].last
                .ShouldBeTheSameAs(completed);
        }

        [Test]
        public void load_specification_returns_the_specifiction_and_result_if_it_exists()
        {
            var theResults = new SpecResults();
            var completed = new SpecExecutionCompleted("sentence4", theResults);
            ClassUnderTest.Receive(completed);

            var message = ClassUnderTest.LoadSpecification("sentence4");
            message.id.ShouldEqual("sentence4");
            message.data.ShouldBeOfType<Specification>().Id.ShouldEqual("sentence4");
            message.results.ShouldEqual(theResults);
        }

        [Test]
        public void should_tell_the_file_watcher_to_start_upon_start()
        {
            theFileWatcher.Path.ShouldEqual(thePath);
            theFileWatcher.Observer.ShouldBeTheSameAs(ClassUnderTest);
        }

        [Test]
        public void should_have_a_hierarchy_upon_starting()
        {
            ClassUnderTest.Hierarchy.Suites.Any().ShouldBeTrue();
            ClassUnderTest.Hierarchy.Nodes.Any().ShouldBeTrue();
        }

        [Test]
        public void save_specification_body()
        {
            var node = ClassUnderTest.Hierarchy.Nodes["embeds"];
            var specification = XmlReader.ReadFromFile(node.Filename);
            specification.Children.Add(new Comment{Text = "a new comment"});

            ClassUnderTest.SaveSpecificationBody(node.id, specification);

            var written = XmlReader.ReadFromFile(node.Filename);
            written.Children.Last().ShouldBeOfType<Comment>()
                .Text.ShouldEqual("a new comment");
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

            added.suite.ShouldEqual("Sentences");
            added.node.lifecycle.ShouldEqual("Acceptance");
            added.node.id.ShouldNotEqual("sentence2");
            added.node.name.ShouldEqual("New Sentence");
            
            added.node.Filename.ShouldEqual(expectedPath);

            ClassUnderTest.Hierarchy.Nodes[added.node.id].ShouldBeTheSameAs(added.node);

            var specification = XmlReader.ReadFromFile(expectedPath);
            specification.Name.ShouldEqual("New Sentence");
            specification.Children.Any().ShouldBeTrue();

            // Adds the spec to the node
            var suite = ClassUnderTest.Hierarchy.Suites["Sentences"];
            suite.specs.ShouldContain(added.node);
        }

        [Test]
        public void add_spec()
        {
            var added = ClassUnderTest.AddSpec("Sentences", "The Third Sentence");

            var expectedPath = thePath.AppendPath("Sentences", "The_Third_Sentence.xml");

            added.node.name.ShouldEqual("The Third Sentence");
            added.node.Filename.ShouldEqual(expectedPath);
            added.node.lifecycle.ShouldEqual("Acceptance");

            added.node.Filename.ShouldEqual(expectedPath);

            ClassUnderTest.Hierarchy.Nodes[added.node.id].ShouldBeTheSameAs(added.node);

            var specification = XmlReader.ReadFromFile(expectedPath);
            specification.Name.ShouldEqual("The Third Sentence");

            // Adds the spec to the node
            var suite = ClassUnderTest.Hierarchy.Suites["Sentences"];
            suite.specs.ShouldContain(added.node);
        }


        [Test]
        public void add_spec_with_illegal_chars()
        {
            var added = ClassUnderTest.AddSpec("Sentences", "The Third Sentence??");

            var expectedPath = thePath.AppendPath("Sentences", "The_Third_Sentence.xml");

            added.node.name.ShouldEqual("The Third Sentence??");
            added.node.Filename.ShouldEqual(expectedPath);
            added.node.lifecycle.ShouldEqual("Acceptance");

            added.node.Filename.ShouldEqual(expectedPath);

            ClassUnderTest.Hierarchy.Nodes[added.node.id].ShouldBeTheSameAs(added.node);

            var specification = XmlReader.ReadFromFile(expectedPath);
            specification.Name.ShouldEqual("The Third Sentence??");

            // Adds the spec to the node
            var suite = ClassUnderTest.Hierarchy.Suites["Sentences"];
            suite.specs.ShouldContain(added.node);
        }

        [Test]
        public void save_spec_header()
        {
            // sentence4 starts as acceptance

            var node = ClassUnderTest.Hierarchy.Nodes["sentence4"];
            node.lifecycle.ShouldEqual("Acceptance");


            var changed = ClassUnderTest.SaveSpecHeader("sentence4", x => x.Lifecycle = Lifecycle.Regression);

            ClassUnderTest.Hierarchy.Suites["Sentences"].specs.Any(x => ReferenceEquals(x, changed.node))
                .ShouldBeTrue();

            ClassUnderTest.Hierarchy.Nodes["sentence4"].ShouldEqual(changed.node);
            changed.node.Filename.ShouldEqual(node.Filename);

            // wrote the file
            XmlReader.ReadFromFile(node.Filename).Lifecycle.ShouldEqual(Lifecycle.Regression);
        }

        [Test]
        public void add_a_suite_to_the_parent()
        {
            Services.PartialMockTheClassUnderTest();
            ClassUnderTest.StartWatching(thePath);

            ClassUnderTest.Expect(x => x.ReloadHierarchy());

            ClassUnderTest.AddSuite("", "Foo Specs");

            Directory.Exists(thePath.AppendPath("Foo Specs"));

            ClassUnderTest.AssertWasCalled(x => x.ReloadHierarchy());
        }

        [Test]
        public void add_suite_to_a_child_suite()
        {
            Services.PartialMockTheClassUnderTest();
            ClassUnderTest.StartWatching(thePath);

            ClassUnderTest.Expect(x => x.ReloadHierarchy());

            ClassUnderTest.AddSuite("Tables", "Special Tables");

            Directory.Exists(thePath.AppendPath("Tables", "Special Tables"));

            ClassUnderTest.AssertWasCalled(x => x.ReloadHierarchy());
        }

        [Test]
        public void load_spec_json()
        {
            var json = ClassUnderTest.LoadSpecificationJson("sentence3");

            var spec = JsonSerialization.Deserialize<Specification>(json);
            spec.Id.ShouldEqual("sentence3");
        }

        [Test]
        public void change_a_file()
        {
            var file = ClassUnderTest.Hierarchy.Nodes["general1"].Filename;
            var old = XmlReader.ReadFromFile(file);
            old.Lifecycle = Lifecycle.Regression;
            XmlWriter.WriteToXml(old).Save(file);

            ClassUnderTest.Changed(file);

            var newNode = ClassUnderTest.Hierarchy.Nodes["general1"];

            newNode.ShouldNotBeTheSameAs(old);
            newNode.lifecycle.ShouldEqual("Regression");
        
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
            var specification = new Specification {Name = "Foo"};
            
            var file = thePath.AppendPath("General", "Foo.xml");

            XmlWriter.WriteToXml(specification).Save(file);

            ClassUnderTest.Added(file);

            ClassUnderTest.Hierarchy.Nodes[specification.Id].name.ShouldEqual("Foo");
        }

        [Test]
        public void file_deleted()
        {
            var file = ClassUnderTest.Hierarchy.Nodes["paragraph1"].Filename;

            File.Delete(file);

            ClassUnderTest.Deleted(file);

            ClassUnderTest.Hierarchy.Nodes.Has("paragraph")
                .ShouldBeFalse();
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