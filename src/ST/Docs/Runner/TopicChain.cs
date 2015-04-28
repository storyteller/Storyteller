using FubuMVC.Core.Registration.Nodes;
using ST.Docs.Topics;

namespace ST.Docs.Runner
{
    public class TopicChain : RoutedChain
    {
        public TopicChain(Topic topic) : base(topic.Url)
        {
            AddToEnd(new TopicNode(topic));
        }
    }
}