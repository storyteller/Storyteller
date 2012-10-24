// SAMPLE:  MyFirstFixture
using StoryTeller.Engine;

namespace Examples.Fixtures
{
    public class MyFirstFixture : Fixture
    {
                
    }
}
// END:  MyFirstFixture

// SAMPLE:  MyFirstFixture2
public class TitledFixture : Fixture
{
    public TitledFixture()
    {
        Title = "This will show ";
    }
}
// END:  MyFirstFixture2

// SAMPLE:  AliasedFixture
[AliasAs("Aliased")]
public class FixtureWithAlias : Fixture
{
    
}
// END:  AliasedFixture




