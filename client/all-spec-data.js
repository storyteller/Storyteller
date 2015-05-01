module.exports = {
  "fixtures": [
    {
      "title": "Parking Expiry Rules",
      "key": "ParkingExpiry",
      "implementation": "StoryTeller.Samples.Fixtures.ParkingExpiryFixture",
      "grammars": [
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
          "fixture": {
            "title": "Math",
            "key": "Math",
            "implementation": "StoryTeller.Samples.Fixtures.MathFixture",
            "grammars": [
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
          "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.Exception: This fixture ctor blew up\r\n   at StoryTeller.Samples.Fixtures.FailureFixture..ctor() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\FailureFixture.cs:line 9\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeTypeHandle.CreateInstance(RuntimeType type, Boolean publicOnly, Boolean noCheck, Boolean& canBeCached, RuntimeMethodHandleInternal& ctor, Boolean& bNeedSecurityCheck)\r\n   at System.RuntimeType.CreateInstanceSlow(Boolean publicOnly, Boolean skipCheckThis, Boolean fillCache, StackCrawlMark& stackMark)\r\n   at System.RuntimeType.CreateInstanceDefaultCtor(Boolean publicOnly, Boolean skipCheckThis, Boolean fillCache, StackCrawlMark& stackMark)\r\n   at System.Activator.CreateInstance(Type type, Boolean nonPublic)\r\n   at System.Activator.CreateInstance(Type type)\r\n   at StoryTeller.Model.FixtureLibrary.CreateCompiledFixture(CellHandling cellHandling, Type type) in z:\\code\\Storyteller\\src\\StoryTeller\\Model\\FixtureLibrary.cs:line 71"
        }
      ]
    },
    {
      "title": "Grammar Error",
      "key": "GrammarError",
      "implementation": "StoryTeller.Samples.Fixtures.GrammarErrorFixture",
      "grammars": [
        {
          "key": "Bad",
          "type": "error",
          "IsHidden": false,
          "Key": "Bad",
          "errors": [
            {
              "message": null,
              "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.DivideByZeroException: Attempted to divide by zero.\r\n   at StoryTeller.Samples.Fixtures.GrammarErrorFixture.Bad() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\FailureFixture.cs:line 17\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.ProgrammaticGrammarBuilder.Build(MethodInfo method, Fixture fixture) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\GrammarBuilder.cs:line 66\r\n   at StoryTeller.Grammars.GrammarBuilder.BuildGrammar(MethodInfo method, Fixture fixture) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\GrammarBuilder.cs:line 33"
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
              "default": null,
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
          "fixture": {
            "title": "Simple",
            "key": "Simple",
            "implementation": "StoryTeller.Samples.Fixtures.SimpleFixture",
            "grammars": [
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
                "format": "Start with the number {number}",
                "key": "StartWithTheNumber",
                "type": "sentence",
                "cells": [
                  {
                    "key": "number",
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
                  },
                  {
                    "key": "sum",
                    "default": "NULL",
                    "header": null,
                    "output": true,
                    "editor": "boolean",
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
                "format": "Start with the number {number}",
                "key": "StartWithTheNumber",
                "type": "sentence",
                "cells": [
                  {
                    "key": "number",
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
                  },
                  {
                    "key": "sum",
                    "default": "NULL",
                    "header": null,
                    "output": true,
                    "editor": "boolean",
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
          "format": "Start with the number {number}",
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
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
            },
            {
              "key": "sum",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": "boolean",
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
          "format": "Start with the number {number}",
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
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
            },
            {
              "key": "sum",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": "boolean",
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
          "format": "Start with the number {number}",
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
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
            },
            {
              "key": "sum",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": "boolean",
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
          "format": "Start with the number {number}",
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "key": "number",
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
            },
            {
              "key": "sum",
              "default": "NULL",
              "header": null,
              "output": true,
              "editor": "boolean",
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
          "ordered": true,
          "title": "The Ordered details should be",
          "key": "OrderedDetailsAre",
          "type": "set-verification",
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
              "default": null,
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
          "fixture": {
            "title": "Math",
            "key": "Math",
            "implementation": "StoryTeller.Samples.Fixtures.MathFixture",
            "grammars": [
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
      "tags": [],
      "lifecycle": 1,
      "max-retries": 0,
      "title": "Embeds",
      "steps": [
        {
          "key": "Embedded",
          "type": "section",
          "steps": [
            {
              "key": "ThrowAnExceptionOnTheNextEmbed",
              "cells": {},
              "collections": [],
              "id": "de680b74-f685-458b-bcc9-2457cc5cb15c"
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
                      "id": "45e00896-eae2-455f-b049-6e0ad357ea41"
                    }
                  ],
                  "activeCells": {},
                  "id": "errors"
                }
              ],
              "id": "ad513502-6b24-4586-a35a-364a38c60394"
            },
            {
              "key": "DoNotThrowAnExceptionOnTheNextEmbed",
              "cells": {},
              "collections": [],
              "id": "02d07945-3b82-4273-b22b-bb29d98096ba"
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
                      "id": "77e465d1-3c0f-44b9-962d-4fb5a70d40ce"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "5",
                        "y": "5",
                        "returnValue": "11"
                      },
                      "collections": [],
                      "id": "309e4659-d674-44f0-9260-2d50c514fe72"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "5",
                        "y": "6",
                        "returnValue": "abc"
                      },
                      "collections": [],
                      "id": "35f24255-87a9-4bda-9871-773ea36219df"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "3c50ddb4-b114-45e7-9e7d-1b4f0e3c1ffd"
                    }
                  ],
                  "activeCells": {},
                  "id": "no-errors"
                }
              ],
              "id": "54e6e6ce-78fc-4ea0-8410-ddd36368bc64"
            }
          ],
          "activeCells": {},
          "id": "b1d704cf-6062-40c1-be78-94a8aa901850"
        }
      ],
      "id": "embeds"
    },
    "general1": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Check properties",
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
              "id": "50b582da-2789-4288-97ea-bf921f361ecf"
            },
            {
              "key": "TheAddressShouldBe",
              "cells": {
                "Address1": "2035 Ozark",
                "Address2": "Apt 3",
                "City": "Carthage"
              },
              "collections": [],
              "id": "8457cdb7-0df2-4b3f-81ec-e0c33d151be4"
            },
            {
              "key": "TheAddressShouldBe",
              "cells": {
                "Address1": "wrong",
                "Address2": "wrong",
                "City": "wrong"
              },
              "collections": [],
              "id": "fde4c098-0d66-426f-85ac-ea8d2726d27d"
            }
          ],
          "activeCells": {},
          "id": "ecde32c4-00ba-44a3-8802-0aaa9b1a7044"
        }
      ],
      "id": "general1"
    },
    "SometimesSlow": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Occasionally Times Out",
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
              "id": "568ae85c-b3e3-46d7-8b94-c7397525483d"
            }
          ],
          "activeCells": {},
          "id": "8830a9be-79c5-4152-812a-8222ce399c76"
        }
      ],
      "id": "SometimesSlow"
    },
    "general2": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Selection List Values",
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
              "id": "526ba422-b002-41ee-a05b-9ab71b1e73c5"
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
                      "id": "aa1db006-030a-439a-afed-ec6d377979b7"
                    },
                    {
                      "key": "table",
                      "cells": {
                        "first": "Harold",
                        "last": "Miller",
                        "fullname": "Harold Mueller"
                      },
                      "collections": [],
                      "id": "d4b92aac-a841-4651-858d-f84c1e0d3773"
                    }
                  ],
                  "activeCells": {},
                  "id": "c334d274-aa52-46a9-ae9d-d8aece889762"
                }
              ],
              "id": "40a92dde-0c8f-4f7f-84c5-27da4c0a3087"
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
                      "id": "e2a61237-a0bb-4ff5-b3f6-ce098efff560"
                    }
                  ],
                  "activeCells": {},
                  "id": "66f9c2ff-2c00-4344-9d93-f71e0096ede8"
                }
              ],
              "id": "0e7738d3-1e79-43e8-bce7-d7b5d844caf4"
            },
            {
              "key": "TheEnumOptionIs",
              "cells": {
                "option": "FirstOption",
                "selectedOption": "0"
              },
              "collections": [],
              "id": "c50ba45c-72d8-47d9-9b0f-4eec1de81204"
            }
          ],
          "activeCells": {},
          "id": "98063967-7be5-4d0a-8c6d-d64cb3fc54e7"
        }
      ],
      "id": "general2"
    },
    "general3": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Services",
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
              "id": "9f97d729-c66c-4e2d-a1f9-b5f3e7263510"
            },
            {
              "key": "Check",
              "cells": {
                "value": "5"
              },
              "collections": [],
              "id": "1c91071b-2666-475b-bf0b-7b0140b646a4"
            },
            {
              "key": "Set",
              "cells": {
                "value": "6"
              },
              "collections": [],
              "id": "8a165d99-5aa7-4fd6-a4e5-c6bac1a8ceba"
            },
            {
              "key": "Check",
              "cells": {
                "value": "7"
              },
              "collections": [],
              "id": "f5c175b9-1cfe-4d68-9e7b-674e13c06e1a"
            },
            {
              "key": "Set",
              "cells": {
                "value": "abc"
              },
              "collections": [],
              "id": "580774d9-fce9-4bf9-ae4a-42ba65d134d8"
            }
          ],
          "activeCells": {},
          "id": "730b97d3-2650-4c36-91d9-4e576c831941"
        }
      ],
      "id": "general3"
    },
    "runtime-converter": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "System Defined Lists and Runtime Converters",
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
                        "Position": "LB",
                        "id": "justin-houston"
                      },
                      "collections": [],
                      "id": "justin-houston"
                    }
                  ],
                  "activeCells": {},
                  "id": "2e87da8f-d2bb-45a0-a375-39e38e3f9564"
                }
              ],
              "id": "54544238-deae-4c61-82b4-88a7d4df43fc"
            }
          ],
          "activeCells": {},
          "id": "1951ced7-28f8-4bb3-a7fb-34973aef82f9"
        }
      ],
      "id": "runtime-converter"
    },
    "general4": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Test with Bad Grammar Name",
      "steps": [
        {
          "key": "Math",
          "type": "section",
          "steps": [
            {
              "key": "BadGrammar1",
              "cells": {},
              "collections": [],
              "id": "1eac82e3-b685-409a-b051-5f1902d51232"
            },
            {
              "key": "BadGrammar2",
              "cells": {},
              "collections": [],
              "id": "82756985-8096-43ce-8bc7-be0b6084390e"
            },
            {
              "key": "BadGrammar3",
              "cells": {},
              "collections": [],
              "id": "086694f8-786c-42b3-bda0-25636e13a2e6"
            }
          ],
          "activeCells": {},
          "id": "f3cf8e69-7d70-4799-9cad-4ce79f8106ec"
        }
      ],
      "id": "general4"
    },
    "general5": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Test with Missing Fixture Name",
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
      "tags": [],
      "lifecycle": 1,
      "max-retries": 0,
      "title": "Composite with Errors",
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
              "id": "86edf0b0-2972-44dd-87e3-68fde4739e3d"
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
                      "id": "f7ea34fe-b599-4f5a-829b-62fcc3e7965d"
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
                      "id": "de85d914-af7e-4eae-a25d-bfb58a298c17"
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
                      "id": "f815f7fd-a930-4b0d-bc50-87adf8ad863d"
                    }
                  ],
                  "activeCells": {},
                  "id": "d5cdc624-e856-4403-b133-b793098669ec"
                }
              ],
              "id": "68031d61-b1e0-4373-9b6f-f72bbca8f2f0"
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
              "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43"
            }
          ],
          "activeCells": {},
          "id": "905bebd6-f7f1-4c06-ab20-c8f64d699ce0"
        }
      ],
      "id": "paragraph1"
    },
    "paragraph2": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Simple Composite",
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
              "id": "4015c558-fe1f-49ad-9384-0d7631142ee4"
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
              "id": "8d71cb61-c22d-44bd-8ad7-09c92fb27cb1"
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
                      "id": "f3694fff-a7dc-4f12-a810-126cc2da1df2"
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
                      "id": "7cd97699-1399-4cf1-b352-b4dc7c8cd424"
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
                      "id": "c92d4ed8-e75c-4910-a2e8-46538d4d090b"
                    }
                  ],
                  "activeCells": {},
                  "id": "cf1964a0-1efa-4c25-a06b-949493b83c06"
                }
              ],
              "id": "ac9e24da-d66f-46b9-8b17-1ab09fd6e8ed"
            }
          ],
          "activeCells": {},
          "id": "8b838aa7-42d5-4dba-975d-23d96b4d9eb0"
        }
      ],
      "id": "paragraph2"
    },
    "sentence1": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Currying",
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
              "id": "82e13e5e-a1c5-40ca-aa38-0dda4676c490"
            },
            {
              "key": "AddTo5",
              "cells": {
                "x": "5",
                "returnValue": "9",
                "y": "5"
              },
              "collections": [],
              "id": "23721eab-7547-4df4-8f6e-0c91fbeeec66"
            }
          ],
          "activeCells": {},
          "id": "218f6137-6a3a-481b-80c9-133d882e782e"
        }
      ],
      "id": "sentence1"
    },
    "sentence2": {
      "tags": [],
      "lifecycle": 1,
      "max-retries": 3,
      "title": "Facts",
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
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Importing and Currying",
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
              "id": "ade13b44-6154-4d9b-84a0-c9853bc5e864"
            },
            {
              "key": "AddingTo5",
              "cells": {
                "y": "12",
                "returnValue": "15",
                "x": "5"
              },
              "collections": [],
              "id": "9e56a166-6d80-4167-aa42-d078139deaa6"
            }
          ],
          "activeCells": {},
          "id": "d4f51e02-68ad-4750-97e2-cf378c8d6b29"
        }
      ],
      "id": "sentence3"
    },
    "sentence4": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Sentences",
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
              "id": "75cca299-331a-424f-9bb6-72571bed8e3d"
            },
            {
              "key": "MultiplyThenAdd",
              "cells": {
                "multiplier": "3",
                "delta": "4"
              },
              "collections": [],
              "id": "a2a39487-9572-4658-bd48-3d80fcc224cc"
            },
            {
              "key": "Subtract",
              "cells": {
                "operand": "2"
              },
              "collections": [],
              "id": "3c27288b-9698-4a4a-bcd3-b8407546e325"
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
              "id": "dc5ac0a8-6799-4dcb-a2ac-495c72af9741"
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
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Ordered Set",
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
                      "id": "95ea580c-1eae-4515-be87-6b4cd168f9cc"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Drill",
                        "Amount": "200.2",
                        "Date": "TODAY+1"
                      },
                      "collections": [],
                      "id": "503083c7-f7a3-4c46-b431-6d59e88fcb98"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Hammer",
                        "Amount": "300.3",
                        "Date": "TODAY+2"
                      },
                      "collections": [],
                      "id": "c39f88ba-32de-4f88-9857-037fa81095b7"
                    }
                  ],
                  "activeCells": {},
                  "id": "8e1136d2-a9f6-4eb8-bf60-553d30c8563f"
                }
              ],
              "id": "d590b8ab-8639-4178-b880-8cd3ddc9225d"
            },
            {
              "text": "Completely successful ordering",
              "type": "comment",
              "id": "81f65354-82e3-491a-b5f3-b67c6ed64964"
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
              "id": "448ec81d-6c05-427f-8498-9c58762e0bc5"
            },
            {
              "text": "Out of order",
              "type": "comment",
              "id": "92456969-b746-4e25-8c72-e5492d1b257c"
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
              "id": "3b5a8674-9d39-41c1-9671-c70cf96e32bf"
            },
            {
              "text": "Should have one exra",
              "type": "comment",
              "id": "faf78d20-ecfb-4271-8923-ac6924533ed7"
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
                      "id": "578015f9-c134-4717-bef1-21b649d03acc"
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
                      "id": "9735d07f-21f6-424f-9ecb-db5216967bc6"
                    }
                  ],
                  "activeCells": {},
                  "id": "9"
                }
              ],
              "id": "6c503a94-5009-432f-a98b-964e69988b9d"
            },
            {
              "text": "Should mark one expected result as missing",
              "type": "comment",
              "id": "23b20db3-420e-4fbd-8ede-a7e02e4697dc"
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
                      "id": "650bc653-9d9b-43e7-a888-e5983bd59a3c"
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
                      "id": "10b3c955-28b2-4dd0-bfcc-2e1bcb4c8b11"
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
                      "id": "fa806ffd-79db-43ed-b362-22bddf815fec"
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
              "id": "5e648e08-3c27-48a9-bb5c-d8768c2eb686"
            },
            {
              "text": "One syntax error",
              "type": "comment",
              "id": "bcb6bc3c-7c43-4201-a5dd-a40817aaa502"
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
                      "id": "921e3120-b17d-4439-b13f-f6e61f5c83db"
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
                      "id": "5f6b5871-96c4-456d-a5f6-fae4157eb79b"
                    }
                  ],
                  "activeCells": {},
                  "id": "a57b6d0a-5102-4283-b2f2-a41f465c3118"
                }
              ],
              "id": "2b30ed89-043f-4ea1-87e8-fa69ba692a03"
            }
          ],
          "activeCells": {},
          "id": "3812e87a-f992-4e1b-9891-4cb255561db9"
        }
      ],
      "id": "set1"
    },
    "set2": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Successful OrderedStrings",
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
                      "id": "744f6ab4-9a0e-45bd-999f-29d56ba6aef1"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Josh"
                      },
                      "collections": [],
                      "id": "dbe935b1-58e7-404c-9845-ad821527d7bc"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Gary"
                      },
                      "collections": [],
                      "id": "fb12ec75-fbf9-4960-856e-bcdf1bbfedbe"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Kevin"
                      },
                      "collections": [],
                      "id": "f0168878-fa68-4210-b53c-6c69dbe8011b"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Chad"
                      },
                      "collections": [],
                      "id": "8f7faa20-6d83-4d97-81bd-035ed1225abe"
                    }
                  ],
                  "activeCells": {},
                  "id": "67a929ac-3e6e-4d7b-a4d9-2b0c1feafd37"
                }
              ],
              "id": "903db492-022d-4c2b-9587-2376d40e1f03"
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
                      "id": "67476ce0-94eb-443a-b7d7-a45c41f7cc79"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Josh",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "5d445f65-e751-4c8f-b981-8f2b1fe3b00b"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Gary",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "67867e6e-ca31-4391-a16c-be5ce6dd3c84"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Kevin",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "d9bbabd4-8ee3-4c1b-8d20-c36f42498127"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Chad",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "b51682d0-cee0-4f08-89f5-f703d6add72f"
                    }
                  ],
                  "activeCells": {},
                  "id": "1e2674ab-51d2-468a-b312-fbe2a9ee3c0e"
                }
              ],
              "id": "2fff19ee-79ba-4647-bfda-98a011aa979b"
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
                      "id": "eab957c8-1526-4546-ae14-0325b9fde94a"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Chad",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "199d63fb-7975-4810-b08b-1ff0abc18a8a"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Jeremy",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "19a2e201-46e6-4434-a32f-169c2a0a386d"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Josh",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "afb81d13-3eee-4fa4-9158-67d460bf7993"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Gary",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "b07ece25-5ed5-4686-8ffa-5b64ca0309b5"
                    }
                  ],
                  "activeCells": {},
                  "id": "6e2b2aaa-eb60-4739-ac98-a49e9e24e9ad"
                }
              ],
              "id": "0124fac3-eed3-4c4a-992e-b7506bc2bf96"
            }
          ],
          "activeCells": {},
          "id": "af76302d-cfd5-4042-ab2a-418c7f71a57e"
        }
      ],
      "id": "set2"
    },
    "set3": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Set with Error",
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
                      "id": "f6cdedc3-1da3-44f8-a125-fb0a7082768e"
                    },
                    {
                      "key": "rows",
                      "cells": {
                        "Name": "b"
                      },
                      "collections": [],
                      "id": "8f78a691-6813-4314-b24b-77d5b3aa1789"
                    },
                    {
                      "key": "rows",
                      "cells": {
                        "Name": "c"
                      },
                      "collections": [],
                      "id": "689bcb01-3374-4f31-872b-7b55b49e60fb"
                    }
                  ],
                  "activeCells": {},
                  "id": "1"
                }
              ],
              "id": "6e53b38a-4f91-4ef7-8be0-dff53f601e31"
            }
          ],
          "activeCells": {},
          "id": "d2595042-cf3d-404b-b573-fe05c9d6b487"
        }
      ],
      "id": "set3"
    },
    "set4": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Unordered Set",
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
                      "id": "dffa9837-d00b-4d18-bd3a-e0ca8d588e22"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "200.2",
                        "Date": "TODAY+1",
                        "Name": "Drill"
                      },
                      "collections": [],
                      "id": "457dd2b3-3053-40a3-b88e-dad3c4bce973"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "300.3",
                        "Date": "TODAY+2",
                        "Name": "Hammer"
                      },
                      "collections": [],
                      "id": "e210cd4b-ee64-4508-ab59-ce20e47d6bd7"
                    }
                  ],
                  "activeCells": {},
                  "id": "3807b2a9-e4c4-4e74-b015-5ca9b5b6e0d6"
                }
              ],
              "id": "e032a578-3ff6-4ef3-996c-ab483208db66"
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
                      "id": "85ac63f1-52a3-4432-8741-9fe9f309d7da"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "300.3",
                        "Date": "TODAY+2",
                        "Name": "Hammer"
                      },
                      "collections": [],
                      "id": "cba7d675-6bab-4cc2-8a5c-3aa5b554efe2"
                    }
                  ],
                  "activeCells": {},
                  "id": "1143757a-8a6c-4d14-96e7-03143104e2d6"
                }
              ],
              "id": "39f2d851-fd20-4944-bacf-baa1ed3b3fde"
            }
          ],
          "activeCells": {},
          "id": "8620df70-8844-48ff-be34-0169bc69854e"
        }
      ],
      "id": "set4"
    },
    "set5": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Unsuccessful Ordering",
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
                      "id": "1087f646-6b6f-4942-bb09-5af90611a169"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Josh"
                      },
                      "collections": [],
                      "id": "368ec14a-fb51-42d1-9ac9-6d70544dcd14"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Gary"
                      },
                      "collections": [],
                      "id": "7ff55d43-f822-4758-91f4-ac96a87d8d85"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Kevin"
                      },
                      "collections": [],
                      "id": "18636d1b-657c-4350-9f9a-6b103eb9c969"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Chad"
                      },
                      "collections": [],
                      "id": "9bfdc6ae-1ecb-4087-861d-b0b36c1c09cd"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Rand"
                      },
                      "collections": [],
                      "id": "f22db442-845a-4fe6-b322-73411878371e"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Perrin"
                      },
                      "collections": [],
                      "id": "037af70c-77c2-478a-828e-1f9dcc53683e"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Mat"
                      },
                      "collections": [],
                      "id": "77078ef2-4ec0-45d7-b110-0ed296d3c5af"
                    }
                  ],
                  "activeCells": {},
                  "id": "f7c7b882-a2a9-4c7a-822b-1776b4a749f3"
                }
              ],
              "id": "4388ae99-3b29-4419-b578-658a09798327"
            },
            {
              "text": "All data is correct, but in the wrong order",
              "type": "comment",
              "id": "71dbeda6-c99c-45e7-a70e-2fbab77c738f"
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
                        "Index": "1"
                      },
                      "collections": [],
                      "id": "a1c20aef-bf4d-4d72-b2d7-096465882933"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Josh",
                        "Index": "2"
                      },
                      "collections": [],
                      "id": "7139ed2b-c7e2-452b-b137-3d0b392e4121"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Gary",
                        "Index": "3"
                      },
                      "collections": [],
                      "id": "49322b15-6ec8-4b9f-b69b-c36530d51197"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Chad",
                        "Index": "5"
                      },
                      "collections": [],
                      "id": "05ee35d2-8ff5-41f1-9639-76c23de99603"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Kevin",
                        "Index": "4"
                      },
                      "collections": [],
                      "id": "2470cea8-f78c-4c67-96a7-3bde577ab75c"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Egwene"
                      },
                      "collections": [],
                      "id": "b9f488ec-d3fc-4fd1-9b94-15adfaf8b21f"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Perrin"
                      },
                      "collections": [],
                      "id": "b0ab81f5-2ce6-46ac-abcf-850bbee405ad"
                    }
                  ],
                  "activeCells": {},
                  "id": "ddc52569-65ea-4972-964b-106e70610bda"
                }
              ],
              "id": "7111fbe8-c7b3-4874-b891-7cb3b4d9b9fb"
            }
          ],
          "activeCells": {},
          "id": "d1291ed4-0da4-459a-a8ea-2b9def7b4012"
        }
      ],
      "id": "set5"
    },
    "table1": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Boolean Results in a Table",
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
                      "key": "row",
                      "cells": {
                        "number": "5",
                        "Number": "true",
                        "IsEven": "true"
                      },
                      "collections": [],
                      "id": "9798daa5-3bb0-44b5-affe-a291866fb99c"
                    },
                    {
                      "key": "row",
                      "cells": {
                        "number": "-5",
                        "IsEven": "false"
                      },
                      "collections": [],
                      "id": "03c8f26f-1eaa-47aa-a154-931feee5b07b"
                    }
                  ],
                  "activeCells": {},
                  "id": "0c3b2326-efe9-44bc-ba11-1e1ac30bf781"
                }
              ],
              "id": "5e75e493-5f3f-4dd5-8796-cee254526b38"
            }
          ],
          "activeCells": {},
          "id": "695bed8f-e431-48df-aeeb-987998df2d44"
        }
      ],
      "id": "table1"
    },
    "table2": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Decision Table",
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
                      "id": "63f1ccca-e977-4b6f-a139-8961f528c693"
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
                      "id": "d67da0e2-d8e4-4d3e-9c66-d973248f896d"
                    }
                  ],
                  "activeCells": {},
                  "id": "de19909f-4a56-4ac3-acc0-cb4ff41f9844"
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
                      "id": "98b9f876-c8d1-4ffa-8583-e7d293f03894"
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
                      "id": "0caac55e-3516-446a-b626-c76f5b16ded5"
                    }
                  ],
                  "activeCells": {},
                  "id": "a89dfcb6-2a6c-4eae-ac38-1668e60617c4"
                }
              ],
              "id": "d9101f8a-4ff6-49e3-b348-2ccdb69cc26f"
            }
          ],
          "activeCells": {},
          "id": "17eb4f49-e4ea-4cf8-95c0-d86a63534149"
        }
      ],
      "id": "table2"
    },
    "table3": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Table with Optional Columns",
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
                      "id": "bb95d288-3160-487d-9c07-80412b45fb8d"
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
                      "id": "9e4c142f-be64-42a2-b496-c161573be112"
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
                      "id": "13b7a0fa-6ef5-404c-970b-9d4f9ced12f8"
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
                      "id": "b18d3fd5-e2cb-47ea-90af-387e569d917f"
                    }
                  ],
                  "activeCells": {
                    "b": false,
                    "c": false
                  },
                  "id": "3c402eda-44ab-48b2-bc1e-e83730c123cf"
                }
              ],
              "id": "5025a157-661c-411c-8754-8e0bc71b454b"
            }
          ],
          "activeCells": {},
          "id": "66898ff9-2096-47f5-a222-6e3d717e87bb"
        }
      ],
      "id": "table3"
    },
    "table4": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Tables with Errors",
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
                      "key": "Rows",
                      "cells": {
                        "x": "11"
                      },
                      "collections": [],
                      "id": "afc2294c-f0f2-42fa-ab14-5ea34e943220"
                    }
                  ],
                  "activeCells": {},
                  "id": "before"
                }
              ],
              "id": "fed613b8-171e-4f36-b4ce-e8fc21fa365f"
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
                      "key": "Rows",
                      "cells": {
                        "x": "22"
                      },
                      "collections": [],
                      "id": "172ff5a8-2e99-46b8-b08d-832826ae9e9e"
                    }
                  ],
                  "activeCells": {},
                  "id": "after"
                }
              ],
              "id": "6082ec30-2435-42d4-9637-467f06cfd783"
            }
          ],
          "activeCells": {},
          "id": "f8da3a24-7bf3-4d5d-8cac-49e5c05fe835"
        }
      ],
      "id": "table4"
    },
    "table5": {
      "tags": [],
      "lifecycle": 0,
      "max-retries": 0,
      "title": "Tables",
      "steps": [
        {
          "key": "Table",
          "type": "section",
          "steps": [
            {
              "text": "Table by the ExposeAsTable attribute",
              "type": "comment",
              "id": "0606ade5-aed7-44dd-bcd0-ab7dd6371413"
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
                      "id": "3af37c76-f5e7-44f4-badf-a45caa949794"
                    },
                    {
                      "key": "sum",
                      "cells": {
                        "x": "2",
                        "y": "2",
                        "sum": "5"
                      },
                      "collections": [],
                      "id": "c4498fa4-6c64-4019-8468-7f87b5fdd4e7"
                    }
                  ],
                  "activeCells": {},
                  "id": "24d257eb-d2e3-49ec-9224-edef51f1ea6c"
                }
              ],
              "id": "54ddffb6-01cb-4b0f-b7f7-de55583b3be5"
            },
            {
              "text": "Table fixture from script",
              "type": "comment",
              "id": "6e0f887f-e07b-40f0-825b-9e42ae9ad6bc"
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
                      "id": "27b59c93-4eda-483c-ba89-9ba2d7549255"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "x": "3",
                        "y": "3",
                        "product": "****"
                      },
                      "collections": [],
                      "id": "922c3585-2e78-4f8b-b1e5-a41e6561e1e3"
                    }
                  ],
                  "activeCells": {},
                  "id": "9e3c4f4c-a90b-4dbf-8066-909b35a7945f"
                }
              ],
              "id": "24093b73-b911-4611-9fa6-c6bd975edd6e"
            }
          ],
          "activeCells": {},
          "id": "1048c30b-0369-4880-8a27-a8b7fb5a973b"
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
            "name": "Embeds",
            "path": "Embedded/Embeds",
            "lifecycle": "Regression",
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
            "name": "Check properties",
            "path": "General/Check properties",
            "lifecycle": "Acceptance",
            "id": "general1"
          },
          {
            "name": "Occasionally Times Out",
            "path": "General/Occasionally Times Out",
            "lifecycle": "Acceptance",
            "id": "SometimesSlow"
          },
          {
            "name": "Selection List Values",
            "path": "General/Selection List Values",
            "lifecycle": "Acceptance",
            "id": "general2"
          },
          {
            "name": "Services",
            "path": "General/Services",
            "lifecycle": "Acceptance",
            "id": "general3"
          },
          {
            "name": "System Defined Lists and Runtime Converters",
            "path": "General/System Defined Lists and Runtime Converters",
            "lifecycle": "Acceptance",
            "id": "runtime-converter"
          },
          {
            "name": "Test with Bad Grammar Name",
            "path": "General/Test with Bad Grammar Name",
            "lifecycle": "Acceptance",
            "id": "general4"
          },
          {
            "name": "Test with Missing Fixture Name",
            "path": "General/Test with Missing Fixture Name",
            "lifecycle": "Acceptance",
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
            "name": "Composite with Errors",
            "path": "Paragraphs/Composite with Errors",
            "lifecycle": "Regression",
            "id": "paragraph1"
          },
          {
            "name": "Simple Composite",
            "path": "Paragraphs/Simple Composite",
            "lifecycle": "Acceptance",
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
            "name": "Currying",
            "path": "Sentences/Currying",
            "lifecycle": "Acceptance",
            "id": "sentence1"
          },
          {
            "name": "Facts",
            "path": "Sentences/Facts",
            "lifecycle": "Regression",
            "id": "sentence2"
          },
          {
            "name": "Importing and Currying",
            "path": "Sentences/Importing and Currying",
            "lifecycle": "Acceptance",
            "id": "sentence3"
          },
          {
            "name": "Sentences",
            "path": "Sentences/Sentences",
            "lifecycle": "Acceptance",
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
            "name": "Ordered Set",
            "path": "Sets/Ordered Set",
            "lifecycle": "Acceptance",
            "id": "set1"
          },
          {
            "name": "Successful OrderedStrings",
            "path": "Sets/Successful OrderedStrings",
            "lifecycle": "Acceptance",
            "id": "set2"
          },
          {
            "name": "Set with Error",
            "path": "Sets/Set with Error",
            "lifecycle": "Acceptance",
            "id": "set3"
          },
          {
            "name": "Unordered Set",
            "path": "Sets/Unordered Set",
            "lifecycle": "Acceptance",
            "id": "set4"
          },
          {
            "name": "Unsuccessful Ordering",
            "path": "Sets/Unsuccessful Ordering",
            "lifecycle": "Acceptance",
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
            "name": "Boolean Results in a Table",
            "path": "Tables/Boolean Results in a Table",
            "lifecycle": "Acceptance",
            "id": "table1"
          },
          {
            "name": "Decision Table",
            "path": "Tables/Decision Table",
            "lifecycle": "Acceptance",
            "id": "table2"
          },
          {
            "name": "Table with Optional Columns",
            "path": "Tables/Table with Optional Columns",
            "lifecycle": "Acceptance",
            "id": "table3"
          },
          {
            "name": "Tables with Errors",
            "path": "Tables/Tables with Errors",
            "lifecycle": "Acceptance",
            "id": "table4"
          },
          {
            "name": "Tables",
            "path": "Tables/Tables",
            "lifecycle": "Acceptance",
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
    "embeds": [
      {
        "error": null,
        "cells": [],
        "id": "de680b74-f685-458b-bcc9-2457cc5cb15c",
        "spec": "embeds",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.EmbeddedFixture.<.ctor>b__0(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\EmbeddedFixture.cs:line 13\r\n   at StoryTeller.Grammars.SilentAction.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
        "cells": [],
        "id": "errors",
        "spec": "embeds",
        "position": "before",
        "status": "error",
        "type": "step-result"
      },
      {
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
        "id": "45e00896-eae2-455f-b049-6e0ad357ea41",
        "spec": "embeds",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "02d07945-3b82-4273-b22b-bb29d98096ba",
        "spec": "embeds",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "77e465d1-3c0f-44b9-962d-4fb5a70d40ce",
        "spec": "embeds",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "309e4659-d674-44f0-9260-2d50c514fe72",
        "spec": "embeds",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "35f24255-87a9-4bda-9871-773ea36219df",
        "spec": "embeds",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\MathFixture.cs:line 120\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__e.MoveNext() in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 76\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
        "cells": [],
        "id": "3c50ddb4-b114-45e7-9e7d-1b4f0e3c1ffd",
        "spec": "embeds",
        "position": null,
        "status": "error",
        "type": "step-result"
      },
      {
        "id": "embeds",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "de680b74-f685-458b-bcc9-2457cc5cb15c",
              "spec": "embeds",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.EmbeddedFixture.<.ctor>b__0(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\EmbeddedFixture.cs:line 13\r\n   at StoryTeller.Grammars.SilentAction.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
              "cells": [],
              "id": "errors",
              "spec": "embeds",
              "position": "before",
              "status": "error",
              "type": "step-result"
            },
            {
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
              "id": "45e00896-eae2-455f-b049-6e0ad357ea41",
              "spec": "embeds",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "02d07945-3b82-4273-b22b-bb29d98096ba",
              "spec": "embeds",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "77e465d1-3c0f-44b9-962d-4fb5a70d40ce",
              "spec": "embeds",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "309e4659-d674-44f0-9260-2d50c514fe72",
              "spec": "embeds",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "35f24255-87a9-4bda-9871-773ea36219df",
              "spec": "embeds",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\MathFixture.cs:line 120\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__e.MoveNext() in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 76\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
              "cells": [],
              "id": "3c50ddb4-b114-45e7-9e7d-1b4f0e3c1ffd",
              "spec": "embeds",
              "position": null,
              "status": "error",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 2,
            "wrongs": 1,
            "errors": 2,
            "invalids": 1
          }
        },
        "time": "2015-05-01T14:27:25.2086846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "general1": [
      {
        "error": null,
        "cells": [],
        "id": "50b582da-2789-4288-97ea-bf921f361ecf",
        "spec": "general1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "50b582da-2789-4288-97ea-bf921f361ecf",
        "spec": "general1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "50b582da-2789-4288-97ea-bf921f361ecf",
        "spec": "general1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "50b582da-2789-4288-97ea-bf921f361ecf",
        "spec": "general1",
        "position": "4",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "50b582da-2789-4288-97ea-bf921f361ecf",
        "spec": "general1",
        "position": "5",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "50b582da-2789-4288-97ea-bf921f361ecf",
        "spec": "general1",
        "position": "6",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "8457cdb7-0df2-4b3f-81ec-e0c33d151be4",
        "spec": "general1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "8457cdb7-0df2-4b3f-81ec-e0c33d151be4",
        "spec": "general1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "8457cdb7-0df2-4b3f-81ec-e0c33d151be4",
        "spec": "general1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "fde4c098-0d66-426f-85ac-ea8d2726d27d",
        "spec": "general1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "fde4c098-0d66-426f-85ac-ea8d2726d27d",
        "spec": "general1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "fde4c098-0d66-426f-85ac-ea8d2726d27d",
        "spec": "general1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "general1",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "50b582da-2789-4288-97ea-bf921f361ecf",
              "spec": "general1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "50b582da-2789-4288-97ea-bf921f361ecf",
              "spec": "general1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "50b582da-2789-4288-97ea-bf921f361ecf",
              "spec": "general1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "50b582da-2789-4288-97ea-bf921f361ecf",
              "spec": "general1",
              "position": "4",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "50b582da-2789-4288-97ea-bf921f361ecf",
              "spec": "general1",
              "position": "5",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "50b582da-2789-4288-97ea-bf921f361ecf",
              "spec": "general1",
              "position": "6",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "8457cdb7-0df2-4b3f-81ec-e0c33d151be4",
              "spec": "general1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "8457cdb7-0df2-4b3f-81ec-e0c33d151be4",
              "spec": "general1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "8457cdb7-0df2-4b3f-81ec-e0c33d151be4",
              "spec": "general1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "fde4c098-0d66-426f-85ac-ea8d2726d27d",
              "spec": "general1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "fde4c098-0d66-426f-85ac-ea8d2726d27d",
              "spec": "general1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "fde4c098-0d66-426f-85ac-ea8d2726d27d",
              "spec": "general1",
              "position": "2",
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 3,
            "wrongs": 3,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.2196846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "SometimesSlow": [
      {
        "error": null,
        "cells": [],
        "id": "568ae85c-b3e3-46d7-8b94-c7397525483d",
        "spec": "SometimesSlow",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "SometimesSlow",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "568ae85c-b3e3-46d7-8b94-c7397525483d",
              "spec": "SometimesSlow",
              "position": null,
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.2306846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "general2": [
      {
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
        "id": "526ba422-b002-41ee-a05b-9ab71b1e73c5",
        "spec": "general2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "aa1db006-030a-439a-afed-ec6d377979b7",
        "spec": "general2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "d4b92aac-a841-4651-858d-f84c1e0d3773",
        "spec": "general2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "e2a61237-a0bb-4ff5-b3f6-ce098efff560",
        "spec": "general2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "c50ba45c-72d8-47d9-9b0f-4eec1de81204",
        "spec": "general2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "general2",
        "results": {
          "results": [
            {
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
              "id": "526ba422-b002-41ee-a05b-9ab71b1e73c5",
              "spec": "general2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "aa1db006-030a-439a-afed-ec6d377979b7",
              "spec": "general2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "d4b92aac-a841-4651-858d-f84c1e0d3773",
              "spec": "general2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "e2a61237-a0bb-4ff5-b3f6-ce098efff560",
              "spec": "general2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "c50ba45c-72d8-47d9-9b0f-4eec1de81204",
              "spec": "general2",
              "position": null,
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 4,
            "wrongs": 1,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.2396846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "general3": [
      {
        "error": "Fixture with key 'Service' does not exist",
        "cells": [],
        "id": "730b97d3-2650-4c36-91d9-4e576c831941",
        "spec": "general3",
        "position": "setup",
        "status": "invalid",
        "type": "step-result"
      },
      {
        "id": "general3",
        "results": {
          "results": [
            {
              "error": "Fixture with key 'Service' does not exist",
              "cells": [],
              "id": "730b97d3-2650-4c36-91d9-4e576c831941",
              "spec": "general3",
              "position": "setup",
              "status": "invalid",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 0,
            "invalids": 1
          }
        },
        "time": "2015-05-01T14:27:25.2436846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "runtime-converter": [
      {
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
        "id": "justin-houston",
        "spec": "runtime-converter",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "runtime-converter",
        "results": {
          "results": [
            {
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
              "id": "justin-houston",
              "spec": "runtime-converter",
              "position": null,
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 1,
            "wrongs": 0,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.2466846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "general4": [
      {
        "error": "Grammar 'BadGrammar1' is not implemented",
        "cells": [],
        "id": "1eac82e3-b685-409a-b051-5f1902d51232",
        "spec": "general4",
        "position": null,
        "status": "error",
        "type": "step-result"
      },
      {
        "error": "Grammar 'BadGrammar2' is not implemented",
        "cells": [],
        "id": "82756985-8096-43ce-8bc7-be0b6084390e",
        "spec": "general4",
        "position": null,
        "status": "error",
        "type": "step-result"
      },
      {
        "error": "Grammar 'BadGrammar3' is not implemented",
        "cells": [],
        "id": "086694f8-786c-42b3-bda0-25636e13a2e6",
        "spec": "general4",
        "position": null,
        "status": "error",
        "type": "step-result"
      },
      {
        "id": "general4",
        "results": {
          "results": [
            {
              "error": "Grammar 'BadGrammar1' is not implemented",
              "cells": [],
              "id": "1eac82e3-b685-409a-b051-5f1902d51232",
              "spec": "general4",
              "position": null,
              "status": "error",
              "type": "step-result"
            },
            {
              "error": "Grammar 'BadGrammar2' is not implemented",
              "cells": [],
              "id": "82756985-8096-43ce-8bc7-be0b6084390e",
              "spec": "general4",
              "position": null,
              "status": "error",
              "type": "step-result"
            },
            {
              "error": "Grammar 'BadGrammar3' is not implemented",
              "cells": [],
              "id": "086694f8-786c-42b3-bda0-25636e13a2e6",
              "spec": "general4",
              "position": null,
              "status": "error",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 3,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.2506846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "general5": [
      {
        "error": "Fixture with key 'FixtureThatDoesNotExist' does not exist",
        "cells": [],
        "id": "1",
        "spec": "general5",
        "position": "setup",
        "status": "invalid",
        "type": "step-result"
      },
      {
        "id": "general5",
        "results": {
          "results": [
            {
              "error": "Fixture with key 'FixtureThatDoesNotExist' does not exist",
              "cells": [],
              "id": "1",
              "spec": "general5",
              "position": "setup",
              "status": "invalid",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 0,
            "invalids": 1
          }
        },
        "time": "2015-05-01T14:27:25.2546846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "paragraph1": [
      {
        "error": null,
        "cells": [],
        "id": "86edf0b0-2972-44dd-87e3-68fde4739e3d",
        "spec": "paragraph1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "86edf0b0-2972-44dd-87e3-68fde4739e3d",
        "spec": "paragraph1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "86edf0b0-2972-44dd-87e3-68fde4739e3d",
        "spec": "paragraph1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "86edf0b0-2972-44dd-87e3-68fde4739e3d",
        "spec": "paragraph1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "f7ea34fe-b599-4f5a-829b-62fcc3e7965d",
        "spec": "paragraph1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f7ea34fe-b599-4f5a-829b-62fcc3e7965d",
        "spec": "paragraph1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f7ea34fe-b599-4f5a-829b-62fcc3e7965d",
        "spec": "paragraph1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "f7ea34fe-b599-4f5a-829b-62fcc3e7965d",
        "spec": "paragraph1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "de85d914-af7e-4eae-a25d-bfb58a298c17",
        "spec": "paragraph1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "de85d914-af7e-4eae-a25d-bfb58a298c17",
        "spec": "paragraph1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "de85d914-af7e-4eae-a25d-bfb58a298c17",
        "spec": "paragraph1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "de85d914-af7e-4eae-a25d-bfb58a298c17",
        "spec": "paragraph1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f815f7fd-a930-4b0d-bc50-87adf8ad863d",
        "spec": "paragraph1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f815f7fd-a930-4b0d-bc50-87adf8ad863d",
        "spec": "paragraph1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f815f7fd-a930-4b0d-bc50-87adf8ad863d",
        "spec": "paragraph1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "f815f7fd-a930-4b0d-bc50-87adf8ad863d",
        "spec": "paragraph1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43",
        "spec": "paragraph1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43",
        "spec": "paragraph1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43",
        "spec": "paragraph1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<.ctor>b__3(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\CompositeFixture.cs:line 25\r\n   at StoryTeller.Grammars.SilentAction.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
        "cells": [],
        "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43",
        "spec": "paragraph1",
        "position": "3",
        "status": "error",
        "type": "step-result"
      },
      {
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
        "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43",
        "spec": "paragraph1",
        "position": "4",
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "paragraph1",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "86edf0b0-2972-44dd-87e3-68fde4739e3d",
              "spec": "paragraph1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "86edf0b0-2972-44dd-87e3-68fde4739e3d",
              "spec": "paragraph1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "86edf0b0-2972-44dd-87e3-68fde4739e3d",
              "spec": "paragraph1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "86edf0b0-2972-44dd-87e3-68fde4739e3d",
              "spec": "paragraph1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "f7ea34fe-b599-4f5a-829b-62fcc3e7965d",
              "spec": "paragraph1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f7ea34fe-b599-4f5a-829b-62fcc3e7965d",
              "spec": "paragraph1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f7ea34fe-b599-4f5a-829b-62fcc3e7965d",
              "spec": "paragraph1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "f7ea34fe-b599-4f5a-829b-62fcc3e7965d",
              "spec": "paragraph1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "de85d914-af7e-4eae-a25d-bfb58a298c17",
              "spec": "paragraph1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "de85d914-af7e-4eae-a25d-bfb58a298c17",
              "spec": "paragraph1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "de85d914-af7e-4eae-a25d-bfb58a298c17",
              "spec": "paragraph1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "de85d914-af7e-4eae-a25d-bfb58a298c17",
              "spec": "paragraph1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f815f7fd-a930-4b0d-bc50-87adf8ad863d",
              "spec": "paragraph1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f815f7fd-a930-4b0d-bc50-87adf8ad863d",
              "spec": "paragraph1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f815f7fd-a930-4b0d-bc50-87adf8ad863d",
              "spec": "paragraph1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "f815f7fd-a930-4b0d-bc50-87adf8ad863d",
              "spec": "paragraph1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43",
              "spec": "paragraph1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43",
              "spec": "paragraph1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43",
              "spec": "paragraph1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<.ctor>b__3(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\CompositeFixture.cs:line 25\r\n   at StoryTeller.Grammars.SilentAction.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
              "cells": [],
              "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43",
              "spec": "paragraph1",
              "position": "3",
              "status": "error",
              "type": "step-result"
            },
            {
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
              "id": "8f1e692d-d726-44ac-9ba4-29ddac39dc43",
              "spec": "paragraph1",
              "position": "4",
              "status": "ok",
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
              "title": "Debug Output"
            },
            {
              "html": "<ul class=\"list-group\"><li class=\"list-group-item\">5</li><li class=\"list-group-item\">50</li><li class=\"list-group-item\">54</li><li class=\"list-group-item\">540</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">3</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">20</li></ul>",
              "title": "Some Numbers"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 2,
            "wrongs": 3,
            "errors": 1,
            "invalids": 2
          }
        },
        "time": "2015-05-01T14:27:25.2626846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "paragraph2": [
      {
        "error": null,
        "cells": [],
        "id": "4015c558-fe1f-49ad-9384-0d7631142ee4",
        "spec": "paragraph2",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "4015c558-fe1f-49ad-9384-0d7631142ee4",
        "spec": "paragraph2",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "4015c558-fe1f-49ad-9384-0d7631142ee4",
        "spec": "paragraph2",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "4015c558-fe1f-49ad-9384-0d7631142ee4",
        "spec": "paragraph2",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8d71cb61-c22d-44bd-8ad7-09c92fb27cb1",
        "spec": "paragraph2",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8d71cb61-c22d-44bd-8ad7-09c92fb27cb1",
        "spec": "paragraph2",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8d71cb61-c22d-44bd-8ad7-09c92fb27cb1",
        "spec": "paragraph2",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "8d71cb61-c22d-44bd-8ad7-09c92fb27cb1",
        "spec": "paragraph2",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f3694fff-a7dc-4f12-a810-126cc2da1df2",
        "spec": "paragraph2",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f3694fff-a7dc-4f12-a810-126cc2da1df2",
        "spec": "paragraph2",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f3694fff-a7dc-4f12-a810-126cc2da1df2",
        "spec": "paragraph2",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "f3694fff-a7dc-4f12-a810-126cc2da1df2",
        "spec": "paragraph2",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "7cd97699-1399-4cf1-b352-b4dc7c8cd424",
        "spec": "paragraph2",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "7cd97699-1399-4cf1-b352-b4dc7c8cd424",
        "spec": "paragraph2",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "7cd97699-1399-4cf1-b352-b4dc7c8cd424",
        "spec": "paragraph2",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "7cd97699-1399-4cf1-b352-b4dc7c8cd424",
        "spec": "paragraph2",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "c92d4ed8-e75c-4910-a2e8-46538d4d090b",
        "spec": "paragraph2",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "c92d4ed8-e75c-4910-a2e8-46538d4d090b",
        "spec": "paragraph2",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "c92d4ed8-e75c-4910-a2e8-46538d4d090b",
        "spec": "paragraph2",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "c92d4ed8-e75c-4910-a2e8-46538d4d090b",
        "spec": "paragraph2",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "paragraph2",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "4015c558-fe1f-49ad-9384-0d7631142ee4",
              "spec": "paragraph2",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "4015c558-fe1f-49ad-9384-0d7631142ee4",
              "spec": "paragraph2",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "4015c558-fe1f-49ad-9384-0d7631142ee4",
              "spec": "paragraph2",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "4015c558-fe1f-49ad-9384-0d7631142ee4",
              "spec": "paragraph2",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8d71cb61-c22d-44bd-8ad7-09c92fb27cb1",
              "spec": "paragraph2",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8d71cb61-c22d-44bd-8ad7-09c92fb27cb1",
              "spec": "paragraph2",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8d71cb61-c22d-44bd-8ad7-09c92fb27cb1",
              "spec": "paragraph2",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "8d71cb61-c22d-44bd-8ad7-09c92fb27cb1",
              "spec": "paragraph2",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f3694fff-a7dc-4f12-a810-126cc2da1df2",
              "spec": "paragraph2",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f3694fff-a7dc-4f12-a810-126cc2da1df2",
              "spec": "paragraph2",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f3694fff-a7dc-4f12-a810-126cc2da1df2",
              "spec": "paragraph2",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "f3694fff-a7dc-4f12-a810-126cc2da1df2",
              "spec": "paragraph2",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "7cd97699-1399-4cf1-b352-b4dc7c8cd424",
              "spec": "paragraph2",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "7cd97699-1399-4cf1-b352-b4dc7c8cd424",
              "spec": "paragraph2",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "7cd97699-1399-4cf1-b352-b4dc7c8cd424",
              "spec": "paragraph2",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "7cd97699-1399-4cf1-b352-b4dc7c8cd424",
              "spec": "paragraph2",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "c92d4ed8-e75c-4910-a2e8-46538d4d090b",
              "spec": "paragraph2",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "c92d4ed8-e75c-4910-a2e8-46538d4d090b",
              "spec": "paragraph2",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "c92d4ed8-e75c-4910-a2e8-46538d4d090b",
              "spec": "paragraph2",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "c92d4ed8-e75c-4910-a2e8-46538d4d090b",
              "spec": "paragraph2",
              "position": "3",
              "status": "ok",
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
              "title": "Debug Output"
            },
            {
              "html": "<ul class=\"list-group\"><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">3</li><li class=\"list-group-item\">7</li><li class=\"list-group-item\">70</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li></ul>",
              "title": "Some Numbers"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 2,
            "wrongs": 3,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.2676846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "sentence1": [
      {
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
        "id": "82e13e5e-a1c5-40ca-aa38-0dda4676c490",
        "spec": "sentence1",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "23721eab-7547-4df4-8f6e-0c91fbeeec66",
        "spec": "sentence1",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "sentence1",
        "results": {
          "results": [
            {
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
              "id": "82e13e5e-a1c5-40ca-aa38-0dda4676c490",
              "spec": "sentence1",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "23721eab-7547-4df4-8f6e-0c91fbeeec66",
              "spec": "sentence1",
              "position": null,
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 1,
            "wrongs": 1,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.2716846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "sentence2": [
      {
        "error": null,
        "cells": [],
        "id": "1",
        "spec": "sentence2",
        "position": null,
        "status": "success",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "2",
        "spec": "sentence2",
        "position": null,
        "status": "failed",
        "type": "step-result"
      },
      {
        "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.<.ctor>b__2() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 64\r\n   at StoryTeller.Fixture.FactExpression.<>c__DisplayClass28.<VerifiedBy>b__27(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller\\Fixture.cs:line 295\r\n   at StoryTeller.Grammars.FactGrammar.PerformTest(StepValues values, ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 36\r\n   at StoryTeller.Grammars.FactPlan.execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 63\r\n   at StoryTeller.Grammars.LineStepBase.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
        "cells": [],
        "id": "3",
        "spec": "sentence2",
        "position": null,
        "status": "error",
        "type": "step-result"
      },
      {
        "id": "sentence2",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "1",
              "spec": "sentence2",
              "position": null,
              "status": "success",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "2",
              "spec": "sentence2",
              "position": null,
              "status": "failed",
              "type": "step-result"
            },
            {
              "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.<.ctor>b__2() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 64\r\n   at StoryTeller.Fixture.FactExpression.<>c__DisplayClass28.<VerifiedBy>b__27(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller\\Fixture.cs:line 295\r\n   at StoryTeller.Grammars.FactGrammar.PerformTest(StepValues values, ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 36\r\n   at StoryTeller.Grammars.FactPlan.execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 63\r\n   at StoryTeller.Grammars.LineStepBase.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
              "cells": [],
              "id": "3",
              "spec": "sentence2",
              "position": null,
              "status": "error",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 1,
            "wrongs": 1,
            "errors": 1,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.2756846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "sentence3": [
      {
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
        "id": "ade13b44-6154-4d9b-84a0-c9853bc5e864",
        "spec": "sentence3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "9e56a166-6d80-4167-aa42-d078139deaa6",
        "spec": "sentence3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "sentence3",
        "results": {
          "results": [
            {
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
              "id": "ade13b44-6154-4d9b-84a0-c9853bc5e864",
              "spec": "sentence3",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "9e56a166-6d80-4167-aa42-d078139deaa6",
              "spec": "sentence3",
              "position": null,
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 1,
            "wrongs": 1,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.2786846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "sentence4": [
      {
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
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "75cca299-331a-424f-9bb6-72571bed8e3d",
        "spec": "sentence4",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "a2a39487-9572-4658-bd48-3d80fcc224cc",
        "spec": "sentence4",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "3c27288b-9698-4a4a-bcd3-b8407546e325",
        "spec": "sentence4",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "dc5ac0a8-6799-4dcb-a2ac-495c72af9741",
        "spec": "sentence4",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "3",
        "spec": "sentence4",
        "position": null,
        "status": "success",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "4",
        "spec": "sentence4",
        "position": null,
        "status": "failed",
        "type": "step-result"
      },
      {
        "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> StoryTeller.StorytellerAssertionException: No go!\r\n   at StoryTeller.StoryTellerAssert.Fail(String message) in z:\\code\\Storyteller\\src\\StoryTeller\\StoryTellerAssert.cs:line 17\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.ThisLineAlwaysThrowsExceptions() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 127\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__e.MoveNext() in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 76\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
        "cells": [],
        "id": "5",
        "spec": "sentence4",
        "position": null,
        "status": "error",
        "type": "step-result"
      },
      {
        "id": "sentence4",
        "results": {
          "results": [
            {
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
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "75cca299-331a-424f-9bb6-72571bed8e3d",
              "spec": "sentence4",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "a2a39487-9572-4658-bd48-3d80fcc224cc",
              "spec": "sentence4",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "3c27288b-9698-4a4a-bcd3-b8407546e325",
              "spec": "sentence4",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "dc5ac0a8-6799-4dcb-a2ac-495c72af9741",
              "spec": "sentence4",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "3",
              "spec": "sentence4",
              "position": null,
              "status": "success",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "4",
              "spec": "sentence4",
              "position": null,
              "status": "failed",
              "type": "step-result"
            },
            {
              "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> StoryTeller.StorytellerAssertionException: No go!\r\n   at StoryTeller.StoryTellerAssert.Fail(String message) in z:\\code\\Storyteller\\src\\StoryTeller\\StoryTellerAssert.cs:line 17\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.ThisLineAlwaysThrowsExceptions() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 127\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__e.MoveNext() in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 76\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
              "cells": [],
              "id": "5",
              "spec": "sentence4",
              "position": null,
              "status": "error",
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
              "title": "Debug Output"
            },
            {
              "html": "<ul class=\"list-group\"><li class=\"list-group-item\">5</li><li class=\"list-group-item\">19</li><li class=\"list-group-item\">17</li></ul>",
              "title": "Some Numbers"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 2,
            "wrongs": 2,
            "errors": 1,
            "invalids": 1
          }
        },
        "time": "2015-05-01T14:27:25.2916846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "set1": [
      {
        "error": null,
        "cells": [],
        "id": "95ea580c-1eae-4515-be87-6b4cd168f9cc",
        "spec": "set1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "95ea580c-1eae-4515-be87-6b4cd168f9cc",
        "spec": "set1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "95ea580c-1eae-4515-be87-6b4cd168f9cc",
        "spec": "set1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "503083c7-f7a3-4c46-b431-6d59e88fcb98",
        "spec": "set1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "503083c7-f7a3-4c46-b431-6d59e88fcb98",
        "spec": "set1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "503083c7-f7a3-4c46-b431-6d59e88fcb98",
        "spec": "set1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "c39f88ba-32de-4f88-9857-037fa81095b7",
        "spec": "set1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "c39f88ba-32de-4f88-9857-037fa81095b7",
        "spec": "set1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "c39f88ba-32de-4f88-9857-037fa81095b7",
        "spec": "set1",
        "position": "3",
        "status": "ok",
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
          "578015f9-c134-4717-bef1-21b649d03acc",
          "9735d07f-21f6-424f-9ecb-db5216967bc6"
        ],
        "missing": [],
        "extras": [
          {
            "Amount": 300.3,
            "Date": "2015-05-03T00:00:00-05:00",
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
          "650bc653-9d9b-43e7-a888-e5983bd59a3c",
          "10b3c955-28b2-4dd0-bfcc-2e1bcb4c8b11",
          "fa806ffd-79db-43ed-b362-22bddf815fec"
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
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "set1",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "95ea580c-1eae-4515-be87-6b4cd168f9cc",
              "spec": "set1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "95ea580c-1eae-4515-be87-6b4cd168f9cc",
              "spec": "set1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "95ea580c-1eae-4515-be87-6b4cd168f9cc",
              "spec": "set1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "503083c7-f7a3-4c46-b431-6d59e88fcb98",
              "spec": "set1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "503083c7-f7a3-4c46-b431-6d59e88fcb98",
              "spec": "set1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "503083c7-f7a3-4c46-b431-6d59e88fcb98",
              "spec": "set1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "c39f88ba-32de-4f88-9857-037fa81095b7",
              "spec": "set1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "c39f88ba-32de-4f88-9857-037fa81095b7",
              "spec": "set1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "c39f88ba-32de-4f88-9857-037fa81095b7",
              "spec": "set1",
              "position": "3",
              "status": "ok",
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
                "578015f9-c134-4717-bef1-21b649d03acc",
                "9735d07f-21f6-424f-9ecb-db5216967bc6"
              ],
              "missing": [],
              "extras": [
                {
                  "Amount": 300.3,
                  "Date": "2015-05-03T00:00:00-05:00",
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
                "650bc653-9d9b-43e7-a888-e5983bd59a3c",
                "10b3c955-28b2-4dd0-bfcc-2e1bcb4c8b11",
                "fa806ffd-79db-43ed-b362-22bddf815fec"
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
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 8,
            "wrongs": 5,
            "errors": 0,
            "invalids": 1
          }
        },
        "time": "2015-05-01T14:27:25.2956846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "set2": [
      {
        "error": null,
        "cells": [],
        "id": "744f6ab4-9a0e-45bd-999f-29d56ba6aef1",
        "spec": "set2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "dbe935b1-58e7-404c-9845-ad821527d7bc",
        "spec": "set2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "fb12ec75-fbf9-4960-856e-bcdf1bbfedbe",
        "spec": "set2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f0168878-fa68-4210-b53c-6c69dbe8011b",
        "spec": "set2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8f7faa20-6d83-4d97-81bd-035ed1225abe",
        "spec": "set2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "spec": "set2",
        "matches": [
          "67476ce0-94eb-443a-b7d7-a45c41f7cc79",
          "5d445f65-e751-4c8f-b981-8f2b1fe3b00b",
          "67867e6e-ca31-4391-a16c-be5ce6dd3c84",
          "d9bbabd4-8ee3-4c1b-8d20-c36f42498127",
          "b51682d0-cee0-4f08-89f5-f703d6add72f"
        ],
        "missing": [],
        "extras": [],
        "wrongOrdered": [],
        "id": "1e2674ab-51d2-468a-b312-fbe2a9ee3c0e",
        "type": "set-verification-result"
      },
      {
        "spec": "set2",
        "matches": [
          "eab957c8-1526-4546-ae14-0325b9fde94a",
          "199d63fb-7975-4810-b08b-1ff0abc18a8a",
          "19a2e201-46e6-4434-a32f-169c2a0a386d",
          "afb81d13-3eee-4fa4-9158-67d460bf7993",
          "b07ece25-5ed5-4686-8ffa-5b64ca0309b5"
        ],
        "missing": [],
        "extras": [],
        "wrongOrdered": [],
        "id": "6e2b2aaa-eb60-4739-ac98-a49e9e24e9ad",
        "type": "set-verification-result"
      },
      {
        "id": "set2",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "744f6ab4-9a0e-45bd-999f-29d56ba6aef1",
              "spec": "set2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "dbe935b1-58e7-404c-9845-ad821527d7bc",
              "spec": "set2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "fb12ec75-fbf9-4960-856e-bcdf1bbfedbe",
              "spec": "set2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f0168878-fa68-4210-b53c-6c69dbe8011b",
              "spec": "set2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8f7faa20-6d83-4d97-81bd-035ed1225abe",
              "spec": "set2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "spec": "set2",
              "matches": [
                "67476ce0-94eb-443a-b7d7-a45c41f7cc79",
                "5d445f65-e751-4c8f-b981-8f2b1fe3b00b",
                "67867e6e-ca31-4391-a16c-be5ce6dd3c84",
                "d9bbabd4-8ee3-4c1b-8d20-c36f42498127",
                "b51682d0-cee0-4f08-89f5-f703d6add72f"
              ],
              "missing": [],
              "extras": [],
              "wrongOrdered": [],
              "id": "1e2674ab-51d2-468a-b312-fbe2a9ee3c0e",
              "type": "set-verification-result"
            },
            {
              "spec": "set2",
              "matches": [
                "eab957c8-1526-4546-ae14-0325b9fde94a",
                "199d63fb-7975-4810-b08b-1ff0abc18a8a",
                "19a2e201-46e6-4434-a32f-169c2a0a386d",
                "afb81d13-3eee-4fa4-9158-67d460bf7993",
                "b07ece25-5ed5-4686-8ffa-5b64ca0309b5"
              ],
              "missing": [],
              "extras": [],
              "wrongOrdered": [],
              "id": "6e2b2aaa-eb60-4739-ac98-a49e9e24e9ad",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 10,
            "wrongs": 0,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.3006846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "set3": [
      {
        "error": "System.AggregateException: One or more errors occurred. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<ThrowsErrorOnDataFetch>b__f() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 82\r\n   at StoryTeller.Fixture.<>c__DisplayClass21`1.<VerifySetOf>b__20(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller\\Fixture.cs:line 459\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3.<Fetch>b__0() in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 24\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---> (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<ThrowsErrorOnDataFetch>b__f() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 82\r\n   at StoryTeller.Fixture.<>c__DisplayClass21`1.<VerifySetOf>b__20(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller\\Fixture.cs:line 459\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3.<Fetch>b__0() in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 24\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()<---\r\n",
        "cells": [],
        "id": "1",
        "spec": "set3",
        "position": "before",
        "status": "error",
        "type": "step-result"
      },
      {
        "id": "set3",
        "results": {
          "results": [
            {
              "error": "System.AggregateException: One or more errors occurred. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<ThrowsErrorOnDataFetch>b__f() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 82\r\n   at StoryTeller.Fixture.<>c__DisplayClass21`1.<VerifySetOf>b__20(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller\\Fixture.cs:line 459\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3.<Fetch>b__0() in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 24\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---> (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<ThrowsErrorOnDataFetch>b__f() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 82\r\n   at StoryTeller.Fixture.<>c__DisplayClass21`1.<VerifySetOf>b__20(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller\\Fixture.cs:line 459\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3.<Fetch>b__0() in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 24\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()<---\r\n",
              "cells": [],
              "id": "1",
              "spec": "set3",
              "position": "before",
              "status": "error",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 1,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.3036846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "set4": [
      {
        "error": null,
        "cells": [],
        "id": "dffa9837-d00b-4d18-bd3a-e0ca8d588e22",
        "spec": "set4",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "dffa9837-d00b-4d18-bd3a-e0ca8d588e22",
        "spec": "set4",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "dffa9837-d00b-4d18-bd3a-e0ca8d588e22",
        "spec": "set4",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "457dd2b3-3053-40a3-b88e-dad3c4bce973",
        "spec": "set4",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "457dd2b3-3053-40a3-b88e-dad3c4bce973",
        "spec": "set4",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "457dd2b3-3053-40a3-b88e-dad3c4bce973",
        "spec": "set4",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "e210cd4b-ee64-4508-ab59-ce20e47d6bd7",
        "spec": "set4",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "e210cd4b-ee64-4508-ab59-ce20e47d6bd7",
        "spec": "set4",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "e210cd4b-ee64-4508-ab59-ce20e47d6bd7",
        "spec": "set4",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "85ac63f1-52a3-4432-8741-9fe9f309d7da",
        "spec": "set4",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "set4",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "dffa9837-d00b-4d18-bd3a-e0ca8d588e22",
              "spec": "set4",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "dffa9837-d00b-4d18-bd3a-e0ca8d588e22",
              "spec": "set4",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "dffa9837-d00b-4d18-bd3a-e0ca8d588e22",
              "spec": "set4",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "457dd2b3-3053-40a3-b88e-dad3c4bce973",
              "spec": "set4",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "457dd2b3-3053-40a3-b88e-dad3c4bce973",
              "spec": "set4",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "457dd2b3-3053-40a3-b88e-dad3c4bce973",
              "spec": "set4",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "e210cd4b-ee64-4508-ab59-ce20e47d6bd7",
              "spec": "set4",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "e210cd4b-ee64-4508-ab59-ce20e47d6bd7",
              "spec": "set4",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "e210cd4b-ee64-4508-ab59-ce20e47d6bd7",
              "spec": "set4",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "85ac63f1-52a3-4432-8741-9fe9f309d7da",
              "spec": "set4",
              "position": null,
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 0,
            "invalids": 1
          }
        },
        "time": "2015-05-01T14:27:25.3066846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "set5": [
      {
        "error": null,
        "cells": [],
        "id": "1087f646-6b6f-4942-bb09-5af90611a169",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "368ec14a-fb51-42d1-9ac9-6d70544dcd14",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "7ff55d43-f822-4758-91f4-ac96a87d8d85",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "18636d1b-657c-4350-9f9a-6b103eb9c969",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "9bfdc6ae-1ecb-4087-861d-b0b36c1c09cd",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f22db442-845a-4fe6-b322-73411878371e",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "037af70c-77c2-478a-828e-1f9dcc53683e",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "77078ef2-4ec0-45d7-b110-0ed296d3c5af",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "spec": "set5",
        "matches": [
          "a1c20aef-bf4d-4d72-b2d7-096465882933",
          "7139ed2b-c7e2-452b-b137-3d0b392e4121",
          "49322b15-6ec8-4b9f-b69b-c36530d51197",
          "b0ab81f5-2ce6-46ac-abcf-850bbee405ad"
        ],
        "missing": [
          "b9f488ec-d3fc-4fd1-9b94-15adfaf8b21f"
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
            "id": "05ee35d2-8ff5-41f1-9639-76c23de99603"
          },
          {
            "actual": 4,
            "id": "2470cea8-f78c-4c67-96a7-3bde577ab75c"
          }
        ],
        "id": "ddc52569-65ea-4972-964b-106e70610bda",
        "type": "set-verification-result"
      },
      {
        "id": "set5",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "1087f646-6b6f-4942-bb09-5af90611a169",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "368ec14a-fb51-42d1-9ac9-6d70544dcd14",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "7ff55d43-f822-4758-91f4-ac96a87d8d85",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "18636d1b-657c-4350-9f9a-6b103eb9c969",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "9bfdc6ae-1ecb-4087-861d-b0b36c1c09cd",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f22db442-845a-4fe6-b322-73411878371e",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "037af70c-77c2-478a-828e-1f9dcc53683e",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "77078ef2-4ec0-45d7-b110-0ed296d3c5af",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "spec": "set5",
              "matches": [
                "a1c20aef-bf4d-4d72-b2d7-096465882933",
                "7139ed2b-c7e2-452b-b137-3d0b392e4121",
                "49322b15-6ec8-4b9f-b69b-c36530d51197",
                "b0ab81f5-2ce6-46ac-abcf-850bbee405ad"
              ],
              "missing": [
                "b9f488ec-d3fc-4fd1-9b94-15adfaf8b21f"
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
                  "id": "05ee35d2-8ff5-41f1-9639-76c23de99603"
                },
                {
                  "actual": 4,
                  "id": "2470cea8-f78c-4c67-96a7-3bde577ab75c"
                }
              ],
              "id": "ddc52569-65ea-4972-964b-106e70610bda",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 4,
            "wrongs": 5,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.3086846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "table1": [
      {
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
        "id": "9798daa5-3bb0-44b5-affe-a291866fb99c",
        "spec": "table1",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "03c8f26f-1eaa-47aa-a154-931feee5b07b",
        "spec": "table1",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "table1",
        "results": {
          "results": [
            {
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
              "id": "9798daa5-3bb0-44b5-affe-a291866fb99c",
              "spec": "table1",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "03c8f26f-1eaa-47aa-a154-931feee5b07b",
              "spec": "table1",
              "position": null,
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 2,
            "wrongs": 0,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.3116846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "table2": [
      {
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
        "id": "98b9f876-c8d1-4ffa-8583-e7d293f03894",
        "spec": "table2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "0caac55e-3516-446a-b626-c76f5b16ded5",
        "spec": "table2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "table2",
        "results": {
          "results": [
            {
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
              "id": "98b9f876-c8d1-4ffa-8583-e7d293f03894",
              "spec": "table2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "0caac55e-3516-446a-b626-c76f5b16ded5",
              "spec": "table2",
              "position": null,
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 2,
            "wrongs": 2,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.3146846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "table3": [
      {
        "error": null,
        "cells": [],
        "id": "bb95d288-3160-487d-9c07-80412b45fb8d",
        "spec": "table3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "9e4c142f-be64-42a2-b496-c161573be112",
        "spec": "table3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "13b7a0fa-6ef5-404c-970b-9d4f9ced12f8",
        "spec": "table3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "b18d3fd5-e2cb-47ea-90af-387e569d917f",
        "spec": "table3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "table3",
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "bb95d288-3160-487d-9c07-80412b45fb8d",
              "spec": "table3",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "9e4c142f-be64-42a2-b496-c161573be112",
              "spec": "table3",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "13b7a0fa-6ef5-404c-970b-9d4f9ced12f8",
              "spec": "table3",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "b18d3fd5-e2cb-47ea-90af-387e569d917f",
              "spec": "table3",
              "position": null,
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.3176846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "table4": [
      {
        "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<BeforeThrowsError>b__5() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 40\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass2.<Before>b__1(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 65\r\n   at StoryTeller.Grammars.SilentAction.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
        "cells": [],
        "id": "before",
        "spec": "table4",
        "position": "before",
        "status": "error",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "afc2294c-f0f2-42fa-ab14-5ea34e943220",
        "spec": "table4",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "172ff5a8-2e99-46b8-b08d-832826ae9e9e",
        "spec": "table4",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<AfterThrowsError>b__b() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 47\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass5.<After>b__4(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 76\r\n   at StoryTeller.Grammars.SilentAction.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
        "cells": [],
        "id": "after",
        "spec": "table4",
        "position": "after",
        "status": "error",
        "type": "step-result"
      },
      {
        "id": "table4",
        "results": {
          "results": [
            {
              "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<BeforeThrowsError>b__5() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 40\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass2.<Before>b__1(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 65\r\n   at StoryTeller.Grammars.SilentAction.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
              "cells": [],
              "id": "before",
              "spec": "table4",
              "position": "before",
              "status": "error",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "afc2294c-f0f2-42fa-ab14-5ea34e943220",
              "spec": "table4",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "172ff5a8-2e99-46b8-b08d-832826ae9e9e",
              "spec": "table4",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<AfterThrowsError>b__b() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 47\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass5.<After>b__4(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 76\r\n   at StoryTeller.Grammars.SilentAction.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
              "cells": [],
              "id": "after",
              "spec": "table4",
              "position": "after",
              "status": "error",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 2,
            "invalids": 0
          }
        },
        "time": "2015-05-01T14:27:25.3236846-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "table5": [
      {
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
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "3af37c76-f5e7-44f4-badf-a45caa949794",
        "spec": "table5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "c4498fa4-6c64-4019-8468-7f87b5fdd4e7",
        "spec": "table5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "4",
        "spec": "table5",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "4",
        "spec": "table5",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "5",
        "spec": "table5",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "5",
        "spec": "table5",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "27b59c93-4eda-483c-ba89-9ba2d7549255",
        "spec": "table5",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "27b59c93-4eda-483c-ba89-9ba2d7549255",
        "spec": "table5",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "27b59c93-4eda-483c-ba89-9ba2d7549255",
        "spec": "table5",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "922c3585-2e78-4f8b-b1e5-a41e6561e1e3",
        "spec": "table5",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "922c3585-2e78-4f8b-b1e5-a41e6561e1e3",
        "spec": "table5",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
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
        "id": "922c3585-2e78-4f8b-b1e5-a41e6561e1e3",
        "spec": "table5",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "table5",
        "results": {
          "results": [
            {
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
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "3af37c76-f5e7-44f4-badf-a45caa949794",
              "spec": "table5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "c4498fa4-6c64-4019-8468-7f87b5fdd4e7",
              "spec": "table5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "4",
              "spec": "table5",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "4",
              "spec": "table5",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "5",
              "spec": "table5",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "5",
              "spec": "table5",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "27b59c93-4eda-483c-ba89-9ba2d7549255",
              "spec": "table5",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "27b59c93-4eda-483c-ba89-9ba2d7549255",
              "spec": "table5",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "27b59c93-4eda-483c-ba89-9ba2d7549255",
              "spec": "table5",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "922c3585-2e78-4f8b-b1e5-a41e6561e1e3",
              "spec": "table5",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "922c3585-2e78-4f8b-b1e5-a41e6561e1e3",
              "spec": "table5",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
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
              "id": "922c3585-2e78-4f8b-b1e5-a41e6561e1e3",
              "spec": "table5",
              "position": "3",
              "status": "ok",
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
              "title": "Debug Output"
            }
          ],
          "attempts": 1,
          "aborted": false,
          "time": "2:27 PM",
          "counts": {
            "rights": 2,
            "wrongs": 2,
            "errors": 0,
            "invalids": 6
          }
        },
        "time": "2015-05-01T14:27:25.3296846-05:00",
        "type": "spec-execution-completed"
      }
    ]
  }
}