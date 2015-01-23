using System;
using System.ComponentModel;
using System.Diagnostics;
using System.Threading;
using Storyteller.Core.Grammars;
using Storyteller.Core.Grammars.Tables;

namespace Storyteller.Core.Testing.Samples.Fixtures
{
    [Hidden]
    public class AnotherFixture : Fixture
    {
        public void RepeatAfterMe(string whatDidISay)
        {
        }
    }

    public class CurriedMathFixture : Fixture
    {
        public CurriedMathFixture()
        {
            /* TODO -- bring back with Import functionality
            this["StartWith"] = Import<MathFixture>("StartWith");
            this["Add5"] = Import<MathFixture>("Add").Curry(new CurryAction(){
                Template = "Add 5",
                DefaultValues = "operand:5"
            });

            this["AddingTo5"] = Import<MathFixture>("Adding").Curry(new CurryAction(){
                Template = "Adding {y} to 5 should be {returnValue}",
                DefaultValues = "x:5"
            });

            this["TheValueShouldBe"] = Import<MathFixture>("TheValueShouldBe");
             *  * */
        }
            
    }

    public class MathFixture : Fixture
    {
        private double _number;


        public MathFixture()
        {
            // TODO -- add currying back
            //this["AddTo5"] = Curry("Adding").Template("Adding {x} to 5 should be {returnValue}").Defaults("y:5");
        }

        // TODO -- bring back the Default attribute
        /*
        [FormatAs("The number should start with {starting}")]
        public void StartWith([Default("11")]double starting)
        {
            Thread.Sleep(1000);

            _number = starting;
            say();
        }
         * */

        private void say()
        {
            Debug.WriteLine("the number is " + _number);
        }

        [FormatAs("*= {multiplier}")]
        [Description("This grammar multiplies two numbers together")]
        public void MultiplyBy(double multiplier)
        {
            _number *= multiplier;
            say();
        }

        [FormatAs("-= {operand}")]
        public void Subtract(double operand)
        {
            _number -= operand;
            say();
        }

        [FormatAs("+= {operand}")]
        public void Add(double operand)
        {
            _number += operand;
            say();
        }

        [FormatAs("Value should be {expected}")]
        [return: AliasAs("expected")]
        public double TheValueShouldBe()
        {
            return _number;
        }

        [FormatAs("Adding {x} to {y} should be {returnValue}")]
        public double Adding(double x, double y)
        {
            return x + y;
        }



        [ExposeAsTable("When adding numbers", "operation")]
        [return: AliasAs("sum")]
        public double AddTable(double x, double y)
        {
            return x + y;
        }

        // TODO -- bring this back
        // SAMPLE:  ReturnGrammarFromMethod
        /*
        public IGrammar AddAndCheck()
        {
            return Paragraph("Add and check", x =>
            {
                x += this["StartWith"];
                x += this["Add"];
                x += this["TheValueShouldBe"];
            });
        }
        */
        // END:  ReturnGrammarFromMethod

        public void Throw()
        {
            throw new NotImplementedException();
        }
    }

    public class DoSomeMathFixture : Fixture
    {
        public IGrammar DoSomeMath()
        {
            return Embed<MathFixture>("Now do some math");
        }
    }
}