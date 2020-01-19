namespace StoryTeller.Results
{
    /// <summary>
    /// A pass through class allowing use to use strings as content of a file.
    /// </summary>
    public class VirtualFileLoader : IDocumentPartLoader
    {
        private readonly string content;

        /// <summary>
        /// Creates an instance of <see cref="VirtualFileLoader"/>.
        /// </summary>
        /// <param name="content"></param>
        public VirtualFileLoader(string content)
        {
            this.content = content;
        }

        /// <summary>
        /// Renders the content of the stored string.
        /// </summary>
        /// <returns>The stored content string.</returns>
        public string Read()
        {
            return this.content ?? string.Empty;
        }
    }
}
