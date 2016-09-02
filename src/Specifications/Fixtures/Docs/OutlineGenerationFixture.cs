using System.Collections.Generic;
using System.IO;
using System.Linq;
using Baseline;
using StorytellerDocGen;
using StorytellerDocGen.Outline;
using StorytellerDocGen.Topics;
using StoryTeller;
using StoryTeller.Grammars.Tables;

namespace Specifications.Fixtures.Docs
{
    public class OutlineGenerationFixture : Fixture
    {
        private readonly IList<string> _outlineLines = new List<string>();
        private string _outlineFile;

        public OutlineGenerationFixture()
        {
            Title = "Outline Generation";
        }

        [Hidden]
        public void Line(string Line)
        {
            _outlineLines.Add(Line);
        }

        public IGrammar TheOutlineFileIs()
        {
            return this["Line"].AsTable("The outline definition file is")
                .Before(() => _outlineLines.Clear())
                .After(() =>
                {
                    _outlineFile = Path.GetTempFileName();
                    new FileSystem().WriteToFlatFile(_outlineFile, writer => _outlineLines.Each(writer.WriteLine));
                });
        }

        public IGrammar TheTopicsReadShouldBe()
        {
            return VerifySetOf(() => new OutlineReader(_outlineFile).ReadFile().AllTopicsInOrder())
                .Titled("The topics generated should be")
                .MatchOn(x => x.Key, x => x.Title, x => x.Url)
                .Ordered();
        }

        public IGrammar TheWrittenFilesShouldBe()
        {
            return VerifySetOf(theWrittenFiles)
                .Titled("The files written to the destination directory should be")
                .MatchOn(x => x.Path);
        }

        public IGrammar TheLoadedTopicsShouldBe()
        {
            return VerifySetOf(theLoadedTopics)
                .Titled("The Topic structure loaded from the file system after generating the outline should be")
                .MatchOn(x => x.Key, x => x.Title, x => x.Url);
        }

        private IEnumerable<Topic> theLoadedTopics()
        {
            var directory = Context.Service<DocSettings>().Root;
            var top = new OutlineReader(_outlineFile).ReadFile();

            OutlineWriter.WriteToFiles(directory, top);

            var readTop = TopicLoader.LoadDirectory(directory);
            readTop.ParseAndOrder().Wait();

            return readTop.AllTopicsInOrder();
        } 

        private IEnumerable<OutlineFile> theWrittenFiles()
        {
            var directory = Context.Service<DocSettings>().Root;
            var top = new OutlineReader(_outlineFile).ReadFile();

            OutlineWriter.WriteToFiles(directory, top);

            var fileSet = new FileSet
            {
                Include = "*.md;order.txt"
            };

            return new FileSystem().FindFiles(directory, fileSet).Select(file =>
            {
                return new OutlineFile
                {
                    Path = file.PathRelativeTo(directory).Replace(Path.DirectorySeparatorChar, '/'),
                };
            });
        } 

        public class OutlineFile
        {
            public string Path { get; set; }
        }
    }
}