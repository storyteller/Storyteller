using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class DoGrammarStructureTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test, Ignore("until 3/20")]
        public void write_the_result_with_error_should_write_the_error()
        {
            Assert.Fail("Redo in new world order");

            var structure = new DoGrammarStructure();
        }

        [Test, Ignore("until 3/20")]
        public void write_the_result_with_no_error_should_do_nothing()
        {
            Assert.Fail("Redo in new world order");

            var structure = new DoGrammarStructure();
        }
    }
}