using System.Threading;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Threading;
using FubuCore.Conversion;
using ShadeTree.Validation;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Controls;
using StoryTeller.UserInterface.Dialogs;
using StoryTeller.UserInterface.Editing;
using StoryTeller.UserInterface.Eventing;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Handlers;
using StoryTeller.UserInterface.Projects;
using StoryTeller.UserInterface.Running;
using StoryTeller.UserInterface.Screens;
using StoryTeller.UserInterface.Tests;
using StoryTeller.UserInterface.Workspace;
using StoryTeller.Workspace;
using StructureMap.Configuration.DSL;
using StructureMap.TypeRules;
using PropertyMatch=StoryTeller.Engine.Sets.PropertyMatch;

namespace StoryTeller.UserInterface
{
    public class UserInterfaceRegistry : Registry
    {
        public UserInterfaceRegistry()
        {
            fakeValidDefaultsForExplicitArguments();

            setupShell();
            For<IValidator>().Use<Validator>();

            For(typeof (IScreenLocator<>)).Use(typeof (ScreenLocator<>));

            SetAllProperties(y => y.OfType<IProjectController>());

            // The single argument to the Scan method is a 
            // nested closure
            Scan(x =>
            {
                x.TheCallingAssembly();
                x.AssemblyContainingType<ITestEngine>();
                x.ExcludeNamespaceContainingType<ITestContext>();
                x.ExcludeNamespaceContainingType<PropertyMatch>();
                x.ExcludeNamespaceContainingType<IStep>();
                x.ExcludeType<TestLineDriver>();

                x.WithDefaultConventions();

                x.ConnectImplementationsToTypesClosing(typeof (ICommandDialog<>));
                x.ConnectImplementationsToTypesClosing(typeof (IContextualAction<>));
                x.ConnectImplementationsToTypesClosing(typeof (IScreen<>));

                x.AddAllTypesOf<TestMode>();
                x.AddAllTypesOf<IHandler>();
            });

            registerSingletons();
            registerEventAggregator();
            setupExplorerView();
            setupProjectHistory();
            setupSynchronization();

            setupTestView();

            For<Suite>().Use(c => c.GetInstance<Hierarchy>());
            For<Table>().Use(c => new Table());
            For<Sentence>().Use(c => new Sentence());
            For<Section>().Use(c => new Section("something"));
            For<EmbeddedSection>().Use(c => new EmbeddedSection());
            For<Paragraph>().Use(c => new Paragraph());
            For<Comment>().Use(c => new Comment());
            For<SetVerification>().Use(c => new SetVerification());
            For<FixtureStructure>().Use(c => new FixtureStructure());
            For<ITestFilter>().Use<TestFilter>();

            IfTypeMatches(x => x.CanBeCastTo(typeof(Window))).InterceptWith((c, dialog) =>
            {
                var window = c.GetInstance<IApplicationShell>() as Window;
                dialog.As<Window>().Owner = window;

                return dialog;
            });

            For<FixtureLibrary>().Use(c => c.GetInstance<ProjectContext>().Library);
        }

        private void registerEventAggregator()
        {
            For<IEventAggregator>().Singleton().Use<EventAggregator>();
            RegisterInterceptor(new EventAggregatorInterceptor());

            //For<IHandler>().AddInstances(x =>
            //{
            //    x.OfConcreteType<BinaryFailureHandler>();
            //});
        }

        private void setupTestView()
        {
            For<ITestHeaderView>().Use(c => c.GetInstance<ITestView>().Header);
            For<ITestHeaderViewModel>().Use<TestHeaderViewModel>().OnCreation(
                (c, m) => c.GetInstance<ITestHeaderView>().As<TestHeaderView>().BindTo(m));
        }

        private void registerSingletons()
        {
            makeSingleton<TestStopConditions>();
            makeSingleton<ITestEngine>();
            makeSingleton<ITestExplorer>();
            makeSingleton<ITestService>();
            makeSingleton<IScreenCollection>();
            makeSingleton<GrammarErrorPresenter>();
            makeSingleton<IExecutionQueue>();
            makeSingleton<IProjectController>();
            makeSingleton<IExecutionQueue>();

            makeSingleton<FixtureExplorer>();
            makeSingleton<ExplorerView>();
            makeSingleton<StatusPresenter>();
            makeSingleton<IScreenObjectRegistry>();
            makeSingleton<IShellService>();
            makeSingleton<ITestEditorBuilder>();
            makeSingleton<ProjectContext>();

        }

        private void fakeValidDefaultsForExplicitArguments()
        {
            For<TreeNode>().Use(new TreeNode(new Hierarchy("some project")));
            For<IFixtureNode>().Use(new FixtureLibrary());
            For<TreeView>().Use(new TreeView());
            For<Test>().Use(new Test("FAKE"));
            For<IProject>().Use(new Project());
            For<INamedItem>().Use(new Hierarchy("something"));
            For<ITestFilterBar>().Use(new TestFilterBar());
        }

        private void setupExplorerView()
        {
            For<IExplorerView>().Use<ExplorerView>()
                .Ctor<TreeView>("testTree").Is(x => x.TheInstanceNamed("tests"))
                .Ctor<TreeView>("fixtureTree").Is(x => x.TheInstanceNamed("fixtures"));
        }

        private void makeSingleton<T>()
        {
            For<T>().Singleton();

            if (typeof (T).IsConcrete())
            {
                For<T>().Use<T>();
            }
        }

        private void setupShell()
        {
            var shell = new Shell();
            shell.Register(this);

            var window = new MainWindow(shell);
            For<Window>().Use(window);

            ForSingletonOf<IScreenConductor>().Use<ScreenConductor>().OnCreation(
                (context, presenter) =>
                {
                    var w = context.GetInstance<Window>().As<MainWindow>();
                    w.CanClose = presenter.CanClose;
                });
        }

        private void setupProjectHistory()
        {
            ForSingletonOf<IProjectHistory>().Use(
                context => context.GetInstance<IProjectPersistor>().LoadHistory());
        }

        private void setupSynchronization()
        {
            ForSingletonOf<SynchronizationContext>().Use(() =>
            {
                if (SynchronizationContext.Current == null)
                {
                    SynchronizationContext.SetSynchronizationContext(new DispatcherSynchronizationContext());
                }

                return SynchronizationContext.Current;
            });
        }
    }
}