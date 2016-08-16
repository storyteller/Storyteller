using System.Collections.Generic;
using Baseline;
using HtmlTags;

namespace ST.Docs.Todos
{
    public class TodoTableTag : TableTag
    {
        public TodoTableTag(IEnumerable<TodoTask> todos)
        {
            AddClass("table");

            AddHeaderRow(tr =>
            {
                tr.Header("File");
                tr.Header("Line");
                tr.Header("Message");
            });

            todos.Each(task =>
            {
                AddBodyRow(tr =>
                {
                    tr.Cell(task.File);
                    tr.Cell(task.Line.ToString()).Style("align", "right");
                    tr.Cell(task.Message);
                });
            });
        }
    }
}