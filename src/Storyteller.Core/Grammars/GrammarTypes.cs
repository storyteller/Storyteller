using System;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using Storyteller.Core.Conversion;

namespace Storyteller.Core.Grammars
{
    /*
     * DoGrammar -- exactly what it sounds like. Do it as a placeholder if nothing else.
     * EmbeddedSectionGrammar<T>
     * ImportedGrammar -- Not entirely sure I wanna have to support this feature this time around.
     * SetVerificationGrammar
     * ActionGrammar -- just runs an Action w/ no inputs
     * ActionGrammar<T> -- Gets a single input, runs an action
     * ActionMethodGrammar -- calls a method on a fixture w/ no output
     * CheckGrammar<T> -- checks the result of a value found from a Func<T>
     * CheckPropertyGrammar -- checks the value of a property of the current object
     * ConfigureObjectGrammar<TObject, TInput> -- do anything using a TInput to the object
     * CreateObjectGrammar<TObject, TInput> -- creates a new object using and input and puts it on the current
     * CurriedLineGrammar -- runs a sentence, but fills in some defaults first.
     * DecisionTableGrammar -- Still proud of this one.
     * DecoratedLineGrammar -- dunno if this is still useful
     * FactAssertion <-- fact assertion done via a method that returns a boolean
     * FactGrammar <-- done via a Func<ITestContext, bool>
     * ParagraphGrammar
     * LineGrammar -- base class, think we'd do it differently
     * ReflectionGrammar -- base class that calls a method. Think we'd do it differently
     * ServiceActionGrammar<TService, TCellType> -- calls a service with an action 
     * ServiceAssertionGrammar<TService, TCellType> -- calls a service with a Func and checks the value
     * SetPropertyGrammar -- sets a property on the current object
     * TableGrammar - 
     * TableLineGrammar - used w/ DecisionTableGrammar
     * ValueCheckMethod - calls a method and checks the return value

     * 
     */

    public class LinePlan : IExecutionPlan
    {
        private readonly StepValues _values;
        private readonly Action<ISpecContext, StepValues> _action;

        public LinePlan(StepValues values, Action<ISpecContext, StepValues> action)
        {
            _values = values;
            _action = action;
        }

        public void Execute(ISpecContext context)
        {
            try
            {
                _values.DoDelayedConversions(context);
            }
            catch (Exception ex)
            {
                // log the exception here
                return;
            }

            if (_values.Errors.Any())
            {
                context.LogResults(_values.Errors);
                return;
            }

            try
            {
                _action(context, _values);
            }
            catch (Exception ex)
            {
                // send the message that the thing failed
                throw;
            }
        }
    }

    public class LineAssertionPlan<T> : LinePlan
    {
        public static Action<ISpecContext, StepValues> ToAction(string expectedKey, Func<ISpecContext, StepValues, T> func)
        {
            return (c, v) =>
            {
                var actual = func(c, v);
                v.Check(c, expectedKey, actual);
            };
        }

        public LineAssertionPlan(string expectedKey, StepValues values, Func<ISpecContext, StepValues, T> func)
            : base(values, ToAction(expectedKey, func))
        {
        }
    }
}