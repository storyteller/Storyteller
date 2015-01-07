using System.Diagnostics;
using System.IO;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing.Model
{
    [TestFixture]
    public class serialization_specs
    {
        [Test]
        public void can_serialize_cell()
        {
            var serializer = new Newtonsoft.Json.JsonSerializer();

            var cell = new Cell(Conversions.Basic(), "a", typeof (int));

            var writer = new StringWriter();
            serializer.Serialize(writer, cell);

            var json = writer.ToString();

            json.ShouldContain("\"key\":\"a\"");
        }
    }
}