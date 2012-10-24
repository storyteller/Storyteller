using System;
using System.Linq;
using HtmlTags;
using StoryTeller.Engine;
using StoryTeller.Html;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class GrammarTag : HtmlTag
    {
        private readonly GrammarStructure _grammar;

        public GrammarTag(GrammarStructure grammar)
            : base("div")
        {
            _grammar = grammar;

            try
            {
                this.AddSafeClassName(grammar.Name);
            }
            catch (Exception)
            {
            }

            AddClass(GrammarConstants.STEP);
            MetaData(GrammarConstants.KEY, grammar.Name);
        }

        public GrammarStructure Grammar { get { return _grammar; } }

        public void AddDeleteLink()
        {
            FixtureStructure fixture = _grammar.Parent;
            var link = new RemoveLinkTag(fixture);


            var header = Children.FirstOrDefault(x => x is HeaderTag) as HeaderTag;
            if (header == null)
            {
                Append(link);
            }
            else
            {
                header.AddRemoveLink(link);
            }
        }

        public CellTag AddCell(Cell cell, string tagName)
        {
            var child = new CellTag(cell, tagName);
            Append(child);

            return child;
        }
    }
}