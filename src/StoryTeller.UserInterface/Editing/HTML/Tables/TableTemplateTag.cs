using System.Collections.Generic;
using HtmlTags;
using StoryTeller.Html;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Editing.HTML.Tables
{
    public class TableTemplateTag : TableTag
    {
        public TableTemplateTag(Table table, ICellBuilderLibrary builders)
        {
            Style("display", "none");
            AddClass(GrammarConstants.TEMPLATES);

            AddHeaderRow(x =>
            {
                x.Header(" ").AddClass("command");
                table.Cells.Each(cell =>
                {
                    x.Append(new CellHeaderTag(cell));
                });
            });

            AddBodyRow(x =>
            {
                x.Cell().AddClass("command").Add<DeleteIconTag>().AddClass("remover");
                table.Cells.Each(cell => x.Cell().AddSafeClassName(cell.Key).Append(builders.BuildTag(cell)));
            });
        }
    }
}