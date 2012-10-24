using System;
using System.Runtime.Remoting;
using FubuCore.Util;
using StoryTeller.Engine;
using StoryTeller.Model;
using System.Collections.Generic;
using FubuCore;

namespace StoryTeller.Execution
{

    public class TestRunnerProxy : MarshalByRefObject
    {
        private TestRunner _runner;
        private IEventPublisher _publisher;
        private ISystem _system;
        private ITestObserver _listener;

        public void Dispose()
        {
            try
            {
                // TODO -- need to figure about exceptions here
                if (_runner != null) _runner.Dispose();
            }
            catch (Exception)
            {
            }
        }

        public void RecycleEnvironment()
        {
            try
            {
                if (_runner != null) _system.Recycle();
            }
            catch (TestEngineFailureException)
            {
                throw;
            }
            catch (Exception e)
            {
                throw new TestEngineFailureException(e.ToString());
            }
        }

        public TestResult RunTest(TestExecutionRequest request)
        {
            _runner.Listener = _listener ?? new UserInterfaceTestObserver(_publisher, request);

            return _runner.RunTest(request);
        }

        public void AbortCurrentTest()
        {
            if (_runner != null) _runner.Abort();
        }

        public bool IsExecuting()
        {
            if (_runner != null) return _runner.IsExecuting();

            return false;
        }

        public override object InitializeLifetimeService()
        {
            return null;
        }

        public FixtureLibrary StartSystem(FixtureAssembly fixtureAssembly, MarshalByRefObject remotePublisher)
        {
            _publisher = (IEventPublisher)remotePublisher;

            // TODO -- if fails, do a Thread.Sleep and try again
            _system = fixtureAssembly.System;

            try
            {
                var library = FixtureGraph.Library;
                _runner = new TestRunner(_system, library);
                if (_listener != null)
                {
                    _runner.Listener = _listener;
                }

                return library;
            }
            catch (TestEngineFailureException)
            {
                throw;
            }
            catch (Exception e)
            {
                throw new TestEngineFailureException(e.ToString());
            }
        }

        public void UseTeamCityListener()
        {
            _listener = new TeamCityTestListener();
        }
    }
}