using System;
using System.IO;
using System.Windows.Media;
using StoryTeller.Model;
using StoryTeller.UserInterface.Icons;

namespace StoryTeller.UserInterface
{
    public class Icon : IComparable<Icon>
    {
        private static readonly Brush DefaultColor = new SolidColorBrush().FromHex("#FFADADAD");
        private static readonly Brush NoColor = new SolidColorBrush().FromHex("#FFFFFFFF");
        private static readonly Brush PositiveColor = new SolidColorBrush().FromHex("#FF8DA368");
        private static readonly Brush NegativeColor = new SolidColorBrush().FromHex("#FFA14545");
        private static readonly Brush MutualColor = new SolidColorBrush().FromHex("#FFCED171");

        public static readonly Icon AnyStatus = new Icon("statusAll.png", 7);
        public static readonly Icon Close = new Icon("\uf00d", 6, NoColor);        public static readonly Icon Code = new Icon("\uf121", 6, NoColor);
        public static readonly Icon Collapse = new Icon("\uf068", 6);
        public static readonly Icon Comment = new Icon("comment.png", 6);
        public static readonly Icon Delete = new Icon("\uf00d", 6, NegativeColor);
        public static readonly Icon DownArrow = new Icon("down.png", 6);
        public static readonly Icon Expand = new Icon("\uf067;", 6);
        public static readonly Icon Failed = new Icon("\uf05e", 4, NegativeColor);
        public static readonly Icon Invalid = new Icon("statusFailed.png", 4);
        public static readonly Icon Minus = new Icon("minus.png", 6);
        public static readonly Icon Pending = new Icon("\uf110", 3);
        public static readonly Icon Plus = new Icon("plus.png", 6);
        public static readonly Icon Run = new Icon("\uf04b", 7, PositiveColor);
        public static readonly Icon RunningFailure = new Icon("\uf05c", 1, MutualColor);
        public static readonly Icon RunningSuccess = new Icon("running.gif", 2);
        public static readonly Icon Save = new Icon("\uf0c7", 6);
        public static readonly Icon Stop = new Icon("\uf04d", 6, NegativeColor);
        public static readonly Icon Success = new Icon("\uf05d", 5, PositiveColor);
        public static readonly Icon Unknown = new Icon("\uf111", 6);
        public static readonly Icon UpArrow = new Icon("up.png", 6);
        public static readonly Icon Warning = new Icon("\uf111", 6, MutualColor);
        public static readonly Icon Preview = new Icon("\uf06e", 6);
        public static readonly Icon Edit = new Icon("\uf040", 6);
        public static readonly Icon Undo = new Icon("\uf0e2", 6);
        public static readonly Icon Repeat = new Icon("\uf01e", 6);
        public static readonly Icon Reorder = new Icon("\uf0c9", 6);


        public static readonly Icon Sentence = new Icon("statusUnknown.png", 6);
        public static readonly Icon Table = new Icon("statusUnknown.png", 6);
        public static readonly Icon SetVerification = new Icon("statusUnknown.png", 6);
        public static readonly Icon Section = new Icon("statusUnknown.png", 6);
        public static readonly Icon Test = new Icon("statusUnknown.png", 6);
        public static readonly Icon Paragraph = new Icon("statusUnknown.png", 6);
        public static readonly Icon EmbeddedSection = new Icon("statusUnknown.png", 6);
        public static readonly Icon Refresh = new Icon("statusUnknown.png", 6);
        public static readonly Icon Tags = new Icon("tags.png", 6);

        private readonly int _order;
        private readonly Brush _foreground;
        private readonly string _path;

        private Icon(string path, int order, Brush foreground = null)
        {
            _path = path;
            _order = order;
            _foreground = foreground ?? DefaultColor;
        }

        public string Name { get { return _path; } }
        public Brush Foreground { get { return _foreground; } }

        #region IComparable<Icon> Members

        public int CompareTo(Icon other)
        {
            return _order.CompareTo(other._order);
        }

        #endregion

        public Stream ImageStream()
        {
            return IconMarker.GetImage(_path);
        }


        public override string ToString()
        {
            return string.Format("Path: {0}", _path);
        }

        public static Icon IconFor(StepValidationStatus status)
        {
            switch (status)
            {
                case StepValidationStatus.Valid:
                    return Unknown;

                case StepValidationStatus.Error:
                    return Failed;

                case StepValidationStatus.Warning:
                    return Warning;
            }

            throw new ArgumentOutOfRangeException("status");
        }
    }
}