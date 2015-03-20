using System;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore.Reflection;
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
            _invocation = new MethodInvocation(method, target);
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            return new Sentence
            {
                format = _method.DeriveFormat()
            };
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            return new FactPlan(new StepValues(step.id), this);
        }

        public bool PerformTest(StepValues values, ISpecContext context)
        {
            return (bool) _invocation.Invoke(values);
        }

        public static FactMethod For<T>(T target, Expression<Func<T, bool>> methodExpression)
        {
            MethodInfo method = ReflectionHelper.GetMethod(methodExpression);
            var grammar = new FactMethod(method, target);

            grammar.Compile(new Fixture(), CellHandling.Basic());

            return grammar;
        }

        public string Key { get; set; }
    }
}