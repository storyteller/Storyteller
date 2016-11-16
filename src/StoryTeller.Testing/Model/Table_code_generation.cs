using System;
using Baseline;
using Shouldly;
using StoryTeller.Grammars.Tables;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class Table_code_generation
    {
        private string theCode;

        public Table_code_generation()
        {
            var model = new TableTargetFixture().Compile(CellHandling.Basic());
            model.IsMissing = true;
            model.grammars.Each(x => x.IsMissing = true);
            theCode = model.missingCode;

            Console.WriteLine(theCode);
        }

        [Fact]
        public void generate_code_for_no_outputs()
        {
            theCode.ShouldContain("");
        }

        [Fact]
        public void generate_code_for_outputs_too()
        {
            theCode.ShouldContain("public void CheckSomeThings(string X, string Y, out string Sum, out string Product)");
        }
    }
    
    public class TableTargetFixture : Fixture
    {
        [ExposeAsTable("Add some data")]
        public void AddData(string foo, string bar, string baz)
        {
            
        }

        [ExposeAsTable("Check some things out")]
        public void CheckSomeThings(int X, int Y, out int Sum, out int Product)
        {
            throw new NotImplementedException();
        }
    }
}