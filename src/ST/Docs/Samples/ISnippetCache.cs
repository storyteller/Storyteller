using System.Collections.Generic;

namespace ST.Docs.Samples
{
    public interface ISnippetCache
    {
        void AddOrReplace(Snippet snippet);
        Snippet Find(string name);

        IEnumerable<Snippet> All();
    }
}