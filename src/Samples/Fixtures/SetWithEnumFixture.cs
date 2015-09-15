using System.Collections.Generic;
using StoryTeller;
using StoryTeller.Grammars.Tables;

namespace Samples.Fixtures
{
    public class SetWithEnumFixture : Fixture
    {
        public SetWithEnumFixture()
        {
            Title = "Set with Enum Property";
        }

        private readonly IList<ColoredThing> _colors = new List<ColoredThing>();

        public override void SetUp()
        {
            _colors.Clear();
        }

        [ExposeAsTable("The colors are")]
        public void TheColorsAre(ColorEnum Color)
        {
            _colors.Add(new ColoredThing { Color = Color });
        }

        public IGrammar TheColorsShouldBe()
        {
            return VerifySetOf(() => _colors).Titled("The colors should be").MatchOn(x => x.Color);
        }
    }

    public class ColoredThing
    {
        public ColorEnum Color { get; set; }
    }

    public enum ColorEnum
    {
        Red,
        Blue,
        Orange,
        Green,
        Purple
    }
}