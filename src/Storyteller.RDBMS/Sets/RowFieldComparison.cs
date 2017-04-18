using System;
using System.Collections.Generic;
using Baseline;
using StoryTeller.RDBMS.CommandBuilders;
using StoryTeller.Grammars.Sets;

namespace StoryTeller.RDBMS.Sets
{
    public class RowFieldComparison : ObjectComparison<Dictionary<string, object>>
    {
        public static Func<ISpecContext, IEnumerable<Dictionary<string, object>>> ToSource(IField[] fields, DatabaseFixture fixture, IDbCommandBuilder builder, ExternalParameter[] externals)
        {
            if (builder == null)
            {
                return c => c.State.CurrentObject.As<IEnumerable<Dictionary<string, object>>>();
            }

            return c =>
            {
                var runner = fixture.Runner;
                var buffer = new BufferedReader(fields);

                var cmd = builder.BuildCommand(runner);

                foreach (var external in externals)
                {
                    external.AddParameter(cmd, c);
                }

                using (var reader = runner.ExecuteReader(cmd))
                {
                    return buffer.Read(reader);
                }
            };
        }

        private readonly IField[] _fields;

        public RowFieldComparison(DatabaseFixture fixture, IField[] fields, ExternalParameter[] externals, IDbCommandBuilder builder = null) : base(ToSource(fields, fixture, builder, externals))
        {
            _fields = fields;
            AddMatches(fields);
        }
    }
}
