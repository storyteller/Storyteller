# Advanced LinkTo Transformations

-> id = b2954434-61e8-426f-9d7d-31cd453a8377
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2016-10-14T10:29:48.5810809-05:00
-> expiration-period = 0
-> tags = 

[TopicTemplating]
|> TheTopicsAre
    [Rows]
    -> Line2 = True
    -> Line1 = True
    |> TheTopicsAre-row path=index.md, Line2=NULL
    ``` Line1
    <!--Title: The Documentation Project-->
    ```

    |> TheTopicsAre-row path=albatross.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row path=categories/index.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row Line1=<!--Title: The Colors-->, Line2=NULL
    ``` path
    categories/colors/index.md
    ```

    |> TheTopicsAre-row path=categories/colors/red.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row Line1=NULL, Line2=NULL
    ``` path
    categories/planets/index.md
    ```

    |> TheTopicsAre-row Line1=NULL, Line2=NULL
    ``` path
    categories/planets/hoth.md
    ```

    |> TheTopicsAre-row path=faq.md, Line1=NULL, Line2=NULL

|> TheUrlResolutionIs style=Live
|> TransformsShouldBe
    [table]
    |> TransformsShouldBe-row Topic=index, Before=<[linkto:albatross]>
    ``` returnValue
    <a href="/albatross">Albatross</a>
    ```

    |> TransformsShouldBe-row Topic=index
    ``` Before
    <[linkto:albatross;title=The Albatross]>
    ```

    ``` returnValue
    <a href="/albatross">The Albatross</a>
    ```

    |> TransformsShouldBe-row Topic=index, Before=<[linkto:{next}]>
    ``` returnValue
    <a href="/albatross">Albatross</a>
    ```

    |> TransformsShouldBe-row Topic=index, Before=<[linkto:{previous}]>, returnValue=EMPTY
    |> TransformsShouldBe-row Topic=albatross, Before=<[linkto:{previous}]>
    ``` returnValue
    <a href="/">The Documentation Project</a>
    ```

    |> TransformsShouldBe-row Topic=faq, Before=<[linkto:{next}]>, returnValue=EMPTY
    |> TransformsShouldBe-row Topic=index
    ``` Before
    <[linkto:faq;<li><a href="{href}" title="{title}">Frequently Asked Questions</a></li>]>
    ```

    ``` returnValue
    <li><a href="/faq" title="Faq">Frequently Asked Questions</a></li>
    ```

    |> TransformsShouldBe-row Topic=index, returnValue=EMPTY
    ``` Before
    <[linkto:{previous};<li><a href="{href}" title="{title}">Previous</a></li>]>
    ```


~~~
