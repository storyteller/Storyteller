using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence.DSL
{
    public class ParagraphMode : GrammarModeBase
    {
        private readonly Paragraph _paragraph;
        private readonly FixtureModel _fixture;

        public ParagraphMode(Paragraph paragraph, FixtureModel fixture)
        {
            _paragraph = paragraph;
            _fixture = fixture;
        }

        public override IReaderMode Read(int indention, string text)
        {
            if (text.StartsWith("*"))
            {
                var mode = new GrammarMode(_fixture, g => _paragraph.AddChild(g));
                mode.Read(indention, text);

                return mode;
            }

            // It's a new grammar, so get on out of here
            if (text.IsHeaderTwo() || text.IsHeaderThree()) return null;

            return this;
        }
    }
}