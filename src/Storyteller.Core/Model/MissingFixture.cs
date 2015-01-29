namespace Storyteller.Core.Model
{
    [Hidden]
    public class MissingFixture : Fixture
    {
        private readonly string _key;

        public MissingFixture(string key)
        {
            _key = key;
        }

        public override void SetUp()
        {
            throw new MissingFixtureException(_key);
        }
    }
}