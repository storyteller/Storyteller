using Xunit;
using Shouldly;
using ST.Docs.Topics;
using ST.Docs.Transformation;

namespace StoryTeller.Testing.ST.Docs.Transformation
{
    
    public class TransformerTester
    {
         private readonly Transformer theTransformer = new Transformer(new ITransformHandler[]
         {
             new CapitalizeTransformHandler(), 
             new LowercaseTransformer(), 
         });

        [Fact]
        public void passthrough_if_no_tokens()
        {
            theTransformer.Transform(null, "Hello.")
                .ShouldBe("Hello.");
        }

        [Fact]
        public void tokenize_in_the_middle()
        {
            var token = Token.Find("***<[capitalize:bar]>***", 0);

            token.Key.ShouldBe("capitalize");
            token.Data.ShouldBe("bar");
        }

        [Fact]
        public void tokenize_at_the_beginning()
        {
            var token = Token.Find("<[capitalize:bar]>***", 0);

            token.Key.ShouldBe("capitalize");
            token.Data.ShouldBe("bar");
        }

        [Fact]
        public void tokenize_at_the_end()
        {
            var token = Token.Find("***<[capitalize:bar]>", 0);

            token.Key.ShouldBe("capitalize");
            token.Data.ShouldBe("bar");
        }

        [Fact]
        public void tokenize_starting_in_the_middle()
        {
                                  //012345678
            var token = Token.Find("*<[foo]>**<[capitalize:bar]>", 8);

            token.Key.ShouldBe("capitalize");
            token.Data.ShouldBe("bar");
        }



        [Fact]
        public void apply_a_transform_at_the_beginning()
        {
            theTransformer.Transform(null, "<[lower:Foo]>***")
                .ShouldBe("foo***");
        }

        [Fact]
        public void apply_a_transform_at_the_end()
        {
            theTransformer.Transform(null, "***<[capitalize:bar]>")
                .ShouldBe("***BAR");
        }

        [Fact]
        public void apply_a_transform_in_the_middle()
        {
            theTransformer.Transform(null, "*<[lower:KNICKS]>*")
                .ShouldBe("*knicks*");
        }

        [Fact]
        public void apply_multiple_transforms()
        {
            theTransformer.Transform(null, "**<[lower:Foo]>**<[capitalize:bar]>**<[lower:KNICKS]>**")
                .ShouldBe("**foo**BAR**knicks**");
        }

        [Fact]
        public void apply_adjacent_transforms()
        {
            theTransformer.Transform(null, "**<[lower:Foo]><[capitalize:bar]><[lower:KNICKS]>**")
                .ShouldBe("**fooBARknicks**");
        }
    }

    public class CapitalizeTransformHandler : ITransformHandler
    {
        public string Key
        {
            get { return "capitalize"; }
        }

        public string Transform(Topic current, string data)
        {
            return data.ToUpper();
        }
    }

    public class LowercaseTransformer : ITransformHandler
    {
        public string Key
        {
            get { return "lower"; }
        }

        public string Transform(Topic current, string data)
        {
            return data.ToLower();
        }
    }
}