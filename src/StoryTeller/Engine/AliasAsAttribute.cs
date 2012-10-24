using System;

namespace StoryTeller.Engine
{
    public interface ICellModifier
    {
        void Modify(Cell cell);
    }

    [AttributeUsage(AttributeTargets.ReturnValue | AttributeTargets.Method | AttributeTargets.Class,
        AllowMultiple = false, Inherited = false)]
    public class AliasAsAttribute : Attribute
    {
        private readonly string _alias;

        public AliasAsAttribute(string alias)
        {
            _alias = alias;
        }

        public string Alias { get { return _alias; } }
    }

    [AttributeUsage(AttributeTargets.ReturnValue | AttributeTargets.Parameter | AttributeTargets.Property,
        AllowMultiple = false, Inherited = false)
    ]
    public class DefaultAttribute : Attribute, ICellModifier
    {
        private readonly string _value;

        public DefaultAttribute(string value)
        {
            _value = value;
        }

        public string Value
        {
            get
            {
                if (_value == "GUID") return Guid.NewGuid().ToString();


                return _value;
            }
        }

        #region ICellModifier Members

        public void Modify(Cell cell)
        {
            cell.DefaultValue = Value;
        }

        #endregion
    }

    [AttributeUsage(AttributeTargets.ReturnValue | AttributeTargets.Parameter | AttributeTargets.Property,
        AllowMultiple = false, Inherited = false)]
    public class HeaderAttribute : Attribute, ICellModifier
    {
        private readonly string _header;

        public HeaderAttribute(string header)
        {
            _header = header;
        }

        #region ICellModifier Members

        public void Modify(Cell cell)
        {
            cell.Header = _header;
        }

        #endregion
    }
}