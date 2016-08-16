using Baseline;

namespace Samples.Fixtures
{
    // SAMPLE: dimensions
    public class Dimensions
    {
        public Dimensions()
        {
        }

        // This constructor would be called by Storyteller
        public Dimensions(string text)
        {
            var parts = text.ToDelimitedArray('x');
            Width = int.Parse(parts[0]);
            Thickness = int.Parse(parts[1]);
            Length = int.Parse(parts[2]);
        }

        public int Width { get; set; }
        public int Length { get; set; }
        public int Thickness { get; set; }
    }
    // ENDSAMPLE
}