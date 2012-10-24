using System;
using System.IO;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Workspace;

namespace StoryTeller.Execution
{
    public class TestRunnerDomain : ITestRunnerDomain
    {
        private readonly object _locker = new object();
        private readonly IEventPublisher _publisher;
        private AppDomain _domain;
        private FixtureLibrary _library;
        private TestRunnerProxy _proxy;

        public TestRunnerDomain(IEventPublisher publisher)
        {
            _publisher = publisher;
        }

        #region ITestRunnerDomain Members

        public void LoadProject(IProject project)
        {
            lock (_locker)
            {
                Teardown();

                try
                {
                    _publisher.Publish<BinaryRecycleStarted>();
                    _proxy = BuildProxy(project);

                    _library = _proxy.StartSystem(new FixtureAssembly(project), (MarshalByRefObject)_publisher);
                    _publisher.Publish(new BinaryRecycleFinished(_library));
                }
                catch (FileNotFoundException ex)
                {
                    if (ex.Message.Contains(GetType().Assembly.GetName().Name))
                    {
                        string message = "Could not find the StoryTeller.dll assembly in the target AppDomain.";
                        message +=
                            "\nYou will not be able to execute tests until the StoryTeller.dll file is copied to " +
                            project.GetBinaryFolder();

                        _publisher.Publish(new BinaryRecycleFailure
                        {
                            ErrorMessage = message
                        });
                    }
                    else
                    {
                        _publisher.Publish(new BinaryRecycleFailure
                        {
                            ErrorMessage = ex.ToString()
                        });
                    }

                    Teardown();
                }
                catch (Exception ex)
                {
                    Teardown();
                    _publisher.Publish(new BinaryRecycleFailure
                    {
                        ErrorMessage = ex.ToString()
                    });
                }
            }
        }

        public void Teardown()
        {
            try
            {
                if (_proxy != null) _proxy.Dispose();
            }
            catch (Exception)
            {
            }

            _proxy = null;
            if (_domain != null)
            {
                AppDomain.Unload(_domain);
                _domain = null;
            }
        }

        public void RecycleEnvironment()
        {
            if (_proxy != null) _proxy.RecycleEnvironment();
        }

        public bool HasStarted()
        {
            return _proxy != null;
        }

        public TestResult RunTest(TestExecutionRequest request)
        {
            if (_proxy == null)
            {
                throw new InvalidOperationException("Cannot execute a test unless a project has been loaded");
            }

            lock (_locker)
            {
                return _proxy.RunTest(request);
            }
        }

        public void AbortCurrentTest()
        {
            _proxy.AbortCurrentTest();
            _publisher.Publish(new TestStatusMessage
            {
                IsRunning = false,
                WasCancelled = true
            });
        }

        public bool IsExecuting()
        {
            return _proxy.IsExecuting();
        }

        public void MarkTestFinalStatus(Test test)
        {
            if (_listener != null)
                _listener.FinishTestRetries(test);
        }

        public FixtureLibrary Library
        {
            get { return _library; }
        }

        private ITestObserver _listener;
        private bool _useTeamCityListener;

        public void UseTeamCityListener()
        {
            _useTeamCityListener = true;
            if (_proxy != null)
            {
                _proxy.UseTeamCityListener();
            }
        }

        public void Dispose()
        {
            try
            {
                if (IsExecuting())
                {
                    AbortCurrentTest();
                }

                _proxy.Dispose();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        #endregion

        public virtual TestRunnerProxy BuildProxy(IProject project)
        {
            var setup = new AppDomainSetup
            {
                ApplicationName = "StoryTeller-Testing-" + Guid.NewGuid(),
                ConfigurationFile = project.ConfigurationFileName,
                ShadowCopyFiles = "true",
                ApplicationBase = project.GetBinaryFolder()
            };

            _domain = AppDomain.CreateDomain("StoryTeller-Testing", null, setup);

            Type proxyType = typeof(TestRunnerProxy);
            var proxy =
                (TestRunnerProxy)
                _domain.CreateInstanceAndUnwrap(proxyType.Assembly.FullName, proxyType.FullName);

            if (_useTeamCityListener) proxy.UseTeamCityListener();

            return proxy;
        }
    }
}