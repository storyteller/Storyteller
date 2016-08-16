using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Xunit;
using Specifications.Fixtures.Docs;
using StoryTeller.Model;

namespace StoryTeller.Testing.Bugs
{
    
    public class do_not_put_hidden_fixtures_and_grammars_into_the_fixture_model_to_the_client
    {
        [Fact]
        public void no_hidden_grammars_in_fixture_model()
        {
            var compiledFixture = FixtureLibrary.CreateCompiledFixture(CellHandling.Basic(), typeof (TopicFolderFixture));

            compiledFixture.Model.grammars.OrderBy(x => x.key).Select(x => x.key)
                .ShouldHaveTheSameElementsAs("AllTopicsShouldBe", "CheckTopic", "ForFile", "TheTopicsAre", "TODO", "WriteFile");
        }
    }
}