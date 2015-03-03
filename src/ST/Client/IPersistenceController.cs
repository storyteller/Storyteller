using Storyteller.Core.Messages;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;

namespace ST.Client
{
    public interface IPersistenceController
    {
        Hierarchy Hierarchy { get; }
        void StartWatching(string path);
        SpecNodeAdded AddSpec(string path, string name);
        void SaveSpecificationBody(string id, Specification specification);
        SpecNodeAdded CloneSpecification(string id, string name);
        SpecData LoadSpecification(string id);
        void AddSuite(string parent, string name);
    }
}