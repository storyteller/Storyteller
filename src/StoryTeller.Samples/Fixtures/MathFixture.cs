using System;
using System.ComponentModel;
using System.Diagnostics;
using HtmlTags;
using StoryTeller.Grammars.Importing;
using StoryTeller.Grammars.Tables;
using StoryTeller.Results;

namespace StoryTeller.Samples.Fixtures
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
            this["StartWith"] = Import<MathFixture>("StartWith");
            this["Add5"] = Import<MathFixture>("Add").Curry().Template("Add 5").Defaults("operand:5");

            this["AddingTo5"] = Import<MathFixture>("Adding").Curry()
                .Template("Adding {y} to 5 should be {returnValue}")
                .Defaults("x:5");


            this["TheValueShouldBe"] = Import<MathFixture>("TheValueShouldBe");
        }
    }

    public class MathFixture : Fixture
    {
        private double _number;


        public MathFixture()
        {
            this["AddTo5"] = Curry("Adding").Template("Adding {x} to 5 should be {returnValue}").Defaults("y:5");
        }

        [FormatAs("The number should start with {starting}")]
        public void StartWith([Default("11")]double starting)
        {
            _number = starting;
            say();
        }

        private void say()
        {
            Debug.WriteLine("the number is " + _number);

            Context.Reporting.ReporterFor<ListReport>().Add(_number.ToString());
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

        // SAMPLE:  ReturnGrammarFromMethod
        public IGrammar AddAndCheck()
        {
            return Paragraph("Add and check", x =>
            {
                x += this["StartWith"];
                x += this["Add"];
                x += this["TheValueShouldBe"];
            });
        }
        // END:  ReturnGrammarFromMethod

        public void Throw()
        {
            throw new NotImplementedException();
        }
    }

    public class ListReport : IReporter
    {
        private readonly HtmlTag _ul = new HtmlTag("ul").AddClass("list-group");

        public string ToHtml()
        {
            return _ul.ToString();
        }

        public ListReport Add(string text)
        {
            _ul.Add("li").AddClass("list-group-item").Text(text);
            return this;
        }

        public string Title
        {
            get { return "Some Numbers"; }
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