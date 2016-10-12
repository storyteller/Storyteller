using System;
using Baseline;

namespace StoryTeller.Model.Persistence.DSL
{
    public class CommentMode : IReaderMode
    {
        private readonly FixtureModel _fixture;
        private readonly Comment _comment = new Comment();

        public CommentMode(FixtureModel fixture)
        {
            _fixture = fixture;
        }

        public IReaderMode Read(int indention, string text)
        {
            if (_comment.Text.IsEmpty())
            {
                _comment.Text = text;
            }
            else
            {
                _comment.Text += Environment.NewLine + text;
            }

            return this;
        }

        public int Indention { get; set; }
    }
}
