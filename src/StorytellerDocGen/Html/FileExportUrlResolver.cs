using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Html
{
    public class FileExportUrlResolver : IUrlResolver
    {
        public string ToUrl(Topic current, Topic topic)
        {
            return current.FileExportPath().RelativeUrlTo(topic.FileExportPath());
        }

        public string ToUrl(Topic current, string url)
        {
            return current.FileExportPath().RelativeUrlTo(url);
        }

        public string RootUrlFrom(Topic current)
        {
            return current.FileExportPath().RelativeUrlTo("index.htm");
        }
    }



}