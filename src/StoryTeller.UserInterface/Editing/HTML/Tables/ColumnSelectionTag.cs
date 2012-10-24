using System.Linq;
using HtmlTags;
using StoryTeller.Engine;
using StoryTeller.Model;
using GenericEnumerableExtensions = System.Collections.Generic.GenericEnumerableExtensions;
using System.Collections.Generic;

namespace StoryTeller.UserInterface.Editing.HTML.Tables
{
    public class ColumnSelectionTag : HtmlTag
    {
        public ColumnSelectionTag(Table table) : base("p")
        {
            AddClass(GrammarConstants.COLUMN_SELECTOR);
            Add("span").Text(GrammarConstants.ADDITIONAL_COLUMNS_HEADER_TEXT);

            var count = 1;
            table.Cells.Where(x => x.HasDefault()).Each(cell =>
            {
                Append(new OptionalColumnTag(cell));
                count++;

                if (count == 5)
                {
                    Add("br");
                    count = 0;
                }
            });
        }
    }
}