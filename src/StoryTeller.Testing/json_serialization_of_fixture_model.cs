using System.Diagnostics;
using Xunit;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Samples.Fixtures;

namespace StoryTeller.Testing
{
    
    public class json_serialization_of_fixture_model
    {
        [Fact]
        public void smoke_test_of_fixture_model_serialization()
        {
            var fixture = new SentenceFixture();
            var model = fixture.Compile(CellHandling.Basic());

            var json = JsonSerialization.ToCleanJson(model);

            Debug.WriteLine(json);
        }
    }
}