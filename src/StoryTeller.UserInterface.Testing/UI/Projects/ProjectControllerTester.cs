using System;
using System.Windows.Forms;
using NUnit.Framework;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Projects;
using StoryTeller.UserInterface.Screens;
using StoryTeller.Workspace;
using Is = Rhino.Mocks.Constraints.Is;

namespace StoryTeller.UserInterface.Testing.UI.Projects
{


    [TestFixture]
    public class when_responding_to_a_new_suite : InteractionContext<ProjectController>
    {
        private Suite suite;

        protected override void beforeEach()
        {
            suite = new Suite("SomeNewSuite");
            ClassUnderTest.Project = MockFor<IProject>();
            ClassUnderTest.HandleMessage(new SuiteAddedMessage
            {
                NewSuite = suite
            });
        }

        [Test]
        public void should_create_the_new_directory_for_the_suite()
        {
            MockFor<IProject>().AssertWasCalled(x => x.CreateDirectory(suite));
        }
    }

    [TestFixture]
    public class when_responding_to_removing_a_project_from_the_history : InteractionContext<ProjectController>
    {
        private RemoveProjectFromHistoryMessage message;
        private ProjectToken _token;

        protected override void beforeEach()
        {
            _token = new ProjectToken {
                Filename = "some file name",
                Name = "some name"
            };

            message = new RemoveProjectFromHistoryMessage(){ProjectToken = _token};
            ClassUnderTest.Handle(message);
        }

        [Test]
        public void should_remove_the_project_from_the_history()
        {
            MockFor<IProjectHistory>().AssertWasCalled(x=> x.Remove(_token));
        }

        [Test]
        public void should_save_the_history()
        {
            MockFor<IProjectPersistor>().AssertWasCalled(x=> x.SaveHistory(null), x=> x.IgnoreArguments());
        }
    }

    [TestFixture]
    public class when_loading_an_existing_project_and_we_cannot_load_the_file_from_disk : InteractionContext<ProjectController>
    {
        private string _fileName;

        protected override void beforeEach()
        {
            _fileName = "someFileName";
            MockFor<IFileDialogPicker>().Expect(x => x.ShowDialog()).Return(DialogResult.OK);
            MockFor<IProjectPersistor>().Expect(x => x.LoadFromFile(_fileName)).Throw(new Exception("bad exception"));
            MockFor<IFileDialogPicker>().Stub(x=> x.Selection).Return(_fileName);
            MockFor<IProjectPersistor>().Stub(x => x.LoadFromFile("someFileName")).Return(StoryTeller.Testing.DataMother.MathProject());
            ClassUnderTest.LoadExistingProject();
        }

