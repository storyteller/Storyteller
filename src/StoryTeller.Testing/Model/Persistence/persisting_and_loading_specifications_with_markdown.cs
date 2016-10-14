using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.Markdown;
using StoryTeller.Remotes.Messaging;
using Xunit;

namespace StoryTeller.Testing.Model.Persistence
{
    public class persisting_and_loading_specifications_with_markdown
    {
        public persisting_and_loading_specifications_with_markdown()
        {
            original = new Specification();



            _persisted = new Lazy<Specification>(() =>
            {
                var text = MarkdownWriter.WriteToText(original);

                var x = MarkdownReader.ReadFromText(text);

                x.ShouldNotBeTheSameAs(original);

                return x;
            });
        }

        private readonly Specification original;
        private readonly Lazy<Specification> _persisted;


        private Specification persisted => _persisted.Value;

        [Fact]
        public void smoke_test_of_writing_all()
        {
            var specs = TestingContext.Hierarchy.GetAllSpecs();

            foreach (var spec in specs)
            {
//                Console.WriteLine($"Spec: {spec.name}");
//                Console.WriteLine("=======================================================");

                var text = MarkdownWriter.WriteToText(spec);

//                Console.WriteLine(text);
//
//                Console.WriteLine("=======================================================");
//                Console.WriteLine();
//                Console.WriteLine();
//                Console.WriteLine();
            }
        }

        private void roundTripCheck(Specification spec)
        {
            spec.ApplyRenumbering();
            spec.path = null; // doesn't matter for the markdown persistence

            var markdown = MarkdownWriter.WriteToText(spec);

            Console.WriteLine(markdown);

            var readCopy = MarkdownReader.ReadFromText(markdown);

            compare(spec, readCopy);
        }

        private void compare(Specification expected, Specification actual)
        {
            actual.LastUpdated.ShouldBe(expected.LastUpdated);
            actual.ExpirationPeriod.ShouldBe(expected.ExpirationPeriod);
            actual.Breakpoints.ShouldBe(expected.Breakpoints);
            actual.Lifecycle.ShouldBe(expected.Lifecycle);
            actual.MaxRetries.ShouldBe(expected.MaxRetries);
            actual.id.ShouldBe(expected.id);
            actual.name.ShouldBe(expected.name);


            compare(expected.Children, actual.Children);


        }

        private void compare(IList<Node> expected, IList<Node> actual)
        {
            actual.Count.ShouldBe(expected.Count);
            actual.Select(x => x.GetType().Name)
                .ShouldHaveTheSameElementsAs(expected.Select(x => x.GetType().Name).ToArray());


            for (int i = 0; i < expected.Count; i++)
            {
                var expectedNode = expected[i];
                var actualNode = actual[i];

                if (expectedNode is Comment)
                {
                    actualNode.As<Comment>().Text.ShouldBe(expectedNode.As<Comment>().Text);
                }

                if (expectedNode is Section)
                {
                    var expectedSection = expectedNode.As<Section>();
                    var actualSection = actualNode.As<Section>();

                    compare(expectedSection, actualSection);
                }

                if (expectedNode is Step)
                {
                    compare(expectedNode.As<Step>(), actualNode.As<Step>());
                }
            }
        }

        private void compare(Step expected, Step actual)
        {
            if (actual.Key != "row")
            {
                actual.Key.ShouldBe(expected.Key);
            }

            expected.Values.Keys.Where(x => x != "id").Each(key =>
            {
                actual.Values[key].ShouldBe(expected.Values[key]);
            });

            compare(expected.collections.OrderBy(x => x.Key).OfType<Node>().ToList(), actual.collections.OrderBy(x => x.Key).OfType<Node>().ToList());
        }

        private void compare(Section expected, Section actual)
        {
            actual.Key.ShouldBe(expected.Key);
            compare(expected.Children, actual.Children);
        }

        [Fact]
        public void end_to_end_test_of_writing_and_reading_all()
        {
            var specs = TestingContext.Hierarchy.GetAllSpecs();
                //.Where(x => x.name == "Selection List Values");

            foreach (var spec in specs)
            {
//                Console.WriteLine($"Spec: {spec.name}");
//                Console.WriteLine("=======================================================");


                roundTripCheck(spec);


//                Console.WriteLine("=======================================================");
//                Console.WriteLine();
//                Console.WriteLine();
//                Console.WriteLine();
            }
        }

