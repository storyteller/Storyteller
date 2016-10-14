# Using VerifyProperties

-> id = de8736db-3402-42f7-b2bd-8e0e78d9f4bd
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.6593888-05:00
-> expiration-period = 0
-> tags = 

[Address]
|> IfTheAddressIs Address1=3 1st Street, Address2=EMPTY, City=Austin, StateOrProvince=TX, Country=USA, PostalCode=78703
|> TheAddressShouldBe Address1=3 1st Street, Address2=EMPTY, City=Dallas
~~~
