using FubuMVC.Core.Registration.Nodes;
using ST.Docs.Topics;
using StructureMap.Pipeline;

namespace ST.Docs.Runner
{
    public class TopicNode : BehaviorNode
    {
        private readonly Topic _topic;

        public TopicNode(Topic topic)
        {
            _topic = topic;
        }

        protected override IConfiguredInstance buildInstance()
        {
            var instance = new SmartInstance<TopicBehavior>();
            instance.Ctor<Topic>().Is(_topic);

            return instance;
        }

        public override BehaviorCategory Category
        {
            get { return BehaviorCategory.Output; }
        }
    }
}