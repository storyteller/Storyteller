namespace StoryTeller.Model
{
    public static class NodeHolderExtensions
    {
        public static Comment AddComment(this INodeHolder holder, string text)
        {
            var comment = new Comment {Text = text};
            holder.Children.Add(comment);

            return comment;
        }
    }
}