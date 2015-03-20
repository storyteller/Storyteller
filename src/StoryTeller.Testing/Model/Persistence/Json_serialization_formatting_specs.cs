using System.Diagnostics;
using System.IO;
using FubuTestingSupport;
using Newtonsoft.Json;
using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Model.Persistence
{
    [TestFixture]
    public class Json_serialization_formatting_specs
    {
        [Test]
        public void write_a_comment()
        {
            var comment = new Comment {Id = "foo", Text = "some text"};

            comment.ToJson().ShouldEqual("{\"text\":\"some text\",\"type\":\"comment\",\"id\":\"foo\"}");
        }

        [Test]
        public void section_with_a_single_comment()
        {
            var section = new Section("Math");
            section.AddComment("some foo");

            Debug.WriteLine(section.ToJson());
        }

        [Test]
        public void section_with_a_single_step_that_only_has_values()
        {
            var section = new Section("Math");
            section.AddStep("Add").With("x", "1").With("y", "2").With("sum", "3");

            Debug.WriteLine(section.ToJson());
        }

        [Test]
        public void step_that_has_collections()
        {
            var step = new Step("Adding");
            var section = step.AddCollection("Numbers");
            section.AddComment("foo!");
            section.AddComment("bar!");

            Debug.WriteLine(step.ToJson());
        }

        [Test]
        public void bug_with_deserializing_a_step_from_client_json()
        {
            var json =
                "{\"key\": \"EmbeddedMath\",  \"cells\": {},  \"id\": \"ce733f06-710d-4491-9f4e-049fdc4fe48f\"}";

            var step = JsonSerialization.Deserialize<Step>(json);

            Debug.WriteLine(step);

        }
    }

    public static class JsonExtensions
    {
        public static string ToJson(this Node node)
        {
            var serializer = new JsonSerializer();
            var writer = new StringWriter();

            serializer.Serialize(writer, node);

            return writer.ToString();
        }
    }
}