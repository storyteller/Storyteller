using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Rendering
{
    public interface IWriter
    {
        void WriteCell(Cell cell, IStep step);
        void WriteText(string text);
    }
}