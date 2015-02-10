using Storyteller.Core.Engine;

namespace Storyteller.Core.Results
{
    public interface IResultMessage
    {
        void Tabulate(Counts counts);

        // ReSharper disable once InconsistentNaming
        string id { get; set; }

        string type { get; }
    }
}