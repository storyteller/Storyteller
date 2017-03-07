# Click Buttons

-> id = b721e06b-0b64-4710-b82b-cbe5aa261f60
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-02-21T15:56:35.1528422Z
-> tags = 

[Sample]
|> OpenUrl url=simple.htm

This element is hidden by default
|> IsHidden element=the div

Clicking the "Show" button will reveal the div
|> Click element=the Show button
|> IsVisible element=the div
~~~
