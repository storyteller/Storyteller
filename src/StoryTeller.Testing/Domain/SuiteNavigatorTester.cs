using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;

namespace StoryTeller.Testing.Domain
{
    [TestFixture]
    public class SuiteNavigatorTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            hierarchy =
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

            visitor = MockRepository.GenerateMock<IHierarchyVisitor>();
        }

        #endregion

        private IHierarchyVisitor visitor;
        private Hierarchy hierarchy;

        [Test]
        public void visit_with_a_suite_filter()
        {
            new SuiteNavigator
            {
                SuiteFilter = s => s.Name != "s2"
            }.Visit(hierarchy, visitor);

            visitor.TestWasVisited(hierarchy, "t1");
            visitor.TestWasVisited(hierarchy, "t2");
            visitor.TestWasVisited(hierarchy, "t3");
            visitor.TestWasVisited(hierarchy, "s1/t4");
            visitor.TestWasVisited(hierarchy, "s1/t5");
            visitor.TestWasVisited(hierarchy, "s1/t6");
            visitor.TestWasNotVisited(hierarchy, "s1/s2/t7");
            visitor.TestWasNotVisited(hierarchy, "s1/s2/t8");
            visitor.TestWasNotVisited(hierarchy, "s1/s2/s3/t9");
            visitor.TestWasNotVisited(hierarchy, "s1/s2/s3/t10");
            visitor.TestWasNotVisited(hierarchy, "s1/s2/s3/s4/t11");
            visitor.TestWasVisited(hierarchy, "s5/t12");
            visitor.TestWasVisited(hierarchy, "s5/s6/t13");
            visitor.TestWasVisited(hierarchy, "s5/s6/s7/t14");
            visitor.TestWasVisited(hierarchy, "s5/s6/s7/s8/t15");

            visitor.SuiteWasVisited(hierarchy, "s1");
            visitor.SuiteWasNotVisited(hierarchy, "s1/s2");
            visitor.SuiteWasNotVisited(hierarchy, "s1/s2/s3");
            visitor.SuiteWasNotVisited(hierarchy, "s1/s2/s3/s4");
            visitor.SuiteWasVisited(hierarchy, "s5");
            visitor.SuiteWasVisited(hierarchy, "s5/s6");
            visitor.SuiteWasVisited(hierarchy, "s5/s6/s7");
            visitor.SuiteWasVisited(hierarchy, "s5/s6/s7/s8");
        }

        [Test]
        public void visit_with_a_test_filter()
        {
            new SuiteNavigator
            {
                TestFilter = t => !t.Name.Contains("1")
            }.Visit(hierarchy, visitor);

            visitor.TestWasNotVisited(hierarchy, "t1");
            visitor.TestWasVisited(hierarchy, "t2");
            visitor.TestWasVisited(hierarchy, "t3");
            visitor.TestWasVisited(hierarchy, "s1/t4");
            visitor.TestWasVisited(hierarchy, "s1/t5");
            visitor.TestWasVisited(hierarchy, "s1/t6");
            visitor.TestWasVisited(hierarchy, "s1/s2/t7");
            visitor.TestWasVisited(hierarchy, "s1/s2/t8");
            visitor.TestWasVisited(hierarchy, "s1/s2/s3/t9");
            visitor.TestWasNotVisited(hierarchy, "s1/s2/s3/t10");
            visitor.TestWasNotVisited(hierarchy, "s1/s2/s3/s4/t11");
            visitor.TestWasNotVisited(hierarchy, "s5/t12");
            visitor.TestWasNotVisited(hierarchy, "s5/s6/t13");
            visitor.TestWasNotVisited(hierarchy, "s5/s6/s7/t14");
            visitor.TestWasNotVisited(hierarchy, "s5/s6/s7/s8/t15");

            visitor.SuiteWasVisited(hierarchy, "s1");
            visitor.SuiteWasVisited(hierarchy, "s1/s2");
            visitor.SuiteWasVisited(hierarchy, "s1/s2/s3");
            visitor.SuiteWasVisited(hierarchy, "s1/s2/s3/s4");
            visitor.SuiteWasVisited(hierarchy, "s5");
            visitor.SuiteWasVisited(hierarchy, "s5/s6");
            visitor.SuiteWasVisited(hierarchy, "s5/s6/s7");
            visitor.SuiteWasVisited(hierarchy, "s5/s6/s7/s8");
        }

        [Test]
        public void visit_with_no_filters()
        {
            new SuiteNavigator().Visit(hierarchy, visitor);

            visitor.TestWasVisited(hierarchy, "t1");
            visitor.TestWasVisited(hierarchy, "t2");
            visitor.TestWasVisited(hierarchy, "t3");
            visitor.TestWasVisited(hierarchy, "s1/t4");
            visitor.TestWasVisited(hierarchy, "s1/t5");
            visitor.TestWasVisited(hierarchy, "s1/t6");
            visitor.TestWasVisited(hierarchy, "s1/s2/t7");
            visitor.TestWasVisited(hierarchy, "s1/s2/t8");
            visitor.TestWasVisited(hierarchy, "s1/s2/s3/t9");
            visitor.TestWasVisited(hierarchy, "s1/s2/s3/t10");
            visitor.TestWasVisited(hierarchy, "s1/s2/s3/s4/t11");
            visitor.TestWasVisited(hierarchy, "s5/t12");
            visitor.TestWasVisited(hierarchy, "s5/s6/t13");
            visitor.TestWasVisited(hierarchy, "s5/s6/s7/t14");
            visitor.TestWasVisited(hierarchy, "s5/s6/s7/s8/t15");

            visitor.SuiteWasVisited(hierarchy, "s1");
            visitor.SuiteWasVisited(hierarchy, "s1/s2");
            visitor.SuiteWasVisited(hierarchy, "s1/s2/s3");
            visitor.SuiteWasVisited(hierarchy, "s1/s2/s3/s4");
            visitor.SuiteWasVisited(hierarchy, "s5");
            visitor.SuiteWasVisited(hierarchy, "s5/s6");
            visitor.SuiteWasVisited(hierarchy, "s5/s6/s7");
            visitor.SuiteWasVisited(hierarchy, "s5/s6/s7/s8");
        }
    }


    public static class SuiteNavigatorTestExtensions
    {
        public static void TestWasVisited(this IHierarchyVisitor visitor, Hierarchy hierarchy, string path)
        {
            Test test = hierarchy.FindTest(path);
            test.ShouldNotBeNull();

            visitor.AssertWasCalled(x => x.Test(test));
        }

        public static void SuiteWasVisited(this IHierarchyVisitor visitor, Hierarchy hierarchy, string path)
        {
            Suite suite = hierarchy.FindSuite(path);
            suite.ShouldNotBeNull();

            visitor.AssertWasCalled(x => x.StartSuite(suite));
            visitor.AssertWasCalled(x => x.EndSuite(suite));
        }

        public static void TestWasNotVisited(this IHierarchyVisitor visitor, Hierarchy hierarchy, string path)
        {
            Test test = hierarchy.FindTest(path);
            test.ShouldNotBeNull();

            visitor.AssertWasNotCalled(x => x.Test(test));
        }

        public static void SuiteWasNotVisited(this IHierarchyVisitor visitor, Hierarchy hierarchy, string path)
        {
            Suite suite = hierarchy.FindSuite(path);
            suite.ShouldNotBeNull();

            visitor.AssertWasNotCalled(x => x.StartSuite(suite));
            visitor.AssertWasNotCalled(x => x.EndSuite(suite));
        }
    }
}