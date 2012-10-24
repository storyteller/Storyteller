using System;
using System.Collections.Generic;
using FubuCore.Util;
using System.Linq;

namespace StoryTeller.Domain
{
    public enum ResultStatus
    {
        Unknown,
        Success,
        Failed,
        All
    }


    public interface ITestFilter
    {
        ResultStatus ResultStatus { get; set; }
        Lifecycle Lifecycle { get; set; }
        bool Matches(Test test);
        bool Matches(Suite suite);
        bool ShowEmptySuites();
        string Tags { get; set; }
    }

    public class TestFilter : ITestFilter
    {
        private readonly Cache<Lifecycle, Predicate<Test>> _lifecycleFilters = new Cache<Lifecycle, Predicate<Test>>();

        private readonly Cache<ResultStatus, Predicate<Test>> _resultFilters =
            new Cache<ResultStatus, Predicate<Test>>();

        private Lifecycle _lifecycle;

        private Predicate<Test> _lifecycleMatch;
        private Predicate<Test> _resultMatch;
        private Predicate<Test> _tagsMatch = t => true;

        private ResultStatus _resultStatus;

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
            _resultFilters[ResultStatus.All] = t => true;
            _resultFilters[ResultStatus.Success] = t => t.HasResult() && t.WasSuccessful();
            _resultFilters[ResultStatus.Failed] = t => t.HasResult() && !t.WasSuccessful();
            _resultFilters[ResultStatus.Unknown] = t => !t.HasResult();

            _lifecycleFilters[Lifecycle.Any] = t => true;
            _lifecycleFilters[Lifecycle.Acceptance] = t => t.Lifecycle == Lifecycle.Acceptance;
            _lifecycleFilters[Lifecycle.Regression] = t => t.Lifecycle == Lifecycle.Regression;

            ResultStatus = ResultStatus.All;
            Lifecycle = Lifecycle.Any;
        }


        public ResultStatus ResultStatus
        {
            get { return _resultStatus; }
            set
            {
                _resultStatus = value;
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
            return _lifecycle == Lifecycle.Any && _resultStatus == ResultStatus.All && string.IsNullOrEmpty(_Tags);
        }
    }
}