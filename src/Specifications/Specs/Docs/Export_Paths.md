# Export Paths

-> id = 5c6c61a3-162c-4145-ac41-262452cf73fb
-> lifecycle = Regression
-> max-retries = 0
-> last-updated = 2016-10-14T10:29:48.6201394-05:00
-> expiration-period = 0
-> tags = 

[TopicExport]
|> TheTopicsAre
    [Rows]
    -> Line1 = False
    -> Line2 = False
    |> TheTopicsAre-row path=index.md
    |> TheTopicsAre-row path=faq.md
    |> TheTopicsAre-row path=contributing.md
    |> TheTopicsAre-row path=colors/index.md
    |> TheTopicsAre-row path=colors/red.md
    |> TheTopicsAre-row path=categories/index.md
    |> TheTopicsAre-row
    ``` path
    categories/planets/index.md
    ```

    |> TheTopicsAre-row
    ``` path
    categories/planets/hoth.md
    ```


|> TheExportedFileShouldBe
    [table]
    |> TheExportedFileShouldBe-row Key=index, returnValue=index.htm
    |> TheExportedFileShouldBe-row Key=faq, returnValue=faq.htm
    |> TheExportedFileShouldBe-row Key=contributing, returnValue=contributing.htm
    |> TheExportedFileShouldBe-row Key=colors, returnValue=colors/index.htm
    |> TheExportedFileShouldBe-row Key=colors/red, returnValue=colors/red.htm
    |> TheExportedFileShouldBe-row Key=categories/planets
    ``` returnValue
    categories/planets/index.htm
    ```

    |> TheExportedFileShouldBe-row Key=categories/planets/hoth
    ``` returnValue
    categories/planets/hoth.htm
    ```


|> TheExportedFileForWebsiteShouldBe
    [table]
    |> TheExportedFileForWebsiteShouldBe-row Key=index, returnValue=index.html
    |> TheExportedFileForWebsiteShouldBe-row Key=faq, returnValue=faq/index.html
    |> TheExportedFileForWebsiteShouldBe-row Key=colors, returnValue=colors/index.html
    |> TheExportedFileForWebsiteShouldBe-row Key=categories/planets
    ``` returnValue
    categories/planets/index.html
    ```

    |> TheExportedFileForWebsiteShouldBe-row Key=categories/planets/hoth
    ``` returnValue
    categories/planets/hoth/index.html
    ```


~~~
