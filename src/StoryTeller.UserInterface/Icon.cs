using System;
using System.IO;
using StoryTeller.Model;
using StoryTeller.UserInterface.Icons;

namespace StoryTeller.UserInterface
{
    public class Icon : IComparable<Icon>
    {
        public static readonly Icon AnyStatus = new Icon("statusAll.png", 7);
        public static readonly Icon Close = new Icon("delete.png", 6);
        public static readonly Icon Collapse = new Icon("statusUnknown.png", 6);
        public static readonly Icon Comment = new Icon("comment.png", 6);
        public static readonly Icon Delete = new Icon("delete.png", 6);
        public static readonly Icon DownArrow = new Icon("down.png", 6);
        public static readonly Icon Expand = new Icon("statusUnknown.png", 6);
        public static readonly Icon Failed = new Icon("statusFailed.png", 4);
        public static readonly Icon Invalid = new Icon("statusFailed.png", 4);
        public static readonly Icon Minus = new Icon("minus.png", 6);
        public static readonly Icon Pending = new Icon("pending.gif", 3);
        public static readonly Icon Plus = new Icon("plus.png", 6);
        public static readonly Icon Run = new Icon("runEmbedded.png", 7);
        public static readonly Icon RunningFailure = new Icon("runningError.gif", 1);
        public static readonly Icon RunningSuccess = new Icon("running.gif", 2);
        public static readonly Icon Save = new Icon("save.png", 6);
        public static readonly Icon Stop = new Icon("stopIcon.png", 6);
        public static readonly Icon Success = new Icon("statusSuccess.png", 5);
        public static readonly Icon Unknown = new Icon("statusUnknown.png", 6);
        public static readonly Icon UpArrow = new Icon("up.png", 6);
        public static readonly Icon Warning = new Icon("statusIgnored.png", 6);

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
        private readonly string _path;

        private Icon(string path, int order)
        {
            _path = path;
            _order = order;
        }

        public string Path { get { return _path; } }

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