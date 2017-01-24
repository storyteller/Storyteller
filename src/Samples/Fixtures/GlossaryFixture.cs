using System;
using System.Diagnostics;
using StoryTeller;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Grammars.Tables;

namespace Samples.Fixtures
{
    public class GlossaryFixture : Fixture
    {
        public GlossaryFixture()
        {
            Title = "The Application Portal Page";
        }

        [FormatAs("Click the logout link in the menu bar")]
        public void Logout()
        {

        }

        [FormatAs("The user has been successfully logged out")]
        public bool TheUserHasBeenLoggedOut()
        {
            return false;
        }

        [ExposeAsTable("The users in the system are")]
        public void TheUsersAre(string UserName, string Location, string[] Roles)
        {
            // set up new user accounts in your system
        }

        public IGrammar TheAdminsShouldBe()
        {
            return VerifySetOf(() => new User[0]).Titled("The administrators should be").MatchOn(x => x.UserName, x => x.Location);
        }

        public class User
        {
            public string UserName { get; set; }
            public string Location { get; set; }
        }

        // SAMPLE: login-paragraph
        [Hidden, FormatAs("Enter the user name {user}")]
        public void EnterUserName(string user)
        {
            
        }

        [Hidden, FormatAs("Enter the password {password}")]
        public void EnterPassword(string password)
        {
            
        }

        [Hidden, FormatAs("Click the login button")]
        public void ClickLoginButton()
        {
            
        }

        public IGrammar Login()
        {
            return Paragraph("Enter login credentials", _ =>
            {
                _ += this["EnterUserName"];
                _ += this["EnterPassword"];
                _ += this["ClickLoginButton"];
            });
        }
        // ENDSAMPLE

        // SAMPLE: implicit-login-with-silent-action
        public IGrammar Login2()
        {
            return Paragraph("Enter login credentials", _ =>
            {
                _ += this["EnterUserName"];
                _ += this["EnterPassword"];

                // Lastly, a silent action
                _ += c =>
                {
                    // supply a Lambda that would click
                    // the login button
                };
            });
        }
        // ENDSAMPLE

        // SAMPLE: exposing-embedded-section
        public IGrammar Preferences()
        {
            return Embed<PreferencesFixture>("Set the current user's preferences")
                .Before(c =>
                {
                    // Do something to open the preferences dialog
                })
                .After(c =>
                {
                    // Do something to close the preferences dialog
                });
        }
        // ENDSAMPLE
    }

    // SAMPLE: preferences-fixture
    public class PreferencesFixture : Fixture
    {
        [FormatAs("Enable notifications? {enabled}")]
        public void EnableNotifications(bool enabled)
        {
            
        }

        [FormatAs("Enable GPS Tracking? {enabled}")]
        public void EnableGPS(bool enabled)
        {
            
        }
    }
    // ENDSAMPLE
}