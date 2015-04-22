using FubuCore;

namespace ST.Docs.Samples
{
    public interface ISnippetScanner
    {
        string Language { get; }
        FileSet MatchingFileSet { get; }
        string DetermineName(string line);
        bool IsAtEnd(string line);
    }
}