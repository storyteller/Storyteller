using System;
using System.Collections.Generic;
using Baseline;

namespace StoryTeller.Conversion
{
    public class Conversions
    {
        private readonly IList<IRuntimeConverter> _runtimeConvertors = new List<IRuntimeConverter>();
        private readonly IList<IConversionProvider> _providers = new List<IConversionProvider>();
        private readonly LightweightCache<Type, Func<string, object>> _convertors;


        public Conversions()
        {
            _convertors =
                new LightweightCache<Type, Func<string, object>>(
                    type =>
                    {
                        return
                            _providers.UnionWith(new EnumerationConversion(), new NullableConvertor(this), new ArrayConversion(this), new StringConverterProvider())
                                .FirstValue(x => x.ConverterFor(type));
                    });

            RegisterConversion(bool.Parse);
            RegisterConversion(byte.Parse);
            RegisterConversion(sbyte.Parse);
            RegisterConversion(char.Parse);
            RegisterConversion(decimal.Parse);
            RegisterConversion(double.Parse);
            RegisterConversion(Single.Parse);
            RegisterConversion(Int16.Parse);
            RegisterConversion(Int32.Parse);
            RegisterConversion(Int64.Parse);
            RegisterConversion(UInt16.Parse);
            RegisterConversion(UInt32.Parse);
            RegisterConversion(UInt64.Parse);
            RegisterConversion(DateTimeConverter.GetDateTime);

            RegisterConversion(x =>
            {
                if (x == "EMPTY") return string.Empty;

                return x;
            });
        }

        public IEnumerable<IRuntimeConverter> RuntimeConvertors => _runtimeConvertors;

        public void RegisterRuntimeConversion<T>() where T : IRuntimeConverter, new()
        {
            _runtimeConvertors.Add(new T());
        }

        public void RegisterConversionProvider<T>() where T : IConversionProvider, new()
        {
            _providers.Add(new T());
        }

        public void RegisterConversion<T>(Func<string, T> convertor)
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
    }
}