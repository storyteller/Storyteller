using System;
using System.Collections.Generic;
using System.Linq;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Commands
{
    public enum TracingStyle
    {
        AppVeyor,
        TeamCity,
        None
    }
    
    public class RunInput : StorytellerInput
    {
        public string SpecificationOrSuite { get; set; }
        
        [Description("Optional. Only runs tests with desired lifecyle")]
        public Lifecycle LifecycleFlag { get; set; } = Lifecycle.Any;
    }
    
    [Description("Executes Specifications and Writes Results")]
    public class RunCommand : OaktonCommand<RunInput>
    {
        public RunCommand()
        {
            Usage("Run all specifications").Arguments();
            Usage("Run specified specifications").Arguments(x => x.SpecificationOrSuite);
        }

        public override bool Execute(RunInput input)
        {
            var top = HierarchyLoader.ReadHierarchy(input.SpecPath);
            // TODO -- filter on tags here
            // TODO -- make HierarchyLoader smart enough to recognize spec or suite
            var specs = HierarchyLoader.Filter(top, input.LifecycleFlag, input.SpecificationOrSuite, new string[0]).ToList();





            return true;
        }
    }
}
