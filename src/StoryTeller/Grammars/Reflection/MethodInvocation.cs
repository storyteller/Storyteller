using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Reflection
{
    public class MethodInvocation
    {
        private readonly string[] _arguments;
        private readonly MethodInfo _method;
        private readonly object _target;
        private Cell[] _outputs = new Cell[0];
        private Cell[] _cells;

        public MethodInvocation(MethodInfo method, object target)
        {
            var parameters = method.GetParameters();
            _arguments = parameters.Select(x => x.Name).ToArray();


            _method = method;
            _target = target;

            Format = _method.DeriveFormat();
        }

        public void Compile(Fixture fixture, CellHandling cellHandling)
        {
            _cells = _method.GetParameters().Select(x => Cell.For(cellHandling, x, fixture)).ToArray();
            _outputs = _cells.Where(x => x.output).ToArray();

            if (_method.HasReturn())
            {
                ReturnCell = Cell.For(cellHandling, _method.ReturnParameter, fixture);
                ReturnCell.output = true;
                if (ReturnCell.Key.IsEmpty())
                {
                    ReturnCell.Key = Format.ParseTemplateKeys().LastOrDefault() ?? "returnValue";
                }
            }
        }

        public string Format { get; private set; }
        public Cell ReturnCell { get; private set; }

        public IEnumerable<Cell> InputCells()
        {
            return _cells;
        } 

        public IEnumerable<Cell> Cells
        {
            get
            {
                foreach (var cell in _cells)
                {
                    yield return cell;
                }

                if (ReturnCell != null)
                {
                    yield return ReturnCell;
                }
            }
        }

        public bool InvokeTest(StepValues values)
        {
            var parameters = _arguments.Select(values.Get).ToArray();
            return (bool) _method.Invoke(_target, parameters);
        }

        public IEnumerable<CellResult> Invoke(StepValues values)
        {
            var parameters = _arguments.Select(values.Get).ToArray();
            var returnValue = _method.Invoke(_target, parameters);

            foreach (var output in _outputs)
            {
                var actual = parameters[output.Position];
                yield return output.Check(values, actual);
            }

            if (ReturnCell != null)
            {
                yield return ReturnCell.Check(values, returnValue);
            }
        }

    }

}