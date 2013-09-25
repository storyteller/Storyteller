using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace StoryTeller.UserInterface.Editing
{
    public class EmbeddedFile
    {
        private readonly string _resourceName;
        private readonly string _folder;
        private readonly string _fileName;

        public EmbeddedFile(string resourceName, IEmbedFileType fileType)
        {
            _resourceName = resourceName;

            var parts = _resourceName
                .Replace(fileType.GetType().Namespace, string.Empty)
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

        public byte[] Data()
        {
            var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(_resourceName);
            using (var memoryStream = new MemoryStream())
            {
                if (stream != null) stream.CopyTo(memoryStream);
                return memoryStream.ToArray();
            }
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
}