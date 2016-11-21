using Baseline;

namespace StoryTeller.Model.Persistence.Markdown
{
    public class StepMode : IReaderMode
    {
        public StepMode(Step step)
        {
            Step = step;
        }

        public StepMode(string firstLine)
        {
            Step = Step.Parse(firstLine);
        }

        public Step Step { get; set; }

        public IReaderMode Read(int indention, string text)
        {
            // New step, go on
            if (text.StartsWith("|>") || text.StartsWith(">")) return null;

            if (text.IsSectionHeader())
            {
                var section = text.ToSection();
                Step.Collections[section.Key] = section;

                return new SectionMode(section)
                {
                    Indention = indention
                };
            }

            if (text.IsTableLine())
            {
                var section = new Section(Table.DefaultCollectionName);
                Step.Collections[Table.DefaultCollectionName] = section;

                var table = new TableParser(section) {Indention = indention};

                table.Read(indention, text);

                return table;
            }

            if (text.StartsWith(BigTextParser.Delimiter))
            {
                return new BigTextParser(Step, text)
                {
                    Indention = indention
                };
            }

            if (text.IsEmpty()) return this;

            return null;
        }

        public int Indention { get; set; }
    }
}