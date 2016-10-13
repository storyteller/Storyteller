using System.Linq;

namespace StoryTeller.Model.Persistence.DSL
{
    public abstract class GrammarModeBase : IReaderMode
    {
        public int Indention { get; set; }

        public abstract IReaderMode Read(int indention, string text);

        protected void applyValue(string target, Cell cell, string value)
        {
            switch (target.ToLower())
            {
                case "cell":
                    cell.Key = value;
                    break;
                case "default":
                    cell.DefaultValue = value;
                    break;
                case "options":
                    cell.options = parseOptions(value);
                    break;
                case "editor":
                    cell.editor = value;
                    break;
                case "result":
                    cell.result = value;
                    break;
            }
        }

        protected Option[] parseOptions(string line)
        {
            if (string.IsNullOrWhiteSpace(line)) return null;

            var values = line.Split(',');
            return values.Select(x => new Option(x.Trim(), x.Trim())).ToArray();
        }
    }
}
