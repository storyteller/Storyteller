using System;
using System.Collections.Generic;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Constraints;
using StoryTeller.Model;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class when_the_before_action_fails_in_embedded_section_execute
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            string sectionName = typeof(ArithmeticFixture).GetFixtureAlias();

            step = new Step().WithChildren(sectionName, new Step("Adding").With("x:2,y:3,returnValue:5"));

            context = new TestContext();

            new EmbeddedSectionGrammar<ArithmeticFixture>()
                .Before((s, c) => { throw new NotImplementedException(); })
                .Execute(step, context);
        }

        #endregion

        private Step step;
        private TestContext context;

        [Test]
        public void incremented_the_counts_for_the_exception()
        {
            context.Counts.Exceptions.ShouldEqual(1);
        }

        [Test]
        public void should_have_logged_the_exception()
        {
            context.ResultsFor(step).HasErrors().ShouldBeTrue();
            context.ResultsFor(step).ExceptionText.ShouldContain("NotImplementedException");
        }

        [Test]
        public void still_runs_the_inner_embed_even_with_the_failure()
        {
            context.Counts.Rights.ShouldEqual(1);
        }
    }

    [TestFixture]
    public class EmbeddedSectionGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        public class FixtureThatThrowsExceptionInSetUp : IFixture
        {
            #region IFixture Members

            public string Name { get { return "Name2"; } }

            public string Description { get { return "FixtureThatThrowsExceptionInSetup"; } }

            public IGrammar this[string key] { get { throw new NotImplementedException(); } set { throw new NotImplementedException(); } }

            public ITestContext Context { get; set; }

            public bool HasGrammar(string key)
            {
                throw new NotImplementedException();
            }

            public void ForEachGrammar(Action<string, IGrammar> action)
            {
            }

            public string Title { get; set; }

            public void SetUp(ITestContext context)
            {
                throw new NotImplementedException();
            }


            public void TearDown()
            {
            }

            public IPolicies Policies { get { return new Policies(); } }

            public IEnumerable<GrammarError> Errors { get { throw new NotImplementedException(); } }

            #endregion
        }


        public class FixtureThatThrowsExceptionInTearDown : IFixture
        {
            public ITestContext Context { get; set; }

            #region IFixture Members

            public string Name { get { return "Name1"; } }

            public string Description { get { return "FixtureThatThrowsExceptionInTeardown"; } }

            public IGrammar this[string key] { get { throw new NotImplementedException(); } set { throw new NotImplementedException(); } }

            public bool HasGrammar(string key)
            {
                throw new NotImplementedException();
            }

            public void ForEachGrammar(Action<string, IGrammar> action)
            {
            }

            public void SetUp(ITestContext context)
            {
            }

            public void TearDown()
            {
                throw new NotImplementedException();
            }

            public IEnumerable<GrammarError> Errors { get { throw new NotImplementedException(); } }

            public IPolicies Policies { get { return new Policies(); } }

            public string Title { get; set; }

            #endregion
        }

        [Test]
        public void create_an_embeddedSection_grammar_structure()
        {
            var library = new FixtureLibrary();
            FixtureStructure fixture = library.FixtureFor("Arithmetic");

            var grammar = new EmbeddedSectionGrammar<ArithmeticFixture>
            {
                Label = "The embedded section",
                Style = EmbedStyle.Inline
            }.LeafName("step name");
            var embeddedSection = grammar.ToStructure(library).ShouldBeOfType<EmbeddedSection>();


            embeddedSection.ShouldEqual(new EmbeddedSection(fixture, grammar.Label, grammar.LeafName()));
        }

        [Test]
        public void execute_runs_the_before_step()
        {
            string sectionName = typeof(ArithmeticFixture).GetFixtureAlias();

            Step step = new Step().WithChildren(sectionName, new Step(), new Step(), new Step());

            var context = new AutoPerformingTestContext();

            ITestContext calledContext = null;
            IStep calledStep = null;

            new EmbeddedSectionGrammar<ArithmeticFixture>()
                .Before((s, c) =>
                {
                    calledContext = c;
                    calledStep = s;
                })
                .Execute(step, context);


            calledContext.ShouldBeTheSameAs(context);
            calledStep.ShouldBeTheSameAs(step);
        }

        [Test]
        public void execute_runs_the_child_steps_within_the_fixture()
        {
            string sectionName = typeof(ArithmeticFixture).GetFixtureAlias();

            Step step = new Step().WithChildren(sectionName, new Step(), new Step(), new Step());

            var context = MockRepository.GenerateMock<ITestContext>();

            new EmbeddedSectionGrammar<ArithmeticFixture>().Execute(step, context);

            context.AssertWasCalled(
                x => x.ExecuteWithFixture<ArithmeticFixture>(step.LeafFor(sectionName), step));
        }

        [Test]
        public void execute_when_the_fixture_setup_fails_should_log_the_exception()
        {
            string sectionName = typeof(FixtureThatThrowsExceptionInSetUp).GetFixtureAlias();
            Step step = new Step().WithChildren(sectionName);

            var grammar = new EmbeddedSectionGrammar<FixtureThatThrowsExceptionInSetUp>();

            var results = grammar.Execute(step);

            results.Results.ExceptionText.ShouldNotBeNull();
        }


        [Test]
        public void execute_when_the_fixture_teardown_fails_should_log_the_exception()
        {
            string sectionName = typeof(FixtureThatThrowsExceptionInTearDown).GetFixtureAlias();
            Step step = new Step().WithChildren(sectionName);

            var grammar = new EmbeddedSectionGrammar<FixtureThatThrowsExceptionInTearDown>();

            StepExecutionResult results = grammar.Execute(step);
            results.Counts.Exceptions.ShouldEqual(1);

            results.Results.ExceptionText.ShouldNotBeNull();
        }

        [Test]
        public void should_copy_the_style_from_the_grammar()
        {
            var library = new FixtureLibrary();
            FixtureStructure fixture = library.FixtureFor("Arithmetic");

            var grammar = new EmbeddedSectionGrammar<ArithmeticFixture>
            {
                Label = "The embedded section",
                Style = EmbedStyle.Inline
            }.LeafName("step name");
            var embeddedSection = grammar.ToStructure(library).ShouldBeOfType<EmbeddedSection>();

            embeddedSection.Style.ShouldEqual(EmbedStyle.Inline);
        }


        [Test]
        public void the_child_step_name_is_the_fixture_alias()
        {
            new EmbeddedSectionGrammar<ArithmeticFixture>().LeafName()
                .ShouldEqual(typeof(ArithmeticFixture).GetFixtureAlias());
        }

        [Test]
        public void the_label_is_the_fixture_alias_by_default()
        {
            new EmbeddedSectionGrammar<ArithmeticFixture>().Label
                .ShouldEqual(typeof(ArithmeticFixture).GetFixtureAlias());
        }
    }
}