using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;
using Microsoft.Extensions.DependencyModel;

namespace StoryTeller.Model
{
    public class FixtureLibrary
    {
        private static readonly string AssemblyName = typeof(FixtureLibrary).GetTypeInfo().Assembly.GetName().Name;

        public static readonly LightweightCache<Type, Fixture> FixtureCache =
            new LightweightCache<Type, Fixture>(type => (Fixture) Activator.CreateInstance(type));

        public readonly LightweightCache<string, Fixture> Fixtures =
            new LightweightCache<string, Fixture>(key => new MissingFixture(key));

        public readonly LightweightCache<string, FixtureModel> Models = new LightweightCache<string, FixtureModel>();

        public static bool IsFixtureType(Type type)
        {
            if (!type.CanBeCastTo<Fixture>()) return false;
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


        public static FixtureLibrary CreateForAppDomain(CellHandling cellHandling)
        {
#if NET46
            var currentDomain = AppDomain.CurrentDomain;
            var assemPath = currentDomain.BaseDirectory;
            var binPath = currentDomain.SetupInformation.PrivateBinPath;
            if (binPath.IsNotEmpty())
            {
                assemPath = assemPath.AppendPath(binPath);
            }


            var fixtures = AssembliesFromPath(assemPath, referencesStoryteller)
                .SelectMany(FixtureTypesFor)
                .Select(
                    type => CreateCompiledFixture(cellHandling, type));

#else
            var fixtures = GetReferencingAssemblies()
                .SelectMany(FixtureTypesFor)
                .Select(
                    type => CreateCompiledFixture(cellHandling, type));
#endif


            var library = new FixtureLibrary();

            fixtures.Each(x =>
            {
                library.Fixtures[x.Fixture.Key] = x.Fixture;
                library.Models[x.Fixture.Key] = x.Model;
            });

            return library;
        }

#if NET46
        private static bool referencesStoryteller(Assembly x)
        {
            return x.GetReferencedAssemblies().Any(assem => assem.Name == AssemblyName);
        }

        public static IEnumerable<Assembly> AssembliesFromPath(string path, Predicate<Assembly> assemblyFilter)
        {
            var assemblyPaths = Directory.GetFiles(path)
                .Where(file =>
                    Path.GetExtension(file).Equals(
                        ".exe",
                        StringComparison.OrdinalIgnoreCase)
                    ||
                    Path.GetExtension(file).Equals(
                        ".dll",
                        StringComparison.OrdinalIgnoreCase));

            foreach (var assemblyPath in assemblyPaths)
            {
                var assembly =
                    AppDomain.CurrentDomain.GetAssemblies().FirstOrDefault(
                        x => x.GetName().Name == Path.GetFileNameWithoutExtension(assemblyPath));

                if (assembly == null)
                {
                    try
                    {
                        assembly = Assembly.LoadFrom(assemblyPath);
                    }
                    catch
                    {
                    }
                }


                if (assembly != null && assemblyFilter(assembly))
                {
                    yield return assembly;
                }
            }
        }
#else

        public static IEnumerable<Assembly> GetReferencingAssemblies()
        {
            var assemblyName = typeof(FixtureLibrary).GetTypeInfo().Assembly.GetName();

            return DependencyContext.Default.RuntimeLibraries.Where(x => x.Dependencies.Any(_ => _.Name.EqualsIgnoreCase(assemblyName.Name)))
                .Select(x => Assembly.Load(new AssemblyName(x.Name)));
        }

#endif



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
                var model = fixture.Compile(cellHandling);
                model.implementation = type.FullName;

                return new CompiledFixture
                {
                    Fixture = fixture,
                    Model = model
                };
            }
        }

        public struct CompiledFixture
        {
            public Fixture Fixture;
            public FixtureModel Model;
        }
    }
}