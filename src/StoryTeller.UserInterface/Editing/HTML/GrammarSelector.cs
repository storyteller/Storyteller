using System;
using System.Collections.Generic;
using System.Linq;
using HtmlTags;
using HtmlTags.Extended.TagBuilders;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class SelectorLinkTag : HtmlTag
    {
        private readonly HtmlTag _link;

        public SelectorLinkTag(string key)
            : base("div")
        {
            AddClass(GrammarConstants.ADD_LINK).Id(key).MetaData(GrammarConstants.KEY, key);
            _link = Add("a").Attr("href", "#");
        }

        public void Label(string text)
        {
            _link.Add("span").Text(text);
        }

        public void Input(string text)
        {
            _link.Add("span").Text(text).AddClass(GrammarConstants.VARIABLE);
        }
    }

    public class GrammarSelector : IGrammarVisitor, ISentenceVisitor
    {
        private readonly IFixtureStructure _fixture;
        private SelectorLinkTag _link;

        public GrammarSelector(IFixtureStructure fixture)
        {
            _fixture = fixture;
        }

        #region IGrammarVisitor Members

        void IGrammarVisitor.Sentence(Sentence sentence, IStep step)
        {
            sentence.Parts.Each(x => x.AcceptVisitor(this));
        }

        void IGrammarVisitor.Table(Table table, IStep step)
        {
            _link.Label(table.Label);
        }

        void IGrammarVisitor.SetVerification(SetVerification setVerification, IStep step)
        {
            _link.Label(setVerification.Label);
        }

        void IGrammarVisitor.Paragraph(Paragraph paragraph, IStep step)
        {
            _link.Label(paragraph.Label);
        }

        void IGrammarVisitor.EmbeddedSection(EmbeddedSection section, IStep step)
        {
            _link.Label(section.Label);
        }

        void IGrammarVisitor.DoGrammar(DoGrammarStructure grammar, IStep step)
        {
        }

        #endregion


        public void Label(Label label)
        {
            _link.Label(label.Text);
        }

        public void Input(TextInput input)
        {
            _link.Input(input.Cell.Header);
        }

        public HtmlTag Build()
        {
            HtmlTag tag = buildTopNode();
            var body = tag.Add("tbody");

            AddTaggingLinkIfAtTopLevel(body);

            var commentLink = new SelectorLinkTag(GrammarConstants.COMMENT);
            commentLink.Label(GrammarConstants.COMMENT);
            body.Add("tr").Append(commentLink.TagName("td"));



            _fixture.PossibleGrammarsFor(new StepLeaf()).Where(x => !(x is DoGrammarStructure)).Each(grammar =>
            {
                _link = new SelectorLinkTag(grammar.Name);
                _link.TagName("td");
                body.Add("tr").Append(_link);

                grammar.AcceptVisitor(this, new Step());
            });

            return tag;
        }

        private void AddTaggingLinkIfAtTopLevel(HtmlTag body)
        {
            if (!_fixture.IsAFixture())
            {
                var tagsLink = new SelectorLinkTag(GrammarConstants.TAGS);
                tagsLink.Label(GrammarConstants.TAGS_LABEL);
                body.Add("tr").Append(tagsLink.TagName("td"));
            }
        }

        private HtmlTag buildTopNode()
        {
            HtmlTag tag = new HtmlTag("table").Attr("cellPadding", "0").Attr("cellSpacing", "0").AddClass(GrammarConstants.GRAMMAR_SELECTOR).Hide();
            HtmlTag headerCell = tag.Add("thead/tr/td").AddClass(GrammarConstants.HEADER_CONTAINER);
            headerCell.Add("span").Text(_fixture.Policies.AddGrammarText);
            headerCell.Add("span").AddClass(GrammarConstants.SELECTION_REQUIRED).Text(GrammarConstants.REQUIRED).Render
                (_fixture.IsSingleSelection());
                
            headerCell.ActionLink(GrammarConstants.CLOSE, GrammarConstants.CLOSER).Render(!_fixture.IsSingleSelection());

            return tag;
        }
    }
}