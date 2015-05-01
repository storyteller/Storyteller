using System;
using ST.Docs.Topics;

namespace ST.Docs.Html
{
    public interface IUrlResolver
    {
        string ToUrl(Topic topic);
        string ToUrl(Topic current, string url);
        string RootUrlFrom(Topic current);
    }

    public class WebsiteExportUrlResolver : IUrlResolver
    {
        public string ToUrl(Topic current, string url)
        {
            throw new NotImplementedException();
        }

        public string RootUrlFrom(Topic current)
        {
            throw new NotImplementedException();
        }

        public string ToUrl(Topic topic)
        {
            throw new NotImplementedException();
        }
    }

    public class FileExportUrlResolver : IUrlResolver
    {
        public string ToUrl(Topic topic)
        {
            throw new NotImplementedException();
        }

        public string ToUrl(Topic current, string url)
        {
            throw new NotImplementedException();
        }

        public string RootUrlFrom(Topic current)
        {
            throw new NotImplementedException();
        }
    }
}