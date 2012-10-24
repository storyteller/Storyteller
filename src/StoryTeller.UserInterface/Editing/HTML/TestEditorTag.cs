using HtmlTags;
using HtmlTags.Extended.TagBuilders;
using StoryTeller.Html;
using StoryTeller.Model;
using System.Linq;

namespace StoryTeller.UserInterface.Editing.HTML
{
    

    public class TestEditorTag : HtmlTag
    {
        private readonly HtmlTag _container;

        public TestEditorTag(FixtureLibrary library) : base("div")
        {
            AddClass("main");
            Add("h2").AddClass(HtmlClasses.TEST_NAME);
            Id("testEditor");

            AddClass(HtmlClasses.TEST_EDITOR);

            _container = Add("div").AddClasses("container", HtmlClasses.SECTION, "test-editor");

            FixtureStructure fixture = library.BuildTopLevelGraph();

            HtmlTag holder = new HolderTag(fixture).AddClass("top-level-holder");
            holder.Children.Last().Render(false);

            Container
                .MetaData(GrammarConstants.LEAF_NAME, GrammarConstants.TEST)
                .MetaData(GrammarConstants.FIXTURE, GrammarConstants.TEST)
                .MetaData(GrammarConstants.SELECTION_MODE, SelectionMode.OneOrMore.ToString())
                .Append(holder)
                .Append(new HtmlTag("hr"));

            
            Container.ActionLink(fixture.Policies.AddGrammarText, GrammarConstants.ADD_SECTION_ACTIVATOR);
            Container.Append(new GrammarSelector(fixture).Build());

                
        }

        /*
            Add("div").AddClass(GrammarConstants.STEP_HOLDER);

            if (fixture.IsSingleSelection() || fixture.Policies.SelectionMode == SelectionMode.MandatoryAutoSelect)
            {
                return;
            }

            this.ActionLink(fixture.Policies.AddGrammarText, GrammarConstants.ADD_SECTION_ACTIVATOR);
         */

        public HtmlTag Container { get { return _container; } }
    }
}