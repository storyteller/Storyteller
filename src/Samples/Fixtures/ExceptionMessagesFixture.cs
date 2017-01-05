using System;
using System.Linq;
using Baseline;
using StoryTeller;
using StoryTeller.Results;

namespace Samples.Fixtures
{
    public class ExceptionMessagesFixture : Fixture
    {
        public ExceptionMessagesFixture()
        {
        }

        public override void TearDown()
        {
            StoryTellerAssert.Fail("Finally, fail in the **TearDown**");
        }

        [FormatAs("Use a markdown formatted error")]
        public void ResultsInMarkdownFormattedError()
        {
            StoryTellerAssert.Fail("Hey, go check out what my [Chiefs](http://arrowheadpride.com) are up to.");
        }

        public class UnExpectedValidationErrorsException : StorytellerFailureException
        {
            private readonly string[] _failures;

            public UnExpectedValidationErrorsException(string[] failures) : base("Validation failures")
            {
                _failures = failures;
            }

            public override string FormattedMessage()
            {
                return $@"
## Unexpected validation messages detected!

{_failures.Select(x => $"* {x}").Join("\n")}
";
            }
        }

        [FormatAs("Throw a custom storyteller failure exception")]
        public void UsingCustomValidationException()
        {
            throw new UnExpectedValidationErrorsException(new string[] {"Error 1", "Error 2", "Error 3"});
        }

        [FormatAs("Uses default exception results rendering")]
        public void DefaultException()
        {
            throw new DivideByZeroException();
        }

        [FormatAs("Use an exception formatter registered against ExceptionFormatting")]
        public void ExternallyFormattedException()
        {
            ExceptionFormatting.AsMarkdown<InvalidTimeZoneException>(ex => "Invalid timezone, see [valid timezones](https://msdn.microsoft.com/en-us/library/system.timezone(v=vs.110).aspx)");

            throw new InvalidTimeZoneException();
        }
    }
}