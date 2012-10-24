using System;
using System.Collections.Generic;

namespace StoryTeller.Engine
{
    [AttributeUsage(AttributeTargets.Parameter | AttributeTargets.Property | AttributeTargets.ReturnValue)]
    public class SelectionValuesAttribute : Attribute
    {
        private readonly string[] _values;

        public SelectionValuesAttribute(params string[] values)
        {
            if (values.Length == 0)
            {
                throw new ArgumentOutOfRangeException(
                    "At least one value needs to be supplied in the constructor function");
            }
            _values = values;
        }


        public void SetList(Fixture fixture, Cell cell)
        {
            cell.SelectionValues = _values.Length == 1
                                       ? fixture.SelectionValuesFor(_values[0])
                                       : new List<string>(_values);
        }
    }
}