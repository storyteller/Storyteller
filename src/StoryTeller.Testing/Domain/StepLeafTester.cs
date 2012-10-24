using NUnit.Framework;
using StoryTeller.Domain;

namespace StoryTeller.Testing.Domain
{
    [TestFixture]
    public class StepLeafTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void add_step()
        {
            var leaf = new StepLeaf
            {
                DefaultChildStepName = "DaRow"
            };

            IStep step = leaf.AddNewStep();
            step.GrammarKey.ShouldEqual(leaf.DefaultChildStepName);
            leaf.AllSteps().Contains(step).ShouldBeTrue();
        }

        [Test]
        public void clear_attribute()
        {
            var leaf = new StepLeaf();
            leaf.Add(new Step().With("a:1,b:2,c:3"));
            leaf.Add(new Step().With("a:1,b:2"));
            leaf.Add(new Step().With("b:2,c:3,d:4"));
            leaf.Add(new Step().With("e:1"));
            leaf.Add(new Step().With("a:1,b:2,c:3"));

            leaf.ClearAttribute("a");

            leaf.GetAllUniqueAttributes().ShouldHaveTheSameElementsAs("b", "c", "d", "e");
        }

        [Test]
        public void clone_last_node_does_nothing_and_returns_false_if_no_other_steps_exist()
        {
            var leaf = new StepLeaf();
            leaf.CloneLastStep().ShouldBeNull();
        }

        [Test]
        public void clone_last_node_if_a_node_exists()
        {
            var leaf = new StepLeaf();
            leaf.Add(new Step("a"));

            leaf.CloneLastStep().ShouldNotBeTheSameAs(leaf.AllSteps()[0]);

            leaf.AllSteps().Count.ShouldEqual(1);
        }

        [Test]
        public void get_all_unique_attributes()
        {
            var leaf = new StepLeaf();
            leaf.Add(new Step().With("a:1,b:2,c:3"));
            leaf.Add(new Step().With("a:1,b:2"));
            leaf.Add(new Step().With("b:2,c:3,d:4"));
            leaf.Add(new Step().With("e:1"));
            leaf.Add(new Step().With("a:1,b:2,c:3"));

            leaf.GetAllUniqueAttributes().ShouldHaveTheSameElementsAs("a", "b", "c", "d", "e");
        }

        [Test]
        public void move_down_1()
        {
            var leaf = new StepLeaf();
            IStep step0 = leaf.AddNewStep();
            IStep step1 = leaf.AddNewStep();
            IStep step2 = leaf.AddNewStep();
            IStep step3 = leaf.AddNewStep();

            leaf.MoveDown(step0);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step1);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step2);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step3);

            leaf.MoveDown(step0);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step1);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step2);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step3);
        }

        [Test]
        public void move_down_when_already_last()
        {
            var leaf = new StepLeaf();
            IStep step0 = leaf.AddNewStep();
            IStep step1 = leaf.AddNewStep();
            IStep step2 = leaf.AddNewStep();
            IStep step3 = leaf.AddNewStep();

            leaf.MoveDown(step3);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step1);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step2);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step3);
        }

        [Test]
        public void move_to_bottom()
        {
            var leaf = new StepLeaf();
            IStep step0 = leaf.AddNewStep();
            IStep step1 = leaf.AddNewStep();
            IStep step2 = leaf.AddNewStep();
            IStep step3 = leaf.AddNewStep();

            leaf.MoveToBottom(step0);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step1);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step2);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step3);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step0);

            leaf.MoveToBottom(step1);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step2);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step3);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step1);
        }

        [Test]
        public void move_to_bottom_when_already_last()
        {
            var leaf = new StepLeaf();
            IStep step0 = leaf.AddNewStep();
            IStep step1 = leaf.AddNewStep();
            IStep step2 = leaf.AddNewStep();
            IStep step3 = leaf.AddNewStep();

            leaf.MoveToBottom(step3);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step1);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step2);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step3);
        }

        [Test]
        public void move_up_1()
        {
            var leaf = new StepLeaf();
            IStep step0 = leaf.AddNewStep();
            IStep step1 = leaf.AddNewStep();
            IStep step2 = leaf.AddNewStep();
            IStep step3 = leaf.AddNewStep();

            leaf.MoveUp(step3);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step1);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step3);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step2);

            leaf.MoveUp(step3);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step3);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step1);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step2);
        }

        [Test]
        public void move_up_when_the_step_is_already_first()
        {
            var leaf = new StepLeaf();
            IStep step0 = leaf.AddNewStep();
            IStep step1 = leaf.AddNewStep();
            IStep step2 = leaf.AddNewStep();
            IStep step3 = leaf.AddNewStep();

            leaf.MoveUp(step0);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step1);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step2);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step3);
        }

        [Test]
        public void move_to_top()
        {
            var leaf = new StepLeaf();
            IStep step0 = leaf.AddNewStep();
            IStep step1 = leaf.AddNewStep();
            IStep step2 = leaf.AddNewStep();
            IStep step3 = leaf.AddNewStep();

            leaf.MoveToTop(step3);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step3);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step1);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step2);

            leaf.MoveToTop(step2);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step2);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step3);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step1);
        }

        [Test]
        public void move_to_top_when_the_step_is_already_first()
        {
            var leaf = new StepLeaf();
            IStep step0 = leaf.AddNewStep();
            IStep step1 = leaf.AddNewStep();
            IStep step2 = leaf.AddNewStep();
            IStep step3 = leaf.AddNewStep();

            leaf.MoveToTop(step0);

            leaf.AllSteps()[0].ShouldBeTheSameAs(step0);
            leaf.AllSteps()[1].ShouldBeTheSameAs(step1);
            leaf.AllSteps()[2].ShouldBeTheSameAs(step2);
            leaf.AllSteps()[3].ShouldBeTheSameAs(step3);
        }

        [Test]
        public void set_step_value_should_set_a_value_on_all_steps()
        {
            var leaf = new StepLeaf();
            IStep step0 = leaf.AddNewStep();
            IStep step1 = leaf.AddNewStep();
            IStep step2 = leaf.AddNewStep();
            IStep step3 = leaf.AddNewStep();

            leaf.SetStepValue("a", "1");

            step0.Get("a").ShouldEqual("1");
            step1.Get("a").ShouldEqual("1");
            step2.Get("a").ShouldEqual("1");
            step3.Get("a").ShouldEqual("1");
        }
    }
}