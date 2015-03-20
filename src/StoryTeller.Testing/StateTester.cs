using NUnit.Framework;
using Shouldly;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class StateTester
    {
        [Test]
        public void store_and_retrieve_by_type()
        {
            var state = new State();
            state.Store<int>(11);
            state.Store<double>(11.1);

            state.Retrieve<int>().ShouldEqual(11);
            state.Retrieve<double>().ShouldEqual(11.1);
        }

        [Test]
        public void store_and_retrieve_by_type_and_key()
        {
            var state = new State();
            state.Store("red", 11);
            state.Store("green", 12);

            state.Store("red", true);
            state.Store("green", false);

            state.Retrieve<int>("red").ShouldEqual(11);
            state.Retrieve<int>("green").ShouldEqual(12);

            state.Retrieve<bool>("red").ShouldBe(true);
            state.Retrieve<bool>("green").ShouldBe(false);
        }
    }
}