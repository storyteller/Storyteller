using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;

namespace StoryTeller.Model
{
    public class Paragraph : GrammarModel, IModelWithCells
    {
        public GrammarModel[] children = new GrammarModel[0];
        public string title;

        public Paragraph() : base("paragraph")
        {
        }

        public Paragraph(IEnumerable<GrammarModel> children) : this()
        {
            this.children = children.ToArray();
            AddErrorRange(this.children.SelectMany(x => x.errors));
        }

        public Cell[] cells
        {
            get
            {
                return children.OfType<IModelWithCells>().Where(x => x.cells != null).SelectMany(x => x.cells).ToArray();
            }
        }

        protected internal override void configureSampleStep(Step step)
        {
            foreach (var child in children)
                child.configureSampleStep(step);
        }

        public void AddChild(GrammarModel grammar)
        {
            var newGrammars = new[] {grammar};
            if (children == null || children.Length == 0)
                children = newGrammars;
            else
                children = children.Concat(newGrammars).ToArray();
        }

        public override string TitleOrFormat()
        {
            return title;
        }

        public override GrammarModel ApplyOverrides(GrammarModel grammar)
        {
            var @override = grammar as Paragraph;
            if (@override == null) return this;


            var newParagraph = new Paragraph
            {
                key = key
            };

            if (@override.title.IsNotEmpty() && @override.title != key)
                newParagraph.title = @override.title;


            if (@override.children == null || @override.children.Length == 0)
            {
                newParagraph.children = children;
            }
            else
            {
                var nonSilentIndex = 0;

                foreach (var child in children)
                    if (child is Silent)
                    {
                        newParagraph.AddChild(child);
                    }
                    else
                    {
                        if (@override.children.Length > nonSilentIndex)
                        {
                            var overridenChild = @override.children[nonSilentIndex++];
                            newParagraph.AddChild(child.ApplyOverrides(overridenChild));
                        }
                        else
                        {
                            newParagraph.AddChild(child);
                        }
                    }
            }

            return newParagraph;
        }


        public override string ToMissingCode(bool withinParagraph = false)
        {
            // just assume that it's all inline
            for (var i = 0; i < children.Length; i++)
                children[i].key = $"{key}_{i + 1}";

            var childrenCode = children.Select(child => child.ToMissingCode(true))
                .Join(Environment.NewLine + Environment.NewLine);

            var childrenAdds = children.Select(child => $"            _ += this[\"{child.key}\"];")
                .Join(Environment.NewLine);

            return $@"
{childrenCode}

        public {typeof(IGrammar).FullName} {key}()
        {{
            return Paragraph(""{title}"", _ => {{
{childrenAdds}
            }});

        }}
";
        }
    }
}