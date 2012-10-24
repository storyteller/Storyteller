using HtmlTags;
using HtmlTags.Extended.TagBuilders;

namespace StoryTeller.UserInterface.Editing.HTML.Tables
{
    public class TableEditorTag : TableTag
    {
        public TableEditorTag()
        {
            Attr("cellpadding", "0").Attr("cellspacing", "0");
            AddClasses("grid", "editor");

            AddFooterRow(x =>
            {
                x.Cell().AddClass("table-add-row").Configure(td =>
                {
                    td.ActionLink("add").AddClass("adder");
                    td.ActionLink("clone").AddClass("cloner");
                });
            });
        }
    }
}