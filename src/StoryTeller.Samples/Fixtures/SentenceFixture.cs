using System;
using System.Diagnostics;
using System.Threading;
using Baseline;

namespace StoryTeller.Samples.Fixtures
{
    public class SimpleFixture : Fixture
    {
        public void A()
        {
        }

        public void B()
        {
        }

        public void C()
        {
        }

        public void D()
        {
        }

    }

    public class EmbeddedChoicesFixture : Fixture
    {
        public EmbeddedChoicesFixture()
        {
            this["Simple"] = Embed<SimpleFixture>("simple");
            this["Single"] = Embed<SingleSelectionFixture>("single");
            this["Inline"] = Embed<SimpleFixture>("simple");
            this["MandatorySelection"] = Embed<MandatorySelectionFixture>("mandatory");
        }
    }

    public class SingleSelectionFixture : SentenceFixture
    {
    }

    public class OneOrMoreSelectionFixture : SentenceFixture
    {
    }

    public class MandatorySelectionFixture : SentenceFixture
    {
    }


    public class SentenceFixture : Fixture
    {
        private int _number;

        // SAMPLE:  GrammarsInConstructor
        public SentenceFixture()
        {
            Title = "Sentence Grammars";

            this["ThisFactIsTrue"] = Fact("This fact is always true").VerifiedBy(() => true);
            this["ThisFactIsFalse"] = Fact("This fact is always false").VerifiedBy(() => false);
            this["ThisFactThrowsException"] =
                Fact("This fact throws an exception").VerifiedBy(() => { throw new NotImplementedException(); });
        }

        private void say()
        {

            Debug.WriteLine("the number is " + _number);

            Context.Reporting.ReporterFor<ListReport>().Add(_number.ToString());
        }

        [FormatAs("{one is better than {two")]
        public void BadGrammar(string one, string two)
        {
            
        }

        // END:  GrammarsInConstructor

        // SAMPLE:  ActionMethod
        [FormatAs("Start with the number {number}")]
        public void StartWithTheNumber(int number = 5)
        {
            _number = number;
            say();
        }

        // END:  ActionMethod

        [FormatAs("Multiply by {multiplier} then add {delta}")]
        public void MultiplyThenAdd(int multiplier, int delta)
        {
            _number *= multiplier;
            _number += delta;
            say();
            //Thread.Sleep(1.Seconds());
        }

        public void Subtract(int operand)
        {
            _number -= operand;
            say();
            //Thread.Sleep(1.Seconds());
        }

        public void DivideBy(int operand)
        {
            _number /= operand;
            say();
        }

        [FormatAs("The number should now be {number}")]
        [return: AliasAs("number")]
        public int TheValueShouldBe()
        {
            return _number;
        }

        // SAMPLE:  ValueCheckMethod
        [FormatAs("The sum of {number1} and {number2} should be {sum}")]
        public int TheSumOf(int number1, int number2)
        {
            return number1 + number2;
        }
        // END:  ValueCheckMethod

        public void ThisLineAlwaysThrowsExceptions()
        {
            StoryTellerAssert.Fail("No go!");
        }

        // SAMPLE:  FactAssertions
        [FormatAs("This line is always true")]
        public bool ThisLineIsAlwaysTrue()
        {
            return true;
        }

        [FormatAs("This line is always false")]
        public bool ThisLineIsAlwaysFalse()
        {
            return false;
        }

        [FormatAs("{x} + {y} should be {sum}")]
        public bool XplusYShouldBe(int x, int y, int sum)
        {
            return (x + y) == sum;
        }

        [FormatAs("Incomplete format")]
        public void BadSentence(string name)
        {
            
        }

        // END:  FactAssertions

        public void JustGo()
        {
            
        }
    }
}