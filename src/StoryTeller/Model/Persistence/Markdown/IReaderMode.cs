namespace StoryTeller.Model.Persistence.Markdown
{
    public interface IReaderMode
    {
        IReaderMode Read(int indention, string text);

        int Indention { get; set; }
    }
}