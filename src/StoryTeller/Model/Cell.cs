using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;
using Baseline;
using Baseline.Reflection;
using Newtonsoft.Json;
using StoryTeller.Conversion;
using StoryTeller.Results;

namespace StoryTeller.Model
{
    public class Cell : ICellExpression
    {
        private readonly Func<object, object, bool> _equivalence;

        private Action<Step, StepValues> _conversion;

        [JsonProperty("default")] public string DefaultValue;

        public string editor;

        public string header;

        [JsonProperty("key")] public string Key;

        public Option[] options;

        public bool result;

        [JsonIgnore] public Type Type;

        // For serialization purposes
        public Cell()
        {
        }

        public Cell(CellHandling cells, string key, Type type)
        {
            Type = type;
            Key = key;

            if (type != null)
            {
                _equivalence = cells.Equivalence.CheckerFor(type);

                selectConverter(cells, type);

                if (editor.IsEmpty())
                {
                    selectEditor(type);
                }
            }


        }

        [JsonIgnore]
        public int Position { get; private set; }

        [JsonIgnore]
        public string OptionListName { get; set; }

        ICellExpression ICellExpression.Header(string header)
        {
            this.header = header;
            return this;
        }

        ICellExpression ICellExpression.Editor(string editor)
        {
            this.editor = editor;
            return this;
        }

        ICellExpression ICellExpression.DefaultValue(string @default)
        {
            DefaultValue = @default;
            return this;
        }

        ICellExpression ICellExpression.SelectionValues(params string[] values)
        {
            editor = "select";

            options = values.Select(x => new Option {display = x, value = x}).ToArray();
            return this;
        }

        ICellExpression ICellExpression.SelectionOptions(params Option[] options)
        {
            editor = "select";

            this.options = options;
            return this;
        }

        ICellExpression ICellExpression.SelectionList(string listName)
        {
            editor = "select";
            OptionListName = listName;
            return this;
        }

        /// <summary>
        ///     Just for testing data setup
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="key"></param>
        /// <returns></returns>
        public static Cell For<T>(string key)
        {
            return new Cell(CellHandling.Basic(), key, typeof(T));
        }

        public static Cell For<T>(Expression<Func<T, object>> expression)
        {
            return For(CellHandling.Basic(), expression.ToAccessor(), new Fixture());
        }

        public static Cell For(CellHandling cells, ParameterInfo parameter, Fixture fixture)
        {
            var isOutput = false;
            var type = parameter.ParameterType;
            if (parameter.IsOut)
            {
                type = type.GetElementType();
                isOutput = true;
            }

            if (type.Closes(typeof(Task<>)))
            {
                type = type.GetGenericArguments().Single();
            }

            var cell = new Cell(cells, parameter.Name, type) {result = isOutput, Position = parameter.Position};

            parameter.ForAttribute<ModifyCellAttribute>(x => x.Modify(cell));

            if (parameter.HasDefaultValue)
            {
                cell.DefaultValue = parameter.DefaultValue?.ToString() ?? "NULL";
            }


            cell.readLists(cells, fixture);

            return cell;
        }

        public static Cell For(CellHandling cells, PropertyInfo property, Fixture fixture)
        {
            var cell = new Cell(cells, property.Name, property.PropertyType);
            property.ForAttribute<ModifyCellAttribute>(x => x.Modify(cell));

            cell.readLists(cells, fixture);

            return cell;
        }

        private void readLists(CellHandling cellHandling, Fixture fixture)
        {
            if (OptionListName.IsEmpty()) return;

            if (fixture.Lists.Has(OptionListName))
            {
                options = fixture.Lists[OptionListName].Options;
            }
            else
            {
                options = cellHandling.Lists[OptionListName].Options;
            }
        }

        public static Cell For(CellHandling cells, Accessor accessor, Fixture fixture)
        {
            var cell = new Cell(cells, accessor.Name, accessor.PropertyType);
            accessor.ForAttribute<ModifyCellAttribute>(x => x.Modify(cell));

            cell.readLists(cells, fixture);

            return cell;
        }

        private void selectEditor(Type type)
        {
            if (type == typeof(bool))
            {
                editor = "boolean";
                DefaultValue = false.ToString();
            }
            else if (type.GetTypeInfo().IsEnum)
            {
                editor = "select";
                options = Option.For(Enum.GetNames(type));
            }
        }

