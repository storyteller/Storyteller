using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Serialization;
using FubuCore;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Persistence;

namespace StoryTeller.Workspace
{
    public class Project : IProject
    {
        private string _fileName;
        private string _projectFolder;
        private int _timeoutInSeconds;
        private string _binaryFolder;
        private string _testFolder = "Tests";

        public Project()
        {
            TimeoutInSeconds = 60;
            Options = new CodegenOptions();

            CompileTarget = "debug";
        }

        public Project(string filename)
            : this()
        {
            FileName = filename;
        }

        public CodegenOptions Options { get; set; }

        public string GetTargetFile()
        {
            return getCorrectPath(Options.TargetFile);
        }


        public string FixtureAssembly { get; set; }

        public string BinaryFolder
        {
            get { return _binaryFolder; }
            set { _binaryFolder = value; }
        }

        public string Profile { get; set; }
        public int NumberOfTestRetries { get; set; }

        public string TestFolder
        {
            get { return _testFolder ?? "Tests"; }
            set { _testFolder = value; }
        }

        public string CompileTarget { get; set; }

        public static IProject Current { get; set; }


        [XmlIgnore]
        public string ProjectFolder
        {
            get
            {
                if (_projectFolder.IsEmpty()) return Path.GetFullPath(".");

                return _projectFolder;
            }
            set
            {
                _projectFolder = value;
                if (!Path.IsPathRooted(_projectFolder) && _projectFolder.IsNotEmpty())
                {
                    _projectFolder = Path.GetFullPath(_projectFolder);
                }

                if (_projectFolder.IsEmpty())
                {
                    _projectFolder = Path.GetFullPath(".");
                }
            }
        }

        #region IProject Members

        public string FileName
        {
            get { return _fileName; }
            set
            {
                _fileName = value;
                _projectFolder = Path.GetDirectoryName(_fileName);
            }
        }

        public int TimeoutInSeconds
        {
            get { return _timeoutInSeconds > 0 ? _timeoutInSeconds : 5; }
            set { _timeoutInSeconds = value; }
        }

        public string SystemTypeName { get; set; }
        public string Name { get; set; }

        public string ConfigurationFileName { get; set; }


        public string GetBinaryFolder()
        {
            var folder = _binaryFolder.IsNotEmpty() ? _binaryFolder : Path.Combine("bin", CompileTarget ?? "debug");

            return getCorrectPath(folder);
        }

        public Hierarchy LoadTests()
        {
            var hierarchy = new Hierarchy(this);

            new HierarchyLoader(GetTestFolder(), hierarchy, this).Load();

            return hierarchy;
        }

        public void Save(Test test)
        {
            var path = GetTestPath(test);
            new TestWriter().WriteToFile(test, path);
        }

        public void DeleteFile(Test test)
        {
            var path = GetTestPath(test);
            if (File.Exists(path))
            {
                File.Delete(path);
            }
        }

        public void RenameTest(Test test, string name)
        {
            DeleteFile(test);
            test.Name = name;
            Save(test);
        }

        public ITestRunner LocalRunner()
        {
            var type = Type.GetType(SystemTypeName);
            var runner = Activator.CreateInstance(type).As<ITestRunner>();

            return runner;
        }

        public void CreateDirectory(Suite suite)
        {
            var path = Path.Combine(GetTestFolder(), suite.GetFolder());
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
        }

        #endregion

        public static Project LoadFromFile(string filename)
        {
            if (!File.Exists(filename))
            {
                throw new FileNotFoundException("Could not locate designated Project File", filename);
            }

            var fileSystem = new FileSystem();
            var project = fileSystem.LoadFromFile<Project>(filename);
            project.ProjectFolder = Path.GetDirectoryName(filename);
            project.FileName = filename;

            return project;
        }

        public string GetTestFolder()
        {
            return getCorrectPath(TestFolder);
        }

        public string GetBaseProjectFolder()
        {
            if (String.IsNullOrEmpty(_fileName))
            {
                return String.Empty;
            }

            return Path.GetDirectoryName(_fileName);
        }

        private string getCorrectPath(string folder)
        {
            var path = getRootPath(folder);
            if (path.EndsWith("debug", StringComparison.OrdinalIgnoreCase) && !Directory.Exists(path))
            {
                path = Path.Combine(path.Substring(0, path.Length - 5), "release");
            }

            return path;
        }

        private string getRootPath(string folder)
        {
            if (folder.IsEmpty()) return String.Empty;

            if (Path.IsPathRooted(folder))
            {
                return folder;
            }


            var projectFolder = Path.IsPathRooted(ProjectFolder)
                ? ProjectFolder
                : Path.GetFullPath(ProjectFolder);


            var path = Path.Combine(projectFolder, folder);
            return Path.GetFullPath(path);
        }

        public void Save(string filename)
        {
            FileName = filename;
            new FileSystem().PersistToFile(this, filename);
        }

        public string GetTestPath(Test test)
        {
            var fileName = test.FileName;
            return Path.Combine(GetTestFolder(), fileName);
        }

        public ProjectValidationMessages Validate()
        {
            var messages = new ProjectValidationMessages();

            if (TestFolder.IsEmpty())
            {
                messages.Messages.Add("Test Folder must be specified");
            }
            else if (!Directory.Exists(GetTestFolder()))
            {
                messages.Messages.Add("Test Folder '{0}' does not exist".ToFormat(GetTestFolder()));
            }

            if (BinaryFolder.IsEmpty())
            {
                messages.Messages.Add("Binary Folder must be specified");
            }
            else if (!Directory.Exists(GetBinaryFolder()))
            {
                messages.Messages.Add("Binary Folder '{0}' does not exist".ToFormat(GetBinaryFolder()));
            }

            if (FixtureAssembly.IsEmpty() && SystemTypeName.IsEmpty())
            {
                messages.Messages.Add("Either Fixture Assembly or System Type Name needs to be specified");
            }

            if (Name.IsEmpty())
            {
                messages.Messages.Add("Name is required");
            }

            if (FileName.IsEmpty())
            {
                messages.Messages.Add("File Name is required");
            }

            return messages;
        }

        public static Project ForDirectory(string directory)
        {
            var project = new Project
            {
                ProjectFolder = directory,
                Name = Path.GetFileName(directory)
            };

            var fileSystem = new FubuCore.FileSystem();
            var files = fileSystem.FindFiles(directory, FileSet.Shallow("*.config"));
            var candidates = files.Where(x => Path.GetFileName(x).EqualsIgnoreCase("App.config") || Path.GetFileName(x).EqualsIgnoreCase("Web.config"));
            if (candidates.Any())
            {
                project.ConfigurationFileName = candidates.First().ToFullPath();
            }
            else
            {
                var possibleFile = Path.GetFileName(directory) + ".dll.config";
                candidates = fileSystem.FindFiles(directory, FileSet.Deep(possibleFile));
                if (candidates.Any())
                {
                    project.ConfigurationFileName = candidates.First().ToFullPath();
                }
            }


            // Auto-find the config file here.


            return project;
        }

    }

    public class ProjectValidationMessages
    {
        public ProjectValidationMessages()
        {
            Messages = new List<string>();
        }

        public IList<string> Messages { get; private set; }

        public bool IsValid
        {
            get { return !Messages.Any(); }
        }
    }
}