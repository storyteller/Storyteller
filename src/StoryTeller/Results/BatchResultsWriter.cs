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

        public static HtmlDocument BuildResults(BatchRunResponse results)
        {
            var document = new HtmlDocument
            {
                Title = "Storyteller Batch Results for {0}: {1}".ToFormat(results.system, results.suite)
            };

            var jsFile = new ResourceFileLoader("StoryTeller.batch-bundle.js");
            var cssFiles = new CombinedResourceLoader()
                .AddFile(new ResourceFileLoader("Storyteller.stylesheets.bootstrap.min.css"))
                .AddFile(new ResourceFileLoader("StoryTeller.stylesheets.storyteller.css"))
                .AddFile(new ResourceFileLoader("StoryTeller.stylesheets.fixed-data-table.min.css"));            
            
            var builders = new IDocumentBuilder[] {
                new StyleTagBuilder(cssFiles),
                new ReportPartBuilder(),
                new ScriptTagBuilder(jsFile),                
            };

            foreach (var builder in builders.Concat(attachments))
            {
                builder.Apply(document, results);
            }

            return document;
        }

        public static void Attachment(IDocumentBuilder builder)
        {
            // TODO: this is bad and needs to be changed.  
            // Sorry for the HACK!!!!!.
            attachments.Add(builder);            
        }
    }
}
