using System.Collections.Generic;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Engine.Constraints;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing.HTML;

namespace StoryTeller.UserInterface.Testing.UI.Editing.HTML
{
    [TestFixture]
    public class GrammarSelectorTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void close_should_appear_in_the_html_for_a_multiple_selection_fixture()
        {
            var fixture = new FixtureStructure("Math");
            fixture.Policies.SelectionMode = SelectionMode.Any;

            new GrammarSelector(fixture).Build().ToString().ShouldContain(GrammarConstants.CLOSE);
        }

        [Test]
        public void close_should_not_appear_in_the_html_for_a_single_selection_fixture()
        {
            var fixture = new FixtureStructure("Math");
            fixture.Policies.SelectionMode = SelectionMode.Single;

            new GrammarSelector(fixture).Build().ToString().ShouldNotContain(GrammarConstants.CLOSE);
        }

        [Test]
        public void required_should_appear_in_the_html_for_a_single_selection_fixture()
        {
            var fixture = new FixtureStructure("Math");
            fixture.Policies.SelectionMode = SelectionMode.Single;

            new GrammarSelector(fixture).Build().ToString().ShouldContain(GrammarConstants.REQUIRED);
        }

        [Test]
        public void required_should_not_appear_in_the_html_for_a_multiple_selection_fixture()
        {
            var fixture = new FixtureStructure("Math");
            fixture.Policies.SelectionMode = SelectionMode.Any;

            new GrammarSelector(fixture).Build().ToString().ShouldNotContain(GrammarConstants.REQUIRED);
        }

        [Test]
        public void should_add_tagging_ability_if_graph_is_not_a_fixture()
        {
            IFixtureStructure fixture = MockRepository.GenerateMock<IFixtureStructure>();
            IPolicies policies = MockRepository.GenerateMock<IPolicies>();
            IEnumerable<GrammarStructure> grammars = new List<GrammarStructure>();
            fixture.Stub(x => x.IsAFixture()).Return(false);
            fixture.Stub(x => x.Policies).Return(policies);
            fixture.Stub(x => x.PossibleGrammarsFor(null)).IgnoreArguments().Return(grammars);
            new GrammarSelector(fixture).Build().ToString().ShouldContain(GrammarConstants.TAGS_LABEL);
        }

        [Test]
        public void should_not_add_tagging_ability_if_graph_is_a_fixture()
        {
            IFixtureStructure fixture = MockRepository.GenerateMock<IFixtureStructure>();
            IPolicies policies = MockRepository.GenerateMock<IPolicies>();
            IEnumerable<GrammarStructure> grammars = new List<GrammarStructure>();
            fixture.Stub(x => x.IsAFixture()).Return(true);
            fixture.Stub(x => x.Policies).Return(policies);
            fixture.Stub(x => x.PossibleGrammarsFor(null)).IgnoreArguments().Return(grammars);
            new GrammarSelector(fixture).Build().ToString().ShouldNotContain(GrammarConstants.TAGS_LABEL);
        }
    }
}