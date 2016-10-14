# Navigation structure for a single directory without explicit ordering

-> id = b2bf7c97-5c10-454e-a068-8f9256376467
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2016-10-14T10:29:48.6331589-05:00
-> expiration-period = 0
-> tags = 

[TopicFolder]
|> TheTopicsAre
    [Rows]
    |> TheTopicsAre-row path=index.md, Line2=NULL
    ``` Line1
    <!--Title: The Documentation-->
    ```

    |> TheTopicsAre-row path=red.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row path=blue.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row path=purple.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row path=lightbrown.md, Line1=<!--Title: Beige-->, Line2=NULL


In the absence of an explicit "order.txt" file, the topics should be ordered by title

|> AllTopicsShouldBe
    [rows]
    |> AllTopicsShouldBe-row Key=index, Title=The Documentation, Url=EMPTY
    |> AllTopicsShouldBe-row Key=lightbrown, Title=Beige, Url=lightbrown
    |> AllTopicsShouldBe-row Key=blue, Title=Blue, Url=blue
    |> AllTopicsShouldBe-row Key=purple, Title=Purple, Url=purple
    |> AllTopicsShouldBe-row Key=red, Title=Red, Url=red

~~~
