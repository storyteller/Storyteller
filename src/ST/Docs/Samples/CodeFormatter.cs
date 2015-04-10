using System.IO;
using FubuMVC.Core.Runtime.Files;

namespace ST.Docs.Samples
{
    public class CodeFormatter
    {
        private readonly bool _levelIndentation;

        public CodeFormatter(bool levelIndentation)
        {
            _levelIndentation = levelIndentation;
        }

        public Snippet Format(IFubuFile file, string languageClass = null)
        {
            var snippet = new Snippet(file.Path){
                Class = languageClass ?? "lang-" + Path.GetExtension(file.Path).Replace(".", "")
            };

            file.ReadContents(stream =>
            {
                using (var reader = new StreamReader(stream))
                {
                    int lineNumber = 0;

                    string line;
                    while ((line = reader.ReadLine()) != null)
                    {
                        lineNumber++;

                        if (line.Contains(Snippets.SAMPLE) || line.Contains(Snippets.END))
                        {
                            snippet.Append(string.Empty, lineNumber);
                        }
                        else
                        {
                            snippet.Append(line, lineNumber);
                        }
                    }
                }
            });



            return snippet;
        }
    }
}