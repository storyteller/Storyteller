using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    public interface IDocumentBuilder
    {
        void Apply(HtmlDocument document, BatchRunResponse results);
    }
}
