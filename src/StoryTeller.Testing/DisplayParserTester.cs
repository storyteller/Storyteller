using System;
using System.Collections;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Rendering;

namespace StoryTeller.Testing
{
    public class RecordingWriter : IWriter
    {
        private readonly ArrayList _list = new ArrayList();

        public int TheCount { get { return _list.Count; } }

        #region IWriter Members

        public void WriteCell(Cell cell, IStep step)
        {
            _list.Add(cell);
        }

        public void WriteText(string text)
        {
            _list.Add(text);
        }

        #endregion

        public object ItemWrittenAt(int index)
        {
            return _list[index];
        }
    }

    [TestFixture]
    public class DisplayParserTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            writer = new RecordingWriter();
            parser = new DisplayParser(writer);
        }

        #endregion

        private RecordingWriter writer;
        private DisplayParser parser;

        [Test]
        public void all_cells_are_in_the_middle()
        {
            var foo = new Cell("foo", typeof (object));
            var bar = new Cell("bar", typeof (object));

            parser.Parse("Enter {foo} for {bar} Textbox", new Step("a"), new[] {bar, foo});

            writer.TheCount.ShouldEqual(5);

            writer.ItemWrittenAt(0).ShouldEqual("Enter ");
            writer.ItemWrittenAt(1).ShouldBeTheSameAs(foo);
            writer.ItemWrittenAt(2).ShouldEqual(" for ");
            writer.ItemWrittenAt(3).ShouldBeTheSameAs(bar);
            writer.ItemWrittenAt(4).ShouldEqual(" Textbox");
        }

        [Test]
        public void parse_a_simple_example()
        {
            var foo = new Cell("foo", typeof (object));
            var bar = new Cell("bar", typeof (object));

            parser.Parse("Enter {foo} for {bar}", new Step("a"), new[] {bar, foo});

            writer.TheCount.ShouldEqual(4);

            writer.ItemWrittenAt(0).ShouldEqual("Enter ");
            writer.ItemWrittenAt(1).ShouldBeTheSameAs(foo);
            writer.ItemWrittenAt(2).ShouldEqual(" for ");
            writer.ItemWrittenAt(3).ShouldBeTheSameAs(bar);
        }

        [Test]
        public void parse_a_simple_example_that_puts_a_cell_at_the_very_beginning()
        {
            var foo = new Cell("foo", typeof (object));
            var bar = new Cell("bar", typeof (object));

            parser.Parse("{foo} is {bar}", new Step("a"), new[] {bar, foo});

            writer.TheCount.ShouldEqual(3);

            writer.ItemWrittenAt(0).ShouldBeTheSameAs(foo);
            writer.ItemWrittenAt(1).ShouldEqual(" is ");
            writer.ItemWrittenAt(2).ShouldBeTheSameAs(bar);
        }
    }

    [TestFixture]
    public class when_finding_the_first_key
    {
        [Test]
        public void the_first_key()
        {
            DisplayParser.FirstKey("some stuff {name} in the middle").ShouldEqual("name");
        }
    }

    [TestFixture]
    public class when_reading_an_invalid_format
    {
        private readonly Cell[] theCells = new[]
        {
            Cell.For<int>("age"),
            Cell.For<string>("name"),
            Cell.For<bool>("active"),
            Cell.For<string>("status"),
        };

        private ParseDisplayException trapException(string format)
        {
            try
            {
                new DisplayParser(new Sentence()).Parse(format, new Step(), theCells);
                throw new ApplicationException("Did not throw exception");
            }
            catch (ParseDisplayException ex)
            {
                return ex;
            }
        }

        [Test]
        public void exception_message_should_specify_missing_and_extra()
        {
            trapException("{age} {name} {extra} {extra1}").Message.ShouldEqual(
                "Error parsing template <{age} {name} {extra} {extra1}>  Missing: (active, status)  Extra:  (extra, extra1)");
        }

        [Test]
        public void should_throw_an_exception_with_both_extra_and_missing_values()
        {
            trapException("{age} {name} {active} {extra}").ShouldNotBeNull();
        }

        [Test]
        public void should_throw_an_exception_with_extra_values()
        {
            trapException("{age} {name} {status} {active} {extra}").ShouldNotBeNull();
        }

        [Test]
        public void should_throw_an_exception_with_missing_values()
        {
            trapException("{age}, {name}, {status}").ShouldNotBeNull();
        }
    }
}