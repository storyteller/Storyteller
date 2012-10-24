using System;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using System.Collections.Generic;

namespace StoryTeller.Html
{
    public class SentenceTag : HtmlTag
    {
        private readonly Sentence _sentence;
        private readonly IStep _step;

        public SentenceTag(Sentence sentence, IStep step) : base("div")
        {
            _sentence = sentence;
            _step = step;
            this.AddSafeClassName(sentence.Name);
            AddClass("sentence");


        }

        public Sentence Sentence
        {
            get { return _sentence; }
        }

        public void WritePreview(ITestContext context)
        {
            write(new Preview(this, context));
        }

        public void WriteResults(ITestContext context)
        {
            write(new Results(this, context));


            var results = context.ResultsFor(_step);
            if (results.HasErrors())
            {
                AddClass(HtmlClasses.EXCEPTION);
                Next = new ExceptionTag(results.ExceptionText);
            }
            else
            {
                if (_sentence.IsFact)
                {
                    var raw = results.GetActual(_sentence.ResultCell.Key);

                    var success = raw == null ? false : (bool)raw;
                    var className = success ? HtmlClasses.PASS : HtmlClasses.FAIL;
                    AddClass(className);
                }
            }
        }

        private void write(ISentenceVisitor visitor)
        {
            _sentence.Parts.Each(x => x.AcceptVisitor(visitor));
        }

        public class Preview : ISentenceVisitor
        {
            private readonly HtmlTag _tag;
            private readonly IStep _step;
            private readonly ITestContext _context;

            public Preview(SentenceTag tag, ITestContext context)
            {
                _tag = tag;
                _context = context;
                _step = tag._step;
            }


            public void Label(Label label)
            {
                _tag.Add("span").Text(label.Text);
            }

            public void Input(TextInput input)
            {
                var cellTag = new CellTag(input.Cell, _step);
                cellTag.WritePreview(_context);
                _tag.Append(cellTag);
            }
        }

        public class Results : ISentenceVisitor
        {
            private readonly SentenceTag _tag;
            private readonly IStep _step;
            private ITestContext _context;
            private StepResults _results;

            public Results(SentenceTag tag, ITestContext context)
            {
                _tag = tag;
                _context = context;
                _results = _context.ResultsFor(tag._step);
                _step = tag._step;
            }

            public void Label(Label label)
            {
                var span = _tag.Add("span").Text(label.Text);
                if (_tag.Sentence.IsFact)
                {
                    span.AddClass("fact");
                }
            }

            public void Input(TextInput input)
            {
                var cellTag = new CellTag(input.Cell, _step);
                cellTag.WriteResults(_results, _context);
                _tag.Append(cellTag);
            }
        }
    }
}