using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Tests.Outline
{
    public interface IOutlineTreeService
    {
        OutlineNode BuildNode(Test test, IOutlineController controller);
        void RedrawNode(Test test, IOutlineController controller);
        void SelectNodeFor(ITestPart part);
    }
}