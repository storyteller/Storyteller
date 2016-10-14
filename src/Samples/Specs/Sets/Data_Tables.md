# Data Tables

-> id = c33a220d-ba91-4321-8319-bcee74114211
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2015-11-18T00:00:00.0000000
-> expiration-period = 0
-> tags = 

[DataTable]
|> TheDataTableIs
    [Rows]
    |> TheDataTableIs-row City=Austin, Distance=5, ZipCode=78750
    |> TheDataTableIs-row City=Jasper, Distance=600, ZipCode=64755
    |> TheDataTableIs-row City=Bentonville, Distance=550, ZipCode=72712


Happy Path

|> VerifyRows
    [rows]
    |> VerifyRows-row City=Austin, Distance=5, Zip=78750
    |> VerifyRows-row City=Jasper, Distance=600, Zip=64755
    |> VerifyRows-row City=Bentonville, Distance=550, Zip=72712


Extra Rows Detected from the Database

|> VerifyRows
    [rows]
    |> VerifyRows-row City=Austin, Distance=5, Zip=78750
    |> VerifyRows-row City=Jasper, Distance=600, Zip=64755


Missing Rows in the Database

|> VerifyRows
    [rows]
    |> VerifyRows-row City=Austin, Distance=5, Zip=78750
    |> VerifyRows-row City=Jasper, Distance=600, Zip=64755
    |> VerifyRows-row City=Bentonville, Distance=550, Zip=72712
    |> VerifyRows-row City=Joplin, Distance=575, Zip=64801


Mismatch in Rows

|> VerifyRows
    [rows]
    |> VerifyRows-row City=Round Rock, Distance=5, Zip=78750
    |> VerifyRows-row City=Jasper, Distance=600, Zip=64755
    |> VerifyRows-row City=Bentonville, Distance=550, Zip=72712

~~~
