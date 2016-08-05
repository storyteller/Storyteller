using System;
using System.Linq;
using Baseline;

namespace StoryTeller.Conversion
{
    public class NullableConvertor : IConversionProvider
    {
        private readonly Conversions _conversions;

        public NullableConvertor(Conversions conversions)
        {
            _conversions = conversions;
        }

        public Func<string, object> ConverterFor(Type type)
        {
            if (!type.IsNullable()) return null;


            var innerType = type.GetGenericArguments().First();
            var inner = _conversions.FindConverter(innerType);

            return str =>
            {
                if (str == "NULL") return null;

                return inner(str);
            };
        }
    }

   
}