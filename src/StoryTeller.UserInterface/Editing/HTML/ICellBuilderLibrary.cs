using StoryTeller.Engine;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public interface ICellBuilderLibrary
    {
        void AddCell(GrammarTag tag, Cell cell);
        CellTag BuildTag(Cell cell);
    }
}