using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using StoryTeller.Model;
using StoryTeller.Remotes;

namespace StoryTeller.Engine
{
    // SAMPLE: ISystem
    public interface ISystem : IDisposable
    {
        /// <summary>
        /// Starts the system or application and
        /// returns a CellHandling object to be used
        /// for all conversions and lists
        /// </summary>
        /// <returns></returns>
        CellHandling Start();

        /// <summary>
        /// Runs as the very first step in specification
        /// execution. The IExecutionContext returned is used
        /// within the scope of the current Specification
        /// </summary>
        /// <returns></returns>
        IExecutionContext CreateContext();

        /// <summary>
        /// Use to bootstrap the system when it first starts
        /// </summary>
        /// <returns></returns>
        Task Warmup();
    }
    // ENDSAMPLE

    public static class SystemExtensions
    {
        public static SystemRecycled Initialize(this ISystem system, Action<FixtureLibrary> onStarted)
        {
            CellHandling cellHandling = null;

            try
            {
                cellHandling = system.Start();
            }
            catch (Exception ex)
            {
                ConsoleWriter.Write(ConsoleColor.Red, ex.ToString());

                var message = new SystemRecycled
                {
                    success = false,
                    fixtures = new FixtureModel[0],
                    system_name = system.ToString(),
                    system_full_name = system.GetType().FullName,
                    name = Path.GetFileName(AppContext.BaseDirectory),
                    error = ex.ToString()
                };

                return message;
            }


            var library = FixtureLibrary.CreateForAppDomain(cellHandling);

            onStarted(library);

            return new SystemRecycled
            {
                success = true,
                fixtures = library.Models.GetAll().ToArray(),
                system_name = system.ToString(),
                name = Path.GetFileName(AppContext.BaseDirectory)
            };
        }
    } 
}