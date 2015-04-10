using FubuCore;

namespace ST.Docs.Samples
{
    public interface ISnippetScanner
    {
        string LanguageClass { get; }
        FileSet MatchingFileSet { get; }
        string DetermineName(string line);
        bool IsAtEnd(string line);
    }
}