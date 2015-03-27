using System;

namespace StoryTeller.Conversion
{
    public interface IRuntimeConvertor
    {
        object Convert(string raw, ISpecContext context);
        bool Matches(Type type);
    }
}