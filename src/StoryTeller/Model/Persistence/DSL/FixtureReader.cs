using System.IO;

namespace StoryTeller.Model.Persistence.DSL
{
    public class FixtureReader : ReaderBase<FixtureModel>
    {
        public static FixtureModel ReadFromFile(string file)
        {
            using (var stream = new FileStream(file, FileMode.Open))
            using (var streamReader = new StreamReader(stream))
            using (var reader = new FixtureReader(streamReader))
            {
                return reader.Read();
            }
        }

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
            push(new HeaderMode(Target));
        }
    }
}
