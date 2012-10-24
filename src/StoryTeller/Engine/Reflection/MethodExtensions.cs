using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using StoryTeller.Domain;

namespace StoryTeller.Engine.Reflection
{
    public static class MethodExtensions
    {
        public static string GetKey(this MethodInfo method)
        {
            var att = method.GetAttribute<AliasAsAttribute>();
            return att == null ? method.Name : att.Alias;
        }

        public static Cell[] GetArgumentCells(this MethodInfo method)
        {
            return Array.ConvertAll(method.GetParameters(), p => new Cell(p));
        }

        public static bool ReturnsGrammar(this MethodInfo method)
        {
            return method.HasReturn()
                   && typeof(IGrammar).IsAssignableFrom(method.ReturnType)
                   && method.GetParameters().Length == 0;
        }

        public static Cell GetReturnCell(this MethodInfo method)
        {
            return new Cell(method.ReturnParameter);
        }

        public static string GetReturnValueAlias(this MethodInfo method)
        {
            var att = method.ReturnParameter.GetAttribute<AliasAsAttribute>();
            return att == null ? "returnValue" : att.Alias;
        }

        public static string GetTemplate(this MethodInfo method)
        {
            var formatAs = method.GetAttribute<FormatAsAttribute>();
            if (formatAs != null)
            {
                return formatAs.Format;
            }

            string format = method.Name + " ";
            IEnumerable<Cell> inputs = method.GetArgumentCells();
            var args = new List<string>();
            foreach (Cell cell in inputs)
            {
                args.Add("{" + cell.Key + "}");
            }

            format += string.Join(", ", args.ToArray());

            if (method.HasReturn())
            {
                format += string.Format(" should be {{{0}}}", method.GetReturnValueAlias());
            }

            return format.TrimEnd();
        }

        public static bool HasReturn(this MethodInfo method)
        {
            return method.ReturnParameter.ParameterType != typeof(void);
        }

        public static T GetAttribute<T>(this ICustomAttributeProvider provider) where T : Attribute
        {
            object[] atts = provider.GetCustomAttributes(typeof(T), true);
            return atts.Length > 0 ? atts[0] as T : null;
        }

        public static void ForAttribute<T>(this ICustomAttributeProvider provider, Action<T> action) where T : Attribute
        {
            foreach (T attribute in provider.GetCustomAttributes(typeof(T), true))
            {
                action(attribute);
            }
        }

        public static void ForAttributes<T>(this ICustomAttributeProvider provider, Action<T> action) where T : class
        {
            foreach (object attribute in provider.GetCustomAttributes(true))
            {
                var t = attribute as T;
                if (t != null)
                {
                    action(t);
                }
            }
        }

        public static void Call(this MethodInfo method, object target, IStep step, ITestContext context, Counts counts)
        {
            Call(method, target, step, context, o => { });
        }

        public static void Call(this MethodInfo method, object target, IStep step, ITestContext context,
                                Action<object> callback)
        {
            IEnumerable<Cell> cells = method.GetArgumentCells();
            var arguments = new object[cells.Count()];
            int i = 0;
            foreach (Cell cell in cells)
            {
                cell.ReadArgument(context, step, x => arguments[i] = x);
                i++;
            }

            var results = context.ResultsFor(step);

            if (results.HasErrors())
            {
                return;
            }

            try
            {
                object val = method.Invoke(target, arguments);
                if (method.HasReturn())
                {
                    callback(val);
                }
            }
            catch (Exception e)
            {
                Exception ex = e.InnerException ?? e;
                results.CaptureException(ex.ToString());
                context.IncrementExceptions();
            }
        }
    }
}