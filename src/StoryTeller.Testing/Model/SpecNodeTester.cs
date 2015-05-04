using System;
using System.Diagnostics;
using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class SpecNodeTester
    {
        [Test]
        public void serializes_in_a_round_trip()
        {
            var node = new SpecNode
            {
                id = Guid.NewGuid().ToString(),
                Lifecycle = Lifecycle.Acceptance,
                name = "Foo"
            };

            var json = JsonSerialization.ToJson(node, true);

            Debug.WriteLine(json);
        }
    }
}