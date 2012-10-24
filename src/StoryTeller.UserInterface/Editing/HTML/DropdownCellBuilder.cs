using System.Collections.Generic;
using StoryTeller.Engine;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class DropdownCellBuilder : ICellBuilder
    {
        public string TagName
        {
            get { return "select"; }
        }

        public bool CanBuild(Cell cell)
        {
            return cell.SelectionValues.Count > 0;
        }

        public void Configure(Cell cell, CellTag tag)
        {
            tag.AddClass(GrammarConstants.REQUIRED);

            cell.SelectionValues.Each(x =>
            {
                tag.Add("option").Attr("value", x).Text(x);
            });
        }
    }
}