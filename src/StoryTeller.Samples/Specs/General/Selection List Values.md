# Selection List Values

-> id = general2
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T10:42:12.6275878-05:00
-> expiration-period = 0
-> tags = do

[SelectionList]
|> TheNameIs first=Jeremy, last=Smith, fullname=Jeremy Smith
|> FirstAndLastName
    [table]
    |first |last  |fullname      |
    |Hank  |Miller|Hank Miller   |
    |Harold|Miller|Harold Mueller|

|> names
    [table]
    |> table First=Tobin, Last=Smith, Fullname=Tobin Smith

|> TheEnumOptionIs option=FirstOption, selectedOption=0
~~~
