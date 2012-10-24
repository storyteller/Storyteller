using System.Collections;
using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Running
{
    public class ExecuteTestMessage : IEnumerable<Test>
    {
        private readonly List<Test> _tests = new List<Test>();

        public ExecuteTestMessage(params Test[] tests)
        {
            _tests.AddRange(tests);
        }

        public ExecuteTestMessage(IEnumerable<Test> tests)
        {
            _tests.AddRange(tests);
        }

        #region IEnumerable<Test> Members

        public IEnumerator<Test> GetEnumerator()
        {
            return _tests.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        #endregion
    }

    public class CancelTestMessage : IEnumerable<Test>
    {
        private readonly List<Test> _tests = new List<Test>();

        public CancelTestMessage(params Test[] tests)
        {
            _tests.AddRange(tests);
        }

        public CancelTestMessage(IEnumerable<Test> tests)
        {
            _tests.AddRange(tests);
        }

        #region IEnumerable<Test> Members

        public IEnumerator<Test> GetEnumerator()
        {
            return _tests.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        #endregion
    }

    public class CancelAllTests
    {
    }

    public interface IExecutionQueue : IStartable
    {
        Test ExecutingTest { get; }
        bool IsQueued(Test test);

        IEnumerable<Test> GetAllQueuedTests();
        void QueueTest(Test test);
        void Cancel(Test test);
        void AbortCurrentTest();
        bool IsExecuting();
        bool IsEmpty();
        void CancelAll();
    }

    public static class ListExtensions
    {
        public static Test Dequeue(this List<Test> list)
        {
            Test test = list[0];
            list.RemoveAt(0);

            return test;
        }

        public static void Enqueue(this List<Test> list, Test test)
        {
            list.Add(test);
        }
    }
}