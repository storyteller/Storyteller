using HtmlTags;
using StorytellerDocGen.Samples;
using StorytellerDocGen.Topics;
using StoryTeller.Remotes.Messaging;

namespace StorytellerDocGen.Transformation
{
    public class SpecTransformHandler : ITransformHandler
    {
        private readonly IEmbeddedSpecData _specData;

        public SpecTransformHandler(IEmbeddedSpecData specData)
        {
            _specData = specData;
        }

        public string Key => "spec";

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

        public string Key => "spec-result";

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