using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using FubuCore.Reflection;

namespace StoryTeller.Engine.Sets
{
    public class ObjectComparer<T> : ISetComparer
    {
        private readonly IList<ISetColumn> _properties = new List<ISetColumn>();

        public IEnumerable<ISetColumn> Columns { get { return _properties; } }

        public ObjectComparer<T> MatchOn(Expression<Func<T, object>> expression)
        {
            var accessor = expression.ToAccessor();
            var match = new PropertyMatch(accessor);

            _properties.Add(match);

            return this;
        }
    }
}