using System.Windows.Forms;

namespace StoryTeller.UserInterface.Projects
{
    public interface IFileDialogPicker : IFileSystemDialogPicker
    {
        string Filter { get; set; }
    }

    public interface IDirectoryDialogPicker : IFileSystemDialogPicker
    {
    }

    public interface IFileSystemDialogPicker
    {
        string Selection { get; }
        DialogResult ShowDialog();        
    }

    public class FileDialogPicker : IFileDialogPicker
    {
        private readonly OpenFileDialog _dialog;
        public const string XML_FILE_FILTER = "Xml files (*.xml)|*.xml";

        public FileDialogPicker()
        {
            _dialog = new OpenFileDialog();
        }

        public DialogResult ShowDialog()
        {
            _dialog.CheckFileExists = false;
            _dialog.CheckPathExists = true;
            if(Filter != null)
            {
                _dialog.Filter = Filter;
            }
            var result = _dialog.ShowDialog();
            Filter = null;
            return result;
        }

        public string Selection { get { return _dialog.FileName; } }
        public string Filter { get;  set;}
    }

    public class DirectoryDialogPicker : IDirectoryDialogPicker
    {
        private readonly FolderBrowserDialog _dialog;

        public DirectoryDialogPicker()
        {
            _dialog = new FolderBrowserDialog();
        }

        public DialogResult ShowDialog()
        {
            return _dialog.ShowDialog();
        }

        public string Selection { get { return _dialog.SelectedPath; } }
    }
}