namespace StoryTeller.Results
{
    /// <summary>
    /// Defines the document builders required to bootstrap the default script and styles
    /// for storyteller. 
    /// </summary>
    public class DefaultHtmlDocumentBuilder : HtmlDocumentBuilder
    {
        /// <summary>
        /// Creates an instance of <see cref="DefaultHtmlDocumentBuilder"/> by registering the
        /// required JS and CSS bundles along with the packaged report results.  
        /// </summary>
        public DefaultHtmlDocumentBuilder()
        {
            var jsBundle = new StoryTellerResourceLoader("StoryTeller.batch-bundle.js");
            var cssBundle = new CombinedResourceLoader()
                .AddLoader(new StoryTellerResourceLoader("Storyteller.stylesheets.bootstrap.min.css"))
                .AddLoader(new StoryTellerResourceLoader("StoryTeller.stylesheets.storyteller.css"))
                .AddLoader(new StoryTellerResourceLoader("StoryTeller.stylesheets.fixed-data-table.min.css"));

            this.Add(new StoryTellerTitleBuilder());
            this.Add(new StyleTagBuilder(cssBundle));
            this.Add(new ReportPartBuilder());
            this.Add(new ScriptTagBuilder(jsBundle));
        }
    }
}
