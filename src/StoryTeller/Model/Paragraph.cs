using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace StoryTeller.Model
{
    
    public class Paragraph : GrammarModel, IModelWithCells
    {
        public GrammarModel[] children;
        public string title;

        [JsonIgnore]
        public readonly IList<string> ChildKeys = new List<string>();

        public Paragraph() : base("paragraph")
        {
        }

        public Paragraph(IEnumerable<GrammarModel> children) : this()
        {
            this.children = children.ToArray();
            AddErrorRange(this.children.SelectMany(x => x.errors));
        }

        public void ReadFixture(FixtureModel fixture)
        {
            children = ChildKeys.Select(fixture.FindGrammar).ToArray();
        }

        public Cell[] cells
        {
            get
            {
                return children.OfType<IModelWithCells>().Where(x => x.cells != null).SelectMany(x => x.cells).ToArray();
            }
        }
    }
}