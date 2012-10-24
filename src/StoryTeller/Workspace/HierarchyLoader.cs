using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Xml;
using StoryTeller.Domain;
using StoryTeller.Persistence;

namespace StoryTeller.Workspace
{

    public class XmlReaderNode : INode
    {
        private readonly XmlReader _reader;

        public XmlReaderNode(XmlReader reader)
        {
            _reader = reader;
        }

        public string this[string attName]
        {
            get { return _reader.GetAttribute(attName); }
            set { throw new NotImplementedException(); }
        }

        public string InnerText
        {
            get { throw new NotImplementedException(); }
            set { throw new NotImplementedException(); }
        }

        public string Name
        {
            get { throw new NotImplementedException(); }
        }

        public void AddComment(string description)
        {
            throw new NotImplementedException();
        }

        public INode AddChild(string name)
        {
            throw new NotImplementedException();
        }

        public INode With(Action<INode> action)
        {
            throw new NotImplementedException();
        }

        public INode WithFormattedText(string text)
        {
            throw new NotImplementedException();
        }

        public void ForEachChild(Action<INode> action)
        {
            throw new NotImplementedException();
        }

        public bool IsTags()
        {
            throw new NotImplementedException();
        }

        public bool IsComment()
        {
            throw new NotImplementedException();
        }

        public void ForEachAttribute(Action<string, string> action)
        {
            throw new NotImplementedException();
        }
    }

    public class LazyTestXmlReader
    {
        public static Test ReadFromFile(string filename)
        {
            Test test = null;

            using (var stream = new FileStream(filename, FileMode.Open, FileAccess.Read))
            {
                var reader = XmlReader.Create(stream);
                reader.ReadToNextSibling("Test");

                var node = new XmlReaderNode(reader);
                test = TestReader.CreateTest(node, new LazyTestPartCollection(filename));
            }

            test.FileName = filename;

            return test;            
        }
    }

    public class LazyTestPartCollection : ITestPartCollection
    {
        private readonly string _fileName;
        private ITestPartCollection _inner;
        private readonly object _locker = new object();

        public LazyTestPartCollection(string fileName)
        {
            _fileName = fileName;
        }

        private ITestPartCollection inner
        {
            get
            {
                if (_inner == null)
                {
                    lock(_locker)
                    {
                        if (_inner == null)
                        {
                            var reader = new TestReader();
                            var test = reader.ReadFromFile(_fileName);

                            _inner = new DefaultTestPartcollection(test);
                        }
                    }
                }
                
                
                return _inner;
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public IEnumerator<ITestPart> GetEnumerator()
        {
            return inner.GetEnumerator();
        }

        public void Add(ITestPart testPart)
        {
            inner.Add(testPart);
        }

        public void RemoveAll(Predicate<ITestPart> filter)
        {
            inner.RemoveAll(filter);
        }

        public void Clear()
        {
            inner.Clear();
        }

        public void AddRange(IEnumerable<ITestPart> parts)
        {
            inner.AddRange(parts);
        }

        public ITestPart Find(Predicate<ITestPart> func)
        {
            return inner.Find(func);
        }

        public IList<ITestPart> GetList()
        {
            return inner.GetList();
        }
    }


    public class HierarchyLoader
    {
        private readonly Hierarchy _hierarchy;
        private readonly IProject _project;
        private readonly FileSystem _system = new FileSystem();
        private readonly string _topFolder;

        public HierarchyLoader(string topFolder, Hierarchy hierarchy, IProject project)
        {
            _topFolder = topFolder;
            _hierarchy = hierarchy;
            _project = project;
        }

        public void Load()
        {
            loadTestsInFolder(_topFolder, _hierarchy);
        }

        private void loadTestsInFolder(string folder, Suite parent)
        {
            foreach (string file in _system.GetFiles(folder, "xml"))
            {
                Test test = LazyTestXmlReader.ReadFromFile(file);
                test.SetParent(parent);
                
                parent.AddTest(test);
            }

            // load the tests from the sub folders
            foreach (string subFolder in _system.GetSubFolders(folder))
            {
                string name = Path.GetFileName(subFolder);
                var child = new Suite(name) {Parent = parent};

                parent.AddSuite(child);
                loadTestsInFolder(subFolder, child);
            }
        }

    }
}