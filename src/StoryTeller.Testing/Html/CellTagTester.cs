using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Html;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Html
{
    [TestFixture]
    public class CellTagTester
    {
        [SetUp]
        public void SetUp() {}

        [Test]
        public void cell_tag_puts_on_default_value_if_it_exists()
        {
            var cell = Cell.For<string>("name");
            cell.DefaultValue = "Jeremy";

            new CellTag(cell, new Step()).MetaData("defaultValue").ShouldEqual("Jeremy");
        }

        [Test]
        public void cell_tag_does_not_put_on_default_value_if_it_does_not_exist_on_the_cell()
        {
            var cell = Cell.For<string>("name");
            cell.DefaultValue = null;

            new CellTag(cell, new Step()).HasMetaData("defaultValue").ShouldBeFalse();
        }

        [Test]
        public void write_preview()
        {
            var cell = Cell.For<string>("name");
            var step = new Step().With("name:Jeremy");

            var tag = new CellTag(cell, step);
            tag.WritePreview(new TestContext());

            tag.Text().ShouldEqual("Jeremy");
            tag.HasClass(HtmlClasses.INPUT).ShouldBeTrue();
        }

        [Test]
        public void write_preview_when_the_cell_value_is_missing_in_the_step()
        {
            var cell = Cell.For<string>("name");
            var step = new Step();

            var tag = new CellTag(cell, step);
            tag.WritePreview(new TestContext());

            tag.Text().ShouldEqual("MISSING");
        }

        [Test]
        public void write_preview_when_the_cell_value_is_null_in_the_step()
        {
            var cell = Cell.For<string>("name");
            var step = new Step();
            step.Set("name", null);

            var tag = new CellTag(cell, step);
            tag.WritePreview(new TestContext());

            tag.Text().ShouldEqual(Step.NULL);
        }

        [Test]
        public void write_preview_when_the_cell_value_is_blank()
        {
            var cell = Cell.For<string>("name");
            var step = new Step();
            step.Set("name", string.Empty);

            var tag = new CellTag(cell, step);
            tag.WritePreview(new TestContext());

            tag.Text().ShouldEqual(Step.BLANK);
        }

        [Test]
        public void write_results_when_the_cell_is_just_an_input()
        {
            var cell = Cell.For<string>("name");
            cell.IsResult = false;
            var step = new Step().With("name:Jeremy");

            var tag = new CellTag(cell, step);
            tag.WriteResults(new StepResults(), new TestContext());

            tag.Text().ShouldEqual("Jeremy");
            tag.HasClass(HtmlClasses.INPUT).ShouldBeTrue();
        }


    }

    [TestFixture]
    public class when_writing_a_cell_tag_for_a_correct_result
    {
        private Cell cell;
        private Step step;
        private StepResults result;
        private CellTag tag;

        [SetUp]
        public void SetUp()
        {
            cell = Cell.For<string>("name");
            cell.IsResult = true;
            step = new Step().With("name:Jeremy");

            result = new StepResults();
            result.SetActual("name", "Jeremy");

            tag = new CellTag(cell, step);
            tag.WriteResults(result, new TestContext());
        }

        [Test]
        public void should_have_the_parsed_display_of_the_actual()
        {
            tag.Text().ShouldEqual("Jeremy");
        }

        [Test]
        public void cell_has_the_success_class()
        {
            tag.HasClass(HtmlClasses.PASS).ShouldBeTrue();
        }

        [Test]
        public void is_not_exception_or_fail()
        {
            tag.HasClass(HtmlClasses.FAIL).ShouldBeFalse();
            tag.HasClass(HtmlClasses.EXCEPTION).ShouldBeFalse();
        }

        [Test]
        public void should_not_have_an_exception_node()
        {
            tag.Next.ShouldBeNull();
        }
    }

    [TestFixture]
    public class when_writing_the_results_for_a_failure
    {
        private Cell cell;
        private Step step;
        private StepResults result;
        private CellTag tag;

        [SetUp]
        public void SetUp()
        {
            cell = Cell.For<string>("name");
            cell.IsResult = true;
            step = new Step().With("name:Jeremy");

            result = new StepResults();
            result.SetActual("name", "Chad");
            result.MarkFailure("name");


            tag = new CellTag(cell, step);
            tag.WriteResults(result, new TestContext());
        }

        [Test]
        public void should_have_the_parsed_display_of_the_actual()
        {
            tag.Text().ShouldEqual("Jeremy, but was 'Chad'");
        }

        [Test]
        public void cell_has_the_fail_class()
        {
            tag.HasClass(HtmlClasses.FAIL).ShouldBeTrue();
        }

        [Test]
        public void is_not_exception_or_pass()
        {
            tag.HasClass(HtmlClasses.PASS).ShouldBeFalse();
            tag.HasClass(HtmlClasses.EXCEPTION).ShouldBeFalse();
        }

        [Test]
        public void should_not_have_an_exception_node()
        {
            tag.Next.ShouldBeNull();
        }
    }

    [TestFixture]
    public class write_the_cell_tag_for_a_result_that_is_missing_an_actual_value
    {
        private Cell cell;
        private Step step;
        private StepResults result;
        private CellTag tag;

        [SetUp]
        public void SetUp()
        {
            cell = Cell.For<string>("name");
            cell.IsResult = true;
            step = new Step().With("name:Jeremy");

            result = new StepResults();
            //result.SetActual("name", "Chad");
            result.MarkFailure("name");


            tag = new CellTag(cell, step);
            tag.WriteResults(result, new TestContext());
        }

        [Test]
        public void should_have_the_parsed_display_of_the_actual()
        {
            tag.Text().ShouldEqual("Jeremy (no result)");
        }
    }

    [TestFixture]
    public class when_writing_the_results_for_a_result_cell_that_had_an_exception
    {
        private Cell cell;
        private Step step;
        private StepResults result;
        private CellTag tag;

        [SetUp]
        public void SetUp()
        {
            cell = Cell.For<string>("name");
            cell.IsResult = true;
            step = new Step().With("name:Jeremy");

            result = new StepResults();
            result.MarkFormatFailure("name");


            tag = new CellTag(cell, step);
            tag.WriteResults(result, new TestContext());
        }

        [Test]
        public void the_text_should_just_be_the_expected_text()
        {
            tag.Text().ShouldEqual("Jeremy");
        }


        [Test]
        public void cell_has_the_exception_class()
        {
            tag.HasClass(HtmlClasses.EXCEPTION).ShouldBeTrue();
        }

        [Test]
        public void is_not_fail_or_pass()
        {
            tag.HasClass(HtmlClasses.FAIL).ShouldBeFalse();
            tag.HasClass(HtmlClasses.PASS).ShouldBeFalse();
        }
    }
}