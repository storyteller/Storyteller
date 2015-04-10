namespace ST.Docs.Samples
{
    public class RazorSnippetScanner : BlockCommentScanner
    {
        public RazorSnippetScanner() : base("@*", "*@", "cshtml", "lang-htm")
        {
        }
    }
}