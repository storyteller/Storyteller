using System;
using System.Diagnostics;
using System.Threading;
using System.Web;
using FubuCore;
using FubuCore.Conversion;
using HtmlTags;
using StoryTeller.Execution;
using StoryTeller.Html;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public class TestRun : ITestRun
    {
        private readonly FixtureLibrary _library;
        private readonly ISystem _system;
        private readonly ITestObserver _listener;
        private readonly TestExecutionRequest _request;
        private readonly TestResult _result;
        private TestContext _context;
        private ManualResetEvent _reset;
        private Thread _testThread;
        private IExecutionContext _execution;

        internal TestRun(TestExecutionRequest request, ITestObserver listener, FixtureLibrary library, ISystem system)
        {
            _request = request;
            _listener = listener;
            _library = library;
            _system = system;

            _result = new TestResult();
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

            Stopwatch timer = Stopwatch.StartNew();

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
                    Html = document.ToString(),
                    Locator = _request.Test.LocatorPath(),
                    ExecutionTime = 0,
                    FullExceptionText = e.ToString(),
                    WasCancelled = false
                };

                _request.Test.LastResult = result;

                return result;
            }
            _context = new TestContext(_execution, _request.Test, _listener);

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
            bool timedOut = !_reset.WaitOne(_request.TimeoutInSeconds*1000);
            if (timedOut)
            {
                string exception = "Timed Out in {0} seconds".ToFormat(_request.TimeoutInSeconds);
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
            _result.Html = writeResults();

            _request.Test.LastResult = _result;
        }

        private string writeResults()
        {
            var writer = new ResultsWriter(_context);
            var parser = new TestParser(_request.Test, writer, _library);
            parser.Parse();

            string results;
            try
            {
                results = writer.Document.ToString();
            }
            catch(HttpException)
            {
                results = @"Failed to create test run results because of bug in .NET Framework 4.0:
https://connect.microsoft.com/VisualStudio/feedback/details/578670/httputility-htmlencode-fails-in-application-start-with-response-is-not-available-in-this-context?wa=wsignin1.0";
            }
            return results;
        }
    }
}