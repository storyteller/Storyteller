# Embeds

-> id = embeds
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2017-03-23T15:11:58.7309350Z
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
