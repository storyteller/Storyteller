using System;
using System.IO;
using FubuCore;

namespace StoryTeller.Model.Persistence
{
    public interface ISpecDataSource
    {
        SpecNode ReadNode(string id);
        Specification ReadSpecification(string id);
    }

    public class LocalSpecDataSource : ISpecDataSource
    {
        private readonly string _path;
        public static readonly LocalSpecDataSource Flyweight = new LocalSpecDataSource(HierarchyLoader.SpecDirectory);

        private readonly Lazy<Hierarchy> _hierarchy;

        public LocalSpecDataSource(string path)
        {
            _path = path;
            _hierarchy = new Lazy<Hierarchy>(() => HierarchyLoader.ReadHierarchy(_path).ToHierarchy());
        }

        public SpecNode ReadNode(string id)
        {
            if (id.IsEmpty()) throw new FileNotFoundException("Could not find specification with id " + id);
            return _hierarchy.Value.Nodes[id];
        }

        public Specification ReadSpecification(string id)
        {
            var node = ReadNode(id);
            if (node == null) return null;

            var file = node.Filename;
            return XmlReader.ReadFromFile(file);
        }
    }

    
}