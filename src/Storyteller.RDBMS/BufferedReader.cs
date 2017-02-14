using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using Baseline;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model;

namespace Storyteller.RDBMS
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

        public void Execute(IDbCommand command, CommandRunner runner, StepValues values, ISpecContext context)
        {
            using (var reader = runner.ExecuteReader(command))
            {
                var dicts = _reader.Read(reader);
                context.State.CurrentObject = dicts;
            }
        }
    }

    public class BufferedReader
    {
        private readonly IList<IField> _fields = new List<IField>();

        public void AddField<T>(string name, int ordinal = -1)
        {
            var field = new FieldById<T>(name, ordinal);
            _fields.Add(field);
        }

        public IList<Dictionary<string, object>> Read(DbDataReader reader)
        {
            var list = new List<Dictionary<string, object>>();

            while (reader.Read())
            {
                var dict = new Dictionary<string, object>();
                foreach (var field in _fields)
                {
                    field.Read(dict, reader);
                }

                list.Add(dict);
            }


            return list;
        }


    }

    public interface IField : IColumnMatch
    {
        void Read(Dictionary<string, object> dict, DbDataReader reader);
    }

    public class FieldById<T> : IField
    {
        private int _location;
        public string Name { get; }

        public FieldById(string name, int location = -1)
        {
            _location = location;
            Name = name;
        }

        public void Read(Dictionary<string, object> dict, DbDataReader reader)
        {
            if (_location < 0)
            {
                _location = reader.GetOrdinal(Name);
            }

            var value = reader.GetFieldValue<T>(_location);
            dict.Add(Name, value);
        }

        public object GetValue(object actual)
        {
            return actual.As<Dictionary<string, object>>()[Name];
        }

        public Cell BuildCell(CellHandling handling, Fixture fixture)
        {
            return new Cell(handling, Name, typeof(T));
        }
    }
}