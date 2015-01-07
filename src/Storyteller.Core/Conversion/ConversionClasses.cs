using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using FubuCore;
using Storyteller.Core.Model;

namespace Storyteller.Core.Conversion
{
    using IConvertor = Func<string, object>;


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

    public class EnumerableConversion : IConversionProvider
    {
        public IConvertor ConverterFor(Type type)
        {
            if (type.IsEnum)
            {
                return x => Enum.Parse(type, x);
            }

            return null;
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