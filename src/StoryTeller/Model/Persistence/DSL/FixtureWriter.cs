using System;
using System.Collections.Generic;
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

                if (grammar is Table)
                {
                    writeTable((Table)grammar, writer);
                }

                if (grammar is EmbeddedSection)
                {
                    writeEmbed((EmbeddedSection)grammar, writer);
                }

                writer.WriteLine();
                writer.WriteLine();
            }
        }

        private static void writeEmbed(EmbeddedSection grammar, TextWriter writer)
        {
            writer.WriteLine($"### {grammar.title}");
            writer.WriteLine($"|embed|{grammar.fixture.key}|");
        }

        private static void writeTable(Table grammar, TextWriter writer)
        {
            writer.WriteLine($"### {grammar.title}");
            var headers = new[] {"table"}.Concat(grammar.cells.Select(x => x.Key)).ToArray();

            var defaults = new string[] {"default"}.Concat(grammar.cells.Select(x => x.DefaultValue ?? string.Empty)).ToArray();
            var options = new string[] {"options"}.Concat(grammar.cells.Select(x => Option.Write(x.options))).ToArray();
            var editors = new string[] {"editor"}.Concat(grammar.cells.Select(x => x.editor ?? string.Empty)).ToArray();
            var results = new string[] {"result"}.Concat(grammar.cells.Select(x => x.result.ToString())).ToArray();

            writeTable(new string[][] {headers, defaults, options, editors, results}, writer);

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