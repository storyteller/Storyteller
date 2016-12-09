namespace StorytellerDocGen.Samples
{
    public class RazorScanner : BlockCommentScanner
    {
        public RazorScanner() : base("@*", "*@", "cshtml", "markup")
        {
        }
    }
}