using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace StoryTeller.UserInterface.Editing.Scripts
{
    public class JavascriptFile
    {
        private readonly string _resourceName;
        private string _folder;
        private string _fileName;

        public JavascriptFile(string resourceName)
        {
            _resourceName = resourceName;

            var parts = _resourceName
                .Replace(typeof(Embeds).Namespace, string.Empty)
                .TrimStart('.')
                .Split('.');

            _folder = parts[0];
            _fileName = parts.Skip(1).ToArray().Join(".");

        }

        public string Contents() 
        {
            var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(_resourceName);
            var reader = new StreamReader(stream);

            return reader.ReadToEnd();
        }

        public string FileName 
        { 
            get
            {
                return _fileName;    
            }
        }
        public string Folder
        {
            get
            {
                return _folder;
            }
        }

        public string FullPath
        {
            get
            {
                return Path.Combine(Folder, FileName);
            }
        }
    }

    public static class Embeds
    {
        
        public static IEnumerable<JavascriptFile> GetFiles()
        {
            var names = Assembly.GetExecutingAssembly().GetManifestResourceNames();
            foreach (var name in names)
            {
 
                
                if (Path.GetExtension(name) == ".js")
                {
                    yield return new JavascriptFile(name);
                }
            }
        }

        public static void WriteTestEditorCSS()
        {
            using (var writer = new StreamWriter("testEditor.css"))
            {
                writer.WriteLine(TestEditorCSS());
            }
        }

        public static string TestEditorCSS()
        {
            var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(typeof(Embeds), "testEditor.css");
            var reader = new StreamReader(stream);

            return reader.ReadToEnd();
        }

        public static void WriteFiles()
        {
            // It's a happy accident that sorting the files by
            // desc. order of the folder happens to be the right
            // order for the file
            GetFiles().OrderByDescending(x => x.Folder).Each(file =>
            {
                if (!Directory.Exists(file.Folder))
                {
                    Directory.CreateDirectory(file.Folder);
                }

                if (!File.Exists(file.FullPath))
                {
                    using (var writer = new StreamWriter(file.FullPath))
                    {
                        writer.WriteLine(file.Contents());
                    }
                }
            });
        }
    }


}
