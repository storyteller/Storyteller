using System;
using System.IO;
using FubuCore;
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

        public static DocSettings ForTesting()
        {
            var directory = Path.GetTempPath().AppendPath(Guid.NewGuid().ToString());
            new FileSystem().CreateDirectory(directory);
            return new DocSettings
            {
                Root = directory
            };
        }
    }
}