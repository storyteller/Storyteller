using System;
using System.Collections.Generic;
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
}