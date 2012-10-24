using System.Linq;
using HtmlTags;
using StoryTeller.Model;
using System.Collections.Generic;
using FubuCore;

namespace StoryTeller.Html
{
    public class FixtureLibraryErrorWriter
    {
        public HtmlDocument BuildReport(FixtureLibrary library)
        {
            var document = new HtmlDocument();
            document.Title = "Fixture / Grammar Report Writer";
            document.AddStyle(HtmlClasses.CSS());

            library.ActiveFixtures.Where(f => f.Errors.Any()).Each(f => writeFailedFixture(document, f));

            library.ActiveFixtures.Where(f => f.HasGrammarErrors()).Each(f =>
            {
                writeGrammarErrorsFromFixture(document, f);
            });

            return document;
        }

        private void writeFailedFixture(HtmlDocument document, FixtureStructure fixture)
        {
            document.Add("h3").Text("Fixture:  " + fixture.Name);

            fixture.Errors.Each(e =>
            {
                document.Add("div").Append(new ExceptionTag(e.ErrorText));
            });

            document.Add("hr");
        }

        private void writeGrammarErrorsFromFixture(HtmlDocument document, FixtureStructure fixture)
        {
            document.Add("h3").Text("Fixture:  " + fixture.FixtureClassName);
            document.Add("ul").Modify(ul => fixture.Grammars.Each(g => writeGrammarErrors(ul, g)));
        }

        private void writeGrammarErrors(HtmlTag ul, GrammarStructure grammar)
        {
            grammar.AllErrors().Each(x => ul.Add("li").Text("Grammar {0}:  ".ToFormat(grammar.Name) + x.Message));
        }
    }
}