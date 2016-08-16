using System.Linq;
using Baseline;
using Xunit;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Reflection;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars.Reflection
{
    
    public class ActionMethodGrammarTester
    {
        private readonly Target theTarget = new Target();

        [Fact]
        public void select_default_format()
        {
           var grammar = ActionMethodGrammar.Create(x => x.Go(null, 0, 0), theTarget);
           var model = grammar.Compile(new Fixture(), CellHandling.Basic()).ShouldBeOfType<Sentence>();

            model.format.ShouldBe("Go({name}, {age}, {percentAwake})");


        }

        [Fact]
        public void select_format_by_names()
        {
            var grammar = ActionMethodGrammar.Create(x => x.FancyGo(null, 0, 0), theTarget);
            var model = grammar.Compile(new Fixture(), CellHandling.Basic()).ShouldBeOfType<Sentence>();

            model.format.ShouldBe("fancy go {name}, {age}, {percentAwake}");
        }

        [Fact]
        public void execute()
        {
            var grammar = ActionMethodGrammar.Create(x => x.Go(null, 0, 0), theTarget);
            grammar.Compile(new Fixture(), CellHandling.Basic()).ShouldBeOfType<Sentence>();

            var values = new StepValues("id");
            values.Store("name", "Jeremy");
            values.Store("age", 41);
            values.Store("percentAwake", 50.1);

            ShouldBeTestExtensions.ShouldBe(grammar.Execute(values, SpecContext.Basic()).Any(), false);

            theTarget.Name.ShouldBe("Jeremy");
            theTarget.Age.ShouldBe(41);
            theTarget.PercentAwake.ShouldBe(50.1);
        }

        public class Target
        {
            public void Go(string name, int age, double percentAwake)
            {
                this.Name = name;
                this.Age = age;
                this.PercentAwake = percentAwake;
            }

            [FormatAs("fancy go {name}, {age}, {percentAwake}")]
            public void FancyGo(string name, int age, double percentAwake)
            {
                
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