using System;
using System.Reflection;
using StoryTeller.Domain;
using StoryTeller.Engine.Reflection;
using System.Linq;

namespace StoryTeller.Engine
{
    public abstract class ReflectionGrammar : LineGrammar
    {
        private readonly object _target;
        private Action<object> _callback;
        protected MethodInfo _method;

        // TODO -- this needs to be build separately.  Need an ObjectFinder here.
        public ReflectionGrammar(MethodInfo method, object target)
            : base(method.GetTemplate())
        {
            _method = method;
            _target = target;
        }

        public override string Description { get { return DescriptionAttribute.GetDescription(_method); } }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            _callback = value =>
            {
                var returnCell = GetCells().Where(x => x.IsResult).FirstOrDefault();

                if (returnCell != null) returnCell.RecordActual(value, containerStep, context);
            };

            _method.Call(_target, containerStep, context, _callback);
        }
    }
}