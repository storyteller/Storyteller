using System;
using System.Threading.Tasks;
using StoryTeller.Json;

namespace Storyteller.Redux
{
    public class ReduxFixture : JsonComparisonFixture
    {
        private WebSocketServer _server;

        public override void SetUp()
        {
            ReduxStore = Context.State.Retrieve<ReduxSpecContext>();
            _server = Context.State.Retrieve<Storyteller.Redux.WebSocketServer>();
        }

        protected ReduxSpecContext ReduxStore { get; private set; }

        protected Task triggerAction(Action action)
        {
            return ReduxStore.WaitForAnUpdate(action).ContinueWith(t =>
            {
                Json = ReduxStore.CurrentState;
            });
        }

        protected Task sendAction(object message)
        {
            return ReduxStore.WaitForAnUpdate(() => _server.Send(message));
        }


    }
}