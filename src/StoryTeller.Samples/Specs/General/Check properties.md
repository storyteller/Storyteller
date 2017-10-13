# Check properties

-> id = general1
-> lifecycle = Acceptance
-> max-retries = 3
-> last-updated = 2016-01-15T00:00:00.0000000
-> expiration-period = 0
-> tags = check, do

[CheckObject]
|> IfTheAddressIs Address1=2035 Ozark, Address2=Apt 3, City=Carthage, StateOrProvince=MO, Country=USA, PostalCode=70071
|> TheAddressShouldBe Address1=2035 Ozark, Address2=Apt 3, City=Carthage
|> TheAddressShouldBe Address1=wrong, Address2=wrong, City=wrong
~~~
