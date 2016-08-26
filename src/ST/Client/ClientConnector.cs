using System;
using System.Collections.Generic;
using System.Linq;
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
        private readonly IRemoteController _controller;
        private readonly IEnumerable<ICommand> _commands;
        private readonly string _host;
        private readonly WebSocketsHandler _handler;

        public ClientConnector(WebSocketsHandler handler, IRemoteController controller, IEnumerable<ICommand> commands)
        {
            _controller = controller;
            _commands = commands;
            _handler = handler;

            _handler.Received = HandleJson;
        }

        public string WebSocketsAddress { get; set; }

        public void Dispose()
        {
            _handler.Dispose();
        }

        public void Receive(PassthroughMessage message)
        {
#pragma warning disable 4014
            _handler.Send(message.json);
#pragma warning restore 4014
        }

        public void SendMessageToClient(object message)
        {
            var json = JsonSerialization.ToCleanJson(message);

            Console.WriteLine("Sending: " + message);

#pragma warning disable 4014
            _handler.Send(json);
#pragma warning restore 4014
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
                Logger.Error("Json message: " + json, ex);
            }
        }


        public void Receive(QueueState message)
        {
            SendMessageToClient(message);
        }
    }



}