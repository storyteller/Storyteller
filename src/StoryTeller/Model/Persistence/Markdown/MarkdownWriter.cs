using System.IO;
using System.Linq;
using Baseline;

namespace StoryTeller.Model.Persistence.Markdown
{
    public class MarkdownWriter
    {
        private readonly TextWriter _writer;
        private int _depth = 0;

        public MarkdownWriter(TextWriter writer)
        {
            _writer = writer;
        }

        public static string WriteToText(Specification specification)
        {
            var text = new StringWriter();
            var writer = new MarkdownWriter(text);

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

                (child as Comment)?.WriteText(_writer);

                if (child is Section)
                    writeTopSection((Section) child);
            }
        }

        private string indention()
        {
            return "".PadRight(_depth*4);
        }

        private void writeTopSection(Section section)
        {
            _writer.WriteLine($"[{section.Key}]");

            foreach (var cell in section.ActiveCells)
            {
                write($"-> {cell.Key} = {cell.Value}");
            }

            foreach (var child in section.Children)
            {
                (child as Comment)?.WriteText(_writer);

                if (child is Step) writeStep((Step)child);
            }
        }

        private void write(string text)
        {
            _writer.WriteLine(indention() + text);
        }

        private void writeStep(Step step)
        {
            var hasValues = step.Values.Any();
            if (hasValues)
            {
                // TODO -- deal with *big* text here. 
                var values = step.Values.Select(x => $"{x.Key}={x.Value}").Join(", ");
                write($"|> {step.Key} {values}");
            }
            else
            {
                write($"|> {step.Key}");
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

            write($"[{collection.Key}]");
            foreach (var cell in collection.ActiveCells)
            {
                write($"-> {cell.Key} = {cell.Value}");
            }



            if (collection.IsAllTheSameTypeOfStep() && collection.Children.Count > 1)
            {
                writeTableData(collection);
            }
            else
            {
                foreach (var child in collection.Children)
                {
                    if (child is Comment)
                    {
                        child.As<Comment>().WriteText(_writer);
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
                    var value = step.Values.ContainsKey(key) ? step.Values[key] : string.Empty;

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