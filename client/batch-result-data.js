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
            "id": "803ec736-52f8-4520-9647-660fd0b8bc0d",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1ac5898d-80b4-48ec-ac2b-4802ca98a45a",
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
            "id": "28fc5b7d-b7e0-401e-9f9f-fab8cd7edc9c",
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
            "id": "ccc26fa8-db74-4935-8681-d00abe60f125",
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
            "id": "038e75ee-6cda-4d41-a943-16b67eb3e8b5",
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
            "id": "7ab4b5b6-b361-43c3-abde-f484ba5e4772",
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
            "id": "6c38b30c-d36d-4748-a53b-6de0fb0062cb",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()",
            "cells": [],
            "id": "e4da6d42-eddc-4041-bde3-f3b85a63dc24",
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
            "id": "803ec736-52f8-4520-9647-660fd0b8bc0d",
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
            "end": 1387,
            "duration": 1387
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 3,
            "end": 4,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Embedded:SetUp",
            "start": 1373,
            "end": 1375,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 1376,
            "end": 1378,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 1378,
            "end": 1381,
            "duration": 3
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 1381,
            "end": 1381,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1381,
            "end": 1382,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 1382,
            "end": 1383,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 1383,
            "end": 1383,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 1383,
            "end": 1383,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 1383,
            "end": 1383,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 1383,
            "end": 1383,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1383,
            "end": 1383,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1383,
            "end": 1384,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1384,
            "end": 1384,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 1384,
            "end": 1385,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 1385,
            "end": 1385,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 1385,
            "end": 1385,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 1385,
            "end": 1385,
            "duration": 0
          }
        ],
        "duration": 1387,
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
        "time": "6:55 PM",
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
                "id": "1ac5898d-80b4-48ec-ac2b-4802ca98a45a"
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
                        "id": "28fc5b7d-b7e0-401e-9f9f-fab8cd7edc9c"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "57db30db-a82e-4d17-985a-99b1a13e30e0"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "ccc26fa8-db74-4935-8681-d00abe60f125"
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
                        "id": "038e75ee-6cda-4d41-a943-16b67eb3e8b5"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "7ab4b5b6-b361-43c3-abde-f484ba5e4772"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "6c38b30c-d36d-4748-a53b-6de0fb0062cb"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "e4da6d42-eddc-4041-bde3-f3b85a63dc24"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "0d5b88c8-2812-42bc-ab6e-dc0fe541525d"
              }
            ],
            "activeCells": {},
            "id": "803ec736-52f8-4520-9647-660fd0b8bc0d"
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
            "id": "0b655242-6ce2-4a39-84d3-c7c0857df1d8",
            "spec": "general1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "db6d0bfa-bb39-4877-8a59-f6355730e610",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "db6d0bfa-bb39-4877-8a59-f6355730e610",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "db6d0bfa-bb39-4877-8a59-f6355730e610",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "db6d0bfa-bb39-4877-8a59-f6355730e610",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "db6d0bfa-bb39-4877-8a59-f6355730e610",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "db6d0bfa-bb39-4877-8a59-f6355730e610",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "db6d0bfa-bb39-4877-8a59-f6355730e610",
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
            "id": "19b1f3e8-0b27-4cf3-9f59-f225306084aa",
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
            "id": "19b1f3e8-0b27-4cf3-9f59-f225306084aa",
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
            "id": "19b1f3e8-0b27-4cf3-9f59-f225306084aa",
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
            "id": "44ea158d-5558-4170-a061-c339e1657aec",
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
            "id": "44ea158d-5558-4170-a061-c339e1657aec",
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
            "id": "44ea158d-5558-4170-a061-c339e1657aec",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0b655242-6ce2-4a39-84d3-c7c0857df1d8",
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
            "subject": "CheckObject:SetUp",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:0",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:1",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:2",
            "start": 1,
            "end": 2,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:3",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:4",
            "start": 2,
            "end": 2,
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
            "start": 3,
            "end": 4,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 4,
            "end": 6,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 6,
            "end": 7,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 7,
            "end": 7,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 7,
            "end": 7,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 7,
            "end": 7,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "CheckObject:TearDown",
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
        "time": "6:55 PM",
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
                "id": "db6d0bfa-bb39-4877-8a59-f6355730e610"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "19b1f3e8-0b27-4cf3-9f59-f225306084aa"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "44ea158d-5558-4170-a061-c339e1657aec"
              }
            ],
            "activeCells": {},
            "id": "0b655242-6ce2-4a39-84d3-c7c0857df1d8"
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
            "id": "36c7e062-f963-441b-83aa-73b70fe05f11",
            "spec": "SometimesSlow",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "379544c0-aebe-49f2-9bff-58d8a4146f9a",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "36c7e062-f963-441b-83aa-73b70fe05f11",
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
        "time": "6:55 PM",
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
                "id": "c03ac00d-2e53-4747-bb5f-910528437d3e"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "379544c0-aebe-49f2-9bff-58d8a4146f9a"
              }
            ],
            "activeCells": {},
            "id": "36c7e062-f963-441b-83aa-73b70fe05f11"
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
            "id": "4ec0379f-6f0f-41c2-82af-04b8cf9edcad",
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
            "id": "99c0b845-d26e-4cbf-b360-8e9670f7be42",
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
            "id": "bb07cdd7-9348-4231-b910-d71624f84cb0",
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
            "id": "9464187b-610a-4a99-a0a5-d92e67d5cdc7",
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
            "id": "c959c108-5938-47e0-a574-db1d9e5e96b6",
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
            "id": "5e100d47-96cb-4a3a-ba1e-2e925c267f9f",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4ec0379f-6f0f-41c2-82af-04b8cf9edcad",
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
            "end": 0,
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
            "end": 3,
            "duration": 1
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
        "time": "6:55 PM",
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
                "id": "99c0b845-d26e-4cbf-b360-8e9670f7be42"
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
                        "id": "bb07cdd7-9348-4231-b910-d71624f84cb0"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "9464187b-610a-4a99-a0a5-d92e67d5cdc7"
                      }
                    ],
                    "activeCells": {},
                    "id": "6c801115-9ed7-452f-96fb-c4f5091b0223"
                  }
                ],
                "id": "ddf3aa00-b8ac-421c-a357-318a23b7d354"
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
                        "id": "c959c108-5938-47e0-a574-db1d9e5e96b6"
                      }
                    ],
                    "activeCells": {},
                    "id": "f0cef49c-cb6a-47f3-b56e-daace8a281b7"
                  }
                ],
                "id": "e8741ce1-46a7-4e19-bb66-52ea5835556e"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "5e100d47-96cb-4a3a-ba1e-2e925c267f9f"
              }
            ],
            "activeCells": {},
            "id": "4ec0379f-6f0f-41c2-82af-04b8cf9edcad"
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
            "id": "b7486f3d-7929-4ec8-b609-88b73718be5c",
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
        "time": "6:55 PM",
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
                "id": "632832fa-d620-4857-85c5-69773d46c97a"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "91d09680-1114-407e-b87b-ea508342e438"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "17ec94b1-e825-4058-b2fd-1074d50c2289"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "ee3b6ec0-bfcb-4063-a0b8-2de0bf09ac3e"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "0e5ca154-e23c-445a-99cb-d01d9aac2c0c"
              }
            ],
            "activeCells": {},
            "id": "b7486f3d-7929-4ec8-b609-88b73718be5c"
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
            "id": "f8ee351e-4d68-466a-8d9c-fc7401f3d001",
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
            "id": "5703b604-69b8-4e8d-8cb7-fc7c45130b33",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f8ee351e-4d68-466a-8d9c-fc7401f3d001",
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
        "time": "6:55 PM",
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
                "id": "dc72baf8-44a2-4202-9019-bd09f16fa8bf"
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
                        "id": "5703b604-69b8-4e8d-8cb7-fc7c45130b33"
                      }
                    ],
                    "activeCells": {},
                    "id": "355f766c-fb21-419d-8c5b-9fd339de5e4c"
                  }
                ],
                "id": "c6015f7d-2fbc-49dc-9467-5d4e64b9a941"
              }
            ],
            "activeCells": {},
            "id": "f8ee351e-4d68-466a-8d9c-fc7401f3d001"
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
            "id": "a52e3ee5-5047-4756-bd43-93c74b667ae9",
            "spec": "general4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "2fdd9eed-ddcd-453e-810b-69158214c76b",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "cf4bd4d8-0559-46ff-b6be-9836c9ca11fe",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "dabea9e0-e986-4b76-aae6-4832a9126f2e",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a52e3ee5-5047-4756-bd43-93c74b667ae9",
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
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
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
        "time": "6:55 PM",
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
                "id": "2fdd9eed-ddcd-453e-810b-69158214c76b"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "cf4bd4d8-0559-46ff-b6be-9836c9ca11fe"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "dabea9e0-e986-4b76-aae6-4832a9126f2e"
              }
            ],
            "activeCells": {},
            "id": "a52e3ee5-5047-4756-bd43-93c74b667ae9"
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
        "time": "6:55 PM",
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
            "id": "cf39e2f2-0cdf-44ef-afaf-b4da0cb36400",
            "spec": "paragraph1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5e56063a-bd1f-4bd9-88c5-0b84115721e1",
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
            "id": "5e56063a-bd1f-4bd9-88c5-0b84115721e1",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5e56063a-bd1f-4bd9-88c5-0b84115721e1",
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
            "id": "5e56063a-bd1f-4bd9-88c5-0b84115721e1",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5e56063a-bd1f-4bd9-88c5-0b84115721e1",
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
            "id": "df43f79d-61fd-464a-a721-a4e129bff520",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "df43f79d-61fd-464a-a721-a4e129bff520",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "df43f79d-61fd-464a-a721-a4e129bff520",
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
            "id": "df43f79d-61fd-464a-a721-a4e129bff520",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "df43f79d-61fd-464a-a721-a4e129bff520",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3d8f4c98-1d66-4a19-b19e-a4f0dbdccf1a",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3d8f4c98-1d66-4a19-b19e-a4f0dbdccf1a",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3d8f4c98-1d66-4a19-b19e-a4f0dbdccf1a",
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
            "id": "3d8f4c98-1d66-4a19-b19e-a4f0dbdccf1a",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3d8f4c98-1d66-4a19-b19e-a4f0dbdccf1a",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e91d9a69-b648-4466-860e-07bd3959a882",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e91d9a69-b648-4466-860e-07bd3959a882",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e91d9a69-b648-4466-860e-07bd3959a882",
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
            "id": "e91d9a69-b648-4466-860e-07bd3959a882",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e91d9a69-b648-4466-860e-07bd3959a882",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "935e5607-7fac-49bb-9a1e-5d87ff128bb6",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "935e5607-7fac-49bb-9a1e-5d87ff128bb6",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "935e5607-7fac-49bb-9a1e-5d87ff128bb6",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<>c.<.ctor>b__0_3(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "935e5607-7fac-49bb-9a1e-5d87ff128bb6",
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
            "id": "935e5607-7fac-49bb-9a1e-5d87ff128bb6",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cf39e2f2-0cdf-44ef-afaf-b4da0cb36400",
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
            "end": 2,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 2,
            "end": 2,
            "duration": 0
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
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 2,
            "end": 2,
            "duration": 0
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
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 2,
            "end": 2,
            "duration": 0
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
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:3",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Composite:TearDown",
            "start": 2,
            "end": 2,
            "duration": 0
          }
        ],
        "duration": 2,
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
        "time": "6:55 PM",
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
                "id": "5e56063a-bd1f-4bd9-88c5-0b84115721e1"
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
                        "id": "df43f79d-61fd-464a-a721-a4e129bff520"
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
                        "id": "3d8f4c98-1d66-4a19-b19e-a4f0dbdccf1a"
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
                        "id": "e91d9a69-b648-4466-860e-07bd3959a882"
                      }
                    ],
                    "activeCells": {},
                    "id": "b0a154a6-78d7-4103-b72e-66ca5ac2a163"
                  }
                ],
                "id": "6166f4a8-b5f1-4fde-8b02-75c753f0cb49"
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
                "id": "935e5607-7fac-49bb-9a1e-5d87ff128bb6"
              }
            ],
            "activeCells": {},
            "id": "cf39e2f2-0cdf-44ef-afaf-b4da0cb36400"
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
            "id": "f385fe38-7b8c-4c6e-bb9d-84983272ea3b",
            "spec": "paragraph2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22d946dd-5361-4380-b602-a4fe75cc400a",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22d946dd-5361-4380-b602-a4fe75cc400a",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22d946dd-5361-4380-b602-a4fe75cc400a",
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
            "id": "22d946dd-5361-4380-b602-a4fe75cc400a",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22d946dd-5361-4380-b602-a4fe75cc400a",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "40c34a58-f600-478c-a255-942bc10ee14e",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "40c34a58-f600-478c-a255-942bc10ee14e",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "40c34a58-f600-478c-a255-942bc10ee14e",
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
            "id": "40c34a58-f600-478c-a255-942bc10ee14e",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "40c34a58-f600-478c-a255-942bc10ee14e",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fe2a68eb-c525-4174-9f75-dc8b2d509337",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fe2a68eb-c525-4174-9f75-dc8b2d509337",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fe2a68eb-c525-4174-9f75-dc8b2d509337",
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
            "id": "fe2a68eb-c525-4174-9f75-dc8b2d509337",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fe2a68eb-c525-4174-9f75-dc8b2d509337",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1092048f-ebaf-4205-9749-fc73844ecf6e",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1092048f-ebaf-4205-9749-fc73844ecf6e",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1092048f-ebaf-4205-9749-fc73844ecf6e",
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
            "id": "1092048f-ebaf-4205-9749-fc73844ecf6e",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1092048f-ebaf-4205-9749-fc73844ecf6e",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5c558a87-d5c4-44c3-90fe-93c67495dacf",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5c558a87-d5c4-44c3-90fe-93c67495dacf",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5c558a87-d5c4-44c3-90fe-93c67495dacf",
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
            "id": "5c558a87-d5c4-44c3-90fe-93c67495dacf",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5c558a87-d5c4-44c3-90fe-93c67495dacf",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f385fe38-7b8c-4c6e-bb9d-84983272ea3b",
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
        "time": "6:55 PM",
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
                "id": "22d946dd-5361-4380-b602-a4fe75cc400a"
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
                "id": "40c34a58-f600-478c-a255-942bc10ee14e"
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
                        "id": "fe2a68eb-c525-4174-9f75-dc8b2d509337"
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
                        "id": "1092048f-ebaf-4205-9749-fc73844ecf6e"
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
                        "id": "5c558a87-d5c4-44c3-90fe-93c67495dacf"
                      }
                    ],
                    "activeCells": {},
                    "id": "d620effa-3cb3-4015-857a-309ddc90bde9"
                  }
                ],
                "id": "b444dfba-d5a3-4a7d-bf95-a8b517014d5b"
              }
            ],
            "activeCells": {},
            "id": "f385fe38-7b8c-4c6e-bb9d-84983272ea3b"
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
            "id": "834215a7-c4cf-41d6-a859-c58ee1e3f7bd",
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
            "id": "0c3a794d-b310-41af-b41a-c91065ca730b",
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
            "id": "8823ce85-0087-41c3-b7b9-fbf4bbe0b9cb",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "834215a7-c4cf-41d6-a859-c58ee1e3f7bd",
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
        "time": "6:55 PM",
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
                "id": "0c3a794d-b310-41af-b41a-c91065ca730b"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "8823ce85-0087-41c3-b7b9-fbf4bbe0b9cb"
              }
            ],
            "activeCells": {},
            "id": "834215a7-c4cf-41d6-a859-c58ee1e3f7bd"
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
            "id": "59f9e959-8267-4dc9-9160-cf0d341e3a89",
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
            "id": "59f9e959-8267-4dc9-9160-cf0d341e3a89",
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
        "time": "6:55 PM",
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
            "id": "59f9e959-8267-4dc9-9160-cf0d341e3a89"
          },
          {
            "type": "comment",
            "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
            "id": "89067535-348c-4b24-8f40-654ffdcd0b46"
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
            "id": "b7884f74-1319-42b7-9359-6677c0876ea7",
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
            "id": "93fe7b4d-aeec-4397-a1d1-e2d9b704ace0",
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
            "id": "7038a320-f8a8-4708-9ad9-cfc31b43b7bf",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b7884f74-1319-42b7-9359-6677c0876ea7",
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
        "time": "6:55 PM",
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
                "id": "93fe7b4d-aeec-4397-a1d1-e2d9b704ace0"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "7038a320-f8a8-4708-9ad9-cfc31b43b7bf"
              }
            ],
            "activeCells": {},
            "id": "b7884f74-1319-42b7-9359-6677c0876ea7"
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
            "id": "2d170b4c-38ce-46dc-b1e2-795b82c23a0b",
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
            "id": "b576558a-1025-4629-a2c9-35f37d08ba70",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "642f90ef-d57b-469f-a3c1-ade6d5fc1147",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3c99554b-f240-4729-b6cc-6e55092ab7e5",
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
            "id": "88529e31-5fdd-412f-9a82-9b9eb56efb82",
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
            "id": "2d170b4c-38ce-46dc-b1e2-795b82c23a0b",
            "spec": "sentence4",
            "position": "teardown",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a638373d-83f4-49a7-8f78-84e12c5ec651",
            "spec": "sentence4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a638373d-83f4-49a7-8f78-84e12c5ec651",
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
            "end": 0,
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
          },
          {
            "type": "Fixture",
            "subject": "Sentence:SetUp",
            "start": 2,
            "end": 2,
            "duration": 0
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
        "time": "6:55 PM",
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
                "id": "27718f99-fec5-46fa-9487-2443332110a9"
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
                "id": "621cad68-58ec-4c68-bddf-a1bd5bfe91b7"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "b576558a-1025-4629-a2c9-35f37d08ba70"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "642f90ef-d57b-469f-a3c1-ade6d5fc1147"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "3c99554b-f240-4729-b6cc-6e55092ab7e5"
              },
              {
                "type": "comment",
                "text": "Correct assertion",
                "id": "5128c284-2067-4ed2-af76-09a9cde79d68"
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
                "id": "05f9ed6d-149e-48f5-9daf-12011105ffd3"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "2",
                  "number2": "2",
                  "sum": "5"
                },
                "collections": [],
                "id": "88529e31-5fdd-412f-9a82-9b9eb56efb82"
              },
              {
                "type": "comment",
                "text": "Line assertions",
                "id": "c4917d40-f95c-4484-9492-10ab33190637"
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
            "id": "2d170b4c-38ce-46dc-b1e2-795b82c23a0b"
          },
          {
            "type": "comment",
            "text": "Comment\r\n\r\nAnother Comment",
            "id": "46395eb2-d88d-4191-a80e-99292bb64a2e"
          },
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Show a syntax failure",
                "id": "1c4df595-391f-4143-9cbb-3fb655954256"
              }
            ],
            "activeCells": {},
            "id": "a638373d-83f4-49a7-8f78-84e12c5ec651"
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
            "id": "3ccd3ade-4297-457b-babd-1ae372a8ee35",
            "spec": "set1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "204bb7ba-01d0-4717-974b-3831234d5024",
            "spec": "set1",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "acece256-2e72-4562-8e2e-5f606094cecb",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "acece256-2e72-4562-8e2e-5f606094cecb",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "acece256-2e72-4562-8e2e-5f606094cecb",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "acece256-2e72-4562-8e2e-5f606094cecb",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "acece256-2e72-4562-8e2e-5f606094cecb",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bd32e155-ed5d-4b35-802b-8b93af99cbef",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bd32e155-ed5d-4b35-802b-8b93af99cbef",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bd32e155-ed5d-4b35-802b-8b93af99cbef",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bd32e155-ed5d-4b35-802b-8b93af99cbef",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bd32e155-ed5d-4b35-802b-8b93af99cbef",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ca847b5-3130-4b13-9b5e-37caab1ff14f",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ca847b5-3130-4b13-9b5e-37caab1ff14f",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ca847b5-3130-4b13-9b5e-37caab1ff14f",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ca847b5-3130-4b13-9b5e-37caab1ff14f",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ca847b5-3130-4b13-9b5e-37caab1ff14f",
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
              "1805f876-e9b1-4c10-adb0-52796f88d537",
              "fb3c46f1-c794-437b-a15f-0080b4105bf5"
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
              "51f11a7e-ca11-48b1-9a68-fc640cd75c37",
              "b85ac8e8-a53c-457a-8c40-bcd2efcd9e80",
              "1299a653-bbd6-44a2-b97e-0aa3c4ff9ea0"
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
            "id": "3ccd3ade-4297-457b-babd-1ae372a8ee35",
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
            "end": 11,
            "duration": 11
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
            "start": 1,
            "end": 8,
            "duration": 7
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
            "end": 11,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 11,
            "end": 11,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 11,
            "end": 11,
            "duration": 0
          }
        ],
        "duration": 11,
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
        "time": "6:55 PM",
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
                        "id": "acece256-2e72-4562-8e2e-5f606094cecb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "bd32e155-ed5d-4b35-802b-8b93af99cbef"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "5ca847b5-3130-4b13-9b5e-37caab1ff14f"
                      }
                    ],
                    "activeCells": {},
                    "id": "204bb7ba-01d0-4717-974b-3831234d5024"
                  }
                ],
                "id": "82aa9e69-2558-461c-9603-608b4f46d651"
              },
              {
                "type": "comment",
                "text": "Completely successful ordering",
                "id": "f82fb8f7-f6ba-4fce-aea1-a666b7e937ee"
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
                "id": "181272f7-0d17-4ad9-a91d-392fe00792b5"
              },
              {
                "type": "comment",
                "text": "Out of order",
                "id": "2e75a3a5-b992-4380-a16a-619272fe0590"
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
                "id": "113715bd-b480-44af-9b82-48ab85123516"
              },
              {
                "type": "comment",
                "text": "Should have one exra",
                "id": "85e3d94a-2706-497d-89cd-8e949fa8fcf4"
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
                        "id": "1805f876-e9b1-4c10-adb0-52796f88d537"
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
                        "id": "fb3c46f1-c794-437b-a15f-0080b4105bf5"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "519671da-34b6-4103-ab6f-ad54ae51a973"
              },
              {
                "type": "comment",
                "text": "Should mark one expected result as missing",
                "id": "22390196-922d-4bb9-99be-ae8d17a923c3"
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
                        "id": "51f11a7e-ca11-48b1-9a68-fc640cd75c37"
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
                        "id": "b85ac8e8-a53c-457a-8c40-bcd2efcd9e80"
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
                        "id": "1299a653-bbd6-44a2-b97e-0aa3c4ff9ea0"
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
                "id": "452ee9b3-3ecf-4053-a46b-34e6e934dffd"
              },
              {
                "type": "comment",
                "text": "One syntax error",
                "id": "3c6ece48-9cee-4fdf-acf3-3dff21e2232a"
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
                        "id": "a5e32558-9f13-4ee9-84bd-ac4c4183ca58"
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
                        "id": "5431003d-1921-4ad4-9d54-e6684b733a37"
                      }
                    ],
                    "activeCells": {},
                    "id": "4bd87229-f80b-4869-be7f-dae3dd35f440"
                  }
                ],
                "id": "0866325e-7647-4ccb-b409-0563d9f5354b"
              }
            ],
            "activeCells": {},
            "id": "3ccd3ade-4297-457b-babd-1ae372a8ee35"
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
            "id": "e9a3bd34-5b83-45d8-9665-3f206fb45783",
            "spec": "set2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "017d21bf-a2eb-4972-ae66-c10bcef4e251",
            "spec": "set2",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fec230ed-713c-4481-b160-a854dd8debe7",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "300bd211-5c45-483b-8388-c5556f43b38a",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "82d342c9-d4a3-4345-94b1-85800772ae33",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ac8288f1-f638-4872-b266-251961e90e37",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6eb7ecfb-5c20-4909-afcf-ddcd86ac55f6",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "3c538297-0e41-4a41-b497-7a292d16796b",
              "fc94bee3-636a-40f9-ab07-64c3c942c585",
              "6b405c1c-6f76-4343-bdf2-056a3c055227",
              "4dcf6903-7e9f-4a6d-842b-7d27c9a42743",
              "e75f6e9d-36c4-4d02-bfc1-1d0d5c9f7892"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "061e705d-304b-4609-a6ca-5fbb18758417",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "dc9e9c79-2c66-4a73-a849-9b96220a015f",
              "ca434237-109c-4f0b-8c22-b1da5283fc57",
              "93c00453-287e-42d8-8422-e9318a0ef604",
              "8a31acf8-b889-4e1c-8cd0-2e35bd7f3de9",
              "2cd91898-76f5-4e39-991b-58dd7af547f8"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "d9ac4ab4-c1a0-40a7-82a2-0718bc077a71",
            "type": "set-verification-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e9a3bd34-5b83-45d8-9665-3f206fb45783",
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
        "time": "6:55 PM",
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
                        "id": "fec230ed-713c-4481-b160-a854dd8debe7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "300bd211-5c45-483b-8388-c5556f43b38a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "82d342c9-d4a3-4345-94b1-85800772ae33"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "ac8288f1-f638-4872-b266-251961e90e37"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "6eb7ecfb-5c20-4909-afcf-ddcd86ac55f6"
                      }
                    ],
                    "activeCells": {},
                    "id": "017d21bf-a2eb-4972-ae66-c10bcef4e251"
                  }
                ],
                "id": "3da2a74c-8299-4895-b44d-b21b8933e1c1"
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
                        "id": "3c538297-0e41-4a41-b497-7a292d16796b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "fc94bee3-636a-40f9-ab07-64c3c942c585"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "6b405c1c-6f76-4343-bdf2-056a3c055227"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "4dcf6903-7e9f-4a6d-842b-7d27c9a42743"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "e75f6e9d-36c4-4d02-bfc1-1d0d5c9f7892"
                      }
                    ],
                    "activeCells": {},
                    "id": "061e705d-304b-4609-a6ca-5fbb18758417"
                  }
                ],
                "id": "1437787d-68b2-4bab-8835-c6d3bf5ec2f2"
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
                        "id": "dc9e9c79-2c66-4a73-a849-9b96220a015f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "ca434237-109c-4f0b-8c22-b1da5283fc57"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "93c00453-287e-42d8-8422-e9318a0ef604"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "8a31acf8-b889-4e1c-8cd0-2e35bd7f3de9"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "2cd91898-76f5-4e39-991b-58dd7af547f8"
                      }
                    ],
                    "activeCells": {},
                    "id": "d9ac4ab4-c1a0-40a7-82a2-0718bc077a71"
                  }
                ],
                "id": "f0d8c3c8-d80d-4957-9c11-beae612ca8ae"
              }
            ],
            "activeCells": {},
            "id": "e9a3bd34-5b83-45d8-9665-3f206fb45783"
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
            "id": "4eed319a-6fb7-4f3c-8c1e-76cb0c4a1f06",
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
            "id": "4eed319a-6fb7-4f3c-8c1e-76cb0c4a1f06",
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
        "time": "6:55 PM",
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
                        "id": "710541d0-37d5-4cb6-9084-e4547bff0fbd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "14472b2b-f71f-4ea0-a041-ab7e8187b76b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "f9a6cfb4-43eb-410e-83ed-a2987892bf37"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "bd9b8dc7-8d95-4091-a9b7-ed734e790ae5"
              }
            ],
            "activeCells": {},
            "id": "4eed319a-6fb7-4f3c-8c1e-76cb0c4a1f06"
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
            "id": "07abc12a-e504-479a-b409-f76ec0596277",
            "spec": "set4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "93a99f9c-de30-4a25-87ec-c8d87a7217ba",
            "spec": "set4",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "61372e0f-11b7-4be7-81f3-666fdccdff1e",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "61372e0f-11b7-4be7-81f3-666fdccdff1e",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "61372e0f-11b7-4be7-81f3-666fdccdff1e",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "61372e0f-11b7-4be7-81f3-666fdccdff1e",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "61372e0f-11b7-4be7-81f3-666fdccdff1e",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "230d4ca4-7b30-4887-9bce-373f802d765f",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "230d4ca4-7b30-4887-9bce-373f802d765f",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "230d4ca4-7b30-4887-9bce-373f802d765f",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "230d4ca4-7b30-4887-9bce-373f802d765f",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "230d4ca4-7b30-4887-9bce-373f802d765f",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e39cd61d-934d-4c76-ae9e-ac0ec663dfe2",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e39cd61d-934d-4c76-ae9e-ac0ec663dfe2",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e39cd61d-934d-4c76-ae9e-ac0ec663dfe2",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e39cd61d-934d-4c76-ae9e-ac0ec663dfe2",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e39cd61d-934d-4c76-ae9e-ac0ec663dfe2",
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
            "id": "1e1d6a95-4e85-4631-bfe2-6810a84ed3c6",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "07abc12a-e504-479a-b409-f76ec0596277",
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
        "time": "6:55 PM",
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
                        "id": "61372e0f-11b7-4be7-81f3-666fdccdff1e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "230d4ca4-7b30-4887-9bce-373f802d765f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "e39cd61d-934d-4c76-ae9e-ac0ec663dfe2"
                      }
                    ],
                    "activeCells": {},
                    "id": "93a99f9c-de30-4a25-87ec-c8d87a7217ba"
                  }
                ],
                "id": "ca94827a-5e58-4768-95e9-4bf104c9bdd4"
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
                        "id": "1e1d6a95-4e85-4631-bfe2-6810a84ed3c6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "070c632e-543f-4212-8669-455303e556df"
                      }
                    ],
                    "activeCells": {},
                    "id": "5ec84c17-bbd1-4d24-99f6-531d0b525cc1"
                  }
                ],
                "id": "d2a3c9f3-2817-4c64-ba3e-e1bf93cc27de"
              }
            ],
            "activeCells": {},
            "id": "07abc12a-e504-479a-b409-f76ec0596277"
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
            "id": "0aec6323-2dd2-44eb-8c08-c2f68835b816",
            "spec": "set5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "043b7b38-7f5c-44f2-8e0d-3a4b6aca87d8",
            "spec": "set5",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3e25febe-2ad3-454c-ad41-736db2d099f4",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "34d7478b-c3a8-4595-83ec-493c2568d05f",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d1232654-0571-45fd-9dfc-af5b90587f20",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3775ed12-45a1-4b7b-96d0-196f7ad50090",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9d9e724f-ad46-45ec-9d1c-1a5943ccf126",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "69247c77-8770-45df-b105-2660c10bf1f9",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "13fd267b-4b2c-452a-b6cb-d3267bd95fd9",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "330cb582-1901-41e7-8aa0-62383ade7b7c",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "9262028a-002e-41b3-ac6b-398b90a33c06",
              "b1c1a7b2-c939-46ca-8750-0e667ce18537",
              "73e53c9a-bad6-40e1-92d4-bc72491369f0",
              "6d3fc928-70ec-4c1f-ac6f-c778bb55908a"
            ],
            "missing": [
              "1f3d09f9-029d-43b9-970a-6396c44e12bb"
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
                "id": "5a8db256-ea3f-4196-94e1-a3071a67ab08"
              },
              {
                "actual": 4,
                "id": "c683d6c7-427e-47be-93a8-e1b7867a2af5"
              }
            ],
            "id": "dd0a9e77-ad87-49a1-bd53-f2726834715f",
            "type": "set-verification-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0aec6323-2dd2-44eb-8c08-c2f68835b816",
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
        "time": "6:55 PM",
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
                        "id": "3e25febe-2ad3-454c-ad41-736db2d099f4"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "34d7478b-c3a8-4595-83ec-493c2568d05f"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "d1232654-0571-45fd-9dfc-af5b90587f20"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "3775ed12-45a1-4b7b-96d0-196f7ad50090"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "9d9e724f-ad46-45ec-9d1c-1a5943ccf126"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "69247c77-8770-45df-b105-2660c10bf1f9"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "13fd267b-4b2c-452a-b6cb-d3267bd95fd9"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "330cb582-1901-41e7-8aa0-62383ade7b7c"
                      }
                    ],
                    "activeCells": {},
                    "id": "043b7b38-7f5c-44f2-8e0d-3a4b6aca87d8"
                  }
                ],
                "id": "9f210bf0-aff1-45c3-b02b-9dc2be93109a"
              },
              {
                "type": "comment",
                "text": "All data is correct, but in the wrong order",
                "id": "9473a2e7-cf48-44c4-b25a-ed21c082e3ff"
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
                        "id": "9262028a-002e-41b3-ac6b-398b90a33c06"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "b1c1a7b2-c939-46ca-8750-0e667ce18537"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "73e53c9a-bad6-40e1-92d4-bc72491369f0"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "5a8db256-ea3f-4196-94e1-a3071a67ab08"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "c683d6c7-427e-47be-93a8-e1b7867a2af5"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "1f3d09f9-029d-43b9-970a-6396c44e12bb"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "6d3fc928-70ec-4c1f-ac6f-c778bb55908a"
                      }
                    ],
                    "activeCells": {},
                    "id": "dd0a9e77-ad87-49a1-bd53-f2726834715f"
                  }
                ],
                "id": "fec051f4-5454-45c3-b257-cc0c2692afee"
              }
            ],
            "activeCells": {},
            "id": "0aec6323-2dd2-44eb-8c08-c2f68835b816"
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
            "id": "204882df-95e0-46ec-9c87-196b411f63b7",
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
            "id": "c449d9a7-1b2c-4227-9880-df58f251d545",
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
            "id": "91f164eb-e0d8-41f9-bf41-e76af94cbd6b",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "204882df-95e0-46ec-9c87-196b411f63b7",
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
        "time": "6:55 PM",
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
                        "id": "c449d9a7-1b2c-4227-9880-df58f251d545"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "91f164eb-e0d8-41f9-bf41-e76af94cbd6b"
                      }
                    ],
                    "activeCells": {},
                    "id": "81dbecfd-d7d7-4368-8f23-0cbf85b276cd"
                  }
                ],
                "id": "916b80fc-529e-4809-9006-a5a8c3e4ae3b"
              }
            ],
            "activeCells": {},
            "id": "204882df-95e0-46ec-9c87-196b411f63b7"
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
            "id": "da68121c-7693-4bac-85c7-f04dee910806",
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
            "id": "03efb638-3355-43f2-899f-27bcd34f61ea",
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
            "id": "c5a3caec-ab92-48a5-a64f-8d550628e38f",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "da68121c-7693-4bac-85c7-f04dee910806",
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
        "time": "6:55 PM",
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
                        "id": "8df2a6b8-7fc4-47b0-b06f-1c504ef42263"
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
                        "id": "9cd2008c-0d20-4c83-bb32-bea39ec5c7fc"
                      }
                    ],
                    "activeCells": {},
                    "id": "4371ab5a-600b-48ff-a526-c3a6e7f793d0"
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
                        "id": "03efb638-3355-43f2-899f-27bcd34f61ea"
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
                        "id": "c5a3caec-ab92-48a5-a64f-8d550628e38f"
                      }
                    ],
                    "activeCells": {},
                    "id": "94881796-aade-4689-8d8d-346fea04b37d"
                  }
                ],
                "id": "876c5951-c18f-48ea-af0b-3ce22cb139f5"
              }
            ],
            "activeCells": {},
            "id": "da68121c-7693-4bac-85c7-f04dee910806"
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
            "id": "6b5f0b2d-76e7-4f14-9007-7594a3f5588e",
            "spec": "table3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "55b598f0-f7c9-4ab1-ba4b-3863180b3941",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "47f2531e-dc43-4a96-a3bd-71acf90cee8e",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8fba76d5-9e9c-4807-b39b-c732f1dbc028",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c0c39eff-9e27-46cb-86e7-34df3f7c073d",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6b5f0b2d-76e7-4f14-9007-7594a3f5588e",
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
        "time": "6:55 PM",
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
                        "id": "55b598f0-f7c9-4ab1-ba4b-3863180b3941"
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
                        "id": "47f2531e-dc43-4a96-a3bd-71acf90cee8e"
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
                        "id": "8fba76d5-9e9c-4807-b39b-c732f1dbc028"
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
                        "id": "c0c39eff-9e27-46cb-86e7-34df3f7c073d"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "1f67e47a-90bd-4d58-921d-c562196eb005"
                  }
                ],
                "id": "45ea2731-b3f3-408e-90dc-b56e2486ed8d"
              }
            ],
            "activeCells": {},
            "id": "6b5f0b2d-76e7-4f14-9007-7594a3f5588e"
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
            "id": "d3efa8e4-6fdf-48e9-8bfc-b7ec10bd7cea",
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
            "id": "56c47fef-4f7b-4e36-9caf-fe83596d2a04",
            "spec": "table4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ef392f23-290c-4adc-ae8b-bdab0367a281",
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
            "id": "d3efa8e4-6fdf-48e9-8bfc-b7ec10bd7cea",
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.&lt;&gt;c.&lt;BeforeThrowsError&gt;b__6_2()\r\n   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass16_0.&lt;Before&gt;b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre><pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.&lt;&gt;c.&lt;AfterThrowsError&gt;b__7_2()\r\n   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass18_0.&lt;After&gt;b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "6:55 PM",
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
                        "id": "56c47fef-4f7b-4e36-9caf-fe83596d2a04"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "0a07efc4-bd9a-4734-9ef2-d3bcf8e6bc28"
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
                        "id": "ef392f23-290c-4adc-ae8b-bdab0367a281"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "9830514b-6c03-4086-b1af-7ea5db3925fc"
              }
            ],
            "activeCells": {},
            "id": "d3efa8e4-6fdf-48e9-8bfc-b7ec10bd7cea"
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
            "id": "9e8ce9bf-d647-4d1e-a598-7279543cb541",
            "spec": "table5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9a678a96-cc94-4c01-ab44-68000d12747c",
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
            "id": "c8f00c03-4443-4ed8-9391-7202a66d9dfd",
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
            "id": "12a8046a-3a93-49de-ae69-8d8001e5bb6c",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9a678a96-cc94-4c01-ab44-68000d12747c",
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
            "id": "a4c25a1f-ccc9-4c7f-a373-9197701dd522",
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
            "id": "a4c25a1f-ccc9-4c7f-a373-9197701dd522",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a4c25a1f-ccc9-4c7f-a373-9197701dd522",
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
            "id": "a4c25a1f-ccc9-4c7f-a373-9197701dd522",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6914e043-9828-438b-85be-b8a4ac19d36b",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6914e043-9828-438b-85be-b8a4ac19d36b",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6914e043-9828-438b-85be-b8a4ac19d36b",
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
            "id": "6914e043-9828-438b-85be-b8a4ac19d36b",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9e8ce9bf-d647-4d1e-a598-7279543cb541",
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
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Sum:After",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 1,
            "end": 2,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 2,
            "end": 3,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 3,
            "end": 4,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 5,
            "end": 5,
            "duration": 0
          }
        ],
        "duration": 5,
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
        "time": "6:55 PM",
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
                "id": "81f97a1e-f4a0-4f7f-99e6-35f8cd2a7b6d"
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
                        "id": "c8f00c03-4443-4ed8-9391-7202a66d9dfd"
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
                        "id": "12a8046a-3a93-49de-ae69-8d8001e5bb6c"
                      }
                    ],
                    "activeCells": {},
                    "id": "9a678a96-cc94-4c01-ab44-68000d12747c"
                  }
                ],
                "id": "0a275a21-30cc-485e-b2b5-b951799aec10"
              },
              {
                "type": "comment",
                "text": "Table fixture from script",
                "id": "66e1547a-766c-4654-8fa1-1984b7770840"
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
                        "id": "a4c25a1f-ccc9-4c7f-a373-9197701dd522"
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
                        "id": "6914e043-9828-438b-85be-b8a4ac19d36b"
                      }
                    ],
                    "activeCells": {},
                    "id": "e3e1e11e-eaec-4613-9651-728f1b67398f"
                  }
                ],
                "id": "d0dc3cff-0051-4121-bef6-e603ddbfd012"
              }
            ],
            "activeCells": {},
            "id": "9e8ce9bf-d647-4d1e-a598-7279543cb541"
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
                "id": "65764a8f-d324-4897-8b88-fbeb99f1bceb"
              },
              {
                "type": "comment",
                "text": "## IfTheAddressIs",
                "id": "310f464f-2645-4969-a8b6-b7ae4b56e88e"
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
                "id": "d2b4c4ed-cea5-4ba5-b385-67f34c994c93"
              },
              {
                "type": "comment",
                "text": "## TheAddressShouldBe",
                "id": "9d310702-5606-4a24-a829-04fa48e5aa5a"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "Address1",
                  "Address2": "Address2",
                  "City": "City"
                },
                "collections": [],
                "id": "1021b88d-de14-432e-83c8-68f5031830a4"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "9622b95a-c782-4339-b031-e794b9baaa45"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9db7858a-c77e-4c87-866d-81bb4312ceaf"
              }
            ],
            "activeCells": {},
            "id": "ffb2e8ce-0fe0-4ba4-a514-25056b4979c4"
          }
        ],
        "id": "3d8a92ac-0b6a-4fe6-83af-160f758679a4"
      },
      "sampleMarkdown": "# Sample Specification for CheckObject\r\n\r\n-> id = 1b64c3ad-6429-41ce-a450-cc5c0f43e668\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8719895-06:00\r\n-> tags = \r\n\r\n[CheckObject]\r\n|> IfTheAddressIs Address1=Address1, Address2=Address2, City=City, StateOrProvince=StateOrProvince, Country=Country, PostalCode=PostalCode\r\n|> TheAddressShouldBe Address1=Address1, Address2=Address2, City=City\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "a8461945-4427-4379-a680-6c89948e6f41"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "fd3282d2-908e-41e2-9ceb-ed3ec7fc3d2e"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "cb38cba9-7878-47e6-abef-ced567ade779"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "118c8deb-a306-4cad-b6d7-c2d2fed53d46"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "9ec208a9-7b3a-4e03-9f8b-95086eaec290"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiply",
                "id": "d1a7d676-d790-4326-a08d-e06eb1653bb9"
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
                "id": "d3a07162-a3aa-4fe2-a109-23c42be4d918"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyTable",
                "id": "1c1bd975-bd76-4a62-ae3d-277e5014623b"
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
                        "id": "2c683021-0a35-4d2c-a4ca-ee4a8ad6b80e"
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
                        "id": "fd293341-6735-4bdb-ae2f-3e8c6a60bdb4"
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
                        "id": "71bc46a7-4dff-4c64-b1ac-1a647e1aaad3"
                      }
                    ],
                    "activeCells": {},
                    "id": "ff284a61-b22b-429e-802b-3aa2b05b9a62"
                  }
                ],
                "id": "a10cd0d4-6a10-461f-a188-acf32cd3ee14"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyThrow",
                "id": "9f8099c8-5672-43af-9139-9adbef07b6d8"
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
                "id": "f1aaf577-6c9d-4114-8ba3-e8a7b899563a"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "c549d352-1992-4241-9c22-9c2b00a2b4da"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "4d6a6fa3-6bc1-4b2d-9be8-462fcb2e2a7c"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "ea018ed6-b6ec-44c6-a0ee-1764b22e93ea"
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
                        "id": "11c2adc3-aaca-432e-a313-cea03b7d2c40"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "f2b6bb66-84c4-4ddb-9171-3404fc061614"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "9c78e38e-4717-4635-9330-1d09030beb08"
                      }
                    ],
                    "activeCells": {},
                    "id": "08b67aec-f748-4a37-a759-f64efac8456f"
                  }
                ],
                "id": "bf4c02dd-4d7f-4180-9053-52eb489f19f8"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "39c71b0c-e810-4fbc-82cd-11427e7a15ef"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "90ab0b4d-7634-4aaf-af5b-ebaca49aa7f7"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "68ad7801-e26d-4f8e-8281-630531ddcc20"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "40b89cd2-bcad-4b20-8ca4-5b6dc3645c27"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "d1fefc7e-23cd-4529-a474-d15e8853a56e"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "6547ed49-dddc-44be-b8ab-09d4e5c3cc1f"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "e0abf74d-ec01-45f8-a3fa-b395896ddc16"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "37913c58-2823-4521-8b53-7ac7de3cafb0"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "69f95d25-0d37-4641-b221-8a1f71abbe6d"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "d9c504a0-d43f-4814-aeeb-96eb4a360021"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "c7f77f79-7e63-49c1-a1a2-aea1615cf15a"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "70b363a5-af2b-4efc-a2a9-4c41b09c5919"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "1ea7b91b-5386-4977-8f95-cf1c905f3f0e"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "f937a99d-c8c2-44d7-8667-ca1656f73ad7"
              }
            ],
            "activeCells": {},
            "id": "2aafb9ac-67eb-48e3-9b1f-719990eeca4e"
          }
        ],
        "id": "149ec5cf-ae90-40d4-9e21-ee0479609465"
      },
      "sampleMarkdown": "# Sample Specification for Composite\r\n\r\n-> id = 4179b2c8-e957-4256-b6ff-10567a6f027d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8729895-06:00\r\n-> tags = \r\n\r\n[Composite]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> AddAndMultiply starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> AddAndMultiplyTable\r\n    [Rows]\r\n    |starting|operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n\r\n|> AddAndMultiplyThrow starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "0664b0a5-e384-4be9-84c9-23b81cd57654"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "55699deb-d8a7-41bb-87e8-d14a936cfa09"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "9fc594b0-a564-478a-ba74-7d63cb263366"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "1b9c663d-3964-48a3-879d-39b651e49375"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "6e130252-112f-4ebc-9efd-2f509865a81b"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "6ad894fe-350a-4a29-af35-1af04de6cbdb"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "abb61310-11d7-4a18-a3f9-9b044072fdf3"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "bf063bcf-0fb1-4f24-8669-ab23ec7dc197"
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
                              "id": "e7b0e17a-e740-4b09-8317-d04d95b5716d"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "82bbdceb-21de-4125-b693-451272e7ae67"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "a18392df-321f-4e5c-9d93-3965774c9fda"
                            }
                          ],
                          "activeCells": {},
                          "id": "e5a894fc-baa0-48c9-9f1a-a8ce9cd94d13"
                        }
                      ],
                      "id": "1d6a90af-51b1-4b53-b32f-7e746d0fa843"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "45223e06-896c-4190-b333-35e1a610c36b"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "9c610293-3e8a-4237-a5f1-1dde262804e5"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "d0e80b9e-eebf-41dc-8eab-8a2805b8694b"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "d064d92c-62fe-40dd-8873-c33c597f1a4f"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "72a0cbda-1a8d-491d-b203-340b813d9263"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "35360c13-cdf7-40f1-ab65-7d500c97b4bc"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "d16d7a62-cdd7-4b3a-a38d-aea6a37c31e3"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "6852dc80-8277-431e-a751-bddaa892990e"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "cba6b1d8-23ad-4493-a421-759440fb09f8"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "75249527-5a7b-4998-9b84-90abefdd55bd"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "ce6b639d-decf-4c1d-8993-fe0b8339f5d7"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "81c4d46f-84c7-4fc5-a20c-5538e19a3d37"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "0cc6f4ab-6934-4a91-9606-7b9bf85b761d"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "cac63770-bba4-4386-8661-da24752266df"
                    }
                  ],
                  "activeCells": {},
                  "id": "b63976eb-bf3b-4b32-88e2-522abd3597cd"
                }
              ],
              "id": "063a580c-c520-4af2-ad12-a81e05800b9f"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 77ae1980-6a0f-4ee5-b313-d65529780442\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8729895-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "79327ef6-5fef-4f44-b4e9-7e2efd7b3dcf"
              },
              {
                "type": "comment",
                "text": "## DoNotThrowAnExceptionOnTheNextEmbed",
                "id": "8ba0a420-f9a5-403d-baf3-4e119269681f"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "f71fdb49-1d42-4631-a3f0-8e8127b9597b"
              },
              {
                "type": "comment",
                "text": "## EmbeddedMath",
                "id": "964665d1-5433-479e-8303-93da0cc508b7"
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
                        "id": "e3a6996b-f6c0-4e28-a100-1320477d0ac3"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "936c5aff-e055-421a-b506-15b0dd305165"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "9ffb9a1f-e66b-4fd8-b59e-12009a1434fe"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "f0046259-45b0-4ca8-9658-a0986f8a844f"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "fd966c8e-d7e5-4493-a9f9-1683c59ae401"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "27771bf7-df87-4ead-b554-42e3359ef275"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "0eb2d324-ef92-4ffb-be76-07494a72f7dd"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "06dbfdcd-6a68-449a-aa83-c9dbfb1ae865"
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
                                "id": "73dc4a11-dce6-4cfc-bc81-115cabe27dac"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "c3a2806b-34d0-4352-a742-c6f29c7d84ba"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "2987f63e-1599-4363-90cd-5e0a8305b2fe"
                              }
                            ],
                            "activeCells": {},
                            "id": "c5666ab7-b0f3-48b2-910a-dd324d5d1468"
                          }
                        ],
                        "id": "b5ef70e2-5084-491c-bf43-7855272a1069"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "3edb21bf-1346-4598-8fce-30f0b0e1dc7f"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "c16d2da6-8365-4360-8187-8d46d7ffc59d"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "e3441b6d-3304-4796-a56f-5587a13aee3a"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "38704bf5-74cb-431d-bab1-286accee88c4"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "ba753050-ba8b-4fbe-ae9e-4b33e41a910b"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "67659c5c-9a1d-4aaa-8cbd-4a7c38c674fe"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "0ad84546-a394-4873-9e33-ee2533d4c9c8"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "e6152f2f-70c0-4989-b4bd-503807817467"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "d9601841-826e-455c-8bbf-d2b699f94ad2"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "c48de326-9841-460d-ba51-9718e11791b2"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "24fc4284-4a3e-48ad-85ac-80dd592745a7"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "503b9ecf-07b0-452b-acb0-a8f17e43cd63"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "a815d385-e967-497f-b3e8-317f740b36ba"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "3ef3e252-bdfb-4376-8cdb-9a08844e8aec"
                      }
                    ],
                    "activeCells": {},
                    "id": "0007c065-4c2a-4026-a360-85538ce97744"
                  }
                ],
                "id": "15833f72-8519-44d7-a7f6-379220369814"
              },
              {
                "type": "comment",
                "text": "## ThrowAnExceptionOnTheNextEmbed",
                "id": "ad537b70-3556-44c5-b2f6-ce5fe8d56490"
              },
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "75e2fc6d-8ada-4249-a65e-1e94dbe9a25c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "ab665115-89af-47bf-9ca7-6f83de6670c6"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "383d74b6-0e74-4e10-9b2b-19e2188be1df"
              }
            ],
            "activeCells": {},
            "id": "c83f3546-29cf-4187-bb5e-76d0584268e9"
          }
        ],
        "id": "78899761-a2d3-45b1-b8ec-4c097618e38a"
      },
      "sampleMarkdown": "# Sample Specification for Embedded\r\n\r\n-> id = 77e55606-8e1e-48b5-9051-4e13c71b9202\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8729895-06:00\r\n-> tags = \r\n\r\n[Embedded]\r\n|> DoNotThrowAnExceptionOnTheNextEmbed\r\n|> EmbeddedMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> ThrowAnExceptionOnTheNextEmbed\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "264c3675-11d4-4877-b846-06e5930d5f0a"
              }
            ],
            "activeCells": {},
            "id": "74ea7fc5-bf0a-460f-9fb0-c52d448b471f"
          }
        ],
        "id": "41a460e3-089e-4c50-b893-f92490579c71"
      },
      "sampleMarkdown": "# Sample Specification for Failure\r\n\r\n-> id = 164a4cff-45e5-44e8-ba2c-792a46aa8b29\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8739895-06:00\r\n-> tags = \r\n\r\n[Failure]\r\n~~~\r\n",
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
                "id": "f1cdf9f3-b430-413a-bfea-06fda4791f97"
              },
              {
                "type": "comment",
                "text": "##",
                "id": "42af0f46-a4bf-4c74-a489-4450db968993"
              },
              {
                "key": null,
                "cells": {},
                "collections": [],
                "id": "81fbccd8-75f0-409e-abfc-6c65146aedbf"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "7a2e601a-141a-4d39-bf77-556e3136f380"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "5c517a70-a4d5-425e-90d4-770adaffcc12"
              }
            ],
            "activeCells": {},
            "id": "76f36681-37fd-4785-9aae-55aac2a3a949"
          }
        ],
        "id": "b65c84f8-fc37-4952-9a88-27b216697b52"
      },
      "sampleMarkdown": "# Sample Specification for GrammarError\r\n\r\n-> id = 5a97dfcc-2e7f-4756-bc35-35c05e922e96\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8739895-06:00\r\n-> tags = \r\n\r\n[GrammarError]\r\n|> \r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "67cc43cd-cdd5-4ff9-a378-c7dda5920e56"
              },
              {
                "type": "comment",
                "text": "## Add5",
                "id": "c2e4e399-0e86-4f11-bcbe-680ef3eb260b"
              },
              {
                "key": "Add5",
                "cells": {},
                "collections": [],
                "id": "d81eafea-9cd3-4c40-82fe-62610a07c653"
              },
              {
                "type": "comment",
                "text": "## AddingTo5",
                "id": "34d30713-9881-45e3-80b1-4554b7ba106d"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "dd9d4c59-f2e3-4311-9e7d-ffe9a1e91eea"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "78f31a9d-b498-4481-9d03-4585587b13bb"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "4045928b-5eaa-4a12-b4ad-2365779e4a9e"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "26130d47-733c-47ff-ace5-10837070d16a"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "20f6ddf5-bd9c-41bd-a3ac-8e0697f824d8"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "3c58ad89-1378-4d7c-acb7-428a9ec30fa0"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "c62b96fb-c5cd-4105-ba58-e75ad2017871"
              }
            ],
            "activeCells": {},
            "id": "68b9bbc1-c1cd-4144-a935-bf71a19dd5d4"
          }
        ],
        "id": "f1d538f7-1957-4317-8e41-df8dde6c9c3b"
      },
      "sampleMarkdown": "# Sample Specification for CurriedMath\r\n\r\n-> id = 72aa2c9f-5b10-4238-a785-42234f4c743f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8739895-06:00\r\n-> tags = \r\n\r\n[CurriedMath]\r\n|> Add5\r\n|> AddingTo5 y=y, returnValue=NULL\r\n|> StartWith starting=11\r\n|> TheValueShouldBe expected=expected\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "8f5ef392-84e7-46f3-9ac1-fc0fe5d879d9"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "166fac30-34a2-406b-903a-0a5e4da8206e"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "a902fe4b-b598-4619-abc2-8221b4690d39"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "f5c66ca7-5282-4d89-b366-259db67eb78d"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "a4991a72-fff5-4d51-bab3-0a839e2af4e2"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "6c648204-3c12-4262-b13e-d48945b42519"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "3bba8820-b741-4810-9a6f-fb3e2bbe43ce"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "7cbbe9c2-1985-4ee5-9338-4f3be2f1fe27"
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
                        "id": "27fd9d2a-fb5b-4d2a-93d6-d64da3f81e11"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "98702ea3-82e2-45c0-82e8-8f255c5ef5f2"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "b1ebb273-d4cc-40c6-8aec-16bb17a04069"
                      }
                    ],
                    "activeCells": {},
                    "id": "9f94558f-7b8d-4d10-9f33-7efedcd7609a"
                  }
                ],
                "id": "4b4a86a3-5df2-4752-80b5-952330b10348"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "b5be3c95-a7ab-42c9-83b9-9150a51d69eb"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "63a7f369-854a-4fb1-b2fe-cb338d44463d"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "103b23f6-f2b3-4ab9-a8c0-b8f82fd6c886"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "f35ae9e7-8a9f-41cd-b303-e36890931bab"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "348f68aa-1402-410e-a14f-1b31dbf80b81"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "3d9f5ad6-cafd-41f8-a3aa-216641aa9a44"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "73150eec-6aa2-40ab-8137-799da271e6b4"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "fbce2c73-cbee-4917-8118-98f0d3547fde"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "b59b1201-0770-49ef-ab91-0ef6f20b4836"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "ff3edb18-e322-4f28-a4cd-fe233b3436a5"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "bbad9b73-69c8-4ad9-871e-9340df3094ea"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "560c3111-b24e-4032-a428-f7ca180e71a4"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f9c62557-5cbc-44c6-a371-e3ecf1f97338"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "538872dc-2b6e-4645-92ff-43306975d4bc"
              }
            ],
            "activeCells": {},
            "id": "8171674d-5197-427a-bee8-9ab1db6e0874"
          }
        ],
        "id": "36e833cc-f746-4d85-9c6e-74ccd4cce0b3"
      },
      "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 15a8cba3-c3c5-432c-8806-91cbe50fb90d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8739895-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "894d09f8-d0fe-4dc9-a2a9-1e233c9c5f7e"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "9cc85720-bde0-4b4a-a8ab-448fa0ed8c62"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "793c2c24-de42-4f4e-9402-e523e45d238b"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "d0e4d2ba-f45b-4184-9307-109fd4f9aba0"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "23a96bd9-57ff-45cc-8a43-6a24514cd76b"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "ea689056-0345-425c-bb31-07f793eaf32c"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "18c4031b-4269-414a-a02a-9d896ea9509f"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "d02035f9-6af8-436d-9cdb-92caa3db14c5"
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
                              "id": "31b182aa-f3ec-47e7-b029-77c9c6e59e80"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "e5ea0703-73a7-46ce-9d57-2222372f0ea9"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "25ddc822-c16a-4570-ab10-e98fad3a30d3"
                            }
                          ],
                          "activeCells": {},
                          "id": "c324ca00-c15e-4c97-957d-b8b0aa825f0f"
                        }
                      ],
                      "id": "b34dfcb6-1d6c-4e4a-a85f-194edaa75732"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "838241b1-68f6-4157-bc64-6f46a7f52409"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "9e833807-acb1-4f95-a6cc-2b2ffc310a00"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "458cbae2-4d44-406a-adfa-063737847dcf"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "af58b858-81af-45c0-8913-073419673e5f"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "856918d4-ae40-4502-ab95-e93852379219"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "cf62742a-f45e-40f7-a912-9f86dec48913"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "00fb06ae-311e-4f35-aa99-14d37c1b3b96"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "d89628bb-98ab-4f87-a6d5-dc40dd4196d5"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "288ded41-b603-4b44-99c2-b99515117daa"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "f48b7cc4-80c6-4e76-a7d4-d29b28f16d51"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "89a9321c-fe93-4139-8ba6-57792efb5536"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "5963f3a4-6fcd-4b7b-9484-823688a707f0"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "d7ea9449-d986-4de6-a293-3deb4388489c"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "2bbed4b9-434e-43d9-9ac4-ebd8cf1ba1ba"
                    }
                  ],
                  "activeCells": {},
                  "id": "925bbb27-d2d4-4531-a17f-f1e56b9604bc"
                }
              ],
              "id": "0f98daa0-4e17-4ce1-a483-a82809c109eb"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = ca1bd299-2cc2-4e1a-a4d6-1aec17f1afe8\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8739895-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "a6a4854c-0d24-4d38-a945-9fd4c1295dd9"
              },
              {
                "type": "comment",
                "text": "## DoSomeMath",
                "id": "82c4aa9b-913a-48df-976d-8e5dba04544d"
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
                        "id": "f6fe8da5-c674-4351-b815-00b35ded9616"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "133090d7-7f61-4195-92ac-3f00fadb53fd"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "daefd8a6-103c-4a76-9b58-47eb7942da45"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "5728574e-d27d-4202-8564-3b8db5137270"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "3e95c5d6-f274-46d8-a65b-0e7d39d7f549"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "71a08363-ed41-46ee-a3a6-3318047b318c"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "5031d002-5929-4bb8-bbfa-3c8a08ceffc4"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "707bcb30-2d1d-4a23-afe1-b1a320f5557a"
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
                                "id": "4e825a01-6fd4-41d3-bb5b-510d03c4b39f"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "7f44fe73-647d-46f7-b871-fc8f22842771"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "48f20d6f-59ea-4e85-8863-514d90a3e92d"
                              }
                            ],
                            "activeCells": {},
                            "id": "568c51b9-5fea-4182-968f-306f10112c69"
                          }
                        ],
                        "id": "babd4e71-8900-48d7-b4e9-2e9513908358"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "d572f8b9-1bdb-426a-a719-1e9288cb687a"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "0b74290c-9b29-4b97-bf79-a7a1e6e328ab"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "cbd98655-635c-49c8-af12-f91579b04fea"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "480b141f-84fa-457a-a32e-b0a4599bfe3a"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "249068e3-f71f-41ea-b75e-ef36f2559b24"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "d9969c0f-9427-4ea8-92a2-42d35298f78a"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "eee1f806-feae-4041-8c76-05f3e59b1ea1"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "1261f6fd-4571-427f-8c15-423cbc912da9"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "96950b80-8744-499f-9511-e8b221a0b5a2"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "048321bc-868c-4764-a5b9-555f90b0c702"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "35935293-3186-4a9e-9400-c10373d9d9fe"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "2141aa97-fd7c-4d59-b729-f05a0db5ffbb"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "ab79b79f-27f6-4299-9ed5-141444ec714a"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "98f66892-166f-4d8c-98e5-3e58c29af6bd"
                      }
                    ],
                    "activeCells": {},
                    "id": "f5c9e780-c6bc-4613-8b8b-f0093c5a54fb"
                  }
                ],
                "id": "59853f47-7749-4764-939a-e065269cc07d"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "a4a7312e-76b5-4381-b286-23fc350e3b94"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ae18d337-13fe-4973-9af9-f154b2fff1a6"
              }
            ],
            "activeCells": {},
            "id": "e4c272bd-d746-4f24-ad22-ef553c93c6ef"
          }
        ],
        "id": "b96de614-485d-4f0c-ab5b-3c90ebbb63cf"
      },
      "sampleMarkdown": "# Sample Specification for DoSomeMath\r\n\r\n-> id = 7589e7ad-10e9-40df-a91a-064fb02b44f1\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8749895-06:00\r\n-> tags = \r\n\r\n[DoSomeMath]\r\n|> DoSomeMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "7dfee716-70f8-4131-a301-344928ab19f1"
              },
              {
                "type": "comment",
                "text": "## TicketIsGiven",
                "id": "00ffdacc-740b-4bb9-ad07-78c545450d28"
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
                        "id": "8f00fc52-82f3-42ca-8ea5-a2be3ab09b38"
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
                        "id": "c93f18ca-c61c-4010-a664-745be3dd5fc4"
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
                        "id": "3d2ec1ef-a2c2-47ae-9371-0aaac8dab977"
                      }
                    ],
                    "activeCells": {},
                    "id": "cf3746bd-050d-4e61-866b-5d41b9022d5a"
                  }
                ],
                "id": "da816995-dead-4e7b-935d-3164adce27e0"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "63148b5f-1e0a-4ce7-a2cc-1f62f5ea4de4"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "0424ebb2-a7aa-44c5-8d9b-4b4c6326c691"
              }
            ],
            "activeCells": {},
            "id": "29cdca8d-b58a-4612-ba89-b0f55e09462b"
          }
        ],
        "id": "832ed3cd-fc05-447c-b900-f563d7393222"
      },
      "sampleMarkdown": "# Sample Specification for ParkingExpiry\r\n\r\n-> id = 27e38bf8-2a96-4310-9e2a-141125ec3d14\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8749895-06:00\r\n-> tags = \r\n\r\n[ParkingExpiry]\r\n|> TicketIsGiven\r\n    [table]\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "3b8619f8-9a5b-4d4e-b829-9559e8eacf0e"
              },
              {
                "type": "comment",
                "text": "## PositionIs",
                "id": "31bd68ee-2189-4d34-8276-bd8e4ce11135"
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
                        "id": "a2e0c85e-38eb-44e0-be96-82788508634e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "22956c95-ad1f-457b-9463-a52601c2921f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "f6500036-dfe7-4e11-b513-6eb228c26b0f"
                      }
                    ],
                    "activeCells": {},
                    "id": "d88190f8-087f-4cb3-ac6c-6ea6e12e7e87"
                  }
                ],
                "id": "77798f93-d3c2-409b-81b8-02f634f103fa"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "e2bb36cc-40d9-48a0-9f8b-eee5552479f4"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "56794554-cdf5-4040-bd56-8b88ca150f42"
              }
            ],
            "activeCells": {},
            "id": "86862488-360c-4e69-952a-0b50a8f36041"
          }
        ],
        "id": "40ca833a-3e17-4922-b255-35d81c2d77ef"
      },
      "sampleMarkdown": "# Sample Specification for Player\r\n\r\n-> id = 3f094cc1-58da-4832-84e3-c491f982d494\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8749895-06:00\r\n-> tags = \r\n\r\n[Player]\r\n|> PositionIs\r\n    [table]\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "412480cf-c41d-4db9-b1d7-e8ef3bb2cb4a"
              },
              {
                "type": "comment",
                "text": "## FirstAndLastName",
                "id": "3a736255-2618-4e5c-9586-414aafc99321"
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
                        "id": "a7e9d532-66d9-4f1c-a18c-56f30b56a6d9"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "7df95ed1-4eb1-4088-88fe-4832e9f060c6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "ad7003d4-9b0f-4433-8752-867378af3b3a"
                      }
                    ],
                    "activeCells": {},
                    "id": "e22d9b5b-45cb-4ff1-a567-c7d972f4ab13"
                  }
                ],
                "id": "eba64bdb-ac74-4f14-8121-d1a83fee94f1"
              },
              {
                "type": "comment",
                "text": "## names",
                "id": "61de0d23-c365-441d-ad75-fcd5ba38927d"
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
                        "id": "1c919b87-a794-4e0b-9894-bb9e4b80f266"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "5ea612c4-94a7-40df-b647-a5ff73a35df4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "e786a81e-6bfb-4960-bdfc-9b11759493b7"
                      }
                    ],
                    "activeCells": {},
                    "id": "40524f98-2794-4712-9ffc-ed4a498d11e9"
                  }
                ],
                "id": "1a17369a-fb03-48d5-839d-1a0385634c94"
              },
              {
                "type": "comment",
                "text": "## TheEnumOptionIs",
                "id": "f694e82f-980e-4894-bc9d-7200146ff9a4"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "SecondOption",
                  "selectedOption": "selectedOption"
                },
                "collections": [],
                "id": "ba6d531c-030b-4d38-9536-893a08d95c87"
              },
              {
                "type": "comment",
                "text": "## TheNameIs",
                "id": "faaf3935-7112-4dcd-b8cb-e88016b3063b"
              },
              {
                "key": "TheNameIs",
                "cells": {
                  "first": "first",
                  "last": "last",
                  "fullname": "fullname"
                },
                "collections": [],
                "id": "51e9a4de-6e3f-41b3-bc51-10c9cebf95a9"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "44b1603a-e289-459b-aee2-adff20a1d716"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "b65cd9e9-9cb0-4173-a765-63c26d78a309"
              }
            ],
            "activeCells": {},
            "id": "e78fece6-3fb2-4267-b5fd-91c1f3dd9b04"
          }
        ],
        "id": "e32ef330-56c3-4b40-acbb-c548de706f18"
      },
      "sampleMarkdown": "# Sample Specification for SelectionList\r\n\r\n-> id = 18baf1a8-05e9-4dce-9fd0-56ea744d49e6\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8749895-06:00\r\n-> tags = \r\n\r\n[SelectionList]\r\n|> FirstAndLastName\r\n    [table]\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n\r\n|> names\r\n    [table]\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n\r\n|> TheEnumOptionIs option=SecondOption, selectedOption=selectedOption\r\n|> TheNameIs first=first, last=last, fullname=fullname\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "9bbb8cb3-5940-4f5e-b79a-bb44de3e5689"
              },
              {
                "type": "comment",
                "text": "## A",
                "id": "78fe7dbd-cdb9-494d-a1b2-46258500f348"
              },
              {
                "key": "A",
                "cells": {},
                "collections": [],
                "id": "d03d01c3-11f1-4bc3-9467-6936f8033026"
              },
              {
                "type": "comment",
                "text": "## B",
                "id": "adce101d-af8c-4e49-9d36-59a25f8dfa4d"
              },
              {
                "key": "B",
                "cells": {},
                "collections": [],
                "id": "db5b68a0-8329-4c45-bb0a-8c8a7984497b"
              },
              {
                "type": "comment",
                "text": "## C",
                "id": "e5c7fa10-c303-475b-b28e-86a5e5b2522e"
              },
              {
                "key": "C",
                "cells": {},
                "collections": [],
                "id": "7ae47463-9d46-499e-95c6-b16e98ef3dcc"
              },
              {
                "type": "comment",
                "text": "## D",
                "id": "e07ad002-3c75-4131-ad27-153fe7bd75f6"
              },
              {
                "key": "D",
                "cells": {},
                "collections": [],
                "id": "a41a30f5-d047-4bf5-af36-6b89fe246ec1"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "9d7b95d3-d4ed-4ecf-ae7a-7e972c470568"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "b66f1c44-f457-47dd-b7a7-80645004f094"
              }
            ],
            "activeCells": {},
            "id": "005f4389-5c1f-46da-972b-b14bd1f36a9b"
          }
        ],
        "id": "f88c876b-8979-4ccb-b21e-5836bd2b2ffb"
      },
      "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 63e2dfa8-ec67-4e27-8073-74758d713c9f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8749895-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "22ea1436-f6c6-4be4-adf2-1250346f70eb"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "a1ec1461-8775-4995-ac0c-d3c171244f7f"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "68c4ec5e-bc38-46e0-a490-ae2c89fbb8ea"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "15a4e28b-58cd-4cd1-be9d-4a0b09721856"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "52d33591-3e46-4d47-b656-a1ccf81c04f3"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "02a7dd0c-3a9e-4be9-97e0-24065a21462b"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "9e0d44fe-1fb3-4168-93d1-4f8ecec29004"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "65fd9907-d825-47f7-b8d4-371e7eb3fb9f"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "1e456613-eed9-4444-868f-cd3abf926bde"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "998f224d-12a6-4022-a50f-87148ae65042"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "e4fc63bf-0ae4-4bbc-9e52-3c41e7e451cc"
                    }
                  ],
                  "activeCells": {},
                  "id": "c8b0f62b-5fe9-46cb-b4b2-ff8dd56b3809"
                }
              ],
              "id": "24ae708e-4ca9-43ef-b327-828c627c87cc"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = b794d7d4-54c2-4a57-b954-8cd59863509c\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8749895-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "815149b7-384e-4ea2-91bd-b2f0d55a884a"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "99cba41a-fe26-4f8a-a4d5-364da322db66"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "f31031d4-08cf-477b-be34-028cf4fe2ca0"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "a285fbb2-cf36-42f0-b260-cb7c29eba584"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "1a45e8a8-15dd-4ebf-9672-e6e09c84b340"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "fc1d3e4f-7f5a-4961-a880-e8f9ffb49ec1"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "c80308ca-3f7c-4b89-9a63-43de2219d2bf"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "a8e1d084-52b3-4a41-a665-6e0c0f1a7fe6"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "b0dc9146-eebe-4ae0-bbb5-8e547625c9ab"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "4b4e351e-c7a5-4acb-9b4a-59366d86a6fe"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "ea101aa6-3d5f-4070-9b05-5364da7cfab3"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "f3354ab1-6601-4f39-9a1f-9df22b7ec908"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "e1f34bf3-039c-43ea-8fa7-ee2c12bec2f4"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "fb9b97d7-b1de-44c0-a979-89f6ec626a51"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "eb3be7e6-7f03-4364-8dda-85bf5a969881"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "7679a9fa-c4bc-46b8-b2ef-701c62b2b68f"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "656fec5f-c79f-439c-90d8-cb961a9d0094"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "fafa7477-0dbc-434d-b636-066e5e807c68"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "7da339a8-653a-41cb-b4a5-f5936fedc9bc"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "2842abaa-d035-476a-a168-69c277ceb942"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "5d8b74fe-01a1-4cc1-8780-b4f4b94eb641"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "b56450f5-0afc-4d96-8d0e-a46d2aa2e348"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "d52aac9a-f5eb-4514-84fc-efed913f62d7"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "b3878c27-acfe-4b82-84a5-f2fe61300f4e"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "acbc00d0-051a-4120-8602-4d4ca6e875bc"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "166e5120-0b1c-4e7f-ba93-6925f6c5b090"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "030bdb5b-8b7b-489b-836b-f449ce38ba69"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "1d8b48b4-dd47-4af6-a62c-25066647199e"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "66663b1d-d5a6-4b29-affc-be249a8b0473"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "b14ae296-111b-49d9-8fce-2c4c227936fb"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "d786e53a-b12f-4816-82a1-3de87198551c"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "1c824ac1-d5ae-4bed-8f8a-8a14ee79da22"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "8c267484-d2ed-47ba-90e8-e377df6fa486"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "12614d51-53fc-45e6-99e9-e8b9d8d81c3d"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "b91847fd-eb8f-401d-a423-ad80d67b7e2b"
                    }
                  ],
                  "activeCells": {},
                  "id": "afe3137e-bef7-4a56-854c-95071a72457c"
                }
              ],
              "id": "377943a5-19ce-44d0-a554-c58fc5a18f98"
            },
            "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = d8da5a0c-a8f5-4bc0-a17f-4b5bc20e64fa\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8759895-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                      "id": "628121d1-1439-4e24-8fed-3deb2f3dc3a7"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "d2631c2b-f47c-4798-865e-42c1df0c09d6"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "711c3ba0-3d44-40e0-b428-0f68fa9e2f32"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "f577171c-660a-481b-987a-4c61769daec6"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "22e657ca-8df5-4931-b55e-99e0fd49453e"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "91f62de8-9121-4fd8-a3e9-1adea5419a12"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "90060795-0104-4ff6-8809-03b212dad5c2"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "43f9e00e-256f-4c01-929a-2b757804db3f"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "c805afe3-8a17-44f5-88e7-3e0b84ae5469"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "8091ce3e-7d9c-48a4-af67-c799781f4c88"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "0c001375-8fe0-46f5-8699-c0115c5f21cc"
                    }
                  ],
                  "activeCells": {},
                  "id": "2a691e3d-9085-4a0d-84dd-f3d98f0adcdd"
                }
              ],
              "id": "9d6a2340-088f-4a64-aa5a-f79ad05e5511"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = e170f8dc-4ffd-48c2-a863-e259a79147ea\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8759895-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "a9092992-a023-4610-9e18-45e3cca9d8ca"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "6de85c69-9e6a-4ad1-8285-56476b2b3ae0"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "5bd7e5e0-c058-46e8-bcbf-84d8110e3708"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "452e7d50-1c95-47a6-80e2-19ce7f0481eb"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "51d909d3-053e-43d5-8855-4d7bff5e1b19"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "c0e89679-3a91-4e10-8cea-ee4fb433f019"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "3eb9bc71-e89e-47f3-803b-d807d8e278c0"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "7781c907-aeab-44b7-86a6-83e2fd36fc3e"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "ecbb0030-6a62-4670-b6d0-cfa1d5156cb8"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "703dc818-a6c4-480b-9b0c-ef023ad955b4"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "d9c04392-6b47-4779-b774-b86bec927649"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "eb62e31f-a524-4a99-90cb-9094964f909b"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "ff20c99c-6624-4f3f-8134-27ed4c65c16c"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "4466173b-f465-4151-97df-f402e3c5d4f3"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "1b2f97db-9910-4d25-b1ff-4a910f8c0f9e"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "da645bfa-2617-4e5d-99d9-983ab99dcda9"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "38c9e4f1-77e2-48be-bb55-76cbb4627dfe"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "1178023d-3e18-4d0d-9452-ccda0f96e71b"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "2f64a122-cdb5-4da2-8a02-1aed6b892f42"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "1a16623f-9505-4167-a345-e03c29b3e9cc"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "ba903814-4478-411e-94b9-d91538e70f37"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "f96f754d-304b-4437-8279-1576df2ad9ae"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "aa0ab74b-ee84-43b9-946e-a31614ac41e4"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "da5cd35b-e8e5-44ea-af17-45815ae677fb"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "a8f4c934-34e3-412d-8442-01470d5aae38"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "1946ed3b-561b-41a1-9244-2285e85058b1"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "d9eb3416-4b04-46e8-a5a3-7bb2ef31c7c7"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "dae3623c-19f7-4ca0-a6d2-f8fa54f0d0ec"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "7df90e2d-31c5-4928-93a5-c972f04dadf3"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "02765957-13d8-4e2d-91c0-639fcdafb22c"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "0ed7a927-7b30-4489-82cc-05be616edbaf"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "c40f4904-7753-4909-989c-965b542aae43"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "e07c6590-32c8-43f6-a6df-044c11b672c3"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "baa2ee05-2e50-4fef-8383-fda6fdc1a326"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "3a81d2ac-1c45-464d-ac21-b12f979d6b79"
                    }
                  ],
                  "activeCells": {},
                  "id": "845049d0-45f8-4ffe-b457-69d422aa35bc"
                }
              ],
              "id": "1bb0e451-2553-4d26-9837-32379d687861"
            },
            "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = b451d5bf-79b7-44cf-a967-ebaa87782a73\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8759895-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "53667edd-3a04-4e13-bf94-235b8fc20a87"
              },
              {
                "type": "comment",
                "text": "## Inline",
                "id": "7de5809e-5e26-4d7b-9ccd-dd0d10de9027"
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
                        "id": "55dd4deb-3ec1-4318-9f8d-4618f1a248bb"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "ca6d6cb1-93ea-434e-84de-826777a0a616"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "d7e8e311-5f32-4b73-b2a2-51c56f617ed6"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "38c09dd8-a248-45fa-adcd-55941d16e449"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "f6c52bfc-4a8e-4e7f-ad3f-ca698d57ecd7"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "396c1abb-4398-46d1-b8ab-b37333fe734c"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "ec9ca3e4-4c2d-4458-ac7f-04f6a7432ad4"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "b9991195-466b-4a49-9f74-f22fe9f6507b"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "83e5060d-b247-465a-ae30-e4cbdcd2746d"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "11de5dc5-3349-4b51-81ab-50601a12126e"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "845a66df-4818-4681-acf0-7384f4db0bde"
                      }
                    ],
                    "activeCells": {},
                    "id": "01ee9ad1-4fcc-4929-870d-ebcb53ea7d5b"
                  }
                ],
                "id": "f018ea52-f3d8-480e-b164-ca92f103f51d"
              },
              {
                "type": "comment",
                "text": "## MandatorySelection",
                "id": "781bc1e6-3a02-4560-9d20-cf63d468e01c"
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
                        "id": "4db84143-d211-41ac-989c-9e0e59fc9454"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "46239203-6fe5-4834-8e55-cfbd69c0a1cb"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "06752e71-302b-44df-b487-510bd25e3a99"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "265e67a2-3dac-460d-a87c-96065e04c745"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "3e5d4eb2-65e7-49f0-bb07-b35b75ea9eb1"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "8d5e38e5-c801-402f-8bab-59228d5648ed"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "bec0759c-fd27-45a3-b4c6-5ec186d851b6"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "6abfb44a-4167-4ef8-b6f8-19dbdd9b66ee"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "441e98c5-3617-4f2f-a19b-84e7a3343ed8"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "710462b6-595d-47b1-9ed0-f52d790a6f16"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "46929211-acd8-4d01-a169-e57be68b13d7"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "42bf86df-287b-4eb8-aecb-cd911c1aa27e"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "4b382897-c02b-45da-9be8-00774b96fe42"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "54fc0643-de2d-4cd5-8556-2f0bb2c73a74"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "74445ca5-6aec-468d-97f3-54ca0bb0491e"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "17653d94-9b3d-455a-a221-d8a7f511f66d"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "c768160f-ebd4-4620-984d-7640a5529afb"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "9f4b52f0-ccf3-4b80-a29c-4a82df74539a"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "11e3e5d2-a78a-425b-b245-8a1b59b2f90c"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "8c32e081-233d-4504-8b91-85cc5d996943"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "ce6928c3-7684-4c39-b25b-849118342dce"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "eb614bcb-e0bc-43f8-b83a-303550e564bb"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "36cfd30a-2f93-4f8d-9385-c203f801ecc1"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "197ce4b3-2780-44db-8b34-f936bd472d19"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "9bf10f42-b3ff-4175-a735-2cddb22a94d9"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "fef7d017-3f42-438e-8b7d-7d500524708d"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "7b871e9a-9dc8-426d-8e20-b16da8fc3219"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "1613479a-a90d-4abe-9818-62d1358bb235"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "d784829b-e4fe-4d89-8d95-151587548126"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "9eacd32f-b676-47c6-9f2d-1567665cac99"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "b82bd69f-19a9-4a3e-8288-f7146dbb58d8"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "c8761fe0-a605-4e99-a121-2279e1a86533"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "c2b027c3-4fe3-4412-9b2b-fe84568ccbce"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "1e6f68ac-ade2-48e3-9aab-1be4d93c2cc3"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "bebd15e4-6788-4ebf-946b-e73b198f5613"
                      }
                    ],
                    "activeCells": {},
                    "id": "0530a446-b7d4-443a-8738-a8f60f2ba248"
                  }
                ],
                "id": "71166f66-d88c-4538-b543-08191a13c132"
              },
              {
                "type": "comment",
                "text": "## Simple",
                "id": "168e3ac7-2b74-4dbc-8a4a-e4df2ddec46e"
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
                        "id": "763deb8a-b522-4eb4-a2bb-ebf3f91863c8"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "77c5c9ec-d8df-455a-bc1b-411c87bccf4d"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "bebe94d8-1bb3-43c6-a8d0-5a78ce39b72c"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "1ee31609-b425-4e2a-b8eb-43697864108a"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "3275da27-2290-4078-8004-c5ca7e258098"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "2d84e988-f1cb-4742-a5f4-03a228e38cdc"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "dc81107a-ad36-4b91-9be1-e08fbc011537"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "b3e99cfb-ab4e-4726-963a-e9f11ccffbc4"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "cc40be03-e893-435c-8f0f-ff658c4517dd"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "b2ab1b3c-883b-484e-9717-7e5c785a634f"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "4230fb3f-2bc4-44d6-b196-a0f5e9249722"
                      }
                    ],
                    "activeCells": {},
                    "id": "b72fc63f-7985-461e-aea4-486b90baf78b"
                  }
                ],
                "id": "945aa563-0fe4-48c6-a4fe-ca972998c305"
              },
              {
                "type": "comment",
                "text": "## Single",
                "id": "a5037074-a916-48e5-86f7-dbc79e6aa01a"
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
                        "id": "7ca00a54-01f2-4519-a9a7-c3638c213ca6"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "ba877452-c6f1-46c0-b6e7-1b2b8ae0bfcd"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "b025c75c-883d-463b-b5ba-5fa824917e23"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "a6474b31-cdbf-4720-a272-ce3f421c8631"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "145b50d0-97fd-44e8-ba0f-6cee4480e0ec"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "7b19e52e-535d-4c3a-81ca-176e4d1ef3ab"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "11307bec-2cde-4f65-be8d-96f6a72eae60"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "f882c2da-6fd9-40ef-a078-53a84760e71c"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "b1816e2e-fb4a-4487-b628-5a16a1717f61"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "5921e909-53f1-4406-ae7c-c4ffc3d7471f"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "c652f746-de78-49a8-bc1c-9626a1389b3b"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "0cfaaf47-3a76-46af-8e58-55bb36484bfc"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "f9874798-d33b-4d21-849e-4ce36045b08b"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "8b2fe82e-8a50-4415-a080-b28485657bed"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "b7822311-3219-4f6d-b5f9-8fb77b405b69"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "badd5780-874c-4bf6-9c36-d27988bb1d70"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "f63346a3-d111-4a90-96d2-f3057b7b11a8"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "12b37753-47ac-4ac2-ad27-8dc38e700713"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "6638d8e3-6c2f-4b83-8b3a-2f3558061ddd"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "fe2ad646-4185-44ac-b053-929925b3d1eb"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "9b74e192-0f4a-4812-902c-4448d99209e7"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "827f722c-1aaa-4ca4-a51f-878cb5868279"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "bcab9492-c294-42b7-8815-195c81210d55"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "5c933876-5efb-4626-a07b-1dbb089532d3"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "f778f90e-2b2f-4fe6-90e4-3a5549256e6a"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "76c95e78-a16a-4091-b7c2-4b177cb6ca36"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "33fe8ede-e4fb-4aed-92f7-8b6b11f84ca1"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "67813f10-5b3f-40c7-bae5-1c1c0ce64126"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "3c86d3ed-7fdb-4edc-b591-29cfb867d055"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "dd9a4977-4251-4dbd-8517-28bb1c6b6aac"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "e19b7a5d-4d71-43bc-ae5f-c04afb6ea188"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "ff4ac081-b1c1-44a8-bcfb-c0123406d2af"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "b6b72cd0-3ec5-4b20-b823-6502f95ef9b4"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "b4a619db-4496-4b95-ac0f-7e7277146cd3"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "db351cfd-073b-473e-a837-90d510674542"
                      }
                    ],
                    "activeCells": {},
                    "id": "cbb4f023-411f-4f15-a101-1a162253871c"
                  }
                ],
                "id": "3dba20c1-e152-4141-9a0e-b3e31eed7205"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "8a794237-3933-48ab-b2a6-2eed7c64446e"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "6bcee879-eb06-463d-a612-00c3455e2c5e"
              }
            ],
            "activeCells": {},
            "id": "02d71f3f-6c88-4e50-80be-396675c7edd6"
          }
        ],
        "id": "edb69409-c4ec-43f1-8a0c-5f869824361e"
      },
      "sampleMarkdown": "# Sample Specification for EmbeddedChoices\r\n\r\n-> id = 27119e06-31aa-4b29-a865-09fc9c2f91ee\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8769895-06:00\r\n-> tags = \r\n\r\n[EmbeddedChoices]\r\n|> Inline\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> MandatorySelection\r\n    [MandatorySelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> Simple\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> Single\r\n    [SingleSelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "c3f59fca-d943-4626-bfce-5c7721ac7b09"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "714e2d97-0f4f-41fb-9dc4-34b3b320a12b"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "d84ad2cc-1696-4635-99cd-a428bbbf1e39"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "31e4801b-ea74-4f62-a553-8e6aff08b5e0"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "d2499b93-2c0f-4581-9039-bc290d30d644"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "669e884b-41d9-476e-bc24-17ab90cd863d"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "bd0c1277-5856-46dd-a0eb-25823d8ee7f3"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "f1488b75-5414-440c-b220-65cb10dbfed1"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "1484fd3e-e3ef-4e89-9983-345ce38aa48a"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "bab1564c-08a9-4bb4-b5fb-fd1a0b0e1dd9"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "c9f8d0ba-da8e-4f04-a75f-37593db63643"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "a6176b9e-f65c-42db-82a7-d57f5fdceead"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "92ff9e8d-b1ca-411c-b5cc-24296af169d8"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "42a7cccf-b199-4566-939e-53b288a92a62"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "1d4524d9-e0ef-43cc-ab71-27aa218ac556"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "5dbaa509-68a6-444c-9388-f7602fbb7d2a"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "db8679b4-2887-4e58-90b3-f97f2cc9d016"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "5abfa0a7-cd06-4ea5-b36c-3bc8b15fbbd3"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "d03d118f-6399-4f06-be68-d96572452288"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "b579d89d-d2bd-4055-a87f-33ad5798d546"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "f99a6af7-3de5-401f-ad8a-5539104ddcbb"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "694a910b-42ec-449f-b12f-358e67c4b0ec"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "f4de6ecf-69a4-4872-985f-4881b7257c6d"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "a386cc8d-697c-4079-9bb1-32c94295fc90"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "95e3f3ac-2043-4b0d-818b-4acd2f609227"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "25fe7a94-ff80-4686-ae3c-d9302335a266"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "1ac6ec7a-8a88-4fd5-8cdb-4a6af81bf5d3"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "1ca55e41-4bd9-45df-acc3-9bfea14364a0"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "c6593f8d-4c9b-47b0-bc51-b2a22196bfaf"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "9d27198f-428a-4a09-93c3-c75d95e24b99"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "9b0ce63a-1175-4fe0-9783-e9a1c1f6c48a"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "6ff0c12c-308b-425e-8bd6-df61ee36011f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "d4a9f54b-ccfc-4098-8d90-8d23944f2362"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "bcf6f1b9-97e7-4c08-8588-db1588bbd19e"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "28efccb9-3f85-43f8-bb27-540e3fc66bad"
              }
            ],
            "activeCells": {},
            "id": "a268a1af-f2eb-46c3-9214-613d4dfda841"
          }
        ],
        "id": "4c1f6f82-6011-47a1-bbf3-3ac2d4072d59"
      },
      "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = ce2a7e1b-372c-4a8d-9257-19603e86150e\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8769895-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "8bec38f5-14cb-4132-8ab7-ad2ad8677e7d"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "14fef0f9-060f-43a3-b375-78025f1469e8"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "bf07cf07-7a4d-44a1-ae5a-94442c07a4d3"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "4d174a39-7b81-4e16-babd-2a8440b136dd"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "07da223d-f4bf-435f-bc92-984248bb4fa2"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "b0a4da1a-bd8e-4b31-bd67-24f27db14dda"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "7036bc48-6342-4bba-afcf-4cac96b5b6c9"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "275ba2ce-7769-49ad-8a82-b11c596aa337"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "c42ae121-e7ae-4449-9d8c-4c250ad9d022"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "d264740b-9e06-4df5-95ae-cd2f4cb7059e"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "b494d2bb-a3b5-49fe-acbb-814b5381d221"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "2cab4d22-5f50-4031-bef0-cfed81d939b5"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "baebb1db-7f21-46de-855f-4366f9662116"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "db4b082a-88b6-4c9c-bc7f-035655bbd05e"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "1bf06a9b-4f91-42a0-90d3-23e0affba844"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "200fc5e3-8222-4b6f-829e-da300b1052c8"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "7199d9ae-71bb-43da-a0e4-1bfd713cf4f3"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "c49eb8ab-fc0d-4904-bcab-4a53b5189a87"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "9e4d4b14-c1d3-45bd-aad3-b3e54c38359f"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "176cd12c-d315-4ae9-9280-b88a24037c78"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "a0e67e09-13d9-4292-b29f-0434029aadc1"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "9910f3a6-637b-40f6-92dd-e82f1f8ee1ad"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "fb85a2c8-0953-4bd4-89a6-6b702e2cabdf"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "30dd2888-67dc-42a3-8343-279f3642c638"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "a86bd8b0-e61c-4a99-a3c5-41a4fee3742f"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "4cbbb4d4-6822-4380-9fa3-1b4557ca0bcb"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "7d6f4fa8-f8e7-4b93-b791-828f71977527"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "af01b1f1-6104-47f1-98cb-4d0b4511a3b7"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "e74ff012-4b2a-4f32-9bcc-3586ba8c4c2c"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "f6cbd187-3a15-46a2-ba79-af32b714e864"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "94307b29-aa1e-4018-9b81-5f17f84bf826"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f13e2ceb-a628-4a9d-8287-ea768f9e26d2"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "3a36c34d-2989-4391-a2b3-3773a9fdc195"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "6950f0a1-f6cf-4776-8efc-a9e1b5ac4c7a"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "2e070c5b-e20a-47c4-984e-1a0203b2d6e7"
              }
            ],
            "activeCells": {},
            "id": "1aba5d4a-7a76-4322-950a-04d0d920b0f4"
          }
        ],
        "id": "82ad0499-66b4-4c93-8f24-028d1af90d61"
      },
      "sampleMarkdown": "# Sample Specification for OneOrMoreSelection\r\n\r\n-> id = 450e1b2b-37a7-4801-85fd-f72001b5fa62\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8779895-06:00\r\n-> tags = \r\n\r\n[OneOrMoreSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "9c110ab2-ff35-4662-b1eb-08fa5ef35e1f"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "b75f8b68-03da-4f57-bd49-f44bce5c81e5"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "bed1b2ac-a918-414c-b043-4585adbdf954"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "2399e0d7-37f4-47af-ad6c-17f6f309c514"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "48eae6eb-d388-42d8-a0be-25242e5cded1"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "0b0d1fec-4f1a-45df-adea-714061e7269f"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "2358a7cf-6bbb-4e23-a200-e2a0319d9940"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "61fe2191-99d2-44ea-bc1b-b9a85453df61"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "5b42a226-4096-444c-86fe-ea9b56c05607"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "6e6786f4-868e-4445-992c-2cd680462817"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "c70e0e63-c662-4a63-83f0-4cdba7101a8f"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "6c5b8d52-e66f-4529-adf5-76a18392d4cb"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "6630df0e-eb54-4990-b515-bca866d514bd"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "02726284-84fd-4165-9a13-987ee3624589"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "52e00f6f-36e2-49f1-8d00-464e0a0ba6f3"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "db630b65-6dc7-40fc-9466-05443943ba2a"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "22b5b5f0-7ce3-42f1-a2d1-50c12c635789"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "ba28353b-15a0-485c-8660-91847250a1db"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "5baac8eb-2395-458c-ac56-1800ff539844"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "11e06e95-be10-4f51-90e3-12d402ca6708"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "dba4dd64-b8b9-4f7f-96d3-8438a06bdfe0"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "dc5b6444-c611-4b06-949b-8794fc72c62d"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "10583118-1089-4ae6-963f-1b7510999c54"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "0b2e2455-23a1-4b63-92f6-ca71fe37c722"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "c4b63cf0-07fb-42f4-9459-bcc9f47d6615"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "ebc94123-f541-4ae5-a8c2-3ec394833ed1"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "48c69b6a-525a-4c58-b5ca-076319ee3411"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "7201658a-9c2b-4c4c-9972-27be4f5ebf25"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "3eba09cc-065a-48bd-b803-4772572fa83c"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "cba975a5-009e-454a-993d-df740537f5bb"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "a9b095e9-4b3f-4ca5-94ca-7ad08690ba14"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "16a476ac-3fd5-4603-8b04-43f0d48f1fca"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9040050b-458d-4e07-b891-e04dd67ea6d3"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "9e019af7-01de-44a0-bcf7-7ba2e940a203"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "570d9754-9b17-44f4-b190-3557cbca9b22"
              }
            ],
            "activeCells": {},
            "id": "cdca1654-7a01-4535-b558-e0702a1306e5"
          }
        ],
        "id": "f02f4a6b-6876-4d7f-add2-cca94a156882"
      },
      "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = b7e20b9c-9571-4c06-aa8a-99d1244c6806\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8779895-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "b003d990-4052-4a8b-b14f-597560d91c03"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "36a61035-afc1-4ac5-9bef-220826cc113d"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "04f663dd-df13-4444-89db-924eca810322"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "9f9056d6-3082-4df8-afb0-cf4d23c8cb52"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "63101e25-ad1a-4c43-ae0d-3db7eb4af961"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "1972153f-eb0f-45ec-8b52-3adf7e90371c"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "bdae1918-9323-4075-b7f4-f1602f5ec656"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "19b2e1c9-e543-448e-823b-f0dbdb2c5803"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "fe30a1d6-223f-4e18-9359-2f60e7114127"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "b1d5a8fe-9926-4b54-a144-df6b3ec9e806"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "c3a2c67e-2ade-4a8f-943a-d74ef1641121"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "ab132f24-ba54-4d9a-8b0b-b3fedbd42b28"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "3c0d1f0c-6efb-46f0-8484-1136ca0807b4"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "e9690a22-4db9-43fa-b8d2-ae293d48e02b"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "e6871b48-7f69-4ed4-aed0-8d2d95a38357"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "bda9de69-afa1-49cf-be5a-a854d483c3c1"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "31ae9a00-9936-44c5-98bb-ae769805f982"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "4bad72c9-c982-442c-ab17-b55495f87260"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "27ce8c07-109f-4f82-b591-9a0ab9fd5e0a"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "86eb3eb0-54b3-4dc0-88f5-28dcaf6b1468"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "e673a596-d5ae-4498-96c4-a12b931cf438"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "702257a9-c085-4ec8-8118-8d2bbeebfc91"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "f3e8da7e-310e-4a34-9538-958d1e3ce5f3"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "6101e4bc-5615-400e-a54d-7b0ce1689885"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "81cc5ba0-ed06-4f68-83f4-84f55a5c06c0"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "0b801f87-ff93-45a5-9aee-face392cf303"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "51bab675-c1f6-47f8-ba89-1b58352b9c7f"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "dfbbfba4-12ad-43f4-bc8f-ef7ca0f04139"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "78de8a66-6826-4733-9ef8-c91d2b521c23"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "496c1aea-9dca-4174-bcc0-c30b19d573bf"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "25b68986-6f99-43a5-afee-28919e911feb"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "40d440dd-c0ff-4227-b705-204165edca7e"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "bce9fdc1-02e4-4cc6-bab8-360662358824"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "85d32260-3c54-4a8d-97e3-c1d23f7ea32d"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "45a507a3-64d0-47db-82cd-4cfe0160ee58"
              }
            ],
            "activeCells": {},
            "id": "661a41c4-223f-44a7-ba7b-e2c7700f5996"
          }
        ],
        "id": "59df4dc5-786e-43e7-8121-da83c719594a"
      },
      "sampleMarkdown": "# Sample Specification for Sentence\r\n\r\n-> id = d38bb02b-2a2b-4ee8-aceb-d6617d427e60\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8779895-06:00\r\n-> tags = \r\n\r\n[Sentence]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "e93ea425-8739-46dc-89c5-4b85bcba5513"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "d7aeb338-4698-4371-99b4-6a1a21d42b04"
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
                        "id": "6c30c255-7812-451f-9a2c-9b2f6a4cc0ed"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "f3439a77-9fcb-450f-a2dd-d5e6d0bfc639"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "7b8fe018-78a8-42d2-a33e-a8da50a85bf0"
                      }
                    ],
                    "activeCells": {},
                    "id": "966da398-551f-4f48-9af5-39f0553ca04d"
                  }
                ],
                "id": "a3c24213-3303-450a-84fa-51a257f6a767"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "0cc09b3b-d8ea-4152-ab0d-bd7373e12bf0"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "690f50ed-8d5e-4758-acf1-e93c39a76518"
              }
            ],
            "activeCells": {},
            "id": "bd6525e6-0ef4-4f37-9d0d-7044919c5c57"
          }
        ],
        "id": "4dd9b57d-5b2c-4b34-9985-2226274c67bc"
      },
      "sampleMarkdown": "# Sample Specification for DataTable\r\n\r\n-> id = 810cd540-a398-4704-bfe3-9c7bb74c63e5\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8779895-06:00\r\n-> tags = \r\n\r\n[DataTable]\r\n|> TheDataIs\r\n    [Rows]\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "8c4c08f0-5c8e-457b-9682-e6dff003401b"
              },
              {
                "type": "comment",
                "text": "## AddName",
                "id": "041340eb-ec3c-4dc4-9a5f-1fdf5e7e7bac"
              },
              {
                "key": "AddName",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "06da290d-a791-4302-b03c-2561e668c019"
              },
              {
                "type": "comment",
                "text": "## InvoiceDetailsAre",
                "id": "f7b393c1-559f-4145-a440-bf5179f9f84b"
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
                        "id": "022dd208-95cb-42b9-8034-2843904566fc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "d01e9376-ac99-42f7-b202-c4d92f899e79"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "b6ab86ee-e25b-4368-88d1-03c1e7dfa1a6"
                      }
                    ],
                    "activeCells": {},
                    "id": "4047c0b8-248c-47a6-8c43-339219c8d39d"
                  }
                ],
                "id": "9319bcda-aabf-4cc5-9da7-d2acb0878ce5"
              },
              {
                "type": "comment",
                "text": "## OrderedDetailsAre",
                "id": "54eff3bc-f016-4d30-83c6-f38c67faf526"
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
                        "id": "c9ef6dca-dba7-4e8f-8082-b3a91e3f2784"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "29659e37-a325-4a95-bd33-5f3bc0d4cd02"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "f88004ab-c246-4a32-a02b-5b40d581a477"
                      }
                    ],
                    "activeCells": {},
                    "id": "aa7fa5f0-f0b0-4081-8b89-d85f14206d28"
                  }
                ],
                "id": "b2896e0a-ffa1-4896-b96f-5525144586e7"
              },
              {
                "type": "comment",
                "text": "## OrderedStringSet",
                "id": "60c204f8-7b3a-42c4-aed0-074d48e67b09"
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
                        "id": "3b966d67-5c1c-4a41-8fe1-62d907343d91"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "db6721cf-7e92-425b-a756-b3c5b50c2987"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "ab91adae-efe2-413d-b892-c66d983ddb14"
                      }
                    ],
                    "activeCells": {},
                    "id": "96d749dc-ca6d-46bf-8c80-5dd441fca2e7"
                  }
                ],
                "id": "7d3e9b3f-2412-4806-be0f-1ccab7c2dc04"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "1780c951-c838-4606-9376-b13d28daca0f"
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
                        "id": "56569310-26cf-43d8-aad8-e815b79bfe85"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "53b4e220-8674-4eb5-a4ae-1fe5f885a7e0"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "67be7ff6-3915-461d-a215-4eb003cc33c3"
                      }
                    ],
                    "activeCells": {},
                    "id": "1519d6f3-8371-4c40-b341-78a87778cd75"
                  }
                ],
                "id": "a3a8cef6-cdd7-4071-9cd1-40eb3fd69518"
              },
              {
                "type": "comment",
                "text": "## ThrowsErrorOnDataFetch",
                "id": "f602e544-ef54-4ab7-b968-6bde2346e346"
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
                        "id": "3ed45195-ef26-4124-a9df-c6bf159ac7e9"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "d8109f46-a228-4aa0-8a1c-3ed978d72ae1"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "108ddb8f-d51c-4b01-a8c1-cdcdd011e12a"
                      }
                    ],
                    "activeCells": {},
                    "id": "d510ad12-8250-46b7-8485-6b2f0416c2d6"
                  }
                ],
                "id": "c31ae72f-665e-431f-85d8-ae0a00728900"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "d830bf5d-5360-4632-ac09-9af0a715de16"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "93a61db6-720e-4e91-8d15-e31cc9ad5fdf"
              },
              {
                "type": "comment",
                "text": "## UnorderedDetailsAre",
                "id": "63e6a9b7-45ac-4f67-a218-5d33c5f930d3"
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
                        "id": "3fb51434-055c-4258-b59c-5cf613af3995"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "a884bbc0-4e2a-416e-a174-6d0fe03f60fd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "381275b1-a51d-44ae-89af-d4f6b65dc06b"
                      }
                    ],
                    "activeCells": {},
                    "id": "0ee0504a-8640-449c-a0c7-20721b1b66a7"
                  }
                ],
                "id": "142112c7-fc8c-4b73-a743-2886ad0bd727"
              },
              {
                "type": "comment",
                "text": "## UnorderedStringSet",
                "id": "1c5ff29d-0dcf-432c-9e67-dcae2fac7aaa"
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
                        "id": "229dfd65-e009-4ef6-a7a6-b029ff23af19"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "9fc6a78d-3736-4b8d-9215-b8c6145c4a4e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "cad08f4e-4cd3-4e79-af2e-bab1a55fed86"
                      }
                    ],
                    "activeCells": {},
                    "id": "adecd0fb-4111-4a9a-97a6-c82f6420df75"
                  }
                ],
                "id": "9cc99521-013b-4e0b-8091-89aea0b8ad12"
              }
            ],
            "activeCells": {},
            "id": "dfe3c4d3-e9d8-4c14-8f1a-976d032363c5"
          }
        ],
        "id": "c25fecf8-bbc2-4b79-ae09-f3f52bd1b635"
      },
      "sampleMarkdown": "# Sample Specification for Sets\r\n\r\n-> id = addcaea0-e2f0-43e6-9d24-527f2b5641e4\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8789895-06:00\r\n-> tags = \r\n\r\n[Sets]\r\n|> AddName name=name\r\n|> InvoiceDetailsAre\r\n    [Rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> OrderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n\r\n|> OrderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n|> TheDataIs\r\n    [name]\r\n    |name|\r\n    |name|\r\n    |name|\r\n    |name|\r\n\r\n|> ThrowsErrorOnDataFetch\r\n    [rows]\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n\r\n|> TODO message=message\r\n|> UnorderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> UnorderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n~~~\r\n",
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
                "id": "aa643cc2-0496-4f5b-ab9c-7e99c874fcd0"
              },
              {
                "type": "comment",
                "text": "## ReadText",
                "id": "f36148e1-3331-42c6-a168-e2ea6b9910ee"
              },
              {
                "key": "ReadText",
                "cells": {
                  "text": "text"
                },
                "collections": [],
                "id": "a4660d24-5d86-48cd-bb03-375a960803cc"
              },
              {
                "type": "comment",
                "text": "## Slow",
                "id": "928b0e14-7938-4080-92e7-ed981fd9441c"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "adb2e642-06ed-4f32-93d7-7a4b4782bb95"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "ac85c37c-760a-4e21-94aa-d1ccdf4a203b"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9a2d60a8-e908-4c7a-a460-7508e4c84c0e"
              }
            ],
            "activeCells": {},
            "id": "153f4be5-a053-456b-9d95-5400950dba76"
          }
        ],
        "id": "c4b48195-cb7f-441b-b3c9-b818330f05dd"
      },
      "sampleMarkdown": "# Sample Specification for SometimesSlow\r\n\r\n-> id = b25c5202-3975-480a-9c6e-9061b9c56bd2\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8789895-06:00\r\n-> tags = \r\n\r\n[SometimesSlow]\r\n|> ReadText text=text\r\n|> Slow\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "c437559f-de21-4554-8590-ac5ab7f9db7e"
              },
              {
                "type": "comment",
                "text": "## AfterThrowsError",
                "id": "de79a5be-e889-4bbb-a138-b5b48a3050f9"
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
                        "id": "6d1ee90e-615c-4882-a4d9-7e801c40fa60"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "541723e0-6f25-435c-929d-c5bf290a5213"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "ee98990e-bac0-4731-aa7d-a353e255fef5"
                      }
                    ],
                    "activeCells": {},
                    "id": "30f08344-1d9f-4d77-871e-e9d8e28a539c"
                  }
                ],
                "id": "6de5daad-1c3c-4126-8f52-28244e070307"
              },
              {
                "type": "comment",
                "text": "## BeforeThrowsError",
                "id": "94615633-cf1d-48bb-bc26-a05db3a11ccc"
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
                        "id": "5f54d3be-1ecc-47d9-a04f-a139c422f9b5"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "41bbf534-7a6c-41c5-863e-d2e741392f86"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "34528f5a-a1cd-442e-b547-ed8ca3295026"
                      }
                    ],
                    "activeCells": {},
                    "id": "18aa2819-d8e7-498a-a086-90989fb2b113"
                  }
                ],
                "id": "1549a7ed-c6e0-4ecf-8a46-c5203587070b"
              },
              {
                "type": "comment",
                "text": "## decisions",
                "id": "21187855-9edd-44de-8015-6ebd134f4568"
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
                        "id": "d31cacff-5632-45a7-8120-3e5cd92efaa3"
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
                        "id": "3a80afff-f517-491a-9d99-15cfb475dd60"
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
                        "id": "7d949085-8611-4187-adde-e6c99c9241ad"
                      }
                    ],
                    "activeCells": {},
                    "id": "754e8325-cb0d-4c16-9775-fb0d6f0d3918"
                  }
                ],
                "id": "984c4941-0b92-493d-a742-0a181df736a9"
              },
              {
                "type": "comment",
                "text": "## Divide",
                "id": "cdc94a5e-e745-4039-9378-276fc9835673"
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
                        "id": "ff995352-a86c-410d-8b7a-16e1b90cc62e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "bce2406f-5b4d-4f2d-af52-6efdb4405118"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "62a53239-ec63-4675-a813-3e8fd7d6ec4a"
                      }
                    ],
                    "activeCells": {},
                    "id": "daefdb98-187e-4224-b64c-d23386820c83"
                  }
                ],
                "id": "07c7ea15-3d06-45f1-852d-3c24deedda50"
              },
              {
                "type": "comment",
                "text": "## IsPositive",
                "id": "190a82c6-c234-4d3a-8b00-d8798923a001"
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
                        "id": "9dac30cc-1cfb-4af3-bef3-9cb2dd112a43"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "61d89b56-2355-490f-ab65-c2ca00387114"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "c350a66f-6677-4912-bc3f-2915864c9f99"
                      }
                    ],
                    "activeCells": {},
                    "id": "f0a458d5-18ac-43e5-bd00-552b6498c407"
                  }
                ],
                "id": "ba40d698-2a80-4c22-b400-c3c0ae3402df"
              },
              {
                "type": "comment",
                "text": "## Sum",
                "id": "d07e8dae-39e5-42af-ae67-88e84b4d99fe"
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
                        "id": "ea6d8d3f-3f47-401a-8fee-2a155c34dd1f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "66c4b14a-b8c6-4b70-b070-52096f56fa36"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "767a09dc-8512-4a40-898e-13898f274c0d"
                      }
                    ],
                    "activeCells": {},
                    "id": "9295cb5a-ac67-4445-a525-bd66fb94614b"
                  }
                ],
                "id": "97bb5412-2059-404a-9f64-df44fda51c16"
              },
              {
                "type": "comment",
                "text": "## SumInternal",
                "id": "2a703c62-aa83-4d34-893a-5feccabe4854"
              },
              {
                "key": "SumInternal",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "97eb16ce-9329-4830-bbee-0505816ea4e4"
              },
              {
                "type": "comment",
                "text": "## TableWithLotsOfOptions",
                "id": "b3fce1bf-9b06-47ea-858a-7152ca96337f"
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
                        "id": "854cbf45-3d4f-4568-bc54-c4f11d3250cb"
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
                        "id": "5125cab3-f6f4-4e90-ac9c-75c790afe45a"
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
                        "id": "f9f1ab17-8324-449d-8413-5d64b454ade5"
                      }
                    ],
                    "activeCells": {},
                    "id": "8962c576-00ac-4048-9c12-9eec9d72422e"
                  }
                ],
                "id": "38524848-8ba8-4e94-b7c0-bece50a17119"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "909bc7f1-44cb-4c90-9183-b85ef8c80af1"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "dd065ed8-44a3-4536-952f-7c2965f07374"
              }
            ],
            "activeCells": {},
            "id": "4b88acd6-b520-4812-a1ec-b6ffede9ba96"
          }
        ],
        "id": "33da2e6d-5420-4816-a50d-5c93a90d7dde"
      },
      "sampleMarkdown": "# Sample Specification for Table\r\n\r\n-> id = 26e415e0-a0ff-47bf-9c24-9170ce72043f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:55:44.8789895-06:00\r\n-> tags = \r\n\r\n[Table]\r\n|> AfterThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> BeforeThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> decisions\r\n    [table]\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n\r\n|> Divide\r\n    [Rows]\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n\r\n|> IsPositive\r\n    [table]\r\n    |number|IsEven|\r\n    |number|true  |\r\n    |number|true  |\r\n    |number|true  |\r\n\r\n|> Sum\r\n    [sum]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> SumInternal x=x, y=y, sum=sum\r\n|> TableWithLotsOfOptions\r\n    [table]\r\n    |a|b|c|d|e|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    }
  ],
  "time": "1/11/2017 6:55 PM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}