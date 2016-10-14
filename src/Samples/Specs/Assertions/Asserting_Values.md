# Asserting Values

-> id = 8d935398-dc6c-4f88-92ef-b9bf128e3426
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.4440448-05:00
-> expiration-period = 0
-> tags = 

[Calculator]

Assert a single value in a sentence as the return value

|> AddingNumbersTogether x=3, y=3, returnValue=6

Use output parameters to make multiple assertions in one sentencew

|> SumAndProduct X=5, Y=6, Sum=11, Product=30

You can also turn an assertion into a decision table -- and yes, I wrote the specification to fail on purpose;)

|> Operations
    [table]
    |> Operations-row X=3, Y=3, Sum=6, Product=9
    |> Operations-row X=4, Y=4, Sum=6, Product=8

~~~
