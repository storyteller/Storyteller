using System.Collections.Generic;
using System.Data.Common;
using Baseline;
using StoryTeller;
using StoryTeller.Model;

namespace Storyteller.RDBMS.Sets
{
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