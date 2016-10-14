# Unordered Set

-> id = set4
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.7211794-05:00
-> expiration-period = 0
-> tags = 

[Sets]
|> InvoiceDetailsAre
    [Rows]
    |Amount|Date   |Name  |
    |100.1 |TODAY  |Cord  |
    |200.2 |TODAY+1|Drill |
    |300.3 |TODAY+2|Hammer|

|> UnorderedDetailsAre
    [rows]
    |Amount |Date   |Name  |
    |invalid|TODAY+3|Drill |
    |300.3  |TODAY+2|Hammer|

~~~
