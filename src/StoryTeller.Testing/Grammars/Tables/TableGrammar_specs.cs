using System.Collections.Generic;
using FubuCore.Util;
using Xunit;
using StoryTeller.Grammars.Tables;

namespace StoryTeller.Testing.Grammars.Tables
{
    
    public class TableGrammar_specs : SpecRunningContext
    {
        [Fact]
        public void running_from_ext_method_with_no_before_or_after()
        {
            execute(@"
Name: whatever
=> TestTable
* Table1
  -> Steps
  * Row#1: message=Hello
  * Row#2: message=Goodbye
  * Row: message=Laters

");

            TestTableFixture.Traced["Table1"].ShouldHaveTheSameElementsAs("Hello", "Goodbye", "Laters");
        }

        [Fact]
        public void running_from_ext_method_with_before_and_after()
        {
            execute(@"
Name: whatever
=> TestTable
* Table2
  -> Rows
  * Row#1: message=Hello
  * Row#2: message=Goodbye
  * Row: message=Laters

");

            TestTableFixture.Traced["Table2"].ShouldHaveTheSameElementsAs("Before", "Hello", "Goodbye", "Laters", "After");
        }

        [Fact]
        public void running_from_attribute_marked_action_method()
        {
            execute(@"
Name: whatever
=> TestTable
* Table3
  -> table
  * Row#1: message=Hello
  * Row#2: message=Goodbye
  * Row: message=Laters

");

            TestTableFixture.Traced["Table3"].ShouldHaveTheSameElementsAs("Hello", "Goodbye", "Laters");
        }

        [Fact]
        public void run_from_attribute_marked_method_with_value_check()
        {
            execute(@"
Name: whatever
=> TestTable
* Addition
  -> table
  * row#1: x=1, y=2, sum=3
  * row#2: x=2, y=2, sum=4
  * row#3: x=1, y=2, sum=5
  * row#4: x=6, y=2, sum=9

");

            Step("1").Cell("sum").Succeeded();
            Step("2").Cell("sum").Succeeded();
            Step("3").Cell("sum").FailedWithActual("3");
            Step("4").Cell("sum").FailedWithActual("8");
        }
    }

    public class TestTableFixture : Fixture
    {
        public static readonly Cache<string, List<string>> Traced = new Cache<string, List<string>>(_ => new List<string>()); 

        public TestTableFixture()
        {
            this["Table1"] = Do<string>("Trace {message}", m => Traced["Table1"].Add(m))
                .AsTable("The table1 messages are").LeafName("Steps");

            this["Table2"] = Do<string>("Trace {message}", m => Traced["Table2"].Add(m))
                .AsTable("The table2 messages are")
                .Before(c => Traced["Table2"].Add("Before"))
                .After(c => Traced["Table2"].Add("After"));
        }

        [ExposeAsTable("Table 3 messages")]
        public void Table3(string message)
        {
            Traced["Table3"].Add(message);
        }

        [ExposeAsTable("Addition")]
        [return: AliasAs("sum")]
        public int Addition(int x, int y)
        {
            return x + y;
        }

        public override void SetUp()
        {
            Traced.ClearAll();
        }
    }


}