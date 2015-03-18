using System;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Conversion;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Conversion
{
    [TestFixture]
    public class ConversionsTester
    {

        private readonly Conversions conversions = new Conversions(new IConversionProvider[0]);

        private void assertRoundTrip<T>(T value)
        {
            var s = value.ToString();
            conversions.Convert(typeof (T), s)
                .ShouldEqual(value);

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
        public void enumerations()
        {
            assertRoundTrip(ResultStatus.error);
        }

        [Test]
        public void convert_string_is_passthrough_on_value()
        {
            conversions.Convert(typeof (string), "foo").ShouldEqual("foo");
        }

        [Test]
        public void convert_string_as_EMPTY()
        {
            conversions.Convert(typeof (string), "EMPTY").ShouldEqual(string.Empty);
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
                .ShouldEqual(123);
        }
    }

    
}