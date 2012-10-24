using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using StoryTeller.Domain;
using StoryTeller.Workspace;
using FubuCore;
using System.Linq;
using FileSystem = StoryTeller.Workspace.FileSystem;

namespace StoryTeller.Codegen
{
    public class ProjectRunnerCodegenService
    {
        private readonly IProject _project;
        public static readonly string CLEAN_TEST_NAME = "$CLEAN_TEST_NAME$";
        public static readonly string TEST_PATH = "$TEST_PATH$";
        public static readonly string PROJECT_FILE = "$PROJECT_FILE$";
        public static readonly string METHODS = "$METHODS$";
        private CodegenOptions _options;

        public ProjectRunnerCodegenService(IProject project)
        {
            _project = project;
            _options = project.Options ?? new CodegenOptions();
        }

        public static string DefaultFileTemplate()
        {
            var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(
                typeof (ProjectRunnerCodegenService), "ClassTemplate.txt");

            var reader = new StreamReader(stream);
            return reader.ReadToEnd();
        }

        public static string DefaultMethodTemplate()
        {
            var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(
                typeof(ProjectRunnerCodegenService), "MethodTemplate.txt");

            var reader = new StreamReader(stream);
            return reader.ReadToEnd();
        }

        public string GenerateMethod(Test test)
        {
            var methodText = _options.MethodTemplate;
            if (methodText.IsEmpty())
            {
                methodText = DefaultMethodTemplate();
            }

            methodText = methodText.Replace(TEST_PATH, test.GetPath().Locator);
            var sanitizedName = test.Name.Replace(" ", "_");

            return methodText.Replace(CLEAN_TEST_NAME, sanitizedName);
        }

        public string GenerateClass(Test test)
        {
            return GenerateClass(new Test[] {test});
        }

        public string GenerateClass(IEnumerable<Test> tests)
        {
            var classText = _options.FileTemplate;
            if (classText.IsEmpty())
            {
                classText = DefaultFileTemplate();
            }

            classText = classText.Replace(PROJECT_FILE, _project.FileName);

            var methods = tests.Select(x => GenerateMethod(x)).Join(Environment.NewLine + Environment.NewLine);
            return classText.Replace(METHODS, methods);
        }

        public void GenerateFile(IEnumerable<Test> tests)
        {
            var classText = GenerateClass(tests);
            new FileSystem().WriteStringToFile(classText, _project.GetTargetFile());
        }
    }
}