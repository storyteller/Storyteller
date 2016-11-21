using System.Linq;
using Baseline;
using Shouldly;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class SpecificationPostProcessorTester
    {
        private readonly FixtureLibrary theLibrary = new FixtureLibrary();
        private readonly Specification theSpecification = new Specification();


        public SpecificationPostProcessorTester()
        {
            theLibrary.AddWithDefaultCellHandling<PostSpecFixture>();
        }

        private void afterPostProcessing()
        {
            var processor = new SpecificationPostProcessor(theLibrary, theSpecification);
            processor.Validate();
        }

        [Fact]
        public void happy_path_with_no_errors()
        {
            var section = theSpecification.AddSection("PostSpec");
            section.AddStep("StartWithTheNumber").With("number", "10");
            section.AddStep("Subtract").With("operand", "2");

            afterPostProcessing();

            theSpecification.errors.Any().ShouldBeFalse();
        }


        [Fact]
        public void log_missing_fixture()
        {
            theSpecification.AddSection("NotThere");

            afterPostProcessing();

            var error = theSpecification.errors.Single();

            error.location.Join(", ").ShouldBe("Section #1: 'NotThere'");
            error.message.ShouldBe("References an unknown Fixture ('NotThere')");
        }

        [Fact]
        public void log_not_implemented_fixture()
        {
            theLibrary.Models["PostSpec"].IsMissing = true;

            var section = theSpecification.AddSection("PostSpec");
            section.AddStep("StartWithTheNumber").With("number", "10");
            section.AddStep("Subtract").With("operand", "2");

            afterPostProcessing();

            var error = theSpecification.errors.Single();
            error.location.Single().ShouldBe("Section #1: 'PostSpec'");
            error.message.ShouldBe("Fixture 'PostSpec' is not implemented");
        }


        [Fact]
        public void validate_missing_cell()
        {
            var section = theSpecification.AddSection("PostSpec");
            section.AddStep("StartWithTheNumber").With("number", "10");
            section.AddStep("Subtract");

            afterPostProcessing();

            var error = theSpecification.errors.Single();
            error.location.ShouldHaveTheSameElementsAs("Section #1: 'PostSpec'", "Step #2: Subtract");
            error.message.ShouldBe("Missing value for 'operand'");
        }

        [Fact]
        public void no_cell_error_for_missing_value_with_default()
        {
            var section = theSpecification.AddSection("PostSpec");

            // StartWithTheNumber has a default value
            section.AddStep("StartWithTheNumber");

            afterPostProcessing();

            theSpecification.errors.Any().ShouldBeFalse();
        }

        [Fact]
        public void not_implemented_grammar()
        {
            theLibrary.Models["PostSpec"]
                .FindGrammar("StartWithTheNumber")
                .IsMissing = true;

            var section = theSpecification.AddSection("PostSpec");

            // StartWithTheNumber has a default value
            section.AddStep("StartWithTheNumber");

            afterPostProcessing();

            var error = theSpecification.errors.Single();
            error.location.ShouldHaveTheSameElementsAs("Section #1: 'PostSpec'", "Step #1: StartWithTheNumber");
            error.message.ShouldBe("Grammar 'StartWithTheNumber' is not implemented");
        }

        [Fact]
        public void validate_happy_path_with_table()
        {
            // AddNumbers
            var section = theSpecification.AddSection("PostSpec");
            var root = section.AddStep("AddNumbers");
            var rows = root.AddCollection("table");

            rows.AddStep("row").With("X", "1").With("Y", "2").With("returnValue", "3");
            rows.AddStep("row").With("X", "1").With("Y", "4").With("returnValue", "5");
            rows.AddStep("row").With("X", "5").With("Y", "2").With("returnValue", "7");

            afterPostProcessing();

            theSpecification.errors.Any().ShouldBeFalse();
        }

        [Fact]
        public void missing_value_with_table_section()
        {
            // AddNumbers
            var section = theSpecification.AddSection("PostSpec");
            var root = section.AddStep("AddNumbers");
            var rows = root.AddCollection("table");

            rows.AddStep("row").With("X", "1").With("Y", "2").With("returnValue", "3");
            rows.AddStep("row").With("X", "1").With("returnValue", "5");
            rows.AddStep("row").With("X", "5").With("Y", "2").With("returnValue", "7");

            afterPostProcessing();

            var error = theSpecification.errors.Single();

            error.location.ShouldHaveTheSameElementsAs("Section #1: 'PostSpec'", "Step #1: AddNumbers", "Collection 'table'", "Step #Step 'row' with values X=1, returnValue=5: row");
            error.message.ShouldBe("Missing value for 'Y'");

        }

        [Fact]
        public void validate_embedded_section_happy_path()
        {
            var section = theSpecification.AddSection("PostSpec");
            var root = section.AddStep("Embed");
            var children = root.AddCollection("PostSpecEmbed");

            children.AddStep("SayName").With("first", "Han").With("last", "Solo");
            children.AddStep("SayName").With("first", "Darth").With("last", "Vader");
            children.AddStep("SayName").With("first", "Luke").With("last", "Skywalker");

            //afterPostProcessing();

            theSpecification.errors.Any().ShouldBeFalse();
        }

        [Fact]
        public void validate_with_missing_value_within_an_embedded_section()
        {
            var section = theSpecification.AddSection("PostSpec");
            var root = section.AddStep("Embed");
            var children = root.AddCollection("PostSpecEmbed");

            children.AddStep("SayName").With("first", "Han").With("last", "Solo");
            children.AddStep("SayName").With("first", "Darth").With("last", "Vader");
            children.AddStep("SayName").With("first", "Luke");

            afterPostProcessing();

            var error = theSpecification.errors.Single();

            error.location.ShouldHaveTheSameElementsAs("Section #1: 'PostSpec'", "Step #1: Embed", "Collection 'PostSpecEmbed' using Fixture 'PostSpecEmbed'", "Step #3: SayName");
            error.message.ShouldBe("Missing value for 'last'");
        }
    }

    public class PostSpecFixture : Fixture
    {
        private int _number;

        [FormatAs("Start with the number {number}")]
        public void StartWithTheNumber(int number = 5)
        {
            _number = number;
        }


        [FormatAs("Multiply by {multiplier} then add {delta}")]
        public void MultiplyThenAdd(int multiplier, int delta)
        {
            _number *= multiplier;
            _number += delta;
        }

        public void Subtract(int operand)
        {
            _number -= operand;
        }

        public void DivideBy(int operand)
        {
            _number /= operand;
        }

        [FormatAs("The number should now be {number}")]
        [return: AliasAs("number")]
        public int TheValueShouldBe()
        {
            return _number;
        }

        [ExposeAsTable("Add some numbers")]
        public int AddNumbers(int X, int Y)
        {
            return X + Y;
        }

        public IGrammar Embed()
        {
            return Embed<PostSpecEmbedFixture>("Do other things");
        }
    }

    public class PostSpecEmbedFixture : Fixture
    {
        public void SayName(string first, string last)
        {
            
        }
    }
}