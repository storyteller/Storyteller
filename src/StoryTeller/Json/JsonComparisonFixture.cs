using System;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Tables;

namespace StoryTeller.Json
{
    public static class JsonStateExtensions
    {
        public static void StoreJson(this State state, string json)
        {
            var jobject = JObject.Parse(json);
            state.Store(jobject);
        }
    }

    public class JsonComparisonFixture : Fixture
    {
        public JObject JObject => Context.State.Retrieve<JObject>();

        public JsonSerializerSettings JsonSerializerSettings { get; set; } = new JsonSerializerSettings();

        protected internal T deserialize<T>(string path)
        {
            var token = JObject.SelectToken(path);
            return deserialize<T>(token);
        }

        protected internal T deserialize<T>(JToken token)
        {
            return token.ToObject<T>(JsonSerializer.Create(JsonSerializerSettings));
        }

        [ExposeAsTable("Check Values within the JSON Document")]
        [return: Header("Value")]
        public string CheckValues([Header("Json Path")]string path)
        {
            return JObject.SelectToken(path)?.ToString();
        }

        /// <summary>
        /// Check a single value inside of the Json structure by the type
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="path"></param>
        /// <param name="format"></param>
        /// <returns></returns>
        protected CheckJsonGrammar<T> CheckValue<T>(string path, string format)
        {
            return new CheckJsonGrammar<T>(this, path, path).Format(format);
        }


        protected internal void assertDeepJsonEquals(string path, string json)
        {
            var actual = JObject.SelectToken(path);
            var expected = JToken.Parse(json);

            if (!JToken.DeepEquals(expected, actual))
            {
                StoryTellerAssert.Fail($@"
Expected:

{expected.ToString(Formatting.Indented)}

but was:

{actual.ToString(Formatting.Indented)}

");
            }
        }

        protected JsonValueCheckExpression VerifyChildElementSet(string path)
        {
            return new JsonValueCheckExpression(path, this);
        }


        public class JsonValueCheckExpression
        {
            private readonly string _path;
            private readonly JsonComparisonFixture _parent;
            private string _title;

            public JsonValueCheckExpression(string path, JsonComparisonFixture parent)
            {
                _path = path;
                _parent = parent;
            }

            public JsonValueCheckExpression Titled(string title)
            {
                _title = title;
                return this;
            }

            public IGrammar Compare(Action<JsonValueChecks> configure)
            {
                var checks = new JsonValueChecks(_path, _title, _parent);
                configure(checks);

                return checks.ToGrammar();
            }
        }
    }

}