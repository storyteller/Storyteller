using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Xunit;
using Shouldly;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Remotes.Messaging
{
    
    public class RemoteListenerTester
    {
        [Fact]
        public void can_wait_for_a_condition()
        {
            var hub = new MessagingHub();
            var listener = new RemoteListener(hub);

            var m1 = new Message(){Number = 1};
            var m2 = new Message() { Number = 2 };
            var m3 = new Message() { Number = 3 };
            var m4 = new Message() { Number = 4 };

            var result = listener.WaitForMessage<Message>(m => m.Number == 4, () => {
                Task.Factory.StartNew(() =>
                {
                    Thread.Sleep(100);
                    listener.SendObject(m1);
                    Thread.Sleep(100);
                    listener.SendObject(m2);
                    Thread.Sleep(100);
                    listener.SendObject(m3);
                    Thread.Sleep(100);
                    listener.SendObject(m4);
                });
            });

            result.ShouldBe(m4);
            ShouldBeTestExtensions.ShouldBe(hub.Listeners.Any(), false); // want it to remove the condition as it goes
        }

        public class Message
        {
            public int Number { get; set; }

            protected bool Equals(Message other)
            {
                return Number == other.Number;
            }

            public override bool Equals(object obj)
            {
                if (ReferenceEquals(null, obj)) return false;
                if (ReferenceEquals(this, obj)) return true;
                if (obj.GetType() != this.GetType()) return false;
                return Equals((Message) obj);
            }

            public override int GetHashCode()
            {
                return Number;
            }

            public override string ToString()
            {
                return string.Format("Number: {0}", Number);
            }
        }
    }
}