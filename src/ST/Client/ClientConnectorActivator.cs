using FubuMVC.Core;
using FubuMVC.Core.Diagnostics.Packaging;
using StoryTeller.Remotes;

namespace ST.Client
{
    public class ClientConnectorActivator : IActivator
    {
        private readonly IClientConnector _connector;
        private readonly IRemoteController _controller;

        public ClientConnectorActivator(IClientConnector connector, IRemoteController controller)
        {
            _connector = connector;
            _controller = controller;
        }

        public void Activate(IActivationLog log, IPerfTimer timer)
        {
            _connector.Start();
            _controller.AddListener(_connector);
        }
    }
}