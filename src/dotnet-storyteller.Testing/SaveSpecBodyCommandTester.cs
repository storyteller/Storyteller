using System;
using NSubstitute;
using StoryTeller.Messages;
using StoryTeller.Model;
using ST.Client.Persistence;
using Xunit;

namespace dotnet_storyteller.Testing
{
    public class SaveSpecBodyCommandTester
    {
        public SaveSpecBodyCommandTester()
        {
            theInputMessage = new SaveSpecBody
            {
                id = Guid.NewGuid().ToString(),
                revision = Guid.NewGuid().ToString(),
                spec = new Specification()
            };
        }

        private readonly SaveSpecBody theInputMessage;


        [Fact]
        public void should_have_persisted_the_spec_body()
        {
            var app = new MockedApplication();
            new SaveSpecBodyCommand().HandleMessage(theInputMessage, app);

            app.Persistence.Received().SaveSpecification(theInputMessage.id, theInputMessage.spec);
        }
    }
}