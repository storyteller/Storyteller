using System;
using System.Collections.Generic;
using Baseline;
using Storyteller.RDBMS.CommandBuilders;
using StoryTeller;
using StoryTeller.Grammars.Sets;

namespace Storyteller.RDBMS.Sets
{
    public class RowFieldComparison : ObjectComparison<Dictionary<string, object>>
    {
        public static Func<ISpecContext, IEnumerable<Dictionary<string, object>>> ToSource(IField[] fields, DatabaseFixture fixture, IDbCommandBuilder builder)
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

                using (var reader = runner.ExecuteReader(cmd))
                {
                    return buffer.Read(reader);
                }
            };
        }

        private readonly IField[] _fields;

        public RowFieldComparison(DatabaseFixture fixture, IField[] fields, IDbCommandBuilder builder = null) : base(ToSource(fields, fixture, builder))
        {
            _fields = fields;
            AddMatches(fields);
        }
    }
}