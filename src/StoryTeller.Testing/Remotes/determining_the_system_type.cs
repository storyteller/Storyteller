using Baseline;
using Xunit;
using ST.Client;
using StoryTeller.Remotes;

namespace StoryTeller.Testing.Remotes
{
#if NET46
    public class determining_the_system_type
    {
        [Fact]
        public void when_there_is_only_one_type()
        {
            // GrammarSystem is the only type in the Samples project

            var path = TestingContext.FindParallelDirectory("Storyteller.Samples");

            var project = Project.LoadForFolder(path);
      
            var controller = new RemoteController(project, new AppDomainSystemLauncher(project));

        }
    }

#endif
}