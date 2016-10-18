using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace StoryTeller.Model.Persistence.DSL
{
    public class FixtureLoader
    {
        public static IEnumerable<FixtureModel> LoadFromPath(string path)
        {
            var fixturePaths = Directory.GetFiles(path)
                .Where(file =>
                    Path.GetExtension(file).Equals(
                        ".fixture",
                        StringComparison.OrdinalIgnoreCase));

            foreach (var fixture in fixturePaths)
            {
                yield return FixtureReader.ReadFrom(File.ReadAllText(fixture));
            }
        }
    }
}
