using System;
using System.Runtime.Serialization;
using FubuCore;

namespace StoryTeller.Engine
{
    [Serializable]
    public class NonExistentFixtureException : Exception
    {
        public NonExistentFixtureException(string fixtureName) : base("No fixture named '{0}' can be found".ToFormat(fixtureName))
        {
        }

        public NonExistentFixtureException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}