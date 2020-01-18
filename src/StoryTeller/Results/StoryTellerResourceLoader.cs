namespace StoryTeller.Results
{
    /// <summary>
    /// A shorthand <see cref="ResourceFileLoader{TAssemblySource}"/> class to facilitate
    /// loading files from the StoryTeller assembly.
    /// </summary>
    public class StoryTellerResourceLoader : ResourceFileLoader<StorytellerRunner>
    {
        /// <summary>
        /// Creates an instance of <see cref="StoryTellerResourceLoader"/>.
        /// </summary>
        /// <param name="name">The name of the resource to load.</param>
        public StoryTellerResourceLoader(string name) : base(name)
        {
        }
    }
}
