using System;
using System.Collections.Generic;
using System.Diagnostics;
using FubuCore.Conversion;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller;
using StoryTeller.Assertions;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Constraints;
using StoryTeller.Execution;
using StoryTeller.Model;
using System.Linq;
using StructureMap;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{

    public class RecordingSystem : ISystem
    {
        private static readonly List<string> _messages = new List<string>();

        public void Record(string message)
        {
            _messages.Add(message);
        }

        public static string[] Messages
        {
            get
            {
                return _messages.ToArray();
            }
        }

        public static void Clear()
        {
            _messages.Clear();
        }

        public IExecutionContext CreateContext()
        {
            throw new NotImplementedException();
        }

        public void Recycle()
        {
            Record("Recycle");
        }

        public void Dispose()
        {
            Record("Dispose");
        }
    }


    public class RecordingFixture : Fixture
    {


        public void Execute()
        {
            Retrieve<RecordingSystem>().Record("Execute");
        }        
    }



    [TestFixture]
    public class TestRunnerTester : AAAMockingContext<TestContext>
    {

        [Test]
        public void run_a_test_when_setup_blows_up_do_not_rethrow_exception_and_log_the_exception_to_the_test()
        {
            var runner = TestRunner.ForSystem<SystemThatBlowsUpInSetup>();

            var test = new Test("Some test");

            runner.RunTest(test);

            test.LastResult.ExceptionText.ShouldContain("NotImplementedException");
        }

    }


    public class SystemThatBlowsUpInSetup : ISystem
    {
        public T Get<T>() where T : class
        {
            throw new NotImplementedException();
        }

        public IExecutionContext CreateContext()
        {
            throw new NotImplementedException();
        }

        public void Recycle()
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }




    public class GrammarThatAssertsFailure : IGrammar
    {
        #region IGrammar Members

        public void Execute(IStep containerStep, ITestContext context)
        {
            StoryTellerAssert.Fail("I don't want to run");
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            throw new NotImplementedException();
        }

        public string Description { get { throw new NotImplementedException(); } }

        #endregion
    }

}