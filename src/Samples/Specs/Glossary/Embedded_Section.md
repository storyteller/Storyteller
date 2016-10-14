# Embedded Section

-> id = 2f8cbde5-964c-457c-995c-d5397fd3d702
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.7545408-05:00
-> expiration-period = 0
-> tags = 

[Glossary]

An "Embedded Section" allows you to embed a Section for another Fixture inside the parent Section like so

|> Preferences
    [Preferences]

    "Preferences" is an entirely different Fixture that contains all the grammars you would use to alter the current user's preferences

    |> EnableGPS enabled=true
    |> EnableNotifications enabled=true

~~~
