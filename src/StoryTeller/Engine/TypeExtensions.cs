using System;
using System.Collections;
using System.Collections.Generic;
using StoryTeller.Engine.Reflection;

namespace StoryTeller.Engine
{
    public static class TypeExtensions
    {
        public static string GetFixtureAlias(this Type type)
        {
            var att = type.GetAttribute<AliasAsAttribute>();
            if (att != null)
            {
                return att.Alias;
            }

            return type.Name.Replace("Fixture", "");
        }

        public static bool Is<T>(this object target)
        {
            return typeof (T).IsAssignableFrom(target.GetType());
        }

        public static bool IsGenericEnumerable(this Type type)
        {
            var genericArgs = type.GetGenericArguments();
            return genericArgs.Length == 1 && typeof(IEnumerable<>).MakeGenericType(genericArgs).IsAssignableFrom(type);
        }

        public static void CallOn<T>(this object target, Action<T> action) where T : class
        {
            var subject = target as T;
            if (subject != null)
            {
                try
                {
                    action(subject);
                }
                catch (InvalidOperationException e)
                {
                    if (!e.ToString().Contains("The calling thread"))
                    {
                        throw;
                    }
                }
            }
        }

        public static void CallOnEach<T>(this IEnumerable enumerable, Action<T> action) where T : class
        {
            foreach (object o in enumerable)
            {
                o.CallOn(action);
            }
        }
    }
}