using System.IO;
using System.Linq;
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



        public class NoConverterForMe
        {
            
        }
    }
}