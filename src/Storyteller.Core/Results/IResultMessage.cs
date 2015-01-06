using Storyteller.Core.Engine;

namespace Storyteller.Core.Results
{
    public interface IResultMessage
    {
        void Modify(Counts counts);
    }
}