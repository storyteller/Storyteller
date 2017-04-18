# Hello World

-> id = 1b78ed0b-bef1-45c4-8dff-71572cca7753
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-04-18T19:13:14.7209436Z
-> tags = 

[Fake]

The "/api/text" refers to TextController in the WebApp

|> TheContentsShouldBe url=/api/text
``` contents
Hello, world
```


Now, see a failing request

|> TheContentsShouldBe url=/api/text, contents=Something wrong

Now, run a request that succeeds, but exceeds its performance threshold

|> RequestTakes duration=500
|> TheContentsShouldBe url=/api/text
``` contents
Hello, world
```

~~~
