using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoryTeller.Engine
{
    public class CompositeSystem : ISystem
    {
        private readonly ISystem _inner;
        private readonly CellHandling _handling;

        public CompositeSystem(ISystem inner, CellHandling handling)
        {
            _inner = inner;
            _handling = handling;
        }

        public void Dispose()
        {
            _inner.Dispose();
            foreach (var extension in _handling.Extensions)
            {
                extension.Dispose();
            }
        }

        public CellHandling Start()
        {
            return _handling;
        }

        public IExecutionContext CreateContext()
        {
            var inner = _inner.CreateContext();
            return new CompositeExecutionContext(inner, _handling.Extensions);
        }

        public Task Warmup()
        {
            var warmup = _inner.Warmup();
            if (warmup.Status == TaskStatus.WaitingForActivation)
            {
                warmup.Start();
            }

            return warmup.ContinueWith(async t =>
            {
                foreach (var extension in _handling.Extensions)
                {
                    await extension.Start();
                }
            });
        }

    }

    public class CompositeExecutionContext : IExecutionContext
    {
        private readonly IExecutionContext _inner;
        private readonly IList<IExtension> _extensions;

        public CompositeExecutionContext(IExecutionContext inner, IList<IExtension> extensions)
        {
            _inner = inner;
            _extensions = extensions;
        }

        public void Dispose()
        {
            _inner.Dispose();
        }

        public void BeforeExecution(ISpecContext context)
        {
            _inner.BeforeExecution(context);
            foreach (var extension in _extensions)
            {
                extension.BeforeEach(context);
            }
        }

        public void AfterExecution(ISpecContext context)
        {
            _inner.AfterExecution(context);
            foreach (var extension in _extensions)
            {
                extension.AfterEach(context);
            }
        }

        public T GetService<T>()
        {
            return _inner.GetService<T>();
        }
    }
}