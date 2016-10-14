# Bad Values

-> id = f6aca131-be42-405b-ae76-ad3f6359f8ed
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.4911200-05:00
-> expiration-period = 0
-> tags = 

[Calculator]

Punching in values to the calculator

|> StartWith value=3
|> MultiplyBy value=2

This value is wrong and the specification should fail

|> TheValueShouldBe value=7
~~~
