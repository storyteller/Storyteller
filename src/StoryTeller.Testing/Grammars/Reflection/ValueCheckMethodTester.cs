using System.Linq;
using FubuCore;
using Xunit;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Reflection;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Testing.Grammars.Reflection
{
    
    public class ValueCheckMethodTester
    {
        [Fact]
        public void select_return_att_name_by_explicit_attribute()
        {
            var returnCell = ValueCheckMethod
                .For(new Target(), x => x.Fullname2(null, null))
                .ReturnCell;

            returnCell.Key.ShouldBe("fullname");
            returnCell.Type.ShouldBe(typeof (string));

            
        }

        [Fact]
        public void the_return_cell_is_marked_as_output()
        {
            ShouldBeTestExtensions.ShouldBe(ValueCheckMethod
                    .For(new Target(), x => x.Fullname2(null, null))
                    .ReturnCell
                    .output, true);
        }

        [Fact]
        public void select_return_att_name_by_last_key()
        {
            var returnCell = ValueCheckMethod
                .For(new Target(), x => x.Fullname(null, null))
                .ReturnCell;

            returnCell.Key.ShouldBe("expected");
            returnCell.Type.ShouldBe(typeof(string));
        }

        [Fact]
        public void select_return_att_name_by_default()
        {
            var returnCell = ValueCheckMethod
                .For(new Target(), x => x.Fullname3(null, null))
                .ReturnCell;

            // Hate this, but it's backward compatible
            returnCell.Key.ShouldBe("returnValue");
            returnCell.Type.ShouldBe(typeof(string));
        }

        [Fact]
        public void format_from_attribute_if_it_exists()
        {
            ValueCheckMethod
                .For(new Target(), x => x.Fullname(null, null))
                .Compile(new Fixture(), CellHandling.Basic())
                .ShouldBeOfType<Sentence>()
                .format.ShouldBe("The fullname for {first} & {second} should be {expected}");
        }

        [Fact]
        public void derived_format_has_the_return_value_too()
        {
            ValueCheckMethod
                .For(new Target(), x => x.Fullname3(null, null))
                .Compile(new Fixture(), CellHandling.Basic())
                .ShouldBeOfType<Sentence>()
                .format.ShouldBe("Fullname3({first}, {last}) should be {returnValue}");
        }

        [Fact]
        public void execute_happy()
        {
            var grammar = ValueCheckMethod.For(new Target(), x => x.Fullname(null, null));
            var values = new StepValues("1");
            values.Store("first", "Mat");
            values.Store("last", "Cauthon");
            values.Store("expected", "Mat Cauthon");

            var context = SpecContext.ForTesting();
            var result = grammar.Execute(values, context).Single();

            result.cell.ShouldBe("expected");
            result.Status.ShouldBe(ResultStatus.success);
        }

        [Fact]
        public void execute_sad()
        {
            var grammar = ValueCheckMethod.For(new Target(), x => x.Fullname(null, null));
            var values = new StepValues("1");
            values.Store("first", "Mat");
            values.Store("last", "Cauthon");
            values.Store("expected", "Rand Al'Thor");

            var context = SpecContext.ForTesting();
            var result = grammar.Execute(values, context).Single();

            // The method is working correctly, but the 
            // test data should result in a failure
            result.cell.ShouldBe("expected");
            result.actual.ShouldBe("Mat Cauthon");
            result.Status.ShouldBe(ResultStatus.failed);
        }

        public class Target
        {
            [FormatAs("The fullname for {first} & {second} should be {expected}")]
            public string Fullname(string first, string last)
            {
                return "{0} {1}".ToFormat(first, last);
            }

            [FormatAs("The fullname for {first} & {second} should be {fullname}")]
            [return: AliasAs("fullname")]
            public string Fullname2(string first, string last)
            {
                return "{0} {1}".ToFormat(first, last);
            }

            public string Fullname3(string first, string last)
            {
                return "{0} {1}".ToFormat(first, last);
            }
        }
    }
}