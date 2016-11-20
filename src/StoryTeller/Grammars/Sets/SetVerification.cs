using System;
using System.Linq;
using Baseline;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public class SetVerification : Table
    {
        public bool ordered;

        public SetVerification()
            : base("set-verification")
        {
        }

        public override string ToMissingCode(bool withinParagraph = false)
        {
            var properties = cells.Select(x => $"            public string {x.Key}{{get; set;}}").Join(Environment.NewLine).TrimStart();

            var matching = cells.Select(x => $"x => x.{x.Key}").Join(", ");

            var orderedCode = ordered ? ".Ordered()" : string.Empty;

            var getDataMethod = $"get{key}Rows";

            var hidden = withinParagraph ? HiddenAttributeDeclaration : string.Empty;

            return $@"
        // Implementation of a SetVerification grammar for '{key}'
        public class {key}Row
        {{
            {properties}
        }}

        private IEnumerable<{key}Row> {getDataMethod}({typeof(ISpecContext).FullName} context)
        {{
            throw new {typeof(NotImplementedException).FullName}();
        }}

        {hidden}
        public {typeof(IGrammar).FullName} {key}()
        {{
            return {nameof(Fixture.VerifySetOf)}({getDataMethod})
                .Titled(""{title}""){orderedCode}
                .MatchOn({matching});
        }}
";
        }
    }
}