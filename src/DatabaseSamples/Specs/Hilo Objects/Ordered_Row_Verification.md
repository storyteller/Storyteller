# Ordered Row Verification

-> id = 8bd7b758-d177-4af7-893f-b2012c976424
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-03-07T13:13:12.7901510Z
-> tags = 

[Hilo]
|> InsertRows
    [table]
    |> InsertRows-row entity=bar, hiValue=5
    |> InsertRows-row entity=foo, hiValue=20
    |> InsertRows-row entity=aardvark, hiValue=25
    |> InsertRows-row entity=cat, hiValue=50


This is out of order and should fail

|> CheckTheRowsOrdered
    [rows]
    |> CheckTheRowsOrdered-row entity_name=bar, hi_value=5
    |> CheckTheRowsOrdered-row entity_name=cat, hi_value=50
    |> CheckTheRowsOrdered-row entity_name=foo, hi_value=20
    |> CheckTheRowsOrdered-row entity_name=aardvark, hi_value=25


This is ordered as expected and should pass

|> CheckTheRowsOrdered
    [rows]
    |> CheckTheRowsOrdered-row entity_name=aardvark, hi_value=25
    |> CheckTheRowsOrdered-row entity_name=bar, hi_value=5
    |> CheckTheRowsOrdered-row entity_name=cat, hi_value=50
    |> CheckTheRowsOrdered-row entity_name=foo, hi_value=20

~~~
