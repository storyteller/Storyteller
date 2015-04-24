using ST.Docs.Topics;

namespace ST.Docs.Transformation
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