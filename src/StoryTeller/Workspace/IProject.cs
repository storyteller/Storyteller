using System;
using System.Collections.Generic;
using System.Xml.Serialization;
using StoryTeller.Codegen;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Workspace
{
    public interface IProject
    {
        string Name { get; set; }
        string FileName { get; }
        string ConfigurationFileName { get; set; }
        string SystemTypeName { get; set; }
        int TimeoutInSeconds { get; set; }
        string FixtureAssembly { get; set; }
        string GetBinaryFolder();
        Hierarchy LoadTests();
        void Save(Test test);
        void DeleteFile(Test test);
        void RenameTest(Test test, string name);

        ITestRunner LocalRunner();
        void CreateDirectory(Suite suite);

        CodegenOptions Options { get; }

        [XmlIgnore]
        string ProjectFolder { get; set; }

        string GetTargetFile();
    }

    public class CodegenOptions
    {
        public CodegenOptions()
        {
            FileTemplate = ProjectRunnerCodegenService.DefaultFileTemplate();
            MethodTemplate = ProjectRunnerCodegenService.DefaultMethodTemplate();
            TargetFile = "StoryTellerDebug.cs";
        }

        public string FileTemplate { get; set; }
        public string MethodTemplate { get; set; }
        public string TargetFile { get; set; }
    }


}