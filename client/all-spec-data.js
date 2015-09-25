module.exports = {
  "fixtures": [
    {
      "title": "Parking Expiry Rules",
      "key": "ParkingExpiry",
      "implementation": "StoryTeller.Samples.Fixtures.ParkingExpiryFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "cells": [
            {
              "key": "day",
              "default": null,
              "header": null,
              "output": false,
              "editor": "select",
              "options": [
                {
                  "display": "Sunday",
                  "value": "Sunday"
                },
                {
                  "display": "Monday",
                  "value": "Monday"
                },
                {
                  "display": "Tuesday",
                  "value": "Tuesday"
                },
                {
                  "display": "Wednesday",
                  "value": "Wednesday"
                },
                {
                  "display": "Thursday",
                  "value": "Thursday"
                },
                {
                  "display": "Friday",
                  "value": "Friday"
                },
                {
                  "display": "Saturday",
                  "value": "Saturday"
                }
              ]
            },
            {
              "key": "minutes",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "amount",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "ticketedAmount",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "collection": "table",
          "title": "Expiry Ticket Decision Rules",
          "key": "TicketIsGiven",
          "type": "table",
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Kansas City Chiefs 2015",
      "key": "Player",
      "implementation": "StoryTeller.Samples.Fixtures.PlayerFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "cells": [
            {
              "key": "Player",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Position",
              "default": null,
              "header": null,
              "output": true,
              "editor": "select",
              "options": [
                {
                  "display": "LB",
                  "value": "LB"
                },
                {
                  "display": "OL",
                  "value": "OL"
                },
                {
                  "display": "DL",
                  "value": "DL"
                },
                {
                  "display": "WR",
                  "value": "WR"
                },
                {
                  "display": "RB",
                  "value": "RB"
                }
              ]
            }
          ],
          "collection": "table",
          "title": "Player Positions",
          "key": "PositionIs",
          "type": "table",
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Sometimes Slow",
      "key": "SometimesSlow",
      "implementation": "StoryTeller.Samples.Fixtures.SometimesSlowFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Slow()",
          "key": "Slow",
          "type": "sentence",
          "cells": [],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Check Properties",
      "key": "CheckObject",
      "implementation": "StoryTeller.Samples.Fixtures.CheckObjectFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "children": [
            {
              "key": null,
              "type": "silent",
              "cells": [],
              "errors": []
            },
            {
              "format": "Address1 = {Address1}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "Address1",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "Address2 = {Address2}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "Address2",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "City = {City}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "City",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "StateOrProvince = {StateOrProvince}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "StateOrProvince",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "Country = {Country}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "Country",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "PostalCode = {PostalCode}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "PostalCode",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            }
          ],
          "title": "If the new address is",
          "key": "IfTheAddressIs",
          "type": "paragraph",
          "cells": [
            {
              "key": "Address1",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Address2",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "City",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "StateOrProvince",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Country",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "PostalCode",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "children": [
            {
              "format": "Address1 should be {Address1}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "Address1",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "Address2 should be {Address2}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "Address2",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "City should be {City}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "City",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            }
          ],
          "title": "then the new address properties should be",
          "key": "TheAddressShouldBe",
          "type": "paragraph",
          "cells": [
            {
              "key": "Address1",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Address2",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "City",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Math",
      "key": "Math",
      "implementation": "StoryTeller.Samples.Fixtures.MathFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Adding {x} to {y} should be {returnValue}",
          "key": "Adding",
          "type": "sentence",
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "returnValue",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Adding {x} to 5 should be {returnValue}",
          "key": "AddTo5",
          "type": "sentence",
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "returnValue",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The number should start with {starting}",
          "key": "StartWith",
          "type": "sentence",
          "cells": [
            {
              "key": "starting",
              "default": "11",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "*= {multiplier}",
          "key": "MultiplyBy",
          "type": "sentence",
          "cells": [
            {
              "key": "multiplier",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "-= {operand}",
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "+= {operand}",
          "key": "Add",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Value should be {expected}",
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "expected",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "collection": "operation",
          "title": "When adding numbers",
          "key": "AddTable",
          "type": "table",
          "errors": []
        },
        {
          "children": [
            {
              "format": "The number should start with {starting}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "starting",
                  "default": "11",
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "+= {operand}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "operand",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "Value should be {expected}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "expected",
                  "default": null,
                  "header": null,
                  "output": true,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            }
          ],
          "title": "Add and check",
          "key": "AddAndCheck",
          "type": "paragraph",
          "cells": [
            {
              "key": "starting",
              "default": "11",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "expected",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Throw()",
          "key": "Throw",
          "type": "sentence",
          "cells": [],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Composite",
      "key": "Composite",
      "implementation": "StoryTeller.Samples.Fixtures.CompositeFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Adding {x} to {y} should be {returnValue}",
          "key": "Adding",
          "type": "sentence",
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "returnValue",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Adding {x} to 5 should be {returnValue}",
          "key": "AddTo5",
          "type": "sentence",
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "returnValue",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The number should start with {starting}",
          "key": "StartWith",
          "type": "sentence",
          "cells": [
            {
              "key": "starting",
              "default": "11",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "+= {operand}",
          "key": "Add",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "*= {multiplier}",
          "key": "MultiplyBy",
          "type": "sentence",
          "cells": [
            {
              "key": "multiplier",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Value should be {expected}",
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "expected",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "children": [
            {
              "format": "The number should start with {starting}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "starting",
                  "default": "11",
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "+= {operand}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "operand",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "*= {multiplier}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "multiplier",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "Value should be {expected}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "expected",
                  "default": null,
                  "header": null,
                  "output": true,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            }
          ],
          "title": "Add and Multiply",
          "key": "AddAndMultiply",
          "type": "paragraph",
          "cells": [
            {
              "key": "starting",
              "default": "11",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "multiplier",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "expected",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "cells": [
            {
              "key": "starting",
              "default": "11",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "multiplier",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "expected",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "collection": "Rows",
          "title": "Add and Multiply in a Table",
          "key": "AddAndMultiplyTable",
          "type": "table",
          "errors": []
        },
        {
          "children": [
            {
              "format": "The number should start with {starting}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "starting",
                  "default": "11",
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "+= {operand}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "operand",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "*= {multiplier}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "multiplier",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "key": null,
              "type": "silent",
              "cells": [],
              "errors": []
            },
            {
              "format": "Value should be {expected}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "expected",
                  "default": null,
                  "header": null,
                  "output": true,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            }
          ],
          "title": "Add and Multiply",
          "key": "AddAndMultiplyThrow",
          "type": "paragraph",
          "cells": [
            {
              "key": "starting",
              "default": "11",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "multiplier",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "expected",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "-= {operand}",
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "collection": "operation",
          "title": "When adding numbers",
          "key": "AddTable",
          "type": "table",
          "errors": []
        },
        {
          "children": [
            {
              "format": "The number should start with {starting}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "starting",
                  "default": "11",
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "+= {operand}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "operand",
                  "default": null,
                  "header": null,
                  "output": false,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            },
            {
              "format": "Value should be {expected}",
              "key": null,
              "type": "sentence",
              "cells": [
                {
                  "key": "expected",
                  "default": null,
                  "header": null,
                  "output": true,
                  "editor": null,
                  "options": null
                }
              ],
              "errors": []
            }
          ],
          "title": "Add and check",
          "key": "AddAndCheck",
          "type": "paragraph",
          "cells": [
            {
              "key": "starting",
              "default": "11",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "expected",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Throw()",
          "key": "Throw",
          "type": "sentence",
          "cells": [],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Embedded",
      "key": "Embedded",
      "implementation": "StoryTeller.Samples.Fixtures.EmbeddedFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "fixture": {
            "title": "Math",
            "key": "Math",
            "implementation": "StoryTeller.Samples.Fixtures.MathFixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "key": "message",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Adding {x} to {y} should be {returnValue}",
                "key": "Adding",
                "type": "sentence",
                "cells": [
                  {
                    "key": "x",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "y",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "returnValue",
                    "default": "NULL",
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Adding {x} to 5 should be {returnValue}",
                "key": "AddTo5",
                "type": "sentence",
                "cells": [
                  {
                    "key": "x",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "returnValue",
                    "default": "NULL",
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "The number should start with {starting}",
                "key": "StartWith",
                "type": "sentence",
                "cells": [
                  {
                    "key": "starting",
                    "default": "11",
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "*= {multiplier}",
                "key": "MultiplyBy",
                "type": "sentence",
                "cells": [
                  {
                    "key": "multiplier",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "-= {operand}",
                "key": "Subtract",
                "type": "sentence",
                "cells": [
                  {
                    "key": "operand",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "+= {operand}",
                "key": "Add",
                "type": "sentence",
                "cells": [
                  {
                    "key": "operand",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Value should be {expected}",
                "key": "TheValueShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "key": "expected",
                    "default": null,
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "cells": [
                  {
                    "key": "x",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "y",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "sum",
                    "default": null,
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "collection": "operation",
                "title": "When adding numbers",
                "key": "AddTable",
                "type": "table",
                "errors": []
              },
              {
                "children": [
                  {
                    "format": "The number should start with {starting}",
                    "key": null,
                    "type": "sentence",
                    "cells": [
                      {
                        "key": "starting",
                        "default": "11",
                        "header": null,
                        "output": false,
                        "editor": null,
                        "options": null
                      }
                    ],
                    "errors": []
                  },
                  {
                    "format": "+= {operand}",
                    "key": null,
                    "type": "sentence",
                    "cells": [
                      {
                        "key": "operand",
                        "default": null,
                        "header": null,
                        "output": false,
                        "editor": null,
                        "options": null
                      }
                    ],
                    "errors": []
                  },
                  {
                    "format": "Value should be {expected}",
                    "key": null,
                    "type": "sentence",
                    "cells": [
                      {
                        "key": "expected",
                        "default": null,
                        "header": null,
                        "output": true,
                        "editor": null,
                        "options": null
                      }
                    ],
                    "errors": []
                  }
                ],
                "title": "Add and check",
                "key": "AddAndCheck",
                "type": "paragraph",
                "cells": [
                  {
                    "key": "starting",
                    "default": "11",
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "operand",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "expected",
                    "default": null,
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Throw()",
                "key": "Throw",
                "type": "sentence",
                "cells": [],
                "errors": []
              }
            ],
            "type": "fixture",
            "errors": []
          },
          "title": "Do some Math",
          "collection": "Math",
          "key": "EmbeddedMath",
          "type": "embedded-section",
          "errors": []
        },
        {
          "format": "ThrowAnExceptionOnTheNextEmbed()",
          "key": "ThrowAnExceptionOnTheNextEmbed",
          "type": "sentence",
          "cells": [],
          "errors": []
        },
        {
          "format": "DoNotThrowAnExceptionOnTheNextEmbed()",
          "key": "DoNotThrowAnExceptionOnTheNextEmbed",
          "type": "sentence",
          "cells": [],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": null,
      "key": "Failure",
      "implementation": "StoryTeller.Samples.Fixtures.FailureFixture",
      "grammars": [],
      "type": "fixture",
      "errors": [
        {
          "message": "Fixture StoryTeller.Samples.Fixtures.FailureFixture could not be loaded",
          "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.Exception: This fixture ctor blew up\r\n   at StoryTeller.Samples.Fixtures.FailureFixture..ctor() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\FailureFixture.cs:line 9\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeTypeHandle.CreateInstance(RuntimeType type, Boolean publicOnly, Boolean noCheck, Boolean& canBeCached, RuntimeMethodHandleInternal& ctor, Boolean& bNeedSecurityCheck)\r\n   at System.RuntimeType.CreateInstanceSlow(Boolean publicOnly, Boolean skipCheckThis, Boolean fillCache, StackCrawlMark& stackMark)\r\n   at System.RuntimeType.CreateInstanceDefaultCtor(Boolean publicOnly, Boolean skipCheckThis, Boolean fillCache, StackCrawlMark& stackMark)\r\n   at System.Activator.CreateInstance(Type type, Boolean nonPublic)\r\n   at System.Activator.CreateInstance(Type type)\r\n   at StoryTeller.Model.FixtureLibrary.CreateCompiledFixture(CellHandling cellHandling, Type type) in z:\\code\\storyteller\\src\\StoryTeller\\Model\\FixtureLibrary.cs:line 126"
        }
      ]
    },
    {
      "title": "Grammar Error",
      "key": "GrammarError",
      "implementation": "StoryTeller.Samples.Fixtures.GrammarErrorFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "key": "Bad",
          "type": "error",
          "IsHidden": false,
          "Key": "Bad",
          "errors": [
            {
              "message": null,
              "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.DivideByZeroException: Attempted to divide by zero.\r\n   at StoryTeller.Samples.Fixtures.GrammarErrorFixture.Bad() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\FailureFixture.cs:line 17\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.ProgrammaticGrammarBuilder.Build(MethodInfo method, Fixture fixture) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\GrammarBuilder.cs:line 68\r\n   at StoryTeller.Grammars.GrammarBuilder.BuildGrammar(MethodInfo method, Fixture fixture) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\GrammarBuilder.cs:line 35"
            }
          ]
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Selection List",
      "key": "SelectionList",
      "implementation": "StoryTeller.Samples.Fixtures.SelectionListFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "cells": [
            {
              "key": "First",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Last",
              "default": null,
              "header": null,
              "output": false,
              "editor": "select",
              "options": [
                {
                  "display": "surname",
                  "value": "surname"
                }
              ]
            },
            {
              "key": "Fullname",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "collection": "table",
          "title": "The names should be",
          "key": "names",
          "type": "table",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "first",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "last",
              "default": null,
              "header": null,
              "output": false,
              "editor": "select",
              "options": [
                {
                  "display": "surname",
                  "value": "surname"
                }
              ]
            },
            {
              "key": "fullname",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "collection": "table",
          "title": "The names are",
          "key": "FirstAndLastName",
          "type": "table",
          "errors": []
        },
        {
          "format": "{first} {last} should be formatted as {fullname}",
          "key": "TheNameIs",
          "type": "sentence",
          "cells": [
            {
              "key": "first",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "last",
              "default": null,
              "header": null,
              "output": false,
              "editor": "select",
              "options": [
                {
                  "display": "surname",
                  "value": "surname"
                }
              ]
            },
            {
              "key": "fullname",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The Enum value of {option} should be {selectedOption}",
          "key": "TheEnumOptionIs",
          "type": "sentence",
          "cells": [
            {
              "key": "option",
              "default": "SecondOption",
              "header": null,
              "output": false,
              "editor": "select",
              "options": [
                {
                  "display": "FirstOption",
                  "value": "FirstOption"
                },
                {
                  "display": "SecondOption",
                  "value": "SecondOption"
                }
              ]
            },
            {
              "key": "selectedOption",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Simple",
      "key": "Simple",
      "implementation": "StoryTeller.Samples.Fixtures.SimpleFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "A()",
          "key": "A",
          "type": "sentence",
          "cells": [],
          "errors": []
        },
        {
          "format": "B()",
          "key": "B",
          "type": "sentence",
          "cells": [],
          "errors": []
        },
        {
          "format": "C()",
          "key": "C",
          "type": "sentence",
          "cells": [],
          "errors": []
        },
        {
          "format": "D()",
          "key": "D",
          "type": "sentence",
          "cells": [],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Embedded Choices",
      "key": "EmbeddedChoices",
      "implementation": "StoryTeller.Samples.Fixtures.EmbeddedChoicesFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "fixture": {
            "title": "Simple",
            "key": "Simple",
            "implementation": "StoryTeller.Samples.Fixtures.SimpleFixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "key": "message",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "A()",
                "key": "A",
                "type": "sentence",
                "cells": [],
                "errors": []
              },
              {
                "format": "B()",
                "key": "B",
                "type": "sentence",
                "cells": [],
                "errors": []
              },
              {
                "format": "C()",
                "key": "C",
                "type": "sentence",
                "cells": [],
                "errors": []
              },
              {
                "format": "D()",
                "key": "D",
                "type": "sentence",
                "cells": [],
                "errors": []
              }
            ],
            "type": "fixture",
            "errors": []
          },
          "title": "simple",
          "collection": "Simple",
          "key": "Simple",
          "type": "embedded-section",
          "errors": []
        },
        {
          "fixture": {
            "title": "Sentence Grammars",
            "key": "SingleSelection",
            "implementation": "StoryTeller.Samples.Fixtures.SingleSelectionFixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "key": "message",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "This fact is always true",
                "key": "ThisFactIsTrue",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "This fact is always false",
                "key": "ThisFactIsFalse",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "This fact throws an exception",
                "key": "ThisFactThrowsException",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "{one is better than {two",
                "key": "BadGrammar",
                "type": "sentence",
                "cells": [
                  {
                    "key": "one",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "two",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Start with the number {number}",
                "key": "StartWithTheNumber",
                "type": "sentence",
                "cells": [
                  {
                    "key": "number",
                    "default": "5",
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Multiply by {multiplier} then add {delta}",
                "key": "MultiplyThenAdd",
                "type": "sentence",
                "cells": [
                  {
                    "key": "multiplier",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "delta",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Subtract({operand})",
                "key": "Subtract",
                "type": "sentence",
                "cells": [
                  {
                    "key": "operand",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "DivideBy({operand})",
                "key": "DivideBy",
                "type": "sentence",
                "cells": [
                  {
                    "key": "operand",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "The number should now be {number}",
                "key": "TheValueShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "key": "number",
                    "default": null,
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "The sum of {number1} and {number2} should be {sum}",
                "key": "TheSumOf",
                "type": "sentence",
                "cells": [
                  {
                    "key": "number1",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "number2",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "sum",
                    "default": "NULL",
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "ThisLineAlwaysThrowsExceptions()",
                "key": "ThisLineAlwaysThrowsExceptions",
                "type": "sentence",
                "cells": [],
                "errors": []
              },
              {
                "format": "This line is always true",
                "key": "ThisLineIsAlwaysTrue",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "This line is always false",
                "key": "ThisLineIsAlwaysFalse",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "{x} + {y} should be {sum}",
                "key": "XplusYShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "key": "x",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "y",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "sum",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Incomplete format",
                "key": "BadSentence",
                "type": "sentence",
                "cells": [
                  {
                    "key": "name",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              }
            ],
            "type": "fixture",
            "errors": []
          },
          "title": "single",
          "collection": "SingleSelection",
          "key": "Single",
          "type": "embedded-section",
          "errors": []
        },
        {
          "fixture": {
            "title": "Simple",
            "key": "Simple",
            "implementation": "StoryTeller.Samples.Fixtures.SimpleFixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "key": "message",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "A()",
                "key": "A",
                "type": "sentence",
                "cells": [],
                "errors": []
              },
              {
                "format": "B()",
                "key": "B",
                "type": "sentence",
                "cells": [],
                "errors": []
              },
              {
                "format": "C()",
                "key": "C",
                "type": "sentence",
                "cells": [],
                "errors": []
              },
              {
                "format": "D()",
                "key": "D",
                "type": "sentence",
                "cells": [],
                "errors": []
              }
            ],
            "type": "fixture",
            "errors": []
          },
          "title": "simple",
          "collection": "Simple",
          "key": "Inline",
          "type": "embedded-section",
          "errors": []
        },
        {
          "fixture": {
            "title": "Sentence Grammars",
            "key": "MandatorySelection",
            "implementation": "StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "key": "message",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "This fact is always true",
                "key": "ThisFactIsTrue",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "This fact is always false",
                "key": "ThisFactIsFalse",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "This fact throws an exception",
                "key": "ThisFactThrowsException",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "{one is better than {two",
                "key": "BadGrammar",
                "type": "sentence",
                "cells": [
                  {
                    "key": "one",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "two",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Start with the number {number}",
                "key": "StartWithTheNumber",
                "type": "sentence",
                "cells": [
                  {
                    "key": "number",
                    "default": "5",
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Multiply by {multiplier} then add {delta}",
                "key": "MultiplyThenAdd",
                "type": "sentence",
                "cells": [
                  {
                    "key": "multiplier",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "delta",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Subtract({operand})",
                "key": "Subtract",
                "type": "sentence",
                "cells": [
                  {
                    "key": "operand",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "DivideBy({operand})",
                "key": "DivideBy",
                "type": "sentence",
                "cells": [
                  {
                    "key": "operand",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "The number should now be {number}",
                "key": "TheValueShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "key": "number",
                    "default": null,
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "The sum of {number1} and {number2} should be {sum}",
                "key": "TheSumOf",
                "type": "sentence",
                "cells": [
                  {
                    "key": "number1",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "number2",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "sum",
                    "default": "NULL",
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "ThisLineAlwaysThrowsExceptions()",
                "key": "ThisLineAlwaysThrowsExceptions",
                "type": "sentence",
                "cells": [],
                "errors": []
              },
              {
                "format": "This line is always true",
                "key": "ThisLineIsAlwaysTrue",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "This line is always false",
                "key": "ThisLineIsAlwaysFalse",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "{x} + {y} should be {sum}",
                "key": "XplusYShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "key": "x",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "y",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "sum",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Incomplete format",
                "key": "BadSentence",
                "type": "sentence",
                "cells": [
                  {
                    "key": "name",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              }
            ],
            "type": "fixture",
            "errors": []
          },
          "title": "mandatory",
          "collection": "MandatorySelection",
          "key": "MandatorySelection",
          "type": "embedded-section",
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Sentence Grammars",
      "key": "Sentence",
      "implementation": "StoryTeller.Samples.Fixtures.SentenceFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "This fact is always true",
          "key": "ThisFactIsTrue",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact is always false",
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact throws an exception",
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "{one is better than {two",
          "key": "BadGrammar",
          "type": "sentence",
          "cells": [
            {
              "key": "one",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "two",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Start with the number {number}",
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
              "default": "5",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Multiply by {multiplier} then add {delta}",
          "key": "MultiplyThenAdd",
          "type": "sentence",
          "cells": [
            {
              "key": "multiplier",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "delta",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Subtract({operand})",
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "DivideBy({operand})",
          "key": "DivideBy",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The number should now be {number}",
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The sum of {number1} and {number2} should be {sum}",
          "key": "TheSumOf",
          "type": "sentence",
          "cells": [
            {
              "key": "number1",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "number2",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "ThisLineAlwaysThrowsExceptions()",
          "key": "ThisLineAlwaysThrowsExceptions",
          "type": "sentence",
          "cells": [],
          "errors": []
        },
        {
          "format": "This line is always true",
          "key": "ThisLineIsAlwaysTrue",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This line is always false",
          "key": "ThisLineIsAlwaysFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "{x} + {y} should be {sum}",
          "key": "XplusYShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Incomplete format",
          "key": "BadSentence",
          "type": "sentence",
          "cells": [
            {
              "key": "name",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Sentence Grammars",
      "key": "SingleSelection",
      "implementation": "StoryTeller.Samples.Fixtures.SingleSelectionFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "This fact is always true",
          "key": "ThisFactIsTrue",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact is always false",
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact throws an exception",
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "{one is better than {two",
          "key": "BadGrammar",
          "type": "sentence",
          "cells": [
            {
              "key": "one",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "two",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Start with the number {number}",
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
              "default": "5",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Multiply by {multiplier} then add {delta}",
          "key": "MultiplyThenAdd",
          "type": "sentence",
          "cells": [
            {
              "key": "multiplier",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "delta",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Subtract({operand})",
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "DivideBy({operand})",
          "key": "DivideBy",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The number should now be {number}",
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The sum of {number1} and {number2} should be {sum}",
          "key": "TheSumOf",
          "type": "sentence",
          "cells": [
            {
              "key": "number1",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "number2",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "ThisLineAlwaysThrowsExceptions()",
          "key": "ThisLineAlwaysThrowsExceptions",
          "type": "sentence",
          "cells": [],
          "errors": []
        },
        {
          "format": "This line is always true",
          "key": "ThisLineIsAlwaysTrue",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This line is always false",
          "key": "ThisLineIsAlwaysFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "{x} + {y} should be {sum}",
          "key": "XplusYShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Incomplete format",
          "key": "BadSentence",
          "type": "sentence",
          "cells": [
            {
              "key": "name",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Sentence Grammars",
      "key": "OneOrMoreSelection",
      "implementation": "StoryTeller.Samples.Fixtures.OneOrMoreSelectionFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "This fact is always true",
          "key": "ThisFactIsTrue",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact is always false",
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact throws an exception",
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "{one is better than {two",
          "key": "BadGrammar",
          "type": "sentence",
          "cells": [
            {
              "key": "one",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "two",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Start with the number {number}",
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
              "default": "5",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Multiply by {multiplier} then add {delta}",
          "key": "MultiplyThenAdd",
          "type": "sentence",
          "cells": [
            {
              "key": "multiplier",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "delta",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Subtract({operand})",
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "DivideBy({operand})",
          "key": "DivideBy",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The number should now be {number}",
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The sum of {number1} and {number2} should be {sum}",
          "key": "TheSumOf",
          "type": "sentence",
          "cells": [
            {
              "key": "number1",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "number2",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "ThisLineAlwaysThrowsExceptions()",
          "key": "ThisLineAlwaysThrowsExceptions",
          "type": "sentence",
          "cells": [],
          "errors": []
        },
        {
          "format": "This line is always true",
          "key": "ThisLineIsAlwaysTrue",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This line is always false",
          "key": "ThisLineIsAlwaysFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "{x} + {y} should be {sum}",
          "key": "XplusYShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Incomplete format",
          "key": "BadSentence",
          "type": "sentence",
          "cells": [
            {
              "key": "name",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Sentence Grammars",
      "key": "MandatorySelection",
      "implementation": "StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "This fact is always true",
          "key": "ThisFactIsTrue",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact is always false",
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact throws an exception",
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "{one is better than {two",
          "key": "BadGrammar",
          "type": "sentence",
          "cells": [
            {
              "key": "one",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "two",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Start with the number {number}",
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
              "default": "5",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Multiply by {multiplier} then add {delta}",
          "key": "MultiplyThenAdd",
          "type": "sentence",
          "cells": [
            {
              "key": "multiplier",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "delta",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Subtract({operand})",
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "DivideBy({operand})",
          "key": "DivideBy",
          "type": "sentence",
          "cells": [
            {
              "key": "operand",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The number should now be {number}",
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The sum of {number1} and {number2} should be {sum}",
          "key": "TheSumOf",
          "type": "sentence",
          "cells": [
            {
              "key": "number1",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "number2",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "ThisLineAlwaysThrowsExceptions()",
          "key": "ThisLineAlwaysThrowsExceptions",
          "type": "sentence",
          "cells": [],
          "errors": []
        },
        {
          "format": "This line is always true",
          "key": "ThisLineIsAlwaysTrue",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This line is always false",
          "key": "ThisLineIsAlwaysFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "{x} + {y} should be {sum}",
          "key": "XplusYShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Incomplete format",
          "key": "BadSentence",
          "type": "sentence",
          "cells": [
            {
              "key": "name",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Set Verification with DataTable's",
      "key": "DataTable",
      "implementation": "StoryTeller.Samples.Fixtures.DataTableFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "cells": [
            {
              "key": "firstName",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "lastName",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "Rows",
          "title": "If the data is",
          "key": "TheDataIs",
          "type": "table",
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Sets",
      "key": "Sets",
      "implementation": "StoryTeller.Samples.Fixtures.SetsFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "cells": [
            {
              "key": "expected",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "Rows",
          "ordered": true,
          "title": "The names in order should be",
          "key": "OrderedStringSet",
          "type": "set-verification",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "expected",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "Rows",
          "ordered": false,
          "title": "The names in no order should be",
          "key": "UnorderedStringSet",
          "type": "set-verification",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "Amount",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Date",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Name",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "Rows",
          "title": "The InvoiceDetails are",
          "key": "InvoiceDetailsAre",
          "type": "table",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "Amount",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Date",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Name",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "rows",
          "ordered": false,
          "title": "The unordered details should be",
          "key": "UnorderedDetailsAre",
          "type": "set-verification",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "Amount",
              "default": "100",
              "header": "The Amount",
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Date",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "Name",
              "default": null,
              "header": "The Name",
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "rows",
          "ordered": true,
          "title": "The Ordered details should be",
          "key": "OrderedDetailsAre",
          "type": "set-verification",
          "errors": []
        },
        {
          "format": "AddName({name})",
          "key": "AddName",
          "type": "sentence",
          "cells": [
            {
              "key": "name",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "cells": [
            {
              "key": "name",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "name",
          "title": "The data is",
          "key": "TheDataIs",
          "type": "table",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "Name",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "rows",
          "ordered": false,
          "title": "Verify Set of InvoiceDetail",
          "key": "ThrowsErrorOnDataFetch",
          "type": "set-verification",
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Table",
      "key": "Table",
      "implementation": "StoryTeller.Samples.Fixtures.TableFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "cells": [
            {
              "key": "FirstName",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "LastName",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "FullName",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            },
            {
              "key": "LastNameFirst",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "collection": "table",
          "title": "decisions",
          "key": "decisions",
          "type": "table",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "sum",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "collection": "sum",
          "title": "Adding numbers together",
          "key": "Sum",
          "type": "table",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "product",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "collection": "Rows",
          "title": "Subtract numbers",
          "key": "Divide",
          "type": "table",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "Rows",
          "title": "Throw error on the Before",
          "key": "BeforeThrowsError",
          "type": "table",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "x",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "Rows",
          "title": "Throw error on the After",
          "key": "AfterThrowsError",
          "type": "table",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "a",
              "default": null,
              "header": "A",
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "b",
              "default": "2",
              "header": "B",
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "c",
              "default": "3",
              "header": "C",
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "d",
              "default": "4",
              "header": "D",
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "e",
              "default": "5",
              "header": "E",
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "collection": "table",
          "title": "Table with lots of options",
          "key": "TableWithLotsOfOptions",
          "type": "table",
          "errors": []
        },
        {
          "cells": [
            {
              "key": "number",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "IsEven",
              "default": "true",
              "header": null,
              "output": true,
              "editor": "boolean",
              "options": null
            }
          ],
          "collection": "table",
          "title": "Is Positive?",
          "key": "IsPositive",
          "type": "table",
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Curried Math",
      "key": "CurriedMath",
      "implementation": "StoryTeller.Samples.Fixtures.CurriedMathFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "The number should start with {starting}",
          "key": "StartWith",
          "type": "sentence",
          "cells": [
            {
              "key": "starting",
              "default": "11",
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Add 5",
          "key": "Add5",
          "type": "sentence",
          "cells": [],
          "errors": []
        },
        {
          "format": "Adding {y} to 5 should be {returnValue}",
          "key": "AddingTo5",
          "type": "sentence",
          "cells": [
            {
              "key": "y",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            },
            {
              "key": "returnValue",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "format": "Value should be {expected}",
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "key": "expected",
              "default": null,
              "header": null,
              "output": true,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    },
    {
      "title": "Do Some Math",
      "key": "DoSomeMath",
      "implementation": "StoryTeller.Samples.Fixtures.DoSomeMathFixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "key": "message",
              "default": null,
              "header": null,
              "output": false,
              "editor": null,
              "options": null
            }
          ],
          "errors": []
        },
        {
          "fixture": {
            "title": "Math",
            "key": "Math",
            "implementation": "StoryTeller.Samples.Fixtures.MathFixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "key": "message",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Adding {x} to {y} should be {returnValue}",
                "key": "Adding",
                "type": "sentence",
                "cells": [
                  {
                    "key": "x",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "y",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "returnValue",
                    "default": "NULL",
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Adding {x} to 5 should be {returnValue}",
                "key": "AddTo5",
                "type": "sentence",
                "cells": [
                  {
                    "key": "x",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "returnValue",
                    "default": "NULL",
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "The number should start with {starting}",
                "key": "StartWith",
                "type": "sentence",
                "cells": [
                  {
                    "key": "starting",
                    "default": "11",
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "*= {multiplier}",
                "key": "MultiplyBy",
                "type": "sentence",
                "cells": [
                  {
                    "key": "multiplier",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "-= {operand}",
                "key": "Subtract",
                "type": "sentence",
                "cells": [
                  {
                    "key": "operand",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "+= {operand}",
                "key": "Add",
                "type": "sentence",
                "cells": [
                  {
                    "key": "operand",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Value should be {expected}",
                "key": "TheValueShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "key": "expected",
                    "default": null,
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "cells": [
                  {
                    "key": "x",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "y",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "sum",
                    "default": null,
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "collection": "operation",
                "title": "When adding numbers",
                "key": "AddTable",
                "type": "table",
                "errors": []
              },
              {
                "children": [
                  {
                    "format": "The number should start with {starting}",
                    "key": null,
                    "type": "sentence",
                    "cells": [
                      {
                        "key": "starting",
                        "default": "11",
                        "header": null,
                        "output": false,
                        "editor": null,
                        "options": null
                      }
                    ],
                    "errors": []
                  },
                  {
                    "format": "+= {operand}",
                    "key": null,
                    "type": "sentence",
                    "cells": [
                      {
                        "key": "operand",
                        "default": null,
                        "header": null,
                        "output": false,
                        "editor": null,
                        "options": null
                      }
                    ],
                    "errors": []
                  },
                  {
                    "format": "Value should be {expected}",
                    "key": null,
                    "type": "sentence",
                    "cells": [
                      {
                        "key": "expected",
                        "default": null,
                        "header": null,
                        "output": true,
                        "editor": null,
                        "options": null
                      }
                    ],
                    "errors": []
                  }
                ],
                "title": "Add and check",
                "key": "AddAndCheck",
                "type": "paragraph",
                "cells": [
                  {
                    "key": "starting",
                    "default": "11",
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "operand",
                    "default": null,
                    "header": null,
                    "output": false,
                    "editor": null,
                    "options": null
                  },
                  {
                    "key": "expected",
                    "default": null,
                    "header": null,
                    "output": true,
                    "editor": null,
                    "options": null
                  }
                ],
                "errors": []
              },
              {
                "format": "Throw()",
                "key": "Throw",
                "type": "sentence",
                "cells": [],
                "errors": []
              }
            ],
            "type": "fixture",
            "errors": []
          },
          "title": "Now do some math",
          "collection": "Math",
          "key": "DoSomeMath",
          "type": "embedded-section",
          "errors": []
        }
      ],
      "type": "fixture",
      "errors": []
    }
  ],
  "specs": {
    "embeds": {
      "title": "Embeds",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Regression",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, July 17, 2015",
      "steps": [
        {
          "key": "Embedded",
          "type": "section",
          "steps": [
            {
              "key": "ThrowAnExceptionOnTheNextEmbed",
              "cells": {},
              "collections": [],
              "id": "5ba14e9c-2299-494c-80ef-c48e8e8f8273"
            },
            {
              "key": "EmbeddedMath",
              "cells": {},
              "collections": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "5",
                        "y": "5",
                        "returnValue": "10"
                      },
                      "collections": [],
                      "id": "cb137641-e998-48e1-9ef1-f132f0dee704"
                    }
                  ],
                  "activeCells": {},
                  "id": "errors"
                }
              ],
              "id": "cfef7b5e-1c30-4b67-9b1c-c87c1ebfc185"
            },
            {
              "key": "DoNotThrowAnExceptionOnTheNextEmbed",
              "cells": {},
              "collections": [],
              "id": "9241a5bb-b9b8-4d4e-ab84-f27fee805cef"
            },
            {
              "key": "EmbeddedMath",
              "cells": {},
              "collections": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "5",
                        "y": "4",
                        "returnValue": "9"
                      },
                      "collections": [],
                      "id": "4aab03b0-0a69-4f8b-92f5-ee508ccaf315"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "5",
                        "y": "5",
                        "returnValue": "11"
                      },
                      "collections": [],
                      "id": "92c9fdfb-fcdc-4b4b-b7c0-8bb15cba9fff"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "5",
                        "y": "6",
                        "returnValue": "abc"
                      },
                      "collections": [],
                      "id": "b3a09ec8-e82e-4c8c-8b74-4683af1eee52"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "787b169a-eb02-4a09-b3f4-3f70a741c50d"
                    }
                  ],
                  "activeCells": {},
                  "id": "no-errors"
                }
              ],
              "id": "78d09265-b13b-4f7b-aeec-83181ddb5558"
            }
          ],
          "activeCells": {},
          "id": "b1d704cf-6062-40c1-be78-94a8aa901850"
        }
      ],
      "id": "embeds"
    },
    "general1": {
      "title": "Check properties",
      "path": null,
      "max-retries": 3,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "CheckObject",
          "type": "section",
          "steps": [
            {
              "key": "IfTheAddressIs",
              "cells": {
                "Address1": "2035 Ozark",
                "Address2": "Apt 3",
                "City": "Carthage",
                "StateOrProvince": "MO",
                "Country": "USA",
                "PostalCode": "70071"
              },
              "collections": [],
              "id": "6d15c27d-d5c3-4fbb-a4e6-1bd75157a30f"
            },
            {
              "key": "TheAddressShouldBe",
              "cells": {
                "Address1": "2035 Ozark",
                "Address2": "Apt 3",
                "City": "Carthage"
              },
              "collections": [],
              "id": "48a7daa1-f470-4de4-923c-a87b3eb3608e"
            },
            {
              "key": "TheAddressShouldBe",
              "cells": {
                "Address1": "wrong",
                "Address2": "wrong",
                "City": "wrong"
              },
              "collections": [],
              "id": "5c9de79b-30c1-429a-88ca-39c90c24d862"
            }
          ],
          "activeCells": {},
          "id": "1250e939-4c9c-4db1-bafd-aac072c7882e"
        }
      ],
      "id": "general1"
    },
    "SometimesSlow": {
      "title": "Occasionally Times Out",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "SometimesSlow",
          "type": "section",
          "steps": [
            {
              "text": "If in the 'slow' profile, this grammar will run for a minute",
              "type": "comment",
              "id": "5d0a8e4a-0695-4123-8e85-11350ee10e7d"
            },
            {
              "key": "Slow",
              "cells": {},
              "collections": [],
              "id": "a5c8c5f6-3f7a-4023-982a-aed23806bf72"
            }
          ],
          "activeCells": {},
          "id": "8830a9be-79c5-4152-812a-8222ce399c76"
        }
      ],
      "id": "SometimesSlow"
    },
    "general2": {
      "title": "Selection List Values",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "SelectionList",
          "type": "section",
          "steps": [
            {
              "key": "TheNameIs",
              "cells": {
                "first": "Jeremy",
                "last": "Smith",
                "fullname": "Jeremy Smith"
              },
              "collections": [],
              "id": "e2ed224b-d98f-4976-a782-d6d42c85e6d2"
            },
            {
              "key": "FirstAndLastName",
              "cells": {},
              "collections": [
                {
                  "key": "table",
                  "type": "section",
                  "steps": [
                    {
                      "key": "table",
                      "cells": {
                        "first": "Hank",
                        "last": "Miller",
                        "fullname": "Hank Miller"
                      },
                      "collections": [],
                      "id": "8e383e95-8eb2-4f51-8542-8219f08ba899"
                    },
                    {
                      "key": "table",
                      "cells": {
                        "first": "Harold",
                        "last": "Miller",
                        "fullname": "Harold Mueller"
                      },
                      "collections": [],
                      "id": "7251729b-45cb-497b-a57c-45dbd380ae12"
                    }
                  ],
                  "activeCells": {},
                  "id": "bff9deb5-42f2-4779-a275-df3f1260353d"
                }
              ],
              "id": "331611a6-52b4-449b-bda3-9ee05bf2f9fe"
            },
            {
              "key": "names",
              "cells": {},
              "collections": [
                {
                  "key": "table",
                  "type": "section",
                  "steps": [
                    {
                      "key": "table",
                      "cells": {
                        "First": "Tobin",
                        "Last": "Smith",
                        "Fullname": "Tobin Smith"
                      },
                      "collections": [],
                      "id": "b0652ec4-5808-453e-8a1d-c43f8e9bd4be"
                    }
                  ],
                  "activeCells": {},
                  "id": "6d990e2e-1651-4439-984d-2fcf5456ed65"
                }
              ],
              "id": "1a680b17-389c-4b4f-b4d3-cb13cf771aaf"
            },
            {
              "key": "TheEnumOptionIs",
              "cells": {
                "option": "FirstOption",
                "selectedOption": "0"
              },
              "collections": [],
              "id": "33afb323-82ff-4ed4-bc4e-453f7322fbc7"
            }
          ],
          "activeCells": {},
          "id": "dfbaf1e0-8213-4924-a5e2-f7a71d4d23ad"
        }
      ],
      "id": "general2"
    },
    "general3": {
      "title": "Services",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Service",
          "type": "section",
          "steps": [
            {
              "key": "Set",
              "cells": {
                "value": "5"
              },
              "collections": [],
              "id": "20e28523-67a1-4ecf-a8fc-554642389675"
            },
            {
              "key": "Check",
              "cells": {
                "value": "5"
              },
              "collections": [],
              "id": "48ac4697-f4ed-4f75-9a1d-9b1ca059e1cc"
            },
            {
              "key": "Set",
              "cells": {
                "value": "6"
              },
              "collections": [],
              "id": "98343b1d-c432-49ef-bd99-37db9543847e"
            },
            {
              "key": "Check",
              "cells": {
                "value": "7"
              },
              "collections": [],
              "id": "b83a86c7-1a00-4dbb-ae91-4b74ece4877f"
            },
            {
              "key": "Set",
              "cells": {
                "value": "abc"
              },
              "collections": [],
              "id": "9c086c23-03ed-4985-aa71-f5da7ae9f9a2"
            }
          ],
          "activeCells": {},
          "id": "548fc6bc-04c6-423d-8388-055656753302"
        }
      ],
      "id": "general3"
    },
    "runtime-converter": {
      "title": "System Defined Lists and Runtime Converters",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Player",
          "type": "section",
          "steps": [
            {
              "text": "Player is a custom type that is read by a runtime conversion. The \"Position\" cell option list is defined at the System level",
              "type": "comment",
              "id": "049651e9-c257-4330-a2bc-22a6e1ee1e6f"
            },
            {
              "key": "PositionIs",
              "cells": {},
              "collections": [
                {
                  "key": "table",
                  "type": "section",
                  "steps": [
                    {
                      "key": "PositionIs-row",
                      "cells": {
                        "Player": "Justin Houston",
                        "Position": "LB"
                      },
                      "collections": [],
                      "id": "3ccc86f7-b71f-4a85-a4a4-f89157e043f8"
                    }
                  ],
                  "activeCells": {},
                  "id": "2e87da8f-d2bb-45a0-a375-39e38e3f9564"
                }
              ],
              "id": "5af7c6f9-b28e-4bdc-a5d3-fb928445d83e"
            }
          ],
          "activeCells": {},
          "id": "1951ced7-28f8-4bb3-a7fb-34973aef82f9"
        }
      ],
      "id": "runtime-converter"
    },
    "general4": {
      "title": "Test with Bad Grammar Name",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Math",
          "type": "section",
          "steps": [
            {
              "key": "BadGrammar1",
              "cells": {},
              "collections": [],
              "id": "62fcf9e0-a4fd-40e2-b8e8-c46574b2a0e1"
            },
            {
              "key": "BadGrammar2",
              "cells": {},
              "collections": [],
              "id": "9c6bcf7d-c5f4-40ac-b744-e874ab4fbfa3"
            },
            {
              "key": "BadGrammar3",
              "cells": {},
              "collections": [],
              "id": "67896a9b-114d-400b-890c-fad57d285428"
            }
          ],
          "activeCells": {},
          "id": "488739bf-9cf0-494b-bf5d-75afc3d0cc2a"
        }
      ],
      "id": "general4"
    },
    "general5": {
      "title": "Test with Missing Fixture Name",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "FixtureThatDoesNotExist",
          "type": "section",
          "steps": [],
          "activeCells": {},
          "id": "1"
        }
      ],
      "id": "general5"
    },
    "paragraph1": {
      "title": "Composite with Errors",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Regression",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Composite",
          "type": "section",
          "steps": [
            {
              "key": "AddAndMultiply",
              "cells": {
                "starting": "5",
                "operand": "aaa",
                "multiplier": "10",
                "expected": "80"
              },
              "collections": [],
              "id": "d54ce916-3ebc-4d87-9666-2795881b808f"
            },
            {
              "key": "AddAndMultiplyTable",
              "cells": {},
              "collections": [
                {
                  "key": "Rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "starting": "bbb",
                        "operand": "4",
                        "multiplier": "10",
                        "expected": "25"
                      },
                      "collections": [],
                      "id": "4dcb5b9c-f96f-4a40-b512-c76a9b13ee30"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "starting": "5",
                        "operand": "3",
                        "multiplier": "10",
                        "expected": "80"
                      },
                      "collections": [],
                      "id": "b8f1f4e8-6c85-40bd-a147-6feee72d8403"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "starting": "5",
                        "operand": "3",
                        "multiplier": "10",
                        "expected": "77"
                      },
                      "collections": [],
                      "id": "66747348-5150-4b77-b93c-9c36820ae2d6"
                    }
                  ],
                  "activeCells": {},
                  "id": "b8b492ee-f9f3-4399-b5c6-6cead203b76f"
                }
              ],
              "id": "b188a00a-2eb1-452f-8c4c-e142a39a5b3d"
            },
            {
              "key": "AddAndMultiplyThrow",
              "cells": {
                "starting": "3",
                "operand": "2",
                "multiplier": "4",
                "expected": "20"
              },
              "collections": [],
              "id": "d5884a32-403b-4729-a329-e944ecc378b5"
            }
          ],
          "activeCells": {},
          "id": "4e63689e-7105-484c-8d9a-c5ef2742a392"
        }
      ],
      "id": "paragraph1"
    },
    "paragraph2": {
      "title": "Simple Composite",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Composite",
          "type": "section",
          "steps": [
            {
              "key": "AddAndMultiply",
              "cells": {
                "starting": "5",
                "operand": "3",
                "multiplier": "10",
                "expected": "80"
              },
              "collections": [],
              "id": "319032cb-b2b9-4378-856e-182e818b0710"
            },
            {
              "key": "AddAndMultiply",
              "cells": {
                "starting": "5",
                "operand": "3",
                "multiplier": "10",
                "expected": "77"
              },
              "collections": [],
              "id": "9b82f884-cd1c-42cd-aa0e-45f74a1dde2b"
            },
            {
              "key": "AddAndMultiplyTable",
              "cells": {},
              "collections": [
                {
                  "key": "Rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "starting": "3",
                        "operand": "4",
                        "multiplier": "10",
                        "expected": "25"
                      },
                      "collections": [],
                      "id": "d66d6e95-90d6-4d13-a8a4-66fed451019a"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "starting": "5",
                        "operand": "3",
                        "multiplier": "10",
                        "expected": "80"
                      },
                      "collections": [],
                      "id": "cd250097-dcbb-4d70-9587-d94fa99cf4de"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "starting": "5",
                        "operand": "3",
                        "multiplier": "10",
                        "expected": "77"
                      },
                      "collections": [],
                      "id": "4529d653-20b6-45dd-99c9-cbaa87da0640"
                    }
                  ],
                  "activeCells": {},
                  "id": "d6a5d738-9004-488a-9324-1b85bd1aca0c"
                }
              ],
              "id": "31069f89-a71c-4c89-ad67-b37111594e0c"
            }
          ],
          "activeCells": {},
          "id": "d8188f07-f4ab-44a6-be3e-e69b4633151f"
        }
      ],
      "id": "paragraph2"
    },
    "sentence1": {
      "title": "Currying",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Math",
          "type": "section",
          "steps": [
            {
              "key": "AddTo5",
              "cells": {
                "x": "3",
                "returnValue": "8",
                "y": "5"
              },
              "collections": [],
              "id": "0b6a5791-20b1-4abc-b638-607ad7604a3a"
            },
            {
              "key": "AddTo5",
              "cells": {
                "x": "5",
                "returnValue": "9",
                "y": "5"
              },
              "collections": [],
              "id": "571584f9-adb5-4b79-a086-bf6d962e2d2b"
            }
          ],
          "activeCells": {},
          "id": "4f4c2489-4ffd-47a8-84e3-096a96811022"
        }
      ],
      "id": "sentence1"
    },
    "sentence2": {
      "title": "Facts",
      "path": null,
      "max-retries": 3,
      "expiration-period": 0,
      "lifecycle": "Regression",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Sentence",
          "type": "section",
          "steps": [
            {
              "key": "ThisFactIsTrue",
              "cells": {
                "id": "1"
              },
              "collections": [],
              "id": "1"
            },
            {
              "key": "ThisFactIsFalse",
              "cells": {
                "id": "2"
              },
              "collections": [],
              "id": "2"
            },
            {
              "key": "ThisFactThrowsException",
              "cells": {
                "id": "3"
              },
              "collections": [],
              "id": "3"
            }
          ],
          "activeCells": {},
          "id": "738ebb43-b0c9-46c3-b1af-5b2d2c313122"
        },
        {
          "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
          "type": "comment",
          "id": "b12f43e8-e133-44d3-a857-2888741b80f6"
        }
      ],
      "id": "sentence2"
    },
    "sentence3": {
      "title": "Importing and Currying",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "CurriedMath",
          "type": "section",
          "steps": [
            {
              "key": "AddingTo5",
              "cells": {
                "y": "10",
                "returnValue": "15",
                "x": "5"
              },
              "collections": [],
              "id": "2110b0eb-0487-4ce4-9175-2f13a0df4a12"
            },
            {
              "key": "AddingTo5",
              "cells": {
                "y": "12",
                "returnValue": "15",
                "x": "5"
              },
              "collections": [],
              "id": "44229b4d-29ae-4833-9c0d-6103c420a3b2"
            }
          ],
          "activeCells": {},
          "id": "25067179-b2e5-424d-ac5e-ea2257235a5a"
        }
      ],
      "id": "sentence3"
    },
    "sentence4": {
      "title": "Sentences",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Sentence",
          "type": "section",
          "steps": [
            {
              "text": "Show a syntax failure",
              "type": "comment",
              "id": "90334c64-4a7c-4dee-9ac4-6fdc86656ed0"
            },
            {
              "key": "StartWithTheNumber",
              "cells": {
                "id": "1",
                "number": "a"
              },
              "collections": [],
              "id": "1"
            },
            {
              "text": "Work correctly",
              "type": "comment",
              "id": "e0e30763-acfa-492b-b077-fdda171984b3"
            },
            {
              "key": "StartWithTheNumber",
              "cells": {
                "number": "5"
              },
              "collections": [],
              "id": "223194e3-3cb9-4db3-9211-3dceb1747764"
            },
            {
              "key": "MultiplyThenAdd",
              "cells": {
                "multiplier": "3",
                "delta": "4"
              },
              "collections": [],
              "id": "87c795b1-0026-4cbc-8ee4-2fdf1804cfd7"
            },
            {
              "key": "Subtract",
              "cells": {
                "operand": "2"
              },
              "collections": [],
              "id": "d413a02d-1a81-447e-9832-c25e4b2a5b21"
            },
            {
              "text": "Correct assertion",
              "type": "comment",
              "id": "7f82508f-1edd-45db-b08b-e2f1cf9e8a04"
            },
            {
              "key": "TheValueShouldBe",
              "cells": {
                "number": "17",
                "id": "2"
              },
              "collections": [],
              "id": "2"
            },
            {
              "text": "Incorrect assertion",
              "type": "comment",
              "id": "3edbb5b1-0f94-4800-860e-f669b718003d"
            },
            {
              "key": "TheSumOf",
              "cells": {
                "number1": "2",
                "number2": "2",
                "sum": "5"
              },
              "collections": [],
              "id": "908b0e0c-40bc-41d7-92ad-94f6f796f6e1"
            },
            {
              "text": "Line assertions",
              "type": "comment",
              "id": "d20a5d0d-c053-4dd7-8766-b550572872b8"
            },
            {
              "key": "ThisLineIsAlwaysTrue",
              "cells": {
                "id": "3"
              },
              "collections": [],
              "id": "3"
            },
            {
              "key": "ThisLineIsAlwaysFalse",
              "cells": {
                "id": "4"
              },
              "collections": [],
              "id": "4"
            },
            {
              "key": "ThisLineAlwaysThrowsExceptions",
              "cells": {
                "id": "5"
              },
              "collections": [],
              "id": "5"
            }
          ],
          "activeCells": {},
          "id": "9e5d49fb-4d60-465a-9668-9da55482506c"
        }
      ],
      "id": "sentence4"
    },
    "set1": {
      "title": "Ordered Set",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Sets",
          "type": "section",
          "steps": [
            {
              "key": "InvoiceDetailsAre",
              "cells": {},
              "collections": [
                {
                  "key": "Rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Cord",
                        "Amount": "100.1",
                        "Date": "TODAY"
                      },
                      "collections": [],
                      "id": "0c1e9221-3241-4e97-999b-4299f222476e"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Drill",
                        "Amount": "200.2",
                        "Date": "TODAY+1"
                      },
                      "collections": [],
                      "id": "a6429a0a-0371-44ac-ab66-a4cf6f289660"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Hammer",
                        "Amount": "300.3",
                        "Date": "TODAY+2"
                      },
                      "collections": [],
                      "id": "d744104e-79f5-4720-a763-b88677eac2a3"
                    }
                  ],
                  "activeCells": {},
                  "id": "5c4f0bba-43b0-4e00-a50e-326d2db9a4aa"
                }
              ],
              "id": "b64bfca4-8935-4f78-8b03-24b7fbbdebd8"
            },
            {
              "text": "Completely successful ordering",
              "type": "comment",
              "id": "ddb0c412-103c-416f-b944-b354307a004a"
            },
            {
              "key": "OrderedDetailsAre",
              "cells": {},
              "collections": [
                {
                  "key": "rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Cord",
                        "Amount": "100.1",
                        "Order": "1",
                        "Date": "TODAY",
                        "id": "2"
                      },
                      "collections": [],
                      "id": "2"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Drill",
                        "Amount": "200.2",
                        "Order": "2",
                        "Date": "TODAY+1",
                        "id": "3"
                      },
                      "collections": [],
                      "id": "3"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Hammer",
                        "Amount": "300.3",
                        "Order": "3",
                        "Date": "TODAY+2",
                        "id": "4"
                      },
                      "collections": [],
                      "id": "4"
                    }
                  ],
                  "activeCells": {},
                  "id": "1"
                }
              ],
              "id": "83e3e569-6018-48c1-be65-a1ba8de3f6b2"
            },
            {
              "text": "Out of order",
              "type": "comment",
              "id": "98ca853b-f121-4552-a928-6b4d0a4318d9"
            },
            {
              "key": "OrderedDetailsAre",
              "cells": {},
              "collections": [
                {
                  "key": "rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Drill",
                        "Amount": "200.2",
                        "Order": "1",
                        "Date": "TODAY+1",
                        "id": "6"
                      },
                      "collections": [],
                      "id": "6"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Hammer",
                        "Amount": "300.3",
                        "Order": "2",
                        "Date": "TODAY+2",
                        "id": "7"
                      },
                      "collections": [],
                      "id": "7"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Cord",
                        "Amount": "100.1",
                        "Order": "3",
                        "Date": "TODAY",
                        "id": "8"
                      },
                      "collections": [],
                      "id": "8"
                    }
                  ],
                  "activeCells": {},
                  "id": "5"
                }
              ],
              "id": "4194ad61-2e3b-480c-b0c6-b1aa6d305a47"
            },
            {
              "text": "Should have one exra",
              "type": "comment",
              "id": "affd85ee-fb31-4c55-bf58-eb8856274045"
            },
            {
              "key": "OrderedDetailsAre",
              "cells": {},
              "collections": [
                {
                  "key": "rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Cord",
                        "Amount": "100.1",
                        "Order": "1",
                        "Date": "TODAY"
                      },
                      "collections": [],
                      "id": "1f9d30da-814b-46a0-b188-10203db4b0c9"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Drill",
                        "Amount": "200.2",
                        "Order": "2",
                        "Date": "TODAY+1"
                      },
                      "collections": [],
                      "id": "77c91951-7e49-4a5d-9cad-bfa5c9091db5"
                    }
                  ],
                  "activeCells": {},
                  "id": "9"
                }
              ],
              "id": "e235c03a-f134-4b71-ab89-cabb8a69b99a"
            },
            {
              "text": "Should mark one expected result as missing",
              "type": "comment",
              "id": "190ae881-7ff6-403e-90f0-b84196bff891"
            },
            {
              "key": "OrderedDetailsAre",
              "cells": {},
              "collections": [
                {
                  "key": "rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Cord",
                        "Amount": "100.1",
                        "Order": "1",
                        "Date": "TODAY"
                      },
                      "collections": [],
                      "id": "7f80e3f6-943f-46cc-ad07-86961b14ec84"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Drill",
                        "Amount": "200.2",
                        "Order": "2",
                        "Date": "TODAY+1"
                      },
                      "collections": [],
                      "id": "f156b72d-d7c7-49c2-b331-ef642148eaae"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Hammer",
                        "Amount": "300.3",
                        "Order": "3",
                        "Date": "TODAY+2"
                      },
                      "collections": [],
                      "id": "b0b7da65-eb98-4b30-86f0-1c760831c054"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Hammer",
                        "Amount": "400.3",
                        "Order": "4",
                        "Date": "TODAY+3",
                        "id": "11"
                      },
                      "collections": [],
                      "id": "11"
                    }
                  ],
                  "activeCells": {},
                  "id": "10"
                }
              ],
              "id": "ba76d139-1ccd-44b7-83e8-736d50a4d47a"
            },
            {
              "text": "One syntax error",
              "type": "comment",
              "id": "19975530-c6c7-4841-99bc-edacc618baa5"
            },
            {
              "key": "OrderedDetailsAre",
              "cells": {},
              "collections": [
                {
                  "key": "rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Cord",
                        "Amount": "100.1",
                        "Order": "1",
                        "Date": "Syntax Error",
                        "id": "12"
                      },
                      "collections": [],
                      "id": "12"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Drill",
                        "Amount": "200.2",
                        "Order": "2",
                        "Date": "TODAY+1"
                      },
                      "collections": [],
                      "id": "7bbd9774-6a5a-436c-ad2e-e0ae8e6a6a0c"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Hammer",
                        "Amount": "300.3",
                        "Order": "3",
                        "Date": "TODAY+2"
                      },
                      "collections": [],
                      "id": "29c05806-aff4-478a-b388-11237621c2d6"
                    }
                  ],
                  "activeCells": {},
                  "id": "6b63f079-d567-4749-ad51-187ec5279ee6"
                }
              ],
              "id": "c64b8d9e-82dd-439c-b362-fe515776cecc"
            }
          ],
          "activeCells": {},
          "id": "1661ecdc-2af1-4f5d-ba34-a2e1e044e4a7"
        }
      ],
      "id": "set1"
    },
    "set2": {
      "title": "Successful OrderedStrings",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Sets",
          "type": "section",
          "steps": [
            {
              "key": "TheDataIs",
              "cells": {},
              "collections": [
                {
                  "key": "name",
                  "type": "section",
                  "steps": [
                    {
                      "key": "name",
                      "cells": {
                        "name": "Jeremy"
                      },
                      "collections": [],
                      "id": "e35f32cf-064b-499e-ab2f-1235eebfaba9"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Josh"
                      },
                      "collections": [],
                      "id": "c4cce9e2-47e8-4014-b48c-e1e2381baca0"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Gary"
                      },
                      "collections": [],
                      "id": "f974723f-8a86-48c8-9a37-a488230ff8e6"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Kevin"
                      },
                      "collections": [],
                      "id": "6b1918c7-1d12-4010-857a-ca902ed58f87"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Chad"
                      },
                      "collections": [],
                      "id": "f259cd43-eeec-4296-849b-74fe8073b993"
                    }
                  ],
                  "activeCells": {},
                  "id": "006c5e4b-d463-4321-ae7b-b7d240db3bb1"
                }
              ],
              "id": "19ee2779-8ef2-4b61-8b9e-0927557e6859"
            },
            {
              "key": "OrderedStringSet",
              "cells": {},
              "collections": [
                {
                  "key": "Rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Jeremy",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "71e5fab8-a630-4716-bfe6-13ad14982c32"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Josh",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "12e5ea22-a742-489f-9142-22b92b0ee96a"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Gary",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "a851606e-e722-4c9b-8727-d8ad5545f7ff"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Kevin",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "92402e4b-2d9a-49c5-af5e-7f3082e771cd"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Chad",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "a8de8aa3-da90-4d37-9d0f-90c21d847372"
                    }
                  ],
                  "activeCells": {},
                  "id": "f5609971-1366-4823-bc3c-2f78d1341017"
                }
              ],
              "id": "55fe5790-22ae-4d4f-aa1a-adb4e1176b33"
            },
            {
              "key": "UnorderedStringSet",
              "cells": {},
              "collections": [
                {
                  "key": "Rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Kevin",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "c9c91f8a-f550-43e1-a9e1-0eb5c5d3203e"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Chad",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "51c6c58d-7fe2-4c31-967b-3cff71c6cdb9"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Jeremy",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "d3f36a1d-f7b7-4bdb-ba6b-9b118478cad8"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Josh",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "44c16ba9-c3cf-4891-bd97-77262bb3c92e"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Gary",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "02c13a23-5e38-4a2e-8d35-2c22daa32f1f"
                    }
                  ],
                  "activeCells": {},
                  "id": "09f1449a-728e-4273-bcb2-43e53bd42f70"
                }
              ],
              "id": "f473ad1f-d611-4eb0-bf11-3fae928b4ee4"
            }
          ],
          "activeCells": {},
          "id": "ce5c491c-434d-4a04-8af4-988cec82d597"
        }
      ],
      "id": "set2"
    },
    "set3": {
      "title": "Set with Error",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Sets",
          "type": "section",
          "steps": [
            {
              "key": "ThrowsErrorOnDataFetch",
              "cells": {},
              "collections": [
                {
                  "key": "rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "rows",
                      "cells": {
                        "Name": "a"
                      },
                      "collections": [],
                      "id": "d3f818c0-42f9-4135-88cd-7ad61af045db"
                    },
                    {
                      "key": "rows",
                      "cells": {
                        "Name": "b"
                      },
                      "collections": [],
                      "id": "6c696089-b358-404d-aeff-e6fd8d6ef1b6"
                    },
                    {
                      "key": "rows",
                      "cells": {
                        "Name": "c"
                      },
                      "collections": [],
                      "id": "a3b7c981-0a72-4aae-a4ef-fd483be39e3f"
                    }
                  ],
                  "activeCells": {},
                  "id": "1"
                }
              ],
              "id": "77266a87-f905-4a6b-abe3-fd50cbcf7cb3"
            }
          ],
          "activeCells": {},
          "id": "2752a4f9-cb42-40df-8305-7acbd0cd0a1f"
        }
      ],
      "id": "set3"
    },
    "set4": {
      "title": "Unordered Set",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Sets",
          "type": "section",
          "steps": [
            {
              "key": "InvoiceDetailsAre",
              "cells": {},
              "collections": [
                {
                  "key": "Rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "100.1",
                        "Date": "TODAY",
                        "Name": "Cord"
                      },
                      "collections": [],
                      "id": "0541dabc-8fea-4fec-9678-c02d9c915570"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "200.2",
                        "Date": "TODAY+1",
                        "Name": "Drill"
                      },
                      "collections": [],
                      "id": "8fd1aee2-cdb7-43c2-a1d0-b1b73679953a"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "300.3",
                        "Date": "TODAY+2",
                        "Name": "Hammer"
                      },
                      "collections": [],
                      "id": "2ee4cadd-f73c-48ce-9c67-4ebeeb6a71c5"
                    }
                  ],
                  "activeCells": {},
                  "id": "775b4fee-248b-4030-bf82-771b39dcf657"
                }
              ],
              "id": "3f75f727-7c28-4651-9b47-e2ec182069ac"
            },
            {
              "key": "UnorderedDetailsAre",
              "cells": {},
              "collections": [
                {
                  "key": "rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "invalid",
                        "Date": "TODAY+3",
                        "Name": "Drill"
                      },
                      "collections": [],
                      "id": "8238047a-59cc-4e2a-8488-a8ffe19b7e69"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "300.3",
                        "Date": "TODAY+2",
                        "Name": "Hammer"
                      },
                      "collections": [],
                      "id": "47221ae0-15af-4cf8-a5fc-bf9c60048512"
                    }
                  ],
                  "activeCells": {},
                  "id": "f251b40a-3754-4269-9029-83d545b6d967"
                }
              ],
              "id": "568e3eb7-7397-464f-a061-6585b4ff8655"
            }
          ],
          "activeCells": {},
          "id": "67fbbb23-9d05-4fd7-b365-e6f7654e6f85"
        }
      ],
      "id": "set4"
    },
    "set5": {
      "title": "Unsuccessful Ordering",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Sets",
          "type": "section",
          "steps": [
            {
              "key": "TheDataIs",
              "cells": {},
              "collections": [
                {
                  "key": "name",
                  "type": "section",
                  "steps": [
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Jeremy"
                      },
                      "collections": [],
                      "id": "fcdf473b-e1ed-40fc-aaad-47443df2d630"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Josh"
                      },
                      "collections": [],
                      "id": "6b6285c6-eb73-405a-8ab6-586615f63eee"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Gary"
                      },
                      "collections": [],
                      "id": "45aae2b3-0680-4b3e-8597-8e47d74c91a2"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Kevin"
                      },
                      "collections": [],
                      "id": "0db6502b-94ce-46cf-9a5d-efe25c4cfd0d"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Chad"
                      },
                      "collections": [],
                      "id": "a766db61-4034-44cd-bbf8-78106a268ab7"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Rand"
                      },
                      "collections": [],
                      "id": "62e6d31b-b7b1-46c1-a160-70fea13b72b1"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Perrin"
                      },
                      "collections": [],
                      "id": "de645578-4d49-49cd-9140-e230d54af3a6"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Mat"
                      },
                      "collections": [],
                      "id": "bfd6ddc6-0069-4953-8c9f-b1b0b44121c2"
                    }
                  ],
                  "activeCells": {},
                  "id": "61c521ec-1d41-4492-b00c-695d8cc4440b"
                }
              ],
              "id": "36142109-05e6-437d-af79-f31fdce3fdc7"
            },
            {
              "text": "All data is correct, but in the wrong order",
              "type": "comment",
              "id": "017f178b-b729-4c5a-b2f2-e0e201865b24"
            },
            {
              "key": "OrderedStringSet",
              "cells": {},
              "collections": [
                {
                  "key": "Rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Jeremy"
                      },
                      "collections": [],
                      "id": "3e382d64-7e08-4f18-b866-6426ef92195f"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Josh"
                      },
                      "collections": [],
                      "id": "deb3e83a-8730-47b9-9cab-7c6fef89652c"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Gary"
                      },
                      "collections": [],
                      "id": "8b66ac0d-3040-4827-bc92-25b2e0538b67"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Chad"
                      },
                      "collections": [],
                      "id": "6e76d908-b4aa-4356-906b-e7a59b99592b"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Kevin"
                      },
                      "collections": [],
                      "id": "b8f29de7-8a26-4b8b-8816-a9535fa38d45"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Egwene"
                      },
                      "collections": [],
                      "id": "202926cf-2b5c-4d4a-b4d9-d6349ce01879"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Perrin"
                      },
                      "collections": [],
                      "id": "7bfa4d6a-40b0-46dd-bdb6-29e46fbe89ab"
                    }
                  ],
                  "activeCells": {},
                  "id": "4f091fff-8c47-4a91-90c4-19c01477dddb"
                }
              ],
              "id": "79694476-e09c-4de8-a4c9-e5c277871567"
            }
          ],
          "activeCells": {},
          "id": "a1dd4de2-85ac-4100-8e63-effb613d81c7"
        }
      ],
      "id": "set5"
    },
    "table1": {
      "title": "Boolean Results in a Table",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Table",
          "type": "section",
          "steps": [
            {
              "key": "IsPositive",
              "cells": {},
              "collections": [
                {
                  "key": "table",
                  "type": "section",
                  "steps": [
                    {
                      "key": "IsPositive-row",
                      "cells": {
                        "number": "5",
                        "IsEven": "true"
                      },
                      "collections": [],
                      "id": "98767450-8a39-4187-a0e8-1ab5eb24470a"
                    },
                    {
                      "key": "IsPositive-row",
                      "cells": {
                        "number": "-5",
                        "IsEven": "false"
                      },
                      "collections": [],
                      "id": "5de01d3f-02e4-4dff-8af8-122fcbb31735"
                    }
                  ],
                  "activeCells": {},
                  "id": "a481d76f-66ae-464f-8c6f-2739e4c39d3e"
                }
              ],
              "id": "fbd22234-a0db-4ecc-9ccb-7fe7fd09552f"
            }
          ],
          "activeCells": {},
          "id": "3ebd1088-3f9a-4623-bf69-8c04668dd246"
        }
      ],
      "id": "table1"
    },
    "table2": {
      "title": "Decision Table",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Table",
          "type": "section",
          "steps": [
            {
              "key": "decisions",
              "cells": {},
              "collections": [
                {
                  "key": "decisions",
                  "type": "section",
                  "steps": [
                    {
                      "key": "decisions",
                      "cells": {
                        "FirstName": "Jeremy",
                        "LastName": "Miller",
                        "FullName": "Jeremy Miller",
                        "LastNameFirst": "Miller, Jeremy"
                      },
                      "collections": [],
                      "id": "eb053907-26fc-43d3-8476-3543b02bb1ae"
                    },
                    {
                      "key": "decisions",
                      "cells": {
                        "FirstName": "Matt",
                        "LastName": "Cassel",
                        "FullName": "Big Chief",
                        "LastNameFirst": "Chief, Big"
                      },
                      "collections": [],
                      "id": "0852d3fa-5d21-42c2-96bf-c84d6c8db524"
                    }
                  ],
                  "activeCells": {},
                  "id": "c14b967f-08be-4c41-b8c1-1b174793044a"
                },
                {
                  "key": "table",
                  "type": "section",
                  "steps": [
                    {
                      "key": "row",
                      "cells": {
                        "FirstName": "Jeremy",
                        "LastName": "Miller",
                        "FullName": "Jeremy Miller",
                        "LastNameFirst": "Miller, Jeremy"
                      },
                      "collections": [],
                      "id": "3970ac0f-bb56-4c91-b9ce-eea59c870a47"
                    },
                    {
                      "key": "row",
                      "cells": {
                        "FirstName": "Hank",
                        "LastName": "Hill",
                        "FullName": "Hank Miller",
                        "LastNameFirst": "Miller Hank"
                      },
                      "collections": [],
                      "id": "b0a68128-4909-422d-8d0d-42161ee880b4"
                    }
                  ],
                  "activeCells": {},
                  "id": "a25f66fc-afdb-456a-ace0-e6ca017bb60e"
                }
              ],
              "id": "cbe99453-6e94-490e-8c25-3579994e11c4"
            }
          ],
          "activeCells": {},
          "id": "c824f1e4-38ab-48a0-aa05-7b6cc88ae036"
        }
      ],
      "id": "table2"
    },
    "table3": {
      "title": "Table with Optional Columns",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Table",
          "type": "section",
          "steps": [
            {
              "key": "TableWithLotsOfOptions",
              "cells": {},
              "collections": [
                {
                  "key": "table",
                  "type": "section",
                  "steps": [
                    {
                      "key": "TableWithLotsOfOptions-row",
                      "cells": {
                        "a": "1",
                        "d": "4",
                        "e": "5",
                        "b": "2",
                        "c": "3"
                      },
                      "collections": [],
                      "id": "3dfb13f7-2f68-4990-95a3-e5af3977f762"
                    },
                    {
                      "key": "TableWithLotsOfOptions-row",
                      "cells": {
                        "a": "2",
                        "d": "4",
                        "e": "5",
                        "b": "2",
                        "c": "3"
                      },
                      "collections": [],
                      "id": "3c3e3997-f8f0-4abf-85ac-ddfef633eb86"
                    },
                    {
                      "key": "TableWithLotsOfOptions-row",
                      "cells": {
                        "a": "3",
                        "d": "4",
                        "e": "5",
                        "b": "2",
                        "c": "3"
                      },
                      "collections": [],
                      "id": "52a8fb06-b196-4677-9c85-aca0a07a1b91"
                    },
                    {
                      "key": "TableWithLotsOfOptions-row",
                      "cells": {
                        "a": "4",
                        "d": "4",
                        "e": "5",
                        "b": "2",
                        "c": "3"
                      },
                      "collections": [],
                      "id": "763ee3ab-bc57-42a9-b3b1-cd52547fa6d0"
                    }
                  ],
                  "activeCells": {
                    "b": false,
                    "c": false
                  },
                  "id": "3c402eda-44ab-48b2-bc1e-e83730c123cf"
                }
              ],
              "id": "b12e5cdf-bf21-486e-b388-1028bbefd30f"
            }
          ],
          "activeCells": {},
          "id": "66898ff9-2096-47f5-a222-6e3d717e87bb"
        }
      ],
      "id": "table3"
    },
    "table4": {
      "title": "Tables with Errors",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Table",
          "type": "section",
          "steps": [
            {
              "key": "BeforeThrowsError",
              "cells": {},
              "collections": [
                {
                  "key": "Rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "BeforeThrowsError-row",
                      "cells": {
                        "x": "11"
                      },
                      "collections": [],
                      "id": "581ed97a-e866-44fa-8f4a-acf34c4cff4f"
                    }
                  ],
                  "activeCells": {},
                  "id": "before"
                }
              ],
              "id": "5ba6afe3-4c92-4b6f-9f7d-b545be6e5240"
            },
            {
              "key": "AfterThrowsError",
              "cells": {},
              "collections": [
                {
                  "key": "Rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "AfterThrowsError-row",
                      "cells": {
                        "x": "22"
                      },
                      "collections": [],
                      "id": "a7620a36-0055-4453-bae5-36b9f653c3bf"
                    }
                  ],
                  "activeCells": {},
                  "id": "after"
                }
              ],
              "id": "571e005f-57f8-42ab-88dd-bfeebec0ca2b"
            }
          ],
          "activeCells": {},
          "id": "16e7b1ee-6292-4822-83e2-ca5ae2351a40"
        }
      ],
      "id": "table4"
    },
    "table5": {
      "title": "Tables",
      "path": null,
      "max-retries": 0,
      "expiration-period": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "last-updated": "Friday, September 25, 2015",
      "steps": [
        {
          "key": "Table",
          "type": "section",
          "steps": [
            {
              "text": "Table by the ExposeAsTable attribute",
              "type": "comment",
              "id": "72e91147-b61d-460e-9842-30079706f3d3"
            },
            {
              "key": "Sum",
              "cells": {},
              "collections": [
                {
                  "key": "sum",
                  "type": "section",
                  "steps": [
                    {
                      "key": "sum",
                      "cells": {
                        "x": "a",
                        "y": "b",
                        "sum": "c",
                        "id": "1"
                      },
                      "collections": [],
                      "id": "1"
                    },
                    {
                      "key": "sum",
                      "cells": {
                        "x": "2",
                        "y": "2",
                        "sum": "4"
                      },
                      "collections": [],
                      "id": "377dfb6b-fb1f-4c18-8e02-fbaa891d34a6"
                    },
                    {
                      "key": "sum",
                      "cells": {
                        "x": "2",
                        "y": "2",
                        "sum": "5"
                      },
                      "collections": [],
                      "id": "67d453cf-d65b-4a23-a5c0-831735ec11ba"
                    }
                  ],
                  "activeCells": {},
                  "id": "7a0f069d-2ff9-44be-ba78-3e6099b48b83"
                }
              ],
              "id": "0f3727a0-05ea-46f7-9bbf-3e7dfa01f518"
            },
            {
              "text": "Table fixture from script",
              "type": "comment",
              "id": "6a3208da-ef9d-49bd-9483-42ccaf6f3113"
            },
            {
              "key": "Divide",
              "cells": {},
              "collections": [
                {
                  "key": "Rows",
                  "type": "section",
                  "steps": [
                    {
                      "key": "Rows",
                      "cells": {
                        "x": "4",
                        "y": "2",
                        "product": "2",
                        "id": "4"
                      },
                      "collections": [],
                      "id": "4"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "x": "3",
                        "y": "0",
                        "product": "0",
                        "id": "5"
                      },
                      "collections": [],
                      "id": "5"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "x": "a",
                        "y": "3",
                        "product": "****"
                      },
                      "collections": [],
                      "id": "8167dce8-524b-4fbf-beff-07d05bc5ce11"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "x": "3",
                        "y": "3",
                        "product": "****"
                      },
                      "collections": [],
                      "id": "a7d7089a-7901-4beb-99ee-bc0c53749bf6"
                    }
                  ],
                  "activeCells": {},
                  "id": "3af8aa38-ce30-495d-ac0d-f8c26b9b3c1e"
                }
              ],
              "id": "eee10708-f33c-4d4c-ab7b-384da5e5687c"
            }
          ],
          "activeCells": {},
          "id": "f735dd62-4f41-40db-9cda-fe9ce28fff5a"
        }
      ],
      "id": "table5"
    }
  },
  "hierarchy": {
    "suites": [
      {
        "suites": [],
        "specs": [
          {
            "title": "Embeds",
            "path": "Embedded/Embeds",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Regression",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, July 17, 2015",
            "steps": [],
            "id": "embeds"
          }
        ],
        "name": "Embedded",
        "path": "Embedded"
      },
      {
        "suites": [],
        "specs": [
          {
            "title": "Check properties",
            "path": "General/Check properties",
            "max-retries": 3,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "general1"
          },
          {
            "title": "Occasionally Times Out",
            "path": "General/Occasionally Times Out",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "SometimesSlow"
          },
          {
            "title": "Selection List Values",
            "path": "General/Selection List Values",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "general2"
          },
          {
            "title": "Services",
            "path": "General/Services",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "general3"
          },
          {
            "title": "System Defined Lists and Runtime Converters",
            "path": "General/System Defined Lists and Runtime Converters",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "runtime-converter"
          },
          {
            "title": "Test with Bad Grammar Name",
            "path": "General/Test with Bad Grammar Name",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "general4"
          },
          {
            "title": "Test with Missing Fixture Name",
            "path": "General/Test with Missing Fixture Name",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "general5"
          }
        ],
        "name": "General",
        "path": "General"
      },
      {
        "suites": [],
        "specs": [
          {
            "title": "Composite with Errors",
            "path": "Paragraphs/Composite with Errors",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Regression",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "paragraph1"
          },
          {
            "title": "Simple Composite",
            "path": "Paragraphs/Simple Composite",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "paragraph2"
          }
        ],
        "name": "Paragraphs",
        "path": "Paragraphs"
      },
      {
        "suites": [],
        "specs": [
          {
            "title": "Currying",
            "path": "Sentences/Currying",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "sentence1"
          },
          {
            "title": "Facts",
            "path": "Sentences/Facts",
            "max-retries": 3,
            "expiration-period": 0,
            "lifecycle": "Regression",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "sentence2"
          },
          {
            "title": "Importing and Currying",
            "path": "Sentences/Importing and Currying",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "sentence3"
          },
          {
            "title": "Sentences",
            "path": "Sentences/Sentences",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "sentence4"
          }
        ],
        "name": "Sentences",
        "path": "Sentences"
      },
      {
        "suites": [],
        "specs": [
          {
            "title": "Ordered Set",
            "path": "Sets/Ordered Set",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "set1"
          },
          {
            "title": "Successful OrderedStrings",
            "path": "Sets/Successful OrderedStrings",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "set2"
          },
          {
            "title": "Set with Error",
            "path": "Sets/Set with Error",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "set3"
          },
          {
            "title": "Unordered Set",
            "path": "Sets/Unordered Set",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "set4"
          },
          {
            "title": "Unsuccessful Ordering",
            "path": "Sets/Unsuccessful Ordering",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "set5"
          }
        ],
        "name": "Sets",
        "path": "Sets"
      },
      {
        "suites": [],
        "specs": [
          {
            "title": "Boolean Results in a Table",
            "path": "Tables/Boolean Results in a Table",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "table1"
          },
          {
            "title": "Decision Table",
            "path": "Tables/Decision Table",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "table2"
          },
          {
            "title": "Table with Optional Columns",
            "path": "Tables/Table with Optional Columns",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "table3"
          },
          {
            "title": "Tables with Errors",
            "path": "Tables/Tables with Errors",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "table4"
          },
          {
            "title": "Tables",
            "path": "Tables/Tables",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "last-updated": "Friday, September 25, 2015",
            "steps": [],
            "id": "table5"
          }
        ],
        "name": "Tables",
        "path": "Tables"
      }
    ],
    "specs": [],
    "name": "",
    "path": ""
  },
  "results": {
    "embeds": {
      "id": "embeds",
      "data": {
        "title": "Embeds",
        "path": "Embedded/Embeds",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Regression",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, July 17, 2015",
        "steps": [],
        "id": "embeds"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ba14e9c-2299-494c-80ef-c48e8e8f8273",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.EmbeddedFixture.<.ctor>b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\EmbeddedFixture.cs:line 13\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
            "cells": [],
            "id": "errors",
            "spec": "embeds",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "returnValue",
                "id": null,
                "status": "success"
              }
            ],
            "id": "cb137641-e998-48e1-9ef1-f132f0dee704",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9241a5bb-b9b8-4d4e-ab84-f27fee805cef",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "returnValue",
                "id": null,
                "status": "success"
              }
            ],
            "id": "4aab03b0-0a69-4f8b-92f5-ee508ccaf315",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "10",
                "error": null,
                "cell": "returnValue",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "92c9fdfb-fcdc-4b4b-b7c0-8bb15cba9fff",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "returnValue",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "b3a09ec8-e82e-4c8c-8b74-4683af1eee52",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\MathFixture.cs:line 122\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__e.MoveNext() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 81\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
            "cells": [],
            "id": "787b169a-eb02-4a09-b3f4-3f70a741c50d",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Embedded:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">EmbeddedFixture.Setup sent this debug message\r\n</pre>",
            "title": "Debug Output",
            "count": 1,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.EmbeddedFixture.&lt;.ctor&gt;b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\EmbeddedFixture.cs:line 13\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>\n<pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\MathFixture.cs:line 122\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__e.MoveNext() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 81\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 2,
          "wrongs": 1,
          "errors": 2,
          "invalids": 1
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "general1": {
      "id": "general1",
      "data": {
        "title": "Check properties",
        "path": "General/Check properties",
        "max-retries": 3,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "general1"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6d15c27d-d5c3-4fbb-a4e6-1bd75157a30f",
            "spec": "general1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6d15c27d-d5c3-4fbb-a4e6-1bd75157a30f",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6d15c27d-d5c3-4fbb-a4e6-1bd75157a30f",
            "spec": "general1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6d15c27d-d5c3-4fbb-a4e6-1bd75157a30f",
            "spec": "general1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6d15c27d-d5c3-4fbb-a4e6-1bd75157a30f",
            "spec": "general1",
            "position": "5",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6d15c27d-d5c3-4fbb-a4e6-1bd75157a30f",
            "spec": "general1",
            "position": "6",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "Address1",
                "id": null,
                "status": "success"
              }
            ],
            "id": "48a7daa1-f470-4de4-923c-a87b3eb3608e",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "Address2",
                "id": null,
                "status": "success"
              }
            ],
            "id": "48a7daa1-f470-4de4-923c-a87b3eb3608e",
            "spec": "general1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "City",
                "id": null,
                "status": "success"
              }
            ],
            "id": "48a7daa1-f470-4de4-923c-a87b3eb3608e",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "2035 Ozark",
                "error": null,
                "cell": "Address1",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "5c9de79b-30c1-429a-88ca-39c90c24d862",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "Apt 3",
                "error": null,
                "cell": "Address2",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "5c9de79b-30c1-429a-88ca-39c90c24d862",
            "spec": "general1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "Carthage",
                "error": null,
                "cell": "City",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "5c9de79b-30c1-429a-88ca-39c90c24d862",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "CheckObject:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:5",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:6",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "CheckObject:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 3,
          "wrongs": 3,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "SometimesSlow": {
      "id": "SometimesSlow",
      "data": {
        "title": "Occasionally Times Out",
        "path": "General/Occasionally Times Out",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "SometimesSlow"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a5c8c5f6-3f7a-4023-982a-aed23806bf72",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "SometimesSlow:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Slow",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "SometimesSlow:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "general2": {
      "id": "general2",
      "data": {
        "title": "Selection List Values",
        "path": "General/Selection List Values",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "general2"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "fullname",
                "id": null,
                "status": "success"
              }
            ],
            "id": "e2ed224b-d98f-4976-a782-d6d42c85e6d2",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "fullname",
                "id": null,
                "status": "success"
              }
            ],
            "id": "8e383e95-8eb2-4f51-8542-8219f08ba899",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "Harold Miller",
                "error": null,
                "cell": "fullname",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "7251729b-45cb-497b-a57c-45dbd380ae12",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "First",
                "id": null,
                "status": "ok"
              },
              {
                "actual": null,
                "error": null,
                "cell": "Last",
                "id": null,
                "status": "ok"
              },
              {
                "actual": null,
                "error": null,
                "cell": "Fullname",
                "id": null,
                "status": "success"
              }
            ],
            "id": "b0652ec4-5808-453e-8a1d-c43f8e9bd4be",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "selectedOption",
                "id": null,
                "status": "success"
              }
            ],
            "id": "33afb323-82ff-4ed4-bc4e-453f7322fbc7",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "SelectionList:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheNameIs",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "FirstAndLastName:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "FirstAndLastName:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": null,
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheEnumOptionIs",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "SelectionList:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 4,
          "wrongs": 1,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "general3": {
      "id": "general3",
      "data": {
        "title": "Services",
        "path": "General/Services",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "general3"
      },
      "results": {
        "results": [
          {
            "status": "invalid",
            "error": "Fixture with key 'Service' does not exist",
            "cells": [],
            "id": "548fc6bc-04c6-423d-8388-055656753302",
            "spec": "general3",
            "position": "setup",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Service:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#39;setup&#39; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#39;Service&#39; does not exist\r\n   at StoryTeller.Model.MissingFixture.SetUp() in z:\\code\\storyteller\\src\\StoryTeller\\Model\\MissingFixture.cs:line 15\r\n   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass2.&lt;toExecutionSteps&gt;b__0(ISpecContext x) in z:\\code\\storyteller\\src\\StoryTeller\\Model\\Section.cs:line 66\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass1.&lt;AsCritical&gt;b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 20\r\n   --- End of inner exception stack trace ---\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass1.&lt;AsCritical&gt;b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 32\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 1
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "runtime-converter": {
      "id": "runtime-converter",
      "data": {
        "title": "System Defined Lists and Runtime Converters",
        "path": "General/System Defined Lists and Runtime Converters",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "runtime-converter"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "Position",
                "id": null,
                "status": "success"
              }
            ],
            "id": "3ccc86f7-b71f-4a85-a4a4-f89157e043f8",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Player:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "PositionIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Player:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 1,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "general4": {
      "id": "general4",
      "data": {
        "title": "Test with Bad Grammar Name",
        "path": "General/Test with Bad Grammar Name",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "general4"
      },
      "results": {
        "results": [
          {
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "62fcf9e0-a4fd-40e2-b8e8-c46574b2a0e1",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "9c6bcf7d-c5f4-40ac-b744-e874ab4fbfa3",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "67896a9b-114d-400b-890c-fad57d285428",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Missing",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Missing",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Missing",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 3,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "general5": {
      "id": "general5",
      "data": {
        "title": "Test with Missing Fixture Name",
        "path": "General/Test with Missing Fixture Name",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "general5"
      },
      "results": {
        "results": [
          {
            "status": "invalid",
            "error": "Fixture with key 'FixtureThatDoesNotExist' does not exist",
            "cells": [],
            "id": "1",
            "spec": "general5",
            "position": "setup",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "FixtureThatDoesNotExist:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#39;setup&#39; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#39;FixtureThatDoesNotExist&#39; does not exist\r\n   at StoryTeller.Model.MissingFixture.SetUp() in z:\\code\\storyteller\\src\\StoryTeller\\Model\\MissingFixture.cs:line 15\r\n   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass2.&lt;toExecutionSteps&gt;b__0(ISpecContext x) in z:\\code\\storyteller\\src\\StoryTeller\\Model\\Section.cs:line 66\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass1.&lt;AsCritical&gt;b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 20\r\n   --- End of inner exception stack trace ---\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass1.&lt;AsCritical&gt;b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 32\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 1
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "paragraph1": {
      "id": "paragraph1",
      "data": {
        "title": "Composite with Errors",
        "path": "Paragraphs/Composite with Errors",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Regression",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "paragraph1"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d54ce916-3ebc-4d87-9666-2795881b808f",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "operand",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "d54ce916-3ebc-4d87-9666-2795881b808f",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d54ce916-3ebc-4d87-9666-2795881b808f",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "50",
                "error": null,
                "cell": "expected",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "d54ce916-3ebc-4d87-9666-2795881b808f",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "starting",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "4dcb5b9c-f96f-4a40-b512-c76a9b13ee30",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4dcb5b9c-f96f-4a40-b512-c76a9b13ee30",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4dcb5b9c-f96f-4a40-b512-c76a9b13ee30",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "540",
                "error": null,
                "cell": "expected",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "4dcb5b9c-f96f-4a40-b512-c76a9b13ee30",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b8f1f4e8-6c85-40bd-a147-6feee72d8403",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b8f1f4e8-6c85-40bd-a147-6feee72d8403",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b8f1f4e8-6c85-40bd-a147-6feee72d8403",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "expected",
                "id": null,
                "status": "success"
              }
            ],
            "id": "b8f1f4e8-6c85-40bd-a147-6feee72d8403",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "66747348-5150-4b77-b93c-9c36820ae2d6",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "66747348-5150-4b77-b93c-9c36820ae2d6",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "66747348-5150-4b77-b93c-9c36820ae2d6",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "80",
                "error": null,
                "cell": "expected",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "66747348-5150-4b77-b93c-9c36820ae2d6",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d5884a32-403b-4729-a329-e944ecc378b5",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d5884a32-403b-4729-a329-e944ecc378b5",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d5884a32-403b-4729-a329-e944ecc378b5",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<.ctor>b__3(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\CompositeFixture.cs:line 25\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
            "cells": [],
            "id": "d5884a32-403b-4729-a329-e944ecc378b5",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "expected",
                "id": null,
                "status": "success"
              }
            ],
            "id": "d5884a32-403b-4729-a329-e944ecc378b5",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Composite:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Composite:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">the number is 5\r\nthe number is 50\r\nthe number is 54\r\nthe number is 540\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nthe number is 3\r\nthe number is 5\r\nthe number is 20\r\n</pre>",
            "title": "Debug Output",
            "count": 13,
            "short_title": "Debug"
          },
          {
            "html": "<ul class=\"list-group\"><li class=\"list-group-item\">5</li><li class=\"list-group-item\">50</li><li class=\"list-group-item\">54</li><li class=\"list-group-item\">540</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">3</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">20</li></ul>",
            "title": "Some Numbers",
            "count": 13,
            "short_title": "Numbers"
          },
          {
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.&lt;.ctor&gt;b__3(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\CompositeFixture.cs:line 25\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 2,
          "wrongs": 3,
          "errors": 1,
          "invalids": 2
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "paragraph2": {
      "id": "paragraph2",
      "data": {
        "title": "Simple Composite",
        "path": "Paragraphs/Simple Composite",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "paragraph2"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "319032cb-b2b9-4378-856e-182e818b0710",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "319032cb-b2b9-4378-856e-182e818b0710",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "319032cb-b2b9-4378-856e-182e818b0710",
            "spec": "paragraph2",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "expected",
                "id": null,
                "status": "success"
              }
            ],
            "id": "319032cb-b2b9-4378-856e-182e818b0710",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9b82f884-cd1c-42cd-aa0e-45f74a1dde2b",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9b82f884-cd1c-42cd-aa0e-45f74a1dde2b",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9b82f884-cd1c-42cd-aa0e-45f74a1dde2b",
            "spec": "paragraph2",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "80",
                "error": null,
                "cell": "expected",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "9b82f884-cd1c-42cd-aa0e-45f74a1dde2b",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d66d6e95-90d6-4d13-a8a4-66fed451019a",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d66d6e95-90d6-4d13-a8a4-66fed451019a",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d66d6e95-90d6-4d13-a8a4-66fed451019a",
            "spec": "paragraph2",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "70",
                "error": null,
                "cell": "expected",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "d66d6e95-90d6-4d13-a8a4-66fed451019a",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd250097-dcbb-4d70-9587-d94fa99cf4de",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd250097-dcbb-4d70-9587-d94fa99cf4de",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd250097-dcbb-4d70-9587-d94fa99cf4de",
            "spec": "paragraph2",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "expected",
                "id": null,
                "status": "success"
              }
            ],
            "id": "cd250097-dcbb-4d70-9587-d94fa99cf4de",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4529d653-20b6-45dd-99c9-cbaa87da0640",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4529d653-20b6-45dd-99c9-cbaa87da0640",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4529d653-20b6-45dd-99c9-cbaa87da0640",
            "spec": "paragraph2",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "80",
                "error": null,
                "cell": "expected",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "4529d653-20b6-45dd-99c9-cbaa87da0640",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Composite:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Composite:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">the number is 5\r\nthe number is 8\r\nthe number is 80\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nthe number is 3\r\nthe number is 7\r\nthe number is 70\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\n</pre>",
            "title": "Debug Output",
            "count": 15,
            "short_title": "Debug"
          },
          {
            "html": "<ul class=\"list-group\"><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">3</li><li class=\"list-group-item\">7</li><li class=\"list-group-item\">70</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li></ul>",
            "title": "Some Numbers",
            "count": 15,
            "short_title": "Numbers"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 2,
          "wrongs": 3,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "sentence1": {
      "id": "sentence1",
      "data": {
        "title": "Currying",
        "path": "Sentences/Currying",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "sentence1"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "returnValue",
                "id": null,
                "status": "success"
              }
            ],
            "id": "0b6a5791-20b1-4abc-b638-607ad7604a3a",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "10",
                "error": null,
                "cell": "returnValue",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "571584f9-adb5-4b79-a086-bf6d962e2d2b",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 1,
          "wrongs": 1,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "sentence2": {
      "id": "sentence2",
      "data": {
        "title": "Facts",
        "path": "Sentences/Facts",
        "max-retries": 3,
        "expiration-period": 0,
        "lifecycle": "Regression",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "sentence2"
      },
      "results": {
        "results": [
          {
            "status": "success",
            "error": null,
            "cells": [],
            "id": "1",
            "spec": "sentence2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "failed",
            "error": null,
            "cells": [],
            "id": "2",
            "spec": "sentence2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.<.ctor>b__2() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 64\r\n   at StoryTeller.Fixture.FactExpression.<>c__DisplayClass28.<VerifiedBy>b__27(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 314\r\n   at StoryTeller.Grammars.FactGrammar.PerformTest(StepValues values, ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 36\r\n   at StoryTeller.Grammars.FactPlan.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 63\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
            "cells": [],
            "id": "3",
            "spec": "sentence2",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Sentence:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisFactIsTrue",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisFactIsFalse",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisFactThrowsException",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sentence:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.&lt;.ctor&gt;b__2() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 64\r\n   at StoryTeller.Fixture.FactExpression.&lt;&gt;c__DisplayClass28.&lt;VerifiedBy&gt;b__27(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 314\r\n   at StoryTeller.Grammars.FactGrammar.PerformTest(StepValues values, ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 36\r\n   at StoryTeller.Grammars.FactPlan.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 63\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 1,
          "wrongs": 1,
          "errors": 1,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "sentence3": {
      "id": "sentence3",
      "data": {
        "title": "Importing and Currying",
        "path": "Sentences/Importing and Currying",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "sentence3"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "returnValue",
                "id": null,
                "status": "success"
              }
            ],
            "id": "2110b0eb-0487-4ce4-9175-2f13a0df4a12",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "17",
                "error": null,
                "cell": "returnValue",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "44229b4d-29ae-4833-9c0d-6103c420a3b2",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "CurriedMath:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "CurriedMath:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 1,
          "wrongs": 1,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "sentence4": {
      "id": "sentence4",
      "data": {
        "title": "Sentences",
        "path": "Sentences/Sentences",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "sentence4"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "number",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "1",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "223194e3-3cb9-4db3-9211-3dceb1747764",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "87c795b1-0026-4cbc-8ee4-2fdf1804cfd7",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d413a02d-1a81-447e-9832-c25e4b2a5b21",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "number",
                "id": null,
                "status": "success"
              }
            ],
            "id": "2",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "4",
                "error": null,
                "cell": "sum",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "908b0e0c-40bc-41d7-92ad-94f6f796f6e1",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "success",
            "error": null,
            "cells": [],
            "id": "3",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "failed",
            "error": null,
            "cells": [],
            "id": "4",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "No go!",
            "cells": [],
            "id": "5",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Sentence:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWithTheNumber",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWithTheNumber",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyThenAdd",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Subtract",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheSumOf",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisLineIsAlwaysTrue",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisLineIsAlwaysFalse",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisLineAlwaysThrowsExceptions",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sentence:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">the number is 5\r\nthe number is 19\r\nthe number is 17\r\n</pre>",
            "title": "Debug Output",
            "count": 3,
            "short_title": "Debug"
          },
          {
            "html": "<ul class=\"list-group\"><li class=\"list-group-item\">5</li><li class=\"list-group-item\">19</li><li class=\"list-group-item\">17</li></ul>",
            "title": "Some Numbers",
            "count": 3,
            "short_title": "Numbers"
          },
          {
            "html": "<pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; StoryTeller.StorytellerAssertionException: No go!\r\n   at StoryTeller.StoryTellerAssert.Fail(String message) in z:\\code\\storyteller\\src\\StoryTeller\\StoryTellerAssert.cs:line 17\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.ThisLineAlwaysThrowsExceptions() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 133\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__e.MoveNext() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 81\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 2,
          "wrongs": 2,
          "errors": 1,
          "invalids": 1
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "set1": {
      "id": "set1",
      "data": {
        "title": "Ordered Set",
        "path": "Sets/Ordered Set",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "set1"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0c1e9221-3241-4e97-999b-4299f222476e",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0c1e9221-3241-4e97-999b-4299f222476e",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0c1e9221-3241-4e97-999b-4299f222476e",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a6429a0a-0371-44ac-ab66-a4cf6f289660",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a6429a0a-0371-44ac-ab66-a4cf6f289660",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a6429a0a-0371-44ac-ab66-a4cf6f289660",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d744104e-79f5-4720-a763-b88677eac2a3",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d744104e-79f5-4720-a763-b88677eac2a3",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d744104e-79f5-4720-a763-b88677eac2a3",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "spec": "set1",
            "matches": [
              "2",
              "3",
              "4"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "1",
            "type": "set-verification-result"
          },
          {
            "spec": "set1",
            "matches": [],
            "missing": [],
            "extras": [],
            "wrongOrdered": [
              {
                "actual": 2,
                "id": "6"
              },
              {
                "actual": 3,
                "id": "7"
              },
              {
                "actual": 1,
                "id": "8"
              }
            ],
            "id": "5",
            "type": "set-verification-result"
          },
          {
            "spec": "set1",
            "matches": [
              "1f9d30da-814b-46a0-b188-10203db4b0c9",
              "77c91951-7e49-4a5d-9cad-bfa5c9091db5"
            ],
            "missing": [],
            "extras": [
              {
                "Amount": "300.3",
                "Date": "9/27/2015 12:00:00 AM",
                "Name": "Hammer"
              }
            ],
            "wrongOrdered": [],
            "id": "9",
            "type": "set-verification-result"
          },
          {
            "spec": "set1",
            "matches": [
              "7f80e3f6-943f-46cc-ad07-86961b14ec84",
              "f156b72d-d7c7-49c2-b331-ef642148eaae",
              "b0b7da65-eb98-4b30-86f0-1c760831c054"
            ],
            "missing": [
              "11"
            ],
            "extras": [],
            "wrongOrdered": [],
            "id": "10",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "Date",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "12",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAreBefore",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 8,
          "wrongs": 5,
          "errors": 0,
          "invalids": 1
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "set2": {
      "id": "set2",
      "data": {
        "title": "Successful OrderedStrings",
        "path": "Sets/Successful OrderedStrings",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "set2"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e35f32cf-064b-499e-ab2f-1235eebfaba9",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c4cce9e2-47e8-4014-b48c-e1e2381baca0",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f974723f-8a86-48c8-9a37-a488230ff8e6",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6b1918c7-1d12-4010-857a-ca902ed58f87",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f259cd43-eeec-4296-849b-74fe8073b993",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "71e5fab8-a630-4716-bfe6-13ad14982c32",
              "12e5ea22-a742-489f-9142-22b92b0ee96a",
              "a851606e-e722-4c9b-8727-d8ad5545f7ff",
              "92402e4b-2d9a-49c5-af5e-7f3082e771cd",
              "a8de8aa3-da90-4d37-9d0f-90c21d847372"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "f5609971-1366-4823-bc3c-2f78d1341017",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "c9c91f8a-f550-43e1-a9e1-0eb5c5d3203e",
              "51c6c58d-7fe2-4c31-967b-3cff71c6cdb9",
              "d3f36a1d-f7b7-4bdb-ba6b-9b118478cad8",
              "44c16ba9-c3cf-4891-bd97-77262bb3c92e",
              "02c13a23-5e38-4a2e-8d35-2c22daa32f1f"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "09f1449a-728e-4273-bcb2-43e53bd42f70",
            "type": "set-verification-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIsBefore",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 10,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "set3": {
      "id": "set3",
      "data": {
        "title": "Set with Error",
        "path": "Sets/Set with Error",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "set3"
      },
      "results": {
        "results": [
          {
            "status": "error",
            "error": "System.AggregateException: One or more errors occurred. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<ThrowsErrorOnDataFetch>b__11() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.<>c__DisplayClass21`1.<VerifySetOf>b__20(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 493\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3.<Fetch>b__0() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 50\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---> (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<ThrowsErrorOnDataFetch>b__11() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.<>c__DisplayClass21`1.<VerifySetOf>b__20(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 493\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3.<Fetch>b__0() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 50\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()<---\r\n",
            "cells": [],
            "id": "1",
            "spec": "set3",
            "position": "before",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">System.AggregateException: One or more errors occurred. ---&gt; System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;ThrowsErrorOnDataFetch&gt;b__11() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass21`1.&lt;VerifySetOf&gt;b__20(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 493\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3.&lt;Fetch&gt;b__0() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 50\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---&gt; (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;ThrowsErrorOnDataFetch&gt;b__11() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass21`1.&lt;VerifySetOf&gt;b__20(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 493\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3.&lt;Fetch&gt;b__0() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 50\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()&lt;---\r\n</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 1,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "set4": {
      "id": "set4",
      "data": {
        "title": "Unordered Set",
        "path": "Sets/Unordered Set",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "set4"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0541dabc-8fea-4fec-9678-c02d9c915570",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0541dabc-8fea-4fec-9678-c02d9c915570",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0541dabc-8fea-4fec-9678-c02d9c915570",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8fd1aee2-cdb7-43c2-a1d0-b1b73679953a",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8fd1aee2-cdb7-43c2-a1d0-b1b73679953a",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8fd1aee2-cdb7-43c2-a1d0-b1b73679953a",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2ee4cadd-f73c-48ce-9c67-4ebeeb6a71c5",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2ee4cadd-f73c-48ce-9c67-4ebeeb6a71c5",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2ee4cadd-f73c-48ce-9c67-4ebeeb6a71c5",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "Amount",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "8238047a-59cc-4e2a-8488-a8ffe19b7e69",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAreBefore",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 1
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "set5": {
      "id": "set5",
      "data": {
        "title": "Unsuccessful Ordering",
        "path": "Sets/Unsuccessful Ordering",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "set5"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fcdf473b-e1ed-40fc-aaad-47443df2d630",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6b6285c6-eb73-405a-8ab6-586615f63eee",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "45aae2b3-0680-4b3e-8597-8e47d74c91a2",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0db6502b-94ce-46cf-9a5d-efe25c4cfd0d",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a766db61-4034-44cd-bbf8-78106a268ab7",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "62e6d31b-b7b1-46c1-a160-70fea13b72b1",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "de645578-4d49-49cd-9140-e230d54af3a6",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bfd6ddc6-0069-4953-8c9f-b1b0b44121c2",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "3e382d64-7e08-4f18-b866-6426ef92195f",
              "deb3e83a-8730-47b9-9cab-7c6fef89652c",
              "8b66ac0d-3040-4827-bc92-25b2e0538b67",
              "7bfa4d6a-40b0-46dd-bdb6-29e46fbe89ab"
            ],
            "missing": [
              "202926cf-2b5c-4d4a-b4d9-d6349ce01879"
            ],
            "extras": [
              {
                "expected": "Rand"
              },
              {
                "expected": "Mat"
              }
            ],
            "wrongOrdered": [
              {
                "actual": 5,
                "id": "6e76d908-b4aa-4356-906b-e7a59b99592b"
              },
              {
                "actual": 4,
                "id": "b8f29de7-8a26-4b8b-8816-a9535fa38d45"
              }
            ],
            "id": "4f091fff-8c47-4a91-90c4-19c01477dddb",
            "type": "set-verification-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIsBefore",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 4,
          "wrongs": 5,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "table1": {
      "id": "table1",
      "data": {
        "title": "Boolean Results in a Table",
        "path": "Tables/Boolean Results in a Table",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "table1"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "IsEven",
                "id": null,
                "status": "success"
              }
            ],
            "id": "98767450-8a39-4187-a0e8-1ab5eb24470a",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "IsEven",
                "id": null,
                "status": "success"
              }
            ],
            "id": "5de01d3f-02e4-4dff-8af8-122fcbb31735",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Table:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IsPositive:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IsPositive:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 2,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "table2": {
      "id": "table2",
      "data": {
        "title": "Decision Table",
        "path": "Tables/Decision Table",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "table2"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "FirstName",
                "id": null,
                "status": "ok"
              },
              {
                "actual": null,
                "error": null,
                "cell": "LastName",
                "id": null,
                "status": "ok"
              },
              {
                "actual": null,
                "error": null,
                "cell": "FullName",
                "id": null,
                "status": "success"
              },
              {
                "actual": null,
                "error": null,
                "cell": "LastNameFirst",
                "id": null,
                "status": "success"
              }
            ],
            "id": "3970ac0f-bb56-4c91-b9ce-eea59c870a47",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "FirstName",
                "id": null,
                "status": "ok"
              },
              {
                "actual": null,
                "error": null,
                "cell": "LastName",
                "id": null,
                "status": "ok"
              },
              {
                "actual": "Hank Hill",
                "error": null,
                "cell": "FullName",
                "id": null,
                "status": "failed"
              },
              {
                "actual": "Hill, Hank",
                "error": null,
                "cell": "LastNameFirst",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "b0a68128-4909-422d-8d0d-42161ee880b4",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Table:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": null,
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": null,
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 2,
          "wrongs": 2,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "table3": {
      "id": "table3",
      "data": {
        "title": "Table with Optional Columns",
        "path": "Tables/Table with Optional Columns",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "table3"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3dfb13f7-2f68-4990-95a3-e5af3977f762",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3c3e3997-f8f0-4abf-85ac-ddfef633eb86",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "52a8fb06-b196-4677-9c85-aca0a07a1b91",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "763ee3ab-bc57-42a9-b3b1-cd52547fa6d0",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Table:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TableWithLotsOfOptions:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TableWithLotsOfOptions:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TableWithLotsOfOptions:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TableWithLotsOfOptions:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "table4": {
      "id": "table4",
      "data": {
        "title": "Tables with Errors",
        "path": "Tables/Tables with Errors",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "table4"
      },
      "results": {
        "results": [
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<BeforeThrowsError>b__5() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 39\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass2.<Before>b__1(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 65\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
            "cells": [],
            "id": "before",
            "spec": "table4",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "581ed97a-e866-44fa-8f4a-acf34c4cff4f",
            "spec": "table4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a7620a36-0055-4453-bae5-36b9f653c3bf",
            "spec": "table4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<AfterThrowsError>b__b() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 46\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass5.<After>b__4(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 76\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
            "cells": [],
            "id": "after",
            "spec": "table4",
            "position": "after",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Table:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "BeforeThrowsErrorBefore",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "BeforeThrowsError:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AfterThrowsError:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AfterThrowsError:After",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.&lt;BeforeThrowsError&gt;b__5() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 39\r\n   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass2.&lt;Before&gt;b__1(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 65\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>\n<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.&lt;AfterThrowsError&gt;b__b() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 46\r\n   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass5.&lt;After&gt;b__4(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 76\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 2,
          "invalids": 0
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    },
    "table5": {
      "id": "table5",
      "data": {
        "title": "Tables",
        "path": "Tables/Tables",
        "max-retries": 0,
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "mode": "header",
        "tags": [],
        "last-updated": "Friday, September 25, 2015",
        "steps": [],
        "id": "table5"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "x",
                "id": null,
                "status": "invalid"
              },
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "y",
                "id": null,
                "status": "invalid"
              },
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "sum",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "1",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "sum",
                "id": null,
                "status": "success"
              }
            ],
            "id": "377dfb6b-fb1f-4c18-8e02-fbaa891d34a6",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "4",
                "error": null,
                "cell": "sum",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "67d453cf-d65b-4a23-a5c0-831735ec11ba",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4",
            "spec": "table5",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "product",
                "id": null,
                "status": "success"
              }
            ],
            "id": "4",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5",
            "spec": "table5",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "Infinity",
                "error": null,
                "cell": "product",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "5",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "x",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "8167dce8-524b-4fbf-beff-07d05bc5ce11",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8167dce8-524b-4fbf-beff-07d05bc5ce11",
            "spec": "table5",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "product",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "8167dce8-524b-4fbf-beff-07d05bc5ce11",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a7d7089a-7901-4beb-99ee-bc0c53749bf6",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a7d7089a-7901-4beb-99ee-bc0c53749bf6",
            "spec": "table5",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "product",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "a7d7089a-7901-4beb-99ee-bc0c53749bf6",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Fixture",
            "subject": "Table:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Sum:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Sum:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Sum:Row",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0
          }
        ],
        "duration": 0,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "9:48 AM",
        "counts": {
          "rights": 2,
          "wrongs": 2,
          "errors": 0,
          "invalids": 6
        }
      },
      "time": "9:48:03 AM",
      "type": "spec-execution-completed"
    }
  }
}