# Read and Write

-> id = 5b3771c5-07f6-4dcf-a2b3-0e62bc113dac
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-03-06T17:54:34.6036080Z
-> tags = 

[Hilo]

In the initial state, there should be no data

|> NoRows
|> GetNextHi entity=foo, result=0
|> GetNextHi entity=bar, result=0
|> GetNextHi entity=foo, result=1
|> CheckTheRows
    [rows]
    |> CheckTheRows-row entity_name=foo, hi_value=1
    |> CheckTheRows-row entity_name=bar, hi_value=0

~~~
