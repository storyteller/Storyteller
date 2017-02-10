using System.Data;
using System.Linq;
using System.Reflection;
using Baseline;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace Storyteller.RDBMS
{
    public class ParameterCell
    {
        public static ParameterCell[] ParseCells(MethodInfo method, CellHandling cellHandling, Fixture fixture)
        {
            var dialect = fixture.As<DatabaseFixture>().Dialect;

            return method.GetParameters()
                .Select(param =>
                {
                    var cell = Cell.For(cellHandling, param, fixture);
                    var parameterName = dialect.AliasParameter(cell.Key);
                    var dbType = dialect.DbTypeFor(cell.Type);


                    return new ParameterCell(cell, parameterName, dbType) {Direction = ParameterDirection.Output};
                }).ToArray();
        }

        public ParameterDirection Direction { get; set; } = ParameterDirection.Input;

        public ParameterCell(Cell cell, string parameterName, DbType dbType)
        {
            Cell = cell;
            ParameterName = parameterName;
            DbType = dbType;
        }

        public Cell Cell { get; }
        public string ParameterName { get; }
        public DbType DbType { get; }

        public void AddParameter(IDbCommand command, StepValues values)
        {
            var value = values.Get(Cell.Key);
            var param = command.CreateParameter();
            param.DbType = DbType;
            param.ParameterName = ParameterName;

            param.Direction = Direction;
            if (Direction != ParameterDirection.Output)
            {
                param.Value = value;
            }

            command.Parameters.Add(param);

        }

        public bool IsChecked()
        {
            return Direction != ParameterDirection.Input;
        }

        public CellResult ToResult(StepValues values, IDbCommand cmd)
        {
            var actual = cmd.Parameters[ParameterName].As<IDbDataParameter>();

            return Cell.Check(values, actual);
        }
    }
}