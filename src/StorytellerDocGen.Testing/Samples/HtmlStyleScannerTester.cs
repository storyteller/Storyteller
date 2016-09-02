using Shouldly;
using StorytellerDocGen.Samples;
using Xunit;

namespace StorytellerDocGen.Testing.Samples
{
    


    
    public class HtmlStyleScannerTester
    {
        private readonly string _sparkText = @"
<use namespace='FubuMVC.CodeSnippets' />
<viewdata model='CodeSnippetHarness.HomeModel' />
<html>
	<head>
		<title>Code Sample Examples</title>
    !{this.WriteCssTags('prettify.css')}
  </head>
	<body>
		<h1>Samples!</h1>

		<h4>Javascript</h4>
		!{this.CodeSnippet('nextTick')}
	
	  <!--SAMPLE: UsingCodeSnippetInSpark-->
		<h4>C#</h4>
    !{this.CodeSnippet('AddLine')}
    <!--ENDSAMPLE-->

    !{this.WriteScriptTags()}
    
  </body>
</html>
".Replace("'", "\"");


        [Fact]
        public void is_at_start_positive()
        {
            var scanner = new BlockCommentScanner("<!--", "-->", "spark", "lang-htm");

            scanner.DetermineName("    <!--SAMPLE: UsingCodeSnippetInSpark-->").ShouldBe("UsingCodeSnippetInSpark");
            scanner.DetermineName("<!--SAMPLE: UsingCodeSnippetInSpark-->").ShouldBe("UsingCodeSnippetInSpark");
            scanner.DetermineName("<!--  SAMPLE:UsingCodeSnippetInSpark  -->").ShouldBe("UsingCodeSnippetInSpark");
            scanner.DetermineName("<!--  SAMPLE: UsingCodeSnippetInSpark  -->").ShouldBe("UsingCodeSnippetInSpark");
        }

        [Fact]
        public void is_at_start_miss()
        {
            var scanner = new BlockCommentScanner("<!--", "-->", "spark", "lang-htm");

            scanner.DetermineName("<h1>some html</h1>").ShouldBeNull();
            scanner.DetermineName("SAMPLE: UsingCodeSnippetInSpark").ShouldBeNull();
        }

        [Fact]
        public void is_at_end()
        {
            var scanner = new BlockCommentScanner("<!--", "-->", "spark", "lang-htm");

            scanner.IsAtEnd("<!-- SAMPLE: something").ShouldBeFalse();
            scanner.IsAtEnd("<p>some html</p>").ShouldBeFalse();
            scanner.IsAtEnd("ENDSAMPLE").ShouldBeFalse();
            scanner.IsAtEnd("<!-- ENDSAMPLE -->").ShouldBeTrue();
        }
    }
}