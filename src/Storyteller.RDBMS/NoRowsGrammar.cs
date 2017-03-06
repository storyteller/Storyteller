using System;
using StoryTeller;
using StoryTeller.Grammars;

namespace Storyteller.RDBMS
{
    public class NoRowsGrammar : FactGrammar
    {
        public static Func<ISpecContext, bool> Test(string dbObject)
        {
            return c =>
            {
                var runner = c.State.Retrieve<CommandRunner>();


                var rowCount = runner.RowCount(dbObject);
                StoryTellerAssert.Fail(rowCount > 0, $"Found {rowCount} rows, but expected 0");

                return rowCount == 0;
            };
        }

        public NoRowsGrammar(string title, string dbObject) : base(title, Test(dbObject))
        {

        }
    }
}