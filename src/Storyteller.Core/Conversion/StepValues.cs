using System;
using System.Collections.Generic;
using Storyteller.Core.Results;

namespace Storyteller.Core.Conversion
{
    public class StepValues
    {
        private readonly IDictionary<string, object> _values = new Dictionary<string, object>();
        private readonly IList<Delayed> _delayeds = new List<Delayed>();


        public void DoDelayedConversions(ISpecContext context)
        {
            _delayeds.Each(x =>
            {
                try
                {
                    var converted = x.Converter.Convert(x.Raw, context);
                    if (converted == null)
                    {
                        LogError(x.Key, "The converter was not able to create a value. Check the formatting.");
                    }
                    else
                    {
                        Store(x.Key, converted);
                    }
                }
                catch (Exception ex)
                {
                    LogError(x.Key, ex);
                }
            });
        }

        public void Check(ISpecContext context, string key, object actual)
        {
            // TODO: Could be Predicate<T> -- figure out how to use this

            var expected = Get(key);
            if (expected.Equals(actual))
            {
                context.LogResult(CellResult.Success(key));
            }
            else
            {
                context.LogResult(CellResult.Failure(key, actual.ToString()));
            }
        }

        public void RegisterDelayedConversion(string key, string raw, IRuntimeConvertor convertor)
        {
            _delayeds.Add(new Delayed
            {
                Key = key, Raw = raw, Converter = convertor
            });
        }

        public void Store(string key, object value)
        {
            _values.Add(key, value);
        }

        public object Get(string key)
        {
            return _values[key];
        }

        public IList<CellResult> Errors = new List<CellResult>();

        public void LogError(string key, Exception ex)
        {
            Errors.Add(CellResult.Error(key, ex));
        }

        public void LogError(string key, string message)
        {
            Errors.Add(CellResult.Error(key, message));
        }

        public class Delayed
        {
            public string Key;
            public string Raw;
            public IRuntimeConvertor Converter;
        }
    }
}