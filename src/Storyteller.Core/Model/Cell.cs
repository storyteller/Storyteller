using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using FubuCore.Reflection;
using Newtonsoft.Json;
using Storyteller.Core.Conversion;
using Storyteller.Core.Results;

namespace Storyteller.Core.Model
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

        public static Cell For(CellHandling cells, ParameterInfo parameter)
        {
            var cell = new Cell(cells, parameter.Name, parameter.ParameterType);
            parameter.ForAttribute<ModifyCellAttribute>(x => x.Modify(cell));

            return cell;
        }

        // TODO -- need this to return a grammar error somehow if a converter
        public Cell(CellHandling cells, string key, Type type)
        {
            Type = type;
            Key = key;

            _equivalence = cells.Equivalence.CheckerFor(type);

            var converter = cells.Conversions.FindConverter(type);
            if (converter == null)
            {
                var message = "No converter found for type " + type.FullName;
                _conversion = (step, values) => values.LogError(Key, message);
            }
            else
            {
                // TODO -- will also need to deal with NULL and EMPTY
                // TODO -- deal with defaults
                _conversion = (step, values) =>
                {
                    try
                    {
                        var converted = converter(step.Values[Key]);
                        values.Store(Key, converted);
                    }
                    catch (FormatException)
                    {
                        values.LogError(Key, "Invalid Format");
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

        private readonly Action<Step, StepValues> _conversion;

        [JsonIgnore]
        public Type Type;

        [JsonProperty("key")] public string Key;

        [JsonProperty("default")] public string DefaultValue;

        public bool output;

        public string editor;

        public Option[] options;

        private readonly Func<object, object, bool> _equivalence;

        // TODO -- needs to use default values if the raw value is null
        public void ConvertValues(Step step, StepValues values)
        {
            _conversion(step, values);
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
            var values = new StepValues(step.Id);
            cells.Each(x => x.ConvertValues(step, values));

            return values;
        }
    }
}