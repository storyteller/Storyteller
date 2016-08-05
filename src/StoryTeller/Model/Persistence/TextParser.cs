using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;

namespace StoryTeller.Model.Persistence
{
    public static class TextParser
    {
        public static Specification Parse(string text)
        {
            var parser = new SpecParser();
            text.ReadLines(x => parser.Read(x.Trim()));

            return parser.Specification;
        }


        public class SpecParser
        {
            private readonly Specification _specification = new Specification();
            private readonly Stack<INodeHolder> _holders = new Stack<INodeHolder>();

            public SpecParser()
            {
                _holders.Push(_specification);
            }

            public Specification Specification
            {
                get { return _specification; }
            }

            public void Read(string text)
            {
                if (text.StartsWith("=>"))
                {
                    parseSection(text);
                }

                if (text.StartsWith("Name:", StringComparison.OrdinalIgnoreCase))
                {
                    parseName(text);
                }

                if (text.StartsWith("*"))
                {
                    parseStep(text);
                }

                if (text.IsEmpty())
                {
                    _holders.Pop();
                }

                if (text.StartsWith("->"))
                {
                    startNewCollection(text);
                }

            }



            private void parseSection(string text)
            {
                var parts = text.Substring(2).Trim().Split('#');
                var section = new Section(parts.First());
                if (parts.Count() == 2)
                {
                    section.id = parts.Last();
                }

                _specification.Children.Add(section);
                _holders.Push(section);
            }

            private void parseName(string text)
            {
                _specification.name = text.Split(':').Last().Trim();
            }

            private void parseStep(string text)
            {
                var parts = text.Split(':');
                var keys = parts.First().TrimStart('*').Trim().Split('#');

                var key = keys.First();
                var id = keys.Count() == 2 ? keys.Last() : Guid.NewGuid().ToString();
                var step = new Step(key) {id = id};

                applyValues(parts.Last(), step);

                _holders.Peek().Children.Add(step);
            }

            private static void applyValues(string valueData, Step step)
            {
                var data = valueData.Split(',');
                foreach (string property in data)
                {
                    var propertyParts = property.Split('=');
                    step.Values.Add(propertyParts.First().Trim(), propertyParts.Last().Trim());
                }
            }

            private void startNewCollection(string text)
            {
                var collectionName = text.Replace("->", "").Trim();
                var lastStep = _holders.Peek().Children.LastOrDefault() as Step;

                if (lastStep == null)
                {
                    throw new Exception("No step to add this collection to in the tree");
                }

                var section = lastStep.Collections[collectionName];
                _holders.Push(section);
            }
        }
    }
}