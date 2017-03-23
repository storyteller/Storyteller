using System.Collections.Generic;
using System.Data.Common;
using StoryTeller.Grammars.Sets;

namespace StoryTeller.RDBMS.Sets
{
    public interface IField : IColumnMatch
    {
        void Read(Dictionary<string, object> dict, DbDataReader reader);
    }
}
