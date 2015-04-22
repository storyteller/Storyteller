using System.IO;
using FubuMVC.Core.Runtime.Files;

namespace ST.Docs.Samples
{
    public class CodeFormatter
    {
        public Sample Format(IFubuFile file, string languageClass = null)
        {
            var snippet = new Sample(file.Path){
                Language = languageClass ?? "lang-" + Path.GetExtension(file.Path).Replace(".", "")
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

                        if (line.Contains(Samples.SAMPLE) || line.Contains(Samples.END))
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