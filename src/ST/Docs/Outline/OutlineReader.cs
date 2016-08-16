using System.Linq;
using Baseline;
using ST.Docs.Topics;

namespace ST.Docs.Outline
{
    public class OutlineReader
    {
        private readonly string _file;
        private Topic _top;

        public OutlineReader(string file)
        {
            _file = file;
        }

        public Topic ReadFile()
        {
            var cache = new LightweightCache<string, Topic>();
            Topic top = null;

            new FileSystem().ReadTextFile(_file, line =>
            {
                readTopic(line, cache);
            });

            return _top;
        }

        private void readTopic(string line, LightweightCache<string, Topic> cache)
        {
            var parts = line.Split(':');

            var key = parts[0];


            var title = parts.Length > 1 ? parts[1] : key.Split('/').Last().Capitalize();


            if (key.Contains("/"))
            {
                var parentKey = key.ParentUrl();
                var parent = cache[parentKey];

                key = key.Split('/').Last();
                var urlSegment = parts.Length == 3 ? parts[2] : key;

                var topic = new Topic(key, "")
                {
                    Title = title,
                    UrlSegment = urlSegment
                };

                parent.AddChild(topic);

                cache[topic.Key] = topic;
            }
            else if (_top == null)
            {
                _top = new Topic("index", "")
                {
                    Title = title,
                    UrlSegment = ""
                };
            }
            else
            {
                var urlSegment = parts.Length == 3 ? parts[2] : key;

                var topic = new Topic(key, "")
                {
                    Title = title,
                    UrlSegment = urlSegment
                };

                _top.AddChild(topic);

                cache[topic.Key] = topic;
            }
        }
    }
}