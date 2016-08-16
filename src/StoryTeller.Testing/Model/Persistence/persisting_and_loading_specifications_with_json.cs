using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Xunit;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Model.Persistence
{
    
    public class persisting_and_loading_specifications_with_json
    {
        public persisting_and_loading_specifications_with_json()
        {
            original = new Specification();



            _persisted = new Lazy<Specification>(() =>
            {
                var json = original.ToJson();

                var serializer = new JsonSerializer();
                var x = serializer.Deserialize<Specification>(new JsonTextReader(new StringReader(json)));

                x.ShouldNotBeTheSameAs(original);

                return x;
            });
        }

        private Specification original;
        private Lazy<Specification> _persisted;


        private Specification persisted
        {
            get { return _persisted.Value; }
        }

        [Fact]
        public void full_cycle_lifecycle()
        {
            original.Lifecycle = Lifecycle.Regression;
            persisted.Lifecycle.ShouldBe(Lifecycle.Regression);
        }

        [Fact]
        public void full_cycle_max_retries()
        {
            original.MaxRetries = 3;
            persisted.MaxRetries.ShouldBe(3);
        }

        [Fact]
        public void full_cycle_spec_id()
        {
            original.id = Guid.NewGuid().ToString();
            persisted.id.ShouldBe(original.id);
        }

        [Fact]
        public void full_cycle_tags()
        {
            original.Tags.Add("a");
            original.Tags.Add("b");
            original.Tags.Add("c");
            persisted.Tags.ShouldBe(original.Tags);
        }

        [Fact]
        public void no_tags_no_worries()
        {
            original.Tags.Any().ShouldBe(false);

            persisted.Tags.Any().ShouldBe(false);
        }

        [Fact]
        public void read_and_write_comment_directly_under_spec()
        {
            var comment = new Comment {id = Guid.NewGuid().ToString(), Text = "something here"};
            original.Children.Add(comment);

            var persistedComment = persisted.Children.Single().ShouldBeOfType<Comment>();
            persistedComment.ShouldNotBeTheSameAs(comment);
            persistedComment.id.ShouldBe(comment.id);
            persistedComment.Text.ShouldBe(comment.Text);
        }

        [Fact]
        public void read_and_write_a_section_under_a_spec()
        {
            var section = new Section("Math") {id = Guid.NewGuid().ToString()};
            original.Children.Add(section);

            var persistedSection = persisted.Children.Single().ShouldBeOfType<Section>();
            persistedSection.id.ShouldBe(section.id);
            persistedSection.Key.ShouldBe(section.Key);
        }

        [Fact]
        public void read_and_write_a_step_with_plain_values_under_a_section()
        {
            var step = new Step("Add").With("x", "1").With("y", "2").With("sum", "3");
            step.id = Guid.NewGuid().ToString();

            var section = new Section("Math");
            section.Children.Add(step);

            original.Children.Add(section);

            var persistedStep = persisted.Children.Single()
                .ShouldBeOfType<Section>().Children
                .Single().ShouldBeOfType<Step>();

            persistedStep.AssertValuesMatch(step);
        }

        [Fact]
        public void read_and_write_a_comment_within_a_section()
        {
            var section = new Section("Math") { id = Guid.NewGuid().ToString() };
            original.Children.Add(section);

            var comment = new Comment { id = Guid.NewGuid().ToString(), Text = "something here" };
            section.Children.Add(comment);

            var persistedComment = persisted.Children.Single()
                .ShouldBeOfType<Section>().Children.Single()
                .ShouldBeOfType<Comment>();

            persistedComment.ShouldNotBeTheSameAs(comment);
            persistedComment.id.ShouldBe(comment.id);
            persistedComment.Text.ShouldBe(comment.Text);
        }

        [Fact]
        public void persist_collection_sections_within_a_step()
        {
            var step = new Step("Adding");
            step.AddCollection("Numbers").AddComment("I'm in numbers");
            step.AddCollection("Letters").AddComment("I'm in letters");
            

            original.AddSection("Math").Children.Add(step);

            Debug.WriteLine(JsonSerialization.ToIndentedJson(original));

            var persistedStep = persisted
                .Children.Single().ShouldBeOfType<Section>()
                .Children.Single().ShouldBeOfType<Step>();

            persistedStep.Collections["Numbers"].Children
                .Single().ShouldBeOfType<Comment>()
                .Text.ShouldBe("I'm in numbers");

            persistedStep.Collections["Letters"].Children
                .Single().ShouldBeOfType<Comment>()
                .Text.ShouldBe("I'm in letters");



        }
    }
}