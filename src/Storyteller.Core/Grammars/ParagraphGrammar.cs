using System.Linq;
using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars
{
    public class ParagraphGrammar : IGrammar
    {
        private readonly string _title;
        public IGrammar[] Children = new IGrammar[0];

        public ParagraphGrammar(string title)
        {
            _title = title;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            var children = Children.Select(x => x.CreatePlan(step, library)).ToArray();
            for (var i = 0; i < children.Length; i++)
            {
                if (children[i] is ILineExecution)
                {
                    children[i].As<ILineExecution>().Position = i;
                }
            }

            return new CompositeExecution(children);
        }

        public GrammarModel Compile(Conversions conversions)
        {
            var childrenModels = Children.Select(_ => _.Compile(conversions)).ToArray();
            return new Paragraph{children = childrenModels, title = _title};
        }
    }
}