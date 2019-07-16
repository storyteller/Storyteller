using System.Collections.Generic;
using StoryTeller.Model;

namespace Storyteller
{
    public class ExecutionPlan
    {
        public ExecutionPlan(Specification specification, FixtureLibrary fixtures)
        {
            // TODO -- go plan it all out, build out the Lines list
        }
        
        // specific methods for adding a line grammar, paragraph as table line, section setup,
        // fixture teardown
        
        public List<LineExecution> Lines { get; } = new List<LineExecution>();
        public int Attempts { get; set; }
        public Specification Specification { get; set; }
    }
}