using System.Collections.Generic;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class when_paragraph_accepts_a_grammar_visitor
    {
        [Test]
        public void should_call_the_paragraph_member()
        {
            var visitor = MockRepository.GenerateMock<IGrammarVisitor>();
            var step = new Step();
            var paragraph = new Paragraph();

            paragraph.AcceptVisitor(visitor, step);

            visitor.AssertWasCalled(x => x.Paragraph(paragraph, step));
        }
    }

    [TestFixture]
    public class when_creating_an_example_for_a_paragraph
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            paragraph = new Paragraph
            {
                Description = "description",
                Name = "some name"
            };
            Sentence sentence1 = Sentence.For("{x}", Cell.For<int>("x"));
            Sentence sentence2 = Sentence.For("{y}", Cell.For<int>("y"));
            Sentence sentence3 = Sentence.For("{z}", Cell.For<int>("z"));

            paragraph.AddStructure(sentence1);
            paragraph.AddStructure(sentence2);
            paragraph.AddStructure(sentence3);

            theExample = paragraph.CreateExample();
        }

        #endregion

        private Paragraph paragraph;
        private IStep theExample;

        [Test]
        public void should_have_attributes_for_all_the_child_steps()
        {
            theExample.Values.Count.ShouldEqual(3);
            theExample.Has("x").ShouldBeTrue();
            theExample.Has("y").ShouldBeTrue();
            theExample.Has("z").ShouldBeTrue();
        }
    }

}