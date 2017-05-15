# Deep Child Comparison

-> id = 90b20814-3338-4cf3-ae32-b240e649d744
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-05-15T21:01:21.3409269Z
-> tags = 

[SampleJson]
|> JsonIs
``` json
{"child": {"name": "Declan", "age": "3"}}
```

|> CompareChild name=Declan, age=3
|> CompareChild name=Max, age=13
~~~
