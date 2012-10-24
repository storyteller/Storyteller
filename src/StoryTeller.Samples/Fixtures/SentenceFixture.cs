using System;
using StoryTeller.Assertions;
using StoryTeller.Engine;

namespace StoryTeller.Samples.Grammars
{
    public class SimpleFixture : Fixture
    {
        public SimpleFixture()
        {
            Policies.SelectionMode = SelectionMode.Any;
        }

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
            this["Inline"] = Inline<SimpleFixture>("simple");
            this["MandatorySelection"] = Embed<MandatorySelectionFixture>("mandatory");
        }
    }

    public class SingleSelectionFixture : SentenceFixture
    {
        public SingleSelectionFixture()
        {
            Policies.SelectionMode = SelectionMode.Single;
        }
    }

    public class OneOrMoreSelectionFixture : SentenceFixture
    {
        public OneOrMoreSelectionFixture()
        {
            Policies.SelectionMode = SelectionMode.OneOrMore;
        }
    }

    public class MandatorySelectionFixture : SentenceFixture
    {
        public MandatorySelectionFixture()
        {
            MandatoryAutoSelectOfGrammar("StartWithTheNumber");
        }
    }


    public class SentenceFixture : Fixture
    {
        private int _number;

        // SAMPLE:  GrammarsInConstructor
        public SentenceFixture()
        {
            this["ThisFactIsTrue"] = Fact("This fact is always true").VerifiedBy(() => true);
            this["ThisFactIsFalse"] = Fact("This fact is always false").VerifiedBy(() => false);
            this["ThisFactThrowsException"] =
                Fact("This fact throws an exception").VerifiedBy(() => { throw new NotImplementedException(); });
        }
        // END:  GrammarsInConstructor

        // SAMPLE:  ActionMethod
        [FormatAs("Start with the number {number}")]
        public void StartWithTheNumber(int number)
        {
            _number = number;
        }
        // END:  ActionMethod

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
        // END:  FactAssertions
    }
}