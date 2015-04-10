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
                x.AddService<ISnippetScanner>(new CLangSnippetScanner("cs"));
                x.AddService<ISnippetScanner>(new CLangSnippetScanner("js"));
                x.AddService<ISnippetScanner>(new BlockCommentScanner("<!--", "-->", "spark", "lang-html"));
                x.AddService<ISnippetScanner>(new BlockCommentScanner("<!--", "-->", "htm", "lang-html"));
                x.AddService<ISnippetScanner>(new BlockCommentScanner("<!--", "-->", "html", "lang-html"));
                x.AddService<ISnippetScanner>(new BlockCommentScanner("<!--", "-->", "xml", "lang-xml"));
                x.AddService<ISnippetScanner>(new BlockCommentScanner("/*", "*/", "css", "lang-css"));
                x.AddService<ISnippetScanner, RazorSnippetScanner>();
                x.AddService<ISnippetScanner, RubySnippetScanner>();

                x.AddService<ISnippetCache, SnippetCache>();
                x.AddService<IActivator, SnippetBuilder>();
            });
        }
    }
}