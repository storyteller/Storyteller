using System;
using Newtonsoft.Json.Linq;
using StoryTeller.Domain;

namespace StoryTeller.Persistence
{
    public class JsonNode : INode
    {
        private const string CHILDREN = "children";
        private const string INNER_TEXT = "x_InnerText";
        private readonly JObject _object;
        private JArray _children;

        public JsonNode(string nodeName)
        {
            _object = new JObject();
            this["x_Name"] = nodeName;
            createChildren();
        }

        public JsonNode(JObject jObject)
        {
            _object = jObject;
            _children = _object[CHILDREN] as JArray;

            if (_children == null)
            {
                createChildren();
            }
        }

        private JObject Object { get { return _object; } }

        #region INode Members

        public string InnerText { get { return this[INNER_TEXT]; } set { this[INNER_TEXT] = value; } }

        public string Name { get { return this["x_Name"]; } }

        public void AddComment(string description)
        {
            // Just don't care enough to do it
        }

        public INode AddChild(string name)
        {
            var child = new JsonNode(name);
            _children.Add(child.Object);


            return child;
        }

        public INode With(Action<INode> action)
        {
            action(this);
            return this;
        }

        public INode WithFormattedText(string text)
        {
            this[INNER_TEXT] = text;
            return this;
        }

        public void ForEachChild(Action<INode> action)
        {
            foreach (JObject child in _children)
            {
                var node = new JsonNode(child);
                action(node);
            }
        }

        public bool IsTags()
        {
            return Name == Tags.TAGS;
        }

        public bool IsComment()
        {
            return Name == Comment.COMMENT;
        }

        public void ForEachAttribute(Action<string, string> action)
        {
            foreach (var pair in _object)
            {
                if (pair.Key.StartsWith("x_") || pair.Key == CHILDREN) continue;

                action(pair.Key, pair.Value.Value<string>());
            }
        }

        public string this[string attName]
        {
            get
            {
                JToken property = _object[attName];
                return property == null ? string.Empty : property.Value<string>();
            }
            set { _object[attName] = new JValue(value); }
        }

        #endregion

        private void createChildren()
        {
            _children = new JArray();
            _object.Add(CHILDREN, _children);
        }

        public string ToJson()
        {
            return _object.ToString();
        }
    }
}