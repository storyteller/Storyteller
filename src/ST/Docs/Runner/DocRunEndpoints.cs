using System;
using System.Diagnostics;

namespace ST.Docs.Runner
{
    public class DocRunEndpoints
    {
        private readonly DocProject _project;
        private readonly IBrowserRefresher _refresher;

        public DocRunEndpoints(DocProject project, IBrowserRefresher refresher)
        {
            _project = project;
            _refresher = refresher;
        }

        public void post_refresh(HardRefresh refresh)
        {
            _project.HardRefresh().ContinueWith(t => _refresher.RefreshPage());
        }

        public void post_open(OpenFile request)
        {
            var url = new Uri(request.topic);

            var topic = _project.FindTopicByUrl(url.AbsolutePath.TrimStart('/'));
            if (topic != null)
            {
                Process.Start(topic.File);
            }
        }
    }

    public class OpenFile
    {
        public string topic { get; set; }
    }

    public class HardRefresh
    {
        
    }
}