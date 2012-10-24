using System;

namespace StoryTeller.Domain
{
    public interface IHierarchyVisitor
    {
        void StartSuite(Suite suite);
        void EndSuite(Suite suite);
        void Test(Test test);
    }

    public class SuiteNavigator
    {
        public SuiteNavigator()
        {
            TestFilter = t => true;
            SuiteFilter = s => true;
        }

        public Predicate<Test> TestFilter { get; set; }
        public Predicate<Suite> SuiteFilter { get; set; }

        public void Visit(Suite top, IHierarchyVisitor visitor)
        {
            propagateToChildren(top, visitor);
        }

        private void propagateToChildren(Suite parent, IHierarchyVisitor visitor)
        {
            foreach (Suite suite in parent.ChildSuites)
            {
                visit(suite, visitor);
            }

            foreach (Test test in parent.Tests)
            {
                visit(test, visitor);
            }
        }

        private void visit(Test test, IHierarchyVisitor visitor)
        {
            if (TestFilter(test))
            {
                visitor.Test(test);
            }
        }

        private void visit(Suite suite, IHierarchyVisitor visitor)
        {
            if (SuiteFilter(suite))
            {
                visitor.StartSuite(suite);
                propagateToChildren(suite, visitor);
                visitor.EndSuite(suite);
            }
        }
    }
}