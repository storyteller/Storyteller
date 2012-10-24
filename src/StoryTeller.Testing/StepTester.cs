using System.Collections.Generic;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class StepTester
    {
        [Test]
        public void find_step_values()
        {
            IDictionary<string, string> values = Step.ParseValues("a:1, b:2, c:3");
            values.Count.ShouldEqual(3);
            values["a"].ShouldEqual("1");
            values["b"].ShouldEqual("2");
            values["c"].ShouldEqual("3");
        }

        [Test]
        public void parse_values_works_just_fine_with_blank_or_null_values()
        {
            Step.ParseValues(null).ShouldNotBeNull();
            Step.ParseValues(string.Empty).ShouldNotBeNull();
        }

        [Test]
        public void accept_a_visitor()
        {
            var visitor = MockRepository.GenerateMock<ITestVisitor>();

            var step = new Step("a");

            step.AcceptVisitor(visitor);

            visitor.AssertWasCalled(x => x.RunStep(step));
        }

        [Test]
        public void has_checks_the_cache()
        {
            var step = new Step("a");
            step.Has("b").ShouldBeFalse();

            step.Set("b", 123);

            step.Has("b").ShouldBeTrue();
        }

        [Test]
        public void shallow_clone()
        {
            Step step = new Step("key").With("a:1,b:2,c:3");
            IStep clone = step.ShallowClone();

            clone.ShouldNotBeTheSameAs(step);
            clone.GrammarKey.ShouldEqual("key");
            clone.Get("a").ShouldEqual(step.Get("a"));
            clone.Get("b").ShouldEqual(step.Get("b"));
            clone.Get("c").ShouldEqual(step.Get("c"));
        }

        [Test]
        public void step_childstepsfor_is_wired_up()
        {
            var step = new Step();
            var child = new Step();
            step.LeafFor("record").Add(child);
            step.LeafFor("record").AllSteps().ShouldContain(child);
            step.LeafFor("something else").AllSteps().ShouldNotContain(child);
        }

        [Test]
        public void step_count_of_a_step_with_child_leaves()
        {
            Step step = new Step().WithChildren("a", new Step(), new Step(), new Step());
            step.StepCount().ShouldEqual(4);
        }

        [Test]
        public void step_count_of_a_step_with_child_leaves_and_grand_children()
        {
            Step step = new Step().WithChildren("a", new Step(), new Step(),
                                                new Step().WithChildren("b", new Step()).WithChildren("c", new Step(),
                                                                                                      new Step()));
            step.StepCount().ShouldEqual(7);
        }

        [Test]
        public void step_count_of_a_step_with_no_child_leaves()
        {
            new Step().StepCount().ShouldEqual(1);
        }


    }

    [TestFixture]
    public class Step_Validation_tester
    {
        private readonly Cell[] cells = new[]
        {
            Cell.For<int>("a"),
            Cell.For<int>("b"),
            Cell.For<int>("c"),
        };

        public Step_Validation_tester()
        {
            cells[0].DefaultValue = "5";
        }

        [Test]
        public void all_valid_step()
        {
            Step step = new Step().With("a:1,b:2,c:3");
            step.Validate(cells).Count.ShouldEqual(0);
        }

        [Test]
        public void do_not_log_a_missing_attribute_if_the_cell_has_a_default_value()
        {
            Step step = new Step().With("b:2,c:3");
            step.Validate(cells).Count.ShouldEqual(0);
        }

        [Test]
        public void find_a_missing_and_extra_attribute()
        {
            Step step = new Step().With("a:1,b:2,d:4");
            step.Validate(cells).ShouldHaveTheSameElementsAs(new PropertyError
            {
                Attribute = "c",
                Code = PropertyErrorCode.Missing
            }, new PropertyError
            {
                Attribute = "d",
                Code = PropertyErrorCode.Unknown
            });
        }

        [Test]
        public void find_a_missing_attribute()
        {
            Step step = new Step().With("a:1,b:2");
            step.Validate(cells).ShouldHaveTheSameElementsAs(new PropertyError
            {
                Attribute = "c",
                Code = PropertyErrorCode.Missing
            });
        }

        [Test]
        public void find_an_extra_attribute()
        {
            Step step = new Step().With("a:1,b:2,c:3,d:4");
            step.Validate(cells).ShouldHaveTheSameElementsAs(new PropertyError
            {
                Attribute = "d",
                Code = PropertyErrorCode.Unknown
            });
        }
    }
}