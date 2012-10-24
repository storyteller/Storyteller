using System;
using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller
{
    public static class ListExtensions
    {
        public static Step Add(this IList<IStep> list, string properties)
        {
            var step = new Step();
            step.With(properties);
            list.Add(step);

            return step;
        }
    }
}