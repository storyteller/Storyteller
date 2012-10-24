using System.Collections.Generic;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    /// <summary>
    /// Grammar object that performs an action silently
    /// </summary>
    public class DoGrammar : IGrammar
    {
        private readonly GrammarAction _action;

        public DoGrammar(GrammarAction action)
        {
            _action = action;
        }

        #region IGrammar Members

        public void Execute(IStep containerStep, ITestContext context)
        {
            _action(containerStep, context);
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            return new DoGrammarStructure();
        }

        public string Description { get { return string.Empty; } }

        #endregion

        public IList<Cell> GetCells()
        {
            return new List<Cell>();
        }
    }
}