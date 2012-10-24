using System;

namespace StoryTeller.Persistence
{
    public interface INode
    {
        string this[string attName] { get; set; }
        string InnerText { get; set; }
        string Name { get; }
        void AddComment(string description);
        INode AddChild(string name);
        INode With(Action<INode> action);
        INode WithFormattedText(string text);
        void ForEachChild(Action<INode> action);
        bool IsComment();
        bool IsTags();
        void ForEachAttribute(Action<string, string> action);
    }
}