using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public interface ITransformHandler
    {
        string Key { get; }
        string Transform(Topic current, string data);
    }
}