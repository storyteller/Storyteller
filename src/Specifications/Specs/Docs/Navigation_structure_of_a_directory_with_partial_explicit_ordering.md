# Navigation structure of a directory with partial explicit ordering

-> id = 030ea6ca-7e7f-449a-b64e-666612809c6k
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2016-10-14T10:29:48.6391679-05:00
-> expiration-period = 0
-> tags = 

[TopicFolder]
|> TheTopicsAre
    [Rows]
    |> TheTopicsAre-row path=index.md, Line1=<!--Title: Colors-->, Line2=NULL
    |> TheTopicsAre-row path=red.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row path=blue.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row path=purple.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row path=yellow.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row path=green.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row path=orange.md, Line1=NULL, Line2=NULL


The order.txt file overrides the topic ordering

|> ForFile path=order.txt
|> WriteFile
    [Rows]
    |> WriteFile-row Text=red
    |> WriteFile-row Text=orange
    |> WriteFile-row Text=yellow


Since blue, green, and purple are not part of the explicit ordering, they'll be at the back and ordered by their titles

|> AllTopicsShouldBe
    [rows]
    |> AllTopicsShouldBe-row Key=index, Title=Colors, Url=EMPTY
    |> AllTopicsShouldBe-row Key=red, Title=Red, Url=red
    |> AllTopicsShouldBe-row Key=orange, Title=Orange, Url=orange
    |> AllTopicsShouldBe-row Key=yellow, Title=Yellow, Url=yellow
    |> AllTopicsShouldBe-row Key=blue, Title=Blue, Url=blue
    |> AllTopicsShouldBe-row Key=green, Title=Green, Url=green
    |> AllTopicsShouldBe-row Key=purple, Title=Purple, Url=purple

~~~
