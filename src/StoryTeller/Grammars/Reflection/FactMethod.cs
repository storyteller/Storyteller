using System;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;
using Baseline.Reflection;
using StoryTeller.Conversion;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Reflection
{
    public class FactMethod : IFactGrammar
    {
        private readonly MethodInvocation _invocation;
        private readonly MethodInfo _method;

        public FactMethod(MethodInfo method, object target)
        {
            _method = method;
            _invocation = MethodInvocation.For(method, target);
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            return new Sentence
            {
                format = _method.DeriveFormat(),
                fact = true
            };
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library, bool inTable = false)
        {
            return new FactPlan(new StepValues(step.id), this);
        }

        public bool PerformTest(StepValues values, ISpecContext context)
        {
            return _invocation.InvokeTest(values);
        }

        public static FactMethod For<T>(T target, Expression<Func<T, bool>> methodExpression)
        {
            MethodInfo method = ReflectionHelper.GetMethod(methodExpression);
            var grammar = new FactMethod(method, target);

            grammar.Compile(new Fixture(), CellHandling.Basic());

            return grammar;
        }

        public string Key { get; set; }
        public bool IsHidden { get; set; }
        public bool IsAsync()
        {
            return _invocation.IsAsync();
        }

        public Task<bool> PerformTestAsync(StepValues values, ISpecContext context)
        {
            return _invocation.InvokeTestAsync(values);
        }

        public long MaximumRuntimeInMilliseconds { get; set; }
    }
}