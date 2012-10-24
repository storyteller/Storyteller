using System;
using System.Collections.Generic;
using System.IO;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Workspace
{
    public class ResultPersistor : IResultPersistor
    {
        public static string FileNameFor(Test test)
        {
            string locator = test.GetPath().Locator;
            return FileNameFor(locator);
        }

        public static string FileNameFor(string locator)
        {
            return locator.Replace("/", ".").Replace(" ", "_") + ".stresult";
        }

        public void SaveResult(IProject project, Test test, TestResult result)
        {
            string folder = folderFor(project);

            SaveResult(result, test, folder);
        }

       public static void SaveResult(TestResult result, Test test, string folder)
        {
            result.Locator = test.GetPath().Locator;
            
            var fileSystem = new FileSystem();
            fileSystem.CreateDirectory(folder);

            var filename = Path.Combine(folder, FileNameFor(test));

            
            fileSystem.PersistToFile(result, filename);
        }

        private string folderFor(IProject project)
        {
            return Path.Combine(project.ProjectFolder, project.Name + "-results"); 
        }

        public ResultHistory LoadResults(IProject project)
        {
            return LoadResults(folderFor(project));
        }

        public ResultHistory LoadResults(string directory)
        {
            var history = new ResultHistory();
            var system = new FileSystem();
            system.GetFiles(directory, "stresult").Each(f =>
            {
                var result = system.LoadFromFile<TestResult>(f);
                history[result.Locator] = result;
            });

            return history;
        }

        public void ClearResults(IProject project)
        {
            new FileSystem().DeleteFolder(folderFor(project));
        }

        public void SaveResultsToDirectory(ResultHistory theResults, string directory)
        {
            var system = new FileSystem();
            system.ClearFolder(directory);

            theResults.Each((path, result) =>
            {
                result.Locator = path;
                string filename = FileNameFor(path);
                filename = Path.Combine(directory, filename);
                system.PersistToFile(result, filename);
            });
        }
    }
}