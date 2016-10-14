# Embeds

-> id = embeds
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2015-07-17T00:00:00.0000000
-> expiration-period = 0
-> tags = 

[Embedded]
|> ThrowAnExceptionOnTheNextEmbed
|> EmbeddedMath
    [Math#errors]
    |> Adding x=5, y=5, returnValue=10

|> DoNotThrowAnExceptionOnTheNextEmbed
|> EmbeddedMath
    [Math#no-errors]
    |> Adding x=5, y=4, returnValue=9
    |> Adding x=5, y=5, returnValue=11
    |> Adding x=5, y=6, returnValue=abc
    |> Throw

~~~
