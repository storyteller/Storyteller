using System;
using System.Linq.Expressions;
using FubuCore.Reflection;
using StoryTeller.Domain;
using StoryTeller.Engine.Reflection;

namespace StoryTeller.Testing
{
    public static class StepExtensions
    {
        public static void SetProperty<T, V>(this IStep step, Expression<Func<T, V>> expression, V value)
        {
            Accessor accessor = ReflectionHelper.GetAccessor(expression);
            step.Set(accessor.Name, value);
        }
    }
}