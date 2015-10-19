using System.Collections.Generic;
using System.Linq;

namespace StoryTeller.Model
{
    
    public class Paragraph : GrammarModel, IModelWithCells
    {
        public GrammarModel[] children;
        public string title;

        public Paragraph() : base("paragraph")
        {
        }

        public Paragraph(IEnumerable<GrammarModel> children) : this()
        {
            this.children = children.ToArray();
            AddErrorRange(this.children.SelectMany(x => x.errors));
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