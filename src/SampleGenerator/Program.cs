using System.Linq;
using System.Text;


namespace SampleGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            var reader = new SampleReader(args[0], args[1]);
            reader.FindSamples();
        }
    }
}
