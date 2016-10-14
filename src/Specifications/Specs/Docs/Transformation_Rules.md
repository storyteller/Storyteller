# Transformation Rules

-> id = transformation-rules
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2016-10-14T10:29:48.6752219-05:00
-> expiration-period = 0
-> tags = 

[TopicTemplating]
|> TheTopicsAre
    [Rows]
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
    |> TheTopicsAre-row path=categories/colors/blue.md, Line1=NULL, Line2=NULL
    |> TheTopicsAre-row Line1=NULL, Line2=NULL
    ``` path
    categories/colors/purple.md
    ```

    |> TheTopicsAre-row Line1=<!--Title: Beige-->, Line2=NULL
    ``` path
    categories/colors/lightbrown.md
    ```

    |> TheTopicsAre-row Line1=NULL, Line2=NULL
    ``` path
    categories/planets/index.md
    ```

    |> TheTopicsAre-row Line1=NULL, Line2=NULL
    ``` path
    categories/planets/hoth.md
    ```

    |> TheTopicsAre-row Line1=NULL, Line2=NULL
    ``` path
    categories/planets/tatooine.md
    ```

    |> TheTopicsAre-row path=faq.md, Line1=NULL, Line2=NULL

|> TheUrlResolutionIs style=Live
|> TransformsShouldBe
    [table]
    |> TransformsShouldBe-row Topic=index, Before=<[title]>, returnValue=The Documentation Project
    |> TransformsShouldBe-row Topic=index, Before=<[linkto:albatross]>
    ``` returnValue
    <a href="/albatross">Albatross</a>
    ```

    |> TransformsShouldBe-row Topic=index
    ``` Before
    <[linkto:categories/colors]>
    ```

    ``` returnValue
    <a href="/categories/colors">The Colors</a>
    ```

    |> TransformsShouldBe-row Topic=index, Before=<[script:go.js]>
    ``` returnValue
    <script type="text/javascript" src="/go.js"></script>
    ```

    |> TransformsShouldBe-row Topic=index, Before=<[script:folder/go.js]>
    ``` returnValue
    <script type="text/javascript" src="/folder/go.js"></script>
    ```

    |> TransformsShouldBe-row Topic=index, Before=<[css:go.css]>
    ``` returnValue
    <link href="/go.css" rel="stylesheet" type="text/css" />
    ```

    |> TransformsShouldBe-row Topic=index, Before=<[css:folder/go.css]>
    ``` returnValue
    <link href="/folder/go.css" rel="stylesheet" type="text/css" />
    ```

    |> TransformsShouldBe-row Topic=index, Before=<[RootUrl]>, returnValue=/

~~~
