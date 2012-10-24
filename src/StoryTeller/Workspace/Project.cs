using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Serialization;
using FubuCore;
using FubuCore.Util;
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

        public Project()
        {
            TimeoutInSeconds = 60;
            Options = new CodegenOptions();

            TestFolder = "Tests";
            BinaryFolder = Path.Combine("bin","debug");
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
        public string BinaryFolder { get; set; }
        public int NumberOfTestRetries { get; set; }
        public string TestFolder { get; set; }

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

        public int TimeoutInSeconds { get { return _timeoutInSeconds > 0 ? _timeoutInSeconds : 5; } set { _timeoutInSeconds = value; } }

        public string SystemTypeName { get; set; }
        public string Name { get; set; }

        public string ConfigurationFileName { get; set; }


        public string GetBinaryFolder()
        {
            return getCorrectPath(BinaryFolder);
        }

        public Hierarchy LoadTests()
        {
            var hierarchy = new Hierarchy(this);

            new HierarchyLoader(GetTestFolder(), hierarchy, this).Load();

            return hierarchy;
        }

        public void Save(Test test)
        {
            string path = GetTestPath(test);
            new TestWriter().WriteToFile(test, path);
        }

        public void DeleteFile(Test test)
        {
            string path = GetTestPath(test);
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
            Type type = Type.GetType(SystemTypeName);
            var runner = Activator.CreateInstance(type).As<ITestRunner>();

            return runner;
        }

        public void CreateDirectory(Suite suite)
        {
            string path = Path.Combine(GetTestFolder(), suite.GetFolder());
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
            if (string.IsNullOrEmpty(_fileName))
            {
                return string.Empty;
            }

            return Path.GetDirectoryName(_fileName);
        }

        private string getCorrectPath(string folder)
        {

            if (folder.IsEmpty()) return string.Empty;

            if (Path.IsPathRooted(folder))
            {
                return folder;
            }


            string projectFolder = Path.IsPathRooted(ProjectFolder)
                                       ? ProjectFolder
                                       : Path.GetFullPath(ProjectFolder);


            string path = Path.Combine(projectFolder, folder);
            return Path.GetFullPath(path);
        }

        public void Save(string filename)
        {
            FileName = filename;
            new FileSystem().PersistToFile(this, filename);
        }

        public string GetTestPath(Test test)
        {
            string fileName = test.FileName;
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
            get
            {
                return !Messages.Any();
            }
        }
    }
}