using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;

namespace ST.Docs.Transformation
{
    public class Token
    {
        public static readonly string Start = "<[";
        public static readonly string End = "]>";

        public int FirstIndex;
        public int LastIndex;

        public string Key;
        public string Data;

        public static IEnumerable<Token> FindTokens(string text)
        {
            if (!text.Contains(Start)) yield break;
            
            int position = 0;
            var token = Find(text, position);
            while (token != null)
            {
                yield return token;
                position = token.LastIndex + 1;
                token = Find(text, position);
            }
        }

        public static Token Find(string text, int position)
        {
            var i1 = text.IndexOf(Start, position);
            if (i1 < 0) return null;

            var i2 = text.IndexOf(End, i1);
            if (i2 < 0) throw new Exception("Mismatched <[***]> delimiters starting at position " + i1);

            var raw = text.Substring(i1 + 2, i2 - i1 - 2);
            var parts = raw.Split(':');

            return new Token
            {
                Data = parts.Length > 1 ? parts.Skip(1).Join(":").Trim() : null,
                FirstIndex = i1,
                LastIndex = i2 + 1,
                Key = parts.First()
            };
        }
    }
}