using System;
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
            return new Cell(Conversions.Basic(), key, typeof(T));
        }

        public Cell(Conversions conversions, string key, Type type)
        {
            Type = type;
            Key = key;

            
        }

        [JsonIgnore]
        public Type Type;

        [JsonProperty("key")] public string Key;

        [JsonProperty("default")] public string default_value;
        
        public string editor;

        public Option[] options;

        public Action<Step, StepValues> ConvertValues { get; private set; } 
    }
}