using HtmlTags;
using ST.Docs.Samples;
using ST.Docs.Topics;
using StoryTeller.Remotes.Messaging;

namespace ST.Docs.Transformation
{
    public class SpecTransformHandler : ITransformHandler
    {
        private readonly IEmbeddedSpecData _specData;

        public SpecTransformHandler(IEmbeddedSpecData specData)
        {
            _specData = specData;
        }

        public string Key
        {
            get { return "spec"; }
        }

        public string Transform(Topic current, string data)
        {
            var specData = _specData.DataForPath(data);

            return new HtmlTag("p")
                .Attr("data-path", data)
                .Attr("data-spec", JsonSerialization.ToCleanJson(specData.Specification))
                .Attr("data-fixtures", JsonSerialization.ToCleanJson(specData.Fixtures))
                .AddClass("spec-preview")
                .ToString();
        }
    }

    public class SpecResultTransformHandler : ITransformHandler
    {
        private readonly IEmbeddedSpecData _specData;

        public SpecResultTransformHandler(IEmbeddedSpecData specData)
        {
            _specData = specData;
        }

        public string Key
        {
            get { return "spec-result"; }
        }

        public string Transform(Topic current, string data)
        {
            var specData = _specData.DataForPath(data);

            return new HtmlTag("p")
                .Attr("data-path", data)
                .Attr("data-spec", JsonSerialization.ToCleanJson(specData.Specification))
                .Attr("data-fixtures", JsonSerialization.ToCleanJson(specData.Fixtures))
                .Attr("data-results", JsonSerialization.ToCleanJson(specData.Results.Results))
                .AddClass("spec-result").ToString();
        }
    }
}