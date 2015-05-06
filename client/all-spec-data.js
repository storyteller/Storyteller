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
      "title": "Embeds",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Regression",
      "mode": "full",
      "tags": [],
      "steps": [
        {
          "key": "Embedded",
          "type": "section",
          "steps": [
            {
              "key": "ThrowAnExceptionOnTheNextEmbed",
              "cells": {},
              "collections": [],
              "id": "6eb01707-b5bb-4405-95fc-be9342c9a799"
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
                      "id": "32b343d2-fd75-4d00-829b-f21ce7eb706f"
                    }
                  ],
                  "activeCells": {},
                  "id": "errors"
                }
              ],
              "id": "c69546f8-1fc0-4deb-a418-ca3b8a28bc1f"
            },
            {
              "key": "DoNotThrowAnExceptionOnTheNextEmbed",
              "cells": {},
              "collections": [],
              "id": "724d4939-f312-4d02-a427-dc80a14795da"
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
                      "id": "ec7b6402-74b5-4bf8-8931-ec3c1982382c"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "5",
                        "y": "5",
                        "returnValue": "11"
                      },
                      "collections": [],
                      "id": "6dc6b762-415f-468c-baf7-f302dc0715fd"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "5",
                        "y": "6",
                        "returnValue": "abc"
                      },
                      "collections": [],
                      "id": "83cd6392-215f-459f-9a8c-6e5b9654dda5"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "30c1ff99-f825-4e52-a75d-664cd0999e07"
                    }
                  ],
                  "activeCells": {},
                  "id": "no-errors"
                }
              ],
              "id": "fe227d7a-779e-426e-a27f-8ce8eebc041b"
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
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
              "id": "227b920c-d099-43d0-822e-015cc846e829"
            },
            {
              "key": "TheAddressShouldBe",
              "cells": {
                "Address1": "2035 Ozark",
                "Address2": "Apt 3",
                "City": "Carthage"
              },
              "collections": [],
              "id": "3ffe0d1b-76f7-4e92-978d-3077d72ac9f0"
            },
            {
              "key": "TheAddressShouldBe",
              "cells": {
                "Address1": "wrong",
                "Address2": "wrong",
                "City": "wrong"
              },
              "collections": [],
              "id": "74567519-26a8-497e-adea-850bff78a7a1"
            }
          ],
          "activeCells": {},
          "id": "7690a454-1816-4dd5-94fb-64de60c02edc"
        }
      ],
      "id": "general1"
    },
    "SometimesSlow": {
      "title": "Occasionally Times Out",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
              "id": "8ce6d63e-350e-4d98-919b-7999cc2860e3"
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
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
              "id": "60262695-05e6-4383-bf64-f0de84c82430"
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
                      "id": "7868e21b-1d1e-4ac6-9f7b-d2c5d72df632"
                    },
                    {
                      "key": "table",
                      "cells": {
                        "first": "Harold",
                        "last": "Miller",
                        "fullname": "Harold Mueller"
                      },
                      "collections": [],
                      "id": "5dddc01b-e439-4b44-a35a-b0140ce6d3db"
                    }
                  ],
                  "activeCells": {},
                  "id": "a2068ff8-fd58-4abe-baf4-c25d6b1bc9a6"
                }
              ],
              "id": "75054339-07bd-474f-be31-20e3183f7b9a"
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
                      "id": "777b5301-634e-46a5-8057-b5431c60c922"
                    }
                  ],
                  "activeCells": {},
                  "id": "a7bed3ea-60d6-484c-9569-7d238ab19873"
                }
              ],
              "id": "04c3891e-1a04-46d4-bee4-27581ddef5f3"
            },
            {
              "key": "TheEnumOptionIs",
              "cells": {
                "option": "FirstOption",
                "selectedOption": "0"
              },
              "collections": [],
              "id": "f54a5aab-f481-436d-b4c9-4ef92555f7bc"
            }
          ],
          "activeCells": {},
          "id": "efab0261-7015-4b3c-898a-73d57a12d00c"
        }
      ],
      "id": "general2"
    },
    "general3": {
      "title": "Services",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
              "id": "69b8493a-54c7-4d1d-9ad9-ff82fa998896"
            },
            {
              "key": "Check",
              "cells": {
                "value": "5"
              },
              "collections": [],
              "id": "df275297-c523-4604-8f36-3769986037a6"
            },
            {
              "key": "Set",
              "cells": {
                "value": "6"
              },
              "collections": [],
              "id": "b6193ea9-45eb-4a93-8511-23c9418c5d53"
            },
            {
              "key": "Check",
              "cells": {
                "value": "7"
              },
              "collections": [],
              "id": "44f80cc4-187e-4a4a-97a5-0108b717b8ba"
            },
            {
              "key": "Set",
              "cells": {
                "value": "abc"
              },
              "collections": [],
              "id": "9e85ca01-0670-401e-a02a-b77eee4a0566"
            }
          ],
          "activeCells": {},
          "id": "8fd6ca75-ed91-47e9-a262-d5d34bfb6ee2"
        }
      ],
      "id": "general3"
    },
    "runtime-converter": {
      "title": "System Defined Lists and Runtime Converters",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
              "id": "3ab42657-755d-4f15-82b6-d728eed37d1e"
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
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "steps": [
        {
          "key": "Math",
          "type": "section",
          "steps": [
            {
              "key": "BadGrammar1",
              "cells": {},
              "collections": [],
              "id": "5e1a5d9a-5eaf-403b-b1d5-217196a433db"
            },
            {
              "key": "BadGrammar2",
              "cells": {},
              "collections": [],
              "id": "d25cc7f5-a2af-4a70-87f1-2b9b4160c9b8"
            },
            {
              "key": "BadGrammar3",
              "cells": {},
              "collections": [],
              "id": "81dc678e-21bc-455b-8736-0607f7078afd"
            }
          ],
          "activeCells": {},
          "id": "d84a4aa5-835c-4e3a-b8e5-1b369a1cf163"
        }
      ],
      "id": "general4"
    },
    "general5": {
      "title": "Test with Missing Fixture Name",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
      "lifecycle": "Regression",
      "mode": "full",
      "tags": [],
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
              "id": "aa5c2a90-3c39-4b5e-820c-c522520ff092"
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
                      "id": "a6aef99e-37a8-4238-8ec7-2c14cd41eacc"
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
                      "id": "2bf7e41d-dc20-4a19-aaa3-443233fc9339"
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
                      "id": "8cc832da-c7f0-443c-9dbc-2290cdf9cbf8"
                    }
                  ],
                  "activeCells": {},
                  "id": "6e5fbb0f-3a55-4f52-bccd-11d47dd8f51d"
                }
              ],
              "id": "8169d9d2-d2d4-4d12-b9a7-bfc458534a0b"
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
              "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32"
            }
          ],
          "activeCells": {},
          "id": "c4c00251-1bef-4a75-b035-d174e709d900"
        }
      ],
      "id": "paragraph1"
    },
    "paragraph2": {
      "title": "Simple Composite",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
              "id": "71aa15d5-2ab0-41c1-b2a7-1453ecf65b99"
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
              "id": "bcc6b199-8a95-420b-b029-f1d60711e489"
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
                      "id": "2e5a3ede-a2af-4f3f-9928-f7b78d9beb84"
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
                      "id": "ef81ad19-441c-4b80-8308-bc2c6f45fd35"
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
                      "id": "8be6e1da-d361-4b74-88f8-30e83d7ebbaa"
                    }
                  ],
                  "activeCells": {},
                  "id": "f9d1f0ad-4cb9-4c31-9813-ee42032e4178"
                }
              ],
              "id": "a0e52df8-b966-4941-8a46-b3cab0b39bbc"
            }
          ],
          "activeCells": {},
          "id": "5a6d7432-b969-4174-ab82-0b25230f103d"
        }
      ],
      "id": "paragraph2"
    },
    "sentence1": {
      "title": "Currying",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
              "id": "8f01c6de-412d-4cff-a995-5278f0d752ba"
            },
            {
              "key": "AddTo5",
              "cells": {
                "x": "5",
                "returnValue": "9",
                "y": "5"
              },
              "collections": [],
              "id": "7fca24d2-170c-462b-9ec3-2e085645f315"
            }
          ],
          "activeCells": {},
          "id": "cd8a522a-2e42-400d-ae68-4240ec0d7982"
        }
      ],
      "id": "sentence1"
    },
    "sentence2": {
      "title": "Facts",
      "path": null,
      "max-retries": 3,
      "lifecycle": "Regression",
      "mode": "full",
      "tags": [],
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
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
              "id": "cd0afb04-0383-4806-accd-5600f5594ecb"
            },
            {
              "key": "AddingTo5",
              "cells": {
                "y": "12",
                "returnValue": "15",
                "x": "5"
              },
              "collections": [],
              "id": "cf13f1ed-43e3-4096-a97a-e632662844f3"
            }
          ],
          "activeCells": {},
          "id": "cc92dc25-9433-479f-a5fc-107ffb820987"
        }
      ],
      "id": "sentence3"
    },
    "sentence4": {
      "title": "Sentences",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
              "id": "340a1a2d-d56a-4f6c-9a38-fa0925540d1c"
            },
            {
              "key": "MultiplyThenAdd",
              "cells": {
                "multiplier": "3",
                "delta": "4"
              },
              "collections": [],
              "id": "334b29d9-e265-45c5-81ea-dcfe45dad8bd"
            },
            {
              "key": "Subtract",
              "cells": {
                "operand": "2"
              },
              "collections": [],
              "id": "0a553c74-9909-412f-9b73-388909239c07"
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
              "id": "3c472b36-216f-4a84-876a-c40432ad103c"
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
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
                      "id": "25e7316a-9c21-4127-b872-acb288099ce0"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Drill",
                        "Amount": "200.2",
                        "Date": "TODAY+1"
                      },
                      "collections": [],
                      "id": "d70c59a8-ca91-40e9-948a-8497c8bdf3d9"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Name": "Hammer",
                        "Amount": "300.3",
                        "Date": "TODAY+2"
                      },
                      "collections": [],
                      "id": "7425a2f3-53f0-48d6-a351-c3a2243bab35"
                    }
                  ],
                  "activeCells": {},
                  "id": "854515a0-e44c-4842-a18e-cbbc3ebf6d51"
                }
              ],
              "id": "54509fa4-cf89-4c66-babc-cee915f0ea78"
            },
            {
              "text": "Completely successful ordering",
              "type": "comment",
              "id": "4e71580d-1144-4da2-b47e-02b651a07d3d"
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
              "id": "990a251f-bcf7-4477-8caf-bd41292dc072"
            },
            {
              "text": "Out of order",
              "type": "comment",
              "id": "b6107f96-3602-4136-b54e-7899a6da01ed"
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
              "id": "a919635d-9995-44ea-a04e-82f3be3fad66"
            },
            {
              "text": "Should have one exra",
              "type": "comment",
              "id": "ac828c79-e379-457d-aeac-b0e7b6092e8c"
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
                      "id": "61519e36-f0c0-48ee-bac2-591030f088cf"
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
                      "id": "6b0e65c8-971a-4fc1-9303-465ac16e087b"
                    }
                  ],
                  "activeCells": {},
                  "id": "9"
                }
              ],
              "id": "86c82c2e-e4af-4945-809c-42e31fc3cd39"
            },
            {
              "text": "Should mark one expected result as missing",
              "type": "comment",
              "id": "6abbc6b6-bb02-4412-9e7f-88a2016b3467"
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
                      "id": "587e8013-bd96-4599-a4dc-e787051c439f"
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
                      "id": "f4003ae0-c142-4ee0-a083-b4c0fcea2290"
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
                      "id": "e10dfffa-5837-4557-b39a-37d6963ec506"
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
              "id": "98f12048-1095-42fa-8703-ade8c6180279"
            },
            {
              "text": "One syntax error",
              "type": "comment",
              "id": "ed5f7566-b802-43a4-84de-a295dfe1707b"
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
                      "id": "cebdf30d-32a6-4800-8e8f-37ac106015dc"
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
                      "id": "7a576c60-41f8-4554-b2ef-6850205ac791"
                    }
                  ],
                  "activeCells": {},
                  "id": "791328a5-cc38-49b0-b9de-356f70b32998"
                }
              ],
              "id": "e5848764-dca6-4488-a09e-e11f61d72923"
            }
          ],
          "activeCells": {},
          "id": "9e9c71da-3afa-4345-85e2-5becb589a095"
        }
      ],
      "id": "set1"
    },
    "set2": {
      "title": "Successful OrderedStrings",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
                      "id": "29ed2168-1551-495a-bec9-95e3cf7d1218"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Josh"
                      },
                      "collections": [],
                      "id": "cd11e32a-0ab6-44e3-a82d-40cc9347802c"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Gary"
                      },
                      "collections": [],
                      "id": "54430e6a-6d83-40be-a86f-0c04c74b5dc5"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Kevin"
                      },
                      "collections": [],
                      "id": "33b60227-7dd8-4f2e-8e1d-b8d3b8358d56"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Chad"
                      },
                      "collections": [],
                      "id": "6304cf9a-c446-4953-84f5-e1ebdbb3bcf0"
                    }
                  ],
                  "activeCells": {},
                  "id": "e1d1a216-f44b-4e96-88e1-b0abf1b05aaf"
                }
              ],
              "id": "32f3fc94-c1c6-4dc3-b7b3-30658195e089"
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
                      "id": "f6c398a4-f183-4e3a-8b9b-102952fa5e73"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Josh",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "74af4352-537c-4a29-9e20-9fc697f2d656"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Gary",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "77f98881-a656-4af4-a26d-548b4263936a"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Kevin",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "a40068ab-9108-4806-a015-653b808e73d4"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Chad",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "d64ac33a-1dca-40dc-b2c5-09bc94588c4d"
                    }
                  ],
                  "activeCells": {},
                  "id": "5e5954cc-fb6a-477f-9ba4-77d8926efc22"
                }
              ],
              "id": "0674466a-1d8c-4e53-bbf9-7c44cf58b698"
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
                      "id": "26183528-2eaf-43bb-9105-26f3fd2c9fa2"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Chad",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "68420b7f-0069-4210-a434-46e99c674cc7"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Jeremy",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "3aeb5af9-f66f-4e65-b3de-d5c5acd3d892"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Josh",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "d076f6fe-0b4e-46a5-a361-9f808a8fc1c4"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Gary",
                        "Index": ""
                      },
                      "collections": [],
                      "id": "13ae6ab2-22f6-41fe-a7ce-a93c4f85c02c"
                    }
                  ],
                  "activeCells": {},
                  "id": "38c10707-8a5b-4b85-b24e-c637d416dd85"
                }
              ],
              "id": "c3c5d458-112b-47f1-a9e1-39b30b691776"
            }
          ],
          "activeCells": {},
          "id": "7f8308a4-5743-43f4-9731-134c7eec81d7"
        }
      ],
      "id": "set2"
    },
    "set3": {
      "title": "Set with Error",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
                      "id": "4077b1d0-e58c-4e7f-a704-af84c333badc"
                    },
                    {
                      "key": "rows",
                      "cells": {
                        "Name": "b"
                      },
                      "collections": [],
                      "id": "3a46695e-610b-4cfe-963b-49075bac38f1"
                    },
                    {
                      "key": "rows",
                      "cells": {
                        "Name": "c"
                      },
                      "collections": [],
                      "id": "3ed87794-ab47-4f93-92d7-a8de0c18f7cd"
                    }
                  ],
                  "activeCells": {},
                  "id": "1"
                }
              ],
              "id": "ed46b213-4d2a-4c02-9751-0a16591aba24"
            }
          ],
          "activeCells": {},
          "id": "aa93f65a-de47-40f3-936b-7cee51de41eb"
        }
      ],
      "id": "set3"
    },
    "set4": {
      "title": "Unordered Set",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
                      "id": "4393cbdf-7584-464f-a6af-2f6911dc0269"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "200.2",
                        "Date": "TODAY+1",
                        "Name": "Drill"
                      },
                      "collections": [],
                      "id": "79e2c518-3caf-48a2-9bd5-facffe1a77a0"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "300.3",
                        "Date": "TODAY+2",
                        "Name": "Hammer"
                      },
                      "collections": [],
                      "id": "6902a56e-b4c2-4be4-96b3-d08bc644a9e0"
                    }
                  ],
                  "activeCells": {},
                  "id": "5541deee-ecc9-46c6-b6a5-e213c70d85f5"
                }
              ],
              "id": "22b08abb-efbd-48a7-8e49-c06336fe5392"
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
                      "id": "929372d9-a71d-4f6c-b966-01f75ca4443e"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "Amount": "300.3",
                        "Date": "TODAY+2",
                        "Name": "Hammer"
                      },
                      "collections": [],
                      "id": "5cca811a-4fb4-4a9f-bf3d-00ceca0dcff2"
                    }
                  ],
                  "activeCells": {},
                  "id": "49ac31b0-40ee-4e38-b91f-13dba36d7026"
                }
              ],
              "id": "485144fb-8057-4eca-885f-84af43bc77ad"
            }
          ],
          "activeCells": {},
          "id": "32d58856-d2bb-47e0-a0cf-cf833e8046b7"
        }
      ],
      "id": "set4"
    },
    "set5": {
      "title": "Unsuccessful Ordering",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
                      "id": "76967e10-c6b5-4f1a-8408-2ed10e52fae0"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Josh"
                      },
                      "collections": [],
                      "id": "3974a874-ad2e-411e-9ae3-5c37d4643640"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Gary"
                      },
                      "collections": [],
                      "id": "4ed11d43-90be-4834-8446-11a218b4ce20"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Kevin"
                      },
                      "collections": [],
                      "id": "a134b8a5-3948-4c77-87aa-ffb65c16af47"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Chad"
                      },
                      "collections": [],
                      "id": "b333c496-26c4-4ce8-9481-963e799e476d"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Rand"
                      },
                      "collections": [],
                      "id": "b7944d8a-01e7-4300-afe1-3ee14e5f680d"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Perrin"
                      },
                      "collections": [],
                      "id": "f9bf11e3-c6de-4d3a-bc61-65e4f3632a6c"
                    },
                    {
                      "key": "name",
                      "cells": {
                        "name": "Mat"
                      },
                      "collections": [],
                      "id": "7b47ec16-5089-4ed0-94a7-eb08b8d866a0"
                    }
                  ],
                  "activeCells": {},
                  "id": "fbd38ea5-3ca3-4552-8334-a25642fe7f44"
                }
              ],
              "id": "78794a9a-0205-4eed-8c53-bda7ec12669d"
            },
            {
              "text": "All data is correct, but in the wrong order",
              "type": "comment",
              "id": "5ed0baf2-6e4c-4344-a7fb-bbd7609923d6"
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
                      "id": "ac530562-e812-4c7e-8ee8-414a69e34a69"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Josh",
                        "Index": "2"
                      },
                      "collections": [],
                      "id": "e2a573e1-d56a-43db-bf81-0d5ae0ce2ae3"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Gary",
                        "Index": "3"
                      },
                      "collections": [],
                      "id": "14b14cdf-4922-4729-83d6-4c58719d1108"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Chad",
                        "Index": "5"
                      },
                      "collections": [],
                      "id": "f772e98d-632b-4c8a-bca5-36181d08a405"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Kevin",
                        "Index": "4"
                      },
                      "collections": [],
                      "id": "cd4a08c6-9af4-43a6-b317-bf1fc33980d8"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Egwene"
                      },
                      "collections": [],
                      "id": "ed517be7-a5fd-4dd9-a64a-d8cb49790fd6"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "expected": "Perrin"
                      },
                      "collections": [],
                      "id": "43ad83d9-f662-4ccb-a119-4dcf5101cde9"
                    }
                  ],
                  "activeCells": {},
                  "id": "6e5caeb7-a5ee-4346-8638-b099d99578fb"
                }
              ],
              "id": "1ac2e691-e706-4961-8a56-de428802eda1"
            }
          ],
          "activeCells": {},
          "id": "4a73d89a-5b2b-4e3a-a843-4d116ad52196"
        }
      ],
      "id": "set5"
    },
    "table1": {
      "title": "Boolean Results in a Table",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
                      "id": "ced85021-bb20-4ed8-a884-0f91bc5fd670"
                    },
                    {
                      "key": "row",
                      "cells": {
                        "number": "-5",
                        "IsEven": "false"
                      },
                      "collections": [],
                      "id": "084b9332-7eac-46b5-8a41-6ae6c591dea7"
                    }
                  ],
                  "activeCells": {},
                  "id": "ce2a4115-9e5c-4dfb-a393-56795c58c96f"
                }
              ],
              "id": "df3de62b-52b8-4b00-b125-6bdb4218aa75"
            }
          ],
          "activeCells": {},
          "id": "1b4cc71e-ba6e-4ddf-abc5-7e35c7d565a0"
        }
      ],
      "id": "table1"
    },
    "table2": {
      "title": "Decision Table",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
                      "id": "daf14b02-0ba1-4a87-a942-e8466fb0642a"
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
                      "id": "09c4cd18-e09d-41fe-8e33-da32754f12f0"
                    }
                  ],
                  "activeCells": {},
                  "id": "0d7abde8-9a77-4b58-af48-e6a0da3b9241"
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
                      "id": "aa301d84-4a9f-4147-8253-bad7ed29a685"
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
                      "id": "9a7d27d1-04f1-4420-88bb-7c8873459333"
                    }
                  ],
                  "activeCells": {},
                  "id": "9ddd1ead-acbc-48c7-a52a-46b545780030"
                }
              ],
              "id": "44d44b02-010d-4f12-81e6-5f9ac2e9ce0d"
            }
          ],
          "activeCells": {},
          "id": "e9ccd39e-9595-4405-a1d2-4ceb42b4e5b2"
        }
      ],
      "id": "table2"
    },
    "table3": {
      "title": "Table with Optional Columns",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
                      "id": "56451016-7a14-4733-bda9-b89a2eba115b"
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
                      "id": "6ff7bc7d-0ab6-4344-a18b-0fedc4bef8a0"
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
                      "id": "091b0f3f-7733-485e-bc05-c90b6f40261f"
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
                      "id": "3670de81-8f3b-46f7-9ba6-a0e88457cc7b"
                    }
                  ],
                  "activeCells": {
                    "b": false,
                    "c": false
                  },
                  "id": "3c402eda-44ab-48b2-bc1e-e83730c123cf"
                }
              ],
              "id": "f3344dcf-b72d-40f3-9bf5-b7f08898590e"
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
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
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
                      "id": "77fca1a7-2ee4-4a39-9d2f-26b1e5b05bae"
                    }
                  ],
                  "activeCells": {},
                  "id": "before"
                }
              ],
              "id": "3588ceb3-9dd3-4546-9dfd-4a0f94522441"
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
                      "id": "470e107e-d957-4a62-8c1c-5693ef57eee5"
                    }
                  ],
                  "activeCells": {},
                  "id": "after"
                }
              ],
              "id": "06cf8911-7926-401b-b813-643ca5f3c093"
            }
          ],
          "activeCells": {},
          "id": "5c07414e-12d6-48bd-8ea7-cede3118930a"
        }
      ],
      "id": "table4"
    },
    "table5": {
      "title": "Tables",
      "path": null,
      "max-retries": 0,
      "lifecycle": "Acceptance",
      "mode": "full",
      "tags": [],
      "steps": [
        {
          "key": "Table",
          "type": "section",
          "steps": [
            {
              "text": "Table by the ExposeAsTable attribute",
              "type": "comment",
              "id": "90e5d0de-4da6-44a7-b5f1-52a950ec47f4"
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
                      "id": "93091638-d903-4ff0-ba1b-9f39242ffbb6"
                    },
                    {
                      "key": "sum",
                      "cells": {
                        "x": "2",
                        "y": "2",
                        "sum": "5"
                      },
                      "collections": [],
                      "id": "ac3b735d-64fc-43c1-9575-450769d156bc"
                    }
                  ],
                  "activeCells": {},
                  "id": "51014bb2-f668-49b9-bbd2-e5cde2f76822"
                }
              ],
              "id": "46c5caf4-32c3-43be-9590-603b7dbfa43f"
            },
            {
              "text": "Table fixture from script",
              "type": "comment",
              "id": "11c87073-e3d9-44d5-b1ad-7996d1de025d"
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
                      "id": "db40cfee-9f5c-4be0-8100-f1ef81a320e0"
                    },
                    {
                      "key": "Rows",
                      "cells": {
                        "x": "3",
                        "y": "3",
                        "product": "****"
                      },
                      "collections": [],
                      "id": "236ae5d4-145b-4cb3-b95c-8ebc2da2309b"
                    }
                  ],
                  "activeCells": {},
                  "id": "3d69c923-94a7-4537-9394-f9929718c1a1"
                }
              ],
              "id": "e3fc363b-b944-4b41-b3f4-91a692ed7460"
            }
          ],
          "activeCells": {},
          "id": "264cff28-abb9-47ea-bd89-3c850b0e0a96"
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
            "lifecycle": "Regression",
            "mode": "header",
            "tags": [],
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
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "general1"
          },
          {
            "title": "Occasionally Times Out",
            "path": "General/Occasionally Times Out",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "SometimesSlow"
          },
          {
            "title": "Selection List Values",
            "path": "General/Selection List Values",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "general2"
          },
          {
            "title": "Services",
            "path": "General/Services",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "general3"
          },
          {
            "title": "System Defined Lists and Runtime Converters",
            "path": "General/System Defined Lists and Runtime Converters",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "runtime-converter"
          },
          {
            "title": "Test with Bad Grammar Name",
            "path": "General/Test with Bad Grammar Name",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "general4"
          },
          {
            "title": "Test with Missing Fixture Name",
            "path": "General/Test with Missing Fixture Name",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
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
            "lifecycle": "Regression",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "paragraph1"
          },
          {
            "title": "Simple Composite",
            "path": "Paragraphs/Simple Composite",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
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
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "sentence1"
          },
          {
            "title": "Facts",
            "path": "Sentences/Facts",
            "max-retries": 3,
            "lifecycle": "Regression",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "sentence2"
          },
          {
            "title": "Importing and Currying",
            "path": "Sentences/Importing and Currying",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "sentence3"
          },
          {
            "title": "Sentences",
            "path": "Sentences/Sentences",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
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
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "set1"
          },
          {
            "title": "Successful OrderedStrings",
            "path": "Sets/Successful OrderedStrings",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "set2"
          },
          {
            "title": "Set with Error",
            "path": "Sets/Set with Error",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "set3"
          },
          {
            "title": "Unordered Set",
            "path": "Sets/Unordered Set",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "set4"
          },
          {
            "title": "Unsuccessful Ordering",
            "path": "Sets/Unsuccessful Ordering",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
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
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "table1"
          },
          {
            "title": "Decision Table",
            "path": "Tables/Decision Table",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "table2"
          },
          {
            "title": "Table with Optional Columns",
            "path": "Tables/Table with Optional Columns",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "table3"
          },
          {
            "title": "Tables with Errors",
            "path": "Tables/Tables with Errors",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
            "steps": [],
            "id": "table4"
          },
          {
            "title": "Tables",
            "path": "Tables/Tables",
            "max-retries": 0,
            "lifecycle": "Acceptance",
            "mode": "header",
            "tags": [],
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
    "embeds": [
      {
        "error": null,
        "cells": [],
        "id": "6eb01707-b5bb-4405-95fc-be9342c9a799",
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
        "id": "32b343d2-fd75-4d00-829b-f21ce7eb706f",
        "spec": "embeds",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "724d4939-f312-4d02-a427-dc80a14795da",
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
        "id": "ec7b6402-74b5-4bf8-8931-ec3c1982382c",
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
        "id": "6dc6b762-415f-468c-baf7-f302dc0715fd",
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
        "id": "83cd6392-215f-459f-9a8c-6e5b9654dda5",
        "spec": "embeds",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\MathFixture.cs:line 120\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__e.MoveNext() in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 76\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
        "cells": [],
        "id": "30c1ff99-f825-4e52-a75d-664cd0999e07",
        "spec": "embeds",
        "position": null,
        "status": "error",
        "type": "step-result"
      },
      {
        "id": "embeds",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "2821eb77-1110-4924-8029-892acb4a5eb2"
        },
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "6eb01707-b5bb-4405-95fc-be9342c9a799",
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
              "id": "32b343d2-fd75-4d00-829b-f21ce7eb706f",
              "spec": "embeds",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "724d4939-f312-4d02-a427-dc80a14795da",
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
              "id": "ec7b6402-74b5-4bf8-8931-ec3c1982382c",
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
              "id": "6dc6b762-415f-468c-baf7-f302dc0715fd",
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
              "id": "83cd6392-215f-459f-9a8c-6e5b9654dda5",
              "spec": "embeds",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw() in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\MathFixture.cs:line 120\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__e.MoveNext() in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 76\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
              "cells": [],
              "id": "30c1ff99-f825-4e52-a75d-664cd0999e07",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 2,
            "wrongs": 1,
            "errors": 2,
            "invalids": 1
          }
        },
        "time": "2015-05-06T15:17:37.7102005-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "general1": [
      {
        "error": null,
        "cells": [],
        "id": "227b920c-d099-43d0-822e-015cc846e829",
        "spec": "general1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "227b920c-d099-43d0-822e-015cc846e829",
        "spec": "general1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "227b920c-d099-43d0-822e-015cc846e829",
        "spec": "general1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "227b920c-d099-43d0-822e-015cc846e829",
        "spec": "general1",
        "position": "4",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "227b920c-d099-43d0-822e-015cc846e829",
        "spec": "general1",
        "position": "5",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "227b920c-d099-43d0-822e-015cc846e829",
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
        "id": "3ffe0d1b-76f7-4e92-978d-3077d72ac9f0",
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
        "id": "3ffe0d1b-76f7-4e92-978d-3077d72ac9f0",
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
        "id": "3ffe0d1b-76f7-4e92-978d-3077d72ac9f0",
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
        "id": "74567519-26a8-497e-adea-850bff78a7a1",
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
        "id": "74567519-26a8-497e-adea-850bff78a7a1",
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
        "id": "74567519-26a8-497e-adea-850bff78a7a1",
        "spec": "general1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "general1",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "b58a4ed3-a5c6-4266-b9bb-154644cc4880"
        },
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "227b920c-d099-43d0-822e-015cc846e829",
              "spec": "general1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "227b920c-d099-43d0-822e-015cc846e829",
              "spec": "general1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "227b920c-d099-43d0-822e-015cc846e829",
              "spec": "general1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "227b920c-d099-43d0-822e-015cc846e829",
              "spec": "general1",
              "position": "4",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "227b920c-d099-43d0-822e-015cc846e829",
              "spec": "general1",
              "position": "5",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "227b920c-d099-43d0-822e-015cc846e829",
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
              "id": "3ffe0d1b-76f7-4e92-978d-3077d72ac9f0",
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
              "id": "3ffe0d1b-76f7-4e92-978d-3077d72ac9f0",
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
              "id": "3ffe0d1b-76f7-4e92-978d-3077d72ac9f0",
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
              "id": "74567519-26a8-497e-adea-850bff78a7a1",
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
              "id": "74567519-26a8-497e-adea-850bff78a7a1",
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
              "id": "74567519-26a8-497e-adea-850bff78a7a1",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 3,
            "wrongs": 3,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7162011-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "SometimesSlow": [
      {
        "error": null,
        "cells": [],
        "id": "8ce6d63e-350e-4d98-919b-7999cc2860e3",
        "spec": "SometimesSlow",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "SometimesSlow",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "b5f810f3-ab66-4c46-8a57-5f3bcdc8a23f"
        },
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "8ce6d63e-350e-4d98-919b-7999cc2860e3",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7212016-05:00",
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
        "id": "60262695-05e6-4383-bf64-f0de84c82430",
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
        "id": "7868e21b-1d1e-4ac6-9f7b-d2c5d72df632",
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
        "id": "5dddc01b-e439-4b44-a35a-b0140ce6d3db",
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
        "id": "777b5301-634e-46a5-8057-b5431c60c922",
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
        "id": "f54a5aab-f481-436d-b4c9-4ef92555f7bc",
        "spec": "general2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "general2",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "1d44b7dc-7543-4e0f-82a0-45aa08f4efe8"
        },
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
              "id": "60262695-05e6-4383-bf64-f0de84c82430",
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
              "id": "7868e21b-1d1e-4ac6-9f7b-d2c5d72df632",
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
              "id": "5dddc01b-e439-4b44-a35a-b0140ce6d3db",
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
              "id": "777b5301-634e-46a5-8057-b5431c60c922",
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
              "id": "f54a5aab-f481-436d-b4c9-4ef92555f7bc",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 4,
            "wrongs": 1,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7272022-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "general3": [
      {
        "error": "Fixture with key 'Service' does not exist",
        "cells": [],
        "id": "8fd6ca75-ed91-47e9-a262-d5d34bfb6ee2",
        "spec": "general3",
        "position": "setup",
        "status": "invalid",
        "type": "step-result"
      },
      {
        "id": "general3",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "b74b887e-cbb2-4e7c-b812-c5da02fa05a5"
        },
        "results": {
          "results": [
            {
              "error": "Fixture with key 'Service' does not exist",
              "cells": [],
              "id": "8fd6ca75-ed91-47e9-a262-d5d34bfb6ee2",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 0,
            "invalids": 1
          }
        },
        "time": "2015-05-06T15:17:37.7332028-05:00",
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
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "0187232f-46d1-4113-ba1f-3d83652b1ad4"
        },
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
          "time": "3:17 PM",
          "counts": {
            "rights": 1,
            "wrongs": 0,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7362031-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "general4": [
      {
        "error": "Grammar 'BadGrammar1' is not implemented",
        "cells": [],
        "id": "5e1a5d9a-5eaf-403b-b1d5-217196a433db",
        "spec": "general4",
        "position": null,
        "status": "error",
        "type": "step-result"
      },
      {
        "error": "Grammar 'BadGrammar2' is not implemented",
        "cells": [],
        "id": "d25cc7f5-a2af-4a70-87f1-2b9b4160c9b8",
        "spec": "general4",
        "position": null,
        "status": "error",
        "type": "step-result"
      },
      {
        "error": "Grammar 'BadGrammar3' is not implemented",
        "cells": [],
        "id": "81dc678e-21bc-455b-8736-0607f7078afd",
        "spec": "general4",
        "position": null,
        "status": "error",
        "type": "step-result"
      },
      {
        "id": "general4",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "ea62433a-51b5-4af0-906b-679258e6035c"
        },
        "results": {
          "results": [
            {
              "error": "Grammar 'BadGrammar1' is not implemented",
              "cells": [],
              "id": "5e1a5d9a-5eaf-403b-b1d5-217196a433db",
              "spec": "general4",
              "position": null,
              "status": "error",
              "type": "step-result"
            },
            {
              "error": "Grammar 'BadGrammar2' is not implemented",
              "cells": [],
              "id": "d25cc7f5-a2af-4a70-87f1-2b9b4160c9b8",
              "spec": "general4",
              "position": null,
              "status": "error",
              "type": "step-result"
            },
            {
              "error": "Grammar 'BadGrammar3' is not implemented",
              "cells": [],
              "id": "81dc678e-21bc-455b-8736-0607f7078afd",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 3,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7412036-05:00",
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
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "895fcd70-8557-49f2-8021-3a25dca4d4a5"
        },
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
          "time": "3:17 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 0,
            "invalids": 1
          }
        },
        "time": "2015-05-06T15:17:37.745204-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "paragraph1": [
      {
        "error": null,
        "cells": [],
        "id": "aa5c2a90-3c39-4b5e-820c-c522520ff092",
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
        "id": "aa5c2a90-3c39-4b5e-820c-c522520ff092",
        "spec": "paragraph1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "aa5c2a90-3c39-4b5e-820c-c522520ff092",
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
        "id": "aa5c2a90-3c39-4b5e-820c-c522520ff092",
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
        "id": "a6aef99e-37a8-4238-8ec7-2c14cd41eacc",
        "spec": "paragraph1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "a6aef99e-37a8-4238-8ec7-2c14cd41eacc",
        "spec": "paragraph1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "a6aef99e-37a8-4238-8ec7-2c14cd41eacc",
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
        "id": "a6aef99e-37a8-4238-8ec7-2c14cd41eacc",
        "spec": "paragraph1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "2bf7e41d-dc20-4a19-aaa3-443233fc9339",
        "spec": "paragraph1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "2bf7e41d-dc20-4a19-aaa3-443233fc9339",
        "spec": "paragraph1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "2bf7e41d-dc20-4a19-aaa3-443233fc9339",
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
        "id": "2bf7e41d-dc20-4a19-aaa3-443233fc9339",
        "spec": "paragraph1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8cc832da-c7f0-443c-9dbc-2290cdf9cbf8",
        "spec": "paragraph1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8cc832da-c7f0-443c-9dbc-2290cdf9cbf8",
        "spec": "paragraph1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8cc832da-c7f0-443c-9dbc-2290cdf9cbf8",
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
        "id": "8cc832da-c7f0-443c-9dbc-2290cdf9cbf8",
        "spec": "paragraph1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32",
        "spec": "paragraph1",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32",
        "spec": "paragraph1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32",
        "spec": "paragraph1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<.ctor>b__3(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\CompositeFixture.cs:line 25\r\n   at StoryTeller.Grammars.SilentAction.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
        "cells": [],
        "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32",
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
        "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32",
        "spec": "paragraph1",
        "position": "4",
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "paragraph1",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "e9a64752-8991-4f66-9706-ad1b56877cb0"
        },
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "aa5c2a90-3c39-4b5e-820c-c522520ff092",
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
              "id": "aa5c2a90-3c39-4b5e-820c-c522520ff092",
              "spec": "paragraph1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "aa5c2a90-3c39-4b5e-820c-c522520ff092",
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
              "id": "aa5c2a90-3c39-4b5e-820c-c522520ff092",
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
              "id": "a6aef99e-37a8-4238-8ec7-2c14cd41eacc",
              "spec": "paragraph1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "a6aef99e-37a8-4238-8ec7-2c14cd41eacc",
              "spec": "paragraph1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "a6aef99e-37a8-4238-8ec7-2c14cd41eacc",
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
              "id": "a6aef99e-37a8-4238-8ec7-2c14cd41eacc",
              "spec": "paragraph1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "2bf7e41d-dc20-4a19-aaa3-443233fc9339",
              "spec": "paragraph1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "2bf7e41d-dc20-4a19-aaa3-443233fc9339",
              "spec": "paragraph1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "2bf7e41d-dc20-4a19-aaa3-443233fc9339",
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
              "id": "2bf7e41d-dc20-4a19-aaa3-443233fc9339",
              "spec": "paragraph1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8cc832da-c7f0-443c-9dbc-2290cdf9cbf8",
              "spec": "paragraph1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8cc832da-c7f0-443c-9dbc-2290cdf9cbf8",
              "spec": "paragraph1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8cc832da-c7f0-443c-9dbc-2290cdf9cbf8",
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
              "id": "8cc832da-c7f0-443c-9dbc-2290cdf9cbf8",
              "spec": "paragraph1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32",
              "spec": "paragraph1",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32",
              "spec": "paragraph1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32",
              "spec": "paragraph1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<.ctor>b__3(ISpecContext c) in z:\\code\\Storyteller\\src\\StoryTeller.Samples\\Fixtures\\CompositeFixture.cs:line 25\r\n   at StoryTeller.Grammars.SilentAction.Execute(ISpecContext context) in z:\\code\\Storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
              "cells": [],
              "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32",
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
              "id": "cb2fb537-8a5c-425c-9fda-8d631fb8fa32",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 2,
            "wrongs": 3,
            "errors": 1,
            "invalids": 2
          }
        },
        "time": "2015-05-06T15:17:37.7482043-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "paragraph2": [
      {
        "error": null,
        "cells": [],
        "id": "71aa15d5-2ab0-41c1-b2a7-1453ecf65b99",
        "spec": "paragraph2",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "71aa15d5-2ab0-41c1-b2a7-1453ecf65b99",
        "spec": "paragraph2",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "71aa15d5-2ab0-41c1-b2a7-1453ecf65b99",
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
        "id": "71aa15d5-2ab0-41c1-b2a7-1453ecf65b99",
        "spec": "paragraph2",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "bcc6b199-8a95-420b-b029-f1d60711e489",
        "spec": "paragraph2",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "bcc6b199-8a95-420b-b029-f1d60711e489",
        "spec": "paragraph2",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "bcc6b199-8a95-420b-b029-f1d60711e489",
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
        "id": "bcc6b199-8a95-420b-b029-f1d60711e489",
        "spec": "paragraph2",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "2e5a3ede-a2af-4f3f-9928-f7b78d9beb84",
        "spec": "paragraph2",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "2e5a3ede-a2af-4f3f-9928-f7b78d9beb84",
        "spec": "paragraph2",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "2e5a3ede-a2af-4f3f-9928-f7b78d9beb84",
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
        "id": "2e5a3ede-a2af-4f3f-9928-f7b78d9beb84",
        "spec": "paragraph2",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "ef81ad19-441c-4b80-8308-bc2c6f45fd35",
        "spec": "paragraph2",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "ef81ad19-441c-4b80-8308-bc2c6f45fd35",
        "spec": "paragraph2",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "ef81ad19-441c-4b80-8308-bc2c6f45fd35",
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
        "id": "ef81ad19-441c-4b80-8308-bc2c6f45fd35",
        "spec": "paragraph2",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8be6e1da-d361-4b74-88f8-30e83d7ebbaa",
        "spec": "paragraph2",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8be6e1da-d361-4b74-88f8-30e83d7ebbaa",
        "spec": "paragraph2",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "8be6e1da-d361-4b74-88f8-30e83d7ebbaa",
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
        "id": "8be6e1da-d361-4b74-88f8-30e83d7ebbaa",
        "spec": "paragraph2",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "paragraph2",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "ef87fa17-5717-45af-a66d-b27ef28aecde"
        },
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "71aa15d5-2ab0-41c1-b2a7-1453ecf65b99",
              "spec": "paragraph2",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "71aa15d5-2ab0-41c1-b2a7-1453ecf65b99",
              "spec": "paragraph2",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "71aa15d5-2ab0-41c1-b2a7-1453ecf65b99",
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
              "id": "71aa15d5-2ab0-41c1-b2a7-1453ecf65b99",
              "spec": "paragraph2",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "bcc6b199-8a95-420b-b029-f1d60711e489",
              "spec": "paragraph2",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "bcc6b199-8a95-420b-b029-f1d60711e489",
              "spec": "paragraph2",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "bcc6b199-8a95-420b-b029-f1d60711e489",
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
              "id": "bcc6b199-8a95-420b-b029-f1d60711e489",
              "spec": "paragraph2",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "2e5a3ede-a2af-4f3f-9928-f7b78d9beb84",
              "spec": "paragraph2",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "2e5a3ede-a2af-4f3f-9928-f7b78d9beb84",
              "spec": "paragraph2",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "2e5a3ede-a2af-4f3f-9928-f7b78d9beb84",
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
              "id": "2e5a3ede-a2af-4f3f-9928-f7b78d9beb84",
              "spec": "paragraph2",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "ef81ad19-441c-4b80-8308-bc2c6f45fd35",
              "spec": "paragraph2",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "ef81ad19-441c-4b80-8308-bc2c6f45fd35",
              "spec": "paragraph2",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "ef81ad19-441c-4b80-8308-bc2c6f45fd35",
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
              "id": "ef81ad19-441c-4b80-8308-bc2c6f45fd35",
              "spec": "paragraph2",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8be6e1da-d361-4b74-88f8-30e83d7ebbaa",
              "spec": "paragraph2",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8be6e1da-d361-4b74-88f8-30e83d7ebbaa",
              "spec": "paragraph2",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "8be6e1da-d361-4b74-88f8-30e83d7ebbaa",
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
              "id": "8be6e1da-d361-4b74-88f8-30e83d7ebbaa",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 2,
            "wrongs": 3,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7532048-05:00",
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
        "id": "8f01c6de-412d-4cff-a995-5278f0d752ba",
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
        "id": "7fca24d2-170c-462b-9ec3-2e085645f315",
        "spec": "sentence1",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "sentence1",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "65271b96-54f5-4084-a4e8-09336a9e565b"
        },
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
              "id": "8f01c6de-412d-4cff-a995-5278f0d752ba",
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
              "id": "7fca24d2-170c-462b-9ec3-2e085645f315",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 1,
            "wrongs": 1,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.755205-05:00",
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
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "bfdbfdbe-9144-4663-a747-5604d3b1b791"
        },
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
          "time": "3:17 PM",
          "counts": {
            "rights": 1,
            "wrongs": 1,
            "errors": 1,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7602055-05:00",
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
        "id": "cd0afb04-0383-4806-accd-5600f5594ecb",
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
        "id": "cf13f1ed-43e3-4096-a97a-e632662844f3",
        "spec": "sentence3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "sentence3",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "fa4ed5fd-8857-4a20-80e4-cb3cc5cc500c"
        },
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
              "id": "cd0afb04-0383-4806-accd-5600f5594ecb",
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
              "id": "cf13f1ed-43e3-4096-a97a-e632662844f3",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 1,
            "wrongs": 1,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7632058-05:00",
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
        "id": "340a1a2d-d56a-4f6c-9a38-fa0925540d1c",
        "spec": "sentence4",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "334b29d9-e265-45c5-81ea-dcfe45dad8bd",
        "spec": "sentence4",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "0a553c74-9909-412f-9b73-388909239c07",
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
        "id": "3c472b36-216f-4a84-876a-c40432ad103c",
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
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "4a5a1a3d-3034-472e-aa2d-f925f9d5dd59"
        },
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
              "id": "340a1a2d-d56a-4f6c-9a38-fa0925540d1c",
              "spec": "sentence4",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "334b29d9-e265-45c5-81ea-dcfe45dad8bd",
              "spec": "sentence4",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "0a553c74-9909-412f-9b73-388909239c07",
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
              "id": "3c472b36-216f-4a84-876a-c40432ad103c",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 2,
            "wrongs": 2,
            "errors": 1,
            "invalids": 1
          }
        },
        "time": "2015-05-06T15:17:37.7712066-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "set1": [
      {
        "error": null,
        "cells": [],
        "id": "25e7316a-9c21-4127-b872-acb288099ce0",
        "spec": "set1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "25e7316a-9c21-4127-b872-acb288099ce0",
        "spec": "set1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "25e7316a-9c21-4127-b872-acb288099ce0",
        "spec": "set1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "d70c59a8-ca91-40e9-948a-8497c8bdf3d9",
        "spec": "set1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "d70c59a8-ca91-40e9-948a-8497c8bdf3d9",
        "spec": "set1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "d70c59a8-ca91-40e9-948a-8497c8bdf3d9",
        "spec": "set1",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "7425a2f3-53f0-48d6-a351-c3a2243bab35",
        "spec": "set1",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "7425a2f3-53f0-48d6-a351-c3a2243bab35",
        "spec": "set1",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "7425a2f3-53f0-48d6-a351-c3a2243bab35",
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
          "61519e36-f0c0-48ee-bac2-591030f088cf",
          "6b0e65c8-971a-4fc1-9303-465ac16e087b"
        ],
        "missing": [],
        "extras": [
          {
            "Amount": 300.3,
            "Date": "2015-05-08T00:00:00-05:00",
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
          "587e8013-bd96-4599-a4dc-e787051c439f",
          "f4003ae0-c142-4ee0-a083-b4c0fcea2290",
          "e10dfffa-5837-4557-b39a-37d6963ec506"
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
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "3c03e942-4baa-4551-8a21-84229f8e1669"
        },
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "25e7316a-9c21-4127-b872-acb288099ce0",
              "spec": "set1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "25e7316a-9c21-4127-b872-acb288099ce0",
              "spec": "set1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "25e7316a-9c21-4127-b872-acb288099ce0",
              "spec": "set1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "d70c59a8-ca91-40e9-948a-8497c8bdf3d9",
              "spec": "set1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "d70c59a8-ca91-40e9-948a-8497c8bdf3d9",
              "spec": "set1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "d70c59a8-ca91-40e9-948a-8497c8bdf3d9",
              "spec": "set1",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "7425a2f3-53f0-48d6-a351-c3a2243bab35",
              "spec": "set1",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "7425a2f3-53f0-48d6-a351-c3a2243bab35",
              "spec": "set1",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "7425a2f3-53f0-48d6-a351-c3a2243bab35",
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
                "61519e36-f0c0-48ee-bac2-591030f088cf",
                "6b0e65c8-971a-4fc1-9303-465ac16e087b"
              ],
              "missing": [],
              "extras": [
                {
                  "Amount": 300.3,
                  "Date": "2015-05-08T00:00:00-05:00",
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
                "587e8013-bd96-4599-a4dc-e787051c439f",
                "f4003ae0-c142-4ee0-a083-b4c0fcea2290",
                "e10dfffa-5837-4557-b39a-37d6963ec506"
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
          "time": "3:17 PM",
          "counts": {
            "rights": 8,
            "wrongs": 5,
            "errors": 0,
            "invalids": 1
          }
        },
        "time": "2015-05-06T15:17:37.7762071-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "set2": [
      {
        "error": null,
        "cells": [],
        "id": "29ed2168-1551-495a-bec9-95e3cf7d1218",
        "spec": "set2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "cd11e32a-0ab6-44e3-a82d-40cc9347802c",
        "spec": "set2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "54430e6a-6d83-40be-a86f-0c04c74b5dc5",
        "spec": "set2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "33b60227-7dd8-4f2e-8e1d-b8d3b8358d56",
        "spec": "set2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "6304cf9a-c446-4953-84f5-e1ebdbb3bcf0",
        "spec": "set2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "spec": "set2",
        "matches": [
          "f6c398a4-f183-4e3a-8b9b-102952fa5e73",
          "74af4352-537c-4a29-9e20-9fc697f2d656",
          "77f98881-a656-4af4-a26d-548b4263936a",
          "a40068ab-9108-4806-a015-653b808e73d4",
          "d64ac33a-1dca-40dc-b2c5-09bc94588c4d"
        ],
        "missing": [],
        "extras": [],
        "wrongOrdered": [],
        "id": "5e5954cc-fb6a-477f-9ba4-77d8926efc22",
        "type": "set-verification-result"
      },
      {
        "spec": "set2",
        "matches": [
          "26183528-2eaf-43bb-9105-26f3fd2c9fa2",
          "68420b7f-0069-4210-a434-46e99c674cc7",
          "3aeb5af9-f66f-4e65-b3de-d5c5acd3d892",
          "d076f6fe-0b4e-46a5-a361-9f808a8fc1c4",
          "13ae6ab2-22f6-41fe-a7ce-a93c4f85c02c"
        ],
        "missing": [],
        "extras": [],
        "wrongOrdered": [],
        "id": "38c10707-8a5b-4b85-b24e-c637d416dd85",
        "type": "set-verification-result"
      },
      {
        "id": "set2",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "56da76e3-35cc-4683-89e6-3d09244672b1"
        },
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "29ed2168-1551-495a-bec9-95e3cf7d1218",
              "spec": "set2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "cd11e32a-0ab6-44e3-a82d-40cc9347802c",
              "spec": "set2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "54430e6a-6d83-40be-a86f-0c04c74b5dc5",
              "spec": "set2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "33b60227-7dd8-4f2e-8e1d-b8d3b8358d56",
              "spec": "set2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "6304cf9a-c446-4953-84f5-e1ebdbb3bcf0",
              "spec": "set2",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "spec": "set2",
              "matches": [
                "f6c398a4-f183-4e3a-8b9b-102952fa5e73",
                "74af4352-537c-4a29-9e20-9fc697f2d656",
                "77f98881-a656-4af4-a26d-548b4263936a",
                "a40068ab-9108-4806-a015-653b808e73d4",
                "d64ac33a-1dca-40dc-b2c5-09bc94588c4d"
              ],
              "missing": [],
              "extras": [],
              "wrongOrdered": [],
              "id": "5e5954cc-fb6a-477f-9ba4-77d8926efc22",
              "type": "set-verification-result"
            },
            {
              "spec": "set2",
              "matches": [
                "26183528-2eaf-43bb-9105-26f3fd2c9fa2",
                "68420b7f-0069-4210-a434-46e99c674cc7",
                "3aeb5af9-f66f-4e65-b3de-d5c5acd3d892",
                "d076f6fe-0b4e-46a5-a361-9f808a8fc1c4",
                "13ae6ab2-22f6-41fe-a7ce-a93c4f85c02c"
              ],
              "missing": [],
              "extras": [],
              "wrongOrdered": [],
              "id": "38c10707-8a5b-4b85-b24e-c637d416dd85",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 10,
            "wrongs": 0,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7822077-05:00",
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
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "c311f8a7-c089-401e-9540-efd3459afcb1"
        },
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
          "time": "3:17 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 1,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7872082-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "set4": [
      {
        "error": null,
        "cells": [],
        "id": "4393cbdf-7584-464f-a6af-2f6911dc0269",
        "spec": "set4",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "4393cbdf-7584-464f-a6af-2f6911dc0269",
        "spec": "set4",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "4393cbdf-7584-464f-a6af-2f6911dc0269",
        "spec": "set4",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "79e2c518-3caf-48a2-9bd5-facffe1a77a0",
        "spec": "set4",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "79e2c518-3caf-48a2-9bd5-facffe1a77a0",
        "spec": "set4",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "79e2c518-3caf-48a2-9bd5-facffe1a77a0",
        "spec": "set4",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "6902a56e-b4c2-4be4-96b3-d08bc644a9e0",
        "spec": "set4",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "6902a56e-b4c2-4be4-96b3-d08bc644a9e0",
        "spec": "set4",
        "position": "2",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "6902a56e-b4c2-4be4-96b3-d08bc644a9e0",
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
        "id": "929372d9-a71d-4f6c-b966-01f75ca4443e",
        "spec": "set4",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "set4",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "3702d459-2550-4cc8-ae1e-d62bb36f6635"
        },
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "4393cbdf-7584-464f-a6af-2f6911dc0269",
              "spec": "set4",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "4393cbdf-7584-464f-a6af-2f6911dc0269",
              "spec": "set4",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "4393cbdf-7584-464f-a6af-2f6911dc0269",
              "spec": "set4",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "79e2c518-3caf-48a2-9bd5-facffe1a77a0",
              "spec": "set4",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "79e2c518-3caf-48a2-9bd5-facffe1a77a0",
              "spec": "set4",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "79e2c518-3caf-48a2-9bd5-facffe1a77a0",
              "spec": "set4",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "6902a56e-b4c2-4be4-96b3-d08bc644a9e0",
              "spec": "set4",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "6902a56e-b4c2-4be4-96b3-d08bc644a9e0",
              "spec": "set4",
              "position": "2",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "6902a56e-b4c2-4be4-96b3-d08bc644a9e0",
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
              "id": "929372d9-a71d-4f6c-b966-01f75ca4443e",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 0,
            "invalids": 1
          }
        },
        "time": "2015-05-06T15:17:37.7902085-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "set5": [
      {
        "error": null,
        "cells": [],
        "id": "76967e10-c6b5-4f1a-8408-2ed10e52fae0",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "3974a874-ad2e-411e-9ae3-5c37d4643640",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "4ed11d43-90be-4834-8446-11a218b4ce20",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "a134b8a5-3948-4c77-87aa-ffb65c16af47",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "b333c496-26c4-4ce8-9481-963e799e476d",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "b7944d8a-01e7-4300-afe1-3ee14e5f680d",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "f9bf11e3-c6de-4d3a-bc61-65e4f3632a6c",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "7b47ec16-5089-4ed0-94a7-eb08b8d866a0",
        "spec": "set5",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "spec": "set5",
        "matches": [
          "ac530562-e812-4c7e-8ee8-414a69e34a69",
          "e2a573e1-d56a-43db-bf81-0d5ae0ce2ae3",
          "14b14cdf-4922-4729-83d6-4c58719d1108",
          "43ad83d9-f662-4ccb-a119-4dcf5101cde9"
        ],
        "missing": [
          "ed517be7-a5fd-4dd9-a64a-d8cb49790fd6"
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
            "id": "f772e98d-632b-4c8a-bca5-36181d08a405"
          },
          {
            "actual": 4,
            "id": "cd4a08c6-9af4-43a6-b317-bf1fc33980d8"
          }
        ],
        "id": "6e5caeb7-a5ee-4346-8638-b099d99578fb",
        "type": "set-verification-result"
      },
      {
        "id": "set5",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "8c98827b-da35-4541-ba98-6b8672e6c144"
        },
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "76967e10-c6b5-4f1a-8408-2ed10e52fae0",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "3974a874-ad2e-411e-9ae3-5c37d4643640",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "4ed11d43-90be-4834-8446-11a218b4ce20",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "a134b8a5-3948-4c77-87aa-ffb65c16af47",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "b333c496-26c4-4ce8-9481-963e799e476d",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "b7944d8a-01e7-4300-afe1-3ee14e5f680d",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "f9bf11e3-c6de-4d3a-bc61-65e4f3632a6c",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "7b47ec16-5089-4ed0-94a7-eb08b8d866a0",
              "spec": "set5",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "spec": "set5",
              "matches": [
                "ac530562-e812-4c7e-8ee8-414a69e34a69",
                "e2a573e1-d56a-43db-bf81-0d5ae0ce2ae3",
                "14b14cdf-4922-4729-83d6-4c58719d1108",
                "43ad83d9-f662-4ccb-a119-4dcf5101cde9"
              ],
              "missing": [
                "ed517be7-a5fd-4dd9-a64a-d8cb49790fd6"
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
                  "id": "f772e98d-632b-4c8a-bca5-36181d08a405"
                },
                {
                  "actual": 4,
                  "id": "cd4a08c6-9af4-43a6-b317-bf1fc33980d8"
                }
              ],
              "id": "6e5caeb7-a5ee-4346-8638-b099d99578fb",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 4,
            "wrongs": 5,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.795209-05:00",
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
        "id": "ced85021-bb20-4ed8-a884-0f91bc5fd670",
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
        "id": "084b9332-7eac-46b5-8a41-6ae6c591dea7",
        "spec": "table1",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "table1",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "c69529c2-1216-45e6-a6a5-63d0bb5382d9"
        },
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
              "id": "ced85021-bb20-4ed8-a884-0f91bc5fd670",
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
              "id": "084b9332-7eac-46b5-8a41-6ae6c591dea7",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 2,
            "wrongs": 0,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.7992094-05:00",
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
        "id": "aa301d84-4a9f-4147-8253-bad7ed29a685",
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
        "id": "9a7d27d1-04f1-4420-88bb-7c8873459333",
        "spec": "table2",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "table2",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "8822cdf0-c70e-43dc-bc8c-2268a6444495"
        },
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
              "id": "aa301d84-4a9f-4147-8253-bad7ed29a685",
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
              "id": "9a7d27d1-04f1-4420-88bb-7c8873459333",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 2,
            "wrongs": 2,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.8032098-05:00",
        "type": "spec-execution-completed"
      }
    ],
    "table3": [
      {
        "error": null,
        "cells": [],
        "id": "56451016-7a14-4733-bda9-b89a2eba115b",
        "spec": "table3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "6ff7bc7d-0ab6-4344-a18b-0fedc4bef8a0",
        "spec": "table3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "091b0f3f-7733-485e-bc05-c90b6f40261f",
        "spec": "table3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "3670de81-8f3b-46f7-9ba6-a0e88457cc7b",
        "spec": "table3",
        "position": null,
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "table3",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "264118be-5cb9-4d6c-ad18-02f8cc6d6ae2"
        },
        "results": {
          "results": [
            {
              "error": null,
              "cells": [],
              "id": "56451016-7a14-4733-bda9-b89a2eba115b",
              "spec": "table3",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "6ff7bc7d-0ab6-4344-a18b-0fedc4bef8a0",
              "spec": "table3",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "091b0f3f-7733-485e-bc05-c90b6f40261f",
              "spec": "table3",
              "position": null,
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "3670de81-8f3b-46f7-9ba6-a0e88457cc7b",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 0,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.8062101-05:00",
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
        "id": "77fca1a7-2ee4-4a39-9d2f-26b1e5b05bae",
        "spec": "table4",
        "position": "0",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "470e107e-d957-4a62-8c1c-5693ef57eee5",
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
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "33d81342-1a35-442a-a73a-05eb262aac26"
        },
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
              "id": "77fca1a7-2ee4-4a39-9d2f-26b1e5b05bae",
              "spec": "table4",
              "position": "0",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "470e107e-d957-4a62-8c1c-5693ef57eee5",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 0,
            "wrongs": 0,
            "errors": 2,
            "invalids": 0
          }
        },
        "time": "2015-05-06T15:17:37.8092104-05:00",
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
        "id": "93091638-d903-4ff0-ba1b-9f39242ffbb6",
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
        "id": "ac3b735d-64fc-43c1-9575-450769d156bc",
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
        "id": "db40cfee-9f5c-4be0-8100-f1ef81a320e0",
        "spec": "table5",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "db40cfee-9f5c-4be0-8100-f1ef81a320e0",
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
        "id": "db40cfee-9f5c-4be0-8100-f1ef81a320e0",
        "spec": "table5",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "236ae5d4-145b-4cb3-b95c-8ebc2da2309b",
        "spec": "table5",
        "position": "1",
        "status": "ok",
        "type": "step-result"
      },
      {
        "error": null,
        "cells": [],
        "id": "236ae5d4-145b-4cb3-b95c-8ebc2da2309b",
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
        "id": "236ae5d4-145b-4cb3-b95c-8ebc2da2309b",
        "spec": "table5",
        "position": "3",
        "status": "ok",
        "type": "step-result"
      },
      {
        "id": "table5",
        "data": {
          "title": null,
          "path": null,
          "max-retries": 0,
          "lifecycle": "Acceptance",
          "mode": "full",
          "tags": [],
          "steps": [],
          "id": "62e17b2d-a929-4fc5-87c3-e0eac2382fda"
        },
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
              "id": "93091638-d903-4ff0-ba1b-9f39242ffbb6",
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
              "id": "ac3b735d-64fc-43c1-9575-450769d156bc",
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
              "id": "db40cfee-9f5c-4be0-8100-f1ef81a320e0",
              "spec": "table5",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "db40cfee-9f5c-4be0-8100-f1ef81a320e0",
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
              "id": "db40cfee-9f5c-4be0-8100-f1ef81a320e0",
              "spec": "table5",
              "position": "3",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "236ae5d4-145b-4cb3-b95c-8ebc2da2309b",
              "spec": "table5",
              "position": "1",
              "status": "ok",
              "type": "step-result"
            },
            {
              "error": null,
              "cells": [],
              "id": "236ae5d4-145b-4cb3-b95c-8ebc2da2309b",
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
              "id": "236ae5d4-145b-4cb3-b95c-8ebc2da2309b",
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
          "time": "3:17 PM",
          "counts": {
            "rights": 2,
            "wrongs": 2,
            "errors": 0,
            "invalids": 6
          }
        },
        "time": "2015-05-06T15:17:37.8142109-05:00",
        "type": "spec-execution-completed"
      }
    ]
  }
}