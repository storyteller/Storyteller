using System.Linq;
using HtmlTags;
using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Todos
{

    public class TodoExplorer
    {
        private readonly Topic _top;

        public TodoExplorer(Topic top)
        {
            _top = top;
        }

        public HtmlDocument get__todo()
        {
            var document = new HtmlDocument
            {
                Title = "TODO's"
            };

            document.Head.Add("link").Attr("rel", "stylesheet").Attr("type", "text/css")
                .Attr("href", "/content/bootstrap.min.css");

            document.Push("div").AddClass("container");

            document.Add("h1").Text("TODO's");

            var todos = TodoTask.FindAllTodos(_top.AllTopicsInOrder().ToArray());

            document.Add(new TodoTableTag(todos));

            return document;
        }
    }
}