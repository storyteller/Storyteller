using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Baseline;
using Baseline.Expressions;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.API
{
    public class SetMemberGrammar : LineGrammar
    {
        public static SetMemberGrammar For<T>(Expression<Func<T, object>> expression)
        {
            var finder = new FindMembers();
            finder.Visit(expression);

            return new SetMemberGrammar(finder.Members.ToArray());
        }

        private Cell _cell;
        public MemberInfo[] Members { get; }

        public SetMemberGrammar(MemberInfo member) : this(new MemberInfo[] {member})
        {
            
        }

        public SetMemberGrammar(MemberInfo[] members)
        {
            Key = members.Select(x => x.Name).Join(".");
            Members = members;
            CellModifications = new CellModifications();
        }

        public MemberInfo Inner => Members.Last();

        public CellModifications CellModifications { get; }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            _cell = new Cell(cellHandling, Members.Select(x => x.Name).Join("."), Inner.GetMemberType());
            CellModifications.Apply(_cell);

            return new[] { _cell };
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var value = values.Get(_cell.Key);
            context.State.CurrentObject.SetValue(Members, value);

            return Enumerable.Empty<CellResult>();
        }

        protected override string format()
        {
            return $"{_cell.header} is {{{_cell.Key}}}";
        }
    }
}
