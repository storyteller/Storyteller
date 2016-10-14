# Navigation structure with nested folders and implicit ordering

-> id = 64321ccb-24c9-4942-badc-f577ea2e14cb
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2015-11-18T00:00:00.0000000
-> expiration-period = 0
-> tags = 

[TopicFolder]
|> TheTopicsAre
    [Rows]
    |> TheTopicsAre-row path=index.md, Line2=NULL
    ``` Line1
    <!--Title: The Documentation-->
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


In the absence of an explicit "order.txt" file, the topics should be ordered by title

|> AllTopicsShouldBe
    [rows]
    |> AllTopicsShouldBe-row Key=index, Title=The Documentation, Url=EMPTY
    |> AllTopicsShouldBe-row Key=albatross, Title=Albatross, Url=albatross
    |> AllTopicsShouldBe-row Key=categories, Title=Categories, Url=categories
    |> AllTopicsShouldBe-row Key=categories/planets, Title=Planets, Url=categories/planets
    |> AllTopicsShouldBe-row Key=categories/planets/hoth, Title=Hoth, Url=categories/planets/hoth
    |> AllTopicsShouldBe-row Title=Tatooine
    ``` Key
    categories/planets/tatooine
    ```

    ``` Url
    categories/planets/tatooine
    ```

    |> AllTopicsShouldBe-row Key=categories/colors, Title=The Colors, Url=categories/colors
    |> AllTopicsShouldBe-row Title=Beige
    ``` Key
    categories/colors/lightbrown
    ```

    ``` Url
    categories/colors/lightbrown
    ```

    |> AllTopicsShouldBe-row Key=categories/colors/blue, Title=Blue, Url=categories/colors/blue
    |> AllTopicsShouldBe-row Key=categories/colors/purple, Title=Purple, Url=categories/colors/purple
    |> AllTopicsShouldBe-row Key=categories/colors/red, Title=Red, Url=categories/colors/red
    |> AllTopicsShouldBe-row Key=faq, Title=Faq, Url=faq

~~~
