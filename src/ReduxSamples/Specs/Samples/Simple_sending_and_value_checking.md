# Simple sending and value checking

-> id = ab11ba6a-2181-4901-a389-2ef8daff4ee4
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-04-05T12:17:16.7344694Z
-> tags = 

[Calculator]
|> Add operand=5
|> Multiply operand=10
|> CheckValue number=50
|> Subtract operand=8
|> CheckValue number=42
~~~
