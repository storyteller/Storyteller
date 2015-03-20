namespace StoryTeller.Grammars.Importing
{
    public static class CurryExtensions
    {
        public static CurryGrammarExpression Curry(this IGrammar grammar)
        {
            return new CurryGrammarExpression(grammar);
        }
    }

    public interface ICurryGrammarDefaultsExpression
    {
        /// <summary>
        /// Specify the curried values to the inner grammar
        /// in the format "key1:value1, key2:value2, key3:value3"
        /// </summary>
        /// <param name="defaultValues"></param>
        /// <returns></returns>
        IGrammar Defaults(string defaultValues);
    }

    public class CurryGrammarExpression : ICurryGrammarDefaultsExpression
    {
        private readonly IGrammar _inner;
        private string _template;

        public CurryGrammarExpression(IGrammar inner)
        {
            _inner = inner;
        }

        /// <summary>
        /// Replace the template text of the inner grammar
        /// </summary>
        /// <param name="template"></param>
        /// <returns></returns>
        public ICurryGrammarDefaultsExpression Template(string template)
        {
            _template = template;
            return this;
        }

        /// <summary>
        /// Replace the default values of the inner grammar. Use the form
        /// prop1:value1,prop2:value2
        /// </summary>
        /// <param name="defaultValues"></param>
        /// <returns></returns>
        IGrammar ICurryGrammarDefaultsExpression.Defaults(string defaultValues)
        {
            return new CurriedLineGrammar(_template, _inner, defaultValues);
        }
    }
}