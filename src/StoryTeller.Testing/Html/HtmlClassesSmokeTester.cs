using System.Linq;
using HtmlTags;
using NUnit.Framework;
using StoryTeller.Html;

namespace StoryTeller.Testing.Html
{
    [TestFixture]
    public class HtmlClassesSmokeTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void can_retrieve_style()
        {
            HtmlClasses.CSS().ShouldNotBeEmpty();
        }

        [Test]
        public void AddSafeClassName_should_sanitize_bad_class_names()
        {
            var tag = new HtmlTag("span");

            tag.AddSafeClassName("Bad/Class=Name`With'Invalid Chars");

            tag.GetClasses().Single().ShouldEqual("BadClassNameWithInvalidChars");
        }

        [Test]
        public void AddSafeClassName_should_not_tamper_with_valid_class_names()
        {
            var tag = new HtmlTag("span");
            tag.AddSafeClassName("-valid_class-name99");
            tag.GetClasses().Single().ShouldEqual("-valid_class-name99");
        }
    }
}