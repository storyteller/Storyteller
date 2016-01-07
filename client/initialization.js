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
    "time": "2:05 PM",
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
          "suites": [],
          "name": "Embedded",
          "path": "Embedded",
          "specs": [
            "embeds"
          ]
        },
        {
          "suites": [],
          "name": "General",
          "path": "General",
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
          "path": "Paragraphs",
          "specs": [
            "paragraph1",
            "paragraph2"
          ]
        },
        {
          "suites": [],
          "name": "Sentences",
          "path": "Sentences",
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
          "path": "Sets",
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
          "path": "Tables",
          "specs": [
            "table1",
            "table2",
            "table3",
            "table4",
            "table5"
          ]
        }
      ],
      "name": "",
      "path": "",
      "specs": []
    },
    "specs": [
      {
        "last_result": null,
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
                    "id": "b87c2ef9-19cb-44f0-8315-096d8325972f"
                  },
                  {
                    "key": "TheAddressShouldBe",
                    "cells": {
                      "Address1": "2035 Ozark",
                      "Address2": "Apt 3",
                      "City": "Carthage"
                    },
                    "collections": [],
                    "id": "75f7c1be-32a6-420f-84b0-ba2e8cc35d85"
                  },
                  {
                    "key": "TheAddressShouldBe",
                    "cells": {
                      "Address1": "wrong",
                      "Address2": "wrong",
                      "City": "wrong"
                    },
                    "collections": [],
                    "id": "fbc9f84f-f1d2-4089-a484-863ecb710c7f"
                  }
                ],
                "activeCells": {},
                "id": "de90c67a-f775-46df-868f-77a3d05d9fcc"
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
                "id": "b87c2ef9-19cb-44f0-8315-096d8325972f",
                "spec": "general1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "b87c2ef9-19cb-44f0-8315-096d8325972f",
                "spec": "general1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "b87c2ef9-19cb-44f0-8315-096d8325972f",
                "spec": "general1",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "b87c2ef9-19cb-44f0-8315-096d8325972f",
                "spec": "general1",
                "position": "4",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "b87c2ef9-19cb-44f0-8315-096d8325972f",
                "spec": "general1",
                "position": "5",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "b87c2ef9-19cb-44f0-8315-096d8325972f",
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
                "id": "75f7c1be-32a6-420f-84b0-ba2e8cc35d85",
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
                "id": "75f7c1be-32a6-420f-84b0-ba2e8cc35d85",
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
                "id": "75f7c1be-32a6-420f-84b0-ba2e8cc35d85",
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
                "id": "fbc9f84f-f1d2-4089-a484-863ecb710c7f",
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
                "id": "fbc9f84f-f1d2-4089-a484-863ecb710c7f",
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
                "id": "fbc9f84f-f1d2-4089-a484-863ecb710c7f",
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
                "end": 151,
                "duration": 151
              },
              {
                "type": "Context",
                "subject": "Creation",
                "start": 2,
                "end": 9,
                "duration": 7
              },
              {
                "type": "Fixture",
                "subject": "CheckObject:SetUp",
                "start": 145,
                "end": 145,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:0",
                "start": 145,
                "end": 145,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:1",
                "start": 146,
                "end": 148,
                "duration": 2
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:2",
                "start": 148,
                "end": 148,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:3",
                "start": 148,
                "end": 148,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:4",
                "start": 148,
                "end": 148,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:5",
                "start": 148,
                "end": 148,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "IfTheAddressIs:6",
                "start": 148,
                "end": 148,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:0",
                "start": 148,
                "end": 150,
                "duration": 2
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:1",
                "start": 150,
                "end": 150,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:2",
                "start": 150,
                "end": 150,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:0",
                "start": 150,
                "end": 150,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:1",
                "start": 150,
                "end": 150,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheAddressShouldBe:2",
                "start": 150,
                "end": 150,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "CheckObject:TearDown",
                "start": 150,
                "end": 150,
                "duration": 0
              }
            ],
            "duration": 151,
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
            "time": "2:05 PM",
            "counts": {
              "rights": 3,
              "wrongs": 3,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Check properties",
          "path": "General/Check properties",
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
                    "id": "e08a3438-1cd1-4179-9387-749580bcbb4a"
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
                "id": "e08a3438-1cd1-4179-9387-749580bcbb4a",
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
                "end": 3,
                "duration": 3
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
                "subject": "SometimesSlow:SetUp",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Slow",
                "start": 1,
                "end": 2,
                "duration": 1
              },
              {
                "type": "Fixture",
                "subject": "SometimesSlow:TearDown",
                "start": 2,
                "end": 2,
                "duration": 0
              }
            ],
            "duration": 3,
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
            "time": "2:05 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Occasionally Times Out",
          "path": "General/Occasionally Times Out",
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
                    "id": "98e8e127-3b56-47aa-b578-d94e33081d62"
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
                            "id": "cc21b8af-edcf-42b2-9a39-d9e348ac9184"
                          },
                          {
                            "key": "table",
                            "cells": {
                              "first": "Harold",
                              "last": "Miller",
                              "fullname": "Harold Mueller"
                            },
                            "collections": [],
                            "id": "3c7c0522-7582-4e6b-b2a2-e893b9bb5d29"
                          }
                        ],
                        "activeCells": {},
                        "id": "d14b2f32-eb40-4a2d-8495-84efbf5e387a"
                      }
                    ],
                    "id": "4c76c916-9cdf-494f-bc5d-10d9c48c0f34"
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
                            "id": "a5ba1856-d63a-409b-9022-986fdce8383c"
                          }
                        ],
                        "activeCells": {},
                        "id": "69189b26-a321-472e-b680-6ab04333958e"
                      }
                    ],
                    "id": "fe1f5747-1ebc-4c16-b18f-498a380bdda3"
                  },
                  {
                    "key": "TheEnumOptionIs",
                    "cells": {
                      "option": "FirstOption",
                      "selectedOption": "0"
                    },
                    "collections": [],
                    "id": "43745324-2f56-472d-85f2-3a40f24438a0"
                  }
                ],
                "activeCells": {},
                "id": "449363c4-ff40-4069-bc76-9548f7dd0035"
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
                "id": "98e8e127-3b56-47aa-b578-d94e33081d62",
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
                "id": "cc21b8af-edcf-42b2-9a39-d9e348ac9184",
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
                "id": "3c7c0522-7582-4e6b-b2a2-e893b9bb5d29",
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
                "id": "a5ba1856-d63a-409b-9022-986fdce8383c",
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
                "id": "43745324-2f56-472d-85f2-3a40f24438a0",
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
                "start": 2,
                "end": 3,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "TheEnumOptionIs",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "SelectionList:TearDown",
                "start": 3,
                "end": 3,
                "duration": 0
              }
            ],
            "duration": 3,
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
            "time": "2:05 PM",
            "counts": {
              "rights": 4,
              "wrongs": 1,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Selection List Values",
          "path": "General/Selection List Values",
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
                    "id": "30fee4c3-80d0-4f2f-919a-e47ff168c210"
                  },
                  {
                    "key": "Check",
                    "cells": {
                      "value": "5"
                    },
                    "collections": [],
                    "id": "d07c301c-2a37-4d25-812c-88f3ce5646c4"
                  },
                  {
                    "key": "Set",
                    "cells": {
                      "value": "6"
                    },
                    "collections": [],
                    "id": "e8e8b418-e543-4ee0-9244-61cfe8337099"
                  },
                  {
                    "key": "Check",
                    "cells": {
                      "value": "7"
                    },
                    "collections": [],
                    "id": "45c4b533-b7a2-4682-a331-e8e3dfdaed9c"
                  },
                  {
                    "key": "Set",
                    "cells": {
                      "value": "abc"
                    },
                    "collections": [],
                    "id": "c1d82a2f-d789-4ec9-ae18-4a039d5a4a35"
                  }
                ],
                "activeCells": {},
                "id": "85aa2b91-a0f2-42bc-a6e7-9b127a3961f0"
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
                "id": "85aa2b91-a0f2-42bc-a6e7-9b127a3961f0",
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
                "subject": "Service:SetUp",
                "start": 1,
                "end": 2,
                "duration": 1
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
                "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#39;setup&#39; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#39;Service&#39; does not exist\r\n   at StoryTeller.Model.MissingFixture.SetUp() in Z:\\code\\storyteller\\src\\StoryTeller\\Model\\MissingFixture.cs:line 15\r\n   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x) in Z:\\code\\storyteller\\src\\StoryTeller\\Model\\Section.cs:line 66\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 20\r\n   --- End of inner exception stack trace ---\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 32\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in Z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
                "title": "Logged Exceptions in Storyteller",
                "count": 1,
                "short_title": "Exceptions"
              }
            ],
            "attempts": 1,
            "aborted": false,
            "time": "2:05 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Services",
          "path": "General/Services",
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
                            "id": "61ac308d-bdb2-4ecb-a96b-fb51d3376120"
                          }
                        ],
                        "activeCells": {},
                        "id": "2e87da8f-d2bb-45a0-a375-39e38e3f9564"
                      }
                    ],
                    "id": "bad2ec63-3b6a-4db5-949c-d1ee48e5932e"
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
                "id": "61ac308d-bdb2-4ecb-a96b-fb51d3376120",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 1,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "System Defined Lists and Runtime Converters",
          "path": "General/System Defined Lists and Runtime Converters",
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
                    "id": "d805fa89-cc62-4c1b-aa76-ea77e14eebf0"
                  },
                  {
                    "key": "BadGrammar2",
                    "cells": {},
                    "collections": [],
                    "id": "9208ee56-9913-4117-81c1-e8b3b6a570bc"
                  },
                  {
                    "key": "BadGrammar3",
                    "cells": {},
                    "collections": [],
                    "id": "834a3348-4fd0-49c0-a7f4-fa5cd1e6c89d"
                  }
                ],
                "activeCells": {},
                "id": "5c62266d-ecb9-410d-9c7b-a3000f1cd138"
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
                "id": "d805fa89-cc62-4c1b-aa76-ea77e14eebf0",
                "spec": "general4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "error",
                "error": "Grammar 'BadGrammar2' is not implemented",
                "cells": [],
                "id": "9208ee56-9913-4117-81c1-e8b3b6a570bc",
                "spec": "general4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "error",
                "error": "Grammar 'BadGrammar3' is not implemented",
                "cells": [],
                "id": "834a3348-4fd0-49c0-a7f4-fa5cd1e6c89d",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 3,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Test with Bad Grammar Name",
          "path": "General/Test with Bad Grammar Name",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Test with Missing Fixture Name",
          "path": "General/Test with Missing Fixture Name",
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
          "path": "Paragraphs/Composite with Errors",
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
                    "id": "180b7580-0206-457e-8bc1-62818f442dee"
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
                    "id": "ab427446-4297-4c93-b516-5129577c11b5"
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
                            "id": "684ff4bd-cd13-4726-bf9d-a2dc39aba48e"
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
                            "id": "57a63d49-389a-4b68-8d64-da495f1bd177"
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
                            "id": "6a1b219e-4834-4d6c-a1e9-c4d5fda9b9be"
                          }
                        ],
                        "activeCells": {},
                        "id": "e3764ac2-2161-4fc5-818d-9ea33f58897f"
                      }
                    ],
                    "id": "b561bcd9-40c7-48e0-a044-d742e5e8423a"
                  }
                ],
                "activeCells": {},
                "id": "c87fef43-f94b-4e34-b39b-f6b472669d08"
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
                "id": "180b7580-0206-457e-8bc1-62818f442dee",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "180b7580-0206-457e-8bc1-62818f442dee",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "180b7580-0206-457e-8bc1-62818f442dee",
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
                "id": "180b7580-0206-457e-8bc1-62818f442dee",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ab427446-4297-4c93-b516-5129577c11b5",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ab427446-4297-4c93-b516-5129577c11b5",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ab427446-4297-4c93-b516-5129577c11b5",
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
                "id": "ab427446-4297-4c93-b516-5129577c11b5",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "684ff4bd-cd13-4726-bf9d-a2dc39aba48e",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "684ff4bd-cd13-4726-bf9d-a2dc39aba48e",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "684ff4bd-cd13-4726-bf9d-a2dc39aba48e",
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
                "id": "684ff4bd-cd13-4726-bf9d-a2dc39aba48e",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "57a63d49-389a-4b68-8d64-da495f1bd177",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "57a63d49-389a-4b68-8d64-da495f1bd177",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "57a63d49-389a-4b68-8d64-da495f1bd177",
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
                "id": "57a63d49-389a-4b68-8d64-da495f1bd177",
                "spec": "paragraph2",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6a1b219e-4834-4d6c-a1e9-c4d5fda9b9be",
                "spec": "paragraph2",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6a1b219e-4834-4d6c-a1e9-c4d5fda9b9be",
                "spec": "paragraph2",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6a1b219e-4834-4d6c-a1e9-c4d5fda9b9be",
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
                "id": "6a1b219e-4834-4d6c-a1e9-c4d5fda9b9be",
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
                "type": "Fixture",
                "subject": "Composite:TearDown",
                "start": 4,
                "end": 4,
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
            "time": "2:05 PM",
            "counts": {
              "rights": 2,
              "wrongs": 3,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Simple Composite",
          "path": "Paragraphs/Simple Composite",
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
                    "id": "fc66f1c3-aad6-4be5-8ca7-b6c5d2608d1c"
                  },
                  {
                    "key": "AddTo5",
                    "cells": {
                      "x": "5",
                      "returnValue": "9",
                      "y": "5"
                    },
                    "collections": [],
                    "id": "841310a5-2755-4839-bc86-ddefa0468389"
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
                "id": "fc66f1c3-aad6-4be5-8ca7-b6c5d2608d1c",
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
                "id": "841310a5-2755-4839-bc86-ddefa0468389",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 1,
              "wrongs": 1,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Currying",
          "path": "Sentences/Currying",
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
          "path": "Sentences/Facts",
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
                    "id": "6abdaabf-d6a0-4a58-95c0-e55ecb527254"
                  },
                  {
                    "key": "AddingTo5",
                    "cells": {
                      "y": "12",
                      "returnValue": "15",
                      "x": "5"
                    },
                    "collections": [],
                    "id": "12109811-7f18-4ea4-a86a-b658a3940eb3"
                  }
                ],
                "activeCells": {},
                "id": "b5d3abde-fd8d-41e9-b75e-a0ba185e5879"
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
                "id": "6abdaabf-d6a0-4a58-95c0-e55ecb527254",
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
                "id": "12109811-7f18-4ea4-a86a-b658a3940eb3",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 1,
              "wrongs": 1,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Importing and Currying",
          "path": "Sentences/Importing and Currying",
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
                    "id": "7adc8f1b-d65c-4019-be52-bf4b598dec46"
                  },
                  {
                    "key": "MultiplyThenAdd",
                    "cells": {
                      "multiplier": "3",
                      "delta": "4"
                    },
                    "collections": [],
                    "id": "55f95a3a-9734-4cab-824a-4067a7ddeed5"
                  },
                  {
                    "key": "Subtract",
                    "cells": {
                      "operand": "2"
                    },
                    "collections": [],
                    "id": "831c7343-6374-4c32-b1a5-63d9809badc7"
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
                    "id": "760472f0-727d-4916-b846-5c899d322b29"
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
                "id": "7adc8f1b-d65c-4019-be52-bf4b598dec46",
                "spec": "sentence4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "55f95a3a-9734-4cab-824a-4067a7ddeed5",
                "spec": "sentence4",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "831c7343-6374-4c32-b1a5-63d9809badc7",
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
                "id": "760472f0-727d-4916-b846-5c899d322b29",
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
                "end": 1,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "StartWithTheNumber",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "MultiplyThenAdd",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Subtract",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheValueShouldBe",
                "start": 1,
                "end": 1,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "TheSumOf",
                "start": 1,
                "end": 2,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "ThisLineIsAlwaysTrue",
                "start": 2,
                "end": 2,
                "duration": 0
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
            "time": "2:05 PM",
            "counts": {
              "rights": 2,
              "wrongs": 2,
              "errors": 1,
              "invalids": 1
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Sentences",
          "path": "Sentences/Sentences",
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
                            "id": "82b8e8ab-f9f9-4379-9d59-0688e5d1a711"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Name": "Drill",
                              "Amount": "200.2",
                              "Date": "TODAY+1"
                            },
                            "collections": [],
                            "id": "ad5438dc-2f23-44ba-8494-08b30132f9bc"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Name": "Hammer",
                              "Amount": "300.3",
                              "Date": "TODAY+2"
                            },
                            "collections": [],
                            "id": "e5bd22ef-b1b4-49d8-b106-d8381fd37d42"
                          }
                        ],
                        "activeCells": {},
                        "id": "c99483d6-c399-4719-b2ba-23e528bd6b83"
                      }
                    ],
                    "id": "c9994629-9fdf-490e-9468-516aa1b17cc9"
                  },
                  {
                    "text": "Completely successful ordering",
                    "type": "comment",
                    "id": "a4b5f283-61c7-40a2-a7bd-e7d63ac1930f"
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
                    "id": "d64f820e-cd7c-4790-8b3a-922c82108f04"
                  },
                  {
                    "text": "Out of order",
                    "type": "comment",
                    "id": "797315ef-09b0-4821-aa8f-f8ce6a6135a5"
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
                    "id": "608719b5-66a9-44ea-816b-a7ac372d9e42"
                  },
                  {
                    "text": "Should have one exra",
                    "type": "comment",
                    "id": "a794d161-a16b-4c1b-805d-048d252a69d8"
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
                            "id": "cf63b505-a410-4e05-bbd9-45f397164bcf"
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
                            "id": "834b6ab3-34bb-4f32-9ba8-a356a3a7461e"
                          }
                        ],
                        "activeCells": {},
                        "id": "9"
                      }
                    ],
                    "id": "53fc9ec3-7cc6-4b0f-bcf2-c71b7ade0a67"
                  },
                  {
                    "text": "Should mark one expected result as missing",
                    "type": "comment",
                    "id": "213277e5-6053-41cb-9297-cd6ffe0bc2ef"
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
                            "id": "889dc424-5b94-4e27-91ca-a8c0f1de43b2"
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
                            "id": "bd6cc15d-7591-4115-a7bb-0ded9fe0a7f8"
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
                            "id": "afb64668-1574-4cd5-8ca1-7cfb2b71c747"
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
                    "id": "f0ec6aea-bfad-4c4a-94f5-0e770f27d365"
                  },
                  {
                    "text": "One syntax error",
                    "type": "comment",
                    "id": "69d78aac-dac7-48df-afa0-6d399d8b94f8"
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
                            "id": "e2ab7d4f-25c0-438c-a46a-bbae5fc05cf8"
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
                            "id": "c9b0b720-bfb7-494e-bb18-77023a7ba33c"
                          }
                        ],
                        "activeCells": {},
                        "id": "0e22af71-a519-42d5-bf66-62e6d3355f90"
                      }
                    ],
                    "id": "1e53b34f-e900-4fec-bf26-f5547178fdfa"
                  }
                ],
                "activeCells": {},
                "id": "23d98692-2c0b-4f79-b87e-34aa89b6608b"
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
                "id": "82b8e8ab-f9f9-4379-9d59-0688e5d1a711",
                "spec": "set1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "82b8e8ab-f9f9-4379-9d59-0688e5d1a711",
                "spec": "set1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "82b8e8ab-f9f9-4379-9d59-0688e5d1a711",
                "spec": "set1",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ad5438dc-2f23-44ba-8494-08b30132f9bc",
                "spec": "set1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ad5438dc-2f23-44ba-8494-08b30132f9bc",
                "spec": "set1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ad5438dc-2f23-44ba-8494-08b30132f9bc",
                "spec": "set1",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "e5bd22ef-b1b4-49d8-b106-d8381fd37d42",
                "spec": "set1",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "e5bd22ef-b1b4-49d8-b106-d8381fd37d42",
                "spec": "set1",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "e5bd22ef-b1b4-49d8-b106-d8381fd37d42",
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
                  "cf63b505-a410-4e05-bbd9-45f397164bcf",
                  "834b6ab3-34bb-4f32-9ba8-a356a3a7461e"
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
                  "889dc424-5b94-4e27-91ca-a8c0f1de43b2",
                  "bd6cc15d-7591-4115-a7bb-0ded9fe0a7f8",
                  "afb64668-1574-4cd5-8ca1-7cfb2b71c747"
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
                "end": 8,
                "duration": 8
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
                "start": 2,
                "end": 7,
                "duration": 5
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
                "end": 8,
                "duration": 1
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 8,
                "end": 8,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "rows",
                "start": 8,
                "end": 8,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "Sets:TearDown",
                "start": 8,
                "end": 8,
                "duration": 0
              }
            ],
            "duration": 8,
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
            "time": "2:05 PM",
            "counts": {
              "rights": 8,
              "wrongs": 5,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Ordered Set",
          "path": "Sets/Ordered Set",
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
                            "id": "8eb44525-43e2-4457-b188-1e5059681228"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Josh"
                            },
                            "collections": [],
                            "id": "941c9960-3f78-4470-86be-5cb411eed4f8"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Gary"
                            },
                            "collections": [],
                            "id": "0a903c3a-9d82-4a0b-b201-df72de84d29c"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Kevin"
                            },
                            "collections": [],
                            "id": "372f3a5b-dee9-4963-8b82-f542623c44d6"
                          },
                          {
                            "key": "name",
                            "cells": {
                              "name": "Chad"
                            },
                            "collections": [],
                            "id": "6a0b8e44-de31-462a-94d2-98ba6a73af62"
                          }
                        ],
                        "activeCells": {},
                        "id": "4ce01373-b28f-4421-b67c-adb45edaa1a0"
                      }
                    ],
                    "id": "b5246e30-7fad-4340-881d-d5ae6f934e06"
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
                            "id": "4e97e108-3f65-4085-9cba-44d589aad4d7"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Josh",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "729670b3-e765-49e8-b350-9232de733353"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Gary",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "5f87a195-3c69-4aeb-a1ff-2445d5c420d1"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Kevin",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "240f4be5-2ce4-47e5-915b-184f025c5836"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Chad",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "08100b48-a89c-4bca-93ec-28a11aef17f0"
                          }
                        ],
                        "activeCells": {},
                        "id": "ea361cb4-705d-42ac-a71d-71ac128c1746"
                      }
                    ],
                    "id": "d650a53e-46ef-4d7d-86d1-0c756c40a6a9"
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
                            "id": "81aee8bd-d42b-441d-935d-870e0128bc48"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Chad",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "175dc72a-5b6f-4974-954d-b7bde27c822e"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Jeremy",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "0c283914-e3d6-4e8b-b770-b66ae584847a"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Josh",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "08712fe4-e0da-4225-b435-0031432e8ff7"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "expected": "Gary",
                              "Index": ""
                            },
                            "collections": [],
                            "id": "f1e57bf0-e4d4-445d-a2b5-89a4f295abe1"
                          }
                        ],
                        "activeCells": {},
                        "id": "996031b1-2d60-461e-8c56-a621f998270d"
                      }
                    ],
                    "id": "5f54ff82-e144-4622-b5de-3be008f93ccd"
                  }
                ],
                "activeCells": {},
                "id": "a193db6e-3ed9-4d23-913f-c19712375958"
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
                "id": "8eb44525-43e2-4457-b188-1e5059681228",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "941c9960-3f78-4470-86be-5cb411eed4f8",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "0a903c3a-9d82-4a0b-b201-df72de84d29c",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "372f3a5b-dee9-4963-8b82-f542623c44d6",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6a0b8e44-de31-462a-94d2-98ba6a73af62",
                "spec": "set2",
                "position": null,
                "type": "step-result"
              },
              {
                "spec": "set2",
                "matches": [
                  "4e97e108-3f65-4085-9cba-44d589aad4d7",
                  "729670b3-e765-49e8-b350-9232de733353",
                  "5f87a195-3c69-4aeb-a1ff-2445d5c420d1",
                  "240f4be5-2ce4-47e5-915b-184f025c5836",
                  "08100b48-a89c-4bca-93ec-28a11aef17f0"
                ],
                "missing": [],
                "extras": [],
                "wrongOrdered": [],
                "id": "ea361cb4-705d-42ac-a71d-71ac128c1746",
                "type": "set-verification-result"
              },
              {
                "spec": "set2",
                "matches": [
                  "81aee8bd-d42b-441d-935d-870e0128bc48",
                  "175dc72a-5b6f-4974-954d-b7bde27c822e",
                  "0c283914-e3d6-4e8b-b770-b66ae584847a",
                  "08712fe4-e0da-4225-b435-0031432e8ff7",
                  "f1e57bf0-e4d4-445d-a2b5-89a4f295abe1"
                ],
                "missing": [],
                "extras": [],
                "wrongOrdered": [],
                "id": "996031b1-2d60-461e-8c56-a621f998270d",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 10,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Successful OrderedStrings",
          "path": "Sets/Successful OrderedStrings",
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
                            "id": "293bf280-751b-4353-8116-5f35050f35a0"
                          },
                          {
                            "key": "rows",
                            "cells": {
                              "Name": "b"
                            },
                            "collections": [],
                            "id": "5e1cc96e-edd8-4f90-9fca-4c4e2e05105c"
                          },
                          {
                            "key": "rows",
                            "cells": {
                              "Name": "c"
                            },
                            "collections": [],
                            "id": "05803a0b-3395-4a48-9188-9758a31591da"
                          }
                        ],
                        "activeCells": {},
                        "id": "1"
                      }
                    ],
                    "id": "7af49738-c9aa-494d-abf9-c14b5cb857a1"
                  }
                ],
                "activeCells": {},
                "id": "7d9816e4-c3ba-4aba-883e-25d04329d00e"
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
            "time": "2:05 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 1,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Set with Error",
          "path": "Sets/Set with Error",
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
                            "id": "617482f4-e085-4aa4-8be4-4470ac65a193"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Amount": "200.2",
                              "Date": "TODAY+1",
                              "Name": "Drill"
                            },
                            "collections": [],
                            "id": "7acc0c45-c438-4a0c-a3dc-14c44eb49a8b"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Amount": "300.3",
                              "Date": "TODAY+2",
                              "Name": "Hammer"
                            },
                            "collections": [],
                            "id": "d945c232-029f-4c10-885c-811ef3dd1a74"
                          }
                        ],
                        "activeCells": {},
                        "id": "3004b33c-b26e-4cc8-ac66-3ed8d0fc7cc9"
                      }
                    ],
                    "id": "3d77a293-c472-48fc-ae5e-c35f730c8e01"
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
                            "id": "561899b8-224d-45f2-8646-56100a8a3067"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "Amount": "300.3",
                              "Date": "TODAY+2",
                              "Name": "Hammer"
                            },
                            "collections": [],
                            "id": "f3fd5f90-ebae-4d61-b3d5-3643d42a2afc"
                          }
                        ],
                        "activeCells": {},
                        "id": "c4b36d92-4947-4733-b505-b71cd1059f27"
                      }
                    ],
                    "id": "54c3dfd8-7495-4df8-8e32-38aef909e4fe"
                  }
                ],
                "activeCells": {},
                "id": "6e91b34e-0866-46cd-9d03-c85c6aece40b"
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
                "id": "617482f4-e085-4aa4-8be4-4470ac65a193",
                "spec": "set4",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "617482f4-e085-4aa4-8be4-4470ac65a193",
                "spec": "set4",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "617482f4-e085-4aa4-8be4-4470ac65a193",
                "spec": "set4",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "7acc0c45-c438-4a0c-a3dc-14c44eb49a8b",
                "spec": "set4",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "7acc0c45-c438-4a0c-a3dc-14c44eb49a8b",
                "spec": "set4",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "7acc0c45-c438-4a0c-a3dc-14c44eb49a8b",
                "spec": "set4",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "d945c232-029f-4c10-885c-811ef3dd1a74",
                "spec": "set4",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "d945c232-029f-4c10-885c-811ef3dd1a74",
                "spec": "set4",
                "position": "2",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "d945c232-029f-4c10-885c-811ef3dd1a74",
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
                "id": "561899b8-224d-45f2-8646-56100a8a3067",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 1
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Unordered Set",
          "path": "Sets/Unordered Set",
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
                            "id": "ea5f7dfc-97fe-4a25-aadb-ccfc2751837e"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Josh"
                            },
                            "collections": [],
                            "id": "9b37f66f-eea4-46cd-a858-20d4f25ad6d7"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Gary"
                            },
                            "collections": [],
                            "id": "4a12c318-b4a7-4fac-9142-c5ede8044e4d"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Kevin"
                            },
                            "collections": [],
                            "id": "f459b872-c70e-484e-aaea-b2dbd6de806c"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Chad"
                            },
                            "collections": [],
                            "id": "f0567c30-5ea8-4127-9f3b-26a31f9b68fd"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Rand"
                            },
                            "collections": [],
                            "id": "85612022-d20b-41f0-9dcf-36755a6ab4c3"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Perrin"
                            },
                            "collections": [],
                            "id": "030b59fb-d802-41cb-b733-91886b0d254a"
                          },
                          {
                            "key": "TheDataIs-row",
                            "cells": {
                              "name": "Mat"
                            },
                            "collections": [],
                            "id": "13ef176b-8ce4-4b56-bfea-f746e748b417"
                          }
                        ],
                        "activeCells": {},
                        "id": "61c521ec-1d41-4492-b00c-695d8cc4440b"
                      }
                    ],
                    "id": "476a22f7-6396-4f53-a9a1-c7d90c5bb1fe"
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
                            "id": "138626d3-1897-42b6-83fd-a2c9b8a9a369"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Josh"
                            },
                            "collections": [],
                            "id": "95c6a653-e249-44eb-a7ae-13e96a81b71f"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Gary"
                            },
                            "collections": [],
                            "id": "05aa24db-69b5-4505-8d41-918fdb33fd89"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Chad"
                            },
                            "collections": [],
                            "id": "00ea3c78-e3e2-4223-961b-2918edb129c9"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Kevin"
                            },
                            "collections": [],
                            "id": "762da143-ca34-40c8-8438-fa721d478a73"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Egwene"
                            },
                            "collections": [],
                            "id": "8bb43dfc-6984-4284-acff-0b53128303c4"
                          },
                          {
                            "key": "OrderedStringSet-row",
                            "cells": {
                              "expected": "Perrin"
                            },
                            "collections": [],
                            "id": "6260f0c9-41e3-44fa-aadf-ed2ed8ae876e"
                          }
                        ],
                        "activeCells": {},
                        "id": "4f091fff-8c47-4a91-90c4-19c01477dddb"
                      }
                    ],
                    "id": "6cd1ad1b-2fa2-4043-aa79-fec5ef3370a3"
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
                "id": "ea5f7dfc-97fe-4a25-aadb-ccfc2751837e",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "9b37f66f-eea4-46cd-a858-20d4f25ad6d7",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "4a12c318-b4a7-4fac-9142-c5ede8044e4d",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "f459b872-c70e-484e-aaea-b2dbd6de806c",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "f0567c30-5ea8-4127-9f3b-26a31f9b68fd",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "85612022-d20b-41f0-9dcf-36755a6ab4c3",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "030b59fb-d802-41cb-b733-91886b0d254a",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "13ef176b-8ce4-4b56-bfea-f746e748b417",
                "spec": "set5",
                "position": null,
                "type": "step-result"
              },
              {
                "spec": "set5",
                "matches": [
                  "138626d3-1897-42b6-83fd-a2c9b8a9a369",
                  "95c6a653-e249-44eb-a7ae-13e96a81b71f",
                  "05aa24db-69b5-4505-8d41-918fdb33fd89",
                  "6260f0c9-41e3-44fa-aadf-ed2ed8ae876e"
                ],
                "missing": [
                  "8bb43dfc-6984-4284-acff-0b53128303c4"
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
                    "id": "00ea3c78-e3e2-4223-961b-2918edb129c9"
                  },
                  {
                    "actual": 4,
                    "id": "762da143-ca34-40c8-8438-fa721d478a73"
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
            "time": "2:05 PM",
            "counts": {
              "rights": 4,
              "wrongs": 5,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Unsuccessful Ordering",
          "path": "Sets/Unsuccessful Ordering",
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
                            "id": "aee0e378-9874-4f28-b702-c35cef444f75"
                          },
                          {
                            "key": "IsPositive-row",
                            "cells": {
                              "number": "-5",
                              "IsEven": "false"
                            },
                            "collections": [],
                            "id": "d4874f00-308b-41c9-b7ad-719aaac1d12d"
                          }
                        ],
                        "activeCells": {},
                        "id": "a481d76f-66ae-464f-8c6f-2739e4c39d3e"
                      }
                    ],
                    "id": "58db944d-2f28-43c7-8f7f-4f85deea2787"
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
                "id": "aee0e378-9874-4f28-b702-c35cef444f75",
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
                "id": "d4874f00-308b-41c9-b7ad-719aaac1d12d",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 2,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Boolean Results in a Table",
          "path": "Tables/Boolean Results in a Table",
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
                            "id": "84ac1bf5-72a2-4238-b753-2115e4af1ba9"
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
                            "id": "0347a677-4757-418e-85ea-6e16ad4a087d"
                          }
                        ],
                        "activeCells": {},
                        "id": "b981fa3b-cf81-4ebc-96b4-bd197da94ecb"
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
                            "id": "f80e1be6-2735-46a3-9beb-7ff37dfa7606"
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
                            "id": "87343414-6116-472a-b182-3d81742f9e65"
                          }
                        ],
                        "activeCells": {},
                        "id": "a84bbd74-2740-42b1-bc20-04faca00b54c"
                      }
                    ],
                    "id": "a81bd0ce-07b6-4fc8-9708-bb587faaf35b"
                  }
                ],
                "activeCells": {},
                "id": "5b41f40c-ef10-420f-b56f-b0fbf3511a19"
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
                "id": "f80e1be6-2735-46a3-9beb-7ff37dfa7606",
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
                "id": "87343414-6116-472a-b182-3d81742f9e65",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 2,
              "wrongs": 2,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Decision Table",
          "path": "Tables/Decision Table",
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
                            "id": "8c9acd29-458f-4302-ae55-38ce35babef8"
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
                            "id": "45d0e06f-156c-469d-9e90-d335defcd3a0"
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
                            "id": "89db762e-9434-4f16-800a-01877a9baa4d"
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
                            "id": "ac571351-7fc6-4c80-88d5-49d408b872d2"
                          }
                        ],
                        "activeCells": {
                          "b": false,
                          "c": false
                        },
                        "id": "3c402eda-44ab-48b2-bc1e-e83730c123cf"
                      }
                    ],
                    "id": "76934744-e128-46dc-9388-e9180885a6e3"
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
                "id": "8c9acd29-458f-4302-ae55-38ce35babef8",
                "spec": "table3",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "45d0e06f-156c-469d-9e90-d335defcd3a0",
                "spec": "table3",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "89db762e-9434-4f16-800a-01877a9baa4d",
                "spec": "table3",
                "position": null,
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "ac571351-7fc6-4c80-88d5-49d408b872d2",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 0,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Table with Optional Columns",
          "path": "Tables/Table with Optional Columns",
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
                            "id": "c6c478f7-f627-4bdd-80c7-593ed954c112"
                          }
                        ],
                        "activeCells": {},
                        "id": "before"
                      }
                    ],
                    "id": "59bde730-ffd2-432e-a070-169dabdfef54"
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
                            "id": "baad3ba6-812c-4757-81e5-a3f180861751"
                          }
                        ],
                        "activeCells": {},
                        "id": "after"
                      }
                    ],
                    "id": "f01ff700-4e0f-4f68-bed8-16c5e8ccb022"
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
                "id": "c6c478f7-f627-4bdd-80c7-593ed954c112",
                "spec": "table4",
                "position": "0",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "baad3ba6-812c-4757-81e5-a3f180861751",
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
            "time": "2:05 PM",
            "counts": {
              "rights": 0,
              "wrongs": 0,
              "errors": 2,
              "invalids": 0
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Tables with Errors",
          "path": "Tables/Tables with Errors",
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
                    "id": "f7de4e91-327b-4244-8db8-fc3c6d3ed516"
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
                            "id": "bf361adc-01ee-4747-8df7-5829e54d511e"
                          },
                          {
                            "key": "sum",
                            "cells": {
                              "x": "2",
                              "y": "2",
                              "sum": "5"
                            },
                            "collections": [],
                            "id": "ed967c7d-8c54-4fc1-89a2-460a2e0c2069"
                          }
                        ],
                        "activeCells": {},
                        "id": "6c335ab2-6990-4938-83a6-59a2563ada6a"
                      }
                    ],
                    "id": "9e25b1c9-03cf-49c2-bad2-398f23a5815f"
                  },
                  {
                    "text": "Table fixture from script",
                    "type": "comment",
                    "id": "1dd54877-59b2-4ff6-9116-7ac61e236a0d"
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
                            "id": "6a6d5941-f482-43a6-8ac8-a230edd32d76"
                          },
                          {
                            "key": "Rows",
                            "cells": {
                              "x": "3",
                              "y": "3",
                              "product": "****"
                            },
                            "collections": [],
                            "id": "81c9e5e1-3e9e-4c95-b9fc-45e95e832129"
                          }
                        ],
                        "activeCells": {},
                        "id": "493ba8c9-207e-4c9c-82fe-7d02e284cca0"
                      }
                    ],
                    "id": "ee580691-0a82-4de3-8ebd-2933fa25759a"
                  }
                ],
                "activeCells": {},
                "id": "9c1b6470-c7c4-40c3-8636-4ca41e976e3a"
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
                "id": "bf361adc-01ee-4747-8df7-5829e54d511e",
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
                "id": "ed967c7d-8c54-4fc1-89a2-460a2e0c2069",
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
                "id": "6a6d5941-f482-43a6-8ac8-a230edd32d76",
                "spec": "table5",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "6a6d5941-f482-43a6-8ac8-a230edd32d76",
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
                "id": "6a6d5941-f482-43a6-8ac8-a230edd32d76",
                "spec": "table5",
                "position": "3",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "81c9e5e1-3e9e-4c95-b9fc-45e95e832129",
                "spec": "table5",
                "position": "1",
                "type": "step-result"
              },
              {
                "status": "ok",
                "error": null,
                "cells": [],
                "id": "81c9e5e1-3e9e-4c95-b9fc-45e95e832129",
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
                "id": "81c9e5e1-3e9e-4c95-b9fc-45e95e832129",
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
                "end": 3,
                "duration": 3
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:0",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:1",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:2",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:3",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:0",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:1",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:2",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:3",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:0",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:1",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:2",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Grammar",
                "subject": "Divide:Row:3",
                "start": 3,
                "end": 3,
                "duration": 0
              },
              {
                "type": "Fixture",
                "subject": "Table:TearDown",
                "start": 3,
                "end": 3,
                "duration": 0
              }
            ],
            "duration": 3,
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
            "time": "2:05 PM",
            "counts": {
              "rights": 2,
              "wrongs": 2,
              "errors": 0,
              "invalids": 6
            }
          },
          "time": "2:05:03 PM",
          "type": "spec-execution-completed"
        },
        "data": {
          "title": "Tables",
          "path": "Tables/Tables",
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