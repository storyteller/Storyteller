namespace StoryTeller.Model.Persistence.DSL
{
    public class ParagraphMode : GrammarModeBase
    {
        private readonly Paragraph _paragraph;

        public ParagraphMode(Paragraph paragraph)
        {
            _paragraph = paragraph;
        }

        public override IReaderMode Read(int indention, string text)
        {
            if (text.StartsWith("*"))
            {
                var key = text.TrimStart('*').Trim();

                _paragraph.ChildKeys.Add(key);

                return this;
            }
            else
            {
                return null;
            }
        }
    }
}