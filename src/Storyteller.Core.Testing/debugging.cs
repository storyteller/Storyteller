using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using NUnit.Framework;
using Storyteller.Core.Model;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Testing
{
    [TestFixture, Explicit]
    public class debugging
    {
        [Test]
        public void serialize_fixtures()
        {
            var task = FixtureLibrary.CreateForAppDomain(CellHandling.Basic());
            task.Wait();

            // CreateLocation
            // AddressVerification

            var fixtureModels = task.Result.Models.GetAll().ToArray();

            var json = JsonSerialization.ToJson(fixtureModels);

            var models = JsonSerialization.Deserialize<FixtureModel[]>(json);

            models.Each(x => Debug.WriteLine(x.key));
        }
    }
}