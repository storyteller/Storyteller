# Array Failure Displays

-> id = 46412e01-5db5-4bc6-946a-e7e7fcfe030d
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-09-26T00:00:00.0000000
-> expiration-period = 0
-> tags = 

[Array]
|> TheNameArrayShouldBe
``` names
Tom, Dick, Jane
```

|> ReturnsEmpty
``` names
Tom, Harold, Jane
```

~~~
