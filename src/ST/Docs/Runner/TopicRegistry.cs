using FubuMVC.Core;
using FubuMVC.Core.Http.Hosting;
using ST.Docs.Samples;
using ST.Docs.Todos;

namespace ST.Docs.Runner
{
    public class TopicRegistry : FubuRegistry
    {
        public TopicRegistry()
        {
            HostWith<NOWIN>();

            Actions.FindBy(_ => _.IncludeTypesNamed(x => x.EndsWith("DocTool")));
            Actions.IncludeType<SampleExplorer>();
            Actions.IncludeType<TodoExplorer>();

        }
    }
}