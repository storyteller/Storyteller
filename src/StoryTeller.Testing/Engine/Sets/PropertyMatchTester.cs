using FubuCore.Reflection;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Reflection;
using StoryTeller.Engine.Sets;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine.Sets
{
    [TestFixture]
    public class PropertyMatchTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            accessor = ReflectionHelper.GetAccessor<Address>(x => x.DistanceFromOffice);
            match = new PropertyMatch(accessor);
        }

        #endregion



        private PropertyMatch match;
        private Accessor accessor;


        [Test]
        public void builds_the_correct_cell()
        {
            match.Cell.ShouldEqual(new Cell(accessor.InnerProperty));
        }

        [Test]
        public void reads_actual_off_the_target_object()
        {
            var target = new Address
            {
                DistanceFromOffice = 23
            };

            var row = new SetRow();

            match.ReadActual(target, row);

            row.Values["DistanceFromOffice"].ShouldEqual(23);
        }

        [Test]
        public void read_correctly_formatted_step_value()
        {

            Step step = new Step().With("DistanceFromOffice:112.5");
            var row = new SetRow();

            match.ReadExpected(new TestContext(), step, row);

            row.Values["DistanceFromOffice"].ShouldEqual(112.5);
        }

        [Test]
        public void read_incorrectly_formatted_step_value_increments_syntax_error()
        {
            Step step = new Step().With("DistanceFromOffice:abc");
            var context = new TestContext();

            match.ReadExpected(context, step, new SetRow());

            context.Counts.ShouldEqual(0, 0, 0, 1);
        }

    }


}