using System.Collections.Generic;
using System.Linq;
using FubuCore;

namespace Storyteller.Core.Model
{
    public class Paragraph : GrammarModel, IModelWithCells
    {
        public GrammarModel[] children;
        public string title;

        public Paragraph(IEnumerable<GrammarModel> children) : base("paragraph")
        {
            this.children = children.ToArray();
            errors.AddRange(this.children.SelectMany(x => x.errors));
        }

        public Cell[] cells
        {
            get
            {
                // TODO -- throw good message if not all the children are IModelWithCells
                return children.SelectMany(x => x.As<IModelWithCells>().cells).ToArray();
            }
        }
    }
}