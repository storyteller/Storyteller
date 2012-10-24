using System;
using System.Collections;
using System.Collections.Generic;

namespace StoryTeller.Domain
{
    public class DefaultTestPartcollection : ITestPartCollection
    {
        private readonly List<ITestPart> _parts = new List<ITestPart>();

        public DefaultTestPartcollection()
        {
        }

        public DefaultTestPartcollection(Test test)
        {
            _parts.AddRange(test.Parts);
        }

        public IEnumerator<ITestPart> GetEnumerator()
        {
            return _parts.GetEnumerator();
        }

        public void Add(ITestPart testPart)
        {
            _parts.Add(testPart);
        }

        public void RemoveAll(Predicate<ITestPart> filter)
        {
            _parts.RemoveAll(filter);
        }

        public void Clear()
        {
            _parts.Clear();
        }

        public void AddRange(IEnumerable<ITestPart> parts)
        {
            _parts.AddRange(parts);
        }

        public ITestPart Find(Predicate<ITestPart> func)
        {
            return _parts.Find(func);
        }

        public IList<ITestPart> GetList()
        {
            return _parts;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}