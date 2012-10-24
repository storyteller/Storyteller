using System;
using System.Collections.Generic;
using System.IO;
using NUnit.Framework;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;
using StoryTeller.Persistence;
using Is = Rhino.Mocks.Constraints.Is;

namespace StoryTeller.Testing.Execution
{
    [TestFixture]
    public class when_running_all_the_tests : InteractionContext<DirectoryRunner>
    {
        private string theDirectory = "the directory";
        private List<Test> tests;
        private DirectoryRunnerSetup setup;

        protected override void beforeEach()
        {
            if (!Directory.Exists("results"))
            {
                Directory.CreateDirectory("results");
            }

            setup = new DirectoryRunnerSetup
            {
                TestFolder = theDirectory,
                ResultsFolder = "results"
            };

            tests = new List<Test>
            {
                new Test("a"),
                new Test("b"),
                new Test("c")
            };
            Services.Inject(setup);
            Services.PartialMockTheClassUnderTest();


            ClassUnderTest.Expect(x => x.LoadAllTests()).Return(tests);
        }

        [Test]
        public void finish_test()
        {
            var test = new Test("a")
            {
                SuiteName = "suite1",
                LastResult = new TestResult()
            };

            

            ClassUnderTest.FinishedTest(test);

            string resultFolder = Path.Combine(setup.ResultsFolder, test.SuiteName);
            resultFolder = Path.Combine(resultFolder, test.Name + "-results.htm");

            MockFor<IResultsSummary>().AssertWasCalled(x => x.AddTest(test, resultFolder));
        }

        [Test]
        public void run_the_tests()
        {
            ClassUnderTest.RunAllTests();

            MockFor<IFileSystem>().AssertWasCalled(x => x.DeleteFolder(setup.ResultsFolder));
            MockFor<IFileSystem>().AssertWasCalled(x => x.CreateFolder(setup.ResultsFolder));

            MockFor<IResultsSummary>().AssertWasCalled(x => x.Start(null, DateTime.Now),
                                                       o =>
                                                       {
                                                           o.Constraints(Is.Equal("All Tests in the directory"),
                                                                         Is.TypeOf<DateTime>());
                                                       });

            MockFor<ITestRunner>().AssertWasCalled(x => x.RunTests(tests, ClassUnderTest));
            MockFor<IResultsSummary>().AssertWasCalled(x => x.WriteFile(setup.ResultsFile));
        }
    }

    [TestFixture]
    public class DirectoryRunnerTester
    {
        [Test]
        public void load_files_from_directory()
        {
            var runner = new DirectoryRunner(null, new TestReader(), null, new FileSystem(),
                                             new DirectoryRunnerSetup
                                             {
                                                 TestFolder = @"..\..\SampleData"
                                             });
            List<Test> tests = runner.LoadAllTests();

            var expected = new List<Test>
            {
                new Test("h")
                {
                    SuiteName = "Address"
                },
                new Test("a")
                {
                    SuiteName = "Address\\Data"
                },
                new Test("b")
                {
                    SuiteName = "Address\\Data"
                },
                new Test("c")
                {
                    SuiteName = "Address\\Screen"
                },
                new Test("d")
                {
                    SuiteName = "Address\\Screen"
                },
                new Test("e")
                {
                    SuiteName = "Console"
                },
                new Test("f")
                {
                    SuiteName = "Console"
                },
                new Test("g")
                {
                    SuiteName = "Console"
                },
            };

            TestUtility.AssertListMatches(tests, expected);
        }
    }
}