using System;
using System.Data;
using StoryTeller;
using StoryTeller.Grammars;

namespace Storyteller.RDBMS
{


    public class Command
    {
        private readonly CommandType _commandType;
        private readonly string _sql;

        static Command()
        {
            GrammarBuilder.AddPolicy(new CommandBuilder());
        }

        // If no set to check, just execute this
        public Command(CommandType commandType, string sql)
        {
            _commandType = commandType;
            _sql = sql;
        }

        // Mark whether or not you need to check a set
        public Command VerifySetOf<T>()
        {
            throw new NotImplementedException();
        }

        public Command VerifyReturn<T>()
        {
            throw new NotImplementedException();
        }

        internal IGrammar BuildGrammar(Fixture fixture)
        {
            throw new NotImplementedException();
        }

    }
}