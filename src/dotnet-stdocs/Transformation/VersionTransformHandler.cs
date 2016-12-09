using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Transformation
{
    public class VersionTransformHandler : ITransformHandler
    {
        private readonly DocSettings _settings;

        public VersionTransformHandler(DocSettings settings)
        {
            _settings = settings;
        }

        public string Key
        {
            get { return "version"; }
        }

        public string Transform(Topic current, string data)
        {
            return _settings.Version;
        }
    }
}