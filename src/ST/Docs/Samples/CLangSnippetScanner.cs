namespace ST.Docs.Samples
{
    public class CLangSnippetScanner : SimpleCommentSnippetScanner
    {
        public CLangSnippetScanner(string extension) : base(extension, "// ")
        {
        }
    }
}