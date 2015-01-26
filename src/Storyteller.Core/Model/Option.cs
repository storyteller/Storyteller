using System.Collections.Generic;
using System.Linq;

namespace Storyteller.Core.Model
{
    public class Option
    {
        public string display;
        public string value;



        public static Option[] For(IEnumerable<string> values)
        {
            return values.Select(x => new Option {display = x, value = x}).ToArray();
        }
    }
}