using System.Collections.Generic;
using Bottles;
using Bottles.Diagnostics;
using Storyteller.Core.Remotes;

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

        public void Activate(IEnumerable<IPackageInfo> packages, IPackageLog log)
        {
            _connector.Start();
            _controller.AddListener(_connector);
        }
    }
}