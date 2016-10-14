# Arrays

-> id = 1da0bbbe-42fd-463d-a02d-347ca57fc5b9
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.8697248-05:00
-> expiration-period = 0
-> tags = 

[NameArray]

Getting it right

|> TheNameArrayShouldBe
``` names
Han, Luke, Chewie
```


Get it wrong

|> TheNameArrayShouldBe
``` names
Han, Chewie, Obi Wan
```


Array comparison works on any type

|> FibonacciSeries
``` numbers
1, 1, 2, 3
```

~~~
