# Set that uses a non primitive type

-> id = 7712e7c8-7037-41b4-93ee-bd800826203d
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2015-09-15T00:00:00.0000000
-> expiration-period = 0
-> tags = 


Regression test for GH-434


[SetWithEnum]
|> TheColorsAre
    [table]
    |> TheColorsAre-row Color=Blue
    |> TheColorsAre-row Color=Red
    |> TheColorsAre-row Color=Orange
    |> TheColorsAre-row Color=Green


"Green" is going to be an extra here. Before 434 is fixed, it tries to deserialize the custom enum type in the website AppDomain where that Type would be unknown

|> TheColorsShouldBe
    [rows]
    |> TheColorsShouldBe-row Color=Blue
    |> TheColorsShouldBe-row Color=Red
    |> TheColorsShouldBe-row Color=Orange

~~~
