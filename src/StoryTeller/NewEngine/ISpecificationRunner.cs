using System;
using StoryTeller.Model.Persistence;

namespace StoryTeller.NewEngine
{
    public interface ISpecificationRunner : IDisposable
    {
        Hierarchy Hierarchy { get; }

        NewProject Project { get; }
        
    }
}