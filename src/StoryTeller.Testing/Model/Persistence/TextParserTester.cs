using System.Linq;
using Baseline;
using Xunit;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Testing.Model.Persistence
{
    
    public class TextParserTester
    {
        [Fact]
        public void build_a_new_specification_with_name()
        {
            var spec = TextParser.Parse(@"
Name: My spec
");


            spec.name.ShouldBe("My spec");
        }

        [Fact]
        public void read_a_single_section()
        {
            var spec = TextParser.Parse(@"
Name: My spec
=> Math
");

            spec.Children.Single().ShouldBeOfType<Section>()
                .Key.ShouldBe("Math");
        }

        [Fact]
        public void read_an_id_in_a_section()
        {
            var spec = TextParser.Parse(@"
Name: My spec
=> Math#1
");

            spec.Children.Single().ShouldBeOfType<Section>()
                .id.ShouldBe("1");
        }

        [Fact]
        public void read_steps_in_a_section_without_an_id()
        {
            var spec = TextParser.Parse(@"
Name: My spec
=> Math
* Adding: x=1, y=2, sum=3
* StartWith: x=5
");

            var section = spec.Children[0].As<Section>();
            var step1 = section.Children[0].As<Step>();
            step1.Key.ShouldBe("Adding");
            step1.Values["x"].ShouldBe("1");
            step1.Values["y"].ShouldBe("2");
            step1.Values["sum"].ShouldBe("3");

            var step2 = section.Children[1].As<Step>();
            step2.Key.ShouldBe("StartWith");
            step2.Values["x"].ShouldBe("5");
        }

        [Fact]
        public void read_steps_in_a_section_with_an_id()
        {
            var spec = TextParser.Parse(@"
Name: My spec
=> Math
* Adding#23: x=1, y=2, sum=3
* StartWith: x=5
");

            var section = spec.Children[0].As<Section>();
            var step1 = section.Children[0].As<Step>();
            step1.Key.ShouldBe("Adding");
            step1.id.ShouldBe("23");
            step1.Values["x"].ShouldBe("1");
            step1.Values["y"].ShouldBe("2");
            step1.Values["sum"].ShouldBe("3");

            var step2 = section.Children[1].As<Step>();
            step2.Key.ShouldBe("StartWith");
            step2.Values["x"].ShouldBe("5");
        }



        [Fact]
        public void read_multiple_sections()
        {
            var spec = TextParser.Parse(@"
Name: My spec
=> Math
* Adding: x=1, y=2, sum=3

=> Math
* StartWith: x=5
");

            var step1 = spec.Children[0].As<Section>().Children[0].As<Step>();
            step1.Key.ShouldBe("Adding");
            step1.Values["x"].ShouldBe("1");
            step1.Values["y"].ShouldBe("2");
            step1.Values["sum"].ShouldBe("3");

            var step2 = spec.Children[1].As<Section>()
                .Children[0].As<Step>();
            step2.Key.ShouldBe("StartWith");
            step2.Values["x"].ShouldBe("5");

        }

        [Fact]
        public void read_collection_of_a_step()
        {
            var spec = TextParser.Parse(@"
=> Math
* AddNumbers
  -> Rows
  * Row: x=1, y=2, sum=3
  * Row: x=2, y=3, sum=5

* Adding: x=5, y=7, sum=12
");

            var subsection = spec.Children[0].As<Section>()
                .Children[0].As<Step>().Collections["Rows"];

            subsection.Children.Count.ShouldBe(2);

            subsection.Children[0].As<Step>().Values["x"].ShouldBe("1");
            subsection.Children[0].As<Step>().Values["sum"].ShouldBe("3");
            subsection.Children[1].As<Step>().Values["sum"].ShouldBe("5");

            spec.Children[0].As<Section>().Children[1]
                .ShouldBeOfType<Step>()
                .Key.ShouldBe("Adding");
        }


    }
}