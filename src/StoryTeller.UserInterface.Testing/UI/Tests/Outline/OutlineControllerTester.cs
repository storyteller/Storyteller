using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests;
using StoryTeller.UserInterface.Tests.Outline;
using Rhino.Mocks;
using StoryTeller.Workspace;
using System.Linq;

namespace StoryTeller.UserInterface.Testing.UI.Tests.Outline
{
    [TestFixture]
    public class when_refreshing_the_outline : OutlineControllerContext
    {
        private OutlineNode node;

        protected override void theContextIs()
        {
            node = new OutlineNode(theTest, Icon.Test);
            MockFor<IOutlineTreeService>()
                .Expect(x => x.BuildNode(theTest, ClassUnderTest))
                .Return(node);

            ClassUnderTest.Update(null);
        }

        [Test]
        public void should_rebuild_the_tree()
        {
            VerifyCallsFor<IOutlineTreeService>();
        }

        [Test]
        public void refresh_the_outline_view()
        {
            MockFor<IOutlineView>().AssertWasCalled(x => x.ResetTree(node));
        }

        [Test]
        public void remembers_the_current_node()
        {
            ClassUnderTest.TopNode.ShouldBeTheSameAs(node);
        }
    }

    [TestFixture]
    public class when_adding_a_comment : OutlineControllerContext
    {
        private Section section;

        protected override void theContextIs()
        {
            section = new Section("Math");
        
            

            ClassUnderTest.AddComment(section);

        }

        [Test]
        public void should_add_a_comment_to_the_holder()
        {
            section.Parts.First().ShouldBeOfType<Comment>();
        }

        [Test]
        public void should_direct_the_test_state_manager_to_track_the_change()
        {
            MockFor<ITestStateManager>().AssertWasCalled(x => x.Version(ClassUnderTest));
        }

        [Test]
        public void add_the_comment_node_underneath()
        {
            MockFor<IOutlineTreeService>().AssertWasCalled(x => x.RedrawNode(theTest, ClassUnderTest));
        }
    }

    [TestFixture]
    public class when_adding_a_section : OutlineControllerContext
    {
        protected override void theContextIs()
        {
            ClassUnderTest.AddSection("Math");
        }

        [Test]
        public void should_add_a_new_section_to_the_test()
        {
            theTest.Parts.First().ShouldBeOfType<Section>().FixtureName.ShouldEqual("Math");
        }


        [Test]
        public void should_direct_the_test_state_manager_to_track_the_change()
        {
            MockFor<ITestStateManager>().AssertWasCalled(x => x.Version(ClassUnderTest));
        }

        [Test]
        public void should_add_a_new_section_node_to_the_tree()
        {
            MockFor<IOutlineTreeService>().AssertWasCalled(x => x.RedrawNode(theTest, ClassUnderTest));
        }
    }

    [TestFixture]
    public class when_adding_a_step : OutlineControllerContext
    {
        private Section theSection;

        protected override void theContextIs()
        {
            theSection = new Section("Math");
        
            ClassUnderTest.AddStep("Adding", theSection);
        }

        [Test]
        public void should_add_a_new_step_to_the_section()
        {
            theSection.Parts.First().ShouldBeOfType<Step>().GrammarKey.ShouldEqual("Adding");
        }


        [Test]
        public void should_direct_the_test_state_manager_to_track_the_change()
        {
            MockFor<ITestStateManager>().AssertWasCalled(x => x.Version(ClassUnderTest));
        }

        [Test]
        public void should_add_a_new_section_node_to_the_tree()
        {
            MockFor<IOutlineTreeService>().AssertWasCalled(x => x.RedrawNode(theTest, ClassUnderTest));
        }
    }

    [TestFixture]
    public class when_removing_a_part : OutlineControllerContext
    {
        private Section theSection;

        protected override void theContextIs()
        {
            theSection = theTest.AddSection("Math");
            ClassUnderTest.Remove(theSection, theTest);
        }

        [Test]
        public void should_remove_the_part_from_the_holder()
        {
            theTest.Parts.Any().ShouldBeFalse();
        }


        [Test]
        public void should_direct_the_test_state_manager_to_track_the_change()
        {
            MockFor<ITestStateManager>().AssertWasCalled(x => x.Version(ClassUnderTest));
        }

        [Test]
        public void should_redraw_the_tree()
        {
            MockFor<IOutlineTreeService>().AssertWasCalled(x => x.RedrawNode(theTest, ClassUnderTest));
        }
    }

    [TestFixture]
    public class when_moving_a_part_down : OutlineControllerContext
    {
        private Section sectionB;
        private Section sectionA;

        protected override void theContextIs()
        {
            sectionA = theTest.AddSection("A");
            sectionB = theTest.AddSection("B");

            ClassUnderTest.MoveDown(sectionA, theTest);
        }

        [Test]
        public void should_move_the_node_up_in_the_holder()
        {
            theTest.Parts.First().ShouldBeTheSameAs(sectionB);
        }


        [Test]
        public void should_direct_the_test_state_manager_to_track_the_change()
        {
            MockFor<ITestStateManager>().AssertWasCalled(x => x.Version(ClassUnderTest));
        }

        [Test]
        public void should_redraw_the_tree()
        {
            MockFor<IOutlineTreeService>().AssertWasCalled(x => x.RedrawNode(theTest, ClassUnderTest));
        }

        [Test]
        public void should_reselect_the_node_for_the_part()
        {
            MockFor<IOutlineTreeService>().AssertWasCalled(x => x.SelectNodeFor(sectionA));
        }
    }


    [TestFixture]
    public class when_moving_a_part_up : OutlineControllerContext
    {
        private Section sectionB;

        protected override void theContextIs()
        {
            theTest.AddSection("A");
            sectionB = theTest.AddSection("B");

            ClassUnderTest.MoveUp(theTest.Parts[1], theTest);
        }

        [Test]
        public void should_move_the_node_up_in_the_holder()
        {
            theTest.Parts.First().ShouldBeTheSameAs(sectionB);
        }


        [Test]
        public void should_direct_the_test_state_manager_to_track_the_change()
        {
            MockFor<ITestStateManager>().AssertWasCalled(x => x.Version(ClassUnderTest));
        }

        [Test]
        public void should_redraw_the_tree()
        {
            MockFor<IOutlineTreeService>().AssertWasCalled(x => x.RedrawNode(theTest, ClassUnderTest));
        }

        [Test]
        public void should_reselect_the_node_for_the_part()
        {
            MockFor<IOutlineTreeService>().AssertWasCalled(x => x.SelectNodeFor(sectionB));
        }
    }



    public abstract class OutlineControllerContext : InteractionContext<OutlineController>
    {
        protected Test theTest;
        private ProjectContext theProjectContext;

        protected sealed override void beforeEach()
        {
            theTest = new Test("the test");
            Services.Inject(theTest);

            theProjectContext = new ProjectContext()
            {
                Library = new FixtureLibrary()
            };

            Services.Inject(theProjectContext);

            ClassUnderTest.TopNode = new OutlineNode(theTest, Icon.Test);

            theContextIs();
        }

        protected abstract void theContextIs();
    }
}