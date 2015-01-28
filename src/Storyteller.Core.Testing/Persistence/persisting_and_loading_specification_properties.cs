using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Model;
using Storyteller.Core.Persistence;

namespace Storyteller.Core.Testing.Persistence
{
    [TestFixture]
    public class persisting_and_loading_specification_properties
    {
        private Specification original;
        private Specification persisted;

        [SetUp]
        public void SetUp()
        {
            original = new Specification
            {
                Lifecycle = Lifecycle.Regression,
                MaxRetries = 3
            };

            original.Tags.Add("a");
            original.Tags.Add("b");
            original.Tags.Add("c");

            var document = XmlWriter.WriteToXml(original);

            persisted = XmlReader.ReadFromXml(document);

            persisted.ShouldNotBeTheSameAs(original);
        }

        [Test]
        public void full_cycle_spec_id()
        {
            persisted.Id.ShouldEqual(original.Id);
        }

        [Test]
        public void full_cycle_max_retries()
        {
            persisted.MaxRetries.ShouldEqual(3);
        }

        [Test]
        public void full_cycle_lifecycle()
        {
            persisted.Lifecycle.ShouldEqual(Lifecycle.Regression);
        }

        [Test]
        public void full_cycle_tags()
        {
            persisted.Tags.ShouldHaveTheSameElementsAs(original.Tags);
        }
    }
}