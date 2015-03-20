using System;

namespace StoryTeller.Conversion
{
    public interface IConversionProvider
    {
        Func<string, object> ConverterFor(Type type);
    }
}