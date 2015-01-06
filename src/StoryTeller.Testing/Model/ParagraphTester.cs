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



}