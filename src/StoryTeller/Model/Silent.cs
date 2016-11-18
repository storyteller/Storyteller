namespace StoryTeller.Model
{
    public class Silent : GrammarModel, IModelWithCells
    {
        public Silent() : base("silent")
        {
        }

        public static readonly Silent Flyweight = new Silent();

        public Cell[] cells => new Cell[0];

        public override string TitleOrFormat()
        {
            return "SILENT";
        }
    }
}