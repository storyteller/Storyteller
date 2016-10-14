# Flow vs Table

-> id = cc3b1eb6-7095-4a40-adec-0c96f13216f6
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2015-10-26T00:00:00.0000000
-> expiration-period = 0
-> tags = 

[Calculator]

This is an example of doing flow-based testing

|> StartWith value=5
|> Add value=6
|> TheValueShouldBe value=11

This is table-based testing

|> AddingNumbersTogetherAsTable
    [table]
    |> AddingNumbersTogetherAsTable-row x=5, y=6, sum=11
    |> AddingNumbersTogetherAsTable-row x=10, y=2, sum=12
    |> AddingNumbersTogetherAsTable-row x=13, y=3, sum=16

~~~
