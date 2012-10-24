using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Workspace;
using System.Linq;
using System.Collections.Generic;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class HierarchyTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            hierarchy = new Hierarchy("some project");
        }

        #endregion

        private Hierarchy hierarchy;


        [Test]
        public void get_full_results_history_smoke_test()
        {
            var h = DataMother.MathProject().LoadTests();
            h.GetAllTests().Each(x => x.LastResult = new TestResult());

            var results = h.GetFullResults();

            h.GetAllTests().Each(x =>
            {
                results[x].ShouldBeTheSameAs(x.LastResult);
            });
        }

        [Test]
        public void verify_child_parent_relationships_smoke_test()
        {
            var h = DataMother.MathProject().LoadTests();
            h.GetAllTests().Each(x =>
            {
                Assert.IsNotNull(x.Parent);
                Assert.IsTrue(x.SuiteName.Contains(x.Parent.Name));
                if (x.Parent.Parent != null)
                {
                    Assert.IsTrue(x.SuiteName.Contains("/"));
                    Assert.IsTrue(x.SuiteName.Contains(x.Parent.Parent.Name));
                }
            });
        }

        [Test]
        public void add_test_by_one_deep_path()
        {
            Test test = hierarchy.AddTest("suite1/test1");
            test.Name.ShouldEqual("test1");
            hierarchy.FindSuite("suite1").FindTest("test1").ShouldBeTheSameAs(test);

            hierarchy.FindTest("suite1/test1").ShouldBeTheSameAs(test);
        }

        [Test]
        public void add_test_by_path_with_no_slashes()
        {
            Test test = hierarchy.AddTest("test1");

            test.Name.ShouldEqual("test1");
            hierarchy.Contains(test).ShouldBeTrue();
            hierarchy.ChildSuites.Length.ShouldEqual(0);
        }

        [Test]
        public void add_test_by_two_deep_path_twice()
        {
            Test test1 = hierarchy.AddTest("suite1/suite2/test1");
            Test test2 = hierarchy.AddTest("suite1/suite2/test2");

            hierarchy.FindTest("suite1/suite2/test1").ShouldBeTheSameAs(test1);
            hierarchy.FindTest("suite1/suite2/test2").ShouldBeTheSameAs(test2);

            hierarchy.FindSuite("suite1").FindSuite("suite2").FindTest("test1").ShouldBeTheSameAs(test1);
            hierarchy.FindSuite("suite1").FindSuite("suite2").FindTest("test2").ShouldBeTheSameAs(test2);
        }

        [Test]
        public void get_path_is_just_an_empty_string()
        {
            hierarchy.GetPath().Locator.ShouldBeEmpty();
        }

        [Test]
        public void find_all_workspaces_from_a_project()
        {
            hierarchy =
DataMother.BuildHierarchy(
@"
s1/t4,Success
s1/t5,Success
s1/t6,Failure
s1/s2/t7,Success
s1/s2/t8,Failure
s1/s2/s3/t9,Success
s1/s2/s3/t10,Success
s1/s2/s3/s4/t11,Success
s5/t12,Failure
s5/s6/t13,Success
s5/s6/s7/t14,Success
s5/s6/s7/s8/t15,Success
s9/t16,Success
s9/t17,Success
s9/t18,Failure
");

            var project = new Project();
            hierarchy.ChildSuites.Select(x => x.Name).ShouldHaveTheSameElementsAs("s1", "s5", "s9");

        }
    }
}