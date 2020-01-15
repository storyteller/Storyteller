using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    public static class BatchResultsWriter
    {
        private static List<IDocumentBuilder> attachments = new List<IDocumentBuilder>();
        private static readonly IDocumentPartLoader jsBundle;
        private static readonly IDocumentPartLoader cssBundle;

        static BatchResultsWriter()
        {
            jsBundle = new StoryTellerResourceLoader("StoryTeller.batch-bundle.js");
            cssBundle = new CombinedResourceLoader()
                .AddFile(new StoryTellerResourceLoader("Storyteller.stylesheets.bootstrap.min.css"))
                .AddFile(new StoryTellerResourceLoader("StoryTeller.stylesheets.storyteller.css"))
                .AddFile(new StoryTellerResourceLoader("StoryTeller.stylesheets.fixed-data-table.min.css"));
        }

        public static HtmlDocument BuildResults(BatchRunResponse results)
        {
            var document = new HtmlDocument
            {
                Title = "Storyteller Batch Results for {0}: {1}".ToFormat(results.system, results.suite)
            };
                        
            var builders = new IDocumentBuilder[] {
                new StyleTagBuilder(cssBundle),
                new ReportPartBuilder(),
                new ScriptTagBuilder(jsBundle),                
            };

            foreach (var builder in builders.Concat(attachments))
            {
                builder.Apply(document, results);
            }

            return document;
        }

        public static HtmlTag StyleTag()
        {
            return new StyleTagBuilder(cssBundle);
        }

        public static void Attachment(IDocumentBuilder builder)
        {
            // TODO: this is bad and needs to be changed.  
            // Sorry for the HACK!!!!!.
            attachments.Add(builder);            
        }
    }
}
