using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FubuCore;
using FubuCore.Util;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Storyteller.Core.Messages;

namespace Storyteller.Core.Remotes.Messaging
{
    public static class JsonSerialization
    {
        private static readonly Cache<string, Type> _messageTypes = new Cache<string, Type>(); 

        static JsonSerialization()
        {
            var types = typeof (JsonSerialization).Assembly.GetExportedTypes()
                .Where(x => x.IsConcreteWithDefaultCtor() && x.IsConcreteTypeOf<ClientMessage>());

            types.Each(x =>
            {
                var message = Activator.CreateInstance(x).As<ClientMessage>();
                _messageTypes[message.Type] = x;
            });
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

            var token = JToken.Parse(json);
            var type = token.Value<string>("type");

            if (type.IsNotEmpty())
            {
                var messageType = _messageTypes[type];
                return serializer.Deserialize(jsonTextReader, messageType);
            }

            
            return serializer.Deserialize(jsonTextReader);
        }
    }
}