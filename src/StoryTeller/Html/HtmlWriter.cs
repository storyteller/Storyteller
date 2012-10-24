using System;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Html
{
    public class HtmlWriter : IHtmlWriter
    {
        private readonly FixtureLibrary _library;


        public HtmlWriter(FixtureLibrary library)
        {
            _library = library;
        }

        #region IHtmlWriter Members

        public HtmlDocument WritePreview(Test test)
        {
            var writer = new PreviewWriter(new TestContext());
            new TestParser(test, writer, _library).Parse();

            return writer.Document;
        }

        #endregion
    }
}