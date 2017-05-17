using System;
using System.Threading.Tasks;

namespace StoryTeller.Grammars.API
{
    /// <summary>
    /// Base class for testing a "one model in, one model out" API using
    /// the default ModelFixture as the input
    /// </summary>
    /// <typeparam name="TInput"></typeparam>
    /// <typeparam name="TOutput"></typeparam>
    // SAMPLE: ApiFixtureSimple
    public abstract class ApiFixture<TInput, TOutput> : ApiFixture<TInput, TOutput, ModelFixture<TInput>>
        where TInput : class
        where TOutput : class
    {
        
    }
    // ENDSAMPLE

    /// <summary>
    /// Base class for testing a "one model in, one model out" API using
    /// a designated ModelFixture for the input model
    /// </summary>
    /// <typeparam name="TInput">The type of object that is an input to the API</typeparam>
    /// <typeparam name="TOutput">The type of object that is returned from the API</typeparam>
    /// <typeparam name="TModelFixture">The type of the ModelFixture to be used to build the input model</typeparam>
    // SAMPLE: ApiFixtureComplex
    public abstract class ApiFixture<TInput, TOutput, TModelFixture> : CheckModelFixture<TOutput>
        where TModelFixture : ModelFixture<TInput>, new()
        where TInput : class
        where TOutput : class
    // ENDSAMPLE
    {
        /// <summary>
        /// Customize the title of the input builder embedded grammar
        /// </summary>
        public string InputTitle { get; set; } = "If the input is";

        public IGrammar InputIs()
        {
            return Build<TInput>(InputTitle)
                .With<TModelFixture>()
                .Forward(async input =>
                {
                    Model = await execute(input).ConfigureAwait(false);
                });
        }

        /// <summary>
        /// Exercise the API given the input
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        protected abstract Task<TOutput> execute(TInput input);
    }
}
