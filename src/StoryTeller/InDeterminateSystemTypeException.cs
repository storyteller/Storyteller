using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using Baseline;

namespace StoryTeller
{
    [Serializable]
    public class InDeterminateSystemTypeException : Exception
    {
        public static string ToMessage(IEnumerable<Type> candidates)
        {
            return "Cannot determine the Storyteller ISystem to use. Either use a command line flag or the storyteller.config file to explicitly specify the system. Found:\n"
                   + candidates.Select(x => x.AssemblyQualifiedName).Join("\n");
        }

        protected InDeterminateSystemTypeException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }

        public InDeterminateSystemTypeException(IEnumerable<Type> candidates) : base(ToMessage(candidates))
        {
            
        }
    }
}