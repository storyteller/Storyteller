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
            "id": "a7291471-01c4-4f8d-94dc-7eac0aeef704",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2e337848-79aa-4c2e-9c20-981e546da386",
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
            "id": "d5ce8c91-0b91-424b-9318-44f83d45b900",
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
            "id": "e2cc0998-040d-4d3d-a64f-990dcccc77a4",
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
            "id": "9f4806b6-fd08-420e-a570-7c748c67683c",
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
            "id": "f54e2903-7cc2-4093-8cf2-ad16af3cd6f7",
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
            "id": "c0025f2d-8823-4a04-b8dd-ee2b7771200a",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()",
            "cells": [],
            "id": "d4ecbd40-3ee2-42a1-b5bf-e13415b2ee4f",
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
            "id": "a7291471-01c4-4f8d-94dc-7eac0aeef704",
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
            "end": 6403,
            "duration": 6403
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 12,
            "end": 12,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:SetUp",
            "start": 6368,
            "end": 6370,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 6374,
            "end": 6376,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 6379,
            "end": 6383,
            "duration": 4
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 6383,
            "end": 6383,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 6384,
            "end": 6386,
            "duration": 2
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 6392,
            "end": 6392,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 6392,
            "end": 6393,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 6393,
            "end": 6393,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 6393,
            "end": 6393,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 6393,
            "end": 6393,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 6393,
            "end": 6393,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 6393,
            "end": 6394,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 6400,
            "end": 6400,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 6400,
            "end": 6400,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 6400,
            "end": 6400,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 6400,
            "end": 6401,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 6401,
            "end": 6401,
            "duration": 0
          }
        ],
        "duration": 6403,
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
        "time": "6:32 PM",
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
                "id": "2e337848-79aa-4c2e-9c20-981e546da386"
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
                        "id": "d5ce8c91-0b91-424b-9318-44f83d45b900"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "eba33c94-3519-4085-b3dd-82bf212eafd7"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "e2cc0998-040d-4d3d-a64f-990dcccc77a4"
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
                        "id": "9f4806b6-fd08-420e-a570-7c748c67683c"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "f54e2903-7cc2-4093-8cf2-ad16af3cd6f7"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "c0025f2d-8823-4a04-b8dd-ee2b7771200a"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "d4ecbd40-3ee2-42a1-b5bf-e13415b2ee4f"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "523e79bb-81d6-4ef3-a48b-ec0f78ef1269"
              }
            ],
            "activeCells": {},
            "id": "a7291471-01c4-4f8d-94dc-7eac0aeef704"
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
            "id": "38be48a6-509c-450b-b0be-435b99538fb7",
            "spec": "general1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30e7f111-cae0-484b-9c76-2a93c9758fd5",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30e7f111-cae0-484b-9c76-2a93c9758fd5",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30e7f111-cae0-484b-9c76-2a93c9758fd5",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30e7f111-cae0-484b-9c76-2a93c9758fd5",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30e7f111-cae0-484b-9c76-2a93c9758fd5",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30e7f111-cae0-484b-9c76-2a93c9758fd5",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30e7f111-cae0-484b-9c76-2a93c9758fd5",
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
            "id": "7248c457-874e-4169-a61e-f7985bf55c21",
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
            "id": "7248c457-874e-4169-a61e-f7985bf55c21",
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
            "id": "7248c457-874e-4169-a61e-f7985bf55c21",
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
            "id": "8be0b229-6c1b-42ff-aa62-02f3164a295f",
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
            "id": "8be0b229-6c1b-42ff-aa62-02f3164a295f",
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
            "id": "8be0b229-6c1b-42ff-aa62-02f3164a295f",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38be48a6-509c-450b-b0be-435b99538fb7",
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
            "subject": "CheckObject:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:0",
            "start": 0,
            "end": 1,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:1",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:2",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:3",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:4",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:5",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:6",
            "start": 7,
            "end": 7,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 7,
            "end": 8,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "CheckObject:TearDown",
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
        "time": "6:32 PM",
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
                "id": "30e7f111-cae0-484b-9c76-2a93c9758fd5"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "7248c457-874e-4169-a61e-f7985bf55c21"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "8be0b229-6c1b-42ff-aa62-02f3164a295f"
              }
            ],
            "activeCells": {},
            "id": "38be48a6-509c-450b-b0be-435b99538fb7"
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
            "id": "a970b590-a212-49a5-a8f1-d65efc9345e5",
            "spec": "SometimesSlow",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9ba9b94a-889f-4a19-823a-9ef1d36c3e00",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a970b590-a212-49a5-a8f1-d65efc9345e5",
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
        "time": "6:32 PM",
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
                "id": "aa49ab5e-218b-4322-bab9-66f5a719e3f9"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "9ba9b94a-889f-4a19-823a-9ef1d36c3e00"
              }
            ],
            "activeCells": {},
            "id": "a970b590-a212-49a5-a8f1-d65efc9345e5"
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
            "id": "5577be90-09a5-48d8-b677-041dca90363b",
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
            "id": "a9a215f8-60d4-4871-bc05-9d5276c946f8",
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
            "id": "e3917406-2aad-4bb5-94ad-0bed4e47634e",
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
            "id": "9a457cd5-3062-448a-bc6d-e965646b71ab",
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
            "id": "41260628-2d22-4f27-92ce-409ff030e7c7",
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
            "id": "14baea71-c774-422c-8fee-9f9051461372",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5577be90-09a5-48d8-b677-041dca90363b",
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
            "subject": "SelectionList:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheNameIs",
            "start": 0,
            "end": 4,
            "duration": 4
          },
          {
            "type": "Grammar",
            "subject": "FirstAndLastName:Row",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "FirstAndLastName:Row",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": null,
            "start": 4,
            "end": 6,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "TheEnumOptionIs",
            "start": 7,
            "end": 8,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "SelectionList:TearDown",
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
        "time": "6:32 PM",
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
                "id": "a9a215f8-60d4-4871-bc05-9d5276c946f8"
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
                        "id": "e3917406-2aad-4bb5-94ad-0bed4e47634e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "9a457cd5-3062-448a-bc6d-e965646b71ab"
                      }
                    ],
                    "activeCells": {},
                    "id": "4d086bba-5c00-4851-aaf4-c00d0731f41e"
                  }
                ],
                "id": "d7f851ed-8f0e-4d8b-8779-a2298f3c8d8b"
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
                        "id": "41260628-2d22-4f27-92ce-409ff030e7c7"
                      }
                    ],
                    "activeCells": {},
                    "id": "e7f3758f-d65d-4402-a7db-e888675d0719"
                  }
                ],
                "id": "62ce27cb-bcf1-458b-9c95-419f3aa7ee4a"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "14baea71-c774-422c-8fee-9f9051461372"
              }
            ],
            "activeCells": {},
            "id": "5577be90-09a5-48d8-b677-041dca90363b"
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
            "id": "c59142cc-164e-4076-8622-1cee7c193589",
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
            "subject": "Service:SetUp",
            "start": 0,
            "end": 0,
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
        "time": "6:32 PM",
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
                "id": "8719fd63-dfec-472b-9852-4606cef6fd88"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "9c6c4d27-5647-43f8-a872-8ccb7dd4f3c3"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "f20867b6-4fd7-4a3f-9a61-74fa0c67b651"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "ed301839-c82e-42d5-9cb8-d11848b95132"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "623e3119-fdb6-4baf-ab35-04217c256ac0"
              }
            ],
            "activeCells": {},
            "id": "c59142cc-164e-4076-8622-1cee7c193589"
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
            "id": "0713ca91-0e17-4349-bb88-9cba8319791e",
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
            "id": "1a69a1b4-ef8f-423f-90fe-f79a845c8321",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0713ca91-0e17-4349-bb88-9cba8319791e",
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
        "time": "6:32 PM",
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
                "id": "bcbac283-1ba3-4c7f-b9df-75694a1ff449"
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
                        "id": "1a69a1b4-ef8f-423f-90fe-f79a845c8321"
                      }
                    ],
                    "activeCells": {},
                    "id": "ab38667f-a6ed-4297-ad11-32056926ad9a"
                  }
                ],
                "id": "d108f1f1-0a89-474d-b537-d5abb90e5eab"
              }
            ],
            "activeCells": {},
            "id": "0713ca91-0e17-4349-bb88-9cba8319791e"
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
            "id": "91dc393e-9acc-4471-86b1-dc2a5e5bda13",
            "spec": "general4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "3f655da4-a815-42fe-82ba-b481a1a15192",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "993c121f-7574-4c78-9b0c-9066678cc9a3",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "cd42497c-99e9-4b4a-a04b-7f23eef2fcc0",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "91dc393e-9acc-4471-86b1-dc2a5e5bda13",
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
        "time": "6:32 PM",
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
                "id": "3f655da4-a815-42fe-82ba-b481a1a15192"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "993c121f-7574-4c78-9b0c-9066678cc9a3"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "cd42497c-99e9-4b4a-a04b-7f23eef2fcc0"
              }
            ],
            "activeCells": {},
            "id": "91dc393e-9acc-4471-86b1-dc2a5e5bda13"
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
        "time": "6:32 PM",
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
            "id": "670ee102-271e-4fd7-a48f-1c53f22fd0fe",
            "spec": "paragraph1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f305f784-9bb6-41bc-a0d7-959b990dae12",
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
            "id": "f305f784-9bb6-41bc-a0d7-959b990dae12",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f305f784-9bb6-41bc-a0d7-959b990dae12",
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
            "id": "f305f784-9bb6-41bc-a0d7-959b990dae12",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f305f784-9bb6-41bc-a0d7-959b990dae12",
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
            "id": "eed7df9c-0394-47e5-9f37-d11de78d03bc",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eed7df9c-0394-47e5-9f37-d11de78d03bc",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eed7df9c-0394-47e5-9f37-d11de78d03bc",
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
            "id": "eed7df9c-0394-47e5-9f37-d11de78d03bc",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eed7df9c-0394-47e5-9f37-d11de78d03bc",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38cf7d02-8c61-44c2-8188-72754104b1cd",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38cf7d02-8c61-44c2-8188-72754104b1cd",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38cf7d02-8c61-44c2-8188-72754104b1cd",
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
            "id": "38cf7d02-8c61-44c2-8188-72754104b1cd",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38cf7d02-8c61-44c2-8188-72754104b1cd",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "39de7781-4c85-45d4-a477-599379cf52ae",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "39de7781-4c85-45d4-a477-599379cf52ae",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "39de7781-4c85-45d4-a477-599379cf52ae",
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
            "id": "39de7781-4c85-45d4-a477-599379cf52ae",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "39de7781-4c85-45d4-a477-599379cf52ae",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5b423351-cd09-4118-a4d8-acad1ac274a3",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5b423351-cd09-4118-a4d8-acad1ac274a3",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5b423351-cd09-4118-a4d8-acad1ac274a3",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<>c.<.ctor>b__0_3(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "5b423351-cd09-4118-a4d8-acad1ac274a3",
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
            "id": "5b423351-cd09-4118-a4d8-acad1ac274a3",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "670ee102-271e-4fd7-a48f-1c53f22fd0fe",
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
            "end": 9,
            "duration": 9
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
            "end": 7,
            "duration": 7
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 7,
            "end": 7,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 7,
            "end": 7,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 7,
            "end": 7,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 7,
            "end": 7,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:3",
            "start": 8,
            "end": 9,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 9,
            "end": 9,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Composite:TearDown",
            "start": 9,
            "end": 9,
            "duration": 0
          }
        ],
        "duration": 9,
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
        "time": "6:32 PM",
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
                "id": "f305f784-9bb6-41bc-a0d7-959b990dae12"
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
                        "id": "eed7df9c-0394-47e5-9f37-d11de78d03bc"
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
                        "id": "38cf7d02-8c61-44c2-8188-72754104b1cd"
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
                        "id": "39de7781-4c85-45d4-a477-599379cf52ae"
                      }
                    ],
                    "activeCells": {},
                    "id": "01e9f341-221d-4115-8791-67ffb4feae0c"
                  }
                ],
                "id": "5ee63415-a2c7-4e9c-81cd-6ebe292a5f86"
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
                "id": "5b423351-cd09-4118-a4d8-acad1ac274a3"
              }
            ],
            "activeCells": {},
            "id": "670ee102-271e-4fd7-a48f-1c53f22fd0fe"
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
            "id": "82bc7d2d-59ee-47b3-b8e9-098f5b16ba9e",
            "spec": "paragraph2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "afbdd32b-a176-4dde-9371-78c3b7330afe",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "afbdd32b-a176-4dde-9371-78c3b7330afe",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "afbdd32b-a176-4dde-9371-78c3b7330afe",
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
            "id": "afbdd32b-a176-4dde-9371-78c3b7330afe",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "afbdd32b-a176-4dde-9371-78c3b7330afe",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "48fbceb5-3c62-45b7-ba95-ab854145046f",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "48fbceb5-3c62-45b7-ba95-ab854145046f",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "48fbceb5-3c62-45b7-ba95-ab854145046f",
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
            "id": "48fbceb5-3c62-45b7-ba95-ab854145046f",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "48fbceb5-3c62-45b7-ba95-ab854145046f",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f63c910e-c8c7-42dc-aa7b-88fb65e53a0f",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f63c910e-c8c7-42dc-aa7b-88fb65e53a0f",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f63c910e-c8c7-42dc-aa7b-88fb65e53a0f",
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
            "id": "f63c910e-c8c7-42dc-aa7b-88fb65e53a0f",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f63c910e-c8c7-42dc-aa7b-88fb65e53a0f",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1558e1d9-3d0e-4e53-8b2a-93604eb1ee9a",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1558e1d9-3d0e-4e53-8b2a-93604eb1ee9a",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1558e1d9-3d0e-4e53-8b2a-93604eb1ee9a",
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
            "id": "1558e1d9-3d0e-4e53-8b2a-93604eb1ee9a",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1558e1d9-3d0e-4e53-8b2a-93604eb1ee9a",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9148d8ca-5890-42d0-9017-18f37b81ef77",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9148d8ca-5890-42d0-9017-18f37b81ef77",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9148d8ca-5890-42d0-9017-18f37b81ef77",
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
            "id": "9148d8ca-5890-42d0-9017-18f37b81ef77",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9148d8ca-5890-42d0-9017-18f37b81ef77",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "82bc7d2d-59ee-47b3-b8e9-098f5b16ba9e",
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
        "time": "6:32 PM",
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
                "id": "afbdd32b-a176-4dde-9371-78c3b7330afe"
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
                "id": "48fbceb5-3c62-45b7-ba95-ab854145046f"
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
                        "id": "f63c910e-c8c7-42dc-aa7b-88fb65e53a0f"
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
                        "id": "1558e1d9-3d0e-4e53-8b2a-93604eb1ee9a"
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
                        "id": "9148d8ca-5890-42d0-9017-18f37b81ef77"
                      }
                    ],
                    "activeCells": {},
                    "id": "fdcae298-8172-434f-955a-080ced605cc9"
                  }
                ],
                "id": "e7d93355-b53f-4ee1-bba5-9694ffed2693"
              }
            ],
            "activeCells": {},
            "id": "82bc7d2d-59ee-47b3-b8e9-098f5b16ba9e"
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
            "id": "6a83437f-b9b3-4ac0-ae77-ec45695c7c97",
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
            "id": "3aa44e95-f727-4032-8b77-009a78f3a513",
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
            "id": "4d8c4dbd-307a-4e40-9c69-7b5314ca97f6",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6a83437f-b9b3-4ac0-ae77-ec45695c7c97",
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
        "time": "6:32 PM",
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
                "id": "3aa44e95-f727-4032-8b77-009a78f3a513"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "4d8c4dbd-307a-4e40-9c69-7b5314ca97f6"
              }
            ],
            "activeCells": {},
            "id": "6a83437f-b9b3-4ac0-ae77-ec45695c7c97"
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
            "id": "03ac6b66-97d0-4b7f-a9ef-b4b66bb615de",
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
            "id": "03ac6b66-97d0-4b7f-a9ef-b4b66bb615de",
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
        "time": "6:32 PM",
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
            "id": "03ac6b66-97d0-4b7f-a9ef-b4b66bb615de"
          },
          {
            "type": "comment",
            "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
            "id": "46cfcc98-fdb8-4daf-b447-988a651842a6"
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
            "id": "3345b8aa-1af2-4925-b144-80993bb81167",
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
            "id": "e855257e-3b66-4698-a65a-30fac137599c",
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
            "id": "cb102d74-30f0-4e06-ab56-d84c0bff1444",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3345b8aa-1af2-4925-b144-80993bb81167",
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
        "time": "6:32 PM",
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
                "id": "e855257e-3b66-4698-a65a-30fac137599c"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "cb102d74-30f0-4e06-ab56-d84c0bff1444"
              }
            ],
            "activeCells": {},
            "id": "3345b8aa-1af2-4925-b144-80993bb81167"
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
            "id": "fc93da25-b864-4d11-9f22-575a7b7d18bc",
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
            "id": "b3442d25-6ba5-4425-bac1-020dc45d8f1f",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "810a5b0e-3f68-48c3-8304-a134018c5310",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3908f592-e183-48ec-b47b-2df7c2066e68",
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
            "id": "bc146f73-0ef4-4697-8c67-8e4f3b908fe6",
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
            "id": "fc93da25-b864-4d11-9f22-575a7b7d18bc",
            "spec": "sentence4",
            "position": "teardown",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6b435e58-e1b8-4b13-bc5f-e4969fe402e9",
            "spec": "sentence4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6b435e58-e1b8-4b13-bc5f-e4969fe402e9",
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
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sentence:SetUp",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sentence:TearDown",
            "start": 5,
            "end": 5,
            "duration": 0
          }
        ],
        "duration": 5,
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
        "time": "6:32 PM",
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
                "id": "0eccb96b-ba3e-4c3d-ad71-455f8a6fdcef"
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
                "id": "12742d88-299c-4bd7-b0a3-ff60d0079f3d"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "b3442d25-6ba5-4425-bac1-020dc45d8f1f"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "810a5b0e-3f68-48c3-8304-a134018c5310"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "3908f592-e183-48ec-b47b-2df7c2066e68"
              },
              {
                "type": "comment",
                "text": "Correct assertion",
                "id": "4f3bc0d9-9afd-43ee-a8fa-9faa94eb7f95"
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
                "id": "88b3dc65-15b2-40b0-8ddd-ff4894b0e97c"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "2",
                  "number2": "2",
                  "sum": "5"
                },
                "collections": [],
                "id": "bc146f73-0ef4-4697-8c67-8e4f3b908fe6"
              },
              {
                "type": "comment",
                "text": "Line assertions",
                "id": "4f205a99-acca-4e24-a813-fb605c9114a9"
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
            "id": "fc93da25-b864-4d11-9f22-575a7b7d18bc"
          },
          {
            "type": "comment",
            "text": "Comment\r\n\r\nAnother Comment",
            "id": "adf90248-bd2d-4bc0-9c05-dcca3abfe97f"
          },
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Show a syntax failure",
                "id": "7462f23e-110a-48de-94ae-97f04d01a934"
              }
            ],
            "activeCells": {},
            "id": "6b435e58-e1b8-4b13-bc5f-e4969fe402e9"
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
            "id": "ac4aea00-3fd4-4693-a8b8-d678c5e6219c",
            "spec": "set1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3f1a0627-a259-4e6b-a985-3b3016c98a27",
            "spec": "set1",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "686c561d-de98-4051-8147-d8136861d15a",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "686c561d-de98-4051-8147-d8136861d15a",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "686c561d-de98-4051-8147-d8136861d15a",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "686c561d-de98-4051-8147-d8136861d15a",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "686c561d-de98-4051-8147-d8136861d15a",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fbd21747-56e8-47ca-ba28-dd040e200696",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fbd21747-56e8-47ca-ba28-dd040e200696",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fbd21747-56e8-47ca-ba28-dd040e200696",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fbd21747-56e8-47ca-ba28-dd040e200696",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fbd21747-56e8-47ca-ba28-dd040e200696",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbcced9c-49f0-4eb4-8e6c-355139610f25",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbcced9c-49f0-4eb4-8e6c-355139610f25",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbcced9c-49f0-4eb4-8e6c-355139610f25",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbcced9c-49f0-4eb4-8e6c-355139610f25",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbcced9c-49f0-4eb4-8e6c-355139610f25",
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
              "91dea19e-10a7-456f-b52b-94df284c1aa4",
              "b74e7561-e18c-49b6-a673-5c5d2320f8b8"
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
              "09196ce3-da0c-457a-b67b-4ab27442f4de",
              "6a9dad47-9ca4-4701-acb9-37adad2b2017",
              "004dfdbb-1170-4cce-ab3d-3f42f8090d46"
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
            "id": "ac4aea00-3fd4-4693-a8b8-d678c5e6219c",
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
            "end": 19,
            "duration": 19
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
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 7,
            "end": 16,
            "duration": 9
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 17,
            "end": 18,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 18,
            "end": 19,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 19,
            "end": 19,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 19,
            "end": 19,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 19,
            "end": 19,
            "duration": 0
          }
        ],
        "duration": 19,
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
        "time": "6:32 PM",
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
                        "id": "686c561d-de98-4051-8147-d8136861d15a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "fbd21747-56e8-47ca-ba28-dd040e200696"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "cbcced9c-49f0-4eb4-8e6c-355139610f25"
                      }
                    ],
                    "activeCells": {},
                    "id": "3f1a0627-a259-4e6b-a985-3b3016c98a27"
                  }
                ],
                "id": "ead8e085-60ef-4d4f-b589-fe00a327160b"
              },
              {
                "type": "comment",
                "text": "Completely successful ordering",
                "id": "38a1f4a9-6393-49f8-bb81-3147da878be8"
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
                "id": "9122d3e0-6a81-4185-937f-455f5845044f"
              },
              {
                "type": "comment",
                "text": "Out of order",
                "id": "02584ce5-fe76-4df8-a109-51950574640a"
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
                "id": "c52931e0-86a6-49fe-b200-27350857873a"
              },
              {
                "type": "comment",
                "text": "Should have one exra",
                "id": "366c08a8-93b5-44e5-bf3f-1c4ac7c36ffe"
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
                        "id": "91dea19e-10a7-456f-b52b-94df284c1aa4"
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
                        "id": "b74e7561-e18c-49b6-a673-5c5d2320f8b8"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "f4d75ebc-7ab7-4937-98d4-8496d924105f"
              },
              {
                "type": "comment",
                "text": "Should mark one expected result as missing",
                "id": "fb6a60c9-6977-4a0d-ad14-7601119d4dd5"
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
                        "id": "09196ce3-da0c-457a-b67b-4ab27442f4de"
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
                        "id": "6a9dad47-9ca4-4701-acb9-37adad2b2017"
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
                        "id": "004dfdbb-1170-4cce-ab3d-3f42f8090d46"
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
                "id": "85c29534-d8d3-4de3-897d-aa6ce8787518"
              },
              {
                "type": "comment",
                "text": "One syntax error",
                "id": "f67e2b6c-2dae-4610-935b-45f2d718ec02"
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
                        "id": "78e85b0e-0b0a-4929-845e-7ea82dbcac21"
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
                        "id": "1b11db22-07b6-41aa-a748-30015493d8c9"
                      }
                    ],
                    "activeCells": {},
                    "id": "78c8e820-ab39-4d4a-aa29-59cdc2e4fb01"
                  }
                ],
                "id": "f1730125-097a-484c-8658-0615e9aa4aef"
              }
            ],
            "activeCells": {},
            "id": "ac4aea00-3fd4-4693-a8b8-d678c5e6219c"
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
            "id": "3d64761d-778d-4615-8072-160bd6cf25b8",
            "spec": "set2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a757b31a-b76e-40f0-9eb2-8fb915f65fe1",
            "spec": "set2",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f6cac998-a403-4189-8ba5-c311f24d5937",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8c792171-cc83-4766-bb94-c328546c8892",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0aba2e23-1f86-476f-9e96-d8abb86a8eaa",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c552e426-5ab1-4bc2-88a9-56db7f1f7070",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "85f58af7-531d-4dd2-abda-b705ad976635",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "adbe0f2f-cb8a-4361-ab1b-3c496a20725b",
              "bd7ca05e-d962-4727-b118-e522ce1d8291",
              "709da199-adef-4b79-943d-8b023b814508",
              "d6ce0aa7-3373-4774-a903-f5446b155bad",
              "c990c07e-79e9-43c4-89d6-4dfe9a153e44"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "ee58f441-72a7-41a0-9dd7-e409a17acd4a",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "b51a6842-062f-41de-8f3e-90996fa874a8",
              "28ec987c-72ec-4646-9637-9cf063eebe03",
              "5f81aa33-e807-40c8-9d12-d89c45e2f159",
              "34b410d4-025d-4a9f-81da-16d4916f950a",
              "1789c955-f301-4ee9-ac0e-71dad9c54bc8"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "29949e33-912a-4f78-aef2-00c85d1d242f",
            "type": "set-verification-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3d64761d-778d-4615-8072-160bd6cf25b8",
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
            "end": 3,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
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
        "time": "6:32 PM",
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
                        "id": "f6cac998-a403-4189-8ba5-c311f24d5937"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "8c792171-cc83-4766-bb94-c328546c8892"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "0aba2e23-1f86-476f-9e96-d8abb86a8eaa"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "c552e426-5ab1-4bc2-88a9-56db7f1f7070"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "85f58af7-531d-4dd2-abda-b705ad976635"
                      }
                    ],
                    "activeCells": {},
                    "id": "a757b31a-b76e-40f0-9eb2-8fb915f65fe1"
                  }
                ],
                "id": "1e28108f-7fd1-4d16-a4f7-163b0f02603b"
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
                        "id": "adbe0f2f-cb8a-4361-ab1b-3c496a20725b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "bd7ca05e-d962-4727-b118-e522ce1d8291"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "709da199-adef-4b79-943d-8b023b814508"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "d6ce0aa7-3373-4774-a903-f5446b155bad"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "c990c07e-79e9-43c4-89d6-4dfe9a153e44"
                      }
                    ],
                    "activeCells": {},
                    "id": "ee58f441-72a7-41a0-9dd7-e409a17acd4a"
                  }
                ],
                "id": "412a5bf2-e459-4a6c-9223-074b03833403"
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
                        "id": "b51a6842-062f-41de-8f3e-90996fa874a8"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "28ec987c-72ec-4646-9637-9cf063eebe03"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "5f81aa33-e807-40c8-9d12-d89c45e2f159"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "34b410d4-025d-4a9f-81da-16d4916f950a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "1789c955-f301-4ee9-ac0e-71dad9c54bc8"
                      }
                    ],
                    "activeCells": {},
                    "id": "29949e33-912a-4f78-aef2-00c85d1d242f"
                  }
                ],
                "id": "02879d2c-8df7-4ec5-8eff-dfa613822c78"
              }
            ],
            "activeCells": {},
            "id": "3d64761d-778d-4615-8072-160bd6cf25b8"
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
            "id": "bb2333bc-5049-47aa-ae9e-bbf01e544841",
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
            "id": "bb2333bc-5049-47aa-ae9e-bbf01e544841",
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
        "time": "6:32 PM",
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
                        "id": "b1f7adf3-e747-486f-b815-2990004ee537"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "b62102fd-a1cc-4412-8bf6-9dec13a0cb21"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "bc20b039-9e78-4e1e-840f-c2da3a7f7585"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "cadb8abc-a378-48ef-bac2-bcf4e386a478"
              }
            ],
            "activeCells": {},
            "id": "bb2333bc-5049-47aa-ae9e-bbf01e544841"
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
            "id": "321347ab-0e72-4e84-94f8-39d8ef21b324",
            "spec": "set4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5de7f727-a2b9-4d30-9995-4b7000883fd9",
            "spec": "set4",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f34e232-0700-486b-b9d4-129586fcda01",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f34e232-0700-486b-b9d4-129586fcda01",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f34e232-0700-486b-b9d4-129586fcda01",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f34e232-0700-486b-b9d4-129586fcda01",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f34e232-0700-486b-b9d4-129586fcda01",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbda3fa3-27d3-4f34-94c1-4247d63e2ea2",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbda3fa3-27d3-4f34-94c1-4247d63e2ea2",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbda3fa3-27d3-4f34-94c1-4247d63e2ea2",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbda3fa3-27d3-4f34-94c1-4247d63e2ea2",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbda3fa3-27d3-4f34-94c1-4247d63e2ea2",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "86fd5f4c-37b3-4bf8-8b5a-ed5ca3257acc",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "86fd5f4c-37b3-4bf8-8b5a-ed5ca3257acc",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "86fd5f4c-37b3-4bf8-8b5a-ed5ca3257acc",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "86fd5f4c-37b3-4bf8-8b5a-ed5ca3257acc",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "86fd5f4c-37b3-4bf8-8b5a-ed5ca3257acc",
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
            "id": "a1348254-5e61-499b-ac48-0b934b077681",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "321347ab-0e72-4e84-94f8-39d8ef21b324",
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
        "time": "6:32 PM",
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
                        "id": "4f34e232-0700-486b-b9d4-129586fcda01"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "cbda3fa3-27d3-4f34-94c1-4247d63e2ea2"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "86fd5f4c-37b3-4bf8-8b5a-ed5ca3257acc"
                      }
                    ],
                    "activeCells": {},
                    "id": "5de7f727-a2b9-4d30-9995-4b7000883fd9"
                  }
                ],
                "id": "cc840f38-aca2-4228-a39a-29d47e4638a0"
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
                        "id": "a1348254-5e61-499b-ac48-0b934b077681"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "197e2369-ba0d-442b-8bd2-b1f779bc9430"
                      }
                    ],
                    "activeCells": {},
                    "id": "d90070c8-c125-416b-a5ba-a4da15908dfe"
                  }
                ],
                "id": "36a974a1-cda7-44e0-8424-14f4afc986c0"
              }
            ],
            "activeCells": {},
            "id": "321347ab-0e72-4e84-94f8-39d8ef21b324"
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
            "id": "c81ac34e-c56e-45e9-8e00-164059c7f227",
            "spec": "set5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "77bcb86b-24b1-4921-9404-d80b71cf4560",
            "spec": "set5",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7e4605ab-7248-49f5-b0ef-25fb9a535d9f",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "638bf0bf-5ec2-43bc-b10e-0e2668b83778",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4cfa8ad8-c9bb-4845-a90c-5c4d08245f73",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5fb8fe45-cbd2-4eea-9c23-c2be38fdc930",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c282e7bf-8e8e-4564-b562-0b8854de0318",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b2c19068-632b-41b5-a875-8c3971905648",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3588329a-174a-4df0-b367-62c761f3da9a",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8f57ee56-7c57-4aba-a468-e5838e856281",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "79242742-391a-400d-9757-dae54663544f",
              "dc750030-bc48-4cfc-bee9-f412b4c046f4",
              "cf265af5-54ec-40a6-9112-751d8045d5bb",
              "3017581a-9833-4f0b-8185-b7ffecb0926c"
            ],
            "missing": [
              "e882eea8-3f4a-4c8c-a2b7-8f7d0e3679f0"
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
                "id": "74866450-9491-4437-bf35-a60a14ef2dd0"
              },
              {
                "actual": 4,
                "id": "9371e1d7-78c7-42a3-85d4-73931a5bc7e3"
              }
            ],
            "id": "a5ef19a2-7a25-4fe3-8936-33d023670879",
            "type": "set-verification-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c81ac34e-c56e-45e9-8e00-164059c7f227",
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
        "time": "6:32 PM",
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
                        "id": "7e4605ab-7248-49f5-b0ef-25fb9a535d9f"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "638bf0bf-5ec2-43bc-b10e-0e2668b83778"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "4cfa8ad8-c9bb-4845-a90c-5c4d08245f73"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "5fb8fe45-cbd2-4eea-9c23-c2be38fdc930"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "c282e7bf-8e8e-4564-b562-0b8854de0318"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "b2c19068-632b-41b5-a875-8c3971905648"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "3588329a-174a-4df0-b367-62c761f3da9a"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "8f57ee56-7c57-4aba-a468-e5838e856281"
                      }
                    ],
                    "activeCells": {},
                    "id": "77bcb86b-24b1-4921-9404-d80b71cf4560"
                  }
                ],
                "id": "6ffb9e57-898e-4500-995c-330a56a5f568"
              },
              {
                "type": "comment",
                "text": "All data is correct, but in the wrong order",
                "id": "4693fb47-1f05-4e05-9b46-6388f37063b4"
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
                        "id": "79242742-391a-400d-9757-dae54663544f"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "dc750030-bc48-4cfc-bee9-f412b4c046f4"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "cf265af5-54ec-40a6-9112-751d8045d5bb"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "74866450-9491-4437-bf35-a60a14ef2dd0"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "9371e1d7-78c7-42a3-85d4-73931a5bc7e3"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "e882eea8-3f4a-4c8c-a2b7-8f7d0e3679f0"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "3017581a-9833-4f0b-8185-b7ffecb0926c"
                      }
                    ],
                    "activeCells": {},
                    "id": "a5ef19a2-7a25-4fe3-8936-33d023670879"
                  }
                ],
                "id": "9f9a9dc9-c48c-4777-92be-e37060eafac1"
              }
            ],
            "activeCells": {},
            "id": "c81ac34e-c56e-45e9-8e00-164059c7f227"
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
            "id": "66827bab-560e-4b47-b2e9-a103fa306811",
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
            "id": "e8a7fab3-2280-4c97-973c-42e6ed1eabc7",
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
            "id": "e79bc663-2087-4dce-ba28-b81def0cc980",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "66827bab-560e-4b47-b2e9-a103fa306811",
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
        "time": "6:32 PM",
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
                        "id": "e8a7fab3-2280-4c97-973c-42e6ed1eabc7"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "e79bc663-2087-4dce-ba28-b81def0cc980"
                      }
                    ],
                    "activeCells": {},
                    "id": "7f6b3333-e035-46ef-912f-7d3a57896f00"
                  }
                ],
                "id": "b20b383b-bc16-4cc4-9973-58297f48cb43"
              }
            ],
            "activeCells": {},
            "id": "66827bab-560e-4b47-b2e9-a103fa306811"
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
            "id": "55fd2f4b-d7fb-4df7-a9fe-e85c13b517a1",
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
            "id": "3e46e215-c646-4b5f-912d-e18652cc9f19",
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
            "id": "b25b9861-15e4-4941-8f7d-609dde296835",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "55fd2f4b-d7fb-4df7-a9fe-e85c13b517a1",
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
        "time": "6:32 PM",
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
                        "id": "3d977ce5-a02b-4abf-b680-d918455480df"
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
                        "id": "e1699882-6841-4c07-a194-a68e5c8348c6"
                      }
                    ],
                    "activeCells": {},
                    "id": "2f8e1da1-ae7e-4ac6-bd5a-709c7ba9b669"
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
                        "id": "3e46e215-c646-4b5f-912d-e18652cc9f19"
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
                        "id": "b25b9861-15e4-4941-8f7d-609dde296835"
                      }
                    ],
                    "activeCells": {},
                    "id": "beca7159-65a2-4d9d-b643-139e094c822d"
                  }
                ],
                "id": "6a23ac54-353c-42d0-a029-5c33cf5c1238"
              }
            ],
            "activeCells": {},
            "id": "55fd2f4b-d7fb-4df7-a9fe-e85c13b517a1"
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
            "id": "a6889ccc-4080-4e48-b8ff-694d38b23764",
            "spec": "table3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "389f2a4f-a9fd-4a99-8350-42e52f077180",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cbfc7cd1-8f36-4198-9be6-ef49323a998b",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22798efa-9770-4562-b56d-b772cf83e540",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8e41cff0-f890-471f-94a0-8852bed61258",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a6889ccc-4080-4e48-b8ff-694d38b23764",
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
        "time": "6:32 PM",
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
                        "id": "389f2a4f-a9fd-4a99-8350-42e52f077180"
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
                        "id": "cbfc7cd1-8f36-4198-9be6-ef49323a998b"
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
                        "id": "22798efa-9770-4562-b56d-b772cf83e540"
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
                        "id": "8e41cff0-f890-471f-94a0-8852bed61258"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "393c0b55-f456-4ba3-b862-771cf96ef89e"
                  }
                ],
                "id": "5107b12e-70d4-4ac7-90c5-2bf8c762c678"
              }
            ],
            "activeCells": {},
            "id": "a6889ccc-4080-4e48-b8ff-694d38b23764"
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
            "id": "8095fe7b-2209-4ec2-b6ca-9131d8a9107a",
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
            "id": "61b1226f-4add-45d8-a180-f6d136e3145c",
            "spec": "table4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3f1092c3-e872-4e35-824d-8206a6ef434e",
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
            "id": "8095fe7b-2209-4ec2-b6ca-9131d8a9107a",
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
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "BeforeThrowsErrorBefore",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "BeforeThrowsError:Row:0",
            "start": 4,
            "end": 4,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AfterThrowsError:Row:0",
            "start": 4,
            "end": 5,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "AfterThrowsError:After",
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
        "time": "6:32 PM",
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
                        "id": "61b1226f-4add-45d8-a180-f6d136e3145c"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "cd05f5bb-c9a2-48e9-b48d-c23014955182"
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
                        "id": "3f1092c3-e872-4e35-824d-8206a6ef434e"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "1b2b3a5e-7e81-45be-9b6b-63ec330d6aa8"
              }
            ],
            "activeCells": {},
            "id": "8095fe7b-2209-4ec2-b6ca-9131d8a9107a"
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
            "id": "593cffae-0477-4713-b09a-3d964ad1c1bb",
            "spec": "table5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c8d1f93b-67e3-4a80-a8c2-c496ba497d56",
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
            "id": "88a39bdc-00a3-40a7-840b-3021fdf804d7",
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
            "id": "9f567893-c44b-45f9-9f9d-8a2f5d14f44d",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c8d1f93b-67e3-4a80-a8c2-c496ba497d56",
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
            "id": "cd4355a2-8c4f-4304-bcf1-da1667f264db",
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
            "id": "cd4355a2-8c4f-4304-bcf1-da1667f264db",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cd4355a2-8c4f-4304-bcf1-da1667f264db",
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
            "id": "cd4355a2-8c4f-4304-bcf1-da1667f264db",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "46f20efe-9fd9-409e-9b57-c27aed6580b5",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "46f20efe-9fd9-409e-9b57-c27aed6580b5",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "46f20efe-9fd9-409e-9b57-c27aed6580b5",
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
            "id": "46f20efe-9fd9-409e-9b57-c27aed6580b5",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "593cffae-0477-4713-b09a-3d964ad1c1bb",
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
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Sum:Row",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Sum:After",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 5,
            "end": 6,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 6,
            "end": 6,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 6,
            "end": 8,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 8,
            "end": 8,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
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
        "time": "6:32 PM",
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
                "id": "5214fc41-c364-4e73-ba8a-6db9d990688f"
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
                        "id": "88a39bdc-00a3-40a7-840b-3021fdf804d7"
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
                        "id": "9f567893-c44b-45f9-9f9d-8a2f5d14f44d"
                      }
                    ],
                    "activeCells": {},
                    "id": "c8d1f93b-67e3-4a80-a8c2-c496ba497d56"
                  }
                ],
                "id": "bf0cf15d-43a9-419f-a969-2a06a15c41e1"
              },
              {
                "type": "comment",
                "text": "Table fixture from script",
                "id": "0d7a9e69-6295-444f-972b-2483a4a1ea51"
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
                        "id": "cd4355a2-8c4f-4304-bcf1-da1667f264db"
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
                        "id": "46f20efe-9fd9-409e-9b57-c27aed6580b5"
                      }
                    ],
                    "activeCells": {},
                    "id": "f489a20b-d4ad-4870-8033-16dff2cfb65a"
                  }
                ],
                "id": "44f41c60-30d9-4d9f-8acc-a264fcfaf699"
              }
            ],
            "activeCells": {},
            "id": "593cffae-0477-4713-b09a-3d964ad1c1bb"
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
                "id": "df150b15-bb9e-4f6c-8205-4c599054b3d8"
              },
              {
                "type": "comment",
                "text": "## IfTheAddressIs",
                "id": "efbfbc0d-74e8-44fe-8439-7dde7010d70a"
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
                "id": "1092272b-86ce-4d27-8e54-efd719ae87b6"
              },
              {
                "type": "comment",
                "text": "## TheAddressShouldBe",
                "id": "c81e7348-3b14-4821-bbc6-1ca9aaa97562"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "Address1",
                  "Address2": "Address2",
                  "City": "City"
                },
                "collections": [],
                "id": "4f0bb622-be68-4aef-a71c-f8fe40a4cc2a"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "29f01ae4-b40f-4c7e-9c45-8917677eaade"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "89971409-c0ea-4c7a-a7c8-74279e436c73"
              }
            ],
            "activeCells": {},
            "id": "0b812bd2-e3aa-42eb-b903-f47a76c23a06"
          }
        ],
        "id": "832d9b64-a173-420c-8cfd-2be059d27c83"
      },
      "sampleMarkdown": "# Sample Specification for CheckObject\r\n\r\n-> id = ad3a99fa-ac2f-47ce-ab99-dcfa4eedb086\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7225005-06:00\r\n-> tags = \r\n\r\n[CheckObject]\r\n|> IfTheAddressIs Address1=Address1, Address2=Address2, City=City, StateOrProvince=StateOrProvince, Country=Country, PostalCode=PostalCode\r\n|> TheAddressShouldBe Address1=Address1, Address2=Address2, City=City\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "fc1103bc-debc-4b10-bfc5-66ef476298cb"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "307779a3-2d94-4029-8b11-7f36dad6525f"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "8a1cca60-a51d-4501-91fb-0ced027bd046"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "2e321cc9-83a5-4ab2-b259-999b93b908be"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "8b25da7f-e048-43b5-a821-dad5595054a1"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiply",
                "id": "4c02c0b7-27af-458f-bbbd-dac559590ce3"
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
                "id": "77d4e48b-d4ba-4c05-b0c9-addd854d0d69"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyTable",
                "id": "9ebb4211-71ef-443a-a838-3280e3bd335b"
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
                        "id": "d0d0aa19-8826-4180-b3cf-5247646a0259"
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
                        "id": "410ecd42-568c-4434-a0b6-0c66be0cc1ff"
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
                        "id": "bfa3d119-3aca-4334-82d7-22034c8b472d"
                      }
                    ],
                    "activeCells": {},
                    "id": "5e9b7fef-ec40-43f0-a4c7-f2ed460c4f5e"
                  }
                ],
                "id": "3ba44cc3-7478-4fa9-9c51-8820b4c535ed"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyThrow",
                "id": "904cdc6c-9723-4725-8909-7f886611fd95"
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
                "id": "54b1efde-2223-48bc-a7b0-96b036ade7a0"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "653f5fc3-b0f4-42a3-9f17-2da990971ac7"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "695e317a-01aa-47af-9fbd-0401787977f3"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "a3bbc41d-93e4-420b-b0e1-4c74d94d473c"
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
                        "id": "664e1a4f-98c9-4cdd-8230-3af9d36fac8f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "4ba2e2d8-431d-43dd-b8eb-a18c755ea1c7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "86897ebe-a6a6-4a40-a7c7-c5340e065cdc"
                      }
                    ],
                    "activeCells": {},
                    "id": "ab9383b5-9c01-4be1-a58f-badf15b9e3a1"
                  }
                ],
                "id": "a5dcb413-456f-4833-a129-b57af2c58f44"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "e7627d04-0463-4168-9387-2611356c5982"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "84ef6f83-4472-4b55-a9f1-ac00812565ef"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "3e09df02-868d-4cf6-b064-d38b7981aa09"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "e510c185-0dbb-41b0-b1fb-534096dff705"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "efe89fbf-0e37-4922-ad2f-6080ddd3e3a2"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "754745b2-9f42-46a0-88d6-4310e0ee80d6"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "87a37d45-8e7c-4011-b18d-5aac968e304d"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "d234ce9f-ea83-4569-a182-8fc0293c870e"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "3b6c95a4-f3a8-41c7-97cb-4d03781f7cff"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "b23e4820-a42b-4197-b3d3-c19eae831408"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "3649cd79-eb83-42b9-ada2-228aa041df6e"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "30356fc2-67e2-42a2-bf70-4f5c20ab78d1"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "a2496d45-018f-4f0a-8d04-8d2565db0333"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "48749bcd-a7a4-4497-8a78-6f0b1491018b"
              }
            ],
            "activeCells": {},
            "id": "dd0f1eb1-81cd-4897-9a4c-52dd7da9b8f9"
          }
        ],
        "id": "21fb7bfb-ec5b-4c1f-8f47-814d8d7c5d7e"
      },
      "sampleMarkdown": "# Sample Specification for Composite\r\n\r\n-> id = a2c6a219-d061-4d79-9865-c5f384f260fd\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7235006-06:00\r\n-> tags = \r\n\r\n[Composite]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> AddAndMultiply starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> AddAndMultiplyTable\r\n    [Rows]\r\n    |starting|operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n\r\n|> AddAndMultiplyThrow starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "e619d78a-5bf0-4757-a788-554e742ac535"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "e16d76f0-4999-43dc-8cad-c90f1bc88579"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "bebf8d6e-7b3c-4456-8fcf-dde5cc07d264"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "87d1829b-5342-475a-b7ce-4dd68329b7c9"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "d70a493e-53f6-4ba2-8459-2742600f7d43"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "59276e8a-c5f8-4dab-acb5-6c9b1796ae1e"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "46a213fb-bb28-412b-8992-acbb2294eb3f"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "cf189ce2-22c2-4ac4-a857-59d72df2d577"
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
                              "id": "5dd469d8-221e-4872-ad09-9380dd88f112"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "63cb6e5a-981a-4ea1-9082-052e8d5dbf0a"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "2996df44-aaba-4fc9-9718-71eda1dde440"
                            }
                          ],
                          "activeCells": {},
                          "id": "0a808f40-2e90-4536-8bc0-ac51b8fc48d6"
                        }
                      ],
                      "id": "0dc48798-3467-4935-b4ac-65e44371165e"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "5df4005c-3c35-4af5-8ac9-bd053e072e18"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "8a5174b6-ca23-47f8-a213-fe125d03c8a7"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "95747d57-481d-4495-95a9-0b0808f255b9"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "d00e4d71-9645-437a-aa86-b06d5f5443ad"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "7660258e-cc75-467b-b3da-eb002714f8de"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "68ded947-80f7-427e-88cd-a8f3f7ece8d9"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "adb82b43-167c-4314-89fd-e2231a5f1073"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "482fb705-c8a8-4594-8d3f-6616b9f099a3"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "03678808-e812-4307-aa1f-b6240558bb2f"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "32003c0a-b786-43d3-a4e6-38908a793d9c"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "95f8ca79-a182-417d-833c-7d713ef379a1"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "d6889b8f-933b-45a4-8b6f-287e156b59c0"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "7abaebb5-86af-4de7-ba71-88af6b43b0a3"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "b796fcd3-46e1-4702-ba4b-3e3b24e6d264"
                    }
                  ],
                  "activeCells": {},
                  "id": "76c95f45-240d-4f9e-9f5c-bdd01f4d586d"
                }
              ],
              "id": "6159d58d-41fa-439c-9a0c-9845461a334b"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 9ccf9c2c-cd58-4282-8182-0d5cb205926d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7235006-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "f306ad47-0d1c-4a67-9435-260a32b4a57e"
              },
              {
                "type": "comment",
                "text": "## DoNotThrowAnExceptionOnTheNextEmbed",
                "id": "00adea06-db86-4670-be34-189a9efa6b70"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "02e2eb4f-28db-4c27-bea9-a7e8d3b37c6f"
              },
              {
                "type": "comment",
                "text": "## EmbeddedMath",
                "id": "191e0e49-87f2-4d83-98a2-a9794f4c51ed"
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
                        "id": "c62b6bda-eff7-4dfc-bdfb-b9a3c34032e2"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "5083619b-d15a-4134-80c1-c368114baf5c"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "542874de-3eba-44e5-91fe-f0d82e82b4cd"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "0a8507a4-d931-493b-bf28-a21e9057df31"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "9ecc83f0-52bf-4e46-b46e-86ad9d22858d"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "221e667c-4a5f-41f6-976f-fc8e5aa10c2f"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "eafd9dca-05cf-44d9-88dd-cc6fe8ed87d0"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "490ac625-5124-45df-b6b2-b487f9b6c020"
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
                                "id": "841a20bd-216c-40b5-b216-5eaa2ab521e3"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "e538d602-c108-4161-95cc-4be36d63c985"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "ab4c66e2-e724-4179-a703-7c75ea5c85e5"
                              }
                            ],
                            "activeCells": {},
                            "id": "07b8a26c-17f5-4c2c-aeeb-1819ef8d5a64"
                          }
                        ],
                        "id": "a6a67562-d180-4134-8f28-a5aeb2dadd58"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "4785718f-34b3-47b5-9978-798f879730fc"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "14066920-5e24-4c89-9211-6c716a02e532"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "8d4837c0-0625-43aa-9917-24c7f65b1566"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "db5f186f-a4f4-4505-bb61-6e5b6bfdfc48"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "feb45631-d7fd-45bd-8737-3d05afa6c34f"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "227d08bc-657b-423b-b949-987edd50ee38"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "47b6dffd-202f-49e4-af70-d222ff4c5c03"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "5370eb3c-68fd-4439-b451-77b562bcbc60"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "6a29844b-7efe-400e-9f18-cb11ece048c1"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "56f9ae2b-2058-4a72-b875-01001dce851e"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "8fe5d6cb-377f-42ed-90fa-bea17a4f127e"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "e2d40555-626f-42aa-b767-2dee195c2907"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "a98ef5d3-8648-42ca-8f2d-a6cd97057b33"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "cd3c8313-a586-4917-a44e-2abeeeb335df"
                      }
                    ],
                    "activeCells": {},
                    "id": "bf32c324-db10-42f7-ae40-ae1041179d4d"
                  }
                ],
                "id": "73f2362d-526d-4670-8dc1-fec84277ed0a"
              },
              {
                "type": "comment",
                "text": "## ThrowAnExceptionOnTheNextEmbed",
                "id": "0a715116-986c-40fe-aac3-43f02e52d1e6"
              },
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "a0c6d228-7a3b-452a-9835-7d33eb93d930"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "1475c608-f3d4-48c7-ab64-afb2d1583520"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "810758a5-d730-4758-ab01-bc1b28641350"
              }
            ],
            "activeCells": {},
            "id": "cb55f937-026a-4af1-b916-27ca1942338c"
          }
        ],
        "id": "49ab5b2e-6bc4-470b-a9aa-754298df1de4"
      },
      "sampleMarkdown": "# Sample Specification for Embedded\r\n\r\n-> id = 972b67ad-1cfe-4f43-a41d-01ed76362a4c\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7235006-06:00\r\n-> tags = \r\n\r\n[Embedded]\r\n|> DoNotThrowAnExceptionOnTheNextEmbed\r\n|> EmbeddedMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> ThrowAnExceptionOnTheNextEmbed\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "7ce58555-5988-47e8-a2a7-1a16698f2aba"
              }
            ],
            "activeCells": {},
            "id": "65165f14-ee08-4421-9ea3-b598f1b7c62a"
          }
        ],
        "id": "98043fc0-415d-460a-8987-7ca3b46b0185"
      },
      "sampleMarkdown": "# Sample Specification for Failure\r\n\r\n-> id = 5d1ebb64-0d35-4eaa-a70c-d2369ecac693\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7245007-06:00\r\n-> tags = \r\n\r\n[Failure]\r\n~~~\r\n",
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
                "id": "2b443563-564f-4b67-8f06-348b2c2cd847"
              },
              {
                "type": "comment",
                "text": "##",
                "id": "70a1a5e5-87ee-4163-81b5-b0ac58f2b380"
              },
              {
                "key": null,
                "cells": {},
                "collections": [],
                "id": "caa60332-4b5b-408b-bcbd-c406469e91cc"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c860d6bb-d2e4-451c-8bae-cac1d741f142"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9eb6871c-9df7-4cf1-96f6-08f2ffed9e4b"
              }
            ],
            "activeCells": {},
            "id": "39c6f105-8611-4acd-8e9c-bf2ceea1c207"
          }
        ],
        "id": "a969a7ff-4f07-4f98-8329-9bc28b9c63a7"
      },
      "sampleMarkdown": "# Sample Specification for GrammarError\r\n\r\n-> id = 16debd1c-2810-43ef-85e7-9c99ef46046b\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7245007-06:00\r\n-> tags = \r\n\r\n[GrammarError]\r\n|> \r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "e6b62b8f-3f45-402b-869c-b9517b7a5898"
              },
              {
                "type": "comment",
                "text": "## Add5",
                "id": "18d75591-3a63-4f7b-a7b0-31d9003524c3"
              },
              {
                "key": "Add5",
                "cells": {},
                "collections": [],
                "id": "484c6e3f-d10a-4f06-ac55-c5f7ca04173c"
              },
              {
                "type": "comment",
                "text": "## AddingTo5",
                "id": "35f2b49b-9248-4326-958f-af7c31e1b78b"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "1330209d-e18f-435f-8f03-2fa508fc6986"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "c734a3d0-b4b4-432c-aa23-036fae4b7f8e"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "bb8d7fb5-98db-4ef6-a0ab-1c3fe3ae4e66"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "7ed468b3-be74-46aa-b337-1a93d6fc5028"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "92d4b026-8886-46a7-90d3-c846e3fdfc7f"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "6848f37f-c400-41f1-b92a-5e2df70b0159"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "0c105ea4-5c24-4704-ae87-c1f20574b146"
              }
            ],
            "activeCells": {},
            "id": "c5aeef99-e9ac-4385-8df0-9189e7803f0b"
          }
        ],
        "id": "38e399e5-cef6-48e4-9280-604cbf1b64a6"
      },
      "sampleMarkdown": "# Sample Specification for CurriedMath\r\n\r\n-> id = d3961a80-f5a5-4397-b5ab-7599c7eb385d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7245007-06:00\r\n-> tags = \r\n\r\n[CurriedMath]\r\n|> Add5\r\n|> AddingTo5 y=y, returnValue=NULL\r\n|> StartWith starting=11\r\n|> TheValueShouldBe expected=expected\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "72431699-6b9e-406f-93ee-085ef79732c1"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "e8fd2644-281c-498d-9de7-e05ac437e9e4"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "d86a9881-0864-47a8-bb74-e323f28e4e06"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "60ac16b6-8b1c-4a62-823f-b1251b23def9"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "329ff5d9-b703-420f-a7f1-c24821d75344"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "85601e4b-f200-44f4-b943-1066ef68cc89"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "e265e4cf-cc58-4d5e-90b2-e0f0eaf49c4c"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "091709af-1436-4092-aefc-2140bd0aaee0"
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
                        "id": "ec001824-769e-4710-9241-5687ac239455"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "ad0e0f69-6975-4db5-86e9-fd571b799dff"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "1ad6586c-247e-4cf6-b62f-b620b1a9b493"
                      }
                    ],
                    "activeCells": {},
                    "id": "ada952a6-e4c2-425e-a7fe-5e79a1b50f88"
                  }
                ],
                "id": "27f20a04-5ca2-4f1a-ac46-c7bcd4b2af38"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "fd75af54-3242-47f4-a6df-c4df0971af3e"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "699e744b-3255-4406-a8c2-ff0f142b04d9"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "19b6f8b1-e0b9-487c-8a98-dbcb9b4bd8ad"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "e618337b-1c7a-444e-9d44-a8b00bc9ee80"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "6652354d-ac5a-4bd4-a5e1-035ce4b32079"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "d2a28673-b09f-4af5-9411-e29e5bedc946"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "17ade96c-5b13-4dbe-a610-eda1c79c454a"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "cda72f4f-4af3-440c-83fb-9fe26790c59b"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "573233ea-6b32-419b-bdb4-5be9b1d0dbf6"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "c9a4fe9e-b984-4248-8ed7-a3130d97e88c"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "7416aa8d-eb6d-44f3-b117-155742d36efb"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "46538498-1708-4581-a8ce-62efe53a0078"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "64ff0967-d28d-4cf6-9372-c8e962fc3d16"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "8b09a721-3c36-445a-94cb-4fda1cd3b1a8"
              }
            ],
            "activeCells": {},
            "id": "5e63769e-e849-42e5-837a-ea4a0b68a1a1"
          }
        ],
        "id": "d4dd8d02-476b-442c-9d65-3381ccc32859"
      },
      "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 40a5b3ba-3f5b-4840-834f-a76d36593043\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7245007-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "c495ce9c-8e1f-4641-b3d4-a89ee2dbcaa4"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "fb86fda7-0c93-410b-9156-14620d1c8ed9"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "b206f404-e301-4a29-866e-00c462a7dfb8"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "29f95ce9-47b3-4453-a946-520b78e1eb72"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "ca8220b4-e7c5-4c4f-a2e3-28ad512b7df4"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "e09bd4a0-39e7-4223-9d5e-2094d5651c0f"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "e4b7b1de-4923-4002-a9f1-06fb313d4a62"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "aafabd27-763d-4d4c-8399-161b1331a91a"
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
                              "id": "bd37c87f-0de2-4b45-8e9f-ff5ce27a07c7"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "76ac1bdd-9c9e-4a76-bc74-6426ecdbb43c"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "4eb9d957-f608-4236-81cd-1d05c6a685f2"
                            }
                          ],
                          "activeCells": {},
                          "id": "0df73b31-be32-485d-84bf-6662d33adc9c"
                        }
                      ],
                      "id": "df61999d-79da-4b55-84b4-3f40fd352b4b"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "24023861-212b-4388-a4ce-b81969ce86a1"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "4da9e850-bbe7-40cc-b200-78c362a824e6"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "82c444ff-6005-41aa-be9d-39afa8cdd651"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "30c925b3-837a-4f60-8dd7-902dcc6dfe95"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "3d2eba55-6f31-41d0-8f7a-14a6b15219da"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "9bd50dbf-d06d-44a4-b188-a46eec6c6d79"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "d8c225aa-937f-426f-be50-e04e83b82019"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "8bec7df7-fe30-4776-a649-823a3128cc21"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "d2f09989-4e32-40b8-b2e7-d68a51fe4d32"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "7eb36020-c613-4879-bb2b-818726179122"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "d48e6a03-7829-4766-bb3f-c45d955d7216"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "7bd83878-41f6-44bb-bd60-5924d53921c7"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "76e0d365-7fc1-462b-b51a-7232db75e29a"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "d3c9cbb2-a2b5-4003-a4c6-dcfe0aeef411"
                    }
                  ],
                  "activeCells": {},
                  "id": "72f9a809-5896-4f36-b43c-0779efc3ccf2"
                }
              ],
              "id": "02dd32bd-5735-4529-96c7-b625c31060c7"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 7b5e032b-24b2-4f4f-97db-d1793dfc1b0d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7255008-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "a4de2664-0103-4b58-918e-85a10958ee53"
              },
              {
                "type": "comment",
                "text": "## DoSomeMath",
                "id": "4e1b6241-24bd-4963-b775-5ea1d62b8107"
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
                        "id": "a9642370-0a6c-444f-bcc1-04d41589e18c"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "d7a3c78e-e485-461b-b727-4b47f9dada6f"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "c18b9c42-40fe-4aa7-b452-0b4956b1b4b4"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "ffd647bc-190a-4ac7-878c-74d2458c93aa"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "d5f76897-47cb-46fe-a53a-805a50bb86f2"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "64fa6f82-79da-4f45-82e8-51987a879449"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "98d6833c-4272-4d27-8fe9-7ac9295bac60"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "4c1ed8b5-9743-43d6-ab8f-6c724238f56e"
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
                                "id": "795cb181-e270-49da-acac-e9642300c0b7"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "12d16ad7-78f6-4be6-adcf-acb8976852f6"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "fb83b05d-27af-43c4-907e-511e16783947"
                              }
                            ],
                            "activeCells": {},
                            "id": "64aea75a-5f3f-4555-be57-35bd49a26105"
                          }
                        ],
                        "id": "69f359f8-d384-49ed-90a0-b07c3d8891fb"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "52cd0409-fc50-4942-bbca-116bc8b75e50"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "1256229b-4181-4271-bd14-7a41cd290288"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "4f5d4bae-6e80-4d10-8a22-130563b9898a"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "c57feea9-fbec-44be-b1dd-6fe2ca367e09"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "a10cbcb1-c2fe-4286-9af2-1c6c0112c490"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "ac840162-25bf-4310-a336-c5a57a107fc9"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "93478480-cbd0-433a-a89e-293b51ece9ec"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "9342f6a9-e0d6-486b-9842-bdff8a6da51d"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "7a9d8168-b12c-4c9f-bbc7-1abde361215a"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "f9b1491d-c8cc-49e3-9b08-a006e3387ab0"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "8534bd73-0710-407d-b7be-e8eff855b45d"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "3cbc13b2-71ed-4a77-83a8-a5932f447677"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "9f6865b4-efc1-4213-b997-0bab07a6a9c5"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "d1764eea-26d1-4ec3-98e5-a661fec840fd"
                      }
                    ],
                    "activeCells": {},
                    "id": "26f9d20a-b742-4698-ae7d-b48fc54a44a1"
                  }
                ],
                "id": "8717a1a1-be4d-4bf9-a797-9bb8c4ee961e"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "064a408d-3bb1-4ca6-96df-6d1afdf1ff9a"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9e3eaddf-47f1-4768-844d-273bf98a87c1"
              }
            ],
            "activeCells": {},
            "id": "f31e5d5c-3a1f-49be-8599-1d60a664b94d"
          }
        ],
        "id": "4fee5129-6ace-4a53-ac3b-49fa58470c5c"
      },
      "sampleMarkdown": "# Sample Specification for DoSomeMath\r\n\r\n-> id = efa8f55c-1b3a-4768-97d9-ad0f5ec51af8\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7255008-06:00\r\n-> tags = \r\n\r\n[DoSomeMath]\r\n|> DoSomeMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "c4fbb4d3-4843-40c8-bb2b-27a6b3d94478"
              },
              {
                "type": "comment",
                "text": "## TicketIsGiven",
                "id": "ebcbe247-d7b6-43c4-a54c-842ac991a5fa"
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
                        "id": "44c87d44-128c-4d16-b431-f028a5a8c019"
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
                        "id": "11e75f52-f167-45c8-bdd3-fa181bcd15e7"
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
                        "id": "9b35aadd-e902-40c1-945a-3e8b54d865cf"
                      }
                    ],
                    "activeCells": {},
                    "id": "262c0466-8f1a-43b8-99c6-bfdcfc2d9609"
                  }
                ],
                "id": "b60d9523-f8f7-42cb-95a7-be740a4f6a0a"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f6875bb1-f82e-4307-8dcd-123c8b4b1d07"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "562390b6-9950-4735-8bdb-0fca3adad7b3"
              }
            ],
            "activeCells": {},
            "id": "e1afcc09-a948-41bb-b0ab-beb56157db00"
          }
        ],
        "id": "308d24d0-1bcd-495e-8690-d6a31570fd49"
      },
      "sampleMarkdown": "# Sample Specification for ParkingExpiry\r\n\r\n-> id = 7b4a3c75-802a-470f-8e18-f38790fa8e15\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7255008-06:00\r\n-> tags = \r\n\r\n[ParkingExpiry]\r\n|> TicketIsGiven\r\n    [table]\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "a2873ec4-4b37-4c75-9136-eb52c4c70e0d"
              },
              {
                "type": "comment",
                "text": "## PositionIs",
                "id": "647306a6-230d-49ba-8f22-3a50668c15f5"
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
                        "id": "b4a488e8-8b2d-479c-9e13-c953ae4cfc03"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "82008531-1e3c-44dd-814d-3c5e56d3ad82"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "171fefe5-bd26-442c-b7e6-5b710f6736d3"
                      }
                    ],
                    "activeCells": {},
                    "id": "149899bc-ac28-48a0-956c-c0b2b79afae7"
                  }
                ],
                "id": "56d34718-0893-432b-ba08-6abd9be89fba"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "7d43a291-0d07-4669-932c-af5f2435cf8f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "6ab0aa06-bd3a-4b90-9bd4-e1e163f0fb95"
              }
            ],
            "activeCells": {},
            "id": "7daa16d5-495d-44c0-a21a-af775b14d554"
          }
        ],
        "id": "7de52653-cadb-4351-9a63-00634e69e0dc"
      },
      "sampleMarkdown": "# Sample Specification for Player\r\n\r\n-> id = e5acc9b3-831d-4fab-a0f9-7fada1c1c578\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7255008-06:00\r\n-> tags = \r\n\r\n[Player]\r\n|> PositionIs\r\n    [table]\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "5251e63a-4142-4e4f-bfe8-9c9dfa02bc71"
              },
              {
                "type": "comment",
                "text": "## FirstAndLastName",
                "id": "3d064320-b7e3-48f4-a381-fe1843b0b17a"
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
                        "id": "5d72ac5d-2b8b-4ce4-a6ef-1964dbc984e4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "217973c9-4645-4fed-9547-786b28ce64d7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "5d98847a-b931-4a0e-a0af-645bc5c7e1be"
                      }
                    ],
                    "activeCells": {},
                    "id": "101e1162-1f53-4b8e-bcc2-6ed0f49b41bc"
                  }
                ],
                "id": "4144b47b-2906-4b29-83bc-389d65cc8e4c"
              },
              {
                "type": "comment",
                "text": "## names",
                "id": "e96d9d94-a5a9-418a-9fa9-8266a8326c89"
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
                        "id": "0851564e-0786-4799-b3fc-cf738d1c32c7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "79b2aeea-eb7a-4c6c-9e3f-725f4036e674"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "f3a2abd7-e88e-4681-80e5-7e0bc084eb10"
                      }
                    ],
                    "activeCells": {},
                    "id": "261a2aea-a82e-4fa2-9a15-5f5599a2d900"
                  }
                ],
                "id": "8ef2121a-4f00-4003-92e4-ed76292fdff2"
              },
              {
                "type": "comment",
                "text": "## TheEnumOptionIs",
                "id": "7ada60cb-fe11-473e-9ee5-d7d846d04226"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "SecondOption",
                  "selectedOption": "selectedOption"
                },
                "collections": [],
                "id": "ea6373dc-1ccb-4f16-80a9-04965d055ce2"
              },
              {
                "type": "comment",
                "text": "## TheNameIs",
                "id": "7f8fa832-ba11-4784-ad2d-0768d6094462"
              },
              {
                "key": "TheNameIs",
                "cells": {
                  "first": "first",
                  "last": "last",
                  "fullname": "fullname"
                },
                "collections": [],
                "id": "26715e1a-5f09-4c12-81c9-5bac9f65a8ef"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "d7eaccda-4f8a-43d4-aefa-4c5a7bfdffbd"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "7032c7f5-9e83-4efa-84f4-1e01b7f16141"
              }
            ],
            "activeCells": {},
            "id": "b8319646-054e-40ae-87e4-af1addf3669e"
          }
        ],
        "id": "c4822f7f-9485-43f6-a1fc-d2b2f688b836"
      },
      "sampleMarkdown": "# Sample Specification for SelectionList\r\n\r\n-> id = a973d727-4dbc-4c5e-8577-fb1d7b8fcd4d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7265009-06:00\r\n-> tags = \r\n\r\n[SelectionList]\r\n|> FirstAndLastName\r\n    [table]\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n\r\n|> names\r\n    [table]\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n\r\n|> TheEnumOptionIs option=SecondOption, selectedOption=selectedOption\r\n|> TheNameIs first=first, last=last, fullname=fullname\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "305d8894-51c5-4eb7-9d4b-a5639398bee1"
              },
              {
                "type": "comment",
                "text": "## A",
                "id": "c17bff55-1c1d-4345-87af-cdeb63dd230c"
              },
              {
                "key": "A",
                "cells": {},
                "collections": [],
                "id": "44ff2efb-3803-4036-8411-deb7e2ff8667"
              },
              {
                "type": "comment",
                "text": "## B",
                "id": "6fda8b7a-9c63-4720-8232-4099d6d258b2"
              },
              {
                "key": "B",
                "cells": {},
                "collections": [],
                "id": "a076cdb6-2315-4bd4-a384-0814f33706e7"
              },
              {
                "type": "comment",
                "text": "## C",
                "id": "fe87a749-9e04-4f98-9069-2988e7a3a10a"
              },
              {
                "key": "C",
                "cells": {},
                "collections": [],
                "id": "c454d9a7-3182-438c-a998-d29dd3b118f5"
              },
              {
                "type": "comment",
                "text": "## D",
                "id": "883cd5fe-43fa-4a26-9b25-d1e198715ad0"
              },
              {
                "key": "D",
                "cells": {},
                "collections": [],
                "id": "ed65b0f1-ac62-4138-b626-8dfae33d7f0b"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c406d7f8-5380-42a9-b953-3aef07fca7cb"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "5a5ae6d7-7864-4005-b9f5-24c784c9788a"
              }
            ],
            "activeCells": {},
            "id": "f7a8f237-5998-441a-8e1a-fef0fde24dc7"
          }
        ],
        "id": "f236f47c-a6f7-4d43-9bf8-114951262339"
      },
      "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 4e4b3451-946d-43c3-ba8a-c845053e6e68\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7265009-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "2731daef-60c9-4d89-a9ff-9ed05f763f10"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "b83da18c-ca13-42ad-b677-fdeb08c417c9"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "115680a5-d6e4-49f3-9a42-2ec6c99545ac"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "fab8b2f5-b12c-4296-a163-e2bdd6ec1a2f"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "bb370652-1f3a-46df-b999-e669c876bdbe"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "71d90e51-a1b6-43eb-893c-fefe8d32f07b"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "407d54ce-0531-4fc8-a2b4-6cb980461da5"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "534a0db4-b4f1-49fb-a793-48bb94af15eb"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "0c62f474-86af-4cfd-87ac-b2e62d15577f"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "d7ee0c22-5c05-413c-a958-e1cb4a14a358"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "ebb0cf83-f625-467b-b0e2-4ad17ab64bb5"
                    }
                  ],
                  "activeCells": {},
                  "id": "c24cc16a-75df-4e4d-9358-9681812d030b"
                }
              ],
              "id": "747fabaf-e9f9-4ba6-abd2-d66dd37ab4f2"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 5fd8ade8-5bbf-4d0a-a137-524f61aa3a92\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7265009-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "319e25c7-d36b-48bb-819f-a561d6393181"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "a351a98a-1523-4c88-98b9-150b288900f0"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "8675ab21-f37c-45f1-9c9d-99097dfd8670"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "2c874ddb-abf8-4412-923c-9eb8b01855c3"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "42a76e5b-f460-4939-999a-9995d65ba32b"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "058aa5ab-2621-4802-b3df-5b20ac099a58"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "22b57b13-af80-4dd3-a159-86f8fb087a4f"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "67c4e990-4d8c-4ec8-9380-21e292e0439b"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "1e0cc099-35af-41a7-b5b9-30d22a2e64ef"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "d49a51fb-bbc6-4be1-90ab-dc9d336b5d92"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "717f55a0-e627-4032-a025-90f284027c0f"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "8d90d878-7706-4a3f-9acd-9fc91751cade"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "392b6ebb-0c49-441c-a61f-06405b76e4a8"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "0311a0f6-6894-4c44-b986-f5768ef8aab7"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "9eedb834-0851-404c-aede-2e150ece0dd5"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "d2368333-ed1a-4b3e-8b59-b340444d7fe9"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "9bb95f5b-09b9-4d7c-a51d-12b5260db345"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "6cc0a46a-d247-4ba3-af50-0c5694808636"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "c07a047c-78a6-4cae-bf0d-0a89354f82a5"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "fcf6c072-4ca4-40a6-9bce-42b46e7d36af"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "19a396ed-f9f9-4490-8171-082971b83c6b"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "3bcf3b12-3965-465a-acea-7d060d20174a"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "0228b23f-b975-47bc-993d-0bd539e5d26e"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "f98785a6-3d0f-4726-9b7e-b1efbf2ad44d"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "70420da6-6c2d-4040-9b47-d94bd3a1f2a8"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "1ff812c0-ab12-4541-8d66-118b1ec110a6"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "0d5e405e-bde9-4ffb-8c6b-234d1467da01"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "1313ffc0-5fd9-416f-8f97-39ecbdb0788a"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "a8e918cd-c4a1-4f91-befd-54b2d08844ce"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "25ed20fb-eccc-47f9-bc62-0c2e07b06919"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "fb417f6c-c38f-4350-b0e0-93897010ec11"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "1a3cde3c-f9ff-4f6c-a233-a8b1f756a6ec"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "e68f30a1-b531-4181-8456-73fb90a6e4d3"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "39ee1c9b-bdb9-4c2c-ae21-dfc7faad253c"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "9689e4e8-3fd3-49bc-a13d-773e3304dc6c"
                    }
                  ],
                  "activeCells": {},
                  "id": "fe2d3dd8-3fff-49f9-94cb-eeb3e4b12c07"
                }
              ],
              "id": "7715d5c7-edba-4968-91fb-1dc3f8d1ef0b"
            },
            "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 15e36e87-1dbf-4b55-b729-c10dd6cb34ff\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7265009-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                      "id": "6cccab3b-92ac-4b19-af17-c2ebde35c4b7"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "9b521251-a2dd-469a-99c3-40d149e2e4ba"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "66b0b817-7c9a-442b-8c4d-227ec0c24194"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "dc894d8a-2a72-48b1-8d9e-c5ce8f611bb5"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "59c5a7d3-0ff1-4aee-b058-4d1046599b44"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "9cd24c9b-0fd8-4fac-924d-67552889f6d2"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "fff13eac-ac60-41bc-ae66-306ded5e0424"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "5439f23b-e10c-48f4-aab5-705b5f0f6873"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "b57b2a8c-7005-4e9e-9a6a-085be0efa493"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "72e407f8-8aea-4446-a4bb-ff6f8bf2c256"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "f48ea2cb-ce6c-4e40-b67d-489759bced5b"
                    }
                  ],
                  "activeCells": {},
                  "id": "87c7690a-18a8-4cdf-85e2-3175f9ac75ae"
                }
              ],
              "id": "07755d59-f4a9-4263-a4fa-93f6d7fbb7db"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 36c041c8-5043-43e1-a5b7-116edba83ba7\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7265009-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "f80905e9-86a7-4010-8ed8-3231a8b62ed1"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "48780663-8ef8-434e-8b79-b630044656e5"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "f63bfdc1-5838-46ea-bce2-d5fbc4bdf9a9"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "ddfcef25-8124-4d8a-a339-e1a9b011c565"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "6a3f4134-82b3-4e68-9659-5135f8e30f43"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "772c7404-121f-4a36-b6dc-6cb135c92a5c"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "8e3a7100-cec4-4156-8366-92500186d8e7"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "a382007c-e5ec-4cdd-866c-1c7b96eac479"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "609d9414-bafb-48b5-8f63-b839a9048984"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "2bc7c498-d52b-4bc7-842e-9f4f35a3a184"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "d550dc24-3030-47a1-9654-ee5876a77829"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "816a64f5-bf08-4bfa-821f-165281bab7b5"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "387de32c-4c7e-4046-bd13-62012abbc492"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "4d088ad1-eae4-419e-9591-ff4456cf005e"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "b3bfb5e4-e050-4564-bc31-93c8ea067568"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "dbd7c981-e1d7-405a-85b2-2d426d44fbb1"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "1ea91bd6-6241-4e25-8c21-e80a77c95353"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "4a6a30ef-07b9-4bb1-b3de-8d84cf79479b"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "dc0ad90c-9d0a-4faf-a76c-ee8b963b5332"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "f33e37d3-5d1b-4dd0-bc87-e333f9055510"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "abbb8234-bf2e-4290-9900-e11d69f04594"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "3d3da60e-4ac9-4578-acca-a58029db3fc6"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "4cc447bb-2cb1-41b4-95b2-9212eb2e6513"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "01e15e7f-1dcc-499b-9668-8e05bb8e7dd6"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "ef1452cb-1029-42f3-b32a-ac5ceed1f730"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "895020e4-0af5-43c9-b0bb-7659ab74e135"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "b23fecb1-503b-49bd-b151-eed721fe6004"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "0b1f2e79-9f3d-4cba-aa68-deb31688175c"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "abd4df94-fd21-4635-8fc5-21806c6ea862"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "66196267-c45d-4dd3-bcae-6b78b6c08a89"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "0cf76105-488a-402c-a2b6-a4194836ce95"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "1e0997a1-fd87-40e1-8dcb-935133a707af"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "e00bea14-c6a2-4da3-b784-045e35c3be0d"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "35e8cb26-2013-45ca-ba34-5a6da08e21c5"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "6d10b98b-a97c-4e56-ba42-1b54bc47d772"
                    }
                  ],
                  "activeCells": {},
                  "id": "d847650a-c919-46ab-8fb5-297b16a137f2"
                }
              ],
              "id": "a384d159-de28-43c3-9c41-4c344368a8ec"
            },
            "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = 2aa526ad-f90a-433b-bf03-9fccb242cf48\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7275010-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "f7d9c6b5-9a6c-494f-a8fe-7b303cb58988"
              },
              {
                "type": "comment",
                "text": "## Inline",
                "id": "f6c6c664-409e-4e30-ad4e-f17e5dfae601"
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
                        "id": "44910c41-72b8-417a-ba85-07c2b46f1438"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "49dcad9a-8562-419f-9b8a-7dae92509915"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "183c32ab-e04c-499d-91c0-ad92a5526081"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "dcec6ed5-df29-4a77-a6bd-d1dbdfda2ee6"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "ee8e56aa-f42e-4953-8975-3319f978bbdc"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "2ad58993-a61d-4434-959f-af6404cca52e"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "88388dac-20f9-4b94-add6-1ebf462e3574"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "92fd4307-c961-49d7-b993-6249981b10dc"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "fc52ab99-c86d-41de-a862-436d1dbab1d1"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "b0cd2a72-410e-4920-90dc-6c163d63b639"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "834d2d53-adb9-45f6-95a2-0a9b13176482"
                      }
                    ],
                    "activeCells": {},
                    "id": "beea85b6-6577-49c2-9fa0-9e374909ec30"
                  }
                ],
                "id": "463f9760-3cab-45b6-9081-bb677ef86147"
              },
              {
                "type": "comment",
                "text": "## MandatorySelection",
                "id": "44c1b698-7366-434b-ae99-7a1c77bec696"
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
                        "id": "0d59207b-57b7-4ec0-8d8a-44aca7bb8247"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "ce753a79-4f96-4ae4-9149-9917a9dd3aee"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "ef70e3d3-99a9-4d7e-b476-3b82254ddc07"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "de5d34fb-5989-409f-ae1a-d0463cd92fb9"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "31898b71-48f1-4202-9da0-6a62a5637abe"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "67add79f-83bc-42e7-957a-edb0dd7c17c8"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "c5b0b1a5-b900-4bc3-9bf5-757a7edc7fec"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "49aa8299-75e9-4a64-9115-b138e1d2ac4f"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "9171a0b2-b167-4108-adee-b1bf11f5a12a"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "c3de38bc-04fd-4ff1-8f86-268b4c94901e"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "f6290406-82b1-48c1-b0b4-b0f61bfbe03a"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "98f4782b-da71-4585-828c-bf7a135cf89e"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "0e54bcc7-6dd4-42db-9555-7a05843532c8"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "63c29a07-5597-40cb-93cd-d89decb225eb"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "0fcd42ae-15ef-471d-9c47-70ac15f03079"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "9267057f-a39c-402b-afd1-c34de56cf8c8"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "cca9970d-0143-4958-b8a0-97972674181a"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "d80ea911-9e44-4670-846b-02224f8070f5"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "696dc022-ec38-446d-8828-c93139e8d6fa"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "0c0e078e-975c-4a10-849b-f793efef9edd"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "ac935703-cb66-47cb-9dc8-187ab796b9cb"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "9ef2f5a6-9dbc-418f-967f-ceff7e40730d"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "dae7bc48-16c0-4e40-8ded-d50b3c0fbba5"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "d7c40bae-d97f-4b44-a165-7e2b3a9dc507"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "ea8e2d07-6044-4c2f-9348-b3fc08a35499"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "575e77b5-d5bb-4a48-9aaa-935fa2342d0f"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "9ffbc890-4148-423d-89ab-999b3c0832bc"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "758bc235-fa60-4dfa-92f2-cd16e5a18017"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "0c994dc2-fca9-42ba-b4c0-a48db7731570"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "7f0bcdf9-3e4d-4397-a973-0c5c0fd12ce7"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "4d659c39-34f9-411a-9a7b-14694d8c71d0"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "a4c13e41-9014-416f-8a13-f7f615585958"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "00f2c883-4bf3-42d9-8a4b-8ebe38c20a46"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "c87b075a-6d60-4eda-929a-a6d1f2389359"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "f37c810a-9492-4082-be01-f7bf85108c64"
                      }
                    ],
                    "activeCells": {},
                    "id": "7cfb2183-ed9c-4a16-8be5-418807fedc7e"
                  }
                ],
                "id": "db3e6a29-8b9d-4c12-bcdd-a1fcc7cf8d84"
              },
              {
                "type": "comment",
                "text": "## Simple",
                "id": "3e928cfd-33bf-4790-808d-a23d70fdbd62"
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
                        "id": "35253d44-c6c7-4280-a115-523df8c3dbdd"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "28327743-6a2a-4214-a21e-cc71fbba914e"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "fe6cce3c-965a-4270-a0ec-2c9cbe87ebac"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "b52e14fa-d93a-46e8-b360-8ab1a59cf352"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "66a2a901-6a9c-4b6e-8d41-7917074612d4"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "e9718045-a94a-4224-85a9-5c2cfe6e40f0"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "b998be9b-9684-44b9-b7de-4fcce26d695d"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "bfcb686a-b72a-48ba-8aab-305c8a9aeee7"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "47c878ac-73c6-4f95-9de4-ad293686f351"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "687334d1-c078-4b12-88fd-a3ec08919802"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "45db2a2b-5d05-4032-84b2-f15dbc15eb1f"
                      }
                    ],
                    "activeCells": {},
                    "id": "f9429c96-1539-4a5b-89a2-b61f5602abec"
                  }
                ],
                "id": "616d588d-1e8b-4feb-9170-66ceafb7a887"
              },
              {
                "type": "comment",
                "text": "## Single",
                "id": "b151ba4b-8fee-4be3-ae50-1700aa8e0903"
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
                        "id": "d8946e5e-0260-433b-91bf-681bb0ac3cf7"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "4c6d17a5-20db-4341-bdff-293ae4e163c7"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "5989addd-1241-4b3d-a642-e17b2438fa67"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "b892e8b1-d461-4601-a8ac-47e49c55fd0e"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "e9cb4dd9-e38c-4573-b842-1992673fefe3"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "7a1fa924-bcc6-4cb1-bb4b-a7db4bd65d64"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "228e444d-06ab-4909-8bb2-e7dd6b6239f4"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "73b10230-1d3e-4d55-b280-e98a8b5bf606"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "3d9fddc4-b10d-497b-aa51-f91604186c92"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "61e64aed-05b9-4c7f-afee-edb45e2f8436"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "84a37294-da91-4a6e-9e1b-e4d1105d38dd"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "3c7785c2-36d6-44b8-9634-dcedd8597c79"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "4505403e-ff9b-4534-a709-f90d08eef5d0"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "38e76ef3-d9ce-4e3a-85c7-8f1312ffa8b9"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "a12308c0-eb0b-4d16-a43d-4a377798c3ae"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "4ad4ece1-e190-436e-846f-65d82ab96b75"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "a247f8c9-4215-460d-b83d-2cd1f6553210"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "ba9e1da7-a1fd-4fcb-9a2a-73f140e366c7"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "e4e48109-90e6-4ccd-8955-3abf6d4ca558"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "9bf0e7d1-3675-487c-b627-319e77dbf654"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "56c6e3bd-88f9-4f8d-90f9-7800e2d4f20a"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "f85c0aeb-3ac9-49f2-a17f-e2633cd42df1"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "064cd729-e679-446c-975c-ee4d51e1d23c"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "9ad54894-0d5a-4b13-9d87-f51c7ca13466"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "c236792a-a21d-4251-b426-ff8f6fdcd8d4"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "086d15aa-6315-4992-97a6-2c313550d36b"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "2fb66c77-8c91-400d-8bdf-df8511d99c5d"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "01d1849c-b26b-43e8-87d2-c89d1aa1f2a0"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "7ad55993-3a81-425a-a896-f7e6f14c7fb9"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "15bc8e8c-7512-4aa2-af13-115f3981316f"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "9055b2a9-61e3-46b6-9dea-f1e97b51621b"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "9ac8c555-e3ed-4f83-9b1e-da44e2b678a1"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "aa64feae-9c7a-4e0a-a3b6-a9a2b747d818"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "9d178dce-dca9-469a-aa2f-7de9419ccc45"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "e459d950-bb18-45d7-87ff-bc78440aa8fd"
                      }
                    ],
                    "activeCells": {},
                    "id": "7286ae0e-b590-40c8-b0e7-8216d6610fbb"
                  }
                ],
                "id": "887b0f84-c928-4be3-ac0d-b760fc7d97dd"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "63156e76-78c1-46c9-8a2f-2faf2d4e350d"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "f724b937-0dde-4560-a5b0-2c8424a22206"
              }
            ],
            "activeCells": {},
            "id": "9948d877-430d-4bb8-83cc-57aa2ab27f1f"
          }
        ],
        "id": "81b44ddc-e860-405e-9e70-a01456e0b977"
      },
      "sampleMarkdown": "# Sample Specification for EmbeddedChoices\r\n\r\n-> id = f95e6aa2-0d9c-4af5-8730-cc6d7e91cb06\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7275010-06:00\r\n-> tags = \r\n\r\n[EmbeddedChoices]\r\n|> Inline\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> MandatorySelection\r\n    [MandatorySelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> Simple\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> Single\r\n    [SingleSelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "22d7f009-3811-4349-a54f-f4d86eaa88d0"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "2eecf556-4b15-4517-b299-061d737a91c8"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "0d71dbae-e0aa-44d6-9677-6e36b2f1a1f4"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "abebf806-d625-4231-beae-0dba7f764590"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "21015775-a27e-46c5-aa91-bf91d0d6fafe"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "da400b83-4e6b-421c-9d93-aa2eb57079bf"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "c8818f1c-2b06-4251-8ee8-01e9e12a2327"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "8cbb0c0d-0499-49e0-bd08-55a150bea696"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "98ba2e79-fd53-443b-acb3-b10d89a82a36"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "4f6c8b1e-4709-4a23-b260-8aa5c4d08fe7"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "c5b70a4c-8fae-4bd5-b996-3c6799e2e68f"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "f249de0f-64bf-4b50-b567-5032bcfddc6c"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "4ce4e268-c283-4d1e-b220-c60865fa85b2"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "63ef6e04-8ad9-4490-9a08-4c6cbb127dca"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "386a11ad-089a-457d-be02-622c2fb77d54"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "34d3d8e8-d0fe-4225-8b3a-79e9fb8e9029"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "e20d46e7-0afe-4e81-a7b2-d897e7002b75"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "3a1f5494-abb4-4717-af5f-3cb1bc2f05c0"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "18bfc454-bff0-48cd-9015-46da3a78990c"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "94c5fcd2-d8dc-4118-a9a9-91d16d0d69da"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "16bd87f5-ae8c-4697-9c23-deb9d21f1956"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "5b9d1bbe-2609-4d80-b48b-7772cb004306"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "318eede6-b397-4d4f-9dcb-a29fe4155f7e"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "c7017a5e-963e-4b86-92f3-1a8cb6fb23cd"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "fb5a2e82-0c37-487f-a56a-93c098ad6e07"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "13532bbb-2953-4387-b6af-80c46ba4bb8e"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "797538e8-e767-4be3-a483-9c475035face"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "60a890c0-e638-4125-b8e7-738f2c30a61a"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "fe30b49e-0532-460f-a9e6-ea9ee4ddb768"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "6be137bc-628f-4618-a4b4-894ef4354dbd"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "7cf56435-4eea-4ead-9053-48b805dd13bd"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "bd08fa37-70e1-4fee-b8d3-8ff312ff7727"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "e91b4068-f37d-4db3-b8c9-f24ec4ee008c"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "7e91fe66-2d68-4bcd-84c5-85d285d58a19"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "f6bf8664-f1dd-4a8a-b0a2-b19fdd0d59f8"
              }
            ],
            "activeCells": {},
            "id": "21fa7ab9-801d-4f1a-96e2-239e22a16c3d"
          }
        ],
        "id": "486828a0-974e-416c-ba1d-f5d3488a6dbe"
      },
      "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = d4d83357-f7eb-490d-bb4b-b31dedf7d37f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7285011-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "32cf0249-723a-421a-a9cf-1df693addfd6"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "1cbaee2f-ef9e-4210-aec8-2843e8407eb6"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "2265cb3f-0c93-4a71-9a98-870a4ff9acc7"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "d45d0dfd-ba8c-481c-9d1c-1576b88bed3c"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "d2cf10ab-1fa8-4ec5-9beb-a084bdbaf468"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "c3c8a039-ac3c-4d2b-9af0-b31c6c964078"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "82d62a8c-b985-4597-b4af-65d21b4ada7f"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "6c711fda-5943-4ae8-8e35-5cac02237902"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "1d887b0c-6836-4d9f-90f7-d8b58427e545"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "93bf830e-9dec-436a-b40f-b3ed53a9b810"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "6e39a599-93b6-4572-9880-dd4da7244280"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "1f6863aa-b53d-4a26-bc7a-55d73a75a478"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "fd35c89d-7573-43ef-9723-e60ede3ae4cf"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "d52c609e-9684-4d13-91e7-dd934072d3c8"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "26e6c050-d610-4d49-a270-4a5e56e2b50d"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "b05f947d-adfc-41e3-a756-1389737502fd"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "3330abb8-e8df-48c1-a413-d64d94aa4846"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "cb5ae6d4-9364-4860-b788-fdbfd5c6859a"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "9766d378-1c4b-441c-bcc5-a2eb349e61df"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "639a549e-63af-44d1-9081-ade733505b59"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "7a56ffe0-ae99-47d1-9b1f-d63d73712205"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "6fe2f380-7016-43e1-8f44-1c62c68d124b"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "ce9d84cc-2646-4f61-beab-a3f982a5fe70"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "d5b205ff-f72e-453e-ba9e-fa09fc78d003"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "4d93e193-39e7-4ce6-aeb1-048c35027665"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "b1a5fd38-df10-4349-a0d3-c54f542c3418"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "6928fab9-d749-457f-a1c7-37c4ced0f138"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "5f67f362-441c-48e3-93da-512ac174691b"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "4b44f4fc-cf54-4137-8ce4-f78e0eb6dd59"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "3880bca0-afa1-40f3-b66f-189514f2cfcf"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "f22d5e43-1995-4c60-b7c3-2c6876f2d2f6"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "0ce12ce7-0500-4d10-ab13-1b3b916f512f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "5eafe4ad-0dbb-4276-94a7-baadc68f6c7f"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "57c0eb6d-a18b-433e-8493-ec238750d3be"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "9d59aef5-7b43-41e4-bc88-83e682eef3a0"
              }
            ],
            "activeCells": {},
            "id": "01bee46c-2a26-41c0-a6c9-1abe1f093f08"
          }
        ],
        "id": "a238c859-b447-4da9-a900-07b0cd79b58b"
      },
      "sampleMarkdown": "# Sample Specification for OneOrMoreSelection\r\n\r\n-> id = 46ad986e-dac1-4f02-9346-54f3c20fe00b\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7285011-06:00\r\n-> tags = \r\n\r\n[OneOrMoreSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "889de7a5-010d-4b97-95a3-1b746f1c9c35"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "87c108f8-696a-415e-aa24-821bf5c77cbf"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "53d72785-a8a6-41c4-b4eb-aa2b253fc1bc"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "698b5c8c-81be-466d-9c62-5985ef3aac97"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "43c89b0c-edf3-48f3-80aa-095d62638458"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "4dad3caa-9639-4471-984f-727585979d7c"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "d190e2e5-37ed-4a3b-a962-c0a4ab32857c"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "abc07280-481c-469c-bd31-8ffe62314559"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "94651ef4-96cd-46b5-8ec7-17d284aae957"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "66b7596a-65cd-465b-a0da-34cd653a5cb4"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "dd5a0dca-df73-4907-8e07-62983273e825"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "ec351394-f3bf-423c-b082-1cdeaacae906"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "fc741eca-d71a-4b04-bd8d-52d4960dfaf0"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "c65eb1cc-fe0d-4cc9-be07-56dc05f7ae84"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "347371b3-c462-42db-8df4-a297dcb87a56"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "8ac6aebf-aec1-453b-a7d6-e193676c5eec"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "aca7a703-6376-4478-9223-de1201eb7352"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "5447ac50-b146-48ad-bd78-a8113dfba72e"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "f23edda8-9aa7-4e35-bb79-19152d8c1b14"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "67ed5e88-de39-495d-ac30-66df37b8cd6c"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "b42c2397-0c6b-4304-a679-4b0641c04f86"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "6129405c-a785-45c2-bf68-881149f3331b"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "f113029c-ee80-44b8-b61c-60fdbb755fdc"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "926c05e9-df0a-4cb3-8e80-d321e31f7239"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "5dde6fda-b75d-41cd-a52e-2c8469d48ff5"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "5c734d21-e9e5-4107-9057-cb001f1b75ae"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "e019e288-5ea7-479e-b9bf-7b5f8428ddc5"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "a90212c0-a5c7-4a15-a6d2-dac750606b47"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "1595481f-7360-45cd-bb23-c225f375e821"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "df5251fb-b60e-47f2-81ee-2597f1e4358b"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "96535872-c58b-4b12-b89b-8baf4cc21251"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "23b8cde4-e951-47e0-b300-f3bb2333a6cf"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "29cb0935-a82f-4320-ade9-87bef4c3a251"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "5314ede6-1f31-4342-96d9-a2a0f0f5d8e4"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "c2584d02-368b-4e87-98c6-7ee6066d6f1a"
              }
            ],
            "activeCells": {},
            "id": "d82c2ca9-2a2b-4614-81e6-3c09acb2ddf8"
          }
        ],
        "id": "0f101b1b-6ff0-4efc-9eb8-2cbe5b9d8a3e"
      },
      "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = 27841f18-7413-4731-8f4e-57b314498589\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7295012-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "ce7d8dc0-dd7d-4eee-b78c-5b12617018a1"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "f94bc8f0-c39c-4b83-a998-8aad027a3b80"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "6f9d8840-3872-4ed8-a5e5-3c230b09ba25"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "93e2e304-920d-44e4-8e41-0e7a8caf6243"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "28e33d90-c847-40ce-9a3c-37f320db495f"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "53a93814-d61e-4204-8f81-8580e72fb138"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "5e0b4ef4-6239-4f85-98f8-ea17e14ada95"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "e4cc2262-0afb-47d0-9050-2c4d33b73660"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "ef587332-4455-4430-9388-86cc35dc385f"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "8ee63aad-dee2-48c2-8ba3-558f2cccbd43"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "8c1d661f-2f98-4ad2-9f26-9c9fc5850b5b"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "bd33acfa-4b66-4702-bf15-66726254b1ec"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "970730c2-9d3d-4e92-ab46-d9472d730625"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "e4df39d4-73e1-4154-bb75-24933701ce3c"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "0ef57349-ffbc-4319-b241-743838e61240"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "68c62568-7b3b-4295-988f-5bd15bb775f0"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "41caa903-f26d-41d1-b667-a5c06901e0b7"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "eb4645d6-24f8-4632-9a2d-acab29d03f91"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "9a876fe7-a2c6-43a0-8e25-0c24348cb653"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "85ed6fee-47c7-4520-96df-2c52622e5bee"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "a9058160-898b-4de7-ad6e-2a426171a99d"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "bee6768f-3a93-417d-b99d-d800e7f20638"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "267fec9c-8cf6-4510-9d9c-f5e0fc3b9c4f"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "3cfe0aad-9370-4e9e-a9c8-54f467444856"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "eb06b980-d0b0-460b-9796-ab1bd21c748a"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "50852784-cbb9-412e-ac0e-13621ab7a142"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "df587c30-7bf4-47c2-99ed-f21341fe75b2"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "86f89d49-bf42-436f-bd06-5c55c1a0f852"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "6b15c543-3865-46b7-b8e0-d0981d043f43"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "c5eb08d6-8930-47ef-b5f8-bb6ec4799f65"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "912655fd-1535-4f3b-ada8-2aa8072fbd1d"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f9d1d8c9-7df2-4796-aa34-7b68d6552884"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "20453e4c-d73f-417b-a171-924b1ecaae5c"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "cb15bb50-403e-498d-8e15-2faeafc88208"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "4cdc3d05-ccc8-4e9a-9499-813e25303f6e"
              }
            ],
            "activeCells": {},
            "id": "cd05daa9-792b-4f95-bf50-1bfb84d916f1"
          }
        ],
        "id": "a5a3794e-1b24-4fa2-a1d2-2b0bcb2c4b13"
      },
      "sampleMarkdown": "# Sample Specification for Sentence\r\n\r\n-> id = 983c9ecf-960c-43f5-a1c0-b94f8a90a2f6\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7295012-06:00\r\n-> tags = \r\n\r\n[Sentence]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "f5029b52-0db8-4ca8-803c-1ef87ade1e4c"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "d1680eb5-1bb8-49c7-8d7f-b5b32f66eb96"
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
                        "id": "df06cd3e-2a5d-459b-8dc8-45a3018903a0"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "b204cfcc-3275-4999-b1e8-5292a3d12263"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "a4971163-011c-4174-815f-b80e55cc8bb1"
                      }
                    ],
                    "activeCells": {},
                    "id": "138956b3-5c9b-4489-a1d1-e1bcc52c5e5e"
                  }
                ],
                "id": "00d3365f-cc8b-4907-ad30-7c654e9a72fc"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "74d0ab86-545e-42d0-b785-461274449598"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "5339d324-6a92-40e7-b42b-1d1788208a99"
              }
            ],
            "activeCells": {},
            "id": "b1e7dd34-a4a0-4c24-9534-48e1a11d8798"
          }
        ],
        "id": "d20f734f-fb5d-4248-98fd-664c99cc1234"
      },
      "sampleMarkdown": "# Sample Specification for DataTable\r\n\r\n-> id = 929b026d-5c7e-4958-aec3-57b9c023bce2\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7295012-06:00\r\n-> tags = \r\n\r\n[DataTable]\r\n|> TheDataIs\r\n    [Rows]\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "082a3bc6-9f13-4aa3-926b-7649d595fd22"
              },
              {
                "type": "comment",
                "text": "## AddName",
                "id": "aa73f3e5-3342-4a15-af64-f66994103945"
              },
              {
                "key": "AddName",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "9d730aba-b1b5-43cd-b4fa-b0ece544d76c"
              },
              {
                "type": "comment",
                "text": "## InvoiceDetailsAre",
                "id": "4cf26e9b-8c31-42db-b11d-0e2da97b2868"
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
                        "id": "3fa0f4ff-cf50-47af-a494-9c35315506b4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "58fad84b-88d3-4c91-baa5-0ab39fb30109"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "2d7f7b7a-4c72-44a3-b1a7-aee2a10d7bf2"
                      }
                    ],
                    "activeCells": {},
                    "id": "2fc83875-1af1-4913-8687-70fa3dd36ed6"
                  }
                ],
                "id": "250c5f89-7495-4220-8918-9e36656f5a8a"
              },
              {
                "type": "comment",
                "text": "## OrderedDetailsAre",
                "id": "2f4ec2f0-4662-4bf6-aa66-3c1f98b2675c"
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
                        "id": "112a97b7-fbe5-42eb-b58c-6abc62c76db4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "fbb7ea36-b1fb-4ab9-a62e-17ae1cacae76"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "dcdc0267-b63c-4426-a7d1-51af1b35523c"
                      }
                    ],
                    "activeCells": {},
                    "id": "f15d807f-a54f-483a-b5f2-2d408ada54b1"
                  }
                ],
                "id": "8d65d5a8-960f-40d5-9c6f-63cb220e48d3"
              },
              {
                "type": "comment",
                "text": "## OrderedStringSet",
                "id": "b9623c1d-b7ec-4846-a3b9-9e683efa9bcd"
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
                        "id": "de0bb354-e0fa-4f14-a967-ff01a5c31043"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "28e34f51-572a-4196-86cb-18d532cd4727"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "075cf1c6-215a-4985-ae10-bf82d046b8ed"
                      }
                    ],
                    "activeCells": {},
                    "id": "4351c084-6520-493d-babf-c7e175be5210"
                  }
                ],
                "id": "79260af1-be8f-4fa6-a766-87ba84973639"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "5100e23b-ecc1-47ae-8dd4-cd71bb155b32"
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
                        "id": "3a411bee-556e-4c63-b695-9c1232736f1e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "ad041c16-985d-4642-9cc0-b69cad8dc851"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "418d8c81-e23e-408f-a14e-44adeef7ccc5"
                      }
                    ],
                    "activeCells": {},
                    "id": "cdc9c668-7f45-42f5-820e-f3d93cc38ca7"
                  }
                ],
                "id": "2db09fee-bd05-42a9-ae86-515a1a586694"
              },
              {
                "type": "comment",
                "text": "## ThrowsErrorOnDataFetch",
                "id": "7efe92c6-b3d1-4b2e-bf9e-779667bd805b"
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
                        "id": "cc4c5227-1362-4caa-b8c1-ffb203d1dd14"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "57179654-e98d-41f2-b1aa-de50e587845c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "e833c2e9-53ce-4f83-9316-22ad6c6e983d"
                      }
                    ],
                    "activeCells": {},
                    "id": "c68745d3-f69a-4c37-9fc6-c6d0dbab6ec9"
                  }
                ],
                "id": "e74e7795-3f5f-411f-9106-0bc3bf33fa77"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "41b88294-cf9b-47b3-8126-d267dfcdfc9f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "569e8b42-4340-434d-a27e-9920a4709658"
              },
              {
                "type": "comment",
                "text": "## UnorderedDetailsAre",
                "id": "d435843d-d72e-464e-b110-4afe0c6b182b"
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
                        "id": "eafaa4ed-dbf8-4b16-a5da-305aa929d7c2"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "a0ca1e7e-c5cf-4ab1-a437-e28e04a615ad"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "3d51ea81-6cd6-4971-b5df-3dd6603a5c8b"
                      }
                    ],
                    "activeCells": {},
                    "id": "241a9f94-1234-4c5b-9c97-cce003d12a8c"
                  }
                ],
                "id": "66ac3f57-3706-4ef6-a75c-a18c0d7f4940"
              },
              {
                "type": "comment",
                "text": "## UnorderedStringSet",
                "id": "fc8dc1a1-e6de-45ac-b32c-d88e1abaefe2"
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
                        "id": "36b2f0b0-a5c1-4463-a3a7-24d0be920005"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "f4b83b5f-0ac6-4e74-a0ba-8cb96fec77aa"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "9716219c-0eed-4def-9555-85c07e86d352"
                      }
                    ],
                    "activeCells": {},
                    "id": "57243ea7-c55e-408f-80e8-522e29683ad1"
                  }
                ],
                "id": "2f50380f-7a4e-40a3-8fc7-ed4583a9568c"
              }
            ],
            "activeCells": {},
            "id": "77758feb-8aa1-4d70-b795-b9eed802c791"
          }
        ],
        "id": "9831c946-b016-4740-b656-b7fa9b8a499c"
      },
      "sampleMarkdown": "# Sample Specification for Sets\r\n\r\n-> id = fe5456dd-b157-4558-9ecb-788bb78b3280\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7295012-06:00\r\n-> tags = \r\n\r\n[Sets]\r\n|> AddName name=name\r\n|> InvoiceDetailsAre\r\n    [Rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> OrderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n\r\n|> OrderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n|> TheDataIs\r\n    [name]\r\n    |name|\r\n    |name|\r\n    |name|\r\n    |name|\r\n\r\n|> ThrowsErrorOnDataFetch\r\n    [rows]\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n\r\n|> TODO message=message\r\n|> UnorderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> UnorderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n~~~\r\n",
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
                "id": "9089209a-ee17-4048-b6b6-67d00b4661bc"
              },
              {
                "type": "comment",
                "text": "## ReadText",
                "id": "483966de-d45f-4ca4-89ac-925b928cbad0"
              },
              {
                "key": "ReadText",
                "cells": {
                  "text": "text"
                },
                "collections": [],
                "id": "a423547c-fec3-45f9-bfc5-5193d137502a"
              },
              {
                "type": "comment",
                "text": "## Slow",
                "id": "f5c4f7bf-eaa5-4ae0-83de-7c7ef3c8453b"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "1cdd6a2f-3ab5-4157-9afd-7df4b15b6100"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "e5501235-3bda-4233-a650-28c3224c749a"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "3063a4f1-0198-4610-8f6a-a7527eeeaadf"
              }
            ],
            "activeCells": {},
            "id": "7dbb0eb5-06ad-4182-91c8-99b5f0b779f4"
          }
        ],
        "id": "bc647d2c-ee6d-4fd0-b6c1-214f774bdeee"
      },
      "sampleMarkdown": "# Sample Specification for SometimesSlow\r\n\r\n-> id = 4a497cdb-1ca5-4434-b1e0-f8bfc93cdf85\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7305013-06:00\r\n-> tags = \r\n\r\n[SometimesSlow]\r\n|> ReadText text=text\r\n|> Slow\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "a4d803e5-de1a-48ad-951c-f60baea4ce99"
              },
              {
                "type": "comment",
                "text": "## AfterThrowsError",
                "id": "5a6fa42b-3899-46cc-a201-01b4c66cd7a1"
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
                        "id": "3cd786de-8683-42e9-807b-8fd6360bf253"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "a50d0f88-9c1b-4dcd-885e-f4add399f850"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "880c979d-eb42-42c9-b16e-fb9f70ed9b28"
                      }
                    ],
                    "activeCells": {},
                    "id": "43282ade-6c4b-4249-9bb5-229bebda7702"
                  }
                ],
                "id": "6344b1a6-7737-4f66-b08e-79458fdfcdcd"
              },
              {
                "type": "comment",
                "text": "## BeforeThrowsError",
                "id": "988fef89-51c1-429a-927c-20bd6d1711bb"
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
                        "id": "53ec1821-f410-43dd-9263-8f50ec8e1799"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "f6e72089-1c78-44b7-a3fa-a2990f911922"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "38fc604e-4919-410a-af65-508fd824ea42"
                      }
                    ],
                    "activeCells": {},
                    "id": "269a642a-479d-459a-8900-bbded02a0411"
                  }
                ],
                "id": "36f705ba-7187-4c67-9d4e-caf11b773451"
              },
              {
                "type": "comment",
                "text": "## decisions",
                "id": "6ced3ca9-530c-43a3-b7f6-3fb02424d4ed"
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
                        "id": "50909f14-15fe-4ef1-9878-f1d706865d87"
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
                        "id": "e2fb4167-dd53-4992-86ba-5c5ea68217a8"
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
                        "id": "18ad1746-4ad6-425e-9d1c-8b7bd8398067"
                      }
                    ],
                    "activeCells": {},
                    "id": "1080c6aa-65ae-43a6-85e5-6a91f9495f2b"
                  }
                ],
                "id": "f78938c2-1341-4cf8-8599-4aa6cf714996"
              },
              {
                "type": "comment",
                "text": "## Divide",
                "id": "f69fe9c3-b762-4847-b98a-cc7565430fbb"
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
                        "id": "e8974a44-a394-4213-9ca1-186e4af700e4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "349f7a52-4cc4-4c54-80a1-e71b5a613bf0"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "f7cde142-9934-47ce-8a01-35c319a6b62a"
                      }
                    ],
                    "activeCells": {},
                    "id": "61578575-2108-445f-ab85-1cad58784cfc"
                  }
                ],
                "id": "fc611db9-4b4d-435a-aaa3-1ba1533ad51b"
              },
              {
                "type": "comment",
                "text": "## IsPositive",
                "id": "3b59eb36-0638-4949-bb74-ed6fcc7161a0"
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
                        "id": "4bc18f86-605b-4e9c-ae52-d6330bf4ab91"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "a6c98757-a4af-4204-807c-75c068605b5c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "6ff3d50c-9f45-49e2-9c86-f79e7c644c91"
                      }
                    ],
                    "activeCells": {},
                    "id": "cad1adcf-1f6f-4170-b785-574f02034243"
                  }
                ],
                "id": "61afc5bf-c67b-4115-9701-d2fd4cd275f4"
              },
              {
                "type": "comment",
                "text": "## Sum",
                "id": "6e8abe1d-ae34-4eb7-8571-9f98867101e7"
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
                        "id": "9e9ed879-f86e-400e-aa6c-6816876d48f5"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "d568abc6-cb6e-42ce-a7c1-5782b93f0d80"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "e717daf1-13c4-4aeb-b31a-7676b0c6623a"
                      }
                    ],
                    "activeCells": {},
                    "id": "1f137ce3-2ab1-4440-bcc4-099807d9f71c"
                  }
                ],
                "id": "0d2d73d5-c412-45d6-b082-9a268d2c0a37"
              },
              {
                "type": "comment",
                "text": "## SumInternal",
                "id": "d8a71f95-3780-4132-aa5d-0a585b04048d"
              },
              {
                "key": "SumInternal",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "018e85e0-134b-46a6-918d-ce180619ce4b"
              },
              {
                "type": "comment",
                "text": "## TableWithLotsOfOptions",
                "id": "3ed4c67c-4b84-4d90-ab25-1be2f6fe4bbe"
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
                        "id": "5ac49658-2d84-42c6-9a76-9948a7508012"
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
                        "id": "0f05bd0a-6a3e-46a7-b787-ce9e85dbba4c"
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
                        "id": "34ddb4cf-0505-489e-bee5-1578b497d234"
                      }
                    ],
                    "activeCells": {},
                    "id": "7e17a9f9-4537-4665-b225-c848e1c35b97"
                  }
                ],
                "id": "c5abae06-5884-4723-94d8-d3f5cf8d77ed"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "97cd1034-82a4-4045-a53b-dad819dd91eb"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "b8c36a9f-2046-42c0-a129-65c6858d938e"
              }
            ],
            "activeCells": {},
            "id": "8692fc72-7592-4db7-a313-61c68215f368"
          }
        ],
        "id": "cb78b902-e2a9-46a5-aeb5-d83d470baf60"
      },
      "sampleMarkdown": "# Sample Specification for Table\r\n\r\n-> id = 2efd3173-8c58-4199-8135-228324263a26\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-01-11T18:32:18.7345017-06:00\r\n-> tags = \r\n\r\n[Table]\r\n|> AfterThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> BeforeThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> decisions\r\n    [table]\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n\r\n|> Divide\r\n    [Rows]\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n\r\n|> IsPositive\r\n    [table]\r\n    |number|IsEven|\r\n    |number|true  |\r\n    |number|true  |\r\n    |number|true  |\r\n\r\n|> Sum\r\n    [sum]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> SumInternal x=x, y=y, sum=sum\r\n|> TableWithLotsOfOptions\r\n    [table]\r\n    |a|b|c|d|e|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    }
  ],
  "time": "1/11/2017 6:32 PM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}