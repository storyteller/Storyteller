using System.Linq;
using Baseline;
using Baseline.Reflection;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Reflection;
using StoryTeller.Results;
using Xunit;

namespace StoryTeller.Testing.Grammars.Reflection
{
    public class MethodInvocationTester
    {
        public class Target : Fixture
        {
            public double PercentAwake { get; set; }

            public int Age { get; set; }

            public string Name { get; set; }

            public void Go(string name, int age, double percentAwake)
            {
                Name = name;
                Age = age;
                PercentAwake = percentAwake;
            }

            public void GoOutput(string name, out int age, out double percentAwake)
            {
                Name = name;
                age = 5;
                percentAwake = .5;
            }

            public string Fullname(string first, string middle, string last)
            {
                return "{0} {1} {2}".ToFormat(first, middle, last);
            }
        }

        [Fact]
        public void execute()
        {
            var target = new Target();
            var method = ReflectionHelper.GetMethod<Target>(x => x.Go(null, 0, 0));
            var invocation = new MethodInvocation(method, target);

            var values = new StepValues(method.Name);

            values.Store("name", "Jeremy");
            values.Store("age", 41);
            values.Store("percentAwake", 50.1);

            invocation.Invoke(values).ToArray();

            target.Name.ShouldBe("Jeremy");
            target.Age.ShouldBe(41);
            target.PercentAwake.ShouldBe(50.1);
        }

        [Fact]
        public void invoke_with_out_parameters_happy_path()
        {
            var age = 0;
            double percentAwake = 0;

            var target = new Target();
            var method = ReflectionHelper.GetMethod<Target>(x => x.GoOutput(null, out age, out percentAwake));

            var values = new StepValues(method.Name);
            values.Store("name", "Grace Potter");
            values.Store("age", 5);
            values.Store("percentAwake", .5);

            var invocation = new MethodInvocation(method, target);
            invocation.Compile(target, CellHandling.Basic());

            var results = invocation.Invoke(values).ToArray();

            results.ShouldHaveTheSameElementsAs(
                new CellResult("age", ResultStatus.success),
                new CellResult("percentAwake", ResultStatus.success)
            );
        }

        [Fact]
        public void invoke_with_return_value()
        {
            var target = new Target();
            var method = ReflectionHelper.GetMethod<Target>(x => x.Fullname(null, null, null));

            var values = new StepValues(method.Name);
            values.Store("first", "Jeremy");
            values.Store("middle", "Daniel");
            values.Store("last", "Miller");
            values.Store("returnValue", "foo");

            var invocation = new MethodInvocation(method, target);
            invocation.Compile(target, CellHandling.Basic());

            invocation.Invoke(values).Single().actual.ShouldBe("Jeremy Daniel Miller");
        }
    }
}