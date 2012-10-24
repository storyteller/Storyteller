using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Tests.Outline
{
    public interface IOutlineController
    {
        void AddComment(IPartHolder holder);
        void AddSection(string fixtureName);
        void AddStep(string grammarKey, IPartHolder holder);
        void Remove(ITestPart part, IPartHolder holder);
        void MoveUp(ITestPart part, IPartHolder holder);
        void MoveDown(ITestPart part, IPartHolder holder);
        void MoveToTop(ITestPart part, IPartHolder holder);
        void MoveToBottom(ITestPart part, IPartHolder holder);
        IOutlineView View { get; }
        void Refresh();
        void FocusOnTop();
    }
}