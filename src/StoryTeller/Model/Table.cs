using System;
using System.Collections.Generic;
using System.Linq;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Model
{
    public interface ITable
    {
        string Label { get; }
        IEnumerable<TextInput> InputsToDisplay(StepLeaf leaf);
        string[] HiddenInputs(StepLeaf leaf);
        void SetDefaultValueFor(string key, StepLeaf leaf);
    }

    [Serializable]
    public class Table : GrammarStructure, ITable
    {
        private readonly List<Cell> _cells;
        private readonly IList<TextInput> _inputs = new List<TextInput>();
        private readonly string _label;
        private readonly string _leafName;

        public Table()
        {
        }

        public Table(string label, string leafName, List<Cell> cells)
        {
            Name = label;
            _label = label;
            _cells = cells;
            _leafName = leafName;
            _inputs = cells.Select(x => new TextInput(x)).ToList();
        }

        public Table(string label, string childStepName, params Cell[] cells)
            : this(label, childStepName, new List<Cell>(cells))
        {
        }

        public List<Cell> Cells { get { return _cells; } }

        public string LeafName { get { return _leafName; } }

        #region ITable Members

        public override string Label { get { return _label; } }

        public void SetDefaultValueFor(string key, StepLeaf leaf)
        {
            Cell cell = _cells.First(x => x.Key == key);
            leaf.SetStepValue(key, cell.DefaultValue);
        }

        public IEnumerable<TextInput> InputsToDisplay(StepLeaf leaf)
        {
            IEnumerable<string> attributes = leaf.GetAllUniqueAttributes();
            return _inputs.Where(x => attributes.Contains(x.Cell.Key) || !x.Cell.HasDefault());
        }

        public string[] HiddenInputs(StepLeaf leaf)
        {
            IEnumerable<string> attributes = leaf.GetAllUniqueAttributes();
            return _cells.Where(x => !attributes.Contains(x.Key)).Select(x => x.Key).ToArray();
        }

        #endregion

        private StepLeaf leafFor(IStep step)
        {
            return step.LeafFor(_leafName);
        }

        protected internal override void fillExample(IStep step)
        {
            StepLeaf leaf = leafFor(step);
            for (int i = 0; i < 3; i++)
            {
                IStep example = BuildExampleStep();

                leaf.Add(example);
            }
        }

        public virtual IStep BuildExampleStep()
        {
            var example = new Step(LeafName);
            _cells.Where(cell => !cell.HasDefault()).Each(cell => example.Set(cell.Key, cell.SampleValue()));
            return example;
        }


        public TableWriter GetWriter(IStep step)
        {
            StepLeaf leaf = leafFor(step);
            IEnumerable<TextInput> inputs = InputsToDisplay(leaf);
            return new TableWriter
            {
                Leaf = leaf,
                Inputs = inputs,
                DisplayCells = inputs.Select(x => x.Cell)
            };
        }


        public override void AcceptVisitor(IGrammarVisitor visitor, IStep step)
        {
            visitor.Table(this, step);
        }


        public bool Equals(Table obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;

            if (!Equals(obj._leafName, _leafName)) return false;
            if (!Equals(obj._label, _label)) return false;

            if (_cells.Count != obj._cells.Count) return false;

            for (int i = 0; i < _cells.Count; i++)
            {
                if (!_cells[i].Equals(obj._cells[i])) return false;
            }

            return true;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(Table)) return false;
            return Equals((Table)obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int result = (_cells != null ? _cells.GetHashCode() : 0);
                result = (result * 397) ^ (_leafName != null ? _leafName.GetHashCode() : 0);
                result = (result * 397) ^ (_label != null ? _label.GetHashCode() : 0);
                return result;
            }
        }

        public override string ToString()
        {
            string[] cellStrings = _cells.Select(x => x.ToString()).ToArray();
            return string.Format("ChildGroupName: {0}, Label: {1}, Cells: {2}", _leafName, _label,
                                 string.Join(", ", cellStrings));
        }

        public StepValidationStatus Validate(IStep step)
        {
            return step.Validate(_cells).GetStatus();
        }

        public StepLeaf GetLeaf(IStep step)
        {
            return step.LeafFor(LeafName);
        }

        #region Nested type: TableWriter

        public class TableWriter
        {
            public IEnumerable<Cell> DisplayCells;
            public IEnumerable<TextInput> Inputs;
            public StepLeaf Leaf;
        }

        #endregion
    }
}