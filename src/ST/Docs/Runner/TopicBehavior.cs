using FubuMVC.Core.Behaviors;
using FubuMVC.Core.Runtime;
using ST.Docs.Topics;
using ST.Docs.Transformation;

namespace ST.Docs.Runner
{
    public class TopicBehavior : IActionBehavior
    {
        private readonly Topic _topic;
        private readonly IHtmlGenerator _generator;
        private readonly IOutputWriter _writer;

        public TopicBehavior(Topic topic, IHtmlGenerator generator, IOutputWriter writer)
        {
            _topic = topic;
            _generator = generator;
            _writer = writer;
        }

        public void Invoke()
        {
            // TODO -- have this inject in the watcher later if in dev mode?
            _writer.Write(MimeType.Html, _generator.Generate(_topic));
        }

        public void InvokePartial()
        {
            Invoke();
        }
    }
}