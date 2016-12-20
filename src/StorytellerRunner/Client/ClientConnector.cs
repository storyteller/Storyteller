using System;
using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public class ClientConnector : IDisposable,
        IListener<PassthroughMessage>,
        IClientConnector
    {
        private readonly WebSocketsHandler _handler;
        private readonly string _host;

        public ClientConnector(WebSocketsHandler handler, Action<string> handleJson)
        {
            _handler = handler;

            _handler.Received = handleJson;
        }

        public string WebSocketsAddress { get; set; }

        public void SendMessageToClient(object message)
        {
            try
            {
                var json = JsonSerialization.ToCleanJson(message);
#pragma warning disable 4014
                _handler.Send(json);
#pragma warning restore 4014
            }
            catch (Exception e)
            {
                Console.WriteLine("Failed while trying to serialize " + message + " to JSON");
            }

            // TODO -- only do this in verbose mode
            //Console.WriteLine("Sending: " + message);


        }

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



    }
}