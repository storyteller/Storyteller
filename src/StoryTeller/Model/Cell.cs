using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore;
using FubuCore.Reflection;
using Newtonsoft.Json;
using StoryTeller.Conversion;
using StoryTeller.Results;

namespace StoryTeller.Model
{
    public class Cell
    {
        /// <summary>
        /// Just for testing data setup
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
            var cell = new Cell(cells, parameter.Name, parameter.ParameterType);
            parameter.ForAttribute<ModifyCellAttribute>(x => x.Modify(cell));

            cell.ReadLists(cells, fixture);

            return cell;
        }

        public static Cell For(CellHandling cells, PropertyInfo property, Fixture fixture)
        {
            var cell = new Cell(cells, property.Name, property.PropertyType);
            property.ForAttribute<ModifyCellAttribute>(x => x.Modify(cell));

            cell.ReadLists(cells, fixture);

            return cell;
        }

        private void ReadLists(CellHandling cellHandling, Fixture fixture)
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

            cell.ReadLists(cells, fixture);

            return cell;
        }

        // For serialization purposes
        public Cell()
        {
        }

        // TODO -- need this to return a grammar error somehow if a converter
        public Cell(CellHandling cells, string key, Type type)
        {
            Type = type;
            Key = key;

            _equivalence = cells.Equivalence.CheckerFor(type);

            selectConverter(cells, type);

            if (editor.IsEmpty())
            {
                selectEditor(type);
            }
            
        }

        private void selectEditor(Type type)
        {
            if (type == typeof (bool))
            {
                editor = "boolean";
            }
            else if (type.IsEnum)
            {
                editor = "select";
                options = Option.For(Enum.GetNames(type));
            }
        }

        private void selectConverter(CellHandling cells, Type type)
        {
            var converter = cells.Conversions.FindConverter(type);
            if (converter == null)
            {
                var message = "No converter found for type " + type.FullName;
                _conversion = (step, values) => values.LogError(Key, message);
            }
            else
            {
                _conversion = (step, values) =>
                {
                    if (!step.Values.ContainsKey(Key))
                    {
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
                    }

                    try
                    {
                        var rawValue = step.Values[Key];
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
                };
            }
        }


        public CellResult Check(StepValues values, object actual)
        {
            // TODO: Could be Predicate<T> -- figure out how to use this

            var expected = values.Get(Key);
            return _equivalence(expected, actual) ? 
                CellResult.Success(Key) : 
                CellResult.Failure(Key, actual.ToString());
        }

        public bool Matches(StepValues one, StepValues two)
        {
            if (!one.Has(Key) || !two.Has(Key)) return false;

            var v1 = one.Get(Key);
            var v2 = two.Get(Key);

            return _equivalence(v1, v2);
        }

        private Action<Step, StepValues> _conversion;

        [JsonIgnore]
        public Type Type;

        [JsonProperty("key")] public string Key;

        [JsonProperty("default")] public string DefaultValue;

        public string header;

        public bool output;

        public string editor;

        public Option[] options;

        private readonly Func<object, object, bool> _equivalence;

        // TODO -- needs to use default values if the raw value is null
        public void ConvertValues(Step step, StepValues values)
        {
            _conversion(step, values);
        }


        public bool HasDefault()
        {
            return DefaultValue.IsNotEmpty();
        }

        [JsonIgnore]
        public string OptionListName { get; set; }
    }

    public interface ICellExpression
    {
        ICellExpression Header(string header);
        ICellExpression Editor(string editor);
        ICellExpression DefaultValue(string @default);
        ICellExpression SelectionValues(params string[] values);
        ICellExpression SelectionValues(params Option[] options);
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