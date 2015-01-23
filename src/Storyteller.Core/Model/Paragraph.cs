using System.Collections.Generic;
using System.Linq;
using FubuCore;

namespace Storyteller.Core.Model
{
    public class Paragraph : GrammarModel, IModelWithCells
    {
        public GrammarModel[] children;
        public string title;

        public Paragraph() : base("paragraph")
        {
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