using System;
using System.Threading.Tasks;
using StoryTeller.Json;

namespace Storyteller.Redux
{
    public abstract class ReduxFixture : JsonComparisonFixture
    {
        private WebSocketServer _server;

        public override void SetUp()
        {
            ReduxStore = Context.State.Retrieve<ReduxSpecContext>();
            _server = Context.State.Retrieve<Storyteller.Redux.WebSocketServer>();
        }

        protected ReduxSpecContext ReduxStore { get; private set; }

        protected internal Task triggerAction(Action action)
        {
            return ReduxStore.WaitForAnUpdate(action);
        }

        protected internal Task sendAction(object message)
        {
            return ReduxStore.WaitForAnUpdate(() => _server.Send(message));
        }


    }
}