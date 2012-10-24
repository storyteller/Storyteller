using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class CommentTester
    {
        [Test]
        public void accept_visitor()
        {
            var visitor = MockRepository.GenerateMock<ITestVisitor>();
            var comment = new Comment();
            comment.AcceptVisitor(visitor);

            visitor.AssertWasCalled(x => x.WriteComment(comment));
        }
    }
}