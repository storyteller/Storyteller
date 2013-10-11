using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using FubuCore;
using StoryTeller.Engine;
using StoryTeller.Workspace;

namespace StoryTeller.Execution
{
    [Serializable]
    public class FixtureAssembly
    {
        private readonly string _systemTypeName;
        private bool _hasFound = false;

        // For serialization
        public FixtureAssembly()
        {
        }

        public FixtureAssembly(IProject project)
        {
            _systemTypeName = project.SystemTypeName;
            RootFolder = project.GetTestFolder();
            AssemblyName = Path.GetFileNameWithoutExtension(project.ProjectFolder);
            Profile = project.Profile;
        }


        public string AssemblyName { get; set; }
        public string RootFolder { get; set; }
        public string Profile { get; set; }

        public virtual IEnumerable<Type> FindSystemTypes()
        {
            return
                FindApplicationAssemblies()
                    .Where(x => x.GetName().Name != Assembly.GetExecutingAssembly().GetName().Name)
                    .SelectMany(
                        x =>
                            x.GetExportedTypes()
                                .Where(type => type.CanBeCastTo<ISystem>() && type.IsConcreteWithDefaultCtor() && !type.IsOpenGeneric()))
                    .ToArray();
        }

        public Type DetermineSystemType()
        {
            if (_systemTypeName.IsNotEmpty())
            {
                return Type.GetType(_systemTypeName);
            }

            IEnumerable<Type> candidates = FindSystemTypes();
            if (candidates.Count() == 1) return candidates.Single();

            Type[] specificAssemblyTypes = candidates.Where(x => x.Assembly.GetName().Name == AssemblyName).ToArray();
            if (specificAssemblyTypes.Count() == 1) return specificAssemblyTypes.Single();

            // TODO -- might just wanna have this blow up later

            return null;
        }

        public ISystem FindSystem()
        {
            Type systemType = DetermineSystemType() ?? typeof (NulloSystem);
            return Activator.CreateInstance(systemType).As<ISystem>();
        }

        // TODO -- I like this pattern better than other things we've used
        public static IEnumerable<Assembly> FindApplicationAssemblies()
        {
            var list = new List<string> {AppDomain.CurrentDomain.SetupInformation.ApplicationBase};

            string binPath = AppDomain.CurrentDomain.SetupInformation.PrivateBinPath;
            if (binPath.IsNotEmpty())
            {
                list.Add(binPath);
            }

            return list.SelectMany(AssembliesFromPath);
        }

        // TODO -- this is so common here and in FubuMVC, just get something into FubuCore
        public static IEnumerable<Assembly> AssembliesFromPath(string path)
        {
            IEnumerable<string> assemblyPaths = Directory.GetFiles(path)
                .Where(file =>
                    Path.GetExtension(file).Equals(
                        ".dll",
                        StringComparison.OrdinalIgnoreCase));

            foreach (string assemblyPath in assemblyPaths)
            {
                Assembly assembly = null;
                try
                {
                    assembly = Assembly.LoadFrom(assemblyPath);
                }
                catch
                {
                }

                if (assembly != null) yield return assembly;
            }
        }
    }
}