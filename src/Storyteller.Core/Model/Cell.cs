using System;
using System.Reflection;
using FubuCore.Reflection;
using Newtonsoft.Json;
using Storyteller.Core.Conversion;

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

            var converter = cells.Conversions.FindConverter(type);
            if (converter == null)
            {
                var message = "No converter found for type " + type.FullName;
                _conversion = (step, values) => values.LogError(Key, message);
            }
            else
            {
                // TODO -- will also need to deal with NULL and EMPTY
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

        private readonly Action<Step, StepValues> _conversion;

        [JsonIgnore]
        public Type Type;

        [JsonProperty("key")] public string Key;

        [JsonProperty("default")] public string default_value;

        public bool output;

        public string editor;

        public Option[] options;

        public void ConvertValues(Step step, StepValues values)
        {
            _conversion(step, values);
        }

        
    }
}