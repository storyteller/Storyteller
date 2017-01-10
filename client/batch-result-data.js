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
            "id": "3b871230-81bf-4a14-91d1-ac35d8573738",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e85a5ba5-fb67-4584-b6b0-8a9856aab3fe",
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
            "id": "2a7feb8f-2c29-490e-86bf-fe09a62cc826",
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
            "id": "899bcd8a-95a0-4861-999a-411728700d11",
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
            "id": "78948dd2-50a6-47c8-9bcf-41a715c4dea4",
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
            "id": "7e4128b7-916d-40d0-86c0-064d5a9a6970",
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
            "id": "48dec1df-d4cd-4cef-a82c-e95695549fbf",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()",
            "cells": [],
            "id": "f41ff3c1-1b23-43e7-bf35-f87dc2899a3b",
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
            "id": "3b871230-81bf-4a14-91d1-ac35d8573738",
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
            "end": 991,
            "duration": 991
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:SetUp",
            "start": 978,
            "end": 981,
            "duration": 3
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 982,
            "end": 984,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 984,
            "end": 986,
            "duration": 2
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 986,
            "end": 986,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 986,
            "end": 987,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 987,
            "end": 987,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 988,
            "end": 988,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 988,
            "end": 988,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 988,
            "end": 988,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 988,
            "end": 988,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 988,
            "end": 988,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 988,
            "end": 989,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 989,
            "end": 989,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 989,
            "end": 990,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 990,
            "end": 990,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 990,
            "end": 990,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 990,
            "end": 990,
            "duration": 0
          }
        ],
        "duration": 991,
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
        "time": "12:32 PM",
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
                "id": "e85a5ba5-fb67-4584-b6b0-8a9856aab3fe"
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
                        "id": "2a7feb8f-2c29-490e-86bf-fe09a62cc826"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "01f88253-dc44-47f1-a145-435cd5bbf599"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "899bcd8a-95a0-4861-999a-411728700d11"
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
                        "id": "78948dd2-50a6-47c8-9bcf-41a715c4dea4"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "7e4128b7-916d-40d0-86c0-064d5a9a6970"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "48dec1df-d4cd-4cef-a82c-e95695549fbf"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "f41ff3c1-1b23-43e7-bf35-f87dc2899a3b"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "2a2ad155-8309-4fa7-a8b0-675ffa6b8375"
              }
            ],
            "activeCells": {},
            "id": "3b871230-81bf-4a14-91d1-ac35d8573738"
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
            "id": "059659a2-07b3-4874-bdae-cf6de4006128",
            "spec": "general1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c6db6377-3033-4cf4-8f22-ec776dee489a",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c6db6377-3033-4cf4-8f22-ec776dee489a",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c6db6377-3033-4cf4-8f22-ec776dee489a",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c6db6377-3033-4cf4-8f22-ec776dee489a",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c6db6377-3033-4cf4-8f22-ec776dee489a",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c6db6377-3033-4cf4-8f22-ec776dee489a",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c6db6377-3033-4cf4-8f22-ec776dee489a",
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
            "id": "b0ded35a-2f47-4dc1-b50f-a98198cd482f",
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
            "id": "b0ded35a-2f47-4dc1-b50f-a98198cd482f",
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
            "id": "b0ded35a-2f47-4dc1-b50f-a98198cd482f",
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
            "id": "204520ca-829a-4748-a618-da09682769f7",
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
            "id": "204520ca-829a-4748-a618-da09682769f7",
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
            "id": "204520ca-829a-4748-a618-da09682769f7",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "059659a2-07b3-4874-bdae-cf6de4006128",
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
            "end": 4,
            "duration": 4
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
            "start": 1,
            "end": 1,
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
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "CheckObject:TearDown",
            "start": 4,
            "end": 4,
            "duration": 0
          }
        ],
        "duration": 4,
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
        "time": "12:32 PM",
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
                "id": "c6db6377-3033-4cf4-8f22-ec776dee489a"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "b0ded35a-2f47-4dc1-b50f-a98198cd482f"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "204520ca-829a-4748-a618-da09682769f7"
              }
            ],
            "activeCells": {},
            "id": "059659a2-07b3-4874-bdae-cf6de4006128"
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
            "id": "c060dd85-b7e6-425e-bd4c-2d7a65aa5640",
            "spec": "SometimesSlow",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5e92cbff-e270-4bfc-b8ec-b80ce97090b9",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c060dd85-b7e6-425e-bd4c-2d7a65aa5640",
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
        "time": "12:32 PM",
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
                "id": "9e3db4ec-747b-4b5c-8755-64b29351a511"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "5e92cbff-e270-4bfc-b8ec-b80ce97090b9"
              }
            ],
            "activeCells": {},
            "id": "c060dd85-b7e6-425e-bd4c-2d7a65aa5640"
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
            "id": "8b55240e-f454-4cd9-91cb-811391254ab6",
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
            "id": "5bcb564b-010c-4657-b648-423f600c6ced",
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
            "id": "aec9264f-ec9b-40e7-b7a3-f9877af2cf48",
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
            "id": "d7ff967a-6d42-4656-bbb5-3f5bc2076a17",
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
            "id": "26f6324a-2efa-42d1-9429-b195019d90ae",
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
            "id": "1abd6f41-9618-4a11-b806-26b4b1bc5bdf",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8b55240e-f454-4cd9-91cb-811391254ab6",
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
        "time": "12:32 PM",
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
                "id": "5bcb564b-010c-4657-b648-423f600c6ced"
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
                        "id": "aec9264f-ec9b-40e7-b7a3-f9877af2cf48"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "d7ff967a-6d42-4656-bbb5-3f5bc2076a17"
                      }
                    ],
                    "activeCells": {},
                    "id": "ece9fc3d-acb8-4daf-8178-cc0e3e64659b"
                  }
                ],
                "id": "3f90e7a7-ccbf-409b-99f2-e0e3ec363a65"
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
                        "id": "26f6324a-2efa-42d1-9429-b195019d90ae"
                      }
                    ],
                    "activeCells": {},
                    "id": "8391e265-0809-4d73-a544-8ba1471e3623"
                  }
                ],
                "id": "b7eae90a-f99d-40de-bc36-f4b59cd8af73"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "1abd6f41-9618-4a11-b806-26b4b1bc5bdf"
              }
            ],
            "activeCells": {},
            "id": "8b55240e-f454-4cd9-91cb-811391254ab6"
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
            "id": "4c300343-aff3-4ce9-9ae6-9b733976ddfc",
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
        "time": "12:32 PM",
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
                "id": "93a2b837-3d0b-4906-9876-2917b0e4e996"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "2e999cc0-a1bb-4f01-b57a-e2fe074307b5"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "8bc47cac-728c-4a4b-b5ac-5c12343a68f3"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "3c41481a-9958-470d-805c-af8e9fc3cad8"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "815988ff-7fba-4203-ba3f-f97dadf3c98b"
              }
            ],
            "activeCells": {},
            "id": "4c300343-aff3-4ce9-9ae6-9b733976ddfc"
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
            "id": "ea9a5684-8939-42d2-9870-af5fd79261e0",
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
            "id": "13d563f6-ba1a-4aa4-b482-317a727b67b7",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ea9a5684-8939-42d2-9870-af5fd79261e0",
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
        "time": "12:32 PM",
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
                "id": "c3d354c1-2904-41b3-ad74-4830530f39fc"
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
                        "id": "13d563f6-ba1a-4aa4-b482-317a727b67b7"
                      }
                    ],
                    "activeCells": {},
                    "id": "39e4e0dd-d982-404b-b677-63f84aac2938"
                  }
                ],
                "id": "6111009d-1ec5-44e0-8082-af19d433aa81"
              }
            ],
            "activeCells": {},
            "id": "ea9a5684-8939-42d2-9870-af5fd79261e0"
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
            "id": "708f9466-631d-49c2-b7f8-44ccc9618cb4",
            "spec": "general4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "6dfae442-51a5-4462-b420-d4ab0c9811bb",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "9e77148f-69fe-4fb6-ae14-fe09f0a3b5eb",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "ce0f99cc-a88c-4089-bef8-bd94068705bc",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "708f9466-631d-49c2-b7f8-44ccc9618cb4",
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
        "time": "12:32 PM",
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
                "id": "6dfae442-51a5-4462-b420-d4ab0c9811bb"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "9e77148f-69fe-4fb6-ae14-fe09f0a3b5eb"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "ce0f99cc-a88c-4089-bef8-bd94068705bc"
              }
            ],
            "activeCells": {},
            "id": "708f9466-631d-49c2-b7f8-44ccc9618cb4"
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
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#39;setup&#39; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#39;FixtureThatDoesNotExist&#39; does not exist\r\n   at StoryTeller.Model.MissingFixture.SetUp()\r\n   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x)\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass0_0.&lt;AsCritical&gt;b__0(ISpecContext c)\r\n   --- End of inner exception stack trace ---\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass0_0.&lt;AsCritical&gt;b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "12:32 PM",
        "counts": {
          "rights": 0,
          "wrongs": 0,
          "errors": 0,
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
            "id": "2853450c-b6a6-47cb-99b0-99002057c06d",
            "spec": "paragraph1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2f0cd0b6-715d-46c8-91d2-c6bf5f4e55fa",
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
            "id": "2f0cd0b6-715d-46c8-91d2-c6bf5f4e55fa",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2f0cd0b6-715d-46c8-91d2-c6bf5f4e55fa",
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
            "id": "2f0cd0b6-715d-46c8-91d2-c6bf5f4e55fa",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2f0cd0b6-715d-46c8-91d2-c6bf5f4e55fa",
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
            "id": "8c47b556-4157-4854-8b76-0e1776b8eb0b",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8c47b556-4157-4854-8b76-0e1776b8eb0b",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8c47b556-4157-4854-8b76-0e1776b8eb0b",
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
            "id": "8c47b556-4157-4854-8b76-0e1776b8eb0b",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8c47b556-4157-4854-8b76-0e1776b8eb0b",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b30038ac-e875-40bf-bfa9-d5987cd29aab",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b30038ac-e875-40bf-bfa9-d5987cd29aab",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b30038ac-e875-40bf-bfa9-d5987cd29aab",
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
            "id": "b30038ac-e875-40bf-bfa9-d5987cd29aab",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b30038ac-e875-40bf-bfa9-d5987cd29aab",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6d87a5f3-7c98-459c-8e89-b3ca4464a6be",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6d87a5f3-7c98-459c-8e89-b3ca4464a6be",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6d87a5f3-7c98-459c-8e89-b3ca4464a6be",
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
            "id": "6d87a5f3-7c98-459c-8e89-b3ca4464a6be",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6d87a5f3-7c98-459c-8e89-b3ca4464a6be",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5b19b9da-59c4-435c-85d3-6a7238e35b66",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5b19b9da-59c4-435c-85d3-6a7238e35b66",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5b19b9da-59c4-435c-85d3-6a7238e35b66",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<>c.<.ctor>b__0_3(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "5b19b9da-59c4-435c-85d3-6a7238e35b66",
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
            "id": "5b19b9da-59c4-435c-85d3-6a7238e35b66",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2853450c-b6a6-47cb-99b0-99002057c06d",
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
            "end": 4,
            "duration": 4
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
            "end": 3,
            "duration": 1
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
            "subject": "AddAndMultiplyThrow:3",
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
            "type": "Fixture",
            "subject": "Composite:TearDown",
            "start": 4,
            "end": 4,
            "duration": 0
          }
        ],
        "duration": 4,
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
        "time": "12:32 PM",
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
                "id": "2f0cd0b6-715d-46c8-91d2-c6bf5f4e55fa"
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
                        "id": "8c47b556-4157-4854-8b76-0e1776b8eb0b"
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
                        "id": "b30038ac-e875-40bf-bfa9-d5987cd29aab"
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
                        "id": "6d87a5f3-7c98-459c-8e89-b3ca4464a6be"
                      }
                    ],
                    "activeCells": {},
                    "id": "a47bf0ed-1540-45b9-8bc2-e55f312158ca"
                  }
                ],
                "id": "1b6879d7-0d2f-48a9-8332-8ea113c8225a"
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
                "id": "5b19b9da-59c4-435c-85d3-6a7238e35b66"
              }
            ],
            "activeCells": {},
            "id": "2853450c-b6a6-47cb-99b0-99002057c06d"
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
            "id": "7f2693f4-2518-4ace-a6c0-8ee1cf7a30ee",
            "spec": "paragraph2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eae78b4e-5bb9-4747-a94b-5190338760c9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eae78b4e-5bb9-4747-a94b-5190338760c9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eae78b4e-5bb9-4747-a94b-5190338760c9",
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
            "id": "eae78b4e-5bb9-4747-a94b-5190338760c9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eae78b4e-5bb9-4747-a94b-5190338760c9",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "efcd2c09-f70a-4a81-a8a2-47e2efd9d568",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "efcd2c09-f70a-4a81-a8a2-47e2efd9d568",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "efcd2c09-f70a-4a81-a8a2-47e2efd9d568",
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
            "id": "efcd2c09-f70a-4a81-a8a2-47e2efd9d568",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "efcd2c09-f70a-4a81-a8a2-47e2efd9d568",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22636841-b82c-4a28-b6a2-83e9f195f88a",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22636841-b82c-4a28-b6a2-83e9f195f88a",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22636841-b82c-4a28-b6a2-83e9f195f88a",
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
            "id": "22636841-b82c-4a28-b6a2-83e9f195f88a",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22636841-b82c-4a28-b6a2-83e9f195f88a",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "89025ae7-4d3c-4858-9d0d-63fec23f3d56",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "89025ae7-4d3c-4858-9d0d-63fec23f3d56",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "89025ae7-4d3c-4858-9d0d-63fec23f3d56",
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
            "id": "89025ae7-4d3c-4858-9d0d-63fec23f3d56",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "89025ae7-4d3c-4858-9d0d-63fec23f3d56",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bf8fdd8c-3aa4-48fb-bb66-9954371626ab",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bf8fdd8c-3aa4-48fb-bb66-9954371626ab",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bf8fdd8c-3aa4-48fb-bb66-9954371626ab",
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
            "id": "bf8fdd8c-3aa4-48fb-bb66-9954371626ab",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bf8fdd8c-3aa4-48fb-bb66-9954371626ab",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7f2693f4-2518-4ace-a6c0-8ee1cf7a30ee",
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
        "time": "12:32 PM",
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
                "id": "eae78b4e-5bb9-4747-a94b-5190338760c9"
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
                "id": "efcd2c09-f70a-4a81-a8a2-47e2efd9d568"
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
                        "id": "22636841-b82c-4a28-b6a2-83e9f195f88a"
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
                        "id": "89025ae7-4d3c-4858-9d0d-63fec23f3d56"
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
                        "id": "bf8fdd8c-3aa4-48fb-bb66-9954371626ab"
                      }
                    ],
                    "activeCells": {},
                    "id": "42fa2176-6098-40b7-9322-c0c8c5ac2bf9"
                  }
                ],
                "id": "387e5893-fd7f-4c28-bcac-df7276f9581e"
              }
            ],
            "activeCells": {},
            "id": "7f2693f4-2518-4ace-a6c0-8ee1cf7a30ee"
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
            "id": "7c4726da-bed8-4af5-a097-7b35bf5f8488",
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
            "id": "27904e3b-12b0-4791-8a7f-4620cea74cd4",
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
            "id": "9a7f1c43-7bf8-46ed-9f28-5a43478f40d2",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7c4726da-bed8-4af5-a097-7b35bf5f8488",
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
        "time": "12:32 PM",
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
                "id": "27904e3b-12b0-4791-8a7f-4620cea74cd4"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "9a7f1c43-7bf8-46ed-9f28-5a43478f40d2"
              }
            ],
            "activeCells": {},
            "id": "7c4726da-bed8-4af5-a097-7b35bf5f8488"
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
            "id": "d7a851de-6682-421e-be42-325843be6bd0",
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
            "id": "d7a851de-6682-421e-be42-325843be6bd0",
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
        "time": "12:32 PM",
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
            "id": "d7a851de-6682-421e-be42-325843be6bd0"
          },
          {
            "type": "comment",
            "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
            "id": "6415a257-176b-4e7c-9d61-1a90d9b840c8"
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
            "id": "e71145d9-5ce2-4edb-9275-ddca3be687b4",
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
            "id": "6d568eee-1d4e-4a91-9bb5-9bde026823a7",
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
            "id": "569e959e-e132-4f1d-af67-e6a8c80a9864",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e71145d9-5ce2-4edb-9275-ddca3be687b4",
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
        "time": "12:32 PM",
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
                "id": "6d568eee-1d4e-4a91-9bb5-9bde026823a7"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "569e959e-e132-4f1d-af67-e6a8c80a9864"
              }
            ],
            "activeCells": {},
            "id": "e71145d9-5ce2-4edb-9275-ddca3be687b4"
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
            "id": "5edbb27c-f46d-4205-b773-f3daa196c977",
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
            "id": "274ec69a-d099-4461-a4a8-2c04bed60cfa",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ea9a2651-f6c6-4a05-b5c7-3661e3737193",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b310ab8c-c8ca-4ebb-a443-26a4f10d87bc",
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
            "id": "f67673b9-a6df-422c-8786-918fddfe5b18",
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
            "id": "5edbb27c-f46d-4205-b773-f3daa196c977",
            "spec": "sentence4",
            "position": "teardown",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d3de3a7a-9622-4d88-a1aa-aa20d71b03e8",
            "spec": "sentence4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d3de3a7a-9622-4d88-a1aa-aa20d71b03e8",
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
            "end": 1,
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
        "time": "12:32 PM",
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
                "id": "0b2a1318-6986-413f-a06a-c331e7013f9b"
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
                "id": "16390880-6bae-4470-9303-ada8d35b43ae"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "274ec69a-d099-4461-a4a8-2c04bed60cfa"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "ea9a2651-f6c6-4a05-b5c7-3661e3737193"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "b310ab8c-c8ca-4ebb-a443-26a4f10d87bc"
              },
              {
                "type": "comment",
                "text": "Correct assertion",
                "id": "811f28c7-958f-4c84-9973-738bd72e5cc6"
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
                "id": "187b4d5f-3c52-4109-8a10-c415c86056c4"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "2",
                  "number2": "2",
                  "sum": "5"
                },
                "collections": [],
                "id": "f67673b9-a6df-422c-8786-918fddfe5b18"
              },
              {
                "type": "comment",
                "text": "Line assertions",
                "id": "4ed925cd-6894-425a-87c9-54cc0d10886c"
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
            "id": "5edbb27c-f46d-4205-b773-f3daa196c977"
          },
          {
            "type": "comment",
            "text": "Comment\r\n\r\nAnother Comment",
            "id": "2167eec2-1b30-454e-9c81-f224881c40c8"
          },
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Show a syntax failure",
                "id": "39b8d612-b21a-424c-ad9c-bfc800e55baf"
              }
            ],
            "activeCells": {},
            "id": "d3de3a7a-9622-4d88-a1aa-aa20d71b03e8"
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
            "id": "51020429-45a9-4610-998f-02638f417db2",
            "spec": "set1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "620ea67d-e44f-48ce-8eba-2cea0f819654",
            "spec": "set1",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ea1c4355-37c6-4012-804c-818abd4d3598",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ea1c4355-37c6-4012-804c-818abd4d3598",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ea1c4355-37c6-4012-804c-818abd4d3598",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ea1c4355-37c6-4012-804c-818abd4d3598",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ea1c4355-37c6-4012-804c-818abd4d3598",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d97a35fb-70ec-460d-b3da-c83a23941254",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d97a35fb-70ec-460d-b3da-c83a23941254",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d97a35fb-70ec-460d-b3da-c83a23941254",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d97a35fb-70ec-460d-b3da-c83a23941254",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d97a35fb-70ec-460d-b3da-c83a23941254",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "23e1b0e5-2d56-496e-bbb6-d5fbe55b7c31",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "23e1b0e5-2d56-496e-bbb6-d5fbe55b7c31",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "23e1b0e5-2d56-496e-bbb6-d5fbe55b7c31",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "23e1b0e5-2d56-496e-bbb6-d5fbe55b7c31",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "23e1b0e5-2d56-496e-bbb6-d5fbe55b7c31",
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
              "ce64ca05-020c-4675-a7e9-5c4e2ac471d2",
              "9ae217e2-7f32-4dfd-a07c-98c1ea3ba569"
            ],
            "missing": [],
            "extras": [
              {
                "Amount": "300.3",
                "Date": "1/12/2017 12:00:00 AM",
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
              "cb0ca7e6-1c51-494a-8ab9-33aad484f791",
              "1548bc35-7084-4575-9376-fbdc23b8dec1",
              "5dbfaf9a-11db-4f60-836f-e8fc2297713e"
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
            "id": "51020429-45a9-4610-998f-02638f417db2",
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
            "end": 9,
            "duration": 0
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
        "time": "12:32 PM",
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
                        "id": "ea1c4355-37c6-4012-804c-818abd4d3598"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "d97a35fb-70ec-460d-b3da-c83a23941254"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "23e1b0e5-2d56-496e-bbb6-d5fbe55b7c31"
                      }
                    ],
                    "activeCells": {},
                    "id": "620ea67d-e44f-48ce-8eba-2cea0f819654"
                  }
                ],
                "id": "dfc012be-5ebd-4b51-9c70-3ad6d1d5ad06"
              },
              {
                "type": "comment",
                "text": "Completely successful ordering",
                "id": "e9e9a9d1-3188-4462-88fa-5fef26937952"
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
                "id": "c64be513-dd22-4887-9974-6cd6984c702e"
              },
              {
                "type": "comment",
                "text": "Out of order",
                "id": "1c7d99f5-9d5d-415d-befd-806f1ed48af3"
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
                "id": "68d576bd-29c2-466c-8fab-e00217111ef8"
              },
              {
                "type": "comment",
                "text": "Should have one exra",
                "id": "cd0228b2-49cb-49ca-bf8d-b3112cb01d01"
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
                        "id": "ce64ca05-020c-4675-a7e9-5c4e2ac471d2"
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
                        "id": "9ae217e2-7f32-4dfd-a07c-98c1ea3ba569"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "c0d38e35-fdf0-470a-a623-b4e293edb678"
              },
              {
                "type": "comment",
                "text": "Should mark one expected result as missing",
                "id": "cedba754-de82-40b9-a205-0937084273ca"
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
                        "id": "cb0ca7e6-1c51-494a-8ab9-33aad484f791"
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
                        "id": "1548bc35-7084-4575-9376-fbdc23b8dec1"
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
                        "id": "5dbfaf9a-11db-4f60-836f-e8fc2297713e"
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
                "id": "fa4fae58-5c6c-4bd4-8b15-2d6f42719e0b"
              },
              {
                "type": "comment",
                "text": "One syntax error",
                "id": "93c59332-088b-4323-bd50-639959b7a394"
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
                        "id": "7566c7e8-5f8c-4a81-b063-9fde1d00ef4f"
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
                        "id": "49d596d4-ea73-4fdb-9109-1fd76a80ae5c"
                      }
                    ],
                    "activeCells": {},
                    "id": "acf293fb-939d-4034-afef-214b7e4e398a"
                  }
                ],
                "id": "2717746a-d74f-45b2-a1b1-887b3899492b"
              }
            ],
            "activeCells": {},
            "id": "51020429-45a9-4610-998f-02638f417db2"
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
            "id": "695a97d8-8816-4781-9d34-dd5873505ca5",
            "spec": "set2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d5f476a1-530c-4543-a060-25be5bf1495f",
            "spec": "set2",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0ba36362-62da-4cc0-9eb9-c95c6c54cd88",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "980df5d3-45d0-4ccd-b4ea-99aa9d6e4583",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eb0d35a4-faed-490b-981a-6f868eb8ae4e",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e89bcc9f-d347-4a37-a3d4-efefc279db0c",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b2bca9bb-ae39-438c-95ef-18dcd6b87e56",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "bf8ae876-a981-4657-ae96-29f6fa134c03",
              "ef3b95e2-9ccb-44c4-b851-597b0ba4b38d",
              "0b301427-dad7-4641-aa4f-964459296da4",
              "0977a415-0b5b-4d37-9f32-d76fcfe6a848",
              "f6bc4504-3777-436c-8d27-2cf34e659ff0"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "e26c6a73-196b-451d-af6b-6014e0ceab1d",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "af7a97b2-154d-4ecb-bc74-123da2639998",
              "15986c2f-bac5-43e1-8c94-bfc8f26f8829",
              "1f10e1e1-96ac-4ef7-ac22-27eaf0900803",
              "0274f571-f1ec-4819-af21-43c847e52cb7",
              "3d66c032-6353-4ae7-9e7f-a73f26ff2103"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "2cc61bb3-f250-4f1c-a902-a78a20115299",
            "type": "set-verification-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "695a97d8-8816-4781-9d34-dd5873505ca5",
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
        "time": "12:32 PM",
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
                        "id": "0ba36362-62da-4cc0-9eb9-c95c6c54cd88"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "980df5d3-45d0-4ccd-b4ea-99aa9d6e4583"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "eb0d35a4-faed-490b-981a-6f868eb8ae4e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "e89bcc9f-d347-4a37-a3d4-efefc279db0c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "b2bca9bb-ae39-438c-95ef-18dcd6b87e56"
                      }
                    ],
                    "activeCells": {},
                    "id": "d5f476a1-530c-4543-a060-25be5bf1495f"
                  }
                ],
                "id": "ff758d1b-f7a1-41ff-8c5f-dada82219bcb"
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
                        "id": "bf8ae876-a981-4657-ae96-29f6fa134c03"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "ef3b95e2-9ccb-44c4-b851-597b0ba4b38d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "0b301427-dad7-4641-aa4f-964459296da4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "0977a415-0b5b-4d37-9f32-d76fcfe6a848"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "f6bc4504-3777-436c-8d27-2cf34e659ff0"
                      }
                    ],
                    "activeCells": {},
                    "id": "e26c6a73-196b-451d-af6b-6014e0ceab1d"
                  }
                ],
                "id": "0c0aa618-8fac-4ea4-8eba-ad8b6a105360"
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
                        "id": "af7a97b2-154d-4ecb-bc74-123da2639998"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "15986c2f-bac5-43e1-8c94-bfc8f26f8829"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "1f10e1e1-96ac-4ef7-ac22-27eaf0900803"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "0274f571-f1ec-4819-af21-43c847e52cb7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "3d66c032-6353-4ae7-9e7f-a73f26ff2103"
                      }
                    ],
                    "activeCells": {},
                    "id": "2cc61bb3-f250-4f1c-a902-a78a20115299"
                  }
                ],
                "id": "c60dfb8a-779f-4567-a65e-a9902260b327"
              }
            ],
            "activeCells": {},
            "id": "695a97d8-8816-4781-9d34-dd5873505ca5"
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
            "id": "1c62d994-c24d-4af8-a2f4-9e5b59ed78ef",
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
            "id": "1c62d994-c24d-4af8-a2f4-9e5b59ed78ef",
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
        "time": "12:32 PM",
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
                        "id": "bd54c100-87ec-43fe-a8e4-5f1e8f85d148"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "aa3fa39f-993b-415b-afee-4d63c78d6408"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "2f0f6934-7ded-4ca8-b864-917be6d60ee5"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "9ba69e7d-bcc9-4057-8071-8a290fb789a5"
              }
            ],
            "activeCells": {},
            "id": "1c62d994-c24d-4af8-a2f4-9e5b59ed78ef"
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
            "id": "0bd54cef-eea6-4d08-a7f0-5e07de5e9914",
            "spec": "set4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "acae284f-0b26-4f72-b05d-d3549d5a3d43",
            "spec": "set4",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "57a868c1-bf38-42f4-943d-506c6fb078a4",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "57a868c1-bf38-42f4-943d-506c6fb078a4",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "57a868c1-bf38-42f4-943d-506c6fb078a4",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "57a868c1-bf38-42f4-943d-506c6fb078a4",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "57a868c1-bf38-42f4-943d-506c6fb078a4",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "df508504-a943-4410-af5a-47f2e6c90d40",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "df508504-a943-4410-af5a-47f2e6c90d40",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "df508504-a943-4410-af5a-47f2e6c90d40",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "df508504-a943-4410-af5a-47f2e6c90d40",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "df508504-a943-4410-af5a-47f2e6c90d40",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cf90fc9d-1408-41e5-a4dc-194d672093fe",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cf90fc9d-1408-41e5-a4dc-194d672093fe",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cf90fc9d-1408-41e5-a4dc-194d672093fe",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cf90fc9d-1408-41e5-a4dc-194d672093fe",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cf90fc9d-1408-41e5-a4dc-194d672093fe",
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
            "id": "73b36e08-1a6f-471f-b43f-b61d98951f82",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0bd54cef-eea6-4d08-a7f0-5e07de5e9914",
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
        "time": "12:32 PM",
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
                        "id": "57a868c1-bf38-42f4-943d-506c6fb078a4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "df508504-a943-4410-af5a-47f2e6c90d40"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "cf90fc9d-1408-41e5-a4dc-194d672093fe"
                      }
                    ],
                    "activeCells": {},
                    "id": "acae284f-0b26-4f72-b05d-d3549d5a3d43"
                  }
                ],
                "id": "a60ea287-ba78-4279-a321-0d5562526637"
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
                        "id": "73b36e08-1a6f-471f-b43f-b61d98951f82"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "e32dca0d-3cb0-40fa-a476-b5c765511d85"
                      }
                    ],
                    "activeCells": {},
                    "id": "48c3922c-9be7-46c4-a763-b95dee2a9374"
                  }
                ],
                "id": "986a397a-6e88-45b8-b37f-6e5657684b2c"
              }
            ],
            "activeCells": {},
            "id": "0bd54cef-eea6-4d08-a7f0-5e07de5e9914"
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
            "id": "3e342e25-1677-443e-89b5-f3389a9458f9",
            "spec": "set5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cb316a5e-60d0-4e5b-bcb5-cc746956a243",
            "spec": "set5",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a0909439-096c-4f6d-a674-f099c07cd6f9",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d95a5af5-dca4-45f8-96e5-137761a3af83",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8a9175c1-2429-4f0d-9342-f2757e829a4c",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "64bea9ed-a29b-4a71-8c1c-39f7f7bd0edd",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "871e6472-1bca-47c3-bb5a-b84c17a3c885",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "46c71b8b-633a-4887-9258-74634ef0a05b",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "114153d9-7a1c-45ad-9d0a-1fd834d861f3",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cff4a192-aed8-4078-8dba-73a25f1cb85a",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "9ef86386-0101-49f7-bb37-e8e02333d420",
              "2255f76a-7b64-4505-a993-f0d60be825c5",
              "9987ce7d-38c4-4ac1-8c40-24245d4897d0",
              "b0503f5b-2cd2-4fe4-b680-a53e2af3ff6b"
            ],
            "missing": [
              "a6cc8e9a-0cc1-4dc4-a96a-01cd2418e0fd"
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
                "id": "cb00baf0-647e-44f1-b891-d3ca629bf595"
              },
              {
                "actual": 4,
                "id": "8b9b20f9-ad44-4560-af88-8a81ebb756c4"
              }
            ],
            "id": "f228c643-b1b1-4a41-99b5-1647d9385d52",
            "type": "set-verification-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3e342e25-1677-443e-89b5-f3389a9458f9",
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
        "time": "12:32 PM",
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
                        "id": "a0909439-096c-4f6d-a674-f099c07cd6f9"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "d95a5af5-dca4-45f8-96e5-137761a3af83"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "8a9175c1-2429-4f0d-9342-f2757e829a4c"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "64bea9ed-a29b-4a71-8c1c-39f7f7bd0edd"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "871e6472-1bca-47c3-bb5a-b84c17a3c885"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "46c71b8b-633a-4887-9258-74634ef0a05b"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "114153d9-7a1c-45ad-9d0a-1fd834d861f3"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "cff4a192-aed8-4078-8dba-73a25f1cb85a"
                      }
                    ],
                    "activeCells": {},
                    "id": "cb316a5e-60d0-4e5b-bcb5-cc746956a243"
                  }
                ],
                "id": "fc68ab88-b6b3-4472-ae51-c267ae5cc0ef"
              },
              {
                "type": "comment",
                "text": "All data is correct, but in the wrong order",
                "id": "00e0e23e-58f1-453b-a965-e100615dbfa8"
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
                        "id": "9ef86386-0101-49f7-bb37-e8e02333d420"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "2255f76a-7b64-4505-a993-f0d60be825c5"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "9987ce7d-38c4-4ac1-8c40-24245d4897d0"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "cb00baf0-647e-44f1-b891-d3ca629bf595"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "8b9b20f9-ad44-4560-af88-8a81ebb756c4"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "a6cc8e9a-0cc1-4dc4-a96a-01cd2418e0fd"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "b0503f5b-2cd2-4fe4-b680-a53e2af3ff6b"
                      }
                    ],
                    "activeCells": {},
                    "id": "f228c643-b1b1-4a41-99b5-1647d9385d52"
                  }
                ],
                "id": "9c3152ba-0db3-434a-b437-c7f24c4ef252"
              }
            ],
            "activeCells": {},
            "id": "3e342e25-1677-443e-89b5-f3389a9458f9"
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
            "id": "0efb37c0-2ea3-48cd-b176-3b4234f5b2ce",
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
            "id": "df3b979c-257d-4e6b-a0da-8832dcddc298",
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
            "id": "477ccc25-ef25-434a-9be4-04ab305a58c7",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0efb37c0-2ea3-48cd-b176-3b4234f5b2ce",
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
        "time": "12:32 PM",
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
                        "id": "df3b979c-257d-4e6b-a0da-8832dcddc298"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "477ccc25-ef25-434a-9be4-04ab305a58c7"
                      }
                    ],
                    "activeCells": {},
                    "id": "db8634ce-cd63-4ddb-b037-43c11d27f299"
                  }
                ],
                "id": "5f407cb3-11c3-4638-96b7-53b8feb0d20a"
              }
            ],
            "activeCells": {},
            "id": "0efb37c0-2ea3-48cd-b176-3b4234f5b2ce"
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
            "id": "19b86a7f-78ce-453f-aa4e-d51315a675de",
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
            "id": "f1871542-d385-40a6-b6d6-de5db7de124a",
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
            "id": "c0751925-769d-4d70-8717-52fe1c014c95",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "19b86a7f-78ce-453f-aa4e-d51315a675de",
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
        "time": "12:32 PM",
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
                        "id": "b930401d-8293-4e9c-8128-ffaeb5a5a1e8"
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
                        "id": "cf47750b-ce4f-420b-acb2-c2e0a0fbcbec"
                      }
                    ],
                    "activeCells": {},
                    "id": "6ff8c8d7-aff0-4492-810d-b895184e6dad"
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
                        "id": "f1871542-d385-40a6-b6d6-de5db7de124a"
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
                        "id": "c0751925-769d-4d70-8717-52fe1c014c95"
                      }
                    ],
                    "activeCells": {},
                    "id": "533ecd9b-717a-4baa-b2d3-51740781da88"
                  }
                ],
                "id": "02bb5780-8099-481b-864a-21dab2ef5459"
              }
            ],
            "activeCells": {},
            "id": "19b86a7f-78ce-453f-aa4e-d51315a675de"
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
            "id": "917d4c5a-3a5a-4418-bf4e-f695f48fc060",
            "spec": "table3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e00a3bee-9eda-445b-aa81-f86faa50fa2c",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7eba2f5f-1e6e-4498-be2c-0a3c6adbbc2f",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5eb4d0f7-d588-4651-8dd0-708caacaf409",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0096ae93-bab2-41e6-ae40-a6e7324895be",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "917d4c5a-3a5a-4418-bf4e-f695f48fc060",
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
        "time": "12:32 PM",
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
                        "id": "e00a3bee-9eda-445b-aa81-f86faa50fa2c"
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
                        "id": "7eba2f5f-1e6e-4498-be2c-0a3c6adbbc2f"
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
                        "id": "5eb4d0f7-d588-4651-8dd0-708caacaf409"
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
                        "id": "0096ae93-bab2-41e6-ae40-a6e7324895be"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "cb1c7d87-9cea-4913-b8a6-bf133c3e52e0"
                  }
                ],
                "id": "c594aea7-69a6-4454-a9cd-83f2a5e83ee8"
              }
            ],
            "activeCells": {},
            "id": "917d4c5a-3a5a-4418-bf4e-f695f48fc060"
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
            "id": "f99e2a85-f417-4186-878a-d50fe22634b6",
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
            "id": "faa20ec4-dc9f-472b-9cc2-a09692cb7e36",
            "spec": "table4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7d068524-a675-4a22-88fc-6f9b339ddbb0",
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
            "id": "f99e2a85-f417-4186-878a-d50fe22634b6",
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
        "time": "12:32 PM",
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
                        "id": "faa20ec4-dc9f-472b-9cc2-a09692cb7e36"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "522128a8-b22d-4974-8fec-9912e385cd91"
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
                        "id": "7d068524-a675-4a22-88fc-6f9b339ddbb0"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "42496634-c940-4fe1-bbc7-510ac3bba008"
              }
            ],
            "activeCells": {},
            "id": "f99e2a85-f417-4186-878a-d50fe22634b6"
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
            "id": "de480d70-676d-4a5d-b350-d0e99613eca4",
            "spec": "table5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "34c8e95a-7d36-456c-97cd-3ff8dd8343bb",
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
            "id": "9043f252-3cc2-49ec-b2f7-a216081b906c",
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
            "id": "8d549193-fa5b-4c32-87ee-3a13408d46df",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "34c8e95a-7d36-456c-97cd-3ff8dd8343bb",
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
            "id": "c32be63d-e73e-4b3d-90a9-75758fd0b959",
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
            "id": "c32be63d-e73e-4b3d-90a9-75758fd0b959",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c32be63d-e73e-4b3d-90a9-75758fd0b959",
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
            "id": "c32be63d-e73e-4b3d-90a9-75758fd0b959",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "86ae79ea-a3b6-4795-9590-d7d19aad217b",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "86ae79ea-a3b6-4795-9590-d7d19aad217b",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "86ae79ea-a3b6-4795-9590-d7d19aad217b",
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
            "id": "86ae79ea-a3b6-4795-9590-d7d19aad217b",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "de480d70-676d-4a5d-b350-d0e99613eca4",
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
            "end": 1,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 1,
            "end": 2,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 2,
            "end": 2,
            "duration": 0
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
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 2,
            "end": 2,
            "duration": 0
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
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 2,
            "end": 2,
            "duration": 0
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
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 2,
            "end": 2,
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
        "time": "12:32 PM",
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
                "id": "c829d30d-8acd-4b82-bb76-619913567955"
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
                        "id": "9043f252-3cc2-49ec-b2f7-a216081b906c"
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
                        "id": "8d549193-fa5b-4c32-87ee-3a13408d46df"
                      }
                    ],
                    "activeCells": {},
                    "id": "34c8e95a-7d36-456c-97cd-3ff8dd8343bb"
                  }
                ],
                "id": "568880bd-f7c9-4b56-949f-c324eee3e50e"
              },
              {
                "type": "comment",
                "text": "Table fixture from script",
                "id": "89b857a2-346b-4a5f-8d59-7f1cb4adeeea"
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
                        "id": "c32be63d-e73e-4b3d-90a9-75758fd0b959"
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
                        "id": "86ae79ea-a3b6-4795-9590-d7d19aad217b"
                      }
                    ],
                    "activeCells": {},
                    "id": "7a3d59ff-ca70-4fbb-8af9-6a20e677fe8f"
                  }
                ],
                "id": "b7f8d595-df47-409a-88ad-14af0c49defa"
              }
            ],
            "activeCells": {},
            "id": "de480d70-676d-4a5d-b350-d0e99613eca4"
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "CheckObject",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CheckObjectFixture",
                "id": "79eb44bb-b0c3-40fa-a229-8c08bcf66447"
              },
              {
                "type": "comment",
                "text": "## IfTheAddressIs",
                "id": "7bc18794-d87a-49ea-8ad1-7cd332f5045e"
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
                "id": "5e00af16-4acc-4519-b15e-5c84e55029a6"
              },
              {
                "type": "comment",
                "text": "## TheAddressShouldBe",
                "id": "a79e75b6-41d1-49bf-bf5e-2fa65678ac22"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "Address1",
                  "Address2": "Address2",
                  "City": "City"
                },
                "collections": [],
                "id": "9fa9cc3c-531a-43a2-a22d-ab2cd2e7caaf"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "fc8ae877-cdcd-4aa4-8534-92fd073419ef"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "5e4bc65d-f6e5-4d07-ab36-04ec30d3665b"
              }
            ],
            "activeCells": {},
            "id": "5c16e2c6-2f45-4554-901a-217efab66775"
          }
        ],
        "id": "6a3b94e6-74fc-4d96-abf4-72f9c8530c7c"
      },
      "sampleMarkdown": "# Sample Specification for CheckObject\r\n\r\n-> id = a4784024-3a96-4acf-b5aa-3da501f0f9db\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4761812-06:00\r\n-> tags = \r\n\r\n[CheckObject]\r\n|> IfTheAddressIs Address1=Address1, Address2=Address2, City=City, StateOrProvince=StateOrProvince, Country=Country, PostalCode=PostalCode\r\n|> TheAddressShouldBe Address1=Address1, Address2=Address2, City=City\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Composite",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CompositeFixture",
                "id": "ecb2d5b3-93d5-4f2b-89db-0679b9623190"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "724e9e69-bd46-4279-95f2-b1c10318c5e3"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "d2a351f2-6283-465c-8491-dc811f06931e"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "eaa10a0f-e8e9-4cc7-9eaf-c786da79d5f5"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "199457f2-ab0a-4313-8b9c-b2a58249cce6"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiply",
                "id": "027e4d8c-2582-4787-8256-0257d90321ee"
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
                "id": "5cf1d782-cf88-40ff-b663-98a45c7d77c3"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyTable",
                "id": "234508e6-afbe-41b1-9a95-2e66ed284d62"
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
                        "id": "e3340777-7523-4eaf-b125-563644db3cbb"
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
                        "id": "2915e7a8-98d0-44b2-9884-88e73102b5ee"
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
                        "id": "fb9806ab-4ee5-41bf-ac7a-f978fd8e9566"
                      }
                    ],
                    "activeCells": {},
                    "id": "9c0cc3b8-2f29-437a-b31f-b4af8140b63e"
                  }
                ],
                "id": "cd607423-4443-44f2-85c5-5c8abbb059b4"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyThrow",
                "id": "ae3aa9b3-9225-43ff-a8ca-b00db908fd64"
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
                "id": "ea7ce028-35bb-4380-ab20-1be8bb584b66"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "43b0ef3d-9cfe-4800-a5fa-701a3f92298f"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "33be951f-ce6f-4343-8bd4-e858f42fb7c2"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "0667045d-03d2-4706-aec6-ff7ac7dde06e"
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
                        "id": "9fa7de55-860a-41b3-b746-24277664d96f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "ec04faa4-23db-4cec-bc70-e69a1580a4d4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "8c42f33b-b6a4-4c48-8797-95f9b1fbcf4e"
                      }
                    ],
                    "activeCells": {},
                    "id": "0cc18948-6ae1-4a65-8180-248589794e6a"
                  }
                ],
                "id": "63a16e1c-0656-402b-b4f6-23db0ef178b7"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "daf6105e-cb80-48c1-bc06-ff94c6a37ac3"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "862ad3b5-c501-4d9a-ac12-2823f7d4d1c8"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "7f59071d-a92d-4f0d-bff5-8e47061a48ee"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "e4f0fe18-f1b9-4aad-be6e-b499cc189535"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "e1312a52-2c20-493c-8920-7c31b8427ef3"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "0c4e6f66-537b-4bdd-9fa0-bb71c17b1868"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "4f1e8ff8-eda5-4470-8cd3-0b3c8b800eb0"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "719bb2ab-a128-4dc5-8a47-fd677c6aa98a"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "9f523348-9074-4af7-8235-4ffd22730b96"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "5a5ef27a-06e5-479f-a3e8-9526b7a2073d"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "5ea4b84f-3ac2-429f-901c-dd8dd5cd6000"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "8b690ea3-0adc-4d5e-bd9f-9ec06d956bbc"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "e281ba18-c8ad-4820-a009-6955922f94e4"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9ff0dbfd-7a41-4544-a309-10bc25300588"
              }
            ],
            "activeCells": {},
            "id": "53ff9365-9cab-452c-bcd7-a397ad6fbd5b"
          }
        ],
        "id": "f60fc1ab-772a-408f-be33-3375ee531cb0"
      },
      "sampleMarkdown": "# Sample Specification for Composite\r\n\r\n-> id = a6b1faf0-78a7-4ad0-93c8-69febe936764\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4771788-06:00\r\n-> tags = \r\n\r\n[Composite]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> AddAndMultiply starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> AddAndMultiplyTable\r\n    [Rows]\r\n    |starting|operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n\r\n|> AddAndMultiplyThrow starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, January 10, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "0fd000fd-9d93-400a-98d0-ed3875e659ee"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "afdcdfa4-c656-448b-bb71-ea3c9685a2ca"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "dd5c671d-2e80-477c-a7ed-d59f73bd0e47"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "f745643f-7aea-4c75-96bc-df91e144d5c0"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "71db9891-f915-43fc-9a68-c97bb4c7dd87"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "1957d59e-37bc-4018-8432-15e3cbd3c1bc"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "772b64a3-f041-4f08-8559-1815a0606532"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "1b7a6ac3-2799-4bee-8d7f-b3b3d8358d88"
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
                              "id": "152c7b46-93fd-4134-8bb7-732e28dff652"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "450da041-6f76-4a0d-95a4-9346525a170b"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "9ce0b070-3d0c-46d6-a2eb-59e5cca719e4"
                            }
                          ],
                          "activeCells": {},
                          "id": "c8201ba4-a2be-4a5e-adfb-f5e2889f0477"
                        }
                      ],
                      "id": "74aa5ba6-1833-41d4-ba76-89c5bdd049ce"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "8739d97a-925a-4cf8-a7c9-9eae6651ff21"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "970b3ba5-8d4b-4217-b8d0-67ec81756ffa"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "570ba663-99e5-49a5-8334-c66fb5ecc97e"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "f1c9a7db-dd70-4414-89bf-b5fb1ff6e361"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "3ec072d8-53e7-4087-831e-a639c4e2192a"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "cc62d9c6-7313-4c4a-9c5a-636f73c47344"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "9b71ed82-7f62-431f-9ac5-03a669c4f20f"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "06f41f64-ceb6-435f-82bd-a9f7e0e82d3a"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "11a1ff7e-da2f-49cc-803b-2eb24c5efd1c"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "971de0c3-ecc8-40ce-82a7-9a61da1d59a6"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "a7f822b6-0c7c-41b2-b392-74b25fc6ddae"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "dd7c83a7-186e-4ae2-8c6b-260f6ab28e14"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "3dc51762-185d-422b-9059-9d239f4408a9"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "197a296d-c5fb-41ee-95d1-2d315be710bf"
                    }
                  ],
                  "activeCells": {},
                  "id": "45ad2375-5330-466f-aeb9-c64d89aef372"
                }
              ],
              "id": "9d3d024b-ae4f-4bba-9aa4-8f32411e36f8"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = a8ec743e-cd0d-440c-8e78-87ae0b9acdea\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4771788-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Embedded",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedFixture",
                "id": "d1ae7539-d840-4304-ac5b-ee2a9d5a71af"
              },
              {
                "type": "comment",
                "text": "## DoNotThrowAnExceptionOnTheNextEmbed",
                "id": "a02f2f55-a9d3-4ed3-921c-1b0c3225a93f"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "9e8d86f3-e882-46d4-86aa-6db86a1a499b"
              },
              {
                "type": "comment",
                "text": "## EmbeddedMath",
                "id": "6153d085-b453-4717-b921-2103910fb834"
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
                        "id": "55bd0a5a-3d4f-4952-8c68-b38c187738e3"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "5f9f38f2-1e84-4b49-a297-03b9080a1e23"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "761a6515-f2fe-442a-9253-4872bc0026d1"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "d1b1423c-beb6-4ac8-84cf-75b5f2b1095c"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "5a1317ed-8dc5-41c5-bdd2-8e0c3790e31d"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "a67307b2-3836-47eb-8aa7-272a7350c7e4"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "49abe326-0900-4c97-b750-fc2e2d5dc3be"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "c4fcd167-3364-4bea-afc0-87e89f178c2b"
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
                                "id": "d9c91b0e-6be9-47e7-a411-9d1379251741"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "d557760a-47f0-401e-8f42-bd372bd41e20"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "d1054fc5-f989-465c-b5ca-eb890518a98f"
                              }
                            ],
                            "activeCells": {},
                            "id": "ee77a103-e522-44e2-a6e5-b54cc7d835f2"
                          }
                        ],
                        "id": "3e4bd172-1267-405c-adb2-13919f5e143d"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "4928e4bd-3ff0-4012-8b77-9c46dda7f9df"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "536748df-2e37-4cbd-a56b-863b144d4511"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "f88393aa-6380-4497-94a3-44a22baf17b7"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "81f079da-29dd-4afa-a45e-fc8a0b13e1af"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "7b0b2f08-3333-4e0a-b1ac-596f0041be24"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "47a58b1a-669f-4661-9d87-4ecba32713d8"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "392a7622-891d-4886-923b-649fc1d55d79"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "6a1f277a-856e-4c1a-81a7-ccb8d9f95510"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "8aaac028-32ed-4b51-ba92-2ea8b0d8a0b6"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "52f2f657-84bc-46af-9717-7f19890dbaf3"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "2eb5b5a5-8f98-4525-9967-cae50759c44b"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "fe511108-ec5e-4248-948d-2863576a0cdd"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "fd189436-5934-4ad2-9f2e-47fb1e83a790"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "3f08562c-dd1e-442e-b1e3-73b2b1fb3997"
                      }
                    ],
                    "activeCells": {},
                    "id": "2cf2a79f-e296-458e-ba2f-2c4a7a32f5ff"
                  }
                ],
                "id": "fedde462-a015-4e6e-8f95-b1bb3152d8af"
              },
              {
                "type": "comment",
                "text": "## ThrowAnExceptionOnTheNextEmbed",
                "id": "03ecace9-b2f2-43b1-bec1-6d9a958acd2b"
              },
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "6cce8c6c-3c18-4380-92d2-354dec3c003c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f47ac146-98ac-41a2-9ccd-67f9e34994e9"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ee60e6ba-5fa2-47e3-ab5a-877a86810b82"
              }
            ],
            "activeCells": {},
            "id": "48a8a0e8-661e-4f30-ad16-b4d2f8b97833"
          }
        ],
        "id": "d701b3e0-64cc-43e8-8a8f-252b7b6befb4"
      },
      "sampleMarkdown": "# Sample Specification for Embedded\r\n\r\n-> id = 07471bee-410f-425a-8070-85005e2859f0\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4781764-06:00\r\n-> tags = \r\n\r\n[Embedded]\r\n|> DoNotThrowAnExceptionOnTheNextEmbed\r\n|> EmbeddedMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> ThrowAnExceptionOnTheNextEmbed\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Failure",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.FailureFixture",
                "id": "458d1ca8-083f-4906-bf4e-581d432aa037"
              }
            ],
            "activeCells": {},
            "id": "07cbeeee-87a2-47a7-9ef9-d5e8a7c86490"
          }
        ],
        "id": "7cb62573-7848-4194-a1ba-508aac72ef21"
      },
      "sampleMarkdown": "# Sample Specification for Failure\r\n\r\n-> id = 2fb2b298-12c8-4eea-8e30-6e0c481aa831\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4781764-06:00\r\n-> tags = \r\n\r\n[Failure]\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "GrammarError",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.GrammarErrorFixture",
                "id": "2c189b2a-c1bf-47c2-aad4-759720dad6c0"
              },
              {
                "type": "comment",
                "text": "##",
                "id": "29bc5f11-463d-481a-8586-3c2fad264267"
              },
              {
                "key": null,
                "cells": {},
                "collections": [],
                "id": "5372b2f3-28fa-4ea0-b62f-63877543a500"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "cc3ca288-ce39-4a6b-9d33-e7c2ebf341eb"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "028b3f30-86dc-465b-a240-fd3e28a39ea0"
              }
            ],
            "activeCells": {},
            "id": "6401476d-9ccd-464d-9193-da3252c9158d"
          }
        ],
        "id": "ec7e1f7b-9da4-433c-9b91-c989423cd7e2"
      },
      "sampleMarkdown": "# Sample Specification for GrammarError\r\n\r\n-> id = 8e1d782f-2e0f-4b3e-aa50-2a6d87ef16aa\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4781764-06:00\r\n-> tags = \r\n\r\n[GrammarError]\r\n|> \r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "CurriedMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CurriedMathFixture",
                "id": "3fae42df-7fd4-4be4-a30c-3157b48a4e1c"
              },
              {
                "type": "comment",
                "text": "## Add5",
                "id": "6fab601a-edb7-4e41-a694-b8eb93ae5445"
              },
              {
                "key": "Add5",
                "cells": {},
                "collections": [],
                "id": "913df72a-36bb-46da-9981-99418c4c42a7"
              },
              {
                "type": "comment",
                "text": "## AddingTo5",
                "id": "3a26be65-22ff-4fa0-9bd0-c8aa44caab27"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "3530d677-4aa2-4316-b111-74a83eabeb33"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "bc28e7bd-0f4c-46bd-8bc8-5b527a4a9048"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "0362276f-a2fa-4503-a9a2-5e8e6f91ba25"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "94304a3d-8db2-4dd2-b505-55983872f832"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "40a6bdcf-d9ca-46d3-8b79-79db2628c8e7"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c52dcaa8-7796-45dd-b5fd-aa07df906ec4"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "453f8c7b-06f8-4136-981a-b0d90f47eda2"
              }
            ],
            "activeCells": {},
            "id": "9e04f262-a1d3-4fdc-9eb6-fca4cf39f4e0"
          }
        ],
        "id": "d0e16235-99af-463d-b934-384129922e74"
      },
      "sampleMarkdown": "# Sample Specification for CurriedMath\r\n\r\n-> id = 161d6058-e885-41c0-9260-d43091d8eab4\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4781764-06:00\r\n-> tags = \r\n\r\n[CurriedMath]\r\n|> Add5\r\n|> AddingTo5 y=y, returnValue=NULL\r\n|> StartWith starting=11\r\n|> TheValueShouldBe expected=expected\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Math",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                "id": "4cce01eb-bb22-42ca-817e-cad4bf8940e5"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "ba52928c-01c9-4aaf-8228-3421aec6b207"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "3e611fca-b02c-4acf-a974-966f688e54dc"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "77742a97-8b45-4192-92f1-13b5a293bf15"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "56918230-db9e-4ec6-ab58-278aeea930c2"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "b050fd90-3330-42aa-b008-1435a932c554"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "8adafb0f-48f4-436c-9c7a-a2e5a709657e"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "2baf8cfa-cac8-4fb0-bae2-ec54536574a7"
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
                        "id": "2fd5bf69-5bbe-4217-8b3b-3ff957d7c1dd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "88eea17e-1566-4ca3-a4c7-58bae57c14e6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "2e28b917-ba95-45f6-a2ce-3a6b40cd83bf"
                      }
                    ],
                    "activeCells": {},
                    "id": "e7a459c0-50bd-432e-95e0-f87bbea3961e"
                  }
                ],
                "id": "7998b1d6-06b0-4fec-b701-914aee2708fc"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "66178ead-ec4a-4fde-a8c1-d0adc5b2bbaa"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "ef09b717-b759-4c0a-a4fe-7f91822725c3"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "8397f1ec-228c-4848-9ebf-191439eaba5a"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "08e6db0a-ec1b-47cd-9e7d-7e22f7112826"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "f19f6739-04d9-4858-a56f-b2160a8fc09a"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "45f0a3a0-e521-4530-a713-53ffce5a0009"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "e7ead73b-3955-4a6e-9cc6-789f64282c4f"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "ed236e53-fba3-45c7-8c92-455929852373"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "486f1f53-9bac-46c4-93b2-afa34a9777de"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "2ae6edd7-b943-4174-b008-48d0fa93510b"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "ab6da684-a2cf-4e1f-84a8-e1c421e221f7"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "aecae0df-bc2c-4c68-a6b6-ba1007931db8"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f9b01827-2ad0-44ad-bdcf-3ebafc39127b"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "f3bc78ff-0bfa-415f-ae0f-88422d6e835f"
              }
            ],
            "activeCells": {},
            "id": "0c4a4bc6-4bc5-487d-9bab-ee2b8d9fa046"
          }
        ],
        "id": "d0cca5e9-5673-4652-86ea-a845c19b4ae6"
      },
      "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 32f66b03-d88b-47b7-a47a-7ec6c4664783\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4781764-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, January 10, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "eef71b3c-fc89-4301-a959-0bd951f7e641"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "84351396-8bc4-4efa-8f15-ceb477b78679"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "8bd5e08b-38ff-499c-ac77-5d0207977c89"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "c7f12453-d0b6-42a8-bf43-530500eec4ed"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "a6c288fb-1370-44fc-83b0-36fd4efc7c92"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "e90eb954-c2af-4dc7-8d38-4e7707079d3b"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "9d61f627-cff7-42dc-86ac-cb7f676c3183"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "4c7777ce-0c49-432e-a619-4e81f2db0e2e"
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
                              "id": "f0a15584-6e75-4023-9cde-d54f7d1725b5"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "9b17966f-e0d4-4119-a4c9-bee028a29c2f"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "c3f6efc2-e382-4131-b4fd-d8cad9909798"
                            }
                          ],
                          "activeCells": {},
                          "id": "6ddca043-e928-4f18-b9b3-7f1558454403"
                        }
                      ],
                      "id": "6bbb62f2-a0b4-48cd-90d5-ef6b290ccf44"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "ff9cba64-b053-4e1e-a013-79ddccfc8b37"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "270ea1b2-eff4-4c8d-b990-d67290ca36ce"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "d84bf12b-59f9-4f9a-9c2b-b44db145640e"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "76c97cc0-0709-4f23-b0b8-fd941bc29108"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "20691bc7-f423-4a15-8bbd-ccacd23d70fe"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "7b288ce6-286d-4e87-90a0-381f11c1e40f"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "8270d81e-7644-48ac-9fe0-99f4ff07024c"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "36a162f1-4cc7-4d29-885e-0ca1e7421e66"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "94c0a78c-e5bb-48f7-9be3-162816d3470c"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "fc619f08-4621-4605-9042-51c2083de565"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "b957cccd-6d50-46c7-bc15-4f137fcaa2b6"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "2a800f35-ffe2-4b41-93fd-1179c9fcbaaa"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "e94d3ee3-8f5e-45c3-b68f-9f15c1e14c0f"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "7948c2a9-fad7-43b3-89cf-45b570a7e5ef"
                    }
                  ],
                  "activeCells": {},
                  "id": "0450c6c6-aac1-4165-a693-2dce9f8e7e10"
                }
              ],
              "id": "2353be64-2d40-41bd-8c33-4cc28d2bb231"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 4590b9a2-fe21-4be8-96ba-bac85dc9c2bd\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4791740-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "DoSomeMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DoSomeMathFixture",
                "id": "4ca23fe0-64ba-4526-a4fa-ba9d13c45aad"
              },
              {
                "type": "comment",
                "text": "## DoSomeMath",
                "id": "87425da5-057d-4ac8-892f-cd2d61cb3595"
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
                        "id": "074127c0-f05d-4281-b009-5489ca645331"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "9f73b442-4e2f-40e4-a6a7-57f46112a8fb"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "f650dd02-4638-431e-bd1f-d6a4ef0c492e"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "c248368a-8f39-4999-bcc5-08b2007f986e"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "5efe7d69-838e-4be6-a2f5-b4ecaec18314"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "f3882393-da9e-4566-8b26-8d37a4093728"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "6bcda21f-c4c1-4b9e-860e-f88c83486529"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "f9f65829-374b-4966-9258-71b7801f6cd0"
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
                                "id": "dbae80ce-f2b8-46d3-b1c0-45beb007c40d"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "f23ad211-28e5-4a92-87e9-a27882801129"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "753f6584-bc59-4304-b315-fc7eeb67fd01"
                              }
                            ],
                            "activeCells": {},
                            "id": "ddeeebcf-e700-407e-a544-0eb5466dde37"
                          }
                        ],
                        "id": "adfac110-2e2d-4d69-b5d5-6053b7af5ecd"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "361f04da-59c9-4f67-a87c-cc7575392585"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "daab6a86-6c06-4b9c-bc94-d4ef3f6acc1b"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "71f6dee0-4106-4f71-b5e4-b1f5ed9bb6ac"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "9e1362ba-17b9-44ae-8e5a-a9b49ff22214"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "9cdd95d4-9b81-43a8-af00-b45346457787"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "dd284bfb-3c2d-4454-bf27-f93149f7f1a3"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "5482b70d-b2b5-45fe-acc3-7bb7865582bc"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "ee0d7e97-0875-475b-b830-8c379cd2306f"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "2493fe97-bf24-483a-9f1c-917e45647d10"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "d5aab193-15e6-46b6-b778-ea2a51569954"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "af5f4adf-85bc-4797-b5ae-3dd36b030579"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "dafa81f9-ac34-4146-917d-4a1b0b843ae1"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "c6efac8c-dfd5-47bf-8498-04f0c2325e78"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "1bf5ade1-14c5-4496-a057-bab4a71b14ad"
                      }
                    ],
                    "activeCells": {},
                    "id": "b26d75ec-b216-4c81-a922-278fdaa59018"
                  }
                ],
                "id": "51b55782-1cda-43f6-ac5e-b31b10c41792"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "45c50ae4-9e49-4c69-a9e5-1470e5aa492c"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "2a41692e-ccca-485b-9e1b-dbc906c245d3"
              }
            ],
            "activeCells": {},
            "id": "e553aabe-50ad-4045-829a-1cd7f2b7f433"
          }
        ],
        "id": "d832f43a-73fe-4a80-b0e0-75b39b5e4abe"
      },
      "sampleMarkdown": "# Sample Specification for DoSomeMath\r\n\r\n-> id = e426bee2-0caa-4908-b0a2-f3b4c1422552\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4791740-06:00\r\n-> tags = \r\n\r\n[DoSomeMath]\r\n|> DoSomeMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "ParkingExpiry",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.ParkingExpiryFixture",
                "id": "bbf9b64c-1539-4937-8cba-8690bf56bf2b"
              },
              {
                "type": "comment",
                "text": "## TicketIsGiven",
                "id": "5299a71a-c8a1-4218-aff8-8b7131786854"
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
                        "id": "eee83a0f-87b5-48ef-a788-1b330ec45636"
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
                        "id": "9a926c59-34ac-404b-a35a-48135b7bdc22"
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
                        "id": "f1d81300-1d97-4d02-a209-782d3d58f979"
                      }
                    ],
                    "activeCells": {},
                    "id": "ac308110-4e08-4cb3-b0b1-d22f099c1e67"
                  }
                ],
                "id": "b9085a68-4e84-468e-80f5-b0e6d684f9ec"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f37a5940-f3a2-4c9a-af6e-0db437be3860"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "6b326cd8-008f-42e5-8470-8b7d8ee2cf58"
              }
            ],
            "activeCells": {},
            "id": "096b0a65-cef3-4fe0-8063-6667442e2be4"
          }
        ],
        "id": "cea0565c-9807-4d04-9aa5-8d47cc4c2864"
      },
      "sampleMarkdown": "# Sample Specification for ParkingExpiry\r\n\r\n-> id = 44b33583-4b11-4455-9c0c-2f61f7fa464a\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4791740-06:00\r\n-> tags = \r\n\r\n[ParkingExpiry]\r\n|> TicketIsGiven\r\n    [table]\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Player",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.PlayerFixture",
                "id": "8861fee3-ff0a-46db-9206-e90ea91c5913"
              },
              {
                "type": "comment",
                "text": "## PositionIs",
                "id": "231ec2a6-c74e-4382-9f40-6dcd6b8ae94a"
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
                        "id": "92d2d650-82d8-4c4d-9e42-483ad28934c8"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "f7847b45-1205-4184-8f63-6c3f04ef19d7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "6b4156b1-5d32-4ce2-be39-d2608ea2d3d1"
                      }
                    ],
                    "activeCells": {},
                    "id": "feb3d2b4-76a0-43fb-8a4f-9d0df6167a64"
                  }
                ],
                "id": "afe6cd0c-5af0-4ca6-90f7-6b03e4a9932f"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "174398a9-1331-4122-a393-0261c104ba34"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "98277db5-6edc-4bd8-9b1f-81a022573a4d"
              }
            ],
            "activeCells": {},
            "id": "5bcbfb90-cb6b-47a8-a5db-676e2a61c5d8"
          }
        ],
        "id": "466cd2a2-178a-424c-b90a-89997072f703"
      },
      "sampleMarkdown": "# Sample Specification for Player\r\n\r\n-> id = e8c2aab3-f3fd-4f93-a9ba-18c5de25881c\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4791740-06:00\r\n-> tags = \r\n\r\n[Player]\r\n|> PositionIs\r\n    [table]\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "SelectionList",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SelectionListFixture",
                "id": "d9233cff-b04f-4db1-af5f-3c250815c435"
              },
              {
                "type": "comment",
                "text": "## FirstAndLastName",
                "id": "3e26c30b-6498-451f-87a9-dbecbf5df814"
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
                        "id": "a11830a2-093d-4909-a4a8-a0c2ede2f0cf"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "1c424cbb-0bb2-4146-bac5-7f1e137cbfad"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "eae007a4-018b-476f-81d4-957eb79b7302"
                      }
                    ],
                    "activeCells": {},
                    "id": "c58ed4c4-eea1-4251-8c55-d806a26871c7"
                  }
                ],
                "id": "501569d7-09a5-407f-bd61-a09b6bfcfad5"
              },
              {
                "type": "comment",
                "text": "## names",
                "id": "09e95acb-6db5-4c79-94d8-891f6d2561b8"
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
                        "id": "2faff9f7-6dd0-4e7e-bd37-7cff13110ff6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "4e1443b1-e8d1-4c42-83fd-96f546ab4c72"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "df61e611-64a6-4e4b-b094-3934d0804c91"
                      }
                    ],
                    "activeCells": {},
                    "id": "c4dc0154-29c2-4f27-ade1-911e07ec4175"
                  }
                ],
                "id": "5e0c8e00-c1ae-47c7-bfea-6578f083de09"
              },
              {
                "type": "comment",
                "text": "## TheEnumOptionIs",
                "id": "5703aacc-763e-4ecf-a3e1-a955f6a54f5c"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "SecondOption",
                  "selectedOption": "selectedOption"
                },
                "collections": [],
                "id": "0f89aa76-f4f5-458b-a34c-e993374a4b6f"
              },
              {
                "type": "comment",
                "text": "## TheNameIs",
                "id": "77674759-4e98-4f14-bdf8-67d008b9666f"
              },
              {
                "key": "TheNameIs",
                "cells": {
                  "first": "first",
                  "last": "last",
                  "fullname": "fullname"
                },
                "collections": [],
                "id": "57c63947-644f-4b24-a22c-78ba4d94085c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "8753cb31-741a-4ef5-8d90-8f5b948c4aed"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "b277c795-9fec-4c7f-a32b-361a6da586d4"
              }
            ],
            "activeCells": {},
            "id": "6e0ffd4b-2b9b-4b2f-b4be-79a8276aee13"
          }
        ],
        "id": "a223fa50-1db3-4085-aa5f-3cd8822063bc"
      },
      "sampleMarkdown": "# Sample Specification for SelectionList\r\n\r\n-> id = ed648b68-1bed-41b6-847a-f6e232cef1e3\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4801716-06:00\r\n-> tags = \r\n\r\n[SelectionList]\r\n|> FirstAndLastName\r\n    [table]\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n\r\n|> names\r\n    [table]\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n\r\n|> TheEnumOptionIs option=SecondOption, selectedOption=selectedOption\r\n|> TheNameIs first=first, last=last, fullname=fullname\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Simple",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                "id": "291deba1-6c8b-428d-ba84-8ea233bb0cc7"
              },
              {
                "type": "comment",
                "text": "## A",
                "id": "4e68a772-3dfe-44fa-a1be-ae7cb654b841"
              },
              {
                "key": "A",
                "cells": {},
                "collections": [],
                "id": "9c90ec82-2f17-4b10-94ea-2afbf829e35f"
              },
              {
                "type": "comment",
                "text": "## B",
                "id": "9213f8b4-9197-4b15-b75e-66cfc0d489da"
              },
              {
                "key": "B",
                "cells": {},
                "collections": [],
                "id": "90d2413b-3cd2-44f4-9d9e-1ee1e82bcbdd"
              },
              {
                "type": "comment",
                "text": "## C",
                "id": "a8295c10-d589-4167-a6ef-f0150551473a"
              },
              {
                "key": "C",
                "cells": {},
                "collections": [],
                "id": "f2aa10aa-01e0-475b-88f8-1736b5b800c3"
              },
              {
                "type": "comment",
                "text": "## D",
                "id": "5f3a7ab4-5d85-4ead-b0db-0c3d5558c3bf"
              },
              {
                "key": "D",
                "cells": {},
                "collections": [],
                "id": "e5c4512c-032c-42ed-98cb-3534179474ab"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "a498ea5c-0650-4a7c-bddc-44d44437d9b2"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "911674b3-0b06-45fa-9b97-14e5558c8416"
              }
            ],
            "activeCells": {},
            "id": "779bf11c-4ab2-4c4c-a6b0-7c5b4a616611"
          }
        ],
        "id": "5e6f229f-dc3b-4077-a0e6-c487cacdfeed"
      },
      "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 3c239016-1e2d-4b19-8e77-9b65c66b6286\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4801716-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, January 10, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "c73fa551-6b9c-4fd9-b239-7108e6d2ca57"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "90793375-12ed-47ed-8d66-b5f16ed82ad1"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "072e3de7-af22-4975-8520-faad7b409ff3"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "2bfb0ff1-c6fe-4f94-bccc-35a8bef3e583"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "3fa69a6a-0396-4217-9bf5-2fecae134dce"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "1949345c-560b-4d85-aeee-50785fe240cc"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "ab873003-4c05-42e8-b244-e4bddd2d5282"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "c0879c23-f6e5-4c10-9496-e17e410b8934"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "874a2938-e026-49e4-b919-685cab12e3e9"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "a5cc3877-5c77-4cb4-88f7-f947e5b9d996"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "a7679c95-a1d0-4606-8dc8-afa3a1a663d4"
                    }
                  ],
                  "activeCells": {},
                  "id": "4e679119-f7da-404b-9b34-91f499c3f09b"
                }
              ],
              "id": "8039b796-d2a0-45e2-821b-ece8a332c8cc"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = ff949030-f5b7-4579-80aa-3e26449aff5a\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4801716-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, January 10, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "SingleSelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                      "id": "ca7b2d8c-c3bc-4832-ad5f-03ae1fd5b34d"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "99a7cfd1-efc2-4220-91f2-80fdf99bf6b0"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "66704bf5-1a70-4189-be76-8b4d475159e3"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "c01a6021-98ca-494d-adcf-967220056df9"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "ca319e9a-483b-4b38-933c-59a74e273eb1"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "9c32875f-b190-474d-8479-d273a4146ce4"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "5f3b72e3-0595-4bf1-a752-1dc06d668d83"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "0c67b039-8384-4548-83ac-8ef8f74e11a1"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "5b6f6245-b109-4ee0-9d48-8ad5a4a12984"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "1acceff6-b3c6-4f0f-8483-16691d52b40d"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "e678fcb7-fabc-44c3-a752-9524a7dd035a"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "f5e7d490-9b2d-4062-aa95-b122c4181022"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "e5aff5f6-cec8-4a94-8d74-0f426de25e85"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "a512c6bc-c7ce-467c-b2fc-69c77b527b46"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "cdffc4aa-aa2a-4c98-a8c1-9479ff9d3d41"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "5083a79a-9180-428d-b998-9b80430fb733"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "29d6cfa1-8bfd-49cc-80a2-7b5b33ee9a68"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "56e1a98c-bacd-4346-9824-96ed4269d246"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "6757b5f6-3fa1-46d2-b686-b03b2b91cc4f"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "a23a7172-d418-4acb-8af8-0a3a6a694b23"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "ad2d3926-37e2-46aa-a026-3efff255bdfa"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "285ceae9-b796-4c8d-b5b0-a2129f63a85c"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "27510903-099e-4827-8722-691cbbc9cda3"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "b8a0f13d-9a57-4768-a95d-e5bcc4834b4f"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "1e2f679d-396f-4443-bd7a-bfa35d72064a"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "7a04bca9-e2e2-4781-8b5b-a16e4c4ffe38"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "4ea20c4f-3882-454f-95f1-7d4fe8fd630e"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "f4896cc3-d3e4-47de-b738-f006910ffcb8"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "73c88637-a080-4840-9c35-3a322660c51b"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "b9e51ed8-c7bb-491e-aec7-99096cec1bb3"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "f880782a-2757-4dd6-9041-6d8b996372d5"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "c3c291c3-c485-46a4-9483-28634f64c6d3"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "c2f1e9c5-d19d-4925-90e4-cfd5676ea066"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "57edf000-4ea1-409f-8f4d-d89fb3686b51"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "8b2200e0-07c0-4af8-8fc8-455211505e8b"
                    }
                  ],
                  "activeCells": {},
                  "id": "f5c787b0-eae4-477f-aa9d-374d96c3094b"
                }
              ],
              "id": "0a4f5566-bf01-46e9-8b94-87cc822b4a03"
            },
            "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 447cfc4b-b65a-4b44-ac3a-d4bdfdc323dc\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4801716-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
              "last-updated": "Tuesday, January 10, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "66678832-6251-4ec6-90cf-0c79c4302dd2"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "f4cde428-9733-4fc8-9acc-c0f5f662b049"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "61164b3b-db99-4c05-8eb1-9535a23a607d"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "180f1e94-c0a2-4e49-be20-779dab5753a7"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "8d674261-a6eb-42c6-8e83-529517a64c2c"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "65bf430c-55c0-49fd-a289-cdbedd5de8a7"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "cc0171e6-49d6-4d6d-8c8a-da5dfcf2999f"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "cf984ff5-c0ab-4edf-953f-aa8f268d5960"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "3068b29a-eb4e-4b0a-9f39-0b574486365a"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "f2d0a89a-bf67-4959-97ed-d1ca39bf2bab"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "87dafbea-84a7-4c53-835b-a9b709c0531e"
                    }
                  ],
                  "activeCells": {},
                  "id": "809acd85-b1b3-4fb3-9d34-076e6db125c3"
                }
              ],
              "id": "4d081b5d-2a45-4bd7-ac87-5b9107260bc3"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 50e19492-661e-454c-bf71-d6fd09d78941\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4801716-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, January 10, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "MandatorySelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                      "id": "c1d92676-3bbe-4d80-b6a3-68ef6017222e"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "8d8999a7-5992-4f24-9b71-a2cda824666c"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "9bca7a46-a380-48c8-af96-75361fe15a32"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "2aead9a4-669a-4a01-b316-f2c4459df25f"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "8c8a86f9-5258-4b91-93f0-9ecfe0df77a0"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "436bae85-2367-4b1b-9b3f-d52c5a431362"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "b4b08f63-41a7-4902-9f53-4aa66a2e8cc0"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "104d410b-45e9-4574-a3e4-ac4e2de177d0"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "08394a46-28fb-4d5e-a1fa-a730536d60e0"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "de6fcdf9-f98d-49ea-aba2-ae430bf73ec2"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "f189cae8-a80d-47a5-bd7d-e9c611ce61d0"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "fcbda57c-ce17-44fd-af9c-9c021c5869e9"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "7ba0deb6-ddee-4022-8f68-b08469ddf4be"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "e4226449-a3c3-4089-9727-ce6a1c0cbcd6"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "f6cbdeba-03e9-4dca-a979-c52b385cccbf"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "7008bb74-f99a-47fc-b05c-a714ea95eb79"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "1372287b-08ae-49bc-b10d-d398cb1774ac"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "80c00f8c-43c0-411f-95f7-b54d9979fdd5"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "a330037e-9e41-4920-aac8-b5a6773b8511"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "55e7bc87-92b6-40f6-a533-50bb6c038760"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "28d10eaf-1281-4430-b03b-dac4a0ad43ac"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "5e39e016-230e-4028-b58f-9fcb5da07a88"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "9c0f792e-6491-4d7c-a894-a7675f725379"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "e563a6ec-4250-49c8-bfbd-c770bb81eacb"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "99b621ff-82bb-47e7-b93e-92dbd6012c43"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "42da4891-7243-4258-b216-0f20cefb46a6"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "598f5365-d451-4c83-903b-4d7f0b3322e9"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "64247808-9ab2-4d53-844f-c7cb00a9fe41"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "1d8a2854-941f-42f9-8d1a-59f5605d4379"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "a44dad9a-ed88-473e-9f08-bfe485f76175"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "689c6d0a-dda8-4915-9f42-408406a3d820"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "edb27b24-0d02-4c90-b644-7353dda7d5e0"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "cc17e477-6fb5-4c7a-9711-bc7f23c0d3a9"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "7834f186-48cb-4e36-84ce-51754834a2f3"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "c2447261-1f30-4fa7-a29c-a6152f25dd2b"
                    }
                  ],
                  "activeCells": {},
                  "id": "8e5549fe-e7a5-495b-a525-05ab0bf8472a"
                }
              ],
              "id": "28ba4359-5ec5-477f-bc4e-2c3a408d6e9e"
            },
            "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = ca472759-9a0f-4079-83b4-ab63490d6442\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4811692-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "EmbeddedChoices",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedChoicesFixture",
                "id": "b35a051e-45cf-483f-bbde-069790ddd02d"
              },
              {
                "type": "comment",
                "text": "## Inline",
                "id": "9cfdbbaa-ca54-4891-9df9-611a61572352"
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
                        "id": "46673495-682b-4d92-8a8d-1a0a24ff41ba"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "ad9fd03b-3807-420f-bd79-b72ea975c80e"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "ff4c6d65-4c4d-4386-9405-086f155c5ab6"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "102b31f0-4171-47d1-9686-ac56596bdbe5"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "25d8cb62-3091-4ab3-964f-dd3fe20dc433"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "0dfba7bf-8e33-4cf3-a949-9401b0473138"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "1d97af99-ca8b-46fd-b8c9-7fe65c2f044e"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "5e46c402-3dcb-458b-a60a-7fc878264bde"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "0d1353c9-f434-4ab1-b6be-7d7114d29d7d"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "0d78ef0b-fa1e-45b5-8ee4-3a2d98d251a2"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "fe0bc45f-4bb3-4dff-8363-341977b70a65"
                      }
                    ],
                    "activeCells": {},
                    "id": "34afa70d-87aa-4446-9a7e-5efb02cb9634"
                  }
                ],
                "id": "5169d7fb-b97d-47ff-8cb9-81868acc92b9"
              },
              {
                "type": "comment",
                "text": "## MandatorySelection",
                "id": "ba48ed99-3025-4455-a65f-c65be1db97ad"
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
                        "id": "b9bea314-3791-42f0-953c-b5e7e1098c4e"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "59b94b2a-a497-449e-800b-520578863425"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "8222c949-e3ee-45fa-a137-5a2f25e5e334"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "bf2d362f-719c-47de-8ba1-3a40c774b7a8"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "b976e97a-affa-4b24-ad22-c3f3a6f2ccbe"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "1a268e78-454b-4d6e-90f0-bee7e43f2b0b"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "e334641c-ba7b-427e-bb8e-52d372322dde"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "db7173c5-20af-45ea-9a5c-a6c5f9013b5a"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "e1d60e3f-9914-496b-95e4-0e6975c7f446"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "29fedbb1-9a47-4149-910f-c05d72990586"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "422e0efe-199d-4207-ac93-bc3b1df4909a"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "1b449fd6-9c82-4f36-bd92-3ed8d5252510"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "acd45f3f-7918-47e3-a707-1e04d88301ad"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "b1f2cf3e-4f55-40ca-9c18-3f8120840092"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "a6cda79c-5301-4593-b7df-d26cb213c6fd"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "23cf4714-c070-4682-aa6d-766b7458a9ee"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "7893af23-676f-4a7d-8ec8-4677dcfc54d6"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "e536a712-4398-4507-ba39-447c3e217587"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "9f35a7fa-2056-4a8b-a5cf-72815efb7ded"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "b29e9403-de65-4a11-a5e8-bcb3f6db1867"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "c9f1983f-f47a-4450-b48c-c754988fec86"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "b761d1a9-f5c7-416c-85dd-10740b50a838"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "64134c27-61c8-46bb-98d7-9f58059d3550"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "fdc22594-b24e-45b6-ae5a-9ffb2ff4368a"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "20724ffd-10a3-46d3-bd2b-abbf6be3fb14"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "c0d91357-0c75-45dc-bf8c-3b7f21734522"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "f5333c99-d636-4f19-8d68-0af53ebdbd92"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "abc1f65d-527d-4a20-8220-948f24a60b21"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "5531a995-e0d0-4811-8076-7b18a633e25a"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "88b4954d-a28c-4d86-b1ab-574c7fdf0694"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "3ef3c2ba-90db-4736-aad5-28d0d0c3b061"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "f4de644c-f3f6-4a9b-b5da-e015bf92f61d"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "ae85fd3e-ccd7-4f31-bd8e-802698095d8f"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "9f5cfdf0-afbd-4c83-9080-3b9c50eb5da3"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "8ad6a4fc-ab2f-4118-81a5-f13287b57956"
                      }
                    ],
                    "activeCells": {},
                    "id": "1b93f222-3d3e-4350-9398-84a9c8a8f547"
                  }
                ],
                "id": "e16a3726-a915-4c1e-9d6a-ec67d6717b43"
              },
              {
                "type": "comment",
                "text": "## Simple",
                "id": "b382ba62-51e9-47d7-8c3a-e5df63dac7d7"
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
                        "id": "9019e0ae-8884-4c89-81f3-dcdd76e19f67"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "8943d65b-8951-4cdb-91de-f8d5b8369266"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "6073e55f-a6ad-4116-bef3-b43c2e290090"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "7b85d565-a9ee-48eb-8aff-b74dea110c1e"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "685f0f01-3999-4c34-9b9b-f8e94e6ff1ff"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "fea158db-5003-44e2-877e-986bc88accb4"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "266f9110-576b-4227-85a6-d21b2704eb48"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "8c847152-47a4-451b-9843-7a25e7e826c4"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "1b6c00fb-0166-4da4-83e3-ea53522fb5ae"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "7f9bbb73-b00c-4e2b-9649-a685a1d3b402"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "ce7aebaa-6c01-4448-8c5a-0a703d1374a6"
                      }
                    ],
                    "activeCells": {},
                    "id": "fa51b1af-626a-4099-84ee-371d06f36d27"
                  }
                ],
                "id": "19f10bd2-876e-4a74-8a2e-e42707ac43cd"
              },
              {
                "type": "comment",
                "text": "## Single",
                "id": "b1919a06-100f-4012-a1e0-cea8e0a182c9"
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
                        "id": "3a7c9641-2d72-4f35-90ef-02e28ea68542"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "bb9c800d-caf8-4bbd-b59c-2d3fc07088f2"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "0e144053-28be-409c-9b5e-2d04462f8617"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "664ab226-f61b-4870-9d55-b7defcfdf66a"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "5236c47f-a7e7-4b93-94fc-79b88b43e35e"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "2b63edc8-fff1-4474-8886-6f7023beb405"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "911a9a41-344a-4379-bdd4-21ce3afa290a"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "479e0e22-b872-4531-889f-4b52d3d9b28e"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "273d0a33-c254-40c1-9bf9-f7edb0f298a7"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "f1d0db30-4e80-4d44-bebe-bd6b047be5d1"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "6a1d4bf2-fec2-447b-906d-81c38ee21497"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "0a3e0c4e-74e9-494c-b450-8dbccd5c842c"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "1e56072d-c41e-450d-a456-c6776176a2a3"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "4698fcc9-351e-4055-9eaa-8e3fe35465c1"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "5283678b-e9ee-4671-a924-6f871a11d7a7"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "e21ed202-622f-4e19-9645-2952b5f77824"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "03e9e972-1c2f-4d67-a901-b6a36cc6c1ca"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "4960dbfa-1007-4cfd-8e75-57b5b787fd19"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "d03600c3-ad9b-4b6e-b52e-2023795f9810"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "80e75664-c4b1-4b81-870c-5737cbd1a79f"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "fa6d0dad-74be-4a60-950b-6e5a3bee1fca"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "5a2d98e7-acba-4017-aec6-72a7862e3ffb"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "38f852f5-0764-4eb5-883b-3e0d1eee6ef6"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "e0cecfb7-7a77-4e15-ac48-72888653b635"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "fcc2a3b3-1135-475f-a3bc-3c21067881fb"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "3eac8a41-3aca-4d1b-bfb2-8d654db445d1"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "7b93454e-50d5-4cb9-901e-011bbe9464c7"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "92ad841f-85d7-4a74-969f-27941bcde8b3"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "0b3e6572-0bed-4a5c-afc4-335b9a4442b0"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "635e9973-46e5-4b42-9a15-619f7ab7b712"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "03168f32-8ee8-493c-bf78-3f4c9513a5e1"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "2cc92886-396a-42a3-9cd0-83b914b27681"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "2eafbd25-10ed-4ab0-b57d-4595ba0a690d"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "f27370be-93c3-4155-aa47-a72b4dbce42b"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "fb2e971e-8add-44e6-98a5-7c23cc674b88"
                      }
                    ],
                    "activeCells": {},
                    "id": "42aea28d-f5ac-419a-a460-b0264abd0a7c"
                  }
                ],
                "id": "ad081442-0aa6-43d2-a7f5-0c5a673b4db0"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "d3faeee2-5e73-4705-8c86-7e4159833b88"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "699433a8-f40e-4e2b-ba0c-bfd302241d43"
              }
            ],
            "activeCells": {},
            "id": "c7213956-7a56-44b7-9e93-7e7c2c20876e"
          }
        ],
        "id": "68051d66-922c-49ff-a321-3faadd6a8a0e"
      },
      "sampleMarkdown": "# Sample Specification for EmbeddedChoices\r\n\r\n-> id = c88889b2-049b-4c39-8501-e5672920c79f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4811692-06:00\r\n-> tags = \r\n\r\n[EmbeddedChoices]\r\n|> Inline\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> MandatorySelection\r\n    [MandatorySelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> Simple\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> Single\r\n    [SingleSelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "SingleSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                "id": "359f4594-2db8-48ed-a445-fa7871102eb8"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "4eb31226-dd3e-4b13-8654-7a3f7c3c2831"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "f963ec43-1409-44c2-82ae-cdae1921f13c"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "36747f17-8237-42b2-8659-cf1ac34ecfed"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "5b3ecdb4-24e1-4fc2-8755-2c6dcb9a27e7"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "0fa6fbc5-ac0b-42bc-a85e-3e7b2612b43e"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "56b71587-6d97-4522-b58e-c91c4520b5fb"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "e60e2337-b809-4bde-923d-4f6d03e1190b"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "e96ffc18-29f4-4090-95d6-1c2571ea95b4"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "a8454485-b758-4566-b9c1-5e1bf94a2e72"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "2c051b05-989f-4e38-b5b4-dfc9ec185c17"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "6473c237-8ac7-42a2-85a4-980582895d08"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "7752e28c-7837-47d4-bbe9-8f0fa2555fa0"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "d0a3adb1-bf9e-4ff6-b70e-5e7df61e1a95"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "94ced695-5b60-411e-a5db-325a886d9b5e"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "76851659-b9ff-41e4-b964-38fbee514b57"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "225ae567-c536-4012-87fe-9290e23c9872"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "f4156136-dd48-4917-aaae-479b50921e79"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "378f2aa8-096d-4982-be1a-6717b2198641"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "23759140-2085-4f2a-bec0-e77403707e65"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "04556be2-2091-4d51-a8c9-dd5a3ee1db94"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "f1f290a5-26c2-48f5-bdd6-969dcef0a057"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "9f339e77-c4bc-4d5f-b81f-239dba4a6d31"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "fbc40d74-3e29-45fb-a8d0-831782579f1a"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "81c24322-32b6-400f-8555-3c01a7446082"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "1a7a2c6b-3468-48c3-84e9-fd56c14ee4a7"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "0863338d-3db2-4bb5-811d-0f8996a6a9dc"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "908f34b3-8cce-4a89-be1a-dceb9269b6e3"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "0725d6c1-f509-4028-89e5-5db027c8d017"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "bb512f78-2926-46f4-bdd8-846ea64f4bca"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "43499d46-0f52-43aa-89dd-0e558f54379c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "410b2acf-727a-47e5-84e1-5ad3538c0763"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "f6d5e933-58fb-468e-8300-664c95bf2278"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "5ebf2438-74c9-4ad9-96d7-35ebb20437a8"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "49b3c71b-1eca-4631-bb19-d415595dd042"
              }
            ],
            "activeCells": {},
            "id": "b092f69b-8819-4c99-bc39-b51dbdb855b9"
          }
        ],
        "id": "ccbe462d-eacc-4b37-83d6-b8c4e1a6b08f"
      },
      "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 3a4a39b6-b674-4e6c-aabf-c547899f9825\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4821668-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "OneOrMoreSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.OneOrMoreSelectionFixture",
                "id": "2336ffa9-08a0-4f20-bd5c-cb58f7b56a92"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "9c6ee6d5-f462-4bf9-ad82-6e0e8986b3a6"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "01e98e70-ad2f-4484-b4c9-db2aaef397d1"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "d1922e03-d95f-4c29-ad3b-459f5e0b6e92"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "a30061e4-7a3c-451b-a5e0-12b64e9740c3"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "bd3a21f3-853f-49df-b3f5-8b9bb19fc9c2"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "b0d550f7-f21b-4b6e-a665-943382558358"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "6522b414-09c5-41aa-b75a-e072582c871a"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "b97656fd-0f99-4c67-97fd-91b009d2a39c"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "6c529620-bdcd-4b29-aede-58e5c836b49c"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "6dd05c10-a91a-4360-9fab-49b3f77f0a34"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "e7d3c462-a57e-4e44-8891-d64a3e5d97bd"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "9eff3ada-e2ce-44a0-ac7b-0f9a16e049b4"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "e60e51a5-a24b-49ae-b5e1-36bb2e141551"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "6b3ff903-8f2d-4718-9e5c-7db85c73f5ba"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "daa6039c-cb20-4766-b281-c2775375161d"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "c4edb06b-6aff-455e-a684-fbca512a713c"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "e504803f-a42b-4187-bdc9-bda7c17b1fa8"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "a9b9f27e-d999-4703-83da-38aab44982a8"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "e39c0f7a-8019-4fa5-8220-2e6d366987eb"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "84642b0b-7ea3-4e1f-95b6-a321f638d44e"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "bf4c5795-77ab-4c36-aed0-52560e2824b1"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "e1afedf7-1fa5-4c00-9e07-526375f190fa"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "bd0f0905-3fbb-476c-a47d-86e6985cc4d3"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "b05929b1-f2db-44b9-b0ff-7f0d5d3e3d42"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "e07f4799-311c-489b-86d1-e2983d501a40"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "aa5a0d8a-4055-4af5-af91-c9c23c32f0e8"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "a21f6b5a-3f6b-45b2-aa53-cbb3726d0382"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "845fa4cf-13a6-4bc2-8f95-45962bfb1cb6"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "262fca94-6b61-44f1-b595-8657db2d0ced"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "4a8eab65-7441-4cab-97cf-1ea90f08a296"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "250232f2-ba98-466c-8fa3-d0711d98de7a"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "20092d85-c96d-496f-b0b3-5c79231cdbab"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "a06ad53b-e025-4b5b-9755-7357775ba7e5"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "0b96f942-4789-4eff-8046-4588a34b09f5"
              }
            ],
            "activeCells": {},
            "id": "1e8325e4-e24a-4a69-a40d-20b6aebc0cb3"
          }
        ],
        "id": "2c361800-114d-4f66-a62a-929bb9c81507"
      },
      "sampleMarkdown": "# Sample Specification for OneOrMoreSelection\r\n\r\n-> id = 498c66fd-c8e0-4953-8e55-cdb6da0ef4c4\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4821668-06:00\r\n-> tags = \r\n\r\n[OneOrMoreSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "MandatorySelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                "id": "6bc29a44-7fc9-4ed3-b3df-19d50aa33296"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "35172bad-fbee-4f15-8b1c-610e4313a7b0"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "a6d30a3a-7c50-404f-8116-6a6d07de8195"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "b880b7c7-5f25-4b46-b126-3c5e1e87186d"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "080d72fa-4881-4ebe-b5c8-8c74a1c093ff"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "5e42d6f5-aad3-4cf5-967a-5671091b4b17"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "d251702d-8bc8-483c-a7de-5ad12833b2c0"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "5a2f102e-4d60-4bf3-9455-fcc7c5ca96b8"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "5db378f1-06c8-4b45-965a-dc61ebe3e781"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "24c44a6d-ee2d-47b4-9548-8aaf6118d1ce"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "092faa8f-e88c-4930-acc2-a2e9c75f02ae"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "dff58b4b-65d9-4e78-9b53-4ca0335effcf"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "5762250b-2e97-41b4-a322-8d7542e47a12"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "78bc17b6-545b-46d3-b9b1-d9c045cbf7a7"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "ac045967-3663-4759-80e2-385b48eb46a7"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "697e4be2-25af-4b9d-8865-ddd1b5f1c0f9"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "8b0937f0-6c30-4044-a5e7-002fcc92ed45"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "513194c0-ca92-4481-8618-5967c1903bf8"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "a0669174-1701-46f6-8711-b2735f54de28"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "0b6b756c-e143-41b5-bee7-bfe63311a9b8"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "aff7b74c-956e-47bf-bb3c-0a0a42a543f2"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "3d2a8c2c-7838-4367-8a94-09ff398daa88"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "30daf186-9d66-4370-835e-9785a207bba9"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "53f1d845-1f7b-4860-9cb1-c9a6b10f43b3"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "87d024cb-e130-4902-b2b4-e5c5af895d60"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "e92eeeef-8e5f-460e-88f2-114afc1195df"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "10f09d9f-1421-4be0-aee3-22e6d6c7fc67"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "eb9aca98-cedd-4442-9153-16ed25e03381"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "9d7d29d0-a520-4a31-bc34-477dc23da92d"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "77c31cfc-8f2a-45e8-bb80-1a87456b860f"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "eae117fc-e0f2-4569-ba12-e2c02043cab5"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "2e398a22-114d-4f6d-a748-ddbe78f88783"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "addcfea9-020b-48b5-842b-c72feb5fe7a5"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "60d1456a-d052-4093-8dda-5c026b66eb5e"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "4f98ce29-804b-416d-8c93-3217d0cf1bc1"
              }
            ],
            "activeCells": {},
            "id": "009ae966-7ecf-4782-abd2-0de72aa530e5"
          }
        ],
        "id": "de2d56cd-e868-4902-b3c0-176a4d24fab1"
      },
      "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = e3a1405e-dda6-48c9-a62a-199fedcf7ec8\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4821668-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SentenceFixture",
                "id": "d0e851a3-ee99-4e5a-91a3-42c857e3a5e6"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "a3d1fc8a-9d7a-4c62-a8ef-e4bb3819f2fa"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "771b889e-e814-44dc-9b65-fb4be6b23ef7"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "8f5d7ccc-cab8-4cb5-a7df-663897207365"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "2a701842-ddbc-48bd-9763-013470efbf3e"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "98fde176-8b41-4e3e-8649-9abe329fdfd8"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "8baf50ea-ae25-4553-958d-9e0c1e16a2fb"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "a73da785-4b97-40ad-8187-df5091e511a2"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "48b53e8b-9ee5-449f-aec4-b92b7ba2baf8"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "ecfa53ec-3d44-4678-b428-e6d7f3bf79b3"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "c9b21558-69f9-45a1-b3b2-c78610d9f062"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "46d38f4d-d3ed-43b8-8666-c71d8be7bdf3"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "4c321251-0e16-48f2-a67b-b1013f5b57af"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "f22a0382-4df8-4732-a868-62ae82843237"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "7bb66676-5e12-4f95-946c-6c08c6e98b42"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "f44b914b-7646-464c-a421-7f650c0699d3"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "ecb1f2ff-5472-499f-b671-be0693c5c28f"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "08f7bb38-0426-4819-9fb9-c2f608d3460c"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "5715733a-56e3-4271-89bf-8380ea0c5cdf"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "b23574cc-1179-4119-b36e-11940099ad9a"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "aff5b689-ca51-4e6e-9e20-0a34bf02955e"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "4b3ec0b0-6d1f-4d97-b352-d4a5eb46f8b9"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "ba30d272-f9ad-496c-8246-8ba18f4de692"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "257119e9-a307-4d20-b031-4ceaf86dc965"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "0644d192-37d4-4316-aa8e-876feb996483"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "1511ef02-5e45-4b74-9af4-68a4c7084ff5"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "185b63fa-55f1-41d8-bfd1-c1cfa55c4f38"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "cbf64ce5-64bc-4ec5-96df-a825bb717d1a"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "500d9155-86d7-4808-aead-4aabe069ae44"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "510afcf5-f9ef-488e-b234-b82486a5b5e5"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "5a27ed9a-1f0d-4191-b99a-cf59683f79dc"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "14f120d6-eea0-46de-afba-5b9a804abe61"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ee07d4b8-fd7f-4b9a-9bfc-4af172064c29"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "ffd81e1e-d777-4ff4-8c5b-36f8375b8306"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "66acc534-fea2-4bd8-82c1-157292747517"
              }
            ],
            "activeCells": {},
            "id": "1304b294-c17a-4a48-9bef-2a09d035e5ad"
          }
        ],
        "id": "b5435ef5-1147-4fc4-bca4-41708fb59387"
      },
      "sampleMarkdown": "# Sample Specification for Sentence\r\n\r\n-> id = ff561d84-b3a7-4a68-b063-56a367714ce3\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4831644-06:00\r\n-> tags = \r\n\r\n[Sentence]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "DataTable",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DataTableFixture",
                "id": "b691aa3b-9380-4eb7-b940-95af01e64db7"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "30b0d10d-5f1a-4cf6-92ed-73780cffe747"
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
                        "id": "038929fe-6c2b-44ba-a26c-cd66d8451695"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "2a151de4-fca5-4c56-b0a3-4be6236ddda6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "d7340568-5e80-48ac-b96e-dff98e80322d"
                      }
                    ],
                    "activeCells": {},
                    "id": "238d4a4b-d2ca-45f3-b021-749a746721cb"
                  }
                ],
                "id": "a239b503-8584-44ae-bf90-b47dbaed3093"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "912d6be0-e1d4-4ac0-a867-50b0a6651aee"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "11c33c98-96d6-4775-ab6a-388f90d34df0"
              }
            ],
            "activeCells": {},
            "id": "21d8d451-1a08-462f-832e-cbbcea5d53f3"
          }
        ],
        "id": "dd8ea2f0-1891-4cb4-bc0a-ae777762c7ae"
      },
      "sampleMarkdown": "# Sample Specification for DataTable\r\n\r\n-> id = 3c5a5855-9329-4d91-9489-9d91bf49ad2d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4831644-06:00\r\n-> tags = \r\n\r\n[DataTable]\r\n|> TheDataIs\r\n    [Rows]\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sets",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SetsFixture",
                "id": "c9ef8f1e-58b7-49e8-ac54-56209c0135ed"
              },
              {
                "type": "comment",
                "text": "## AddName",
                "id": "950a9f00-e244-4eac-80fc-630a7da6019f"
              },
              {
                "key": "AddName",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "16f2ec7e-85d7-4ed4-8d4c-778eb61d7fcb"
              },
              {
                "type": "comment",
                "text": "## InvoiceDetailsAre",
                "id": "6b6bea5c-cc70-40d4-9f21-2f27e4b1ce11"
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
                        "id": "a700befe-4992-45da-a55a-dc55ef76a3ec"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "06e9852d-e2cf-4fa5-88ee-8192a79cc68c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "13167a62-70d2-46ee-af89-722f5d8c4970"
                      }
                    ],
                    "activeCells": {},
                    "id": "b0d1d9b6-9bed-4000-9051-179f65cad335"
                  }
                ],
                "id": "e7f24f99-cd40-4bec-aa3f-23ff9c786241"
              },
              {
                "type": "comment",
                "text": "## OrderedDetailsAre",
                "id": "7a420b0c-0286-493a-8614-e440eeb8c636"
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
                        "id": "e34f0dbf-1e31-4fc3-b601-35403588f8e5"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "bc6f3e79-aeef-45de-ab4a-cb78dfaf0409"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "82e1741d-7546-4c38-ab0e-284aabaaa0ed"
                      }
                    ],
                    "activeCells": {},
                    "id": "df51bac5-b7e0-4a12-b4e7-7cdb4b7f45ec"
                  }
                ],
                "id": "14ba84ce-826f-40d0-9150-6d110721ca51"
              },
              {
                "type": "comment",
                "text": "## OrderedStringSet",
                "id": "66bb6c8d-8e96-4bc1-b83b-ca18ed49d6e2"
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
                        "id": "2d585a09-5e5a-46bc-a26c-4cc163a45853"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "c1d8fe02-bccc-44e6-8371-52210e88fd3c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "172f1b6d-bb74-4a24-9b16-173ae7437d7e"
                      }
                    ],
                    "activeCells": {},
                    "id": "feb91116-111d-4223-8380-2ed32c417263"
                  }
                ],
                "id": "70187c3e-20c0-4b04-b043-a0096cfef3b1"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "c75b6df4-900c-4b0f-ae67-484660eba3bb"
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
                        "id": "3731be54-e38f-4644-a0c3-b2c7ae55de70"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "c09f6c77-7a2b-4ef2-a66b-a04819d0cd2e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "96857ecb-2cfb-4296-b49e-cd1f48a46c8f"
                      }
                    ],
                    "activeCells": {},
                    "id": "f595ff88-406b-4e09-93f3-9d2d845b5483"
                  }
                ],
                "id": "78f72a91-c22b-4250-b562-c4ad17b5a43c"
              },
              {
                "type": "comment",
                "text": "## ThrowsErrorOnDataFetch",
                "id": "c6723103-6d4a-470f-8f2f-eac7f8b5b757"
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
                        "id": "21fca2e5-d10f-4402-a225-4c0222efd7ad"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "eb26cc44-e783-4277-9909-b1a2deec3ed2"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "447c3cd7-f97d-4cdb-89b5-9624241889cf"
                      }
                    ],
                    "activeCells": {},
                    "id": "e7c8c9b1-f703-4a92-a3fb-0742840ef5e3"
                  }
                ],
                "id": "5d51eb4f-3cde-49b2-9151-4a62a2ce5768"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "41ee5eea-32a5-4b37-9dd9-e7e8a2c0b9d2"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "001f4349-7429-4ff5-96f7-b8986a31462d"
              },
              {
                "type": "comment",
                "text": "## UnorderedDetailsAre",
                "id": "9df567f2-1a34-408d-9c55-048fdc1567e7"
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
                        "id": "9e2ec355-911b-470a-b355-c3e651361810"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "9f1f072c-4ff7-4c20-be8d-a3e999f931e7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "42954d7e-7861-4d5f-b60f-737422018416"
                      }
                    ],
                    "activeCells": {},
                    "id": "000584a6-61ab-46a1-8fc1-cbd544d571ea"
                  }
                ],
                "id": "118a3e84-340e-4bfc-a592-694d536cf615"
              },
              {
                "type": "comment",
                "text": "## UnorderedStringSet",
                "id": "ee0f8794-278b-4573-9966-b8f046fb8f76"
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
                        "id": "d3c1d7fd-5c77-48e3-8991-c2d5ff5d40fc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "32296922-5825-403d-84fe-a99f0e8ce744"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "313eaa37-5e1a-46c8-82ee-57f570bed309"
                      }
                    ],
                    "activeCells": {},
                    "id": "d490460c-a28f-4d60-85f4-8d33caed3245"
                  }
                ],
                "id": "0761ac84-1b95-4596-b2ab-660fd4bfb67a"
              }
            ],
            "activeCells": {},
            "id": "f85e7863-26da-40f1-9423-eff35a2a5005"
          }
        ],
        "id": "6cca861f-e840-4898-9ab1-368e8fd5faee"
      },
      "sampleMarkdown": "# Sample Specification for Sets\r\n\r\n-> id = f1d4c0a3-6400-4d97-a3cc-253812db22be\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4831644-06:00\r\n-> tags = \r\n\r\n[Sets]\r\n|> AddName name=name\r\n|> InvoiceDetailsAre\r\n    [Rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> OrderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n\r\n|> OrderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n|> TheDataIs\r\n    [name]\r\n    |name|\r\n    |name|\r\n    |name|\r\n    |name|\r\n\r\n|> ThrowsErrorOnDataFetch\r\n    [rows]\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n\r\n|> TODO message=message\r\n|> UnorderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> UnorderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "SometimesSlow",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SometimesSlowFixture",
                "id": "96a4edfd-d2a6-409f-bccc-8c1ccd9b4c1f"
              },
              {
                "type": "comment",
                "text": "## ReadText",
                "id": "a06ba070-5905-4962-b898-2f34e643a35f"
              },
              {
                "key": "ReadText",
                "cells": {
                  "text": "text"
                },
                "collections": [],
                "id": "f073a148-4068-4549-8211-d011106de2f1"
              },
              {
                "type": "comment",
                "text": "## Slow",
                "id": "5c6c732b-4721-43ba-ba3b-7941db818c64"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "f855304b-2e48-4b0d-975b-1d7d09457a8c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "16bcc828-414c-4df4-9e95-aab90babdba2"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "d0811b79-762e-475c-a239-9c5c7df6999f"
              }
            ],
            "activeCells": {},
            "id": "fcf1bfcb-9a20-4213-b09c-3433e7103dda"
          }
        ],
        "id": "5b4ac7ab-042f-4b71-9cba-3bef1a895a2e"
      },
      "sampleMarkdown": "# Sample Specification for SometimesSlow\r\n\r\n-> id = a3d56023-a523-430d-90e0-26db5767901f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4831644-06:00\r\n-> tags = \r\n\r\n[SometimesSlow]\r\n|> ReadText text=text\r\n|> Slow\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, January 10, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Table",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.TableFixture",
                "id": "f0d9e6f4-09b3-44f0-bcb5-1f4c64c9b952"
              },
              {
                "type": "comment",
                "text": "## AfterThrowsError",
                "id": "4f119d8d-7494-449c-9e02-63b6c1744a28"
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
                        "id": "05d4c371-e57d-47b2-8c29-2dc82ef301f3"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "b6bb7497-a20f-4c3b-a624-c82d4cc2a780"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "9f85d95a-442b-410e-9692-6b8a5086e101"
                      }
                    ],
                    "activeCells": {},
                    "id": "1ba30580-74c2-495d-a017-0442380a81ab"
                  }
                ],
                "id": "78623384-c05d-4dc5-b957-d0ac9bd47c93"
              },
              {
                "type": "comment",
                "text": "## BeforeThrowsError",
                "id": "10fb0428-5958-44c6-9637-75f5bcb2b144"
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
                        "id": "3f580c7d-d772-4523-b5ed-13c15fef7042"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "f2242f38-2fab-4aa2-9a87-b7d3513789ea"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "a7147a08-d7b2-407f-ae9f-8c48039696bb"
                      }
                    ],
                    "activeCells": {},
                    "id": "086cbee3-da16-45b6-b982-e84173186c3c"
                  }
                ],
                "id": "95c2a765-154f-4e65-92e8-a9fe3f2d0473"
              },
              {
                "type": "comment",
                "text": "## decisions",
                "id": "f3cfcc02-390b-4e52-b33b-1e2ad0a43ce2"
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
                        "id": "1a7c41d3-55d4-4573-ace0-d817d4744c8e"
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
                        "id": "00f56055-caad-4e67-af1a-cfe2b1bcead6"
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
                        "id": "2f4fc0b8-0843-42f0-97e0-bfb5488cf98c"
                      }
                    ],
                    "activeCells": {},
                    "id": "7589346b-0748-4527-86e8-146b2287713b"
                  }
                ],
                "id": "41245085-e788-4cd0-b78d-028dcccac622"
              },
              {
                "type": "comment",
                "text": "## Divide",
                "id": "c01f28f4-3005-45d7-8425-5b5af63cfdfd"
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
                        "id": "eafc87d3-4656-4766-af4e-0bd693edb306"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "ecc8594e-7c1d-4d10-a443-4d62b021aae7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "06fca8da-11e5-4f04-9b65-f57f072d7aff"
                      }
                    ],
                    "activeCells": {},
                    "id": "0d00af14-6cb7-45b6-a605-f2bbd1492a16"
                  }
                ],
                "id": "fc9965ed-d3d5-4b0e-9d5f-cea7902d9d2b"
              },
              {
                "type": "comment",
                "text": "## IsPositive",
                "id": "84380bd3-df11-426b-a9ee-9cee4e754a0b"
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
                        "id": "4002391c-e54e-44ca-b4e1-6d65e0f3f99d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "45f8ab1c-e809-4e0f-ad9f-c349971cc1e1"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "9f6b1fe7-ade2-4888-8c1d-520fc1ff5cb3"
                      }
                    ],
                    "activeCells": {},
                    "id": "c1157605-353a-46f6-bd84-eb9858cb56e4"
                  }
                ],
                "id": "8c9b071c-162a-4511-aa7e-9a3aebe61079"
              },
              {
                "type": "comment",
                "text": "## Sum",
                "id": "862965e8-d54b-4ea6-82f2-c8565163ef0d"
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
                        "id": "4416cace-609b-4f2f-97f7-3a73ec9dbc89"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "102a1dd5-f196-4daf-8135-4ecfeebfb2b5"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "8dfe8c3e-4dc7-4ced-b24e-3c994de3213c"
                      }
                    ],
                    "activeCells": {},
                    "id": "73a3a45c-9bfa-4b1f-9dbe-a2a18e883870"
                  }
                ],
                "id": "08980980-52d8-4689-b76a-65a426bde313"
              },
              {
                "type": "comment",
                "text": "## SumInternal",
                "id": "706799e4-4bfa-41a4-9a6c-c90e088a203a"
              },
              {
                "key": "SumInternal",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "32ca3582-d812-4795-8acb-ddefbb690504"
              },
              {
                "type": "comment",
                "text": "## TableWithLotsOfOptions",
                "id": "228b53be-254f-4242-a474-9409b5afc7d1"
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
                        "id": "d31e3a6c-74d3-49eb-96ef-1b7bf1307c63"
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
                        "id": "d306b057-611d-464e-aee1-f37287e212da"
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
                        "id": "9fc42097-44d6-4801-a509-707aaeb2886c"
                      }
                    ],
                    "activeCells": {},
                    "id": "7acd5ef2-a1a1-487a-a573-0bc640389027"
                  }
                ],
                "id": "251aafe1-312e-4240-839f-ab63a4f5eda9"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "b81a3574-c7d9-4e89-9b36-cb51036690ba"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "51c51412-c664-4fee-b4d9-9fecc1d5d79e"
              }
            ],
            "activeCells": {},
            "id": "9352c39c-b743-4976-837e-24ea87c86b85"
          }
        ],
        "id": "118e009b-6b12-4cd5-817e-86fb1b7f79ad"
      },
      "sampleMarkdown": "# Sample Specification for Table\r\n\r\n-> id = 2f29808d-b6ce-48a3-a8d5-9548fffe764c\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-10T12:32:20.4841620-06:00\r\n-> tags = \r\n\r\n[Table]\r\n|> AfterThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> BeforeThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> decisions\r\n    [table]\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n\r\n|> Divide\r\n    [Rows]\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n\r\n|> IsPositive\r\n    [table]\r\n    |number|IsEven|\r\n    |number|true  |\r\n    |number|true  |\r\n    |number|true  |\r\n\r\n|> Sum\r\n    [sum]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> SumInternal x=x, y=y, sum=sum\r\n|> TableWithLotsOfOptions\r\n    [table]\r\n    |a|b|c|d|e|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    }
  ],
  "time": "1/10/2017 12:32 PM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}