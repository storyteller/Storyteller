using StoryTeller.Messages;

namespace ST.Preview
{
    public class ProjectTitle : ClientMessage
    {
        public string Title { get; }

        public ProjectTitle(string title) : base("project-title")
        {
            Title = title;
        }
    }
}