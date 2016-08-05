using System;
using Baseline;

namespace StoryTeller.Model
{
    [Hidden]
    public class InvalidFixture : Fixture
    {
        private readonly GrammarError _error;

        public InvalidFixture(Type innerType, Exception ex)
        {
            Key = innerType.Name.Replace("Fixture", "");

            var message = "Fixture {0} could not be loaded".ToFormat(innerType.FullName);
            _error = new GrammarError {error = ex.ToString(), message = message};
        }

        public override FixtureModel Compile(CellHandling conversions)
        {
            var model = new FixtureModel(Key);
            model.AddError(_error);

            return model;
        }
    }
}