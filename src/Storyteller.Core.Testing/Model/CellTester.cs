using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Model
{
    [TestFixture]
    public class CellTester
    {
        [Test]
        public void can_serialize_cell()
        {
            var serializer = new Newtonsoft.Json.JsonSerializer();

            var cell = new Cell(CellHandling.Basic(), "a", typeof(int));

            var writer = new StringWriter();
            serializer.Serialize(writer, cell);

            var json = writer.ToString();

            json.ShouldContain("\"key\":\"a\"");
        }

        [Test]
        public void happy_check_for_a_simple_equals_match()
        {
            var values = new StepValues("1");

            values.Store("a", 1);

            Cell.For<int>("a").Check(values, 1)
                .ShouldEqual(CellResult.Success("a"));


        }

        [Test]
        public void sad_path_check_for_a_simple_equals_match()
        {
            var values = new StepValues("1");
            

            values.Store("a", 1);

            Cell.For<int>("a").Check(values, 2)
                .ShouldEqual(CellResult.Failure("a", "2"));

        }

        [Test]
        public void matches_simply()
        {
            var cell = new Cell(CellHandling.Basic(), "a", typeof(int));
            var values1 = new StepValues("foo");
            values1.Store(cell.Key, 5);

            var values2 = new StepValues("foo");
            values2.Store(cell.Key, 5);

            var values3 = new StepValues("foo");
            values3.Store(cell.Key, 6);

            cell.Matches(values1, values2).ShouldBeTrue();
            cell.Matches(values1, values3).ShouldBeFalse();
        }

        [Test]
        public void matches_array_()
        {
            var cell = new Cell(CellHandling.Basic(), "a", typeof(int[]));
            var values1 = new StepValues("foo");
            values1.Store(cell.Key, new[]{1, 2, 3});

            var values2 = new StepValues("foo");
            values2.Store(cell.Key, new[] { 1, 2, 3 });

            var values3 = new StepValues("foo");
            values3.Store(cell.Key, new[] { 1, 2, 4 });

            cell.Matches(values1, values2).ShouldBeTrue();
            cell.Matches(values1, values3).ShouldBeFalse();
        }

        private StepValues convert(Cell cell, string rawValue)
        {
            var step = new Step("foo");
            if (rawValue != null)
            {
                step.With(cell.Key, rawValue);
            }

            var values = new StepValues("1");

            cell.ConvertValues(step, values);

            return values;
        }

        [Test]
        public void create_with_basic_converter_and_convert_happy_path()
        {
            var cell = Cell.For<int>("a");
            var values = convert(cell, "1");

            values.Get("a").ShouldEqual(1);
        }

        [Test]
        public void NULL_is_converted_as_wait_for_it_null()
        {
            var cell = Cell.For<string>("foo");
            var values = convert(cell, "NULL");
            values.Get("foo").ShouldBeNull();
        }

        [Test]
        public void create_with_basic_converter_and_convert_with_errors()
        {
            var cell = Cell.For<int>("a");
            var values = convert(cell, "not a number");

            var result = values.Errors.Single().ShouldBeOfType<CellResult>();
            result.cell.ShouldEqual("a");
            result.error.ShouldEqual("Invalid Format");
        }

        [Test]
        public void create_with_no_converter()
        {
            Conversions.Basic().FindConverter(typeof(NoConverterForMe))
                .ShouldBeNull();

            var cell = Cell.For<NoConverterForMe>("a");

            var values = convert(cell, "anything");

            var result = values.Errors.Single().ShouldBeOfType<CellResult>();
            result.cell.ShouldEqual("a");
            result.error.ShouldEqual("No converter found for type " + typeof(NoConverterForMe).FullName);
        }

        [Test]
        public void Cell_picks_up_the_header_attributes()
        {
            var cell = Cell.For<CellTarget>(x => x.City);
            cell.header.ShouldEqual("The City");
        }

        [Test]
        public void Cell_picks_up_the_default_value_attribute()
        {
            var cell = Cell.For<CellTarget>(x => x.City);
            cell.DefaultValue.ShouldEqual("Cedar Park");
        }

        public class NoConverterForMe
        {
            
        }

        [Test]
        public void use_a_boolean_editor_for_boolean_type()
        {
            var cell = Cell.For<CellTarget>(x => x.IsActive);
            cell.editor.ShouldEqual("boolean");
        }

        [Test]
        public void use_a_select_editor_for_an_enum()
        {
            var cell = Cell.For<CellTarget>(x => x.Direction);
            cell.editor.ShouldEqual("select");
            cell.options.Select(x => x.value)
                .ShouldHaveTheSameElementsAs("North", "South", "East", "West");
        }

        [Test]
        public void picks_up_the_editor_attribute()
        {
            var cell = Cell.For<CellTarget>(x => x.City);
            cell.editor.ShouldEqual("bigtext");
        }

        [Test]
        public void cell_picks_up_selection_values()
        {
            var cell = Cell.For<CellTarget>(x => x.Country);
            cell.editor.ShouldEqual("select");
            cell.options.Select(x => x.value)
                .ShouldHaveTheSameElementsAs("United States", "Canada", "Mexico");
        }

        [Test]
        public void cell_picks_up_selection_list_name()
        {
            var cell = Cell.For<CellTarget>(x => x.State);
            cell.editor.ShouldEqual("select");

            cell.OptionListName.ShouldEqual("States");
        }

    }

    public enum Directions
    {
        North,
        South,
        East,
        West
    }

    public class CellTarget
    {
        [Header("The City")][Default("Cedar Park")][Editor("bigtext")]
        public string City { get; set; }

        public bool IsActive { get; set; }

        public Directions Direction { get; set; }

        [SelectionList("States")]
        public string State { get; set; }

        [SelectionValues("United States", "Canada", "Mexico")]
        public string Country { get; set; }
    }
}