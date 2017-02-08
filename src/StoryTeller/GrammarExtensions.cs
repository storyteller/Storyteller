namespace StoryTeller
{
    public static class GrammarExtensions
    {
        public static T PerfLimit<T>(this T grammar, long maximumRuntimeInMilliseconds) where T : IGrammar
        {
            grammar.MaximumRuntimeInMilliseconds = maximumRuntimeInMilliseconds;
            return grammar;
        }
    }
}