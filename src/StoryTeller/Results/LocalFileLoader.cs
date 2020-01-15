using System.IO;

namespace StoryTeller.Results
{
    public class LocalFileLoader : IDocumentPartLoader
    {
        private readonly FileInfo file;

        public LocalFileLoader(string name)
        {
            this.file = new FileInfo(name);
        }

        public LocalFileLoader(FileInfo file)
        {
            this.file = file;
        }

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
