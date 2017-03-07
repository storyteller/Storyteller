# Derive format for parameterized sql

-> id = 72c3a18d-346b-406f-947a-cb129c8e8fe7
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-03-07T14:25:39.6656640Z
-> tags = 

[Hilo]
|> UglyInsertRow entity=foo, hiValue=1
|> UglyInsertRow entity=bar, hiValue=2
|> CheckTheRows
    [rows]
    |> CheckTheRows-row entity_name=foo, hi_value=1
    |> CheckTheRows-row entity_name=bar, hi_value=2

~~~
