using HtmlTags;
using StoryTeller.Engine;
using StoryTeller.Html;

namespace StoryTeller.UserInterface.Editing.HTML.Tables
{
    public class OptionalColumnTag : LinkTag
    {
        public OptionalColumnTag(Cell cell)
            : base(cell.Header + ";", "#", GrammarConstants.COLUMN_ADDER, cell.Key)
        {
            MetaData(GrammarConstants.KEY, cell.Key);
            this.AddSafeClassName("add" + cell.Key);
        }
    }
}