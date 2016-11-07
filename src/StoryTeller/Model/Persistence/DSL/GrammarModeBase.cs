using System.Linq;
using Baseline;
using Microsoft.Extensions.Options;

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
                case "header":
                    cell.header = value;
                    break;
                case "cell":
                    cell.Key = value;
                    break;
                case "default":
                    cell.DefaultValue = value;
                    break;
                case "options":
                    cell.options = Option.ParseText(value);
                    break;
                case "editor":
                    cell.editor = value;
                    break;
                case "result":
                    if (value.IsEmpty())
                    {
                        cell.result = false;
                    }
                    else
                    {
                        bool result;
                        if (bool.TryParse(value, out result))
                        {
                            cell.result = result;
                        }
                    }

                    break;
            }
        }

    }
}
