using System.Collections.Generic;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Util;

namespace StoryTeller.Testing.Util
{
    [TestFixture]
    public class TemplateParserTester
    {
        [Test]
        public void should_replace_a_single_variable()
        {
            var template = "this is a {test} template";
            var substitutions = new Dictionary<string, string>
            {
                {"test", "replaced"},
            };

            TemplateParser
                .Parse(template, substitutions)
                .ShouldBe("this is a replaced template");
        }

        [Test]
        public void should_return_replacement_string_with_missing_key_not_replaced()
        {
            var template = "http://testreplacement.com/{notfound}/blah-blah";
            var substitiutions = new Dictionary<string, string>();

            TemplateParser
                .Parse(template, substitiutions)
                .ShouldBe("http://testreplacement.com/{notfound}/blah-blah");
        }

        [Test]
        public void should_replace_variables_that_are_found_and_retain_missing_keys()
        {
            var template = "http://testreplacement.com/{replaced}/{missing-key}/{goodkey}";
            var substitiutions = new Dictionary<string, string>
            {
                {"replaced", "gotreplaced"},
                {"goodkey", "alsoreplaced"}
            };

            TemplateParser
                .Parse(template, substitiutions)
                .ShouldBe("http://testreplacement.com/gotreplaced/{missing-key}/alsoreplaced");
        }

        [Test]
        public void should_replace_a_single_variable_with_a_dash()
        {
            var template = "this is a {test-name} template";
            var substitutions = new Dictionary<string, string>
            {
                {"test-name", "replaced"},
            };

            TemplateParser
                .Parse(template, substitutions)
                .ShouldBe("this is a replaced template");
        }


        [Test]
        public void template_is_one_from_the_end()
        {
            var template = "*{db}*";
            var substitutions = new Dictionary<string, string>
            {
                {"db", "blue"},
            };

            TemplateParser.Parse(template, substitutions).ShouldBe("*blue*");
        }

        [Test]
        public void template_is_at_the_end()
        {
            var template = "**{db}";
            var substitutions = new Dictionary<string, string>
            {
                {"db", "blue"},
            };

            TemplateParser.Parse(template, substitutions).ShouldBe("**blue");
        }

        [Test]
        public void should_replace_multiple_variables()
        {
            var template = "this {is} a {test} template with {a} few {variables}";
            var substitutions = new Dictionary<string, string>
            {
                {"is", "is"},
                {"test", "replaced"},
                {"a", "more than a"},
                {"variables", "witty tricks."}
            };

            TemplateParser
                .Parse(template, substitutions)
                .ShouldBe("this is a replaced template with more than a few witty tricks.");
        }

        [Test]
        public void should_replace_values_when_template_begins_with_a_variable()
        {
            var template = "{that} is a {test} template";
            var substitutions = new Dictionary<string, string>
            {
                {"that", "this"},
                {"test", "replaced"},
            };

            TemplateParser
                .Parse(template, substitutions)
                .ShouldBe("this is a replaced template");
        }

        [Test]
        public void get_substitutions()
        {
            TemplateParser.GetSubstitutions("{that} is a {test} template").ShouldHaveTheSameElementsAs("that", "test");
        }

        [Test]
        public void should_handle_templates_found_in_replacement_values() //TEMPLATE-CEPTION!
        {
            var template = "{who} have to go {where}";
            var substitutions = new Dictionary<string, string>
            {
                {"who", "we"},
                {"where", "deep{moar-template}"},
                {"moar-template", "er!"}
            };

            TemplateParser
                .Parse(template, substitutions)
                .ShouldBe("we have to go deeper!");
        }
    }
}