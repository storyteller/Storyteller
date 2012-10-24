using System;
using System.Diagnostics;
using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    public class ConsoleListener : TextListener
    {
        protected override void write(string format, params string[] args)
        {
            Console.WriteLine(format, args);
        }
    }

    public class TraceListener : TextListener
    {
        protected override void write(string format, params string[] args)
        {
            Trace.WriteLine(string.Format(format, args));
        }
    }

    public abstract class TextListener : MarshalByRefObject, ITestObserver
    {      
        public virtual void StartTest(Test test, Counts counts)
        {
            writeDivider();
            write("Starting Test {0} / {1}", test.Name, test.SuiteName);
        }

        public void StartSection(Section section)
        {
        }

        public void FinishSection(Section section)
        {
        }

        public void StartStep(IStep step)
        {
        }

        public void FinishStep(IStep step)
        {
        }

        public virtual void FinishTest(Test test)
        {
            write("Test {0} finished:  {1}", test.Name, test.GetStatus());

            writeDivider();
            writeSpacer();
            writeSpacer();
            writeSpacer();
        }

        public void Exception(string exceptionString)
        {
            write(exceptionString);
        }

        public bool CanContinue(Counts counts)
        {
            return true;
        }

        public virtual void FinishTestRetries(Test test)
        {
            write("Final test status after retries: {0}", test.LastResult.Counts.WasSuccessful() ? "Successful" : "Failure");
        }

        public override object InitializeLifetimeService()
        {
            return null;
        }

        protected abstract void write(string format, params string[] args);

        protected void writeDivider()
        {
            write("=========================================================================================================");
        }

        private void writeSpacer()
        {
            write(string.Empty);
        }
    }
}