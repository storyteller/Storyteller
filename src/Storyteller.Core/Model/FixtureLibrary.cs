using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using FubuCore;
using FubuCore.Reflection;
using FubuCore.Util;

namespace Storyteller.Core.Model
{
    public class FixtureLibrary
    {
        public static readonly Cache<Type, Fixture> FixtureCache =
            new Cache<Type, Fixture>(type => (Fixture) Activator.CreateInstance(type));

        public readonly Cache<string, IFixture> Fixtures = new Cache<string, IFixture>(key => new MissingFixture(key));
        public readonly Cache<string, FixtureModel> Models = new Cache<string, FixtureModel>();

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


        public static Task<FixtureLibrary> CreateForAppDomain(CellHandling cellHandling)
        {
            IEnumerable<Task<CompiledFixture>> fixtures = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(FixtureTypesFor)
                .Select(
                    type => { return Task.Factory.StartNew(() => CreateCompiledFixture(cellHandling, type)); });

            return Task.WhenAll(fixtures).ContinueWith(results =>
            {
                var library = new FixtureLibrary();

                results.Result.Each(x =>
                {
                    library.Fixtures[x.Fixture.Key] = x.Fixture;
                    library.Models[x.Fixture.Key] = x.Model;
                });

                return library;
            });
        }

        public static CompiledFixture CreateCompiledFixture(CellHandling cellHandling, Type type)
        {
            try
            {
                var fixture = Activator.CreateInstance(type) as Fixture;
                FixtureCache[type] = fixture;
                return new CompiledFixture
                {
                    Fixture = fixture,
                    Model = fixture.Compile(cellHandling)
                };
            }
            catch (Exception e)
            {
                var fixture = new InvalidFixture(type, e);
                FixtureModel model = fixture.Compile(cellHandling);

                return new CompiledFixture
                {
                    Fixture = fixture,
                    Model = model
                };
            }
        }

        public struct CompiledFixture
        {
            public IFixture Fixture;
            public FixtureModel Model;
        }
    }
}