using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore.Conversion;
using FubuCore.Reflection;
using FubuCore.Util;
using StoryTeller.Domain;
using StoryTeller.Engine.Reflection;
using FubuCore;

namespace StoryTeller.Engine
{
    public enum CellStatus
    {
        Exception,
        Input,
        Success,
        Failure
    }


    public interface ICell
    {
        [Obsolete("Move this out of Cell")]
        string GetDisplay(IStep step);

        void ReadArgument(ITestContext context, IStep step, Action<object> continuation);
    }



    [Serializable]
    public class Cell : ICell
    {
        private readonly Type _type;
        private string _defaultValue;
        private string _heading;
        private string _key;
        [NonSerialized] private SelectionValuesAttribute _selectionAttribute;
        private IList<string> _selectionValues = new List<string>();
        private readonly Cache<string, string> _tags = new Cache<string,string>(key => null);
        

        public Cell(ParameterInfo parameter)
        {
            _key = parameter.Name;
            _type = parameter.ParameterType;


            if (parameter.Name.IsEmpty())
            {
                _key = "returnValue";
                MethodExtensions.ForAttribute<AliasAsAttribute>(parameter, att => _key = att.Alias);
                IsResult = true;
            }

            readAttributes(parameter);
        }

        

        public Cell(PropertyInfo property)
        {
            _key = property.Name;
            _type = property.PropertyType;

            IsResult = property.CanRead;

            readAttributes(property);
        }

        public Cell(Accessor accessor) : this(accessor.InnerProperty)
        {
            _key = accessor.Name;
        }

        public Cell(string key, Type type)
        {
            _key = key;
            _type = type;

            readType();
        }

        public Cell(string key, Type type, string defaultValue)
            : this(key, type)
        {
            _defaultValue = defaultValue;
        }


        public Indexer<string, string> Tags
        {
            get
            {
                return new Indexer<string, string>(key => _tags[key], (key, value) => _tags[key] = value);
            }
        }

        public IList<string> SelectionValues { get { return _selectionValues; } set { _selectionValues = value; } }

        public string Key { get { return _key; } set { _key = value; } }

        public Type Type { get { return _type; } }

        public string DefaultValue { get { return _defaultValue; } set { _defaultValue = value; } }

        public bool IsResult { get; set; }
        public string Header { get { return _heading ?? _key; } set { _heading = value; } }
        public string OriginalTypeName { get; set; }

        #region ICell Members

        public string GetDisplay(IStep step)
        {
            if (step == null) throw new ArgumentNullException("step");

            if (!step.Has(_key)) return _defaultValue ?? "MISSING";

            return step.Get(_key) ?? _defaultValue;
        }

        // "continuation" is only called when and if the Cell class can build/locate
        // the correct object
        public void ReadArgument(ITestContext context, IStep step, Action<object> continuation)
        {
            if (context == null) throw new ArgumentNullException("context");

            if (context.Finder.CanBeParsed(_type))
            {
                readArgument(continuation, step, context);
            }
            else
            {
                continuation(context.Retrieve(_type));
            }
        }

        #endregion

        private void readType()
        {
            if (_type.IsEnum)
            {
                _selectionValues = new List<string>(Enum.GetNames(_type));
            }
        }

        private void readAttributes(ICustomAttributeProvider parameter)
        {
            parameter.ForAttributes<ICellModifier>(x => x.Modify(this));
            MethodExtensions.ForAttribute<SelectionValuesAttribute>(parameter, att => _selectionAttribute = att);

            readType();
        }

        public static Cell For<T>(string key)
        {
            return new Cell(key, typeof (T));
        }

        public static Cell CreateFor<T>(Expression<Action<T>> expression, int index)
        {
            ParameterInfo parameter = ReflectionHelper.GetMethod(expression).GetParameters()[index];
            return new Cell(parameter);
        }

        public bool Equals(Cell obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj._key, _key) && Equals(obj._type, _type);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (Cell)) return false;
            return Equals((Cell) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((_key != null ? _key.GetHashCode() : 0)*397) ^ (_type != null ? _type.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Key: {0}, Type: {1}", _key, _type);
        }

        public void RecordActual(object actual, IStep step, ITestContext context)
        {
            var results = context.ResultsFor(step);
            results.SetActual(_key, actual);

            string rawExpected = GetRawExpected(step);
            

            if (rawExpected == null)
            {
                context.IncrementSyntaxErrors();
                results.MarkMissingValue(_key);
                return;
            }

            verifyTheActualValue(step, actual, rawExpected, context);
        }

        public string GetRawExpected(IStep step)
        {
            if (!IsBooleanResult())
            {
                return step.Get(_key);
            }

            return step.Has(_key) ? step.Get(_key) : true.ToString();
        }


        private void verifyTheActualValue(IStep step, object actual, string rawExpected, ITestContext context)
        {
            try
            {
                object expected = context.Finder.FromString(rawExpected, _type);
                checkExpectedAgainstActual(expected, actual, context, step);
            }
            catch (Exception e)
            {
                context.ResultsFor(step).MarkExceptionField(e.ToString(), _key);
                context.IncrementSyntaxErrors();
            }
        }

        private void checkExpectedAgainstActual(object expected, object actual, ITestContext context, IStep step)
        {
            if (context.Matches(expected, actual))
            {
                context.IncrementRights();
            }
            else
            {
                context.ResultsFor(step).MarkFailure(_key);
                context.IncrementWrongs();
            }
        }

        private void readArgument(Action<object> continuation, IStep step, ITestContext context)
        {
            var results = context.ResultsFor(step);

            string rawValue = step.Get(_key) ?? _defaultValue;
            if (rawValue.IsEmpty())
            {
                if (IsBooleanResult())
                {
                    step.Set(_key, true);
                    continuation(true);
                    return;
                }

                results.MarkMissingValue(_key);
                context.IncrementSyntaxErrors();
                return;
            }

            try
            {
                object value = context.Finder.FromString(rawValue, _type);
                continuation(value);
            } // TODO -- eliminate duplication
            catch (FormatException)
            {
                context.IncrementSyntaxErrors();
                results.MarkFormatFailure(_key);
            }
            catch (Exception ex)
            {
                if (ex.InnerException is FormatException)
                {
                    context.IncrementSyntaxErrors();
                    results.MarkFormatFailure(_key);
                }
            }
        }

        public string SampleValue()
        {
            return _defaultValue ?? "****";
        }


        public bool IsBooleanResult()
        {
            return IsResult && _type == typeof (bool);
        }


        public Cell ToInputCell()
        {
            if (_type.IsSimple() || _type == typeof (TimeSpan)) return this;

            var example = new Cell(Key, typeof (string), DefaultValue)
            {
                OriginalTypeName = _type.AssemblyQualifiedName,
                Header = Header,
                IsResult = IsResult
            };

            return example;
        }

        public void ReadActual(ITestContext context, IStep step)
        {
            ReadArgument(context, step, x => context.ResultsFor(step).SetActual(_key, x));
        }

        public static Cell ResultFor<T>(string key)
        {
            return new Cell(key, typeof (T))
            {
                IsResult = true
            };
        }

        public bool HasDefault()
        {
            return IsBooleanResult() || DefaultValue.IsNotEmpty();
        }

        public void ReadLists(Fixture fixture)
        {
            if (_selectionAttribute == null) return;

            _selectionAttribute.SetList(fixture, this);
        }
    }
}