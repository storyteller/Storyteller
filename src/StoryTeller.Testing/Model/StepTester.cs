using System.Collections.Generic;
using NSubstitute;
using Xunit;
using Shouldly;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    
    public class StepTester
    {
        [Fact]
        public void find_step_values()
        {
            IDictionary<string, string> values = Step.ParseValues("a:1, b:2, c:3");
            values.Count.ShouldBe(3);
            values["a"].ShouldBe("1");
            values["b"].ShouldBe("2");
            values["c"].ShouldBe("3");
        }

        [Fact]
        public void parse_values_works_just_fine_with_blank_or_null_values()
        {
            Step.ParseValues(null).ShouldNotBeNull();
            Step.ParseValues(string.Empty).ShouldNotBeNull();
        }

        [Fact]
        public void validate_cells_happy_path_totally_empty()
        {
            var step = new Step("Something");

            var validator = Substitute.For<IStepValidator>();

            step.ProcessCells(new Cell[0], validator);

            validator.DidNotReceiveWithAnyArgs().AddError(null);
        }

        [Fact]
        public void move_over_staged_cells()
        {
            var step = new Step("Something");
            step.StagedValues = new string[] {"1", "2", "3"};

            var cells = new Cell[] {Cell.For<string>("A"), Cell.For<string>("B"), Cell.For<string>("C")};

            var validator = Substitute.For<IStepValidator>();

            step.ProcessCells(cells, validator);

            validator.DidNotReceiveWithAnyArgs().AddError(null);


            step.Values["A"].ShouldBe("1");
            step.Values["B"].ShouldBe("2");
            step.Values["C"].ShouldBe("3");
        }

        [Fact]
        public void move_over_staged_cells_with_some_missing()
        {
            var step = new Step("Something");
            step.StagedValues = new string[] { "1", "2" };

            var cells = new Cell[] { Cell.For<string>("A"), Cell.For<string>("B"), Cell.For<string>("C") };

            var validator = Substitute.For<IStepValidator>();

            step.ProcessCells(cells, validator);


            step.Values["A"].ShouldBe("1");
            step.Values["B"].ShouldBe("2");
            step.Values.ContainsKey("C").ShouldBeFalse();

            validator.Received().AddError("Missing value for 'C'");
        }

        [Fact]
        public void validate_with_a_missing_cell()
        {
            var step = new Step("Something");
            step.Values["A"] = "1";
            step.Values["C"] = "3";

            var cells = new Cell[] { Cell.For<string>("A"), Cell.For<string>("B"), Cell.For<string>("C") };

            var validator = Substitute.For<IStepValidator>();

            step.ProcessCells(cells, validator);

            validator.Received().AddError("Missing value for 'B'");

        }

        [Fact]
        public void validate_with_a_missing_cell_that_has_a_default()
        {
            var step = new Step("Something");
            step.Values["A"] = "1";
            step.Values["C"] = "3";

            var bCell = Cell.For<string>("B");
            bCell.DefaultValue = "11";

            var cells = new Cell[] { Cell.For<string>("A"), bCell, Cell.For<string>("C") };

            var validator = Substitute.For<IStepValidator>();

            step.ProcessCells(cells, validator);

            validator.DidNotReceiveWithAnyArgs().AddError(null);

            step.Values["B"].ShouldBe("11");
        }

        [Fact]
        public void happy_path_nothing_missing()
        {
            var step = new Step("Something");
            step.Values["A"] = "1";
            step.Values["B"] = "2";
            step.Values["C"] = "3";

            var cells = new Cell[] { Cell.For<string>("A"), Cell.For<string>("B"), Cell.For<string>("C") };

            var validator = Substitute.For<IStepValidator>();

            step.ProcessCells(cells, validator);

            validator.DidNotReceiveWithAnyArgs().AddError(null);

        }

        [Fact]
        public void multiple_missing_values()
        {
            var step = new Step("Something");
            step.Values["B"] = "2";

            var cells = new Cell[] { Cell.For<string>("A"), Cell.For<string>("B"), Cell.For<string>("C") };

            var validator = Substitute.For<IStepValidator>();

            step.ProcessCells(cells, validator);

            validator.Received().AddError("Missing value for 'A'");
            validator.DidNotReceive().AddError("Missing value for 'B'");
            validator.Received().AddError("Missing value for 'C'");
        }


    }
}