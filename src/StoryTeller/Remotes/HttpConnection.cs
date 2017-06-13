using System;
using System.IO;
using System.Net.Http;
using Baseline;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace StoryTeller.Remotes
{
    public class HttpConnection : IHttpConnection, IDisposable
    {
        private readonly IWebHost _host;
        private readonly HttpClient _client;
        private readonly string _url;

        public HttpConnection(int sending, int receiving, Action<string> onReceived)
        {
            Receiving = receiving;

            _host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseUrls("http://localhost:" + Receiving)
                .Configure(app =>
                {
                    app.Run(async http =>
                    {
                        var json = await http.Request.Body.ReadAllTextAsync();
                        onReceived(json);

                        http.Response.StatusCode = 200;
                    });
                }).Build();

            _host.Start();

            _client = new HttpClient();
            _url = $"http://localhost:{sending}/api" ;
        }

        public int Receiving { get; }

        public void SendMessage(string json)
        {
            var message = new HttpRequestMessage(HttpMethod.Post, _url);

            _client.PostAsync(_url, new StringContent(json));
        }

        public void Dispose()
        {
            _host?.Dispose();
        }
    }
}