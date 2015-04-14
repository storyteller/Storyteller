using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using FubuCore;
using ST.Docs.Topics;
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

        public override void SetUp()
        {
            _directory = Path.GetTempPath().AppendPath(Guid.NewGuid().ToString());
            Debug.WriteLine("Using the directory " + _directory);
        }

        public override void TearDown()
        {
            try
            {
                new FileSystem().DeleteDirectory(_directory);
            }
            catch (Exception)
            {
                
            }
        }

        [FormatAs("For file {path}")]
        public void ForFile(string path)
        {
            _location = _directory.AppendPath(path.Replace('/', Path.DirectorySeparatorChar));
        }

        [Hidden]
        public void CaptureLine(string Text)
        {
            _text.Add(Text);
        }

        public IGrammar WriteFile()
        {
            return this["CaptureLine"].AsTable("The contents are")
                .After(() =>
                {
                    new FileSystem().WriteToFlatFile(_location, writer =>
                    {
                        _text.Each(writer.WriteLine);
                    });
                });
        }

        [Hidden]
        public void BuildTopic(string Path, string Line1 = null, string Line2 = null)
        {
            ForFile(Path);
            new FileSystem().WriteToFlatFile(_location, writer =>
            {
                if (Line1.IsNotEmpty()) writer.WriteLine(Line1);
                if (Line2.IsNotEmpty()) writer.WriteLine(Line2);
            });
        }

        public IGrammar TheTopicsAre()
        {
            return this["BuildTopic"].AsTable("The topics in this directory are")
                .After(() =>
                {
                    var root = TopicLoader.LoadDirectory(_directory);
                    Context.State.Store(root);
                });
        }

        public IGrammar CheckTopic()
        {
            return Paragraph("Check the properties of a topic", _ =>
            {
                _ += this["ForFile"];
                _ += c =>
                {
                    c.State.CurrentObject = TopicLoader.LoadTopic(_location);
                };

                _.VerifyPropertiesOf<Topic>(x =>
                {
                    x.Check(y => y.Key);
                    x.Check(y => y.Title);
                    x.Check(y => y.UrlSegment);
                });
            });
        }

        public IGrammar AllTopicsShouldBe()
        {
            return VerifySetOf(allTopicsInOrder)
                .Titled("All the topics in order should be")
                .Ordered()
                .MatchOn(x => x.Key, x => x.Title, x => x.Url);
        }

        private IEnumerable<Topic> allTopicsInOrder()
        {
            return Context.State.Retrieve<Topic>().AllTopicsInOrder();
        }


    }
}