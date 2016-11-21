namespace StoryTeller.Model
{
    public interface IStepValidator
    {
        void Start(int number, Step step);
        void End(Step step);

        void Start(Section section, FixtureModel fixture);
        void End(Section section);
        void AddError(string message);
        void ValidateStepsWithinSection(Section section, FixtureModel fixture);
    }
}