using System;
using System.IO;
using System.Linq;
using FubuCore;
using ST.Docs.Topics;
using StructureMap.Util;

namespace ST.Docs.Outline
{
    public static class OutlineReader
    {
        public static Topic ReadFile(string file)
        {
            var cache = new LightweightCache<string, Topic>();
            Topic top = null;

            new FileSystem().ReadTextFile(file, line =>
            {
                // key:title:url

                var parts = line.Split(':');
                if (parts.Length < 2) throw new ArgumentOutOfRangeException("The valid format for outline nodes is 'key:title:[url]' where the url segment is optional");

                var key = parts[0];
                var title = parts[1];

                

                if (key.Contains("/"))
                {
                    var parentKey = key.ParentUrl();
                    var parent = cache[parentKey];

                    key = key.Split('/').Last();
                    var urlSegment = parts.Length == 3 ? parts[2] : key;

                    var topic = new Topic
                    {
                        Title = title,
                        Key = key,
                        UrlSegment = urlSegment
                    };

                    parent.AddChild(topic);

                    cache[topic.Key] = topic;
                }
                else if (top == null)
                {
                    top = new Topic
                    {
                        Key = "index",
                        Title = title,
                        UrlSegment = ""
                    };
                }
                else
                {
                    var urlSegment = parts.Length == 3 ? parts[2] : key;

                    var topic = new Topic
                    {
                        Key = key,
                        Title = title,
                        UrlSegment = urlSegment
                    };

                    top.AddChild(topic);

                    cache[topic.Key] = topic;
                }
            });

            return top;
        }

        

        
    }

    public static class OutlineWriter
    {
        public static readonly IFileSystem FileSystem = new FileSystem();

        public static void WriteToFiles(string directory, Topic topLevel)
        {
            if (!FileSystem.DirectoryExists(directory))
            {
                FileSystem.CreateDirectory(directory);
            }

            var file = directory.AppendPath(topLevel.Key) + ".md";
            if (!File.Exists(file))
            {
                new FileSystem().WriteToFlatFile(file, writer =>
                {
                    writer.WriteLine("<!--Title:{0}-->".ToFormat(topLevel.Title));
                    writer.WriteLine("<!--Url:{0}-->".ToFormat(topLevel.UrlSegment));
                });
            }


        }
    }
}