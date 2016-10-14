using System.IO;
using System.Linq;
using Baseline;

namespace StoryTeller.Model.Persistence.Markdown
{
    public enum IdStyle
    {
        Ignore,
        Write
    }

    public class MarkdownWriter
    {
        public static bool ShouldBeBigText(string text)
        {
            if (text.Contains('\n')) return true;
            if (text.Contains('\r')) return true;
            if (text.Contains(',')) return true;
            if (text.Contains('=')) return true;

            return text.Length > 25;
        }

        private readonly TextWriter _writer;
        private readonly IdStyle _style;
        private int _depth = 0;
        public const string SectionEnd = "~~~";
        public const string PipebarEscape = "&pipe;";

        public MarkdownWriter(TextWriter writer, IdStyle style)
        {
            _writer = writer;
            _style = style;
        }

        public static string WriteToText(Specification specification)
        {
            var text = new StringWriter();
            var writer = new MarkdownWriter(text, IdStyle.Write);

            writer.Write(specification);

            return text.ToString();
        }

        public void Write(Specification specification)
        {
            _writer.WriteLine($"# {specification.name}");

            writeMetadata(specification);

            foreach (var child in specification.Children)
            {
                _writer.WriteLine(); // spacer

                (child as Comment)?.WriteText(_depth * 4, _writer);

                var section = child as Section;
                if (section != null)
                {
                    writeTopSection(section);
                }
            }
        }

        private string indention()
        {
            return "".PadRight(_depth*4);
        }

        private void writeSectionHeader(Section section)
        {
            var text = _style == IdStyle.Write 
                ? $"[{section.Key}#{section.id}]" 
                : $"[{section.Key}]";

            write(text);
        }

        private void writeTopSection(Section section)
        {
            writeSectionHeader(section);

            foreach (var cell in section.ActiveCells)
            {
                write($"-> {cell.Key} = {cell.Value}");
            }

            foreach (var child in section.Children)
            {
                (child as Comment)?.WriteText(_depth * 4, _writer);

                var step = child as Step;
                if (step != null)
                {
                    writeStep(step);
                }
            }

            write(SectionEnd);
        }

        private void write(string text)
        {
            _writer.WriteLine(indention() + text);
        }

        private void writeStep(Step step)
        {
            var key = step.Key;
            if (_style == IdStyle.Write)
            {
                key = $"{key}#{step.id}";
            }

            var bigTextValues = step.Values.Where(x => ShouldBeBigText(x.Value)).ToArray();
            var inlineValues = step.Values.Where(x => !ShouldBeBigText(x.Value)).ToArray();

            if (inlineValues.Any())
            {
                // TODO -- deal with *big* text here. 
                var values = inlineValues.Select(x => $"{x.Key}={x.Value}").Join(", ");
                write($"|> {key} {values}");
            }
            else
            {
                write($"|> {key}");
            }

            foreach (var value in bigTextValues)
            {
                write($"{BigTextParser.Delimiter} {value.Key}");

                foreach (var line in value.Value.ReadLines())
                {
                    write(line);
                }

                write(BigTextParser.Delimiter);
                _writer.WriteLine();
            }

            var counter = 1;
            foreach (var collection in step.collections)
            {
                writeChildCollection(collection, counter);
                _writer.WriteLine();
                counter++;
            }
        }

        private void writeChildCollection(Section collection, int counter)
        {
            _depth++;

            // Just getting some vertical spacing for legibility
            if (counter > 1)
            {
                _writer.WriteLine();
            }

            writeSectionHeader(collection);
            foreach (var cell in collection.ActiveCells)
            {
                write($"-> {cell.Key} = {cell.Value}");
            }



            if (collection.IsTabular() && collection.Children.Count > 1)
            {
                writeTableData(collection);
            }
            else
            {
                foreach (var child in collection.Children)
                {
                    if (child is Comment)
                    {
                        child.As<Comment>().WriteText(_depth * 4, _writer);
                    }
                    else
                    {
                        writeStep(child.As<Step>());
                    }
                }
            }

            _depth--;
        }

        private void writeTableData(Section collection)
        {
            var activeCells = collection.GetActiveCells();
            var lengths = activeCells.Select(x => widthOfColumn(collection, x)).ToArray();

            var header = "|";
            for (int i = 0; i < activeCells.Length; i++)
            {
                header += activeCells[i].PadRight(lengths[i]) + "|";
            }

            write(header);

            foreach (var step in collection.Children.OfType<Step>())
            {
                var line = "|";
                for (int i = 0; i < activeCells.Length; i++)
                {
                    var key = activeCells[i];
                    var value = step.Values.ContainsKey(key) ? step.Values[key].Replace("|", PipebarEscape) : string.Empty;

                    line += value.PadRight(lengths[i]) + "|";
                }

                write(line);
            }
        }

        private int widthOfColumn(Section collection, string key)
        {
            var longest = collection.Children.OfType<Step>()
                .Where(x => x.Values.ContainsKey(key))
                .Max(x => x.Values[key].Length);

            return longest > key.Length ? longest : key.Length;
        }

        private void writeMetadata(Specification spec)
        {
            _writer.WriteLine();

            _writer.WriteLine($"-> {nameof(Node.id)} = {spec.id}");
            _writer.WriteLine($"-> {SpecConstants.Lifecycle} = {spec.Lifecycle}");
            _writer.WriteLine($"-> {SpecConstants.MaxRetries} = {spec.MaxRetries}");
            _writer.WriteLine($"-> {SpecConstants.LastUpdated} = {spec.LastUpdated:O}");
            _writer.WriteLine($"-> {SpecConstants.ExpirationPeriod} = {spec.ExpirationPeriod}");
            _writer.WriteLine($"-> {SpecConstants.Tags} = {spec.Tags.Join(", ")}");
        }
    }
}