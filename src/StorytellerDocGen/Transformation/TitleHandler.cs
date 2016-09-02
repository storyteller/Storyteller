using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Transformation
{
    public class TitleHandler : ITransformHandler
    {
        public string Key
        {
            get { return "title"; }
        }

        public string Transform(Topic current, string data)
        {
            return current.Title;
        }
    }
}