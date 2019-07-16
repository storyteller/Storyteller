using System;
using System.Threading.Tasks;
using StoryTeller.Model;

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

}