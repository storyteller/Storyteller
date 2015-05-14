using System;
using StoryTeller;
using StoryTeller.Grammars.Importing;

namespace Samples.Fixtures
{
    // SAMPLE: currying-a-grammar-for-expressiveness
    public class CurryingFixture : Fixture
    {
        [FormatAs("Invoice {Id} is open {IsOpen} and due on {DueDate}")]
        public void CreateInvoice(string Id, DateTime DueDate, Boolean IsOpen)
        {
            
        }

        public IGrammar OpenInvoice()
        {
            return this["CreateInvoice"].Curry()
                .Template("Invoice {Id} is open")
                .Defaults("DueDate:TODAY+2;IsOpen:true");
        }
    }
    // ENDSAMPLE

    // SAMPLE: import-grammar-example
    public class LogoutFixture : Fixture
    {
        [FormatAs("Log the user out")]
        public void Logout()
        {
            // manipulate the system under test to 
            // log the user out
        }
    }

    public class AnotherFixture : Fixture
    {
        public AnotherFixture()
        {
            this["Logout"] = Import<LogoutFixture>("Logout");
        }
    }
    // ENDSAMPLE
}