using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class BumpSpecDateCommand : Command<BumpSpecDate>
    {
        public override void HandleMessage(BumpSpecDate message, IApplication app)
        {
            var spec = app.Persistence.LoadSpecificationById(message.id);
            spec.ExpirationPeriod = message.timePeriod;
            app.Persistence.SaveSpecification(message.id, spec);

            app.Client.SendMessageToClient(new SpecSaved
            {
                spec = spec
            });
        }
    }
}