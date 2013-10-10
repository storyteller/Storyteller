using System.Collections.Generic;
using HtmlTags;

namespace StoryTeller.Engine
{
    public interface IResultsExtension
    {
        IEnumerable<HtmlTag> Tags();
    }
}