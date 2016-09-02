using System.Collections.Generic;
using System.IO;
using System.Linq;
using Baseline;
using StorytellerDocGen;
using StorytellerDocGen.Topics;
using StoryTeller;
using StoryTeller.Grammars.Tables;

namespace Specifications.Fixtures.Docs
{
    public class TopicFolderFixture : Fixture
    {
        private string _directory;
        private string _location;
        private readonly IList<string> _text = new List<string>();

        public TopicFolderFixture()
        {
            Title = "Inside a folder of topic files";
        }

        // SAMPLE: getting-context-from-fixture

        // This is taken from a Fixture class that is used
        // internally to test Storyteller's documentation
        // generation
        public override void SetUp()
        {
            _directory = Context.Service<DocSettings>().Root;
        }
        // ENDSAMPLE


        [FormatAs("For file {path}")]
        public void ForFile(string path)
        {
            _location = _directory.AppendPath(path.Replace('/', Path.DirectorySeparatorChar));

            var parent = _location.ParentDirectory();
            if (!Directory.Exists(parent)) Directory.CreateDirectory(parent);
        }

        // SAMPLE: hiding-a-grammar

        // CaptureLine will not be visible in the user interface for user
        // selection when authoring a specification, but can be used internally
        [Hidden]
        public void CaptureLine(string Text)
        {
            _text.Add(Text);
        }

        public IGrammar WriteFile()
        {
            // The WriteFile grammar uses the CaptureLine grammar
            // as the basis for a table
            return this["CaptureLine"].AsTable("The contents are")
                .After(() =>
                {
                    new FileSystem().WriteToFlatFile(_location, writer => _text.Each(writer.WriteLine));
                });
        }
        // ENDSAMPLE

        [Hidden]
        public void BuildTopic([Header("File Path")] string path, string Line1 = null, string Line2 = null)
        {
            ForFile(path);
            new FileSystem().WriteToFlatFile(_location, writer =>
            {
                if (Line1.IsNotEmpty()) writer.WriteLine(Line1);
                if (Line2.IsNotEmpty()) writer.WriteLine(Line2);
            });

            StoryTellerAssert.Fail(!File.Exists(_location), "File was not written");
        }

        public IGrammar TheTopicsAre()
        {
            return this["BuildTopic"].AsTable("The topics in this directory are");
        }

        // SAMPLE: grammar-from-igrammar-return
        public IGrammar CheckTopic()
        {
            return Paragraph("Check the properties of a topic at the root of the topic directory", _ =>
            {
                _ += this["ForFile"];
                _ += c =>
                {
                    var topic = TopicLoader.LoadTopic(_location, true);
                    topic.ParseFile();
                    c.State.CurrentObject = topic;
                };

                _.VerifyPropertiesOf<Topic>(x =>
                {
                    x.Check(y => y.Key);
                    x.Check(y => y.Title);
                    x.Check(y => y.UrlSegment);
                });
            });
        }
        // ENDSAMPLE

        public IGrammar AllTopicsShouldBe()
        {
            return VerifySetOf(allTopicsInOrder)
                .Titled("All the topics in order should be")
                .Ordered()
                .MatchOn(x => x.Key, x => x.Title, x => x.Url);
        }



        private IEnumerable<Topic> allTopicsInOrder()
        {
            var topic = TopicLoader.LoadDirectory(_directory);
            topic.ParseAndOrder().Wait();
            return topic.AllTopicsInOrder().ToArray();
        }
    }
}