using System;

namespace StoryTeller.Conversion
{
    // SAMPLE: IRuntimeConverter
    public interface IRuntimeConverter
    {
        object Convert(string raw, ISpecContext context);
        bool Matches(Type type);
    }
    // ENDSAMPLE
}