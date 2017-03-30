using System.Diagnostics;
using System.Threading.Tasks;
using StoryTeller;

namespace Storyteller.Redux
{
    public class ReduxSagaExtension : IExtension
    {
        private Process _process;
        public string Url { get; }

        public ReduxSagaExtension(string url)
        {
            Url = url;
            Server = new WebSocketServer();
        }

        public WebSocketServer Server { get; set; }

        public void Dispose()
        {
            Server.SendCloseMessage();
            Server.Dispose();
        }

        public Task Start()
        {
            return Task.Factory.StartNew(() =>
            {
                Server.Start();

                var url = Url.Contains("?")
                    ? Url + $"&StorytellerPort={Server.Port}"
                    : $"{Url}?StorytellerPort={Server.Port}";

                _process = ProcessLauncher.GotoUrl(url);
            });
        }

        public void BeforeEach(ISpecContext context)
        {
            Server.SendRefreshMessage();

            var reduxContext = new ReduxSpecContext(context);
            Server.CurrentContext = reduxContext;

            context.State.Store(reduxContext);
            context.State.Store(Server);
        }

        public void AfterEach(ISpecContext context)
        {
            // nothing?
        }
    }
}