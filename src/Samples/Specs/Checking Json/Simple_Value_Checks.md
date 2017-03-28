# Simple Value Checks

-> id = fd0fcfe4-c19d-425c-bc72-24504aa20644
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-03-28T14:08:15.6019870Z
-> tags = 

[SampleJson]
|> JsonIs
``` json
{"color": "red", "order": "1"}
```

|> CheckValues
    [table]
    |path   |returnValue|
    |$.color|red        |
    |$.order|1          |
    |$.color|wrong      |
    |$.order|wrong      |


Correct Assertion

|> CheckOrder order=1

Incorrect Assertion

|> CheckOrder order=3
~~~
