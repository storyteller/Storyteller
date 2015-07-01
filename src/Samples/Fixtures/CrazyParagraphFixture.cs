using StoryTeller;
using StoryTeller.Grammars.Tables;

namespace Samples.Fixtures
{
    public class CrazyParagraphFixture : Fixture
    {
        [ExposeAsTable("Greetings!")]
        public void SaySomething(string Greeting, string To)
        {
            
        }

        public void Start(string when)
        {
            
        }

        public IGrammar Everything()
        {
            return Paragraph("Everything", _ =>
            {
                _ += this["Start"];
                _ += this["SaySomething"];
                

            });
        }
    }
}