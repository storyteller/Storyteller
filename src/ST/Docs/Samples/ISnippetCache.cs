using System.Collections.Generic;

namespace ST.Docs.Samples
{
    public interface ISnippetCache
    {
        void Add(Snippet snippet);
        Snippet Find(string name);

        IEnumerable<Snippet> All();
        Snippet FindByBottle(string name, string bottle);
    }
}