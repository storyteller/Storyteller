using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public interface ISpecExpiration
    {
        bool IsExpired(Specification spec);
    }
}