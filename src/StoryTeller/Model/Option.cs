using System.Collections.Generic;
using System.Linq;

namespace StoryTeller.Model
{
    public class Option
    {
        public Option()
        {
        }

        public Option(string display, string value)
        {
            this.display = display;
            this.value = value;
        }

        public string display;
        public string value;

        public static Option[] For(IEnumerable<string> values)
        {
            return values.Select(x => new Option {display = x, value = x}).ToArray();
        }

        public Option Copy()
        {
            return new Option(display, value);
        }
    }
}
