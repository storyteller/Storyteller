using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Model;

namespace Storyteller.RDBMS.Sets
{
    public class BufferedReader
    {
        private readonly IList<IField> _fields = new List<IField>();

        public BufferedReader(IEnumerable<IField> fields)
        {
            _fields.AddRange(fields);
        }

        public IField[] Fields => _fields.ToArray();

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
}