using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Model.Persistence
{
    [TestFixture]
    public class persisting_and_loading_specifications_with_json
    {
        [SetUp]
        public void SetUp()
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

        [Test]
        public void full_cycle_lifecycle()
        {
            original.Lifecycle = Lifecycle.Regression;
            persisted.Lifecycle.ShouldEqual(Lifecycle.Regression);
        }

        [Test]
        public void full_cycle_max_retries()
        {
            original.MaxRetries = 3;
            persisted.MaxRetries.ShouldEqual(3);
        }

        [Test]
        public void full_cycle_spec_id()
        {
            original.Id = Guid.NewGuid().ToString();
            persisted.Id.ShouldEqual(original.Id);
        }

        [Test]
        public void full_cycle_tags()
        {
            original.Tags.Add("a");
            original.Tags.Add("b");
            original.Tags.Add("c");
            persisted.Tags.ShouldHaveTheSameElementsAs(original.Tags);
        }

        [Test]
        public void no_tags_no_worries()
        {
            original.Tags.Any().ShouldBeFalse();

            persisted.Tags.Any().ShouldBeFalse();
        }

        [Test]
        public void read_and_write_comment_directly_under_spec()
        {
            var comment = new Comment {Id = Guid.NewGuid().ToString(), Text = "something here"};
            original.Children.Add(comment);

            var persistedComment = persisted.Children.Single().ShouldBeOfType<Comment>();
            persistedComment.ShouldNotBeTheSameAs(comment);
            persistedComment.Id.ShouldEqual(comment.Id);
            persistedComment.Text.ShouldEqual(comment.Text);
        }

        [Test]
        public void read_and_write_a_section_under_a_spec()
        {
            var section = new Section("Math") {Id = Guid.NewGuid().ToString()};
            original.Children.Add(section);

            var persistedSection = persisted.Children.Single().ShouldBeOfType<Section>();
            persistedSection.Id.ShouldEqual(section.Id);
            persistedSection.Key.ShouldEqual(section.Key);
        }

        [Test]
        public void read_and_write_a_step_with_plain_values_under_a_section()
        {
            var step = new Step("Add").With("x", "1").With("y", "2").With("sum", "3");
            step.Id = Guid.NewGuid().ToString();

            var section = new Section("Math");
            section.Children.Add(step);

            original.Children.Add(section);

            var persistedStep = persisted.Children.Single()
                .ShouldBeOfType<Section>().Children
                .Single().ShouldBeOfType<Step>();

            persistedStep.AssertValuesMatch(step);
        }

        [Test]
        public void read_and_write_a_comment_within_a_section()
        {
            var section = new Section("Math") { Id = Guid.NewGuid().ToString() };
            original.Children.Add(section);

            var comment = new Comment { Id = Guid.NewGuid().ToString(), Text = "something here" };
            section.Children.Add(comment);

            var persistedComment = persisted.Children.Single()
                .ShouldBeOfType<Section>().Children.Single()
                .ShouldBeOfType<Comment>();

            persistedComment.ShouldNotBeTheSameAs(comment);
            persistedComment.Id.ShouldEqual(comment.Id);
            persistedComment.Text.ShouldEqual(comment.Text);
        }

        [Test]
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
                .Text.ShouldEqual("I'm in numbers");

            persistedStep.Collections["Letters"].Children
                .Single().ShouldBeOfType<Comment>()
                .Text.ShouldEqual("I'm in letters");



        }
    }
}