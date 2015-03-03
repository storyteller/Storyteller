using System.Web.Caching;
using HtmlTags;

namespace Storyteller.Core.Results
{
    public interface IReporter
    {
        HtmlTag ToHtml();
        string Title { get; }
    }
}
