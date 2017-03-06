using System;
using System.Data;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Model;

namespace Storyteller.RDBMS
{
    public class CheckResultExecution<T> : ICommandExecution
    {
        public string Key { get; }

        public CheckResultExecution(string key = "result")
        {
            Key = key;
        }

        public Cell[] ToCells(CellHandling cellHandling, Fixture fixture)
        {
            return new Cell[]{new Cell(cellHandling, Key, typeof(T)), };
        }

        public void Execute(IDbCommand command, CommandRunner runner, StepValues values, ISpecContext context)
        {
            // Check the actual here.
            throw new NotImplementedException();
        }
    }
}