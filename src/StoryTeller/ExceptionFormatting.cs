using System;
using Baseline;
using StoryTeller.Results;

namespace StoryTeller
{
    public static class ExceptionFormatting
    {
        private static readonly LightweightCache<Type, Func<Exception, string>>
            _textualErrors = new LightweightCache<Type, Func<Exception, string>>();

        private static readonly LightweightCache<Type, Func<Exception, string>>
            _markdownErrors = new LightweightCache<Type, Func<Exception, string>>();

        public static string ToDisplayMessage(Exception ex, out ErrorDisplay errorDisplay)
        {
            if (ex is StorytellerFailureException)
            {
                var failure = ex.As<StorytellerFailureException>();

                errorDisplay = failure.ErrorDisplay;
                return failure.FormattedMessage();
            }

            var exType = ex.GetType();

            if (_textualErrors.Has(exType))
            {
                errorDisplay = ErrorDisplay.text;
                return _textualErrors[exType](ex);
            }

            if (_markdownErrors.Has(exType))
            {
                errorDisplay = ErrorDisplay.markdown;
                return _markdownErrors[exType](ex);
            }


            errorDisplay = ErrorDisplay.text;
            return ex.ToString();
        }


        public static void AsMarkdown<T>(Func<T, string> formatter) where T : Exception
        {
            _markdownErrors[typeof(T)] = ex => formatter(ex.As<T>());
        }

        public static void AsText<T>(Func<T, string> formatter) where T : Exception
        {
            _textualErrors[typeof(T)] = ex => formatter(ex.As<T>());
        }

        public static void ClearAll()
        {
            _textualErrors.Clear();
            _markdownErrors.Clear();
        }
    }
}