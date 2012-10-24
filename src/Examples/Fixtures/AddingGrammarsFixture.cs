using System;
using StoryTeller.Engine;

namespace Examples.Fixtures
{
    // SAMPLE:  MethodsAsGrammars
    public class AddingGrammarsFixture : Fixture
    {
        [FormatAs("Open the Screen")]
        public void OpenTheScreen()
        {
            // Manipulate the system under test
        }       
 
        [FormatAs("There should be {records} records displayed")]
        public int TheRowsDisplayed()
        {
            // Go scrape the open web page and find
            // how many records are open
            return 0;            
        }
    }
    // END:  MethodsAsGrammars
}