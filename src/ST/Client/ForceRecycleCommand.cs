using System;
using StoryTeller.Messages;

namespace ST.Client
{
    public class ForceRecycleCommand : Command<ForceRecycle>
    {
        public override void HandleMessage(ForceRecycle message, IApplication app)
        {
            app.Remote.Recycle();
        }
    }
}