        [Test]
        public void should_send_a_project_load_failure_message_with_the_event_aggregator()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage((ProjectLoadFailureMessage)null), x => x.IgnoreArguments());            
        }
    }


    [TestFixture]
    public class when_loading_an_existing_project_and_the_user_cancels : InteractionContext<ProjectController>
    {

        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
            MockFor<IFileDialogPicker>().Expect(x => x.ShowDialog()).Return(DialogResult.Cancel);
            ClassUnderTest.LoadExistingProject();
        }

        [Test]
        public void should_set_the_file_dialog_filter_to_xml()
        {
            MockFor<IFileDialogPicker>().AssertWasCalled(x => x.Filter = FileDialogPicker.XML_FILE_FILTER);
        }

        [Test]
        public void should_use_the_file_dialog_picker_to_find_the_project()
        {
            MockFor<IFileDialogPicker>().VerifyAllExpectations();
        }

        [Test]
        public void should_not_try_to_get_the_selection_out_of_the_file_dialog_picker()
        {
            MockFor<IFileDialogPicker>().AssertWasNotCalled(x => { var ignored = x.Selection; });
        }
        
        [Test]
        public void should_not_try_to_load_a_project()
        {
            MockFor<IProjectPersistor>().AssertWasNotCalled(x=> x.LoadFromFile(null), x=> x.IgnoreArguments());
        }

        public void should_not_call_load_project()
        {
            ClassUnderTest.AssertWasNotCalled(x=> x.LoadProject(null), x=> x.IgnoreArguments());
        }        
    }

    [TestFixture]
    public class when_loading_an_existing_project_and_the_user_selects_a_file : InteractionContext<ProjectController>
    {
        private string _fileName;
        private IProject _project;

        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
            MockFor<IFileDialogPicker>().Expect(x => x.ShowDialog()).Return(DialogResult.OK);
            _fileName = "someFileName";
            MockFor<IFileDialogPicker>().Expect(x => x.Selection).Return(_fileName);
            _project = StoryTeller.Testing.DataMother.MathProject();
            MockFor<IProjectPersistor>().Expect(x => x.LoadFromFile(_fileName)).Return(_project);
            ClassUnderTest.LoadExistingProject();
        }

        [Test]
        public void should_set_the_file_dialog_filter_to_xml()
        {
            MockFor<IFileDialogPicker>().AssertWasCalled(x=> x.Filter = FileDialogPicker.XML_FILE_FILTER);
        }

        [Test]
        public void should_use_the_file_dialog_picker_to_find_the_project()
        {
            MockFor<IFileDialogPicker>().VerifyAllExpectations();
        }

        [Test]
        public void should_use_the_project_persistor_to_load_the_file_the_user_selects()
        {
            MockFor<IProjectPersistor>().VerifyAllExpectations();
        }

        [Test]
        public void should_call_load_project_with_a_project_token()
        {
            ClassUnderTest.AssertWasCalled(x=> x.LoadProject(_project.ToProjectToken()));
        }
    }

    [TestFixture]
    public class when_creating_a_new_project : InteractionContext<ProjectController>
    {
        [Test]
        public void should_call_open_screen_on_the_conductor_with_new_project_subject()
        {
            ClassUnderTest.CreateNewProject();
            MockFor<IScreenConductor>().AssertWasCalled(x => x.OpenScreen<NewProjectSubject>());
        }
    }


    [TestFixture]
    public class when_reloading_tests : InteractionContext<ProjectController>
    {
        private Hierarchy hierarchy;
        private IProject project;
        private const string theFileName = "some file name";
        private const string theProjectName = "some project name";

        protected override void beforeEach()
        {
            hierarchy = new Hierarchy("something");
            project = MockRepository.GenerateMock<IProject>();
            project.Expect(x => x.LoadTests()).Return(hierarchy);

            ClassUnderTest.Project = project;
            ClassUnderTest.HandleMessage(new ReloadTestsMessage());
        }

        [Test]
        public void should_send_the_hierarchy_message()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(hierarchy));
        }

        [Test]
        public void should_close_all_open_screens()
        {
            MockFor<IScreenConductor>().AssertWasCalled(x => x.CloseAll());
        }
    }

    [TestFixture]
    public class when_loading_a_project_and_the_load_fails : InteractionContext<ProjectController>
    {
        private StubShellPresenter _shell;
        private Hierarchy _hierarchy;
        private IProject _project;
        private ProjectToken _projectToken;
        private IProjectHistory _projectHistory;
        private const string theFileName = "some file name";
        private const string theProjectName = "some project name";

        protected override void beforeEach()
        {
            _shell = new StubShellPresenter();
            Services.Inject<IScreenConductor>(_shell);
            _hierarchy = new Hierarchy("something");
            _project = MockRepository.GenerateMock<IProject>();
            _project.Stub(x => x.Name).Return(theProjectName);
            _project.Expect(x => x.LoadTests()).Return(_hierarchy);

            MockFor<IProjectPersistor>().Expect(x => x.LoadFromFile(theFileName)).Return(_project);

            _projectHistory = MockFor<IProjectHistory>();
            _projectToken = new ProjectToken
            {
                Filename = theFileName,
                Name = _project.Name
            };
            _projectHistory.Stub(x => x.MarkAsLastAccessed(_projectToken)).Throw(new Exception("bad message"));
            ClassUnderTest.LoadProject(_projectToken);
        }

        [Test]
        public void should_fire_a_project_load_failure_event()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage((ProjectLoadFailureMessage) null),
                                                        x => x.IgnoreArguments());
        }        
    }

    [TestFixture]
    public class when_loading_a_project_we_cant_find_on_the_filesystem : InteractionContext<ProjectController>
    {
        private const string _theFileName = "some file name";
        private bool _output = true;
        private ProjectToken _projectToken;
        private ProjectLoadFailureMessage _projectLoadFailureMessage;

        protected override void beforeEach()
        {
            MockFor<IProjectPersistor>().Expect(x => x.LoadFromFile(_theFileName)).Return(null);
            _projectToken = new ProjectToken
            {
                Filename = _theFileName
            };
            
            _projectLoadFailureMessage = new ProjectLoadFailureMessage 
            {
                ProjectToken = _projectToken
            };
            _output = ClassUnderTest.LoadProject(_projectToken);
        }

        [Test]
        public void should_indicate_project_load_was_not_successful()
        {
            _output.ShouldBeFalse();
        }

        [Test]
        public void should_raise_a_project_load_failure_event_with_the_project_token()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x=> x.SendMessage(_projectLoadFailureMessage));
        }

        [Test]
        public void should_not_load_a_hierarchy()
        {
            MockFor<IEventAggregator>().AssertWasNotCalled(x => x.SendMessage(new Hierarchy("soemthing")), x => x.IgnoreArguments());
        }

        [Test]
        public void should_not_mark_the_project_in_the_history()
        {
            MockFor<IProjectHistory>().AssertWasNotCalled(x=> x.MarkAsLastAccessed(null), x=> x.IgnoreArguments());
        }

        [Test]
        public void should_not_save_the_history()
        {
            MockFor<IProjectPersistor>().AssertWasNotCalled(x=> x.SaveHistory(null), x=> x.IgnoreArguments());
        }
    }

    [TestFixture]
    public class when_loading_a_project : InteractionContext<ProjectController>
    {
        private StubShellPresenter _shell;
        private Hierarchy _hierarchy;
        private IProject _project;
        private ProjectToken[] _tokens;
        private ProjectToken theProjectToken;
        private const string _theFileName = "some file name";
        private const string _theProjectName = "some project name";

        protected override void beforeEach()
        {

            _tokens = new ProjectToken[0];
            _hierarchy = new Hierarchy("something");
            _project = MockRepository.GenerateMock<IProject>();
            _project.Stub(x => x.Name).Return(_theProjectName);
            _project.Stub(x => x.FileName).Return(_theFileName);
            _project.Expect(x => x.LoadTests()).Return(_hierarchy);


            MockFor<IProjectPersistor>().Expect(x => x.LoadFromFile(_theFileName)).Return(_project);
            MockFor<IProjectHistory>().Stub(x => x.Projects).Return(_tokens);
            theProjectToken = new ProjectToken
            {
                Filename = _theFileName,
                Name = _theProjectName
            };
            ClassUnderTest.LoadProject(theProjectToken);
        }

        [Test]
        public void cancels_all_test_runs_in_the_queue()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new ProjectLoaded(_project)));
        }

        [Test]
        public void loads_the_hierarchy_into_the_shell_presenter()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(_hierarchy));
        }

        [Test]
        public void closes_all_open_screens()
        {
            MockFor<IScreenConductor>().AssertWasCalled(x => x.CloseAll());
        }

        [Test]
        public void marks_the_project_history()
        {
            var theProjectTokenThatShouldBeMarked = new ProjectToken
            {
                Filename = _theFileName,
                Name = _theProjectName
            };

            MockFor<IProjectHistory>().AssertWasCalled(x => x.MarkAsLastAccessed(theProjectTokenThatShouldBeMarked));
        }

        [Test]
        public void remembers_the_project_for_later()
        {
            ClassUnderTest.Project.ShouldBeTheSameAs(_project);
        }

        [Test]
        public void should_persist_the_new_history()
        {
            MockFor<IProjectPersistor>().AssertWasCalled(x => x.SaveHistory(MockFor<IProjectHistory>()));
        }

        [Test]
        public void should_reload_the_project_list()
        {
            MockFor<IProjectExplorerView>().AssertWasCalled(x => x.ShowProjects(_tokens));
        }
    }

    [TestFixture]
    public class when_the_ProjectController_starts_with_projects_and_all_of_the_project_loads_fails :
        InteractionContext<ProjectController>
    {
        private ProjectToken[] tokens;
        private IProjectHistory _projectHistory;
        private const string theProjectName = "some project name";

        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
            tokens = new ProjectToken[0];
            _projectHistory = MockFor<IProjectHistory>();
            _projectHistory.Expect(x => x.Projects).Return(tokens);

            var projectToken1 = new ProjectToken
            {
                Filename = theProjectName
            };
            var projectToken2 = new ProjectToken
            {
                Filename = theProjectName,
                Name = "foo"
            };


            _projectHistory.Stub(x => x.LastAccessed).Return(projectToken1);
            _projectHistory.Expect(x => x.Next(projectToken1)).Return(projectToken2);
            _projectHistory.Expect(x => x.Next(projectToken2)).Return(null);

            ClassUnderTest.Expect(x => x.LoadProject(projectToken1)).Return(false);
            ClassUnderTest.Expect(x => x.LoadProject(projectToken2)).Return(false);

            ClassUnderTest.Start();
        }

        [Test]
        public void should_launch_a_new_screen_to_create_a_new_project()
        {
            MockFor<IScreenConductor>().AssertWasCalled(x => x.OpenScreen<NewProjectSubject>());
        }

        [Test]
        public void should_not_try_to_load_a_project_if_the_history_does_not_have_any_more_projects()
        {
            ClassUnderTest.AssertWasNotCalled(x => x.LoadProject(null));
        }

        [Test]
        public void should_set_the_list_of_existing_projects()
        {
            MockFor<IProjectExplorerView>().AssertWasCalled(x => x.ShowProjects(tokens));
        }

        [Test]
        public void should_try_to_load_all_the_projects()
        {
            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void when_the_first_project_fails_should_get_the_next_project()
        {
            _projectHistory.VerifyAllExpectations();
        }
    }

    [TestFixture]
    public class when_the_ProjectController_starts_with_projects_and_one_of_the_project_loads_fails :
        InteractionContext<ProjectController>
    {
        private ProjectToken[] tokens;
        private const string theProjectName = "some project name";

        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
            tokens = new ProjectToken[0];

            MockFor<IProjectHistory>().Expect(x => x.Projects).Return(tokens);

            var projectToken1 = new ProjectToken
            {
                Filename = theProjectName
            };
            var projectToken2 = new ProjectToken
            {
                Filename = theProjectName,
                Name = "foo"
            };


            MockFor<IProjectHistory>().Expect(x => x.LastAccessed).Return(projectToken1);
            MockFor<IProjectHistory>().Expect(x => x.Next(projectToken1)).Return(projectToken2);

            ClassUnderTest.Expect(x => x.LoadProject(projectToken1)).Return(false);
            ClassUnderTest.Expect(x => x.LoadProject(projectToken2)).Return(true);

            ClassUnderTest.Start();
        }

        [Test]
        public void should_load_projects_until_a_load_is_successful()
        {
            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void should_set_the_list_of_existing_projects()
        {
            MockFor<IProjectExplorerView>().AssertWasCalled(x => x.ShowProjects(tokens));
        }

        [Test]
        public void when_the_first_project_fails_should_get_the_next_project()
        {
            MockFor<IProjectHistory>().VerifyAllExpectations();
        }
    }

    [TestFixture]
    public class when_the_project_controller_saves_the_project : InteractionContext<ProjectController>
    {
        private Project theProject;

        protected override void beforeEach()
        {
            theProject = new Project();


            ClassUnderTest.SaveProject(theProject);
        }

        [Test]
        public void should_persist_the_project()
        {
            MockFor<IProjectPersistor>().AssertWasCalled(x => x.SaveProject(theProject));
        }

        [Test]
        public void should_refresh_the_code_tree()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new ReloadTestsMessage()), x => x.IgnoreArguments());
        }

        [Test]
        public void should_reload_the_fixture_library()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new ForceBinaryRecycle()), x => x.IgnoreArguments());
        }

    }


    [TestFixture]
    public class when_the_ProjectController_starts_with_projects : InteractionContext<ProjectController>
    {
        private ProjectToken[] tokens;
        private const string theProjectName = "some project name";

        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
            tokens = new ProjectToken[0];

            MockFor<IProjectHistory>().Expect(x => x.Projects).Return(tokens);

            var projectToken = new ProjectToken
            {
                Filename = theProjectName
            };
            MockFor<IProjectHistory>().Expect(x => x.LastAccessed).Return(projectToken);

            ClassUnderTest.Expect(x => x.LoadProject(projectToken)).Return(true);

            ClassUnderTest.Start();
        }

        [Test]
        public void should_load_the_last_project_if_it_exists()
        {
            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void should_set_the_list_of_existing_projects()
        {
            MockFor<IProjectExplorerView>().AssertWasCalled(x => x.ShowProjects(tokens));
        }
    }

    [TestFixture]
    public class when_the_controller_starts_with_no_projects : InteractionContext<ProjectController>
    {
        private ProjectToken[] tokens;
        private const string theProjectName = "some project name";

        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
            tokens = new ProjectToken[0];

            MockFor<IProjectHistory>().Expect(x => x.Projects).Return(tokens);
            MockFor<IProjectHistory>().Expect(x => x.LastAccessed).Return(null);

            ClassUnderTest.Expect(x => x.LoadProject(null)).IgnoreArguments().Repeat.Never();
            ClassUnderTest.Start();
        }

        [Test]
        public void should_launch_a_new_screen_to_create_a_new_project()
        {
            MockFor<IScreenConductor>().AssertWasCalled(x => x.OpenScreen<NewProjectSubject>());
        }

        [Test]
        public void should_not_try_to_load_any_project_if_the_history_is_blank()
        {
            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void should_set_the_list_of_existing_projects()
        {
            MockFor<IProjectExplorerView>().AssertWasCalled(x => x.ShowProjects(tokens));
        }
    }

    [TestFixture]
    public class when_responding_to_a_save_test_request : InteractionContext<ProjectController>
    {
        private Test theTest;
        private IProject theProject;

        protected override void beforeEach()
        {
            theTest = new Test("name");
            theProject = MockRepository.GenerateMock<IProject>();
            ClassUnderTest.Project = theProject;

            ClassUnderTest.HandleMessage(new SaveTestMessage(theTest));
        }

        [Test]
        public void should_call_save_on_project()
        {
            theProject.AssertWasCalled(x => x.Save(theTest));
        }
    }

    public class StubShellPresenter : IScreenConductor
    {
        public Hierarchy Hierarchy { get; set; }

        #region IScreenConductor Members

        public void OpenScreen(IScreenLocator _locator)
        {
            throw new NotImplementedException();
        }

        public void OpenScreen(INamedItem subject)
        {
            throw new NotImplementedException();
        }

        public void OpenScreen<T>() where T : IScreenLocator
        {
            throw new NotImplementedException();
        }

        public bool CanClose()
        {
            throw new NotImplementedException();
        }

        public void Close(IScreen screen)
        {
            throw new NotImplementedException();
        }

        public void CloseAllBut(IScreen screen)
        {
            throw new NotImplementedException();
        }

        public void CloseAll()
        {
            throw new NotImplementedException();
        }

        public void Start()
        {
            throw new NotImplementedException();
        }

        #endregion
    }

    [TestFixture]
    public class when_deleting_a_test : InteractionContext<ProjectController>
    {
        private Test theTest;
        private Suite theSuite;

        protected override void beforeEach()
        {
            theTest = new Test("test 1");
            theSuite = new Suite("suite 1");

            theSuite.AddTest(theTest);

            ClassUnderTest.Project = MockFor<IProject>();

            ClassUnderTest.HandleMessage(new DeleteTestMessage(theTest));
        }

        [Test]
        public void should_invoke_the_inner_project_to_delete_the_test()
        {
            MockFor<IProject>().DeleteFile(theTest);
        }

        [Test]
        public void should_remove_the_test_from_its_parent()
        {
            theSuite.Contains(theTest).ShouldBeFalse();
        }
    }

    [TestFixture]
    public class when_handling_the_request_test_rename_message : InteractionContext<ProjectController>
    {
        private Test test;

        protected override void beforeEach()
        {
            test = new Test("The test");

            ClassUnderTest.Project = MockFor<IProject>();

            ClassUnderTest.HandleMessage(new RenameTestRequest
            {
                Test = test,
                NewName = "new name"
            });
        }


        [Test]
        public void should_call_back_out_with_the_rename_test_message()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new TestRenamed
            {
                Test = test
            }));
        }

        [Test]
        public void should_rename_the_test_file()
        {
            MockFor<IProject>().AssertWasCalled(x => x.RenameTest(test, "new name"));
        }

        [Test]
        public void should_refresh_the_screen_headers()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage<RefreshScreenHeaders>());
        }
    }


    [TestFixture]
    public class when_responding_to_loading_a_new_project : InteractionContext<ProjectController>
    {
        private ProjectToken[] tokens;
        private IProject newProject;
        private string theFileName = "new file name";
        private string theProjectName = "new project name";

        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();

            ClassUnderTest.Expect(x => x.ActivateProject(newProject));

            tokens = new ProjectToken[0];

            newProject = MockFor<IProject>();
            newProject.Stub(x => x.Name).Return(theProjectName);
            newProject.Stub(x => x.FileName).Return(theFileName);

            MockFor<IProjectHistory>().Expect(x => x.Projects).Return(tokens);

            ClassUnderTest.StartNewProject(newProject);
        }

        [Test]
        public void should_activate_the_new_project()
        {
            ClassUnderTest.AssertWasCalled(x => x.ActivateProject(newProject));
        }

        [Test]
        public void should_persist_the_new_project()
        {
            MockFor<IProjectPersistor>().AssertWasCalled(p => p.SaveProject(newProject));
        }

        [Test]
        public void should_remember_the_project()
        {
            ClassUnderTest.Project.ShouldBeTheSameAs(newProject);
        }

        [Test]
        public void should_save_the_new_project_history()
        {
            MockFor<IProjectPersistor>().AssertWasCalled(x => x.SaveHistory(MockFor<IProjectHistory>()));
        }

        [Test]
        public void should_set_the_list_of_existing_projects()
        {
            MockFor<IProjectExplorerView>().AssertWasCalled(x => x.ShowProjects(tokens));
        }

        [Test]
        public void should_store_the_new_project_with_the_history()
        {
            MockFor<IProjectHistory>().AssertWasCalled(x => x.Store(new ProjectToken
            {
                Filename = theFileName,
                Name = theProjectName
            }));
        }
    }
}