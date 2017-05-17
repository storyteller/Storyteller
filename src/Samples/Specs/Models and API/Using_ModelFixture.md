# Using ModelFixture

-> id = 947efb4d-f864-433d-87aa-c71d19e691dc
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-05-17T15:08:22.6165487Z
-> tags = 

[ModelForwarding]
|> BuildAddress
    [AddressModel]
    |> City City=Austin

|> CityShouldBe city=Austin
~~~
