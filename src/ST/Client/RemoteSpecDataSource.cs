using System;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace ST.Client
{
    public class RemoteSpecDataSource : MarshalByRefObject, ISpecDataSource
    {
        private readonly IPersistenceController _controller;

        public RemoteSpecDataSource(IPersistenceController controller)
        {
            _controller = controller;
        }

        public SpecNode ReadNode(string id)
        {
            return _controller.Hierarchy.Nodes[id];
        }

        public Specification ReadSpecification(string id)
        {
            return _controller.LoadSpecification(id).data;
        }

        public override object InitializeLifetimeService()
        {
            return null;
        }
    }
}