using System;
using System.Collections.Generic;
using System.IO;

namespace StoryTeller.Persistence
{
    public interface IFileSystem
    {
        void CreateFolder(string path);
        void DeleteFolder(string folder);
        void DeleteFile(string filename);
        string[] GetSubFolders(string folderPath);
        string[] GetFiles(string folderPath, string extensionWithoutPeriod);
        bool FileExists(string path);
        void WriteStringToFile(string text, string filename);
        string ReadStringFromFile(string filename);
    }

    public class FileSystem : IFileSystem
    {

        public void CreateFolder(string path)
        {
            if (Directory.Exists(path))
            {
                return;
            }

            Directory.CreateDirectory(path);
        }

        public void DeleteFolder(string folder)
        {
            if (Directory.Exists(folder))
            {
                Directory.Delete(folder, true);
            }
        }

        public void DeleteFile(string filename)
        {
            File.Delete(filename);
        }

        public string[] GetSubFolders(string folderPath)
        {
            if (!Directory.Exists(folderPath))
            {
                return new string[0];
            }

            string[] strings = Directory.GetDirectories(folderPath);
            var suiteFolders = new List<string>();
            foreach (string folder in strings)
            {
                var dir = new DirectoryInfo(folder);

                //Ignore directories that are hidden that have other FileAttributes
                if (
                    (dir.Attributes & (FileAttributes.Hidden | FileAttributes.Directory)) ==
                    (FileAttributes.Hidden | FileAttributes.Directory))
                {
                    continue;
                }

                suiteFolders.Add(folder);
            }


            return suiteFolders.ToArray();
        }

        public string[] GetFiles(string folderPath, string extensionWithoutPeriod)
        {
            if (!Directory.Exists(folderPath))
            {
                return new string[0];
            }

            return Directory.GetFiles(folderPath, "*." + extensionWithoutPeriod);
        }

        public bool FileExists(string path)
        {
            return File.Exists(path);
        }

        public void WriteStringToFile(string text, string filename)
        {
            File.WriteAllText(filename, text);
        }

        public string ReadStringFromFile(string filename)
        {
            return File.ReadAllText(filename);
        }
    }
}