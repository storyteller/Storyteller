using System;
using System.IO;
using System.Linq;
using Baseline;

namespace StoryTeller.Model.Persistence.DSL
{
    public static class FixtureWriter
    {
        public static string Write(FixtureModel model)
        {
            var writer = new StringWriter();
            Write(model, writer);

            return writer.ToString();
        }

        public static void Write(FixtureModel model, TextWriter writer)
        {
            writer.WriteLine($"# {model.title}");
            writer.WriteLine();
            writer.WriteLine();

            var grammars = model.grammars.Where(x => x.key != "TODO").OrderBy(x => x.key);
            foreach (var grammar in grammars)
            {
                writer.WriteLine($"## {grammar.key}");


                if (grammar is Sentence)
                {
                    writeSentence((Sentence)grammar, writer);
                }

                writer.WriteLine();
                writer.WriteLine();
            }
        }

        public static void Write(FixtureModel model, string file)
        {
            using (var stream = new FileStream(file, FileMode.Create))
            {
                var writer = new StreamWriter(stream);

                Write(model, writer);
            }

            var text = Write(model);
            new FileSystem().WriteStringToFile(file, text);
        }

        private static void writeSentence(Sentence sentence, TextWriter writer)
        {
            writer.WriteLine($"### {sentence.format}");

            if (sentence.cells.Any())
            {
                var header = new string[] { "cell", "default", "editor", "options" };
                var rows = sentence.cells.Select(cell =>
                {
                    return new string[] {cell.Key, cell.DefaultValue, cell.editor, Option.Write(cell.options)};
                });

                var allRows = new string[][] {header}.Concat(rows).ToArray();
                writeTable(allRows, writer);
            }
        }



        private static void writeTable(string[][] rows, TextWriter writer)
        {
            var columnCount = rows[0].Length;
            var widths = new int[columnCount];
            for (int i = 0; i < widths.Length; i++)
            {
                widths[i] = rows.Select(x => x[i]?.Length ?? 0).Max();
            }

            foreach (var row in rows)
            {
                writer.Write("|");
                for (int i = 0; i < widths.Length; i++)
                {
                    writer.Write((row[i] ?? string.Empty).PadRight(widths[i]));
                    writer.Write("|");
                }
                writer.WriteLine();
            }
        }
    }
}