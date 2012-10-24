using NUnit.Framework;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class SelectionValueAttributeTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            fixture = new Fixture();
            cell = Cell.For<string>("name");

            fixture.AddSelectionValues("names", "Jeremy", "Max", "Monte");
        }

        #endregion

        private Fixture fixture;
        private Cell cell;

        [Test]
        public void set_the_list_value_when_the_attribute_has_the_values_set_explicitly()
        {
            var att = new SelectionValuesAttribute("Mork", "Mindy");
            att.SetList(fixture, cell);

            cell.SelectionValues.ShouldHaveTheSameElementsAs("Mork", "Mindy");
        }

        [Test]
        public void set_the_list_value_when_the_attribute_only_has_the_key_value()
        {
            var att = new SelectionValuesAttribute("names");
            att.SetList(fixture, cell);

            cell.SelectionValues.ShouldHaveTheSameElementsAs("Jeremy", "Max", "Monte");
        }
    }
}