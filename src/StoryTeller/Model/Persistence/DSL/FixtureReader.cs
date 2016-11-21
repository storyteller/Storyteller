using System;
using System.IO;

namespace StoryTeller.Model.Persistence.DSL
{
    public class FixtureReader : ReaderBase<FixtureModel>
    {
        public FixtureReader(TextReader reader)
            : base(reader)
        {
            Target = new FixtureModel("");
            push(new HeaderMode(Target));
        }

        public static FixtureModel ReadFromFile(string file)
        {
            using (var stream = new FileStream(file, FileMode.Open))
            {
                using (var streamReader = new StreamReader(stream))
                {
                    using (var reader = new FixtureReader(streamReader))
                    {
                        var fixture = reader.Read();
                        fixture.key = Path.GetFileNameWithoutExtension(file);

                        return fixture;
                    }
                }
            }
        }

        public static FixtureModel ReadFrom(string text)
        {
            using (var reader = new FixtureReader(new StringReader(text)))
            {
                return reader.Read();
            }
        }

        protected override void stoppedWithError(int lineNumber, Exception exception)
        {
            Target.AddError(new GrammarError
            {
                error = $"Parsing failed on line {lineNumber} with {Environment.NewLine}{exception}"
            });
        }
    }
}