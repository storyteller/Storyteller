# Using an External Parameter

-> id = d9ab98cf-29bc-4e0a-a8c7-2cafb8b4ff8a
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-04-18T15:47:39.7870775Z
-> tags = 

[Hilo]
|> InsertRows
    [table]
    |entity|hiValue|
    |Issue |25     |
    |User  |50     |
    |Team  |100    |

|> PageSize size=45
|> HigherThanPage
    [rows]
    |entity_name|
    |User       |
    |Team       |

|> PageSize size=75
|> HigherThanPage
    [rows]
    |> HigherThanPage-row entity_name=Team

~~~
