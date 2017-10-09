using System;
using System.Reflection;
using Baseline.Conversion;
using Shouldly;
using Xunit;

namespace StoryTeller.Testing
{
    public class ConversionSamples
    {
        // SAMPLE: string-ctor-in-action
        [Fact]
        public void string_ctor_conversion()
        {
            new Conversions().Convert(typeof(Color), "Red")
                .ShouldBeOfType<Color>()
                .Name.ShouldBe("Red");
        }
        // ENDSAMPLE
    }
    
    // SAMPLE: creating-color-by-ctor
    public class Color
    {
        public string Name { get; set; }

        public Color(string name)
        {
            this.Name = name;
        }
    }
    // ENDSAMPLE
    
    // SAMPLE: IConversionProvider
    public interface IConversionProvider
    {
        // Given the type argument, either return a
        // Func that can parse a string into that Type
        // or return null to let another IConversionProvider
        // handle this type
        Func<string, object> ConverterFor(Type type);
    }
    // ENDSAMPLE
    
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
