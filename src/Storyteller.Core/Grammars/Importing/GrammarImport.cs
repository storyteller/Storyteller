using System;
using FubuCore;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars.Importing
{
    public class GrammarImport
    {
        public string GrammarKey { get; set; }
        public string FixtureName { get; set; }
        public CurryAction CurryAction { get; set; }

        public IGrammar FindGrammar(FixtureLibrary library)
        {
            throw new NotImplementedException();
            /*
            var fixture = library.Fixtures[FixtureName];
            fixture.Context = context;

            var innerGrammar = fixture.GrammarFor(GrammarKey);

            if (CurryAction == null)
            {
                return innerGrammar;
            }

            return new CurriedLineGrammar(CurryAction.Template, (IGrammarWithCells) innerGrammar, CurryAction.DefaultValues);
        
             */
        }

        public override string ToString()
        {
            if (CurryAction == null)
            {
                return string.Format("Import of {0}:{1}", FixtureName, GrammarKey);
            }

            return "Curried {0}:{1} with default values {2}".ToFormat(FixtureName, GrammarKey, CurryAction.DefaultValues);
        }

        public static GrammarImport For<T>(string grammarKey)
        {
            throw new NotImplementedException();
            /*
            return new GrammarImport(){
                FixtureName = typeof(T).GetFixtureAlias(),
                GrammarKey = grammarKey
            };
             * */
        }


    }
}