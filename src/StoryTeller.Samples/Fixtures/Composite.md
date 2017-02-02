# Composite


## Add
### += {operand}
|sentence|operand|
|header  |       |
|default |       |
|options |       |
|editor  |       |
|result  |False  |


## AddAndCheck
### Add and check
* The number should start with {starting}
|sentence|starting|
|header  |        |
|default |11      |
|options |        |
|editor  |        |
|result  |False   |
* += {operand}
|sentence|operand|
|header  |       |
|default |       |
|options |       |
|editor  |       |
|result  |False  |
* Value should be {expected}
|sentence|expected|
|header  |        |
|default |        |
|options |        |
|editor  |        |
|result  |True    |




## AddAndMultiply
### Add and Multiply
* The number should start with {starting}
|sentence|starting|
|header  |        |
|default |11      |
|options |        |
|editor  |        |
|result  |False   |
* += {operand}
|sentence|operand|
|header  |       |
|default |       |
|options |       |
|editor  |       |
|result  |False  |
* *= {multiplier}
|sentence|multiplier|
|header  |          |
|default |          |
|options |          |
|editor  |          |
|result  |False     |
* Value should be {expected}
|sentence|expected|
|header  |        |
|default |        |
|options |        |
|editor  |        |
|result  |True    |




## AddAndMultiplyTable
### Add and Multiply in a Table
|table  |starting|operand|multiplier|expected|
|header |        |       |          |        |
|default|11      |       |          |        |
|options|        |       |          |        |
|editor |        |       |          |        |
|result |False   |False  |False     |True    |


## AddAndMultiplyThrow
### Add and Multiply
* The number should start with {starting}
|sentence|starting|
|header  |        |
|default |11      |
|options |        |
|editor  |        |
|result  |False   |
* += {operand}
|sentence|operand|
|header  |       |
|default |       |
|options |       |
|editor  |       |
|result  |False  |
* *= {multiplier}
|sentence|multiplier|
|header  |          |
|default |          |
|options |          |
|editor  |          |
|result  |False     |
* Value should be {expected}
|sentence|expected|
|header  |        |
|default |        |
|options |        |
|editor  |        |
|result  |True    |




## Adding
### Adding {x} to {y} should be {returnValue}
|sentence|x    |y    |returnValue|
|header  |     |     |           |
|default |     |     |NULL       |
|options |     |     |           |
|editor  |     |     |           |
|result  |False|False|True       |


## AddTable
### When adding numbers
|table  |x    |y    |sum |
|header |     |     |    |
|default|     |     |    |
|options|     |     |    |
|editor |     |     |    |
|result |False|False|True|


## AddTo5
### Adding {x} to 5 should be {returnValue}
|sentence|x    |returnValue|
|header  |     |           |
|default |     |NULL       |
|options |     |           |
|editor  |     |           |
|result  |False|True       |


## MultiplyBy
### *= {multiplier}
|sentence|multiplier|
|header  |          |
|default |          |
|options |          |
|editor  |          |
|result  |False     |


## StartWith
### The number should start with {starting}
|sentence|starting|
|header  |        |
|default |11      |
|options |        |
|editor  |        |
|result  |False   |


## Subtract
### -= {operand}
|sentence|operand|
|header  |       |
|default |       |
|options |       |
|editor  |       |
|result  |False  |


## TheValueShouldBe
### Value should be {expected}
|sentence|expected|
|header  |        |
|default |        |
|options |        |
|editor  |        |
|result  |True    |


## Throw
### Throw()


