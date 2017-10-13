# Composite with Errors

-> id = paragraph1
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.6587850-05:00
-> expiration-period = 0
-> tags = check

[Composite]
|> AddAndMultiply starting=5, operand=aaa, multiplier=10, expected=80
|> AddAndMultiplyTable
    [Rows]
    |starting|operand|multiplier|expected|
    |bbb     |4      |10        |25      |
    |5       |3      |10        |80      |
    |5       |3      |10        |77      |

|> AddAndMultiplyThrow starting=3, operand=2, multiplier=4, expected=20
~~~
