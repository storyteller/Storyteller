using StoryTeller.Grammars.Tables;

namespace StoryTeller.Samples.Fixtures
{
    public class PlayerFixture : Fixture
    {
        public PlayerFixture()
        {
            Title = "Kansas City Chiefs 2015";
        }

        // SAMPLE: using-selection-list-attribute
        [ExposeAsTable("Player Positions")]
        [return: SelectionList("positions"), AliasAs("Position")]
        public string PositionIs(Player Player)
        {
            return Player.Position;
        }         
        // ENDSAMPLE
    }
}