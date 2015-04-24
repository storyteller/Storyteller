using ST.Docs;
using StoryTeller;

namespace Specifications.Fixtures.Docs
{
    public class TopicTemplatingFixture : Fixture
    {
        public TopicTemplatingFixture()
        {
            Title = "Topic Templating";
        }

        public IGrammar TheTopicsAre()
        {
            return Embed<TopicFolderFixture>("The System State is");
        }

        [FormatAs("The url resolution style is {style}")]
        public void TheUrlResolutionIs(UrlStyle style)
        {
            Context.State.Retrieve<DocSettings>().UrlStyle = style;


        }


    }
}