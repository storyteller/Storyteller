using System;
using System.Diagnostics;
using StoryTeller.Engine;

namespace Examples.Fixtures
{

    // SAMPLE:  Sample
    public class FakeSample
    {
        // This was me
    }

    // END:  Sample


    public class SimpleActionsFixture : Fixture
    {
        private readonly IBrowserDriver _browser;
        private int _number;

        public SimpleActionsFixture(IBrowserDriver browser)
        {

            _browser = browser;

            // SAMPLE:  InlineActions
            // Create a Sentence grammar inline that performs a simple action
            this["JustDoSomething"] = Do("I want to do something", () => Debug.WriteLine("I did something"));

            // Create a Sentence grammar inline that performs a simple action with a single input value
            // In this case, this sentence merely stores the value in a private field of this Fixture object
            this["CaptureNumber"] = Do<int>("Store the number {number}", number => _number = number);


            // Create a Sentence grammar inline that executes a lambda that has access to the ITestContext
            // in order to retrieve services and/or drivers or store information to the ITestContext
            this["OpenUrl"] = Do<string>("Open the browser to {url}", (url, c) =>
            {
                c.Retrieve<IBrowserDriver>().OpenUrl(url);
            });


            this["OpenUrl2"] = Do<string, IBrowserDriver>("Open the browser to {url}",
                                                          (url, driver) => driver.OpenUrl(url));


            this["SpecialAction"] = Do("Perform a special action", (step, context) =>
            {
                // Perform a special action of some sort with access
                // to both the current IStep and ITestContext
            });
            // END:  InlineActions

            this["ScriptedActions"] = Paragraph("Do a bunch of stuff", x =>
            {
                // Perform an action inside the Paragraph that is not part of the 
                // Html output
                x += Do(() => doSomething());

                x += Do((step, context) =>
                {
                    // perform a silent action inside the Paragraph grammar
                });

                // Adds a grammar inline to this Paragraph 
                x += Do("Open the home page", () => _browser.OpenUrl("http://localhost/application"));
            });
        }

        private void doSomething()
        {
            throw new NotImplementedException();
        }
    }
}