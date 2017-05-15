using System;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;

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


        protected void assertDeepJsonEquals(string path, string json)
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

        /*
         * TODO -- check arrays of simple types
         * TODO -- check children within a JSON array
         * TODO -- check a child json path
         * 
         * 
         */
    }

    // This was to do set comparison
    public class JsonValueChecks
    {
        // This should use the path as the 
        public ICellExpression Check<T>(string path, string cell = null)
        {
            // TODO -- not sure this is going to work w/ the reserved values in the path
            cell = cell ?? path;

            throw new NotImplementedException();
        }

        
    }


    public class JsonComparison : IGrammarSource
    {
        public string Path { get; }

        public IGrammar ToGrammar(MethodInfo method, Fixture fixture)
        {
            throw new System.NotImplementedException();
        }

        public string CellKey { get; set; } = "path";

        public JsonComparison(string path)
        {
            Path = path;
        }
    }
}