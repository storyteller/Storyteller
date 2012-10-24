using HtmlTags;
using HtmlTags.Extended.TagBuilders;
using StoryTeller.Engine;
using StoryTeller.Html;

namespace StoryTeller.UserInterface.Editing.HTML.Tables
{
    public class CellHeaderTag : HtmlTag
    {
        public CellHeaderTag(Cell cell)
            : base("th")
        {
            Text(cell.Header);
            this.AddSafeClassName(cell.Key);
            MetaData("key", cell.Key);
            MetaData("mandatory", !cell.HasDefault());
            if (cell.HasDefault())
            {
                this.ActionLink("X", GrammarConstants.COLUMN_REMOVER).MetaData("key", cell.Key);
            }
        }
    }
}