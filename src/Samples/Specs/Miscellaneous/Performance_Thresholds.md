# Performance Thresholds

-> id = f65893e7-c193-4b19-85ff-746cffdc9519
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-02-07T20:49:23.3676489Z
-> tags = 

[Monitored]
|> Wait waitTime=50
|> Sentence
|> Fact
|> Wait waitTime=200
|> Sentence
|> Fact
|> Wait waitTime=50
|> SetVerification
    [Rows]
    |> SetVerification-row expected=Bill
    |> SetVerification-row expected=Jake
    |> SetVerification-row expected=Jill

|> Wait waitTime=200
|> SetVerification
    [Rows]
    |> SetVerification-row expected=Bill
    |> SetVerification-row expected=Jake
    |> SetVerification-row expected=Jill

~~~
