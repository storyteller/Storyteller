using System.Diagnostics;
using NUnit.Framework;
using Storyteller.Core.Remotes.Messaging;
using StoryTeller.Samples.Fixtures;

namespace Storyteller.Core.Testing
{
    [TestFixture]
    public class json_serialization_of_fixture_model
    {
        [Test]
        public void smoke_test_of_fixture_model_serialization()
        {
            var fixture = new SentenceFixture();
            var model = fixture.Compile(CellHandling.Basic());

            var json = JsonSerialization.ToCleanJson(model);

            Debug.WriteLine(json);
        }
    }
}