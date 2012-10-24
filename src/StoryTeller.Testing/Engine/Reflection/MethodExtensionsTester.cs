using System;
using System.Collections.Generic;
using FubuCore.Reflection;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Engine.Reflection;

namespace StoryTeller.Testing.Engine.Reflection
{
    public class MethodTarget
    {
        public int Age;
        public string Name;

        public void DoSomethingWith(string name, int age)
        {
            Age = age;
            Name = name;
        }

        [FormatAs("{name} and {age}")]
        public void DoSomethingWith2(string name, int age)
        {
            Age = age;
            Name = name;
        }

        public double MethodThatReturns(string name, int age)
        {
            throw new NotImplementedException();
        }

        public double ContextualMethodThatReturns(ITestContext context, string name, int age)
        {
            throw new NotImplementedException();
        }

        [return: AliasAs("the value")]
        public string MethodThatReturns2(string name, int age)
        {
            throw new NotImplementedException();
        }

        [FormatAs("If the name is {name} and age is {age} the return should be {returnValue}")]
        public string MethodThatReturnsWithAttribute(string name, int age)
        {
            throw new NotImplementedException();
        }
    }

    [TestFixture]
    public class MethodExtensionsTester
    {
        [Test]
        public void argument_cells_are_not_a_result()
        {
            IEnumerable<Cell> cells = ReflectionHelper.GetMethod<MethodTarget>(x => x.MethodThatReturns(null, 0))
                .GetArgumentCells();

            foreach (Cell cell in cells)
            {
                cell.IsResult.ShouldBeFalse();
            }
        }

        [Test]
        public void get_template_for_a_method_that_returns_a_value_and_an_exception()
        {
            ReflectionHelper.GetMethod<MethodTarget>(x => x.MethodThatReturnsWithAttribute(null, 0))
                .GetTemplate().ShouldEqual("If the name is {name} and age is {age} the return should be {returnValue}");
        }

        [Test]
        public void get_template_for_a_method_with_a_return_value_and_no_attribute()
        {
            ReflectionHelper.GetMethod<MethodTarget>(x => x.MethodThatReturns(null, 0))
                .GetTemplate().ShouldEqual("MethodThatReturns {name}, {age} should be {returnValue}");
        }


        [Test]
        public void
            get_template_for_a_method_with_a_return_value_and_no_attribute_for_the_format_but_an_attribute_for_the_return_value
            ()
        {
            ReflectionHelper.GetMethod<MethodTarget>(x => x.MethodThatReturns2(null, 0))
                .GetTemplate().ShouldEqual("MethodThatReturns2 {name}, {age} should be {the value}");
        }

        [Test]
        public void get_template_for_the_method_if_attribute_is_found()
        {
            ReflectionHelper.GetMethod<MethodTarget>(x => x.DoSomethingWith2(null, 0))
                .GetTemplate().ShouldEqual("{name} and {age}");
        }

        [Test]
        public void get_template_for_the_method_if_no_attribute_is_found()
        {
            ReflectionHelper.GetMethod<MethodTarget>(x => x.DoSomethingWith(null, 0))
                .GetTemplate().ShouldEqual("DoSomethingWith {name}, {age}");
        }

        [Test]
        public void get_the_argument_cells_for_a_method()
        {
            Cell[] cells = ReflectionHelper.GetMethod<MethodTarget>(x => x.MethodThatReturns(null, 0))
                .GetArgumentCells();


            var expected = new[] {new Cell("name", typeof (string)), new Cell("age", typeof (int)),};
            TestUtility.AssertListMatches(new List<Cell>(cells), expected);
        }

        [Test]
        public void get_the_argument_cells_for_a_method_that_has_a_non_primitive()
        {
            Cell[] cells = ReflectionHelper.GetMethod<MethodTarget>(x => x.ContextualMethodThatReturns(null, null, 0))
                .GetArgumentCells();


            var expected = new[] {new Cell("name", typeof (string)), new Cell("age", typeof (int)),};
            TestUtility.AssertListMatches(new List<Cell>(cells), expected);
        }

        [Test]
        public void get_the_return_cell_with_a_return_alias()
        {
            ReflectionHelper.GetMethod<MethodTarget>(x => x.MethodThatReturns2(null, 0)).GetReturnCell()
                .ShouldEqual(new Cell("the value", typeof (string)));
        }

        [Test]
        public void get_the_return_cell_without_a_return_alias()
        {
            ReflectionHelper.GetMethod<MethodTarget>(x => x.MethodThatReturns(null, 0)).GetReturnCell()
                .ShouldEqual(new Cell("returnValue", typeof (double)));
        }

        [Test]
        public void get_the_return_value_name()
        {
            ReflectionHelper.GetMethod<MethodTarget>(x => x.MethodThatReturns(null, 0)).GetReturnValueAlias()
                .ShouldEqual("returnValue");

            ReflectionHelper.GetMethod<MethodTarget>(x => x.MethodThatReturns2(null, 0)).GetReturnValueAlias()
                .ShouldEqual("the value");
        }

        [Test]
        public void the_return_cell_is_a_result_cell()
        {
            ReflectionHelper.GetMethod<MethodTarget>(x => x.MethodThatReturns2(null, 0)).GetReturnCell().IsResult.
                ShouldBeTrue();
        }
    }
}