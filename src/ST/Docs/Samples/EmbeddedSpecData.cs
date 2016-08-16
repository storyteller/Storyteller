using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace ST.Docs.Samples
{
    public interface IEmbeddedSpecData
    {
        EmbeddedSpec DataForPath(string path);
    }

    public class EmbeddedSpecData : IEmbeddedSpecData
    {
        private readonly DocSettings _settings;
        private readonly Lazy<IDictionary<string, EmbeddedSpec>> _specs; 

        public EmbeddedSpecData(DocSettings settings)
        {
            _settings = settings;

            _specs = new Lazy<IDictionary<string, EmbeddedSpec>>(readSpecs);
        }

        private IDictionary<string, EmbeddedSpec> readSpecs()
        {
            var dict = new Dictionary<string, EmbeddedSpec>();

            var fileSystem = new FileSystem();
            fileSystem.FindFiles(_settings.Root, FileSet.Deep("*.specs.json")).Each(file =>
            {
                var json = fileSystem.ReadStringFromFile(file);
                var response = JsonSerialization.Deserialize<BatchRunResponse>(json);
                var fixtures = new Dictionary<string, FixtureModel>();
                response.fixtures.Each(x => fixtures.Add(x.key, x));

                response.records.Each(rec => dict.Add(rec.specification.path, new EmbeddedSpec(fixtures, rec)));
            });

            return dict;
        }

        public EmbeddedSpec DataForPath(string path)
        {
            return _specs.Value[path];
        }
    }

    public class EmbeddedSpec
    {
        public EmbeddedSpec(IDictionary<string, FixtureModel> fixtures, BatchRecord record)
        {
            Specification = record.specification;
            Results = record.results;
            Fixtures = record.specification.Children.OfType<Section>().Select(x => fixtures.ContainsKey(x.Key) ? fixtures[x.Key] : null).ToArray();
        }

        public FixtureModel[] Fixtures;
        public Specification Specification;
        public SpecResults Results;
    }
}