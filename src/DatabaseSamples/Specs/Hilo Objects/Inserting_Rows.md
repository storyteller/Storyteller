# Inserting Rows

-> id = 56aa05c9-6dbe-40cb-98ae-c750dcca797b
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-03-07T13:02:59.7728050Z
-> tags = 

[Hilo]
|> InsertRows
    [table]
    |> InsertRows-row entity=foo, hiValue=3
    |> InsertRows-row entity=bar, hiValue=5
    |> InsertRows-row entity=baz, hiValue=2

|> CheckTheRows
    [rows]
    |> CheckTheRows-row entity_name=foo, hi_value=3
    |> CheckTheRows-row entity_name=bar, hi_value=5
    |> CheckTheRows-row entity_name=baz, hi_value=2

~~~
