using System.Diagnostics;
using System.IO;
using NUnit.Framework;
using System.Linq;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Workspace;
using System.Collections.Generic;

namespace StoryTeller.Testing.Workspace
{
    [TestFixture]
    public class ResultPersistorIntegratedTester
    {
        [Test]
        public void get_file_name_for_test_with_spaces()
        {
            //var test = DataMother.MathProject().LoadTests().GetAllTests().First();
            var test = new Test("something with spaces");

            ResultPersistor.FileNameFor(test).ShouldEqual("something_with_spaces.stresult");
        }

        [Test]
        public void get_file_name_for_test_gets_the_full_path_with_underscores_for_paths()
        {
            var test = DataMother.MathProject().LoadTests().GetAllTests().First();
            ResultPersistor.FileNameFor(test).ShouldEqual(test.GetPath().Locator.Replace("/", ".").Replace(" ", "_") + ".stresult");
        }

        [Test]
        public void save_and_load_the_history_for_a_hierarchy()
        {
            if (Directory.Exists("results-dir"))
            {
                Directory.Delete("results-dir", true);
            }

            Hierarchy hierarchy =
                DataMother.BuildHierarchy(
                    @"
s1/t4,Success
s1/t5,Success
s1/t6,Failure
s1/s2/t7,Success
s1/s2/t8,Failure
s1/s2/s3/t9,Success
s1/s2/s3/t10,Success
s1/s2/s3/s4/t11,Success
s5/t12,Success
s5/s6/t13,Success
s5/s6/s7/t14,Success
s5/s6/s7/s8/t15,Success
s9/t16,Success
s9/t17,Success
s9/t18,Success
");

            var persistor = new ResultPersistor();
            persistor.SaveResultsToDirectory(hierarchy.GetFullResults(), "results-dir");

            var results = persistor.LoadResults("results-dir");
            hierarchy.GetAllTests().Each(x =>
            {
                results[x].ShouldNotBeNull();
            });
        }


        [Test]
        public void persist_and_load_and_clear_by_project_smoke_test()
        {
            var persistor = new ResultPersistor();
            var runner = DataMother.MathProjectRunner();
            runner.RunAll(t => t.GetAllTests(), t => Debug.WriteLine("executed " + t.GetPath().Locator));

            runner.Hierarchy.GetAllTests().Each(t =>
            {
                persistor.SaveResult(runner.Project, t, t.LastResult);
            });

            var results = persistor.LoadResults(runner.Project);
            runner.Hierarchy.GetAllTests().Each(t =>
            {
                results[t].ShouldNotBeNull();
            });

            persistor.ClearResults(runner.Project);
        }
    }
}