using System.ComponentModel;
using StoryTeller;

namespace Samples.Fixtures
{
    public enum Direction
    {
        North,
        South,
        West,
        East
    }
    
    public class CellsFixture : Fixture
    {
        [FormatAs("Enter the user name {username}")]
        public void EnterTheUserName([DefaultValue("user1")]string username)
        {
            
        }

        public void Enable(bool enabled)
        {
            
        }

        public void Direction([DefaultValue("East")]Direction direction)
        {
            
        }

        
    }
}