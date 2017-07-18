using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public interface IRunExecutionContext
    {
        /// <summary>
        /// Executes right before the provided specifications are run
        /// </summary>
        /// <param name="specifications">All specifications which are about to be executed</param>
        void BeforeRun(Specification[] specifications);

        /// <summary>
        /// Executes right after all speicifications have been executed and provides the results for all of them.
        /// </summary>
        /// <param name="results">Results of the executed specifications</param>
        void AfterRun(BatchRecord[] results);
    }
}
