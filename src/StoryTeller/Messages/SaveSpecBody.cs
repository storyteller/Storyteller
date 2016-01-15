using System;
using StoryTeller.Model;

namespace StoryTeller.Messages
{
    public class SaveSpecBody : ClientMessage
    {
        public SaveSpecBody() : base("save-spec-body")
        {
        }

        public string id;
        public string revision;
        public Specification spec;
        
    }

}