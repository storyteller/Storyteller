# Table with Optional Columns

-> id = table3
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.7523766-05:00
-> expiration-period = 0
-> tags = 

[Table]
|> TableWithLotsOfOptions
    [table]
    -> b = False
    -> c = False
    |> TableWithLotsOfOptions-row a=1, d=4, e=5
    |> TableWithLotsOfOptions-row a=2, d=4, e=5
    |> TableWithLotsOfOptions-row a=3, d=4, e=5
    |> TableWithLotsOfOptions-row a=4, d=4, e=5

~~~
