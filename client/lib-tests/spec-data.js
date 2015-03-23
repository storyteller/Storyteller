module.exports = {
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
            "id": "throws-exception"
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
                    "id": "19936099-f0c2-4298-beeb-81bff3dd0884"
                  }
                ],
                "id": ""
              }
            ],
            "id": "7cb6da40-00ee-401f-be57-844defd23ccf"
          },
          {
            "key": "DoNotThrowAnExceptionOnTheNextEmbed",
            "cells": {},
            "collections": [],
            "id": "ad951e77-1b4d-43a2-ab6d-92b8eafec432"
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
                    "id": "5ca390bf-fc16-4abc-8eaf-c8f6e474bb11"
                  },
                  {
                    "key": "Adding",
                    "cells": {
                      "x": "5",
                      "y": "5",
                      "returnValue": "11"
                    },
                    "collections": [],
                    "id": "08db5b27-d1af-49e5-b723-24b96b14dce6"
                  },
                  {
                    "key": "Adding",
                    "cells": {
                      "x": "5",
                      "y": "6",
                      "returnValue": "abc"
                    },
                    "collections": [],
                    "id": "aa01f61f-0aed-49e3-bc26-0f238d80b280"
                  },
                  {
                    "key": "Throw",
                    "cells": {},
                    "collections": [],
                    "id": "66436c6c-57c4-49d0-869d-962978ecd484"
                  }
                ],
                "id": ""
              }
            ],
            "id": "21e7cdef-bab2-44c6-a6d5-0c48af50c6fb"
          }
        ],
        "id": ""
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
            "id": "4ea6f72b-8424-4151-9762-40000c96c698"
          },
          {
            "key": "TheAddressShouldBe",
            "cells": {
              "Address1": "2035 Ozark",
              "Address2": "Apt 3",
              "City": "Carthage"
            },
            "collections": [],
            "id": "301fd83a-ccd5-4ea9-8cb8-1e5562c557d1"
          },
          {
            "key": "TheAddressShouldBe",
            "cells": {
              "Address1": "wrong",
              "Address2": "wrong",
              "City": "wrong"
            },
            "collections": [],
            "id": "35d2452a-e637-4508-ba2b-824a88bcf43b"
          }
        ],
        "id": ""
      }
    ],
    "id": "general1"
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
            "id": "d86ede54-9a92-43b9-a09a-7157d3daae50"
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
                    "id": "861bc2fb-7fa7-4a7d-af4c-44258547000c"
                  },
                  {
                    "key": "table",
                    "cells": {
                      "first": "Harold",
                      "last": "Miller",
                      "fullname": "Harold Mueller"
                    },
                    "collections": [],
                    "id": "6c0b85fa-c462-4ae2-a440-a20eccc6702f"
                  }
                ],
                "id": ""
              }
            ],
            "id": "c68e4d6a-8a30-465e-b6c2-231a93b97506"
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
                    "id": "6f522338-0990-4e0e-bce1-176204ed2fce"
                  }
                ],
                "id": ""
              }
            ],
            "id": "3dbc3c26-1390-4921-9b6a-3147134fc8ae"
          },
          {
            "key": "TheEnumOptionIs",
            "cells": {
              "option": "FirstOption",
              "selectedOption": "0"
            },
            "collections": [],
            "id": "30b4d98e-86af-46a1-87dd-703ac3b33aed"
          }
        ],
        "id": ""
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
            "id": "164b5613-bf64-47cb-b254-ae9fe264772d"
          },
          {
            "key": "Check",
            "cells": {
              "value": "5"
            },
            "collections": [],
            "id": "676e0f9f-c904-4bd7-9c9e-b1f81e12abe1"
          },
          {
            "key": "Set",
            "cells": {
              "value": "6"
            },
            "collections": [],
            "id": "0f4a9563-e3ef-43eb-8df0-7bb102a1102d"
          },
          {
            "key": "Check",
            "cells": {
              "value": "7"
            },
            "collections": [],
            "id": "a43d92d4-5c1b-410a-b29d-8518688edcc9"
          },
          {
            "key": "Set",
            "cells": {
              "value": "abc"
            },
            "collections": [],
            "id": "14b120f1-0f31-4443-872b-8f86e6850f8d"
          }
        ],
        "id": ""
      }
    ],
    "id": "general3"
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
            "id": "84f09b9b-0ce1-4654-b0dd-de69a9516edf"
          },
          {
            "key": "BadGrammar2",
            "cells": {},
            "collections": [],
            "id": "1e2a4b26-45ed-4c74-9c94-1228fb21a8fc"
          },
          {
            "key": "BadGrammar3",
            "cells": {},
            "collections": [],
            "id": "9b7004c5-328a-47a5-92a9-6856cd5666cd"
          }
        ],
        "id": ""
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
            "id": "607cf4de-d784-42d6-8d05-b0bffa2c0f9c"
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
                    "id": "d113dd39-cc9d-4c6e-801e-5f94e204c5f7"
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
                    "id": "ee4661f6-1a95-45b6-9fdc-067960cef6f3"
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
                    "id": "ef1bea81-3f5e-458f-a718-ab117e39e30a"
                  }
                ],
                "id": ""
              }
            ],
            "id": "68d72160-b768-4ad3-8eb0-f832416e279b"
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
            "id": "f28a2420-7e64-4986-b479-21da75b4a693"
          }
        ],
        "id": ""
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
            "id": "15d37ae1-caea-4f33-8dda-11491d009984"
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
            "id": "2b000885-8ee6-4998-8be0-f2e44a7a5b22"
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
                    "id": "e9844372-7050-4bd3-abf5-3aee8aa47447"
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
                    "id": "cbee6ff1-eac9-479a-8375-6404514b1889"
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
                    "id": "8877f94c-4ec8-48be-88e8-413d9b0590e9"
                  }
                ],
                "id": ""
              }
            ],
            "id": "2c2d2f24-543a-40cf-8a0e-781e6c634b88"
          }
        ],
        "id": ""
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
              "returnValue": "8"
            },
            "collections": [],
            "id": "b3218408-aee0-4c3b-9144-a42cd7c6c134"
          },
          {
            "key": "AddTo5",
            "cells": {
              "x": "5",
              "returnValue": "9"
            },
            "collections": [],
            "id": "f5cd89ed-130f-4cd5-b0a5-68c4e023614b"
          }
        ],
        "id": ""
      }
    ],
    "id": "sentence1"
  },
  "sentence2": {
    "tags": [],
    "lifecycle": 1,
    "max-retries": 0,
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
        "id": ""
      },
      {
        "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
        "type": "comment",
        "id": "88435c29-b918-4677-975a-25823c73ad09"
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
              "returnValue": "15"
            },
            "collections": [],
            "id": "4a203895-ef81-46e7-b206-08f806c02996"
          },
          {
            "key": "AddingTo5",
            "cells": {
              "y": "12",
              "returnValue": "15"
            },
            "collections": [],
            "id": "43567a9c-9ccb-4ce2-975c-2be6eedafb70"
          }
        ],
        "id": ""
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
            "id": "5956410b-3929-4617-8069-393d5f10bbab"
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
            "id": "7408fc04-0ac3-4050-9acf-acb7d015b0fb"
          },
          {
            "key": "StartWithTheNumber",
            "cells": {
              "number": "5"
            },
            "collections": [],
            "id": "7761953c-582c-4f21-a4d2-06ef50fc844a"
          },
          {
            "key": "MultiplyThenAdd",
            "cells": {
              "multiplier": "3",
              "delta": "4"
            },
            "collections": [],
            "id": "b8b84fbc-0d1c-4318-9777-e21bd7f24f0b"
          },
          {
            "key": "Subtract",
            "cells": {
              "operand": "2"
            },
            "collections": [],
            "id": "62006f8e-d5f6-4cbd-a703-b28a1a782d0a"
          },
          {
            "text": "Correct assertion",
            "type": "comment",
            "id": "931df6d3-eeed-468f-b8a7-d12f7d843487"
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
            "id": "9ff57752-8151-48aa-a0c6-a5170f246e4b"
          },
          {
            "key": "TheSumOf",
            "cells": {
              "number1": "2",
              "number2": "2",
              "sum": "5"
            },
            "collections": [],
            "id": "9bb39062-e358-4a34-8567-13091337ef07"
          },
          {
            "text": "Line assertions",
            "type": "comment",
            "id": "2831287f-7eed-445c-9b61-f73697afecb1"
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
        "id": ""
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
                    "id": "93318457-3181-4875-889a-70357e889efb"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "Name": "Drill",
                      "Amount": "200.2",
                      "Date": "TODAY+1"
                    },
                    "collections": [],
                    "id": "8235f324-b5a6-4d59-a3f2-0bec67d40c1b"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "Name": "Hammer",
                      "Amount": "300.3",
                      "Date": "TODAY+2"
                    },
                    "collections": [],
                    "id": "0339a483-f076-4ec1-b96a-8a6d7ec5fb2c"
                  }
                ],
                "id": ""
              }
            ],
            "id": "09ea9bf7-7b74-45dc-a3e8-a4c6d0443790"
          },
          {
            "text": "Completely successful ordering",
            "type": "comment",
            "id": "c457fa28-eebb-4935-9fb7-62e4a374508b"
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
                "id": "1"
              }
            ],
            "id": "b75c8e43-1e1f-4b1f-b984-d4b7497e9165"
          },
          {
            "text": "Out of order",
            "type": "comment",
            "id": "a42422c5-16ad-4adb-b29d-5f3507c60f89"
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
                "id": "5"
              }
            ],
            "id": "6b7fecbf-4381-45ad-a054-76ffc67e96b6"
          },
          {
            "text": "Should have one exra",
            "type": "comment",
            "id": "7318f57a-145d-4f3e-a2d2-908d6c3666c5"
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
                    "id": "ad353520-8cf1-4d33-91d8-96c402016945"
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
                    "id": "ecad06ac-101d-4bb7-aaa1-a149d77bd1d2"
                  }
                ],
                "id": "9"
              }
            ],
            "id": "97c418d0-e4b5-48a0-9ad9-fc0b37f436f0"
          },
          {
            "text": "Should mark one expected result as missing",
            "type": "comment",
            "id": "069264ef-081f-46ae-8151-3c0516ab7cb8"
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
                    "id": "d15fa6d8-7eff-4704-adf1-77be65cb30d2"
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
                    "id": "7bbc86f9-6e74-4916-8754-247e0b138ead"
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
                    "id": "b2951c00-1b0a-4fb1-b8e1-b53316fa3b18"
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
                "id": "10"
              }
            ],
            "id": "a8f8ca69-f5e1-4c43-b1cf-a4cdf79c82ca"
          },
          {
            "text": "One syntax error",
            "type": "comment",
            "id": "fb225eb9-b3fd-469a-ad2a-2fb95c4f4adc"
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
                    "id": "fd98d480-e0e9-4479-aa15-f8d352764a01"
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
                    "id": "1327bc44-a50e-498e-ba4f-06b01949803c"
                  }
                ],
                "id": ""
              }
            ],
            "id": "30a6ba81-a5c2-44e8-b8cb-7ef3c23692ec"
          }
        ],
        "id": ""
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
                    "id": "8867c531-86cd-479c-bb28-b3ca05f1b2c9"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Josh"
                    },
                    "collections": [],
                    "id": "8d51c64a-ebf4-410f-ba0e-b06c5cce79ed"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Gary"
                    },
                    "collections": [],
                    "id": "999824be-b3df-44a5-85c0-271c99883cd3"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Kevin"
                    },
                    "collections": [],
                    "id": "7d611e75-7f20-445f-9ed7-1e5ff97f4851"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Chad"
                    },
                    "collections": [],
                    "id": "2fdd5eb3-dc55-4248-bc2e-f1fc300b6765"
                  }
                ],
                "id": ""
              }
            ],
            "id": "1b458425-6da4-4d68-a41c-f8c186533cae"
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
                    "id": "8bfaab29-a174-4d69-948c-e414fab7538e"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Josh",
                      "Index": ""
                    },
                    "collections": [],
                    "id": "c3b12358-dcf2-4ccb-9bf4-d0b6ab90b207"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Gary",
                      "Index": ""
                    },
                    "collections": [],
                    "id": "74551465-13b2-4231-86d3-e235b8ee97c9"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Kevin",
                      "Index": ""
                    },
                    "collections": [],
                    "id": "fc0b0e15-8506-4921-a976-6fe24cb6ad08"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Chad",
                      "Index": ""
                    },
                    "collections": [],
                    "id": "4785818f-f786-44b6-b165-9c31e79c701f"
                  }
                ],
                "id": ""
              }
            ],
            "id": "4ca3ea89-d879-41b6-9b10-b4d591cf372c"
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
                    "id": "77e79537-30f0-4afc-b380-e63909f6a81d"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Chad",
                      "Index": ""
                    },
                    "collections": [],
                    "id": "f609c0c4-0b94-4b90-b9b7-7dca4c730e6e"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Jeremy",
                      "Index": ""
                    },
                    "collections": [],
                    "id": "fb983dc4-40c7-4a4e-9167-17b4ff6e2ca5"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Josh",
                      "Index": ""
                    },
                    "collections": [],
                    "id": "0f954c46-4e84-4bfe-a837-7c5c6935d922"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Gary",
                      "Index": ""
                    },
                    "collections": [],
                    "id": "d5500a29-2066-420b-9913-b06cfd8c9be6"
                  }
                ],
                "id": ""
              }
            ],
            "id": "f2fa8d9e-2b50-4625-ad48-af5f2c50e54a"
          }
        ],
        "id": ""
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
                    "id": "1eb08a4e-281a-4441-921b-1b9791d7a371"
                  },
                  {
                    "key": "rows",
                    "cells": {
                      "Name": "b"
                    },
                    "collections": [],
                    "id": "d1566318-053e-4d67-b28f-0f72c1d8d6e6"
                  },
                  {
                    "key": "rows",
                    "cells": {
                      "Name": "c"
                    },
                    "collections": [],
                    "id": "16de084c-133a-45b5-8feb-3d3fb71eb394"
                  }
                ],
                "id": "1"
              }
            ],
            "id": "db5e6c69-3655-4edc-90c8-fdaf8cab674b"
          }
        ],
        "id": ""
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
                    "id": "571e42e9-67dd-41be-a838-ad5edd239d94"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "Amount": "200.2",
                      "Date": "TODAY+1",
                      "Name": "Drill"
                    },
                    "collections": [],
                    "id": "4d0a5860-d050-4df0-9d2d-b79cecadcb2e"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "Amount": "300.3",
                      "Date": "TODAY+2",
                      "Name": "Hammer"
                    },
                    "collections": [],
                    "id": "9ea586bd-c332-40f9-a306-8e88ff19d95c"
                  }
                ],
                "id": ""
              }
            ],
            "id": "71c23cfa-1d15-4c78-a7a3-383fcdf7afd4"
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
                    "id": "eef33716-0ae6-49f3-9f10-735395ba6c33"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "Amount": "300.3",
                      "Date": "TODAY+2",
                      "Name": "Hammer"
                    },
                    "collections": [],
                    "id": "aa95e27e-0c25-4153-abab-93732138d26a"
                  }
                ],
                "id": ""
              }
            ],
            "id": "ba9c6168-44f4-49f0-932f-cf87d72dd2fc"
          }
        ],
        "id": ""
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
                    "id": "1d022b9b-4076-4c2d-9660-55729b8c4138"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Josh"
                    },
                    "collections": [],
                    "id": "7ba158ca-13e7-4e6d-a3a5-f9a345a79955"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Gary"
                    },
                    "collections": [],
                    "id": "0a48a059-b705-4335-9369-62fd93888405"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Kevin"
                    },
                    "collections": [],
                    "id": "c60a6aa9-b6c0-4a32-91e1-61eee70e5c3b"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Chad"
                    },
                    "collections": [],
                    "id": "4d795677-ea8a-4036-a08a-5d40186c5337"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Rand"
                    },
                    "collections": [],
                    "id": "4e346133-0ff7-431a-9d1b-972f228dd6d0"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Perrin"
                    },
                    "collections": [],
                    "id": "55e64c8c-a8b8-408b-b601-37c31639cd73"
                  },
                  {
                    "key": "name",
                    "cells": {
                      "name": "Mat"
                    },
                    "collections": [],
                    "id": "48f61470-1d57-4802-a60d-20b157518a12"
                  }
                ],
                "id": ""
              }
            ],
            "id": "c0432896-468c-45c5-b5cb-5a60ce5765b7"
          },
          {
            "text": "All data is correct, but in the wrong order",
            "type": "comment",
            "id": "fc155305-a757-499f-b4e0-1efdacaa7cd4"
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
                    "id": "f2fe6daf-ddef-4065-a6e5-497c324adf17"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Josh",
                      "Index": "2"
                    },
                    "collections": [],
                    "id": "f7e79d39-3462-46fa-b5cf-b4216ece5060"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Gary",
                      "Index": "3"
                    },
                    "collections": [],
                    "id": "e14bee8f-c4fe-42ef-bf22-bc623eb0e0d0"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Chad",
                      "Index": "5"
                    },
                    "collections": [],
                    "id": "1e32e41f-a5f6-4242-8b62-34816d0b786e"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Kevin",
                      "Index": "4"
                    },
                    "collections": [],
                    "id": "458ebf38-c2e2-4cf5-b96e-196210bdfd2c"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Egwene"
                    },
                    "collections": [],
                    "id": "185f99ed-d1cc-4e59-a213-668fa4db5f02"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "expected": "Perrin"
                    },
                    "collections": [],
                    "id": "a4e09367-6429-450e-83d4-d7298dd7efba"
                  }
                ],
                "id": ""
              }
            ],
            "id": "9fbf0ebd-cccb-42a2-b584-fb3f32e240f5"
          }
        ],
        "id": ""
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
                    "id": "5c9afb18-c42c-4f33-b777-89e7a297b5b3"
                  },
                  {
                    "key": "row",
                    "cells": {
                      "number": "-5",
                      "IsEven": "false"
                    },
                    "collections": [],
                    "id": "15019eb3-ff50-4e8e-aaa7-36056364e448"
                  }
                ],
                "id": ""
              }
            ],
            "id": "47b94ad0-080b-4f37-8716-7127291e4ab6"
          }
        ],
        "id": ""
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
                    "id": "97172ff7-5c51-485b-8add-155b5ce0ab7e"
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
                    "id": "1762f4b2-c82f-443b-a28d-d3517925c9a6"
                  }
                ],
                "id": ""
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
                    "id": "c1c51941-d74b-4537-9273-58c0a329cacc"
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
                    "id": "dc3e06d2-322f-4c2b-82d7-2d2b9a5cd8df"
                  }
                ],
                "id": ""
              }
            ],
            "id": "51c06109-f3e9-493b-9daa-8400ac7bad36"
          }
        ],
        "id": ""
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
                    "key": "row",
                    "cells": {
                      "a": "1"
                    },
                    "collections": [],
                    "id": "e1828a72-e1b9-4b24-8a38-e6721e67be5a"
                  },
                  {
                    "key": "row",
                    "cells": {
                      "a": "2"
                    },
                    "collections": [],
                    "id": "8633aa26-d1a7-47ce-a5d4-6dab2caccf36"
                  },
                  {
                    "key": "row",
                    "cells": {
                      "a": "3"
                    },
                    "collections": [],
                    "id": "43b3d863-4542-4a3e-8c14-c24dad21f12d"
                  },
                  {
                    "key": "row",
                    "cells": {
                      "a": "4"
                    },
                    "collections": [],
                    "id": "91158443-4a4b-44ae-8da9-2c3ba8891510"
                  }
                ],
                "id": ""
              }
            ],
            "id": "b7de4cf1-9e3f-4096-b315-420c53dc43ad"
          }
        ],
        "id": ""
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
                    "id": "ac1121b3-5fba-4d92-bb58-07d36243554e"
                  }
                ],
                "id": ""
              }
            ],
            "id": "befcb40f-ac8a-4064-ae60-cc0f265296a1"
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
                    "id": "e11518c4-33bf-4111-9b7c-3b6e28713b97"
                  }
                ],
                "id": ""
              }
            ],
            "id": "f8d19afb-dbe1-4276-a5b2-270886f6954e"
          }
        ],
        "id": ""
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
            "id": "25e7430e-a272-40d7-ba23-4c247517ddd3"
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
                    "id": "1a70bab7-6d8f-4d40-8511-2636473011b5"
                  },
                  {
                    "key": "sum",
                    "cells": {
                      "x": "2",
                      "y": "2",
                      "sum": "5"
                    },
                    "collections": [],
                    "id": "418c1668-8c10-4c3d-99d3-ac8e32020f5d"
                  }
                ],
                "id": "sum-collection"
              }
            ],
            "id": "sum-step"
          },
          {
            "text": "Table fixture from script",
            "type": "comment",
            "id": "544c83a4-e3be-4337-afec-95fd4d88a0fd"
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
                    "id": "8b735d64-593b-4a71-a3c8-9172fbb78e0f"
                  },
                  {
                    "key": "Rows",
                    "cells": {
                      "x": "3",
                      "y": "3",
                      "product": "****"
                    },
                    "collections": [],
                    "id": "f7bfa6e0-3827-4c1a-88e8-0aca7e3fd682"
                  }
                ],
                "id": ""
              }
            ],
            "id": "48ccdc3e-767f-4ea1-a34a-7193ce8c5dee"
          }
        ],
        "id": ""
      }
    ],
    "id": "table5"
  }
}