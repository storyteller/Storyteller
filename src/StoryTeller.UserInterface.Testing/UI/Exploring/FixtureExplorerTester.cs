using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Exploring;
using StructureMap;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{
    [TestFixture]
    public class FixtureExplorerTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            library = new FixtureLibrary();
            FixtureStructure fixture1 = library.FixtureFor("Math");
            fixture1.AddStructure("Grammar1", new Sentence());
            fixture1.AddStructure("Grammar2", new Sentence());
            fixture1.AddStructure("Grammar3", new Sentence());

            FixtureStructure fixture2 = library.FixtureFor("Arithmetic");
            fixture2.AddStructure("Grammar4", new Sentence());
            fixture2.AddStructure("Grammar5", new Sentence());
        }

        #endregion

        private FixtureLibrary library;

        private readonly TreeNodeSpecification specification =
            new TreeNodeSpecification(
                @"
fixturestructure:Arithmetic
sentence:Arithmetic/Grammar4
sentence:Arithmetic/Grammar5
fixturestructure:Math
sentence:Math/Grammar1
sentence:Math/Grammar2
sentence:Math/Grammar3
");


        [Test]
        public void build_a_treenode()
        {
            TreeNode node = FixtureExplorer.BuildTree(library);

            specification.AssertMatch(node);
        }
    }


    [TestFixture]
    public class when_handling_the_FixtureLibraryLoaded_message_with_no_errors
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            container = new Container();
            view = new StubExplorerView();
            shellConductor = MockRepository.GenerateMock<IScreenConductor>();

            explorer = new FixtureExplorer(view, container);


            library = new FixtureLibrary();
            FixtureStructure fixture1 = library.FixtureFor("Math");
            fixture1.AddStructure("Grammar1", new Sentence());
            fixture1.AddStructure("Grammar2", new Sentence());
            fixture1.AddStructure("Grammar3", new Sentence());

            FixtureStructure fixture2 = library.FixtureFor("Arithmetic");
            fixture2.AddStructure("Grammar4", new Sentence());
            fixture2.AddStructure("Grammar5", new Sentence());

            explorer.Handle(new BinaryRecycleFinished(library));
        }

        #endregion

        private Container container;
        private StubExplorerView view;
        private FixtureExplorer explorer;

        private readonly TreeNodeSpecification specification =
            new TreeNodeSpecification(
                @"
fixturestructure:Arithmetic
sentence:Arithmetic/Grammar4
sentence:Arithmetic/Grammar5
fixturestructure:Math
sentence:Math/Grammar1
sentence:Math/Grammar2
sentence:Math/Grammar3
");

        private FixtureLibrary library;
        private IScreenConductor shellConductor;

        [Test]
        public void the_fixtureLibrary_should_be_injected_into_the_container()
        {
            container.GetInstance<FixtureLibrary>().ShouldBeTheSameAs(library);
        }

        [Test]
        public void the_fixtureNode_should_be_passed_to_the_view()
        {
            view.FixtureNode.ShouldNotBeNull();
            specification.AssertMatch(view.FixtureNode);
        }
    }
}