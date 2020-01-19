using System;
using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;

namespace StoryTeller.Results
{
    /// <summary>
    /// Loads a resource file from an assembly to render it as text content. 
    /// </summary>
    /// <typeparam name="TAssemblySource">A <see cref="Type"/> from the assembly to use as the resource source.</typeparam>
    public class ResourceFileLoader<TAssemblySource> : ResourceFileLoader
        where TAssemblySource : class
    {
        /// <summary>
        /// Creates an instance of <see cref="ResourceFileLoader{TAssemblySource}"/>
        /// </summary>
        /// <param name="name">Name of the resource in the assembly.</param>
        public ResourceFileLoader(string name) : base(name, typeof(TAssemblySource).Assembly)
        {
        }
    }

    /// <summary>
    /// Loads a resource file from an assembly to render it as text content. 
    /// </summary>
    public class ResourceFileLoader : IDocumentPartLoader
    {
        private readonly string name;
        private readonly Assembly assembly;

        /// <summary>
        /// Creates an instance of <see cref="ResourceFileLoader"/>
        /// </summary>
        /// <param name="name">Name of the resource in the assembly.</param>
        /// <param name="assembly">The assembly to look for the file in.</param>
        public ResourceFileLoader(string name, Assembly assembly)
        {
            this.name = name;
            this.assembly = assembly;
        }

        /// <summary>
        /// Renders the content resource file from the assembly as text.
        /// </summary>
        /// <returns>The text of the document part.</returns>
        public string Read()
        {   
            var names = assembly.GetManifestResourceNames();
            var actualName = names.FirstOrDefault(x => x.EqualsIgnoreCase(name));
            if (actualName == null)
            {
                return string.Empty;
            }

            using (var stream = assembly.GetManifestResourceStream(actualName))
            using (var reader = new StreamReader(stream))
            {
                return reader.ReadToEnd();
            }
        }
    }
}
