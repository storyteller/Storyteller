using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Shouldly;
using Specifications;
using StoryTeller.Engine;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.NewEngine;
using StoryTeller.Results;
using StoryTeller.Samples.Fixtures;
using IExecutionContext = StoryTeller.Engine.IExecutionContext;

namespace StoryTeller.Testing
{
    
    public abstract class SpecRunningContext : IDisposable
    {
        private readonly IList<Func<ExecutionResult, string>> _expectations 
            = new List<Func<ExecutionResult, string>>();

        protected Func<ExecutionResult, string> expect
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
            using (var runner = theHostBuilder.ToAdhocRunner().GetAwaiter().GetResult())
            {
                theResult = runner.Run(spec).GetAwaiter().GetResult();
            }
        }

        public PerfRecord[] PerfRecords => theResult.Performance;



        public readonly InMemoryServiceProvider Services = new InMemoryServiceProvider();

        protected SpecRunningContext()
        {
            theHostBuilder = new StorytellerHostBuilder(Services).LoadParallelProjectContainingType<FailureFixture>();
        }

        public StorytellerHostBuilder theHostBuilder { get; set; }

        public void Dispose()
        {
            try
            {
                if (theResult != null)
                {
                    var messages = _expectations
                        .Select(x => x(theResult))
                        .Where(x => x.IsNotEmpty())
                        .ToArray();

                    if (messages.Any())
                    {
                        throw new Exception("Expectations failed!\n" + messages.Join("\n") + "\n\nThe full results were: \n" + theResult.Results.Select(x => x.ToString()).Join("\n"));
                    }
                }
            }
            finally
            {
                _expectations.Clear();
            }
        }

        protected ExecutionResult theResult { get; private set; }

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

        protected ResultExpression Step(string id)
        {
            return new ResultExpression(id, this);
        }

        protected SetVerificationResult VerificationResultFor(string id)
        {
            return theResult.Results.FirstOrDefault(x => x.id == id).SetVerification;
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

            private StepResult findStepResult(ExecutionResult context)
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

                private CellResult findResult(ExecutionResult context)
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

            public void HasNoPerformanceLimitViolation()
            {
                ShouldHaveExecuted();

                _parent.expect = c =>
                {
                    var result = findStepResult(c);
                    if (result != null)
                    {
                        if (result.status == ResultStatus.error && result.error.Contains("Performance threshold violation"))
                        {
                            return $"Step {result.id} had a performance threshold violation";
                        }
                    }



                    return null;
                };
            }

            public void ViolatesPerformanceLimit()
            {
                ShouldHaveExecuted();


                _parent.expect = c =>
                {
                    var result = findStepResult(c);
                    if (result != null)
                    {
                        if (result.status != ResultStatus.error || (result.error.IsEmpty() && !result.error.Contains("Performance threshold violation")))
                        {
                            return $"Step {result.id} should have had a performance threshold violation, but did not";
                        }
                    }



                    return null;
                };
            }
        }
    }
}
