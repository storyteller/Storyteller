# Checking Arrays

-> id = 7b67dd74-4503-4c07-ac69-f756fcfe3d1b
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-05-16T14:11:35.6955766Z
-> tags = 

[SampleJson]
|> JsonIs
``` json
{"numbers": [1, 2, 3, 5, 8], "names":["Justin", "Tamba", "Spencer"]}
```


This should succeed

|> CheckNumberArray
``` numbers
1, 2, 3, 5, 8
```


This should fail

|> CheckNumberArray
``` numbers
5,6,7
```


This should succeed

|> CheckStringArray
``` names
Justin, Tamba, Spencer
```


This should fail

|> CheckStringArray
``` names
Tom, Todd, Trevor
```

~~~
