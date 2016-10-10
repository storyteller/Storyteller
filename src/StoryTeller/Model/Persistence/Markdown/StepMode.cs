using System;

namespace StoryTeller.Model.Persistence.Markdown
{
    public class StepMode : IReaderMode
    {
        public Step Step { get; set; }

        public StepMode(Step step)
        {
            Step = step;
        }

        public StepMode(string firstLine)
        {
            Step = Step.Parse(firstLine);
        }

        public IReaderMode Read(int indention, string text)
        {
            // New step, go on
            if (text.StartsWith("|>")) return null;

            if (text.IsSectionHeader())
            {
                var section = new Section(text.SectionName());
                Step.Collections[section.Key] = section;

                return new SectionMode(section);
            }


            // Not dealing with tables yet
            return this;
        }

        public int Indention { get; set; }
    }

    public class TableParser
    {
        
    }

    public class BigTextParser //: IReaderMode
    {
        
    }
}