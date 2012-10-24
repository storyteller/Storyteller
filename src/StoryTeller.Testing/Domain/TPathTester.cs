using NUnit.Framework;
using StoryTeller.Domain;

namespace StoryTeller.Testing.Domain
{
    [TestFixture]
    public class TPathTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        private static string containingFolderFor(string path)
        {
            return new TPath(path).GetContainingFolder();
        }

        [Test]
        public void an_empty_string_path_is_the_hierarchy()
        {
            var path = new TPath(string.Empty);
            path.Locator.ShouldEqual(string.Empty);
        }

        [Test]
        public void append()
        {
            var path = new TPath("s1/s2/s3");
            path.Append("t1").Locator.ShouldEqual("s1/s2/s3/t1");
        }

        [Test]
        public void get_containing_folder()
        {
            containingFolderFor("t1").ShouldEqual(string.Empty);
            containingFolderFor("s1/t1").ShouldEqual("s1");
            containingFolderFor("s1/s2/t1").ShouldEqual("s1\\s2");
            containingFolderFor("s1/s2/s3/t1").ShouldEqual("s1\\s2\\s3");
        }

        [Test]
        public void locator()
        {
            var path1 = new TPath("s1/s2/s3/t1");
            path1.Locator.ShouldEqual("s1/s2/s3/t1");
        }

        [Test]
        public void push()
        {
            var path1 = new TPath("s1/s2/s3/t1");
            TPath path2 = path1.Push("top");

            path2.Locator.ShouldEqual("top/s1/s2/s3/t1");
        }
    }
}