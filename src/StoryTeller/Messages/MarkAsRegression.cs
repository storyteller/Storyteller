namespace StoryTeller.Messages
{
    public class MarkAsRegression : ClientMessage
    {
        public MarkAsRegression()
            : base("mark-as-regression")
        {
        }

        public string[] list = new string[0];
    }
}