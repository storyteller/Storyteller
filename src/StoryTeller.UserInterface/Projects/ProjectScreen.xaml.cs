using System.Windows.Forms;
using ShadeTree.Binding;
using ShadeTree.Binding.WPF;
using StoryTeller.Workspace;
using Button=System.Windows.Controls.Button;
using TextBox=System.Windows.Controls.TextBox;
using UserControl=System.Windows.Controls.UserControl;

namespace StoryTeller.UserInterface.Projects
{
    /// <summary>
    /// Interaction logic for ProjectScreen.xaml
    /// </summary>
    public partial class ProjectScreen : UserControl, IProjectScreen
    {
        private readonly ScreenBinder<Project> _binder;
        private readonly IFileDialogPicker _fileDialogPicker;
        private readonly IDirectoryDialogPicker _folderDialogPicker;

        public ProjectScreen()
        {
            InitializeComponent();

            _binder = new ScreenBinder<Project>();
            _binder.Bind(x => x.Name).To(name);
            _binder.Bind(x => x.FileName).To(fileName);
            _binder.Bind(x => x.TestFolder).To(testFolder);
            _binder.Bind(x => x.BinaryFolder).To(binaryFolder);
            _binder.Bind(x => x.ConfigurationFileName).To(configurationFile);
            _binder.Bind(x => x.SystemTypeName).To(systemName);
            _binder.Bind(x => x.TimeoutInSeconds).To(timeoutInSeconds);
            _binder.Bind(x => x.NumberOfTestRetries).To(numberOfTestRetries);

            _binder.Bind(x => x.FixtureAssembly).To(fixtureAssembly);
            _binder.Bind(x => x.Options.TargetFile).To(testHarnessFileName);
            _binder.Bind(x => x.Options.FileTemplate).To(testHarnessFileTemplate);
            _binder.Bind(x => x.Options.MethodTemplate).To(testHarnessMethodTemplate);

            findFileName.Click += (x, y) => OpenFileDialogAndBindToInput(fileName);
            findTestFolder.Click += (x, y) => OpenFolderBrowserDialogAndBindToInput(testFolder);
            findBinaryFolder.Click += (x, y) => OpenFolderBrowserDialogAndBindToInput(binaryFolder);
            findConfigurationFile.Click += (x, y) => OpenFileDialogAndBindToInput(configurationFile);
            findFixtureAssembly.Click += (x, y) => OpenFileDialogAndBindToInput(fixtureAssembly);
            findTestHarnessFile.Click += (x, y) => OpenFileDialogAndBindToInput(testHarnessFileName);
        }

        public ProjectScreen(IFileDialogPicker fileDialogPicker, IDirectoryDialogPicker folderDialogPicker)
            : this()
        {
            _fileDialogPicker = fileDialogPicker;
            _folderDialogPicker = folderDialogPicker;
        }

        public Button FindFileName { get { return findFileName; } }
        public Button FindTestFolder { get { return findTestFolder; } }
        public Button FindBinaryFolder { get { return findBinaryFolder; } }
        public Button FindConfigurationFile { get { return findConfigurationFile; } }

        public void BindTo(Project project)
        {
            _binder.BindToModel(project);
        }

        public void ShowErrorMessages(ProjectValidationMessages notification)
        {
            validation.ShowMessages(notification);
        }

        private void OpenFileDialogAndBindToInput(TextBox textBox)
        {
            if (_fileDialogPicker.ShowDialog() == DialogResult.OK)
            {
                textBox.Text = _fileDialogPicker.Selection;
                _binder.ApplyChangesToModel();
            }
        }

        private void OpenFolderBrowserDialogAndBindToInput(TextBox textBox)
        {
            if (_folderDialogPicker.ShowDialog() == DialogResult.OK)
            {
                textBox.Text = _folderDialogPicker.Selection;
                _binder.ApplyChangesToModel();
            }
        }
    }
}