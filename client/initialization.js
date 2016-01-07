module.exports = {
  "recycled": {
    "error": null,
    "properties": {
      "ConfigFile": "Z:\\code\\storyteller\\src\\Storyteller.Samples\\App.config",
      "BaseDirectory": "Z:\\code\\storyteller\\src\\Storyteller.Samples",
      "BinPath": "bin\\Debug",
      "Profile": "Safari"
    },
    "success": true,
    "system_full_name": null,
    "system_name": "StoryTeller.Samples.GrammarSystem",
    "time": "7:29 PM",
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
            "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.Exception: This fixture ctor blew up\r\n   at StoryTeller.Samples.Fixtures.FailureFixture..ctor() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\FailureFixture.cs:line 9\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeTypeHandle.CreateInstance(RuntimeType type, Boolean publicOnly, Boolean noCheck, Boolean& canBeCached, RuntimeMethodHandleInternal& ctor, Boolean& bNeedSecurityCheck)\r\n   at System.RuntimeType.CreateInstanceSlow(Boolean publicOnly, Boolean skipCheckThis, Boolean fillCache, StackCrawlMark& stackMark)\r\n   at System.RuntimeType.CreateInstanceDefaultCtor(Boolean publicOnly, Boolean skipCheckThis, Boolean fillCache, StackCrawlMark& stackMark)\r\n   at System.Activator.CreateInstance(Type type, Boolean nonPublic)\r\n   at System.Activator.CreateInstance(Type type)\r\n   at StoryTeller.Model.FixtureLibrary.CreateCompiledFixture(CellHandling cellHandling, Type type) in Z:\\code\\storyteller\\src\\StoryTeller\\Model\\FixtureLibrary.cs:line 126"
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
            "key": null,
            "type": "error",
            "IsHidden": false,
            "Key": null,
            "errors": [
              {
                "message": null,
                "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.DivideByZeroException: Attempted to divide by zero.\r\n   at StoryTeller.Samples.Fixtures.GrammarErrorFixture.Bad() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\FailureFixture.cs:line 17\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.ProgrammaticGrammarBuilder.Build(MethodInfo method, Fixture fixture) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\GrammarBuilder.cs:line 68\r\n   at StoryTeller.Grammars.GrammarBuilder.BuildGrammar(MethodInfo method, Fixture fixture) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\GrammarBuilder.cs:line 35"
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
                  "cells": [],
                  "errors": []
                },
                {
                  "format": "This fact is always false",
                  "key": "ThisFactIsFalse",
                  "type": "sentence",
                  "cells": [],
                  "errors": []
                },
                {
                  "format": "This fact throws an exception",
                  "key": "ThisFactThrowsException",
                  "type": "sentence",
                  "cells": [],
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
                  "cells": [],
                  "errors": []
                },
                {
                  "format": "This fact is always false",
                  "key": "ThisFactIsFalse",
                  "type": "sentence",
                  "cells": [],
                  "errors": []
                },
                {
                  "format": "This fact throws an exception",
                  "key": "ThisFactThrowsException",
                  "type": "sentence",
                  "cells": [],
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
            "cells": [],
            "errors": []
          },
          {
            "format": "This fact is always false",
            "key": "ThisFactIsFalse",
            "type": "sentence",
            "cells": [],
            "errors": []
          },
          {
            "format": "This fact throws an exception",
            "key": "ThisFactThrowsException",
            "type": "sentence",
            "cells": [],
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
            "cells": [],
            "errors": []
          },
          {
            "format": "This fact is always false",
            "key": "ThisFactIsFalse",
            "type": "sentence",
            "cells": [],
            "errors": []
          },
          {
            "format": "This fact throws an exception",
            "key": "ThisFactThrowsException",
            "type": "sentence",
            "cells": [],
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
            "cells": [],
            "errors": []
          },
          {
            "format": "This fact is always false",
            "key": "ThisFactIsFalse",
            "type": "sentence",
            "cells": [],
            "errors": []
          },
          {
            "format": "This fact throws an exception",
            "key": "ThisFactThrowsException",
            "type": "sentence",
            "cells": [],
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
            "cells": [],
            "errors": []
          },
          {
            "format": "This fact is always false",
            "key": "ThisFactIsFalse",
            "type": "sentence",
            "cells": [],
            "errors": []
          },
          {
            "format": "This fact throws an exception",
            "key": "ThisFactThrowsException",
            "type": "sentence",
            "cells": [],
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
    "name": "Storyteller.Samples",
    "type": "system-recycled"
  },
  "Hierarchy": {
    "hierarchy": {
      "suites": [
        {
          "suites": [
            {
              "suites": [],
              "name": "Debug",
              "path": "bin/Debug",
              "specs": [
                "89370fc3-4e1c-40f8-8aec-31170f551daa"
              ]
            }
          ],
          "name": "bin",
          "path": "bin",
          "specs": []
        },
        {
          "suites": [],
          "name": "Fixtures",
          "path": "Fixtures",
          "specs": []
        },
        {
          "suites": [
            {
              "suites": [
                {
                  "suites": [],
                  "name": "TempPE",
                  "path": "obj/Debug/TempPE",
                  "specs": []
                }
              ],
              "name": "Debug",
              "path": "obj/Debug",
              "specs": []
            }
          ],
          "name": "obj",
          "path": "obj",
          "specs": []
        },
        {
          "suites": [],
          "name": "Properties",
          "path": "Properties",
          "specs": []
        },
        {
          "suites": [
            {
              "suites": [],
              "name": "Embedded",
              "path": "Specs/Embedded",
              "specs": [
                "embeds"
              ]
            },
            {
              "suites": [],
              "name": "General",
              "path": "Specs/General",
              "specs": [
                "general1",
                "SometimesSlow",
                "general2",
                "general3",
                "runtime-converter",
                "general4",
                "general5"
              ]
            },
            {
              "suites": [],
              "name": "Paragraphs",
              "path": "Specs/Paragraphs",
              "specs": [
                "paragraph1",
                "paragraph2"
              ]
            },
            {
              "suites": [],
              "name": "Sentences",
              "path": "Specs/Sentences",
              "specs": [
                "sentence1",
                "sentence2",
                "sentence3",
                "sentence4"
              ]
            },
            {
              "suites": [],
              "name": "Sets",
              "path": "Specs/Sets",
              "specs": [
                "set1",
                "set2",
                "set3",
                "set4",
                "set5"
              ]
            },
            {
              "suites": [],
              "name": "Tables",
              "path": "Specs/Tables",
              "specs": [
                "table1",
                "table2",
                "table3",
                "table4",
                "table5"
              ]
            }
          ],
          "name": "Specs",
          "path": "Specs",
          "specs": []
        },
        {
          "suites": [],
          "name": "Storyteller.Samples-results",
          "path": "Storyteller.Samples-results",
          "specs": []
        }
      ],
      "name": "",
      "path": "",
      "specs": [
        "bc892903-fd0e-4ac0-80b5-835acb2e6596"
      ]
    },
    "specs": [
      {
        "last_result": null,
        "data": {
          "title": null,
          "path": "",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "bc892903-fd0e-4ac0-80b5-835acb2e6596"
        }
      },
      {
        "last_result": null,
        "data": {
          "title": null,
          "path": "bin/Debug",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "89370fc3-4e1c-40f8-8aec-31170f551daa"
        }
      },
      {
        "last_result": null,
        "data": {
          "title": "Embeds",
          "path": "Specs/Embedded/Embeds",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Regression",
          "mode": "header",
          "tags": [],
          "last-updated": "Friday, July 17, 2015",
          "steps": [],
          "id": "embeds"
        }
      },
      {
        "last_result": {
          "id": "general1",
          "data": {
            "title": "Check properties",
            "path": "General/Check properties",
            "max-retries": 3,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                    "id": "8bb41846-5f76-43f5-b782-a9f94d0737b7"
                  },
                  {
                    "key": "TheAddressShouldBe",
                    "cells": {
                      "Address1": "2035 Ozark",
                      "Address2": "Apt 3",
                      "City": "Carthage"
                    },
                    "collections": [],
                    "id": "401c00a6-1b63-47a1-a331-e071727ed99e"
                  },
                  {
                    "key": "TheAddressShouldBe",
                    "cells": {
                      "Address1": "wrong",
                      "Address2": "wrong",
                      "City": "wrong"
                    },
                    "collections": [],
                    "id": "ca6d5cce-abe1-4c33-a67c-8d3bdb68d00e"
                  }
                ],
                "activeCells": {},
                "id": "f6ab470f-282b-4662-8399-4ae3d38cad3c"
              }
            ],
            "id": "general1"
          },
          "results": {
            "results": [
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "8bb41846-5f76-43f5-b782-a9f94d0737b7",
                "spec": "general1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "8bb41846-5f76-43f5-b782-a9f94d0737b7",
                "spec": "general1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "8bb41846-5f76-43f5-b782-a9f94d0737b7",
                "spec": "general1",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "8bb41846-5f76-43f5-b782-a9f94d0737b7",
                "spec": "general1",
                "position": "4",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "8bb41846-5f76-43f5-b782-a9f94d0737b7",
                "spec": "general1",
                "position": "5",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "8bb41846-5f76-43f5-b782-a9f94d0737b7",
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
                "id": "401c00a6-1b63-47a1-a331-e071727ed99e",
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
                "id": "401c00a6-1b63-47a1-a331-e071727ed99e",
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
                "id": "401c00a6-1b63-47a1-a331-e071727ed99e",
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
                "id": "ca6d5cce-abe1-4c33-a67c-8d3bdb68d00e",
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
                "id": "ca6d5cce-abe1-4c33-a67c-8d3bdb68d00e",
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
                "id": "ca6d5cce-abe1-4c33-a67c-8d3bdb68d00e",
                "spec": "general1",
                "position": "2",
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Check properties",
                "start": 0,
                "end": 109,
                "duration": 109
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 2,
                "end": 4,
                "duration": 2
              },
              {
                "type": "Fixture",
                "subject": "CheckObject:SetUp",
                "start": 104,
                "end": 104,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:0",
                "start": 104,
                "end": 104,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:1",
                "start": 105,
                "end": 107,
                "duration": 2
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:2",
                "start": 107,
                "end": 107,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:3",
                "start": 107,
                "end": 107,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:4",
                "start": 107,
                "end": 107,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:5",
                "start": 107,
                "end": 107,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:6",
                "start": 107,
                "end": 107,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:0",
                "start": 107,
                "end": 108,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:1",
                "start": 108,
                "end": 108,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:2",
                "start": 108,
                "end": 108,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:0",
                "start": 108,
                "end": 108,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:1",
                "start": 108,
                "end": 108,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:2",
                "start": 108,
                "end": 108,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "CheckObject:TearDown",
                "start": 108,
                "end": 108,
                "duration": 0
              }
            ],
            "duration": 109,
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
            "time": "7:29 PM",
            "counts": {
              "rights": 3,
              "wrongs": 3,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Check properties",
          "path": "Specs/General/Check properties",
          "max-retries": 3,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "general1"
        }
      },
      {
        "last_result": {
          "id": "SometimesSlow",
          "data": {
            "title": "Occasionally Times Out",
            "path": "General/Occasionally Times Out",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                    "id": "51d0d6cb-6f1f-4e49-9172-17d9a2b455f6"
                  }
                ],
                "activeCells": {},
                "id": "8830a9be-79c5-4152-812a-8222ce399c76"
              }
            ],
            "id": "SometimesSlow"
          },
          "results": {
            "results": [
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "51d0d6cb-6f1f-4e49-9172-17d9a2b455f6",
                "spec": "SometimesSlow",
                "position": null,
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Occasionally Times Out",
                "start": 0,
                "end": 1,
                "duration": 1
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Fixture",
                "subject": "SometimesSlow:TearDown",
                "start": 1,
                "end": 1,
                "duration": 0
              }
            ],
            "duration": 1,
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
            "time": "7:29 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Occasionally Times Out",
          "path": "Specs/General/Occasionally Times Out",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "SometimesSlow"
        }
      },
      {
        "last_result": {
          "id": "general2",
          "data": {
            "title": "Selection List Values",
            "path": "General/Selection List Values",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                    "id": "440d6d07-2235-4169-ae43-bc2baff21438"
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
                            "id": "c99235b9-b924-4552-96c4-6bd9de69d33e"
                          },
                          {
                            "key": "table",
                            "cells": {
                              "first": "Harold",
                              "last": "Miller",
                              "fullname": "Harold Mueller"
                            },
                            "collections": [],
                            "id": "4a0348c0-6664-4558-bccb-a7e7b202a3c7"
                          }
                        ],
                        "activeCells": {},
                        "id": "13ad5a90-3fc5-4867-bcaf-653f8f3a0441"
                      }
                    ],
                    "id": "750350c5-ba6b-45f7-82b3-d9145add61db"
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
                            "id": "a058572f-17b2-4793-82a4-f8892d11f0cb"
                          }
                        ],
                        "activeCells": {},
                        "id": "0160e41a-effc-45ec-b355-03eaeaef7942"
                      }
                    ],
                    "id": "0f394167-56c4-42c4-88d7-844f1e630d6c"
                  },
                  {
                    "key": "TheEnumOptionIs",
                    "cells": {
                      "option": "FirstOption",
                      "selectedOption": "0"
                    },
                    "collections": [],
                    "id": "1cb09be6-ee1c-47e1-a084-49f2182137f5"
                  }
                ],
                "activeCells": {},
                "id": "7bc3726d-78c6-449d-8beb-3d6b6ec402ee"
              }
            ],
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
                "id": "440d6d07-2235-4169-ae43-bc2baff21438",
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
                "id": "c99235b9-b924-4552-96c4-6bd9de69d33e",
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
                "id": "4a0348c0-6664-4558-bccb-a7e7b202a3c7",
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
                "id": "a058572f-17b2-4793-82a4-f8892d11f0cb",
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
                "id": "1cb09be6-ee1c-47e1-a084-49f2182137f5",
                "spec": "general2",
                "position": null,
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Selection List Values",
                "start": 0,
                "end": 2,
                "duration": 2
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "FirstAndLastName:Row",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": null,
                "start": 1,
                "end": 2,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "TheEnumOptionIs",
                "start": 2,
                "end": 2,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "SelectionList:TearDown",
                "start": 2,
                "end": 2,
                "duration": 0
              }
            ],
            "duration": 2,
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
            "time": "7:29 PM",
            "counts": {
              "rights": 4,
              "wrongs": 1,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Selection List Values",
          "path": "Specs/General/Selection List Values",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "general2"
        }
      },
      {
        "last_result": {
          "id": "general3",
          "data": {
            "title": "Services",
            "path": "General/Services",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                    "id": "00598b5e-63dd-44a3-9bed-07f9220093d8"
                  },
                  {
                    "key": "Check",
                    "cells": {
                      "value": "5"
                    },
                    "collections": [],
                    "id": "f3829019-ca7c-4516-92eb-3dc63eb92d7d"
                  },
                  {
                    "key": "Set",
                    "cells": {
                      "value": "6"
                    },
                    "collections": [],
                    "id": "afdf18a5-9375-4fd7-9cb1-17eee411b98f"
                  },
                  {
                    "key": "Check",
                    "cells": {
                      "value": "7"
                    },
                    "collections": [],
                    "id": "9ce445f2-edd8-4b07-abf7-927d678e0bff"
                  },
                  {
                    "key": "Set",
                    "cells": {
                      "value": "abc"
                    },
                    "collections": [],
                    "id": "c6fb8a64-8c3d-4997-ba0f-6fa28c0e7a4a"
                  }
                ],
                "activeCells": {},
                "id": "67169205-a86c-450b-b95b-fbfc793f7029"
              }
            ],
            "id": "general3"
          },
          "results": {
            "results": [
              {
                "status": "invalid",
                "error": "Fixture with key 'Service' does not exist",
                "cells": [],
                "id": "67169205-a86c-450b-b95b-fbfc793f7029",
                "spec": "general3",
                "position": "setup",
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Services",
                "start": 0,
                "end": 1,
                "duration": 1
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "Service:SetUp",
                "start": 0,
                "end": 1,
                "duration": 1
              }
            ],
            "duration": 1,
            "logging": [
              {
                "html": "<pre class=\"debug-output\"></pre>",
                "title": "Debug Output",
                "count": 0,
                "short_title": "Debug"
              },
              {
                "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#39;setup&#39; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#39;Service&#39; does not exist\r\n   at StoryTeller.Model.MissingFixture.SetUp() in Z:\\code\\storyteller\\src\\StoryTeller\\Model\\MissingFixture.cs:line 15\r\n   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x) in Z:\\code\\storyteller\\src\\StoryTeller\\Model\\Section.cs:line 66\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 20\r\n   --- End of inner exception stack trace ---\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 32\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
                "title": "Logged Exceptions in Storyteller",
                "count": 1,
                "short_title": "Exceptions"
              }
            ],
            "attempts": 1,
            "aborted": false,
            "time": "7:29 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Services",
          "path": "Specs/General/Services",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "general3"
        }
      },
      {
        "last_result": {
          "id": "runtime-converter",
          "data": {
            "title": "System Defined Lists and Runtime Converters",
            "path": "General/System Defined Lists and Runtime Converters",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                            "id": "23c60927-a24b-4398-9b9a-96bc0a31fde5"
                          }
                        ],
                        "activeCells": {},
                        "id": "2e87da8f-d2bb-45a0-a375-39e38e3f9564"
                      }
                    ],
                    "id": "a8f55fb1-50cb-4499-8aa6-3c34c63240ce"
                  }
                ],
                "activeCells": {},
                "id": "1951ced7-28f8-4bb3-a7fb-34973aef82f9"
              }
            ],
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
                "id": "23c60927-a24b-4398-9b9a-96bc0a31fde5",
                "spec": "runtime-converter",
                "position": null,
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "System Defined Lists and Runtime Converters",
                "start": 0,
                "end": 1,
                "duration": 1
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Fixture",
                "subject": "Player:TearDown",
                "start": 1,
                "end": 1,
                "duration": 0
              }
            ],
            "duration": 1,
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
            "time": "7:29 PM",
            "counts": {
              "rights": 1,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "System Defined Lists and Runtime Converters",
          "path": "Specs/General/System Defined Lists and Runtime Converters",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "runtime-converter"
        }
      },
      {
        "last_result": {
          "id": "general4",
          "data": {
            "title": "Test with Bad Grammar Name",
            "path": "General/Test with Bad Grammar Name",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
            "steps": [
              {
                "key": "Math",
                "type": "section",
                "steps": [
                  {
                    "key": "BadGrammar1",
                    "cells": {},
                    "collections": [],
                    "id": "4d9ef19b-f8bd-41b3-a705-4c74f72af92d"
                  },
                  {
                    "key": "BadGrammar2",
                    "cells": {},
                    "collections": [],
                    "id": "dd2a3a0f-2389-4273-9095-273dff470efe"
                  },
                  {
                    "key": "BadGrammar3",
                    "cells": {},
                    "collections": [],
                    "id": "0df849d0-d86f-478a-8b0b-1d4ac9823713"
                  }
                ],
                "activeCells": {},
                "id": "1e2d89c8-c559-4b2e-872c-3f8cf54f0e0c"
              }
            ],
            "id": "general4"
          },
          "results": {
            "results": [
              {
                "status": "error",
                "error": "Grammar 'BadGrammar1' is not implemented",
                "cells": [],
                "id": "4d9ef19b-f8bd-41b3-a705-4c74f72af92d",
                "spec": "general4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "error",
                "error": "Grammar 'BadGrammar2' is not implemented",
                "cells": [],
                "id": "dd2a3a0f-2389-4273-9095-273dff470efe",
                "spec": "general4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "error",
                "error": "Grammar 'BadGrammar3' is not implemented",
                "cells": [],
                "id": "0df849d0-d86f-478a-8b0b-1d4ac9823713",
                "spec": "general4",
                "position": null,
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Test with Bad Grammar Name",
                "start": 0,
                "end": 0,
                "duration": 0
              },
              {
                "type": "Context",
                "subject": "Creation",
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
            "time": "7:29 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 3,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Test with Bad Grammar Name",
          "path": "Specs/General/Test with Bad Grammar Name",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "general4"
        }
      },
      {
        "last_result": {
          "id": "general5",
          "data": {
            "title": "Test with Missing Fixture Name",
            "path": "General/Test with Missing Fixture Name",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                "type": "Specification",
                "subject": "Test with Missing Fixture Name",
                "start": 0,
                "end": 0,
                "duration": 0
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#39;setup&#39; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#39;FixtureThatDoesNotExist&#39; does not exist\r\n   at StoryTeller.Model.MissingFixture.SetUp() in Z:\\code\\storyteller\\src\\StoryTeller\\Model\\MissingFixture.cs:line 15\r\n   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x) in Z:\\code\\storyteller\\src\\StoryTeller\\Model\\Section.cs:line 66\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 20\r\n   --- End of inner exception stack trace ---\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 32\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
                "title": "Logged Exceptions in Storyteller",
                "count": 1,
                "short_title": "Exceptions"
              }
            ],
            "attempts": 1,
            "aborted": false,
            "time": "7:29 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Test with Missing Fixture Name",
          "path": "Specs/General/Test with Missing Fixture Name",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "general5"
        }
      },
      {
        "last_result": null,
        "data": {
          "title": "Composite with Errors",
          "path": "Specs/Paragraphs/Composite with Errors",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Regression",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "paragraph1"
        }
      },
      {
        "last_result": {
          "id": "paragraph2",
          "data": {
            "title": "Simple Composite",
            "path": "Paragraphs/Simple Composite",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                    "id": "14d05918-6038-46b2-91d0-6c01db670172"
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
                    "id": "e22004b4-73a9-4d76-a0c8-a51b1eea6030"
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
                            "id": "f2dd66de-f301-4942-a1a1-0d4ece2b0610"
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
                            "id": "da97640a-975c-491f-b6ec-8df94c69e1c6"
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
                            "id": "c29f22bb-2f8b-4b68-b0a1-06d8ff42e46f"
                          }
                        ],
                        "activeCells": {},
                        "id": "bfa7c84f-43a5-4dbd-ae82-1fe67c0e6167"
                      }
                    ],
                    "id": "bb30cbd9-d4e8-4cf9-a00a-11be2e8b04c2"
                  }
                ],
                "activeCells": {},
                "id": "280be598-9283-4341-99ba-cf273770b262"
              }
            ],
            "id": "paragraph2"
          },
          "results": {
            "results": [
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "14d05918-6038-46b2-91d0-6c01db670172",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "14d05918-6038-46b2-91d0-6c01db670172",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "14d05918-6038-46b2-91d0-6c01db670172",
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
                "id": "14d05918-6038-46b2-91d0-6c01db670172",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "e22004b4-73a9-4d76-a0c8-a51b1eea6030",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "e22004b4-73a9-4d76-a0c8-a51b1eea6030",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "e22004b4-73a9-4d76-a0c8-a51b1eea6030",
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
                "id": "e22004b4-73a9-4d76-a0c8-a51b1eea6030",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "f2dd66de-f301-4942-a1a1-0d4ece2b0610",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "f2dd66de-f301-4942-a1a1-0d4ece2b0610",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "f2dd66de-f301-4942-a1a1-0d4ece2b0610",
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
                "id": "f2dd66de-f301-4942-a1a1-0d4ece2b0610",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "da97640a-975c-491f-b6ec-8df94c69e1c6",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "da97640a-975c-491f-b6ec-8df94c69e1c6",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "da97640a-975c-491f-b6ec-8df94c69e1c6",
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
                "id": "da97640a-975c-491f-b6ec-8df94c69e1c6",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "c29f22bb-2f8b-4b68-b0a1-06d8ff42e46f",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "c29f22bb-2f8b-4b68-b0a1-06d8ff42e46f",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "c29f22bb-2f8b-4b68-b0a1-06d8ff42e46f",
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
                "id": "c29f22bb-2f8b-4b68-b0a1-06d8ff42e46f",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Simple Composite",
                "start": 0,
                "end": 5,
                "duration": 5
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "end": 4,
                "duration": 4
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:1",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndMultiplyThrow:2",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:2",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:0",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:1",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndMultiplyThrow:2",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:2",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:0",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:1",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndMultiplyThrow:2",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:2",
                "start": 4,
                "end": 4,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:0",
                "start": 4,
                "end": 5,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:1",
                "start": 5,
                "end": 5,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndMultiplyThrow:2",
                "start": 5,
                "end": 5,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:2",
                "start": 5,
                "end": 5,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:0",
                "start": 5,
                "end": 5,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:1",
                "start": 5,
                "end": 5,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndMultiplyThrow:2",
                "start": 5,
                "end": 5,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:2",
                "start": 5,
                "end": 5,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "Composite:TearDown",
                "start": 5,
                "end": 5,
                "duration": 0
              }
            ],
            "duration": 5,
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
            "time": "7:29 PM",
            "counts": {
              "rights": 2,
              "wrongs": 3,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Simple Composite",
          "path": "Specs/Paragraphs/Simple Composite",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "paragraph2"
        }
      },
      {
        "last_result": {
          "id": "sentence1",
          "data": {
            "title": "Currying",
            "path": "Sentences/Currying",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                    "id": "5e6e2b1b-7524-4fc3-868c-70881e76d507"
                  },
                  {
                    "key": "AddTo5",
                    "cells": {
                      "x": "5",
                      "returnValue": "9",
                      "y": "5"
                    },
                    "collections": [],
                    "id": "8695cb33-c5b1-473e-aef9-1f6383f5e45c"
                  }
                ],
                "activeCells": {},
                "id": "4f4c2489-4ffd-47a8-84e3-096a96811022"
              }
            ],
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
                "id": "5e6e2b1b-7524-4fc3-868c-70881e76d507",
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
                "id": "8695cb33-c5b1-473e-aef9-1f6383f5e45c",
                "spec": "sentence1",
                "position": null,
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Currying",
                "start": 0,
                "end": 0,
                "duration": 0
              },
              {
                "type": "Context",
                "subject": "Creation",
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
            "time": "7:29 PM",
            "counts": {
              "rights": 1,
              "wrongs": 1,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Currying",
          "path": "Specs/Sentences/Currying",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "sentence1"
        }
      },
      {
        "last_result": null,
        "data": {
          "title": "Facts",
          "path": "Specs/Sentences/Facts",
          "max-retries": 3,
          "expiration-period": 0,
          "lifecycle": "Regression",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "sentence2"
        }
      },
      {
        "last_result": {
          "id": "sentence3",
          "data": {
            "title": "Importing and Currying",
            "path": "Sentences/Importing and Currying",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                    "id": "5667a235-df1c-4eea-959a-f17745aeef20"
                  },
                  {
                    "key": "AddingTo5",
                    "cells": {
                      "y": "12",
                      "returnValue": "15",
                      "x": "5"
                    },
                    "collections": [],
                    "id": "83127580-cca4-40bb-b9d4-846feab4b34f"
                  }
                ],
                "activeCells": {},
                "id": "1b6ca468-5e18-4730-8d4d-57fde25ca1aa"
              }
            ],
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
                "id": "5667a235-df1c-4eea-959a-f17745aeef20",
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
                "id": "83127580-cca4-40bb-b9d4-846feab4b34f",
                "spec": "sentence3",
                "position": null,
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Importing and Currying",
                "start": 0,
                "end": 0,
                "duration": 0
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
            "time": "7:29 PM",
            "counts": {
              "rights": 1,
              "wrongs": 1,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Importing and Currying",
          "path": "Specs/Sentences/Importing and Currying",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "sentence3"
        }
      },
      {
        "last_result": {
          "id": "sentence4",
          "data": {
            "title": "Sentences",
            "path": "Sentences/Sentences",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                    "id": "26decc49-b41f-41a5-ad66-e9990c2591df"
                  },
                  {
                    "key": "MultiplyThenAdd",
                    "cells": {
                      "multiplier": "3",
                      "delta": "4"
                    },
                    "collections": [],
                    "id": "16921743-ba3f-46c7-956b-f3d085fcc3a2"
                  },
                  {
                    "key": "Subtract",
                    "cells": {
                      "operand": "2"
                    },
                    "collections": [],
                    "id": "b6dee44a-9f14-4698-9d41-44a520a34811"
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
                    "id": "811a4749-6d0d-4160-b116-5606c90f6697"
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
                "id": "26decc49-b41f-41a5-ad66-e9990c2591df",
                "spec": "sentence4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "16921743-ba3f-46c7-956b-f3d085fcc3a2",
                "spec": "sentence4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "b6dee44a-9f14-4698-9d41-44a520a34811",
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
                "id": "811a4749-6d0d-4160-b116-5606c90f6697",
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
                "type": "Specification",
                "subject": "Sentences",
                "start": 0,
                "end": 3,
                "duration": 3
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "TheSumOf",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "ThisLineIsAlwaysTrue",
                "start": 1,
                "end": 2,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "ThisLineIsAlwaysFalse",
                "start": 2,
                "end": 2,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "ThisLineAlwaysThrowsExceptions",
                "start": 2,
                "end": 3,
                "duration": 1
              },
              {
                "type": "Fixture",
                "subject": "Sentence:TearDown",
                "start": 3,
                "end": 3,
                "duration": 0
              }
            ],
            "duration": 3,
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
                "html": "<pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; StoryTeller.StorytellerAssertionException: No go!\r\n   at StoryTeller.StoryTellerAssert.Fail(String message) in Z:\\code\\storyteller\\src\\StoryTeller\\StoryTellerAssert.cs:line 17\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.ThisLineAlwaysThrowsExceptions() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 132\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__19.MoveNext() in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 81\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38</pre>",
                "title": "Logged Exceptions in Storyteller",
                "count": 1,
                "short_title": "Exceptions"
              }
            ],
            "attempts": 1,
            "aborted": false,
            "time": "7:29 PM",
            "counts": {
              "rights": 2,
              "wrongs": 2,
              "errors": 1,
              "invalids": 1
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Sentences",
          "path": "Specs/Sentences/Sentences",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "sentence4"
        }
      },
      {
        "last_result": {
          "id": "set1",
          "data": {
            "title": "Ordered Set",
            "path": "Sets/Ordered Set",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                            "id": "15a727cc-8a7a-4338-ae06-6ec616756a84"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Name": "Drill",
                              "Amount": "200.2",
                              "Date": "TODAY+1"
                            },
                            "collections": [],
                            "id": "daef95f6-5b20-4b65-8d22-0b32eff6419d"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Name": "Hammer",
                              "Amount": "300.3",
                              "Date": "TODAY+2"
                            },
                            "collections": [],
                            "id": "025f8762-e13b-48b8-9a1a-8bc88aea3a9d"
                          }
                        ],
                        "activeCells": {},
                        "id": "71f3396c-5021-4d5d-8a02-9ed5db92e4cf"
                      }
                    ],
                    "id": "f7ee7074-d787-4b2d-afb6-955d8f6742cd"
                  },
                  {
                    "text": "Completely successful ordering",
                    "type": "comment",
                    "id": "4d3487ca-592a-4229-a17a-633df85a12ee"
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
                    "id": "68cddd67-f2f1-4dd0-a76a-71c58f1d67cd"
                  },
                  {
                    "text": "Out of order",
                    "type": "comment",
                    "id": "1cb6ad42-ff14-43a3-8324-6107b3044327"
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
                    "id": "f65a78aa-d049-4554-81e9-1525445efd19"
                  },
                  {
                    "text": "Should have one exra",
                    "type": "comment",
                    "id": "52b338f8-fb56-4e69-a246-dcc6c914c344"
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
                            "id": "34ea7660-e9d9-49ba-a356-4f71c5c9688d"
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
                            "id": "2442795c-def9-4d94-9ff6-ceeaf18e0595"
                          }
                        ],
                        "activeCells": {},
                        "id": "9"
                      }
                    ],
                    "id": "93ac383a-4b1b-4e0f-9c58-14d85401d4b2"
                  },
                  {
                    "text": "Should mark one expected result as missing",
                    "type": "comment",
                    "id": "34227ac8-dea1-431d-b771-4235b28b534d"
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
                            "id": "424ee195-b92b-4ae8-a251-d05bf7ac7eaf"
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
                            "id": "25ea6a3f-f0a5-474d-891a-a19b8c513714"
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
                            "id": "5ba7b802-f3c8-490c-8209-420aba5d313c"
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
                    "id": "753f83f7-2138-4e8f-99b8-07f7789cc4b2"
                  },
                  {
                    "text": "One syntax error",
                    "type": "comment",
                    "id": "86279756-a077-4405-a13f-d2a811221bc0"
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
                            "id": "eb5d1234-859d-4ed7-8de0-debd1710fda0"
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
                            "id": "97f0ca6c-36d1-486b-8b50-b2ea63269d6e"
                          }
                        ],
                        "activeCells": {},
                        "id": "51c71ec5-0e6a-4214-8457-90a726a4f86c"
                      }
                    ],
                    "id": "e5f23118-51d0-43ac-8b33-bec8f6ff3481"
                  }
                ],
                "activeCells": {},
                "id": "6914701a-6db9-42e4-9eb7-b899143d878f"
              }
            ],
            "id": "set1"
          },
          "results": {
            "results": [
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "15a727cc-8a7a-4338-ae06-6ec616756a84",
                "spec": "set1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "15a727cc-8a7a-4338-ae06-6ec616756a84",
                "spec": "set1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "15a727cc-8a7a-4338-ae06-6ec616756a84",
                "spec": "set1",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "daef95f6-5b20-4b65-8d22-0b32eff6419d",
                "spec": "set1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "daef95f6-5b20-4b65-8d22-0b32eff6419d",
                "spec": "set1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "daef95f6-5b20-4b65-8d22-0b32eff6419d",
                "spec": "set1",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "025f8762-e13b-48b8-9a1a-8bc88aea3a9d",
                "spec": "set1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "025f8762-e13b-48b8-9a1a-8bc88aea3a9d",
                "spec": "set1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "025f8762-e13b-48b8-9a1a-8bc88aea3a9d",
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
                  "34ea7660-e9d9-49ba-a356-4f71c5c9688d",
                  "2442795c-def9-4d94-9ff6-ceeaf18e0595"
                ],
                "missing": [],
                "extras": [
                  {
                    "Amount": "300.3",
                    "Date": "1/8/2016 12:00:00 AM",
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
                  "424ee195-b92b-4ae8-a251-d05bf7ac7eaf",
                  "25ea6a3f-f0a5-474d-891a-a19b8c513714",
                  "5ba7b802-f3c8-490c-8209-420aba5d313c"
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
                "type": "Specification",
                "subject": "Ordered Set",
                "start": 0,
                "end": 57,
                "duration": 57
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "InvoiceDetailsAre:Row:0",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "InvoiceDetailsAre:Row:1",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "InvoiceDetailsAre:Row:2",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "InvoiceDetailsAre:Row:3",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "InvoiceDetailsAre:Row:4",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "InvoiceDetailsAre:Row:0",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "InvoiceDetailsAre:Row:1",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "InvoiceDetailsAre:Row:2",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "InvoiceDetailsAre:Row:3",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "InvoiceDetailsAre:Row:4",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 1,
                "end": 54,
                "duration": 53
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 54,
                "end": 54,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 54,
                "end": 55,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 55,
                "end": 56,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 56,
                "end": 56,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "Sets:TearDown",
                "start": 56,
                "end": 56,
                "duration": 0
              }
            ],
            "duration": 57,
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
            "time": "7:29 PM",
            "counts": {
              "rights": 8,
              "wrongs": 5,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Ordered Set",
          "path": "Specs/Sets/Ordered Set",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "set1"
        }
      },
      {
        "last_result": {
          "id": "set2",
          "data": {
            "title": "Successful OrderedStrings",
            "path": "Sets/Successful OrderedStrings",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                            "id": "8cd5acf7-ff98-4ebd-bc06-ba9205416126"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Josh"
                            },
                            "collections": [],
                            "id": "59e11f77-a0db-45ee-a13a-481d8f9ee23a"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Gary"
                            },
                            "collections": [],
                            "id": "5ade47d1-d2e3-414e-944d-26f5c9a1a8b0"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Kevin"
                            },
                            "collections": [],
                            "id": "f283210a-93c0-4152-bfee-7ff0cacad4e9"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Chad"
                            },
                            "collections": [],
                            "id": "ecc079c8-916c-4d62-b714-20cb600210ae"
                          }
                        ],
                        "activeCells": {},
                        "id": "08e8572b-187a-4832-b0ad-ee9dae071161"
                      }
                    ],
                    "id": "b100345a-6ae1-4f20-86fc-51af48f90659"
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
                            "id": "db6a8b46-e41d-4aa5-99ef-0f52821fc37f"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Josh",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "d6fc4e6b-5c59-4cba-ab30-dd435c765e21"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Gary",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "0aeef869-4fc3-4ec3-8919-588451e9b7a8"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Kevin",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "c10e1c92-041e-4c93-9775-66628aca75cd"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Chad",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "0fe76e6b-eb5a-4aff-8231-19262baad21d"
                          }
                        ],
                        "activeCells": {},
                        "id": "0f8eb8de-5135-4249-840e-a41ffd186ab0"
                      }
                    ],
                    "id": "0acd67e3-b6fe-4cdc-a319-35967a3ad1c8"
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
                            "id": "97bf15d0-51ec-4186-859c-c54ef4e56fc0"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Chad",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "ed242144-c161-4d8d-908f-655e02d7f334"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Jeremy",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "d16ebda6-f164-4127-be5a-76cc814b86bf"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Josh",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "7df9a40a-fdd4-4ba0-8e53-2bdae5b524d9"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Gary",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "43544c83-507f-4862-9427-30c897b8b586"
                          }
                        ],
                        "activeCells": {},
                        "id": "1386f2c7-01fa-4580-9a25-500bf8240fa3"
                      }
                    ],
                    "id": "57f2a55a-8ffa-4852-aa30-e373b6bc071d"
                  }
                ],
                "activeCells": {},
                "id": "a2da4cd1-d4c4-4bd1-b686-5a90cdc0b0fd"
              }
            ],
            "id": "set2"
          },
          "results": {
            "results": [
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "8cd5acf7-ff98-4ebd-bc06-ba9205416126",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "59e11f77-a0db-45ee-a13a-481d8f9ee23a",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "5ade47d1-d2e3-414e-944d-26f5c9a1a8b0",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "f283210a-93c0-4152-bfee-7ff0cacad4e9",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ecc079c8-916c-4d62-b714-20cb600210ae",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "spec": "set2",
                "matches": [
                  "db6a8b46-e41d-4aa5-99ef-0f52821fc37f",
                  "d6fc4e6b-5c59-4cba-ab30-dd435c765e21",
                  "0aeef869-4fc3-4ec3-8919-588451e9b7a8",
                  "c10e1c92-041e-4c93-9775-66628aca75cd",
                  "0fe76e6b-eb5a-4aff-8231-19262baad21d"
                ],
                "missing": [],
                "extras": [],
                "wrongOrdered": [],
                "id": "0f8eb8de-5135-4249-840e-a41ffd186ab0",
                "type": "set-verification-result"
              },
              {
                "spec": "set2",
                "matches": [
                  "97bf15d0-51ec-4186-859c-c54ef4e56fc0",
                  "ed242144-c161-4d8d-908f-655e02d7f334",
                  "d16ebda6-f164-4127-be5a-76cc814b86bf",
                  "7df9a40a-fdd4-4ba0-8e53-2bdae5b524d9",
                  "43544c83-507f-4862-9427-30c897b8b586"
                ],
                "missing": [],
                "extras": [],
                "wrongOrdered": [],
                "id": "1386f2c7-01fa-4580-9a25-500bf8240fa3",
                "type": "set-verification-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Successful OrderedStrings",
                "start": 0,
                "end": 2,
                "duration": 2
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "TheDataIs:Row",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheDataIs:Row",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheDataIs:Row",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheDataIs:Row",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheDataIs:Row",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Rows",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Rows",
                "start": 1,
                "end": 2,
                "duration": 1
              },
              {
                "type": "Fixture",
                "subject": "Sets:TearDown",
                "start": 2,
                "end": 2,
                "duration": 0
              }
            ],
            "duration": 2,
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
            "time": "7:29 PM",
            "counts": {
              "rights": 10,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Successful OrderedStrings",
          "path": "Specs/Sets/Successful OrderedStrings",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "set2"
        }
      },
      {
        "last_result": {
          "id": "set3",
          "data": {
            "title": "Set with Error",
            "path": "Sets/Set with Error",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                            "id": "25d8471b-91a5-45e5-8377-5f60fd3ef777"
                          },
                          {
                            "key": "rows",
                            "cells": {
                              "Name": "b"
                            },
                            "collections": [],
                            "id": "76b63388-47f2-4647-82a9-ec598ee9e220"
                          },
                          {
                            "key": "rows",
                            "cells": {
                              "Name": "c"
                            },
                            "collections": [],
                            "id": "42c18eb7-be99-42aa-9a69-d0647e493b90"
                          }
                        ],
                        "activeCells": {},
                        "id": "1"
                      }
                    ],
                    "id": "7844b385-7049-4bb8-89d4-b722b008e994"
                  }
                ],
                "activeCells": {},
                "id": "45332010-eea7-4e14-8bb4-8d23fca095e8"
              }
            ],
            "id": "set3"
          },
          "results": {
            "results": [
              {
                "status": "error",
                "error": "System.AggregateException: One or more errors occurred. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<>c.<ThrowsErrorOnDataFetch>b__3_0() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.<>c__DisplayClass42_0`1.<VerifySetOf>b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 494\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3_0.<Fetch>b__0() in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 24\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---> (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<>c.<ThrowsErrorOnDataFetch>b__3_0() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.<>c__DisplayClass42_0`1.<VerifySetOf>b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 494\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3_0.<Fetch>b__0() in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 24\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()<---\r\n",
                "cells": [],
                "id": "1",
                "spec": "set3",
                "position": "before",
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Set with Error",
                "start": 0,
                "end": 1,
                "duration": 1
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Fixture",
                "subject": "Sets:TearDown",
                "start": 1,
                "end": 1,
                "duration": 0
              }
            ],
            "duration": 1,
            "logging": [
              {
                "html": "<pre class=\"debug-output\"></pre>",
                "title": "Debug Output",
                "count": 0,
                "short_title": "Debug"
              },
              {
                "html": "<pre class=\"bg-warning\">System.AggregateException: One or more errors occurred. ---&gt; System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;&gt;c.&lt;ThrowsErrorOnDataFetch&gt;b__3_0() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass42_0`1.&lt;VerifySetOf&gt;b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 494\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3_0.&lt;Fetch&gt;b__0() in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 24\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---&gt; (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;&gt;c.&lt;ThrowsErrorOnDataFetch&gt;b__3_0() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass42_0`1.&lt;VerifySetOf&gt;b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 494\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3_0.&lt;Fetch&gt;b__0() in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 24\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()&lt;---\r\n</pre>",
                "title": "Logged Exceptions in Storyteller",
                "count": 1,
                "short_title": "Exceptions"
              }
            ],
            "attempts": 1,
            "aborted": false,
            "time": "7:29 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 1,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Set with Error",
          "path": "Specs/Sets/Set with Error",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "set3"
        }
      },
      {
        "last_result": {
          "id": "set4",
          "data": {
            "title": "Unordered Set",
            "path": "Sets/Unordered Set",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                            "id": "53aed4d7-9cde-4dfb-981f-2338b173342c"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Amount": "200.2",
                              "Date": "TODAY+1",
                              "Name": "Drill"
                            },
                            "collections": [],
                            "id": "618ed585-99a0-42b2-b9ca-b4108b5cbbe1"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Amount": "300.3",
                              "Date": "TODAY+2",
                              "Name": "Hammer"
                            },
                            "collections": [],
                            "id": "6707b5e5-5635-4ccc-883a-ebb524afa102"
                          }
                        ],
                        "activeCells": {},
                        "id": "2cbc5751-e7d1-42e8-918c-f9bb40881576"
                      }
                    ],
                    "id": "8757c4bf-20f0-463f-967b-b5449b0e1fb6"
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
                            "id": "5f67b78b-1774-42ee-980f-d9609ab480bf"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Amount": "300.3",
                              "Date": "TODAY+2",
                              "Name": "Hammer"
                            },
                            "collections": [],
                            "id": "f8b4fb47-bae6-43ec-9b84-9b638a2bbf6b"
                          }
                        ],
                        "activeCells": {},
                        "id": "997d85e4-4c52-4945-8810-37049d08b634"
                      }
                    ],
                    "id": "c5fdde39-8c46-4c7e-afd4-8bbe18f57b22"
                  }
                ],
                "activeCells": {},
                "id": "2b06aeea-25af-4684-ad76-74e11341a82b"
              }
            ],
            "id": "set4"
          },
          "results": {
            "results": [
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "53aed4d7-9cde-4dfb-981f-2338b173342c",
                "spec": "set4",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "53aed4d7-9cde-4dfb-981f-2338b173342c",
                "spec": "set4",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "53aed4d7-9cde-4dfb-981f-2338b173342c",
                "spec": "set4",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "618ed585-99a0-42b2-b9ca-b4108b5cbbe1",
                "spec": "set4",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "618ed585-99a0-42b2-b9ca-b4108b5cbbe1",
                "spec": "set4",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "618ed585-99a0-42b2-b9ca-b4108b5cbbe1",
                "spec": "set4",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6707b5e5-5635-4ccc-883a-ebb524afa102",
                "spec": "set4",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6707b5e5-5635-4ccc-883a-ebb524afa102",
                "spec": "set4",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6707b5e5-5635-4ccc-883a-ebb524afa102",
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
                "id": "5f67b78b-1774-42ee-980f-d9609ab480bf",
                "spec": "set4",
                "position": null,
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Unordered Set",
                "start": 0,
                "end": 1,
                "duration": 1
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
            "duration": 1,
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
            "time": "7:29 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Unordered Set",
          "path": "Specs/Sets/Unordered Set",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "set4"
        }
      },
      {
        "last_result": {
          "id": "set5",
          "data": {
            "title": "Unsuccessful Ordering",
            "path": "Sets/Unsuccessful Ordering",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                            "id": "9be3cd2c-4828-4169-9648-19f1ad16daa4"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Josh"
                            },
                            "collections": [],
                            "id": "1c15369a-942b-42e3-a8bf-59dfaf306f8f"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Gary"
                            },
                            "collections": [],
                            "id": "4a10b9b9-c64d-47cf-85d7-59b3781550fd"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Kevin"
                            },
                            "collections": [],
                            "id": "1bc7659a-55d6-43da-8397-6fa65fbc27f3"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Chad"
                            },
                            "collections": [],
                            "id": "7dfe07a0-7e1e-48fc-aacb-c1df42817bf0"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Rand"
                            },
                            "collections": [],
                            "id": "2080e2b3-258c-45be-b8a8-dc6af589a8e2"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Perrin"
                            },
                            "collections": [],
                            "id": "c1be164c-65ee-4ba8-a9a4-89f9f4787334"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Mat"
                            },
                            "collections": [],
                            "id": "3ee72545-05b6-4ae4-88db-1bdec65b96da"
                          }
                        ],
                        "activeCells": {},
                        "id": "61c521ec-1d41-4492-b00c-695d8cc4440b"
                      }
                    ],
                    "id": "61e55eba-fb64-483c-81f8-44b9f05c5226"
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
                            "id": "3818c6af-926b-42dd-aca6-cad5a557a55c"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Josh"
                            },
                            "collections": [],
                            "id": "fec356ee-ebcf-41af-b6f9-3c95505c2568"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Gary"
                            },
                            "collections": [],
                            "id": "a2834904-5ca6-4cd6-94a4-ee9d72317190"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Chad"
                            },
                            "collections": [],
                            "id": "ceb93410-253e-401b-8220-ee10f50f5cda"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Kevin"
                            },
                            "collections": [],
                            "id": "650f4858-f0fb-4b5a-b80f-2130387edf0e"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Egwene"
                            },
                            "collections": [],
                            "id": "085580da-1755-4f08-975f-ccf6bc44cf90"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Perrin"
                            },
                            "collections": [],
                            "id": "473f75dd-2f70-4b00-b089-a363a6916933"
                          }
                        ],
                        "activeCells": {},
                        "id": "4f091fff-8c47-4a91-90c4-19c01477dddb"
                      }
                    ],
                    "id": "ca6c7ec1-f8ec-4223-b856-2b921fd7a8c2"
                  }
                ],
                "activeCells": {},
                "id": "a1dd4de2-85ac-4100-8e63-effb613d81c7"
              }
            ],
            "id": "set5"
          },
          "results": {
            "results": [
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "9be3cd2c-4828-4169-9648-19f1ad16daa4",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "1c15369a-942b-42e3-a8bf-59dfaf306f8f",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "4a10b9b9-c64d-47cf-85d7-59b3781550fd",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "1bc7659a-55d6-43da-8397-6fa65fbc27f3",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "7dfe07a0-7e1e-48fc-aacb-c1df42817bf0",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "2080e2b3-258c-45be-b8a8-dc6af589a8e2",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "c1be164c-65ee-4ba8-a9a4-89f9f4787334",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "3ee72545-05b6-4ae4-88db-1bdec65b96da",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "spec": "set5",
                "matches": [
                  "3818c6af-926b-42dd-aca6-cad5a557a55c",
                  "fec356ee-ebcf-41af-b6f9-3c95505c2568",
                  "a2834904-5ca6-4cd6-94a4-ee9d72317190",
                  "473f75dd-2f70-4b00-b089-a363a6916933"
                ],
                "missing": [
                  "085580da-1755-4f08-975f-ccf6bc44cf90"
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
                    "id": "ceb93410-253e-401b-8220-ee10f50f5cda"
                  },
                  {
                    "actual": 4,
                    "id": "650f4858-f0fb-4b5a-b80f-2130387edf0e"
                  }
                ],
                "id": "4f091fff-8c47-4a91-90c4-19c01477dddb",
                "type": "set-verification-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Unsuccessful Ordering",
                "start": 0,
                "end": 0,
                "duration": 0
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
            "time": "7:29 PM",
            "counts": {
              "rights": 4,
              "wrongs": 5,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Unsuccessful Ordering",
          "path": "Specs/Sets/Unsuccessful Ordering",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "set5"
        }
      },
      {
        "last_result": {
          "id": "table1",
          "data": {
            "title": "Boolean Results in a Table",
            "path": "Tables/Boolean Results in a Table",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                            "id": "5f86c28e-ee74-4dc5-a49a-3513f10f092e"
                          },
                          {
                            "key": "IsPositive-row",
                            "cells": {
                              "number": "-5",
                              "IsEven": "false"
                            },
                            "collections": [],
                            "id": "12412b7e-2e25-4e27-93f0-121ef3edcf10"
                          }
                        ],
                        "activeCells": {},
                        "id": "a481d76f-66ae-464f-8c6f-2739e4c39d3e"
                      }
                    ],
                    "id": "dde7ae9b-587d-419a-b156-4ade1a8433d9"
                  }
                ],
                "activeCells": {},
                "id": "3ebd1088-3f9a-4623-bf69-8c04668dd246"
              }
            ],
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
                "id": "5f86c28e-ee74-4dc5-a49a-3513f10f092e",
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
                "id": "12412b7e-2e25-4e27-93f0-121ef3edcf10",
                "spec": "table1",
                "position": null,
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Boolean Results in a Table",
                "start": 0,
                "end": 0,
                "duration": 0
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
            "time": "7:29 PM",
            "counts": {
              "rights": 2,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Boolean Results in a Table",
          "path": "Specs/Tables/Boolean Results in a Table",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "table1"
        }
      },
      {
        "last_result": {
          "id": "table2",
          "data": {
            "title": "Decision Table",
            "path": "Tables/Decision Table",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                            "id": "e8bbff31-d28e-4407-8182-bb74a098fb71"
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
                            "id": "d65acf02-ebac-45ad-b443-f787dda526c5"
                          }
                        ],
                        "activeCells": {},
                        "id": "b9fa5921-a3f1-429b-ab2e-ea080f37ea1f"
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
                            "id": "80276d58-fea4-4f06-bc9b-9f7112f78031"
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
                            "id": "45b408b4-9348-4022-9e98-4d53cb5c61a9"
                          }
                        ],
                        "activeCells": {},
                        "id": "845e54f3-938b-43b2-90b0-9cb5ea69f99d"
                      }
                    ],
                    "id": "5fc29b26-b851-4ed2-bf12-e8c29ac22426"
                  }
                ],
                "activeCells": {},
                "id": "b0871795-6f16-40ba-8d28-70dfc629876c"
              }
            ],
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
                "id": "80276d58-fea4-4f06-bc9b-9f7112f78031",
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
                "id": "45b408b4-9348-4022-9e98-4d53cb5c61a9",
                "spec": "table2",
                "position": null,
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Decision Table",
                "start": 0,
                "end": 0,
                "duration": 0
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
            "time": "7:29 PM",
            "counts": {
              "rights": 2,
              "wrongs": 2,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Decision Table",
          "path": "Specs/Tables/Decision Table",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "table2"
        }
      },
      {
        "last_result": {
          "id": "table3",
          "data": {
            "title": "Table with Optional Columns",
            "path": "Tables/Table with Optional Columns",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                            "id": "b7ae51c5-5cde-4a62-bd1c-c339c535c331"
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
                            "id": "dcf9fcf1-66af-43f9-89f9-5ecdcc832ea9"
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
                            "id": "015fe31c-13c8-48ff-ae53-3016f46321f7"
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
                            "id": "9109417d-a5ca-4d13-af57-c1aeb79ae896"
                          }
                        ],
                        "activeCells": {
                          "b": false,
                          "c": false
                        },
                        "id": "3c402eda-44ab-48b2-bc1e-e83730c123cf"
                      }
                    ],
                    "id": "f232a88e-f47f-48c4-a216-6fc42b805dfb"
                  }
                ],
                "activeCells": {},
                "id": "66898ff9-2096-47f5-a222-6e3d717e87bb"
              }
            ],
            "id": "table3"
          },
          "results": {
            "results": [
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "b7ae51c5-5cde-4a62-bd1c-c339c535c331",
                "spec": "table3",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "dcf9fcf1-66af-43f9-89f9-5ecdcc832ea9",
                "spec": "table3",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "015fe31c-13c8-48ff-ae53-3016f46321f7",
                "spec": "table3",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "9109417d-a5ca-4d13-af57-c1aeb79ae896",
                "spec": "table3",
                "position": null,
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Table with Optional Columns",
                "start": 0,
                "end": 2,
                "duration": 2
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "Table:SetUp",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TableWithLotsOfOptions:Row",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TableWithLotsOfOptions:Row",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TableWithLotsOfOptions:Row",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TableWithLotsOfOptions:Row",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "Table:TearDown",
                "start": 1,
                "end": 1,
                "duration": 0
              }
            ],
            "duration": 2,
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
            "time": "7:29 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Table with Optional Columns",
          "path": "Specs/Tables/Table with Optional Columns",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "table3"
        }
      },
      {
        "last_result": {
          "id": "table4",
          "data": {
            "title": "Tables with Errors",
            "path": "Tables/Tables with Errors",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
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
                            "id": "9c10c30f-5c9a-4a0f-90af-836d47a1e1da"
                          }
                        ],
                        "activeCells": {},
                        "id": "before"
                      }
                    ],
                    "id": "f2a9a974-ae99-48bd-a87e-7321954609f5"
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
                            "id": "902bfc1a-b9b1-4d4e-beca-c1f249072695"
                          }
                        ],
                        "activeCells": {},
                        "id": "after"
                      }
                    ],
                    "id": "3ead73ed-2515-4edb-af5e-8e8b0cdeef44"
                  }
                ],
                "activeCells": {},
                "id": "16e7b1ee-6292-4822-83e2-ca5ae2351a40"
              }
            ],
            "id": "table4"
          },
          "results": {
            "results": [
              {
                "status": "error",
                "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<>c.<BeforeThrowsError>b__5_2() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 39\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass16_0.<Before>b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 65\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
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
                "id": "9c10c30f-5c9a-4a0f-90af-836d47a1e1da",
                "spec": "table4",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "902bfc1a-b9b1-4d4e-beca-c1f249072695",
                "spec": "table4",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "error",
                "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<>c.<AfterThrowsError>b__6_2() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 46\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass18_0.<After>b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 76\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
                "cells": [],
                "id": "after",
                "spec": "table4",
                "position": "after",
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Tables with Errors",
                "start": 0,
                "end": 2,
                "duration": 2
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "BeforeThrowsError:Row:0",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AfterThrowsError:Row:0",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AfterThrowsError:After",
                "start": 1,
                "end": 2,
                "duration": 1
              },
              {
                "type": "Fixture",
                "subject": "Table:TearDown",
                "start": 2,
                "end": 2,
                "duration": 0
              }
            ],
            "duration": 2,
            "logging": [
              {
                "html": "<pre class=\"debug-output\"></pre>",
                "title": "Debug Output",
                "count": 0,
                "short_title": "Debug"
              },
              {
                "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.&lt;&gt;c.&lt;BeforeThrowsError&gt;b__5_2() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 39\r\n   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass16_0.&lt;Before&gt;b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 65\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>\n<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.&lt;&gt;c.&lt;AfterThrowsError&gt;b__6_2() in Z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 46\r\n   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass18_0.&lt;After&gt;b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 76\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
                "title": "Logged Exceptions in Storyteller",
                "count": 2,
                "short_title": "Exceptions"
              }
            ],
            "attempts": 1,
            "aborted": false,
            "time": "7:29 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 2,
              "invalids": 0
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Tables with Errors",
          "path": "Specs/Tables/Tables with Errors",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "table4"
        }
      },
      {
        "last_result": {
          "id": "table5",
          "data": {
            "title": "Tables",
            "path": "Tables/Tables",
            "max-retries": 0,
            "expiration-period": 0,
            "lifecycle": "Acceptance",
            "mode": "full",
            "tags": [],
            "last-updated": "Wednesday, January 06, 2016",
            "steps": [
              {
                "key": "Table",
                "type": "section",
                "steps": [
                  {
                    "text": "Table by the ExposeAsTable attribute",
                    "type": "comment",
                    "id": "c8e9a49a-8be0-4037-8a4f-3a95bb49ea46"
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
                            "id": "b18b5d73-5c4e-448a-95e7-2162d0a3772b"
                          },
                          {
                            "key": "sum",
                            "cells": {
                              "x": "2",
                              "y": "2",
                              "sum": "5"
                            },
                            "collections": [],
                            "id": "2ab3c04c-c5c8-4aba-b692-d8b925bbc844"
                          }
                        ],
                        "activeCells": {},
                        "id": "3dd0443d-7e7b-4170-85b6-061e1d7a3363"
                      }
                    ],
                    "id": "e43ac88a-990f-482a-8b9c-ff19ec4b2d2f"
                  },
                  {
                    "text": "Table fixture from script",
                    "type": "comment",
                    "id": "6d6527a9-cdd2-45e5-91b3-bbc6c3e96bc1"
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
                            "id": "16e29209-9777-4f6f-bd6c-3700f4745366"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "x": "3",
                              "y": "3",
                              "product": "****"
                            },
                            "collections": [],
                            "id": "9afd5f25-6fcc-4302-9584-d4be4a619ed9"
                          }
                        ],
                        "activeCells": {},
                        "id": "f9284345-567d-4678-b075-02f471a8c39b"
                      }
                    ],
                    "id": "69c695d9-4cb6-4685-b676-7e5bc82e93b3"
                  }
                ],
                "activeCells": {},
                "id": "d4a8844f-40d5-43c4-91a8-b511d82df676"
              }
            ],
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
                "id": "b18b5d73-5c4e-448a-95e7-2162d0a3772b",
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
                "id": "2ab3c04c-c5c8-4aba-b692-d8b925bbc844",
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
                "id": "16e29209-9777-4f6f-bd6c-3700f4745366",
                "spec": "table5",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "16e29209-9777-4f6f-bd6c-3700f4745366",
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
                "id": "16e29209-9777-4f6f-bd6c-3700f4745366",
                "spec": "table5",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "9afd5f25-6fcc-4302-9584-d4be4a619ed9",
                "spec": "table5",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "9afd5f25-6fcc-4302-9584-d4be4a619ed9",
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
                "id": "9afd5f25-6fcc-4302-9584-d4be4a619ed9",
                "spec": "table5",
                "position": "3",
                "type": "step-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Tables",
                "start": 0,
                "end": 1,
                "duration": 1
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 0,
                "end": 0,
                "duration": 0
              },
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:0",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:1",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:2",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:3",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:0",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:1",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:2",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:3",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:0",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:1",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:2",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:3",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "Table:TearDown",
                "start": 1,
                "end": 1,
                "duration": 0
              }
            ],
            "duration": 1,
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
            "time": "7:29 PM",
            "counts": {
              "rights": 2,
              "wrongs": 2,
              "errors": 0,
              "invalids": 6
            }
          },
          "time": "7:29:59 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Tables",
          "path": "Specs/Tables/Tables",
          "max-retries": 0,
          "expiration-period": 0,
          "lifecycle": "Acceptance",
          "mode": "header",
          "tags": [],
          "last-updated": "Wednesday, January 06, 2016",
          "steps": [],
          "id": "table5"
        }
      }
    ],
    "type": "hierarchy-loaded"
  },
  "port": 8200,
  "type": "initial-model"
}