using System;
using Storyteller.Core.Grammars.Tables;

namespace Storyteller.Core.Testing.Samples.Fixtures
{
    public class CompositeFixture : MathFixture
    {
        public CompositeFixture()
        {
            /* TODO -- bring back
            this["AddAndMultiply"] = Paragraph("Add and Multiply", x =>
            {
                x += this["StartWith"];
                x += this["Add"];
                x += this["MultiplyBy"];
                x += this["TheValueShouldBe"];
            });
             */

            this["AddAndMultiplyTable"] = this["AddAndMultiply"].AsTable("Add and Multiply in a Table");

            /* TODO -- bring back w/ Paragraph
            this["AddAndMultiplyThrow"] = Paragraph("Add and Multiply", x =>
            {
                x += this["StartWith"];
                x += this["Add"];
                x += this["MultiplyBy"];
                x += Do(() => { throw new NotImplementedException(); });
                x += this["TheValueShouldBe"];
            });
             */
        }
    }
}