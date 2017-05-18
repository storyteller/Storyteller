using System;
using System.Threading.Tasks;

namespace StoryTeller
{

    // SAMPLE: IExtension
    public interface IExtension : IDisposable
    {
        /// <summary>
        /// Called immediately after ISystem.Warmup() to do any necessary actions
        /// to set up the 
        /// </summary>
        /// <returns></returns>
        Task Start();

        /// <summary>
        /// Called before each specification run to add services or state to the ISpecContext
        /// </summary>
        /// <param name="context"></param>
        void BeforeEach(ISpecContext context);

        /// <summary>
        /// Called immediately after each specification run for clean up and logging actions
        /// </summary>
        /// <param name="context"></param>
        void AfterEach(ISpecContext context);
    }
    // ENDSAMPLE
}