using System.Collections.Generic;
using System.Linq;
using Baseline;
using Shouldly;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model;
using StoryTeller.Samples.Fixtures;
using Xunit;

namespace StoryTeller.Testing.Bugs
{
    public class Bug_511_selection_values_and_options_inside_of_comparisons
    {
        private readonly FixtureModel theModel = new SetsAndOptionsFixture().Compile(CellHandling.Basic());

        [Fact]
        public void works_with_SelectionValues()
        {
            var grammar = theModel.FindGrammar("One").As<SetVerification>();
            var cell = grammar.cells.FirstOrDefault(x => x.Key == "Name");

            cell.options.Select(x => x.value).ShouldHaveTheSameElementsAs("A", "B", "C");
            cell.editor.ShouldBe("select");
        }

        [Fact]
        public void works_with_SelectionOptions()
        {
            var grammar = theModel.FindGrammar("Two").As<SetVerification>();
            var cell = grammar.cells.FirstOrDefault(x => x.Key == "Name");

            cell.options.Select(x => x.value).ShouldHaveTheSameElementsAs("A", "B");
            cell.editor.ShouldBe("select");
        }

        [Fact]
        public void works_with_option_list_name()
        {
            var grammar = theModel.FindGrammar("Three").As<SetVerification>();
            var cell = grammar.cells.FirstOrDefault(x => x.Key == "Name");

            cell.editor.ShouldBe("select");
        }
    }

    public class SetsAndOptionsFixture : Fixture
    {
        private readonly List<InvoiceDetail> _details = new List<InvoiceDetail>();


        public IGrammar One()
        {
            return VerifySetOf(() => _details)
                .Titled("The Ordered details should be")
                .Ordered()
                .Comparisons(_ =>
                {
                    _.Compare(o => o.Amount).DefaultValue("100").Header("The Amount");
                    _.Compare(o => o.Date);
                    _.Compare(o => o.Name).Header("The Name").SelectionValues("A", "B", "C");
                });
        }

        public IGrammar Two()
        {
            return VerifySetOf(() => _details)
                .Titled("The Ordered details should be")
                .Ordered()
                .Comparisons(_ =>
                {
                    _.Compare(o => o.Amount).DefaultValue("100").Header("The Amount");
                    _.Compare(o => o.Date);
                    _.Compare(o => o.Name)
                        .Header("The Name")
                        .SelectionOptions(new Option("The A", "A"), new Option("The B", "B"));
                });
        }

        public IGrammar Three()
        {
            return VerifySetOf(() => _details)
                .Titled("The Ordered details should be")
                .Ordered()
                .Comparisons(_ =>
                {
                    _.Compare(o => o.Amount).DefaultValue("100").Header("The Amount");
                    _.Compare(o => o.Date);
                    _.Compare(o => o.Name)
                        .Header("The Name")
                        .SelectionList("foo");
                });
        }
    }
}