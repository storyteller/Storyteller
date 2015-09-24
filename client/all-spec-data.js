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
              "id": "0e272d94-281a-4400-9660-37703b287934"
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
                      "id": "b4f055af-609b-48bc-a231-72381d044f14"
                    }
                  ],
                  "activeCells": {},
                  "id": "errors"
                }
              ],
              "id": "51d0b4cd-013b-48f9-9696-8233b9f5a744"
            },
            {
              "key": "DoNotThrowAnExceptionOnTheNextEmbed",
              "cells": {},
              "collections": [],
              "id": "faea967d-8144-47ca-bfa4-ac65fc1e68ff"
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
                      "id": "62c19ad1-ce14-4602-9059-0a1dc36cc9ec"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "5",
                        "y": "5",
                        "returnValue": "11"
                      },
                      "collections": [],
                      "id": "be267fcc-f10d-417f-b432-f59c9701e429"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "5",
                        "y": "6",
                        "returnValue": "abc"
                      },
                      "collections": [],
                      "id": "edc09159-d09f-4fde-8f06-fe9a39559a27"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "cc2c4b9b-bfb8-45c1-b07f-d530f0f5e3c0"
                    }
                  ],
                  "activeCells": {},
                  "id": "no-errors"
                }
              ],
              "id": "1c0daa9d-40f2-40e3-aa0e-7bc9c1c41d46"
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
      "last-updated": "Thursday, September 24, 2015",
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
              "id": "6190b664-7f37-44f4-94cc-c28178fcf3b4"
            },
            {
              "key": "TheAddressShouldBe",
              "cells": {
                "Address1": "2035 Ozark",
                "Address2": "Apt 3",
                "City": "Carthage"
              },
              "collections": [],
              "id": "e9a17ad7-613a-4341-81e7-b176cb5ac202"
            },
            {
              "key": "TheAddressShouldBe",
              "cells": {
                "Address1": "wrong",
                "Address2": "wrong",
                "City": "wrong"
              },
              "collections": [],
              "id": "f7676da7-94e7-4ee4-b715-4af247b05219"
            }
          ],
          "activeCells": {},
          "id": "dd66a00f-50b9-4d48-944a-199290a4732e"
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
      "last-updated": "Thursday, September 24, 2015",
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
              "id": "be483050-57b9-420a-a391-95ec3ff5d7ed"
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
      "last-updated": "Thursday, September 24, 2015",
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
              "id": "0e498ab0-27ff-435d-95da-1bcce71ddcfa"
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
                      "id": "6fa05b7b-a8ed-4b38-bca7-9fa587dcc2ab"
                    },
                    {
                      "key": "table",
                      "cells": {
                        "first": "Harold",
                        "last": "Miller",
                        "fullname": "Harold Mueller"
                      },
                      "collections": [],
                      "id": "d024cba5-4af8-431b-b0a2-87e5b294dd85"
                    }
                  ],
                  "activeCells": {},
                  "id": "f1f0fc1a-0859-4d8f-b599-801b63705c8a"
                }
              ],
              "id": "0e01040e-0191-404f-89fd-00ae0fc9bb85"
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
                      "id": "6197803a-bb3f-417a-99ad-7c5c350b72f5"
                    }
                  ],
                  "activeCells": {},
                  "id": "f186c69d-6632-4257-b01c-2dedb59c184e"
                }
              ],
              "id": "f7a7efd5-7fcf-41ea-9e5b-1a2276b4174f"
            },
            {
              "key": "TheEnumOptionIs",
              "cells": {
                "option": "FirstOption",
                "selectedOption": "0"
              },
              "collections": [],
              "id": "e1b22ed9-caaa-4df6-a12c-ead133a10720"
            }
          ],
          "activeCells": {},
          "id": "4155871e-940f-4376-8fba-3e2ce25a62dd"
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
      "last-updated": "Thursday, September 24, 2015",
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
              "id": "26add432-bf66-479f-ae13-b1232d515a93"
            },
            {
              "key": "Check",
              "cells": {
                "value": "5"
              },
              "collections": [],
              "id": "6b6eae2d-3e7f-47c7-95ad-f510ab0cf401"
            },
            {
              "key": "Set",
              "cells": {
                "value": "6"
              },
              "collections": [],
              "id": "00e23c1b-69b9-4da3-b2ea-1652dea48289"
            },
            {
              "key": "Check",
              "cells": {
                "value": "7"
              },
              "collections": [],
              "id": "76c263ab-5ecb-4593-ab35-0a942b691d26"
            },
            {
              "key": "Set",
              "cells": {
                "value": "abc"
              },
              "collections": [],
              "id": "aed84d40-0d0c-4ded-b98b-e82d751ce34a"
            }
          ],
          "activeCells": {},
          "id": "b8815d01-a84a-4878-834d-0e418de84c32"
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
      "last-updated": "Thursday, September 24, 2015",
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
                      "id": "3ed6fc9c-bb31-4e88-983c-2036d8ab363e"
                    }
                  ],
                  "activeCells": {},
                  "id": "2e87da8f-d2bb-45a0-a375-39e38e3f9564"
                }
              ],
              "id": "2825b770-95e3-4790-85fb-19907738fa4c"
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
      "last-updated": "Thursday, September 24, 2015",
      "steps": [
        {
          "key": "Math",
          "type": "section",
          "steps": [
            {
              "key": "BadGrammar1",
              "cells": {},
              "collections": [],
              "id": "4f3d4921-f387-4b86-b55a-ca7bbe6ba98e"
            },
            {
              "key": "BadGrammar2",
              "cells": {},
              "collections": [],
              "id": "17ff900b-0853-4105-9dd5-c0edbfcbe66d"
            },
            {
              "key": "BadGrammar3",
              "cells": {},
              "collections": [],
              "id": "f031b640-6f1c-4174-a5d5-a9db80026617"
            }
          ],
          "activeCells": {},
          "id": "bac93b61-060e-4b6b-8885-9dd10c04473d"
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
      "last-updated": "Thursday, September 24, 2015",
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
      "last-updated": "Thursday, September 24, 2015",
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
              "id": "831a9110-2120-4258-96fc-833ac4d18460"
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
                      "id": "bdb24499-6590-448e-85b4-17b059c93448"
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
                      "id": "5c1213ec-dd25-4726-acff-5cd49cab6b28"
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
                      "id": "f5df256f-1920-4ff5-9d96-ded13f70afce"
                    }
                  ],
                  "activeCells": {},
                  "id": "79a8390c-ddf7-4b72-b554-e5f682619b45"
                }
              ],
              "id": "5846d9b4-b4b1-475c-8648-2dc6e3cbcada"
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
              "id": "8b0e4c38-9cfb-4935-b32e-d413e2b74bc5"
            }
          ],
          "activeCells": {},
          "id": "aac7011d-c46d-4b50-98c1-1226cade4e1d"
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
      "last-updated": "Thursday, September 24, 2015",
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
              "id": "5192d358-4040-4bd1-a680-285b5c508e17"
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
              "id": "afbe87ad-c3a2-42bd-b04f-11ce049284e1"
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
                      "id": "97413521-ee13-4977-828e-ba5bead2180e"
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
                      "id": "6ca90460-4589-43a2-a967-61f286756744"
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
                      "id": "964e859f-e55d-458f-b0e2-1d2e021c19a5"
                    }
                  ],
                  "activeCells": {},
                  "id": "448ebd96-6532-41e9-a22a-d7bea49a4bb7"
                }
              ],
              "id": "3df57f04-a7c1-47c6-b58c-7a3807ba9c6e"
            }
          ],
          "activeCells": {},
          "id": "28f4e735-97d0-4839-bacb-136291bbc537"
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
      "last-updated": "Thursday, September 24, 2015",
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
              "id": "3a6379e9-af9b-4446-bc82-bacc22b4b782"
            },
            {
              "key": "AddTo5",
              "cells": {
                "x": "5",
                "returnValue": "9",
                "y": "5"
              },
              "collections": [],
              "id": "c67e87b4-36ed-4fff-91f4-58ee21ce906e"
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
      "last-updated": "Thursday, September 24, 2015",
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
      "last-updated": "Thursday, September 24, 2015",
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
              "id": "351e6500-a9ad-4d97-b486-5bd77ba284f3"
            },
            {
              "key": "AddingTo5",
              "cells": {
                "y": "12",
                "returnValue": "15",
                "x": "5"
              },
              "collections": [],
              "id": "8788f4dd-d5c7-4377-88ed-ee0cab0b181f"
            }
          ],
          "activeCells": {},
          "id": "b480c13a-db3b-4f6f-a489-e0324acc8644"
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
      "last-updated": "Thursday, September 24, 2015",
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
              "id": "fcb2e736-d3d4-450c-bfd8-1af2cc07a6b8"
            },
            {
              "key": "MultiplyThenAdd",
              "cells": {
                "multiplier": "3",
                "delta": "4"
              },
              "collections": [],
              "id": "c9dde294-efb8-4237-bedb-7aec318f59f0"
            },
            {
              "key": "Subtract",
              "cells": {
                "operand": "2"
              },
              "collections": [],
              "id": "669e8322-cdc1-4fc1-a087-453b5406fa7e"
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
              "id": "d23414c8-e4f9-402b-8b90-e3279c0098e6"
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
      "last-updated": "Thursday, September 24, 2015",
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
                      "id": "04bd5be2-4640-4d3d-817a-4f9bbfcd023e"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Drill",
                        "Amount": "200.2",
                        "Date": "TODAY+1"
                      },
                      "collections": [],
                      "id": "24ca95d4-acfb-406f-b3ec-d4435cba4cc6"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Hammer",
                        "Amount": "300.3",
                        "Date": "TODAY+2"
                      },
                      "collections": [],
                      "id": "cd990389-e9d3-4ff0-a06b-4a5963e696f8"
                    }
                  ],
                  "activeCells": {},
                  "id": "2e7834ea-0996-4cf9-8968-ca75e938a857"
                }
              ],
              "id": "4b8dee6d-60e9-4515-928a-0c8dffbb5c2f"
            },
            {
              "text": "Completely successful ordering",
              "type": "comment",
              "id": "3bbecdef-9b77-42c9-8889-c35f11d5e843"
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
              "id": "02b2b36f-6df1-4828-8536-bd90eb7d99ee"
            },
            {
              "text": "Out of order",
              "type": "comment",
              "id": "24819dad-105a-4119-ae4d-4fc26b0b5e78"
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
              "id": "28ec15cb-24df-410e-8804-944857bae405"
            },
            {
              "text": "Should have one exra",
              "type": "comment",
              "id": "83839371-c78c-4be9-8fe8-1c73f7030fe9"
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
                      "id": "5f94f826-1550-4ef5-a0b9-447d856a9ebc"
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
                      "id": "e060e667-789c-4bdf-b3ed-03f80dfd19ad"
                    }
                  ],
                  "activeCells": {},
                  "id": "9"
                }
              ],
              "id": "931aab01-b74b-4704-a3a9-f27d4f01fdc0"
            },
            {
              "text": "Should mark one expected result as missing",
              "type": "comment",
              "id": "90b4d0b9-e9e3-41e4-b146-af9f30150279"
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
                      "id": "7bc09333-266e-4ae0-b388-1aad6e7e8967"
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
                      "id": "a8aa8d01-ee9f-41a8-8212-16d3c98da820"
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
                      "id": "26710408-bb74-44c7-be59-a2e165030ccc"
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
              "id": "3bf30a0b-a047-427f-a746-11299265d4ad"
            },
            {
              "text": "One syntax error",
              "type": "comment",
              "id": "e70a43a1-dbaf-49ac-bd00-845a244c6184"
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
                      "id": "103e5ed1-99e2-4862-b93b-d6763437c4a1"
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
                      "id": "c54e46c2-87de-4173-aed3-9549dba47e9f"
                    }
                  ],
                  "activeCells": {},
                  "id": "94daeb7b-e700-4c5b-b3d8-9fc9738e6ecc"
                }
              ],
              "id": "6cbdfe80-6b8d-4d06-a083-2eab4c7891af"
            }
          ],
          "activeCells": {},
          "id": "78fdbb8f-45e9-4286-ba65-71919aee2d3d"
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
      "last-updated": "Thursday, September 24, 2015",
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
                      "id": "3cd560fa-82f3-43e2-a4f5-9c7d976108fe"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Josh"
                      },
                      "collections": [],
                      "id": "6b5537b6-4a7f-4537-a34a-b05d82f7b3dd"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Gary"
                      },
                      "collections": [],
                      "id": "a3ee3beb-0488-4352-a3fe-e1a4237fd118"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Kevin"
                      },
                      "collections": [],
                      "id": "e19ccedc-bb4c-49eb-8ae5-51472a299969"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Chad"
                      },
                      "collections": [],
                      "id": "c2045e91-85fd-4747-8dfe-e87d7255543b"
                    }
                  ],
                  "activeCells": {},
                  "id": "edc8ca91-9e66-4dbd-8a3c-caf84e3de580"
                }
              ],
              "id": "fb90aa13-8d60-4cc4-940d-6c1142a2fe64"
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
                      "id": "8f2612d1-3cc6-4cd0-af3d-35426552c5f0"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Josh",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "3b3f7515-7dd7-493b-bdb6-4cfb5b8d4a45"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Gary",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "fd1d7422-a04b-47e2-ab66-08511d4f1016"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Kevin",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "866ffabd-f67c-48b2-b565-f48298a68ab9"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Chad",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "00b13d74-181b-4573-8865-6948b6463eba"
                    }
                  ],
                  "activeCells": {},
                  "id": "c21a5163-209d-4c08-b4c9-fbbbff617864"
                }
              ],
              "id": "20d9482e-1c6f-4007-8897-199260b92f14"
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
                      "id": "3b34d072-fe43-42d7-a573-a1637affadb5"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Chad",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "f2f7444f-5747-4c57-b623-72f2e7dfe90a"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Jeremy",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "7094eff9-27eb-4741-8e98-95949a5841a5"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Josh",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "25a94c39-3205-4f86-8a57-dbe3a23014cd"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Gary",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "58a2795b-45d6-425f-aa5a-44cf71b5abd2"
                    }
                  ],
                  "activeCells": {},
                  "id": "5b5ec4ca-b26e-4aa1-a6c0-89ab53a3cd98"
                }
              ],
              "id": "a618ac49-f645-4c76-ba5d-354b047a5322"
            }
          ],
          "activeCells": {},
          "id": "c990a7d1-f9d0-4b0d-b2d8-9ebdd35ce020"
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
      "last-updated": "Thursday, September 24, 2015",
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
                      "id": "117aacfa-8b2b-45b0-8d4e-23273c315757"
                    },
                    {
                      "key": "rows",
                      "cells": {
                        "Name": "b"
                      },
                      "collections": [],
                      "id": "f23a2537-fe7c-4933-9e8c-74f535b4ff79"
                    },
                    {
                      "key": "rows",
                      "cells": {
                        "Name": "c"
                      },
                      "collections": [],
                      "id": "c211f112-0ab8-488c-9732-fbe56905a04d"
                    }
                  ],
                  "activeCells": {},
                  "id": "1"
                }
              ],
              "id": "7bd62a59-4164-493e-a72b-1c9eb8e6c624"
            }
          ],
          "activeCells": {},
          "id": "4578725a-5724-46b1-a959-cb9123aa6c2f"
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
      "last-updated": "Thursday, September 24, 2015",
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
                      "id": "f5659655-9af7-43a1-a496-491665db050c"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "200.2",
                        "Date": "TODAY+1",
                        "Name": "Drill"
                      },
                      "collections": [],
                      "id": "cd2b5d24-5256-4d6e-a702-fd049991d22f"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "300.3",
                        "Date": "TODAY+2",
                        "Name": "Hammer"
                      },
                      "collections": [],
                      "id": "22e9aa97-0d22-4413-8145-831670fc50ed"
                    }
                  ],
                  "activeCells": {},
                  "id": "0ed41b50-dcfc-45f0-b0ca-c52413e0dd80"
                }
              ],
              "id": "1ade977d-e798-4b45-bd06-f844745a5455"
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
                      "id": "21d98160-c8b5-4851-8259-4d99f92eacd3"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "300.3",
                        "Date": "TODAY+2",
                        "Name": "Hammer"
                      },
                      "collections": [],
                      "id": "2bf5e32a-513a-401c-87c1-3d5793d59550"
                    }
                  ],
                  "activeCells": {},
                  "id": "58d1ba94-bb5f-4850-98e1-1c58530fe567"
                }
              ],
              "id": "80db6227-40dd-41ac-9d42-fee78f598475"
            }
          ],
          "activeCells": {},
          "id": "d52ec56b-0264-426c-a85a-38b400325c8b"
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
      "last-updated": "Thursday, September 24, 2015",
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
                      "id": "84371a43-0354-400b-89c8-11d74f509972"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Josh"
                      },
                      "collections": [],
                      "id": "7b23eb72-6809-4fc5-a5ca-bbf701c175aa"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Gary"
                      },
                      "collections": [],
                      "id": "4aa28307-9f40-4dc5-aab0-2c84d9580ea8"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Kevin"
                      },
                      "collections": [],
                      "id": "307ec3c7-4bd2-45aa-9eeb-be8fb05db762"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Chad"
                      },
                      "collections": [],
                      "id": "03018dac-9f72-40cf-b78b-ed048f0538f6"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Rand"
                      },
                      "collections": [],
                      "id": "e4f1d7c9-308e-4a4a-a46b-c242ac56b4b9"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Perrin"
                      },
                      "collections": [],
                      "id": "23bde050-c9f2-4915-8a87-4fec52cf60b1"
                    },
                    {
                      "key": "TheDataIs-row",
                      "cells": {
                        "name": "Mat"
                      },
                      "collections": [],
                      "id": "97cc7d7d-efbb-4f1b-9ac2-922cd464b474"
                    }
                  ],
                  "activeCells": {},
                  "id": "61c521ec-1d41-4492-b00c-695d8cc4440b"
                }
              ],
              "id": "034d2b73-d95a-465c-a802-a3716519e76e"
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
                      "id": "f21dd892-9cb5-4c06-b0bb-f8d28fdb6316"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Josh"
                      },
                      "collections": [],
                      "id": "83008e57-24f7-4839-8f3a-e970e0e7bd3b"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Gary"
                      },
                      "collections": [],
                      "id": "9415a3d3-1721-4c6e-8c3c-2bac43de4173"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Chad"
                      },
                      "collections": [],
                      "id": "9c0613ac-c531-4159-bc67-97b0c8163889"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Kevin"
                      },
                      "collections": [],
                      "id": "64e8840d-f4a6-45e6-8927-ba46df5687c0"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Egwene"
                      },
                      "collections": [],
                      "id": "d1c87ce6-4737-4526-80c7-1ecfb63f3de8"
                    },
                    {
                      "key": "OrderedStringSet-row",
                      "cells": {
                        "expected": "Perrin"
                      },
                      "collections": [],
                      "id": "d3206bdb-7839-4f1e-8cee-2a9f142f2462"
                    }
                  ],
                  "activeCells": {},
                  "id": "4f091fff-8c47-4a91-90c4-19c01477dddb"
                }
              ],
              "id": "900065aa-7caa-4f53-a19c-2966fd498167"
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
      "last-updated": "Thursday, September 24, 2015",
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
                      "id": "0f2a33b7-0a60-49fc-9e55-39d5c5604e7c"
                    },
                    {
                      "key": "IsPositive-row",
                      "cells": {
                        "number": "-5",
                        "IsEven": "false"
                      },
                      "collections": [],
                      "id": "5ae62a56-12f6-496d-9ef5-ac0c4aea7669"
                    }
                  ],
                  "activeCells": {},
                  "id": "a481d76f-66ae-464f-8c6f-2739e4c39d3e"
                }
              ],
              "id": "5d2ddb56-fb4f-4b85-a777-ee43ce88f40e"
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
      "last-updated": "Thursday, September 24, 2015",
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
                      "id": "63a6fb53-49c4-4012-93b9-8c401024ecf4"
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
                      "id": "566cbce4-ace3-4978-b64c-a33c3d8c4b73"
                    }
                  ],
                  "activeCells": {},
                  "id": "a278761d-5662-437f-a8dc-419c817c64b1"
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
                      "id": "1f462ed4-d97f-4a53-b298-be6d5e614611"
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
                      "id": "eb74db93-ec65-4258-8d3a-e2e8ccf2af2c"
                    }
                  ],
                  "activeCells": {},
                  "id": "705981df-f94d-4d1b-bc71-9953c8a29cd2"
                }
              ],
              "id": "6a8a3600-e33b-4b01-9d43-48e4b874d822"
            }
          ],
          "activeCells": {},
          "id": "d52a7672-fda4-44a3-bde9-248d92289b5a"
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
      "last-updated": "Thursday, September 24, 2015",
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
                      "id": "6c106783-b270-406f-8559-dd3233638353"
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
                      "id": "5fdda899-5450-4ffc-b851-e73dec4ca235"
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
                      "id": "cd1c28c0-da94-46ae-817b-33c4bfb4493b"
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
                      "id": "17680330-3ea2-4a21-bc87-d753feb116a0"
                    }
                  ],
                  "activeCells": {
                    "b": false,
                    "c": false
                  },
                  "id": "3c402eda-44ab-48b2-bc1e-e83730c123cf"
                }
              ],
              "id": "4564c319-190e-4954-8a55-40c5e8fdb135"
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
      "last-updated": "Thursday, September 24, 2015",
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
                      "id": "8ff00083-1fa0-4dab-9aa4-1e03ed162b30"
                    }
                  ],
                  "activeCells": {},
                  "id": "before"
                }
              ],
              "id": "f8b4b177-57dc-437c-9097-d54ccf1175fb"
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
                      "id": "33fec64a-6c21-45e7-86b5-29090e4904f1"
                    }
                  ],
                  "activeCells": {},
                  "id": "after"
                }
              ],
              "id": "db1cb5ec-4a34-476e-aba4-a014e7db8664"
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
      "last-updated": "Thursday, September 24, 2015",
      "steps": [
        {
          "key": "Table",
          "type": "section",
          "steps": [
            {
              "text": "Table by the ExposeAsTable attribute",
              "type": "comment",
              "id": "d635b97f-4cd6-47d6-813e-f012434cfebf"
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
                      "id": "e625806c-b270-401a-a83a-0fd26e2eca2d"
                    },
                    {
                      "key": "sum",
                      "cells": {
                        "x": "2",
                        "y": "2",
                        "sum": "5"
                      },
                      "collections": [],
                      "id": "c1f8796b-069b-4cac-8263-53d78cf4fb6b"
                    }
                  ],
                  "activeCells": {},
                  "id": "fabc1640-4c1e-4559-bb2b-5436b3bb6717"
                }
              ],
              "id": "72bbe13a-f6e8-4caa-938b-bf273c099813"
            },
            {
              "text": "Table fixture from script",
              "type": "comment",
              "id": "64c686ee-43f1-4710-b4e0-c9723bbbf1e6"
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
                      "id": "38362ec3-d5bb-4b60-b7d6-7f6db39e2af6"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "x": "3",
                        "y": "3",
                        "product": "****"
                      },
                      "collections": [],
                      "id": "336bb797-76fc-4c6d-92e5-8a8ee81925af"
                    }
                  ],
                  "activeCells": {},
                  "id": "f2e06fd4-a5fe-495d-938c-a20e9846d6b8"
                }
              ],
              "id": "1811fedd-f6ee-4f36-9c8f-ad893874f86a"
            }
          ],
          "activeCells": {},
          "id": "8b234cf4-f2e3-40ab-9118-8f84c941c5ac"
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "last-updated": "Thursday, September 24, 2015",
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
            "id": "0e272d94-281a-4400-9660-37703b287934",
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
            "id": "b4f055af-609b-48bc-a231-72381d044f14",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "faea967d-8144-47ca-bfa4-ac65fc1e68ff",
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
            "id": "62c19ad1-ce14-4602-9059-0a1dc36cc9ec",
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
            "id": "be267fcc-f10d-417f-b432-f59c9701e429",
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
            "id": "edc09159-d09f-4fde-8f06-fe9a39559a27",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\MathFixture.cs:line 122\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__e.MoveNext() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 81\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
            "cells": [],
            "id": "cc2c4b9b-bfb8-45c1-b07f-d530f0f5e3c0",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 2,
          "wrongs": 1,
          "errors": 2,
          "invalids": 1
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "general1"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6190b664-7f37-44f4-94cc-c28178fcf3b4",
            "spec": "general1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6190b664-7f37-44f4-94cc-c28178fcf3b4",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6190b664-7f37-44f4-94cc-c28178fcf3b4",
            "spec": "general1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6190b664-7f37-44f4-94cc-c28178fcf3b4",
            "spec": "general1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6190b664-7f37-44f4-94cc-c28178fcf3b4",
            "spec": "general1",
            "position": "5",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6190b664-7f37-44f4-94cc-c28178fcf3b4",
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
            "id": "e9a17ad7-613a-4341-81e7-b176cb5ac202",
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
            "id": "e9a17ad7-613a-4341-81e7-b176cb5ac202",
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
            "id": "e9a17ad7-613a-4341-81e7-b176cb5ac202",
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
            "id": "f7676da7-94e7-4ee4-b715-4af247b05219",
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
            "id": "f7676da7-94e7-4ee4-b715-4af247b05219",
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
            "id": "f7676da7-94e7-4ee4-b715-4af247b05219",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 3,
          "wrongs": 3,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "SometimesSlow"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "be483050-57b9-420a-a391-95ec3ff5d7ed",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
            "id": "0e498ab0-27ff-435d-95da-1bcce71ddcfa",
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
            "id": "6fa05b7b-a8ed-4b38-bca7-9fa587dcc2ab",
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
            "id": "d024cba5-4af8-431b-b0a2-87e5b294dd85",
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
            "id": "6197803a-bb3f-417a-99ad-7c5c350b72f5",
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
            "id": "e1b22ed9-caaa-4df6-a12c-ead133a10720",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 4,
          "wrongs": 1,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "general3"
      },
      "results": {
        "results": [
          {
            "status": "invalid",
            "error": "Fixture with key 'Service' does not exist",
            "cells": [],
            "id": "b8815d01-a84a-4878-834d-0e418de84c32",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 1
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
            "id": "3ed6fc9c-bb31-4e88-983c-2036d8ab363e",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 1,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "general4"
      },
      "results": {
        "results": [
          {
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "4f3d4921-f387-4b86-b55a-ca7bbe6ba98e",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "17ff900b-0853-4105-9dd5-c0edbfcbe66d",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "f031b640-6f1c-4174-a5d5-a9db80026617",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 3,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 1
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "paragraph1"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "831a9110-2120-4258-96fc-833ac4d18460",
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
            "id": "831a9110-2120-4258-96fc-833ac4d18460",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "831a9110-2120-4258-96fc-833ac4d18460",
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
            "id": "831a9110-2120-4258-96fc-833ac4d18460",
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
            "id": "bdb24499-6590-448e-85b4-17b059c93448",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bdb24499-6590-448e-85b4-17b059c93448",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bdb24499-6590-448e-85b4-17b059c93448",
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
            "id": "bdb24499-6590-448e-85b4-17b059c93448",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5c1213ec-dd25-4726-acff-5cd49cab6b28",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5c1213ec-dd25-4726-acff-5cd49cab6b28",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5c1213ec-dd25-4726-acff-5cd49cab6b28",
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
            "id": "5c1213ec-dd25-4726-acff-5cd49cab6b28",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f5df256f-1920-4ff5-9d96-ded13f70afce",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f5df256f-1920-4ff5-9d96-ded13f70afce",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f5df256f-1920-4ff5-9d96-ded13f70afce",
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
            "id": "f5df256f-1920-4ff5-9d96-ded13f70afce",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8b0e4c38-9cfb-4935-b32e-d413e2b74bc5",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8b0e4c38-9cfb-4935-b32e-d413e2b74bc5",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8b0e4c38-9cfb-4935-b32e-d413e2b74bc5",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<.ctor>b__3(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\CompositeFixture.cs:line 25\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
            "cells": [],
            "id": "8b0e4c38-9cfb-4935-b32e-d413e2b74bc5",
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
            "id": "8b0e4c38-9cfb-4935-b32e-d413e2b74bc5",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 2,
          "wrongs": 3,
          "errors": 1,
          "invalids": 2
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "paragraph2"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5192d358-4040-4bd1-a680-285b5c508e17",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5192d358-4040-4bd1-a680-285b5c508e17",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5192d358-4040-4bd1-a680-285b5c508e17",
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
            "id": "5192d358-4040-4bd1-a680-285b5c508e17",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "afbe87ad-c3a2-42bd-b04f-11ce049284e1",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "afbe87ad-c3a2-42bd-b04f-11ce049284e1",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "afbe87ad-c3a2-42bd-b04f-11ce049284e1",
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
            "id": "afbe87ad-c3a2-42bd-b04f-11ce049284e1",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "97413521-ee13-4977-828e-ba5bead2180e",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "97413521-ee13-4977-828e-ba5bead2180e",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "97413521-ee13-4977-828e-ba5bead2180e",
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
            "id": "97413521-ee13-4977-828e-ba5bead2180e",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6ca90460-4589-43a2-a967-61f286756744",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6ca90460-4589-43a2-a967-61f286756744",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6ca90460-4589-43a2-a967-61f286756744",
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
            "id": "6ca90460-4589-43a2-a967-61f286756744",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "964e859f-e55d-458f-b0e2-1d2e021c19a5",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "964e859f-e55d-458f-b0e2-1d2e021c19a5",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "964e859f-e55d-458f-b0e2-1d2e021c19a5",
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
            "id": "964e859f-e55d-458f-b0e2-1d2e021c19a5",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 2,
          "wrongs": 3,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
            "id": "3a6379e9-af9b-4446-bc82-bacc22b4b782",
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
            "id": "c67e87b4-36ed-4fff-91f4-58ee21ce906e",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 1,
          "wrongs": 1,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 1,
          "wrongs": 1,
          "errors": 1,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
            "id": "351e6500-a9ad-4d97-b486-5bd77ba284f3",
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
            "id": "8788f4dd-d5c7-4377-88ed-ee0cab0b181f",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 1,
          "wrongs": 1,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
            "id": "fcb2e736-d3d4-450c-bfd8-1af2cc07a6b8",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c9dde294-efb8-4237-bedb-7aec318f59f0",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "669e8322-cdc1-4fc1-a087-453b5406fa7e",
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
            "id": "d23414c8-e4f9-402b-8b90-e3279c0098e6",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 2,
          "wrongs": 2,
          "errors": 1,
          "invalids": 1
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "set1"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "04bd5be2-4640-4d3d-817a-4f9bbfcd023e",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "04bd5be2-4640-4d3d-817a-4f9bbfcd023e",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "04bd5be2-4640-4d3d-817a-4f9bbfcd023e",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "24ca95d4-acfb-406f-b3ec-d4435cba4cc6",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "24ca95d4-acfb-406f-b3ec-d4435cba4cc6",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "24ca95d4-acfb-406f-b3ec-d4435cba4cc6",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd990389-e9d3-4ff0-a06b-4a5963e696f8",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd990389-e9d3-4ff0-a06b-4a5963e696f8",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd990389-e9d3-4ff0-a06b-4a5963e696f8",
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
              "5f94f826-1550-4ef5-a0b9-447d856a9ebc",
              "e060e667-789c-4bdf-b3ed-03f80dfd19ad"
            ],
            "missing": [],
            "extras": [
              {
                "Amount": "300.3",
                "Date": "9/26/2015 12:00:00 AM",
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
              "7bc09333-266e-4ae0-b388-1aad6e7e8967",
              "a8aa8d01-ee9f-41a8-8212-16d3c98da820",
              "26710408-bb74-44c7-be59-a2e165030ccc"
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
        "time": "9:36 AM",
        "counts": {
          "rights": 8,
          "wrongs": 5,
          "errors": 0,
          "invalids": 1
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "set2"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3cd560fa-82f3-43e2-a4f5-9c7d976108fe",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6b5537b6-4a7f-4537-a34a-b05d82f7b3dd",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a3ee3beb-0488-4352-a3fe-e1a4237fd118",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e19ccedc-bb4c-49eb-8ae5-51472a299969",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c2045e91-85fd-4747-8dfe-e87d7255543b",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "8f2612d1-3cc6-4cd0-af3d-35426552c5f0",
              "3b3f7515-7dd7-493b-bdb6-4cfb5b8d4a45",
              "fd1d7422-a04b-47e2-ab66-08511d4f1016",
              "866ffabd-f67c-48b2-b565-f48298a68ab9",
              "00b13d74-181b-4573-8865-6948b6463eba"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "c21a5163-209d-4c08-b4c9-fbbbff617864",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "3b34d072-fe43-42d7-a573-a1637affadb5",
              "f2f7444f-5747-4c57-b623-72f2e7dfe90a",
              "7094eff9-27eb-4741-8e98-95949a5841a5",
              "25a94c39-3205-4f86-8a57-dbe3a23014cd",
              "58a2795b-45d6-425f-aa5a-44cf71b5abd2"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "5b5ec4ca-b26e-4aa1-a6c0-89ab53a3cd98",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 10,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 1,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "set4"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f5659655-9af7-43a1-a496-491665db050c",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f5659655-9af7-43a1-a496-491665db050c",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f5659655-9af7-43a1-a496-491665db050c",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd2b5d24-5256-4d6e-a702-fd049991d22f",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd2b5d24-5256-4d6e-a702-fd049991d22f",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd2b5d24-5256-4d6e-a702-fd049991d22f",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22e9aa97-0d22-4413-8145-831670fc50ed",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22e9aa97-0d22-4413-8145-831670fc50ed",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22e9aa97-0d22-4413-8145-831670fc50ed",
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
            "id": "21d98160-c8b5-4851-8259-4d99f92eacd3",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 1
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "set5"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "84371a43-0354-400b-89c8-11d74f509972",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7b23eb72-6809-4fc5-a5ca-bbf701c175aa",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4aa28307-9f40-4dc5-aab0-2c84d9580ea8",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "307ec3c7-4bd2-45aa-9eeb-be8fb05db762",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "03018dac-9f72-40cf-b78b-ed048f0538f6",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e4f1d7c9-308e-4a4a-a46b-c242ac56b4b9",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "23bde050-c9f2-4915-8a87-4fec52cf60b1",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "97cc7d7d-efbb-4f1b-9ac2-922cd464b474",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "f21dd892-9cb5-4c06-b0bb-f8d28fdb6316",
              "83008e57-24f7-4839-8f3a-e970e0e7bd3b",
              "9415a3d3-1721-4c6e-8c3c-2bac43de4173",
              "d3206bdb-7839-4f1e-8cee-2a9f142f2462"
            ],
            "missing": [
              "d1c87ce6-4737-4526-80c7-1ecfb63f3de8"
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
                "id": "9c0613ac-c531-4159-bc67-97b0c8163889"
              },
              {
                "actual": 4,
                "id": "64e8840d-f4a6-45e6-8927-ba46df5687c0"
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
        "time": "9:36 AM",
        "counts": {
          "rights": 4,
          "wrongs": 5,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
            "id": "0f2a33b7-0a60-49fc-9e55-39d5c5604e7c",
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
            "id": "5ae62a56-12f6-496d-9ef5-ac0c4aea7669",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 2,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
            "id": "1f462ed4-d97f-4a53-b298-be6d5e614611",
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
            "id": "eb74db93-ec65-4258-8d3a-e2e8ccf2af2c",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 2,
          "wrongs": 2,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
        "steps": [],
        "id": "table3"
      },
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6c106783-b270-406f-8559-dd3233638353",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5fdda899-5450-4ffc-b851-e73dec4ca235",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd1c28c0-da94-46ae-817b-33c4bfb4493b",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "17680330-3ea2-4a21-bc87-d753feb116a0",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
            "id": "8ff00083-1fa0-4dab-9aa4-1e03ed162b30",
            "spec": "table4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "33fec64a-6c21-45e7-86b5-29090e4904f1",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 2,
          "invalids": 0
        }
      },
      "time": "9:36:07 AM",
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
        "last-updated": "Thursday, September 24, 2015",
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
            "id": "e625806c-b270-401a-a83a-0fd26e2eca2d",
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
            "id": "c1f8796b-069b-4cac-8263-53d78cf4fb6b",
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
            "id": "38362ec3-d5bb-4b60-b7d6-7f6db39e2af6",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38362ec3-d5bb-4b60-b7d6-7f6db39e2af6",
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
            "id": "38362ec3-d5bb-4b60-b7d6-7f6db39e2af6",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "336bb797-76fc-4c6d-92e5-8a8ee81925af",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "336bb797-76fc-4c6d-92e5-8a8ee81925af",
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
            "id": "336bb797-76fc-4c6d-92e5-8a8ee81925af",
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
        "time": "9:36 AM",
        "counts": {
          "rights": 2,
          "wrongs": 2,
          "errors": 0,
          "invalids": 6
        }
      },
      "time": "9:36:07 AM",
      "type": "spec-execution-completed"
    }
  }
}