namespace Storyteller.Core.Conversion
{
    public interface IRuntimeConvertor
    {
        object Convert(string raw, ISpecContext context);
    }
}