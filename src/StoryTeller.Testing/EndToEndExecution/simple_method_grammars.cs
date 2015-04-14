using System;
using System.Diagnostics;
using NUnit.Framework;
using StoryTeller.Results;

namespace StoryTeller.Testing.EndToEndExecution
{
    public class simple_method_grammars : SpecRunningContext
    {
        [Test]
        public void run_with_actions_and_assertions_success_and_failure_and_exception()
        {
            execute(@"
Name: Doing some addition
=> Arithmetic
* StartWith#1: starting=2
* MultiplyBy#2: multiplier=3
* Add#3: operand=5
* TheValueShouldBe#4: expected=11
* TheValueShouldBe#5: expected=12
* Throw#6
");

            Step("1").StatusWas(ResultStatus.ok);
            Step("2").StatusWas(ResultStatus.ok);
            Step("3").StatusWas(ResultStatus.ok);


            Step("4").Cell("expected").Succeeded();
            Step("5").Cell("expected").FailedWithActual("11");
        }

        [Test]
        public void execute_with_output_parameter()
        {
            execute(@"
=> Arithmetic
* WithOutput#1: x=3, y=4, sum=7, product=12
* WithOutput#2: x=3, y=4, sum=8, product=12
* WithOutput#3: x=3, y=4, sum=7, product=13
");

            Step("1").Cell("sum").Succeeded();
            Step("1").Cell("product").Succeeded();

            Step("2").Cell("sum").FailedWithActual("7");
            Step("2").Cell("product").Succeeded();

            Step("3").Cell("sum").Succeeded();
            Step("3").Cell("product").FailedWithActual("12");
        }
    }

    public class ArithmeticFixture : Fixture
    {
        private double _number;

        public void StartWith(double starting)
        {
            _number = starting;
            say();
        }

        private void say()
        {
            Debug.WriteLine("the number is " + _number);
        }

        public void MultiplyBy(double multiplier)
        {
            _number *= multiplier;
            say();
        }

        public void Subtract(double operand)
        {
            _number -= operand;
            say();
        }

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

        public void Throw()
        {
            throw new NotImplementedException();
        }

        public void WithOutput(int x, int y, out int sum, out int product)
        {
            sum = x + y;
            product = x*y;
        }
    }
}