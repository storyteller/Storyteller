using System;
using System.Collections.Generic;
using System.Net.Mime;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    // TODO -- TEST THIS!
    public class SectionExecutionPlan : IExecutionPlan
    {
        private readonly IFixture _fixture;
        private readonly Section _section;
        private readonly IEnumerable<IExecutionPlan> _inner;

        public SectionExecutionPlan(IFixture fixture, Section section, IEnumerable<IExecutionPlan> inner)
        {
            _fixture = fixture;
            _section = section;
            _inner = inner;
        }

        public void Execute(ISpecContext context)
        {
            if (context.IsCancelled) return;

            context.Push(_section);

            try
            {
                if (!context.IsCancelled)
                {
                    _fixture.Context = context;
                    _fixture.SetUp();

                    continueIntoBody(context);
                }

                
            }
            catch (Exception ex)
            {
                context.LogException(ex, Stage.setup);
            }
            finally
            {
                context.Pop();
            }
        }

        private void continueIntoBody(ISpecContext context)
        {
            if (context.IsCancelled) return;

            foreach (var plan in _inner)
            {
                if (context.IsCancelled) break;

                plan.Execute(context);
            }

            if (!context.IsCancelled)
            {
                runTeardown(context);
            }

            
        }

        private void runTeardown(ISpecContext context)
        {
            try
            {
                _fixture.TearDown();
            }
            catch (Exception ex)
            {
                context.LogException(ex, Stage.teardown);
                throw;
            }
        }
    }
}