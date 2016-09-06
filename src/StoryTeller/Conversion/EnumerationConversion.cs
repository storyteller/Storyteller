using System;
using System.Reflection;

namespace StoryTeller.Conversion
{
    // SAMPLE: EnumerationConversion
    public class EnumerationConversion : IConversionProvider
    {
        public Func<string, object> ConverterFor(Type type)
        {
            if (type.GetTypeInfo().IsEnum)
            {
                return x => Enum.Parse(type, x);
            }

            return null;
        }
    }
    // ENDSAMPLE
}