using System;
using System.Collections.Generic;
using System.Linq;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Rendering;

namespace StoryTeller.Model
{
    [Serializable]
    public class Sentence : GrammarStructure, IWriter
    {
        private readonly List<Cell> _cells = new List<Cell>();
        private readonly bool _isFact;
        private readonly List<SentencePart> _parts = new List<SentencePart>();
        private readonly Cell _resultCell;
        private readonly string _template;

        public Sentence()
        {
        }

        public Sentence(string template, IEnumerable<Cell> cells)
        {
            _cells = new List<Cell>(cells);
            try
            {
                new DisplayParser(this).Parse(template, new Step(), cells);

                IEnumerable<Cell> resultCells = cells.Where(c => c.IsBooleanResult());
                if (resultCells.Count() == 1)
                {
                    _resultCell = resultCells.First();
                    _isFact = !_parts.Select(x => x as TextInput).Any(x => x != null && x.Cell == _resultCell);
                }
            }
            catch (Exception e)
            {
                var error = new GrammarError
                {
                    Message = e.Message,
                    Node = this
                };
                logError(error);
            }

            _template = template;
            Name = _template.Replace("{", "").Replace("}", "");
        }

        public override string Label { get { return _template; } }

        public int PartCount { get { return _parts.Count; } }

        public List<SentencePart> Parts { get { return _parts; } }

        public SentencePart this[int index] { get { return _parts[index]; } }

        public bool IsFact { get { return _isFact; } }
        public IList<Cell> Cells { get { return _cells; } }

        public Cell ResultCell { get { return _resultCell; } }

        #region IWriter Members

        void IWriter.WriteCell(Cell cell, IStep step)
        {
            With(new TextInput(cell));
        }

        void IWriter.WriteText(string text)
        {
            With(new Label(text));
        }

        #endregion

        public static Sentence For(string template, params Cell[] cells)
        {
            return new Sentence(template, cells);
        }

        protected internal override void fillExample(IStep step)
        {
            IEnumerable<Cell> cells = IsFact ? _cells.Where(x => !x.IsBooleanResult()) : _cells;
            cells.Each(cell => step.Set(cell.Key, cell.SampleValue()));
        }

        public override void AcceptVisitor(IGrammarVisitor visitor, IStep step)
        {
            visitor.Sentence(this, step);
        }

        public Sentence With(params SentencePart[] parts)
        {
            _parts.AddRange(parts);

            return this;
        }

        public bool Equals(Sentence obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;

            if (!Name.Equals(obj.Name)) return false;

            if (_parts.Count != obj._parts.Count) return false;

            for (int i = 0; i < _parts.Count; i++)
            {
                if (!_parts[i].Equals(obj._parts[i])) return false;
            }

            return true;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(Sentence)) return false;
            return Equals((Sentence)obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((_parts != null ? _parts.GetHashCode() : 0) * 397) ^
                       (_resultCell != null ? _resultCell.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            string[] array = _parts.Select(x => x.ToString()).ToArray();
            return string.Format("Parts: {0}", string.Join(", ", array));
        }

        public StepValidationStatus Validate(IStep step)
        {
            StepValidationStatus status = step.Validate(_cells).GetStatus();
            if (status == StepValidationStatus.Valid && AllErrors().Count() > 0) return StepValidationStatus.Warning;

            return status;
        }
    }
}