        [Fact]
        public void full_cycle_name()
        {
            original.name = "My fabulous spec";

            persisted.name.ShouldBe(original.name);
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
            var comment = new Comment { Text = "something here" };
            original.Children.Add(comment);

            var persistedComment = persisted.Children.Single().ShouldBeOfType<Comment>();
            persistedComment.ShouldNotBeTheSameAs(comment);
            persistedComment.Text.ShouldBe(comment.Text);
        }

        [Fact]
        public void read_and_write_a_section_under_a_spec()
        {
            var section = new Section("Math");

            section.ActiveCells.Add("A", true);
            section.ActiveCells.Add("B", false);

            original.Children.Add(section);

            var persistedSection = persisted.Children.Single().ShouldBeOfType<Section>();
            persistedSection.Key.ShouldBe(section.Key);
            persistedSection.ActiveCells["A"].ShouldBeTrue();
            persistedSection.ActiveCells["B"].ShouldBeFalse();
        }

        [Fact]
        public void read_and_write_a_step_with_plain_values_under_a_section()
        {
            var step = new Step("Add").With("x", "1").With("y", "2").With("sum", "3");

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
            var section = new Section("Math") {  };
            original.Children.Add(section);

            var comment = new Comment {  Text = "something here" };
            section.Children.Add(comment);

            var persistedComment = persisted.Children.Single()
                .ShouldBeOfType<Section>().Children.Single()
                .ShouldBeOfType<Comment>();

            persistedComment.ShouldNotBeTheSameAs(comment);
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
                .Children.Add(new Step("Sub_Total_in_£"));

            var persistedStep = persisted
                .Children.Single().ShouldBeOfType<Section>()
                .Children.Single().ShouldBeOfType<Step>();

            persistedStep.Key.ShouldBe("Sub_Total_in_£");
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

        [Fact]
        public void can_handle_multi_line_comments()
        {
            original.name = "Some spec";

            var comment = new Comment
            {
                Text = @"hello,
how are you today?

** Well, thank you"
            };

            original.Children.Add(comment);

            compare(original, persisted);
        }

        [Fact]
        public void can_handle_multi_line_comment_within_a_section()
        {
            original.name = "Some spec";

            var comment = new Comment
            {
                Text = @"hello,
how are you today?

** Well, thank you"
            };

            var section = new Section("MyThing");
            section.AddStep("Go");
            section.Children.Add(comment);
            section.AddStep("Stop");

            original.Children.Add(section);

            compare(original, persisted);

            original.Children.Add(new Comment {Text = "Hey\nyou!"});
        }

        [Fact]
        public void cell_value_with_a_comma_or_equals_or_line_breaks()
        {
            original.name = "Some spec";

            var step = new Step("Add").With("x", "1,2,3").With("y", "3=2").With("sum", "3\r\n3");

            var section = new Section("Math");
            section.Children.Add(step);

            original.Children.Add(section);

            compare(original, persisted);
        }

        [Fact]
        public void cell_value_with_really_big_text()
        {
            original.name = "Some spec";

            var bigtext = "Very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, long text";


            var step = new Step("Add").With("x", bigtext).With("y", "3=2").With("sum", "3\r\n3");

            var section = new Section("Math");
            section.Children.Add(step);

            original.Children.Add(section);

            compare(original, persisted);
        }

        [Fact]
        public void cell_value_with_lots_of_line_breaks()
        {
            original.name = "Some spec";

            var bigtext = @"Very,
very,
very,
very,
very,
very,
very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, long text";


            var step = new Step("Add").With("x", bigtext).With("y", "3=2").With("sum", "3\r\n3");

            var section = new Section("Math");
            section.Children.Add(step);

            original.Children.Add(section);

            compare(original, persisted);
        }

        [Fact]
        public void can_escape_pipe_bar_in_table_data()
        {
            original.name = "Some spec";
            var section = new Section("Math");

            var tableStep = section.AddStep("table");
            var rows = tableStep.AddCollection("rows");

            rows.AddStep("row").With("a", "1");
            rows.AddStep("row").With("a", "2");
            rows.AddStep("row").With("a", "1|2|3");

            original.Children.Add(section);

            compare(original, persisted);

        }
    }
}