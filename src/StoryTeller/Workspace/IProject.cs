using System;
using System.Collections.Generic;
using System.Xml.Serialization;
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
        string CompileTarget { get; set; }

        ITestRunner LocalRunner();
        void CreateDirectory(Suite suite);

        [XmlIgnore]
        string ProjectFolder { get; set; }

        string Profile { get; set; }

        string GetTestFolder();
    }



}