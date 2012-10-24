using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using FubuCore;

namespace StoryTeller.Engine
{
    public class AssemblyResult
    {
        public AssemblyResult(Assembly assembly)
        {
            Name = assembly.GetName().Name;

            try
            {
                var types = assembly.GetExportedTypes();

                FixtureTypes = types.Where(IsFixture);
                SystemTypes = types.Where(IsSystem);

                WasAbleToScan = true;
            }
            catch (Exception)
            {
                // Nothing you can really do here.
            }
        }

        public bool WasAbleToScan;

        public string Name;

        public IEnumerable<Type> FixtureTypes = new Type[0];
        public IEnumerable<Type> SystemTypes = new Type[0];

        public static bool IsSystem(Type type)
        {
            if (!type.IsConcreteTypeOf<ISystem>())
            {
                return false;
            }

            try
            {
                return type.IsConcreteWithDefaultCtor();
            }
            catch(Exception)
            {
                return false;
            }
        }

        public static bool IsFixture(Type type)
        {
            if (!type.IsConcreteTypeOf<IFixture>()) return false;

            try
            {
                return type.IsConcreteWithDefaultCtor();
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}