using System;
using System.Collections.Generic;
using Baseline;
using Fleck;

namespace ST.Docs.Runner
{
    public interface IBrowserRefresher
    {
        void RefreshPage();
        void StartWebSockets();
        int Port { get; }
    }

    public class NulloBrowserRefresher : IBrowserRefresher
    {
        public void RefreshPage()
        {
            // nothing
        }

        public void StartWebSockets()
        {
            throw new NotSupportedException();
        }

        public int Port
        {
            get
            {
                throw new NotSupportedException();
            }
        }
    }

    public class BrowserRefresher : IDisposable, IBrowserRefresher
    {
        private int _port;
        private WebSocketServer _server;
        private string _webSocketsAddress;
        private readonly IList<IWebSocketConnection> _sockets = new List<IWebSocketConnection>();

        public void StartWebSockets()
        {
            // Make sure that under no circumstances does this thing conflict w/ Raven's 8080
            _port = PortFinder.FindPort(8200);
            _webSocketsAddress = "ws://0.0.0.0:" + _port;

            Console.WriteLine("Broadcasting auto-refresh messages via WebSockets at " + _webSocketsAddress);

            _server = new WebSocketServer(_webSocketsAddress);
            _server.Start(socket =>
            {
                socket.OnOpen = () => _sockets.Add(socket);

                socket.OnClose = () => _sockets.Remove(socket);


            });
        }

        public string WebSocketsAddress
        {
            get { return _webSocketsAddress; }
        }

        public int Port
        {
            get { return _port; }
        }

        public void RefreshPage()
        {
            _sockets.Each(x => x.Send("REFRESH"));
        }

        public void Dispose()
        {
            _sockets.Clear();
            if (_server != null) _server.Dispose();
        }
    }
}