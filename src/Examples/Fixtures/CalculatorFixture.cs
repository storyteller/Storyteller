using System;
using StoryTeller.Engine;

namespace Examples.Fixtures.Example
{
    // SAMPLE:  CalculatorFixture1
    public class CalculatorFixture1 : Fixture
    {
        
    }
    // END:  CalculatorFixture1

    // SAMPLE:  CalculatorFixture2
    public class Calculator2Fixture : Fixture
    {
        [FormatAs("Start with the number {number}")]
        public void EnterNumber(int number)
        {
            
        }

        [FormatAs("Add {operand}")]
        public void Add(int operand)
        {
            
        }

        [FormatAs("The current total should be {currentValue}")]
        [return: AliasAs("currentValue")]
        public int NumberShouldBe()
        {
            throw new NotImplementedException();
        }
    }
    // END:  CalculatorFixture2


    // SAMPLE:  CalculatorFixture3
    public class Calculator
    {
        private int _number;

        public void Enter(int number)
        {
            _number = number;
        }

        public void Add(int operand)
        {
            _number += operand;
        }

        public int CurrentTotal
        {
            get
            {
                return _number;
            }
        }
    }


    public class CalculatorFixture3 : Fixture
    {
        private Calculator _calculator;

        public CalculatorFixture3()
        {
            _calculator = new Calculator();
        }

        [FormatAs("Start with the number {number}")]
        public void EnterNumber(int number)
        {
            _calculator.Enter(number);
        }

        [FormatAs("Add {operand}")]
        public void Add(int operand)
        {
            _calculator.Add(operand);
        }

        [FormatAs("The current total should be {currentValue}")]
        [return: AliasAs("currentValue")]
        public int NumberShouldBe()
        {
            return _calculator.CurrentTotal;
        }


    }
    // END:  CalculatorFixture3

}