using System.Diagnostics;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests.Outline;
using System.Collections.Generic;

namespace StoryTeller.UserInterface.Testing.UI.Tests.Outline
{
    [TestFixture]
    public class OutlineTreeServiceIntegratedTester
    {
        private ProjectTestRunner runner;
        private FixtureLibrary theLibrary;
        private OutlineTreeService service;
        private IOutlineController controller;

        [SetUp]
        public void Setup()
        {
            runner = StoryTeller.Testing.DataMother.GrammarsProjectRunner();
            theLibrary = runner.GetLibary();

            controller = MockRepository.GenerateMock<IOutlineController>();

            service = new OutlineTreeService(new ProjectContext()
            {
                Library = theLibrary
            });
        }

        private OutlineNode nodeFor(string testPath)
        {
            var test = runner.FindTest(testPath);
            return service.BuildNode(test, controller);
        }

        [Test]
        public void build_an_outline_node_without_blowing_up()
        {
            nodeFor("Embedded/Embeds");
            nodeFor("General/Services");
            nodeFor("General/Test with Bad Grammar Name");
        }

        [Test]
        public void gets_all_the_children()
        {
            nodeFor("Sentences/Facts").Descendents.ShouldHaveCount(7);
            
        }

        [Test]
        public void can_iterate_through_an_outline_node()
        {
            OutlineNode outlineNode = nodeFor("Embedded/Embeds");
            outlineNode.Descendents.Each(x => Debug.WriteLine(x.Description()));
        }
    }
}