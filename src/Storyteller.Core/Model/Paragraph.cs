using System.Collections.Generic;

namespace Storyteller.Core.Model
{
    public class Paragraph : GrammarModel
    {
        public GrammarModel[] children;
        public string title;

        public Paragraph() : base("paragraph")
        {
        }
    }
}