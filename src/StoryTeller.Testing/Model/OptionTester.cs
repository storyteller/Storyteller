using Shouldly;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class OptionTester
    {
        [Fact]
        public void write_options_that_are_all_values()
        {
            var options = new Option[] {new Option("a"), new Option("b"), new Option("c")};

            Option.Write(options).ShouldBe("a, b, c");
        }

        [Fact]
        public void write_options_that_have_key_value_pairs()
        {
            var options = new Option[] { new Option("a", "1"), new Option("b", "2"), new Option("c", "3") };

            Option.Write(options).ShouldBe("a=1, b=2, c=3");
        }

        [Fact]
        public void parse_options_as_values()
        {
            var options = new Option[] { new Option("a"), new Option("b"), new Option("c") };

            var text = Option.Write(options);

            var options2 = Option.ParseText(text);

            options2.ShouldHaveTheSameElementsAs(options);
        }

        [Fact]
        public void parse_options_as_key_value_pairs()
        {
            var options = new Option[] { new Option("a", "1"), new Option("b", "2"), new Option("c", "3") };


            var text = Option.Write(options);

            var options2 = Option.ParseText(text);

            options2.ShouldHaveTheSameElementsAs(options);
        }
    }
}