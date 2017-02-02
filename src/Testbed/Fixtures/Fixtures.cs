using System.Collections.Generic;
using StoryTeller;

namespace Testbed.Fixtures
{
    // SAMPLE: Generated.CalculatorFixture
    public class CalculatorFixture : StoryTeller.Fixture
    {
        public void StartWith(string number)
        {
            throw new System.NotImplementedException();
        }
    }
    // ENDSAMPLE

    public class Calculator2Fixture : Fixture
    {
        // SAMPLE: DesignGrammarWithResults
        [return: StoryTeller.AliasAs("sum")]
        public string AddNumbers(string x, string y)
        {
            throw new System.NotImplementedException();
        }
        // ENDSAMPLE


        // SAMPLE: TableDesignedByMarkdown
        [StoryTeller.Grammars.Tables.ExposeAsTable("Adding some numbers together")]
        public void NumberTable(string x, string y, out string sum, out string product)
        {
            throw new System.NotImplementedException();
        }
        // ENDSAMPLE


        // SAMPLE: SetDesignedByMarkdown
        // Implementation of a SetVerification grammar for 'TheFirst5PrimeNumbersShouldBe'
        public class TheFirst5PrimeNumbersShouldBeRow
        {
            public string number{get; set;}
        }

        private IEnumerable<TheFirst5PrimeNumbersShouldBeRow> getTheFirst5PrimeNumbersShouldBeRows(StoryTeller.ISpecContext context)
        {
            throw new System.NotImplementedException();
        }


        public StoryTeller.IGrammar TheFirst5PrimeNumbersShouldBe()
        {
            return VerifySetOf(getTheFirst5PrimeNumbersShouldBeRows)
                .Titled("The first 5 prime numbers should be").Ordered()
                .MatchOn(x => x.number);
        }
        // ENDSAMPLE

        // SAMPLE: FactGrammarDesignedByMarkdown
        public bool TheConfirmationEmailWasSent()
        {
            throw new System.NotImplementedException();
        }
        // ENDSAMPLE
    }
}