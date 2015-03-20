using System;
using Newtonsoft.Json.Linq;

namespace StoryTeller.Model.Persistence
{
    public class NodeConverter : JsonCreationConverter<Node>
    {
        protected override Node Create(Type objectType, JObject jsonObject)
        {
            JToken typeValue;
            jsonObject.TryGetValue("type", StringComparison.Ordinal, out typeValue);

            if (typeValue == null)
            {
                return new Step(jsonObject["key"].Value<string>());
            }

            switch (typeValue.Value<string>())
            {
                case "comment":
                    return new Comment();
                case "section":
                    return new Section(jsonObject["key"].Value<string>());
            }

            throw new Exception("Not recognized");
        }
    }
}