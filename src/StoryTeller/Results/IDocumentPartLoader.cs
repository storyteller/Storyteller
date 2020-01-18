namespace StoryTeller.Results
{
    /// <summary>
    /// Provides a way to load chunks of text as content for <see cref="IDocumentBuilder"/>
    /// implementations.  Allows us to treat files being pulled from assembly resources
    /// the same way as local file system files and any other text content source we want
    /// to wrap in this interface.
    /// </summary>
    public interface IDocumentPartLoader
    {
        /// <summary>
        /// Renders the content of the document part as text.
        /// </summary>
        /// <returns>The text of the document part.</returns>
        string Read();
    }
}
