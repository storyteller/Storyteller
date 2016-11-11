using Baseline;

namespace StoryTeller.Model
{
    public class EmbeddedSection : GrammarModel
    {
        public FixtureModel fixture;
        public string title;
        public string collection;

        public EmbeddedSection() : base("embedded-section")
        {
        }

        protected internal override void configureSampleStep(Step step)
        {
            var section = step.Collections[collection];

            fixture.CreateSampleSteps(section);
        }

        public override GrammarModel ApplyOverrides(GrammarModel grammar)
        {
            var @override = grammar as EmbeddedSection;
            if (@override == null) return this;

            var section = new EmbeddedSection
            {
                key = key,
                title = title,
                collection = collection,
                fixture = fixture
                
            };

            if (@override.title.IsNotEmpty())
            {
                section.title = @override.title;
            }

            return section;
        }
    }
}