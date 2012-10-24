using System;
using System.IO;
using NUnit.Framework;
using StoryTeller.Workspace;

namespace StoryTeller.Testing.Workspace
{
    [TestFixture]
    public class FileSystemTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            if (Directory.Exists(ROOT_FOLDER))
            {
                Directory.Delete(ROOT_FOLDER, true);
            }

            Directory.CreateDirectory(ROOT_FOLDER);
        }

        #endregion

        [TestFixtureTearDown]
        public void TestFixtureTearDown()
        {
            if (Directory.Exists(ROOT_FOLDER))
            {
                Directory.Delete(ROOT_FOLDER, true);
            }
        }

        private const string ROOT_FOLDER = "Persisted";

        [Test]
        public void GetSubfoldersForADirectory()
        {
            var system = new FileSystem();
            Directory.CreateDirectory(ROOT_FOLDER + "\\test");
            Directory.CreateDirectory(ROOT_FOLDER + "\\test1");

            string[] subFolders = system.GetSubFolders(ROOT_FOLDER);
            subFolders.Length.ShouldEqual(2);
            subFolders[0].ShouldEqual(ROOT_FOLDER + "\\test");
            subFolders[1].ShouldEqual(ROOT_FOLDER + "\\test1");
        }

        [Test]
        public void GetSubFoldersShouldNotReturnHiddenDirectoriesEvenIfTheyHaveOtherAttributes()
        {
            var system = new FileSystem();
            Directory.CreateDirectory(ROOT_FOLDER + "\\test");
            Directory.CreateDirectory(ROOT_FOLDER + "\\test1");
            File.SetAttributes(ROOT_FOLDER + "\\test1",
                               FileAttributes.Directory | FileAttributes.Hidden | FileAttributes.NotContentIndexed);
            string[] subFolders = system.GetSubFolders(ROOT_FOLDER);
            subFolders.Length.ShouldEqual(1);
            subFolders[0].ShouldEqual(ROOT_FOLDER + "\\test");
        }

        [Test]
        public void save_and_load_an_object_to_xml()
        {
            var object1 = new BigObject
            {
                Name = "Max",
                Age = 5
            };
            var system = new FileSystem();
            system.PersistToFile(object1, "bigobject.xml");

            var object2 = system.LoadFromFile<BigObject>("bigobject.xml");

            object1.ShouldNotBeTheSameAs(object2);
            object1.ShouldEqual(object2);
        }

        [Test]
        public void WriteAndReadText()
        {
            string theString = Guid.NewGuid().ToString();

            var system = new FileSystem();
            system.WriteStringToFile(theString, "test.txt");

            Assert.AreEqual(theString, system.ReadStringFromFile("test.txt"));
        }

        [Test]
        public void WriteToFileSmokeTest()
        {
            string sometext = "as;lkdjf;lsakdjf;lksaddjf;lkjdsf;lkjads;lfkhsad;lkjfjh";
            var system = new FileSystem();
            system.WriteStringToFile(sometext, "sometext.txt");
        }
    }

    public class BigObject
    {
        public string Name { get; set; }
        public int Age { get; set; }

        public bool Equals(BigObject obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj.Name, Name) && obj.Age == Age;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (BigObject)) return false;
            return Equals((BigObject) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Name != null ? Name.GetHashCode() : 0)*397) ^ Age;
            }
        }
    }
}