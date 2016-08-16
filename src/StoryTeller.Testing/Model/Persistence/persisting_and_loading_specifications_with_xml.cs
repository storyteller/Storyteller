using System;
using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Testing.Model.Persistence
{
    
    public class persisting_and_loading_specifications_with_xml
    {
        public persisting_and_loading_specifications_with_xml()
        {
            original = new Specification();



            _persisted = new Lazy<Specification>(() =>
            {
                var document = XmlWriter.WriteToXml(original);

                var x = XmlReader.ReadFromXml(document);

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
        public void full_cycle_spec_last_updated()
        {
            original.LastUpdated = new DateTime(2015, 3, 6);
            persisted.LastUpdated.ShouldBe(original.LastUpdated);
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
            var section = new Section("Math")
            {
                id = Guid.NewGuid().ToString(), 
            };

            section.ActiveCells.Add("A", true);
            section.ActiveCells.Add("B", false);

            original.Children.Add(section);

            var persistedSection = persisted.Children.Single().ShouldBeOfType<Section>();
            persistedSection.id.ShouldBe(section.id);
            persistedSection.Key.ShouldBe(section.Key);
            persistedSection.ActiveCells["A"].ShouldBeTrue();
            persistedSection.ActiveCells["B"].ShouldBeFalse();
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

        [Fact]
        public void section_name_is_correctly_encoded()
        {
            original.AddSection("Total in £");

            var persistedSection = persisted
                .Children.Single().ShouldBeOfType<Section>();

            persistedSection.Key.ShouldBe("Total in £");
        }

        [Fact]
        public void step_name_is_correctly_encoded()
        {
            original.AddSection("MySection")
                .Children.Add(new Step("Sub Total in £"));

            var persistedStep = persisted
                .Children.Single().ShouldBeOfType<Section>()
                .Children.Single().ShouldBeOfType<Step>();

            persistedStep.Key.ShouldBe("Sub Total in £");
        }

        [Fact]
        public void step_value_are_encoded()
        {
            var step = new Step("MyStep").With("Total £", "1").With("Total $", "2");

            original.AddSection("MySection")
                .Children.Add(step);

            var persistedStep = persisted
                .Children.Single().ShouldBeOfType<Section>()
                .Children.Single().ShouldBeOfType<Step>();

            persistedStep.AssertValuesMatch(step);
        }
    }
}