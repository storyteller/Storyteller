namespace StoryTeller.Model.Persistence
{
    public interface IReaderMode
    {
        IReaderMode Read(int indention, string text);

        int Indention { get; set; }
    }
}
