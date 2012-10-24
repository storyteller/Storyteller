using System;
using FubuCore.Util;

namespace StoryTeller.Engine.Sets
{
    public class RowValueMatcher
    {
        private readonly ITestContext _context;
        private readonly Cache<string, Func<object, object, bool>> _matchers = new Cache<string,Func<object,object,bool>>();

        public RowValueMatcher(ITestContext context)
        {
            _context = context;
            _matchers.OnMissing = key => (o1, o2) => _context.Matches(o1, o2);
        }

        public void RegisterMatcher(string key, Func<object, object, bool> strategy)
        {
            _matchers[key] = strategy;
        }

        public void RegisterMatcher<T>(string key, Func<T, T, bool> strategy) where T : class
        {
            _matchers[key] = (one, two) => strategy( one as T, two as T);
        }

        public bool Matches(string key, object one, object two)
        {
            return _matchers[key](one, two);
        }
    }
}