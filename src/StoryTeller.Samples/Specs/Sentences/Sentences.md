# Sentences

-> id = sentence4
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.6899822-05:00
-> expiration-period = 0
-> tags = 

[Sentence]

Show a syntax failure

|> StartWithTheNumber#1 id=1, number=a

Work correctly

|> StartWithTheNumber number=5
|> MultiplyThenAdd multiplier=3, delta=4
|> Subtract operand=2

Correct assertion

|> TheValueShouldBe#2 number=17, id=2

Incorrect assertion

|> TheSumOf number1=2, number2=2, sum=5

Line assertions

|> ThisLineIsAlwaysTrue#3 id=3
|> ThisLineIsAlwaysFalse#4 id=4
|> ThisLineAlwaysThrowsExceptions#5 id=5
~~~
