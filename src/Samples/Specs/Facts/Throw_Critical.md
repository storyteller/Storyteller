# Throw Critical

-> id = bf005f5c-c01d-4809-b742-e079975b5531
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-09-27T00:00:00.0000000
-> expiration-period = 0
-> tags = 

[CriticalThrowing]
|> ThrowNormal

Should stop after this one

|> SetupBlows
    [SetupBlowup]
    |> Go

|> ThrowCritical
|> ThrowNormal
~~~
