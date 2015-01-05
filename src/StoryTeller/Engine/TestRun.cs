using System;
using System.Diagnostics;
using System.Threading;
using System.Web;
using FubuCore;
using HtmlTags;
using StoryTeller.Execution;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public class TestRun : ITestRun
    {
        private TestContext _context;
        private IExecutionContext _execution;
        private ManualResetEvent _reset;
        private Thread _testThread;
        private readonly FixtureLibrary _library;
        private readonly ITestObserver _listener;
        private readonly TestExecutionRequest _request;
        private readonly TestResult _result;
        private readonly ISystem _system;

        internal TestRun(TestExecutionRequest request, ITestObserver listener, FixtureLibrary library, ISystem system)
        {
            _request = request;
            _listener = listener;
            _library = library;
            _system = system;

            _result = new TestResult
            {
                RetryAttemptNumber = request.Test.RetryAttemptNumber
            };
        }

        #region ITestRun Members

        public void Abort()
        {
            _result.WasCancelled = true;
            captureException("Test Execution was forcibly aborted");
            _listener.Exception("Test Execution was forcibly aborted");
            if (_testThread != null) _testThread.Abort();
        }

        #endregion

        private void captureException(Exception ex)
        {
            _listener.Exception(ex.ToString());
            captureException(ex.ToString());
        }

        private void captureException(string exceptionText)
        {
            _context.IncrementExceptions();
            _context.ResultsFor(_request.Test).CaptureException(exceptionText);
        }

        internal TestResult Execute()
        {
            _listener.StartTest(_request.Test, _result.Counts);

            var timer = Stopwatch.StartNew();

            try
            {
                _execution = _system.CreateContext();
            }
            catch (Exception e)
            {
                var document = new HtmlDocument();
                document.Title = "Catastrophic Failure!";
                document.Add("pre").Text(e.ToString());

                var result = new TestResult
                {
                    Counts = new Counts(0, 0, 1, 0),
                    ExceptionText = e.ToString(),
                    Locator = _request.Test.LocatorPath(),
                    ExecutionTime = 0,
                    FullExceptionText = e.ToString(),
                    WasCancelled = false,
                    RetryAttemptNumber = _request.Test.RetryAttemptNumber
                };

                _request.Test.LastResult = result;

                return result;
            }

            _context = new TestContext(_execution, _request.Test, _listener);

            if (_context.RetryAttemptNumber > 0)
            {
                _system.Recycle();
            }

            _reset = new ManualResetEvent(false);

            try
            {
                startThread();

                recordTimeout();
            }
            catch (Exception e)
            {
                captureException(e);
                _listener.Exception(e.ToString());
            }

            _testThread = null;

            timer.Stop();

            recordResults(timer);

            _listener.FinishTest(_request.Test);

            return _result;
        }

        private void startThread()
        {
            _testThread = new Thread(() =>
            {
                try
                {
                    _context.Execute();
                }
                catch (Exception e)
                {
                    captureException(e);
                }
                finally
                {
                    _execution.Dispose();
                    _reset.Set();
                }
            });

            _testThread.SetApartmentState(ApartmentState.STA);
            _testThread.Name = "StoryTeller-Test-Execution";
            _testThread.Start();
        }

        private void recordTimeout()
        {
            var timedOut = !_reset.WaitOne(_request.TimeoutInSeconds*1000);
            if (timedOut)
            {
                var exception = "Timed Out in {0} seconds".ToFormat(_request.TimeoutInSeconds);
                captureException(exception);
                _listener.Exception(exception);
                _testThread.Abort();
            }
        }

        private void recordResults(Stopwatch timer)
        {
            _result.ExecutionTime = timer.Elapsed.TotalSeconds;
            _result.Counts = _context.Counts;
            var results = _context.ResultsFor(_request.Test);
            _result.ExceptionText = results.ExceptionText;
            _result.FullExceptionText = results.ExceptionText;

            _request.Test.LastResult = _result;
        }


    }
}