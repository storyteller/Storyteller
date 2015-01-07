using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using FubuCore;
using FubuCore.Util;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Conversion
{
    public interface IConvertor
    {
        object Convert(string raw);
    }


    public interface IRuntimeConvertor
    {
        object Convert(string raw, ISpecContext context);
    }

    public class ConversionPlan
    {
        public readonly IDictionary<string, IConvertor> Early = new Dictionary<string, IConvertor>();
        public readonly IDictionary<string, IRuntimeConvertor> Runtime = new Dictionary<string, IRuntimeConvertor>();

        public StepValues Create(Step step)
        {
            throw new NotImplementedException();
        }

    }

    public class StepValues
    {
        private readonly IDictionary<string, object> _values = new Dictionary<string, object>();
        private readonly IList<Delayed> _delayeds = new List<Delayed>();


        public void DoDelayedConversions(ISpecContext context)
        {
            throw new NotImplementedException();
        }

        public void Check<T>(ISpecContext context, string key, T actual)
        {
            // TODO: Could be Predicate<T> -- figure out how to use this
            // TODO: Could be a T

            T expected = (T) Get(key);
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
            
        }

        public void LogError(string key, string message)
        {
            
        }

        public class Delayed
        {
            public string Key;
            public string Raw;
            public IRuntimeConvertor Converter;
        }
    }

    public class ConverterFactory 
    {
        private readonly IEnumerable<IConversionProvider> _providers;
        private readonly Cache<Type, IConvertor> _convertors;

        public ConverterFactory(IEnumerable<IConversionProvider> providers)
        {
            _providers = providers;
            _convertors = new Cache<Type, IConvertor>(type =>
            {
                return _providers.FirstValue(x => x.ConverterFor(type));
            });
        }

        public IConvertor FindConvertor(Type type)
        {
            return _convertors[type];
        }
    }

    public interface IConversionProvider
    {
        IConvertor ConverterFor(Type type);
    }

    public class find
    {
        public static bool hasParse(Type type)
        {
            return type.GetMethods(BindingFlags.Static | BindingFlags.Public).Any(x => x.Name == "TryParse");
        }

        public void go()
        {
            var types = typeof (int).Assembly.GetExportedTypes().Where(x => x.CanBeCastTo<IConvertible>()).Where(x => x.Namespace == "System")
                .Where(hasParse);
            types.Each(x => Debug.WriteLine(x.FullName));
        }
    }
}