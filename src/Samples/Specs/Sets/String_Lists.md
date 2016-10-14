# String Lists

-> id = a32d31b5-e60a-47a5-890c-a4b669d89eed
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.9358304-05:00
-> expiration-period = 0
-> tags = 

[NameList]
|> TheNamesAre
    [Rows]
    |> TheNamesAre-row name=Luke
    |> TheNamesAre-row name=Han
    |> TheNamesAre-row name=Chewie


The order is incorrect and this declaration should fail

|> TheNamesShouldBe
    [Rows]
    |> TheNamesShouldBe-row Name=Luke
    |> TheNamesShouldBe-row Name=Chewie
    |> TheNamesShouldBe-row Name=Han


Chewie got lost, so this fails too

|> TheNamesShouldBe
    [Rows]
    |> TheNamesShouldBe-row Name=Luke
    |> TheNamesShouldBe-row Name=Han


Leia wasn't with them at the time, so this declaration fails too

|> TheNamesShouldBe
    [Rows]
    |> TheNamesShouldBe-row Name=Luke
    |> TheNamesShouldBe-row Name=Han
    |> TheNamesShouldBe-row Name=Chewie
    |> TheNamesShouldBe-row Name=Leia

~~~
