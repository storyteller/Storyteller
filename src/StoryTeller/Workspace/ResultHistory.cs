using System;
using FubuCore.Util;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Workspace
{
    public class ResultHistory
    {
        private readonly Cache<string, TestResult> _results = new Cache<string,TestResult>(key => null);

        public TestResult this[Test test]
        {
            get
            {
                return _results[test.GetPath().Locator];
            }
            set
            {
                _results[test.GetPath().Locator] = value;
            }
        }

        public TestResult this[string locator]
        {
            get
            {
                return _results[locator];
            }
            set
            {
                _results[locator] = value;
            }
        }

        public void Each(Action<string, TestResult> action)
        {
            _results.Each(action);
        }
    }
}