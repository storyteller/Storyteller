# Tables with Errors

-> id = table4
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.7523766-05:00
-> expiration-period = 0
-> tags = 

[Table]
|> BeforeThrowsError
    [Rows#before]
    |> BeforeThrowsError-row x=11

|> AfterThrowsError
    [Rows#after]
    |> AfterThrowsError-row x=22

~~~
