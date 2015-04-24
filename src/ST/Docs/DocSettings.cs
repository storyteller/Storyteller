using System;
using ST.Docs.Html;

namespace ST.Docs
{
    public enum UrlStyle
    {
        Relative,
        Absolute,
        FileExport
    }

    public class DocSettings
    {
        public DocSettings()
        {
            UrlStyle = UrlStyle.Absolute;
        }

        public UrlStyle UrlStyle { get; set; }
        public string Root { get; set; }

        public Type UrlResolverType()
        {
            switch (UrlStyle)
            {
                case UrlStyle.Absolute:
                    return typeof (AbsoluteUrlResolver);

                case UrlStyle.Relative:
                    return typeof (RelativeUrlResolver);

                case UrlStyle.FileExport:
                    return typeof (FileExportUrlResolver);
            }

            throw new ArgumentOutOfRangeException("Shouldn't be possible");
        }
    }
}