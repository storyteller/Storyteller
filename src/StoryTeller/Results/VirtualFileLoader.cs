namespace StoryTeller.Results
{
    public class VirtualFileLoader : IDocumentPartLoader
    {
        private string content;

        public VirtualFileLoader(string content)
        {
            this.content = content;
        }

        public string Read()
        {
            return this.content ?? string.Empty;
        }
    }
}
