using System;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Results;

namespace StoryTeller.Testing.Conversion
{
    [TestFixture]
    public class ConversionsTester
    {

        private readonly Conversions conversions = new Conversions();

        private void assertRoundTrip<T>(T value)
        {
            var s = value.ToString();
            conversions.Convert(typeof (T), s)
                .ShouldBe(value);

        }



        [Test]
        public void intrinsic_types()
        {
            assertRoundTrip(true);
            assertRoundTrip<byte>(5);
            assertRoundTrip<sbyte>(6);
            assertRoundTrip<char>('b');
            assertRoundTrip<decimal>(12.34M);
            assertRoundTrip<double>(34.56);
            assertRoundTrip<Int16>(24);
            assertRoundTrip<UInt16>(25);
            assertRoundTrip<Int32>(55);
            assertRoundTrip<UInt32>(56);
            assertRoundTrip<Int64>(55);
            assertRoundTrip<UInt64>(59);
            assertRoundTrip<Single>(34);
        }

        [Test]
        public void uri()
        {
            conversions.Convert(typeof(Uri), "foo://1")
                .ShouldBeOfType<Uri>()
                .AbsoluteUri.ShouldBe("foo://1/");
        }

        [Test]
        public void enumerations()
        {
            assertRoundTrip(ResultStatus.error);
        }

        [Test]
        public void convert_string_is_passthrough_on_value()
        {
            conversions.Convert(typeof (string), "foo").ShouldBe("foo");
        }

        [Test]
        public void convert_string_array()
        {
            conversions.Convert(typeof(string[]), "a, b, c, d").ShouldBeOfType<string[]>()
                .ShouldHaveTheSameElementsAs("a", "b", "c", "d");
        }

        [Test]
        public void convert_number_array()
        {
            conversions.Convert(typeof(int[]), "1,2, 3, 4").ShouldBeOfType<int[]>()
                .ShouldHaveTheSameElementsAs(1, 2, 3, 4
                
                );
        }

        [Test]
        public void convert_string_as_EMPTY()
        {
            conversions.Convert(typeof (string), "EMPTY").ShouldBe(string.Empty);
        }

        public enum Directions
        {
            North,
            South,
            East,
            West
        }

        [Test]
        public void can_round_trip_enumerable_values()
        {
            assertRoundTrip(Directions.North);
        }

        [Test]
        public void nullable_conversion()
        {
            conversions.Convert(typeof(int?), "NULL")
                .ShouldBeNull();

            conversions.Convert(typeof (int?), "123")
                .ShouldBe(123);
        }

        // SAMPLE: string-ctor-in-action
        [Test]
        public void string_ctor_conversion()
        {
            conversions.Convert(typeof(Color), "Red")
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

    
}