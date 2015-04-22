using Bottles;
using FubuMVC.Core;

namespace ST.Docs.Samples
{
    // TODO -- try to eliminate this completely
    public class SnippetRegistry : FubuPackageRegistry
    {
        public SnippetRegistry()
        {
            Actions.IncludeType<CodeFileEndpoint>();

            Services(x =>
            {
                x.AddService<ISnippetScanner>(new CLangSnippetScanner("cs", "csharp"));
                x.AddService<ISnippetScanner>(new CLangSnippetScanner("js", "javascript"));
                x.AddService<ISnippetScanner>(new BlockCommentScanner("<!--", "-->", "htm", "markup"));
                x.AddService<ISnippetScanner>(new BlockCommentScanner("<!--", "-->", "html", "markup"));
                x.AddService<ISnippetScanner>(new BlockCommentScanner("<!--", "-->", "xml", "markup"));
                x.AddService<ISnippetScanner>(new BlockCommentScanner("/*", "*/", "css", "css"));
                x.AddService<ISnippetScanner, RazorSnippetScanner>();
                x.AddService<ISnippetScanner, RubySnippetScanner>();

                x.AddService<ISnippetCache, SnippetCache>();
                x.AddService<IActivator, SnippetBuilder>();
            });
        }
    }
}