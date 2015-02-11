using System;
using System.Collections.Generic;
using System.Linq;
using Fleck;
using FubuMVC.Core;
using Storyteller.Core.Commands;
using Storyteller.Core.Messages;
using Storyteller.Core.Remotes;
using Storyteller.Core.Remotes.Messaging;

namespace ST.Client
{
    public class ClientConnector : IDisposable, 
        IListener<PassthroughMessage>, 
        IListener<SystemRecycled>, 
        IListener<SystemRecycleStarted>, 
        IClientConnector
    {
        private readonly IRemoteController _controller;
        private readonly IEnumerable<ICommand> _commands;
        private readonly int _port;
        private readonly IList<IWebSocketConnection> _sockets = new List<IWebSocketConnection>();
        private readonly string _webSocketsAddress;
        private WebSocketServer _server;

        public ClientConnector(IRemoteController controller, IEnumerable<Storyteller.Core.Commands.ICommand> commands)
        {
            _controller = controller;
            _commands = commands;
            _port = PortFinder.FindPort(8181);

            // TODO -- will only work locally. What do we do otherwise?
            _webSocketsAddress = "ws://0.0.0.0:" + _port;
        }

        public int Port
        {
            get { return _port; }
        }

        public string WebSocketsAddress
        {
            get { return _webSocketsAddress; }
        }

        public void Start()
        {
            Console.WriteLine("Publishing client messages via web sockets at " + _webSocketsAddress);

            _server = new WebSocketServer(_webSocketsAddress);
            _server.Start(socket =>
            {
                socket.OnOpen = () => _sockets.Add(socket);

                socket.OnClose = () => _sockets.Remove(socket);

                socket.OnMessage = HandleJson;
            });
        }

        public void Dispose()
        {
            _sockets.Clear();
            if (_server != null) _server.Dispose();
        }

        public void Receive(PassthroughMessage message)
        {
            _sockets.Each(x => x.Send(message.json));
        }

        private void sendMessage(object message)
        {
            var json = JsonSerialization.ToCleanJson(message);
            _sockets.Each(x => x.Send(json));
        }

        public void Receive(SystemRecycled message)
        {
            message.WriteSystemUsage();
            sendMessage(message);
        }

        public void Receive(SystemRecycleStarted message)
        {
            Console.WriteLine("Starting to recycle the system");
            sendMessage(message);
        }

        public void HandleJson(string json)
        {
            try
            {
                var command = _commands.FirstOrDefault(x => x.Matches(json));
                if (command == null)
                {
                    _controller.SendJsonMessage(json);
                }
                else
                {
                    command.HandleJson(json);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }


    }



}