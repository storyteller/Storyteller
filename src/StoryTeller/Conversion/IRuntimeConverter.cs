using System;

namespace StoryTeller.Conversion
{
    public interface IRuntimeConverter
    {
        object Convert(string raw, ISpecContext context);
        bool Matches(Type type);
    }
}