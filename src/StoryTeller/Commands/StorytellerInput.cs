using Oakton;
using StoryTeller.Engine;

namespace StoryTeller.Commands
{
    public class StorytellerInput
    {
        [IgnoreOnCommandLine]
        public ISystem System { get; set; }
    }
}