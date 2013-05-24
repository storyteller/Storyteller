using System;
using System.Windows.Media;
using StoryTeller.Model;

namespace StoryTeller.UserInterface
{
    public class Icon : IComparable<Icon>
    {
        public static readonly Icon AnyStatus = new Icon("\uf10c ", 7, Brushes.MutualColor);
        public static readonly Icon Invalid = new Icon("statusFailed.png", 4);

        public static readonly Icon Close = new Icon("\uf00d", 6, Brushes.NoColor);        public static readonly Icon Code = new Icon("\uf121", 6);
        public static readonly Icon Collapse = new Icon("\uf068", 6);
        public static readonly Icon Delete = new Icon("\uf00d", 6, Brushes.NegativeColor);
        public static readonly Icon DownArrow = new Icon("\uf0d7 ", 6);
        public static readonly Icon Expand = new Icon("\uf067;", 6);
        public static readonly Icon Failed = new Icon("\uf05e", 4, Brushes.NegativeColor);
        public static readonly Icon Minus = new Icon("\uf068", 6);
        public static readonly Icon Pending = new Icon("\uf110", 3);
        public static readonly Icon Plus = new Icon("\uf067", 6);
        public static readonly Icon Run = new Icon("\uf04b", 7, Brushes.PositiveColor);
        public static readonly Icon RunningFailure = new Icon("\uf05c", 1, Brushes.MutualColor);
        public static readonly Icon RunningSuccess = new Icon("\uf10c ", 2, Brushes.PositiveColor);
        public static readonly Icon Save = new Icon("\uf0c7", 6);
        public static readonly Icon Stop = new Icon("\uf04d", 6, Brushes.NegativeColor);
        public static readonly Icon Success = new Icon("\uf05d", 5, Brushes.PositiveColor);
        public static readonly Icon Unknown = new Icon("\uf111", 6);
        public static readonly Icon UpArrow = new Icon("\uf0d8 ", 6);
        public static readonly Icon Warning = new Icon("\uf111", 6, Brushes.MutualColor);
        public static readonly Icon Preview = new Icon("\uf06e", 6);
        public static readonly Icon Edit = new Icon("\uf040", 6);
        public static readonly Icon Undo = new Icon("\uf0e2", 6);
        public static readonly Icon Repeat = new Icon("\uf01e", 6);
        public static readonly Icon Reorder = new Icon("\uf0c9", 6);

        public static readonly Icon Comment = new Icon("\uf075 ", 6);
        public static readonly Icon Sentence = new Icon("\uf141", 6);
        public static readonly Icon Table = new Icon("\uf0ce", 6);
        public static readonly Icon SetVerification = new Icon("\uf14a ", 6);
        public static readonly Icon Section = new Icon("\uf022 ", 6);
        public static readonly Icon Test = new Icon("\uf0fe", 6);
        public static readonly Icon Paragraph = new Icon("\uf039 ", 6);
        public static readonly Icon EmbeddedSection = new Icon("\uf03c", 6);
        public static readonly Icon Refresh = new Icon("\uf021 ", 6);
        public static readonly Icon Tags = new Icon("\uf02c", 6);

        private readonly int _order;
        private readonly Brush _foreground;
        private readonly string _path;
        private readonly Brushes _brushes;

        private Icon(string path, int order, Brush foreground = null)
        {
            _path = path;
            _order = order;
            _brushes = new Brushes();
            _foreground = foreground ?? Brushes.DefaultColor;
        }

        public string Name { get { return _path; } }
        public Brush Foreground { get { return _foreground; } }

        #region IComparable<Icon> Members

        public int CompareTo(Icon other)
        {
            return _order.CompareTo(other._order);
        }

        #endregion

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