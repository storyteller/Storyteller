using System;
using Shouldly;
using StoryTeller.Results;
using Xunit;

namespace StoryTeller.Testing
{
    public class ExceptionFormattingTests
    {
        private ErrorDisplay display;

        public ExceptionFormattingTests()
        {
            ExceptionFormatting.ClearAll();
        }

        [Fact]
        public void renders_the_message_of_StorytellerAssertionException()
        {
            var exception = new StorytellerAssertionException("It failed!");
            ExceptionFormatting.ToDisplayMessage(exception, out display)
                .ShouldBe("It failed!");

            display.ShouldBe(ErrorDisplay.markdown);
        }

        [Fact]
        public void render_the_message_of_an_unknown_exception()
        {
            var exception = new DivideByZeroException();
            ExceptionFormatting.ToDisplayMessage(exception, out display)
                .ShouldBe(exception.ToString());

            display.ShouldBe(ErrorDisplay.text);
        }



        public class MarkdownFailureException : StorytellerFailureException
        {
            public MarkdownFailureException(string message) : base(message, ErrorDisplay.markdown)
            {

            }

            public override string FormattedMessage()
            {
                return $"**Error:** {Message}";
            }
        }

        [Fact]
        public void render_the_message_of_a_failure_exception_as_markdown()
        {
            var exception = new MarkdownFailureException("Boom!");
            ExceptionFormatting.ToDisplayMessage(exception, out display)
                .ShouldBe(exception.FormattedMessage());

            display.ShouldBe(ErrorDisplay.markdown);
        }

        public class TextFailureException : StorytellerFailureException
        {
            public TextFailureException(string message) : base(message, ErrorDisplay.text)
            {

            }

            public override string FormattedMessage()
            {
                return $"Error: {Message}";
            }
        }

        [Fact]
        public void render_the_message_of_a_failure_exception_as_text()
        {
            var exception = new TextFailureException("Boom!");
            ExceptionFormatting.ToDisplayMessage(exception, out display)
                .ShouldBe(exception.FormattedMessage());

            display.ShouldBe(ErrorDisplay.text);
        }

        [Fact]
        public void render_with_custom_markdown_formatting()
        {
            var message = "**Dude, you're trying to divide by zero!**";
            ExceptionFormatting.AsMarkdown<DivideByZeroException>(ex => message);

            var exception = new DivideByZeroException();
            ExceptionFormatting.ToDisplayMessage(exception, out display)
                .ShouldBe(message);

            display.ShouldBe(ErrorDisplay.markdown);
        }

        [Fact]
        public void render_with_custom_text_formatting()
        {
            var message = "**Dude, you're trying to divide by zero!**";
            ExceptionFormatting.AsText<DivideByZeroException>(ex => message);

            var exception = new DivideByZeroException();
            ExceptionFormatting.ToDisplayMessage(exception, out display)
                .ShouldBe(message);

            display.ShouldBe(ErrorDisplay.text);
        }
    }
}