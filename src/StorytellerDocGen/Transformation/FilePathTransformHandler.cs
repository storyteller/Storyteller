using Baseline;
using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Transformation
{
    public class FilePathTransformHandler : ITransformHandler
    {
        private readonly DocSettings _settings;

        public FilePathTransformHandler(DocSettings settings)
        {
            _settings = settings;
        }

        public string Key => "FilePath";
        public string Transform(Topic current, string data)
        {
            return current.File.PathRelativeTo(_settings.Root).Replace('\\', '/');
        }
    }

}