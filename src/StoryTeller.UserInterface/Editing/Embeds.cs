using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using StoryTeller.UserInterface.Editing.Scripts;

namespace StoryTeller.UserInterface.Editing
{
    public static class Embeds
    {
        public static IEnumerable<EmbeddedFile> GetFiles<T>() where T : IEmbedFileType
        {
            var names = Assembly.GetExecutingAssembly().GetManifestResourceNames();
            foreach (var name in names)
            {
                var fileType = Activator.CreateInstance<T>();
                if (Path.GetExtension(name) == fileType.Extension)
                {
                    yield return new EmbeddedFile(name, fileType);
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
            var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(typeof(JavascriptFile), "testEditor.css");
            var reader = new StreamReader(stream);

            return reader.ReadToEnd();
        }

        public static void WriteFiles()
        {
            // It's a happy accident that sorting the files by
            // desc. order of the folder happens to be the right
            // order for the file
            GetFiles<JavascriptFile>().OrderByDescending(x => x.Folder).Each(WriteFile);
            GetFiles<ImagePngFile>().Each(WriteFile);
        }

        private static void WriteFile(EmbeddedFile file)
        {
            if (!Directory.Exists(file.Folder))
            {
                Directory.CreateDirectory(file.Folder);
            }

            if (!File.Exists(file.FullPath))
            {
                using (var writer = new StreamWriter(file.FullPath))
                {
                    byte[] data = file.Data();
                    writer.BaseStream.Write(data, 0, data.Length);
                }
            }
        }
    }
}
