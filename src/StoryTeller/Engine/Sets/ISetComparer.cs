using System.Collections.Generic;

namespace StoryTeller.Engine.Sets
{
    public interface ISetComparer
    {
        IEnumerable<ISetColumn> Columns { get; }
    }
}