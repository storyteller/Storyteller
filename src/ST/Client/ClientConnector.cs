using System;
using System.Collections.Generic;
using System.Linq;
using Fleck;
using FubuCore.Logging;
using FubuMVC.Core;
using StoryTeller.Commands;
using StoryTeller.Messages;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public class ClientConnector : IDisposable, 
        IListener<PassthroughMessage>, 
        IListener<SystemRecycled>, 
        IListener<SystemRecycleStarted>, 
        IListener<QueueState>, 
        IClientConnector
    {
        private readonly ILogger _logger;
        private readonly IRemoteController _controller;
        private readonly IEnumerable<ICommand> _commands;
        private int _port;
        private readonly IList<IWebSocketConnection> _sockets = new List<IWebSocketConnection>();
        private string _webSocketsAddress;
        private WebSocketServer _server;

        public ClientConnector(ILogger logger, IRemoteController controller, IEnumerable<ICommand> commands)
        {
            _logger = logger;
            _controller = controller;
            _commands = commands;
            _port = PortFinder.FindPort(8200);


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
            bool connected = false;
            int attempts = 0;
            while (!connected && attempts < 5)
            {
                connected = tryStart();
                attempts++;
            }

        }

        private bool tryStart()
        {
            var increment = new Random(5).Next(1, 50);
            _port = PortFinder.FindPort(_port + increment);

            // TODO -- will only work locally. What do we do otherwise?
            _webSocketsAddress = "ws://127.0.0.1:" + _port;

            try
            {
                

                _server = new WebSocketServer(_webSocketsAddress);
                _server.Start(socket =>
                {
                    socket.OnOpen = () => _sockets.Add(socket);

                    socket.OnClose = () => _sockets.Remove(socket);

                    socket.OnMessage = HandleJson;
                });

                Console.WriteLine("Publishing client messages via web sockets at " + _webSocketsAddress);
                return true;
            }
            catch (Exception)
            {
                Console.WriteLine("Failed to open web sockets to " + _webSocketsAddress + ", trying another port");
                return false;
            }
        }

        public void Dispose()
        {
            _sockets.Each(x => x.Close());
            _sockets.Clear();
            if (_server != null) _server.Dispose();

        }

        public void Receive(PassthroughMessage message)
        {
            _sockets.Each(x => x.Send(message.json));
        }

        public void SendMessageToClient(object message)
        {
            var json = JsonSerialization.ToCleanJson(message);

            Console.WriteLine("Sending: " + message);

            _sockets.Each(x => x.Send(json));
        }

        public void Receive(SystemRecycled message)
        {
            message.WriteSystemUsage();
            SendMessageToClient(message);
        }

        public void Receive(SystemRecycleStarted message)
        {
            SendMessageToClient(message);
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
                    // TODO -- do an FT kind of thing and have cascading messages
                    // If it's string, just kick it out as json
                    command.HandleJson(json);
                }
            }
            catch (Exception ex)
            {
                _logger.Error("Json message: " + json, ex);
            }
        }


        public void Receive(QueueState message)
        {
            SendMessageToClient(message);
        }
    }



}