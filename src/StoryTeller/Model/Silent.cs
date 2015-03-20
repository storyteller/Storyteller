namespace StoryTeller.Model
{
    public class Silent : GrammarModel, IModelWithCells
    {
        public Silent() : base("silent")
        {
        }

        public static readonly Silent Flyweight = new Silent();

        public Cell[] cells
        {
            get
            {
                return new Cell[0];
            }
        }
    }
}