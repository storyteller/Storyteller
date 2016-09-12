module.exports = {
  "records": [
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b1d704cf-6062-40c1-be78-94a8aa901850",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8d064f19-8275-4a7b-9820-507525cfc4fd",
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
            "id": "6833f17b-c0bf-412d-b232-65c843bda515",
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
            "id": "32a7634b-f7f6-495d-9246-ccc5416709e1",
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
            "id": "8897aef5-cb09-43e6-8a73-265d7cfedab4",
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
            "id": "50dec184-2b59-409c-89f9-88058d2f54aa",
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
            "id": "5c6d0427-f79b-4d23-b4b5-98a10fdd88ea",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__19.MoveNext()\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)",
            "cells": [],
            "id": "e421e775-4780-40f1-82cd-b60cf576aa07",
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
            "id": "b1d704cf-6062-40c1-be78-94a8aa901850",
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
            "end": 48,
            "duration": 48
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 6,
            "end": 7,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Embedded:SetUp",
            "start": 31,
            "end": 36,
            "duration": 5
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 37,
            "end": 41,
            "duration": 4
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 41,
            "end": 43,
            "duration": 2
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 43,
            "end": 43,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 43,
            "end": 44,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 44,
            "end": 44,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 44,
            "end": 44,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 44,
            "end": 44,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 44,
            "end": 44,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 44,
            "end": 44,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 44,
            "end": 44,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 44,
            "end": 45,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 45,
            "end": 46,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 46,
            "end": 46,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 46,
            "end": 46,
            "duration": 0
          }
        ],
        "duration": 48,
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
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
                "id": "8d064f19-8275-4a7b-9820-507525cfc4fd"
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
                        "id": "6833f17b-c0bf-412d-b232-65c843bda515"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "eefb2976-cf70-4115-b4d4-2ecfa6d6e95d"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "32a7634b-f7f6-495d-9246-ccc5416709e1"
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
                        "id": "8897aef5-cb09-43e6-8a73-265d7cfedab4"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "50dec184-2b59-409c-89f9-88058d2f54aa"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "5c6d0427-f79b-4d23-b4b5-98a10fdd88ea"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "e421e775-4780-40f1-82cd-b60cf576aa07"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "91706203-ef20-4f51-8cd9-06d8d9e413c4"
              }
            ],
            "activeCells": {},
            "id": "b1d704cf-6062-40c1-be78-94a8aa901850"
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
            "id": "a788f007-4da5-436e-9802-8400269e0caf",
            "spec": "general1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ef3df182-dab7-4e7f-81d0-e149fffd25a1",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ef3df182-dab7-4e7f-81d0-e149fffd25a1",
            "spec": "general1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ef3df182-dab7-4e7f-81d0-e149fffd25a1",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ef3df182-dab7-4e7f-81d0-e149fffd25a1",
            "spec": "general1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ef3df182-dab7-4e7f-81d0-e149fffd25a1",
            "spec": "general1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ef3df182-dab7-4e7f-81d0-e149fffd25a1",
            "spec": "general1",
            "position": "5",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ef3df182-dab7-4e7f-81d0-e149fffd25a1",
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
            "id": "2c3c3dc6-7b99-4b3d-824c-13357c3acafa",
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
            "id": "2c3c3dc6-7b99-4b3d-824c-13357c3acafa",
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
            "id": "2c3c3dc6-7b99-4b3d-824c-13357c3acafa",
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
            "id": "a82d57ee-d6b8-4fa1-b80e-6e264bfc4f0b",
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
            "id": "a82d57ee-d6b8-4fa1-b80e-6e264bfc4f0b",
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
            "id": "a82d57ee-d6b8-4fa1-b80e-6e264bfc4f0b",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a788f007-4da5-436e-9802-8400269e0caf",
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
            "end": 14,
            "duration": 14
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
            "subject": "CheckObject:SetUp",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:0",
            "start": 5,
            "end": 6,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:1",
            "start": 6,
            "end": 11,
            "duration": 5
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:2",
            "start": 11,
            "end": 11,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:3",
            "start": 11,
            "end": 11,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:4",
            "start": 11,
            "end": 12,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:5",
            "start": 12,
            "end": 12,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:6",
            "start": 12,
            "end": 12,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 12,
            "end": 14,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 14,
            "end": 14,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 14,
            "end": 14,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 14,
            "end": 14,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 14,
            "end": 14,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 14,
            "end": 14,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "CheckObject:TearDown",
            "start": 14,
            "end": 14,
            "duration": 0
          }
        ],
        "duration": 14,
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
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
                "id": "ef3df182-dab7-4e7f-81d0-e149fffd25a1"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "2c3c3dc6-7b99-4b3d-824c-13357c3acafa"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "a82d57ee-d6b8-4fa1-b80e-6e264bfc4f0b"
              }
            ],
            "activeCells": {},
            "id": "a788f007-4da5-436e-9802-8400269e0caf"
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
            "id": "8830a9be-79c5-4152-812a-8222ce399c76",
            "spec": "SometimesSlow",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "09f61377-8835-49c8-853b-03e6dfee4dc5",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8830a9be-79c5-4152-812a-8222ce399c76",
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
            "subject": "SometimesSlow:SetUp",
            "start": 0,
            "end": 1,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Slow",
            "start": 1,
            "end": 4,
            "duration": 3
          },
          {
            "type": "Fixture",
            "subject": "SometimesSlow:TearDown",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
        "breakpoints": [],
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
                "id": "09f61377-8835-49c8-853b-03e6dfee4dc5"
              }
            ],
            "activeCells": {},
            "id": "8830a9be-79c5-4152-812a-8222ce399c76"
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
            "id": "0e42a91b-cf8a-4f88-8d8c-efc13a31ea2b",
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
            "id": "a7a6185f-35d0-43f7-890e-9610d358f425",
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
            "id": "feb76ab9-e173-43ba-be7e-7dfc56cc49b1",
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
            "id": "86141ea2-a3f9-490f-96b7-de5e317e55f6",
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
            "id": "4bd3b416-7f56-4882-a0b9-a5d035b63ed2",
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
            "id": "44890abf-e7f1-410b-afb2-ab986b60ffc0",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0e42a91b-cf8a-4f88-8d8c-efc13a31ea2b",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                "id": "a7a6185f-35d0-43f7-890e-9610d358f425"
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
                        "id": "feb76ab9-e173-43ba-be7e-7dfc56cc49b1"
                      },
                      {
                        "key": "table",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "86141ea2-a3f9-490f-96b7-de5e317e55f6"
                      }
                    ],
                    "activeCells": {},
                    "id": "8baf7e07-2f49-4b9b-8262-5a1bbac48ebf"
                  }
                ],
                "id": "4bc84825-3261-42a9-9daf-52140f9ec10c"
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
                        "id": "4bd3b416-7f56-4882-a0b9-a5d035b63ed2"
                      }
                    ],
                    "activeCells": {},
                    "id": "b2c0f501-f23b-472c-bb2b-c9fa3d6dd444"
                  }
                ],
                "id": "a1feaf49-aaae-48f1-9f72-a17ccc463cec"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "44890abf-e7f1-410b-afb2-ab986b60ffc0"
              }
            ],
            "activeCells": {},
            "id": "0e42a91b-cf8a-4f88-8d8c-efc13a31ea2b"
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
            "id": "3015d4ac-d2c3-45c8-83b7-36e6bf8ca948",
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
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#x27;setup&#x27; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#x27;Service&#x27; does not exist&#xD;&#xA;   at StoryTeller.Model.MissingFixture.SetUp()&#xD;&#xA;   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c)&#xD;&#xA;   --- End of inner exception stack trace ---&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                "id": "6644607c-d56a-450f-87e6-3a31816debaa"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "783bafec-be48-4689-86e6-384fa7ab2601"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "b0d0a6e5-dc50-43f3-9b6a-908e6fad88c7"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "5d4c5e05-e635-4dca-9e84-93bb30407abf"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "61f47e5a-79df-4a3d-92cc-55c1e1490902"
              }
            ],
            "activeCells": {},
            "id": "3015d4ac-d2c3-45c8-83b7-36e6bf8ca948"
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
            "id": "1951ced7-28f8-4bb3-a7fb-34973aef82f9",
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
            "id": "12d260c0-30cf-4546-8b53-5c98e1fc8e6f",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1951ced7-28f8-4bb3-a7fb-34973aef82f9",
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
            "subject": "Player:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "PositionIs:Row",
            "start": 0,
            "end": 2,
            "duration": 2
          },
          {
            "type": "Fixture",
            "subject": "Player:TearDown",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
        "breakpoints": [],
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
                        "id": "12d260c0-30cf-4546-8b53-5c98e1fc8e6f"
                      }
                    ],
                    "activeCells": {},
                    "id": "2e87da8f-d2bb-45a0-a375-39e38e3f9564"
                  }
                ],
                "id": "71316971-a987-4e91-a9cf-74c7ba265fa4"
              }
            ],
            "activeCells": {},
            "id": "1951ced7-28f8-4bb3-a7fb-34973aef82f9"
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
            "id": "16d4d9ad-387f-46f1-a684-5e014ab17aed",
            "spec": "general4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "aeb37a92-6808-4506-9bf0-d8e365d2f9c8",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "1207dedd-4b5b-438f-870d-b2d801722bfe",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "535ab2ad-9bc6-4a72-b5ae-219a69c85730",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "16d4d9ad-387f-46f1-a684-5e014ab17aed",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                "id": "aeb37a92-6808-4506-9bf0-d8e365d2f9c8"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "1207dedd-4b5b-438f-870d-b2d801722bfe"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "535ab2ad-9bc6-4a72-b5ae-219a69c85730"
              }
            ],
            "activeCells": {},
            "id": "16d4d9ad-387f-46f1-a684-5e014ab17aed"
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
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "FixtureThatDoesNotExist:SetUp",
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
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#x27;setup&#x27; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#x27;FixtureThatDoesNotExist&#x27; does not exist&#xD;&#xA;   at StoryTeller.Model.MissingFixture.SetUp()&#xD;&#xA;   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c)&#xD;&#xA;   --- End of inner exception stack trace ---&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
            "id": "837b8494-58c3-453e-a10e-eef6e48b1231",
            "spec": "paragraph1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fc0d0556-e155-4b85-b562-1ca86f511d4a",
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
            "id": "fc0d0556-e155-4b85-b562-1ca86f511d4a",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fc0d0556-e155-4b85-b562-1ca86f511d4a",
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
            "id": "fc0d0556-e155-4b85-b562-1ca86f511d4a",
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
            "id": "980d94eb-ae95-4521-93db-6337aec076ca",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "980d94eb-ae95-4521-93db-6337aec076ca",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "980d94eb-ae95-4521-93db-6337aec076ca",
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
            "id": "980d94eb-ae95-4521-93db-6337aec076ca",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "71069af3-4169-4bf7-a1a3-2badc0517808",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "71069af3-4169-4bf7-a1a3-2badc0517808",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "71069af3-4169-4bf7-a1a3-2badc0517808",
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
            "id": "71069af3-4169-4bf7-a1a3-2badc0517808",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b1b1b196-bfd9-494c-bcf1-f59805bdc209",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b1b1b196-bfd9-494c-bcf1-f59805bdc209",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b1b1b196-bfd9-494c-bcf1-f59805bdc209",
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
            "id": "b1b1b196-bfd9-494c-bcf1-f59805bdc209",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e3e3a628-09d4-4f9f-964a-6368a9232d85",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e3e3a628-09d4-4f9f-964a-6368a9232d85",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e3e3a628-09d4-4f9f-964a-6368a9232d85",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<>c.<.ctor>b__0_2(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "e3e3a628-09d4-4f9f-964a-6368a9232d85",
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
            "id": "e3e3a628-09d4-4f9f-964a-6368a9232d85",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "837b8494-58c3-453e-a10e-eef6e48b1231",
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
            "subject": "AddAndMultiplyThrow:3",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                "id": "fc0d0556-e155-4b85-b562-1ca86f511d4a"
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
                        "id": "980d94eb-ae95-4521-93db-6337aec076ca"
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
                        "id": "71069af3-4169-4bf7-a1a3-2badc0517808"
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
                        "id": "b1b1b196-bfd9-494c-bcf1-f59805bdc209"
                      }
                    ],
                    "activeCells": {},
                    "id": "9e935c3b-0b5b-4055-81af-2a4d530d9668"
                  }
                ],
                "id": "bd0a070f-1e72-43b7-ab7b-fe686026a8ac"
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
                "id": "e3e3a628-09d4-4f9f-964a-6368a9232d85"
              }
            ],
            "activeCells": {},
            "id": "837b8494-58c3-453e-a10e-eef6e48b1231"
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
            "id": "25babc3e-4cf2-4703-800c-bbf051497656",
            "spec": "paragraph2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "162b7578-942f-45d8-81b9-7de7a3a965b4",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "162b7578-942f-45d8-81b9-7de7a3a965b4",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "162b7578-942f-45d8-81b9-7de7a3a965b4",
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
            "id": "162b7578-942f-45d8-81b9-7de7a3a965b4",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a3f19772-db35-4fa9-94f3-bf6ec6fc60c7",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a3f19772-db35-4fa9-94f3-bf6ec6fc60c7",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a3f19772-db35-4fa9-94f3-bf6ec6fc60c7",
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
            "id": "a3f19772-db35-4fa9-94f3-bf6ec6fc60c7",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "261d1a6f-5939-4567-aa83-86be18192efc",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "261d1a6f-5939-4567-aa83-86be18192efc",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "261d1a6f-5939-4567-aa83-86be18192efc",
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
            "id": "261d1a6f-5939-4567-aa83-86be18192efc",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0ed9c7ae-81d1-4829-870f-8439dce3a74f",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0ed9c7ae-81d1-4829-870f-8439dce3a74f",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0ed9c7ae-81d1-4829-870f-8439dce3a74f",
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
            "id": "0ed9c7ae-81d1-4829-870f-8439dce3a74f",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a4fb183f-5627-496a-9914-9cf5b81cedd8",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a4fb183f-5627-496a-9914-9cf5b81cedd8",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a4fb183f-5627-496a-9914-9cf5b81cedd8",
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
            "id": "a4fb183f-5627-496a-9914-9cf5b81cedd8",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "25babc3e-4cf2-4703-800c-bbf051497656",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                "id": "162b7578-942f-45d8-81b9-7de7a3a965b4"
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
                "id": "a3f19772-db35-4fa9-94f3-bf6ec6fc60c7"
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
                        "id": "261d1a6f-5939-4567-aa83-86be18192efc"
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
                        "id": "0ed9c7ae-81d1-4829-870f-8439dce3a74f"
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
                        "id": "a4fb183f-5627-496a-9914-9cf5b81cedd8"
                      }
                    ],
                    "activeCells": {},
                    "id": "c12a6fa7-72ed-42b8-87d9-af32826cf44a"
                  }
                ],
                "id": "bf47f89b-f4cb-4b12-a293-077cc303e8ca"
              }
            ],
            "activeCells": {},
            "id": "25babc3e-4cf2-4703-800c-bbf051497656"
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
            "id": "4f4c2489-4ffd-47a8-84e3-096a96811022",
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
            "id": "78cbecfa-f574-4838-8df9-fd4bff95460a",
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
            "id": "2678217b-c2d3-48c5-a135-fb9bc3b13e5f",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f4c2489-4ffd-47a8-84e3-096a96811022",
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
            "end": 1,
            "duration": 1
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
            "subject": "Math:SetUp",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1,
            "end": 1,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                "id": "78cbecfa-f574-4838-8df9-fd4bff95460a"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "2678217b-c2d3-48c5-a135-fb9bc3b13e5f"
              }
            ],
            "activeCells": {},
            "id": "4f4c2489-4ffd-47a8-84e3-096a96811022"
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
            "id": "738ebb43-b0c9-46c3-b1af-5b2d2c313122",
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
            "id": "738ebb43-b0c9-46c3-b1af-5b2d2c313122",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
            "id": "738ebb43-b0c9-46c3-b1af-5b2d2c313122"
          },
          {
            "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
            "type": "comment",
            "id": "b12f43e8-e133-44d3-a857-2888741b80f6"
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
            "id": "b0d1aced-73b3-4965-99c1-01c404a68f80",
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
            "id": "d35bbb75-f4fe-4648-ad42-9b8ee3e13eac",
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
            "id": "3f9644e3-83c0-4b4f-8fec-93ea69f2fed4",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b0d1aced-73b3-4965-99c1-01c404a68f80",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                "id": "d35bbb75-f4fe-4648-ad42-9b8ee3e13eac"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "3f9644e3-83c0-4b4f-8fec-93ea69f2fed4"
              }
            ],
            "activeCells": {},
            "id": "b0d1aced-73b3-4965-99c1-01c404a68f80"
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
            "id": "9e5d49fb-4d60-465a-9668-9da55482506c",
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
            "id": "f1cdfec2-e883-49af-a39c-b88fce8dc217",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ac2cbf1-83ac-4b8b-bc7f-b6e2fd5e3e6a",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "00217d49-ce2a-47ec-a9b5-11e20cf10682",
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
            "id": "cb44a7b0-4cae-4a14-81a4-55f3c7ed7981",
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
            "id": "9e5d49fb-4d60-465a-9668-9da55482506c",
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
            "end": 1,
            "duration": 1
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
          }
        ],
        "duration": 3,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">the number is 5&#xD;&#xA;the number is 19&#xD;&#xA;the number is 17&#xD;&#xA;</pre>",
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
            "html": "<pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; StoryTeller.StorytellerAssertionException: No go!&#xD;&#xA;   at StoryTeller.StoryTellerAssert.Fail(String message)&#xD;&#xA;   at StoryTeller.Samples.Fixtures.SentenceFixture.ThisLineAlwaysThrowsExceptions()&#xD;&#xA;   --- End of inner exception stack trace ---&#xD;&#xA;   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)&#xD;&#xA;   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)&#xD;&#xA;   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)&#xD;&#xA;   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)&#xD;&#xA;   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__19.MoveNext()&#xD;&#xA;   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)&#xD;&#xA;   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)&#xD;&#xA;   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)&#xD;&#xA;   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
        "breakpoints": [],
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
                "id": "f1cdfec2-e883-49af-a39c-b88fce8dc217"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "5ac2cbf1-83ac-4b8b-bc7f-b6e2fd5e3e6a"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "00217d49-ce2a-47ec-a9b5-11e20cf10682"
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
                "id": "cb44a7b0-4cae-4a14-81a4-55f3c7ed7981"
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
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b32a6c6a-0743-43f7-b3c4-a5cbb3f5621e",
            "spec": "set1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bc75bba0-fe53-4d99-8d15-ff4bff00d1b5",
            "spec": "set1",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3ca28dbe-0363-4548-94c0-ad465ab506d1",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3ca28dbe-0363-4548-94c0-ad465ab506d1",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3ca28dbe-0363-4548-94c0-ad465ab506d1",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3ca28dbe-0363-4548-94c0-ad465ab506d1",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3ca28dbe-0363-4548-94c0-ad465ab506d1",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "93235fcb-f67c-443c-af45-4aeaedfc68b4",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "93235fcb-f67c-443c-af45-4aeaedfc68b4",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "93235fcb-f67c-443c-af45-4aeaedfc68b4",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "93235fcb-f67c-443c-af45-4aeaedfc68b4",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "93235fcb-f67c-443c-af45-4aeaedfc68b4",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5825eda3-f6a7-4110-81d5-92cabc795265",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5825eda3-f6a7-4110-81d5-92cabc795265",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5825eda3-f6a7-4110-81d5-92cabc795265",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5825eda3-f6a7-4110-81d5-92cabc795265",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5825eda3-f6a7-4110-81d5-92cabc795265",
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
              "5cab721d-3de6-4ae0-ac08-8d12ad6f5650",
              "8c7432d3-4e4d-476b-b378-cccfaa517c2b"
            ],
            "missing": [],
            "extras": [
              {
                "Amount": "300.3",
                "Date": "9/14/2016 12:00:00 AM",
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
              "0e4991fd-6bac-4538-aa98-d0cca940c3d3",
              "f611aad6-1eae-4623-b0f7-47437e8b7b46",
              "045bb038-0789-4b65-b84b-337f0518f808"
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
            "id": "b32a6c6a-0743-43f7-b3c4-a5cbb3f5621e",
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
            "end": 15,
            "duration": 15
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
            "end": 13,
            "duration": 10
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 13,
            "end": 14,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 14,
            "end": 15,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 15,
            "end": 15,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 15,
            "end": 15,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 15,
            "end": 15,
            "duration": 0
          }
        ],
        "duration": 15,
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                        "key": "Rows",
                        "cells": {
                          "Name": "Cord",
                          "Amount": "100.1",
                          "Date": "TODAY"
                        },
                        "collections": [],
                        "id": "3ca28dbe-0363-4548-94c0-ad465ab506d1"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "93235fcb-f67c-443c-af45-4aeaedfc68b4"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "5825eda3-f6a7-4110-81d5-92cabc795265"
                      }
                    ],
                    "activeCells": {},
                    "id": "bc75bba0-fe53-4d99-8d15-ff4bff00d1b5"
                  }
                ],
                "id": "9bb8581d-c3d4-4199-af36-31c1947e566c"
              },
              {
                "text": "Completely successful ordering",
                "type": "comment",
                "id": "99163ff1-77de-4f5a-bc4f-62cea1f693b5"
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
                "id": "3a107c3d-f6d8-497a-88ad-289e4ace3c76"
              },
              {
                "text": "Out of order",
                "type": "comment",
                "id": "9f29c27b-cbaf-4a21-b647-c80886c5ebb6"
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
                "id": "986d1702-6828-443c-a55d-f4698fb2930c"
              },
              {
                "text": "Should have one exra",
                "type": "comment",
                "id": "8f0c0517-0626-452a-ac11-256d033f76fc"
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
                        "id": "5cab721d-3de6-4ae0-ac08-8d12ad6f5650"
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
                        "id": "8c7432d3-4e4d-476b-b378-cccfaa517c2b"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "f7a0a2dc-9650-4d20-9350-56e4e7ef36a2"
              },
              {
                "text": "Should mark one expected result as missing",
                "type": "comment",
                "id": "62e49211-096e-4518-99c7-da745e493019"
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
                        "id": "0e4991fd-6bac-4538-aa98-d0cca940c3d3"
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
                        "id": "f611aad6-1eae-4623-b0f7-47437e8b7b46"
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
                        "id": "045bb038-0789-4b65-b84b-337f0518f808"
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
                "id": "fe50c59a-4857-4831-8924-bc92e4afae43"
              },
              {
                "text": "One syntax error",
                "type": "comment",
                "id": "9aaacd91-21d4-4760-857f-06f9ec49699d"
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
                        "id": "ffc08ee1-cab1-4cd3-851e-7688ffc9a85a"
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
                        "id": "fabb8ee1-554d-420e-9067-e6ff6b7857bf"
                      }
                    ],
                    "activeCells": {},
                    "id": "f90480a4-57f7-4eec-843d-4cf9eaf869f5"
                  }
                ],
                "id": "31390df4-4245-464f-b0d3-bea95670e7e1"
              }
            ],
            "activeCells": {},
            "id": "b32a6c6a-0743-43f7-b3c4-a5cbb3f5621e"
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
            "id": "fa99b00d-1460-4b2a-9575-3b98f2a34f19",
            "spec": "set2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c6ccf0e8-6bcb-4d16-8e9f-45418183dca2",
            "spec": "set2",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "04c6f1df-07ec-426d-9896-d95fd221d36a",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "01188f91-3198-4a5f-a8a0-01c61b957df8",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8e87d15c-5b16-41b7-bad5-01ab8ebbc6b7",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4e7744f1-e3ab-418e-8191-00850ff4d002",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "15e814fe-6816-4239-be77-7bff721b25b2",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "3578f400-dbe0-439a-b66b-8dd57ea0b85d",
              "3f5a8d20-4c3e-418a-ab69-55c7ef8ab5f3",
              "3b6680f1-a110-4273-9523-8bb5ba846098",
              "debdfa2d-b360-4460-adae-32d2415779b1",
              "6cdc70d0-f84f-4629-bcc6-a25dc0a4d6e6"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "ad23bb38-8a46-4b5d-9dd6-0f350dd71014",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "4899498d-3299-47f8-af0d-4e89b755d13b",
              "e04eef8b-74cc-4782-8207-abde47d6a74e",
              "246dedbb-853c-48a9-aca0-ab0295b83f03",
              "68185a57-54ea-47ae-afbd-8ca36933dd2e",
              "f033323d-6b72-4788-9ce7-ec073c77ec8b"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "1c82f636-9072-48a2-baaa-f85d96674915",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fa99b00d-1460-4b2a-9575-3b98f2a34f19",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                        "key": "name",
                        "cells": {
                          "name": "Jeremy"
                        },
                        "collections": [],
                        "id": "04c6f1df-07ec-426d-9896-d95fd221d36a"
                      },
                      {
                        "key": "name",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "01188f91-3198-4a5f-a8a0-01c61b957df8"
                      },
                      {
                        "key": "name",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "8e87d15c-5b16-41b7-bad5-01ab8ebbc6b7"
                      },
                      {
                        "key": "name",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "4e7744f1-e3ab-418e-8191-00850ff4d002"
                      },
                      {
                        "key": "name",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "15e814fe-6816-4239-be77-7bff721b25b2"
                      }
                    ],
                    "activeCells": {},
                    "id": "c6ccf0e8-6bcb-4d16-8e9f-45418183dca2"
                  }
                ],
                "id": "3d54e0dc-86b7-4960-b6ae-443f39bc0e7b"
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
                        "id": "3578f400-dbe0-439a-b66b-8dd57ea0b85d"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "3f5a8d20-4c3e-418a-ab69-55c7ef8ab5f3"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "3b6680f1-a110-4273-9523-8bb5ba846098"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "debdfa2d-b360-4460-adae-32d2415779b1"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "6cdc70d0-f84f-4629-bcc6-a25dc0a4d6e6"
                      }
                    ],
                    "activeCells": {},
                    "id": "ad23bb38-8a46-4b5d-9dd6-0f350dd71014"
                  }
                ],
                "id": "2d93fc1f-3d58-47aa-942d-ccb9431c4720"
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
                        "id": "4899498d-3299-47f8-af0d-4e89b755d13b"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "e04eef8b-74cc-4782-8207-abde47d6a74e"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "246dedbb-853c-48a9-aca0-ab0295b83f03"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "68185a57-54ea-47ae-afbd-8ca36933dd2e"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "f033323d-6b72-4788-9ce7-ec073c77ec8b"
                      }
                    ],
                    "activeCells": {},
                    "id": "1c82f636-9072-48a2-baaa-f85d96674915"
                  }
                ],
                "id": "b1619a7f-cb7d-4d95-ba45-1ec4a8849e45"
              }
            ],
            "activeCells": {},
            "id": "fa99b00d-1460-4b2a-9575-3b98f2a34f19"
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
            "id": "21517d14-71d1-4686-9493-e0f3e60220b4",
            "spec": "set3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.AggregateException: One or more errors occurred. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<>c.<ThrowsErrorOnDataFetch>b__3_0()\r\n   at StoryTeller.Fixture.<>c__DisplayClass42_0`1.<VerifySetOf>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3_0.<Fetch>b__0()\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---> (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<>c.<ThrowsErrorOnDataFetch>b__3_0()\r\n   at StoryTeller.Fixture.<>c__DisplayClass42_0`1.<VerifySetOf>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3_0.<Fetch>b__0()\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()<---\r\n",
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
            "id": "21517d14-71d1-4686-9493-e0f3e60220b4",
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
            "html": "<pre class=\"bg-warning\">System.AggregateException: One or more errors occurred. ---&gt; System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;&gt;c.&lt;ThrowsErrorOnDataFetch&gt;b__3_0()&#xD;&#xA;   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass42_0`1.&lt;VerifySetOf&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3_0.&lt;Fetch&gt;b__0()&#xD;&#xA;   at System.Threading.Tasks.Task`1.InnerInvoke()&#xD;&#xA;   at System.Threading.Tasks.Task.Execute()&#xD;&#xA;   --- End of inner exception stack trace ---&#xD;&#xA;---&gt; (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;&gt;c.&lt;ThrowsErrorOnDataFetch&gt;b__3_0()&#xD;&#xA;   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass42_0`1.&lt;VerifySetOf&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3_0.&lt;Fetch&gt;b__0()&#xD;&#xA;   at System.Threading.Tasks.Task`1.InnerInvoke()&#xD;&#xA;   at System.Threading.Tasks.Task.Execute()&lt;---&#xD;&#xA;</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                        "key": "rows",
                        "cells": {
                          "Name": "a"
                        },
                        "collections": [],
                        "id": "347aac21-146f-452a-9ed4-033cda216548"
                      },
                      {
                        "key": "rows",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "ead060c6-7426-41b9-84fb-fb2d5d4d8a29"
                      },
                      {
                        "key": "rows",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "cdf0d532-f47e-493a-aeb0-a75ab0b60531"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "38cd7a46-c395-499f-8b18-989f6f26922f"
              }
            ],
            "activeCells": {},
            "id": "21517d14-71d1-4686-9493-e0f3e60220b4"
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
            "id": "a002c497-19f2-40a4-8b37-ba5fc2354a07",
            "spec": "set4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5bc702f5-8424-4ff6-b3fe-3d596485a3c8",
            "spec": "set4",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fd718290-157a-41fb-962f-e8b2b86aa8e4",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fd718290-157a-41fb-962f-e8b2b86aa8e4",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fd718290-157a-41fb-962f-e8b2b86aa8e4",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fd718290-157a-41fb-962f-e8b2b86aa8e4",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fd718290-157a-41fb-962f-e8b2b86aa8e4",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e64fff4a-f5ea-45cd-8850-cc09c8af2268",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e64fff4a-f5ea-45cd-8850-cc09c8af2268",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e64fff4a-f5ea-45cd-8850-cc09c8af2268",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e64fff4a-f5ea-45cd-8850-cc09c8af2268",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e64fff4a-f5ea-45cd-8850-cc09c8af2268",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c2c26f5a-e095-4bdd-9484-4d4484dbda37",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c2c26f5a-e095-4bdd-9484-4d4484dbda37",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c2c26f5a-e095-4bdd-9484-4d4484dbda37",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c2c26f5a-e095-4bdd-9484-4d4484dbda37",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c2c26f5a-e095-4bdd-9484-4d4484dbda37",
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
            "id": "b6b2b308-f23b-4ac8-8839-2915ed3963dc",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a002c497-19f2-40a4-8b37-ba5fc2354a07",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                        "key": "Rows",
                        "cells": {
                          "Amount": "100.1",
                          "Date": "TODAY",
                          "Name": "Cord"
                        },
                        "collections": [],
                        "id": "fd718290-157a-41fb-962f-e8b2b86aa8e4"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "e64fff4a-f5ea-45cd-8850-cc09c8af2268"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "c2c26f5a-e095-4bdd-9484-4d4484dbda37"
                      }
                    ],
                    "activeCells": {},
                    "id": "5bc702f5-8424-4ff6-b3fe-3d596485a3c8"
                  }
                ],
                "id": "3b92f95f-2dcf-4386-b13d-bc6029f57a4a"
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
                        "id": "b6b2b308-f23b-4ac8-8839-2915ed3963dc"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "c4974f30-5aa1-48ab-8405-6708f79bef01"
                      }
                    ],
                    "activeCells": {},
                    "id": "fad6921d-dacb-491a-a535-f8b2d3779179"
                  }
                ],
                "id": "60691246-157e-442c-940b-f2ec21f32a9e"
              }
            ],
            "activeCells": {},
            "id": "a002c497-19f2-40a4-8b37-ba5fc2354a07"
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
            "id": "a1dd4de2-85ac-4100-8e63-effb613d81c7",
            "spec": "set5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "61c521ec-1d41-4492-b00c-695d8cc4440b",
            "spec": "set5",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8f1c4111-dd9e-49dc-9192-f7f243b5ecd4",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "62567815-1852-4642-9899-a47b3a7b65b8",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "aa441098-bfba-4cc2-b78e-03cc37b5982c",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b3aae8b5-d9f5-43f6-812f-a1ff55432517",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "df2b593d-df22-4bee-b508-af4d277345de",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d45a8f72-b9a2-4ff4-871f-071bf3e6912e",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "45161e26-3a14-490b-b906-998505853dc1",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f8e8cd44-323d-480e-8cfe-ca667c138615",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "b8f8ad67-3c93-46de-8a63-0129a062ed94",
              "1c432360-2202-49b2-b9ea-8a0a221c3088",
              "7ddf7604-bb76-4e87-8d2d-08afca720675",
              "8487643d-5db9-4346-ab27-a161b19d19a6"
            ],
            "missing": [
              "cc14e6f8-a993-4e68-a350-8b46f47e9ff2"
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
                "id": "425a18e0-0372-495c-ba60-e4076eba910d"
              },
              {
                "actual": 4,
                "id": "bbf1ee90-1e5f-450b-941b-bf7070f6d0ac"
              }
            ],
            "id": "4f091fff-8c47-4a91-90c4-19c01477dddb",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a1dd4de2-85ac-4100-8e63-effb613d81c7",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                        "id": "8f1c4111-dd9e-49dc-9192-f7f243b5ecd4"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "62567815-1852-4642-9899-a47b3a7b65b8"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "aa441098-bfba-4cc2-b78e-03cc37b5982c"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "b3aae8b5-d9f5-43f6-812f-a1ff55432517"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "df2b593d-df22-4bee-b508-af4d277345de"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "d45a8f72-b9a2-4ff4-871f-071bf3e6912e"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "45161e26-3a14-490b-b906-998505853dc1"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "f8e8cd44-323d-480e-8cfe-ca667c138615"
                      }
                    ],
                    "activeCells": {},
                    "id": "61c521ec-1d41-4492-b00c-695d8cc4440b"
                  }
                ],
                "id": "3cba0ce0-3574-41ed-8e34-d0a4b509208a"
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
                        "id": "b8f8ad67-3c93-46de-8a63-0129a062ed94"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "1c432360-2202-49b2-b9ea-8a0a221c3088"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "7ddf7604-bb76-4e87-8d2d-08afca720675"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "425a18e0-0372-495c-ba60-e4076eba910d"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "bbf1ee90-1e5f-450b-941b-bf7070f6d0ac"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "cc14e6f8-a993-4e68-a350-8b46f47e9ff2"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "8487643d-5db9-4346-ab27-a161b19d19a6"
                      }
                    ],
                    "activeCells": {},
                    "id": "4f091fff-8c47-4a91-90c4-19c01477dddb"
                  }
                ],
                "id": "c9dc10c2-bc2c-4af7-901d-0c533c7a36e5"
              }
            ],
            "activeCells": {},
            "id": "a1dd4de2-85ac-4100-8e63-effb613d81c7"
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
            "id": "3ebd1088-3f9a-4623-bf69-8c04668dd246",
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
            "id": "05ab4709-0c06-4e84-b1a9-facc7b4008ae",
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
            "id": "959d01a5-f6a7-40d5-ae18-60d347be908e",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3ebd1088-3f9a-4623-bf69-8c04668dd246",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                        "id": "05ab4709-0c06-4e84-b1a9-facc7b4008ae"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "959d01a5-f6a7-40d5-ae18-60d347be908e"
                      }
                    ],
                    "activeCells": {},
                    "id": "a481d76f-66ae-464f-8c6f-2739e4c39d3e"
                  }
                ],
                "id": "d2855105-cbf5-4615-9856-1d96a8023c53"
              }
            ],
            "activeCells": {},
            "id": "3ebd1088-3f9a-4623-bf69-8c04668dd246"
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
            "id": "0f7f5567-4f3b-45e0-997f-61d90316342e",
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
            "id": "eb2e280a-4b96-47a2-9587-f30052850cbc",
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
            "id": "b485725a-4869-4b9f-95bc-2dcda6642ad5",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0f7f5567-4f3b-45e0-997f-61d90316342e",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                        "key": "decisions",
                        "cells": {
                          "FirstName": "Jeremy",
                          "LastName": "Miller",
                          "FullName": "Jeremy Miller",
                          "LastNameFirst": "Miller, Jeremy"
                        },
                        "collections": [],
                        "id": "e31f8678-577a-4717-8e48-2450c8eaeed7"
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
                        "id": "05566562-b50b-4981-9460-d2923e348c99"
                      }
                    ],
                    "activeCells": {},
                    "id": "12ab80d9-d413-448b-8f39-1acc7c8687c6"
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
                        "id": "eb2e280a-4b96-47a2-9587-f30052850cbc"
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
                        "id": "b485725a-4869-4b9f-95bc-2dcda6642ad5"
                      }
                    ],
                    "activeCells": {},
                    "id": "bc864402-4f97-45af-8f86-a51a14157944"
                  }
                ],
                "id": "90c48af8-1860-47d4-a6eb-b24c672e6082"
              }
            ],
            "activeCells": {},
            "id": "0f7f5567-4f3b-45e0-997f-61d90316342e"
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
            "id": "66898ff9-2096-47f5-a222-6e3d717e87bb",
            "spec": "table3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1f4930d8-b2c2-491e-ae3d-1d47b75a59c6",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "617ec740-b306-4eea-8908-aba2be3bfdd6",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "027b496f-c5f6-4e50-9d62-bd9571d542a4",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2bd6c5f5-644b-49a0-a1e6-796f59d7bb1d",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "66898ff9-2096-47f5-a222-6e3d717e87bb",
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                        "id": "1f4930d8-b2c2-491e-ae3d-1d47b75a59c6"
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
                        "id": "617ec740-b306-4eea-8908-aba2be3bfdd6"
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
                        "id": "027b496f-c5f6-4e50-9d62-bd9571d542a4"
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
                        "id": "2bd6c5f5-644b-49a0-a1e6-796f59d7bb1d"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "3c402eda-44ab-48b2-bc1e-e83730c123cf"
                  }
                ],
                "id": "49cc7ce4-f738-4990-9228-2ab40623e35f"
              }
            ],
            "activeCells": {},
            "id": "66898ff9-2096-47f5-a222-6e3d717e87bb"
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
            "id": "16e7b1ee-6292-4822-83e2-ca5ae2351a40",
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
            "id": "2a9ad00f-c8bc-445c-85dd-3590d5aac7f2",
            "spec": "table4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "327e765c-8238-42d1-955a-06e0853f6ad8",
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
            "id": "16e7b1ee-6292-4822-83e2-ca5ae2351a40",
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
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AfterThrowsError:After",
            "start": 2,
            "end": 2,
            "duration": 0
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.TableFixture.&lt;&gt;c.&lt;BeforeThrowsError&gt;b__5_2()&#xD;&#xA;   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass16_0.&lt;Before&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>\n<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.&#xD;&#xA;   at StoryTeller.Samples.Fixtures.TableFixture.&lt;&gt;c.&lt;AfterThrowsError&gt;b__6_2()&#xD;&#xA;   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass18_0.&lt;After&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
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
                        "id": "2a9ad00f-c8bc-445c-85dd-3590d5aac7f2"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "4ef02c0a-c730-40ed-a1d7-b2636eb17ad0"
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
                        "id": "327e765c-8238-42d1-955a-06e0853f6ad8"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "2eb0a8db-eed8-4606-863c-47b6031d60bb"
              }
            ],
            "activeCells": {},
            "id": "16e7b1ee-6292-4822-83e2-ca5ae2351a40"
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
            "id": "53c4f91e-418f-4786-85da-e9b2aa0f64f9",
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
            "id": "1771af29-594a-4120-9f36-953b1bfafcec",
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
            "id": "2dc776d6-9862-4838-a59d-04f897d2593a",
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
            "id": "0501d160-35c0-4313-b61a-d3450a542b19",
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
            "id": "0501d160-35c0-4313-b61a-d3450a542b19",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0501d160-35c0-4313-b61a-d3450a542b19",
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
            "id": "0501d160-35c0-4313-b61a-d3450a542b19",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8bbd2cf8-261b-4bee-afd5-2eeb5b971549",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8bbd2cf8-261b-4bee-afd5-2eeb5b971549",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8bbd2cf8-261b-4bee-afd5-2eeb5b971549",
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
            "id": "8bbd2cf8-261b-4bee-afd5-2eeb5b971549",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "53c4f91e-418f-4786-85da-e9b2aa0f64f9",
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
            "end": 2,
            "duration": 2
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
        "time": "6:58 AM",
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
        "mode": "full",
        "tags": [],
        "last-updated": "Monday, September 12, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Table",
            "type": "section",
            "steps": [
              {
                "text": "Table by the ExposeAsTable attribute",
                "type": "comment",
                "id": "80c9aab1-0f69-4415-ac3d-13e9e5426508"
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
                        "id": "1771af29-594a-4120-9f36-953b1bfafcec"
                      },
                      {
                        "key": "sum",
                        "cells": {
                          "x": "2",
                          "y": "2",
                          "sum": "5"
                        },
                        "collections": [],
                        "id": "2dc776d6-9862-4838-a59d-04f897d2593a"
                      }
                    ],
                    "activeCells": {},
                    "id": "3a65a952-dbf5-4657-abe0-4d465461dd46"
                  }
                ],
                "id": "d4bb84da-a1d8-4d53-bdbe-298dd5e88f5e"
              },
              {
                "text": "Table fixture from script",
                "type": "comment",
                "id": "da4ca327-9e6a-410c-8cee-5d9ad518c724"
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
                        "id": "0501d160-35c0-4313-b61a-d3450a542b19"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "x": "3",
                          "y": "3",
                          "product": "****"
                        },
                        "collections": [],
                        "id": "8bbd2cf8-261b-4bee-afd5-2eeb5b971549"
                      }
                    ],
                    "activeCells": {},
                    "id": "f3d0b4b8-bfdd-4dc8-a4b4-bb96c10760ed"
                  }
                ],
                "id": "19bf9a89-b1cb-4253-aa9d-91f8b2d29568"
              }
            ],
            "activeCells": {},
            "id": "53c4f91e-418f-4786-85da-e9b2aa0f64f9"
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
          "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.Exception: This fixture ctor blew up\r\n   at StoryTeller.Samples.Fixtures.FailureFixture..ctor()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeTypeHandle.CreateInstance(RuntimeType type, Boolean publicOnly, Boolean noCheck, Boolean& canBeCached, RuntimeMethodHandleInternal& ctor, Boolean& bNeedSecurityCheck)\r\n   at System.RuntimeType.CreateInstanceSlow(Boolean publicOnly, Boolean skipCheckThis, Boolean fillCache, StackCrawlMark& stackMark)\r\n   at System.Activator.CreateInstance(Type type, Boolean nonPublic)\r\n   at System.Activator.CreateInstance(Type type)\r\n   at StoryTeller.Model.FixtureLibrary.CreateCompiledFixture(CellHandling cellHandling, Type type)"
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
              "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.DivideByZeroException: Attempted to divide by zero.\r\n   at StoryTeller.Samples.Fixtures.GrammarErrorFixture.Bad()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.ProgrammaticGrammarBuilder.Build(MethodInfo method, Fixture fixture)\r\n   at StoryTeller.Grammars.GrammarBuilder.BuildGrammar(MethodInfo method, Fixture fixture)"
            }
          ]
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
    },
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
              },
              {
                "format": "JustGo()",
                "key": "JustGo",
                "type": "sentence",
                "cells": [],
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
              },
              {
                "format": "JustGo()",
                "key": "JustGo",
                "type": "sentence",
                "cells": [],
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
        },
        {
          "format": "JustGo()",
          "key": "JustGo",
          "type": "sentence",
          "cells": [],
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
        },
        {
          "format": "JustGo()",
          "key": "JustGo",
          "type": "sentence",
          "cells": [],
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
        },
        {
          "format": "JustGo()",
          "key": "JustGo",
          "type": "sentence",
          "cells": [],
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
        },
        {
          "format": "JustGo()",
          "key": "JustGo",
          "type": "sentence",
          "cells": [],
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
        },
        {
          "format": "ReadText({text})",
          "key": "ReadText",
          "type": "sentence",
          "cells": [
            {
              "key": "text",
              "default": null,
              "header": null,
              "output": false,
              "editor": "big-text",
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
    }
  ],
  "time": "9/12/2016 6:58 AM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}