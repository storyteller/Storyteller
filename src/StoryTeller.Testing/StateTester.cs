using Xunit;
using Shouldly;

namespace StoryTeller.Testing
{
    
    public class StateTester
    {
        [Fact]
        public void store_and_retrieve_by_type()
        {
            var state = new State();
            state.Store<int>(11);
            state.Store<double>(11.1);

            state.Retrieve<int>().ShouldBe(11);
            state.Retrieve<double>().ShouldBe(11.1);
        }

        [Fact]
        public void store_and_retrieve_by_type_and_key()
        {
            var state = new State();
            state.Store("red", 11);
            state.Store("green", 12);

            state.Store("red", true);
            state.Store("green", false);

            state.Retrieve<int>("red").ShouldBe(11);
            state.Retrieve<int>("green").ShouldBe(12);

            ShouldBeTestExtensions.ShouldBe(state.Retrieve<bool>("red"), true);
            ShouldBeTestExtensions.ShouldBe(state.Retrieve<bool>("green"), false);
        }
    }
}