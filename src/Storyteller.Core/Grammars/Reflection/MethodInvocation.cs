using System;
using System.Linq;
using System.Reflection;
using Storyteller.Core.Conversion;

namespace Storyteller.Core.Grammars.Reflection
{
    public class MethodInvocation
    {
        private readonly string[] _arguments;
        private readonly MethodInfo _method;
        private readonly object _target;

        public MethodInvocation(string[] arguments, MethodInfo method, object target)
        {
            _arguments = arguments;
            _method = method;
            _target = target;
        }

        public object Invoke(StepValues values)
        {
            var parameters = _arguments.Select(values.Get).ToArray();
            return _method.Invoke(_target, parameters);
        }
    }

}