# Sentence Grammars


## BadGrammar
### {one is better than {two
|sentence|one  |two  |
|header  |     |     |
|default |     |     |
|options |     |     |
|editor  |     |     |
|result  |False|False|


## BadSentence
### Incomplete format
|sentence|name |
|header  |     |
|default |     |
|options |     |
|editor  |     |
|result  |False|


## DivideBy
### DivideBy({operand})
|sentence|operand|
|header  |       |
|default |       |
|options |       |
|editor  |       |
|result  |False  |


## JustGo
### JustGo()


## MultiplyThenAdd
### Multiply by {multiplier} then add {delta}
|sentence|multiplier|delta|
|header  |          |     |
|default |          |     |
|options |          |     |
|editor  |          |     |
|result  |False     |False|


## StartWithTheNumber
### Start with the number {number}
|sentence|number|
|header  |      |
|default |5     |
|options |      |
|editor  |      |
|result  |False |


## Subtract
### Subtract({operand})
|sentence|operand|
|header  |       |
|default |       |
|options |       |
|editor  |       |
|result  |False  |


## TheSumOf
### The sum of {number1} and {number2} should be {sum}
|sentence|number1|number2|sum |
|header  |       |       |    |
|default |       |       |NULL|
|options |       |       |    |
|editor  |       |       |    |
|result  |False  |False  |True|


## TheValueShouldBe
### The number should now be {number}
|sentence|number|
|header  |      |
|default |      |
|options |      |
|editor  |      |
|result  |True  |


## ThisFactIsFalse
### This fact is always false
fact


## ThisFactIsTrue
### This fact is always true
fact


## ThisFactThrowsException
### This fact throws an exception
fact


## ThisLineAlwaysThrowsExceptions
### ThisLineAlwaysThrowsExceptions()


## ThisLineIsAlwaysFalse
### This line is always false
fact


## ThisLineIsAlwaysTrue
### This line is always true
fact


## XplusYShouldBe
### {x} + {y} should be {sum}
|sentence|x    |y    |sum  |
|header  |     |     |     |
|default |     |     |     |
|options |     |     |     |
|editor  |     |     |     |
|result  |False|False|False|


