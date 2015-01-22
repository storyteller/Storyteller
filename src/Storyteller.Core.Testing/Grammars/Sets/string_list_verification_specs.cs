using System.Collections;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.DSL;
using Storyteller.Core.Grammars;
using Storyteller.Core.Sets;
using StructureMap;

namespace Storyteller.Core.Testing.Grammars.Sets
{
    [TestFixture]
    public class string_list_verification_specs : SpecRunningContext
    {
        [Test]
        public void exact_match_by_simple()
        {
            StringListFixture.Strings.Clear();
            StringListFixture.Strings.AddRange(new[] {"a", "c", "b"});

            execute(@"
Name: whatever
=> StringList
* SimpleFunc
  -> Rows
  * Row#1:expected=a
  * Row#2:expected=b
  * Row#3:expected=c

");

            CountsShouldBe(3, 0, 0, 0);
        }

        [Test]
        public void an_extra_a_missing_and_some_rights()
        {
            StringListFixture.Strings.Clear();
            StringListFixture.Strings.AddRange(new[] { "a", "c", "b", "extra" });

            execute(@"
Name: whatever
=> StringList
* SimpleFunc
  -> Rows
  * Row#1:expected=a
  * Row#2:expected=b
  * Row#3:expected=c
  * Row#missing:expected=missing

");

            var result = theContext.Results.OfType<SetVerificationResult>().Single();

            result.matches.OrderBy(x => x).ShouldHaveTheSameElementsAs("1", "2", "3");
            result.missing.Single().ShouldEqual("missing");
            result.extras.Single()["expected"].ShouldEqual("extra");
        }

        [Test]
        public void exact_match_by_func_on_context()
        {
            execute(@"
=> StringList
* FillList: text=b;c;d
* ByContext
  -> Rows
  * Row#1:expected=b
  * Row#2:expected=d
  * Row#3:expected=c
");
        }

        [Test]
        public void exact_match_by_service()
        {
            Services.Add(new StringSource("a", "c", "f"));

            execute(@"
=> StringList
* ByService
  -> Rows
  * Row: expected=c
  * Row: expected=f
  * Row: expected=a

");
        }
    }

    public class StringListFixture : Fixture
    {
        public static IList<string> Strings = new List<string>();

        [FormatAs("Fill values {text}")]
        public void FillList(string text)
        {
            var values = text.ToDelimitedArray(';');
            Context.State.Store(values);
        }

        public IGrammar SimpleFunc()
        {
            return VerifyStringList(() => Strings).Titled("Simple String List");
        }

        public IGrammar ByContext()
        {
            return VerifyStringList(c => c.State.Retrieve<string[]>())
                .Titled("From context");
        }

        public IGrammar ByService()
        {
            return VerifyStringList<StringSource>(x => x.Strings)
                .Titled("By service");
        }
    }

    public class StringSource
    {
        public string[] Strings { get; set; }

        public StringSource(params string[] strings)
        {
            Strings = strings;
        }
    }
}