using System.Collections.Generic;
using System.Diagnostics;
using FubuCore;
using NUnit.Framework;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Testing
{
    [TestFixture]
    public class recording_json_for_client_development
    {
        [Test]
        public void record_specification_json()
        {
            var hierarchy = TestingContext.Hierarchy;
            var dictionary = new Dictionary<string, Specification>();

            hierarchy.GetAllSpecs().Each(x =>
            {
                var spec = XmlReader.ReadFromFile(x.Filename);
                dictionary.Add(x.id, spec);
            });

            var json = JsonSerialization.ToIndentedJson(dictionary);

            new FileSystem().WriteStringToFile("specs.js", "module.exports = " + json);
        }
    }
}