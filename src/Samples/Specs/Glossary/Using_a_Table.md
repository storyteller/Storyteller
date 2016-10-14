# Using a Table

-> id = 4ec61d93-9e54-4c70-95ae-91c0ec001602
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.8456864-05:00
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

~~~
