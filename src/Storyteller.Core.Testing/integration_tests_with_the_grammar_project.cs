using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Grammars.Sets;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing
{
    [TestFixture]
    public class integration_tests_with_the_grammar_project : SpecRunningContext
    {
        private readonly string _folder = ".".ToFullPath()
            .ParentDirectory().ParentDirectory().ParentDirectory()
            .AppendPath("Storyteller.Samples", "Specs");

        private Suite _hierarchy;
        private SpecNode[] _allSpecs;

        [TestFixtureSetUp]
        public void SetUp()
        {
            _hierarchy = HierarchyLoader.ReadHierarchy(_folder);
            _allSpecs = _hierarchy.GetAllSpecs().ToArray();
        }

        private Counts running(string name)
        {
            var node = _allSpecs.FirstOrDefault(x => x.name == name);
            Debug.WriteLine(node.filename);
            var spec = XmlReader.ReadFromFile(node.filename);
            executeSpec(spec);

            theContext.Results.Each(x => Debug.WriteLine(x));

            return theContext.Counts;
        }

        
        [Test]
        public void Cannot_find_fixture()
        {
            running("Test with Missing Fixture Name").ShouldEqual(0, 0, 0, 1);

            Step("1").StatusWas(ResultStatus.invalid);
        }

        [Test]
        public void cannot_find_grammar()
        {
            running("Test with Bad Grammar Name").ShouldEqual(0, 0, 3, 0);
        }

        
        [Test]
        public void boolean_results_in_set_verification()
        {
            running("Boolean Results in a Table").ShouldEqual(2, 0, 0, 0);
        }

        

        [Test]
        public void Composite_with_errors()
        {
            running("Composite with Errors").ShouldEqual(2, 3, 1, 2);
        }
        
        [Test]
        public void decision_tables()
        {
            running("Decision Table").ShouldEqual(2, 2, 0, 0);
        }
        
        [Test]
        public void embeds()
        {
            running("Embeds").ShouldEqual(2, 1, 2, 1);
        }
        
        [Test]
        public void Facts()
        {
            running("Facts").ShouldEqual(1, 1, 1, 0);

            Step("1").StatusWas(ResultStatus.success);
            Step("2").StatusWas(ResultStatus.failed);
            Step("3").StatusWas(ResultStatus.error);
        }
        
        [Test]
        public void Ordered_set()
        {
            running("Ordered Set");

            var result1 = VerificationResultFor("1");
            result1.matches.ShouldHaveTheSameElementsAs("2", "3", "4");

            var result2 = VerificationResultFor("5");
            result2.wrongOrdered.ShouldHaveTheSameElementsAs(new WrongOrder("6", 2), new WrongOrder("7", 3), new WrongOrder("8", 1));

            var result3 = VerificationResultFor("9");
            result3.extras.Count().ShouldEqual(1);

            var result4 = VerificationResultFor("10");
            result4.missing.Single().ShouldEqual("11");

            Step("12").Cell("Date").WasInvalid();

        }

        [Test]
        public void Ordered_string_set_failure()
        {
            running("Unsuccessful Ordering").ShouldEqual(4, 5, 0, 0);
        }

        [Test]
        public void Ordered_string_set_success()
        {
            running("Successful OrderedStrings").ShouldEqual(10, 0, 0, 0);
        }
        

        [Test]
        public void Sentences()
        {
            running("Sentences").ShouldEqual(2, 2, 1, 1);

            Step("1").Cell("number").WasInvalid();
            Step("2").Cell("number").Succeeded();

            Step("3").StatusWas(ResultStatus.success);
            Step("4").StatusWas(ResultStatus.failed);
            Step("5").StatusWas(ResultStatus.error);

        }
        /*
        [Test]
        public void Currying()
        {
            running("Currying").ShouldEqual(1, 1, 0, 0);
        }
        
        [Test]
        public void importing_and_currying()
        {
            running("Importing and Currying").ShouldEqual(1, 1, 0, 0);
        }
        */
        [Test]
        public void Set_with_Error()
        {
            running("Set with Error").ShouldEqual(0, 0, 1, 0);

            Step("1").StatusWas(ResultStatus.error);
        }
        
        [Test]
        public void Simple_Composite()
        {
            running("Simple Composite").ShouldEqual(2, 3, 0, 0);
        }
        
        [Test]
        public void Table_with_Errors()
        {
            running("Tables with Errors").ShouldEqual(0, 0, 2, 0);
        }
        
        [Test]
        public void Tables()
        {
            running("Tables").ShouldEqual(2, 2, 0, 6);

            Step("1").Cell("x").WasInvalid();
            Step("1").Cell("y").WasInvalid();
            Step("1").Cell("sum").WasInvalid();

            Step("4").Cell("product").Succeeded();
            Step("5").Cell("product").FailedWithActual("Infinity");
        }
        /*
        [Test]
        public void Unordered_Set()
        {
            running("Unordered Set").ShouldEqual(1, 3, 0, 1);
        }
        
        [Test]
        public void check_properties()
        {
            running("Check properties").ShouldEqual(3, 3, 0, 0);
        }
        
        [Test]
        public void service_grammars()
        {
            running("Services").ShouldEqual(1, 1, 0, 1);
        }


         */
    }
}