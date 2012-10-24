using System;
using System.Collections.Generic;

namespace StoryTeller.Domain
{
    public interface ITestPartCollection : IEnumerable<ITestPart>
    {
        void Add(ITestPart testPart);
        void RemoveAll(Predicate<ITestPart> filter);
        void Clear();
        void AddRange(IEnumerable<ITestPart> parts);
        ITestPart Find(Predicate<ITestPart> func);
        IList<ITestPart> GetList();
    }
}