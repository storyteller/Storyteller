namespace StoryTeller.Results
{
    public class StringFileLoader : IDocumentPartLoader
    {
        private string linkFn;

        public StringFileLoader(string linkFn)
        {
            this.linkFn = linkFn;
        }

        public string Read()
        {
            return this.linkFn ?? string.Empty;
        }
    }
}
