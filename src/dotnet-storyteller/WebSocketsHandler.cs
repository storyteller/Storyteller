using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Baseline;
using Microsoft.AspNetCore.Http;

namespace StorytellerRunner
{
    public class WebSocketsHandler : IDisposable
    {
        private readonly IList<WebSocket> _sockets = new List<WebSocket>();

        public int ActiveCount => _sockets.Count;


        public async Task HandleSocket(HttpContext http, Action callback = null)
        {
            var webSocket = await http.WebSockets.AcceptWebSocketAsync();

            _sockets.Add(webSocket);

            callback?.Invoke();

            while (webSocket.State == WebSocketState.Open)
            {
                var token = CancellationToken.None;

                var buffer = new ArraySegment<Byte>(new Byte[100000]);
                var received = await webSocket.ReceiveAsync(buffer, token);

                var json = buffer.ReadString(received);

                if (received.EndOfMessage)
                {
                    if (json.IsNotEmpty())
                    {
                        Received(json);
                    }
                }
                else
                {
                    var builder = new StringBuilder(json);

                    while (!received.EndOfMessage)
                    {
                        received = await webSocket.ReceiveAsync(buffer, token);
                        json = buffer.ReadString(received);

                        builder.Append(json);
                    }

                    Received(builder.ToString());
                }


            }

            _sockets.Remove(webSocket);

            webSocket.Dispose();
        }

        public void ClearAll()
        {
            var sockets = _sockets.ToArray();

            _sockets.Clear();
            foreach (var socket in sockets)
            {
                socket.Dispose();
            }
        }


        public Action<string> Received = x => { };


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

        public async Task SendAndClear(string text)
        {
            var sockets = _sockets.ToArray();
            _sockets.Clear();

            var token = CancellationToken.None;
            var type = WebSocketMessageType.Text;
            var data = Encoding.UTF8.GetBytes(text);
            var buffer = new ArraySegment<Byte>(data);

            foreach (var socket in sockets)
            {
                if (socket != null && socket.State == WebSocketState.Open)
                {
                    await socket.SendAsync(buffer, type, true, token);
                }
            }

            foreach (var socket in sockets)
            {
                socket.Dispose();
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

    public static class ArraySegmentExtensions
    {
        public static string ReadString(this ArraySegment<byte> buffer, WebSocketReceiveResult result)
        {
            {
                return Encoding.UTF8.GetString(buffer.Array,
                    buffer.Offset,
                    result.Count);
            }
        }
    }
}