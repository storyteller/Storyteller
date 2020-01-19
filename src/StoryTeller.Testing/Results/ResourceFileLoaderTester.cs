using System.IO;
using Shouldly;
using StoryTeller.Results;
using Xunit;

namespace StoryTeller.Testing.Results
{
    public class ResourceFileLoaderTester
    {
        [Fact]
        public void non_existing_file_return_emptry_string()
        {
            var loader = new StoryTellerResourceLoader("none.existing.file");
            loader.Read().ShouldBeNullOrEmpty();
        }
        
        [Fact]
        public void existing_file_return_the_file_text()
        {
            var file = Path.GetTempFileName();
            File.WriteAllText(file, "test");
            
            var loader = new StoryTellerResourceLoader("StoryTeller.batch-bundle.js");
            loader.Read().ShouldNotBeNullOrEmpty();
        }   
    }
}
