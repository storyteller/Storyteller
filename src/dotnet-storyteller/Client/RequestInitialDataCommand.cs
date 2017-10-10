using StoryTeller.Messages;

namespace ST.Client
{
    public class RequestInitialDataCommand : Command<RequestInitialData>
    {
        public override void HandleMessage(RequestInitialData message, IApplication app)
        {
            var model = app.BuildInitialModel();
            app.Client.SendMessageToClient(model);
        }
    }
}