using System.Collections.Generic;

namespace StoryTeller.Commands
{
    public interface IStorytellerEnvironment
    {
        /// <summary>
        /// Optional user-supplied profile. May be null.
        /// Same as Project.CurrentProfile
        /// </summary>
        string Profile { get; }
        
        /// <summary>
        /// Optional user-supplied key/value properties
        /// </summary>
        Dictionary<string, string> Properties { get; }
        
        /// <summary>
        /// The directory to the root of the project
        /// </summary>
        string RootPath { get; }
        
        /// <summary>
        /// Directory containing the specifications
        /// </summary>
        string SpecPath { get; }
    }
}