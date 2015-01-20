using System.Collections.Generic;

namespace Storyteller.Core.Model
{
    public abstract class GrammarModel
    {
        public string key;
        public readonly string type;

        protected GrammarModel(string type)
        {
            this.type = type;
        }

        public readonly IList<GrammarError> errors = new List<GrammarError>(); 
    }

}