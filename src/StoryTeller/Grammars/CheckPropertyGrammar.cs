using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Baseline;
using Baseline.Expressions;
using StoryTeller.Conversion;
using StoryTeller.Grammars.API;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars
{
    public class CheckPropertyGrammar : LineGrammar
    {
        private Cell _cell;

        public CheckPropertyGrammar(MemberInfo[] members)
        {
            Members = members;
            CellModifications = new CellModifications();
            Key = members.Select(x => x.Name).Join(".");
        }

        public CheckPropertyGrammar(MemberInfo member) : this(new MemberInfo[] { member})
        {
        }

        public MemberInfo[] Members { get; set; }

        public CellModifications CellModifications { get; private set; }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var actual = context.State.CurrentObject.GetValue(Members);   
            var expected = values.Get(_cell.Key);

            if (expected.Equals(actual))
            {
                yield return CellResult.Success(_cell.Key);
            }
            else
            {
                yield return CellResult.Failure(_cell.Key, actual.ToString());
            }
        }

        protected override string format()
        {
            return $"{_cell.header} should be {{{_cell.Key}}}";
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            var key = Members.Select(x => x.Name).Join(".");

            _cell = new Cell(cellHandling, key, Members.Last().GetMemberType()) {header = key};

            CellModifications.Apply(_cell);

            return new[] {_cell};
        }




        public static CheckPropertyGrammar For<T>(Expression<Func<T, object>> expression)
        {
            var finder = new FindMembers();
            finder.Visit(expression);
            var members = finder.Members.ToArray();

            return new CheckPropertyGrammar(members);
        }


    }
}