using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public interface IColumnMatch
    {
        string Name { get; }
        object GetValue(object actual);
        Cell BuildCell(CellHandling handling, Fixture fixture);
    }
}