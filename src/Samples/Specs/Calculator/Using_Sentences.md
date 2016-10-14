# Using Sentences

-> id = 17e4de49-522f-48f5-81d6-b41749174441
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.5652384-05:00
-> expiration-period = 0
-> tags = 

[Calculator]

Punching in values to the calculator

|> StartWith value=3
|> MultiplyBy value=2

Check the current value on the calculator screen

|> TheValueShouldBe value=6

You can use more than one input for a sentence

|> AddingNumbersTogether x=2, y=3, returnValue=5
~~~
