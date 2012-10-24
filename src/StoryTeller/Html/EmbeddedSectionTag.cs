using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using FubuCore;

namespace StoryTeller.Html
{
    public class SectionTag : HtmlTag
    {
        private readonly Section _section;
        private readonly FixtureStructure _fixture;
        private readonly HtmlTag _body;

        public SectionTag(Section section, FixtureStructure fixture)
            : base("div")
        {
            _section = section;
            _fixture = fixture;

            Add("h3").Text(_fixture.Label ?? _fixture.Name).AddClass(HtmlClasses.SECTION_TITLE).Title(fixture.FixtureClassName);

            AddClass("section");

            _body = Add("div").AddClass("section-body");
        }

        public HtmlTag Body { get { return _body; } }

        public void WriteResults(ITestContext context)
        {
            context.ResultsFor(_section).ForExceptionText(text => _body.Append(new ExceptionTag(text)));
        }
    }


    public class EmbeddedSectionTag : HtmlTag
    {
        private readonly EmbeddedSection _section;
        private readonly IStep _step;

        public EmbeddedSectionTag(EmbeddedSection section, IStep step) : base("div")
        {
            _section = section;
            _step = step;

            AddClass("embedded");

            AddClass(section.Style.ToString());

            if (section.Style == EmbedStyle.TitledAndIndented)
            {
                Add("h3").AddClass("embedded-title").Text(section.Label).Title("{0} (Embeds {1})".ToFormat(section.Name, section.Fixture.FixtureClassName));
            }
        }

        public void WritePreview(ITestContext context)
        {
            
        }

        public void WriteResults(ITestContext context)
        {
            context.ResultsFor(_step).ForExceptionText(text => Append(new ExceptionTag(text)));
        }
    }
}