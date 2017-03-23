using System.Data;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.RDBMS.Sets
{
    public class DbSetExecution : ICommandExecution
    {
        private readonly BufferedReader _reader;

        public DbSetExecution(BufferedReader reader)
        {
            _reader = reader;
        }

        public Cell[] ToCells(CellHandling cellHandling, Fixture fixture)
        {
            return new Cell[0];
        }

        public CellResult Execute(IDbCommand command, CommandRunner runner, StepValues values, ISpecContext context)
        {
            using (var reader = runner.ExecuteReader(command))
            {
                context.State.CurrentObject = _reader.Read(reader);
            }

            return null;
        }
    }
}
