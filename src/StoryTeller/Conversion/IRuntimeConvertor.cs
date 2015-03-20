namespace StoryTeller.Conversion
{
    public interface IRuntimeConvertor
    {
        object Convert(string raw, ISpecContext context);
    }
}