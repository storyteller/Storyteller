# Simple Composite

-> id = paragraph2
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.6587850-05:00
-> expiration-period = 0
-> tags = 

[Composite]
|> AddAndMultiply starting=5, operand=3, multiplier=10, expected=80
|> AddAndMultiply starting=5, operand=3, multiplier=10, expected=77
|> AddAndMultiplyTable
    [Rows]
    |starting|operand|multiplier|expected|
    |3       |4      |10        |25      |
    |5       |3      |10        |80      |
    |5       |3      |10        |77      |

~~~
