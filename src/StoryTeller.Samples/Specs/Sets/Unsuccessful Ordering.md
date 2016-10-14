# Unsuccessful Ordering

-> id = set5
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.7367780-05:00
-> expiration-period = 0
-> tags = 

[Sets]
|> TheDataIs
    [name]
    |> TheDataIs-row name=Jeremy
    |> TheDataIs-row name=Josh
    |> TheDataIs-row name=Gary
    |> TheDataIs-row name=Kevin
    |> TheDataIs-row name=Chad
    |> TheDataIs-row name=Rand
    |> TheDataIs-row name=Perrin
    |> TheDataIs-row name=Mat


All data is correct, but in the wrong order

|> OrderedStringSet
    [Rows]
    |> OrderedStringSet-row expected=Jeremy
    |> OrderedStringSet-row expected=Josh
    |> OrderedStringSet-row expected=Gary
    |> OrderedStringSet-row expected=Chad
    |> OrderedStringSet-row expected=Kevin
    |> OrderedStringSet-row expected=Egwene
    |> OrderedStringSet-row expected=Perrin

~~~
