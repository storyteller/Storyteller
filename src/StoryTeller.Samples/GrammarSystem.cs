using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using StoryTeller.Conversion;
using StoryTeller.Engine;

namespace StoryTeller.Samples
{
    public class GrammarSystem : ISystem
    {
        public IExecutionContext CreateContext()
        {
            if (Project.CurrentProfile == "blowup")
            {
                throw new Exception("I blew up trying to create an execution context");
            }

            return new SimpleExecutionContext();
        }

        public void Dispose()
        {
        }

        public CellHandling Start()
        {
            var handling = CellHandling.Basic();

            handling.Lists["positions"].AddValues("LB", "OL", "DL", "WR", "RB");
            handling.Conversions.RegisterRuntimeConversion<PlayerConverter>();

            return handling;
        }
    }

    public class PlayerConverter : IRuntimeConverter
    {
        public static readonly IList<Player> Players = new List<Player>
        {
            new Player {FirstName = "Justin", LastName = "Houston", Position = "LB"},
            new Player {FirstName = "Jeremy", LastName = "Maclin", Position = "WR"},
            new Player {FirstName = "Jamaal", LastName = "Charles", Position = "RB"},
        };

        public object Convert(string raw, ISpecContext context)
        {
            return Players.FirstOrDefault(x => x.FullName() == raw);
        }

        public bool Matches(Type type)
        {
            return typeof (Player) == type;
        }
    }

    public class Player
    {
        public string FirstName;
        public string LastName;
        public string Position;

        public string FullName()
        {
            return "{0} {1}".ToFormat(FirstName, LastName);
        }
    }
}