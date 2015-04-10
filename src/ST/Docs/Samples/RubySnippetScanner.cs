namespace ST.Docs.Samples
{
    public class RubySnippetScanner : SimpleCommentSnippetScanner
    {
        public RubySnippetScanner() : base("rb", "# ")
        {
        }
    }
}