namespace ST.Docs.Samples
{
    public class CLangSampleScanner : SimpleCommentSampleScanner
    {
        public CLangSampleScanner(string extension, string language) : base(extension, "// ", language)
        {
        }
    }
}