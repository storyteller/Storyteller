using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Baseline;
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

        // SAMPLE: registering-custom-runtime-converter
        public CellHandling Start()
        {
            var handling = CellHandling.Basic();

            // Adding a system wide list. 
            handling.AddSystemLevelList("positions", new[] {"LB", "OL", "DL", "WR", "RB"});

            // This is where you can register a custom runtime conversion
            handling.Conversions.RegisterRuntimeConversion<PlayerConverter>();

            return handling;
        }

        // ENDSAMPLE


        public Task Warmup()
        {
            if (Project.CurrentProfile == "warmup-failure")
            {
                throw new Exception("Warmup failed!");
            }

            if (Project.CurrentProfile == "slow")
            {
                return Task.Delay(10.Seconds());
            }

            return Task.FromResult(string.Empty);
        }
    }

    // SAMPLE: PlayerConverter
    public class PlayerConverter : IRuntimeConverter
    {
        public static readonly IList<Player> Players = new List<Player>
        {
            new Player {FirstName = "Justin", LastName = "Houston", Position = "LB"},
            new Player {FirstName = "Jeremy", LastName = "Maclin", Position = "WR"},
            new Player {FirstName = "Jamaal", LastName = "Charles", Position = "RB"}
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

    // ENDSAMPLE
}