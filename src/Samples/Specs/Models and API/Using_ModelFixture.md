# Using ModelFixture

-> id = 947efb4d-f864-433d-87aa-c71d19e691dc
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-05-17T22:22:49.3766550Z
-> tags = 

[ModelForwarding]
|> BuildAddress
    [AddressModel]
    |> City City=Austin
    |> Address1 Address1=22 Cherry Tree Lane
    |> Country Country=USA
    |> StateOrProvince StateOrProvince=Texas

|> City City=Austin
|> Address1 Address1=22 Cherry Tree Lane
|> Country Country=USA
|> StateOrProvince StateOrProvince=Texas
~~~
