module.exports = {
  "records": [
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "64c05615-1ec4-45df-a51d-b0f098b6b2ee",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "489c271f-0fba-42bf-83f2-e3c8ee695e58",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.EmbeddedFixture.<.ctor>b__1_0(IEmbeddedSpecContext`1 c)\r\n   at StoryTeller.Grammars.EmbeddedSectionGrammar`1.<>c__DisplayClass13_0.<Before>b__0(ISpecContext x)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "errors",
            "spec": "embeds",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "errors",
            "spec": "embeds",
            "position": "setup",
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
            "id": "11442888-96b3-4631-9de0-cd2f92bc0d84",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "errors",
            "spec": "embeds",
            "position": "teardown",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "27302fd0-eb18-4b25-94b3-5e814e3990a7",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "no-errors",
            "spec": "embeds",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "no-errors",
            "spec": "embeds",
            "position": "setup",
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
            "id": "eca74a62-6e95-4345-80aa-3506db5c2fc9",
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
            "id": "986ca960-d87d-4d6b-89d2-955184f1af21",
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
            "id": "d1ae284c-4252-40d8-b7ba-bfba333cf871",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__19.MoveNext()\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)",
            "cells": [],
            "id": "ef77aaa9-8440-468f-8176-82218bc76649",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "no-errors",
            "spec": "embeds",
            "position": "teardown",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "64c05615-1ec4-45df-a51d-b0f098b6b2ee",
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
            "end": 22,
            "duration": 22
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:SetUp",
            "start": 9,
            "end": 11,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 11,
            "end": 14,
            "duration": 3
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 14,
            "end": 15,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 15,
            "end": 15,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 15,
            "end": 16,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 16,
            "end": 17,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 17,
            "end": 17,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 17,
            "end": 17,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 17,
            "end": 17,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 17,
            "end": 17,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 17,
            "end": 17,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 17,
            "end": 17,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 17,
            "end": 18,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 18,
            "end": 18,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 18,
            "end": 18,
            "duration": 0
          }
        ],
        "duration": 22,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">EmbeddedFixture.Setup sent this debug message&#xD;&#xA;</pre>",
            "title": "Debug Output",
            "count": 1,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.EmbeddedFixture.&lt;.ctor&gt;b__1_0(IEmbeddedSpecContext`1 c)&#xD;&#xA;   at StoryTeller.Grammars.EmbeddedSectionGrammar`1.&lt;&gt;c__DisplayClass13_0.&lt;Before&gt;b__0(ISpecContext x)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>\n<pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.MathFixture.Throw()&#xD;&#xA;   --- End of inner exception stack trace ---&#xD;&#xA;   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)&#xD;&#xA;   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)&#xD;&#xA;   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)&#xD;&#xA;   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)&#xD;&#xA;   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__19.MoveNext()&#xD;&#xA;   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)&#xD;&#xA;   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)&#xD;&#xA;   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)&#xD;&#xA;   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "489c271f-0fba-42bf-83f2-e3c8ee695e58"
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
                        "id": "11442888-96b3-4631-9de0-cd2f92bc0d84"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "f4561332-b4f0-4e0e-a303-0ce5e5f4894d"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "27302fd0-eb18-4b25-94b3-5e814e3990a7"
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
                        "id": "eca74a62-6e95-4345-80aa-3506db5c2fc9"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "986ca960-d87d-4d6b-89d2-955184f1af21"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "d1ae284c-4252-40d8-b7ba-bfba333cf871"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "ef77aaa9-8440-468f-8176-82218bc76649"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "97dbe89e-e3ff-4b7d-83b9-ad8d8ce06a40"
              }
            ],
            "activeCells": {},
            "id": "64c05615-1ec4-45df-a51d-b0f098b6b2ee"
          }
        ],
        "id": "embeds"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d4316b5b-b060-4493-8a40-3cc7179c36ae",
            "spec": "general1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a77e2025-6324-47f8-985a-452ed9fde28a",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a77e2025-6324-47f8-985a-452ed9fde28a",
            "spec": "general1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a77e2025-6324-47f8-985a-452ed9fde28a",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a77e2025-6324-47f8-985a-452ed9fde28a",
            "spec": "general1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a77e2025-6324-47f8-985a-452ed9fde28a",
            "spec": "general1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a77e2025-6324-47f8-985a-452ed9fde28a",
            "spec": "general1",
            "position": "5",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a77e2025-6324-47f8-985a-452ed9fde28a",
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
            "id": "56ca1d4e-08d4-44ff-9da0-529961f9a22e",
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
            "id": "56ca1d4e-08d4-44ff-9da0-529961f9a22e",
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
            "id": "56ca1d4e-08d4-44ff-9da0-529961f9a22e",
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
            "id": "b6bbbee2-74c7-44e8-a3f1-1993c911a27a",
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
            "id": "b6bbbee2-74c7-44e8-a3f1-1993c911a27a",
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
            "id": "b6bbbee2-74c7-44e8-a3f1-1993c911a27a",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d4316b5b-b060-4493-8a40-3cc7179c36ae",
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
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 1,
            "end": 2,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "CheckObject:TearDown",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "a77e2025-6324-47f8-985a-452ed9fde28a"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "56ca1d4e-08d4-44ff-9da0-529961f9a22e"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "b6bbbee2-74c7-44e8-a3f1-1993c911a27a"
              }
            ],
            "activeCells": {},
            "id": "d4316b5b-b060-4493-8a40-3cc7179c36ae"
          }
        ],
        "id": "general1"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2d8071e4-cd68-40e9-9131-81052a1a77db",
            "spec": "SometimesSlow",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "19bccc5f-c7ab-4721-93b3-c3db5d14d54e",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2d8071e4-cd68-40e9-9131-81052a1a77db",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "e06ad933-4d14-4f9a-a3b5-44f09f71ec4e"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "19bccc5f-c7ab-4721-93b3-c3db5d14d54e"
              }
            ],
            "activeCells": {},
            "id": "2d8071e4-cd68-40e9-9131-81052a1a77db"
          }
        ],
        "id": "SometimesSlow"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6ca505f4-089f-4843-8723-5b99660d85b8",
            "spec": "general2",
            "position": "setup",
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
            "id": "ced3e7a3-e60f-4e16-9478-be8db2ef24a3",
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
            "id": "839144cb-14c2-46f8-90df-999668f22b1d",
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
            "id": "9e2d92bc-5988-4c47-8d6c-e297cbcd11e0",
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
            "id": "9357028a-9564-47fb-881d-895dd620b6a9",
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
            "id": "e5ddc995-32b4-4379-89d1-ef4140a47e6a",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6ca505f4-089f-4843-8723-5b99660d85b8",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "ced3e7a3-e60f-4e16-9478-be8db2ef24a3"
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
                        "id": "839144cb-14c2-46f8-90df-999668f22b1d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "9e2d92bc-5988-4c47-8d6c-e297cbcd11e0"
                      }
                    ],
                    "activeCells": {},
                    "id": "f9a652cf-c282-49ba-808e-655c62771ac0"
                  }
                ],
                "id": "9a6e81ee-8165-4f07-b6d2-006b8450ebc5"
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
                        "id": "9357028a-9564-47fb-881d-895dd620b6a9"
                      }
                    ],
                    "activeCells": {},
                    "id": "5583c224-6713-4a42-bfaf-88c164eb03f4"
                  }
                ],
                "id": "97bcfdba-3b33-4760-b556-7c8185e1d948"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "e5ddc995-32b4-4379-89d1-ef4140a47e6a"
              }
            ],
            "activeCells": {},
            "id": "6ca505f4-089f-4843-8723-5b99660d85b8"
          }
        ],
        "id": "general2"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "invalid",
            "error": "Fixture with key 'Service' does not exist",
            "cells": [],
            "id": "09f79b24-e9ba-4431-9891-53c20af53d70",
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
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#x27;setup&#x27; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#x27;Service&#x27; does not exist&#xD;&#xA;   at StoryTeller.Model.MissingFixture.SetUp()&#xD;&#xA;   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c)&#xD;&#xA;   --- End of inner exception stack trace ---&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "61427b52-7b75-4aea-8768-4aff4e565dc9"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "419e50a0-0ad0-43e9-bfd9-e9a4f2e17890"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "d96a0412-17d6-483e-aa48-192661f2854a"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "d3691c76-5fd1-43a5-a0bf-dc87139072d8"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "5ace2ac1-eb24-4e33-97f8-ffc3980806bd"
              }
            ],
            "activeCells": {},
            "id": "09f79b24-e9ba-4431-9891-53c20af53d70"
          }
        ],
        "id": "general3"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "337eb1df-6fc1-4fbe-a941-a21599e3748a",
            "spec": "runtime-converter",
            "position": "setup",
            "type": "step-result"
          },
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
            "id": "acb3b636-7dc2-41a8-bbef-c7e86b98ea05",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "337eb1df-6fc1-4fbe-a941-a21599e3748a",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "e7d34b3b-ec27-4ec2-b5bf-fbbd4af7ee9d"
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
                        "id": "acb3b636-7dc2-41a8-bbef-c7e86b98ea05"
                      }
                    ],
                    "activeCells": {},
                    "id": "413e9041-0adb-46c8-bc8b-3b0ec39977aa"
                  }
                ],
                "id": "ab0089f8-47d1-4036-a124-33fca18bd012"
              }
            ],
            "activeCells": {},
            "id": "337eb1df-6fc1-4fbe-a941-a21599e3748a"
          }
        ],
        "id": "runtime-converter"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d870e033-1ad1-4507-a679-1c5dfc56f873",
            "spec": "general4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "ff85f061-7422-4c19-b08d-d80cd63a9b27",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "f070c51f-c401-4637-bd98-6fda4f26db55",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "12aa46a8-bf86-428e-b867-83337ad9452d",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d870e033-1ad1-4507-a679-1c5dfc56f873",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "ff85f061-7422-4c19-b08d-d80cd63a9b27"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "f070c51f-c401-4637-bd98-6fda4f26db55"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "12aa46a8-bf86-428e-b867-83337ad9452d"
              }
            ],
            "activeCells": {},
            "id": "d870e033-1ad1-4507-a679-1c5dfc56f873"
          }
        ],
        "id": "general4"
      }
    },
    {
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
            "subject": "FixtureThatDoesNotExist:SetUp",
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
          },
          {
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#x27;setup&#x27; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#x27;FixtureThatDoesNotExist&#x27; does not exist&#xD;&#xA;   at StoryTeller.Model.MissingFixture.SetUp()&#xD;&#xA;   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c)&#xD;&#xA;   --- End of inner exception stack trace ---&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "816eb9b8-509c-4269-bb06-b51f47e29d2c",
            "spec": "paragraph1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "62981957-0b23-4aa6-a057-10cd432c5983",
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
            "id": "62981957-0b23-4aa6-a057-10cd432c5983",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "62981957-0b23-4aa6-a057-10cd432c5983",
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
            "id": "62981957-0b23-4aa6-a057-10cd432c5983",
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
            "id": "ad6a7660-d138-4af7-ab87-08881aa63569",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad6a7660-d138-4af7-ab87-08881aa63569",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad6a7660-d138-4af7-ab87-08881aa63569",
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
            "id": "ad6a7660-d138-4af7-ab87-08881aa63569",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "255e3cd7-515a-4394-82da-58cd333c2325",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "255e3cd7-515a-4394-82da-58cd333c2325",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "255e3cd7-515a-4394-82da-58cd333c2325",
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
            "id": "255e3cd7-515a-4394-82da-58cd333c2325",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f8e3a05e-3945-4ddf-8d5f-bbeb710154a1",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f8e3a05e-3945-4ddf-8d5f-bbeb710154a1",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f8e3a05e-3945-4ddf-8d5f-bbeb710154a1",
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
            "id": "f8e3a05e-3945-4ddf-8d5f-bbeb710154a1",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "73c6af1c-a3cb-4b7b-80a6-47dbabe7b79f",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "73c6af1c-a3cb-4b7b-80a6-47dbabe7b79f",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "73c6af1c-a3cb-4b7b-80a6-47dbabe7b79f",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<>c.<.ctor>b__0_2(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "73c6af1c-a3cb-4b7b-80a6-47dbabe7b79f",
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
            "id": "73c6af1c-a3cb-4b7b-80a6-47dbabe7b79f",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "816eb9b8-509c-4269-bb06-b51f47e29d2c",
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
            "subject": "Composite:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 2,
            "duration": 2
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
            "subject": "StartWith",
            "start": 2,
            "end": 3,
            "duration": 1
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
            "start": 3,
            "end": 3,
            "duration": 0
          }
        ],
        "duration": 3,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">the number is 5&#xD;&#xA;the number is 50&#xD;&#xA;the number is 54&#xD;&#xA;the number is 540&#xD;&#xA;the number is 5&#xD;&#xA;the number is 8&#xD;&#xA;the number is 80&#xD;&#xA;the number is 5&#xD;&#xA;the number is 8&#xD;&#xA;the number is 80&#xD;&#xA;the number is 3&#xD;&#xA;the number is 5&#xD;&#xA;the number is 20&#xD;&#xA;</pre>",
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.CompositeFixture.&lt;&gt;c.&lt;.ctor&gt;b__0_2(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "62981957-0b23-4aa6-a057-10cd432c5983"
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
                        "id": "ad6a7660-d138-4af7-ab87-08881aa63569"
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
                        "id": "255e3cd7-515a-4394-82da-58cd333c2325"
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
                        "id": "f8e3a05e-3945-4ddf-8d5f-bbeb710154a1"
                      }
                    ],
                    "activeCells": {},
                    "id": "ae910904-801d-4da2-9af0-db63ca7bedae"
                  }
                ],
                "id": "744dae44-b75d-4a0b-be76-19697cf38aff"
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
                "id": "73c6af1c-a3cb-4b7b-80a6-47dbabe7b79f"
              }
            ],
            "activeCells": {},
            "id": "816eb9b8-509c-4269-bb06-b51f47e29d2c"
          }
        ],
        "id": "paragraph1"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "902dc045-bf5a-4731-8e68-88ede023304d",
            "spec": "paragraph2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "25712f0d-c57d-4cc6-8d44-df99beec9648",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "25712f0d-c57d-4cc6-8d44-df99beec9648",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "25712f0d-c57d-4cc6-8d44-df99beec9648",
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
            "id": "25712f0d-c57d-4cc6-8d44-df99beec9648",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "762c8148-1616-41fb-b9ac-50434eee4bff",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "762c8148-1616-41fb-b9ac-50434eee4bff",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "762c8148-1616-41fb-b9ac-50434eee4bff",
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
            "id": "762c8148-1616-41fb-b9ac-50434eee4bff",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6552f2f2-fd7e-4787-aabd-fb936e1fed6b",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6552f2f2-fd7e-4787-aabd-fb936e1fed6b",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6552f2f2-fd7e-4787-aabd-fb936e1fed6b",
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
            "id": "6552f2f2-fd7e-4787-aabd-fb936e1fed6b",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9e53c263-1016-4c01-8fc7-6d7277bb1776",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9e53c263-1016-4c01-8fc7-6d7277bb1776",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9e53c263-1016-4c01-8fc7-6d7277bb1776",
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
            "id": "9e53c263-1016-4c01-8fc7-6d7277bb1776",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "32e17131-c8e3-458f-96db-0a941a23736d",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "32e17131-c8e3-458f-96db-0a941a23736d",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "32e17131-c8e3-458f-96db-0a941a23736d",
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
            "id": "32e17131-c8e3-458f-96db-0a941a23736d",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "902dc045-bf5a-4731-8e68-88ede023304d",
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
            "html": "<pre class=\"debug-output\">the number is 5&#xD;&#xA;the number is 8&#xD;&#xA;the number is 80&#xD;&#xA;the number is 5&#xD;&#xA;the number is 8&#xD;&#xA;the number is 80&#xD;&#xA;the number is 3&#xD;&#xA;the number is 7&#xD;&#xA;the number is 70&#xD;&#xA;the number is 5&#xD;&#xA;the number is 8&#xD;&#xA;the number is 80&#xD;&#xA;the number is 5&#xD;&#xA;the number is 8&#xD;&#xA;the number is 80&#xD;&#xA;</pre>",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "25712f0d-c57d-4cc6-8d44-df99beec9648"
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
                "id": "762c8148-1616-41fb-b9ac-50434eee4bff"
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
                        "id": "6552f2f2-fd7e-4787-aabd-fb936e1fed6b"
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
                        "id": "9e53c263-1016-4c01-8fc7-6d7277bb1776"
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
                        "id": "32e17131-c8e3-458f-96db-0a941a23736d"
                      }
                    ],
                    "activeCells": {},
                    "id": "6244f07d-c662-4c70-8e3e-751ab6a0a338"
                  }
                ],
                "id": "222f5832-9d05-490a-ad2a-9cdf6eddfeba"
              }
            ],
            "activeCells": {},
            "id": "902dc045-bf5a-4731-8e68-88ede023304d"
          }
        ],
        "id": "paragraph2"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cb34fbc6-7f96-4995-9195-b6b041af5d29",
            "spec": "sentence1",
            "position": "setup",
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
            "id": "176b0e2d-9fef-4940-bcaa-6c3578bcde43",
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
            "id": "46f36a29-fa5d-443f-9f69-4a340b62069d",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cb34fbc6-7f96-4995-9195-b6b041af5d29",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "176b0e2d-9fef-4940-bcaa-6c3578bcde43"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "46f36a29-fa5d-443f-9f69-4a340b62069d"
              }
            ],
            "activeCells": {},
            "id": "cb34fbc6-7f96-4995-9195-b6b041af5d29"
          }
        ],
        "id": "sentence1"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7515e5a9-47b1-4810-bf0b-fa2ca6803260",
            "spec": "sentence2",
            "position": "setup",
            "type": "step-result"
          },
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
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.<>c.<.ctor>b__1_2()\r\n   at StoryTeller.Fixture.FactExpression.<>c__DisplayClass2_0.<VerifiedBy>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.FactGrammar.PerformTest(StepValues values, ISpecContext context)\r\n   at StoryTeller.Grammars.FactPlan.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)",
            "cells": [],
            "id": "3",
            "spec": "sentence2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7515e5a9-47b1-4810-bf0b-fa2ca6803260",
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.SentenceFixture.&lt;&gt;c.&lt;.ctor&gt;b__1_2()&#xD;&#xA;   at StoryTeller.Fixture.FactExpression.&lt;&gt;c__DisplayClass2_0.&lt;VerifiedBy&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.FactGrammar.PerformTest(StepValues values, ISpecContext context)&#xD;&#xA;   at StoryTeller.Grammars.FactPlan.execute(ISpecContext context)&#xD;&#xA;   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 4,
        "aborted": false,
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
            "id": "7515e5a9-47b1-4810-bf0b-fa2ca6803260"
          },
          {
            "type": "comment",
            "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
            "id": "769ea217-b47b-41c0-8645-d599ca0ea688"
          }
        ],
        "id": "sentence2"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "43b15a04-dfb4-4342-b238-e6aaf0e93d09",
            "spec": "sentence3",
            "position": "setup",
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
            "id": "f8d9e92b-65c4-4b59-bc38-22747d55431c",
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
            "id": "5c16e0b5-3397-4572-89a8-872259248d40",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "43b15a04-dfb4-4342-b238-e6aaf0e93d09",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "f8d9e92b-65c4-4b59-bc38-22747d55431c"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "5c16e0b5-3397-4572-89a8-872259248d40"
              }
            ],
            "activeCells": {},
            "id": "43b15a04-dfb4-4342-b238-e6aaf0e93d09"
          }
        ],
        "id": "sentence3"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "554c3b28-689c-4b24-bec4-eebf0c7070b2",
            "spec": "sentence4",
            "position": "setup",
            "type": "step-result"
          },
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
            "id": "71c97b9d-f6d0-4254-97a3-f4d77b9c1659",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d7f47767-5254-4708-82ba-185daf556e81",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cb9b51c8-2f3f-4afe-8316-a2464c90966f",
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
            "id": "626f1ec8-1f8b-4f1a-9972-4bb1f692b3f8",
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
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "554c3b28-689c-4b24-bec4-eebf0c7070b2",
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
        "duration": 5,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">the number is 5&#xD;&#xA;the number is 5&#xD;&#xA;the number is 19&#xD;&#xA;the number is 19&#xD;&#xA;the number is 17&#xD;&#xA;the number is 17&#xD;&#xA;</pre>",
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
            "html": "<pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; StoryTeller.StorytellerAssertionException: No go!&#xD;&#xA;   at StoryTeller.StoryTellerAssert.Fail(String message)&#xD;&#xA;   at StoryTeller.Samples.Fixtures.SentenceFixture.ThisLineAlwaysThrowsExceptions()&#xD;&#xA;   --- End of inner exception stack trace ---&#xD;&#xA;   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)&#xD;&#xA;   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)&#xD;&#xA;   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)&#xD;&#xA;   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)&#xD;&#xA;   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__19.MoveNext()&#xD;&#xA;   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)&#xD;&#xA;   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)&#xD;&#xA;   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)&#xD;&#xA;   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "3:32 PM",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
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
                "type": "comment",
                "text": "Show a syntax failure",
                "id": "da1d8081-3a60-4493-89e8-1ef46d3f0f27"
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
                "type": "comment",
                "text": "Work correctly",
                "id": "2de94018-4ed1-4b06-8316-8450b966a6dd"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "71c97b9d-f6d0-4254-97a3-f4d77b9c1659"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "d7f47767-5254-4708-82ba-185daf556e81"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "cb9b51c8-2f3f-4afe-8316-a2464c90966f"
              },
              {
                "type": "comment",
                "text": "Correct assertion",
                "id": "a966ddfa-7578-4dbb-83f5-c27f72aeed77"
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
                "type": "comment",
                "text": "Incorrect assertion",
                "id": "d58c5db5-9871-4917-8543-f899175b13da"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "2",
                  "number2": "2",
                  "sum": "5"
                },
                "collections": [],
                "id": "626f1ec8-1f8b-4f1a-9972-4bb1f692b3f8"
              },
              {
                "type": "comment",
                "text": "Line assertions",
                "id": "3e844a86-d9d7-44b0-9fdd-e83eb079c4cc"
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
            "id": "554c3b28-689c-4b24-bec4-eebf0c7070b2"
          }
        ],
        "id": "sentence4"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2428d0bb-5d3a-4394-adf9-eb77f3d4ae4a",
            "spec": "set1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b994a337-fa58-4ce2-9e6c-f69db6467d71",
            "spec": "set1",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "76e6883e-d351-4ba6-87bb-12af194da6b4",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "76e6883e-d351-4ba6-87bb-12af194da6b4",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "76e6883e-d351-4ba6-87bb-12af194da6b4",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "76e6883e-d351-4ba6-87bb-12af194da6b4",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "76e6883e-d351-4ba6-87bb-12af194da6b4",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "94b909f3-4151-4536-ba29-d3b68cc2cf19",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "94b909f3-4151-4536-ba29-d3b68cc2cf19",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "94b909f3-4151-4536-ba29-d3b68cc2cf19",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "94b909f3-4151-4536-ba29-d3b68cc2cf19",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "94b909f3-4151-4536-ba29-d3b68cc2cf19",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7fd9cf85-b04c-4415-ac13-709d16e22573",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7fd9cf85-b04c-4415-ac13-709d16e22573",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7fd9cf85-b04c-4415-ac13-709d16e22573",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7fd9cf85-b04c-4415-ac13-709d16e22573",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7fd9cf85-b04c-4415-ac13-709d16e22573",
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
              "72c1f6d1-fb98-4c24-9607-dad961785518",
              "d0bbac47-a4a2-4af0-9e51-44b6afd22dfd"
            ],
            "missing": [],
            "extras": [
              {
                "Amount": "300.3",
                "Date": "11/23/2016 12:00:00 AM",
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
              "1580ecc8-13ca-43d3-91ac-0430a0acac42",
              "50b864ef-3090-4ea6-95ba-ae4b97347436",
              "7adc048a-72e5-4c4e-81e9-432415546621"
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
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2428d0bb-5d3a-4394-adf9-eb77f3d4ae4a",
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
            "end": 3449,
            "duration": 3449
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
            "end": 1,
            "duration": 1
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
            "start": 3,
            "end": 3444,
            "duration": 3441
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 3444,
            "end": 3444,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 3444,
            "end": 3445,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 3445,
            "end": 3448,
            "duration": 3
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 3448,
            "end": 3448,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 3448,
            "end": 3449,
            "duration": 1
          }
        ],
        "duration": 3449,
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                        "id": "76e6883e-d351-4ba6-87bb-12af194da6b4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "94b909f3-4151-4536-ba29-d3b68cc2cf19"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "7fd9cf85-b04c-4415-ac13-709d16e22573"
                      }
                    ],
                    "activeCells": {},
                    "id": "b994a337-fa58-4ce2-9e6c-f69db6467d71"
                  }
                ],
                "id": "6d79ec95-378c-4668-8328-8fdf46ae21f3"
              },
              {
                "type": "comment",
                "text": "Completely successful ordering",
                "id": "540ae0ee-da7b-4260-b06e-2b996c0001a1"
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
                "id": "dae7ff53-b19f-445b-8526-abba63e0763d"
              },
              {
                "type": "comment",
                "text": "Out of order",
                "id": "dfd3b8c9-42e3-49e6-80b8-11bae04cc038"
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
                "id": "a7d8d0d8-7e22-4f25-b125-c9b0ac94b5af"
              },
              {
                "type": "comment",
                "text": "Should have one exra",
                "id": "9c63bfef-ab76-488d-b884-74bb715a34c0"
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
                        "id": "72c1f6d1-fb98-4c24-9607-dad961785518"
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
                        "id": "d0bbac47-a4a2-4af0-9e51-44b6afd22dfd"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "7bdd4d63-d34c-4135-808b-0b9f7cd46b8f"
              },
              {
                "type": "comment",
                "text": "Should mark one expected result as missing",
                "id": "a46ca2a1-9417-419d-9637-d1d5c60b8263"
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
                        "id": "1580ecc8-13ca-43d3-91ac-0430a0acac42"
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
                        "id": "50b864ef-3090-4ea6-95ba-ae4b97347436"
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
                        "id": "7adc048a-72e5-4c4e-81e9-432415546621"
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
                "id": "c0ceb9a0-94a3-4086-a4b0-683925652f61"
              },
              {
                "type": "comment",
                "text": "One syntax error",
                "id": "9c85c93e-72c0-4b7a-8793-5c2a3166bbe2"
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
                        "id": "513f4ce8-a567-4481-a077-09853313e6b8"
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
                        "id": "eb35e871-86e4-4b64-a76b-d52f65c1dab5"
                      }
                    ],
                    "activeCells": {},
                    "id": "817dc1b7-0858-4046-a85f-7f42306e526d"
                  }
                ],
                "id": "6c18a15b-4142-4fd8-8674-dd67f33f09ab"
              }
            ],
            "activeCells": {},
            "id": "2428d0bb-5d3a-4394-adf9-eb77f3d4ae4a"
          }
        ],
        "id": "set1"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad2621d8-8c19-48f9-9cf6-7ed2926a554d",
            "spec": "set2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "12794979-8155-4ac2-b66d-36745260bb07",
            "spec": "set2",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d22d0574-50a2-42b7-9f19-56ca5b957282",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d643e84e-e3fc-4ed0-a880-70fef26b781f",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fe4556d8-ffe2-4eea-8853-df75f1e0c87c",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "78d91c93-c9d4-41b3-bf54-c602628ae424",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "559aaf09-3e2c-425e-8556-c7c24cb4fbc8",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "5d4edf06-1d6b-48a7-a0ba-68e720b6ba8e",
              "bddc1d3a-0250-4feb-a512-66eee5c4b370",
              "da8f77fb-c99c-4122-9af7-fea5c2ffc3e0",
              "ea956c19-146d-40bc-b318-4ec23d3a5658",
              "218cea7d-9440-4f65-a329-3cc2a9bf715e"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "227f4668-8957-4f15-b3b5-6c47e1ca91ad",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "cba01770-1ac2-4b32-aced-c6667e7d0934",
              "a5b6f6c3-6645-43f3-9885-a5dbcaf90c25",
              "dc1e44f2-d976-4722-bb59-46a498f202b1",
              "0f26a96f-b9a5-488a-94ef-4930bb670e0e",
              "161d50d2-23cf-47f8-8294-5fcee141c4a2"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "c030acc3-893c-403c-916a-4b778c333df3",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad2621d8-8c19-48f9-9cf6-7ed2926a554d",
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
            "end": 11,
            "duration": 11
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 9,
            "end": 9,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 9,
            "end": 9,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIsBefore",
            "start": 9,
            "end": 9,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 9,
            "end": 9,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 9,
            "end": 9,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 9,
            "end": 9,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 9,
            "end": 9,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 9,
            "end": 9,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 9,
            "end": 10,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 10,
            "end": 11,
            "duration": 1
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                        "id": "d22d0574-50a2-42b7-9f19-56ca5b957282"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "d643e84e-e3fc-4ed0-a880-70fef26b781f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "fe4556d8-ffe2-4eea-8853-df75f1e0c87c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "78d91c93-c9d4-41b3-bf54-c602628ae424"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "559aaf09-3e2c-425e-8556-c7c24cb4fbc8"
                      }
                    ],
                    "activeCells": {},
                    "id": "12794979-8155-4ac2-b66d-36745260bb07"
                  }
                ],
                "id": "6b58fcab-ddd8-43bf-9593-5dd3495da3dc"
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
                        "id": "5d4edf06-1d6b-48a7-a0ba-68e720b6ba8e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "bddc1d3a-0250-4feb-a512-66eee5c4b370"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "da8f77fb-c99c-4122-9af7-fea5c2ffc3e0"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "ea956c19-146d-40bc-b318-4ec23d3a5658"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "218cea7d-9440-4f65-a329-3cc2a9bf715e"
                      }
                    ],
                    "activeCells": {},
                    "id": "227f4668-8957-4f15-b3b5-6c47e1ca91ad"
                  }
                ],
                "id": "4122298c-830b-4148-8b88-a5294b0a090c"
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
                        "id": "cba01770-1ac2-4b32-aced-c6667e7d0934"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "a5b6f6c3-6645-43f3-9885-a5dbcaf90c25"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "dc1e44f2-d976-4722-bb59-46a498f202b1"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "0f26a96f-b9a5-488a-94ef-4930bb670e0e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "161d50d2-23cf-47f8-8294-5fcee141c4a2"
                      }
                    ],
                    "activeCells": {},
                    "id": "c030acc3-893c-403c-916a-4b778c333df3"
                  }
                ],
                "id": "5d1d5458-6e98-48f1-b7d3-4655d37e4713"
              }
            ],
            "activeCells": {},
            "id": "ad2621d8-8c19-48f9-9cf6-7ed2926a554d"
          }
        ],
        "id": "set2"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9f74e312-0980-4b7f-87c9-64149b09e961",
            "spec": "set3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.AggregateException: One or more errors occurred. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<>c.<ThrowsErrorOnDataFetch>b__3_0()\r\n   at StoryTeller.Fixture.<>c__DisplayClass45_0`1.<VerifySetOf>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3_0.<Fetch>b__0()\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---> (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<>c.<ThrowsErrorOnDataFetch>b__3_0()\r\n   at StoryTeller.Fixture.<>c__DisplayClass45_0`1.<VerifySetOf>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3_0.<Fetch>b__0()\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()<---\r\n",
            "cells": [],
            "id": "1",
            "spec": "set3",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9f74e312-0980-4b7f-87c9-64149b09e961",
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
            "end": 6,
            "duration": 6
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 4,
            "end": 6,
            "duration": 2
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 6,
            "end": 6,
            "duration": 0
          }
        ],
        "duration": 6,
        "logging": [
          {
            "html": "<pre class=\"debug-output\"></pre>",
            "title": "Debug Output",
            "count": 0,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">System.AggregateException: One or more errors occurred. ---&gt; System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;&gt;c.&lt;ThrowsErrorOnDataFetch&gt;b__3_0()&#xD;&#xA;   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass45_0`1.&lt;VerifySetOf&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3_0.&lt;Fetch&gt;b__0()&#xD;&#xA;   at System.Threading.Tasks.Task`1.InnerInvoke()&#xD;&#xA;   at System.Threading.Tasks.Task.Execute()&#xD;&#xA;   --- End of inner exception stack trace ---&#xD;&#xA;---&gt; (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;&gt;c.&lt;ThrowsErrorOnDataFetch&gt;b__3_0()&#xD;&#xA;   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass45_0`1.&lt;VerifySetOf&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3_0.&lt;Fetch&gt;b__0()&#xD;&#xA;   at System.Threading.Tasks.Task`1.InnerInvoke()&#xD;&#xA;   at System.Threading.Tasks.Task.Execute()&lt;---&#xD;&#xA;</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                        "id": "8b55011d-683f-404d-a845-de141c281214"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "b663544f-f081-43f4-87dc-1ca8df32bb0e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "ad75a516-68e8-44c7-823a-a50132e33e89"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "a15ed434-9c5a-4e98-ab83-37ca691f4ec9"
              }
            ],
            "activeCells": {},
            "id": "9f74e312-0980-4b7f-87c9-64149b09e961"
          }
        ],
        "id": "set3"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8dbfa526-9286-448f-8b0d-16972350d1c6",
            "spec": "set4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "010a2237-588e-4b35-93f2-0fd3f5ce7207",
            "spec": "set4",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1133e936-43e2-4f3d-a0a6-11aefbd3cb89",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1133e936-43e2-4f3d-a0a6-11aefbd3cb89",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1133e936-43e2-4f3d-a0a6-11aefbd3cb89",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1133e936-43e2-4f3d-a0a6-11aefbd3cb89",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1133e936-43e2-4f3d-a0a6-11aefbd3cb89",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd9f6d94-055b-479c-8f45-7299789f3a9d",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd9f6d94-055b-479c-8f45-7299789f3a9d",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd9f6d94-055b-479c-8f45-7299789f3a9d",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd9f6d94-055b-479c-8f45-7299789f3a9d",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd9f6d94-055b-479c-8f45-7299789f3a9d",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e12f2427-3dd4-4725-a836-c1e41b1c6cac",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e12f2427-3dd4-4725-a836-c1e41b1c6cac",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e12f2427-3dd4-4725-a836-c1e41b1c6cac",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e12f2427-3dd4-4725-a836-c1e41b1c6cac",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e12f2427-3dd4-4725-a836-c1e41b1c6cac",
            "spec": "set4",
            "position": "4",
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
            "id": "3b1417a7-a2d5-4719-9ca7-798ee1b4aafd",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8dbfa526-9286-448f-8b0d-16972350d1c6",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                        "id": "1133e936-43e2-4f3d-a0a6-11aefbd3cb89"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "cd9f6d94-055b-479c-8f45-7299789f3a9d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "e12f2427-3dd4-4725-a836-c1e41b1c6cac"
                      }
                    ],
                    "activeCells": {},
                    "id": "010a2237-588e-4b35-93f2-0fd3f5ce7207"
                  }
                ],
                "id": "2f6693d2-f333-4469-aef6-69c4eaed7dd4"
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
                        "id": "3b1417a7-a2d5-4719-9ca7-798ee1b4aafd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "bc9b6dca-1a29-4a0e-a083-8a2761427092"
                      }
                    ],
                    "activeCells": {},
                    "id": "1e616e2a-0148-4d8f-8add-220746f599a0"
                  }
                ],
                "id": "9b9a54ec-7667-438f-b901-b819750ed109"
              }
            ],
            "activeCells": {},
            "id": "8dbfa526-9286-448f-8b0d-16972350d1c6"
          }
        ],
        "id": "set4"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "83ae757d-f162-4dfc-8f64-3cdbe909a64c",
            "spec": "set5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5e92e43f-c57d-47a8-a065-1f7aa8ec6276",
            "spec": "set5",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e8e0ba15-a211-4ced-847b-5de9690a8b8b",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "874a3c1f-caa7-48c3-b282-4a2bcacfb7fb",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3da6cdb2-e406-4b10-9070-706817f14d3f",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c22db28d-c1dc-4053-b643-b8335ce03009",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "80422be3-2fda-4036-82a2-454e3aeb3dac",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "42658c9a-828a-4491-952c-d9e9f15ebddf",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c1ca24e2-c841-4b58-a4d6-36f6ef2abfdb",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "dbb861f0-5b2a-44de-8095-771131d440dc",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "30ecc418-2934-45ae-83bf-d13ae26fb285",
              "ec96b44a-1921-4628-bef7-fbec2922570a",
              "4774853c-e9c2-48d1-a5c7-16a9099ccfdf",
              "bcacd58e-160e-41ac-af95-3b57caaf6bf0"
            ],
            "missing": [
              "26e493f1-963a-4123-a36d-5a07f9dcd1c1"
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
                "id": "98b5dd4d-4025-45c5-932f-a73bbf30c35b"
              },
              {
                "actual": 4,
                "id": "1598a249-d9bc-46a2-a5c6-9af7aa7a1df4"
              }
            ],
            "id": "595c027a-409d-469d-8333-e0eb2ebeaec6",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "83ae757d-f162-4dfc-8f64-3cdbe909a64c",
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
            "end": 5,
            "duration": 5
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIsBefore",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 4,
            "end": 5,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                        "id": "e8e0ba15-a211-4ced-847b-5de9690a8b8b"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "874a3c1f-caa7-48c3-b282-4a2bcacfb7fb"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "3da6cdb2-e406-4b10-9070-706817f14d3f"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "c22db28d-c1dc-4053-b643-b8335ce03009"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "80422be3-2fda-4036-82a2-454e3aeb3dac"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "42658c9a-828a-4491-952c-d9e9f15ebddf"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "c1ca24e2-c841-4b58-a4d6-36f6ef2abfdb"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "dbb861f0-5b2a-44de-8095-771131d440dc"
                      }
                    ],
                    "activeCells": {},
                    "id": "5e92e43f-c57d-47a8-a065-1f7aa8ec6276"
                  }
                ],
                "id": "f9875da9-2632-481f-83e1-7b54ceefe372"
              },
              {
                "type": "comment",
                "text": "All data is correct, but in the wrong order",
                "id": "2f72e3cd-bf0b-4dc1-9773-f0522db79a77"
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
                        "id": "30ecc418-2934-45ae-83bf-d13ae26fb285"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "ec96b44a-1921-4628-bef7-fbec2922570a"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "4774853c-e9c2-48d1-a5c7-16a9099ccfdf"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "98b5dd4d-4025-45c5-932f-a73bbf30c35b"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "1598a249-d9bc-46a2-a5c6-9af7aa7a1df4"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "26e493f1-963a-4123-a36d-5a07f9dcd1c1"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "bcacd58e-160e-41ac-af95-3b57caaf6bf0"
                      }
                    ],
                    "activeCells": {},
                    "id": "595c027a-409d-469d-8333-e0eb2ebeaec6"
                  }
                ],
                "id": "72035a97-7ad3-49a7-a2f6-6f8babc69173"
              }
            ],
            "activeCells": {},
            "id": "83ae757d-f162-4dfc-8f64-3cdbe909a64c"
          }
        ],
        "id": "set5"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c4f674d0-08fd-4b7c-8cc4-e67c72c6303a",
            "spec": "table1",
            "position": "setup",
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
            "id": "7a34d362-3afe-44a3-b3ed-155105e006a9",
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
            "id": "9423f4ef-8afa-4ee6-a715-5f78f9af2632",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c4f674d0-08fd-4b7c-8cc4-e67c72c6303a",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                        "id": "7a34d362-3afe-44a3-b3ed-155105e006a9"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "9423f4ef-8afa-4ee6-a715-5f78f9af2632"
                      }
                    ],
                    "activeCells": {},
                    "id": "1bb95e0a-41fe-4ae6-98f2-ea92492fa026"
                  }
                ],
                "id": "afb890c7-91bd-493d-ae31-9b5df41a5768"
              }
            ],
            "activeCells": {},
            "id": "c4f674d0-08fd-4b7c-8cc4-e67c72c6303a"
          }
        ],
        "id": "table1"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "dcf16641-f38f-4474-94ba-47c6827b1e42",
            "spec": "table2",
            "position": "setup",
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
            "id": "a452705a-3389-453a-9795-3b52fd586e89",
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
            "id": "1834ad03-8802-4ed7-ad77-f01121e5f864",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "dcf16641-f38f-4474-94ba-47c6827b1e42",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                        "id": "e9cc0c08-a66a-4711-bc7d-c44e31643f62"
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
                        "id": "6d2dfb39-a11b-45c4-ad11-d237c4a20b61"
                      }
                    ],
                    "activeCells": {},
                    "id": "5d9ebed5-a207-488f-8651-a3fb9f955f20"
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
                        "id": "a452705a-3389-453a-9795-3b52fd586e89"
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
                        "id": "1834ad03-8802-4ed7-ad77-f01121e5f864"
                      }
                    ],
                    "activeCells": {},
                    "id": "5743d578-ba1d-4471-89b2-2bbb0f65045a"
                  }
                ],
                "id": "ddb77b2c-4637-40ba-944b-c0d4f495b270"
              }
            ],
            "activeCells": {},
            "id": "dcf16641-f38f-4474-94ba-47c6827b1e42"
          }
        ],
        "id": "table2"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "770e4778-1ee0-41f7-8e7b-5f58a8058985",
            "spec": "table3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1f4e5de9-001b-426c-bfcc-33cdd29caa42",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "33ca1762-8c42-43e7-a218-7d9bfd4c5755",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "61101f52-c5ac-4db6-af37-963f6ad429e9",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "980e37d8-5e48-4618-ba44-25fcb4f03798",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "770e4778-1ee0-41f7-8e7b-5f58a8058985",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                        "id": "1f4e5de9-001b-426c-bfcc-33cdd29caa42"
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
                        "id": "33ca1762-8c42-43e7-a218-7d9bfd4c5755"
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
                        "id": "61101f52-c5ac-4db6-af37-963f6ad429e9"
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
                        "id": "980e37d8-5e48-4618-ba44-25fcb4f03798"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "29e28647-5e0b-4d7c-8da9-a429cc23e517"
                  }
                ],
                "id": "399c6afa-3430-4f43-a759-e46933904955"
              }
            ],
            "activeCells": {},
            "id": "770e4778-1ee0-41f7-8e7b-5f58a8058985"
          }
        ],
        "id": "table3"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "325d5cba-dadf-4028-b5ba-56691eef292c",
            "spec": "table4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<>c.<BeforeThrowsError>b__5_2()\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass16_0.<Before>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
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
            "id": "76b9c838-e493-4ae1-ab70-2ec562aebe9e",
            "spec": "table4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9db246ab-ddc5-4462-b4f3-4c8fd2d3b29d",
            "spec": "table4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<>c.<AfterThrowsError>b__6_2()\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass18_0.<After>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "after",
            "spec": "table4",
            "position": "after",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "325d5cba-dadf-4028-b5ba-56691eef292c",
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.TableFixture.&lt;&gt;c.&lt;BeforeThrowsError&gt;b__5_2()&#xD;&#xA;   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass16_0.&lt;Before&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>\n<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.TableFixture.&lt;&gt;c.&lt;AfterThrowsError&gt;b__6_2()&#xD;&#xA;   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass18_0.&lt;After&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                        "id": "76b9c838-e493-4ae1-ab70-2ec562aebe9e"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "3a51996f-eec9-4cbb-aa1c-0bda42004126"
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
                        "id": "9db246ab-ddc5-4462-b4f3-4c8fd2d3b29d"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "d0abffff-cbb5-4cea-9cf4-0bb8f82e8f2b"
              }
            ],
            "activeCells": {},
            "id": "325d5cba-dadf-4028-b5ba-56691eef292c"
          }
        ],
        "id": "table4"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6867f2ed-a4fb-4a5e-a386-d774d3ee5b44",
            "spec": "table5",
            "position": "setup",
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
            "id": "949b7574-165c-4ed1-9673-d831895b86d9",
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
            "id": "f5877d68-0422-4013-9f8e-4e2aaf971254",
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
            "position": "0",
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
            "position": "0",
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
            "cells": [],
            "id": "9939f569-85cb-400c-943c-0ddcd494f419",
            "spec": "table5",
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
                "cell": "x",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "9939f569-85cb-400c-943c-0ddcd494f419",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9939f569-85cb-400c-943c-0ddcd494f419",
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
            "id": "9939f569-85cb-400c-943c-0ddcd494f419",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30f8082f-2d43-4221-81fd-8b77526d76e0",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30f8082f-2d43-4221-81fd-8b77526d76e0",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30f8082f-2d43-4221-81fd-8b77526d76e0",
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
            "id": "30f8082f-2d43-4221-81fd-8b77526d76e0",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6867f2ed-a4fb-4a5e-a386-d774d3ee5b44",
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
        "time": "3:32 PM",
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
        "expiration-period": 0,
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
                "id": "5d3c471c-1f17-40c5-bcbd-178c8226e2c8"
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
                        "id": "949b7574-165c-4ed1-9673-d831895b86d9"
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
                        "id": "f5877d68-0422-4013-9f8e-4e2aaf971254"
                      }
                    ],
                    "activeCells": {},
                    "id": "1b77aad8-3af9-47e8-8542-7cda5401da10"
                  }
                ],
                "id": "5c4512aa-2678-486c-a447-6540a02dd1a8"
              },
              {
                "type": "comment",
                "text": "Table fixture from script",
                "id": "b800406d-aded-496d-9795-a55bf0332255"
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
                        "id": "9939f569-85cb-400c-943c-0ddcd494f419"
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
                        "id": "30f8082f-2d43-4221-81fd-8b77526d76e0"
                      }
                    ],
                    "activeCells": {},
                    "id": "9f14f52f-9fa4-4313-ab86-400dc4eff5e4"
                  }
                ],
                "id": "1c11a7eb-a1a7-4ec1-ad78-a277eda54c59"
              }
            ],
            "activeCells": {},
            "id": "6867f2ed-a4fb-4a5e-a386-d774d3ee5b44"
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "CheckObject",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CheckObjectFixture",
                "id": "236ece8d-6861-4fca-9e9d-2342e5099285"
              },
              {
                "type": "comment",
                "text": "## IfTheAddressIs",
                "id": "e8cc018e-edde-405c-8676-3098c3dc4d41"
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
                "id": "d3327455-e598-4cfc-ace0-6589bea8ae02"
              },
              {
                "type": "comment",
                "text": "## TheAddressShouldBe",
                "id": "d5a90c0c-d511-45c4-8d3a-5fbb3683f967"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "Address1",
                  "Address2": "Address2",
                  "City": "City"
                },
                "collections": [],
                "id": "c0a3f8c9-907b-4b74-a9b9-a5d1f627fda4"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "5e677213-e819-48d1-8fe0-725a9f35fd07"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "e0409677-da63-453f-909f-3ebfced51e79"
              }
            ],
            "activeCells": {},
            "id": "bb68d98e-b204-4332-bce9-3b46b4d21158"
          }
        ],
        "id": "abc50225-ae9f-4664-85b4-1e5625ef724c"
      },
      "sampleMarkdown": "# Sample Specification for CheckObject\r\n\r\n-> id = 8e1863cc-7c15-42c8-9c5e-3ae28f12d93a\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.5832234-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[CheckObject]\r\n|> IfTheAddressIs Address1=Address1, Address2=Address2, City=City, StateOrProvince=StateOrProvince, Country=Country, PostalCode=PostalCode\r\n|> TheAddressShouldBe Address1=Address1, Address2=Address2, City=City\r\n|> TODO message=message\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Composite",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CompositeFixture",
                "id": "94cdddf9-bb03-4cae-9855-f0482d27dce1"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "ddb65f07-9cdb-430a-8c54-50e0eee5fb92"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "77aa6894-ae80-4159-b657-9675db2666c7"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "40cd411d-d697-4b79-8337-e30c4fdaae30"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "c6e4b797-f1cd-4c7d-b12f-2193b33f8cba"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiply",
                "id": "f73e7b6b-219d-47b0-9fe2-c3525cf31ca7"
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
                "id": "b710e4e7-fa08-41a6-8f20-30b01c32a508"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyTable",
                "id": "2caeedcc-38be-4a91-8d6f-364558843ebe"
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
                        "id": "5b60e492-f787-4825-9cdf-15b59cde9cb0"
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
                        "id": "e5153ad2-1ac8-485b-893b-b4ae87346d0b"
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
                        "id": "2137f4de-9875-4d81-b1fb-d094dd93da0e"
                      }
                    ],
                    "activeCells": {},
                    "id": "b5d40848-bffb-4c9c-88b4-fe3b08947fb4"
                  }
                ],
                "id": "17b25849-9318-483a-b129-68f5436e0124"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyThrow",
                "id": "6df5b614-2507-4fde-86a4-3d032b7cfc0b"
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
                "id": "f3c30504-c6fc-42b2-a967-e174ed2ad086"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "2b50fbf1-b319-49f1-8f36-6d587e6bc89d"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "08f1f9d2-33f1-42c4-bde4-465ebbca55df"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "47a85982-f616-42bf-81c4-a55d2c2ae518"
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
                        "id": "44df3f60-d842-4a64-9949-7c7bf049494f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "7433b45a-7c50-46ad-b309-8ec83768f9b2"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "14809de5-6b2b-4cb1-843e-74ddc0a65790"
                      }
                    ],
                    "activeCells": {},
                    "id": "eac04a14-2c93-4a61-9679-3a1a44e24719"
                  }
                ],
                "id": "229cf34f-fd13-42bd-9bfb-72938cdcffe0"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "361ce4fc-8da5-475e-87ee-9239e6e08b8d"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "f6a99196-d350-4876-a856-232062401793"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "7a36698e-d15c-4b6e-898c-e5113021cf4a"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "9b6b3298-ce34-44eb-b950-c1eb615d06b1"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "5451779f-6ce2-40ba-a3cb-a65c5a1fc782"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "daf87124-fa3e-46f2-ad21-3cf3c6ef74ef"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "fd7259fd-fd75-4bf9-b5bb-2ffa9d5d0a6d"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "4507e2bf-6278-4401-8b5e-756fe5bea330"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "3f2d323c-191a-4b4f-94ad-c1da51460c1d"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "abbfc077-99f3-4f94-a947-e93971c9bd1d"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "76bc59f2-5ba5-4152-8e26-b62c441c4630"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "90b82597-b80d-4b79-b09a-88518fcd2708"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "ab8d2d33-e2f4-4195-bdda-fdd119906f36"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "a0a3835b-e452-4054-a975-0b361752abfa"
              }
            ],
            "activeCells": {},
            "id": "a79c3066-62dc-4862-8aa9-933395c9d08b"
          }
        ],
        "id": "c847e2a1-d4e7-4933-a2ff-1c7b1eb98b8b"
      },
      "sampleMarkdown": "# Sample Specification for Composite\r\n\r\n-> id = f75a5b90-d900-49cc-b4b6-f32bade31f35\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.5912242-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Composite]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> AddAndMultiply starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> AddAndMultiplyTable\r\n    [Rows]\r\n    |starting|operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n\r\n|> AddAndMultiplyThrow starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
              "expiration-period": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Monday, November 21, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "127b8748-fbbf-4e50-82d6-98b4d57602ac"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "13102c2c-7377-4498-8286-a12601aff8cb"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "4bf66777-c0df-44f7-aeb7-1c8736cc8081"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "f4cbc87b-40d8-4aa9-ab2e-a463c633fd42"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "4920dcfd-f2d3-4247-a755-e1b4f6de9423"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "a36734c0-8bf0-4647-9708-06333195d0c4"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "d4870b83-d390-49b1-8ec1-2ce20c9ff329"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "2dea6313-9e9e-49ff-bf31-74291b3fa5da"
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
                              "id": "4e8a55d0-55ee-4871-9435-7f4265a9e77d"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "b01265be-8e8b-4058-a981-a3e4b58f4a58"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "57a4fb59-75bb-469b-ab78-61b68fd4293f"
                            }
                          ],
                          "activeCells": {},
                          "id": "7ab8c72c-bbdc-42de-b6c9-5d450bb1ee64"
                        }
                      ],
                      "id": "6ade3b60-6a6e-4f27-9d57-4877e99f1bd4"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "8d17c7cd-fb97-499a-8c30-9cc303f7fb72"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "5a726f5f-fe71-49f8-9644-5d11bdf37d18"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "741eef7d-0d91-4f11-8c3c-be08676b8eed"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "69563e31-4949-4673-bfa8-2821a78e04ad"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "3c289db3-289d-466c-b218-e014bee5d817"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "88fd37da-aa11-40e8-a6fc-e03cb7006fc7"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "0f744ea4-f574-472c-ac80-fa4978256cc9"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "c29e0bb1-558b-4d44-9ee4-0dee9e788b24"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "54a34a41-ea71-4eb3-a58d-a4e59f6a9ad4"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "6345d67b-1798-4913-a5c0-d2e30e239301"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "475c974f-5c14-4310-8085-bdb94f38506d"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "88959412-49ac-4932-9b62-5a05b2dc4b7f"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "439c8955-ce26-471e-803f-6e6611a3f059"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "563f782f-2bb1-4500-84c1-63d80e6e72fd"
                    }
                  ],
                  "activeCells": {},
                  "id": "d601e186-1bb8-408b-a433-147dde01ec4c"
                }
              ],
              "id": "1ed613cd-1a0b-4fbc-8c92-39262fa97543"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = a0c59d6d-3d96-4e2a-9c39-c3d639609302\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.5992250-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "Do some Math",
          "collection": "Math",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Embedded",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedFixture",
                "id": "3ed9a8c7-152e-43b8-95e0-db9d06ce7efd"
              },
              {
                "type": "comment",
                "text": "## DoNotThrowAnExceptionOnTheNextEmbed",
                "id": "94688b59-2772-4ac9-8e86-499cd35756a3"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "da58d3f6-903b-42a0-a25a-1de87946a8a7"
              },
              {
                "type": "comment",
                "text": "## EmbeddedMath",
                "id": "9312d7d5-2a36-489c-87d8-d10a4693c037"
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
                        "id": "69389d13-4d95-4371-ac1d-9ea6e5a70cf2"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "afa23c52-28ed-4f98-9059-92622b285aae"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "53806d71-31fa-424e-9685-5d73669c7754"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "1713604d-bd27-47e5-aa90-865dcaf2f3d9"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "ae52c898-e599-4701-8dee-0e43306a531e"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "8d8addbe-5ed9-4f42-a169-e6bc2789d49e"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "cc3ff42a-df38-4314-88c0-7375f8c596c3"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "da55e768-49de-49df-af97-77899181915f"
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
                                "id": "388d837e-5dc2-4269-a76a-3043f219440a"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "255884a2-8e46-4103-9cc4-3087ba1a275c"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "410b0143-3652-4fb7-bece-080d18ade893"
                              }
                            ],
                            "activeCells": {},
                            "id": "ead87454-10d6-4751-b74e-e80dc2a0f170"
                          }
                        ],
                        "id": "cc046b9b-1edf-43cf-975b-16f387cfa87f"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "ce641980-76b6-45dd-95be-977b35e434bd"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "24eccc12-559b-46de-9e90-b5d78b10a47c"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "5aaf7a15-b11f-44a2-b586-54a745bbe915"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "d3b29899-f8fb-4a77-a809-b812891484fd"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "8b263fe0-ad0c-4039-99eb-1c28100f1331"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "4ac454f3-a6da-4aa7-bf7d-876cd500a409"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "023715ff-3255-4401-8e52-3abd7fb3c788"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "a4c4baab-adb6-4965-8548-a4f890274648"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "eab18cfe-9006-497e-b954-46bd9d4f94c4"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "30f3d2a6-b996-4744-81a2-c02600d0a19b"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "1eddbf52-fbec-49e7-94bc-3412b98455cb"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "c8126717-4530-431e-8d8e-53e9076a93d7"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "059647bf-5d44-4958-b430-1804acca22ab"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "966f3e87-e235-491e-9ad2-dbbad889f1cc"
                      }
                    ],
                    "activeCells": {},
                    "id": "df7f8169-70ea-4cfe-a8fb-0e4c42bdadea"
                  }
                ],
                "id": "0b773ce4-41a4-4c85-ba2f-64aa96b026fc"
              },
              {
                "type": "comment",
                "text": "## ThrowAnExceptionOnTheNextEmbed",
                "id": "21cd8a75-ddef-406f-8679-c6a18000d2a0"
              },
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "b920590d-a409-448f-bdec-b9f48816e819"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "0eb83b09-ea98-4587-9df6-0e9d093b4acc"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "090a52d8-bf47-4771-baf4-d11a04c2a09e"
              }
            ],
            "activeCells": {},
            "id": "fe96173a-56b3-4c45-935f-5846c492e73b"
          }
        ],
        "id": "8c6731a3-4569-4b9f-93b3-5d2c1f09be69"
      },
      "sampleMarkdown": "# Sample Specification for Embedded\r\n\r\n-> id = f2b1d684-da10-4894-9d23-3a143774ffa7\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6002251-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Embedded]\r\n|> DoNotThrowAnExceptionOnTheNextEmbed\r\n|> EmbeddedMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> ThrowAnExceptionOnTheNextEmbed\r\n|> TODO message=message\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Failure",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.FailureFixture",
                "id": "afb6a751-fa7f-425e-a97a-aa393c337db0"
              }
            ],
            "activeCells": {},
            "id": "85ae9697-6b05-4f8e-a1e0-e98b1d12580c"
          }
        ],
        "id": "c023215f-e841-466e-9511-cd431cc58d86"
      },
      "sampleMarkdown": "# Sample Specification for Failure\r\n\r\n-> id = 532fa6de-88fe-42e8-9028-37da002dc215\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6022253-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Failure]\r\n~~~\r\n",
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
          "IsHidden": false,
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "GrammarError",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.GrammarErrorFixture",
                "id": "368a18d7-a0a2-4b81-a7ff-e7ce75c97082"
              },
              {
                "type": "comment",
                "text": "##",
                "id": "6e361a5f-1c5d-407d-b58d-b104c7b35d46"
              },
              {
                "key": null,
                "cells": {},
                "collections": [],
                "id": "2c74ae9c-00fd-4fd6-b341-057bd387b008"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "ac218e90-a096-4f86-a777-718cb51abb83"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ca45fb36-30a3-44b4-895e-d163881f9251"
              }
            ],
            "activeCells": {},
            "id": "95a0e831-d22b-49e7-a10b-db5bac845bc8"
          }
        ],
        "id": "9c437144-fe0b-4e10-aea8-aca674c3a7b3"
      },
      "sampleMarkdown": "# Sample Specification for GrammarError\r\n\r\n-> id = df04bb22-74d2-42a6-b6a3-7f064d01a4c8\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6052256-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[GrammarError]\r\n|> \r\n|> TODO message=message\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "CurriedMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CurriedMathFixture",
                "id": "06b89cf5-e8f1-438d-a6cd-04d66bf107eb"
              },
              {
                "type": "comment",
                "text": "## Add5",
                "id": "cc8f86e2-3f20-4d2d-8fd5-a680574b62ec"
              },
              {
                "key": "Add5",
                "cells": {},
                "collections": [],
                "id": "4e3ff90e-f500-4dfc-a90e-68f5b1d40373"
              },
              {
                "type": "comment",
                "text": "## AddingTo5",
                "id": "638d0c8a-d3b8-48cc-8483-c1e157e9250b"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "dcac204e-8eee-4d5a-8a94-cbef7bfce5e7"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "e41442be-586e-4a66-94a6-c62312067bd7"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "7a1907fd-eb6f-413a-8fe2-940ec46571ab"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "20808653-4353-4ba1-9047-ecfc60989369"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "59e5718f-dfe6-4102-91c7-03b66e2990f6"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "b98d7616-01dc-4fef-aef3-097498a6100d"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "3da67fd1-62a7-4c9c-b28d-53641652d6bc"
              }
            ],
            "activeCells": {},
            "id": "70ca080f-53f7-433c-a8a5-aa2f20bbc29c"
          }
        ],
        "id": "96483570-54cc-4508-875e-1529ea2e4219"
      },
      "sampleMarkdown": "# Sample Specification for CurriedMath\r\n\r\n-> id = 961689c1-75cf-44d7-8ba9-1233ea508e11\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6052256-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[CurriedMath]\r\n|> Add5\r\n|> AddingTo5 y=y, returnValue=NULL\r\n|> StartWith starting=11\r\n|> TheValueShouldBe expected=expected\r\n|> TODO message=message\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Math",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                "id": "124da656-4a67-471e-b4c5-3f8921015f95"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "496a3d82-5ca8-46f1-9e64-fe180061c26a"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "b1a07800-c234-4ebc-9407-0968f1f86972"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "d75b2994-a9f0-4975-8384-048ceaebe147"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "c441fb10-8eb1-495e-9766-87a351127ab0"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "298102a6-9742-4c39-a7f2-c6e8d8e07450"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "7ad1e37f-f908-4bac-a46e-c60a13564ef4"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "1856202a-b293-4137-83b7-7d95f804a0e2"
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
                        "id": "daa6f826-f036-4d93-980b-fef967f692e5"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "cbf786da-68db-411c-85f9-c98be8503237"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "309b8168-1224-42bd-9bed-0b71e0e7a2f4"
                      }
                    ],
                    "activeCells": {},
                    "id": "749729f3-776b-4e79-8ce0-1f65fdadc977"
                  }
                ],
                "id": "17d8802f-184b-4a98-92f0-e7fbaffe2244"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "8d0b2f1e-8140-4eb7-8bee-85545c4c1dbb"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "40146496-ab38-446e-adfa-f731d8c26285"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "41146a97-0f3e-406e-9340-30d05e5d5434"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "06f0eec0-d2ce-471e-83ed-a8faf0783826"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "3a4a1e56-f72a-4bbd-89aa-22f8e7695f8b"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "1d5f208e-7adc-4d50-9841-7d728371f213"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "c55c42b6-f80a-45bd-9637-5a18148568d6"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "59c6f2c1-bed6-47c7-bfd6-676db4bb5ab1"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "eb029d86-8a90-464f-af60-bd47f8694c2f"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "7eff467e-420b-470a-a9d1-39f19ca2770c"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "226963e1-1301-487c-97df-3e946c601880"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "f90548c5-6e58-4dd1-a9fa-95469f11fb6c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "2651b89f-bf77-4710-bc6c-320de2f9661e"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "7f510965-6891-47af-becc-247e757b5761"
              }
            ],
            "activeCells": {},
            "id": "32f973a5-1c81-488f-a365-e14572c67bbe"
          }
        ],
        "id": "69240b8a-95f6-4193-b86c-0f4fd16a2d62"
      },
      "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 45f198ed-60fa-493e-8dd2-cd40e0cde389\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6062257-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
              "expiration-period": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Monday, November 21, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "70930c85-2ab2-49de-97b6-fef07627322c"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "8a747c5a-f091-489d-b6c8-d032624cff1f"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "23a6cb29-3d38-4f37-bc22-3684ddb1b112"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "3f2782e6-fab4-4a65-9fcc-4b1ad40a5053"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "4b19977a-86d9-47d3-afe1-f1127d4668aa"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "98773522-eca5-4b11-b793-d4f42320f1de"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "9a721bfe-2115-4e7b-9c2d-28e9819f46ec"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "d1860cd3-f088-4cb7-ab65-5b70f275207f"
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
                              "id": "57e7ccfa-29ed-4d78-bef9-ac0a86ebaa61"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "a2a60982-99f7-42ff-9f6b-538b67c9bdec"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "2e94a58f-4dd4-4083-810d-5e53cd93f1dc"
                            }
                          ],
                          "activeCells": {},
                          "id": "eaedbd5c-75ce-475b-9aee-d60c0e7830ff"
                        }
                      ],
                      "id": "892e7dd4-a5ce-4d61-9ac1-0fd865639387"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "fd4757af-5dfd-43c9-9fd6-118ed9c99a98"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "182067ef-368c-40ab-8031-be02b06fabf4"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "09f5d7d3-4392-4881-9798-3f761c6a5458"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "4b87bd0e-ed5a-429c-b890-d3dd0cebdd2f"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "3948a868-684c-4412-a6e7-5eabc7db7621"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "f08720cf-249a-44e1-b1df-f1803204d7cd"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "5f0c3734-60a8-4c43-abaa-0732582c2482"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "025f00d2-343c-4a53-b5ff-e9237750ba2d"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "80c3725e-f06a-441a-b4e8-1c2276c238de"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "9e83e4e9-0c6f-4188-a0c1-75dc27736a33"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "0e643c8d-c696-4656-a633-88fc0f519aee"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "d2d85f6a-51e3-4431-9fbe-9186ea1229e7"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "93b55555-2d89-42ce-b583-6d74a319a6ea"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "cd2ed6a7-2498-433c-8ea1-7c37aec5a8f8"
                    }
                  ],
                  "activeCells": {},
                  "id": "90b078d9-c6dc-4b02-aa68-541cd1f5a590"
                }
              ],
              "id": "28a3fa8b-5ea8-46b7-b97f-3a67e3063948"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 3db7a0db-5957-454d-a4eb-39a97abc97ea\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6062257-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "Now do some math",
          "collection": "Math",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "DoSomeMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DoSomeMathFixture",
                "id": "db2ce7b6-1e07-48e0-acd0-0d4d51c68b83"
              },
              {
                "type": "comment",
                "text": "## DoSomeMath",
                "id": "1d51fb1c-c3ed-4e00-907c-af433b1e89e1"
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
                        "id": "49bcdcf9-f099-45f1-bd89-9bb7f9e1ac8c"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "62a57b01-89b2-4831-9711-6e4ee0b64863"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "de85ff66-693b-4d9b-a630-8bd8c96dc9ee"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "4744dff7-e2d2-4233-9a8b-a0c83c291fad"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "7a88a698-110b-43a3-a902-08f24821a7ca"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "b5c8b8a0-7807-48bd-ad43-1888cca1757b"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "6ddfa38e-e767-419f-9c2c-81fc7007b16c"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "e674a8ad-0a0b-4ad9-8ca9-24436c81c01b"
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
                                "id": "91e925c6-eb25-49b3-b51f-97458a688232"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "3512fa25-56a1-4970-a18f-14ae610161c0"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "31b3f383-dceb-4607-b027-5505339e04b3"
                              }
                            ],
                            "activeCells": {},
                            "id": "e0d050cb-71ae-4f01-b35d-5453be30f662"
                          }
                        ],
                        "id": "ad0880f0-65f2-4c67-9f4f-7a6083b61da9"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "8104b179-c857-4a41-8169-5142c0b056cf"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "2210bf06-9251-4852-bade-74a067b0885d"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "3506b537-376e-4249-a17a-3fb6099d3215"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "5b64a04e-d1de-44d9-b627-aac60d55446c"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "5f9ad27c-1268-482f-bbfb-ea9f5aa23101"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "9e60e478-6215-4ce9-bad2-3acf9c22b196"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "6c3902c4-5958-4cd4-a902-f46cd9be3423"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "d7880f95-c3d1-4f22-8a58-6d635d92c99c"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "edee23dc-c4de-4d54-9f6b-8933a0989fc6"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "28d466e7-0ad1-44e9-b567-ef4d9240db96"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "c0d7f841-cc8f-48e8-b781-d87c8c75b85d"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "bae593dd-997a-431f-932b-7ea613074ee8"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "2c66e478-9ea4-4f54-8869-fc3bd81d228e"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "17336cc9-de2e-4c6c-a32b-1d842b674b9f"
                      }
                    ],
                    "activeCells": {},
                    "id": "5c7d0feb-1012-4ef5-a4ec-58e2cad333a1"
                  }
                ],
                "id": "b629ec3a-83eb-4904-b004-b1aa625b7fb0"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "d74cdfe5-526d-4873-b3e4-85b9134cd111"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "c0c5ee6a-8b2d-470e-92e7-641a9f05ceb9"
              }
            ],
            "activeCells": {},
            "id": "db70a8d5-59df-4178-a497-7959aca69b8b"
          }
        ],
        "id": "02b02f3e-35f8-4a4e-b92d-ffa3faa006cb"
      },
      "sampleMarkdown": "# Sample Specification for DoSomeMath\r\n\r\n-> id = 81b1be3b-d549-4cd2-b5f8-4a098d188a71\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6072258-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[DoSomeMath]\r\n|> DoSomeMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "ParkingExpiry",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.ParkingExpiryFixture",
                "id": "747f36ca-4141-4fd0-9692-b4a8bcebc8d4"
              },
              {
                "type": "comment",
                "text": "## TicketIsGiven",
                "id": "24196116-8220-4899-9a13-a9129aac24fc"
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
                        "id": "6c1eb1e4-76df-4fcf-aad7-1a47a6463d33"
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
                        "id": "afa97698-dfdf-4d71-b029-3a20375d13b1"
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
                        "id": "ec82188f-aacb-454c-9387-8a61895c8337"
                      }
                    ],
                    "activeCells": {},
                    "id": "38185f0b-a044-4ed9-99bf-a910b4ef1687"
                  }
                ],
                "id": "54677ab7-00ca-40f0-aa11-8bb08f134e9e"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "a84baadb-e752-47c7-a9ea-e4c042980db4"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "82231115-44e0-42b8-ac5a-d5588a08dd35"
              }
            ],
            "activeCells": {},
            "id": "ebe2e190-f16d-4fa1-b8c7-df83d58f69af"
          }
        ],
        "id": "31169956-a36f-4ca5-b509-437e1bfb199f"
      },
      "sampleMarkdown": "# Sample Specification for ParkingExpiry\r\n\r\n-> id = 4fcd6568-8672-438b-b615-d45fc71ef860\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6092260-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[ParkingExpiry]\r\n|> TicketIsGiven\r\n    [table]\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Player",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.PlayerFixture",
                "id": "e7f0b00f-e7f7-4b60-887d-bb97de2b1288"
              },
              {
                "type": "comment",
                "text": "## PositionIs",
                "id": "bdff3f2e-ca05-409f-a532-cd3867c9b39c"
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
                        "id": "998ee3ce-33c7-443d-b78b-41fc28c22e24"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "9dafb81c-2fd3-4c04-9a9e-ad8569f5ad1e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "56de9c29-8193-412f-a9c2-ea76f8334704"
                      }
                    ],
                    "activeCells": {},
                    "id": "94b3b2e9-e4e4-4eac-aa71-60a0797b6d34"
                  }
                ],
                "id": "3490eeff-ff82-47f8-a29a-8398b70cdb01"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "92ad06a5-9853-4719-a74c-ab62070da0ad"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9af130c1-74df-4737-8a02-96718463c022"
              }
            ],
            "activeCells": {},
            "id": "d073f454-1c24-46d5-8a8a-fc957639a407"
          }
        ],
        "id": "a7c234ea-0bb4-4ff2-800e-9325825d9cd2"
      },
      "sampleMarkdown": "# Sample Specification for Player\r\n\r\n-> id = 9cef8383-e7ff-486d-a6ac-3ee064f35c82\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6092260-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Player]\r\n|> PositionIs\r\n    [table]\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "SelectionList",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SelectionListFixture",
                "id": "748dbeb8-6ac7-4187-a40c-6643f0f50508"
              },
              {
                "type": "comment",
                "text": "## FirstAndLastName",
                "id": "d215e659-fe6d-4187-b5fe-c5e1dd22b2c8"
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
                        "id": "9ccdc80f-bf78-4ee7-b088-b7ffa091ba1c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "3b60119a-9b2c-4081-a539-c6e14c15315d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "97b60eb2-1c59-43d6-91d3-e38932a61c68"
                      }
                    ],
                    "activeCells": {},
                    "id": "09683304-02cb-479c-b9cc-61a61d37cf9c"
                  }
                ],
                "id": "b3ad60dd-c680-4352-98a9-98ee13e91150"
              },
              {
                "type": "comment",
                "text": "## names",
                "id": "67f5d251-5004-4988-9ec6-83a6f8854553"
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
                        "id": "b58937b6-bb57-41ba-abc7-d751f0e1557a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "6c572b56-f7bd-4276-94c6-ee67ec1664f5"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "ddff62e4-3ad7-4b6d-a05d-358d3bb56d63"
                      }
                    ],
                    "activeCells": {},
                    "id": "9e624c24-58e3-4269-84be-25a466113c3a"
                  }
                ],
                "id": "66466b73-3b2e-4d0d-a07b-5b1e43481134"
              },
              {
                "type": "comment",
                "text": "## TheEnumOptionIs",
                "id": "a067e23c-7322-4bdb-96c3-dceae8727a1f"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "SecondOption",
                  "selectedOption": "selectedOption"
                },
                "collections": [],
                "id": "bc5bc64e-44d2-4c92-bacf-a5cae85970ac"
              },
              {
                "type": "comment",
                "text": "## TheNameIs",
                "id": "36209421-c18f-4f3b-a3f4-83675a3a45f5"
              },
              {
                "key": "TheNameIs",
                "cells": {
                  "first": "first",
                  "last": "last",
                  "fullname": "fullname"
                },
                "collections": [],
                "id": "234dc798-ea1e-4027-953f-a4909369a923"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "961e889f-0cb8-4a24-a119-fcf011171b70"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9dc73850-fefa-4944-85ef-703e50de80f6"
              }
            ],
            "activeCells": {},
            "id": "4746e154-f8c0-4d09-b594-41f064441105"
          }
        ],
        "id": "a22c7214-b234-4891-b963-fa8f95bf7174"
      },
      "sampleMarkdown": "# Sample Specification for SelectionList\r\n\r\n-> id = bf9e5756-d768-458f-82aa-233e95a09cbc\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6092260-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SelectionList]\r\n|> FirstAndLastName\r\n    [table]\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n\r\n|> names\r\n    [table]\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n\r\n|> TheEnumOptionIs option=SecondOption, selectedOption=selectedOption\r\n|> TheNameIs first=first, last=last, fullname=fullname\r\n|> TODO message=message\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Simple",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                "id": "8a1b2f4b-3a66-4140-b3f2-d0ce915d5da8"
              },
              {
                "type": "comment",
                "text": "## A",
                "id": "2212e0f9-237f-4955-97f3-2a24ace97c47"
              },
              {
                "key": "A",
                "cells": {},
                "collections": [],
                "id": "2636f9ba-d97b-4ff8-a830-9fefbde0267a"
              },
              {
                "type": "comment",
                "text": "## B",
                "id": "0d312930-c6c0-4962-8524-4dfc137bcae9"
              },
              {
                "key": "B",
                "cells": {},
                "collections": [],
                "id": "c59a768c-3545-4c32-82c8-f166af1bc54d"
              },
              {
                "type": "comment",
                "text": "## C",
                "id": "d330b262-805c-4bd2-a149-c1312ee1912b"
              },
              {
                "key": "C",
                "cells": {},
                "collections": [],
                "id": "380a895d-49ef-41f4-8489-2aa4ec052cdb"
              },
              {
                "type": "comment",
                "text": "## D",
                "id": "5168ba9a-1d1c-4808-a13d-46917f352687"
              },
              {
                "key": "D",
                "cells": {},
                "collections": [],
                "id": "e522be05-a6c2-4d8c-8e6f-5c6f19f8e12a"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "9fe44cab-6dce-4985-b2be-8f5e87811658"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "bb6604e3-5bac-40e8-ab63-026ea03229d5"
              }
            ],
            "activeCells": {},
            "id": "31a4a89a-08c9-4dca-a8ba-99a03ae3ca81"
          }
        ],
        "id": "e6c3c0fc-d3ff-4a5d-a7e3-dace7751365a"
      },
      "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 6855c996-0dd1-4007-8d61-03482e3be38a\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6102261-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "expiration-period": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Monday, November 21, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "24272149-57cb-4992-a380-8237b77b245f"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "8ebecb28-08c5-4922-883f-cec4a31ecec1"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "b47f6cad-899d-4da7-91f2-c95c3fdb7bdc"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "16fb4409-112f-4331-95da-98c8f4857484"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "948c08fc-9aeb-4aba-9411-09b30269feae"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "d0e47265-5539-4241-8eba-d0a551d180f6"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "1ec973b0-484c-4318-9b10-e790ace4e545"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "46fd245f-650b-46c3-85ef-37ddde31ab15"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "34a59b32-a704-43b7-b3b5-269230487914"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "e52b2c0f-a21a-473e-b083-0ee6760e510f"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "5e0a44f6-1c7a-4e24-8bea-aa6812f62a32"
                    }
                  ],
                  "activeCells": {},
                  "id": "c571647f-3213-4eba-a468-20a0db38f189"
                }
              ],
              "id": "ce095d2c-36f1-4abc-bb8d-8afa7cc669cc"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 5d0b9613-f512-4f07-aad7-da6a637325c1\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6112262-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "simple",
          "collection": "Simple",
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
              "expiration-period": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Monday, November 21, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "SingleSelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                      "id": "c7551e2d-96f4-4aa6-b2f2-072cdd97d663"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "53e0c415-1eab-4b4b-86dd-327e02a3da86"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "348aec0b-67a9-4432-904c-aa8e405761bd"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "a4682c8a-be0c-4f04-972e-1bd043ad1151"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "70fb47de-8a63-4df1-8836-662bc6e4133d"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "eb0db4b1-d434-4b6f-8f10-219b7edd1ed1"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "9b9c8d6f-e3f8-453e-a652-9b72afd4ddfe"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "4a323f78-98f1-469d-879e-3983b00d951f"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "74f97f9c-b407-414c-9ab2-6f7f08ca7ecb"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "8f6bb602-efb8-46f0-b3e7-e3179e318995"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "e988c543-4b3f-4ad1-9953-966b23d712c6"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "c55882e1-0bb7-4876-92d3-5d5418739849"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "121e3478-40a1-43a5-9006-c5908b69c736"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "b84f4edb-0d6c-4a83-81c8-08372550c623"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "3e39f777-8b33-47ac-89ba-8886111a179c"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "f147058d-67cc-461e-be0c-e41e347f89c5"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "26e6bf05-98b0-4b77-b73d-e17b62dc405f"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "ce5e99fd-5c86-49e2-8eb3-8f78e41708ab"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "1f65345a-edf0-49d2-8ad0-3458a97abaf0"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "3177ab94-9342-4035-bcaa-3a40d51ac330"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "00f4ecb1-0f57-4cb3-a0af-2595ff52c30f"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "fbaaf568-c096-4e0e-8fec-0505bda268ee"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "b324566a-d92c-42c2-9884-02496189bbb2"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "bc4d2542-6698-4cad-a193-79f1c8072a87"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "7968e405-172c-471a-a715-ad5ec52c82bd"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "a62bc56c-3022-4c0b-b943-bc18f538dbfb"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "33181e7b-4f33-4cc0-9fb0-8b0766dafe54"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "aea525eb-b959-420b-a0d6-44e3b1fd564c"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "93bd1e5d-2c4d-4027-a69b-8a1a1eccd1a7"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "5aae8d68-7f52-4e21-9b62-7a3decc12406"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "65a10348-22ed-4ec9-ac0a-ed296ecdd99c"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "acc8e397-f7b2-406e-bf53-144e6225e8db"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "803ba1b3-9d0e-4baf-8743-cf0d2244e658"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "629c676b-67fd-42a4-a90e-d0bf6e568366"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "caf8aa60-d7ae-470c-8a2e-a0e54ea4181d"
                    }
                  ],
                  "activeCells": {},
                  "id": "96620c00-2093-4515-ba2d-c4df007ff79b"
                }
              ],
              "id": "033012ef-7c42-4508-8bf0-01ecf8cb038d"
            },
            "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 966ffdf9-2a2f-4868-bfa9-bfe762bc93ce\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6112262-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "single",
          "collection": "SingleSelection",
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
              "expiration-period": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Monday, November 21, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "d1abdf33-ba2b-4e22-969c-716b0046b2e1"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "c8c3f61a-7f9a-4e97-88ad-e17acbfb5591"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "e80be8e7-ba4c-4afe-bf0f-ce2df74b63f2"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "dd1ff1aa-0f7a-4640-a799-8c25f274b172"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "d7cf2554-6fcd-4f11-9ea2-92d475d12e58"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "7362c9ad-1589-4d66-a454-05850966e810"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "4a5125fa-bbcd-4aaa-8582-b9a651ba9abd"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "5ba2a270-6d52-4904-a690-9a4d47f86e2a"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "6c4d51b6-5ee9-4837-b6fe-d79ba5442875"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "b85153e3-a9af-4bf9-8559-fb0efc291730"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "a629fa81-984c-4367-9ab2-ff945f108807"
                    }
                  ],
                  "activeCells": {},
                  "id": "32b105fb-1adc-4ada-a0dc-a79c80d5aa47"
                }
              ],
              "id": "d1e5fa75-ee41-406e-90ec-8cb7c9dca5db"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 11161542-f50d-4550-aa8b-48223f1e9d5e\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6112262-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "simple",
          "collection": "Simple",
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
              "expiration-period": 0,
              "lifecycle": "Acceptance",
              "tags": [],
              "errors": [],
              "last-updated": "Monday, November 21, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "MandatorySelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                      "id": "edcd6a8f-bdb7-456c-8996-d414a1eae634"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "c8d6e8a0-0b35-427e-aca5-5fb8a75ea59b"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "651f5041-5120-4af1-ae13-ae49735f0d4c"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "abcf4d5d-4b07-4b58-87d6-55febf4f77b2"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "cd5bfd3a-836a-4b19-a722-5a361212ee7a"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "2d298843-db33-49ca-ab76-2c531c899d24"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "6f55badc-d532-418a-9935-a765d7d21f4d"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "729b12bb-53e3-44cb-b642-7b1a1c356f55"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "b4c88c91-46a3-4982-ad15-19ef2cdc082d"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "ee5b7cd7-56d5-4f03-87da-f4edfa299759"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "3f185b08-89de-42c0-9487-35e7dc2e5803"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "b4e1cf0f-b880-4c12-a2a1-b0f197063983"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "9e7fbebd-096a-4e8e-8530-e0b4945b9ea0"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "4a99de13-c6a0-43c3-aac6-8003b008b8aa"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "10a2cb18-6196-449a-94f8-51ac5a993a1b"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "e26b6e55-d53d-4fef-a1da-eaf5f31d0a5f"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "62ae56fa-7746-4904-ae2d-0640618c88a1"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "01a7306a-4931-452c-ae48-dbb8153022d0"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "c30b70da-4a2e-4e2b-969b-ea747305e18b"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "1c81ddb0-97c0-4620-aaab-667da7f2c607"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "91347048-edf0-4cd0-9128-6b266c213e32"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "037e33c6-b459-4f36-b60c-18dc41e2e0c7"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "d7d8052a-591b-4942-bfd3-8fa49663d431"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "651d2ccd-b8c7-4630-a070-05760d7aab83"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "a01916fa-935f-4d30-867e-173a00088125"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "9a275712-cc4a-4636-931e-3a9ecf8e2174"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "365b8373-71d8-439b-8bf5-630392fa8c86"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "ad12bba7-ed95-4f0d-bcd1-16aab2e9f6d1"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "ad1485aa-fedc-4917-ae8c-f473709d14c5"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "cba36f39-f2a9-43bb-8f97-bc08e453ffae"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "d451ba45-c1ab-46d4-bd8b-8566bfac7e44"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "427e6df0-36c9-437d-86d5-f0fc02fa2731"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "150d3d5a-cbd6-4f95-9eeb-4cb50e8242a3"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "00726277-adb1-45c3-9ac5-eade811bfc34"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "270613be-a205-48a7-9989-b7fb99cc80b8"
                    }
                  ],
                  "activeCells": {},
                  "id": "29f65e61-52cd-4726-a4d1-25ae8acbb07c"
                }
              ],
              "id": "22dea8b3-ed34-4780-8d5e-35f809ed3861"
            },
            "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = ed97a128-4552-4379-a66d-f1f040092773\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6122263-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
            "errors": [],
            "missing": false
          },
          "title": "mandatory",
          "collection": "MandatorySelection",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "EmbeddedChoices",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedChoicesFixture",
                "id": "c89942fd-0eff-481d-a11f-4b2a107453b3"
              },
              {
                "type": "comment",
                "text": "## Inline",
                "id": "05825cc1-9f63-403f-ba13-129f8a783e25"
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
                        "id": "98334897-da3c-4239-b355-305874f78b10"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "ecad9495-de3e-4a8d-a6ac-52116cef2c84"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "2f605b6f-e86d-4f24-bead-09739c857abb"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "95c8d92d-fd8a-46cf-99ea-0fe648b40c48"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "104430a8-41c4-40a0-892f-2a9c6eb90740"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "27a361bd-c358-4a34-a453-b772b56d28a3"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "5e10a2f6-5acb-47f7-b22f-370b466da5de"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "855c3c7d-038b-4340-a863-31773eacb44e"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "5b323aab-f724-454e-adc0-62ce4327ed07"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "70fa9d10-17cb-4159-ae81-e954b1391330"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "f51cb6db-6d42-4dee-90ac-f929cc5f9d96"
                      }
                    ],
                    "activeCells": {},
                    "id": "0b642955-de19-427e-b85b-63e715534148"
                  }
                ],
                "id": "5c0796de-aa6f-4bd3-9665-ac6d15d94f3c"
              },
              {
                "type": "comment",
                "text": "## MandatorySelection",
                "id": "5920a018-1ae3-46bd-ae07-6dad405c82f1"
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
                        "id": "61cd28b8-dd85-4799-b892-c89ddbbdd7dc"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "6f6dec69-58b3-4861-9771-0dd990a4e100"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "2e097e7e-3fcb-4bcb-804d-b592c617fbba"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "dcfa723a-0b0d-48c4-90d9-eaf14514b4fa"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "dc5537c9-6b42-472e-9882-6d181e24ccb9"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "dd229ceb-7a77-467b-a60a-e5e3ba17e6da"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "ebe11268-d612-4f26-b357-57162499d6ad"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "6aaf663b-4376-4830-bf57-66167abf642e"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "19653440-3198-404f-b65d-3a047a4f5419"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "ff24c66e-c86a-4a18-873f-8e59d707a516"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "57b783e3-7b4e-4dd1-86ef-c2314fa33eab"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "fe48ad49-3091-430b-b00c-76ac6999cb8c"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "b0bb3d9e-73a5-4d56-9bf4-3eed977c1552"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "0df46619-f8d5-426e-8dbd-920b45204c05"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "be9797f4-c75a-41cc-baed-b6c69708d506"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "ef7dafb1-bebc-4c30-a79f-ffd5d523a864"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "d67e6cd1-1d3c-4c3c-9629-7299621dab19"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "ca88c0b9-290d-4a4e-bdee-2c752c81e12e"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "639dade3-7adb-4bc6-ae9e-279e399ca209"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "fb295f73-76a1-41fc-b774-21f62d0066bc"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "a88897b4-0717-40d0-833b-6fe9f4e75de9"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "688e512c-4bf1-42eb-a564-60f3cbc4cdf7"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "2fd9647b-6c61-4032-91be-69022e627584"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "b44cce98-e87a-47be-b421-929a16084509"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "5b533761-930d-4d96-94ca-5baacb2e5150"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "71955d24-8b03-4831-b7da-beb5fec13aad"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "a0a0b23e-aadc-4dc7-bff3-0f92b12a29ba"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "e922ea5c-bbbf-4d47-936f-45fd5d267a84"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "aab41284-d0a8-4ef4-950e-6cca2ef3d4e5"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "986f8eaf-39b6-48e4-a06a-e3adefe21140"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "173a2663-2ccf-4126-8b2a-2506a6758d91"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "fcb7638c-f01a-4089-84fc-26c32ce3d359"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "ca72ec16-5f49-433c-a9ab-e2b474e07e76"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "12fc693e-5e3e-4b56-ab30-b754dfbedb08"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "66e9499e-0878-4ed2-b56e-f92ad8c5e329"
                      }
                    ],
                    "activeCells": {},
                    "id": "36ea3d96-ad52-411d-a2b0-b13a4b13f774"
                  }
                ],
                "id": "886a514c-5a34-4c32-a17c-a6cc43f6555f"
              },
              {
                "type": "comment",
                "text": "## Simple",
                "id": "0d741c6c-d667-4e76-8500-4c4ef405178b"
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
                        "id": "6a4b2ba9-58e8-4476-b3a5-2ea518fb8dad"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "2d526575-df4b-4924-a96c-857934d925e2"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "22f8fb57-442e-4ab5-b157-33006caa83fa"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "7f647d1e-66be-498c-b218-bff959281f1d"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "725abc86-3b46-4235-8038-16ce679684a4"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "eeb434cc-6c36-41f1-a072-433ba4611220"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "84cc2000-10ab-48b8-9dbc-e88809000781"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "e6311944-a6ba-4c21-ad9c-ab8952fe50eb"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "1bd00ca5-5924-44cc-a4a8-d259bc4d9bfc"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "c0951312-3d5d-4e8d-9d52-152ba8c48431"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "a6d6722a-32b5-477d-9443-975783c0c160"
                      }
                    ],
                    "activeCells": {},
                    "id": "5aa9ccd1-4d56-4467-95e0-b3372bcc6b59"
                  }
                ],
                "id": "b25135a8-5936-4177-b3ac-67cfa73e5b63"
              },
              {
                "type": "comment",
                "text": "## Single",
                "id": "c00ce6ee-f6e4-4b8c-bc6e-9cc5aded53d9"
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
                        "id": "962ff530-9cec-4d7c-9734-e19b34512d93"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "e520cf25-f5bd-4d63-a6ad-7e4a8a43dff1"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "bad55933-fb56-49e9-a8b8-a09cd4004123"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "e06ffb20-28f8-421a-aeeb-d36ec121c79d"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "4a267067-849d-45dc-915b-3523b0d32326"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "dc13f9b6-090e-4cfa-beff-9402c2f70077"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "38fb0304-f244-4524-b72e-f85327d199de"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "a53ccb50-9f28-498d-96a2-0700a0d4a667"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "c16bd130-1b93-4649-b2ff-a202fd01ee7b"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "2bfea35a-1745-418d-8af1-c5f7bb65933b"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "7cf024a1-293b-4f0b-b40b-450cdee95c8c"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "963cb505-d0a3-4d65-947f-93da86528cc6"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "384c11c6-a6d3-4912-829b-b830202c371d"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "f4929c7a-7816-4025-b3da-789103264ca9"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "9ca2ad50-f990-4409-b369-2797792640fe"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "b6e7d451-3a15-473a-8be8-9b7eb17928fc"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "f5289239-6f46-4f12-8da8-288bec0735d7"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "8082e065-41d0-4ff0-b6d0-1dadc39ac99a"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "3b6084a2-ab36-4f6c-afaf-18032005137c"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "0bba78c8-01a8-44e1-b12a-53a68a4570b9"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "450b8e14-427a-4570-b311-25905de85d5b"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "e8020d8c-3ac2-40ec-a09c-24d2c682e319"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "894c8db8-eefe-4214-bdd6-5048022962b7"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "ac7b2cb1-46d9-4bba-a5cd-e943e0607e3a"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "ae1595d6-6301-4a87-9e16-ee347b63584a"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "9f9c567f-1ae8-434a-9e1c-9bfbff085c23"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "e0a5615c-cee6-4a2c-af71-ddd84822c76a"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "71771529-33e5-424e-873e-3a5b4d120f39"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "c1877136-89b5-4155-8984-badabdd611b4"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "d7c8d589-1412-421c-94b5-033826503732"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "793b0ce6-be75-4c3f-ba2a-b38bee2849c6"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "fd1fb142-f8f0-4092-9383-4b447a2a5acc"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "96b19d33-8a4e-497f-9cdc-68b5ec43aa0d"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "6a60f895-caf7-4ffc-b160-7abb15484a4c"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "570212d8-d6d9-40f6-8887-4ba3bf08a9d6"
                      }
                    ],
                    "activeCells": {},
                    "id": "aab3a20f-4846-40da-a229-51179e4bfd98"
                  }
                ],
                "id": "ea381d06-4a0d-4a64-8a94-55e7c60ce099"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "edbfaaed-baec-4e54-8284-85faa1b7b637"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "837e02c3-f604-459d-80dc-2d55a3fa67f5"
              }
            ],
            "activeCells": {},
            "id": "ca35e006-ad91-446c-90f0-3c8b509b0ed2"
          }
        ],
        "id": "08d1c2c8-1e40-42e2-a00f-230f4cfe8876"
      },
      "sampleMarkdown": "# Sample Specification for EmbeddedChoices\r\n\r\n-> id = 96275538-beee-4d76-a627-ca54462bc145\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6132264-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[EmbeddedChoices]\r\n|> Inline\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> MandatorySelection\r\n    [MandatorySelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> Simple\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> Single\r\n    [SingleSelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "SingleSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                "id": "5c86fc7c-c7e3-45de-a2d4-ebdf9e26ae07"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "ba4db90f-7a1b-4a8d-a003-001bd1717587"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "ebf59903-8b5b-4f6c-86cf-595637831228"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "062dbad7-f872-4b4f-8d1d-af392d49c747"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "5713e6d5-ac86-4015-9817-dadada17a182"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "a6f52106-a677-4fd2-8815-4a8ecf35ede5"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "ae959c12-fc04-4dec-bb27-cd9e00a7e949"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "3d1dea5b-91de-4ed8-b4dd-18098eb602a2"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "ce69cbde-4ff3-42dc-8b5d-095a443b25e2"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "6290436e-aaff-49cd-8589-3b59b9448f84"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "085873bb-e50c-40b3-828d-bbadccd515df"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "2d3e8a2b-231f-4f5c-b9b4-41663f46f8ab"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "262504f5-a71a-4fc8-8e2f-eb8d552c67f4"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "b979e399-9171-4e83-b6a6-7ffcdb996f72"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "5f2133a3-a1d9-4065-a17f-0701a3fff347"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "4dbcda7c-b4f0-4d3d-9d66-881ab8d727b4"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "11788824-5cb3-4e2e-83e6-3a03adced501"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "ba121be4-5b4c-44c8-9c98-7c8521227ef5"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "5110b7d2-fe0a-451a-851b-2cefacab0c2c"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "50f294af-30fe-4a77-bf58-2f1794eef45c"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "d70b281b-7762-4245-9c59-3a59f29d2c64"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "aac47fd0-3eff-4aa7-9779-326219f81f22"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "3a180fe0-ad10-49ba-ba5e-8a3f16965930"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "654f1b8d-a00b-4108-9194-f2264dba1076"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "7f2d7449-4218-43ca-b039-093a52fe2923"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "5706e4c4-8e13-4fad-9d7e-3888976960ff"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "8fd413d3-5a03-4085-8e3d-abde06d4c0f2"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "2d78025b-dea9-46ab-a4c1-94992ecfa126"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "d3a8a795-d3f3-4415-8b18-934ba90e6439"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "02ec061b-6b7a-4a7b-a65c-e14853ffc1a8"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "e9ad3e9e-2b70-4ed0-8dd8-fa6151a29f51"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "12fcb969-2ce3-44b7-82aa-f96f7f249be1"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "b04ef61a-bdfe-49a6-b7b3-570da02ef013"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "6a79bb63-296d-491d-8298-3288e09f11bf"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "f2ea22f7-5222-4b14-8333-74c019ebf9b2"
              }
            ],
            "activeCells": {},
            "id": "357ef615-2aa8-4ea1-a499-2b92d6ce1bbf"
          }
        ],
        "id": "d04ae1d5-0d06-48f4-8444-64934d6414fa"
      },
      "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 69f8aaf1-7eb7-4b00-897e-0481d6cac10d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6142265-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "OneOrMoreSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.OneOrMoreSelectionFixture",
                "id": "8af36b2f-e6b6-4c2c-b215-ebdd3a0425fa"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "f1add55b-de78-4884-937b-7daf6591d77e"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "f0864079-9908-42ff-a2ba-38f560910d31"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "3c81d39c-abb7-4c88-aea6-149c1dc1458f"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "8b97f4f7-3d5d-4468-a00b-267691a254bd"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "76f26e5f-5ec0-47bb-bc71-bf53cca563b4"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "a7ebf996-6f6b-4f3b-9b36-bb05f73c1b02"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "ed6b508f-80ca-4486-acc2-c4425b77e413"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "0bb612e9-c1ac-459e-a4d6-cce545c2f46a"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "f1c20901-85aa-40ac-b3af-6b0b16c96d06"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "3d20cc16-9cc8-4aac-a863-1a2a62b980be"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "13f010c1-599d-4d04-a029-ed08e2d096b3"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "d5845dc3-ba90-4b20-9a76-2d81181612ae"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "3aada64c-1b7f-4635-8429-6c687a61232d"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "a610a779-82b5-4679-9197-12eef7c19d9b"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "dd94ecaf-abaa-4a1e-91c5-4555a76516e2"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "a411e917-e7f3-4bad-b898-a872ed5fb93c"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "568c05d4-ea4f-4d44-a890-d53f6bcfd4d5"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "56f2fe71-0228-4f18-b83a-04cfea071880"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "978e9cc7-ffa6-410b-8b95-02508eede426"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "f0d53976-b140-45cb-9d2b-ff187d8e1fac"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "bb1f42d8-562b-4899-b6ed-a987fae9f7ff"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "5e402cbc-1386-4c9b-af77-bbd0e29dfeec"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "45217a2b-5b48-4fa7-b225-156a0455f8bb"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "ae9b8501-f1d7-4939-acb2-9b2ee54e373d"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "9e7e858b-2481-4420-9854-19edfeeb11b7"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "41b0ebe5-151f-45c3-8a3f-7a1fc6321ed7"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "2729ccd5-4330-4ace-8f66-937978210e45"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "e0f7822d-dc29-413b-bfcd-0c1a2e9fce50"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "342f8567-fe8f-4a8a-8f95-c59516f85d28"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "4dec7323-2038-4b51-a29a-1d5bff04a2ea"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c638a253-7536-4477-8367-77e00c5e29be"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "41bb4eb4-5346-4bbc-b5bc-edd9ab3f2e83"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "8247be5e-cbce-4207-b75d-e5bb0e552a90"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "11e69f1c-cdbe-41f2-a418-253a2e81fffc"
              }
            ],
            "activeCells": {},
            "id": "8489436f-a5fa-4b3b-af2e-ec23ca0c0bd7"
          }
        ],
        "id": "f5bc35e8-625d-45b8-a790-1d403c8a8386"
      },
      "sampleMarkdown": "# Sample Specification for OneOrMoreSelection\r\n\r\n-> id = 0aa46fa0-1990-44cf-935d-b0d7ddb26f20\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6152266-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[OneOrMoreSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "MandatorySelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                "id": "ba1de8a3-8a83-4a76-a5a8-8430fc9c33c9"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "0b21e79c-c613-4f2b-8172-28b15a74a54d"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "2a3ed570-d253-45b6-a5ee-2743327ca558"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "8498d9c6-6fb8-4280-a3dc-c63875db3f74"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "0a2d0af8-8744-42b8-9cfe-e8c85e9cbf66"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "dd10e222-7a2d-4735-bab1-eebfdc1211fb"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "0ea9f5d7-5c77-48f7-ab34-7f67fb4703ff"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "f1c45909-d86c-4106-a680-ebfd261211ca"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "3edc1be0-c3a8-48c1-84a8-364acc2e3402"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "0e353495-d3bb-44d4-9117-ca01db442f90"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "c8a2dcb3-98d0-49f2-bf40-71d899100e6a"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "525db777-08da-4158-9f40-70409f49ae15"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "2361f443-af0e-4135-84e2-fb3e4d8e3562"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "d1f84e93-5b6f-406b-959a-09f26bad862b"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "4da7de28-6895-4dc0-a1a8-2915dfc48e6b"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "bf6b6714-ac98-4256-93e3-ede54e77e98c"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "7c625c83-d5f4-4ecf-8d44-9cd04aff59db"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "f4f2cace-25b7-4b58-bd74-351a2e222943"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "5b14c343-9bce-48d0-977a-bc399ba56be9"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "32ab0acc-39a2-46c1-ad92-c27670b1e704"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "521ce77f-4e26-483d-b499-ff86b894d7dd"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "47f993c3-4d45-4073-b29c-92b6cd1f531f"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "7681c89f-a3e4-47a1-830d-d8bfdca05179"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "41e05467-6d11-41c0-9b16-451f14ae76c1"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "9dea381a-a109-48db-999f-17d5fa971d94"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "fadd00b1-6ec4-44ce-90c3-b67a6840a332"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "53dec2ca-8055-403d-8a79-5db8c4925cd1"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "46739add-b598-4821-8363-9c8bdd2a8d81"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "9c1e7d0e-c06d-4344-9181-978b2da63c76"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "39f9a8c7-4d74-414f-b1d6-28a9146c61f3"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "b6a2d5e5-a0ca-4133-a1f3-298dbccf8c4d"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "0c397e69-a524-4a8d-a42d-e05b3d24c7bd"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "01c681b5-394c-4aaa-87ff-4518dced710d"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "31eb2b8e-74d1-4122-9b07-804435d3081b"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "9724799f-a879-47a8-bd13-2cde253c929a"
              }
            ],
            "activeCells": {},
            "id": "a8353b1b-dd8c-42ac-b379-97affac9a1e3"
          }
        ],
        "id": "5dbc1126-9388-426b-b35c-98fe9f0fe105"
      },
      "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = 9fbdba05-0278-4d98-955e-141875e1b60f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6152266-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SentenceFixture",
                "id": "bb10b35e-aca8-43b5-b17f-6535309b5daa"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "3de95f93-836d-476f-b272-e23fb74cd32e"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "56b2cd6a-36fe-4b1e-a46e-46a16c88e1c0"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "dc13b659-de94-408a-b579-9b7b8fb822bc"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "4a8b86f1-cfd0-45ae-904d-a8add183cea9"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "af70d9ee-0aad-4273-8fe1-fa1a3e22545c"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "bd8a5033-8d4e-4c05-abad-29edc142888f"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "0157b813-914c-4111-9b16-11ec43e10683"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "4046f60d-c20c-4f6e-95df-466d9b2bf170"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "acbac549-4961-4ae8-8d47-4e4fc2dc2f7f"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "34883db8-3da1-4472-b189-86f16ebe1bb2"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "a051d5aa-6ff4-4963-90bd-a447cc4fffb8"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "84bd088b-3810-4d75-abb4-26c12ae3a806"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "89ab212c-cb9d-47df-8ac5-f1c4b32d8fbc"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "f67074cf-03ed-4b2b-87af-4e2160c5fbd2"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "e9e293f3-6da2-4142-bdf5-eeb8634bae91"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "efd4ec93-372a-421d-8890-cb0248b3660c"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "c6b7daa5-1355-406f-b3aa-130a3bafa5eb"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "95102eca-79e7-4bde-be5a-b8cf098dab3c"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "0d85eafc-f3bd-42a9-b45d-cb4167053b5e"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "aba15ee4-ccd6-4dcf-bba4-b9deea379b27"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "65677401-e535-4de3-80e9-bc2ff0606014"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "a17b40ad-e035-47a4-b566-18c5acb4ff1a"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "d252e5dd-9954-40b9-b6cf-82ae34428c57"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "f3d9a502-d447-43ad-b3fe-fd14153cb2e7"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "7dc14e32-8cac-45f1-8f1a-da879815e4ae"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "edc96364-9375-427a-b583-73c0f76f1c8e"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "194f0513-baa9-495a-bd85-285b2400089d"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "95ea4b0b-ad00-4530-9dd7-0a9b95c7c018"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "07a6c3bb-baae-4a4e-a9f4-8f78179a0f80"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "6e0cb79d-99bf-409d-957f-a5b040d58345"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "ee503991-0558-4b00-a0bb-5dddbc18bfdb"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "7792a29a-ffa1-4405-9014-b3e0c0b71684"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "f77db58d-7d15-4ec0-8031-d14c2abcb1b6"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "bbfa2b04-f2b9-4dea-805a-0ab543a88af9"
              }
            ],
            "activeCells": {},
            "id": "e77af707-37d5-4d6d-84e8-7a234ce8c4c6"
          }
        ],
        "id": "5745d69d-aa7f-4811-8265-c5c588f46e0f"
      },
      "sampleMarkdown": "# Sample Specification for Sentence\r\n\r\n-> id = 35661115-0e79-4e78-89e0-0bfde8d85c1b\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6162267-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Sentence]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "DataTable",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DataTableFixture",
                "id": "ec1f74c7-c366-429a-96ac-385f732e8d24"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "f82da5bf-742c-4719-957e-fa3d3a4f0fd1"
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
                        "id": "a5840288-d9e4-4387-874a-64d041200567"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "52bf7401-8a22-47ad-8167-425e6f6b0aaf"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "d048f872-14d5-4943-9d5f-1139b05bdbf5"
                      }
                    ],
                    "activeCells": {},
                    "id": "d28d120e-af7a-4783-a812-3d71189fe9c9"
                  }
                ],
                "id": "ab201f3d-0f82-4568-b07c-b148257057ce"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "9d77676a-2a52-4c15-bd0c-009e0e0dec0c"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "958c1fff-ed06-4d73-807d-7bbbbeff86b2"
              }
            ],
            "activeCells": {},
            "id": "f5f56744-fbd5-4dd2-9cc6-9b38e79f55df"
          }
        ],
        "id": "96ff521c-b00f-4285-8750-429939dd8769"
      },
      "sampleMarkdown": "# Sample Specification for DataTable\r\n\r\n-> id = 68ef22bc-d406-4421-98fd-8eb61c87a269\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6162267-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[DataTable]\r\n|> TheDataIs\r\n    [Rows]\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sets",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SetsFixture",
                "id": "2e3bcae0-9662-4a83-8407-3ef61c4b7a86"
              },
              {
                "type": "comment",
                "text": "## AddName",
                "id": "4d487083-c2b4-42dd-a391-d85e7cc8c15a"
              },
              {
                "key": "AddName",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "750b2b15-c538-4600-a619-dd91da29e346"
              },
              {
                "type": "comment",
                "text": "## InvoiceDetailsAre",
                "id": "1c363270-fae3-48d4-bc15-5304f4eaf3fc"
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
                        "id": "5a26ccf8-eb15-4d8e-8257-11325c5d35ca"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "3eb7e332-b903-4700-9d96-42fcc8ac4add"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "ab12cb2e-3f17-4bd7-bd9b-080f2f62aa57"
                      }
                    ],
                    "activeCells": {},
                    "id": "dbe384ae-15a4-4913-9fb1-5790efb1ee92"
                  }
                ],
                "id": "643c5caa-70b1-4de8-8b5a-f911b466602e"
              },
              {
                "type": "comment",
                "text": "## OrderedDetailsAre",
                "id": "989da0eb-f065-45b1-9adb-c50f12033155"
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
                        "id": "2f650025-b27f-4152-9013-d681287a8326"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "baecb6f6-9d74-491a-bed0-5f9875382f69"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "c516ab00-1567-41d4-89f3-40e7f71a43c2"
                      }
                    ],
                    "activeCells": {},
                    "id": "ea3d56db-1439-4951-a96d-3b68a03cfcf8"
                  }
                ],
                "id": "fe282c12-3b30-47c9-93b4-5f39e3dc1511"
              },
              {
                "type": "comment",
                "text": "## OrderedStringSet",
                "id": "01b4efcb-cbbf-4f34-b8a6-bdb73bc07523"
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
                        "id": "3d5c6b58-1337-4394-81fb-e791b60dd4fb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "f9d81c6a-4363-4299-abbd-ff357022c220"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "ccd154c2-68a0-4e76-85ac-2b60b671f911"
                      }
                    ],
                    "activeCells": {},
                    "id": "544bfdda-b6f9-4754-99d2-055899c0cef4"
                  }
                ],
                "id": "7029da4b-089b-4739-9905-8f88e9274964"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "88377e6e-59e4-4e1c-9b00-29cd909376e3"
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
                        "id": "936300a8-4654-4b0e-a3d2-6b93855e0ba4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "333ce89d-3eea-4f67-af34-8379fbce7e37"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "c466b782-8adc-4376-b130-f3ba416fbb5d"
                      }
                    ],
                    "activeCells": {},
                    "id": "841fc02f-fa86-4f38-84f7-8eebeac05f66"
                  }
                ],
                "id": "756cd70c-2514-4460-906d-256ede5642d3"
              },
              {
                "type": "comment",
                "text": "## ThrowsErrorOnDataFetch",
                "id": "5497ce18-aaeb-406e-9239-94ab2633df84"
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
                        "id": "b41a4bbb-2b3a-4aa4-b0d2-b86870c4c223"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "120304c9-c273-4c63-ab73-892a3d0f19c3"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "a25f23d7-4367-4fdc-8bf4-33e3b8330ba7"
                      }
                    ],
                    "activeCells": {},
                    "id": "979e7108-fcc7-4922-80f7-b017ddbd5772"
                  }
                ],
                "id": "258b0f3b-0fe1-4f18-8dbf-3b14c1c3bb31"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "8a604148-c18f-473e-be12-f262d42f16dd"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "20851da3-1364-4492-ac84-8613ab569e65"
              },
              {
                "type": "comment",
                "text": "## UnorderedDetailsAre",
                "id": "95df153d-6827-48ae-a186-5b78f741196c"
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
                        "id": "ecc16f12-37ae-497a-9422-90f2bca9b354"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "bc7296b6-4b9f-44f9-b9b7-dd6f205a033e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "7a42a232-9b39-42d0-a136-b4ac0f7497b5"
                      }
                    ],
                    "activeCells": {},
                    "id": "47d013c8-5127-44b3-a5b5-86e11255ef66"
                  }
                ],
                "id": "8370af71-5b40-480f-a1de-d84eadae6c82"
              },
              {
                "type": "comment",
                "text": "## UnorderedStringSet",
                "id": "348c5e1c-1194-4889-998b-5b99704c87a0"
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
                        "id": "e09dfecd-993e-4662-828a-75fa816e7e30"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "d28a2af2-5d3f-49c2-a584-f0c51f899095"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "30f18295-5f37-48fc-b4b0-94766ed27626"
                      }
                    ],
                    "activeCells": {},
                    "id": "39b63d84-8ccd-46fa-8aed-73ae8f9b0503"
                  }
                ],
                "id": "4cc86594-5b33-4898-bd53-117e791c3da7"
              }
            ],
            "activeCells": {},
            "id": "e28a4326-9fbe-4707-860a-4008b5cac2da"
          }
        ],
        "id": "9b41fc63-7d24-4e9e-a401-f8e61e77b1d1"
      },
      "sampleMarkdown": "# Sample Specification for Sets\r\n\r\n-> id = a712714a-bcc8-49ca-86b9-b70930883279\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6182269-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Sets]\r\n|> AddName name=name\r\n|> InvoiceDetailsAre\r\n    [Rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> OrderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n\r\n|> OrderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n|> TheDataIs\r\n    [name]\r\n    |name|\r\n    |name|\r\n    |name|\r\n    |name|\r\n\r\n|> ThrowsErrorOnDataFetch\r\n    [rows]\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n\r\n|> TODO message=message\r\n|> UnorderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> UnorderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n~~~\r\n",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "SometimesSlow",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SometimesSlowFixture",
                "id": "29339699-98ed-4e67-a1bc-31c77e29a7f7"
              },
              {
                "type": "comment",
                "text": "## ReadText",
                "id": "6b70204a-8f22-4f62-be2d-eadcdc831d6d"
              },
              {
                "key": "ReadText",
                "cells": {
                  "text": "text"
                },
                "collections": [],
                "id": "2899828c-f8f6-43ae-ab37-b04480be8ebb"
              },
              {
                "type": "comment",
                "text": "## Slow",
                "id": "553596e9-baa6-41d8-8680-833e4e88af32"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "61c8cd18-4dc9-4b6b-83df-a9981e18e3c6"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "7c482035-0793-4e44-a2fd-c71729d1c610"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "c91b1063-537c-44a8-9d03-677b41726b3b"
              }
            ],
            "activeCells": {},
            "id": "86107e42-996f-46b0-83ec-eef788021980"
          }
        ],
        "id": "65a14d4e-80a4-4b04-93f6-25810ad293c5"
      },
      "sampleMarkdown": "# Sample Specification for SometimesSlow\r\n\r\n-> id = 5ab9e6df-9cb8-495a-8fea-22771a0d7943\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6192270-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SometimesSlow]\r\n|> ReadText text=text\r\n|> Slow\r\n|> TODO message=message\r\n~~~\r\n",
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
          "key": "decisions",
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
              "key": "sum",
              "options": null,
              "result": true
            }
          ],
          "collection": "sum",
          "title": "Adding numbers together",
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
        "expiration-period": 0,
        "lifecycle": "Acceptance",
        "tags": [],
        "errors": [],
        "last-updated": "Monday, November 21, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Table",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.TableFixture",
                "id": "9b20a4c7-cf25-47ac-b125-d195927c6736"
              },
              {
                "type": "comment",
                "text": "## AfterThrowsError",
                "id": "21f041f8-d015-40f8-b56f-eac9309e91c6"
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
                        "id": "6d6ac2db-31ef-4271-9383-3c8ac288d53d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "17564990-da39-4185-9d68-5569193b31ec"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "1abcd072-a030-4257-925c-a0311032de63"
                      }
                    ],
                    "activeCells": {},
                    "id": "7da42581-421e-4afb-92ca-74d50f56d36a"
                  }
                ],
                "id": "8ea22bda-a103-40f4-bdd4-6af37b65b7ea"
              },
              {
                "type": "comment",
                "text": "## BeforeThrowsError",
                "id": "e59b4abb-058a-4b40-ba52-7196731ec080"
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
                        "id": "b1cabcb7-cb13-445d-94a2-837449a240f0"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "5ae2b9c1-c2bb-4385-a62e-4ed75837a54d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "d5849e4f-2afa-4650-8539-8d0013782d6e"
                      }
                    ],
                    "activeCells": {},
                    "id": "613750d0-2c15-4c14-a832-66b605d06cd5"
                  }
                ],
                "id": "23a63cb5-a450-462d-b59f-94dee469d81c"
              },
              {
                "type": "comment",
                "text": "## decisions",
                "id": "f3882a41-664c-4725-8eb4-7d235e89cf5a"
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
                        "id": "fabe0d36-78fe-4c51-9d01-3650e9b7bf3f"
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
                        "id": "ce4d88a4-0dcc-47c5-bbb8-1b27a7c93196"
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
                        "id": "53124ea0-1709-47d7-a9f5-4f4b6fbd9abd"
                      }
                    ],
                    "activeCells": {},
                    "id": "4c203c42-e0f8-421a-9d20-3025c94ae1a7"
                  }
                ],
                "id": "25ffd5eb-b868-4aa2-a2a2-0dcee302f2b8"
              },
              {
                "type": "comment",
                "text": "## Divide",
                "id": "1361267f-9e2d-465a-8463-e749b318d08e"
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
                        "id": "46d8e7e9-8f27-4323-95d0-d44e63b9384d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "36f2edca-1d9a-414a-8445-1fcea6053f8e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "eb6389b2-ec8a-46e1-8805-0a927784094b"
                      }
                    ],
                    "activeCells": {},
                    "id": "4b4807d0-bf01-40eb-a8da-3ca464a32960"
                  }
                ],
                "id": "92de5f24-4318-4079-9cba-c98c8e76d7f0"
              },
              {
                "type": "comment",
                "text": "## IsPositive",
                "id": "6f9d1ad2-c83d-4c44-9033-c3f257026dd9"
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
                        "id": "8841590d-4779-4909-8dd7-e1ab415d314f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "142ee115-3100-4aa7-aaa1-22174690f81b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "aab11c7f-a878-450c-9903-eb7530b539c5"
                      }
                    ],
                    "activeCells": {},
                    "id": "9bea72e7-0a22-4f53-a59d-6a90e7ca4e37"
                  }
                ],
                "id": "56cf1b81-7bcd-4959-b2d8-8cc08695841d"
              },
              {
                "type": "comment",
                "text": "## Sum",
                "id": "e8ba60f1-918b-408e-86a5-c454eabeffc5"
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
                        "id": "487e85af-ad8a-4e35-b02b-5a888e90a750"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "76d12512-ba66-402b-b12c-df0cddc326cc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "ab715649-afed-4499-af7c-2bcb369e4342"
                      }
                    ],
                    "activeCells": {},
                    "id": "172cff35-98d6-4b7c-b9a0-fd494a5eaea3"
                  }
                ],
                "id": "0359a6aa-233d-46ec-996b-118a5aa702a8"
              },
              {
                "type": "comment",
                "text": "## TableWithLotsOfOptions",
                "id": "dc31dfc5-e18f-45bf-97ce-80a01dbb2ee4"
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
                        "id": "b9f0b914-b185-454d-87f0-1b732c9c07dd"
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
                        "id": "4c1e0d0d-912e-423b-bcf8-817184c54ee2"
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
                        "id": "8cffcce2-dac9-4633-a507-da0530fd63d8"
                      }
                    ],
                    "activeCells": {},
                    "id": "6d444ab3-ccdc-4f21-8a23-efdfc061332b"
                  }
                ],
                "id": "250ab3be-62da-4bed-b993-b26d7dd2cde1"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "05138585-4b9f-4be6-95d2-579be1150c9f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ff4e7a91-2ca5-4a7e-92a8-9d0941723c02"
              }
            ],
            "activeCells": {},
            "id": "f3bf1d49-1413-4a71-a906-184997ff5059"
          }
        ],
        "id": "6ef01ed5-18bd-4332-b639-15046383d62c"
      },
      "sampleMarkdown": "# Sample Specification for Table\r\n\r\n-> id = f44b9da9-6ba0-4179-bbd1-f053d5248cd4\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-21T15:32:59.6192270-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Table]\r\n|> AfterThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> BeforeThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> decisions\r\n    [table]\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n\r\n|> Divide\r\n    [Rows]\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n\r\n|> IsPositive\r\n    [table]\r\n    |number|IsEven|\r\n    |number|true  |\r\n    |number|true  |\r\n    |number|true  |\r\n\r\n|> Sum\r\n    [sum]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> TableWithLotsOfOptions\r\n    [table]\r\n    |a|b|c|d|e|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    }
  ],
  "time": "11/21/2016 3:32 PM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}