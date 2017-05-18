using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using StoryTeller;
using StoryTeller.Grammars.Tables;
using StoryTeller.Json;

namespace Samples.Fixtures
{
    // SAMPLE: AddressJsonFixture
    public class AddressJsonFixture : JsonComparisonFixture
    {
        public override void SetUp()
        {
            // Before you call any assertions, you'll need
            // to attach the Json string to the current
            // JsonComparisonFixture
            var json = fetchJson();
            StoreJson(json);
        }

        private string fetchJson()
        {
            return "{\"city\": \"Austin\", \"distance\": \"5\"}";
        }

        public IGrammar CityIs()
        {
            return CheckJsonValue<string>("$.city", "The city should be {city}");
        }

        public IGrammar DistanceIs()
        {
            return CheckJsonValue<int>("$.distance", "The distance should be {distance}");
        }
    }
    // ENDSAMPLE

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

        // SAMPLE: CheckPeople
        public IGrammar CheckPeople()
        {
            // "$.children" designates the JSONPath to the json array
            return VerifyChildElementSet("$.children").Titled("The people should be")
                .Compare(_ =>
                {
                    // Checking values within the elements of the Json array
                    // The first argument is a JSONPath relative to each element of the array
                    // The second argument is necessary to give Storyteller a name for
                    // the expected data
                    _.Check<string>("$.first", "first");
                    _.Check<string>("$.last", "last");
                    _.Check<int>("$.age", "age");

                    // Arrays are valid here, and you can customize the Cell with
                    // the fluent interface shown below
                    _.Check<int[]>("$.numbers", "numbers").Header("the numbers");
                    _.Check<string>("$.address.city", "city");
                });
        }
        // ENDSAMPLE

        public IGrammar CheckOrder()
        {
            return CheckJsonValue<int>("$.order", "The order should be {order}");
        }

        // SAMPLE: CheckNumberArray
        public IGrammar CheckNumberArray()
        {
            return CheckJsonValue<int[]>("$.numbers", "The number array should be {numbers}");
        }
        // ENDSAMPLE

        public IGrammar CheckStringArray()
        {
            return CheckJsonValue<string[]>("$.names", "The names array should be {names}");
        }

        // SAMPLE: deep-json-comparison
        [FormatAs("Deep equals check of {name} and {age}")]
        public void CompareChild(string name, int age)
        {
            var dict = new Dictionary<string, string> {{"name", name}, {"age", age.ToString()}};

            var json = JsonConvert.SerializeObject(dict);
            assertDeepJsonEquals("child", json);
            
        }
        // ENDSAMPLE
    }
}