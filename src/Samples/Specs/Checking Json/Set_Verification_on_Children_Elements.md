# Set Verification on Children Elements

-> id = 23eaf90e-948f-4446-8d0d-cad13280fc9d
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-05-16T16:40:43.2601138Z
-> tags = 

[SampleJson]
|> ThePeopleAre
    [Rows]
    |first|last     |age|city     |numbers|
    |Han  |Solo     |25 |San Diego|1,3,5  |
    |Luke |Skywalker|20 |Tatooine |2,4,6  |
    |Leia |Organa   |20 |Alderaan |3,2,1  |

|> CheckPeople
    [tokens]
    |first|last     |age|numbers|city     |
    |Han  |Solo     |25 |1,3,5  |San Diego|
    |Luke |Skywalker|20 |2,4,6  |Tatooine |
    |Leia |Organa   |20 |3,2,1  |Alderaan |

|> CheckPeople
    [tokens]
    |first|last     |age|numbers|city    |
    |Darth|Vader    |50 |2,3,4  |Mustafar|
    |Luke |Skywalker|20 |2,4,6  |Tatooine|
    |Leia |Organa   |30 |1,2,3  |Dallas  |

~~~
