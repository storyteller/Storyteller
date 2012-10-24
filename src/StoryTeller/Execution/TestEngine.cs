using System;
using System.Threading;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Workspace;
using FubuCore;

namespace StoryTeller.Execution
{
    public class TestEngine : ITestEngine
                              , IListener<ProjectLoaded>
                              , IListener<ForceBinaryRecycle>
                              , IListener<ForceEnvironmentRecycle>
    {
        private readonly ITestRunnerDomain _domain;
        private readonly TestStopConditions _stopConditions;
        private readonly ManualResetEvent _latch = new ManualResetEvent(true);
        private readonly object _locker = new object();
        private readonly FixtureLibraryWatcher _watcher;

        private IProject _project;


        public TestEngine()
            : this(new TestRunnerDomain(new NulloEventPublisher()), new TestStopConditions())
        {
        }

        public TestEngine(ITestRunnerDomain domain, TestStopConditions stopConditions)
        {
            _domain = domain;
            _stopConditions = stopConditions;
            _watcher = new FixtureLibraryWatcher(() => reload());
        }

        public FixtureLibrary Library
        {
            get
            {
                _latch.WaitOne(30000);
                return _domain.Library;
            }
        }

        public void Handle(ForceBinaryRecycle message)
        {
            reload();
        }

        public void Handle(ForceEnvironmentRecycle message)
        {
            _domain.RecycleEnvironment();
        }

        public void Handle(ProjectLoaded message)
        {
            _project = message.Project;
            _watcher.WatchBinariesAt(_project.GetBinaryFolder());

            reload();
        }

        public IProject Project { get { return _project; } set { _project = value; } }

        public void LoadSynchronously(IProject project)
        {
            _project = project;
            performReload();
        }

        public void RunTest(Test test)
        {
            _latch.WaitOne(30000);

            try
            {
                // This shouldn't happen, but of course it does, so we'll
                // help the system recover from blowups
                if (!_domain.HasStarted())
                {
                    performReload();
                }

                lock (_locker)
                {
                    TestExecutionRequest request = GetExecutionRequest(test);
                    var result = _domain.RunTest(request);
                    if (!result.WasCancelled)
                    {
                        test.LastResult = result;
                    }
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                test.LastResult = new TestResult { ExceptionText = ex.Message, Counts = new Counts(0, 0, 1, 0), FullExceptionText  = ex.ToString()};
            }
        }

        public TestExecutionRequest GetExecutionRequest(Test test)
        {
            return new TestExecutionRequest(test, _stopConditions);
        }

        public TestStopConditions StopConditions
        {
            get { return _stopConditions; }
        }

        public void AbortCurrentTest()
        {
            _domain.AbortCurrentTest();
            
        }

        public bool IsExecuting()
        {
            return _domain.IsExecuting();
        }

        public void Dispose()
        {
            _domain.Dispose();
        }

        private void reload()
        {
            _latch.Reset();

            var thread = new Thread(performReload);
            thread.Name = "StoryTeller-Reload-Library";
            thread.SetApartmentState(ApartmentState.STA);
            thread.Start();
        }

        private void performReload()
        {
            try
            {
                _domain.LoadProject(_project);
            }
            finally
            {
                _latch.Set();
            }
        }

        public void WaitForProcessing()
        {
            _latch.WaitOne(30000);
        }

        public void UseTeamCityListener()
        {
            _domain.UseTeamCityListener();
        }

        public void TestRetriesFinished(Test test)
        {
            _domain.MarkTestFinalStatus(test);
        }
    }
}