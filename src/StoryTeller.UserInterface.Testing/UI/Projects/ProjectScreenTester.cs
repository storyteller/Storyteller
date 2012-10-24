using System.Windows.Forms;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Projects;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Testing.UI.Projects
{
    [TestFixture]
    public class when_a_bound_project_screen_user_selects_ok : InteractionContext<ProjectScreen>
    {
        private Project _project;

        protected override void beforeEach()
        {
            MockFor<IFileDialogPicker>().Stub(x => x.ShowDialog()).Return(DialogResult.OK);
            MockFor<IFileDialogPicker>().Stub(x => x.Selection).Return("file");
            MockFor<IDirectoryDialogPicker>().Stub(x => x.ShowDialog()).Return(DialogResult.OK);
            MockFor<IDirectoryDialogPicker>().Stub(x => x.Selection).Return("folder");
            _project = new Project();
            ClassUnderTest.BindTo(_project);
        }

        [Test]
        public void clicking_find_binary_folder_should_bind_the_result_to_the_model()
        {
            ControlDriver.FireEvent(ClassUnderTest.FindBinaryFolder, "Click");
            _project.BinaryFolder.ShouldEqual("folder");
        }

        [Test]
        public void clicking_find_configuration_file_should_bind_the_result_to_the_model()
        {
            ControlDriver.FireEvent(ClassUnderTest.FindConfigurationFile, "Click");
            _project.ConfigurationFileName.ShouldEqual("file");
        }

        [Test]
        public void clicking_find_file_name_should_bind_the_result_to_the_model()
        {
            ControlDriver.FireEvent(ClassUnderTest.FindFileName, "Click");
            _project.FileName.ShouldEqual("file");
        }

        [Test]
        public void clicking_find_test_folder_should_bind_the_result_to_the_model()
        {
            ControlDriver.FireEvent(ClassUnderTest.FindTestFolder, "Click");
            _project.TestFolder.ShouldEqual("folder");
        }
    }

    [TestFixture]
    public class when_a_bound_project_screen_user_selects_cancel : InteractionContext<ProjectScreen>
    {
        private Project _project;

        protected override void beforeEach()
        {
            MockFor<IFileDialogPicker>().Stub(x => x.ShowDialog()).Return(DialogResult.Cancel);
            MockFor<IDirectoryDialogPicker>().Stub(x => x.ShowDialog()).Return(DialogResult.Cancel);
            _project = new Project()
                       {
                           BinaryFolder = null,
                           TestFolder = null
                       };
            ClassUnderTest.BindTo(_project);
        }

        [Test]
        public void clicking_find_binary_folder_should_bind_the_result_to_the_model()
        {
            ControlDriver.FireEvent(ClassUnderTest.FindBinaryFolder, "Click");
            _project.BinaryFolder.ShouldBeNull();
        }

        [Test]
        public void clicking_find_configuration_file_should_bind_the_result_to_the_model()
        {
            ControlDriver.FireEvent(ClassUnderTest.FindConfigurationFile, "Click");
            _project.ConfigurationFileName.ShouldBeNull();
        }

        [Test]
        public void clicking_find_file_name_should_bind_the_result_to_the_model()
        {
            ControlDriver.FireEvent(ClassUnderTest.FindFileName, "Click");
            _project.FileName.ShouldBeNull();
        }

        [Test]
        public void clicking_find_test_folder_should_bind_the_result_to_the_model()
        {
            ControlDriver.FireEvent(ClassUnderTest.FindTestFolder, "Click");
            _project.TestFolder.ShouldBeNull();
        }
    }
}