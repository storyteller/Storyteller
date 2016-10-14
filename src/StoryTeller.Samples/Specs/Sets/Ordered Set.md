# Ordered Set

-> id = set1
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.7055808-05:00
-> expiration-period = 0
-> tags = 

[Sets]
|> InvoiceDetailsAre
    [Rows]
    |Name  |Amount|Date   |
    |Cord  |100.1 |TODAY  |
    |Drill |200.2 |TODAY+1|
    |Hammer|300.3 |TODAY+2|


Completely successful ordering

|> OrderedDetailsAre
    [rows#1]
    |Name  |Amount|Order|Date   |id|
    |Cord  |100.1 |1    |TODAY  |2 |
    |Drill |200.2 |2    |TODAY+1|3 |
    |Hammer|300.3 |3    |TODAY+2|4 |


Out of order

|> OrderedDetailsAre
    [rows#5]
    |Name  |Amount|Order|Date   |id|
    |Drill |200.2 |1    |TODAY+1|6 |
    |Hammer|300.3 |2    |TODAY+2|7 |
    |Cord  |100.1 |3    |TODAY  |8 |


Should have one exra

|> OrderedDetailsAre
    [rows#9]
    |Name |Amount|Order|Date   |
    |Cord |100.1 |1    |TODAY  |
    |Drill|200.2 |2    |TODAY+1|


Should mark one expected result as missing

|> OrderedDetailsAre
    [rows#10]
    |Name  |Amount|Order|Date   |id|
    |Cord  |100.1 |1    |TODAY  |  |
    |Drill |200.2 |2    |TODAY+1|  |
    |Hammer|300.3 |3    |TODAY+2|  |
    |Hammer|400.3 |4    |TODAY+3|11|


One syntax error

|> OrderedDetailsAre
    [rows]
    |Name  |Amount|Order|Date        |id|
    |Cord  |100.1 |1    |Syntax Error|12|
    |Drill |200.2 |2    |TODAY+1     |  |
    |Hammer|300.3 |3    |TODAY+2     |  |

~~~
