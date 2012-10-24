using StoryTeller.Engine;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public interface ICellBuilder
    {
        string TagName { get; }
        bool CanBuild(Cell cell);
        void Configure(Cell cell, CellTag tag);
    }

    public static class CellBuilderExtensions
    {
        public static CellTag AddCell(this ICellBuilder builder, GrammarTag grammar, Cell cell)
        {
            CellTag tag = grammar.AddCell(cell, builder.TagName);
            builder.Configure(cell, tag);

            return tag;
        }
    }
}