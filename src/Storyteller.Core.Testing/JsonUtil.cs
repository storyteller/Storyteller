using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Storyteller.Core.Testing
{
    public static class JsonUtil
    {
        public static string ToJson<T>(T model)
        {
            var serializer = new JsonSerializer();

            var stringWriter = new StringWriter();
            JsonWriter writer = new JsonTextWriter(stringWriter);

            serializer.Serialize(writer, model);

            return stringWriter.ToString();
        }

        

        public static string FormatJson(this string json)
        {
            return JToken.Parse(json).ToString();
        }
    }
}