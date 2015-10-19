using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class debugging
    {
        [Test]
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