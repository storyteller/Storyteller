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
    }

    public class HardRefresh
    {
        
    }
}