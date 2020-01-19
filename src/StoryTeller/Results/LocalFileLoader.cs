using System.IO;

namespace StoryTeller.Results
{
    /// <summary>
    /// Loads file system files to be used as content in <see cref="IDocumentPartBuilder"/>
    /// classes.
    /// </summary>
    public class LocalFileLoader : IDocumentPartLoader
    {
        private readonly FileInfo file;

        /// <summary>
        /// Creates an instance of <see cref="IDocumentPartLoader"/> with a local file.
        /// </summary>
        /// <param name="name">The name of the file to load.</param>
        public LocalFileLoader(string name)
        {
            this.file = new FileInfo(name);
        }

        /// <summary>
        /// Creates an instance of <see cref="IDocumentPartLoader"/> with a local file.
        /// </summary>
        /// <param name="file">The file info of the file to load.</param>
        public LocalFileLoader(FileInfo file)
        {
            this.file = file;
        }

        /// <summary>
        /// Reads the content of the file.
        /// </summary>
        /// <returns>The text content of the file.</returns>
        public string Read()
        {
            if (!file.Exists)
            {
                return string.Empty;
            }

            using (var stream = file.OpenRead())
            using (var reader = new StreamReader(stream))
            {
                return reader.ReadToEnd();
            }
        }
    }
}
