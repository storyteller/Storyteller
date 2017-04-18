using System;
using System.Data;
using System.Data.Common;

namespace StoryTeller.RDBMS
{
    public class ExternalParameter
    {
        private readonly string _name;
        private readonly Func<ISpecContext, object> _source;

        public ExternalParameter(string name, Func<ISpecContext, object> source)
        {
            _name = name;
            _source = source;
        }

        public void AddParameter(DbCommand command, ISpecContext context)
        {
            var value = _source(context);
            var param = command.CreateParameter();
            param.ParameterName = _name;
            param.Direction = ParameterDirection.Input;
            param.Value = value;

            command.Parameters.Add(param);
        }
    }
}