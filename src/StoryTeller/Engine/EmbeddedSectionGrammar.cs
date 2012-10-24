using System;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    [Description("Embeds a section of another Fixture")]
    public class EmbeddedSectionGrammar<T> : IGrammar where T : IFixture, new()
    {
        private GrammarAction _before = (step, context) => { };

        public EmbeddedSectionGrammar()
        {
            Style = EmbedStyle.TitledAndIndented;
            _leafName = Label = typeof(T).GetFixtureAlias();
            Description = DescriptionAttribute.GetDescription(GetType());
        }

        private string _leafName;

        public EmbeddedSectionGrammar<T> LeafName(string value)
        {
            _leafName = value;
            return this;
        }

        public string LeafName()
        {
            return _leafName;
        }

        public string Label { get; set; }
        public EmbedStyle Style { get; set; }

        #region IGrammar Members

        public void Execute(IStep containerStep, ITestContext context)
        {
            context.PerformAction(containerStep, _before);
            context.ExecuteWithFixture<T>(containerStep.LeafFor(LeafName()), containerStep);
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            FixtureStructure fixture = library.FixtureFor(typeof(T).GetFixtureAlias());
            return new EmbeddedSection(fixture, Label, LeafName())
            {
                Style = Style
            };
        }

        public string Description { get; set; }

        #endregion

        public EmbeddedSectionGrammar<T> Before(GrammarAction action)
        {
            _before = action;
            return this;
        }

        public EmbeddedSectionGrammar<T> Before(Action action)
        {
            return Before(action.ToGrammarAction());
        }
    }
}