# Successful OrderedStrings

-> id = set2
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.7211794-05:00
-> expiration-period = 0
-> tags = 

[Sets]
|> TheDataIs
    [name]
    |name  |
    |Jeremy|
    |Josh  |
    |Gary  |
    |Kevin |
    |Chad  |

|> OrderedStringSet
    [Rows]
    |expected|Index|
    |Jeremy  |     |
    |Josh    |     |
    |Gary    |     |
    |Kevin   |     |
    |Chad    |     |

|> UnorderedStringSet
    [Rows]
    |expected|Index|
    |Kevin   |     |
    |Chad    |     |
    |Jeremy  |     |
    |Josh    |     |
    |Gary    |     |

~~~
