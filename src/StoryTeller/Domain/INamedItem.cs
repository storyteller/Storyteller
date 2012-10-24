using System;
using System.Collections.Generic;

namespace StoryTeller.Domain
{
    [Obsolete("At least needs to change")]
    public interface INamedItem
    {
        string Name { get; }
        TPath GetPath();
        IEnumerable<Test> AllTests { get; }
    }
}