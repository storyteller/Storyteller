# Derive a sentence format for calling a sproc

-> id = b92c0847-9d06-498c-b5a1-f6611deaecb6
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-03-07T13:50:21.3650480Z
-> tags = 

[Hilo]
|> UglyGetNextHi entity=foo, result=0
|> UglyGetNextHi entity=bar, result=0
|> UglyGetNextHi entity=foo, result=1
|> UglyGetNextHi entity=bar, result=1
~~~
