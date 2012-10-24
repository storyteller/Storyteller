using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests.Outline;

namespace StoryTeller.UserInterface.Testing.UI.Tests.Outline
{
    [TestFixture]
    public class OutlineConfigurerTester : InteractionContext<OutlineConfigurer>
    {
        [Test]
        public void configure_a_sentence_with_all_the_values()
        {
            var sentence = Sentence.For("add {x} to {y}", Cell.For<int>("x"), Cell.For<int>("y"));
            var step = new Step().With("x", 2).With("y", 3);

            var node = new OutlineNode(step, Icon.Sentence);

            ClassUnderTest.WriteSentenceText(node, sentence, step);

            node.HeaderText().ShouldEqual("add 2 to 3");
        }

        [Test]
        public void configure_a_sentence_with_none_of_the_values()
        {
            var sentence = Sentence.For("add {x} to {y}", Cell.For<int>("x"), Cell.For<int>("y"));
            var step = new Step();

            var node = new OutlineNode(step, Icon.Sentence);

            ClassUnderTest.WriteSentenceText(node, sentence, step);

            node.HeaderText().ShouldEqual("add {x} to {y}");
        }
    }
}