using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Xunit;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing
{
    
    public class debugging
    {
        [Fact]
        public void serialize_fixtures()
        {
            var library = FixtureLibrary.CreateForAppDomain(CellHandling.Basic());

            // CreateLocation
            // AddressVerification

            var fixtureModels = library.Models.GetAll().ToArray();

            var json = JsonSerialization.ToJson(fixtureModels);

            var models = JsonSerialization.Deserialize<FixtureModel[]>(json);

            models.Each(x => Debug.WriteLine(x.key));
        }
    }
}