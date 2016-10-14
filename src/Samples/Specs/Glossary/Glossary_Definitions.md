# Glossary Definitions

-> id = 237a5825-9695-423c-b061-6fe01b82d0bf
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.7665600-05:00
-> expiration-period = 0
-> tags = 


The panel box below is a "Section" within the specification that uses a "Fixture" titled "Glossary"


[Glossary]

The single line below is a Sentence "Grammar"

|> Logout

You can also group a number of grammars together in a pre-canned macro called a "Paragraph" grammar like this one below:

|> Login user=sa, password=tiger

A "Table" Grammar

|> TheUsersAre
    [table]
    |> TheUsersAre-row UserName=Beast, Location=USA
    ``` Roles
    Admin, User
    ```

    |> TheUsersAre-row UserName=Wolverine, Location=Canada, Roles=User
    |> TheUsersAre-row UserName=Captain Britain, Location=UK, Roles=Admin


A "Set Verification" is a special kind of Table used to exactly verify a set of expectations

|> TheAdminsShouldBe
    [rows]
    |> TheAdminsShouldBe-row UserName=Beast, Location=USA
    |> TheAdminsShouldBe-row UserName=Captain Britain, Location=UK


An "Embedded Section" allows you to embed a Section for another Fixture inside the parent Section like so

|> Preferences
    [Preferences]

    "Preferences" is an entirely different Fixture that contains all the grammars you would use to alter the current user's preferences

    |> EnableGPS enabled=true
    |> EnableNotifications enabled=true

~~~
