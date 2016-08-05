using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Baseline;

namespace StoryTeller.Util
{
    public static class TemplateParser
    {
        private static readonly string TemplateGroup;
        private static readonly Regex TemplateExpression;

        static TemplateParser()
        {
            TemplateGroup = "Template";
            TemplateExpression = new Regex(@"\{(?!\{)(?<" + TemplateGroup + @">[A-Za-z0-9_-]+)\}(?!\})", RegexOptions.Compiled);
        }

        public static string Parse(string template, IDictionary<string, string> substitutions)
        {
            var values = new DictionaryKeyValues(substitutions);

            return Parse(template, values);
        }

        public static bool ContainsTemplates(string template)
        {
            return TemplateExpression.Matches(template).Count > 0;
        }

        public static IEnumerable<string> GetSubstitutions(string template)
        {
            var matches = TemplateExpression.Matches(template);
            foreach (Match match in matches)
            {
                yield return match.Groups[TemplateGroup].Value;
            }
        }

        public static string Parse(string template, IKeyValues values)
        {
            while (ContainsTemplates(template))
            {
                template = parse(template, values);
            }

            template = nowFlattenDoubleCurlies(template);
            return template;
        }

        private static string nowFlattenDoubleCurlies(string template)
        {
            return template.Replace("{{", "{").Replace("}}", "}");
        }

        static string parse(string template, IKeyValues values)
        {
            var matches = TemplateExpression.Matches(template);
            if (matches.Count == 0) return template;

            var lastIndex = 0;
            var builder = new StringBuilder();
            foreach (Match match in matches)
            {
                builder.Append(template.Substring(lastIndex, match.Index - lastIndex));

                var key = match.Groups[TemplateGroup].Value;
                if ((lastIndex == 0 || match.Index > lastIndex) && values.Has(key))
                {
                    builder.Append(values.Get(key));
                }
                else
                {
                    builder.Append("{{" + key + "}}"); // escape the missing key so that the while loop ContainsTemplate will terminate
                }

                lastIndex = match.Index + match.Length;
            }

            if (lastIndex < template.Length)
            {
                builder.Append(template.Substring(lastIndex, template.Length - lastIndex));
            }

            return builder.ToString();
        }

        public interface IKeyValues<T>
        {
            bool Has(string key);
            T Get(string key);
            IEnumerable<string> GetKeys();

            bool ForValue(string key, Action<string, T> callback);
        }

        public interface IKeyValues : IKeyValues<string>
        {

        }



        public class DictionaryKeyValues<T> : IKeyValues<T>
        {
            private readonly IDictionary<string, T> _dictionary;

            public DictionaryKeyValues()
                : this(new Dictionary<string, T>())
            {
            }

            public DictionaryKeyValues(IDictionary<string, T> dictionary)
            {
                _dictionary = dictionary;
            }

            public IDictionary<string, T> Dictionary
            {
                get { return _dictionary; }
            }

            public bool Has(string key)
            {
                return _dictionary.ContainsKey(key);
            }

            public T Get(string key)
            {
                return _dictionary[key];
            }

            public IEnumerable<string> GetKeys()
            {
                return _dictionary.Keys;
            }

            public bool ForValue(string key, Action<string, T> callback)
            {
                if (!Has(key)) return false;

                callback(key, Get(key));

                return true;
            }
        }

        public class DictionaryKeyValues : DictionaryKeyValues<string>, IKeyValues
        {
            public DictionaryKeyValues()
            {
            }

            public DictionaryKeyValues(IDictionary<string, string> dictionary) : base(dictionary)
            {
            }
        }
    }

    public static class KeyValueExtensions
    {
        public static void ReadAll(this TemplateParser.IKeyValues values, Action<string, string> callback)
        {
            values.GetKeys().ToList().Each(key => callback(key, values.Get(key)));
        }
    }
}