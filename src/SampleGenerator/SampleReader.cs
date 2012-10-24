using System;
using System.Collections.Generic;
using System.IO;
using StoryTeller.Persistence;

namespace SampleGenerator
{
    public class SampleReader
    {
        private readonly string _codeFolder;
        private readonly string _outputFolder;

        public SampleReader(string codeFolder, string outputFolder)
        {
            _codeFolder = codeFolder;
            _outputFolder = outputFolder;
        }

        public void FindSamples()
        {
            
            if (!Directory.Exists(_outputFolder))
            {
                Console.WriteLine("Creating folder " + _outputFolder);
                Directory.CreateDirectory(_outputFolder);
            }

            ReadDirectory(_codeFolder);
        }

        public static void Read(string filename, Action<string> callback)
        {
            using (var reader = new StreamReader(filename))
            {
                string line;
                while ( (line=reader.ReadLine()) != null)
                {
                    callback(line.TrimEnd()) ;
                }
            }
        }

        public void ReadDirectory(string directory)
        {
            Console.WriteLine("Searching directory {0} for samples", directory);
            var system = new FileSystem();
            system.GetFiles(directory, "cs").Each(f => readFile(f));

            system.GetSubFolders(directory).Each(dir => ReadDirectory(dir));
        }

        private void readFile(string file)
        {
            Console.WriteLine("  reading " + file);
            var collector = new FileCollector(file);
            collector.Read().Each(x => x.WriteFile(_outputFolder));
        }
    }
}