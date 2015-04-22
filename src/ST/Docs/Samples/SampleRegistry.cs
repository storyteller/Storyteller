using FubuCore;
using StructureMap.Configuration.DSL;

namespace ST.Docs.Samples
{
    public class SampleRegistry : Registry
    {
        public SampleRegistry()
        {
            For<ISnippetScanner>().AddInstances(_ =>
            {
                _.Type<RazorSnippetScanner>();
                _.Type<RubySnippetScanner>();

                _.Object(new CLangSnippetScanner("cs", "csharp"));
                _.Object(new CLangSnippetScanner("js", "javascript"));
                _.Object(new BlockCommentScanner("<!--", "-->", "htm", "markup"));
                _.Object(new BlockCommentScanner("<!--", "-->", "html", "markup"));
                _.Object(new BlockCommentScanner("<!--", "-->", "xml", "markup"));
                _.Object(new BlockCommentScanner("/*", "*/", "css", "css"));
            });

            For<IFileSystem>().Use<FileSystem>();

            ForSingletonOf<ISnippetCache>().Use<SnippetCache>();
            ForSingletonOf<ISampleBuilder>().Use<SampleBuilder>();
        }
    }
}