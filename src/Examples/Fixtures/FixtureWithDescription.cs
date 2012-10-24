using System;
using StoryTeller.Engine;

namespace Examples.Fixtures
{
    // SAMPLE:  FixtureWithDescription
    public class FixtureWithDescription : Fixture
    {
        public override string Description
        {
            get { return "a descriptive label for this Fixture"; }
        }
    }
    // END:  FixtureWithDescription
}