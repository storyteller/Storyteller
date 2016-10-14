# Object Sets

-> id = 55e1b808-bcca-41b2-9787-6d8c2f1d66d5
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.9027776-05:00
-> expiration-period = 0
-> tags = 

[Sets]

Just setting up the actual state of the system

|> InvoiceDetailsAre
    [Rows]
    |> InvoiceDetailsAre-row Amount=100, Date=TODAY, Name=The Shirts
    |> InvoiceDetailsAre-row Amount=200, Date=TODAY-1, Name=The Pants
    |> InvoiceDetailsAre-row Amount=10, Date=TODAY-2, Name=Socks


This declaration is all out of order with the actual data, but that's okay in this case

|> UnorderedDetailsAre
    [rows]
    |> UnorderedDetailsAre-row Amount=10, Date=TODAY-2, Name=Socks
    |> UnorderedDetailsAre-row Amount=200, Date=TODAY-1, Name=The Pants
    |> UnorderedDetailsAre-row Amount=100, Date=TODAY, Name=The Shirts


Now, let's do the same results where order matters. The table below will fail because the ordering is wrong

|> OrderedDetailsAre
    [rows]
    |> OrderedDetailsAre-row Amount=10, Date=TODAY-2, Name=Socks
    |> OrderedDetailsAre-row Amount=200, Date=TODAY-1, Name=The Pants
    |> OrderedDetailsAre-row Amount=100, Date=TODAY, Name=The Shirts


All Cells are Part of the Evaluation. This time, some of the cell values are wrong

|> UnorderedDetailsAre
    [rows]
    |> UnorderedDetailsAre-row Amount=11, Date=TODAY-2, Name=Socks
    |> UnorderedDetailsAre-row Amount=200, Date=TODAY-5, Name=The Pants
    |> UnorderedDetailsAre-row Amount=100, Date=TODAY, Name=Sweatpants

~~~
