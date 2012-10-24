using System.Collections.Generic;
using System.Linq;
using StoryTeller.Engine;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class CellBuilderLibrary : ICellBuilderLibrary
    {
        private readonly IList<ICellBuilder> _builders = new List<ICellBuilder>();

        public CellBuilderLibrary()
        {
            _builders.Add(new DropdownCellBuilder());
            _builders.Add(new TextboxBuilder());
        }

        public void AddCell(GrammarTag tag, Cell cell)
        {
            _builders.First(x => x.CanBuild(cell)).AddCell(tag, cell);
        }

        // TODO -- test
        public CellTag BuildTag(Cell cell)
        {
            ICellBuilder builder = _builders.First(x => x.CanBuild(cell));
            var tag = new CellTag(cell, builder.TagName);
            builder.Configure(cell, tag);

            return tag;
        }
    }
}