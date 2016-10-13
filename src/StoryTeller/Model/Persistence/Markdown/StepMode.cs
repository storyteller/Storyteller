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
            if (text.StartsWith("|>")) return null;

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
                var section = new Section("rows");
                var table = new TableParser(section) {Indention = indention};

                table.Read(indention, text);

                return table;
            }

            if (text.IsEmpty()) return this;

            return null;
        }

        public int Indention { get; set; }
    }

    public class BigTextParser //: IReaderMode
    {
    }
}