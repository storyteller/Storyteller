using Xunit;
using Shouldly;
using StoryTeller.Conversion;

namespace StoryTeller.Testing.Conversion
{
    
    public class StringConstrucutorConversionProviderTester
    {
        private readonly StringConverterProvider provider = new StringConverterProvider();

        [Fact]
        public void provide_instance_with_string_constructor() {
            var @object = provider.ConverterFor(typeof(TestKlass)).ShouldNotBeNull();

            var result = @object ("Sample");

            result.ShouldNotBeNull ().ShouldBeOfType<TestKlass> ()
                .S.ShouldBe ("Sample");
        }

        [Fact]
        public void return_null_for_invalid_class() {
            var @object = provider.ConverterFor(typeof(TestKlass2));
            @object.ShouldBeNull ();
        }


        public class TestKlass {
            public string S;

            public TestKlass(string s) {
                this.S = s;
            }
        }

        public class TestKlass2 {
        }
    }
}

