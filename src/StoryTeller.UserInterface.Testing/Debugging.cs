using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;
using StoryTeller.Html;
using StoryTeller.Model;
using StoryTeller.Samples;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing;
using StoryTeller.UserInterface.Tests;
using StoryTeller.Workspace;
using StructureMap;
using StructureMap.TypeRules;

namespace StoryTeller.UserInterface.Testing
{

    [TestFixture, Explicit]
    public class Runner
    {
        private ProjectTestRunner runner;

        [TestFixtureSetUp]
        public void SetupRunner()
        {
            runner = new ProjectTestRunner(@"c:\svn\blue\storyteller.xml");
        }

        [Test]
        public void Viewing_Installed_Part_Information()
        {
            runner.RunAndAssertTest("Case/Viewing Installed Part Information");
        }

        [TestFixtureTearDown]
        public void TeardownRunner()
        {
            runner.Dispose();
        }
    }


    [TestFixture, Explicit]
    public class Debugging
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion



        [Test]
        public void get_header_attribute_off_of_table()
        {
            var fixture = new MathFixture();
            var sentence = fixture["StartWith"].ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();
            Cell cell = sentence.Cells.First();
            cell.DefaultValue.ShouldEqual("11");

            cell.ToInputCell().DefaultValue.ShouldEqual("11");

            var tag = new CellTag(cell, new Step());
            tag.MetaData("defaultValue").ShouldEqual("11");
        }

        [Test]
        public void project_runner_smoke_tester()
        {
            var runner =
                new ProjectRunner(new[] { @"c:\svn\blue\RuleTests.xml", @"c:\svn\blue\SDKTests.xml", @"c:\svn\blue\Storyteller.xml" }, @"c:\svn\blue\results");

            runner.Execute();
        }

        [Test]
        public void open_the_application()
        {
            var project = Project.LoadFromFile(@"c:\svn\blue\storyteller.xml");

        }

        [Test]
        public void try_to_write_grammar_report_for_dovetail()
        {
            var project = Project.LoadFromFile(@"C:\svn\blue\storyteller.xml");
            var writer = new FixtureLibraryErrorWriter();
            var engine = new TestEngine();
            engine.LoadSynchronously(project);
            //engine.Handle(new ProjectLoaded(project));
            //engine.WaitForProcessing();
            writer.BuildReport(engine.Library).OpenInBrowser();
        }

        [Test]
        public void write_and_open_a_test_editor()
        {
            var project = StoryTeller.Testing.DataMother.GrammarProject();
            var test = project.LoadTests().FindTest("Sentences");

            var builder = new TestEditorBuilder();
            var document = builder.BuildTestEditor(test, project.LocalRunner().Library);
            document.WriteToFile("editor.htm");

            var path = Path.GetFullPath("editor.htm");

            Process.Start("iexplore.exe", path);
        }


        [Test]
        public void should_find_11_startables()
        {
            Bootstrapper.BootstrapShell(false);

            ObjectFactory.Model.AllInstances.Where(x => x.ConcreteType == typeof(ScreenConductor)).Each(
                x => Debug.WriteLine(x.PluginType.FullName));

            ObjectFactory.Model.AllInstances.Count(x => x.ConcreteType == typeof(ScreenConductor)).ShouldEqual(1);
        }

        [Test]
        public void try_it()
        {
            typeof(TestPresenter).GetInterfaces()
                .Where(x => x.IsGenericType && x.GetGenericTypeDefinition() == typeof(IListener<>))
                .Select(x => x.GetGenericArguments()[0])
                .Each(x => Debug.WriteLine(x.FullName));
        }

        [Test]
        public void try_out_json_reading_writing()
        {
            var j = new JObject();
            j["name"] = new JValue("some test name");
            j["lifecycle"] = new JValue("Acceptance");

            Debug.WriteLine(j.ToString());
        }


        [Test]
        public void who_is_listening()
        {
            // Bootstrapper is a just a little helper class to bootstrap
            // my IoC container.  It's very, very advantageous to decouple
            // your IoC container setup away from the Global.asax or the
            // main executable of a WPF/WinForms app for this very kind
            // of scenario
            IContainer container = Bootstrapper.BuildContainer();
            var diagnostics = new ListenerDiagnostics(container);

            diagnostics.Listeners.GroupBy(x => x.EventType).Each(group =>
            {
                Debug.WriteLine("");
                Debug.WriteLine(group.Key.FullName + " is received by:");

                group.Each(x => Debug.WriteLine("     * " + x.ConcreteType));

                Debug.WriteLine("");
            });
        }

        [Test]
        public void write_out_the_project_file_for_math()
        {
            var project = new Project
            {
                // TODO: Github issue #56 
                BinaryFolder = @"..\..\source\StoryTeller.Samples\bin\release",
                FileName = "math.xml",
                Name = "Math",
                TestFolder = "math"
            };

            project.Save(@"C:\code\StoryTeller\samples\math.xml");
        }

        [Test]
        public void write_some_html()
        {
            Project project = StoryTeller.Testing.DataMother.MathProject();
            ITestRunner runner = project.LocalRunner();

            Test test = project.LoadTests().GetAllTests().First();

            runner.RunTest(test);

            test.OpenResultsInBrowser();
        }
    }


    public class ListenerDiagnostics
    {
        private readonly IEnumerable<ListenerToken> _listeners;

        public ListenerDiagnostics(IContainer container)
        {
            _listeners = container.Model.AllInstances
                .Where(x => x.ConcreteType != null)
                .Where(x => x.ConcreteType.ImplementsInterfaceTemplate(typeof(IListener<>)))
                .Select(x => x.ConcreteType)
                .SelectMany(tokensForType);
        }

        public IEnumerable<ListenerToken> Listeners { get { return _listeners; } }

        private static IEnumerable<ListenerToken> tokensForType(Type type)
        {
            return type.GetInterfaces()
                .Where(x => x.IsGenericType && x.GetGenericTypeDefinition() == typeof(IListener<>))
                .Select(x => new ListenerToken
                {
                    ConcreteType = type,
                    EventType = x.GetGenericArguments()[0]
                });
        }

        public IEnumerable<Type> WhoListensTo<T>()
        {
            return _listeners
                .Where(x => x.EventType == typeof(T))
                .Select(x => x.ConcreteType);
        }
    }

    public class ListenerToken
    {
        public Type ConcreteType { get; set; }
        public Type EventType { get; set; }
    }


    [TestFixture]
    public class monkey_around
    {


        [Test]
        public void look_at_illegal_characters()
        {
            Path.GetInvalidPathChars().Each(x => Debug.WriteLine(x));
        }
    }

    public class Fixture1 : Fixture
    {
        public void Edit(string caption)
        {
        }

        public IGrammar EditAndGo()
        {
            return Paragraph("Edit and go", x =>
            {
                x += this["Edit"];
                x += Embed<Fixture2>("Do something");
            });
        }
    }

    public class Fixture2 : Fixture
    {
        public void Add(int x, int y)
        {
        }

        public void Subtract(int x, int y)
        {
        }
    }
}