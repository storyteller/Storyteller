using System;

namespace Storyteller.Core.Model
{
    public abstract class Node
    {
        protected Node()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }
    }
}