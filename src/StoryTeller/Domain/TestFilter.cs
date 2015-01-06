using System;
using System.Collections.Generic;
using FubuCore.Util;
using System.Linq;

namespace StoryTeller.Domain
{
    public enum TestResultStatus
    {
        Unknown,
        Success,
        Failed,
        All
    }


    public interface ITestFilter
    {
        TestResultStatus TestResultStatus { get; set; }
        Lifecycle Lifecycle { get; set; }
        bool Matches(Test test);
        bool Matches(Suite suite);
        bool ShowEmptySuites();
        string Tags { get; set; }
    }

    public class TestFilter : ITestFilter
    {
        private readonly Cache<Lifecycle, Predicate<Test>> _lifecycleFilters = new Cache<Lifecycle, Predicate<Test>>();

        private readonly Cache<TestResultStatus, Predicate<Test>> _resultFilters =
            new Cache<TestResultStatus, Predicate<Test>>();

        private Lifecycle _lifecycle;

        private Predicate<Test> _lifecycleMatch;
        private Predicate<Test> _resultMatch;
        private Predicate<Test> _tagsMatch = t => true;

        private TestResultStatus _testResultStatus;

        private string _Tags;
        public string Tags
        {
            get { return _Tags; }
            set
            {
                _Tags = value;
                if (string.IsNullOrEmpty(_Tags))
                {
                    _tagsMatch = t => true;
                }
                else
                {
                    Tags tags = new Tags(_Tags);
                    _tagsMatch = test => tags.DoesTestMatch(test);
                }
            }
        }

        public TestFilter()
        {
            _resultFilters[TestResultStatus.All] = t => true;
            _resultFilters[TestResultStatus.Success] = t => t.HasResult() && t.WasSuccessful();
            _resultFilters[TestResultStatus.Failed] = t => t.HasResult() && !t.WasSuccessful();
            _resultFilters[TestResultStatus.Unknown] = t => !t.HasResult();

            _lifecycleFilters[Lifecycle.Any] = t => true;
            _lifecycleFilters[Lifecycle.Acceptance] = t => t.Lifecycle == Lifecycle.Acceptance;
            _lifecycleFilters[Lifecycle.Regression] = t => t.Lifecycle == Lifecycle.Regression;

            TestResultStatus = TestResultStatus.All;
            Lifecycle = Lifecycle.Any;
        }


        public TestResultStatus TestResultStatus
        {
            get { return _testResultStatus; }
            set
            {
                _testResultStatus = value;
                _resultMatch = _resultFilters[value];
            }
        }

        public Lifecycle Lifecycle
        {
            get { return _lifecycle; }
            set
            {
                _lifecycle = value;
                _lifecycleMatch = _lifecycleFilters[value];
            }
        }


        public bool Matches(Test test)
        {
            return _resultMatch(test) && _lifecycleMatch(test) && _tagsMatch(test);
        }

        public bool Matches(Suite suite)
        {
            if (!baselineSuiteMatch(suite)) return false;

            return true;
        }

        private bool baselineSuiteMatch(Suite suite)
        {
            return suite.GetAllTests().FirstOrDefault(Matches) != null || ShowEmptySuites();
        }

        public bool ShowEmptySuites()
        {
            return _lifecycle == Lifecycle.Any && _testResultStatus == TestResultStatus.All && string.IsNullOrEmpty(_Tags);
        }
    }
}