using System.Collections.Generic;
using StoryTeller.Model;

namespace StoryTeller.NewEngine
{
    public class ExecutionPlan
    {
        public ExecutionPlan(ISystemUnderTest system, Specification specification)
        {
            // TODO -- go plan it all out, build out the Lines list, do the conversion
            Context = new ExecutionContext(system, specification);
            
            // Also does the conversion
        }
        
        
        // specific methods for adding a line grammar, paragraph as table line, section setup,
        // fixture teardown


        public ExecutionContext Context { get; }

        public List<LineExecution> Lines { get; } = new List<LineExecution>();
        public int Attempts { get; set; }
        public Specification Specification { get; set; }
    }
}
