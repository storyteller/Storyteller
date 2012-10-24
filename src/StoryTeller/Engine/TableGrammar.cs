using System;
using System.Collections.Generic;
using System.Linq;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public class TableGrammar : IGrammarWithCells
    {
        private GrammarAction _after = (s, c) => { };
        private GrammarAction _before = (s, c) => { };
        private string _leafName;


        public TableGrammar(IGrammarWithCells innerGrammar, string leafName)
            : this(leafName)
        {
            InnerGrammar = innerGrammar;
        }

        protected TableGrammar(string leafName)
        {
            _leafName = leafName;
            LabelName = leafName;
        }

        public string LabelName { get; set; }

        public IGrammarWithCells InnerGrammar { get; protected set; }

        #region IGrammarWithCells Members

        public void Execute(IStep containerStep, ITestContext context)
        {
            context.PerformAction(containerStep, _before);

            containerStep.LeafFor(_leafName).AllSteps().Each(step => { context.RunStep(InnerGrammar, step); });

            context.PerformAction(containerStep, _after);
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            Cell[] cells = InnerGrammar.GetCells().Select(c => c.ToInputCell()).ToArray();

            return new Table(LabelName, LeafName(), cells);
        }

        public string Description { get; set; }

        public IList<Cell> GetCells()
        {
            return InnerGrammar.GetCells();
        }

        public void ExecuteCurriedStep(IStep step, ITestContext context)
        {
            throw new NotImplementedException();
        }

        #endregion

        public string LeafName()
        {
            return _leafName;
        }

        public TableGrammar LeafName(string leafName)
        {
            _leafName = leafName;
            return this;
        }

        public TableGrammar Before(GrammarAction action)
        {
            _before = action;
            return this;
        }

        public TableGrammar Before(Action action)
        {
            return Before(action.ToGrammarAction());
        }

        public TableGrammar After(GrammarAction action)
        {
            _after = action;
            return this;
        }

        public TableGrammar After(Action action)
        {
            return After(action.ToGrammarAction());
        }
    }
}