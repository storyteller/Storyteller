using System;
using System.Linq;
using System.Reflection;
using Baseline;

namespace StoryTeller.Grammars.API
{
    internal static class MemberInfoExtensions
    {
        public static MemberInfo[] Append(this MemberInfo[] path, MemberInfo member)
        {
            var array = new MemberInfo[path.Length + 1];
            path.CopyTo(array, 0);
            array[array.Length - 1] = member;

            return array;
        }

        public static Type GetMemberType(this MemberInfo member)
        {
            return (member as PropertyInfo)?.PropertyType ?? (member as FieldInfo)?.FieldType;
        }

        public static void SetValue(this object target, MemberInfo[] members, object value)
        {
            for (int i = 0; i < members.Length - 1; i++)
            {
                var memberInfo = members[i];
                var child = memberInfo.GetValue(target);
                if (child != null)
                {
                    target = child;
                    continue;
                }

                var childType = memberInfo.GetMemberType();
                if (childType.IsConcreteWithDefaultCtor())
                {
                    child = Activator.CreateInstance((Type) childType);
                    target.SetValue(memberInfo, child);
                    target = child;
                    continue;
                }

                throw new NullReferenceException($"Item #{i + 1} in the path {members.Select(x => x.Name).Join(".")} is null and cannot be automatically built by Storyteller");
            }

            target.SetValue(members.Last(), value);
        }

        public static object GetValue(this object target, MemberInfo[] members)
        {
            var lastMember = members.Last();

            for (int i = 0; i < members.Length - 1; i++)
            {
                var memberInfo = members[i];
                var child = memberInfo.GetValue(target);
                if (child == null) return null;

                target = child;
            }

            return lastMember.GetValue(target);
        }

        public static bool IsConcreteWithDefaultCtor(this Type type)
        {
            if (type.GetTypeInfo().IsAbstract || type.GetTypeInfo().IsInterface) return false;

            var constructors = type.GetConstructors();
            return constructors.Any(x => x.GetParameters().Length == 0);
        }

        public static object GetValue(this MemberInfo member, object target)
        {
            return (member as PropertyInfo)?.GetValue(target) ?? (member as FieldInfo)?.GetValue(target);
        }

        public static void SetValue(this object target, MemberInfo member, object value)
        {
            (member as PropertyInfo)?.SetValue(target, value);
            (member as FieldInfo)?.SetValue(target, value);
        }
    }
}