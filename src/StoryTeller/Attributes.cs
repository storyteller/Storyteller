using System;
using StoryTeller.Model;

namespace StoryTeller
{
    public abstract class ModifyCellAttribute : Attribute
    {
        public abstract void Modify(Cell cell);
    }

    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public class FormatAsAttribute : Attribute
    {
        private readonly string _format;

        public FormatAsAttribute(string format)
        {
            _format = format;
        }

        public string Format { get { return _format; } }
    }

    [AttributeUsage(AttributeTargets.ReturnValue | AttributeTargets.Method, Inherited = false)]
    public class AliasAsAttribute : ModifyCellAttribute
    {
        private readonly string _alias;

        public AliasAsAttribute(string alias)
        {
            _alias = alias;
        }

        public override void Modify(Cell cell)
        {
            cell.Key = _alias;
        }

        public string Alias { get { return _alias; } }
    }

    [AttributeUsage(AttributeTargets.ReturnValue | AttributeTargets.Parameter | AttributeTargets.Property,
        AllowMultiple = false, Inherited = false)]
    public class HeaderAttribute : ModifyCellAttribute
    {
        private readonly string _header;

        public HeaderAttribute(string header)
        {
            _header = header;
        }

        public override void Modify(Cell cell)
        {
            cell.header = _header;
        }
    }

    [AttributeUsage(AttributeTargets.ReturnValue | AttributeTargets.Parameter | AttributeTargets.Property,
        AllowMultiple = false, Inherited = false)
    ]
    public class DefaultAttribute : ModifyCellAttribute
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

        public override void Modify(Cell cell)
        {
            cell.DefaultValue = _value;
        }


    }

    [AttributeUsage(AttributeTargets.ReturnValue | AttributeTargets.Parameter | AttributeTargets.Property,
        AllowMultiple = false, Inherited = false)
    ]
    public class EditorAttribute : ModifyCellAttribute
    {
        private readonly string _editor;

        public EditorAttribute(string editor)
        {
            _editor = editor;
        }

        public string Editor
        {
            get
            {
                return _editor;
            }
        }

        public override void Modify(Cell cell)
        {
            cell.editor = _editor;
        }


    }

    [AttributeUsage(AttributeTargets.Parameter | AttributeTargets.Property | AttributeTargets.ReturnValue)]
    public class SelectionValuesAttribute : ModifyCellAttribute
    {
        private readonly string[] _values;

        public SelectionValuesAttribute(Type enumType)
            : this(Enum.GetNames(enumType))
        {
        }

        public SelectionValuesAttribute(params string[] values)
        {
            if (values.Length == 0)
            {
                throw new ArgumentOutOfRangeException(
                    "At least one value needs to be supplied in the constructor function");
            }
            _values = values;
        }

        public override void Modify(Cell cell)
        {
            cell.editor = "select";
            cell.options = Option.For(_values);
        }
    }

    public class SelectionListAttribute : ModifyCellAttribute
    {
        private readonly string _listName;

        public SelectionListAttribute(string listName)
        {
            _listName = listName;
        }

        public override void Modify(Cell cell)
        {
            cell.editor = "select";
            cell.OptionListName = _listName;
        }
    }
}