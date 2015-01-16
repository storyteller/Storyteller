using FubuCore;
using FubuCore.Reflection;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars.Reflection;

namespace Storyteller.Core.Testing.Grammars.Reflection
{
    [TestFixture]
    public class MethodInvocationTester
    {
        [Test]
        public void execute()
        {
            var target = new Target();
            var method = ReflectionHelper.GetMethod<Target>(x => x.Go(null, 0, 0));
            var invocation = new MethodInvocation(method, target);

            var values = new StepValues(method.Name);

            values.Store("name", "Jeremy");
            values.Store("age", 41);
            values.Store("percentAwake", 50.1);

            invocation.Invoke(values);

            target.Name.ShouldEqual("Jeremy");
            target.Age.ShouldEqual(41);
            target.PercentAwake.ShouldEqual(50.1);
        }

        [Test]
        public void invoke_with_return_value()
        {
            var target = new Target();
            var method = ReflectionHelper.GetMethod<Target>(x => x.Fullname(null, null, null));

            var values = new StepValues(method.Name);
            values.Store("first", "Jeremy");
            values.Store("middle", "Daniel");
            values.Store("last", "Miller");

            var invocation = new MethodInvocation(method, target);
            invocation.Invoke(values).ShouldEqual("Jeremy Daniel Miller");

        }

        public class Target
        {
            public void Go(string name, int age, double percentAwake)
            {
                this.Name = name;
                this.Age = age;
                this.PercentAwake = percentAwake;
            }

            public double PercentAwake { get; set; }

            public int Age { get; set; }

            public string Name { get; set; }

            public string Fullname(string first, string middle, string last)
            {
                return "{0} {1} {2}".ToFormat(first, middle, last);
            }
        }
    }


}