using System.Data;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.RDBMS
{
    public class CheckResultExecution<T> : ICommandExecution
    {
        private Cell _result;
        public string Key { get; }

        public CheckResultExecution(string key = "result")
        {
            Key = key;
        }

        public Cell[] ToCells(CellHandling cellHandling, Fixture fixture)
        {
            _result = new Cell(cellHandling, Key, typeof(T));

            return new Cell[]{_result};
        }

        public CellResult Execute(IDbCommand command, CommandRunner runner, StepValues values, ISpecContext context)
        {
            var result = runner.Execute<T>(command);

            return _result.Check(values, result);
        }
    }
}
