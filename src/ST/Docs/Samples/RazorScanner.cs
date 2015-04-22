namespace ST.Docs.Samples
{
    public class RazorScanner : BlockCommentScanner
    {
        public RazorScanner() : base("@*", "*@", "cshtml", "markup")
        {
        }
    }
}