        private void selectConverter(CellHandling cells, Type type)
        {
            var converter = cells.Conversions.FindConverter(type);
            if (converter != null)
            {
                useConverter(converter);
                return;
            }

            var runtime = cells.RuntimeConvertors.FirstOrDefault(x => x.Matches(type));
            if (runtime != null)
            {
                useRuntimeConversion(runtime);
                return;
            }


            var message = "No converter found for type " + type.FullName;
            _conversion = (step, values) => values.LogError(Key, message);
        }

        private void toConversion(Action<string, Step, StepValues> inner)
        {
            _conversion = (step, values) =>
            {
                if (!step.Values.ContainsKey(Key))
                    if (HasDefault())
                    {
                        step.Values.Add(Key, DefaultValue);
                    }
                    else
                    {
                        var result = new CellResult(Key, ResultStatus.missing);
                        values.Errors.Add(result);
                        return;
                    }

                var rawValue = step.Values[Key];

                inner(rawValue, step, values);
            };
        }

        private void useRuntimeConversion(IRuntimeConverter runtime)
        {
            toConversion((rawValue, step, values) =>
            {
                if (rawValue == "NULL")
                    values.Store(Key, null);
                else
                    values.RegisterDelayedConversion(Key, rawValue, runtime);
            });
        }

        private void useConverter(Func<string, object> converter)
        {
            toConversion((rawValue, step, values) =>
            {
                try
                {
                    var converted = rawValue == "NULL" ? null : converter(rawValue);
                    values.Store(Key, converted);
                }
                catch (FormatException)
                {
                    var result = new CellResult(Key, ResultStatus.invalid)
                    {
                        error = "Invalid Format"
                    };

                    values.Errors.Add(result);
                }
                catch (Exception ex)
                {
                    values.LogError(Key, ex);
                }
            });
        }


        public CellResult Check(StepValues values, object actual)
        {
            // TODO: Could be Predicate<T> -- figure out how to use this

            var expected = values.Get(Key);
            return _equivalence(expected, actual)
                ? CellResult.Success(Key)
                : CellResult.Failure(Key, ToStringDisplay(actual));
        }

        public string ToStringDisplay(object actual)
        {
            if (actual == null) return "NULL";

#pragma warning disable CS0252 // Possible unintended reference comparison; left hand side needs cast
            if (actual == string.Empty) return "EMPTY";
#pragma warning restore CS0252 // Possible unintended reference comparison; left hand side needs cast

            if (actual.GetType().IsArray)
            {
                var array = actual.As<Array>();
                if (array.Length == 0) return "EMPTY";

                return array.OfType<object>().Select(ToStringDisplay).Join(", ");
            }

            return actual.ToString();
        }

        public bool Matches(StepValues one, StepValues two)
        {
            if (!one.Has(Key) || !two.Has(Key)) return false;

            var v1 = one.Get(Key);
            var v2 = two.Get(Key);

            return _equivalence(v1, v2);
        }

        public void ConvertValues(Step step, StepValues values)
        {
            _conversion(step, values);
        }


        public bool HasDefault()
        {
            return DefaultValue.IsNotEmpty();
        }

        public Cell ApplyOverrides(Cell over)
        {
            if (over == null) return this;

            return new Cell(CellHandling.Basic(), Key, Type)
            {
                OptionListName = OptionListName,
                Position = Position,
                DefaultValue = over.DefaultValue.IsNotEmpty() ? over.DefaultValue : DefaultValue,
                result = over.result || result,
                editor = over.editor.IsNotEmpty() ? over.editor : editor,
                header = over.header.IsNotEmpty() ? over.header : header,
                options = over.options != null
                    ? over.options?.Select(x => x.Copy()).ToArray()
                    : options?.Select(x => x.Copy()).ToArray()
            };
        }

        public void AddSampleValue(Step step)
        {
            step.Values.Add(Key, HasDefault() ? DefaultValue : Key);
        }

        public string ToDeclaration()
        {
            return result ? $"out string {Key}" : $"string {Key}";
        }

        public string ShouldBeFormat()
        {
            return $", '{Key}' should be {{{Key}}}";
        }
    }

    // Tested through integration tests in the SetVerificationGrammar
    public static class CellExtensions
    {
        public static bool Matches(this IEnumerable<Cell> cells, StepValues one, StepValues two)
        {
            return cells.All(x => x.Matches(one, two));
        }

        public static StepValues ToStepValues(this IEnumerable<Cell> cells, Step step)
        {
            var values = new StepValues(step.id);
            cells.Each(x => x.ConvertValues(step, values));

            return values;
        }
    }
}