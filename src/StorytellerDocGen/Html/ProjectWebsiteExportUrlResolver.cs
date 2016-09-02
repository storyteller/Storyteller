using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Html
{
    public class ProjectWebsiteExportUrlResolver : IUrlResolver
    {
        private readonly string _projectName;

        public ProjectWebsiteExportUrlResolver(DocSettings settings)
        {
            _projectName = settings.ProjectName;
        }

        public string ToUrl(Topic current, Topic topic)
        {
            return "/" + _projectName + "/" + topic.Url;
        }

        public string ToUrl(Topic current, string url)
        {
            if (url.StartsWith("/")) return "/" + _projectName + url;

            return "/" + _projectName + "/" + url;
        }

        public string RootUrlFrom(Topic current)
        {
            return "/" + _projectName;
        }
    }
}