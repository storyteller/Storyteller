namespace ST.Docs.Samples
{
    public class CLangSnippetScanner : SimpleCommentSnippetScanner
    {
        public CLangSnippetScanner(string extension, string language) : base(extension, "// ", language)
        {
        }
    }
}