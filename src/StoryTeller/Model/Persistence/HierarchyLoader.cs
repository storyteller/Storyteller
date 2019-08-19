using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence
{
    public class HierarchyLoader
    {
        public static readonly IFileSystem FileSystem = new FileSystem();

        public static string SelectSpecPath(string baseDirectory)
        {
            var specPath = baseDirectory.AppendPath("Specs");
            if (Directory.Exists(specPath)) return specPath;

            var testsPath = baseDirectory.AppendPath("Tests");
            if (Directory.Exists(testsPath))
                return testsPath;

            return specPath;
        }

        public static Suite ReadHierarchy(string folder)
        {
            var suite = ReadSuite(folder);
            suite.name = String.Empty;
            suite.WritePath(String.Empty);

            return suite;
        }

        public static Suite ReadSuite(string folder)
        {
            var suite = new Suite
            {
                name = Path.GetFileName(folder),
                Specifications =
                    FileSystem.FindFiles(folder, FileSet.Shallow("*.md")).Select(MarkdownReader.ReadFromFile).ToArray(),
                Folder = folder
            };

            foreach (var directory in FileSystem.ChildDirectoriesFor(folder))
            {
                suite.AddChildSuite(ReadSuite(directory));
            }

            return suite;
        }
        
        public static List<Specification> Filter(Suite top, Lifecycle lifecycle = Lifecycle.Any, string suiteOrSpec = "", string[] includeTags = default(string[]), string[] excludeTags = default(string[]))
        {
            IEnumerable<Specification> specs;
            if (suiteOrSpec.IsNotEmpty())
            {
                suiteOrSpec = suiteOrSpec.Replace(" / ", "/");
                
                var suite = top.suites.FirstOrDefault(x => x.name == suiteOrSpec) ?? top.suites.FirstOrDefault(x => x.path == suiteOrSpec);
                if (suite != null)
                {
                    specs = suite.GetAllSpecs();
                }
                else
                {
                    var spec = top.GetAllSpecs().FirstOrDefault(x => x.path == suiteOrSpec);
                    if (spec != null)
                    {
                        return new List<Specification> {spec};
                    }
                    else
                    {
                        throw new SuiteOrSpecNotFoundException(suiteOrSpec, top);
                    }


                    
                }
                

                
            }
            else
            {
                specs = top.GetAllSpecs();
            }

            if (lifecycle != Lifecycle.Any)
            {
                specs = specs.Where(x => x.Lifecycle == lifecycle);
            }
            
            if (excludeTags != null && excludeTags.Any())
            {
                specs = specs.Where(spec => excludeTags.All(tag => !spec.Tags.Contains(tag)));
            }
            
            if (includeTags != null && includeTags.Any())
            {
                specs = specs.Where(spec => spec.Tags.Intersect(includeTags).Any());
            }

            return specs.ToList();
        }

        public static string GuessSpecDirectory(ISystem system)
        {
#if NET46
            var path = AppDomain.CurrentDomain.BaseDirectory;
#else
            var path = AppContext.BaseDirectory;
#endif

            var projectName = system.GetType().GetTypeInfo().Assembly.GetName().Name;
           

            var fileName = Path.GetFileName(path);
            while (fileName != projectName && !Directory.Exists(path.AppendPath("Specs")))
            {
                path = path.ParentDirectory();
                fileName = Path.GetFileName(path);
            }

            return HierarchyLoader.SelectSpecPath(path);
        }
    }
}