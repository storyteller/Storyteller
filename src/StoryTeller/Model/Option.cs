using System.Collections.Generic;
using System.Linq;
using Baseline;

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

        public Option(string value)
        {
            this.value = this.display = value;
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

        public override string ToString()
        {
            return $"{display}={value}";
        }

        public static Option[] ParseText(string text)
        {
            if (text.IsEmpty()) return null;


            var values = text.ToDelimitedArray();
            return values.Select(x =>
            {
                if (x.Contains("="))
                {
                    var parts = x.Split('=');
                    return new Option(parts[0], parts[1]);
                }
                else
                {
                    return new Option(x);
                }
                

            }).ToArray();
        }

        public static string Write(Option[] options)
        {
            if (options.All(x => x.display == x.value))
            {
                return options.Select(x => x.value).Join(", ");
            }
            else
            {
                return options.Select(x => x.ToString()).Join(", ");
            }
        }

        protected bool Equals(Option other)
        {
            return string.Equals(display, other.display) && string.Equals(value, other.value);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Option) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((display != null ? display.GetHashCode() : 0) * 397) ^ (value != null ? value.GetHashCode() : 0);
            }
        }
    }
}
