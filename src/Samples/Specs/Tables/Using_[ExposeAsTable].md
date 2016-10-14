# Using [ExposeAsTable]

-> id = ffabe405-f276-4421-97e0-0cfbc7a3d3a2
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:37.0189632-05:00
-> expiration-period = 0
-> tags = 

[Tables]
|> Sum
    [sum]
    |> Sum-row x=1, y=1, sum=2
    |> Sum-row x=3, y=4, sum=7
    |> Sum-row x=4, y=9, sum=13

~~~
