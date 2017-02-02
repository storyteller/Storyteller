# Using Table Grammars


## decisions
### What's my name?
|table  |FirstName|LastName|FullName|LastNameFirst|
|header |         |        |        |             |
|default|         |        |        |             |
|options|         |        |        |             |
|editor |         |        |        |             |
|result |False    |False   |True    |True         |


## Divide
### Do some division
|table  |x    |y    |quotient|
|header |     |     |        |
|default|     |     |        |
|options|     |     |        |
|editor |     |     |        |
|result |False|False|True    |


## Sum
### Adding numbers together
|table  |x    |y    |sum |
|header |     |     |    |
|default|     |     |    |
|options|     |     |    |
|editor |     |     |    |
|result |False|False|True|


## TableWithBeforeAndAfterSteps
### The Users are
|table  |First|Last |
|header |     |     |
|default|     |     |
|options|     |     |
|editor |     |     |
|result |False|False|


## TableWithLotsOfOptions
### Table with lots of options
|table  |player     |position                  |
|header |Player Name|Position                  |
|default|           |                          |
|options|           |Pitcher, Outfield, Catcher|
|editor |           |select                    |
|result |False      |False                     |


