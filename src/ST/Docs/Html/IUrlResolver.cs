using ST.Docs.Topics;

namespace ST.Docs.Html
{
    public interface IUrlResolver
    {
        string ToUrl(Topic topic);
    }
}