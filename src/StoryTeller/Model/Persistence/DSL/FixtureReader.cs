using System.IO;

namespace StoryTeller.Model.Persistence.DSL
{
    public class FixtureReader : BaseReader<FixtureModel>
    {
        public static FixtureModel ReadFrom(string text)
        {
            var reader = new FixtureReader(new StringReader(text));
            return reader.Read();
        }

        public FixtureReader(TextReader reader)
            : base(reader)
        {
            Target = new FixtureModel("");
            Push(new HeaderMode(Target));
        }
    }
}
