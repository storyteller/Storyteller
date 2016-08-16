using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Xunit;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Results;

namespace StoryTeller.Testing
{
    
    public abstract class SpecRunningContext : IDisposable
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
            executeSpec(spec);
        }

        protected void executeSpec(Specification spec)
        {
            _context = new SpecContext(spec, null, new NulloResultObserver(), new StopConditions(), new TestExecutionContext(Services));

            var plan = spec.CreatePlan(TestingContext.Library);

            var executor = new SynchronousExecutor(_context);
            plan.AcceptVisitor(executor);
        }

        public class TestExecutionContext : IExecutionContext
        {
            private readonly InMemoryServiceLocator _services;

            public void Register<T>(T service)
            {
                _services.Add(service);
            }

            public TestExecutionContext(InMemoryServiceLocator services)
            {
                _services = services;
            }

            void IDisposable.Dispose()
            {
            }

            public T GetService<T>()
            {
                return _services.GetInstance<T>();
            }

            public void BeforeExecution(ISpecContext context)
            {
                
            }

            public void AfterExecution(ISpecContext context)
            {
                // Nothing
            }
        }


        public readonly InMemoryServiceLocator Services = new InMemoryServiceLocator();

        public void Dispose()
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
                        throw new Exception("Expectations failed!\n" + messages.Join("\n") + "\n\nThe full results were: \n" + _context.Results.Select(x => x.ToString()).Join("\n"));
                    }
                }
            }
            finally
            {
                _expectations.Clear();
            }
        }

        protected SpecContext theContext => _context;

        protected T ModelFor<T>(string fixtureName, string grammarName) where T : GrammarModel
        {
            return TestingContext.Library.Models[fixtureName].FindGrammar(grammarName).ShouldBeOfType<T>();
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
                var actual = context.Results.Where(x =>
                {
                    if (x is SetVerificationResult) return true;

                    var result = x.As<StepResult>();
                    if (result.position == null) return true;

                    if (result.position.Equals(Stage.setup.ToString()) || result.position.Equals(Stage.teardown.ToString())) return false;

                    return true;
                }).Select(x => x.id).Distinct().OrderBy(x => x).ToArray();
                var expected = idList.OrderBy(x => x).ToArray();

                if (!actual.SequenceEqual(expected))
                {
                    return "Expected these id's to be executed: " + expected.Join(", ") + "\n"
                         + "                           but was: " + actual.Join(", ");

                }

                return null;
            };
        }

        protected State SpecContextState => _context.State;

        protected ResultExpression Step(string id)
        {
            return new ResultExpression(id, this);
        }

        protected SetVerificationResult VerificationResultFor(string id)
        {
            return _context.Results.OfType<SetVerificationResult>().FirstOrDefault(x => x.id == id);
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
                    var result = findStepResult(c);
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

            private StepResult findStepResult(SpecContext context)
            {
                return context.Results.OfType<StepResult>().FirstOrDefault(x => x.id == _id);
            }

            public void StatusWas(ResultStatus resultStatus)
            {
                ShouldHaveExecuted();

                _parent.expect = c =>
                {
                    var result = findStepResult(c);
                    if (result != null)
                    {
                        if (result.status != resultStatus)
                        {
                            return "Expected status {0} for #{1}, but got {1}".ToFormat(resultStatus, _id, result.status);
                        }
                    }



                    return null;
                };
            }

            public CellExpression Cell(string key)
            {
                return new CellExpression(this, key);
            }

            public class CellExpression
            {
                private readonly ResultExpression _parent;
                private readonly string _cell;

                public CellExpression(ResultExpression parent, string cell)
                {
                    _parent = parent;
                    _cell = cell;
                }

                private CellResult findResult(SpecContext context)
                {
                    var stepResult =
                        context.Results.OfType<StepResult>()
                            .Where(x => x.id == _parent._id)
                            .FirstOrDefault(x => x.cells.Any(c => c.cell == _cell));

                    return stepResult != null ? stepResult.cells.FirstOrDefault(x => x.cell == _cell) : null;
                }

                public void Succeeded()
                {
                    _parent.ShouldHaveExecuted();

                    _parent._parent.expect = c =>
                    {
                        var result = findResult(c);
                        if (result == null)
                        {
                            return "Step {0}, cell {1} cannot be found in the results".ToFormat(_parent._id, _cell);
                        }
                        
                        if (result.Status != ResultStatus.success)
                        {
                            return "Step {0}, cell {1} should have been successful, but was {2}".ToFormat(_parent._id, _cell, result.Status);
                        }

                        return null;
                    };
                }

                public void FailedWithActual(string actual)
                {
                    _parent.ShouldHaveExecuted();

                    _parent._parent.expect = c =>{
                    {
                        var result = findResult(c);
                        if (result == null)
                        {
                            return "Step {0}, cell {1} cannot be found in the results".ToFormat(_parent._id, _cell);
                        }

                        if (result.Status != ResultStatus.failed)
                        {
                            return
                                "Step {0}, cell {1} was supposed to fail, but finished w/ status {2}".ToFormat(
                                    _parent._id, _cell, result.Status);
                        }
                        
                        if (result.actual != actual)
                        {
                            return "Step {0}, cell {1} recorded an actual of '{2}'".ToFormat(_parent._id, _cell,
                                result.actual);
                        }
                    }

                        return null;
                    };
                }

                public void WasInvalid()
                {
                    _parent.ShouldHaveExecuted();

                    _parent._parent.expect = c =>
                    {
                        {
                            var result = findResult(c);
                            if (result == null)
                            {
                                return "Step {0}, cell {1} cannot be found in the results".ToFormat(_parent._id, _cell);
                            }

                            if (result.Status != ResultStatus.invalid)
                            {
                                return
                                    "Step {0}, cell {1} was supposed to be invalid, but finished w/ status {2}".ToFormat(
                                        _parent._id, _cell);
                            }

                        }

                        return null;
                    };
                }
            }
        }
    }
}