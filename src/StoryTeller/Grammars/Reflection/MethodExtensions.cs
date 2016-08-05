using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Baseline;
using Baseline.Reflection;

namespace StoryTeller.Grammars.Reflection
{
    public static class MethodExtensions
    {
        public static string DeriveFormat(this MethodInfo method)
        {
            var formatAs = method.GetAttribute<FormatAsAttribute>();
            if (formatAs != null)
            {
                return formatAs.Format;
            }

            var args = method.GetParameters()
                .Select(param => "{" + param.Name + "}")
                .Join(", ");

            string format = "{0}({1})".ToFormat(method.Name, args);

            if (method.HasReturn())
            {
                format += string.Format(" should be {{{0}}}", method.GetReturnValueAlias());
            }

            return format.TrimEnd();
        }


        public static bool HasReturn(this MethodInfo method)
        {
            return method.ReturnParameter != null && method.ReturnParameter.ParameterType != typeof(void);
        }

        public static string GetReturnValueAlias(this MethodInfo method)
        {
            var att = method.ReturnParameter.GetAttribute<AliasAsAttribute>();
            return att == null ? "returnValue" : att.Alias;
        }


    }
}