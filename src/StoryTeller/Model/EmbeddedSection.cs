using Baseline;

namespace StoryTeller.Model
{
    public class EmbeddedSection : GrammarModel
    {
        public FixtureModel fixture;
        public string title;
        public string collection;
        public bool hasBeforeStep;
        public bool hasAfterStep;

        public EmbeddedSection() : base("embedded-section")
        {
        }

        protected internal override void configureSampleStep(Step step)
        {
            if (collection.IsEmpty())
            {
                collection = fixture.key;
            }

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
                fixture = (FixtureModel) fixture.ApplyOverrides(@override.fixture),
                hasBeforeStep = hasBeforeStep,
                hasAfterStep = hasAfterStep
                
            };

            if (@override.title.IsNotEmpty())
            {
                section.title = @override.title;
            }

            return section;
        }

        public override void ResolveDependencies(FixtureLibrary library)
        {
            var embeddedKey = fixture.key;
            if (library.Models.Has(embeddedKey))
            {
                fixture = library.Models[embeddedKey];
            }

            
        }

        public void ApplyFixtureOverrides(FixtureLibrary systemLibrary, FixtureLibrary overrides)
        {
            var embeddedKey = fixture.key;
            if (systemLibrary.Models.Has(embeddedKey))
            {
                var systemFixture = systemLibrary.Models[embeddedKey];

                fixture = overrides.Models.Has(embeddedKey)
                    ? systemFixture.ApplyOverrides(overrides.Models[embeddedKey]).As<FixtureModel>()
                    : systemFixture;
            }
            else
            {
                fixture = overrides.Models[embeddedKey];
            }
        }

        public override string ToMissingCode(bool withinParagraph = false)
        {
            var hidden = withinParagraph ? HiddenAttributeDeclaration : string.Empty;

            return $@"
        {hidden}
        public {typeof(IGrammar).FullName} {key}()
        {{
            return Embed<{fixture.key}Fixture>(""{title}"");
        }} 
";
        }

        public override string TitleOrFormat()
        {
            return title;
        }

        public override void PostProcessAndValidate(IStepValidator stepValidator, Step step)
        {
            var section = step.Collections[collection];

            stepValidator.Start(section, fixture);

            stepValidator.ValidateStepsWithinSection(section, fixture);

            stepValidator.End(section);
        }
    }
}