using System.Windows.Media;

namespace StoryTeller.UserInterface
{
    public class Brushes
    {
        public static readonly Brush DefaultColor = new SolidColorBrush().FromHex("#FFADADAD");
        public static readonly Brush NoColor = new SolidColorBrush().FromHex("#FFFFFFFF");
        public static readonly Brush PositiveColor = new SolidColorBrush().FromHex("#FF8DA368");
        public static readonly Brush NegativeColor = new SolidColorBrush().FromHex("#FFA14545");
        public static readonly Brush MutualColor = new SolidColorBrush().FromHex("#FFCED171");
        public static readonly Brush BlueColor = new SolidColorBrush().FromHex("#FF007ACC");
    }
}