using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using StoryTeller;
using StoryTeller.Grammars.Tables;
using StoryTeller.Json;

namespace Samples.Fixtures
{
    public class SampleJsonFixture : JsonComparisonFixture
    {
        public SampleJsonFixture()
        {
            Title = "Verifying Json Data";
        }

        [FormatAs("The json is {json}")]
        public void JsonIs(string json)
        {
            Context.State.StoreJson(json);
        }


        private readonly IList<Dictionary<string, object>> _children = new List<Dictionary<string, object>>();

        [Hidden]
        public void PersonIs(string first, string last, int age, string city, int[] numbers)
        {
            var address = new Dictionary<string, string>{{"city", city}};

            var dict = new Dictionary<string, object>
            {
                {"first", first},
                {"last", last },
                {"age", age },
                {"numbers", numbers },
                {"address", address }
            };

            _children.Add(dict);
        }

        public IGrammar ThePeopleAre()
        {
            return this["PersonIs"].AsTable("The people in the children collection are")
                .Before(() => _children.Clear())
                .After(() =>
                {
                    var container = new Dictionary<string, object>{{"children", _children.ToArray()}};

                    JsonIs(JsonConvert.SerializeObject(container));
                });
        }

        public IGrammar CheckPeople()
        {
            return VerifyChildElementSet("$.children").Titled("The people should be")
                .Compare(_ =>
                {
                    _.Check<string>("$.first", "first");
                    _.Check<string>("$.last", "last");
                    _.Check<int>("$.age", "age");
                    _.Check<int[]>("$.numbers", "numbers").Header("the numbers");
                    _.Check<string>("$.address.city", "city");
                });
        }

        public IGrammar CheckOrder()
        {
            return CheckValue<int>("$.order", "The order should be {order}");
        }

        public IGrammar CheckNumberArray()
        {
            return CheckValue<int[]>("$.numbers", "The number array should be {numbers}");
        }

        public IGrammar CheckStringArray()
        {
            return CheckValue<string[]>("$.names", "The names array should be {names}");
        }

        [FormatAs("Deep equals check of {name} and {age}")]
        public void CompareChild(string name, int age)
        {
            var dict = new Dictionary<string, string> {{"name", name}, {"age", age.ToString()}};

            var json = JsonConvert.SerializeObject(dict);
            assertDeepJsonEquals("child", json);
            
        }
    }
}