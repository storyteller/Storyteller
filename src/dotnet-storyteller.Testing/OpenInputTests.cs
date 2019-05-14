using Shouldly;
using ST.Client;
using Xunit;

namespace dotnet_storyteller.Testing
{
    public class OpenInputTests
    {
        [Fact]
        public void can_determine_framework_from_project_file_chooses_only()
        {
            var input = new OpenInput
            {
                PathFlag = TestingContext.FindParallelDirectory("DatabaseSamples")

            };
            
            input.DetermineFramework().ShouldBe("netcoreapp2.1");
        }
        
        [Fact]
        public void can_determine_framework_from_project_file_choose_first()
        {
            var input = new OpenInput
            {
                PathFlag = TestingContext.FindParallelDirectory("Samples")

            };
            
            input.DetermineFramework().ShouldBe("net46");
        }

        [Fact]
        public void override_framework_with_flag()
        {
            var input = new OpenInput
            {
                FrameworkFlag = "netcoreapp1.1",
                PathFlag = TestingContext.FindParallelDirectory("Samples")

            };
            
            input.DetermineFramework().ShouldBe("netcoreapp1.1");
        }
    }
}
