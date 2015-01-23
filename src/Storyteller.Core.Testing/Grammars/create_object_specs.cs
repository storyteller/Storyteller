using NUnit.Framework;
using Storyteller.Core.Testing.Samples.Fixtures;

namespace Storyteller.Core.Testing.Grammars
{
    [TestFixture]
    public class create_object_specs
    {
        [Test]
        public void can_create_SetsFixture_without_it_blowing_up()
        {
            new SetsFixture();
        }
    }
}