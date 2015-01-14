using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using FubuCore;
using FubuCore.Reflection;
using FubuCore.Util;

namespace Storyteller.Core.Model
{
    public class FixtureLibrary
    {
        // TODO -- handle missing fixtures
        public readonly Cache<string, IFixture> Fixtures = new Cache<string, IFixture>();

        public static bool IsFixtureType(Type type)
        {
            if (!type.CanBeCastTo<IFixture>()) return false;
            if (type.HasAttribute<HiddenAttribute>()) return false;
            if (!type.IsConcreteWithDefaultCtor()) return false;
            if (type.IsOpenGeneric()) return false;

            return true;
        }

        public static IEnumerable<Type> FixtureTypesFor(Assembly assembly)
        {
            try
            {
                return assembly.GetExportedTypes().Where(IsFixtureType);
            }
            catch (Exception)
            {

                return new Type[0];
            }
        } 


        // TODO -- do something about Fixture's that blow up
        public static FixtureLibrary CreateForAppDomain()
        {
            var fixtures = AppDomain.CurrentDomain.GetAssemblies().SelectMany(FixtureTypesFor)
                .Select(type => Activator.CreateInstance(type).As<IFixture>());

            var library = new FixtureLibrary();
            fixtures.Each(x => library.Fixtures[x.Key] = x);

            return library;
        }


    }
}