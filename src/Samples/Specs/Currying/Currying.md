# Currying

-> id = 93be7129-3144-4b0f-94b4-56707296b11f
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.6864320-05:00
-> expiration-period = 0
-> tags = 

[Currying]

Without currying and supplying all the information

|> CreateInvoice Id=#1, DueDate=TODAY+5, IsOpen=True

If all the spec cares about is that the invoice is open

|> OpenInvoice Id=#2
~~~
