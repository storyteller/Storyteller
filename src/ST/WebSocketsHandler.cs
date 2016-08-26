using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ST
{
    public class WebSocketsHandler : IDisposable
    {
        private readonly IList<WebSocket> _sockets = new List<WebSocket>();

        public async Task HandleSocket(HttpContext http)
        {
            var webSocket = await http.WebSockets.AcceptWebSocketAsync();

            _sockets.Add(webSocket);

            while (webSocket.State == WebSocketState.Open)
            {
                var token = CancellationToken.None;
                var buffer = new ArraySegment<Byte>(new Byte[100000]);
                var received = await webSocket.ReceiveAsync(buffer, token);

                switch (received.MessageType)
                {
                    case WebSocketMessageType.Text:
                        var request = Encoding.UTF8.GetString(buffer.Array,
                            buffer.Offset,
                            received.Count);

                        Console.WriteLine("Got: " + request);

                        break;
                }
            }

            _sockets.Remove(webSocket);

            webSocket.Dispose();
        }

        public async Task Send(string text)
        {
            var token = CancellationToken.None;
            var type = WebSocketMessageType.Text;
            var data = Encoding.UTF8.GetBytes(text);
            var buffer = new ArraySegment<Byte>(data);

            foreach (var socket in _sockets)
            {
                if (socket != null && socket.State == WebSocketState.Open)
                {
                    await socket.SendAsync(buffer, type, true, token);
                }
            }
        }

        public void Dispose()
        {
            foreach (var socket in _sockets)
            {
                socket.Dispose();
            }
        }
    }
}