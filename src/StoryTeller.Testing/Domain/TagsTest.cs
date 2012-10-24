using System.Collections.Generic;
using System.Reflection;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;

namespace StoryTeller.Testing.Domain
{

    [TestFixture]
    public class TagsTest
    {
        [Test]
        public void Verify_Adding_a_tag()
        {

            Tags tag = new Tags("tagged");
            tag.AddTag("another");
            Assert.IsTrue(tag.AllTags.Contains("another"));
        }


        [Test]
        public void Should_match_test_with_matching_tags()
        {
            Test test = new Test("taggedTest");
            test.AddTags("tagged");
            Tags tag = new Tags("tagged");
            Assert.IsTrue(tag.DoesTestMatch(test));
        }

        [Test]
        public void Should_match_test_with_multiple_tags()
        {
            Test test = new Test("taggedTest");
            test.AddTags("tagged");
            test.AddTags("another");
            Tags tag = new Tags("tagged");
            Assert.IsTrue(tag.DoesTestMatch(test));
        }

        [Test]
        public void Should_match_tags_with_multiple_tags_match_test()
        {
            Test test = new Test("taggedTest");
            test.AddTags("tagged");
            Tags tag = new Tags("tagged, another");
            Assert.IsTrue(tag.DoesTestMatch(test));
        }

        [Test]
        public void Should_not_match_test_when_using_tags_that_are_not_used()
        {
            Test test = new Test("noTags");
            Tags tag = new Tags("tagged");
            Assert.IsFalse(tag.DoesTestMatch(test));
        }
    }
}