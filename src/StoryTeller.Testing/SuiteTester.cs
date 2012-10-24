using System.Linq;
using NUnit.Framework;
using StoryTeller.Domain;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class SuiteTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void adding_a_suite_makes_the_parent_to_child_relationship()
        {
            var parent = new Suite("parent");
            var child = new Suite("child");

            parent.AddSuite(child);

            child.Parent.ShouldBeTheSameAs(parent);

            parent.Contains(child).ShouldBeTrue();
        }

        [Test]
        public void adding_a_test_to_a_suite_sets_the_suite_as_the_tests_parent()
        {
            var suite = new Suite("Suite 1");
            var test = new Test("Test 1");

            suite.AddTest(test);

            test.Parent.ShouldEqual(suite);
            suite.Contains(test).ShouldBeTrue();
        }

        [Test]
        public void contains_works_n_deep()
        {
            Hierarchy hierarchy =
                DataMother.BuildHierarchy(
                    @"
t1,Success
t2,Failure
t3,Success
s1/t4,Success
s1/t5,Success
s1/t6,Failure
s1/s2/t7,Success
s1/s2/t8,Failure
s1/s2/s3/t9,Success
s1/s2/s3/t10,Success
s1/s2/s3/s4/t11,Success
s5/t12,Success
s5/s6/t13,Success
s5/s6/s7/t14,Success
s5/s6/s7/s8/t15,Success
");

            Test test = hierarchy.FindTest("s1/s2/s3/s4/t11");
            hierarchy.Contains(test).ShouldBeTrue();
            hierarchy.FindSuite("s1").Contains(test).ShouldBeTrue();
            hierarchy.FindSuite("s1/s2").Contains(test).ShouldBeTrue();
            hierarchy.FindSuite("s1/s2/s3").Contains(test).ShouldBeTrue();
            hierarchy.FindSuite("s1/s2/s3/s4").Contains(test).ShouldBeTrue();

            hierarchy.FindSuite("s5").Contains(test).ShouldBeFalse();
            hierarchy.FindSuite("s5/s6").Contains(test).ShouldBeFalse();
            hierarchy.FindSuite("s5/s6/s7").Contains(test).ShouldBeFalse();
        }

        [Test]
        public void find_test_recursive()
        {
            var test = new Test("some name");

            Suite top =
                new Suite("top").Add(x => { x.Suite("child").Add(o => { o.Suite("grandchild").AddTest(test); }); });

            top.FindTest("child/grandchild/some name").ShouldBeTheSameAs(test);
        }

        [Test]
        public void get_all_tests_n_deep()
        {
            Hierarchy hierarchy =
                DataMother.BuildHierarchy(
                    @"
t1,Success
t2,Failure
t3,Success
s1/t4,Success
s1/t5,Success
s1/t6,Failure
s1/s2/t7,Success
s1/s2/t8,Failure
s1/s2/s3/t9,Success
s1/s2/s3/t10,Success
s1/s2/s3/s4/t11,Success
s5/t12,Success
s5/s6/t13,Success
s5/s6/s7/t14,Success
s5/s6/s7/s8/t15,Success
s9/t16,Success
s9/t17,Success
s9/t18,Success
");

            hierarchy.GetAllTests().Count().ShouldEqual(18);
            hierarchy.FindSuite("s1").GetAllTests().Count().ShouldEqual(8);
            hierarchy.FindSuite("s5/s6").GetAllTests().Count().ShouldEqual(3);
        }

        [Test]
        public void get_path_if_has_suite_parent()
        {
            var top = new Suite("top");
            var child = new Suite("child");
            top.AddSuite(child);

            child.GetPath().Locator.ShouldEqual("top/child");
        }

        [Test]
        public void get_path_if_no_parent()
        {
            var suite = new Suite("suite1");
            suite.GetPath().Locator.ShouldEqual("suite1");
        }

        [Test]
        public void get_path_with_hierarchy_at_top()
        {
            var hierarchy = new Hierarchy("hier");
            hierarchy.AddTest("s1/s2/s3/t1");

            hierarchy.FindSuite("s1/s2/s3").GetPath().Locator.ShouldEqual("s1/s2/s3");
            hierarchy.FindSuite("s1/s2").GetPath().Locator.ShouldEqual("s1/s2");
            hierarchy.FindSuite("s1").GetPath().Locator.ShouldEqual("s1");
        }

        [Test]
        public void get_project_name()
        {
            var hierarchy = new Hierarchy("hier");
            hierarchy.AddTest("s1/s2/s3/t1");

            Suite suite = hierarchy.FindSuite("s1/s2/s3");
            suite.GetProjectName().ShouldEqual(hierarchy.Name);
        }
    }
}