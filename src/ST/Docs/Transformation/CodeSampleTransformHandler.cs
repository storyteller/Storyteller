using System;
using Baseline;
using HtmlTags;
using ST.Docs.Samples;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public class CodeSampleTransformHandler : ITransformHandler
    {
        private readonly ISampleCache _cache;

        public CodeSampleTransformHandler(ISampleCache cache)
        {
            _cache = cache;
        }

        public string Key
        {
            get { return "sample"; }
        }

        public string Transform(Topic current, string data)
        {
            var tag = TagForSample(data);

            var subject = "<p>" + Guid.NewGuid().ToString() + "</p>";

            current.Substitutions[subject] = tag.ToString();

            return subject;
        }

        public HtmlTag TagForSample(string sampleName)
        {
            var sample = _cache.Find(sampleName.Trim());
            return sample == null ? (HtmlTag) new MissingSampleTag(sampleName) : new SampleTag(sample);
        }
    }

    public class MissingSampleTag : HtmlTag
    {
        public MissingSampleTag(string sampleName) : base("p")
        {
            Style("padding", "10px");
            AddClass("bg-warning");
            Add("b").Text("Missing code sample '{0}'".ToFormat(sampleName));
            Add("small").Text(" -- Wait for ST to catch up reading samples or CTRL+SHIFT+R to force refresh");
        }
    }
}