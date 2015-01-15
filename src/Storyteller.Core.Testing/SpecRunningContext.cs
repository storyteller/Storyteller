using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using FubuCore;
using NUnit.Framework;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;
using Storyteller.Core.Persistence;
using Storyteller.Core.Results;

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
            try
            {
                if (_context != null)
                {
                    var messages = _expectations
                        .Select(x => x(_context))
                        .Where(x => x.IsNotEmpty())
                        .ToArray();

                    if (messages.Any())
                    {
                        Assert.Fail("Expectations failed!\n" + messages.Join("\n") + "\n\nThe full results were: \n" + _context.Results.Select(x => x.ToString()).Join("\n"));
                    }
                }
            }
            finally
            {
                _expectations.Clear();
            }
        }

        protected void CountsShouldBe(int rights, int wrongs, int exceptions, int syntaxErrors)
        {
            expect = c =>
            {
                var expected = new Counts(rights, wrongs, exceptions, syntaxErrors);
                if (!c.Counts.Equals(expected))
                {
                    return "Expected counts {0}, but got {1}".ToFormat(expected, c.Counts);
                }

                return null;
            };
        }

        protected void TheStepsThatExecutedWere(params string[] idList)
        {
            expect = context =>
            {
                var actual = context.Results.Select(x => x.id).Distinct().OrderBy(x => x).ToArray();
                var expected = idList.OrderBy(x => x).ToArray();

                if (!actual.SequenceEqual(expected))
                {
                    return "Expected these id's to be executed: " + expected.Join(", ") + "\n"
                         + "                           but was: " + actual.Join(", ");

                }

                return null;
            };
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

            public ResultExpression ErrorContains(string text)
            {
                _parent.expect = c =>
                {
                    var result = c.Results.OfType<StepResult>().FirstOrDefault(x => x.id == _id);
                    if (result == null)
                    {
                        return "Unable to find any result for Step " + _id;
                    }

                    if (result.status != ResultStatus.error)
                    {
                        return "The status for {0} was not error.".ToFormat(_id);
                    }

                    if (!result.error.Contains(text))
                    {
                        return "The error for {0} should have contained '{1}', but was {2}".ToFormat(_id, text,
                            result.error);
                    }

                    return null;
                };
                return this;
            }
        }
    }
}