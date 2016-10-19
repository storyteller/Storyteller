using System;
using System.IO;
using System.Linq;
using Baseline;

namespace StoryTeller.Model.Persistence.DSL
{
    public class FixtureLoader
    {
        public static string SelectFixturePath(string baseDirectory)
        {
            var specPath = baseDirectory.AppendPath("Fixtures");
            if (Directory.Exists(specPath)) return specPath;

            return specPath;
        }

        public static FixtureLibrary LoadFromPath(string path)
        {
            var fixturePaths = Directory.GetFiles(path)
                .Where(file =>
                    Path.GetExtension(file).Equals(
                        ".md",
                        StringComparison.OrdinalIgnoreCase));

            var lib = new FixtureLibrary();

            foreach (var fp in fixturePaths)
            {
                var fixture = FixtureReader.ReadFrom(File.ReadAllText(fp));
                lib.Models[fixture.key] = fixture;
            }

            return lib;
        }
    }
}
