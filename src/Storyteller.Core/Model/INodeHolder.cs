using System.Collections.Generic;

namespace Storyteller.Core.Model
{
    public interface INodeHolder
    {
        IList<Node> Children { get; }
    }
}