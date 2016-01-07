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
    "time": "7:53 AM",
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
  "hierarchy": {
    "hierarchy": {
      "suites": [
        {
          "suites": [
            {
              "suites": [],
              "name": "Debug",
              "path": "bin/Debug",
              "specs": [
                "a5069a02-bed5-44cc-8794-c325dc7715b1"
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
        "d5a32a2a-7d85-4206-bdd7-7f6dba403bb5"
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
          "last-updated": "Thursday, January 07, 2016",
          "steps": [],
          "id": "d5a32a2a-7d85-4206-bdd7-7f6dba403bb5"
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
          "last-updated": "Thursday, January 07, 2016",
          "steps": [],
          "id": "a5069a02-bed5-44cc-8794-c325dc7715b1"
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
            "last-updated": "Thursday, January 07, 2016",
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
                    "id": "456ec045-2358-4e2a-b9f4-352260eda84f"
                  },
                  {
                    "key": "TheAddressShouldBe",
                    "cells": {
                      "Address1": "2035 Ozark",
                      "Address2": "Apt 3",
                      "City": "Carthage"
                    },
                    "collections": [],
                    "id": "d9c48fef-654e-40ee-a9f4-a3f822c24d82"
                  },
                  {
                    "key": "TheAddressShouldBe",
                    "cells": {
                      "Address1": "wrong",
                      "Address2": "wrong",
                      "City": "wrong"
                    },
                    "collections": [],
                    "id": "68648408-d909-47cc-ad22-d9f2fdb881d1"
                  }
                ],
                "activeCells": {},
                "id": "ea7ffca5-400c-4098-be00-a975795ff8d6"
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
                "id": "456ec045-2358-4e2a-b9f4-352260eda84f",
                "spec": "general1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "456ec045-2358-4e2a-b9f4-352260eda84f",
                "spec": "general1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "456ec045-2358-4e2a-b9f4-352260eda84f",
                "spec": "general1",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "456ec045-2358-4e2a-b9f4-352260eda84f",
                "spec": "general1",
                "position": "4",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "456ec045-2358-4e2a-b9f4-352260eda84f",
                "spec": "general1",
                "position": "5",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "456ec045-2358-4e2a-b9f4-352260eda84f",
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
                "id": "d9c48fef-654e-40ee-a9f4-a3f822c24d82",
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
                "id": "d9c48fef-654e-40ee-a9f4-a3f822c24d82",
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
                "id": "d9c48fef-654e-40ee-a9f4-a3f822c24d82",
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
                "id": "68648408-d909-47cc-ad22-d9f2fdb881d1",
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
                "id": "68648408-d909-47cc-ad22-d9f2fdb881d1",
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
                "id": "68648408-d909-47cc-ad22-d9f2fdb881d1",
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
                "end": 100,
                "duration": 100
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 1,
                "end": 4,
                "duration": 3
              },
              {
                "type": "Fixture",
                "subject": "CheckObject:SetUp",
                "start": 95,
                "end": 95,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:0",
                "start": 95,
                "end": 95,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:1",
                "start": 96,
                "end": 98,
                "duration": 2
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:2",
                "start": 98,
                "end": 98,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:3",
                "start": 98,
                "end": 98,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:4",
                "start": 98,
                "end": 98,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:5",
                "start": 98,
                "end": 98,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:6",
                "start": 98,
                "end": 98,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:0",
                "start": 98,
                "end": 99,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:1",
                "start": 99,
                "end": 99,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:2",
                "start": 99,
                "end": 99,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:0",
                "start": 99,
                "end": 99,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:1",
                "start": 99,
                "end": 99,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:2",
                "start": 99,
                "end": 99,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "CheckObject:TearDown",
                "start": 99,
                "end": 99,
                "duration": 0
              }
            ],
            "duration": 100,
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
            "time": "7:53 AM",
            "counts": {
              "rights": 3,
              "wrongs": 3,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                    "id": "8eacfa13-bf6f-4575-8e4f-d8bc0dda6be2"
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
                "id": "8eacfa13-bf6f-4575-8e4f-d8bc0dda6be2",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                    "id": "939db13b-0a6b-49ee-8104-0e8116fba8e6"
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
                            "id": "389767f5-a4c7-4e3e-a420-0efbaf7e1a5a"
                          },
                          {
                            "key": "table",
                            "cells": {
                              "first": "Harold",
                              "last": "Miller",
                              "fullname": "Harold Mueller"
                            },
                            "collections": [],
                            "id": "e32a04d8-d966-4133-ac54-84c3026ccc95"
                          }
                        ],
                        "activeCells": {},
                        "id": "174c2502-4871-40b5-874d-604778bf1029"
                      }
                    ],
                    "id": "dc155d8d-b216-438f-b724-a2bc4641e8d9"
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
                            "id": "b8421985-828f-4621-88b2-31ca49faf63d"
                          }
                        ],
                        "activeCells": {},
                        "id": "921b3cd5-f1d2-4f28-9844-f714555aad99"
                      }
                    ],
                    "id": "d167bbee-68b0-4169-ba21-96566452447a"
                  },
                  {
                    "key": "TheEnumOptionIs",
                    "cells": {
                      "option": "FirstOption",
                      "selectedOption": "0"
                    },
                    "collections": [],
                    "id": "09248aa8-86ad-49d4-935e-8ff515f3f2c0"
                  }
                ],
                "activeCells": {},
                "id": "590944bd-c0ea-4cf5-b6fa-d6b00de45158"
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
                "id": "939db13b-0a6b-49ee-8104-0e8116fba8e6",
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
                "id": "389767f5-a4c7-4e3e-a420-0efbaf7e1a5a",
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
                "id": "e32a04d8-d966-4133-ac54-84c3026ccc95",
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
                "id": "b8421985-828f-4621-88b2-31ca49faf63d",
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
                "id": "09248aa8-86ad-49d4-935e-8ff515f3f2c0",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 4,
              "wrongs": 1,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                    "id": "b79f780d-d581-4609-912e-d2a8990e77f6"
                  },
                  {
                    "key": "Check",
                    "cells": {
                      "value": "5"
                    },
                    "collections": [],
                    "id": "318ebc82-7142-49e8-9683-4ca0189a988b"
                  },
                  {
                    "key": "Set",
                    "cells": {
                      "value": "6"
                    },
                    "collections": [],
                    "id": "cc4860f0-330a-499f-8f3e-8339906cec0a"
                  },
                  {
                    "key": "Check",
                    "cells": {
                      "value": "7"
                    },
                    "collections": [],
                    "id": "94e8bcdf-ac11-4545-a489-8452e327dda8"
                  },
                  {
                    "key": "Set",
                    "cells": {
                      "value": "abc"
                    },
                    "collections": [],
                    "id": "628a13d6-7dd2-41bb-800b-1ec96af10ae9"
                  }
                ],
                "activeCells": {},
                "id": "c650c030-4138-413e-91bb-bb2aaaa705e4"
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
                "id": "c650c030-4138-413e-91bb-bb2aaaa705e4",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                            "id": "6888ee58-c2a9-4e2e-b222-62c1adb0e34b"
                          }
                        ],
                        "activeCells": {},
                        "id": "2e87da8f-d2bb-45a0-a375-39e38e3f9564"
                      }
                    ],
                    "id": "3e8b2769-f2fc-48d0-bdac-d65fc5109da8"
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
                "id": "6888ee58-c2a9-4e2e-b222-62c1adb0e34b",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 1,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
            "steps": [
              {
                "key": "Math",
                "type": "section",
                "steps": [
                  {
                    "key": "BadGrammar1",
                    "cells": {},
                    "collections": [],
                    "id": "aed816e7-60de-41f5-a24c-8adda45467ec"
                  },
                  {
                    "key": "BadGrammar2",
                    "cells": {},
                    "collections": [],
                    "id": "8b6790e1-ae48-474c-b385-028abe1668cc"
                  },
                  {
                    "key": "BadGrammar3",
                    "cells": {},
                    "collections": [],
                    "id": "5d09b305-2296-420f-8d6d-cf7adc19fc73"
                  }
                ],
                "activeCells": {},
                "id": "1e7c6fdb-a70e-4f73-836e-e58c062daedc"
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
                "id": "aed816e7-60de-41f5-a24c-8adda45467ec",
                "spec": "general4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "error",
                "error": "Grammar 'BadGrammar2' is not implemented",
                "cells": [],
                "id": "8b6790e1-ae48-474c-b385-028abe1668cc",
                "spec": "general4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "error",
                "error": "Grammar 'BadGrammar3' is not implemented",
                "cells": [],
                "id": "5d09b305-2296-420f-8d6d-cf7adc19fc73",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 3,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                    "id": "8b5b406a-ae34-45cc-a822-580b89b1570b"
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
                    "id": "864a5b04-e817-4be3-8bf4-5de5e1abf456"
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
                            "id": "90afd4bf-89a8-4877-8f1c-7b5562ebbfc8"
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
                            "id": "0fe523bc-82c7-41bd-9728-69689ff65abf"
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
                            "id": "cf623880-1e76-40e3-a1d8-20f5fecfe1e2"
                          }
                        ],
                        "activeCells": {},
                        "id": "4b364f2f-530a-4b5a-84a2-4269be818e4a"
                      }
                    ],
                    "id": "503c308d-61ec-41d1-b538-1a0f59cf97c0"
                  }
                ],
                "activeCells": {},
                "id": "0b1a8af2-d8c7-4dff-921f-568b02c83b68"
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
                "id": "8b5b406a-ae34-45cc-a822-580b89b1570b",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "8b5b406a-ae34-45cc-a822-580b89b1570b",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "8b5b406a-ae34-45cc-a822-580b89b1570b",
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
                "id": "8b5b406a-ae34-45cc-a822-580b89b1570b",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "864a5b04-e817-4be3-8bf4-5de5e1abf456",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "864a5b04-e817-4be3-8bf4-5de5e1abf456",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "864a5b04-e817-4be3-8bf4-5de5e1abf456",
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
                "id": "864a5b04-e817-4be3-8bf4-5de5e1abf456",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "90afd4bf-89a8-4877-8f1c-7b5562ebbfc8",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "90afd4bf-89a8-4877-8f1c-7b5562ebbfc8",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "90afd4bf-89a8-4877-8f1c-7b5562ebbfc8",
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
                "id": "90afd4bf-89a8-4877-8f1c-7b5562ebbfc8",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "0fe523bc-82c7-41bd-9728-69689ff65abf",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "0fe523bc-82c7-41bd-9728-69689ff65abf",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "0fe523bc-82c7-41bd-9728-69689ff65abf",
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
                "id": "0fe523bc-82c7-41bd-9728-69689ff65abf",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "cf623880-1e76-40e3-a1d8-20f5fecfe1e2",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "cf623880-1e76-40e3-a1d8-20f5fecfe1e2",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "cf623880-1e76-40e3-a1d8-20f5fecfe1e2",
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
                "id": "cf623880-1e76-40e3-a1d8-20f5fecfe1e2",
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
                "end": 6,
                "duration": 6
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
                "end": 5,
                "duration": 5
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
                "end": 6,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:0",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:1",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndMultiplyThrow:2",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:2",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:0",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:1",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndMultiplyThrow:2",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:2",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:0",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:1",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndMultiplyThrow:2",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:2",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:0",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:1",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndMultiplyThrow:2",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "AddAndCheck:2",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "Composite:TearDown",
                "start": 6,
                "end": 6,
                "duration": 0
              }
            ],
            "duration": 6,
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
            "time": "7:53 AM",
            "counts": {
              "rights": 2,
              "wrongs": 3,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                    "id": "aa3f20ca-3017-4f61-b933-71e5a8972f97"
                  },
                  {
                    "key": "AddTo5",
                    "cells": {
                      "x": "5",
                      "returnValue": "9",
                      "y": "5"
                    },
                    "collections": [],
                    "id": "b94e326f-311d-46ae-8525-a341adb068e1"
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
                "id": "aa3f20ca-3017-4f61-b933-71e5a8972f97",
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
                "id": "b94e326f-311d-46ae-8525-a341adb068e1",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 1,
              "wrongs": 1,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                    "id": "94c7a267-bc31-454f-9c10-1c6bcb1a18bf"
                  },
                  {
                    "key": "AddingTo5",
                    "cells": {
                      "y": "12",
                      "returnValue": "15",
                      "x": "5"
                    },
                    "collections": [],
                    "id": "ef3e7182-46c5-4208-8c89-56f0351611bf"
                  }
                ],
                "activeCells": {},
                "id": "7f522116-5410-4e15-8fcb-25990f83e7d5"
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
                "id": "94c7a267-bc31-454f-9c10-1c6bcb1a18bf",
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
                "id": "ef3e7182-46c5-4208-8c89-56f0351611bf",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 1,
              "wrongs": 1,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                    "id": "00658340-2d49-43b5-8536-fe06be73a386"
                  },
                  {
                    "key": "MultiplyThenAdd",
                    "cells": {
                      "multiplier": "3",
                      "delta": "4"
                    },
                    "collections": [],
                    "id": "4b82c9e3-dce1-4bd8-bc93-810ecb0fbc40"
                  },
                  {
                    "key": "Subtract",
                    "cells": {
                      "operand": "2"
                    },
                    "collections": [],
                    "id": "71e4cdaa-26a3-498e-944d-551987d5eae0"
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
                    "id": "ca2fe97f-2655-4a90-b3f3-3e9250b1f529"
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
                "id": "00658340-2d49-43b5-8536-fe06be73a386",
                "spec": "sentence4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "4b82c9e3-dce1-4bd8-bc93-810ecb0fbc40",
                "spec": "sentence4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "71e4cdaa-26a3-498e-944d-551987d5eae0",
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
                "id": "ca2fe97f-2655-4a90-b3f3-3e9250b1f529",
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
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "ThisLineIsAlwaysFalse",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "ThisLineAlwaysThrowsExceptions",
                "start": 1,
                "end": 2,
                "duration": 1
              },
              {
                "type": "Fixture",
                "subject": "Sentence:TearDown",
                "start": 2,
                "end": 2,
                "duration": 0
              }
            ],
            "duration": 2,
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
            "time": "7:53 AM",
            "counts": {
              "rights": 2,
              "wrongs": 2,
              "errors": 1,
              "invalids": 1
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                            "id": "efbfa534-174d-46e4-a8bb-9e83e9724a1b"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Name": "Drill",
                              "Amount": "200.2",
                              "Date": "TODAY+1"
                            },
                            "collections": [],
                            "id": "ad62b42c-e555-4854-b3ae-71894ea9345d"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Name": "Hammer",
                              "Amount": "300.3",
                              "Date": "TODAY+2"
                            },
                            "collections": [],
                            "id": "e277023c-1c77-4928-82e7-b81176b6da3e"
                          }
                        ],
                        "activeCells": {},
                        "id": "310709da-4d23-4bed-b801-a21926c34f23"
                      }
                    ],
                    "id": "948dace0-37ba-4bdf-8b32-acc61ba9c43a"
                  },
                  {
                    "text": "Completely successful ordering",
                    "type": "comment",
                    "id": "bc478b06-1801-4f11-8cff-8dbab16214fd"
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
                    "id": "5059976f-d8b5-4caa-908e-b201bb2c9b88"
                  },
                  {
                    "text": "Out of order",
                    "type": "comment",
                    "id": "be0cb938-0e99-4467-a181-4b78248c2e4d"
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
                    "id": "cbf3f5f8-b7a7-46f8-849a-d93d028f5766"
                  },
                  {
                    "text": "Should have one exra",
                    "type": "comment",
                    "id": "76dbdf8a-ab4b-4bda-9cc7-de0992db5e8e"
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
                            "id": "52fe7c5e-e5e8-490e-9b69-595356d80102"
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
                            "id": "53c20090-2fe0-4cf2-8cef-6908a307979e"
                          }
                        ],
                        "activeCells": {},
                        "id": "9"
                      }
                    ],
                    "id": "719f3d98-0b2e-41c8-9aef-fd6cdd2c24be"
                  },
                  {
                    "text": "Should mark one expected result as missing",
                    "type": "comment",
                    "id": "4da688cf-615b-47b6-9121-eae6fe6b643d"
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
                            "id": "a2026c87-225f-4f81-bffd-0bafbbecd360"
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
                            "id": "26f7e78d-a7a9-4d07-8fcb-875a9128688c"
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
                            "id": "d5331c3e-ce54-4eac-8009-744dbbfdd27e"
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
                    "id": "a37e06ef-4684-43be-ad56-e0aaec565894"
                  },
                  {
                    "text": "One syntax error",
                    "type": "comment",
                    "id": "ca35230c-24aa-486f-a078-85c11dcabe5a"
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
                            "id": "b6fa4c51-04c5-4647-a5fe-33c83018111b"
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
                            "id": "ecb393d0-317b-44dc-a1ef-4b4067ea8eec"
                          }
                        ],
                        "activeCells": {},
                        "id": "944d3bda-23a7-488a-8d50-f536ec3d610d"
                      }
                    ],
                    "id": "d4b82ae8-d49d-4ceb-a710-6eeb07e96a3a"
                  }
                ],
                "activeCells": {},
                "id": "748b4390-f075-4782-8d9d-e7827db497df"
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
                "id": "efbfa534-174d-46e4-a8bb-9e83e9724a1b",
                "spec": "set1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "efbfa534-174d-46e4-a8bb-9e83e9724a1b",
                "spec": "set1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "efbfa534-174d-46e4-a8bb-9e83e9724a1b",
                "spec": "set1",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ad62b42c-e555-4854-b3ae-71894ea9345d",
                "spec": "set1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ad62b42c-e555-4854-b3ae-71894ea9345d",
                "spec": "set1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ad62b42c-e555-4854-b3ae-71894ea9345d",
                "spec": "set1",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "e277023c-1c77-4928-82e7-b81176b6da3e",
                "spec": "set1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "e277023c-1c77-4928-82e7-b81176b6da3e",
                "spec": "set1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "e277023c-1c77-4928-82e7-b81176b6da3e",
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
                  "52fe7c5e-e5e8-490e-9b69-595356d80102",
                  "53c20090-2fe0-4cf2-8cef-6908a307979e"
                ],
                "missing": [],
                "extras": [
                  {
                    "Amount": "300.3",
                    "Date": "1/9/2016 12:00:00 AM",
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
                  "a2026c87-225f-4f81-bffd-0bafbbecd360",
                  "26f7e78d-a7a9-4d07-8fcb-875a9128688c",
                  "d5331c3e-ce54-4eac-8009-744dbbfdd27e"
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
                "end": 7,
                "duration": 7
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
                "end": 1,
                "duration": 1
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
                "end": 6,
                "duration": 5
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 6,
                "end": 6,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 6,
                "end": 7,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 7,
                "end": 7,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 7,
                "end": 7,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "Sets:TearDown",
                "start": 7,
                "end": 7,
                "duration": 0
              }
            ],
            "duration": 7,
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
            "time": "7:53 AM",
            "counts": {
              "rights": 8,
              "wrongs": 5,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                            "id": "e53bfe7a-b83c-4ff7-966d-33eff5125b83"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Josh"
                            },
                            "collections": [],
                            "id": "4d88dd5e-bd6a-4098-9049-acdfcbb54b22"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Gary"
                            },
                            "collections": [],
                            "id": "8eea7967-2154-4bda-b766-5cb0ecd25f58"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Kevin"
                            },
                            "collections": [],
                            "id": "382b063f-ee1b-4871-a7d4-fd83ad5225c8"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Chad"
                            },
                            "collections": [],
                            "id": "e68fe101-8583-45a1-adac-2b51e60f5eb2"
                          }
                        ],
                        "activeCells": {},
                        "id": "9cfb9ee5-84cf-44aa-b12f-e1a3076f18ec"
                      }
                    ],
                    "id": "320fabe6-0091-4ef6-a31a-1ab68d8d5506"
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
                            "id": "287bf7f6-9246-4283-9e83-d3a02a2258ba"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Josh",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "10b4731c-0b5a-4845-b3f3-52571c33abda"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Gary",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "3d21ee38-8eda-4fc0-a5fa-dbd8c40c98ea"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Kevin",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "46250c24-4746-43d5-9b75-22df834ff16c"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Chad",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "98e124cf-0f1b-461a-a79e-9452e579dba5"
                          }
                        ],
                        "activeCells": {},
                        "id": "dda23219-67b3-4ad7-aba4-de1290957e8a"
                      }
                    ],
                    "id": "045d87d9-9530-4319-9915-2ee5c055dc9d"
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
                            "id": "28d97c04-2e31-498f-bdb2-0726250bd972"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Chad",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "06c0a734-08b9-4e0e-bb16-95e34b4c8d78"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Jeremy",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "e558de2a-52f5-40e9-828a-ee1be17a5f06"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Josh",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "066f39a5-aa53-48d4-91e3-5561ed6ca80c"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Gary",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "e4e1d948-04f3-4a80-8285-5ab7b5a8554f"
                          }
                        ],
                        "activeCells": {},
                        "id": "9e9f8eb6-070e-489f-86fc-1192ffe0ea46"
                      }
                    ],
                    "id": "3dc84015-28da-48f2-8d91-1e54e97189b7"
                  }
                ],
                "activeCells": {},
                "id": "e829b28f-40c5-4957-a44c-09d11eceef36"
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
                "id": "e53bfe7a-b83c-4ff7-966d-33eff5125b83",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "4d88dd5e-bd6a-4098-9049-acdfcbb54b22",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "8eea7967-2154-4bda-b766-5cb0ecd25f58",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "382b063f-ee1b-4871-a7d4-fd83ad5225c8",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "e68fe101-8583-45a1-adac-2b51e60f5eb2",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "spec": "set2",
                "matches": [
                  "287bf7f6-9246-4283-9e83-d3a02a2258ba",
                  "10b4731c-0b5a-4845-b3f3-52571c33abda",
                  "3d21ee38-8eda-4fc0-a5fa-dbd8c40c98ea",
                  "46250c24-4746-43d5-9b75-22df834ff16c",
                  "98e124cf-0f1b-461a-a79e-9452e579dba5"
                ],
                "missing": [],
                "extras": [],
                "wrongOrdered": [],
                "id": "dda23219-67b3-4ad7-aba4-de1290957e8a",
                "type": "set-verification-result"
              },
              {
                "spec": "set2",
                "matches": [
                  "28d97c04-2e31-498f-bdb2-0726250bd972",
                  "06c0a734-08b9-4e0e-bb16-95e34b4c8d78",
                  "e558de2a-52f5-40e9-828a-ee1be17a5f06",
                  "066f39a5-aa53-48d4-91e3-5561ed6ca80c",
                  "e4e1d948-04f3-4a80-8285-5ab7b5a8554f"
                ],
                "missing": [],
                "extras": [],
                "wrongOrdered": [],
                "id": "9e9f8eb6-070e-489f-86fc-1192ffe0ea46",
                "type": "set-verification-result"
              }
            ],
            "performance": [
              {
                "type": "Specification",
                "subject": "Successful OrderedStrings",
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "Rows",
                "start": 1,
                "end": 1,
                "duration": 0
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
              }
            ],
            "attempts": 1,
            "aborted": false,
            "time": "7:53 AM",
            "counts": {
              "rights": 10,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                            "id": "2730c0ba-c927-4abb-99a0-d663d680fbc9"
                          },
                          {
                            "key": "rows",
                            "cells": {
                              "Name": "b"
                            },
                            "collections": [],
                            "id": "422aa548-e515-4d56-9e2f-1105110f8f48"
                          },
                          {
                            "key": "rows",
                            "cells": {
                              "Name": "c"
                            },
                            "collections": [],
                            "id": "de822810-7d6c-46a8-b608-311fc8830475"
                          }
                        ],
                        "activeCells": {},
                        "id": "1"
                      }
                    ],
                    "id": "7ab15176-af9d-467b-bbfa-95ff591d68ab"
                  }
                ],
                "activeCells": {},
                "id": "5a75fc66-2211-431f-9fef-521c19540910"
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
            "time": "7:53 AM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 1,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                            "id": "52df8958-0a77-4164-a78e-a46a10d42942"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Amount": "200.2",
                              "Date": "TODAY+1",
                              "Name": "Drill"
                            },
                            "collections": [],
                            "id": "d8e88c28-46ce-4fb7-9a8c-a27202428f52"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Amount": "300.3",
                              "Date": "TODAY+2",
                              "Name": "Hammer"
                            },
                            "collections": [],
                            "id": "6d4985ae-793f-4e1a-a073-195893c19fed"
                          }
                        ],
                        "activeCells": {},
                        "id": "cb3b3e18-252d-423c-ae40-4edfa68e8f81"
                      }
                    ],
                    "id": "26f8d7f1-59ae-4fce-8418-0bd0ed70931b"
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
                            "id": "13e81ea9-3196-41c6-973a-5f35685c1336"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Amount": "300.3",
                              "Date": "TODAY+2",
                              "Name": "Hammer"
                            },
                            "collections": [],
                            "id": "ba5aebc8-f7f2-438e-83da-f34f3eff0dbd"
                          }
                        ],
                        "activeCells": {},
                        "id": "51c5726c-dfa3-4c06-8dfe-c26ed34cbd73"
                      }
                    ],
                    "id": "dc751827-40d2-424a-88d1-2612e2e32c88"
                  }
                ],
                "activeCells": {},
                "id": "26514a84-8116-4c14-b995-1191d5acf1ba"
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
                "id": "52df8958-0a77-4164-a78e-a46a10d42942",
                "spec": "set4",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "52df8958-0a77-4164-a78e-a46a10d42942",
                "spec": "set4",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "52df8958-0a77-4164-a78e-a46a10d42942",
                "spec": "set4",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "d8e88c28-46ce-4fb7-9a8c-a27202428f52",
                "spec": "set4",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "d8e88c28-46ce-4fb7-9a8c-a27202428f52",
                "spec": "set4",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "d8e88c28-46ce-4fb7-9a8c-a27202428f52",
                "spec": "set4",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6d4985ae-793f-4e1a-a073-195893c19fed",
                "spec": "set4",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6d4985ae-793f-4e1a-a073-195893c19fed",
                "spec": "set4",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6d4985ae-793f-4e1a-a073-195893c19fed",
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
                "id": "13e81ea9-3196-41c6-973a-5f35685c1336",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                            "id": "e567eb15-0ed8-4470-8179-315cf3706b1e"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Josh"
                            },
                            "collections": [],
                            "id": "9a73184b-8cb3-4ebf-b88b-f3340f6b845a"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Gary"
                            },
                            "collections": [],
                            "id": "daca617f-0e87-4188-ab6d-0b3b76b3b4c3"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Kevin"
                            },
                            "collections": [],
                            "id": "bfb42521-68c3-4045-b8a7-4f1f9d96c98c"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Chad"
                            },
                            "collections": [],
                            "id": "00deafd5-9ffc-4ab8-ab12-c9352642445f"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Rand"
                            },
                            "collections": [],
                            "id": "5856779d-ebf2-41f5-97be-1e684124f19a"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Perrin"
                            },
                            "collections": [],
                            "id": "a04056f2-1710-4e62-9e60-1783a2115931"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Mat"
                            },
                            "collections": [],
                            "id": "491ddbac-ace2-41ec-bf10-f60c4d1b3c06"
                          }
                        ],
                        "activeCells": {},
                        "id": "61c521ec-1d41-4492-b00c-695d8cc4440b"
                      }
                    ],
                    "id": "be426c95-9121-43ce-a84f-a9a1221307c4"
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
                            "id": "9ad47269-2f5c-4a54-86d9-e1889fdb09c6"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Josh"
                            },
                            "collections": [],
                            "id": "c0f62aee-7544-434e-9d0d-f88c0b8c7122"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Gary"
                            },
                            "collections": [],
                            "id": "96906ac2-fde8-418e-b983-af05b0a26408"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Chad"
                            },
                            "collections": [],
                            "id": "65245917-f17a-451d-81fa-7be3dc8baf64"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Kevin"
                            },
                            "collections": [],
                            "id": "f7a905ec-e6fb-4747-8da3-5cad54715176"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Egwene"
                            },
                            "collections": [],
                            "id": "3c3fdef4-9072-4294-8f33-c2a146da0bdd"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Perrin"
                            },
                            "collections": [],
                            "id": "af1c96f4-2de4-4f3d-a101-884ae81ee797"
                          }
                        ],
                        "activeCells": {},
                        "id": "4f091fff-8c47-4a91-90c4-19c01477dddb"
                      }
                    ],
                    "id": "33daf30f-8cae-4cf6-aa64-55271e7088d5"
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
                "id": "e567eb15-0ed8-4470-8179-315cf3706b1e",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "9a73184b-8cb3-4ebf-b88b-f3340f6b845a",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "daca617f-0e87-4188-ab6d-0b3b76b3b4c3",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "bfb42521-68c3-4045-b8a7-4f1f9d96c98c",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "00deafd5-9ffc-4ab8-ab12-c9352642445f",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "5856779d-ebf2-41f5-97be-1e684124f19a",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "a04056f2-1710-4e62-9e60-1783a2115931",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "491ddbac-ace2-41ec-bf10-f60c4d1b3c06",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "spec": "set5",
                "matches": [
                  "9ad47269-2f5c-4a54-86d9-e1889fdb09c6",
                  "c0f62aee-7544-434e-9d0d-f88c0b8c7122",
                  "96906ac2-fde8-418e-b983-af05b0a26408",
                  "af1c96f4-2de4-4f3d-a101-884ae81ee797"
                ],
                "missing": [
                  "3c3fdef4-9072-4294-8f33-c2a146da0bdd"
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
                    "id": "65245917-f17a-451d-81fa-7be3dc8baf64"
                  },
                  {
                    "actual": 4,
                    "id": "f7a905ec-e6fb-4747-8da3-5cad54715176"
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
            "time": "7:53 AM",
            "counts": {
              "rights": 4,
              "wrongs": 5,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                            "id": "da2cfda7-2b24-4e18-b1fd-411d7c5d9fb0"
                          },
                          {
                            "key": "IsPositive-row",
                            "cells": {
                              "number": "-5",
                              "IsEven": "false"
                            },
                            "collections": [],
                            "id": "f0f53e25-4ab4-4142-8b2a-2566139ba0d2"
                          }
                        ],
                        "activeCells": {},
                        "id": "a481d76f-66ae-464f-8c6f-2739e4c39d3e"
                      }
                    ],
                    "id": "1aceca3a-5307-4ac1-89db-319b523d94e7"
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
                "id": "da2cfda7-2b24-4e18-b1fd-411d7c5d9fb0",
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
                "id": "f0f53e25-4ab4-4142-8b2a-2566139ba0d2",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 2,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                            "id": "cf6ff1f6-cc37-49fd-9471-fbb5b63bbd30"
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
                            "id": "c8d6e619-85de-4bd3-95ef-2ef5a7bb6134"
                          }
                        ],
                        "activeCells": {},
                        "id": "4621025b-1259-4ba6-b8fe-3c33ccd105bd"
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
                            "id": "c81188ac-b1bb-4102-87ad-a3ab637dd82a"
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
                            "id": "51227b6c-26bb-4db4-b435-bfe0da1580d8"
                          }
                        ],
                        "activeCells": {},
                        "id": "aad0e1b9-7d81-48f0-b152-6aa86a3296a3"
                      }
                    ],
                    "id": "19253573-88d8-4eab-ac67-c26f1c69600c"
                  }
                ],
                "activeCells": {},
                "id": "335436e9-62fb-4091-a253-492e31b2ba48"
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
                "id": "c81188ac-b1bb-4102-87ad-a3ab637dd82a",
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
                "id": "51227b6c-26bb-4db4-b435-bfe0da1580d8",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 2,
              "wrongs": 2,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                            "id": "a5ad9eb1-4381-4a4b-a62d-529c2991f057"
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
                            "id": "1830181e-e642-4c4a-9f01-78bf3dc6bba8"
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
                            "id": "6bf7e990-80ef-4c2c-b99b-96d96a50d8d9"
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
                            "id": "6a03456d-b5d8-4e50-bf75-61a80412fbf1"
                          }
                        ],
                        "activeCells": {
                          "b": false,
                          "c": false
                        },
                        "id": "3c402eda-44ab-48b2-bc1e-e83730c123cf"
                      }
                    ],
                    "id": "0520e866-ed42-43ec-86c2-57a545381b72"
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
                "id": "a5ad9eb1-4381-4a4b-a62d-529c2991f057",
                "spec": "table3",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "1830181e-e642-4c4a-9f01-78bf3dc6bba8",
                "spec": "table3",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6bf7e990-80ef-4c2c-b99b-96d96a50d8d9",
                "spec": "table3",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6a03456d-b5d8-4e50-bf75-61a80412fbf1",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
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
                            "id": "b614b771-acef-4a24-9d9c-c34457cc3e7f"
                          }
                        ],
                        "activeCells": {},
                        "id": "before"
                      }
                    ],
                    "id": "63abc259-0840-43f9-8e4c-f5c9a3d05443"
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
                            "id": "4230c72b-7495-4b0d-9d21-3e156e7d2494"
                          }
                        ],
                        "activeCells": {},
                        "id": "after"
                      }
                    ],
                    "id": "8268a1dc-34ff-48c1-8dbf-80a307336d7f"
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
                "id": "b614b771-acef-4a24-9d9c-c34457cc3e7f",
                "spec": "table4",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "4230c72b-7495-4b0d-9d21-3e156e7d2494",
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
                "subject": "BeforeThrowsErrorBefore",
                "start": 0,
                "end": 0,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "BeforeThrowsError:Row:0",
                "start": 0,
                "end": 1,
                "duration": 1
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
            "time": "7:53 AM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 2,
              "invalids": 0
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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
            "last-updated": "Thursday, January 07, 2016",
            "steps": [
              {
                "key": "Table",
                "type": "section",
                "steps": [
                  {
                    "text": "Table by the ExposeAsTable attribute",
                    "type": "comment",
                    "id": "0df5d77f-734c-4f9e-9c47-8ce815658785"
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
                            "id": "43d086ae-2250-4073-99e7-f4b3a57bf323"
                          },
                          {
                            "key": "sum",
                            "cells": {
                              "x": "2",
                              "y": "2",
                              "sum": "5"
                            },
                            "collections": [],
                            "id": "1437d9b2-81ad-4b84-8dba-7b87ea256aec"
                          }
                        ],
                        "activeCells": {},
                        "id": "2ef57340-b09c-40d4-834b-574479097fdd"
                      }
                    ],
                    "id": "c00070b9-6be1-4ba8-8663-f6bad7873844"
                  },
                  {
                    "text": "Table fixture from script",
                    "type": "comment",
                    "id": "2e5efdf0-0229-46d7-8e5c-e6f0ebc9c441"
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
                            "id": "a0b8e31b-f95f-416b-b602-da6d6a9ddb71"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "x": "3",
                              "y": "3",
                              "product": "****"
                            },
                            "collections": [],
                            "id": "b8809577-062a-4bca-9ac3-59984f7c7984"
                          }
                        ],
                        "activeCells": {},
                        "id": "d60a062f-7fa1-425c-b9ff-ef52dafe267c"
                      }
                    ],
                    "id": "1a3c5844-7550-4662-85bc-64326095d2a1"
                  }
                ],
                "activeCells": {},
                "id": "3262b79a-c9e4-4d40-b0df-18c6ac898b70"
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
                "id": "43d086ae-2250-4073-99e7-f4b3a57bf323",
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
                "id": "1437d9b2-81ad-4b84-8dba-7b87ea256aec",
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
                "id": "a0b8e31b-f95f-416b-b602-da6d6a9ddb71",
                "spec": "table5",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "a0b8e31b-f95f-416b-b602-da6d6a9ddb71",
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
                "id": "a0b8e31b-f95f-416b-b602-da6d6a9ddb71",
                "spec": "table5",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "b8809577-062a-4bca-9ac3-59984f7c7984",
                "spec": "table5",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "b8809577-062a-4bca-9ac3-59984f7c7984",
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
                "id": "b8809577-062a-4bca-9ac3-59984f7c7984",
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
            "time": "7:53 AM",
            "counts": {
              "rights": 2,
              "wrongs": 2,
              "errors": 0,
              "invalids": 6
            }
          },
          "time": "7:53:30 AM",
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
          "last-updated": "Thursday, January 07, 2016",
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