# Parsing a Single Topic File

-> id = 524a9eaf-1760-4fc6-97aa-cf34b0e325ab
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2016-10-14T10:29:48.6692129-05:00
-> expiration-period = 0
-> tags = 

[TopicFolder]
|> TheTopicsAre
    [Rows]
    |> TheTopicsAre-row path=index.md, Line2=NULL
    ``` Line1
    <!--Title: Creating Documentation-->
    ```

    |> TheTopicsAre-row path=topics.md, Line1=<!--Url: topic-files-->, Line2=NULL

|> CheckTopic path=index.md, Key=index, Title=Creating Documentation, UrlSegment=EMPTY
|> CheckTopic path=topics.md, Key=topics, Title=Topics, UrlSegment=topic-files
~~~
