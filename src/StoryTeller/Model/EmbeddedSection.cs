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
    }
}