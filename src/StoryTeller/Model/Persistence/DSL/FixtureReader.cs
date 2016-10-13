using System.IO;

namespace StoryTeller.Model.Persistence.DSL
{
    public class FixtureReader : ReaderBase<FixtureModel>
    {
        public static FixtureModel ReadFrom(string text)
        {
            using (var reader = new FixtureReader(new StringReader(text)))
            {
                return reader.Read();
            }
        }

        public FixtureReader(TextReader reader)
            : base(reader)
        {
            Target = new FixtureModel("");
            Push(new HeaderMode(Target));
        }
    }
}
