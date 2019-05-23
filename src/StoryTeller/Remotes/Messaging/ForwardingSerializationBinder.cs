using System;
using System.Collections.Generic;
using Newtonsoft.Json.Serialization;
using StoryTeller.Model;

namespace StoryTeller.Remotes.Messaging
{
    public class ForwardingSerializationBinder : DefaultSerializationBinder
    {
        private readonly Dictionary<string, Type> _aliases = new Dictionary<string, Type>
        {
            {"System.Collections.Generic.List`1[[StoryTeller.Model.Node, Storyteller]], System.Private.CoreLib", typeof(List<Node>)},
            {"System.Collections.Generic.List`1[[StoryTeller.Model.Node, Storyteller]]", typeof(List<Node>)},
            {"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]]", typeof(Dictionary<string, string>)},
            {"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Boolean, System.Private.CoreLib]]", typeof(Dictionary<string, bool>)}
        };
        
        public override Type BindToType(string assemblyName, string typeName)
        {
            if (_aliases.TryGetValue(typeName, out var type)) return type;
            
            return base.BindToType(assemblyName, typeName);
        }
    }
}