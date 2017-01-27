using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;
#if !NET46
using Microsoft.Extensions.DependencyModel;

#endif

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

        public FixtureLibrary ApplyOverrides(FixtureLibrary overrides)
        {
            var newLibrary = new FixtureLibrary();

            Models.Each(model =>
            {
                FixtureModel over;
                overrides.Models.TryRetrieve(model.key, out over);
                newLibrary.Models[model.key] = (FixtureModel) model.ApplyOverrides(over);
            });

            var keys = newLibrary.Models.Select(x => x.key).ToList();
            var missing = overrides.Models.Where(x => !keys.Contains(x.key));
            missing.Each(model =>
            {
                model.IsMissing = true;

                model.grammars.Each(x => x.IsMissing = true);

                newLibrary.Models[model.key] = model;
            });

            newLibrary.Models
                .SelectMany(x => x.grammars)
                .OfType<EmbeddedSection>()
                .Where(x => x.IsMissing)
                .Each(x => x.ApplyFixtureOverrides(this, overrides));

            return newLibrary;
        }

        /// <summary>
        /// For testing setup only
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public FixtureLibrary With<T>() where T : Fixture, new()
        {
            var fixture = new T();
            Fixtures[fixture.Key] = fixture;


            return this;
        }

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

        public static FixtureLibrary From(FixtureModel[] fixtures)
        {
            var library = new FixtureLibrary();

            foreach (var fixture in fixtures)
            {
                library.Models[fixture.key] = fixture;
            }

            foreach (var fixture in fixtures)
            {
                fixture.ResolveDependencies(library);
            }

            return library;
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

        public class StorytellerDependencyFinder
        {
            private static readonly string assemblyName = typeof(FixtureLibrary).GetTypeInfo().Assembly.GetName().Name;

            private readonly LightweightCache<string, bool> _isDependent;

            public StorytellerDependencyFinder()
            {
                _isDependent = new LightweightCache<string, bool>(name =>
                {
                    var library =
                        DependencyContext.Default.RuntimeLibraries.FirstOrDefault(x => x.Name.EqualsIgnoreCase(name));

                    if (library == null) return false;

                    if (library.Dependencies.Any(x => x.Name.EqualsIgnoreCase(assemblyName))) return true;

                    return library.Dependencies.Any(x => _isDependent[x.Name]);
                });
            }

            public IEnumerable<Assembly> FindDependentAssemblies()
            {
                return
                    DependencyContext.Default.RuntimeLibraries.Where(x => _isDependent[x.Name])
                        .Select(x => Assembly.Load(new AssemblyName(x.Name)));
            }
        }

        public static IEnumerable<Assembly> GetReferencingAssemblies()
        {
            var finder = new StorytellerDependencyFinder();
            return finder.FindDependentAssemblies().ToArray();
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

        public void AddWithDefaultCellHandling<T>() where T : Fixture, new()
        {
            var fixture = new T();
            var model = fixture.Compile(CellHandling.Basic());

            Fixtures[fixture.Key] = fixture;
            Models[fixture.Key] = model;
        }
    }
}
