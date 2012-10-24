using System;
using StoryTeller.Engine;

namespace StoryTeller.Model
{

    public interface IStepEditor
    {
        void Editor(Cell cell);
        void Text(string text);
    }
}