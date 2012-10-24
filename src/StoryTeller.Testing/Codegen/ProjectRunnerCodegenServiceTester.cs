using System.Diagnostics;
using NUnit.Framework;
using StoryTeller.Codegen;
using StoryTeller.Domain;
using StoryTeller.Workspace;

namespace StoryTeller.Testing.Codegen
{
    [TestFixture]
    public class ProjectRunnerCodegenServiceTester
    {
        [Test]
        public void can_get_default_class_template()
        {
            ProjectRunnerCodegenService.DefaultFileTemplate().ShouldNotBeNull();
        }

        [Test]
        public void can_get_default_method_template()
        {
            ProjectRunnerCodegenService.DefaultMethodTemplate().ShouldNotBeNull();
        }

        
    }

    [TestFixture]
    public class when_generating_a_single_test_method_with_default_text
    {
        private Project project;
        private Test theTest;
        private string methodText;

        [SetUp]
        public void SetUp()
        {
            project = new Project(@"c:\myfolder\myfile.xml")
            {
                
            };

            var service = new ProjectRunnerCodegenService(project);

            var hierarchy = DataMother.BuildHierarchy(@"
ws1/suite1/test1 is good,Success
");

            theTest = hierarchy.FindTest("ws1/suite1/test1 is good");

            methodText = service.GenerateMethod(theTest);
        }

        [Test]
        public void the_method_test_should_embed_the_test_name()
        {
            methodText.ShouldContain("runner.RunAndAssertTest(\"ws1/suite1/test1 is good\");");
        }

        [Test]
        public void the_method_test_should_be_named_a_sanitized_version_of_the_test_name()
        {
            methodText.ShouldContain("public void test1_is_good()");
        }
    }

    [TestFixture]
    public class when_generating_a_test_harness_class
    {
        private Project project;
        private Test theTest;
        private string classText;
        private ProjectRunnerCodegenService _service;

        [SetUp]
        public void SetUp()
        {
            project = new Project(@"c:\myfolder\myfile.xml")
            {

            };

            _service = new ProjectRunnerCodegenService(project);

            var hierarchy = DataMother.BuildHierarchy(@"
ws1/suite1/test1 is good,Success
");

            theTest = hierarchy.FindTest("ws1/suite1/test1 is good");

            classText = _service.GenerateClass(theTest);          
        }

        [Test]
        public void the_project_file_should_be_in_the_setup()
        {
            classText.ShouldContain(@"c:\myfolder\myfile.xml");
        }

        [Test]
        public void should_contain_the_method_for_the_test()
        {
            classText.ShouldContain(_service.GenerateMethod(theTest));
        }


    }
}