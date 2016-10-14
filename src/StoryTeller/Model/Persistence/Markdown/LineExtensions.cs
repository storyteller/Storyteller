using System.Collections.Generic;
using System.Linq;
using Baseline;

namespace StoryTeller.Model.Persistence.Markdown
{
    public static class LineExtensions
    {
        public static bool IsHeaderOne(this string line)
        {
            var trimmed = line.Trim();
            return trimmed.StartsWith("#") && !trimmed.StartsWith("##");
        }

        public static bool IsMetadata(this string line)
        {
            var trimmed = line.Trim();

            return trimmed.StartsWith("->");
        }

        public static void ParseMetadata(this string line, out string key, out string value)
        {
            var trimmed = line.Substring(2).Trim();
            var parts = trimmed.Split('=');

            key = parts[0].Trim();
            value = parts[1].Trim();
        }

        public static IEnumerable<string> Tokenize(this string content)
        {
            var searchString = content.Trim();
            if (searchString.Length == 0) return new string[0];

            var parser = new TokenParser();
            content.ToCharArray().Each(parser.Read);

            // Gotta force the parser to know it's done
            parser.Read('\n');

            return parser.Tokens;
        }

        public static bool IsTableLine(this string line)
        {
            var trimmed = line.Trim();
            return trimmed.StartsWith("|") && trimmed.EndsWith("|");
        }

        public static string[] ToTableValues(this string line)
        {
            var trimmed = line.Trim().TrimStart('|').TrimEnd('|');
            return trimmed.ToDelimitedArray('|').Select(x => x.Replace(MarkdownWriter.PipebarEscape, "|")).ToArray();
        }

        public static bool StartsStep(this string line)
        {
            return line.StartsWith("|>");
        }

        public static bool StartsSectionOrStep(this string line)
        {
            return line.StartsStep() || line.IsSectionHeader();
        }

        public static bool IsSectionHeader(this string line)
        {
            return line.StartsWith("[") && line.EndsWith("]");
        }

        public static Section ToSection(this string line)
        {
            var key = line.TrimStart('[').TrimEnd(']').Trim();
            if (key.Contains("#"))
            {
                var parts = key.ToDelimitedArray('#');
                return new Section(parts[0]) {id = parts[1]};
            }

            return new Section(key);
        }


        public class TokenParser
        {
            private readonly List<string> _tokens = new List<string>();
            private List<char> _characters;
            private IMode _mode;

            public TokenParser()
            {
                _mode = new Searching(this);
            }

            public void Read(char c)
            {
                _mode.Read(c);
            }

            private void addChar(char c)
            {
                _characters.Add(c);
            }

            public IEnumerable<string> Tokens => _tokens;

            private void startToken(IMode mode)
            {
                _mode = mode;
                _characters = new List<char>();
            }

            private void endToken()
            {
                var @string = new string(_characters.ToArray());
                _tokens.Add(@string);

                _mode = new Searching(this);
            }


            public interface IMode
            {
                void Read(char c);
            }

            public class Searching : IMode
            {
                private readonly TokenParser _parent;

                public Searching(TokenParser parent)
                {
                    _parent = parent;
                }

                public void Read(char c)
                {
                    if (char.IsWhiteSpace(c)) return;

                    if (c == '"')
                    {
                        _parent.startToken(new InsideQuotedToken(_parent));
                    }
                    else
                    {
                        var normalToken = new InsideNormalToken(_parent);
                        _parent.startToken(normalToken);
                        normalToken.Read(c);
                    }
                }
            }

            public class InsideQuotedToken : IMode
            {
                private readonly TokenParser _parent;

                public InsideQuotedToken(TokenParser parent)
                {
                    _parent = parent;
                }


                public void Read(char c)
                {
                    if (c == '"')
                    {
                        _parent.endToken();
                    }
                    else
                    {
                        _parent.addChar(c);
                    }
                }
            }

            public class InsideNormalToken : IMode
            {
                private readonly TokenParser _parent;

                public InsideNormalToken(TokenParser parent)
                {
                    _parent = parent;
                }

                public void Read(char c)
                {
                    if (char.IsWhiteSpace(c))
                    {
                        _parent.endToken();
                    }
                    else
                    {
                        _parent.addChar(c);
                    }
                }
            }
        }
    }
}