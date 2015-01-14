using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using FubuCore;
using NUnit.Framework;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;
using Storyteller.Core.Persistence;

namespace Storyteller.Core.Testing
{
    [TestFixture]
    public abstract class SpecRunningContext
    {
        private SpecContext _context;
        private readonly IList<Func<SpecContext, string>> _expectations 
            = new List<Func<SpecContext, string>>();

        protected Func<SpecContext, string> expect
        {
            set
            {
                _expectations.Add(value);
            }
        } 

        protected void execute(string text)
        {
            var spec = TextParser.Parse(text);
            _context = new SpecContext(new NulloExecutionObserver(), new CancellationTokenSource().Token);

            var plan = spec.CreatePlan(FixtureLibrary.CreateForAppDomain());

            new SynchronousExecutor(_context, plan).Execute();


            // TODO -- you know, actually run something.
        }

        [TearDown]
        public void TearDown()
        {
            if (_context != null)
            {
                var messages = _expectations
                    .Select(x => x(_context))
                    .Where(x => x.IsNotEmpty())
                    .ToArray();

                if (messages.Any())
                {
                    Assert.Fail("Expectations failed!\n" + messages.Join("\n"));
                }
            }
        }

        protected ResultExpression Step(string id)
        {
            return new ResultExpression(id, this);
        }


        public class ResultExpression
        {
            private readonly string _id;
            private readonly SpecRunningContext _parent;

            public ResultExpression(string id, SpecRunningContext parent)
            {
                _id = id;
                _parent = parent;
            }

            public ResultExpression ShouldHaveExecuted()
            {
                _parent.expect = c =>
                {
                    if (!c.Results.Any(x => x.id == _id))
                    {
                        return "Step/Section with id={0} was not executed".ToFormat(_id);
                    }


                    return null;
                };

                return this;
            }

            public ResultExpression ShouldNotHaveExecuted()
            {
                _parent.expect = c =>
                {
                    if (c.Results.Any(x => x.id == _id))
                    {
                        return "Step/Section with id={0} was executed".ToFormat(_id);
                    }


                    return null;
                };

                return this;
            }
        }
    }
}