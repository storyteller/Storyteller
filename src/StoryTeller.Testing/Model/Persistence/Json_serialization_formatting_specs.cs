using System.Diagnostics;
using System.IO;
using Newtonsoft.Json;
using Xunit;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Model.Persistence
{
    
    public class Json_serialization_formatting_specs
    {
        [Fact]
        public void write_a_comment()
        {
            var comment = new Comment {id = "foo", Text = "some text"};

            var json = comment.ToJson();
            Debug.WriteLine(json);
            json.ShouldBe("{\"text\":\"some text\",\"type\":\"comment\",\"id\":\"foo\"}");
        }

        [Fact]
        public void section_with_a_single_comment()
        {
            var section = new Section("Math");
            section.AddComment("some foo");

            Debug.WriteLine(section.ToJson());
        }

        [Fact]
        public void section_with_a_single_step_that_only_has_values()
        {
            var section = new Section("Math");
            section.AddStep("Add").With("x", "1").With("y", "2").With("sum", "3");

            Debug.WriteLine(section.ToJson());
        }

        [Fact]
        public void step_that_has_collections()
        {
            var step = new Step("Adding");
            var section = step.AddCollection("Numbers");
            section.AddComment("foo!");
            section.AddComment("bar!");

            Debug.WriteLine(step.ToJson());
        }

        [Fact]
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