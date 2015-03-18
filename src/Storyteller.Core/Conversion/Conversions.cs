using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using FubuCore.Util;

namespace Storyteller.Core.Conversion
{
    public class Conversions 
    {
        private readonly IList<IConversionProvider> _providers = new List<IConversionProvider>();
        private readonly Cache<Type, Func<string, object>> _convertors;

        public Conversions(IEnumerable<IConversionProvider> providers)
        {
            _providers.AddRange(providers);
            _providers.Add(new EnumerationConversion());
            _providers.Add(new NullableConvertor(this));

            _convertors = new Cache<Type, Func<string, object>>(type =>
            {
                return _providers.FirstValue(x => x.ConverterFor(type));
            });

            Add(bool.Parse);
            Add(byte.Parse);
            Add(sbyte.Parse);
            Add(char.Parse);
            Add(decimal.Parse);
            Add(double.Parse);
            Add(Single.Parse);
            Add(Int16.Parse);
            Add(Int32.Parse);
            Add(Int64.Parse);
            Add(UInt16.Parse);
            Add(UInt32.Parse);
            Add(UInt64.Parse);
            Add(DateTimeConverter.GetDateTime);

            Add(x =>
            {
                if (x == "EMPTY") return string.Empty;

                return x;
            });

            ;
        }

        public void Add<T>(Func<string, T> convertor)
        {
            _convertors[typeof (T)] = x => convertor(x);
        }

        public Func<string, object> FindConverter(Type type)
        {
            return _convertors[type];
        }

        public object Convert(Type type, string raw)
        {
            return _convertors[type](raw);
        }

        public static Conversions Basic()
        {
            return new Conversions(new IConversionProvider[0]);
        }
    }

    public class DateTimeConverter
    {
        public const string TODAY = "TODAY";

        private static readonly Regex iso8601Expression = new Regex(@"^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$");

        public static DateTime GetDateTime(string dateString)
        {
            var trimmedString = dateString.Trim();
            if (trimmedString == TODAY)
            {
                return DateTime.Today;
            }

            if (trimmedString.Contains(TODAY))
            {
                var dayString = trimmedString.Substring(5, trimmedString.Length - 5);
                var days = int.Parse(dayString);

                return DateTime.Today.AddDays(days);
            }

            if (isDayOfWeek(dateString))
            {
                return convertToDateFromDayAndTime(dateString);
            }

            if (iso8601Expression.IsMatch(trimmedString))
            {
                //Thank you jon skeet : http://stackoverflow.com/questions/10029099/datetime-parse2012-09-30t230000-0000000z-always-converts-to-datetimekind-l
                DateTime result;
                var success = DateTime.TryParseExact(trimmedString, "yyyy-MM-dd'T'HH:mm:ss.fffffff'Z'", CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal, out result);

                if (success) return result;
            }

            return DateTime.Parse(trimmedString);
        }

        private static DateTime convertToDateFromDayAndTime(string dateString)
        {
            dateString = dateString.Replace("  ", " ");
            var parts = dateString.Split(' ');
            var day = (DayOfWeek)Enum.Parse(typeof(DayOfWeek), parts[0], true);
            var minutes = minutesFrom24HourTime(parts[1]);

            var date = DateTime.Today.AddMinutes(minutes);
            while (date.DayOfWeek != day)
            {
                date = date.AddDays(1);
            }

            return date;
        }

        private static bool isDayOfWeek(string text)
        {
            var days = Enum.GetNames(typeof(DayOfWeek));
            return days.FirstOrDefault(x => text.ToLower().StartsWith(x.ToLower())) != null;
        }


        private static int minutesFrom24HourTime(string time)
        {
            var parts = time.Split(':');
            return 60 * int.Parse(parts[0]) + int.Parse(parts[1]);
        }
    }
}