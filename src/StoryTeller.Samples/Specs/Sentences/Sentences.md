# Sentences

-> id = sentence4
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-12-12T16:12:11.9754630Z
-> expiration-period = 0
-> tags = 

[Sentence]

Show a _syntax_ failure and link to [CNN](http://cnn.com)
* First
* Second
* Third
* Fourth
* Fifth
* Sixth

|> StartWithTheNumber#1 number=a

Work correctly

|> StartWithTheNumber number=5
|> MultiplyThenAdd multiplier=3, delta=4
|> Subtract operand=2

Correct assertion

|> TheValueShouldBe#2 number=17

Incorrect assertion

|> TheSumOf number1=2, number2=2, sum=5

Line assertions

|> ThisLineIsAlwaysTrue#3
|> ThisLineIsAlwaysFalse#4
|> ThisLineAlwaysThrowsExceptions#5
~~~


Comment

Another Comment


[Sentence]

Show a syntax failure

~~~
