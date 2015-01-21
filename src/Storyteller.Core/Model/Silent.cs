namespace Storyteller.Core.Model
{
    public class Silent : GrammarModel
    {
        public Silent() : base("silent")
        {
        }

        public static readonly Silent Flyweight = new Silent();
    }
}