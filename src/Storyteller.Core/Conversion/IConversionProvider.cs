using System;

namespace Storyteller.Core.Conversion
{
    public interface IConversionProvider
    {
        Func<string, object> ConverterFor(Type type);
    }
}