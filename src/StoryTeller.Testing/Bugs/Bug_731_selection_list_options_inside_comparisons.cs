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
    public class Bug_731_selection_list_options_inside_comparisons
    {
        private readonly FixtureModel theModel = new SetsAndSelectionListsFixture().Compile(CellHandling.Basic());

        [Fact]
        public void works_with_option_list_name()
        {
            var grammar = theModel.FindGrammar("One").As<SetVerification>();
            var cell = grammar.cells.FirstOrDefault(x => x.Key == "Name");

            cell.options.Select(x => x.value).ShouldHaveTheSameElementsAs("A", "B", "C");
            cell.editor.ShouldBe("select");
        }
    }

    public class SetsAndSelectionListsFixture : Fixture
    {
        private readonly List<InvoiceDetail> _details = new List<InvoiceDetail>();

        public SetsAndSelectionListsFixture()
        {
            AddSelectionValues("foo", "A", "B", "C");
        }


        public IGrammar One()
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
