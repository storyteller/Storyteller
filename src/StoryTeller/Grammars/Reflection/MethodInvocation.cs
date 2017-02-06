using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Reflection
{
    public class MethodInvocation
    {
        public static MethodInvocation For(MethodInfo method, object target)
        {
            if (method.HasReturn() && method.ReturnType.Closes(typeof(Task<>)))
            {
                var returnType = method.ReturnType.GetGenericArguments().Single();
                return typeof(AsyncMethodInvocationWithReturn<>)
                    .CloseAndBuildAs<MethodInvocation>(method, target, returnType);
            }

            return new MethodInvocation(method, target);
        }

        private Cell[] _outputs = new Cell[0];
        private Cell[] _cells;

        protected MethodInvocation(MethodInfo method, object target)
        {
            var parameters = method.GetParameters();
            Arguments = parameters.Select(x => x.Name).ToArray();


            Method = method;
            Target = target;

            Format = Method.DeriveFormat();
        }

        public string[] Arguments { get; }

        public object Target { get; }

        public MethodInfo Method { get; }

        public void Compile(Fixture fixture, CellHandling cellHandling)
        {
            _cells = Method.GetParameters().Select(x => Cell.For(cellHandling, x, fixture)).ToArray();
            _outputs = _cells.Where(x => x.result).ToArray();

            if (Method.HasReturn() && Method.ReturnType != typeof(Task))
            {
                ReturnCell = Cell.For(cellHandling, Method.ReturnParameter, fixture);
                ReturnCell.result = true;
                if (ReturnCell.Key.IsEmpty())
                {
                    ReturnCell.Key = Format.ParseTemplateKeys().LastOrDefault() ?? "returnValue";
                }
            }
        }

        public bool IsAsync()
        {
            return Method.HasReturn() && Method.ReturnType.CanBeCastTo<Task>();
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
            var parameters = Arguments.Select(values.Get).ToArray();
            return (bool) Method.Invoke(Target, parameters);
        }

        public Task<bool> InvokeTestAsync(StepValues values)
        {
            var parameters = Arguments.Select(values.Get).ToArray();
            return (Task<bool>)Method.Invoke(Target, parameters);
        }

        public IEnumerable<CellResult> Invoke(StepValues values)
        {
            var parameters = Arguments.Select(values.Get).ToArray();
            var returnValue = Method.Invoke(Target, parameters);

            foreach (var cellResult in buildCellResults(values, parameters, returnValue)) yield return cellResult;
        }

        protected IEnumerable<CellResult> buildCellResults(StepValues values, object[] parameters, object returnValue)
        {
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

        public virtual Task<IEnumerable<CellResult>> InvokeAsync(StepValues values)
        {
            var parameters = Arguments.Select(values.Get).ToArray();
            var task = Method.Invoke(Target, parameters).As<Task>();

            return task.ContinueWith(t => buildCellResults(values, parameters, task));


        }

    }

    public class AsyncMethodInvocationWithReturn<T> : MethodInvocation
    {
        public AsyncMethodInvocationWithReturn(MethodInfo method, object target) : base(method, target)
        {
            if (!method.HasReturn() || method.ReturnType != typeof(Task<T>))
            {
                throw new ArgumentOutOfRangeException(nameof(method));
            }
        }

        public override Task<IEnumerable<CellResult>> InvokeAsync(StepValues values)
        {
            var parameters = Arguments.Select(values.Get).ToArray();
            var task = Method.Invoke(Target, parameters).As<Task<T>>();

            return task.ContinueWith(t => buildCellResults(values, parameters, task.Result));
        }
    }

}