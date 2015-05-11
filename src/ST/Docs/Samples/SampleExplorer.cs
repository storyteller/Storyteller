using System.Collections.Generic;
using System.IO;
using System.Linq;
using FubuCore;
using FubuMVC.Core;
using HtmlTags;

namespace ST.Docs.Samples
{
    public class SampleExplorer
    {
        private readonly ISampleCache _cache;
        private readonly DocSettings _settings;

        public SampleExplorer(ISampleCache cache, DocSettings settings)
        {
            _cache = cache;
            _settings = settings;
        }

        [UrlPattern("_samples")]
        public HtmlDocument get_samples()
        {
            var document = new HtmlDocument {Title = "All Samples"};



            _cache.All().GroupBy(x => x.File).Each(group =>
            {
                var path = group.Key.PathRelativeTo(_settings.Root);
                document.Add("h3").Text(path);

                foreach (Sample sample in group)
                {
                    document.Add("h5").Text("{0} ({1})".ToFormat(sample.Name, sample.Language));
                    document.Add(new SampleTag(sample));
                }

                document.Add("hr");
            });


            return document;
        }
    }
}