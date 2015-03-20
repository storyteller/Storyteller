using System.Collections.Generic;

namespace StoryTeller.Model
{
    public interface INodeHolder
    {
        IList<Node> Children { get; }
    }
}