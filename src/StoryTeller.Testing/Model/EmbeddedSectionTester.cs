using System.Collections.Generic;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Samples;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class when_creating_example
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            FixtureLibrary library = FixtureGraph.Library;
            FixtureStructure fixture = library.FixtureFor("Math");

            embeddedSection =
                new EmbeddedSectionGrammar<MathFixture>().ToStructure(library).ShouldBeOfType<EmbeddedSection>();
            embeddedSection.Name = "MathGrammar";

            theExample = embeddedSection.CreateExample();
        }

        #endregion

        private EmbeddedSection embeddedSection;
        private IStep theExample;


        [Test]
        public void the_step_grammar_key_should_match_the_parent_key()
        {
            theExample.GrammarKey.ShouldEqual(embeddedSection.Name);
        }
    }

}