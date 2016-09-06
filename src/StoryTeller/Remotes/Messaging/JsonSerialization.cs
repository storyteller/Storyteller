using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using StoryTeller.Messages;

namespace StoryTeller.Remotes.Messaging
{
    public static class JsonSerialization
    {
        private static readonly LightweightCache<string, Type> _messageTypes = new LightweightCache<string, Type>(); 

        static JsonSerialization()
        {
            var types = typeof (JsonSerialization).GetTypeInfo().Assembly.GetExportedTypes()
                .Where(x => x.IsConcreteWithDefaultCtor() && x.IsConcreteTypeOf<ClientMessage>());

            types.Each(x =>
            {
                var message = Activator.CreateInstance(x).As<ClientMessage>();
                _messageTypes[message.Type] = x;
            });
        }

        public static Type TypeForJson(string json)
        {
            var token = JToken.Parse(json);
            var type = token.Value<string>("type");

            return (!type.IsEmpty() && _messageTypes.Has(type))
                ?_messageTypes[type]
                : null;
        }

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

        public static string ToIndentedJson(object o)
        {
            var serializer = new JsonSerializer { TypeNameHandling = TypeNameHandling.None, Formatting = Formatting.Indented};

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

        public static object DeserializeMessage(string json)
        {
            var serializer = new JsonSerializer { TypeNameHandling = TypeNameHandling.All };
            var jsonTextReader = new JsonTextReader(new StringReader(json));

            var messageType = TypeForJson(json);

            return messageType != null 
                ? serializer.Deserialize(jsonTextReader, messageType) 
                : serializer.Deserialize(jsonTextReader);
        }
    }
}
