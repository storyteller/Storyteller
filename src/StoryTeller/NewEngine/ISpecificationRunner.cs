using System;
using StoryTeller.Model.Persistence;

namespace Storyteller
{
    public interface ISpecificationRunner : IDisposable
    {
        Hierarchy Hierarchy { get; }

        NewProject Project { get; }
        
    }
}