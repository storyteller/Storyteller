using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Grammars.Tables;

namespace StoryTeller.Model
{
    public class Table : GrammarModel
    {
        public static readonly string DefaultCollectionName = "rows";

        public Cell[] cells;
        public string collection = DefaultCollectionName;
        public string title;

        public bool hasBeforeStep;
        public bool hasAfterStep;


        public Table() : base("table")
        {
        }

        protected Table(string key) : base(key)
        {
            
        }

        public override string TitleOrFormat()
        {
            return title;
        }

        public override string ToMissingCode(bool withinParagraph = false)
        {
            var hidden = withinParagraph ? HiddenAttributeDeclaration : string.Empty;

            return $@"
        {hidden}
        [{typeof(ExposeAsTableAttribute).Namespace}.ExposeAsTable(`{title}`)]
        public void {key}({cells.Select(x => x.ToDeclaration()).Join(", ")})
        {{
            throw new System.NotImplementedException();
        }}
".TrimEnd().Replace('`', '\"');
        }

        protected internal override void configureSampleStep(Step step)
        {
            var section = findSection(step);
            for (int i = 0; i < 3; i++)
            {
                var row = section.AddStep("row");
                cells.Each(x => x.AddSampleValue(row));
            }
        }

        private Section findSection(Step step)
        {
            return step.Collections[collection];
        }

        public override GrammarModel ApplyOverrides(GrammarModel grammar)
        {
            // IT'S IMPORTANT IN THIS CASE THAT THE CODE WINS IN THE COLLECTION NAME
            var table = new Table {key = key, hasAfterStep = hasAfterStep, hasBeforeStep = hasBeforeStep, collection = collection};

            var over = grammar as Table;
            if (over == null)
            {
                table.title = title;
                table.collection = collection;
                table.cells = cells?.Select(c => c.ApplyOverrides(null)).ToArray();

                return table;
            }

            table.title = over.title.IsNotEmpty() ? over.title : title;

            var matchedCells = cells?.Select(c =>
            {
                var match = over.cells.FirstOrDefault(x => x.Key == c.Key);
                return c.ApplyOverrides(match);
            }).ToList() ?? new List<Cell>();

            var keys = cells.Select(x => x.Key).ToList();

            var missingCells = over.cells.Where(x => !keys.Contains(x.Key)).Select(x => x.ApplyOverrides(null));
            table.cells = matchedCells.Concat(missingCells).ToArray();

            return table;
        }

        public override void PostProcessAndValidate(IStepValidator stepValidator, Step step)
        {
            if (!step.Collections.Has(collection))
            {
                if (step.Collections.Count == 1)
                {
                    var single = step.Collections.Single();
                    var clone = single.CloneAs(collection);
                    step.Collections[collection] = clone;

                    step.Collections.Remove(single.Key);
                }
            }

            var section = findSection(step);
            if (section == null)
            {
                stepValidator.AddError("Missing step collection");
                return;
            }

            stepValidator.Start(section, null);

            var i = 0;
            foreach (var child in section.Children.OfType<Step>())
            {
                i++;
                stepValidator.Start(i, child);

                child.ProcessCells(cells, stepValidator);

                stepValidator.End(child);
            }

            stepValidator.End(section);
        }
    }
}
