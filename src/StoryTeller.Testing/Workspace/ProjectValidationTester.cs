using NUnit.Framework;
using StoryTeller.Workspace;
using System.Linq;
using FubuCore;

namespace StoryTeller.Testing.Workspace
{
    [TestFixture]
    public class ProjectValidationTester
    {
        private Project project;

        [SetUp]
        public void SetUp()
        {
            project = DataMother.MathProject();
        }


        [Test]
        public void fail_validation_if_the_binary_folder_does_not_exist()
        {
            var path = "c:\\SomethingWrong";
            if (Platform.IsUnix ()) {
                path = "/tmp/SomethingWrong";
            }
            project.BinaryFolder = path;

            project.Validate().Messages.ShouldHaveTheSameElementsAs("Binary Folder '{0}' does not exist".ToFormat(path));
        }

        [Test]
        public void fail_validation_if_the_binary_folder_is_blank()
        {
            project.BinaryFolder = "";

            project.Validate().Messages.ShouldHaveTheSameElementsAs("Binary Folder must be specified");
        }

        [Test]
        public void fail_validation_if_the_test_folder_is_blank()
        {
            project.TestFolder = "";

            project.Validate().Messages.ShouldHaveTheSameElementsAs("Test Folder must be specified");
        }

        [Test]
        public void fail_validation_if_the_test_folder_cannot_be_found()
        {
            var path = "c:\\SomethingWrong";
            if (Platform.IsUnix ()) {
                path = "/tmp/SomethingWrong";
            }
            project.TestFolder = path;

            project.Validate().Messages.ShouldHaveTheSameElementsAs("Test Folder '{0}' does not exist".ToFormat(path));
        }

        [Test]
        public void successful_validation_case()
        {
            project.Validate().Messages.Any().ShouldBeFalse();
        }


        [Test]
        public void neither_system_nor_fixture_assembly_are_specified()
        {
            project.FixtureAssembly = null;
            project.SystemTypeName = null;

            project.Validate().Messages.ShouldHaveTheSameElementsAs("Either Fixture Assembly or System Type Name needs to be specified");
        }

        [Test]
        public void fixture_is_specified_but_not_system_still_valid()
        {
            project.FixtureAssembly = "something";
            project.SystemTypeName = null;

            project.Validate().IsValid.ShouldBeTrue();
        }

        [Test]
        public void fixture_assembly_is_not_specified_by_system_is()
        {
            project.FixtureAssembly = null;
            project.SystemTypeName = "something";

            project.Validate().IsValid.ShouldBeTrue();
        }

        [Test]
        public void name_is_missing()
        {
            project.Name = null;

            project.Validate().Messages.ShouldHaveTheSameElementsAs("Name is required");
        }

    }
}