using System;
using FubuCore;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Workspace;

namespace StoryTeller.Testing
{
    using System.Collections.Generic;

    [TestFixture]
    public class TestTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void absorb_changes()
        {
            var test1 = new Test("test1", x =>
            {
                x.AddComment("text");
                x.Section("grammar1");
                x.Section("grammar2");
            });

            var test2 = new Test("test2", x => { x.AddComment("different text"); });

            test1.ApplyChanges(test2);

            test1.Parts.ShouldHaveTheSameElementsAs<ITestPart>(test2.Parts);
        }


        [Test]
        public void add_comment()
        {
            var test = new Test("some test");

            test.AddComment("some text");
            test.Parts[0].ShouldBeOfType<Comment>().Text.ShouldEqual("some text");
        }

        [Test]
        public void clone_a_test()
        {
            var test1 = new Test("test1", x =>
            {
                x.AddComment("text");
                x.Section("grammar1");
                x.Section("grammar2");
            });

            Test test2 = test1.Clone("test2");

            test2.ShouldNotBeNull();
            test2.Name.ShouldEqual("test2");
            test2.Parts.Count.ShouldEqual(3);
        }


        [Test]
        public void get_path_under_a_hierarchy()
        {
            var hierarchy = new Hierarchy("project");
            hierarchy.AddTest("t1");
            hierarchy.AddTest("s1/t1");
            hierarchy.AddTest("s1/s2/t1");
            hierarchy.AddTest("s1/s2/s3/t1");

            hierarchy.FindTest("t1").GetPath().Locator.ShouldEqual("t1");
            hierarchy.FindTest("s1/t1").GetPath().Locator.ShouldEqual("s1/t1");
            hierarchy.FindTest("s1/s2/t1").GetPath().Locator.ShouldEqual("s1/s2/t1");
            hierarchy.FindTest("s1/s2/s3/t1").GetPath().Locator.ShouldEqual("s1/s2/s3/t1");
        }

        [Test]
        public void is_in_workspace()
        {
            var hierarchy = new Hierarchy("project");
            hierarchy.AddTest("s1/t1");
            hierarchy.AddTest("s1/s2/t2");
            hierarchy.AddTest("s1/s2/s3/t3");

            var test = hierarchy.FindTest("s1/t1");
            test.IsInWorkspace("s1").ShouldBeTrue();
            test.IsInWorkspace("s2").ShouldBeFalse();
            test.IsInWorkspace("s3").ShouldBeFalse();

            var test2 = hierarchy.FindTest("s1/s2/t2");
            test2.IsInWorkspace("s1").ShouldBeTrue();
            test2.IsInWorkspace("s2").ShouldBeFalse();
            test2.IsInWorkspace("s3").ShouldBeFalse();

            var test3 = hierarchy.FindTest("s1/s2/s3/t3");
            test3.IsInWorkspace("s1").ShouldBeTrue();
            test3.IsInWorkspace("s2").ShouldBeFalse();
            test3.IsInWorkspace("s3").ShouldBeFalse();
        }

        [Test]
        public void get_path_with_parent()
        {
            var suite = new Suite("s1");
            var test = new Test("t1");

            suite.AddTest(test);

            test.GetPath().Locator.ShouldEqual("s1/t1");
        }

        [Test]
        public void get_path_without_a_parent()
        {
            var test = new Test("t1");
            test.GetPath().Locator.ShouldEqual("t1");
        }

        [Test]
        public void get_status_for_a_successful_test()
        {
            var test = new Test("name")
            {
                LastResult = new TestResult()
                {
                    ExecutionTime = 1.23,
                    Counts = new Counts()
                    {
                        Rights = 1
                    }
                }
            };

            test.GetStatus().ShouldEqual("Succeeded with {0} in 1.23 seconds".ToFormat(test.LastResult.Counts));
        }

        [Test]
        public void get_status_on_a_failed_test()
        {
            var test = new Test("name");
            test.LastResult = new TestResult
            {
                ExecutionTime = 2.34,
                Counts = new Counts()

            };
            test.LastResult.Counts.IncrementWrongs();

            test.GetStatus().ShouldEqual("Failed with {0} in 2.34 seconds".ToFormat(test.LastResult.Counts));
        }

        [Test]
        public void get_status_without_a_result()
        {
            new Test("asdfkj").GetStatus().ShouldBeEmpty();
        }

        [Test]
        public void is_empty_with_no_sections()
        {
            new Test("1").IsEmpty().ShouldBeTrue();
        }

        [Test]
        public void is_empty_with_some_sections()
        {
            new Test("1").With(new Section("Math")).IsEmpty().ShouldBeFalse();
        }

        [Test]
        public void lifecycle_is_acceptance_by_default()
        {
            new Test("name").Lifecycle.ShouldEqual(Lifecycle.Acceptance);
        }

        [Test]
        public void reset_clears_out_the_last_result()
        {
            var test = new Test("something")
            {
                LastResult = new TestResult()
            };

            test.Reset();

            test.LastResult.ShouldBeNull();
        }

        [Test]
        public void reset_sets_the_execution_time_to_zero()
        {
            var test = new Test("some test");
            test.LastResult = new TestResult
            {
                ExecutionTime = 234
            };

            test.Reset();
            test.LastResult.ShouldBeNull();
        }

        [Test]
        public void toggle_the_lifecycle_from_acceptance()
        {
            Test test = new Test("some test").LifecycleIs(Lifecycle.Acceptance);
            test.Toggle();

            test.Lifecycle.ShouldEqual(Lifecycle.Regression);
        }

        [Test]
        public void toggle_the_lifecycle_from_initial_state()
        {
            var test = new Test("some test");
            test.Toggle();

            test.Lifecycle.ShouldEqual(Lifecycle.Regression);
        }

        [Test]
        public void toggle_the_lifecycle_from_regression()
        {
            Test test = new Test("some test").LifecycleIs(Lifecycle.Regression);
            test.Toggle();

            test.Lifecycle.ShouldEqual(Lifecycle.Acceptance);
        }

        [Test]
        public void use_filename_derived_from_test_name_if_the_filename_is_not_supplied()
        {
            var test = new Test("asdf");
            test.FileName.ShouldEqual("asdf.xml");
        }

        [Test]
        public void use_filename_derived_from_test_name_if_the_filename_is_not_supplied_and_replaces_spaces()
        {
            var test = new Test("asdf else");
            test.FileName.ShouldEqual("asdf_else.xml");
        }

        [Test]
        public void use_saved_filename_if_it_exists()
        {
            var test = new Test("asdf")
            {
                FileName = "Test 001.xml"
            };
            test.FileName.ShouldEqual("Test 001.xml");
        }

        [Test]
        public void Adding_tags_should_add_to_existing_tags()
        {
            Test test = new Test("test");
            List<string> tags = new List<string> { "tagged", "another" };
            tags.ForEach(x => test.AddTags(x));
            tags.ForEach(tag => test.GetTags().AllTags.Contains(tag));
        }

    }
}