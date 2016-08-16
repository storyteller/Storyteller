using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Results;

namespace StoryTeller.Testing
{
    public static class SpecContextExtensions
    {
        public static void AssertTheOnlyResultIs(this SpecContext context, IResultMessage expectation)
        {
            if (context.Results.Count == 0)
            {
                throw new Exception("No results were captured");
            }

            if (context.Results.Count > 1)
            {
                throw new Exception("Multiple results were captured: " + context.Results.Select(x => x.ToString()).Join(", "));
            }

            context.Results.Single().ShouldBe(expectation);
        }
    }
}