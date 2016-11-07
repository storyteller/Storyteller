using System;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class AddSuiteCommand : Command<AddSuite>
    {
        public override void HandleMessage(AddSuite message, IApplication app)
        {
            app.Persistence.AddSuite(message.parent, message.name);
        }
    }
}