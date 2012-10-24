using System;
using System.Collections.Generic;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Engine
{
    public class CheckGrammar<T> : LineGrammar
    {
        private readonly Func<T> _check;
        private readonly string _key;

        public CheckGrammar(string key, Func<T> check)
            : base("Check " + key + " should be {" + key + "}")
        {
            _key = key;
            _check = check;
        }

        public override string Description { get { return Template; } }

        private Cell cell()
        {
            return Cell.ResultFor<T>(_key);
        }

        public override void Execute(IStep step, ITestContext context)
        {
            context.PerformAction(step, () =>
            {
                object rawValue = _check();
                cell().RecordActual(rawValue, step, context);
            });
        }

        public override IList<Cell> GetCells()
        {
            return new List<Cell>
            {
                cell()
            };
        }
    }

}