using System;
using System.Threading;
using System.Threading.Tasks;
using Baseline;
using NSubstitute;
using Xunit;
using Shouldly;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Remotes.Messaging
{
    
    public class EventAggregatorTester : IDisposable
    {

        private readonly ISocketConnection theSocket = Substitute.For<ISocketConnection>();

        public EventAggregatorTester()
        {
            EventAggregator.Start(theSocket);
        }

        public void Dispose()
        {
            EventAggregator.Stop();
        }

        [Fact]
        public void request_response()
        {
            EventAggregator.Messaging.AddListener(new Responder());
            var task = EventAggregator.Send(new Request("Foo")).AndWaitFor<Response>();

            task.Wait(5.Seconds());

            task.Result.Name.ShouldBe("Foo");
        }
    }

    public class Responder : IListener<Request>
    {
        public void Receive(Request message)
        {
            Task.Factory.StartNew(() =>
            {
                Thread.Sleep(50);
                EventAggregator.SendMessage(new Response(message.Name));
            });
        }
    }

    public class Request
    {
        public string Name { get; set; }

        public Request(string name)
        {
            Name = name;
        }
    }

    public class Response
    {
        public string Name { get; set; }

        public Response(string name)
        {
            Name = name;
        }
    }
}