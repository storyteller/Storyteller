using System.IO;
using Baseline;
using ST.Docs;
using ST.Docs.Topics;
using StoryTeller;
using StoryTeller.Grammars.Tables;

namespace Specifications.Fixtures.Docs
{
    public class TopicExportFixture : Fixture
    {
        private string _directory;
        private Topic _top;

        public TopicExportFixture()
        {
            Title = "Topic Exporting";
        }

        // SAMPLE: retrieving-service-in-fixture
        public override void SetUp()
        {
            // In this case, the DocSettings object is 
            // ultimately resolved by the underlying
            // IoC container (StructureMap of course) for 
            // the running documentation application
            _directory = Context.Service<DocSettings>().Root;
        }
        // ENDSAMPLE


        [Hidden]
        public void BuildTopic(
            [Header("File Path")] string path, 
            string Line1 = null, 
            string Line2 = null)
        {
            var location = _directory.AppendPath(path.Replace('/', Path.DirectorySeparatorChar));

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
            return this["BuildTopic"].AsTable("The topics in this directory are")
                .After(() =>
                {
                    _top = TopicLoader.LoadDirectory(_directory);
                    _top.ParseAndOrder().Wait();
                });
        }

        [ExposeAsTable("The exported file names for a file system drop should be")]
        [return: Header("File Path")]
        public string TheExportedFileShouldBe(string Key)
        {
            var topic = _top.FindByKey(Key);

            return topic.FileExportPath();
        }

        [ExposeAsTable("The exported file names for a website export should be")]
        [return: Header("File Path")]
        public string TheExportedFileForWebsiteShouldBe(string Key)
        {
            var topic = _top.FindByKey(Key);

            return topic.WebsiteExportPath();
        }
    }
}