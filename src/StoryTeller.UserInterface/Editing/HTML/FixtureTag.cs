using System.Collections.Generic;
using System.Diagnostics;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Html;
using StoryTeller.Model;
using StoryTeller.UserInterface.Editing.HTML.Tables;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class FixtureTag : HtmlTag, IGrammarVisitor
    {
        private readonly FixtureStructure _fixture;
        private readonly Stack<GrammarTag> _grammarTags = new Stack<GrammarTag>();

        public FixtureTag(FixtureStructure fixture)
            : base("div")
        {
            Id(fixture.Name);
            _fixture = fixture;

            Add<CommentTag>();
            Add<TagsTag>();

            fixture.TopLevelGrammars().Each(writeGrammar);
        }

        public FixtureStructure Fixture { get { return _fixture; } }

        private GrammarTag grammarTag { get { return _grammarTags.Peek(); } }

        #region IGrammarVisitor Members

        void IGrammarVisitor.Sentence(Sentence sentence, IStep step)
        {
            // TODO -- extension point for external CellBuilders?
            var writer = new SentenceWriter(grammarTag, new CellBuilderLibrary());
            writer.Write();
        }

        void IGrammarVisitor.Table(Table table, IStep step)
        {
            writeTable(table);
        }

        private void writeTable(Table table)
        {
            grammarTag.MetaData(GrammarConstants.LEAF_NAME, table.LeafName);
            grammarTag.AddClass(GrammarConstants.TABLE_EDITOR);

            var area = new AreaTag(table.Label);
            var container = area.Container.Add("div").AddClass("section-container");

            container.Add<TableEditorTag>();
            container.Append(new ColumnSelectionTag(table));
            container.Append(new TableTemplateTag(table, new CellBuilderLibrary()));

            grammarTag.Append(area);
        }

        void IGrammarVisitor.SetVerification(SetVerification setVerification, IStep step)
        {
            writeTable(setVerification);
        }

        void IGrammarVisitor.Paragraph(Paragraph paragraph, IStep step)
        {
            grammarTag.AddClasses(GrammarConstants.PARAGRAPH, paragraph.Style.ToString());
            var area = new AreaTag(paragraph.Label);
            var container = area.Container.Add("div")
                .AddClass(paragraph.Style.ToString())
                .AddClass("section-container")
                .AddClass("in-paragraph");
            grammarTag.Append(area);



            paragraph.ForEachGrammar(g =>
            {
                var tag = new GrammarTag(g);

                container.Append(tag);

                _grammarTags.Do(tag, () => g.AcceptVisitor(this, new Step()));
            });
        }

        void IGrammarVisitor.EmbeddedSection(EmbeddedSection section, IStep step)
        {
            grammarTag.AddClasses(GrammarConstants.EMBEDDED, GrammarConstants.SECTION)
                .MetaData(GrammarConstants.LEAF_NAME, section.LeafName)
                .MetaData(GrammarConstants.FIXTURE, section.Fixture.Name)
                .MetaData(GrammarConstants.AUTO_SELECT_KEY, section.Fixture.Policies.AutoSelectGrammarKey)
                .MetaData(GrammarConstants.SELECTION_MODE, section.Fixture.Policies.SelectionMode.ToString());

            var area = section.IsTitled() ? new AreaTag(section.Label) : new AreaTag();
            var container = area.Container.Add("div").AddClass("section-container");
            container.Append(new HolderTag(section.Fixture));
            
            if (section.Fixture.Policies.SelectionMode != SelectionMode.MandatoryAutoSelect)
            {
                var selector = new GrammarSelector(section.Fixture).Build();
                container.Append(selector);
            }

            grammarTag.Append(area);
        }

        void IGrammarVisitor.DoGrammar(DoGrammarStructure grammar, IStep step)
        {
            grammarTag.Render(false);
        }

        #endregion

        public GrammarTag Add(GrammarStructure structure)
        {
            var childGrammarTag = new GrammarTag(structure);
            Append(childGrammarTag);

            _fixture.Policies.Tags(structure.Name).Each(tag => childGrammarTag.AddSafeClassName(tag));

            return childGrammarTag;
        }

        private void writeGrammar(GrammarStructure grammar)
        {
            GrammarTag tag = Add(grammar);

            _grammarTags.Do(tag, () => grammar.AcceptVisitor(this, new Step()));
        }
    }
}