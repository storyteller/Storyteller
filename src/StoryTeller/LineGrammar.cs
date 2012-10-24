using System;
using System.Collections.Generic;
using System.Linq;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller
{
    public interface IGrammarWithCells : IGrammar
    {
        IList<Cell> GetCells();
        void ExecuteCurriedStep(IStep step, ITestContext context);
    }

    public static class GrammarWithCellsExtensions
    {
        public static Cell FindCell(this IGrammarWithCells grammar, string key)
        {
            return grammar.GetCells().FirstOrDefault(x => x.Key == key);
        }
    }

    // SAMPLE:  LineGrammar
    public abstract class LineGrammar : IGrammarWithCells
    {
        // Leave these constructors as public
        public LineGrammar()
        {
            Template = string.Empty;
        }

        public LineGrammar(string template)
        {
            Template = template;
        }

        public virtual string Template { get; set; }

        public abstract string Description { get; }

        public abstract void Execute(IStep containerStep, ITestContext context);

        public abstract IList<Cell> GetCells();
        public void ExecuteCurriedStep(IStep step, ITestContext context)
        {
            // Nothing special here
            Execute(step, context);
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            if (library == null) throw new ArgumentNullException("library");

            Cell[] cells = GetCells().Select(x => x.ToInputCell()).ToArray();

            return new Sentence(Template, cells);
        }
    }
    // END:  LineGrammar
}