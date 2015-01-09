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


}