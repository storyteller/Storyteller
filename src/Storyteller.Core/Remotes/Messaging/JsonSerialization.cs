using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Storyteller.Core.Remotes.Messaging
{
    public static class JsonSerialization
    {
        public static string ToJson(object o, bool indentedFormatting = false)
        {
            var serializer = new JsonSerializer { TypeNameHandling = TypeNameHandling.All };

            if (indentedFormatting)
            {
                serializer.Formatting = Formatting.Indented;
            }

            var writer = new StringWriter();
            serializer.Serialize(writer, o);

            return writer.ToString();
        }

        public static string ToCleanJson(object o)
        {
            var serializer = new JsonSerializer { TypeNameHandling = TypeNameHandling.None };

            var writer = new StringWriter();
            serializer.Serialize(writer, o);

            return writer.ToString();
        }

        public static string FormatJson(this string json)
        {
            return JToken.Parse(json).ToString(Formatting.Indented);
        }

        public static T Deserialize<T>(string json)
        {
            var serializer = new JsonSerializer { TypeNameHandling = TypeNameHandling.All };
            return serializer.Deserialize<T>(new JsonTextReader(new StringReader(json)));
        }

        public static object Deserialize(string json)
        {
            // TODO -- needs to be able to work out the type from JToken

            var serializer = new JsonSerializer { TypeNameHandling = TypeNameHandling.All };
            return serializer.Deserialize(new JsonTextReader(new StringReader(json)));
        }
    }
}