using System.Data;
using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace Storyteller.RDBMS
{
    public abstract class ParameterCell
    {
        public ParameterDirection Direction { get; set; }

        protected ParameterCell(Cell cell, string parameterName, ParameterDirection direction)
        {
            Cell = cell;
            ParameterName = parameterName;
            Direction = direction;
        }

        public Cell Cell { get; }
        public string ParameterName { get; }

        public void AddParameter(IDbCommand command, StepValues values)
        {
            var value = values.Get(Cell.Key);
            var param = command.CreateParameter();

            configureParameter(param);

            param.ParameterName = ParameterName;
            param.Direction = Direction;

            if (Direction != ParameterDirection.Output)
            {
                param.Value = value;
            }

            command.Parameters.Add(param);

        }

        protected abstract void configureParameter(IDbDataParameter param);

        public bool IsChecked()
        {
            return Direction != ParameterDirection.Input;
        }

        public CellResult ToResult(StepValues values, IDbCommand cmd)
        {
            var actual = cmd.Parameters[ParameterName].As<IDbDataParameter>();

            return Cell.Check(values, actual);
        }

        public string FormattedName()
        {
            return "{" + Cell.Key + "}";
        }



        public abstract string ReplaceWithCellInput(string format);
    }
}