using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using Baseline;

namespace StoryTeller
{
#if NET46
    [Serializable]
#endif
    public class InDeterminateSystemTypeException : Exception
    {
        public static string ToMessage(IEnumerable<Type> candidates)
        {
            return "Cannot determine the Storyteller ISystem to use. Either use a command line flag or the storyteller.config file to explicitly specify the system. Found:\n"
                   + candidates.Select(x => x.AssemblyQualifiedName).Join("\n");
        }

#if NET46
        protected InDeterminateSystemTypeException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
#endif

        public InDeterminateSystemTypeException(IEnumerable<Type> candidates) : base(ToMessage(candidates))
        {
            
        }
    }
}