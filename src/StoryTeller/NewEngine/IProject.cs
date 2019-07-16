using System.Collections.Generic;
using StoryTeller;

namespace Storyteller
{
    public interface IProject
    {
        bool CanContinue(Counts counts);
        string Profile { get; set; }
        string Culture { get; set; }

        Dictionary<string, string> Properties { get; set; }

        string ProjectPath { get; set; }
        string SpecDirectory { get; set; }
    }
}