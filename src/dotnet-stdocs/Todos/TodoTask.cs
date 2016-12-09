using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Todos
{
    public class TodoTask
    {

        public static IEnumerable<TodoTask> FindAllTodos(IEnumerable<Topic> topics)
        {
            var tasks = topics.Select(topic => { return Task.Factory.StartNew(() => { return ReadTasks(topic).ToArray(); }); });

            Task.WaitAll(tasks.ToArray());

            return tasks.SelectMany(x => x.Result);
        }

        public static IEnumerable<TodoTask> ReadTasks(Topic topic)
        {
            var i = 0;
            var regex = @"TODO\((.*?)\)";

            using (var stream = new FileStream(topic.File, FileMode.Open))
            {
                using (StreamReader streamReader = new StreamReader(stream))
                {
                    string text;
                    while ((text = streamReader.ReadLine()) != null)
                    {
                        i++;

                        if (text.Contains("TODO"))
                        {
                            var matches = Regex.Matches(text, regex);
                            foreach (Match match in matches)
                            {
                                var message = match.Groups[1].Value.Trim();
                                yield return new TodoTask
                                {
                                    File = topic.File,
                                    Key = topic.Key,
                                    Line = i,
                                    Message = message
                                };
                            }

                            if (matches.Count == 0)
                            {
                                var index = text.IndexOf("TODO");
                                var message = text.Substring(index + 4).Trim();

                                yield return new TodoTask
                                {
                                    File = topic.File,
                                    Key = topic.Key,
                                    Line = i,
                                    Message = message
                                };
                            }
                        }
                    }
                }
            }

        }

        public string Key { get; set; }
        public string File { get; set; }
        public int Line { get; set; }
        public string Message { get; set; }

        protected bool Equals(TodoTask other)
        {
            return string.Equals(Key, other.Key) && string.Equals(File, other.File) && Line == other.Line && string.Equals(Message, other.Message);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((TodoTask)obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                var hashCode = (Key != null ? Key.GetHashCode() : 0);
                hashCode = (hashCode * 397) ^ (File != null ? File.GetHashCode() : 0);
                hashCode = (hashCode * 397) ^ Line;
                hashCode = (hashCode * 397) ^ (Message != null ? Message.GetHashCode() : 0);
                return hashCode;
            }
        }

        public override string ToString()
        {
            return string.Format("Key: {0}, File: {1}, Line: {2}, Message: {3}", Key, File, Line, Message);
        }
    }
}