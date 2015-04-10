using System.Collections.Generic;
using FubuCore.Util;

namespace ST.Docs.Samples
{
    public class SnippetCache : ISnippetCache
    {
        private readonly Cache<string, Snippet> _snippets = new Cache<string, Snippet>();
        private readonly Cache<string, Cache<string, Snippet>> _byBottle = new Cache<string, Cache<string, Snippet>>(key => new Cache<string, Snippet>()); 

        public void Add(Snippet snippet)
        {
            _byBottle[snippet.BottleName][snippet.Name] = snippet;
            _snippets[snippet.Name] = snippet;
        }

        public Snippet Find(string name)
        {
            return _snippets[name];
        }

        public Snippet FindByBottle(string name, string bottle)
        {
            if (!_byBottle.Has(bottle)) return null;

            var snippets = _byBottle[bottle];
            return snippets.Has(name)
                       ? snippets[name]
                       : null;
        }

        public IEnumerable<Snippet> All()
        {
            return _snippets;
        }
    }
}