# Boolean Results in a Table

-> id = table1
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.7367780-05:00
-> expiration-period = 0
-> tags = 

[Table]
|> IsPositive
    [table]
    |> IsPositive-row number=5, IsEven=true
    |> IsPositive-row number=-5, IsEven=false

~~~
