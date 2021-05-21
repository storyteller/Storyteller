using Baseline;

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
                    cell.Header = value;
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
                    cell.Editor = value;
                    break;
                case "result":
                    if (value.IsEmpty())
                    {
                        cell.IsResult = false;
                    }
                    else
                    {
                        bool result;
                        if (bool.TryParse(value, out result))
                        {
                            cell.IsResult = result;
                        }
                    }

                    break;
            }
        }

    }
}
