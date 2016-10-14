# Sets

-> id = 717ad2d7-a877-40c7-ad2b-9afcc06292e0
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.8216480-05:00
-> expiration-period = 0
-> tags = 


The panel box below is a "Section" within the specification that uses a "Fixture" titled "Glossary"


[Glossary]

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

~~~
