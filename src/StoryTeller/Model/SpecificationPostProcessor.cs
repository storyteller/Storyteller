using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace StoryTeller.Model
{
    public class SpecError
    {
        public string[] location = new string[0];
        public string message;
    }

    public interface IStepValidator
    {
        void Start(int number, Step step);
        void End(Step step);

        void Start(Section section, FixtureModel fixture);
        void End(Section section);
        void AddError(string message);
        void ValidateStepsWithinSection(Section section, FixtureModel fixture);
    }

    public class SpecificationPostProcessor : IStepValidator
    {
        private readonly FixtureLibrary _library;
        private readonly Specification _spec;

        private readonly Stack<string> _locations = new Stack<string>();

        public SpecificationPostProcessor(FixtureLibrary library, Specification spec)
        {
            _library = library;
            _spec = spec;
        }

        public void Validate()
        {
            var i = 0;
            foreach (var section in _spec.Children.OfType<Section>())
            {
                i++;

                _locations.Push($"Section #{i}: '{section.Key}'");

                validateSection(section);

                _locations.Pop();
            }
        }

        private void validateSection(Section section)
        {
            if (!_library.Models.Has(section.Key))
            {
                AddError($"References an unknown Fixture ('{section.Key}')");
                return;
            }

            var fixture = _library.Models[section.Key];


            ValidateStepsWithinSection(section, fixture);
        }

        public void ValidateStepsWithinSection(Section section, FixtureModel fixture)
        {
            if (fixture.IsMissing)
            {
                AddError($"Fixture '{fixture.key}' is not implemented");
            }

            var i = 0;
            foreach (var step in section.Children.OfType<Step>())
            {
                i++;

                _locations.Push($"Step #{i}: {step.Key}");

                var grammar = fixture.FindGrammar(step.Key);
                if (grammar == null)
                {
                    AddError($"Unknown Grammar '{step.Key}'");
                }
                else
                {
                    if (grammar.IsMissing)
                    {
                        AddError($"Grammar '{step.Key}' is not implemented");
                    }

                    grammar.PostProcessAndValidate(this, step);
                }

                _locations.Pop();
            }
        }

        public void AddError(string message)
        {
            _spec.AddError(new SpecError
            {
                location = _locations.Reverse().ToArray(),
                message = message
            });
        }

        void IStepValidator.Start(int number, Step step)
        {
            _locations.Push($"Step #{step}: {step.Key}");
        }

        void IStepValidator.End(Step step)
        {
            _locations.Pop();
        }

        void IStepValidator.Start(Section section, FixtureModel fixture)
        {
            if (fixture == null)
            {
                _locations.Push($"Collection '{section.Key}'");
            }
            else
            {
                _locations.Push($"Collection '{section.Key}' using Fixture '{fixture.key}'");
            }
        }

        void IStepValidator.End(Section section)
        {
            _locations.Pop();
        }
    }
}