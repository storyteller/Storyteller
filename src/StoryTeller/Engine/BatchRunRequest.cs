using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Engine
{
    public class BatchRunRequest
    {
        public List<Specification> Specifications { get; }

        public BatchRunRequest(List<Specification> specifications)
        {
            Specifications = specifications;
        }
    }

    public class SuiteNotFoundException : Exception
    {
        public SuiteNotFoundException(string suite, Suite top)
            : base("Unable to find suite '{0}' in {1}".ToFormat(suite, top.Folder)) { }
    }
}
