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

    /// <summary>
    /// Recipe for asserting on data and values within a Json document using
    /// Newtonsoft's JSONPath support
    /// </summary>
    public class JsonComparisonFixture : Fixture
    {
        /// <summary>
        /// Sets the Json document being verified by the current section
        /// </summary>
        /// <param name="json"></param>
        protected void StoreJson(string json)
        {
            Context.State.StoreJson(json);
        }

        /// <summary>
        /// Direct access to the parsed Json document being verified
        /// </summary>
        public JObject JObject => Context.State.Retrieve<JObject>();

        /// <summary>
        /// Modify or replace to reflect the Json serialization behavior
        /// of your application
        /// </summary>
        public JsonSerializerSettings JsonSerializerSettings { get; set; } = new JsonSerializerSettings();

        /// <summary>
        /// Deserializes the Json object at the JSONPath expression
        /// to type T. Do watch the JsonSerializerSettings on this operation
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="path"></param>
        /// <returns></returns>
        protected internal T deserialize<T>(string path)
        {
            var token = JObject.SelectToken(path);
            return deserialize<T>(token);
        }

        /// <summary>
        /// Deserializes a Json Token object
        /// to type T. Do watch the JsonSerializerSettings on this operation
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="token"></param>
        /// <returns></returns>
        protected internal T deserialize<T>(JToken token)
        {
            return token.ToObject<T>(JsonSerializer.Create(JsonSerializerSettings));
        }

        /// <summary>
        /// Verify a series of Json values in a table
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        [ExposeAsTable("Check Values within the JSON Document")]
        [return: Header("Value")]
        public string CheckJsonValues([Header("Json Path")]string path)
        {
            return JObject.SelectToken(path)?.ToString();
        }

        /// <summary>
        /// Check a single value inside of the Json structure by the type
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="jsonPath"></param>
        /// <param name="format">How this grammar will be rendered in the Storyteller HTML</param>
        /// <returns></returns>
        protected CheckJsonGrammar<T> CheckJsonValue<T>(string jsonPath, string format)
        {
            return new CheckJsonGrammar<T>(this, jsonPath, jsonPath).Format(format);
        }

        /// <summary>
        /// Does a deep Json equivalency assertion between the expected Json
        /// and the JSON object at the given JSONPath path
        /// </summary>
        /// <param name="jsonPath"></param>
        /// <param name="expectedJson"></param>
        protected internal void assertDeepJsonEquals(string jsonPath, string expectedJson)
        {
            var actual = JObject.SelectToken(jsonPath);
            var expected = JToken.Parse(expectedJson);

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

        /// <summary>
        /// Builds up a set verification grammar against children elements of a 
        /// Json array at the jsonPath
        /// </summary>
        /// <param name="jsonPath"></param>
        /// <returns></returns>
        protected JsonValueCheckExpression VerifyChildElementSet(string jsonPath)
        {
            return new JsonValueCheckExpression(jsonPath, this);
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

            /// <summary>
            /// Configure the title for this grammar as it will be
            /// rendered into the specification HTML
            /// </summary>
            /// <param name="title"></param>
            /// <returns></returns>
            public JsonValueCheckExpression Titled(string title)
            {
                _title = title;
                return this;
            }

            /// <summary>
            /// Specify what values to match on within the Json document
            /// </summary>
            /// <param name="configure"></param>
            /// <returns></returns>
            public IGrammar Compare(Action<JsonValueChecks> configure)
            {
                var checks = new JsonValueChecks(_path, _title, _parent);
                configure(checks);

                return checks.ToGrammar();
            }
        }
    }

}