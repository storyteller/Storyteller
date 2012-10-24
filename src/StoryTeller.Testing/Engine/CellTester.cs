using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Runtime.Serialization.Formatters.Binary;
using FubuCore.Conversion;
using FubuCore.Reflection;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Reflection;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    public class CellTarget
    {
        [Header("First Name")]
        public string NameWithHeader { get { return "Jeremy"; } }

        public void DoSomething(int age, string name)
        {
        }

        public void DoSomething2([Default("34")] int age, string name)
        {
        }

        public double Add(double x, double y)
        {
            return x + y;
        }
    }

    public class Service1
    {
    }

    [TestFixture]
    public class CellTester
    {
        [Test]
        public void boolean_result_cell_expected_value_is_true_if_no_value_is_specified()
        {
            var cell = Cell.ResultFor<bool>("tag");
            cell.GetRawExpected(new Step()).ShouldEqual(true.ToString());
        }

        [Test]
        public void boolean_result_cell_expected_value_is_read_from_the_step_if_the_value_is_specified()
        {
            var cell = Cell.ResultFor<bool>("tag");
            cell.GetRawExpected(new Step().With("tag:true")).ShouldEqual("true");
            cell.GetRawExpected(new Step().With("tag:false")).ShouldEqual("false");
        }

        [Test]
        public void a_cell_with_a_default_value_will_use_that_for_the_sample_value()
        {
            new Cell("key1", typeof (string), "Jeremy").SampleValue().ShouldEqual("Jeremy");
        }

        [Test]
        public void a_cell_without_a_default_value_will_use_astericks_for_the_sample_value()
        {
            new Cell("key1", typeof (string)).SampleValue().ShouldEqual("****");
        }

        [Test]
        public void can_read_the_header_attribute()
        {
            new Cell(ReflectionHelper.GetProperty<CellTarget>(x => x.NameWithHeader)).Header.ShouldEqual("First Name");
        }

        [Test]
        public void can_serialize()
        {
            Stream stream = new MemoryStream();
            var cell = new Cell("name", typeof (string));

            var serializer = new BinaryFormatter();
            serializer.Serialize(stream, cell);

            stream.Position = 0;

            var cell2 = (Cell) serializer.Deserialize(stream);

            cell2.Key.ShouldEqual("name");
            cell2.Type.ShouldEqual(typeof (string));
        }


        [Test]
        public void can_serialize_selection_values()
        {
            Stream stream = new MemoryStream();
            var cell = new Cell("name", typeof (string));
            cell.SelectionValues = new List<string>
            {
                "a",
                "b",
                "c",
                "d"
            };

            var serializer = new BinaryFormatter();
            serializer.Serialize(stream, cell);

            stream.Position = 0;

            var cell2 = (Cell) serializer.Deserialize(stream);

            cell2.SelectionValues.ShouldHaveTheSameElementsAs("a", "b", "c", "d");
        }

        [Test]
        public void create_by_parameter()
        {
            Cell cell1 = Cell.CreateFor<CellTarget>(x => x.DoSomething(0, null), 0);
            cell1.Key.ShouldEqual("age");
            cell1.Type.ShouldEqual(typeof (int));

            Cell cell2 = Cell.CreateFor<CellTarget>(x => x.DoSomething(0, null), 1);
            cell2.Key.ShouldEqual("name");
            cell2.Type.ShouldEqual(typeof (string));
        }

        [Test]
        public void create_by_parameter_with_a_default_value()
        {
            Cell cell1 = Cell.CreateFor<CellTarget>(x => x.DoSomething(0, null), 0);
            cell1.DefaultValue.ShouldBeNull();

            Cell cell2 = Cell.CreateFor<CellTarget>(x => x.DoSomething2(0, null), 0);
            cell2.DefaultValue.ShouldEqual("34");
        }

        [Test]
        public void get_display_returns_MISSING_if_the_value_does_not_exist()
        {
            var step = new Step("a");
            new Cell("key", typeof (string)).GetDisplay(step).ShouldEqual("MISSING");
        }

        [Test]
        public void get_display_returns_the_toString_of_the_value_if_it_exists()
        {
            Step step = new Step("a").With("returnValue", "31");
            var cell = new Cell("returnValue", typeof (int));

            cell.GetDisplay(step).ShouldEqual("31");
        }


        [Test]
        public void get_display_with_a_default_value_and_no_step_value_should_use_the_default_value()
        {
            var cell = new Cell("key1", typeof (string), "Jeremy");
            cell.GetDisplay(new Step()).ShouldEqual("Jeremy");
        }


        [Test]
        public void has_default()
        {
            new Cell("whatever", typeof (bool))
            {
                IsResult = true
            }.HasDefault().ShouldBeTrue();
            new Cell("whatever", typeof (string)).HasDefault().ShouldBeFalse();
            new Cell("whatever", typeof (string))
            {
                DefaultValue = "something"
            }.HasDefault().ShouldBeTrue();
        }



        [Test]
        public void on_creation_the_heading_is_the_same_as_the_key()
        {
            Cell.For<string>("name").Header.ShouldEqual("name");
        }

        [Test]
        public void override_cell_header()
        {
            Cell cell = Cell.For<string>("name");
            cell.Header = "First Name";

            cell.Header.ShouldEqual("First Name");
        }


        [Test]
        public void read_argument_with_a_format_exception()
        {
            Step step = new Step("a").With("age", "abc");
            var cell = new Cell("age", typeof (int));

            var context = new TestContext();
            cell.ReadArgument(context, step, x => Assert.Fail("should not have been called"));

            context.Counts.SyntaxErrors.ShouldEqual(1);

            context.ResultsFor(step).ExceptionText.ShouldContain("Format exception for 'age'");
        }

        [Test]
        public void read_expected_value_from_step_for_a_boolean_result_cell()
        {
            var cell = new Cell("success", typeof (bool))
            {
                IsResult = true
            };
            bool returnValue = false;
            var step = new Step();
            var context = new TestContext();
            cell.ReadArgument(context, step, o => returnValue = (bool) o);

            returnValue.ShouldBeTrue();
            context.ResultsFor(step).IsInException("success").ShouldBeFalse();
        }

        [Test]
        public void read_expected_value_from_step_that_is_boolean_missing_and_input_should_still_log_error()
        {
            var cell = new Cell("success", typeof (bool))
            {
                IsResult = false
            };
            var step = new Step();

            var context = new TestContext();
            cell.ReadArgument(context, step, o => Assert.Fail("should not have called back"));

            context.ResultsFor(step).IsInException("success").ShouldBeTrue();
        }

        [Test]
        public void read_in_DateTime()
        {
            Step step = new Step("a").With("day", "1/1/2009");
            var cell = new Cell("day", typeof (DateTime));

            var context = new TestContext();

            DateTime returnValue = DateTime.Today;

            cell.ReadArgument(context, step, x => returnValue = (DateTime) x);

            returnValue.ShouldEqual(new DateTime(2009, 1, 1));
        }

        [Test]
        public void read_non_null_data_in_for_a_nullable_type()
        {
            Step step = new Step("a").With("age", "34");
            var cell = new Cell("age", typeof (int?));

            var context = new TestContext();

            int? returnValue = null;

            cell.ReadArgument(context, step, x => returnValue = (int?) x);

            returnValue.Value.ShouldEqual(34);
        }

        [Test]
        public void read_null_in_from_a_nullable_type_with_NULL()
        {
            Step step = new Step("a").With("age", "NULL");
            var cell = new Cell("age", typeof (int?));

            var context = new TestContext();

            int? returnValue = 3;

            cell.ReadArgument(context, step, x => returnValue = (int?) x);

            returnValue.HasValue.ShouldBeFalse();
        }

        [Test]
        public void record_actual_calls_mark_missing_value_when_the_expected_value_is_missing()
        {
            MethodInfo method = ReflectionHelper.GetMethod<CellTarget>(x => x.Add(0, 0));
            Cell cell = method.GetReturnCell();
            var step = new Step();

            var data = new TestContext();
            cell.RecordActual(32.0, step, data);

            data.ResultsFor(step).GetActual("returnValue").ShouldEqual(32.0);
            data.Counts.SyntaxErrors.ShouldEqual(1);
        }

        [Test]
        public void record_actual_stores_the_data()
        {
            MethodInfo method = ReflectionHelper.GetMethod<CellTarget>(x => x.Add(0, 0));
            Step step = new Step("a").With("returnValue", "10");

            Cell cell = method.GetReturnCell();
            var data = new TestContext();

            cell.RecordActual(32.0, step, data);

            data.ResultsFor(step).ActualDisplay<double>("returnValue").ShouldEqual(32);
        }


        [Test]
        public void record_actual_when_the_data_is_right()
        {
            MethodInfo method = ReflectionHelper.GetMethod<CellTarget>(x => x.Add(0, 0));
            Step step = new Step("a").With("returnValue", "32.0");
            var data = new TestContext();
            Cell cell = method.GetReturnCell();

            cell.RecordActual(32.0, step, data);


            data.Counts.Rights.ShouldEqual(1);
            data.Counts.Wrongs.ShouldEqual(0);
        }

        [Test]
        public void record_actual_when_the_data_is_wrong()
        {
            MethodInfo method = ReflectionHelper.GetMethod<CellTarget>(x => x.Add(0, 0));
            Step step = new Step("a").With("returnValue", "31");
            var data = new TestContext();
            Cell cell = method.GetReturnCell();

            cell.RecordActual(32.0, step, data);

            data.Counts.ShouldEqual(0, 1, 0, 0);

            data.Counts.Rights.ShouldEqual(0);
            data.Counts.Wrongs.ShouldEqual(1);

            
        }

        [Test]
        public void set_argument_if_argument_is_itestcontext_just_uses_the_itestcontext()
        {
            var cell = new Cell("context", typeof (ITestContext));
            var context = new TestContext();

            object argValue = null;

            cell.ReadArgument(context, new Step(), x => argValue = x);

            argValue.ShouldBeTheSameAs(context);
        }

        [Test]
        public void set_argument_if_the_argument_is_not_simple_pulls_that_argument_from_testcontext()
        {
            var cell = new Cell("address", typeof (Address));
            var context = new TestContext();
            var address = new Address();
            context.Store(address);

            object argValue = null;

            cell.ReadArgument(context, new Step(), x => argValue = x);

            argValue.ShouldBeTheSameAs(address);
        }

        [Test]
        public void to_example_as_a_non_simple_type_returns_a_new_cell_of_type_string()
        {
            Cell cell = Cell.For<Service1>("name");
            cell.DefaultValue = "something";

            Cell example = cell.ToInputCell();
            example.Key.ShouldEqual(cell.Key);
            example.Type.ShouldEqual(typeof (string));
            example.DefaultValue.ShouldEqual(cell.DefaultValue);
            example.OriginalTypeName.ShouldEqual(cell.Type.AssemblyQualifiedName);
        }


        [Test]
        public void to_example_as_a_non_simple_type_copies_the_header_value()
        {
            Cell cell = Cell.For<Service1>("name");
            cell.DefaultValue = "something";
            cell.Header = "Something Different";

            Cell example = cell.ToInputCell();
            example.Header.ShouldEqual(cell.Header);
        }

        [Test]
        public void to_example_as_a_simple_type_returns_self()
        {
            Cell cell = Cell.For<string>("name");
            cell.ToInputCell().ShouldBeTheSameAs(cell);
        }

        [Test]
        public void to_example_as_a_timestamp_returns_self()
        {
            Cell cell = Cell.For<TimeSpan>("name");
            cell.ToInputCell().ShouldBeTheSameAs(cell);
        }


        [Test]
        public void use_the_default_value_if_the_main_value_is_missing()
        {
            var cell = new Cell("key1", typeof (string), "Jeremy");
            string value = null;
            cell.ReadArgument(new TestContext(), new Step(), x => value = (string) x);

            value.ShouldEqual("Jeremy");
        }

        [Test]
        public void use_the_default_value_if_the_main_value_is_missing_and_the_cell_is_numeric()
        {
            var cell = new Cell("key1", typeof (int), "34");
            int value = 0;
            cell.ReadArgument(new TestContext(), new Step(), x => value = (int) x);

            value.ShouldEqual(34);
        }

        [Test]
        public void verify_the_actual_when_the_expected_is_a_null_negative_case()
        {
            Step step = new Step().With("key1:abc");
            var cell = new Cell("key1", typeof (string));

            var context = new TestContext();
            cell.RecordActual(null, step, context);

            context.Counts.ShouldEqual(0, 1, 0, 0);
        }

        [Test]
        public void verify_the_actual_when_the_expected_is_a_null_positive_case()
        {
            Step step = new Step().With("key1:NULL");
            var cell = new Cell("key1", typeof (string));

            var context = new TestContext();
            cell.RecordActual(null, step, context);

            context.Counts.ShouldEqual(1, 0, 0, 0);
        }
    }

    [TestFixture]
    public class when_getting_argument_for_a_missing_value
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            step = new Step("a");
            cell = new Cell("key1", typeof (string));

            var context = new TestContext();
            cell.ReadArgument(context, step, x => Assert.Fail("should not have called me"));

            counts = context.Counts;
            results = context.ResultsFor(step);
        }

        #endregion

        private Step step;
        private Cell cell;
        private Counts counts;
        private StepResults results;

        [Test]
        public void should_have_recorded_a_syntax_error()
        {
            counts.SyntaxErrors.ShouldEqual(1);
        }

        [Test]
        public void should_have_recorded_exception_text()
        {
            results.ExceptionText.ShouldContain("\"key1\" is not defined.");
        }

    }

    [TestFixture]
    public class when_setting_the_argument_with_a_formatting_problem
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            step = new Step("a").With("key1", "abc");
            cell = new Cell("key1", typeof (int));

            var context = new TestContext();
            cell.ReadArgument(context, step, x => Assert.Fail("should not have called me"));

            counts = context.Counts;
            results = context.ResultsFor(step);
        }

        #endregion

        private Step step;
        private Cell cell;
        private Counts counts;
        private StepResults results;


        [Test]
        public void should_have_recorded_a_syntax_error()
        {
            counts.SyntaxErrors.ShouldEqual(1);
        }

        [Test]
        public void should_have_recorded_exception_text()
        {
            results.ExceptionText.ShouldContain("Format exception for 'key1'");
        }
    }

    [TestFixture]
    public class when_reading_an_argument_successfully_for_an_input_cell
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            step = new Step("a").With("key1", "123");
            cell = new Cell("key1", typeof (int));

            counts = new Counts();
            cell.ReadArgument(new TestContext(), step, x => argument = (int) x);
        }

        #endregion

        private Step step;
        private Cell cell;
        private Counts counts;
        private int argument;

        [Test]
        public void argument_should_have_been_parsed_as_an_integer()
        {
            argument.ShouldEqual(123);
        }

        [Test]
        public void cell_automatically_creates_selection_values_for_an_enumeration_type()
        {
            cell = Cell.For<DayOfWeek>("day");
            cell.SelectionValues.ShouldHaveTheSameElementsAs("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
                                                             "Friday", "Saturday");
        }

        [Test]
        public void the_counts_should_all_be_zero()
        {
            counts.Rights.ShouldEqual(0);
            counts.Wrongs.ShouldEqual(0);
            counts.Exceptions.ShouldEqual(0);
            counts.SyntaxErrors.ShouldEqual(0);
        }
    }
}