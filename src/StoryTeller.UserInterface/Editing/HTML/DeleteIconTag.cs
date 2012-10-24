using HtmlTags;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class DeleteIconTag : HtmlTag
    {
        public DeleteIconTag() : base("a")
        {
            Add("img")
                .Attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGCSURBVHjaYvz//z8DJQAggBgpNQAggOAG7NdgnASkrKDisY43/l9HVgiU1wRSi6HcY0D5PBADIIAYQAaA8D51hjO/5nb//5Pq+R/EBmJNJDlNkNgfB+X/IDWZqqJnYHIAAcSCbAvTiX0M/yycGOx+/zU+dHzXYqCtsVCpxbZSKsb/YtIZmKZ2gFTC9QAEEBOS/thDh7afZTq6m+GfrSuDrYGVMdTJQM1Kxv+BmhmmdDLkfmY6C1IL0wQQQHAvIDv1b7gV2Kl/PHX+/3FUgrCNhMFOB2JNZD0AAYQRC7DAslPUMf4XGg8RBDo7H2rztFuvUAIXIICYcEXP/5/fEFH14wfOaAQIIKxegDn7F9DZfzR5wOwf8gxYvQAQQAy4ouoXws9nvgM1g8TeyGIaAhBAKOngt4MKRoBB8Zk3MhBDXkgzoKQDgADCSEi/DEUwbIEZAtKMnpAAAgg5Kc9e/U/UEJYm0EM7S00MnpRDmV5fAyblOBAbIIAozkwAAUSxAQABBgDhljQ0S/l6kAAAAABJRU5ErkJggg==")
                .Attr("width", 16)
                .Attr("height", 16);
        }
    }
}