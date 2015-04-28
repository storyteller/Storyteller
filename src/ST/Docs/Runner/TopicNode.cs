using FubuMVC.Core.Registration.Nodes;
using FubuMVC.Core.Registration.ObjectGraph;
using ST.Docs.Topics;

namespace ST.Docs.Runner
{
    public class TopicNode : BehaviorNode
    {
        private readonly Topic _topic;

        public TopicNode(Topic topic)
        {
            _topic = topic;
        }

        protected override ObjectDef buildObjectDef()
        {
            var def = new ObjectDef(typeof (TopicBehavior));
            def.DependencyByValue(_topic);

            return def;
        }

        public override BehaviorCategory Category
        {
            get { return BehaviorCategory.Output; }
        }
    }
}