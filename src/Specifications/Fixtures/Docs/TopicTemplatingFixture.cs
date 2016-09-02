using System.IO;
using Baseline;
using StorytellerDocGen;
using StoryTeller;
using StoryTeller.Grammars.Tables;

namespace Specifications.Fixtures.Docs
{
    public class TopicTemplatingFixture : Fixture
    {
        private DocProject _project;
        private DocSettings _settings;

        public TopicTemplatingFixture()
        {
            Title = "Topic Templating";
        }

        public override void SetUp()
        {
            _settings = Context.Service<DocSettings>();
        }

        public override void TearDown()
        {
            _project.Dispose();
        }

        public IGrammar IfTheStateIs()
        {
            return Embed<TopicFolderFixture>("System State");
        }

        [Hidden]
        public void BuildTopic([Header("File Path")]string path, string Line1 = null, string Line2 = null)
        {
            var location = _settings.Root.AppendPath(path.Replace('/', Path.DirectorySeparatorChar));

            var parent = location.ParentDirectory();

            if (!Directory.Exists(parent)) Directory.CreateDirectory(parent);
            new FileSystem().WriteToFlatFile(location, writer =>
            {
                if (Line1.IsNotEmpty()) writer.WriteLine(Line1);
                if (Line2.IsNotEmpty()) writer.WriteLine(Line2);
            });

            StoryTellerAssert.Fail(!File.Exists(location), "File was not written");
        }

        public IGrammar TheTopicsAre()
        {
            return this["BuildTopic"].AsTable("The topics in this directory are");
        }

        [FormatAs("The url resolution style is {style}")]
        public void TheUrlResolutionIs(UrlStyle style)
        {
            _settings.UrlStyle = style;

            _project = new DocProject(_settings);
        }

        [return: Header("After")]
        [ExposeAsTable("The result of textual transformations should be")]
        public string TransformsShouldBe(string Topic, string Before)
        {
            var topic = _project.FindTopic(Topic);
            return _project.Transformer.Transform(topic, Before);
        }
    }
}