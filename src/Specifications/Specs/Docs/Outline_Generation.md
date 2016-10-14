# Outline Generation

-> id = 3efe4054-9ee7-4e88-8626-ceed2de5ff12
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2016-10-14T10:29:48.6581964-05:00
-> expiration-period = 0
-> tags = 

[OutlineGeneration]
|> TheOutlineFileIs
    [Rows]
    |> TheOutlineFileIs-row Line=index:Some Stuff
    |> TheOutlineFileIs-row
    ``` Line
    faq:Frequently Asked Questions
    ```

    |> TheOutlineFileIs-row Line=categories
    |> TheOutlineFileIs-row
    ``` Line
    categories/planets:The Planets
    ```

    |> TheOutlineFileIs-row Line=categories/planets/hoth
    |> TheOutlineFileIs-row
    ``` Line
    categories/planets/endor:The Sanctuary Moon
    ```

    |> TheOutlineFileIs-row
    ``` Line
    categories/planets/tatooine
    ```

    |> TheOutlineFileIs-row
    ``` Line
    categories/colors:The Colors
    ```

    |> TheOutlineFileIs-row Line=categories/colors/red
    |> TheOutlineFileIs-row Line=categories/colors/orange
    |> TheOutlineFileIs-row Line=categories/colors/yellow
    |> TheOutlineFileIs-row Line=roadmap:The Roadmap:plans

|> TheTopicsReadShouldBe
    [rows]
    |> TheTopicsReadShouldBe-row Key=index, Title=Some Stuff, Url=EMPTY
    |> TheTopicsReadShouldBe-row Key=faq, Url=faq
    ``` Title
    Frequently Asked Questions
    ```

    |> TheTopicsReadShouldBe-row Key=categories, Title=Categories, Url=categories
    |> TheTopicsReadShouldBe-row Key=categories/planets, Title=The Planets, Url=categories/planets
    |> TheTopicsReadShouldBe-row Key=categories/planets/hoth, Title=Hoth, Url=categories/planets/hoth
    |> TheTopicsReadShouldBe-row Key=categories/planets/endor, Title=The Sanctuary Moon, Url=categories/planets/endor
    |> TheTopicsReadShouldBe-row Title=Tatooine
    ``` Key
    categories/planets/tatooine
    ```

    ``` Url
    categories/planets/tatooine
    ```

    |> TheTopicsReadShouldBe-row Key=categories/colors, Title=The Colors, Url=categories/colors
    |> TheTopicsReadShouldBe-row Key=categories/colors/red, Title=Red, Url=categories/colors/red
    |> TheTopicsReadShouldBe-row Key=categories/colors/orange, Title=Orange, Url=categories/colors/orange
    |> TheTopicsReadShouldBe-row Key=categories/colors/yellow, Title=Yellow, Url=categories/colors/yellow
    |> TheTopicsReadShouldBe-row Key=roadmap, Title=The Roadmap, Url=plans

|> TheWrittenFilesShouldBe
    [rows]
    |> TheWrittenFilesShouldBe-row Path=index.md
    |> TheWrittenFilesShouldBe-row Path=order.txt
    |> TheWrittenFilesShouldBe-row Path=faq.md
    |> TheWrittenFilesShouldBe-row Path=categories/index.md
    |> TheWrittenFilesShouldBe-row Path=categories/order.txt
    |> TheWrittenFilesShouldBe-row
    ``` Path
    categories/planets/index.md
    ```

    |> TheWrittenFilesShouldBe-row
    ``` Path
    categories/planets/order.txt
    ```

    |> TheWrittenFilesShouldBe-row
    ``` Path
    categories/planets/hoth.md
    ```

    |> TheWrittenFilesShouldBe-row
    ``` Path
    categories/planets/endor.md
    ```

    |> TheWrittenFilesShouldBe-row
    ``` Path
    categories/planets/tatooine.md
    ```

    |> TheWrittenFilesShouldBe-row
    ``` Path
    categories/colors/index.md
    ```

    |> TheWrittenFilesShouldBe-row
    ``` Path
    categories/colors/order.txt
    ```

    |> TheWrittenFilesShouldBe-row Path=categories/colors/red.md
    |> TheWrittenFilesShouldBe-row
    ``` Path
    categories/colors/orange.md
    ```

    |> TheWrittenFilesShouldBe-row
    ``` Path
    categories/colors/yellow.md
    ```

    |> TheWrittenFilesShouldBe-row Path=roadmap.md

|> TheLoadedTopicsShouldBe
    [rows]
    |> TheLoadedTopicsShouldBe-row Key=index, Title=Some Stuff, Url=EMPTY
    |> TheLoadedTopicsShouldBe-row Key=faq, Url=faq
    ``` Title
    Frequently Asked Questions
    ```

    |> TheLoadedTopicsShouldBe-row Key=categories, Title=Categories, Url=categories
    |> TheLoadedTopicsShouldBe-row Key=categories/planets, Title=The Planets, Url=categories/planets
    |> TheLoadedTopicsShouldBe-row Key=categories/planets/hoth, Title=Hoth, Url=categories/planets/hoth
    |> TheLoadedTopicsShouldBe-row Key=categories/planets/endor, Title=The Sanctuary Moon, Url=categories/planets/endor
    |> TheLoadedTopicsShouldBe-row Title=Tatooine
    ``` Key
    categories/planets/tatooine
    ```

    ``` Url
    categories/planets/tatooine
    ```

    |> TheLoadedTopicsShouldBe-row Key=categories/colors, Title=The Colors, Url=categories/colors
    |> TheLoadedTopicsShouldBe-row Key=categories/colors/red, Title=Red, Url=categories/colors/red
    |> TheLoadedTopicsShouldBe-row Key=categories/colors/orange, Title=Orange, Url=categories/colors/orange
    |> TheLoadedTopicsShouldBe-row Key=categories/colors/yellow, Title=Yellow, Url=categories/colors/yellow
    |> TheLoadedTopicsShouldBe-row Key=roadmap, Title=The Roadmap, Url=plans

~~~
