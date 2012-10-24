using StoryTeller.Domain;

namespace StoryTeller.Persistence
{
    public interface ITestFileReader
    {
        Test ReadFromFile(string filename);
    }
}