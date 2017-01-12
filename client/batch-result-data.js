module.exports = {
  "records": [
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4246bf12-87da-4122-8850-393af62714e7",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d2ce3fc5-5335-42b0-bd41-cb45be2cb636",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.EmbeddedFixture.<.ctor>b__1_0(IEmbeddedSpecContext`1 c)\r\n   at StoryTeller.Grammars.EmbeddedSectionGrammar`1.<>c__DisplayClass13_0.<Before>b__0(ISpecContext x)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "errors",
            "spec": "embeds",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "errors",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "returnValue",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "e2517424-0b4b-4c4a-b003-7db8b7c5ab10",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "errors",
            "spec": "embeds",
            "position": "teardown",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "errors",
            "spec": "embeds",
            "position": "after",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c7823e53-e7bc-4d3e-8bc1-141e0704cde7",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "no-errors",
            "spec": "embeds",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "no-errors",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "returnValue",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "2cebb539-61de-43fa-b4d6-cd5d1e70a2a7",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "10",
                "error": null,
                "cell": "returnValue",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "b8aa3cf8-e090-4dac-9c19-6cf4bd4ebce1",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "returnValue",
                "errorDisplay": "text",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "0b2138c2-cd56-41d8-83d6-0b27571f71a1",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()",
            "cells": [],
            "id": "43ac8749-5fe8-42da-80d7-07a840d77633",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "no-errors",
            "spec": "embeds",
            "position": "teardown",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "no-errors",
            "spec": "embeds",
            "position": "after",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4246bf12-87da-4122-8850-393af62714e7",
            "spec": "embeds",
            "position": "teardown",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Embeds",
            "start": 0,
            "end": 1033,
            "duration": 1033
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 2,
            "end": 3,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Embedded:SetUp",
            "start": 1020,
            "end": 1022,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 1023,
            "end": 1025,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 1025,
            "end": 1027,
            "duration": 2
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 1027,
            "end": 1028,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1028,
            "end": 1029,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 1029,
            "end": 1029,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 1029,
            "end": 1030,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 1030,
            "end": 1030,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 1030,
            "end": 1030,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 1030,
            "end": 1030,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1030,
            "end": 1030,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1030,
            "end": 1030,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1030,
            "end": 1031,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 1031,
            "end": 1031,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 1031,
            "end": 1031,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 1031,
            "end": 1031,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 1031,
            "end": 1031,
            "duration": 0
          }
        ],
        "duration": 1033,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">EmbeddedFixture.Setup sent this debug message\r\n</pre>",
            "title": "Debug Output",
            "count": 1,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.EmbeddedFixture.&lt;.ctor&gt;b__1_0(IEmbeddedSpecContext`1 c)\r\n   at StoryTeller.Grammars.EmbeddedSectionGrammar`1.&lt;&gt;c__DisplayClass13_0.&lt;Before&gt;b__0(ISpecContext x)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre><pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__19.MoveNext()\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "8:08 PM",
        "counts": {
          "rights": 2,
          "wrongs": 1,
          "errors": 2,
          "invalids": 1
        }
      },
      "specification": {
        "title": "Embeds",
        "path": "Embedded/Embeds",
        "max-retries": 0,
        "lifecycle": "Regression",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, July 17, 2015",
        "breakpoints": [],
        "steps": [
          {
            "key": "Embedded",
            "type": "section",
            "steps": [
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "d2ce3fc5-5335-42b0-bd41-cb45be2cb636"
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
                        "id": "e2517424-0b4b-4c4a-b003-7db8b7c5ab10"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "d57554d0-0332-4c7b-9985-d00b31325798"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "c7823e53-e7bc-4d3e-8bc1-141e0704cde7"
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
                        "id": "2cebb539-61de-43fa-b4d6-cd5d1e70a2a7"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "b8aa3cf8-e090-4dac-9c19-6cf4bd4ebce1"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "0b2138c2-cd56-41d8-83d6-0b27571f71a1"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "43ac8749-5fe8-42da-80d7-07a840d77633"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "d57d1c80-1a45-4572-9f41-15a9449ee2e7"
              }
            ],
            "activeCells": {},
            "id": "4246bf12-87da-4122-8850-393af62714e7"
          }
        ],
        "id": "embeds"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4383c949-fca4-413e-99aa-9d8adbb9910a",
            "spec": "general1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a8a1290f-0970-4408-9817-6042e64d0765",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a8a1290f-0970-4408-9817-6042e64d0765",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a8a1290f-0970-4408-9817-6042e64d0765",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a8a1290f-0970-4408-9817-6042e64d0765",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a8a1290f-0970-4408-9817-6042e64d0765",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a8a1290f-0970-4408-9817-6042e64d0765",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a8a1290f-0970-4408-9817-6042e64d0765",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "Address1",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "7daace97-6513-437d-8157-84faa0765a48",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "Address2",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "7daace97-6513-437d-8157-84faa0765a48",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "City",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "7daace97-6513-437d-8157-84faa0765a48",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "2035 Ozark",
                "error": null,
                "cell": "Address1",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "3647001b-4c4a-4c8b-87a9-d896fd73784a",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "Apt 3",
                "error": null,
                "cell": "Address2",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "3647001b-4c4a-4c8b-87a9-d896fd73784a",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "Carthage",
                "error": null,
                "cell": "City",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "3647001b-4c4a-4c8b-87a9-d896fd73784a",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4383c949-fca4-413e-99aa-9d8adbb9910a",
            "spec": "general1",
            "position": "teardown",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Check properties",
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
            "end": 1,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:2",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:3",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:4",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:5",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:6",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 2,
            "end": 3,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "CheckObject:TearDown",
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
        "time": "8:08 PM",
        "counts": {
          "rights": 3,
          "wrongs": 3,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Check properties",
        "path": "General/Check properties",
        "max-retries": 3,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, January 15, 2016",
        "breakpoints": [],
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
                "id": "a8a1290f-0970-4408-9817-6042e64d0765"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "7daace97-6513-437d-8157-84faa0765a48"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "3647001b-4c4a-4c8b-87a9-d896fd73784a"
              }
            ],
            "activeCells": {},
            "id": "4383c949-fca4-413e-99aa-9d8adbb9910a"
          }
        ],
        "id": "general1"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbeeb661-09af-417f-bac4-ae6d6525ef71",
            "spec": "SometimesSlow",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9d48f322-3052-41af-b8cf-061b14303af3",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbeeb661-09af-417f-bac4-ae6d6525ef71",
            "spec": "SometimesSlow",
            "position": "teardown",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Occasionally Times Out",
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
        "time": "8:08 PM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Occasionally Times Out",
        "path": "General/Occasionally Times Out",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "SometimesSlow",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "If in the 'slow' profile, this grammar will run for a minute",
                "id": "3ce63ffd-3ee0-4538-8a9a-5715c6ead54b"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "9d48f322-3052-41af-b8cf-061b14303af3"
              }
            ],
            "activeCells": {},
            "id": "cbeeb661-09af-417f-bac4-ae6d6525ef71"
          }
        ],
        "id": "SometimesSlow"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "93186a60-33d5-47ec-9654-24f46f225ea2",
            "spec": "general2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "fullname",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "f09a8314-0889-4e07-9a60-24e82d58c296",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "fullname",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "c51a14c6-34e4-495d-9ce2-b01bfa78683b",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "Harold Miller",
                "error": null,
                "cell": "fullname",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "ce10ee7c-37a1-4907-b8f0-0b8db7bac5da",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "First",
                "errorDisplay": "text",
                "id": null,
                "status": "ok"
              },
              {
                "actual": null,
                "error": null,
                "cell": "Last",
                "errorDisplay": "text",
                "id": null,
                "status": "ok"
              },
              {
                "actual": null,
                "error": null,
                "cell": "Fullname",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "35b311a7-4c1e-4f02-8a6b-c843ee86660b",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "selectedOption",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "484b2d06-12a7-4515-8c7e-0b490883e85a",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "93186a60-33d5-47ec-9654-24f46f225ea2",
            "spec": "general2",
            "position": "teardown",
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
            "end": 2,
            "duration": 2
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
        "time": "8:08 PM",
        "counts": {
          "rights": 4,
          "wrongs": 1,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Selection List Values",
        "path": "General/Selection List Values",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                "id": "f09a8314-0889-4e07-9a60-24e82d58c296"
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
                        "key": "row",
                        "cells": {
                          "first": "Hank",
                          "last": "Miller",
                          "fullname": "Hank Miller"
                        },
                        "collections": [],
                        "id": "c51a14c6-34e4-495d-9ce2-b01bfa78683b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "ce10ee7c-37a1-4907-b8f0-0b8db7bac5da"
                      }
                    ],
                    "activeCells": {},
                    "id": "213d9433-0a80-4ecc-b6fe-e296209e253a"
                  }
                ],
                "id": "7a0c3b09-b43d-41f7-983a-5b2eb4f9baed"
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
                        "id": "35b311a7-4c1e-4f02-8a6b-c843ee86660b"
                      }
                    ],
                    "activeCells": {},
                    "id": "3d3f514a-77ad-41e8-a1bc-b6c90417e784"
                  }
                ],
                "id": "9fbcc057-8636-406f-bbd6-a23ab7f22e24"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "484b2d06-12a7-4515-8c7e-0b490883e85a"
              }
            ],
            "activeCells": {},
            "id": "93186a60-33d5-47ec-9654-24f46f225ea2"
          }
        ],
        "id": "general2"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "invalid",
            "error": "Fixture with key 'Service' does not exist",
            "cells": [],
            "id": "1faf750e-1f5b-475f-9c22-6d545facd23c",
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
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#39;setup&#39; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#39;Service&#39; does not exist\r\n   at StoryTeller.Model.MissingFixture.SetUp()\r\n   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x)\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass0_0.&lt;AsCritical&gt;b__0(ISpecContext c)\r\n   --- End of inner exception stack trace ---\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass0_0.&lt;AsCritical&gt;b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "8:08 PM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 1
        }
      },
      "specification": {
        "title": "Services",
        "path": "General/Services",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                "id": "a53f5162-c55d-4493-b110-00391aad7c28"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "0b6c7778-189e-4657-b73b-c1557d43a194"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "d3056a94-9a99-4e27-a8f5-4f75c09c0210"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "f497c9ee-b5b9-40a3-a6e1-2334b71aaa1b"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "e644b0d3-f87a-4886-8052-78486e918765"
              }
            ],
            "activeCells": {},
            "id": "1faf750e-1f5b-475f-9c22-6d545facd23c"
          }
        ],
        "id": "general3"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "56b1a655-c371-4621-84ed-136f65378976",
            "spec": "runtime-converter",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "Position",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "99f3ca16-3317-471f-9cbf-fc73ec1c94bc",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "56b1a655-c371-4621-84ed-136f65378976",
            "spec": "runtime-converter",
            "position": "teardown",
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
            "end": 0,
            "duration": 0
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
        "time": "8:08 PM",
        "counts": {
          "rights": 1,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "System Defined Lists and Runtime Converters",
        "path": "General/System Defined Lists and Runtime Converters",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Player",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Player is a custom type that is read by a runtime conversion. The \"Position\" cell option list is defined at the System level",
                "id": "f6c240c1-190f-4fa9-b7e9-4c0727ee6e2b"
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
                        "id": "99f3ca16-3317-471f-9cbf-fc73ec1c94bc"
                      }
                    ],
                    "activeCells": {},
                    "id": "30e35935-c48c-456d-84b4-5fb3a399893d"
                  }
                ],
                "id": "097bb7fa-c48b-477d-9d9a-62172f05581a"
              }
            ],
            "activeCells": {},
            "id": "56b1a655-c371-4621-84ed-136f65378976"
          }
        ],
        "id": "runtime-converter"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "013f5470-45d7-4df7-a236-fbf89486abe3",
            "spec": "general4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "0207bd25-6293-4463-bd95-37d5a9e1aa5f",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "493977db-712c-45f4-8fad-d7e899a58a99",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "9388a614-203f-4de8-94ac-a694d4f7809b",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "013f5470-45d7-4df7-a236-fbf89486abe3",
            "spec": "general4",
            "position": "teardown",
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
        "time": "8:08 PM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 3,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Test with Bad Grammar Name",
        "path": "General/Test with Bad Grammar Name",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Math",
            "type": "section",
            "steps": [
              {
                "key": "BadGrammar1",
                "cells": {},
                "collections": [],
                "id": "0207bd25-6293-4463-bd95-37d5a9e1aa5f"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "493977db-712c-45f4-8fad-d7e899a58a99"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "9388a614-203f-4de8-94ac-a694d4f7809b"
              }
            ],
            "activeCells": {},
            "id": "013f5470-45d7-4df7-a236-fbf89486abe3"
          }
        ],
        "id": "general4"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: Empty specification with no implementation",
            "cells": [],
            "id": "general5",
            "spec": "general5",
            "position": "context",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: Empty specification with no implementation</pre><pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#39;setup&#39; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#39;FixtureThatDoesNotExist&#39; does not exist\r\n   at StoryTeller.Model.MissingFixture.SetUp()\r\n   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x)\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass0_0.&lt;AsCritical&gt;b__0(ISpecContext c)\r\n   --- End of inner exception stack trace ---\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass0_0.&lt;AsCritical&gt;b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          },
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "8:08 PM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 1,
          "invalids": 1
        }
      },
      "specification": {
        "title": "Test with Missing Fixture Name",
        "path": "General/Test with Missing Fixture Name",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2248d7fd-04d1-4b6b-bd8b-582d63467ba9",
            "spec": "paragraph1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b0519b2a-f221-4d94-9bff-855548f26c15",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "operand",
                "errorDisplay": "text",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "b0519b2a-f221-4d94-9bff-855548f26c15",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b0519b2a-f221-4d94-9bff-855548f26c15",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "50",
                "error": null,
                "cell": "expected",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "b0519b2a-f221-4d94-9bff-855548f26c15",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b0519b2a-f221-4d94-9bff-855548f26c15",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "starting",
                "errorDisplay": "text",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "35509538-ca72-4cce-9abd-6032be52fb75",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "35509538-ca72-4cce-9abd-6032be52fb75",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "35509538-ca72-4cce-9abd-6032be52fb75",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "540",
                "error": null,
                "cell": "expected",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "35509538-ca72-4cce-9abd-6032be52fb75",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "35509538-ca72-4cce-9abd-6032be52fb75",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f055cd4d-e6de-4892-9143-ae3d63abe6a9",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f055cd4d-e6de-4892-9143-ae3d63abe6a9",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f055cd4d-e6de-4892-9143-ae3d63abe6a9",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "expected",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "f055cd4d-e6de-4892-9143-ae3d63abe6a9",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f055cd4d-e6de-4892-9143-ae3d63abe6a9",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d98c03a4-cf0c-4e7b-82af-5934c4ad2a01",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d98c03a4-cf0c-4e7b-82af-5934c4ad2a01",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d98c03a4-cf0c-4e7b-82af-5934c4ad2a01",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "80",
                "error": null,
                "cell": "expected",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "d98c03a4-cf0c-4e7b-82af-5934c4ad2a01",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d98c03a4-cf0c-4e7b-82af-5934c4ad2a01",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c45a61bc-d5bc-4175-b702-378937d61bf3",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c45a61bc-d5bc-4175-b702-378937d61bf3",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c45a61bc-d5bc-4175-b702-378937d61bf3",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<>c.<.ctor>b__0_3(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "c45a61bc-d5bc-4175-b702-378937d61bf3",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "expected",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "c45a61bc-d5bc-4175-b702-378937d61bf3",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2248d7fd-04d1-4b6b-bd8b-582d63467ba9",
            "spec": "paragraph1",
            "position": "teardown",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Composite with Errors",
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
            "subject": "StartWith",
            "start": 0,
            "end": 1,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 1,
            "end": 2,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:3",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
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
            "html": "<pre class=\"debug-output\">the number is 5\r\nthe number is 50\r\nI ran a silent action!\r\nthe number is 54\r\nthe number is 540\r\nI ran a silent action!\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nI ran a silent action!\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nI ran a silent action!\r\nthe number is 3\r\nthe number is 5\r\nthe number is 20\r\n</pre>",
            "title": "Debug Output",
            "count": 17,
            "short_title": "Debug"
          },
          {
            "html": "<ul class=\"list-group\"><li class=\"list-group-item\">5</li><li class=\"list-group-item\">50</li><li class=\"list-group-item\">54</li><li class=\"list-group-item\">540</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">8</li><li class=\"list-group-item\">80</li><li class=\"list-group-item\">3</li><li class=\"list-group-item\">5</li><li class=\"list-group-item\">20</li></ul>",
            "title": "Some Numbers",
            "count": 13,
            "short_title": "Numbers"
          },
          {
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.&lt;&gt;c.&lt;.ctor&gt;b__0_3(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "8:08 PM",
        "counts": {
          "rights": 2,
          "wrongs": 3,
          "errors": 1,
          "invalids": 2
        }
      },
      "specification": {
        "title": "Composite with Errors",
        "path": "Paragraphs/Composite with Errors",
        "max-retries": 0,
        "lifecycle": "Regression",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                "id": "b0519b2a-f221-4d94-9bff-855548f26c15"
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
                        "key": "row",
                        "cells": {
                          "starting": "bbb",
                          "operand": "4",
                          "multiplier": "10",
                          "expected": "25"
                        },
                        "collections": [],
                        "id": "35509538-ca72-4cce-9abd-6032be52fb75"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "starting": "5",
                          "operand": "3",
                          "multiplier": "10",
                          "expected": "80"
                        },
                        "collections": [],
                        "id": "f055cd4d-e6de-4892-9143-ae3d63abe6a9"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "starting": "5",
                          "operand": "3",
                          "multiplier": "10",
                          "expected": "77"
                        },
                        "collections": [],
                        "id": "d98c03a4-cf0c-4e7b-82af-5934c4ad2a01"
                      }
                    ],
                    "activeCells": {},
                    "id": "d9d1611a-1ce7-4420-9bf7-b906f2a528fe"
                  }
                ],
                "id": "fba0acde-9e1f-44fc-838f-074e8b4a70d2"
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
                "id": "c45a61bc-d5bc-4175-b702-378937d61bf3"
              }
            ],
            "activeCells": {},
            "id": "2248d7fd-04d1-4b6b-bd8b-582d63467ba9"
          }
        ],
        "id": "paragraph1"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "99316b6f-48e4-4bc8-809c-a09c20cfd116",
            "spec": "paragraph2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1ca9f126-f5ba-43ff-8bf6-b9e31ceff985",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1ca9f126-f5ba-43ff-8bf6-b9e31ceff985",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1ca9f126-f5ba-43ff-8bf6-b9e31ceff985",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "expected",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "1ca9f126-f5ba-43ff-8bf6-b9e31ceff985",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1ca9f126-f5ba-43ff-8bf6-b9e31ceff985",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "94f5885c-9fb0-4af1-ae29-9c7a1a90f850",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "94f5885c-9fb0-4af1-ae29-9c7a1a90f850",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "94f5885c-9fb0-4af1-ae29-9c7a1a90f850",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "80",
                "error": null,
                "cell": "expected",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "94f5885c-9fb0-4af1-ae29-9c7a1a90f850",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "94f5885c-9fb0-4af1-ae29-9c7a1a90f850",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "788a390c-09f8-4212-b521-f705caaae5a9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "788a390c-09f8-4212-b521-f705caaae5a9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "788a390c-09f8-4212-b521-f705caaae5a9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "70",
                "error": null,
                "cell": "expected",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "788a390c-09f8-4212-b521-f705caaae5a9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "788a390c-09f8-4212-b521-f705caaae5a9",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8504c797-d2d8-40e3-bbec-54884e014ccc",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8504c797-d2d8-40e3-bbec-54884e014ccc",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8504c797-d2d8-40e3-bbec-54884e014ccc",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "expected",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "8504c797-d2d8-40e3-bbec-54884e014ccc",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8504c797-d2d8-40e3-bbec-54884e014ccc",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ba7f0e0a-bcaa-4abe-a1bf-799011125c92",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ba7f0e0a-bcaa-4abe-a1bf-799011125c92",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ba7f0e0a-bcaa-4abe-a1bf-799011125c92",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "80",
                "error": null,
                "cell": "expected",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "ba7f0e0a-bcaa-4abe-a1bf-799011125c92",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ba7f0e0a-bcaa-4abe-a1bf-799011125c92",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "99316b6f-48e4-4bc8-809c-a09c20cfd116",
            "spec": "paragraph2",
            "position": "teardown",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Simple Composite",
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
            "subject": "Composite:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
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
            "subject": "AddAndMultiply:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
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
            "subject": "AddAndMultiply:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
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
            "subject": "AddAndMultiply:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
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
            "subject": "AddAndMultiply:4",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
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
            "subject": "AddAndMultiply:4",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Composite:TearDown",
            "start": 1,
            "end": 1,
            "duration": 0
          }
        ],
        "duration": 1,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">the number is 5\r\nthe number is 8\r\nthe number is 80\r\nI ran a silent action!\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nI ran a silent action!\r\nthe number is 3\r\nthe number is 7\r\nthe number is 70\r\nI ran a silent action!\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nI ran a silent action!\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nI ran a silent action!\r\n</pre>",
            "title": "Debug Output",
            "count": 20,
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
        "time": "8:08 PM",
        "counts": {
          "rights": 2,
          "wrongs": 3,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Simple Composite",
        "path": "Paragraphs/Simple Composite",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                "id": "1ca9f126-f5ba-43ff-8bf6-b9e31ceff985"
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
                "id": "94f5885c-9fb0-4af1-ae29-9c7a1a90f850"
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
                        "key": "row",
                        "cells": {
                          "starting": "3",
                          "operand": "4",
                          "multiplier": "10",
                          "expected": "25"
                        },
                        "collections": [],
                        "id": "788a390c-09f8-4212-b521-f705caaae5a9"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "starting": "5",
                          "operand": "3",
                          "multiplier": "10",
                          "expected": "80"
                        },
                        "collections": [],
                        "id": "8504c797-d2d8-40e3-bbec-54884e014ccc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "starting": "5",
                          "operand": "3",
                          "multiplier": "10",
                          "expected": "77"
                        },
                        "collections": [],
                        "id": "ba7f0e0a-bcaa-4abe-a1bf-799011125c92"
                      }
                    ],
                    "activeCells": {},
                    "id": "84f77b50-c7f9-4459-901c-ceac2abb71ed"
                  }
                ],
                "id": "26e84847-54e9-4e02-8f9a-676cbc13c787"
              }
            ],
            "activeCells": {},
            "id": "99316b6f-48e4-4bc8-809c-a09c20cfd116"
          }
        ],
        "id": "paragraph2"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38ffa1a7-d5b4-4a5a-9090-8cfaa931a29f",
            "spec": "sentence1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "returnValue",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "ff7ca6bf-c597-498c-b322-ea52cf7a8345",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "10",
                "error": null,
                "cell": "returnValue",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "ce424444-7649-4489-810e-1718f75bda31",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38ffa1a7-d5b4-4a5a-9090-8cfaa931a29f",
            "spec": "sentence1",
            "position": "teardown",
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
        "time": "8:08 PM",
        "counts": {
          "rights": 1,
          "wrongs": 1,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Currying",
        "path": "Sentences/Currying",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                "id": "ff7ca6bf-c597-498c-b322-ea52cf7a8345"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "ce424444-7649-4489-810e-1718f75bda31"
              }
            ],
            "activeCells": {},
            "id": "38ffa1a7-d5b4-4a5a-9090-8cfaa931a29f"
          }
        ],
        "id": "sentence1"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ce9078b7-2387-41f8-b674-f24d14be1026",
            "spec": "sentence2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "success",
            "error": null,
            "cells": [],
            "id": "1",
            "spec": "sentence2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "failed",
            "error": null,
            "cells": [],
            "id": "2",
            "spec": "sentence2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.<>c.<.ctor>b__1_2()\r\n   at StoryTeller.Fixture.FactExpression.<>c__DisplayClass2_0.<VerifiedBy>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.FactGrammar.PerformTest(StepValues values, ISpecContext context)\r\n   at StoryTeller.Grammars.FactPlan.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)",
            "cells": [],
            "id": "3",
            "spec": "sentence2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ce9078b7-2387-41f8-b674-f24d14be1026",
            "spec": "sentence2",
            "position": "teardown",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Facts",
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.&lt;&gt;c.&lt;.ctor&gt;b__1_2()\r\n   at StoryTeller.Fixture.FactExpression.&lt;&gt;c__DisplayClass2_0.&lt;VerifiedBy&gt;b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.FactGrammar.PerformTest(StepValues values, ISpecContext context)\r\n   at StoryTeller.Grammars.FactPlan.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 4,
        "aborted": false,
        "time": "8:08 PM",
        "counts": {
          "rights": 1,
          "wrongs": 1,
          "errors": 1,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Facts",
        "path": "Sentences/Facts",
        "max-retries": 3,
        "lifecycle": "Regression",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
            "id": "ce9078b7-2387-41f8-b674-f24d14be1026"
          },
          {
            "type": "comment",
            "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
            "id": "758f3286-87e7-4e3b-a007-6a8529f51e0e"
          }
        ],
        "id": "sentence2"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "521b5085-26f5-4bde-a288-4532e28174c4",
            "spec": "sentence3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "returnValue",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "0609abbd-6efc-43ae-b904-09c00c44e1b0",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "17",
                "error": null,
                "cell": "returnValue",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "ac4ef9fb-8031-4dc3-90cb-83a732ea80cd",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "521b5085-26f5-4bde-a288-4532e28174c4",
            "spec": "sentence3",
            "position": "teardown",
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
        "time": "8:08 PM",
        "counts": {
          "rights": 1,
          "wrongs": 1,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Importing and Currying",
        "path": "Sentences/Importing and Currying",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                "id": "0609abbd-6efc-43ae-b904-09c00c44e1b0"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "ac4ef9fb-8031-4dc3-90cb-83a732ea80cd"
              }
            ],
            "activeCells": {},
            "id": "521b5085-26f5-4bde-a288-4532e28174c4"
          }
        ],
        "id": "sentence3"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d2a6ff9c-e0b9-4954-b4d7-cafa8f7d01b9",
            "spec": "sentence4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "number",
                "errorDisplay": "text",
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
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "77598a5a-d939-44f2-a898-35c8b326cfaa",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3d1f54eb-ed3d-40f7-872e-fa589368b0cc",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a1da78d5-3a83-4ccc-a701-cadadc27f6e3",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "number",
                "errorDisplay": "text",
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
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "4",
                "error": null,
                "cell": "sum",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "f2bcd75c-1f5e-406d-ae4d-057cabde7c37",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "success",
            "error": null,
            "cells": [],
            "id": "3",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "failed",
            "error": null,
            "cells": [],
            "id": "4",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "markdown",
            "status": "error",
            "error": "No go!",
            "cells": [],
            "id": "5",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d2a6ff9c-e0b9-4954-b4d7-cafa8f7d01b9",
            "spec": "sentence4",
            "position": "teardown",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "790d582e-2aa0-4de8-a780-f9fd53a5569d",
            "spec": "sentence4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "790d582e-2aa0-4de8-a780-f9fd53a5569d",
            "spec": "sentence4",
            "position": "teardown",
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
            "start": 1,
            "end": 1,
            "duration": 0
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
          },
          {
            "type": "Fixture",
            "subject": "Sentence:SetUp",
            "start": 3,
            "end": 3,
            "duration": 0
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
            "html": "<pre class=\"debug-output\">the number is 5\r\nthe number is 5\r\nthe number is 19\r\nthe number is 19\r\nthe number is 17\r\nthe number is 17\r\n</pre>",
            "title": "Debug Output",
            "count": 6,
            "short_title": "Debug"
          },
          {
            "html": "<ul class=\"list-group\"><li class=\"list-group-item\">5</li><li class=\"list-group-item\">19</li><li class=\"list-group-item\">17</li></ul>",
            "title": "Some Numbers",
            "count": 3,
            "short_title": "Numbers"
          },
          {
            "html": "<pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; StoryTeller.StorytellerAssertionException: No go!\r\n   at StoryTeller.StoryTellerAssert.Fail(String message)\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.ThisLineAlwaysThrowsExceptions()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__19.MoveNext()\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "8:08 PM",
        "counts": {
          "rights": 2,
          "wrongs": 2,
          "errors": 1,
          "invalids": 1
        }
      },
      "specification": {
        "title": "Sentences",
        "path": "Sentences/Sentences",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, December 12, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Show a _syntax_ failure and link to [CNN](http://cnn.com)\r\n* First\r\n* Second\r\n* Third\r\n* Fourth\r\n* Fifth\r\n* Sixth",
                "id": "9dca5ff3-e910-404e-8cdf-052377c7626f"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "a"
                },
                "collections": [],
                "id": "1"
              },
              {
                "type": "comment",
                "text": "Work correctly",
                "id": "6623017b-3464-49d6-9f57-0eafca55ca07"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "77598a5a-d939-44f2-a898-35c8b326cfaa"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "3d1f54eb-ed3d-40f7-872e-fa589368b0cc"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "a1da78d5-3a83-4ccc-a701-cadadc27f6e3"
              },
              {
                "type": "comment",
                "text": "Correct assertion",
                "id": "9729dcc6-8e58-4ed9-994a-d732ed37478b"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "17"
                },
                "collections": [],
                "id": "2"
              },
              {
                "type": "comment",
                "text": "Incorrect assertion",
                "id": "fdba2740-c8d0-499d-a1ea-28a83948544c"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "2",
                  "number2": "2",
                  "sum": "5"
                },
                "collections": [],
                "id": "f2bcd75c-1f5e-406d-ae4d-057cabde7c37"
              },
              {
                "type": "comment",
                "text": "Line assertions",
                "id": "f001d2c5-8711-4857-8f3b-278f1cd50fe9"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "3"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "4"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "5"
              }
            ],
            "activeCells": {},
            "id": "d2a6ff9c-e0b9-4954-b4d7-cafa8f7d01b9"
          },
          {
            "type": "comment",
            "text": "Comment\r\n\r\nAnother Comment",
            "id": "bb4e4cbc-dd2f-4c6c-a5c8-98b352d3f0e6"
          },
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Show a syntax failure",
                "id": "51b7c960-2215-42e4-ba37-64be456b3188"
              }
            ],
            "activeCells": {},
            "id": "790d582e-2aa0-4de8-a780-f9fd53a5569d"
          }
        ],
        "id": "sentence4"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3958fb85-ed47-43e1-9e95-0ed3db2cb44d",
            "spec": "set1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d7698bb2-2898-4167-8c0b-d6e3bfaed053",
            "spec": "set1",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "389cfb3d-4ade-42fb-9f12-bc23bb2d728a",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "389cfb3d-4ade-42fb-9f12-bc23bb2d728a",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "389cfb3d-4ade-42fb-9f12-bc23bb2d728a",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "389cfb3d-4ade-42fb-9f12-bc23bb2d728a",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "389cfb3d-4ade-42fb-9f12-bc23bb2d728a",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8a6eedfc-5b26-49de-be77-8365c18d9a1f",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8a6eedfc-5b26-49de-be77-8365c18d9a1f",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8a6eedfc-5b26-49de-be77-8365c18d9a1f",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8a6eedfc-5b26-49de-be77-8365c18d9a1f",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8a6eedfc-5b26-49de-be77-8365c18d9a1f",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "01269ddc-53d1-4418-a67d-aa4a6780e73d",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "01269ddc-53d1-4418-a67d-aa4a6780e73d",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "01269ddc-53d1-4418-a67d-aa4a6780e73d",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "01269ddc-53d1-4418-a67d-aa4a6780e73d",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "01269ddc-53d1-4418-a67d-aa4a6780e73d",
            "spec": "set1",
            "position": "4",
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
              "4bb8a32e-b7d9-4ae0-b717-08d6b33b2ca8",
              "d34949c2-1c7b-4331-8c8d-893a05675c48"
            ],
            "missing": [],
            "extras": [
              {
                "Amount": "300.3",
                "Date": "1/13/2017 12:00:00 AM",
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
              "54e2bd65-3d52-4548-901e-fff3e865db99",
              "9ce43366-92aa-4946-8f30-15542eb9bc70",
              "196afcf8-5d2f-4024-818a-fb48e6d27640"
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
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "Date",
                "errorDisplay": "text",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "12",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3958fb85-ed47-43e1-9e95-0ed3db2cb44d",
            "spec": "set1",
            "position": "teardown",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Ordered Set",
            "start": 0,
            "end": 10,
            "duration": 10
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
            "start": 2,
            "end": 8,
            "duration": 6
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
            "end": 9,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 9,
            "end": 10,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 10,
            "end": 10,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 10,
            "end": 10,
            "duration": 0
          }
        ],
        "duration": 10,
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
        "time": "8:08 PM",
        "counts": {
          "rights": 8,
          "wrongs": 5,
          "errors": 0,
          "invalids": 1
        }
      },
      "specification": {
        "title": "Ordered Set",
        "path": "Sets/Ordered Set",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                        "key": "row",
                        "cells": {
                          "Name": "Cord",
                          "Amount": "100.1",
                          "Date": "TODAY"
                        },
                        "collections": [],
                        "id": "389cfb3d-4ade-42fb-9f12-bc23bb2d728a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "8a6eedfc-5b26-49de-be77-8365c18d9a1f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "01269ddc-53d1-4418-a67d-aa4a6780e73d"
                      }
                    ],
                    "activeCells": {},
                    "id": "d7698bb2-2898-4167-8c0b-d6e3bfaed053"
                  }
                ],
                "id": "f49b0168-5b45-4c37-9e64-93706b53058f"
              },
              {
                "type": "comment",
                "text": "Completely successful ordering",
                "id": "d45b5465-adf1-4b36-8b60-a54575a3e697"
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
                        "key": "row",
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
                        "key": "row",
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
                        "key": "row",
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
                "id": "ad37cb4c-5199-466d-9eb7-c9eda96970ad"
              },
              {
                "type": "comment",
                "text": "Out of order",
                "id": "bdd1646e-b460-4e60-9228-46621a8e0732"
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
                        "key": "row",
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
                        "key": "row",
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
                        "key": "row",
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
                "id": "bf2a67fb-7a74-4fa9-8f11-454eb11d30e2"
              },
              {
                "type": "comment",
                "text": "Should have one exra",
                "id": "d5be8b64-cbbb-43ca-b5ed-3eb6d4ece6a2"
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
                        "key": "row",
                        "cells": {
                          "Name": "Cord",
                          "Amount": "100.1",
                          "Order": "1",
                          "Date": "TODAY"
                        },
                        "collections": [],
                        "id": "4bb8a32e-b7d9-4ae0-b717-08d6b33b2ca8"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Order": "2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "d34949c2-1c7b-4331-8c8d-893a05675c48"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "73f62c49-dd5b-42e2-ba48-ded8c8577438"
              },
              {
                "type": "comment",
                "text": "Should mark one expected result as missing",
                "id": "b8acc6ec-4e0e-44f9-aea2-12a842d74506"
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
                        "key": "row",
                        "cells": {
                          "Name": "Cord",
                          "Amount": "100.1",
                          "Order": "1",
                          "Date": "TODAY",
                          "id": ""
                        },
                        "collections": [],
                        "id": "54e2bd65-3d52-4548-901e-fff3e865db99"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Order": "2",
                          "Date": "TODAY+1",
                          "id": ""
                        },
                        "collections": [],
                        "id": "9ce43366-92aa-4946-8f30-15542eb9bc70"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Order": "3",
                          "Date": "TODAY+2",
                          "id": ""
                        },
                        "collections": [],
                        "id": "196afcf8-5d2f-4024-818a-fb48e6d27640"
                      },
                      {
                        "key": "row",
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
                "id": "a76a965d-4bd2-4111-9876-7e0b98704817"
              },
              {
                "type": "comment",
                "text": "One syntax error",
                "id": "b9f15a64-b7ec-4116-8bf9-2361b3ebc10b"
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
                        "key": "row",
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
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Order": "2",
                          "Date": "TODAY+1",
                          "id": ""
                        },
                        "collections": [],
                        "id": "73b2e749-45dd-4e63-ba4d-7dd9a29cb074"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Order": "3",
                          "Date": "TODAY+2",
                          "id": ""
                        },
                        "collections": [],
                        "id": "d209ba29-d4cb-4207-b5c4-4e696c438f44"
                      }
                    ],
                    "activeCells": {},
                    "id": "b91db70d-d85d-482a-baee-ab0316e8f74a"
                  }
                ],
                "id": "13033b3f-b5dc-494a-b461-f7cbf16747aa"
              }
            ],
            "activeCells": {},
            "id": "3958fb85-ed47-43e1-9e95-0ed3db2cb44d"
          }
        ],
        "id": "set1"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "55180f49-0a41-4343-ac3c-8144c00d1d70",
            "spec": "set2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "50a9b2be-1266-44c3-83c2-531e2dd8d51e",
            "spec": "set2",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c8b5adfb-d5f5-440f-bf97-588bb70bb9dc",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "72586ab7-0cc3-425a-830d-58effca45340",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d3d0dcb9-9f8a-4d49-a4f3-6321e834693a",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "61edee10-a554-4248-86cc-35a8583bc1b6",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5d2426d7-48ad-4cec-850a-4e6a5da009f8",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "17258086-daca-4547-8772-175cc4769fa9",
              "98776584-0e37-4001-8e44-c664ffe9a143",
              "85c70baf-2603-4666-bb24-5a63be2a995b",
              "49a1e7a2-cd7b-4376-8d77-1747d0c2b2d4",
              "1601ba23-e802-4c67-885d-d54030cb903c"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "a1002abc-db4a-4e31-ac23-0a67f29164e5",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "b2f11a06-dcc6-4c3d-9770-d5c255a9d757",
              "8a02274a-0350-4333-bf65-f5847724d387",
              "0ce0a066-3dd3-49b7-90d6-59a6cb654959",
              "f36a30de-9c09-4ad3-8c90-bf493e61054e",
              "1d56f39c-f1cd-4a21-8a90-f65a10ef55a2"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "30e26221-52f7-43d7-8b5c-51a00da15d9a",
            "type": "set-verification-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "55180f49-0a41-4343-ac3c-8144c00d1d70",
            "spec": "set2",
            "position": "teardown",
            "type": "step-result"
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
            "start": 2,
            "end": 2,
            "duration": 0
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
        "time": "8:08 PM",
        "counts": {
          "rights": 10,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Successful OrderedStrings",
        "path": "Sets/Successful OrderedStrings",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                        "key": "row",
                        "cells": {
                          "name": "Jeremy"
                        },
                        "collections": [],
                        "id": "c8b5adfb-d5f5-440f-bf97-588bb70bb9dc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "72586ab7-0cc3-425a-830d-58effca45340"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "d3d0dcb9-9f8a-4d49-a4f3-6321e834693a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "61edee10-a554-4248-86cc-35a8583bc1b6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "5d2426d7-48ad-4cec-850a-4e6a5da009f8"
                      }
                    ],
                    "activeCells": {},
                    "id": "50a9b2be-1266-44c3-83c2-531e2dd8d51e"
                  }
                ],
                "id": "05ccc87d-2d5f-46a6-a1f4-1aa54195477e"
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
                        "key": "row",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "17258086-daca-4547-8772-175cc4769fa9"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "98776584-0e37-4001-8e44-c664ffe9a143"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "85c70baf-2603-4666-bb24-5a63be2a995b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "49a1e7a2-cd7b-4376-8d77-1747d0c2b2d4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "1601ba23-e802-4c67-885d-d54030cb903c"
                      }
                    ],
                    "activeCells": {},
                    "id": "a1002abc-db4a-4e31-ac23-0a67f29164e5"
                  }
                ],
                "id": "d43000f4-90fc-4713-a1a9-2e59e41c79fa"
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
                        "key": "row",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "b2f11a06-dcc6-4c3d-9770-d5c255a9d757"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "8a02274a-0350-4333-bf65-f5847724d387"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "0ce0a066-3dd3-49b7-90d6-59a6cb654959"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "f36a30de-9c09-4ad3-8c90-bf493e61054e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "1d56f39c-f1cd-4a21-8a90-f65a10ef55a2"
                      }
                    ],
                    "activeCells": {},
                    "id": "30e26221-52f7-43d7-8b5c-51a00da15d9a"
                  }
                ],
                "id": "d5be15a7-b6a1-416a-ad8a-e4d96224c198"
              }
            ],
            "activeCells": {},
            "id": "55180f49-0a41-4343-ac3c-8144c00d1d70"
          }
        ],
        "id": "set2"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "874ab644-f1e4-403d-83fd-a929b44083d2",
            "spec": "set3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.AggregateException: One or more errors occurred. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<>c.<ThrowsErrorOnDataFetch>b__3_0()\r\n   at StoryTeller.Fixture.<>c__DisplayClass45_0`1.<VerifySetOf>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3_0.<Fetch>b__0()\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---> (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<>c.<ThrowsErrorOnDataFetch>b__3_0()\r\n   at StoryTeller.Fixture.<>c__DisplayClass45_0`1.<VerifySetOf>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3_0.<Fetch>b__0()\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()<---\r\n",
            "cells": [],
            "id": "1",
            "spec": "set3",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "874ab644-f1e4-403d-83fd-a929b44083d2",
            "spec": "set3",
            "position": "teardown",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Set with Error",
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
            "html": "<pre class=\"bg-warning\">System.AggregateException: One or more errors occurred. ---&gt; System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;&gt;c.&lt;ThrowsErrorOnDataFetch&gt;b__3_0()\r\n   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass45_0`1.&lt;VerifySetOf&gt;b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3_0.&lt;Fetch&gt;b__0()\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---&gt; (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;&gt;c.&lt;ThrowsErrorOnDataFetch&gt;b__3_0()\r\n   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass45_0`1.&lt;VerifySetOf&gt;b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3_0.&lt;Fetch&gt;b__0()\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()&lt;---\r\n</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "8:08 PM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 1,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Set with Error",
        "path": "Sets/Set with Error",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                        "key": "row",
                        "cells": {
                          "Name": "a"
                        },
                        "collections": [],
                        "id": "4fb128c0-4a0a-430a-8d3a-113931b4f115"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "e50b022d-ae9c-4e05-9172-9d384e063996"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "68ef6344-0fad-4856-b652-860e943eb4e2"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "9b7f87f1-aa69-4063-8362-376704ecaad8"
              }
            ],
            "activeCells": {},
            "id": "874ab644-f1e4-403d-83fd-a929b44083d2"
          }
        ],
        "id": "set3"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "40067bf6-f451-44d6-8286-5d20c5ded5f1",
            "spec": "set4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a7ad1d8e-23f6-4361-a0b9-93ff10ee027b",
            "spec": "set4",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "352be14b-6189-4ba6-95c7-e6b64b350fb3",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "352be14b-6189-4ba6-95c7-e6b64b350fb3",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "352be14b-6189-4ba6-95c7-e6b64b350fb3",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "352be14b-6189-4ba6-95c7-e6b64b350fb3",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "352be14b-6189-4ba6-95c7-e6b64b350fb3",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0277cbd8-a475-458d-bb47-c75dcc363d70",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0277cbd8-a475-458d-bb47-c75dcc363d70",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0277cbd8-a475-458d-bb47-c75dcc363d70",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0277cbd8-a475-458d-bb47-c75dcc363d70",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0277cbd8-a475-458d-bb47-c75dcc363d70",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cb843e36-4950-4911-ae03-96d6e036e165",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cb843e36-4950-4911-ae03-96d6e036e165",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cb843e36-4950-4911-ae03-96d6e036e165",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cb843e36-4950-4911-ae03-96d6e036e165",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cb843e36-4950-4911-ae03-96d6e036e165",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "Amount",
                "errorDisplay": "text",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "5d9dc20f-ecf9-407f-9ad9-edee440c1a84",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "40067bf6-f451-44d6-8286-5d20c5ded5f1",
            "spec": "set4",
            "position": "teardown",
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
        "time": "8:08 PM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 1
        }
      },
      "specification": {
        "title": "Unordered Set",
        "path": "Sets/Unordered Set",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                        "key": "row",
                        "cells": {
                          "Amount": "100.1",
                          "Date": "TODAY",
                          "Name": "Cord"
                        },
                        "collections": [],
                        "id": "352be14b-6189-4ba6-95c7-e6b64b350fb3"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "0277cbd8-a475-458d-bb47-c75dcc363d70"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "cb843e36-4950-4911-ae03-96d6e036e165"
                      }
                    ],
                    "activeCells": {},
                    "id": "a7ad1d8e-23f6-4361-a0b9-93ff10ee027b"
                  }
                ],
                "id": "1e856478-8d79-4a18-9924-3aca76044a02"
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
                        "key": "row",
                        "cells": {
                          "Amount": "invalid",
                          "Date": "TODAY+3",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "5d9dc20f-ecf9-407f-9ad9-edee440c1a84"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "871f3501-868b-40a8-bbc6-ff8375df61d6"
                      }
                    ],
                    "activeCells": {},
                    "id": "0ad55aa8-7faa-46f0-b70b-09bdf239d735"
                  }
                ],
                "id": "55cd3463-f314-4ca5-a4d7-daba4e554ce9"
              }
            ],
            "activeCells": {},
            "id": "40067bf6-f451-44d6-8286-5d20c5ded5f1"
          }
        ],
        "id": "set4"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "618e931a-fe4c-44ea-a68f-bcbd434b6dcb",
            "spec": "set5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "706f82a9-14e3-4895-808b-111680b41c8c",
            "spec": "set5",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e191b2e0-f59f-4a9e-8e2e-d8581b4a1469",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f92ba66c-d3ac-4113-9b6b-39003b2fe4a2",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e3cf35e5-a23d-45f1-af30-ed7ebcd3b45d",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "20cd5887-4ecc-433d-8e43-d80952e124e6",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5a00555f-cee3-4215-ba4d-b76c4e0d1e45",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "90d3a6f1-5de7-464b-afe4-6c8dd684fcdb",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "58db2041-7de0-4771-938e-364b73ef9f3e",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f4c6794e-b5c1-4f68-899c-8c696f40b309",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "7bac359a-a3ec-42ed-97a7-b8b0c526ce99",
              "b09f8eeb-7754-44a6-813f-60af07e2507c",
              "c342492f-e03a-4a9b-adad-bb2f3a7b42b9",
              "5389f877-c8c4-4562-972e-4269f8b9fac5"
            ],
            "missing": [
              "0a8702df-bef2-43dd-b0e0-2d369b2f3a9f"
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
                "id": "8b89f20e-99f2-4660-b42c-5c387ab462c7"
              },
              {
                "actual": 4,
                "id": "7dcfc54a-f87d-4a08-bced-f217f4031b77"
              }
            ],
            "id": "0ffd8c34-dc2b-406b-a9bf-093b6a7bbf69",
            "type": "set-verification-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "618e931a-fe4c-44ea-a68f-bcbd434b6dcb",
            "spec": "set5",
            "position": "teardown",
            "type": "step-result"
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
        "time": "8:08 PM",
        "counts": {
          "rights": 4,
          "wrongs": 5,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Unsuccessful Ordering",
        "path": "Sets/Unsuccessful Ordering",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                        "id": "e191b2e0-f59f-4a9e-8e2e-d8581b4a1469"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "f92ba66c-d3ac-4113-9b6b-39003b2fe4a2"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "e3cf35e5-a23d-45f1-af30-ed7ebcd3b45d"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "20cd5887-4ecc-433d-8e43-d80952e124e6"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "5a00555f-cee3-4215-ba4d-b76c4e0d1e45"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "90d3a6f1-5de7-464b-afe4-6c8dd684fcdb"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "58db2041-7de0-4771-938e-364b73ef9f3e"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "f4c6794e-b5c1-4f68-899c-8c696f40b309"
                      }
                    ],
                    "activeCells": {},
                    "id": "706f82a9-14e3-4895-808b-111680b41c8c"
                  }
                ],
                "id": "2fc60182-e977-489d-b8ee-14575d1cc5d3"
              },
              {
                "type": "comment",
                "text": "All data is correct, but in the wrong order",
                "id": "cc48e2f2-33f5-45df-805a-20fd531e5514"
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
                        "id": "7bac359a-a3ec-42ed-97a7-b8b0c526ce99"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "b09f8eeb-7754-44a6-813f-60af07e2507c"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "c342492f-e03a-4a9b-adad-bb2f3a7b42b9"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "8b89f20e-99f2-4660-b42c-5c387ab462c7"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "7dcfc54a-f87d-4a08-bced-f217f4031b77"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "0a8702df-bef2-43dd-b0e0-2d369b2f3a9f"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "5389f877-c8c4-4562-972e-4269f8b9fac5"
                      }
                    ],
                    "activeCells": {},
                    "id": "0ffd8c34-dc2b-406b-a9bf-093b6a7bbf69"
                  }
                ],
                "id": "88d84842-297f-43ea-8355-62312050652e"
              }
            ],
            "activeCells": {},
            "id": "618e931a-fe4c-44ea-a68f-bcbd434b6dcb"
          }
        ],
        "id": "set5"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f9a40384-0e5d-4f63-864e-016de7d6f0d4",
            "spec": "table1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "IsEven",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "034453e7-2fbc-4e83-9537-50c3037fadbd",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "IsEven",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "2abcb879-e132-462e-8104-8e1c5aed0491",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f9a40384-0e5d-4f63-864e-016de7d6f0d4",
            "spec": "table1",
            "position": "teardown",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Boolean Results in a Table",
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
        "time": "8:08 PM",
        "counts": {
          "rights": 2,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Boolean Results in a Table",
        "path": "Tables/Boolean Results in a Table",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                        "id": "034453e7-2fbc-4e83-9537-50c3037fadbd"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "2abcb879-e132-462e-8104-8e1c5aed0491"
                      }
                    ],
                    "activeCells": {},
                    "id": "e053e429-16ee-48e5-8087-2335638b98e5"
                  }
                ],
                "id": "c25dba97-af95-46c6-bb82-0aa8b66ee4e8"
              }
            ],
            "activeCells": {},
            "id": "f9a40384-0e5d-4f63-864e-016de7d6f0d4"
          }
        ],
        "id": "table1"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a7e0478b-bf2b-4085-aeef-70f53decfa63",
            "spec": "table2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "FirstName",
                "errorDisplay": "text",
                "id": null,
                "status": "ok"
              },
              {
                "actual": null,
                "error": null,
                "cell": "LastName",
                "errorDisplay": "text",
                "id": null,
                "status": "ok"
              },
              {
                "actual": null,
                "error": null,
                "cell": "FullName",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              },
              {
                "actual": null,
                "error": null,
                "cell": "LastNameFirst",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "e74231e9-b84f-4af0-94a1-0bae30c1123a",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "FirstName",
                "errorDisplay": "text",
                "id": null,
                "status": "ok"
              },
              {
                "actual": null,
                "error": null,
                "cell": "LastName",
                "errorDisplay": "text",
                "id": null,
                "status": "ok"
              },
              {
                "actual": "Hank Hill",
                "error": null,
                "cell": "FullName",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              },
              {
                "actual": "Hill, Hank",
                "error": null,
                "cell": "LastNameFirst",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "30a4e316-d6e0-4045-965c-724acd1135d9",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a7e0478b-bf2b-4085-aeef-70f53decfa63",
            "spec": "table2",
            "position": "teardown",
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Decision Table",
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
        "time": "8:08 PM",
        "counts": {
          "rights": 2,
          "wrongs": 2,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Decision Table",
        "path": "Tables/Decision Table",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                        "key": "row",
                        "cells": {
                          "FirstName": "Jeremy",
                          "LastName": "Miller",
                          "FullName": "Jeremy Miller",
                          "LastNameFirst": "Miller, Jeremy"
                        },
                        "collections": [],
                        "id": "80e8d7fe-eefc-460b-bb7d-73160968b99a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "FirstName": "Matt",
                          "LastName": "Cassel",
                          "FullName": "Big Chief",
                          "LastNameFirst": "Chief, Big"
                        },
                        "collections": [],
                        "id": "e845a06c-11b7-4b7f-a45b-9cced775f637"
                      }
                    ],
                    "activeCells": {},
                    "id": "6972420a-287c-4880-b702-3cc960f59117"
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
                        "id": "e74231e9-b84f-4af0-94a1-0bae30c1123a"
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
                        "id": "30a4e316-d6e0-4045-965c-724acd1135d9"
                      }
                    ],
                    "activeCells": {},
                    "id": "5b58abc0-6925-42c7-8a2d-71479f36ab00"
                  }
                ],
                "id": "d8837e05-66ae-47dd-bc1b-2212b4904dc4"
              }
            ],
            "activeCells": {},
            "id": "a7e0478b-bf2b-4085-aeef-70f53decfa63"
          }
        ],
        "id": "table2"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "56c1b532-c55f-4322-af8d-adb5ede5ce73",
            "spec": "table3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "80f31217-dd5d-4b5b-a803-d30a6e8a19cf",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "97784147-6ee4-474d-99ec-74319b8c6253",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1137d353-c1a1-4796-8738-97370f3e291e",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b933fe35-c249-41b2-9c9f-3089e24d7ca9",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "56c1b532-c55f-4322-af8d-adb5ede5ce73",
            "spec": "table3",
            "position": "teardown",
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
        "time": "8:08 PM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Table with Optional Columns",
        "path": "Tables/Table with Optional Columns",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                        "id": "80f31217-dd5d-4b5b-a803-d30a6e8a19cf"
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
                        "id": "97784147-6ee4-474d-99ec-74319b8c6253"
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
                        "id": "1137d353-c1a1-4796-8738-97370f3e291e"
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
                        "id": "b933fe35-c249-41b2-9c9f-3089e24d7ca9"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "5fd26710-4a3c-49b6-bfb3-f2ec9ed90cec"
                  }
                ],
                "id": "e7ea25f8-425a-4d4f-ad9f-1cbb9f98c812"
              }
            ],
            "activeCells": {},
            "id": "56c1b532-c55f-4322-af8d-adb5ede5ce73"
          }
        ],
        "id": "table3"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "425249c3-f30f-4b40-b880-e7a5c5dd661f",
            "spec": "table4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<>c.<BeforeThrowsError>b__6_2()\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass16_0.<Before>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "before",
            "spec": "table4",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d87741ae-1646-425b-8551-956075e5cfbb",
            "spec": "table4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7e212648-680e-409f-b427-ea037defa896",
            "spec": "table4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<>c.<AfterThrowsError>b__7_2()\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass18_0.<After>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "after",
            "spec": "table4",
            "position": "after",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "425249c3-f30f-4b40-b880-e7a5c5dd661f",
            "spec": "table4",
            "position": "teardown",
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.&lt;&gt;c.&lt;BeforeThrowsError&gt;b__6_2()\r\n   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass16_0.&lt;Before&gt;b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre><pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.&lt;&gt;c.&lt;AfterThrowsError&gt;b__7_2()\r\n   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass18_0.&lt;After&gt;b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "8:08 PM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 2,
          "invalids": 0
        }
      },
      "specification": {
        "title": "Tables with Errors",
        "path": "Tables/Tables with Errors",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
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
                        "id": "d87741ae-1646-425b-8551-956075e5cfbb"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "926cd05e-e627-49bc-a416-fb8860de4a37"
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
                        "id": "7e212648-680e-409f-b427-ea037defa896"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "7139c33d-4fa4-4423-be25-3375596c80a9"
              }
            ],
            "activeCells": {},
            "id": "425249c3-f30f-4b40-b880-e7a5c5dd661f"
          }
        ],
        "id": "table4"
      }
    },
    {
      "results": {
        "results": [
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cfd78f37-794f-45d9-9d10-cfc80228cf01",
            "spec": "table5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4574e023-5a04-48ee-bb66-af057b013ba8",
            "spec": "table5",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "x",
                "errorDisplay": "text",
                "id": null,
                "status": "invalid"
              },
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "y",
                "errorDisplay": "text",
                "id": null,
                "status": "invalid"
              },
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "sum",
                "errorDisplay": "text",
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
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "sum",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "1b6c26e5-e571-4ee9-83d9-f47b295df1e7",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "4",
                "error": null,
                "cell": "sum",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "2995c460-9932-46f5-974c-a16a64093134",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4574e023-5a04-48ee-bb66-af057b013ba8",
            "spec": "table5",
            "position": "after",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "product",
                "errorDisplay": "text",
                "id": null,
                "status": "success"
              }
            ],
            "id": "4",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": "Infinity",
                "error": null,
                "cell": "product",
                "errorDisplay": "text",
                "id": null,
                "status": "failed"
              }
            ],
            "id": "5",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "162bba60-272d-443c-9a7e-b7e9dc6f9c97",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "x",
                "errorDisplay": "text",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "162bba60-272d-443c-9a7e-b7e9dc6f9c97",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "162bba60-272d-443c-9a7e-b7e9dc6f9c97",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "product",
                "errorDisplay": "text",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "162bba60-272d-443c-9a7e-b7e9dc6f9c97",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "159f5640-452b-4a79-921b-ee9c9caa709d",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "159f5640-452b-4a79-921b-ee9c9caa709d",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "159f5640-452b-4a79-921b-ee9c9caa709d",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "product",
                "errorDisplay": "text",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "159f5640-452b-4a79-921b-ee9c9caa709d",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cfd78f37-794f-45d9-9d10-cfc80228cf01",
            "spec": "table5",
            "position": "teardown",
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
            "subject": "SumBefore",
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
            "subject": "Sum:After",
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
            "end": 3,
            "duration": 2
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
        "time": "8:08 PM",
        "counts": {
          "rights": 2,
          "wrongs": 2,
          "errors": 0,
          "invalids": 6
        }
      },
      "specification": {
        "title": "Tables",
        "path": "Tables/Tables",
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Friday, October 14, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Table",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Table by the ExposeAsTable attribute",
                "id": "de050502-cf58-46e0-9537-60573f29ff29"
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
                        "key": "row",
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
                        "key": "row",
                        "cells": {
                          "x": "2",
                          "y": "2",
                          "sum": "4",
                          "id": ""
                        },
                        "collections": [],
                        "id": "1b6c26e5-e571-4ee9-83d9-f47b295df1e7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "2",
                          "y": "2",
                          "sum": "5",
                          "id": ""
                        },
                        "collections": [],
                        "id": "2995c460-9932-46f5-974c-a16a64093134"
                      }
                    ],
                    "activeCells": {},
                    "id": "4574e023-5a04-48ee-bb66-af057b013ba8"
                  }
                ],
                "id": "cd1bb15c-8b3d-440b-8a09-b24c29b01c63"
              },
              {
                "type": "comment",
                "text": "Table fixture from script",
                "id": "86ae94a3-0725-4ad5-acf0-c482242c738a"
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
                        "key": "row",
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
                        "key": "row",
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
                        "key": "row",
                        "cells": {
                          "x": "a",
                          "y": "3",
                          "product": "****",
                          "id": ""
                        },
                        "collections": [],
                        "id": "162bba60-272d-443c-9a7e-b7e9dc6f9c97"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "3",
                          "y": "3",
                          "product": "****",
                          "id": ""
                        },
                        "collections": [],
                        "id": "159f5640-452b-4a79-921b-ee9c9caa709d"
                      }
                    ],
                    "activeCells": {},
                    "id": "6dc808e2-a552-4b96-bc03-228d97cf17a2"
                  }
                ],
                "id": "8fa6a80d-6d1c-4129-9cde-23343d3d1317"
              }
            ],
            "activeCells": {},
            "id": "cfd78f37-794f-45d9-9d10-cfc80228cf01"
          }
        ],
        "id": "table5"
      }
    }
  ],
  "fixtures": [
    {
      "title": "Check Properties",
      "key": "CheckObject",
      "implementation": "StoryTeller.Samples.Fixtures.CheckObjectFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "children": [
            {
              "key": "Divide:Row:0",
              "type": "silent",
              "cells": [],
              "errors": [],
              "missing": false
            },
            {
              "format": "Address1 = {Address1}",
              "fact": false,
              "key": "IfTheAddressIs:1",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "Address1",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "Address2 = {Address2}",
              "fact": false,
              "key": "IfTheAddressIs:2",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "Address2",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "City = {City}",
              "fact": false,
              "key": "IfTheAddressIs:3",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "City",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "StateOrProvince = {StateOrProvince}",
              "fact": false,
              "key": "IfTheAddressIs:4",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "StateOrProvince",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "Country = {Country}",
              "fact": false,
              "key": "IfTheAddressIs:5",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "Country",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "PostalCode = {PostalCode}",
              "fact": false,
              "key": "IfTheAddressIs:6",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "PostalCode",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            }
          ],
          "title": "If the new address is",
          "key": "IfTheAddressIs",
          "type": "paragraph",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Address1",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Address2",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "City",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "StateOrProvince",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Country",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "PostalCode",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "children": [
            {
              "format": "Address1 should be {Address1}",
              "fact": false,
              "key": "TheAddressShouldBe:0",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "Address1",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "Address2 should be {Address2}",
              "fact": false,
              "key": "TheAddressShouldBe:1",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "Address2",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "City should be {City}",
              "fact": false,
              "key": "TheAddressShouldBe:2",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "City",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            }
          ],
          "title": "then the new address properties should be",
          "key": "TheAddressShouldBe",
          "type": "paragraph",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Address1",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Address2",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "City",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for CheckObject",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "CheckObject",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CheckObjectFixture",
                "id": "0f7b6d03-bb14-4858-9f3a-361f1fa16a45"
              },
              {
                "type": "comment",
                "text": "## IfTheAddressIs",
                "id": "4114ef80-7c57-46e8-8b7b-ffa6305c8585"
              },
              {
                "key": "IfTheAddressIs",
                "cells": {
                  "Address1": "Address1",
                  "Address2": "Address2",
                  "City": "City",
                  "StateOrProvince": "StateOrProvince",
                  "Country": "Country",
                  "PostalCode": "PostalCode"
                },
                "collections": [],
                "id": "96f9dd75-6234-4e2a-9d5d-373603547d6b"
              },
              {
                "type": "comment",
                "text": "## TheAddressShouldBe",
                "id": "50d5c923-a4e1-42ed-aa78-61be25b508eb"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "Address1",
                  "Address2": "Address2",
                  "City": "City"
                },
                "collections": [],
                "id": "3186f027-dd60-4675-9525-7017b4d9c325"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "2e9b715a-dd01-463d-b1b8-c867e3a72eb3"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "d9970e8c-a322-41f0-9cfc-886b26c4eabb"
              }
            ],
            "activeCells": {},
            "id": "96c6ec26-512f-4f51-b623-882789d92520"
          }
        ],
        "id": "34e5e5cb-44d5-477d-9f1b-5c362c26d08a"
      },
      "sampleMarkdown": "# Sample Specification for CheckObject\r\n\r\n-> id = 458c020d-4459-4a00-8a60-02ad82b5563c\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8449839-06:00\r\n-> tags = \r\n\r\n[CheckObject]\r\n|> IfTheAddressIs Address1=Address1, Address2=Address2, City=City, StateOrProvince=StateOrProvince, Country=Country, PostalCode=PostalCode\r\n|> TheAddressShouldBe Address1=Address1, Address2=Address2, City=City\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Composite",
      "key": "Composite",
      "implementation": "StoryTeller.Samples.Fixtures.CompositeFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Adding {x} to {y} should be {returnValue}",
          "fact": false,
          "key": "Adding",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": "NULL",
              "editor": null,
              "header": null,
              "key": "returnValue",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Adding {x} to 5 should be {returnValue}",
          "fact": false,
          "key": "AddTo5",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": "NULL",
              "editor": null,
              "header": null,
              "key": "returnValue",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The number should start with {starting}",
          "fact": false,
          "key": "StartWith",
          "type": "sentence",
          "cells": [
            {
              "default": "11",
              "editor": null,
              "header": null,
              "key": "starting",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "+= {operand}",
          "fact": false,
          "key": "Add",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "*= {multiplier}",
          "fact": false,
          "key": "MultiplyBy",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "multiplier",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Value should be {expected}",
          "fact": false,
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "expected",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "children": [
            {
              "format": "The number should start with {starting}",
              "fact": false,
              "key": "StartWith",
              "type": "sentence",
              "cells": [
                {
                  "default": "11",
                  "editor": null,
                  "header": null,
                  "key": "starting",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "+= {operand}",
              "fact": false,
              "key": "Add",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "operand",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "*= {multiplier}",
              "fact": false,
              "key": "MultiplyBy",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "multiplier",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "Value should be {expected}",
              "fact": false,
              "key": "TheValueShouldBe",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "expected",
                  "options": null,
                  "result": true
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "key": "Divide:Row:0",
              "type": "silent",
              "cells": [],
              "errors": [],
              "missing": false
            }
          ],
          "title": "Add and Multiply",
          "key": "AddAndMultiply",
          "type": "paragraph",
          "cells": [
            {
              "default": "11",
              "editor": null,
              "header": null,
              "key": "starting",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "multiplier",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "expected",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": "11",
              "editor": null,
              "header": null,
              "key": "starting",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "multiplier",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "expected",
              "options": null,
              "result": true
            }
          ],
          "collection": "Rows",
          "title": "Add and Multiply in a Table",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "AddAndMultiplyTable",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "children": [
            {
              "format": "The number should start with {starting}",
              "fact": false,
              "key": "StartWith",
              "type": "sentence",
              "cells": [
                {
                  "default": "11",
                  "editor": null,
                  "header": null,
                  "key": "starting",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "+= {operand}",
              "fact": false,
              "key": "Add",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "operand",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "*= {multiplier}",
              "fact": false,
              "key": "MultiplyBy",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "multiplier",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "key": "Divide:Row:0",
              "type": "silent",
              "cells": [],
              "errors": [],
              "missing": false
            },
            {
              "format": "Value should be {expected}",
              "fact": false,
              "key": "TheValueShouldBe",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "expected",
                  "options": null,
                  "result": true
                }
              ],
              "errors": [],
              "missing": false
            }
          ],
          "title": "Add and Multiply",
          "key": "AddAndMultiplyThrow",
          "type": "paragraph",
          "cells": [
            {
              "default": "11",
              "editor": null,
              "header": null,
              "key": "starting",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "multiplier",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "expected",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "-= {operand}",
          "fact": false,
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": true
            }
          ],
          "collection": "operation",
          "title": "When adding numbers",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "AddTable",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "children": [
            {
              "format": "The number should start with {starting}",
              "fact": false,
              "key": "StartWith",
              "type": "sentence",
              "cells": [
                {
                  "default": "11",
                  "editor": null,
                  "header": null,
                  "key": "starting",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "+= {operand}",
              "fact": false,
              "key": "Add",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "operand",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "Value should be {expected}",
              "fact": false,
              "key": "TheValueShouldBe",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "expected",
                  "options": null,
                  "result": true
                }
              ],
              "errors": [],
              "missing": false
            }
          ],
          "title": "Add and check",
          "key": "AddAndCheck",
          "type": "paragraph",
          "cells": [
            {
              "default": "11",
              "editor": null,
              "header": null,
              "key": "starting",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "expected",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Throw()",
          "fact": false,
          "key": "Throw",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for Composite",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Composite",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CompositeFixture",
                "id": "6dedbd0a-1b6f-49b4-8b6d-1af6f54f4dae"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "479c6831-4091-4422-bbaa-cc2fcc97a470"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "92bafb94-fe9c-40bf-bf90-15353674ccdd"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "ba24b602-9258-4e7c-9947-6abaa8da9013"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "af63ecde-fade-4fb4-9531-769911fe17be"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiply",
                "id": "29bd6338-b031-4059-a48b-b9b22aae4872"
              },
              {
                "key": "AddAndMultiply",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "multiplier": "multiplier",
                  "expected": "expected"
                },
                "collections": [],
                "id": "0c93a847-3f5e-4c03-bd9e-e80188f39f74"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyTable",
                "id": "a3455d32-9800-4943-a048-f282ba3b8b48"
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
                        "key": "row",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "multiplier": "multiplier",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "262f4976-8f62-48cb-9302-27d1b7751c09"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "multiplier": "multiplier",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "1dc26b57-1c0d-4135-9e14-dcac1ea204cd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "multiplier": "multiplier",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "787b7486-6bf0-464c-a019-9af62c47d9e2"
                      }
                    ],
                    "activeCells": {},
                    "id": "81ffda85-59de-4620-9a06-f986cd2231fe"
                  }
                ],
                "id": "f6de8bd1-cc4a-46c7-bd0a-b38333e25c45"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyThrow",
                "id": "f50fd2e0-5fa4-41ef-9f3e-a8ddba371502"
              },
              {
                "key": "AddAndMultiplyThrow",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "multiplier": "multiplier",
                  "expected": "expected"
                },
                "collections": [],
                "id": "c82b0def-8ee2-48b1-a3e0-43e1ac2a845e"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "5f93f7d0-c0da-4a8e-85e5-33d2b5db3003"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "8e8bc388-0065-4282-9740-7e46f4c54d2b"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "1b860133-4f53-4c5a-9905-9aef2092feee"
              },
              {
                "key": "AddTable",
                "cells": {},
                "collections": [
                  {
                    "key": "operation",
                    "type": "section",
                    "steps": [
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "b2a259ec-1835-4d49-a811-3f62a703edc0"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "31b37080-9fba-4a82-bcb9-d9410eeb7143"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "2355406e-bcc8-4dd4-bd77-de51b868f9c0"
                      }
                    ],
                    "activeCells": {},
                    "id": "de24aedd-eb1f-4b43-9440-39a11a344b62"
                  }
                ],
                "id": "20f210c5-366d-46cd-87f0-c65467bb04b0"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "cd78056c-f9fa-45ed-b00a-bd54942998a3"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "9a79f023-8e1f-4c41-8e0f-33387bd0f140"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "c2826f85-2224-48aa-9963-501b4f67037e"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "654545bd-6093-47c2-80df-2cbe18c7e67f"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "23011f28-d29d-41f5-ad5a-bded440711e6"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "40fae45b-491a-4522-900f-8ee961e77d1a"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "1ea845d0-7851-4dbb-92b4-1e9c052daa7e"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "e5c9c2d3-8696-440d-a925-da38e8249d5c"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "5c41b928-fbbd-40fa-8a65-7401dd36a1da"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "e9e22a1c-b784-40fa-a562-454b844d1328"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "48690977-c145-44bd-876e-d5b499df99fa"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "912beab2-7590-4dd2-8ba5-f993190ced14"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "bee0718f-d181-4da3-8542-3360a1149fb3"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "f3f81c1b-aba7-4ee3-98f2-86187822ffc5"
              }
            ],
            "activeCells": {},
            "id": "2a66e90b-3dc8-431c-a999-8ce82508a297"
          }
        ],
        "id": "b49028cd-ac64-458c-ac44-64d1297aca97"
      },
      "sampleMarkdown": "# Sample Specification for Composite\r\n\r\n-> id = 4b29b6c8-c866-4442-b3a1-5c90d6db51ae\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8509839-06:00\r\n-> tags = \r\n\r\n[Composite]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> AddAndMultiply starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> AddAndMultiplyTable\r\n    [Rows]\r\n    |starting|operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n\r\n|> AddAndMultiplyThrow starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Embedded",
      "key": "Embedded",
      "implementation": "StoryTeller.Samples.Fixtures.EmbeddedFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "fixture": {
            "title": "Math",
            "key": "Math",
            "implementation": "StoryTeller.Samples.Fixtures.MathFixture",
            "type": "fixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "fact": false,
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "message",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Adding {x} to {y} should be {returnValue}",
                "fact": false,
                "key": "Adding",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "x",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "y",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": "NULL",
                    "editor": null,
                    "header": null,
                    "key": "returnValue",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Adding {x} to 5 should be {returnValue}",
                "fact": false,
                "key": "AddTo5",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "x",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": "NULL",
                    "editor": null,
                    "header": null,
                    "key": "returnValue",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "The number should start with {starting}",
                "fact": false,
                "key": "StartWith",
                "type": "sentence",
                "cells": [
                  {
                    "default": "11",
                    "editor": null,
                    "header": null,
                    "key": "starting",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "*= {multiplier}",
                "fact": false,
                "key": "MultiplyBy",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "multiplier",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "-= {operand}",
                "fact": false,
                "key": "Subtract",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "operand",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "+= {operand}",
                "fact": false,
                "key": "Add",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "operand",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Value should be {expected}",
                "fact": false,
                "key": "TheValueShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "expected",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "x",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "y",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "sum",
                    "options": null,
                    "result": true
                  }
                ],
                "collection": "operation",
                "title": "When adding numbers",
                "hasBeforeStep": false,
                "hasAfterStep": false,
                "key": "AddTable",
                "type": "table",
                "errors": [],
                "missing": false
              },
              {
                "children": [
                  {
                    "format": "The number should start with {starting}",
                    "fact": false,
                    "key": "StartWith",
                    "type": "sentence",
                    "cells": [
                      {
                        "default": "11",
                        "editor": null,
                        "header": null,
                        "key": "starting",
                        "options": null,
                        "result": false
                      }
                    ],
                    "errors": [],
                    "missing": false
                  },
                  {
                    "format": "+= {operand}",
                    "fact": false,
                    "key": "Add",
                    "type": "sentence",
                    "cells": [
                      {
                        "default": null,
                        "editor": null,
                        "header": null,
                        "key": "operand",
                        "options": null,
                        "result": false
                      }
                    ],
                    "errors": [],
                    "missing": false
                  },
                  {
                    "format": "Value should be {expected}",
                    "fact": false,
                    "key": "TheValueShouldBe",
                    "type": "sentence",
                    "cells": [
                      {
                        "default": null,
                        "editor": null,
                        "header": null,
                        "key": "expected",
                        "options": null,
                        "result": true
                      }
                    ],
                    "errors": [],
                    "missing": false
                  }
                ],
                "title": "Add and check",
                "key": "AddAndCheck",
                "type": "paragraph",
                "cells": [
                  {
                    "default": "11",
                    "editor": null,
                    "header": null,
                    "key": "starting",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "operand",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "expected",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Throw()",
                "fact": false,
                "key": "Throw",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              }
            ],
            "missingCount": 0,
            "missingCode": "This fixture is fully implemented",
            "sample": {
              "title": "Sample Specification for Math",
              "path": null,
              "max-retries": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Wednesday, January 11, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "2566041b-eb84-4efe-a3a2-3d161e4bffdf"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "f5c35c1d-a7c4-4959-961a-2d4ddc397965"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "203212c8-4a70-46c3-8565-267fe0f55339"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "fe96ff7a-10b9-4f65-bdb5-10f529ab350a"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "c03d5f2f-2bef-4d69-8178-447ea2341133"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "960d9545-4b2c-4017-9c00-142b3b3edc97"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "6fd1b871-ab82-43c8-a451-d4eee03bb8b1"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "ad5b1e9d-24e9-4b01-8b74-ef6748b94191"
                    },
                    {
                      "key": "AddTable",
                      "cells": {},
                      "collections": [
                        {
                          "key": "operation",
                          "type": "section",
                          "steps": [
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "d0bbe48d-1110-4048-98e6-f24b551f1905"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "fd57976b-f0f3-4d96-bb2a-91a578381d9c"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "3180698d-df97-473f-814a-b1c54870e341"
                            }
                          ],
                          "activeCells": {},
                          "id": "221023d1-13bd-4cfe-a6db-4bd2ee4da6b9"
                        }
                      ],
                      "id": "5a41e425-fb22-4a6c-90cf-dffd5365c55f"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "7c2832fb-c6a5-41fa-8639-71ba7a52478b"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "23c47586-725c-4e89-808b-c66b6f866b32"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "bebef0af-139c-40e7-8c41-91e9c0b67473"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "71f0235b-cba2-449f-b46d-f4e4d13c4d41"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "56875cc6-895d-4830-818f-6e5b63f6eb0a"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "889ae655-990c-4a1f-af66-f442c85fd2b7"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "14c938d9-4dd8-4ec0-b81d-b57246300f37"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "27deb61c-62f1-4688-90e5-2d6e8d58e69f"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "4a374dc5-9575-4088-b95d-e3fece028482"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "2f67b47c-f8c5-4532-ae19-e73acff98faa"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "34c62751-9197-4da9-b594-668354c1437e"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "bdb70e5b-d4a7-48ea-8243-f3741c58f0d7"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "b70bb225-3264-4ec9-a25d-4dd245f791b2"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "621e984d-fae6-45be-be1c-bda4c17e2289"
                    }
                  ],
                  "activeCells": {},
                  "id": "9411e98e-00d7-4950-b6a5-d5733aebdab7"
                }
              ],
              "id": "ee42917b-d6ed-4f3a-bc48-03de6ea41785"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = d7ae788d-175f-40a7-99dd-bfe37d5333b4\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8559839-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "Do some Math",
          "collection": "Math",
          "hasBeforeStep": true,
          "hasAfterStep": true,
          "key": "EmbeddedMath",
          "type": "embedded-section",
          "errors": [],
          "missing": false
        },
        {
          "format": "ThrowAnExceptionOnTheNextEmbed()",
          "fact": false,
          "key": "ThrowAnExceptionOnTheNextEmbed",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "DoNotThrowAnExceptionOnTheNextEmbed()",
          "fact": false,
          "key": "DoNotThrowAnExceptionOnTheNextEmbed",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for Embedded",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Embedded",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedFixture",
                "id": "e5e61a1f-f9ce-4869-899e-4dda6cfcedf2"
              },
              {
                "type": "comment",
                "text": "## DoNotThrowAnExceptionOnTheNextEmbed",
                "id": "de706ccd-11ac-4c13-8b70-ef41c98abe86"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "bbd17d99-0aef-437c-93ed-1765e880197f"
              },
              {
                "type": "comment",
                "text": "## EmbeddedMath",
                "id": "6373c578-2bad-402a-8832-ce53aad18ff9"
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
                        "type": "comment",
                        "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                        "id": "54784d57-cb6b-4010-aa9c-a01783a79f11"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "80b8644e-94c2-4b13-aa1f-6cd498d65a9a"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "4a5c94be-997c-4902-b0db-2e9d44a9d1be"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "75182c04-e110-407e-895e-d0206b972514"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "d9695df7-4c23-4fc3-8cd2-73205d068a30"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "13700c98-6c0c-4044-bda9-e032344de4e9"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "32783951-0913-46cf-b371-5035b0269598"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "9498842b-e7cf-47a9-884b-80c0f48970c3"
                      },
                      {
                        "key": "AddTable",
                        "cells": {},
                        "collections": [
                          {
                            "key": "operation",
                            "type": "section",
                            "steps": [
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "ef66ea69-9842-40ef-bba3-bcc353d502a9"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "ca322108-de29-47dc-bb36-dc9d86dd5096"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "cc5fe920-ff23-4d80-9dba-9733f4925299"
                              }
                            ],
                            "activeCells": {},
                            "id": "dd8b8708-420b-4bd5-86d2-a9b3ac5ef479"
                          }
                        ],
                        "id": "e3e8659a-3a73-4ae2-a1af-a46c0f535f50"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "dc962107-0e57-4a14-8a78-547a3df29948"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "95e5d741-80ce-4cb8-ba03-5a95f5c152b6"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "0e0b6d47-4cf8-450b-9d25-2e96e50220f7"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "a9695240-f4a6-4d9e-adb1-2508b8e98149"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "ad754b47-b3b7-4a1c-a78e-f79a112cf20d"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "343a5b7f-8157-412e-af32-dec2b619fd16"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "69c3d2f4-f97c-4243-bb9d-d13fcdda6eca"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "642773f9-4627-4dce-af8d-6b38c55e3788"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "062ccf63-ebbc-4263-8128-5062ae576319"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "6e96af6c-0e72-4eb8-be11-2696d9d4e3a8"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "e5396bda-7585-4ffc-ae1f-022a3f5462c8"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "5e2d2673-ad02-42ea-9083-f491e354c3c6"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "e8f98222-e964-4df3-b4a0-a7c990496e50"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "0de484b2-f656-40b9-8338-5570c2a64e2d"
                      }
                    ],
                    "activeCells": {},
                    "id": "21c6769e-e75e-460a-92e7-4cf58feef148"
                  }
                ],
                "id": "6cc8e6a0-ad73-49e6-8471-231aa5587e98"
              },
              {
                "type": "comment",
                "text": "## ThrowAnExceptionOnTheNextEmbed",
                "id": "e2061c5e-7a1d-41d4-a57f-dc68680cc12a"
              },
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "21d0434c-d582-4a70-9206-65d0bc6eb2a4"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "eb01320d-c128-4b74-bc50-3a6f46579d68"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "f975aea3-a74e-4437-820e-7e657199d55f"
              }
            ],
            "activeCells": {},
            "id": "6c01ff0c-e86b-46a4-88a2-17f3ee18acf9"
          }
        ],
        "id": "55402f1d-9fc1-4f07-a786-1c0e0cb31000"
      },
      "sampleMarkdown": "# Sample Specification for Embedded\r\n\r\n-> id = 7286dd32-4414-494f-977c-78121877daf3\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8569839-06:00\r\n-> tags = \r\n\r\n[Embedded]\r\n|> DoNotThrowAnExceptionOnTheNextEmbed\r\n|> EmbeddedMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> ThrowAnExceptionOnTheNextEmbed\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": null,
      "key": "Failure",
      "implementation": "StoryTeller.Samples.Fixtures.FailureFixture",
      "type": "fixture",
      "grammars": [],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for Failure",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Failure",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.FailureFixture",
                "id": "7b22ace1-19b0-401b-89f1-d468eba223a2"
              }
            ],
            "activeCells": {},
            "id": "784b3047-d7f7-4b31-9f92-11b4416d7407"
          }
        ],
        "id": "71e4dcb1-ea33-4c07-be45-d796b783ece8"
      },
      "sampleMarkdown": "# Sample Specification for Failure\r\n\r\n-> id = 703eb077-c3d0-4fc1-b93b-7ca737e15e4d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8579839-06:00\r\n-> tags = \r\n\r\n[Failure]\r\n~~~\r\n",
      "errors": [
        {
          "message": "Fixture StoryTeller.Samples.Fixtures.FailureFixture could not be loaded",
          "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.Exception: This fixture ctor blew up\r\n   at StoryTeller.Samples.Fixtures.FailureFixture..ctor()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeTypeHandle.CreateInstance(RuntimeType type, Boolean publicOnly, Boolean noCheck, Boolean& canBeCached, RuntimeMethodHandleInternal& ctor, Boolean& bNeedSecurityCheck)\r\n   at System.RuntimeType.CreateInstanceSlow(Boolean publicOnly, Boolean skipCheckThis, Boolean fillCache, StackCrawlMark& stackMark)\r\n   at System.Activator.CreateInstance(Type type, Boolean nonPublic)\r\n   at System.Activator.CreateInstance(Type type)\r\n   at StoryTeller.Model.FixtureLibrary.CreateCompiledFixture(CellHandling cellHandling, Type type)"
        }
      ],
      "missing": false
    },
    {
      "title": "Grammar Error",
      "key": "GrammarError",
      "implementation": "StoryTeller.Samples.Fixtures.GrammarErrorFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "key": null,
          "type": "error",
          "Key": null,
          "errors": [
            {
              "message": null,
              "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.DivideByZeroException: Attempted to divide by zero.\r\n   at StoryTeller.Samples.Fixtures.GrammarErrorFixture.Bad()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.ProgrammaticGrammarBuilder.Build(MethodInfo method, Fixture fixture)\r\n   at StoryTeller.Grammars.GrammarBuilder.BuildGrammar(MethodInfo method, Fixture fixture)"
            }
          ],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for GrammarError",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "GrammarError",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.GrammarErrorFixture",
                "id": "86aa2fd3-6bdc-4150-a04e-fc40ac1ad0b4"
              },
              {
                "type": "comment",
                "text": "##",
                "id": "169ce7ee-7cf7-4b87-ab56-d8a7c656f891"
              },
              {
                "key": null,
                "cells": {},
                "collections": [],
                "id": "6e646fbe-342c-4ac1-b30e-befb07101b5f"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "99ec7661-74a9-49b3-9936-a8c4e4c943fd"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "e98704be-a13c-4f7a-a7e9-d3b2d04d654d"
              }
            ],
            "activeCells": {},
            "id": "fc76f550-2644-46fa-b43c-102a7587b867"
          }
        ],
        "id": "515efac1-47ea-465e-8b01-6503d6327a8f"
      },
      "sampleMarkdown": "# Sample Specification for GrammarError\r\n\r\n-> id = 5f5fdbb0-bf62-425e-b65e-3dab1a036fce\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8589839-06:00\r\n-> tags = \r\n\r\n[GrammarError]\r\n|> \r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Curried Math",
      "key": "CurriedMath",
      "implementation": "StoryTeller.Samples.Fixtures.CurriedMathFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The number should start with {starting}",
          "fact": false,
          "key": "StartWith",
          "type": "sentence",
          "cells": [
            {
              "default": "11",
              "editor": null,
              "header": null,
              "key": "starting",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Add 5",
          "fact": false,
          "key": "Add5",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "Adding {y} to 5 should be {returnValue}",
          "fact": false,
          "key": "AddingTo5",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": "NULL",
              "editor": null,
              "header": null,
              "key": "returnValue",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Value should be {expected}",
          "fact": false,
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "expected",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for CurriedMath",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "CurriedMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CurriedMathFixture",
                "id": "4e6057f3-d907-4565-a1be-a05bd77de5ab"
              },
              {
                "type": "comment",
                "text": "## Add5",
                "id": "94390d12-a9b6-48aa-9875-daf0e91d540e"
              },
              {
                "key": "Add5",
                "cells": {},
                "collections": [],
                "id": "a75ee5b9-9753-44f1-9ec8-5cc347726b8f"
              },
              {
                "type": "comment",
                "text": "## AddingTo5",
                "id": "c8eb527b-c74f-4058-9d76-b484fdb4c8c1"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "65581bf4-e30f-4bb3-98f6-ea6b2d3a22e3"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "ba7e0c58-fca0-4468-b30c-83c3f296a600"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "a4414914-ea12-4742-9b2a-81d527489238"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "75405494-9e0a-4792-a60f-2997d54644a4"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "4e3d998d-1852-4a1c-bc4b-09c76aa096d0"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "6c0cd354-3085-4d02-9b66-7f8e46f1c355"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "53ff7e25-a5a3-459d-9a3a-25affbc5ce32"
              }
            ],
            "activeCells": {},
            "id": "067a39c4-aa62-4916-aa4d-1b9c38d7f860"
          }
        ],
        "id": "694a139d-85c4-4d24-9d59-02ffb5aa6ace"
      },
      "sampleMarkdown": "# Sample Specification for CurriedMath\r\n\r\n-> id = 8e1cd106-5dc7-46e8-835c-695e286468d9\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8589839-06:00\r\n-> tags = \r\n\r\n[CurriedMath]\r\n|> Add5\r\n|> AddingTo5 y=y, returnValue=NULL\r\n|> StartWith starting=11\r\n|> TheValueShouldBe expected=expected\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Math",
      "key": "Math",
      "implementation": "StoryTeller.Samples.Fixtures.MathFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Adding {x} to {y} should be {returnValue}",
          "fact": false,
          "key": "Adding",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": "NULL",
              "editor": null,
              "header": null,
              "key": "returnValue",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Adding {x} to 5 should be {returnValue}",
          "fact": false,
          "key": "AddTo5",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": "NULL",
              "editor": null,
              "header": null,
              "key": "returnValue",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The number should start with {starting}",
          "fact": false,
          "key": "StartWith",
          "type": "sentence",
          "cells": [
            {
              "default": "11",
              "editor": null,
              "header": null,
              "key": "starting",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "*= {multiplier}",
          "fact": false,
          "key": "MultiplyBy",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "multiplier",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "-= {operand}",
          "fact": false,
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "+= {operand}",
          "fact": false,
          "key": "Add",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Value should be {expected}",
          "fact": false,
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "expected",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": true
            }
          ],
          "collection": "operation",
          "title": "When adding numbers",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "AddTable",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "children": [
            {
              "format": "The number should start with {starting}",
              "fact": false,
              "key": "StartWith",
              "type": "sentence",
              "cells": [
                {
                  "default": "11",
                  "editor": null,
                  "header": null,
                  "key": "starting",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "+= {operand}",
              "fact": false,
              "key": "Add",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "operand",
                  "options": null,
                  "result": false
                }
              ],
              "errors": [],
              "missing": false
            },
            {
              "format": "Value should be {expected}",
              "fact": false,
              "key": "TheValueShouldBe",
              "type": "sentence",
              "cells": [
                {
                  "default": null,
                  "editor": null,
                  "header": null,
                  "key": "expected",
                  "options": null,
                  "result": true
                }
              ],
              "errors": [],
              "missing": false
            }
          ],
          "title": "Add and check",
          "key": "AddAndCheck",
          "type": "paragraph",
          "cells": [
            {
              "default": "11",
              "editor": null,
              "header": null,
              "key": "starting",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "expected",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Throw()",
          "fact": false,
          "key": "Throw",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for Math",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Math",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                "id": "7dba354f-527f-478b-bc44-e6e637bb2e16"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "73374f24-3b1b-4677-be04-4765598f97fa"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "7b6ccdc7-ae2b-450f-aec5-9c1d9b26bdab"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "d06bfb07-4336-4b54-b117-65b6caf0e83b"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "26bc00d5-82b5-4045-8451-6d97c5eb4ce1"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "041aabed-63d2-4b03-be90-d52e1ceae22c"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "8dd3cddb-ed9b-4c22-91bc-4bb979380822"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "59316090-a715-445c-b3a9-0af4f2b65534"
              },
              {
                "key": "AddTable",
                "cells": {},
                "collections": [
                  {
                    "key": "operation",
                    "type": "section",
                    "steps": [
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "da44e6a6-dac5-4464-b255-1363dfd9a426"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "b1b99106-1d95-49ff-93e4-a3ccac4e84cc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "7b049255-920b-4dda-8028-a6f8c1136461"
                      }
                    ],
                    "activeCells": {},
                    "id": "ba71a0b2-0a18-4459-89aa-f67fe2abad64"
                  }
                ],
                "id": "942d6978-7462-4719-a5fe-b0032a4fd84c"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "49336e9e-c7e6-406f-ab10-ec902e0b91cc"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "0a43c72d-07e7-4277-ac7b-7f9dbfcec43b"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "29c894d1-5411-4652-8a77-45bf47667f0e"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "25084c25-53c1-477b-8437-0ae11468931c"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "e69aaf3b-fd0e-4881-85c7-0fd4d94070c6"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "935d4cf4-8277-4d71-98d9-12004bfe1c96"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "eaadc04a-0c89-4dd1-81b0-2a62d7d1d2d0"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "86913e46-0c97-406a-b551-9910aa3eb42b"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "ce26f9e3-72f9-4231-afca-8730747cf046"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "826db25e-c71b-47a5-a134-edfb4b297d8e"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "39945bc9-1761-4138-afa7-ec81210462fe"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "fec2c306-5e8f-4929-b855-ae376283f78a"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "aedb936d-55a2-4fb2-8f1f-c3dc80b1b90c"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "81b388da-695c-4aa1-85b5-521170747bce"
              }
            ],
            "activeCells": {},
            "id": "5842eade-8322-4541-92dc-252044739f60"
          }
        ],
        "id": "d6ee6809-5f22-4e36-8af6-9e1ae77b3ad3"
      },
      "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 619f2199-07b6-43e0-b31c-c9589a254319\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8589839-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Do Some Math",
      "key": "DoSomeMath",
      "implementation": "StoryTeller.Samples.Fixtures.DoSomeMathFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "fixture": {
            "title": "Math",
            "key": "Math",
            "implementation": "StoryTeller.Samples.Fixtures.MathFixture",
            "type": "fixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "fact": false,
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "message",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Adding {x} to {y} should be {returnValue}",
                "fact": false,
                "key": "Adding",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "x",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "y",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": "NULL",
                    "editor": null,
                    "header": null,
                    "key": "returnValue",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Adding {x} to 5 should be {returnValue}",
                "fact": false,
                "key": "AddTo5",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "x",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": "NULL",
                    "editor": null,
                    "header": null,
                    "key": "returnValue",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "The number should start with {starting}",
                "fact": false,
                "key": "StartWith",
                "type": "sentence",
                "cells": [
                  {
                    "default": "11",
                    "editor": null,
                    "header": null,
                    "key": "starting",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "*= {multiplier}",
                "fact": false,
                "key": "MultiplyBy",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "multiplier",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "-= {operand}",
                "fact": false,
                "key": "Subtract",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "operand",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "+= {operand}",
                "fact": false,
                "key": "Add",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "operand",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Value should be {expected}",
                "fact": false,
                "key": "TheValueShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "expected",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "x",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "y",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "sum",
                    "options": null,
                    "result": true
                  }
                ],
                "collection": "operation",
                "title": "When adding numbers",
                "hasBeforeStep": false,
                "hasAfterStep": false,
                "key": "AddTable",
                "type": "table",
                "errors": [],
                "missing": false
              },
              {
                "children": [
                  {
                    "format": "The number should start with {starting}",
                    "fact": false,
                    "key": "StartWith",
                    "type": "sentence",
                    "cells": [
                      {
                        "default": "11",
                        "editor": null,
                        "header": null,
                        "key": "starting",
                        "options": null,
                        "result": false
                      }
                    ],
                    "errors": [],
                    "missing": false
                  },
                  {
                    "format": "+= {operand}",
                    "fact": false,
                    "key": "Add",
                    "type": "sentence",
                    "cells": [
                      {
                        "default": null,
                        "editor": null,
                        "header": null,
                        "key": "operand",
                        "options": null,
                        "result": false
                      }
                    ],
                    "errors": [],
                    "missing": false
                  },
                  {
                    "format": "Value should be {expected}",
                    "fact": false,
                    "key": "TheValueShouldBe",
                    "type": "sentence",
                    "cells": [
                      {
                        "default": null,
                        "editor": null,
                        "header": null,
                        "key": "expected",
                        "options": null,
                        "result": true
                      }
                    ],
                    "errors": [],
                    "missing": false
                  }
                ],
                "title": "Add and check",
                "key": "AddAndCheck",
                "type": "paragraph",
                "cells": [
                  {
                    "default": "11",
                    "editor": null,
                    "header": null,
                    "key": "starting",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "operand",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "expected",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Throw()",
                "fact": false,
                "key": "Throw",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              }
            ],
            "missingCount": 0,
            "missingCode": "This fixture is fully implemented",
            "sample": {
              "title": "Sample Specification for Math",
              "path": null,
              "max-retries": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Wednesday, January 11, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "dda41e62-b6d2-465c-957e-5067e3aab519"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "cb5a8ce1-4154-46a6-9cdc-1319db7005f6"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "a0e4ac42-e224-422f-91f8-d2e3adfc50c2"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "09eccd20-b474-4ca4-957e-3cb1c61e606b"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "70dc1b8f-6efe-47e2-92f2-8d63ddc08304"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "72b23756-7421-4831-a331-dbecdd6ea2d3"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "69a83052-e3f0-414f-83d3-6cd36334d4bd"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "c991d21a-3953-466a-a5d9-4ae44dc5ab4e"
                    },
                    {
                      "key": "AddTable",
                      "cells": {},
                      "collections": [
                        {
                          "key": "operation",
                          "type": "section",
                          "steps": [
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "a5a04dbe-8446-4a48-8d9a-9c54f28e14a6"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "6722a5d9-1134-4f98-b398-73524c2dbff0"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "9e28e2c3-1c21-4bc3-ae13-4c9bd672fb1b"
                            }
                          ],
                          "activeCells": {},
                          "id": "9642b59b-e5a7-44a4-beec-12aaf0626526"
                        }
                      ],
                      "id": "b313082c-a6d0-4b33-9ccd-6f606d4a30cb"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "b479446a-520a-40fd-83b2-e03336d37cee"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "1b7420ab-9548-4cc9-a3f2-5caade486560"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "3758810c-dca0-4256-8b51-568141383c59"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "18c2970c-8014-4a10-84ee-07f307b7d0c7"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "70ea8342-1b14-4df0-b9e6-29ad228555e1"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "f46fef99-4589-4098-b9c5-7bdc16df89ba"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "0098d846-db46-476d-a4b7-7a5eec990ad6"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "0c4966b6-c49c-4887-b995-9be3061ff527"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "3adf4b29-4e91-4817-90f7-6bce1d4250a6"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "180a846d-862d-4ef9-a2b0-93d7b9f419c2"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "a703e417-6ef9-4347-b0d2-bb72589f6032"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "c6eacec8-bb65-446e-a4fa-757f59367a36"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "3cc5b109-9e3e-4cf5-a58f-cc04ecc9ae5b"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "7675d8d5-68fa-4b94-bb0f-fc80f5b7d483"
                    }
                  ],
                  "activeCells": {},
                  "id": "de5527dd-873a-434c-b064-825158b46c61"
                }
              ],
              "id": "8b904d4c-e28d-4bb9-b398-5089d48982b5"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 0085e286-3a4b-4486-9302-c74ca42ac127\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8599839-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "Now do some math",
          "collection": "Math",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "DoSomeMath",
          "type": "embedded-section",
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for DoSomeMath",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "DoSomeMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DoSomeMathFixture",
                "id": "7ce44edc-d50e-4e0a-8963-2b07991b8bae"
              },
              {
                "type": "comment",
                "text": "## DoSomeMath",
                "id": "b633483a-0bde-44e3-ab46-1bef4b5395e6"
              },
              {
                "key": "DoSomeMath",
                "cells": {},
                "collections": [
                  {
                    "key": "Math",
                    "type": "section",
                    "steps": [
                      {
                        "type": "comment",
                        "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                        "id": "2414c2f6-9198-46aa-865a-c41349254749"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "783a4496-667c-4aac-9e00-47d874a52cd2"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "57b750d8-517c-495e-bf8e-792d4d4faf6c"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "4343fb63-f825-4904-aacb-39156c54664d"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "a4dc182e-24d6-4b81-b1fc-d0631feaa26b"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "e03017a2-a177-4d0f-a171-68239def85cf"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "46fd7be7-33f5-43a0-bb81-0a5810a79370"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "92b2aba7-9b98-4a93-a858-4df2e96daf55"
                      },
                      {
                        "key": "AddTable",
                        "cells": {},
                        "collections": [
                          {
                            "key": "operation",
                            "type": "section",
                            "steps": [
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "a218f0ba-7075-46e5-aa29-570137948316"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "84f59d30-5c4f-463c-ace4-b14ee48c24c4"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "47c5e1e3-a163-4835-887e-b6c3af190650"
                              }
                            ],
                            "activeCells": {},
                            "id": "a083c37f-b4d5-4fbc-8841-97f635dd443d"
                          }
                        ],
                        "id": "c2e583e6-c7e8-4fe8-9d2d-95be7baede0d"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "87838839-e05a-4bc5-b9c2-77b132dffe46"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "9220ba18-1f66-48e5-9bbc-5114acc04c76"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "a93b6cc1-c766-4389-a752-2bc62469a1fd"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "e8d3110e-f0ea-4edf-a635-497b855c71dc"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "e5c81e48-2881-45e4-97f9-54739cf9c660"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "6e737c27-370f-4874-96da-3b9d454e096a"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "677761b8-4001-4db5-a4e8-b1aee86e7b66"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "715b0bd8-96aa-498e-8ce2-8f66ed93eb12"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "36823071-feac-4dc5-89e7-8510f19dbcf3"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "bee5c7bd-1d7d-4316-a1de-68ffc98ea77d"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "81a71537-7535-4247-bbba-d5775d5c4152"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "080d7687-d51e-4537-adbb-2949b127ae04"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "46c74f7f-d4ec-4b74-ac05-da5f9a3cec3f"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "56b1e9a8-e77e-4ffd-8943-45500d506667"
                      }
                    ],
                    "activeCells": {},
                    "id": "54823f0f-0c0f-479b-8532-68399400434e"
                  }
                ],
                "id": "3e3d22fa-52c1-4468-aecb-cd01d210930e"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "903c546a-e532-4367-b0f7-4ecd91d9d258"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "f468e5f7-9711-44c1-addf-645fe36ba43d"
              }
            ],
            "activeCells": {},
            "id": "e4a10327-45a3-4655-9c44-76b129bd55ee"
          }
        ],
        "id": "1e296025-1f36-4899-b1df-7906ce3407b4"
      },
      "sampleMarkdown": "# Sample Specification for DoSomeMath\r\n\r\n-> id = 8f5904f8-c947-4802-8a96-41793751d038\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8599839-06:00\r\n-> tags = \r\n\r\n[DoSomeMath]\r\n|> DoSomeMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Parking Expiry Rules",
      "key": "ParkingExpiry",
      "implementation": "StoryTeller.Samples.Fixtures.ParkingExpiryFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": "select",
              "header": null,
              "key": "day",
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
              ],
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "minutes",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "amount",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "ticketedAmount",
              "options": null,
              "result": true
            }
          ],
          "collection": "table",
          "title": "Expiry Ticket Decision Rules",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "TicketIsGiven",
          "type": "table",
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for ParkingExpiry",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "ParkingExpiry",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.ParkingExpiryFixture",
                "id": "9688f6f8-75e3-4598-964f-f195ee75a9de"
              },
              {
                "type": "comment",
                "text": "## TicketIsGiven",
                "id": "b81b9962-a610-4cb7-b90d-12b41d1b6c2e"
              },
              {
                "key": "TicketIsGiven",
                "cells": {},
                "collections": [
                  {
                    "key": "table",
                    "type": "section",
                    "steps": [
                      {
                        "key": "row",
                        "cells": {
                          "day": "day",
                          "minutes": "minutes",
                          "amount": "amount",
                          "ticketedAmount": "ticketedAmount"
                        },
                        "collections": [],
                        "id": "36aa0c12-f173-4b10-a3b7-2294221e557f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "day": "day",
                          "minutes": "minutes",
                          "amount": "amount",
                          "ticketedAmount": "ticketedAmount"
                        },
                        "collections": [],
                        "id": "7301e4f4-334c-416a-adb8-a44fa264a3f7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "day": "day",
                          "minutes": "minutes",
                          "amount": "amount",
                          "ticketedAmount": "ticketedAmount"
                        },
                        "collections": [],
                        "id": "368ad457-22af-4b3e-9380-b4f3180c4de2"
                      }
                    ],
                    "activeCells": {},
                    "id": "8fbaba92-6a0d-4dbe-a25b-eea004d2a851"
                  }
                ],
                "id": "a8e87c73-c7e8-4206-9ed0-ae33db648fe1"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "969965a9-de06-4572-ab14-acdbcb55ae70"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "6603100d-08e3-43cf-9ab2-fc44504c3b54"
              }
            ],
            "activeCells": {},
            "id": "d145ad92-c3f6-4f1b-9045-e03a600905e6"
          }
        ],
        "id": "b75f11dc-fe7f-439f-a116-c97b15d59f05"
      },
      "sampleMarkdown": "# Sample Specification for ParkingExpiry\r\n\r\n-> id = 129aea9d-27d1-4c27-8f8a-3613fa9bcbb4\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8609839-06:00\r\n-> tags = \r\n\r\n[ParkingExpiry]\r\n|> TicketIsGiven\r\n    [table]\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Kansas City Chiefs 2015",
      "key": "Player",
      "implementation": "StoryTeller.Samples.Fixtures.PlayerFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Player",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": "select",
              "header": null,
              "key": "Position",
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
              ],
              "result": true
            }
          ],
          "collection": "table",
          "title": "Player Positions",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "PositionIs",
          "type": "table",
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for Player",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Player",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.PlayerFixture",
                "id": "0b260881-21ce-4d2b-ac6e-670fa1af4be0"
              },
              {
                "type": "comment",
                "text": "## PositionIs",
                "id": "f5e0fcc2-f76f-44ad-b48f-858c36387abd"
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
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "95a8c656-e9f2-4b4a-a8d1-c2168e0ff419"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "eaf63bf7-2f6e-4b5a-9cef-0c12a4c92a32"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "8cafafeb-5c01-4b40-a7db-a7450a8b10c1"
                      }
                    ],
                    "activeCells": {},
                    "id": "112d7fb4-827d-4e31-9b87-ebae6a98c260"
                  }
                ],
                "id": "3d25f1ab-0026-4108-9492-5852053af624"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "32823e33-ca7b-44e3-a678-dab1afea2462"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "2dc7baf7-9d00-49c3-b572-2d31f3d7e63e"
              }
            ],
            "activeCells": {},
            "id": "ad3e94ab-830d-4f20-869e-9f9f5a4b4649"
          }
        ],
        "id": "b0b7c44f-d763-4561-8717-98b2a71b72f0"
      },
      "sampleMarkdown": "# Sample Specification for Player\r\n\r\n-> id = c1cc9f50-3b6a-4f6f-968a-c9c6721c5184\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8609839-06:00\r\n-> tags = \r\n\r\n[Player]\r\n|> PositionIs\r\n    [table]\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Selection List",
      "key": "SelectionList",
      "implementation": "StoryTeller.Samples.Fixtures.SelectionListFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "First",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": "select",
              "header": null,
              "key": "Last",
              "options": [
                {
                  "display": "surname",
                  "value": "surname"
                }
              ],
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Fullname",
              "options": null,
              "result": true
            }
          ],
          "collection": "table",
          "title": "The names should be",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "names",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "first",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": "select",
              "header": null,
              "key": "last",
              "options": [
                {
                  "display": "surname",
                  "value": "surname"
                }
              ],
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "fullname",
              "options": null,
              "result": true
            }
          ],
          "collection": "table",
          "title": "The names are",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "FirstAndLastName",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "format": "{first} {last} should be formatted as {fullname}",
          "fact": false,
          "key": "TheNameIs",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "first",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": "select",
              "header": null,
              "key": "last",
              "options": [
                {
                  "display": "surname",
                  "value": "surname"
                }
              ],
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "fullname",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The Enum value of {option} should be {selectedOption}",
          "fact": false,
          "key": "TheEnumOptionIs",
          "type": "sentence",
          "cells": [
            {
              "default": "SecondOption",
              "editor": "select",
              "header": null,
              "key": "option",
              "options": [
                {
                  "display": "FirstOption",
                  "value": "FirstOption"
                },
                {
                  "display": "SecondOption",
                  "value": "SecondOption"
                }
              ],
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "selectedOption",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for SelectionList",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "SelectionList",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SelectionListFixture",
                "id": "716b074f-c431-4b16-a4aa-16c713159b6a"
              },
              {
                "type": "comment",
                "text": "## FirstAndLastName",
                "id": "f0c0fab9-5eb1-4b44-80b9-8d3e27a56867"
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
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "f80309bd-036c-418f-b275-f0b1729f7c53"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "e0733a1d-444b-468f-aea0-d71205b10ddf"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "19081972-c56b-474e-8860-e223395d4af1"
                      }
                    ],
                    "activeCells": {},
                    "id": "6f00922c-76f9-4abf-88b7-30c0d9cb83e9"
                  }
                ],
                "id": "86b1934f-596c-4c0c-b9c0-ffac4098ad38"
              },
              {
                "type": "comment",
                "text": "## names",
                "id": "d63beeba-be1c-4b74-ad4e-ccf743827bed"
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
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "67ad0ed8-c8ee-4f5f-88c8-cd7cd18abf8a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "d0882459-84f3-4d78-a7a8-0e733cb1200f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "83426bfa-52ee-480d-908c-0f018f25d019"
                      }
                    ],
                    "activeCells": {},
                    "id": "e118496a-ff91-4899-aa92-04a3b3842c5b"
                  }
                ],
                "id": "871c88ad-fda1-4f41-bdde-421da8837989"
              },
              {
                "type": "comment",
                "text": "## TheEnumOptionIs",
                "id": "db7ad322-92f1-4a24-ade5-62cff5977843"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "SecondOption",
                  "selectedOption": "selectedOption"
                },
                "collections": [],
                "id": "2b148cfa-c18b-4516-8f95-d5b21a140bc1"
              },
              {
                "type": "comment",
                "text": "## TheNameIs",
                "id": "8bd73da1-0def-42da-83f8-36f554a30f45"
              },
              {
                "key": "TheNameIs",
                "cells": {
                  "first": "first",
                  "last": "last",
                  "fullname": "fullname"
                },
                "collections": [],
                "id": "bb9b0edf-b6e8-4b18-8d50-9043f4516cb5"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "aa4b2aab-047d-439b-9b6e-ccd33078217e"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "91489cb6-2cbc-489b-b88f-b50f8b2df2af"
              }
            ],
            "activeCells": {},
            "id": "9cba71d3-0df7-4cf1-b591-11a40ded55f5"
          }
        ],
        "id": "9472cb25-3e40-4ae9-a5b2-cef149df2040"
      },
      "sampleMarkdown": "# Sample Specification for SelectionList\r\n\r\n-> id = d3719ade-a1d0-451c-a93d-c4bfdeffcc6e\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8609839-06:00\r\n-> tags = \r\n\r\n[SelectionList]\r\n|> FirstAndLastName\r\n    [table]\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n\r\n|> names\r\n    [table]\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n\r\n|> TheEnumOptionIs option=SecondOption, selectedOption=selectedOption\r\n|> TheNameIs first=first, last=last, fullname=fullname\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Simple",
      "key": "Simple",
      "implementation": "StoryTeller.Samples.Fixtures.SimpleFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "A()",
          "fact": false,
          "key": "A",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "B()",
          "fact": false,
          "key": "B",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "C()",
          "fact": false,
          "key": "C",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "D()",
          "fact": false,
          "key": "D",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for Simple",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Simple",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                "id": "99924d7b-94bf-4433-88bc-72c36816726c"
              },
              {
                "type": "comment",
                "text": "## A",
                "id": "c0602358-c9ff-4397-ab4b-9a7222df45fb"
              },
              {
                "key": "A",
                "cells": {},
                "collections": [],
                "id": "1e2c807c-1091-4eb7-85e5-e627a86e0b94"
              },
              {
                "type": "comment",
                "text": "## B",
                "id": "c1e7e9d1-65e6-4671-a9c4-a689df79a51f"
              },
              {
                "key": "B",
                "cells": {},
                "collections": [],
                "id": "54fce107-83e7-4e2b-a426-8cff585d3ff8"
              },
              {
                "type": "comment",
                "text": "## C",
                "id": "a4db588c-09c2-40ca-86e3-af4e5125b021"
              },
              {
                "key": "C",
                "cells": {},
                "collections": [],
                "id": "7f868967-dcf7-423b-9179-7bd5b1907dfa"
              },
              {
                "type": "comment",
                "text": "## D",
                "id": "51fc0a20-c0eb-4f4f-9d2c-b05166f865e3"
              },
              {
                "key": "D",
                "cells": {},
                "collections": [],
                "id": "6e0a99c5-f6e5-4f77-9b8f-630c25191fb2"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "b06901b1-2d29-4fb7-ae52-a9671a5921cb"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "e669bdc2-0f61-4921-b16a-d6c8f20be21e"
              }
            ],
            "activeCells": {},
            "id": "8a0173f5-69c1-4207-aeba-8aebc48182a7"
          }
        ],
        "id": "34d1170c-5422-42b7-aba2-710e3a27a0ea"
      },
      "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 94a16156-2ff9-476f-bdb4-168d97e4d517\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8609839-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Embedded Choices",
      "key": "EmbeddedChoices",
      "implementation": "StoryTeller.Samples.Fixtures.EmbeddedChoicesFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "fixture": {
            "title": "Simple",
            "key": "Simple",
            "implementation": "StoryTeller.Samples.Fixtures.SimpleFixture",
            "type": "fixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "fact": false,
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "message",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "A()",
                "fact": false,
                "key": "A",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "B()",
                "fact": false,
                "key": "B",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "C()",
                "fact": false,
                "key": "C",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "D()",
                "fact": false,
                "key": "D",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              }
            ],
            "missingCount": 0,
            "missingCode": "This fixture is fully implemented",
            "sample": {
              "title": "Sample Specification for Simple",
              "path": null,
              "max-retries": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Wednesday, January 11, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "70726b62-4ecb-4817-91f6-45d74ec876c4"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "772863b9-679a-4925-8356-1b0e0947ebb6"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "86a9bf92-3233-4f64-8e92-1d7566aa331b"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "62107d80-2fee-4460-91a6-7638754dede2"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "12042a43-6077-44ae-9486-f0cf048fb69a"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "83813595-6147-42c2-a3f1-287fa1e3c8be"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "8e624fbb-51b8-4eea-b627-3390a5752526"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "5541d498-f142-4adf-9202-bf9fa698cef1"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "a2c6cc43-5b09-406c-800e-cfd8ac7e237c"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "a4f43645-3f3c-483f-b1cf-84440370b8fe"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "9c4cb58e-9c60-41fd-8f42-a235e7f220d9"
                    }
                  ],
                  "activeCells": {},
                  "id": "db31d304-c6be-4948-b74f-28812c50b8c2"
                }
              ],
              "id": "4f9962ff-1a88-4f97-abdc-23969294c705"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 6c139c66-da65-43ca-9c0c-ab5ea348d519\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8609839-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "simple",
          "collection": "Simple",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "Simple",
          "type": "embedded-section",
          "errors": [],
          "missing": false
        },
        {
          "fixture": {
            "title": "Sentence Grammars",
            "key": "SingleSelection",
            "implementation": "StoryTeller.Samples.Fixtures.SingleSelectionFixture",
            "type": "fixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "fact": false,
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "message",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "This fact is always true",
                "fact": true,
                "key": "ThisFactIsTrue",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "This fact is always false",
                "fact": true,
                "key": "ThisFactIsFalse",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "This fact throws an exception",
                "fact": true,
                "key": "ThisFactThrowsException",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "{one is better than {two",
                "fact": false,
                "key": "BadGrammar",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "one",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "two",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Start with the number {number}",
                "fact": false,
                "key": "StartWithTheNumber",
                "type": "sentence",
                "cells": [
                  {
                    "default": "5",
                    "editor": null,
                    "header": null,
                    "key": "number",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Multiply by {multiplier} then add {delta}",
                "fact": false,
                "key": "MultiplyThenAdd",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "multiplier",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "delta",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Subtract({operand})",
                "fact": false,
                "key": "Subtract",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "operand",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "DivideBy({operand})",
                "fact": false,
                "key": "DivideBy",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "operand",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "The number should now be {number}",
                "fact": false,
                "key": "TheValueShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "number",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "The sum of {number1} and {number2} should be {sum}",
                "fact": false,
                "key": "TheSumOf",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "number1",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "number2",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": "NULL",
                    "editor": null,
                    "header": null,
                    "key": "sum",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "ThisLineAlwaysThrowsExceptions()",
                "fact": false,
                "key": "ThisLineAlwaysThrowsExceptions",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "This line is always true",
                "fact": true,
                "key": "ThisLineIsAlwaysTrue",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "This line is always false",
                "fact": true,
                "key": "ThisLineIsAlwaysFalse",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "{x} + {y} should be {sum}",
                "fact": false,
                "key": "XplusYShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "x",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "y",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "sum",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Incomplete format",
                "fact": false,
                "key": "BadSentence",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "name",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "JustGo()",
                "fact": false,
                "key": "JustGo",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              }
            ],
            "missingCount": 0,
            "missingCode": "This fixture is fully implemented",
            "sample": {
              "title": "Sample Specification for SingleSelection",
              "path": null,
              "max-retries": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Wednesday, January 11, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "SingleSelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                      "id": "921e6ed7-7c41-4383-8976-1ae60313bbae"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "70e4c332-1507-44bf-bd5e-5d3ad3f9afd0"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "384e5496-55fb-478d-b3b4-a6fd32da7ed0"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "eb601c44-1e42-4d7b-bb5d-cdc0cd9d8b36"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "80e59f76-0f9f-44f0-9294-a2d0037056b3"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "0c8823c4-9eec-471e-a8dd-a12905196504"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "ef2dec07-18c8-460a-8cdd-077e85a9a03d"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "9326b241-fab2-41f2-859f-4c79d9a2f20a"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "a1381109-c0b5-4cc3-a756-5755f3745123"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "61b2fabe-2cb8-429c-8f9a-47b90990867f"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "c2fd8957-3429-46be-a507-e0339751d8f5"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "edf6fb2d-8328-4eca-ba62-0a8f1f9f0bf3"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "94c80c9a-f147-4d9a-a274-51bba536bd88"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "0239901a-799e-456a-9413-4960955b0014"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "1461b5f6-e0c8-4f29-98be-e501f9d88720"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "4ab300a8-e4aa-47a2-96d1-f1b0717f24a9"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "56563570-0708-4386-b9ba-40c492445787"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "0c9f9d6b-a005-4720-b488-80ffaabaf0f2"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "11cf7304-af3d-4e72-b095-f2e08b2942ed"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "0a2467f0-c0b9-4bf2-811f-43b947e31a3d"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "38cddb37-966c-4f61-a689-76476f75d90b"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "c64eea64-a8b8-4782-8d28-6493aaac824c"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "e248522c-cf83-46bc-aa50-473c573601b2"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "28d39b2f-7e8f-4098-b68c-01f0b4d07517"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "5f81caab-53a2-4536-a76d-5b823d85833d"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "971a75b5-1c80-4419-bdfd-3375ee61f4f5"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "91b1e4fb-eeeb-4760-86a9-752bfa73976d"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "ed40e38e-4321-4741-9267-643ad4252f80"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "cf9d3389-e77e-46f8-a372-2f29eef1c20c"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "de320047-0450-4fa1-a376-292a90c31d3b"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "7dd89349-5689-4942-8984-1638820cec2d"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "274698e6-6fb7-494c-8dd1-eba0f4130330"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "06d11143-8f08-4789-b63b-db6a83175a1a"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "f8455ce7-9db5-48ae-9858-924496684387"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "c1036351-8a76-4c4e-b346-ad988741aa15"
                    }
                  ],
                  "activeCells": {},
                  "id": "f6278abb-e69e-48be-94f3-34844095b7db"
                }
              ],
              "id": "d1f9d7b7-bd5f-4319-abd1-aa93c97374f9"
            },
            "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 62eba243-d4a4-40b1-9cf8-908e5bfe5033\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8619839-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "single",
          "collection": "SingleSelection",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "Single",
          "type": "embedded-section",
          "errors": [],
          "missing": false
        },
        {
          "fixture": {
            "title": "Simple",
            "key": "Simple",
            "implementation": "StoryTeller.Samples.Fixtures.SimpleFixture",
            "type": "fixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "fact": false,
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "message",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "A()",
                "fact": false,
                "key": "A",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "B()",
                "fact": false,
                "key": "B",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "C()",
                "fact": false,
                "key": "C",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "D()",
                "fact": false,
                "key": "D",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              }
            ],
            "missingCount": 0,
            "missingCode": "This fixture is fully implemented",
            "sample": {
              "title": "Sample Specification for Simple",
              "path": null,
              "max-retries": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Wednesday, January 11, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "86ba16c0-2992-41c9-87c8-032bafe3742a"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "9058394c-6796-4f3e-97cf-f1a41df6cee0"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "04029eae-2488-417d-8421-576769ad3f41"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "b00f728a-dd7f-476f-8762-468ccb98fbc8"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "34da28e3-400e-41e4-9824-ce30592071e7"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "f2c29f63-19dd-40f4-bf30-30c0f6ef3e5f"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "20a2539b-a92d-4c61-908b-863266c84363"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "668ba556-931a-44b9-ae64-7107ff1f08a3"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "bcdea07f-b556-42c7-8b3a-421228cd70ca"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "e5b68b27-09e2-49ac-b9a8-954c07bf46cd"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "9df703a1-4dec-46dc-a3f4-6d880c8d35a4"
                    }
                  ],
                  "activeCells": {},
                  "id": "3cb59d70-9233-457c-ae37-ba2a7fdc6f1c"
                }
              ],
              "id": "2e14ee5c-9fc4-4dc2-9360-31f0ce7156e3"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 2f6bbb9f-61ca-4ec2-b47c-d1547c11bcd9\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8619839-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "simple",
          "collection": "Simple",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "Inline",
          "type": "embedded-section",
          "errors": [],
          "missing": false
        },
        {
          "fixture": {
            "title": "Sentence Grammars",
            "key": "MandatorySelection",
            "implementation": "StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
            "type": "fixture",
            "grammars": [
              {
                "format": "TODO: {message}",
                "fact": false,
                "key": "TODO",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "message",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "This fact is always true",
                "fact": true,
                "key": "ThisFactIsTrue",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "This fact is always false",
                "fact": true,
                "key": "ThisFactIsFalse",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "This fact throws an exception",
                "fact": true,
                "key": "ThisFactThrowsException",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "{one is better than {two",
                "fact": false,
                "key": "BadGrammar",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "one",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "two",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Start with the number {number}",
                "fact": false,
                "key": "StartWithTheNumber",
                "type": "sentence",
                "cells": [
                  {
                    "default": "5",
                    "editor": null,
                    "header": null,
                    "key": "number",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Multiply by {multiplier} then add {delta}",
                "fact": false,
                "key": "MultiplyThenAdd",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "multiplier",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "delta",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Subtract({operand})",
                "fact": false,
                "key": "Subtract",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "operand",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "DivideBy({operand})",
                "fact": false,
                "key": "DivideBy",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "operand",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "The number should now be {number}",
                "fact": false,
                "key": "TheValueShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "number",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "The sum of {number1} and {number2} should be {sum}",
                "fact": false,
                "key": "TheSumOf",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "number1",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "number2",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": "NULL",
                    "editor": null,
                    "header": null,
                    "key": "sum",
                    "options": null,
                    "result": true
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "ThisLineAlwaysThrowsExceptions()",
                "fact": false,
                "key": "ThisLineAlwaysThrowsExceptions",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "This line is always true",
                "fact": true,
                "key": "ThisLineIsAlwaysTrue",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "This line is always false",
                "fact": true,
                "key": "ThisLineIsAlwaysFalse",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              },
              {
                "format": "{x} + {y} should be {sum}",
                "fact": false,
                "key": "XplusYShouldBe",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "x",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "y",
                    "options": null,
                    "result": false
                  },
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "sum",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "Incomplete format",
                "fact": false,
                "key": "BadSentence",
                "type": "sentence",
                "cells": [
                  {
                    "default": null,
                    "editor": null,
                    "header": null,
                    "key": "name",
                    "options": null,
                    "result": false
                  }
                ],
                "errors": [],
                "missing": false
              },
              {
                "format": "JustGo()",
                "fact": false,
                "key": "JustGo",
                "type": "sentence",
                "cells": [],
                "errors": [],
                "missing": false
              }
            ],
            "missingCount": 0,
            "missingCode": "This fixture is fully implemented",
            "sample": {
              "title": "Sample Specification for MandatorySelection",
              "path": null,
              "max-retries": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Wednesday, January 11, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "MandatorySelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                      "id": "8b346b95-4c6f-44cf-b1d7-1b1c0f88ef2e"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "2f9cb4dd-9f4b-4794-9944-b9377205ace8"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "1e06c70f-c366-4114-b80f-aa917a70c0a8"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "a055b5d7-9e98-4497-8df2-28f27ac9f3b2"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "db19a5fe-e774-4cd8-8d28-d3d7ee489df7"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "9c400191-e760-49fe-ba07-3a2da11b64aa"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "3460f180-feb9-471a-bf22-a67939ecf3ec"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "39811bf7-6c77-40d5-9d37-52dad31a31c1"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "2846c04e-f24f-4021-99f4-15c2d0e48c33"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "4a2d18c1-ac17-47db-82c3-2538aebbf2ed"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "0f8b4dea-5bd1-488b-bfcd-6e019bf04efa"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "7bc1e38f-705d-49d3-83b4-87c13086d058"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "91a09154-1ffb-4492-8008-0def978c2893"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "9535cb74-f855-40ed-a1d4-d63db5fff016"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "9733f862-3c60-494a-a86e-ac35ac10a246"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "5bf582c5-6e2e-4a2c-9d4b-62060a5f9bf6"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "998ac88e-1acc-4a71-ac51-423e4ab4c319"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "b004fa2b-e702-4661-835f-4c221d70204e"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "eba78682-44cd-4f59-bffe-0e37294c6893"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "a773e300-2937-4d4e-87ae-1774fda39ea8"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "63af499e-6b92-486c-b94d-dd88758e6f78"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "802cbdd2-4471-4717-9421-ef538c76e005"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "216027f9-80c0-4817-980a-025812b7f034"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "5fd9c0b4-a0c9-4e9c-aa76-92cf1faf36a3"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "e913af25-683d-4fe7-bea4-6739e8dcd44a"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "bf8a9bc8-34ac-4366-88e7-5d56d5611b70"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "d667cf39-0685-4cec-b23b-3a33e2634cc8"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "35d3f65b-8710-407f-a0ef-9f678b6ce967"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "0f12d167-0d80-4243-9d7a-aef113e8e5fe"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "346261da-3005-4861-8008-a444c98d7103"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "e5746e23-538b-4d20-b666-b8ba71432c65"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "51404235-8b23-4ddb-8d04-e6cb0739d7db"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "12bf8b71-6ff5-46ad-ac11-5f21d23e0030"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "8699e2b5-adba-412d-bb32-75e6a0450796"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "e12b004c-147c-45a3-8363-a324fd914d64"
                    }
                  ],
                  "activeCells": {},
                  "id": "2cf73cdb-b4cd-4059-950e-b27494c6b8ec"
                }
              ],
              "id": "57a38173-d46c-4f4b-93f7-f9996d012f90"
            },
            "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = 7333eec2-1201-46c8-ab37-900e49bdd7b7\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8619839-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "mandatory",
          "collection": "MandatorySelection",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "MandatorySelection",
          "type": "embedded-section",
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for EmbeddedChoices",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "EmbeddedChoices",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedChoicesFixture",
                "id": "b2b278aa-b19a-4110-aa8f-9967927e2780"
              },
              {
                "type": "comment",
                "text": "## Inline",
                "id": "e2678792-9536-4e99-947a-1c019b183dec"
              },
              {
                "key": "Inline",
                "cells": {},
                "collections": [
                  {
                    "key": "Simple",
                    "type": "section",
                    "steps": [
                      {
                        "type": "comment",
                        "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                        "id": "41496f5e-b912-4b98-8419-6cb4714fd2b1"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "835b1420-bc95-4a26-838e-3099daef1313"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "7ccdd5ab-4616-4af0-88c1-d845fbec6c94"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "b561fce5-b7a6-4f69-bb2d-3c81f8eef300"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "1f4bb94c-822b-4149-a8b3-47c571db3215"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "dc9369ff-b185-4fb2-ad6d-2a868ef68f09"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "680ab672-37ff-433a-975d-177c01af1979"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "371625db-1f05-4b5d-8612-9b45cc5a6314"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "2fcb3615-d8f1-4874-bfe7-1409fc7e41d1"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "5145d9c1-2d37-41b0-841a-e0c9dc9c8217"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "13e62e58-2057-46c8-9ae2-da043d49648d"
                      }
                    ],
                    "activeCells": {},
                    "id": "5b1f6690-391f-4288-b58d-9929ea438e7c"
                  }
                ],
                "id": "1c90de79-2d1c-46d6-b3b2-a1337ac82a0e"
              },
              {
                "type": "comment",
                "text": "## MandatorySelection",
                "id": "6a547756-9954-487a-bc8d-b405122799f2"
              },
              {
                "key": "MandatorySelection",
                "cells": {},
                "collections": [
                  {
                    "key": "MandatorySelection",
                    "type": "section",
                    "steps": [
                      {
                        "type": "comment",
                        "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                        "id": "4e0b1e30-f162-4143-b67b-1d93101f3969"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "3d49493a-068f-4d83-8ef3-09149adbb1b0"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "03c1f4d3-997d-4513-a2ff-3803594f9a29"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "a3bdb2ce-1e93-492c-a17f-1f776c9270bb"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "ca95b04e-db00-4c58-8a4e-92798cb16cf4"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "94e4a006-97af-4ca4-b3a3-270f5682a99d"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "c128560c-401d-4003-83e8-964cb5a0ba48"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "599c5123-b33b-4fe1-8492-b59312c65599"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "7a1e311d-62cc-4bdd-9f7a-e9627c9d98f0"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "2f0b3a0f-322d-4071-97c2-e0e6395854f3"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "5ca2cf83-ae73-4d57-a0d8-8ee675549d23"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "1cf1a672-47d5-4d1f-bbf8-b00a82665043"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "674208a4-99f0-4102-a40e-5b8a4dc55a6d"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "9da0383c-90f1-4726-beaa-f49ee55992f6"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "cd014004-da41-417b-991f-642e9705a361"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "0cc4113a-db97-4902-affa-3e114981a0fe"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "c466ece6-1670-4f2b-b15f-37e67d111bf2"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "3f67feaf-315e-4813-9e80-ad7b8d945f07"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "e6bd6ec2-c3ec-4b4f-b384-1d22a067a892"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "157f1f93-9839-4793-8a6e-57aee074954d"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "beb6ff9b-ebd8-455d-a0b6-b75c86f2028d"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "29e1b959-9ef6-4c04-89ec-32d19cbe8819"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "2cf0d9d5-c66c-498e-84d4-ae408fbf142f"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "986d35f1-5689-461d-a4f5-6d5dc9918ac6"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "ff29ba14-1207-4511-ab3c-29d10694d684"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "8cc39b9c-c8a1-4edd-93ba-c6290fa5086b"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "42b4574a-bd33-4a10-9c7f-57f5d706cd1f"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "d444a86c-571c-4473-bb09-d80053f97c2c"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "e107ac59-1941-4a52-9196-27881a1c5f81"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "5d6fddf7-f509-47c6-96e2-22abc7b1f005"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "c456a7b0-f351-4c9d-8eb9-7742ce8e6f8b"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "aa1396f7-49e4-482f-8325-d20ccb7b1c19"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "ba4350f5-29b8-4fef-b77f-b44bab435428"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "9cbec75c-b311-4b44-acf2-cac7ef76d8d0"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "7dd681fe-631e-48fa-aa8e-7461ad6ae399"
                      }
                    ],
                    "activeCells": {},
                    "id": "a39d7e85-962c-4b27-af69-c998fb4fa23f"
                  }
                ],
                "id": "9c83be0d-9983-42f2-9483-24eaaf2c39b5"
              },
              {
                "type": "comment",
                "text": "## Simple",
                "id": "3276e7dc-88de-4c76-a4c7-5b1d92960d2f"
              },
              {
                "key": "Simple",
                "cells": {},
                "collections": [
                  {
                    "key": "Simple",
                    "type": "section",
                    "steps": [
                      {
                        "type": "comment",
                        "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                        "id": "e301a428-d590-44e4-84ca-b5e156490f24"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "742d64c6-775c-400a-a50d-c8389f6f6a03"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "96b3fe9f-840f-40bd-964d-292d05379252"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "c4b4da65-a73a-487b-9a0c-5bc8aafce871"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "3d62d387-5cad-4b08-a599-75ab0e602b44"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "fa607c49-c0ab-4d4e-ba60-497e8aa73df2"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "00765817-a608-4541-a9fc-6175a36f6741"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "7e892dc6-e201-49df-9d4a-c4890c431f00"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "91e0c0a5-57dc-4260-bd90-92eee40bdba6"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "c71a34ba-a85c-4e17-9087-f520f97278db"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "075caabf-318c-4633-8d60-b8d069a624c7"
                      }
                    ],
                    "activeCells": {},
                    "id": "bf7de9b3-990a-4fb9-87a4-c6556d1fa281"
                  }
                ],
                "id": "ab34b647-5edf-4529-a73a-a2a3a75142d8"
              },
              {
                "type": "comment",
                "text": "## Single",
                "id": "ea70b33d-3601-4cb3-a480-646a80c991a8"
              },
              {
                "key": "Single",
                "cells": {},
                "collections": [
                  {
                    "key": "SingleSelection",
                    "type": "section",
                    "steps": [
                      {
                        "type": "comment",
                        "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                        "id": "c107fca2-adb0-4dd4-b66a-dbedec710ffd"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "3b083cb8-225d-4ee5-82ef-189b1958527f"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "101a1511-b021-4a22-af89-bf3df9d806b8"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "ea9edc9e-4673-4cfe-9664-ccd072058d78"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "ce037ebb-2896-4ce4-9796-d6d74ab89118"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "30a30444-9d62-461d-80cf-5e88b4b5728a"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "392bf2b7-2695-4421-9bc1-e1ff03123f26"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "82e1001e-96e3-4c57-b3f1-a3d169ddcb80"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "10f1abff-7bea-4d7c-ab29-5438eb81cc5f"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "a8430dfe-d70c-40e4-a900-594002e4e3e0"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "4b73b74c-b97b-468d-8387-78f4f930120e"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "51ec8677-77b1-4872-9d36-4f9bd5068484"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "6853950e-cc63-4025-b1bb-786917985bea"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "e9b5ad40-1eee-48f4-8b3e-56f9540d62e7"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "6a9b422a-ab7a-4190-a7b0-62d9f661f33e"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "62dbc82a-9335-4694-952e-a1ecd93a14d2"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "1c5ca0dd-f611-4226-a7fe-eb3e8a0e1d2b"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "9c12e89b-f55b-4afc-92dc-ad1753bd98d5"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "0315e7f3-02e4-49c5-93d2-a6f49a10b089"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "c08032da-bb79-4f8f-9ddf-16d0d203ddec"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "000f058a-cdfa-44f0-9284-88bbc9da5b7c"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "02b76b8c-0f7a-487e-b69e-c68998358a2e"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "fc8e0e05-d3cd-4111-8a23-cfa57788d6fb"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "2c2843e4-f8e3-4738-9266-fc7cb651c280"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "1824b4b1-b06a-460f-bf29-6cc10e74e4f0"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "ec1156a7-6a05-4713-8e5f-b6ffd05040b9"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "a28c100c-0258-4849-9633-195b5589135c"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "5dc2cd22-f360-4782-acaa-63ded7835193"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "9e0ee3de-5936-4894-9893-359522b4f0ae"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "dbbd5208-af0d-4b47-a8dd-71d47069874d"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "8d53a31a-e541-4294-a137-a99d7a59968b"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "1c7f770d-2b14-4dee-9a3c-6cb845b0db8e"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "a631e6bb-d745-4f5b-9f74-bec2d3b52a5a"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "3faf713f-4a24-46fc-b011-f92be05c8acb"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "3b369f05-1abe-4d8d-a528-91da09661200"
                      }
                    ],
                    "activeCells": {},
                    "id": "ab1a2f50-fb8a-4764-bc53-58ccbdb3aa9b"
                  }
                ],
                "id": "ff653816-6b67-48d3-ae9c-6bfe3019e8b4"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "29458940-d61a-491d-9890-c7db847b7424"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "8ad9e5c9-1a8d-4040-9c31-bd5072126026"
              }
            ],
            "activeCells": {},
            "id": "1fba9a50-af08-4d07-bab9-630405838b68"
          }
        ],
        "id": "704ba382-1c99-4f3a-b651-00089d63bcdc"
      },
      "sampleMarkdown": "# Sample Specification for EmbeddedChoices\r\n\r\n-> id = 70f75ed3-7df7-444e-a03f-88b638a8b8d8\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8629839-06:00\r\n-> tags = \r\n\r\n[EmbeddedChoices]\r\n|> Inline\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> MandatorySelection\r\n    [MandatorySelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> Simple\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> Single\r\n    [SingleSelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Sentence Grammars",
      "key": "SingleSelection",
      "implementation": "StoryTeller.Samples.Fixtures.SingleSelectionFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact is always true",
          "fact": true,
          "key": "ThisFactIsTrue",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact is always false",
          "fact": true,
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact throws an exception",
          "fact": true,
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "{one is better than {two",
          "fact": false,
          "key": "BadGrammar",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "one",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "two",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Start with the number {number}",
          "fact": false,
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "default": "5",
              "editor": null,
              "header": null,
              "key": "number",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Multiply by {multiplier} then add {delta}",
          "fact": false,
          "key": "MultiplyThenAdd",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "multiplier",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "delta",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Subtract({operand})",
          "fact": false,
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "DivideBy({operand})",
          "fact": false,
          "key": "DivideBy",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The number should now be {number}",
          "fact": false,
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The sum of {number1} and {number2} should be {sum}",
          "fact": false,
          "key": "TheSumOf",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number1",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number2",
              "options": null,
              "result": false
            },
            {
              "default": "NULL",
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "ThisLineAlwaysThrowsExceptions()",
          "fact": false,
          "key": "ThisLineAlwaysThrowsExceptions",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This line is always true",
          "fact": true,
          "key": "ThisLineIsAlwaysTrue",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This line is always false",
          "fact": true,
          "key": "ThisLineIsAlwaysFalse",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "{x} + {y} should be {sum}",
          "fact": false,
          "key": "XplusYShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Incomplete format",
          "fact": false,
          "key": "BadSentence",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "name",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "JustGo()",
          "fact": false,
          "key": "JustGo",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for SingleSelection",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "SingleSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                "id": "36d92357-ddbb-4559-9aa9-f363dad9ee1e"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "2bd3250f-3857-481f-b8f3-3ff753f03869"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "0209e44a-b64b-4ec6-9ebb-bba9d9c23ff8"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "f5d0cb6a-1215-431e-b131-ddd0dab9d8ff"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "a43ecb70-9315-4415-8ba6-c99461186de4"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "8cd2efeb-49ef-4a1f-830b-cc1bcef3acbb"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "cfcffe6e-c572-44c0-8d2a-cda31a16f240"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "b65ad7e5-3be1-4647-88d2-fdc7fa82df6d"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "a6e47e98-68e9-45fb-a60e-8c266a7ea2ee"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "232f9bae-60f5-4f66-bc2e-5ef62831a19b"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "26613120-cd67-48b0-ab18-f09b5ac5c54f"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "d341e6a0-9b9e-4f85-98ad-e66d36548505"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "21c45245-c402-402e-bea8-34dd79c8bba3"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "d940c6d4-f527-49c6-ac98-5bee0578c7a2"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "c8896259-472b-4265-9595-0e1441ceaf74"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "2c5ec566-ee95-492c-a0b4-f6f6ab16f061"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "5d95ea29-52a7-4b50-9dd1-3ee51ee250ce"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "a5a85ae1-c553-4e5d-930f-2f4bf74f0471"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "f326d2c2-3a0e-490f-81b1-ad4596e5ea34"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "84c27b5d-43ba-47a7-b9f1-bb329cab9449"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "b3997998-863e-4d79-9806-605fa764e9f4"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "7aaf18c3-b58b-401d-83f4-81c2cb6fee6e"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "51bd5e4c-dc8d-460a-9af2-1fe25361933e"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "cce548f6-5cf1-4048-9f2b-25f15c7d7fbd"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "27d84229-2172-4826-b75c-298d1395a754"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "35e950e6-f3e6-434d-864e-fac6ab72c621"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "4366de42-279a-4c01-85ca-c82b6a05fd53"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "cc047d58-b742-4b48-bfc5-59600aafa21c"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "5d0994e3-3c8d-44fa-a93a-98ae52dc8ee8"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "1e305e03-63e3-4a4f-8b2b-a13c81e4159a"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "2304c25f-f85b-4218-a576-04720d9b15a3"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "064cfc87-6207-4118-8505-6b44c28cc794"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9e879468-92f9-441d-ad18-9f93c275c0ff"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "50e01ca8-09ac-4f44-9cde-742cf26b848e"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "78349651-5731-4dba-b921-4e8e185bef27"
              }
            ],
            "activeCells": {},
            "id": "549bec0a-8596-4a78-acb8-59b490790eb6"
          }
        ],
        "id": "5e93dfe0-5083-4165-83e0-3135ca10f39f"
      },
      "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = c4fd9122-2841-436e-9d1d-d05050702022\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8629839-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Sentence Grammars",
      "key": "OneOrMoreSelection",
      "implementation": "StoryTeller.Samples.Fixtures.OneOrMoreSelectionFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact is always true",
          "fact": true,
          "key": "ThisFactIsTrue",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact is always false",
          "fact": true,
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact throws an exception",
          "fact": true,
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "{one is better than {two",
          "fact": false,
          "key": "BadGrammar",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "one",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "two",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Start with the number {number}",
          "fact": false,
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "default": "5",
              "editor": null,
              "header": null,
              "key": "number",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Multiply by {multiplier} then add {delta}",
          "fact": false,
          "key": "MultiplyThenAdd",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "multiplier",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "delta",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Subtract({operand})",
          "fact": false,
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "DivideBy({operand})",
          "fact": false,
          "key": "DivideBy",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The number should now be {number}",
          "fact": false,
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The sum of {number1} and {number2} should be {sum}",
          "fact": false,
          "key": "TheSumOf",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number1",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number2",
              "options": null,
              "result": false
            },
            {
              "default": "NULL",
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "ThisLineAlwaysThrowsExceptions()",
          "fact": false,
          "key": "ThisLineAlwaysThrowsExceptions",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This line is always true",
          "fact": true,
          "key": "ThisLineIsAlwaysTrue",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This line is always false",
          "fact": true,
          "key": "ThisLineIsAlwaysFalse",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "{x} + {y} should be {sum}",
          "fact": false,
          "key": "XplusYShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Incomplete format",
          "fact": false,
          "key": "BadSentence",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "name",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "JustGo()",
          "fact": false,
          "key": "JustGo",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for OneOrMoreSelection",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "OneOrMoreSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.OneOrMoreSelectionFixture",
                "id": "4f0f6473-c239-4179-b60c-6b0a62340f8a"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "56688874-7987-43ab-881f-1be543a5dcf5"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "7130905e-2f3f-45cf-8798-1a193fe5d3fc"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "6c5fd727-b3ac-49b1-a398-7912c6eb3e39"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "b7da476e-2335-45ff-a1d1-e286780973b3"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "7bde79bf-2ae0-41e1-82aa-37bb1b7498db"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "35108640-84ab-45f4-a60f-34a90cb1b63b"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "13f8c0ca-addf-4c84-8f9e-aff7cd25585c"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "de233ea2-5cd7-439c-aef1-34b1a33fdaf2"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "b58af813-3f12-4bbc-a8dd-57895d7d07d9"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "34cdf9a5-63c8-467c-b8ce-451123d76a50"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "4222daf7-57cd-4f6d-b533-ecb4ead00d7a"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "edf4b446-14b2-44b1-8ae6-5567e322814a"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "104c59a0-3be0-474d-a53b-c5d6c92964e6"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "ec01ecd4-2970-45f9-bda6-70adef4c3f99"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "f7ca9408-03fa-40bd-808f-e31eb2b21f21"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "2cab24cf-af0a-4cd6-a71b-afe25f552813"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "a92563e2-98a3-48ab-9ee1-f82ca72a9b6a"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "fd92409a-0ae6-4926-a011-1733c8e35eee"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "9a1f26ef-6d4f-4744-afd6-9d60794600c8"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "daac7cbd-fead-4846-8e16-916e2759960a"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "c3ac5c82-9f3a-4845-a336-82245d81fc46"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "f3cad4e0-2167-40a1-9cc6-1107b480e709"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "6870b937-8e9f-4f40-a5b0-612ff1a682cd"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "a31679a1-c2c5-4f9e-869f-4fbd3392ce21"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "ad20c669-c8c8-432f-a197-76022c5a2989"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "74b378a1-a4d9-4b43-8c02-2fcdd288e103"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "0229189e-6cd1-4a5c-ad08-00b9a937c133"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "e11df5ef-790b-431e-9cd0-b0f76afb58fe"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "fef9c55d-abd9-4787-9ac9-83ef06040ed7"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "99f4c252-d197-4327-bd94-eb07e5960c3d"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "3cfb15a1-a5f4-48b0-a469-eb146751bb20"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "d7dbf31e-679b-4757-bed5-ca43f84bc0da"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "45019461-4867-4b59-85cc-85cf8d97635f"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "02407814-494c-46be-808d-0ff3494b1cbf"
              }
            ],
            "activeCells": {},
            "id": "05cd9374-d88a-40af-99e5-31b5e313fdd1"
          }
        ],
        "id": "510b9c3a-728e-4826-a788-48b69d42d617"
      },
      "sampleMarkdown": "# Sample Specification for OneOrMoreSelection\r\n\r\n-> id = c68af70b-aa84-40c2-87ce-e5ea326e6047\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8639839-06:00\r\n-> tags = \r\n\r\n[OneOrMoreSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Sentence Grammars",
      "key": "MandatorySelection",
      "implementation": "StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact is always true",
          "fact": true,
          "key": "ThisFactIsTrue",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact is always false",
          "fact": true,
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact throws an exception",
          "fact": true,
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "{one is better than {two",
          "fact": false,
          "key": "BadGrammar",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "one",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "two",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Start with the number {number}",
          "fact": false,
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "default": "5",
              "editor": null,
              "header": null,
              "key": "number",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Multiply by {multiplier} then add {delta}",
          "fact": false,
          "key": "MultiplyThenAdd",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "multiplier",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "delta",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Subtract({operand})",
          "fact": false,
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "DivideBy({operand})",
          "fact": false,
          "key": "DivideBy",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The number should now be {number}",
          "fact": false,
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The sum of {number1} and {number2} should be {sum}",
          "fact": false,
          "key": "TheSumOf",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number1",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number2",
              "options": null,
              "result": false
            },
            {
              "default": "NULL",
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "ThisLineAlwaysThrowsExceptions()",
          "fact": false,
          "key": "ThisLineAlwaysThrowsExceptions",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This line is always true",
          "fact": true,
          "key": "ThisLineIsAlwaysTrue",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This line is always false",
          "fact": true,
          "key": "ThisLineIsAlwaysFalse",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "{x} + {y} should be {sum}",
          "fact": false,
          "key": "XplusYShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Incomplete format",
          "fact": false,
          "key": "BadSentence",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "name",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "JustGo()",
          "fact": false,
          "key": "JustGo",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for MandatorySelection",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "MandatorySelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                "id": "abbd8aa8-cd6a-4b37-9e5e-96593f4ea68a"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "8e7f9a97-c3ad-4960-8daf-1a010b6d98bd"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "d5b0d92b-41fc-4327-8f43-cd1fb1052cb8"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "5214af46-0228-41ca-b51f-3c1f7cfe2400"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "d1c30369-89c4-4a6d-bda1-7cda1e6a789c"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "332d877d-8092-40d3-91aa-f841ec2e17d4"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "a0354a37-b8f1-42af-bb49-eb867eac3bc9"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "0a27d244-2901-4cf7-9249-4efc03706211"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "d3b4ddce-d67b-4c02-b5d4-8fe729da1d1a"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "7e4076b1-c736-42b7-a6c8-fbdc823fb9f5"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "f61959a3-8049-4b60-a224-f55918a06063"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "5ca228a5-f7df-43bf-a096-cc6b60d2a161"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "f32c93fa-e22a-40a7-8135-b4230daa2d37"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "56055c3c-7211-4e3e-81ff-c6be28e2b4ff"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "620fdea9-8ef7-433c-91b9-855bfdd2dc44"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "e898d340-34ce-4639-b3e9-84f89f887cfb"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "889c35ff-676f-4df0-9f76-1434cf134b2f"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "d09921eb-3607-4174-9965-6a1d5b23a4d8"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "74c73216-8450-44ad-b3fe-bd5ed7c70ec3"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "b504b073-ff54-47eb-be83-fe4f0c2d3da0"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "98a15928-d250-41a7-864a-e231fdbbf29b"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "cffc439d-090f-45d4-8fb7-b39dd89e4f46"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "676b0750-030d-4393-9c0a-911ca94f8da9"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "e6ae46a8-92d5-4238-b448-1e0407f64457"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "8d806102-e685-4c00-a8d9-d34dd8f7b27f"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "b9ed3664-1c54-436b-9b8c-5a9a7597ab4f"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "a9bc001f-8b9a-47ad-bc97-38697f195fb7"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "747c2cbf-1945-4c9f-87aa-af9f237e17d8"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "ba7a5adb-8617-4609-a022-36009ba4b399"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "0d97ef23-1692-4887-b409-383af2d976bf"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "d4d21e05-232e-4de1-9daa-6ad5d01e6229"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f3da7c5b-bbf8-457a-9f97-df239d40bea9"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "a9fdf804-f884-4a5e-a745-8be27d3692b5"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "594ec055-293f-4b85-a4c8-d99f03cc83f1"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "08f4233b-b4dd-4433-9dfe-77f0695cd5d1"
              }
            ],
            "activeCells": {},
            "id": "271cb9ac-7557-417b-a496-c88f1ead82f9"
          }
        ],
        "id": "497bc4f8-eade-4931-b5f7-990c7b296c16"
      },
      "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = b39331e7-1163-4013-9e78-e712d1fbdcf6\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8639839-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Sentence Grammars",
      "key": "Sentence",
      "implementation": "StoryTeller.Samples.Fixtures.SentenceFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact is always true",
          "fact": true,
          "key": "ThisFactIsTrue",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact is always false",
          "fact": true,
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This fact throws an exception",
          "fact": true,
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "{one is better than {two",
          "fact": false,
          "key": "BadGrammar",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "one",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "two",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Start with the number {number}",
          "fact": false,
          "key": "StartWithTheNumber",
          "type": "sentence",
          "cells": [
            {
              "default": "5",
              "editor": null,
              "header": null,
              "key": "number",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Multiply by {multiplier} then add {delta}",
          "fact": false,
          "key": "MultiplyThenAdd",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "multiplier",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "delta",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Subtract({operand})",
          "fact": false,
          "key": "Subtract",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "DivideBy({operand})",
          "fact": false,
          "key": "DivideBy",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "operand",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The number should now be {number}",
          "fact": false,
          "key": "TheValueShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "The sum of {number1} and {number2} should be {sum}",
          "fact": false,
          "key": "TheSumOf",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number1",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number2",
              "options": null,
              "result": false
            },
            {
              "default": "NULL",
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "ThisLineAlwaysThrowsExceptions()",
          "fact": false,
          "key": "ThisLineAlwaysThrowsExceptions",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This line is always true",
          "fact": true,
          "key": "ThisLineIsAlwaysTrue",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "This line is always false",
          "fact": true,
          "key": "ThisLineIsAlwaysFalse",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "{x} + {y} should be {sum}",
          "fact": false,
          "key": "XplusYShouldBe",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Incomplete format",
          "fact": false,
          "key": "BadSentence",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "name",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "JustGo()",
          "fact": false,
          "key": "JustGo",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for Sentence",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SentenceFixture",
                "id": "a9607768-eeb1-4470-afb7-6982c56d0d54"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "eea6664b-08db-4835-8f19-c9c972310575"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "326f8354-72a1-4362-9671-2b10390acc7b"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "be96c5ba-f67e-4da4-b601-e4bbbb6269b3"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "ba5902c8-ee4f-4586-8a3d-93ef542f7d4d"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "740d4937-d242-4bcf-9a1b-3a590418364c"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "6f2c98c8-be0a-4970-b70b-f43c908ab997"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "bbbfeed9-9e36-4ecd-9bd3-a1da911e14c3"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "3eb603c8-effa-4e58-a706-5ab8137f71a1"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "5de719ac-da1e-4420-9a25-4ef5901a1e94"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "14f30904-09c7-42fb-b795-2baf5145e97e"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "6f151405-d8d6-4634-bd93-8c9f53bfb572"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "f3dc4d95-389b-4856-89b3-745acda658fb"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "21992398-24c0-4578-b5d3-77cb38c19a11"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "5bba71c1-e6b2-41d9-89c1-d173552fb7a2"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "4c8304bd-8dfe-410b-bf5b-754dbe467467"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "bb96a3f5-5540-48d9-a8aa-45fa163e9df0"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "30e3dfcb-02d3-4c0c-b652-fa1fd779a369"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "08de7d38-50f0-4494-b4f0-058e4a49fe6f"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "1f1d3c74-1077-4c60-a8ab-3559bec0d996"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "4d96c04e-f600-4fe3-abb2-2add4f583f57"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "73cf3604-fe6f-42a7-866c-6b164baf6cd0"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "1c3ea9c4-7310-48d0-9483-054b30ffd2dd"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "2c831353-60c8-44cb-8743-eb8ec05c2cfb"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "d63e8eba-a150-4538-9349-8f16185a8b3e"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "a438550d-82f5-42ab-a62b-35e8b8c39afb"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "272a7936-091c-4793-be8f-9b991df5f7b4"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "9010d01f-72b6-4079-8c59-6a7acd656be7"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "59f7d4bb-66b3-4e9b-8a24-b63113ea0c8b"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "cc62f242-290d-4d0d-91f3-eb0665c2565e"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "767060e9-a962-4736-9086-77f930f50fe7"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "b9e5cd5a-1388-434c-8ecd-99e328242fe1"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ac43b138-83d7-4562-a346-4c0494910597"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "1a4b5437-0e73-497c-b87a-d8f1aaebec1a"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "901b272c-d961-43cc-bc58-1db8657a9be7"
              }
            ],
            "activeCells": {},
            "id": "1452f3bc-0e5a-4c0a-9617-0e7aea80508a"
          }
        ],
        "id": "281a0084-35e0-4ca1-83bf-557c0a5b34f3"
      },
      "sampleMarkdown": "# Sample Specification for Sentence\r\n\r\n-> id = f55e9929-e5fc-41d6-bdd5-b1bdf5eae727\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8639839-06:00\r\n-> tags = \r\n\r\n[Sentence]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Set Verification with DataTable's",
      "key": "DataTable",
      "implementation": "StoryTeller.Samples.Fixtures.DataTableFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "firstName",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "lastName",
              "options": null,
              "result": false
            }
          ],
          "collection": "Rows",
          "title": "If the data is",
          "hasBeforeStep": true,
          "hasAfterStep": false,
          "key": "TheDataIs",
          "type": "table",
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for DataTable",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "DataTable",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DataTableFixture",
                "id": "09643730-854f-411b-9c5b-a6d3f8d1d427"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "22fb9f3d-76c4-444d-8f5b-6249e90d08ad"
              },
              {
                "key": "TheDataIs",
                "cells": {},
                "collections": [
                  {
                    "key": "Rows",
                    "type": "section",
                    "steps": [
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "89a5b856-3f64-4fd6-9968-f46e0bfae924"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "e0e659ee-b982-480d-9676-af7883efd1d6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "53cb225c-ef83-4a0b-9adb-805eb7a6daee"
                      }
                    ],
                    "activeCells": {},
                    "id": "1e2e35c9-adf5-473b-8e98-fab04d4d1842"
                  }
                ],
                "id": "f3f0eb0c-8507-4060-b1c9-d4e70c0a2973"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "791dd7f1-7255-44f9-83a1-edfe0a59df4b"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "8f0fbbff-a685-4682-ab31-28ffa2f32c31"
              }
            ],
            "activeCells": {},
            "id": "08fa8c80-c7ba-4d7a-9d68-f022a850603d"
          }
        ],
        "id": "ac6442ec-3f42-446c-aa28-ee3b1a6ee09c"
      },
      "sampleMarkdown": "# Sample Specification for DataTable\r\n\r\n-> id = 1e3697be-3470-4c32-b041-08f3993528b5\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8649839-06:00\r\n-> tags = \r\n\r\n[DataTable]\r\n|> TheDataIs\r\n    [Rows]\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Sets",
      "key": "Sets",
      "implementation": "StoryTeller.Samples.Fixtures.SetsFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "ordered": true,
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "expected",
              "options": null,
              "result": false
            }
          ],
          "collection": "Rows",
          "title": "The names in order should be",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "OrderedStringSet",
          "type": "set-verification",
          "errors": [],
          "missing": false
        },
        {
          "ordered": false,
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "expected",
              "options": null,
              "result": false
            }
          ],
          "collection": "Rows",
          "title": "The names in no order should be",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "UnorderedStringSet",
          "type": "set-verification",
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Amount",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Date",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Name",
              "options": null,
              "result": false
            }
          ],
          "collection": "Rows",
          "title": "The InvoiceDetails are",
          "hasBeforeStep": true,
          "hasAfterStep": false,
          "key": "InvoiceDetailsAre",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "ordered": false,
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Amount",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Date",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Name",
              "options": null,
              "result": false
            }
          ],
          "collection": "rows",
          "title": "The unordered details should be",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "UnorderedDetailsAre",
          "type": "set-verification",
          "errors": [],
          "missing": false
        },
        {
          "ordered": true,
          "cells": [
            {
              "default": "100",
              "editor": null,
              "header": "The Amount",
              "key": "Amount",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Date",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": "The Name",
              "key": "Name",
              "options": null,
              "result": false
            }
          ],
          "collection": "rows",
          "title": "The Ordered details should be",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "OrderedDetailsAre",
          "type": "set-verification",
          "errors": [],
          "missing": false
        },
        {
          "format": "AddName({name})",
          "fact": false,
          "key": "AddName",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "name",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "name",
              "options": null,
              "result": false
            }
          ],
          "collection": "name",
          "title": "The data is",
          "hasBeforeStep": true,
          "hasAfterStep": false,
          "key": "TheDataIs",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "ordered": false,
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "Name",
              "options": null,
              "result": false
            }
          ],
          "collection": "rows",
          "title": "Verify Set of InvoiceDetail",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "ThrowsErrorOnDataFetch",
          "type": "set-verification",
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for Sets",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sets",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SetsFixture",
                "id": "fbcc35ac-0def-475c-b0e6-92d51fa87651"
              },
              {
                "type": "comment",
                "text": "## AddName",
                "id": "5e504e6c-1bd0-4f68-a041-e4c66e3bfde0"
              },
              {
                "key": "AddName",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "2a898601-3e45-4395-96b4-fdac408cd828"
              },
              {
                "type": "comment",
                "text": "## InvoiceDetailsAre",
                "id": "495fb9be-a8b4-4f0c-8edd-03d1f9d63989"
              },
              {
                "key": "InvoiceDetailsAre",
                "cells": {},
                "collections": [
                  {
                    "key": "Rows",
                    "type": "section",
                    "steps": [
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "81f62981-cf91-4b5d-9bcc-5b6a804f888b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "281aa37d-c444-4f8f-b25d-684de4621015"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "33bdfb89-4f2c-45bd-af44-751306ba19d4"
                      }
                    ],
                    "activeCells": {},
                    "id": "27ec8da3-442f-406c-b009-2bd2dade87be"
                  }
                ],
                "id": "10c56d68-3a98-43f9-9b1e-c78b7c3c7ea1"
              },
              {
                "type": "comment",
                "text": "## OrderedDetailsAre",
                "id": "95fcc413-52fe-46e2-a0d0-6897c714ef64"
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
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "c478282e-ffcf-487f-bd25-ec3f6bc849fd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "693c9f42-4b53-40e1-b881-c58dfb7278d4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "4db19846-f44c-475d-a7c6-01bcab58a063"
                      }
                    ],
                    "activeCells": {},
                    "id": "600a067b-9835-4f8e-9a54-e9afa3c8598f"
                  }
                ],
                "id": "f208cccc-6747-4892-a3b8-77434a8d47fd"
              },
              {
                "type": "comment",
                "text": "## OrderedStringSet",
                "id": "b82b1e22-3a7e-432f-9b61-9c8dbb47e60c"
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
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "a6ebb7eb-b8ee-49c8-a7fe-a1ce32c99570"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "b936365b-ef0b-495c-8e53-f830f5141ac2"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "bb704610-371d-4028-bc9c-c90236318936"
                      }
                    ],
                    "activeCells": {},
                    "id": "65bf5db7-30df-462f-8cd1-7e74b5f312b0"
                  }
                ],
                "id": "3581b98e-b526-490b-80dc-4324f52b9493"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "deb28ff3-09c4-4350-8279-8bedc68cfc0f"
              },
              {
                "key": "TheDataIs",
                "cells": {},
                "collections": [
                  {
                    "key": "name",
                    "type": "section",
                    "steps": [
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "c11482df-347d-4ebe-b0d6-0625ed15683f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "66e9d23d-2e6a-4ede-9d9e-91c99a0d1b48"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "ab20e7e0-fa56-48c4-b728-d2ada3cf19fc"
                      }
                    ],
                    "activeCells": {},
                    "id": "e84ea244-05a5-43e1-bad7-f65888799d1c"
                  }
                ],
                "id": "26dd6d6c-756b-47a8-be06-051863313e79"
              },
              {
                "type": "comment",
                "text": "## ThrowsErrorOnDataFetch",
                "id": "59496f55-f940-4643-b150-f6ec9d307517"
              },
              {
                "key": "ThrowsErrorOnDataFetch",
                "cells": {},
                "collections": [
                  {
                    "key": "rows",
                    "type": "section",
                    "steps": [
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "6a0f6737-018a-4a18-a9a6-8229b169a65c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "4f4efed9-4df0-4b2e-8cc3-a8d790288434"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "07c97cc5-0796-4e9a-a136-58959a6829b9"
                      }
                    ],
                    "activeCells": {},
                    "id": "648dae23-f078-4e6a-8a9d-8812ed4610c0"
                  }
                ],
                "id": "9f6790cc-d586-4652-b322-0999cf9a6545"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "5ebb30f2-2814-4b14-9e68-5e74cc397a97"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ad6b2f6e-f138-434c-9fb3-4e685602b23b"
              },
              {
                "type": "comment",
                "text": "## UnorderedDetailsAre",
                "id": "076b8dd0-b761-4115-b3ea-5fe60652f008"
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
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "1eb1268a-121d-460d-8ce7-01657bc10316"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "8646f0eb-b6ff-4851-9845-25a13231fdcf"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "3e1819cb-b01b-4f50-b109-c7f7d5c8052a"
                      }
                    ],
                    "activeCells": {},
                    "id": "d9e296a0-ffe1-4547-a834-fa90d1239971"
                  }
                ],
                "id": "070c709e-0e85-40ad-a791-30e2936e66ae"
              },
              {
                "type": "comment",
                "text": "## UnorderedStringSet",
                "id": "38ba6157-dc5d-4e96-bc6a-2dc464440792"
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
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "0d5e0338-dcce-496e-bb77-cebb0d1ebf68"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "9167b252-ffdf-4828-be57-8eda51f8d75f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "67b5afc3-1c18-439c-9baa-140caa26b221"
                      }
                    ],
                    "activeCells": {},
                    "id": "fefe1cf8-d69f-43f9-abc8-1aec7cc73abb"
                  }
                ],
                "id": "ae4c09e5-f99c-4f43-bcf3-cec968f59312"
              }
            ],
            "activeCells": {},
            "id": "0311448a-c1b8-4be6-9012-2144b74821d2"
          }
        ],
        "id": "82b7fc43-8173-4c16-bf06-3b1709790472"
      },
      "sampleMarkdown": "# Sample Specification for Sets\r\n\r\n-> id = 9f5d2b2d-dfc2-4f6f-9307-c4be63ad1372\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8659839-06:00\r\n-> tags = \r\n\r\n[Sets]\r\n|> AddName name=name\r\n|> InvoiceDetailsAre\r\n    [Rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> OrderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n\r\n|> OrderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n|> TheDataIs\r\n    [name]\r\n    |name|\r\n    |name|\r\n    |name|\r\n    |name|\r\n\r\n|> ThrowsErrorOnDataFetch\r\n    [rows]\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n\r\n|> TODO message=message\r\n|> UnorderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> UnorderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Sometimes Slow",
      "key": "SometimesSlow",
      "implementation": "StoryTeller.Samples.Fixtures.SometimesSlowFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "format": "Slow()",
          "fact": false,
          "key": "Slow",
          "type": "sentence",
          "cells": [],
          "errors": [],
          "missing": false
        },
        {
          "format": "ReadText({text})",
          "fact": false,
          "key": "ReadText",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": "big-text",
              "header": null,
              "key": "text",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for SometimesSlow",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "SometimesSlow",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SometimesSlowFixture",
                "id": "3f6ce302-2628-41da-ae44-ace647b127df"
              },
              {
                "type": "comment",
                "text": "## ReadText",
                "id": "42b5fca6-c75f-492d-90b7-1e49cefb12f6"
              },
              {
                "key": "ReadText",
                "cells": {
                  "text": "text"
                },
                "collections": [],
                "id": "4d5e294c-2543-4aea-824e-293c931ce97c"
              },
              {
                "type": "comment",
                "text": "## Slow",
                "id": "f0b78eea-1999-4236-9506-ff1d659e5c5f"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "6476d1e0-f70c-414e-b485-27ea148a3cc3"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "9cdf66e6-5f29-4b23-bb2b-fbe069111073"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "96fe9788-13a8-4a51-80c3-e74df195b086"
              }
            ],
            "activeCells": {},
            "id": "b3cc50ce-dc43-4742-897d-69dfee60bb89"
          }
        ],
        "id": "b5f3c31c-c9bc-4d59-8625-91124614fdf8"
      },
      "sampleMarkdown": "# Sample Specification for SometimesSlow\r\n\r\n-> id = d6d27c42-537c-46e3-b9a6-3502411ec356\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8669839-06:00\r\n-> tags = \r\n\r\n[SometimesSlow]\r\n|> ReadText text=text\r\n|> Slow\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    },
    {
      "title": "Table",
      "key": "Table",
      "implementation": "StoryTeller.Samples.Fixtures.TableFixture",
      "type": "fixture",
      "grammars": [
        {
          "format": "TODO: {message}",
          "fact": false,
          "key": "TODO",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "message",
              "options": null,
              "result": false
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "FirstName",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "LastName",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "FullName",
              "options": null,
              "result": true
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "LastNameFirst",
              "options": null,
              "result": true
            }
          ],
          "collection": "table",
          "title": "decisions",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "decisions",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "format": "SumInternal({x}, {y}) should be {sum}",
          "fact": false,
          "key": "SumInternal",
          "type": "sentence",
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": true
            }
          ],
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "sum",
              "options": null,
              "result": true
            }
          ],
          "collection": "sum",
          "title": "Adding numbers together",
          "hasBeforeStep": true,
          "hasAfterStep": true,
          "key": "Sum",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "y",
              "options": null,
              "result": false
            },
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "product",
              "options": null,
              "result": true
            }
          ],
          "collection": "Rows",
          "title": "Subtract numbers",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "Divide",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            }
          ],
          "collection": "Rows",
          "title": "Throw error on the Before",
          "hasBeforeStep": true,
          "hasAfterStep": false,
          "key": "BeforeThrowsError",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "x",
              "options": null,
              "result": false
            }
          ],
          "collection": "Rows",
          "title": "Throw error on the After",
          "hasBeforeStep": false,
          "hasAfterStep": true,
          "key": "AfterThrowsError",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": "A",
              "key": "a",
              "options": null,
              "result": false
            },
            {
              "default": "2",
              "editor": null,
              "header": "B",
              "key": "b",
              "options": null,
              "result": false
            },
            {
              "default": "3",
              "editor": null,
              "header": "C",
              "key": "c",
              "options": null,
              "result": false
            },
            {
              "default": "4",
              "editor": null,
              "header": "D",
              "key": "d",
              "options": null,
              "result": false
            },
            {
              "default": "5",
              "editor": null,
              "header": "E",
              "key": "e",
              "options": null,
              "result": false
            }
          ],
          "collection": "table",
          "title": "Table with lots of options",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "TableWithLotsOfOptions",
          "type": "table",
          "errors": [],
          "missing": false
        },
        {
          "cells": [
            {
              "default": null,
              "editor": null,
              "header": null,
              "key": "number",
              "options": null,
              "result": false
            },
            {
              "default": "true",
              "editor": "boolean",
              "header": null,
              "key": "IsEven",
              "options": null,
              "result": true
            }
          ],
          "collection": "table",
          "title": "Is Positive?",
          "hasBeforeStep": false,
          "hasAfterStep": false,
          "key": "IsPositive",
          "type": "table",
          "errors": [],
          "missing": false
        }
      ],
      "missingCount": 0,
      "missingCode": "This fixture is fully implemented",
      "sample": {
        "title": "Sample Specification for Table",
        "path": null,
        "max-retries": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Wednesday, January 11, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Table",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.TableFixture",
                "id": "6170178b-f2b8-4728-8c95-79efaec405a0"
              },
              {
                "type": "comment",
                "text": "## AfterThrowsError",
                "id": "559272d8-0790-4678-9f78-681b511e2328"
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
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "0b3c5c75-f1a7-435e-b3ab-206fea63e420"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "453a1034-e70b-4af1-9c99-692c60d7e460"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "cb46be9b-682d-4cf3-96fa-da7fcb70b6d8"
                      }
                    ],
                    "activeCells": {},
                    "id": "a7647ebf-7feb-4213-97e4-eae1cb6e63e5"
                  }
                ],
                "id": "7c30e4db-71f6-477a-8c85-e961c0b21aef"
              },
              {
                "type": "comment",
                "text": "## BeforeThrowsError",
                "id": "44d25122-d50c-49d4-910f-1151e3ae4c76"
              },
              {
                "key": "BeforeThrowsError",
                "cells": {},
                "collections": [
                  {
                    "key": "Rows",
                    "type": "section",
                    "steps": [
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "209d622c-bb8f-4d1f-b032-4fa6e6862f3e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "a0355da3-7ce9-4651-bcb6-bee570cfcab7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "b42efb7c-d138-4fc6-8657-2261b3f7ddc2"
                      }
                    ],
                    "activeCells": {},
                    "id": "7660fec9-93bb-4516-9ee9-bc055144d04f"
                  }
                ],
                "id": "f38cf8a1-2b8e-4f4a-8cf2-3ff3e0b0c17e"
              },
              {
                "type": "comment",
                "text": "## decisions",
                "id": "764c3037-e8d3-420e-a80e-880e2e3ffee9"
              },
              {
                "key": "decisions",
                "cells": {},
                "collections": [
                  {
                    "key": "table",
                    "type": "section",
                    "steps": [
                      {
                        "key": "row",
                        "cells": {
                          "FirstName": "FirstName",
                          "LastName": "LastName",
                          "FullName": "FullName",
                          "LastNameFirst": "LastNameFirst"
                        },
                        "collections": [],
                        "id": "109d1614-31b7-4d1c-80e7-d8543b3bee74"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "FirstName": "FirstName",
                          "LastName": "LastName",
                          "FullName": "FullName",
                          "LastNameFirst": "LastNameFirst"
                        },
                        "collections": [],
                        "id": "05cbff00-f1f8-41c6-99b8-77eab24d70f6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "FirstName": "FirstName",
                          "LastName": "LastName",
                          "FullName": "FullName",
                          "LastNameFirst": "LastNameFirst"
                        },
                        "collections": [],
                        "id": "a601a7e0-ef35-48c2-9b8a-c4fcd308c918"
                      }
                    ],
                    "activeCells": {},
                    "id": "06c5802f-a5b2-4284-a7ad-83b9cbaf8531"
                  }
                ],
                "id": "0cc75023-af18-45a2-aecc-2e5b5d33435e"
              },
              {
                "type": "comment",
                "text": "## Divide",
                "id": "f5ffbaca-b90e-40bc-a5a4-95e6bb47931d"
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
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "1697d172-6217-4f3d-9e4e-2f76cf3572fd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "8390fcfd-f02f-4ab9-bd80-ae30c157c507"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "261a43a5-0622-44a2-bdd7-89630b44c5fb"
                      }
                    ],
                    "activeCells": {},
                    "id": "115877d8-3565-497d-8f1e-b97f2a1515f0"
                  }
                ],
                "id": "53f65abd-854d-43b3-b04f-4487c8cf0f6f"
              },
              {
                "type": "comment",
                "text": "## IsPositive",
                "id": "4178c947-0a3f-4be6-ae54-ed9b5494ec07"
              },
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
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "8b22f01c-d199-46e1-aacd-35ecccd2f681"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "83a6ccd5-6fa6-4e97-b188-4466e2fe4bcb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "741abf11-d4f1-4b9d-867a-aba6a1295c43"
                      }
                    ],
                    "activeCells": {},
                    "id": "6f3174b0-1096-41e0-926a-905ec758c8b4"
                  }
                ],
                "id": "24c3bdf6-d366-4789-9473-69f602f41554"
              },
              {
                "type": "comment",
                "text": "## Sum",
                "id": "f39c7839-9067-4b33-a80d-e51455fcfc28"
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
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "863aebb0-e9d5-4413-aa7e-38d5bd4bbe22"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "ff868d7d-0177-49b6-9be7-d164228727d8"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "7912c2d4-c92d-44f8-80f0-e5f51bc5a412"
                      }
                    ],
                    "activeCells": {},
                    "id": "17bdbb17-9c64-41eb-894f-b77fd97d794c"
                  }
                ],
                "id": "d18eb96a-99d3-4529-8f94-e79568ec16cd"
              },
              {
                "type": "comment",
                "text": "## SumInternal",
                "id": "55132a21-34c6-4bf5-b59c-6b2202e0ccde"
              },
              {
                "key": "SumInternal",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "a33ae2d3-b837-4593-b637-8ba78f38f8fc"
              },
              {
                "type": "comment",
                "text": "## TableWithLotsOfOptions",
                "id": "b8529482-14e7-41e3-9cd5-8a96594582d6"
              },
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
                          "a": "a",
                          "b": "2",
                          "c": "3",
                          "d": "4",
                          "e": "5"
                        },
                        "collections": [],
                        "id": "75519916-27c4-41d7-9803-117ad3813342"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "a": "a",
                          "b": "2",
                          "c": "3",
                          "d": "4",
                          "e": "5"
                        },
                        "collections": [],
                        "id": "be4e39d2-d602-4fa9-8586-0a455d9711b6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "a": "a",
                          "b": "2",
                          "c": "3",
                          "d": "4",
                          "e": "5"
                        },
                        "collections": [],
                        "id": "c665874c-3901-4a7c-ba9e-9333311c81e9"
                      }
                    ],
                    "activeCells": {},
                    "id": "3ffac45b-8959-4cda-a27c-7d6ae2681abb"
                  }
                ],
                "id": "6f5ec28f-5eb0-4229-ba83-9cf4b0a51d15"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f817b118-8692-4553-9996-fa2fbb6ae566"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "03f68f6d-07c5-4878-9397-5e69b6f6a891"
              }
            ],
            "activeCells": {},
            "id": "cbb29bfb-b09c-4152-9e4c-f4a050a3bcec"
          }
        ],
        "id": "d1d858a7-7bc1-44f1-a4a1-e4c87fc89b6c"
      },
      "sampleMarkdown": "# Sample Specification for Table\r\n\r\n-> id = c1dfad8e-89c9-4e78-9de2-73dd0940f896\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T20:08:19.8669839-06:00\r\n-> tags = \r\n\r\n[Table]\r\n|> AfterThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> BeforeThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> decisions\r\n    [table]\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n\r\n|> Divide\r\n    [Rows]\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n\r\n|> IsPositive\r\n    [table]\r\n    |number|IsEven|\r\n    |number|true  |\r\n    |number|true  |\r\n    |number|true  |\r\n\r\n|> Sum\r\n    [sum]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> SumInternal x=x, y=y, sum=sum\r\n|> TableWithLotsOfOptions\r\n    [table]\r\n    |a|b|c|d|e|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    }
  ],
  "time": "1/11/2017 8:08 PM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}