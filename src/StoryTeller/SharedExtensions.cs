using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using FubuCore.Util;
using StoryTeller.Domain;
using StoryTeller.Persistence;

namespace StoryTeller
{
    public static class SharedExtensions
    {
        /// <summary>
        /// Returns the string unchanged if it is no longer than <paramref name="maxLength"/>.
        /// If the string is longer, the excess is trimmed off, and <paramref name="replacmentForExcess"/> is appended to the end.
        /// </summary>
        /// <remarks>The returned string will be longer than <paramref name="maxLength"/> if <paramref name="replacmentForExcess"/> is not an empty string.</remarks>
        /// <param name="baseString">The string to work with</param>
        /// <param name="maxLength">The maximum number of characters from <paramref name="baseString"/> that will be returned.</param>
        /// <param name="replacmentForExcess">The string that will be appended in place of any trimmed characters</param>
        [Obsolete("this should be in FubuCore")]
        public static string TrimToLength(this string baseString, int maxLength, string replacmentForExcess)
        {
            if (baseString.IsEmpty()) return string.Empty;

            if (baseString.Length <= maxLength) return baseString;

            return baseString.Substring(0, maxLength - replacmentForExcess.Length) + replacmentForExcess;
        }

        public static IList<IStep> AllSteps(this IEnumerable<ITestPart> parts)
        {
            return parts.Where(x => x is IStep).Select(x => (IStep) x).ToList();
        }

        private static Func<T, bool> finderWithin<T, U>(Predicate<U> predicate) where U : class
        {
            return x =>
            {
                var u = x as U;
                return u == null ? false : predicate(u);
            };
        }

        public static IEnumerable<T> WhereMatching<T, U>(this IEnumerable<T> enumerable, Predicate<U> predicate)
            where U : class
            where T : class
        {
            Func<T, bool> finder = finderWithin<T, U>(predicate);
            return enumerable.Where(finder);
        }

        public static U First<T, U>(this IEnumerable<T> enumerable, Predicate<U> predicate)
            where U : class
            where T : class
        {
            Func<T, bool> finder = finderWithin<T, U>(predicate);
            return enumerable.First(finder) as U;
        }

        public static T As<T>(this object target)
        {
            return (T) target;
        }

        public static T Parse<T>(this string value)
        {
            return (T) Convert.ChangeType(value, typeof (T));
        }

        public static bool IsTrue(this string value)
        {
            return bool.Parse(value);
        }

        public static bool IsTrue(this object value)
        {
            return value is bool ? (bool) value : value.ToString().IsTrue();
        }

        public static int ToInt(this string stringValue)
        {
            return int.Parse(stringValue);
        }

        public static bool IsSame(this object target, object other)
        {
            return ReferenceEquals(target, other);
        }

        public static void MoveUp<T>(this IList<T> list, T subject)
        {
            int index = list.IndexOf(subject);
            if (index == 0) return;

            list.Remove(subject);
            list.Insert(index - 1, subject);
        }

        public static void MoveToTop<T>(this IList<T> list, T subject)
        {
            int index = list.IndexOf(subject);
            if (index == 0) return;

            list.Remove(subject);
            list.Insert(0, subject);
        }

        public static void MoveDown<T>(this IList<T> list, T subject)
        {
            if (ReferenceEquals(subject, list.LastOrDefault())) return;

            int index = list.IndexOf(subject);
            list.Remove(subject);
            list.Insert(index + 1, subject);
        }

        public static void MoveToBottom<T>(this IList<T> list, T subject)
        {
            if (ReferenceEquals(subject, list.LastOrDefault())) return;

            list.Remove(subject);
            list.Add(subject);
        }

        public static INode WithProperties(this INode node, Cache<string, string> values)
        {
            values.Each((key, val) => node[key] = val);
            return node;
        }

        public static T Configure<T>(this T target, Action<T> action)
        {
            action(target);
            return target;
        }
    }
}