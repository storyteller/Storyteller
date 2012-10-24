namespace StoryTeller.Domain
{
    public interface ITestVisitor
    {
        void RunStep(IStep step);
        void WriteComment(Comment comment);
        void WriteTags(Tags tags);
        void StartSection(Section section);
        void EndSection(Section section);
    }
}