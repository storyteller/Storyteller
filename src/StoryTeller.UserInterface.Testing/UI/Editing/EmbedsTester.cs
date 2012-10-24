using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing.Scripts;
using System.Linq;

namespace StoryTeller.UserInterface.Testing.UI.Editing
{
    [TestFixture]
    public class EmbedsTester
    {
        [SetUp]
        public void SetUp()
        {
        }

        [Test]
        public void test_editor_css_returns_data_smoke_test()
        {
            Embeds.TestEditorCSS().ShouldNotBeEmpty();
        }

        [Test]
        public void get_javascript_files()
        {
            Embeds.GetFiles().Any().ShouldBeTrue();
        }

        [Test]
        public void smoke_test_javascript_file()
        {
            var file = Embeds.GetFiles().First(x => x.FileName == "testEditor.js");
            file.Contents().ShouldNotBeEmpty();
            file.Folder.ShouldEqual("Controls");
            
        }

        [Test]
        public void Embeds_write_files_smoke_test()
        {
            Embeds.WriteFiles();
        }
    }
}