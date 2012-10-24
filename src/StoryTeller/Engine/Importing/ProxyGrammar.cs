using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.Engine.Importing
{
    public class ProxyGrammar : IGrammar
    {
        public IGrammar InnerGrammar { get; set; }

        public ProxyGrammar()
        {
        }

        public ProxyGrammar(IGrammar innerGrammar)
        {
            InnerGrammar = innerGrammar;
        }

        public string Description
        {
            get { return InnerGrammar.Description; }
        }

        public void Execute(IStep containerStep, ITestContext context)
        {
            InnerGrammar.Execute(containerStep, context);
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            return InnerGrammar.ToStructure(library);
        }
    }
}