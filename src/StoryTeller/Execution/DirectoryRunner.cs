using System;
using System.Collections.Generic;
using System.IO;
using FubuCore;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Persistence;
using FileSystem = StoryTeller.Persistence.FileSystem;
using IFileSystem = StoryTeller.Persistence.IFileSystem;

namespace StoryTeller.Execution
{
    public class DirectoryRunner : IBatchListener
    {
        private readonly ITestReader _reader;
        private readonly ITestRunner _runner;
        private readonly DirectoryRunnerSetup _setup;
        private readonly IResultsSummary _summary;
        private readonly IFileSystem _system;


        public DirectoryRunner(ITestRunner runner, DirectoryRunnerSetup setup)
            : this(runner, new TestReader(), new ResultsSummary(), new FileSystem(), setup)
        {
        }

        public DirectoryRunner(ITestRunner runner, ITestReader reader, IResultsSummary summary, IFileSystem system,
                               DirectoryRunnerSetup setup)
        {
            _runner = runner;
            _reader = reader;
            _summary = summary;
            _system = system;
            _setup = setup;
        }

        #region IBatchListener Members

        public void StartingTest(Test test)
        {
            Console.WriteLine("Starting Test {0} \\ {1}", test.Name, test.SuiteName);
        }

        public void FinishedTest(Test test)
        {
            Console.WriteLine("Finished with {0}", test.LastResult.Counts);

            string resultFile = Path.Combine(_setup.ResultsFolder, test.SuiteName);
            if (!Directory.Exists(resultFile))
            {
                Directory.CreateDirectory(resultFile);
            }
            
            resultFile = Path.Combine(resultFile, test.Name + "-results.htm");



            test.WriteResultsToFile(resultFile);
            _summary.AddTest(test, resultFile);
        }

        #endregion

        public void RunAllTests()
        {
            _system.DeleteFolder(_setup.ResultsFolder);
            _system.CreateFolder(_setup.ResultsFolder);

            List<Test> tests = LoadAllTests();
            _summary.Start("All Tests in {0}".ToFormat(_setup.TestFolder), DateTime.Now);
            _runner.RunTests(tests, this);
            _summary.WriteFile(_setup.ResultsFile);
        }

        public virtual List<Test> LoadAllTests()
        {
            var tests = new List<Test>();

            foreach (string file in _system.GetFiles(_setup.TestFolder, "xml"))
            {
                Test test = _reader.ReadFromFile(file);
                test.SuiteName = string.Empty;

                tests.Add(test);
            }

            foreach (string subFolder in _system.GetSubFolders(_setup.TestFolder))
            {
                loadTestsInFolder(subFolder, "", tests);
            }

            return tests;
        }

        private void loadTestsInFolder(string folder, string parentSuite, List<Test> tests)
        {
            string folderName = Path.GetFileName(folder);
            string suite = parentSuite.IsNotEmpty() ? Path.Combine(parentSuite, folderName) : folderName;

            foreach (string file in _system.GetFiles(folder, "xml"))
            {
                Test test = _reader.ReadFromFile(file);
                test.SuiteName = suite;

                tests.Add(test);
            }

            // load the tests from the sub folders
            foreach (string subFolder in _system.GetSubFolders(folder))
            {
                loadTestsInFolder(subFolder, suite, tests);
            }
        }
    }
}