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
            "id": "c1dad54e-2dc6-4472-8d81-0ded39e4628b",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "75de5a15-e19f-4212-898c-247fe1854834",
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
            "id": "d77602ea-fa86-400a-84f9-309c310317e4",
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
            "id": "dd104731-e0e0-4600-816d-690b17ff0416",
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
            "id": "5ad7f33c-f905-4f98-a981-1cc0d77a210e",
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
            "id": "4440643e-59a8-480b-9263-897261766d57",
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
            "id": "8008064a-7d41-47d8-ba15-d88d6c3e0fb0",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()",
            "cells": [],
            "id": "79b4a6cf-07cd-4289-a18d-5fe643ab6c78",
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
            "id": "c1dad54e-2dc6-4472-8d81-0ded39e4628b",
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
            "end": 701,
            "duration": 701,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 2,
            "end": 3,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:SetUp",
            "start": 687,
            "end": 689,
            "duration": 2,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 690,
            "end": 693,
            "duration": 3,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 693,
            "end": 695,
            "duration": 2,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 695,
            "end": 696,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 696,
            "end": 697,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 697,
            "end": 697,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 697,
            "end": 698,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 698,
            "end": 698,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 698,
            "end": 698,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 698,
            "end": 698,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 698,
            "end": 698,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 698,
            "end": 698,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 699,
            "end": 699,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 699,
            "end": 699,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 699,
            "end": 699,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 699,
            "end": 699,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 699,
            "end": 699,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          }
        ],
        "duration": 701,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">EmbeddedFixture.Setup sent this debug message\r\n</pre>",
            "title": "Debug Output",
            "count": 1,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.EmbeddedFixture.&lt;.ctor&gt;b__1_0(IEmbeddedSpecContext`1 c)\r\n   at StoryTeller.Grammars.EmbeddedSectionGrammar`1.&lt;&gt;c__DisplayClass13_0.&lt;Before&gt;b__0(ISpecContext x)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre><pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__28.MoveNext()\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "8:50 AM",
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
                "id": "75de5a15-e19f-4212-898c-247fe1854834"
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
                        "id": "d77602ea-fa86-400a-84f9-309c310317e4"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "5f50892e-6511-40ad-95c5-f621c601c98c"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "dd104731-e0e0-4600-816d-690b17ff0416"
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
                        "id": "5ad7f33c-f905-4f98-a981-1cc0d77a210e"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "4440643e-59a8-480b-9263-897261766d57"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "8008064a-7d41-47d8-ba15-d88d6c3e0fb0"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "79b4a6cf-07cd-4289-a18d-5fe643ab6c78"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "39b8fb5c-16c1-444c-a599-66360fa6cf18"
              }
            ],
            "activeCells": {},
            "id": "c1dad54e-2dc6-4472-8d81-0ded39e4628b"
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
            "id": "79f0a1fc-f718-43d3-a655-51f76c25e721",
            "spec": "general1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bafd7f2-a9e6-4c8d-8015-6e46dcad6174",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bafd7f2-a9e6-4c8d-8015-6e46dcad6174",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bafd7f2-a9e6-4c8d-8015-6e46dcad6174",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bafd7f2-a9e6-4c8d-8015-6e46dcad6174",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bafd7f2-a9e6-4c8d-8015-6e46dcad6174",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bafd7f2-a9e6-4c8d-8015-6e46dcad6174",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bafd7f2-a9e6-4c8d-8015-6e46dcad6174",
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
            "id": "085db4c9-2cc8-4807-903e-bd562fc11856",
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
            "id": "085db4c9-2cc8-4807-903e-bd562fc11856",
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
            "id": "085db4c9-2cc8-4807-903e-bd562fc11856",
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
            "id": "6b1cab33-7a20-492c-afda-dde60c5d1875",
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
            "id": "6b1cab33-7a20-492c-afda-dde60c5d1875",
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
            "id": "6b1cab33-7a20-492c-afda-dde60c5d1875",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "79f0a1fc-f718-43d3-a655-51f76c25e721",
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
            "duration": 4,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "CheckObject:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:0",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:1",
            "start": 0,
            "end": 1,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:2",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:3",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:4",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:5",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:6",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 2,
            "end": 3,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 3,
            "end": 3,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 3,
            "end": 3,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "CheckObject:TearDown",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "7bafd7f2-a9e6-4c8d-8015-6e46dcad6174"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "085db4c9-2cc8-4807-903e-bd562fc11856"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "6b1cab33-7a20-492c-afda-dde60c5d1875"
              }
            ],
            "activeCells": {},
            "id": "79f0a1fc-f718-43d3-a655-51f76c25e721"
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
            "id": "36db2a40-4315-4bfb-9891-f5fd5d1db85c",
            "spec": "SometimesSlow",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ac20f62d-0061-4031-94a4-28cc54d51d6d",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "36db2a40-4315-4bfb-9891-f5fd5d1db85c",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "SometimesSlow:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Slow",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "SometimesSlow:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "1a0b4f51-ab94-4fec-bdb8-2cafc0820309"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "ac20f62d-0061-4031-94a4-28cc54d51d6d"
              }
            ],
            "activeCells": {},
            "id": "36db2a40-4315-4bfb-9891-f5fd5d1db85c"
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
            "id": "96f95ba4-983f-426c-8162-565003efbe80",
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
            "id": "af9fa323-2f86-4a26-ad5e-1277579703f6",
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
            "id": "1185d1d2-5db0-441e-80c3-20dc37975c97",
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
            "id": "63cfcc20-2c4e-4e37-a0b1-2cd6016cddc9",
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
            "id": "cfde0b80-db81-47ec-b456-b69d6e07e29e",
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
            "id": "a55ff6be-fae7-44bd-9fcf-73ca85c3a8f5",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "96f95ba4-983f-426c-8162-565003efbe80",
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
            "duration": 3,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "SelectionList:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheNameIs",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "FirstAndLastName:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "FirstAndLastName:Row",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": null,
            "start": 1,
            "end": 2,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheEnumOptionIs",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "SelectionList:TearDown",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "af9fa323-2f86-4a26-ad5e-1277579703f6"
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
                        "id": "1185d1d2-5db0-441e-80c3-20dc37975c97"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "63cfcc20-2c4e-4e37-a0b1-2cd6016cddc9"
                      }
                    ],
                    "activeCells": {},
                    "id": "dfb23c13-4a0b-42ed-a339-1dc4005a100a"
                  }
                ],
                "id": "bfc3234e-7028-4e1a-a4d7-f39d843a6754"
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
                        "id": "cfde0b80-db81-47ec-b456-b69d6e07e29e"
                      }
                    ],
                    "activeCells": {},
                    "id": "bab3bb42-2289-4296-b740-924ad1a6cd1c"
                  }
                ],
                "id": "c0b331c7-cbb2-4b81-a677-0bb81670adc2"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "a55ff6be-fae7-44bd-9fcf-73ca85c3a8f5"
              }
            ],
            "activeCells": {},
            "id": "96f95ba4-983f-426c-8162-565003efbe80"
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
            "id": "4d2ee591-225f-459b-b18b-2eae22768660",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Service:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "90475483-75db-49ce-9c22-58c745b96f29"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "2c788f37-00b8-41c2-a372-5b74b3766646"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "ec72c32c-b4c0-4e46-87d5-4a55470e2573"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "095e078c-2336-4b5e-aa15-6ed1f1ff1f94"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "e132a8c1-a2b9-4483-abef-255c16196a68"
              }
            ],
            "activeCells": {},
            "id": "4d2ee591-225f-459b-b18b-2eae22768660"
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
            "id": "ed3c793f-76a5-4079-b2eb-0433df0a9ec3",
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
            "id": "06e4c198-527a-4a77-bf18-3451249721c9",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ed3c793f-76a5-4079-b2eb-0433df0a9ec3",
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
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Player:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "PositionIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Player:TearDown",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "b34b2d37-0299-42e5-aa99-7380d0158fd8"
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
                        "id": "06e4c198-527a-4a77-bf18-3451249721c9"
                      }
                    ],
                    "activeCells": {},
                    "id": "5c58aa8d-cd6e-45b0-855b-248abc583cc7"
                  }
                ],
                "id": "6c1e98ef-2f9d-48d6-aed4-273769c0c246"
              }
            ],
            "activeCells": {},
            "id": "ed3c793f-76a5-4079-b2eb-0433df0a9ec3"
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
            "id": "9fb45625-30c5-4727-9d85-be3c6dc46273",
            "spec": "general4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "08ce80ec-95e8-4a2a-aa1a-c882e048ecc4",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "bf08c0e5-0dbf-4be2-92b6-0c0c4b654915",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "8b39a259-d50c-4084-85d3-e9a64b6b4740",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9fb45625-30c5-4727-9d85-be3c6dc46273",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Missing",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Missing",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Missing",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "08ce80ec-95e8-4a2a-aa1a-c882e048ecc4"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "bf08c0e5-0dbf-4be2-92b6-0c0c4b654915"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "8b39a259-d50c-4084-85d3-e9a64b6b4740"
              }
            ],
            "activeCells": {},
            "id": "9fb45625-30c5-4727-9d85-be3c6dc46273"
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "FixtureThatDoesNotExist:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
            "id": "30f0735e-7ac5-4792-885b-cc728e174ea0",
            "spec": "paragraph1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4e10c9f5-9a0c-4c63-b41e-0ec19a774bc4",
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
            "id": "4e10c9f5-9a0c-4c63-b41e-0ec19a774bc4",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4e10c9f5-9a0c-4c63-b41e-0ec19a774bc4",
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
            "id": "4e10c9f5-9a0c-4c63-b41e-0ec19a774bc4",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4e10c9f5-9a0c-4c63-b41e-0ec19a774bc4",
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
            "id": "048c5ac1-c7cf-45c8-9ec9-b5917d1386e9",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "048c5ac1-c7cf-45c8-9ec9-b5917d1386e9",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "048c5ac1-c7cf-45c8-9ec9-b5917d1386e9",
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
            "id": "048c5ac1-c7cf-45c8-9ec9-b5917d1386e9",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "048c5ac1-c7cf-45c8-9ec9-b5917d1386e9",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "407ffbd6-4187-48ae-8875-ac2d5421b4d6",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "407ffbd6-4187-48ae-8875-ac2d5421b4d6",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "407ffbd6-4187-48ae-8875-ac2d5421b4d6",
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
            "id": "407ffbd6-4187-48ae-8875-ac2d5421b4d6",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "407ffbd6-4187-48ae-8875-ac2d5421b4d6",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d0db2934-03f6-4c64-8959-85232f5bba3f",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d0db2934-03f6-4c64-8959-85232f5bba3f",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d0db2934-03f6-4c64-8959-85232f5bba3f",
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
            "id": "d0db2934-03f6-4c64-8959-85232f5bba3f",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d0db2934-03f6-4c64-8959-85232f5bba3f",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "de136d7c-eca8-4fad-8b03-2025d4ecfa79",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "de136d7c-eca8-4fad-8b03-2025d4ecfa79",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "de136d7c-eca8-4fad-8b03-2025d4ecfa79",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<>c.<.ctor>b__0_3(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "de136d7c-eca8-4fad-8b03-2025d4ecfa79",
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
            "id": "de136d7c-eca8-4fad-8b03-2025d4ecfa79",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "30f0735e-7ac5-4792-885b-cc728e174ea0",
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
            "duration": 5,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Composite:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 1,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 3,
            "end": 3,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 4,
            "end": 4,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 5,
            "end": 5,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:3",
            "start": 5,
            "end": 5,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 5,
            "end": 5,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Composite:TearDown",
            "start": 5,
            "end": 5,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "4e10c9f5-9a0c-4c63-b41e-0ec19a774bc4"
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
                        "id": "048c5ac1-c7cf-45c8-9ec9-b5917d1386e9"
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
                        "id": "407ffbd6-4187-48ae-8875-ac2d5421b4d6"
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
                        "id": "d0db2934-03f6-4c64-8959-85232f5bba3f"
                      }
                    ],
                    "activeCells": {},
                    "id": "159084cc-aa56-4be7-b1fa-4616e6f64505"
                  }
                ],
                "id": "b1ba1208-319b-4b31-9b03-7e4ddd9e123d"
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
                "id": "de136d7c-eca8-4fad-8b03-2025d4ecfa79"
              }
            ],
            "activeCells": {},
            "id": "30f0735e-7ac5-4792-885b-cc728e174ea0"
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
            "id": "22de7889-68c9-4418-9ea4-bd8ff091ed65",
            "spec": "paragraph2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "aae0d0ed-cf5e-4b3b-8b09-8fbb6a0b87e6",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "aae0d0ed-cf5e-4b3b-8b09-8fbb6a0b87e6",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "aae0d0ed-cf5e-4b3b-8b09-8fbb6a0b87e6",
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
            "id": "aae0d0ed-cf5e-4b3b-8b09-8fbb6a0b87e6",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "aae0d0ed-cf5e-4b3b-8b09-8fbb6a0b87e6",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d925e233-55ff-44a7-9231-f8da60ca1106",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d925e233-55ff-44a7-9231-f8da60ca1106",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d925e233-55ff-44a7-9231-f8da60ca1106",
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
            "id": "d925e233-55ff-44a7-9231-f8da60ca1106",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d925e233-55ff-44a7-9231-f8da60ca1106",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "75888d36-7a56-442f-ad85-0a63eed99593",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "75888d36-7a56-442f-ad85-0a63eed99593",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "75888d36-7a56-442f-ad85-0a63eed99593",
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
            "id": "75888d36-7a56-442f-ad85-0a63eed99593",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "75888d36-7a56-442f-ad85-0a63eed99593",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f64a1a1-01a2-4be7-bdff-fa75bff9ebe9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f64a1a1-01a2-4be7-bdff-fa75bff9ebe9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f64a1a1-01a2-4be7-bdff-fa75bff9ebe9",
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
            "id": "4f64a1a1-01a2-4be7-bdff-fa75bff9ebe9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f64a1a1-01a2-4be7-bdff-fa75bff9ebe9",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "52b74a71-6056-4818-8526-f18f389322c4",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "52b74a71-6056-4818-8526-f18f389322c4",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "52b74a71-6056-4818-8526-f18f389322c4",
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
            "id": "52b74a71-6056-4818-8526-f18f389322c4",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "52b74a71-6056-4818-8526-f18f389322c4",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "22de7889-68c9-4418-9ea4-bd8ff091ed65",
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
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Composite:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWith",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Add",
            "start": 0,
            "end": 1,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiply:4",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Composite:TearDown",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "aae0d0ed-cf5e-4b3b-8b09-8fbb6a0b87e6"
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
                "id": "d925e233-55ff-44a7-9231-f8da60ca1106"
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
                        "id": "75888d36-7a56-442f-ad85-0a63eed99593"
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
                        "id": "4f64a1a1-01a2-4be7-bdff-fa75bff9ebe9"
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
                        "id": "52b74a71-6056-4818-8526-f18f389322c4"
                      }
                    ],
                    "activeCells": {},
                    "id": "b4f558a2-cea2-4209-b09b-f5c53ececde2"
                  }
                ],
                "id": "d6e9b956-653e-4301-bb89-8d29418e2236"
              }
            ],
            "activeCells": {},
            "id": "22de7889-68c9-4418-9ea4-bd8ff091ed65"
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
            "id": "8b694f27-d802-4fa4-acec-abac0656afed",
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
            "id": "ccc947cb-1278-4620-a211-5db22043f887",
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
            "id": "c62b45a1-fa34-4726-9b8b-98da8d8f0937",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8b694f27-d802-4fa4-acec-abac0656afed",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "ccc947cb-1278-4620-a211-5db22043f887"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "c62b45a1-fa34-4726-9b8b-98da8d8f0937"
              }
            ],
            "activeCells": {},
            "id": "8b694f27-d802-4fa4-acec-abac0656afed"
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
            "id": "ac652f20-3288-4b45-8f7e-373b156beaa0",
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
            "id": "ac652f20-3288-4b45-8f7e-373b156beaa0",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sentence:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisFactIsTrue",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisFactIsFalse",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisFactThrowsException",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sentence:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
            "id": "ac652f20-3288-4b45-8f7e-373b156beaa0"
          },
          {
            "type": "comment",
            "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
            "id": "00bf2f34-371e-4ac2-bfc5-03cab4305508"
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
            "id": "f19d3ae7-2ccf-4526-a8e3-12f24c455997",
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
            "id": "d5f5eecd-a2b8-4038-81ea-a7676a05e20c",
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
            "id": "d4680ce0-944f-468f-aa12-f873e2b34cd3",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f19d3ae7-2ccf-4526-a8e3-12f24c455997",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "CurriedMath:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "CurriedMath:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "d5f5eecd-a2b8-4038-81ea-a7676a05e20c"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "d4680ce0-944f-468f-aa12-f873e2b34cd3"
              }
            ],
            "activeCells": {},
            "id": "f19d3ae7-2ccf-4526-a8e3-12f24c455997"
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
            "id": "521663ce-1521-4956-b6ff-4b05de9ec513",
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
            "id": "619f68d8-b166-4bff-9d86-3966afaffc5c",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "48d65300-c22a-40cb-865a-5ac69b8f42b9",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8cde6764-cc9e-4f99-950e-456a9cb8a63b",
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
            "id": "d149d16e-eee0-4773-aff4-04f51cd2a0f7",
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
            "id": "521663ce-1521-4956-b6ff-4b05de9ec513",
            "spec": "sentence4",
            "position": "teardown",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6c1bbe9a-16cc-43cd-a7df-db743dc57406",
            "spec": "sentence4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6c1bbe9a-16cc-43cd-a7df-db743dc57406",
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
            "duration": 3,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sentence:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWithTheNumber",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "StartWithTheNumber",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyThenAdd",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Subtract",
            "start": 0,
            "end": 1,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheValueShouldBe",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheSumOf",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisLineIsAlwaysTrue",
            "start": 1,
            "end": 2,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisLineIsAlwaysFalse",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisLineAlwaysThrowsExceptions",
            "start": 2,
            "end": 3,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sentence:TearDown",
            "start": 3,
            "end": 3,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sentence:SetUp",
            "start": 3,
            "end": 3,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sentence:TearDown",
            "start": 3,
            "end": 3,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
            "html": "<pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; StoryTeller.StorytellerAssertionException: No go!\r\n   at StoryTeller.StoryTellerAssert.Fail(String message)\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.ThisLineAlwaysThrowsExceptions()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__28.MoveNext()\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "8:50 AM",
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
        "last-updated": "Friday, January 20, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Show a _syntax_ failure and link to [CNN](http://cnn.com)\r\n* First\r\n* Second\r\n* Third\r\n* Fourth\r\n* Fifth\r\n* Sixth",
                "id": "8d90eb91-f9b5-4509-926f-e98a761ddd89"
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
                "id": "4c272c05-e44c-4097-bf15-3f21f368bc1d"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "619f68d8-b166-4bff-9d86-3966afaffc5c"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "48d65300-c22a-40cb-865a-5ac69b8f42b9"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "8cde6764-cc9e-4f99-950e-456a9cb8a63b"
              },
              {
                "type": "comment",
                "text": "Correct assertion",
                "id": "75f39e52-4ff9-4289-b5f0-e5deee6ca291"
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
                "id": "f65adfa6-71d3-4000-8d7d-de10fd489f83"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "2",
                  "number2": "2",
                  "sum": "5"
                },
                "collections": [],
                "id": "d149d16e-eee0-4773-aff4-04f51cd2a0f7"
              },
              {
                "type": "comment",
                "text": "Line assertions",
                "id": "c242d2e6-079d-46c8-97b1-4ebd09548421"
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
            "id": "521663ce-1521-4956-b6ff-4b05de9ec513"
          },
          {
            "type": "comment",
            "text": "Comment\r\n\r\nAnother Comment",
            "id": "5911a710-2dca-4143-8a13-efd52dc454d2"
          },
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Show a syntax failure",
                "id": "92f18372-7c15-4012-a934-d68fbd2ac299"
              }
            ],
            "activeCells": {},
            "id": "6c1bbe9a-16cc-43cd-a7df-db743dc57406"
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
            "id": "0421a12d-a603-4102-98a7-ff98a676ab76",
            "spec": "set1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5c163cbe-4a53-4817-8fff-b7f908bb4bc0",
            "spec": "set1",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "84d7678e-040d-42fb-98d1-e3665fb275cb",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "84d7678e-040d-42fb-98d1-e3665fb275cb",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "84d7678e-040d-42fb-98d1-e3665fb275cb",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "84d7678e-040d-42fb-98d1-e3665fb275cb",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "84d7678e-040d-42fb-98d1-e3665fb275cb",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f2929b1a-12ba-4e0a-8a1b-e140980884e4",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f2929b1a-12ba-4e0a-8a1b-e140980884e4",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f2929b1a-12ba-4e0a-8a1b-e140980884e4",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f2929b1a-12ba-4e0a-8a1b-e140980884e4",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f2929b1a-12ba-4e0a-8a1b-e140980884e4",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2d22478f-c8bc-4003-909a-c445c54e98ff",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2d22478f-c8bc-4003-909a-c445c54e98ff",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2d22478f-c8bc-4003-909a-c445c54e98ff",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2d22478f-c8bc-4003-909a-c445c54e98ff",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2d22478f-c8bc-4003-909a-c445c54e98ff",
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
              "a81db7ba-860b-4f32-bf6f-b20298266d22",
              "9cacf529-b4ce-48c7-9767-83c30c662e5d"
            ],
            "missing": [],
            "extras": [
              {
                "Amount": "300.3",
                "Date": "2/9/2017 12:00:00 AM",
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
              "b6829fca-0363-4c26-8d72-911e8f84cae3",
              "9bdfc1ea-11ab-4966-b67e-18cdfa5fd786",
              "c98d2159-cf39-48fe-a842-9adc1f533617"
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
            "id": "0421a12d-a603-4102-98a7-ff98a676ab76",
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
            "end": 9,
            "duration": 9,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAreBefore",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 0,
            "end": 1,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 2,
            "end": 7,
            "duration": 5,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 8,
            "end": 8,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 8,
            "end": 9,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 9,
            "end": 9,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 9,
            "end": 0,
            "duration": -9,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 9,
            "end": 9,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          }
        ],
        "duration": 9,
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
        "time": "8:50 AM",
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
                        "id": "84d7678e-040d-42fb-98d1-e3665fb275cb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "f2929b1a-12ba-4e0a-8a1b-e140980884e4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "2d22478f-c8bc-4003-909a-c445c54e98ff"
                      }
                    ],
                    "activeCells": {},
                    "id": "5c163cbe-4a53-4817-8fff-b7f908bb4bc0"
                  }
                ],
                "id": "0c0b9eb3-476f-4e52-a402-e5e8e2b21a08"
              },
              {
                "type": "comment",
                "text": "Completely successful ordering",
                "id": "d8ee727a-1f6f-451b-b5d8-ce1d96206e88"
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
                "id": "62439441-1d3e-418e-be66-6c491a35a123"
              },
              {
                "type": "comment",
                "text": "Out of order",
                "id": "5eab8707-85c7-454e-b9b6-31767def0fb4"
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
                "id": "e0f1e6b3-19e1-4435-a201-166736a164e5"
              },
              {
                "type": "comment",
                "text": "Should have one exra",
                "id": "2521cbc1-73ae-46fb-93a4-cfc5377f1dbe"
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
                        "id": "a81db7ba-860b-4f32-bf6f-b20298266d22"
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
                        "id": "9cacf529-b4ce-48c7-9767-83c30c662e5d"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "f77db83b-5572-4328-a08e-03594ebeec17"
              },
              {
                "type": "comment",
                "text": "Should mark one expected result as missing",
                "id": "dbaa3b88-d43e-4b1b-a21a-17c84d58f1b4"
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
                        "id": "b6829fca-0363-4c26-8d72-911e8f84cae3"
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
                        "id": "9bdfc1ea-11ab-4966-b67e-18cdfa5fd786"
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
                        "id": "c98d2159-cf39-48fe-a842-9adc1f533617"
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
                "id": "04569b78-cb3e-4040-bb9a-cf220067fb9a"
              },
              {
                "type": "comment",
                "text": "One syntax error",
                "id": "b7fad872-bd6b-49e5-9476-f92b68db6985"
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
                        "id": "10785bce-b182-4798-bf3a-b3823b883973"
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
                        "id": "371f2555-84e4-4b15-a582-fcfeb09e5cd8"
                      }
                    ],
                    "activeCells": {},
                    "id": "8e651f51-5539-472a-95a4-9d8dd108a555"
                  }
                ],
                "id": "b72b8c33-5c2a-4a4e-8cf0-c1121012be43"
              }
            ],
            "activeCells": {},
            "id": "0421a12d-a603-4102-98a7-ff98a676ab76"
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
            "id": "a30d58ce-188d-468e-b7ff-a048c6bc0490",
            "spec": "set2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2fa21523-789f-4897-bd8a-9c8d24a29453",
            "spec": "set2",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "70d89371-658d-4e14-a4c9-2e17d2d8f715",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "05ba13b4-dc86-459b-8144-610e7a34c5c4",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "264fff6b-8aed-4241-94d4-73d395ecc25e",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2562f2f3-0c72-4c26-bce9-ca1bfef30cf5",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d1b34c8f-39fb-4379-b278-f901993f1c24",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "837153a9-b6fd-45c6-b5b7-a0b4770d704b",
              "bd44aedd-3148-4ea5-9f23-92c7d915aab3",
              "4e75f243-6a48-4e67-a7f2-1d6eaa07c3b6",
              "72b4b00e-cd0d-4858-9b91-b820332aa29c",
              "c80d0d43-8acd-4493-84c0-765b5d2162e7"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "5927b685-4c43-43af-81c4-9e3adcf133da",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "3929ad92-31f5-4b60-b62c-78c9b2701cae",
              "277348bf-8219-4eaa-885f-79e2b4b0a8c3",
              "bc78d16b-d95f-4e10-830b-3d8deff90cea",
              "48c46664-b493-434f-bdca-17cc4fccd31d",
              "a2d86ea9-655b-46f5-933d-526f8244e476"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "5acef150-89e4-48f1-bbb6-9f6a64bc6f11",
            "type": "set-verification-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a30d58ce-188d-468e-b7ff-a048c6bc0490",
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
            "duration": 2,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIsBefore",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 1,
            "end": 2,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                        "id": "70d89371-658d-4e14-a4c9-2e17d2d8f715"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "05ba13b4-dc86-459b-8144-610e7a34c5c4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "264fff6b-8aed-4241-94d4-73d395ecc25e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "2562f2f3-0c72-4c26-bce9-ca1bfef30cf5"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "d1b34c8f-39fb-4379-b278-f901993f1c24"
                      }
                    ],
                    "activeCells": {},
                    "id": "2fa21523-789f-4897-bd8a-9c8d24a29453"
                  }
                ],
                "id": "360eb430-8c9d-4845-995d-4bb576ae17d4"
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
                        "id": "837153a9-b6fd-45c6-b5b7-a0b4770d704b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "bd44aedd-3148-4ea5-9f23-92c7d915aab3"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "4e75f243-6a48-4e67-a7f2-1d6eaa07c3b6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "72b4b00e-cd0d-4858-9b91-b820332aa29c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "c80d0d43-8acd-4493-84c0-765b5d2162e7"
                      }
                    ],
                    "activeCells": {},
                    "id": "5927b685-4c43-43af-81c4-9e3adcf133da"
                  }
                ],
                "id": "d76942b1-c2f1-4c86-bed6-1703d69c8907"
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
                        "id": "3929ad92-31f5-4b60-b62c-78c9b2701cae"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "277348bf-8219-4eaa-885f-79e2b4b0a8c3"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "bc78d16b-d95f-4e10-830b-3d8deff90cea"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "48c46664-b493-434f-bdca-17cc4fccd31d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "a2d86ea9-655b-46f5-933d-526f8244e476"
                      }
                    ],
                    "activeCells": {},
                    "id": "5acef150-89e4-48f1-bbb6-9f6a64bc6f11"
                  }
                ],
                "id": "6e7251d6-bb38-4b12-ab19-93c6472456e1"
              }
            ],
            "activeCells": {},
            "id": "a30d58ce-188d-468e-b7ff-a048c6bc0490"
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
            "id": "6fd11723-5f2f-454b-b855-66684d7a477e",
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
            "id": "6fd11723-5f2f-454b-b855-66684d7a477e",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                        "id": "f0ea890d-12b7-4a33-9c23-91d061e9c127"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "fb3be413-950b-4563-8d73-50329883e7d6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "d64fe5dd-723e-4a4c-ba92-a7666838908f"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "9bce0d37-ad5c-4886-a1ff-078540709a7a"
              }
            ],
            "activeCells": {},
            "id": "6fd11723-5f2f-454b-b855-66684d7a477e"
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
            "id": "531d44e5-5166-444b-9795-a5f1338d628c",
            "spec": "set4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c331cf2a-8fa6-4edd-b615-eff67ac90307",
            "spec": "set4",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eb936594-0293-4665-ab26-6c4beafd6a81",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eb936594-0293-4665-ab26-6c4beafd6a81",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eb936594-0293-4665-ab26-6c4beafd6a81",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eb936594-0293-4665-ab26-6c4beafd6a81",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eb936594-0293-4665-ab26-6c4beafd6a81",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ee10e9e3-5545-4710-a2f1-d8aa89beac85",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ee10e9e3-5545-4710-a2f1-d8aa89beac85",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ee10e9e3-5545-4710-a2f1-d8aa89beac85",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ee10e9e3-5545-4710-a2f1-d8aa89beac85",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ee10e9e3-5545-4710-a2f1-d8aa89beac85",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "dea8a7c1-c2fa-45c2-83dd-cb575d4ec33a",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "dea8a7c1-c2fa-45c2-83dd-cb575d4ec33a",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "dea8a7c1-c2fa-45c2-83dd-cb575d4ec33a",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "dea8a7c1-c2fa-45c2-83dd-cb575d4ec33a",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "dea8a7c1-c2fa-45c2-83dd-cb575d4ec33a",
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
            "id": "0b8db606-6d6d-4d2c-ade8-633b97253da2",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "531d44e5-5166-444b-9795-a5f1338d628c",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAreBefore",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                        "id": "eb936594-0293-4665-ab26-6c4beafd6a81"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "ee10e9e3-5545-4710-a2f1-d8aa89beac85"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "dea8a7c1-c2fa-45c2-83dd-cb575d4ec33a"
                      }
                    ],
                    "activeCells": {},
                    "id": "c331cf2a-8fa6-4edd-b615-eff67ac90307"
                  }
                ],
                "id": "e149648c-4a8c-4a14-a49f-0c6d816904f6"
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
                        "id": "0b8db606-6d6d-4d2c-ade8-633b97253da2"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "ee46e7b8-997c-4ad7-ad2e-dbbb76607a18"
                      }
                    ],
                    "activeCells": {},
                    "id": "e076b31e-e28b-4f40-949f-82642f0731a8"
                  }
                ],
                "id": "f416d568-6cc7-4607-933b-47d0cb9faa86"
              }
            ],
            "activeCells": {},
            "id": "531d44e5-5166-444b-9795-a5f1338d628c"
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
            "id": "cf4786f9-a6b9-4e03-b2cf-6dd65ff54c61",
            "spec": "set5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e8425d4f-7c30-4974-b3c2-c604cff47c15",
            "spec": "set5",
            "position": "before",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e60dc1e7-52b7-44c3-8403-aacc74463d65",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "148bf06a-316d-4e34-aae4-8eb3d96831ba",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f74e8ca1-e7aa-4b68-acd9-c6649fac82bc",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "af7a87cd-35ff-49f1-b22f-b7099141ef90",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f8bcaae5-c7cf-437d-8060-e307dbd90d36",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "14b770b0-1bb3-4489-88fb-49e9e578f0a0",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6b77e55b-7ce3-43a9-bc1a-b9f973898458",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ab8b97fc-0f84-40fd-bace-337eaa983a94",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "cfc22a99-dc60-45e8-afd2-3c7966674238",
              "13e4095f-37bb-4efb-b30b-c6c370b2a9b2",
              "3800e17a-07ee-4ce4-809f-e40afcf56e86",
              "695925dc-0ace-4951-b725-9b1aa517583a"
            ],
            "missing": [
              "e3a6cd77-4fc7-428b-ac7c-10480744947d"
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
                "id": "107d185b-3625-4461-8454-ae4f1aa8a2bd"
              },
              {
                "actual": 4,
                "id": "ec36f05e-9382-498f-bdcc-97ebb009aacc"
              }
            ],
            "id": "344fbce6-209c-4cd6-965c-190687c5cb2a",
            "type": "set-verification-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cf4786f9-a6b9-4e03-b2cf-6dd65ff54c61",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIsBefore",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TheDataIs:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                        "id": "e60dc1e7-52b7-44c3-8403-aacc74463d65"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "148bf06a-316d-4e34-aae4-8eb3d96831ba"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "f74e8ca1-e7aa-4b68-acd9-c6649fac82bc"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "af7a87cd-35ff-49f1-b22f-b7099141ef90"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "f8bcaae5-c7cf-437d-8060-e307dbd90d36"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "14b770b0-1bb3-4489-88fb-49e9e578f0a0"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "6b77e55b-7ce3-43a9-bc1a-b9f973898458"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "ab8b97fc-0f84-40fd-bace-337eaa983a94"
                      }
                    ],
                    "activeCells": {},
                    "id": "e8425d4f-7c30-4974-b3c2-c604cff47c15"
                  }
                ],
                "id": "ad20cf28-8285-41af-8a86-34286b02adbb"
              },
              {
                "type": "comment",
                "text": "All data is correct, but in the wrong order",
                "id": "89233ca6-79d4-4ff5-a587-bc8f8675d6ac"
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
                        "id": "cfc22a99-dc60-45e8-afd2-3c7966674238"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "13e4095f-37bb-4efb-b30b-c6c370b2a9b2"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "3800e17a-07ee-4ce4-809f-e40afcf56e86"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "107d185b-3625-4461-8454-ae4f1aa8a2bd"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "ec36f05e-9382-498f-bdcc-97ebb009aacc"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "e3a6cd77-4fc7-428b-ac7c-10480744947d"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "695925dc-0ace-4951-b725-9b1aa517583a"
                      }
                    ],
                    "activeCells": {},
                    "id": "344fbce6-209c-4cd6-965c-190687c5cb2a"
                  }
                ],
                "id": "b5f823b5-ff57-4d67-b01f-c479b760a8af"
              }
            ],
            "activeCells": {},
            "id": "cf4786f9-a6b9-4e03-b2cf-6dd65ff54c61"
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
            "id": "6c57a06f-2958-4b03-ad1f-074e45b0095d",
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
            "id": "49ad05f1-0ba3-4031-8a1b-c40917d2e969",
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
            "id": "2ea09b18-b19e-4e79-9083-f80cc3b4702e",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6c57a06f-2958-4b03-ad1f-074e45b0095d",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "IsPositive:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "IsPositive:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                        "id": "49ad05f1-0ba3-4031-8a1b-c40917d2e969"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "2ea09b18-b19e-4e79-9083-f80cc3b4702e"
                      }
                    ],
                    "activeCells": {},
                    "id": "73814269-6db8-4b9d-98e4-ae55853691db"
                  }
                ],
                "id": "2fcd7d1f-76d3-46a2-8181-c705ab3d063a"
              }
            ],
            "activeCells": {},
            "id": "6c57a06f-2958-4b03-ad1f-074e45b0095d"
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
            "id": "49100167-07ca-48dc-ad68-b54f0dd0c3c5",
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
            "id": "989e0cfb-9f86-4d60-9cf8-0360b933cffb",
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
            "id": "e921886b-d50e-42b1-a6b7-d0ca1cf565f6",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "49100167-07ca-48dc-ad68-b54f0dd0c3c5",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": null,
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": null,
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                        "id": "00e6d119-a2c2-458c-b1b5-90fc2afdc1b0"
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
                        "id": "40074a8c-e7ea-4f04-a0fa-9e435bb7333d"
                      }
                    ],
                    "activeCells": {},
                    "id": "f77c7a5a-a36d-4b9e-9a8e-afaece5f5eb7"
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
                        "id": "989e0cfb-9f86-4d60-9cf8-0360b933cffb"
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
                        "id": "e921886b-d50e-42b1-a6b7-d0ca1cf565f6"
                      }
                    ],
                    "activeCells": {},
                    "id": "da1cf842-490d-4feb-a5fd-73720b4deaf0"
                  }
                ],
                "id": "1a081055-3d08-4db5-9758-bf56c7cd9468"
              }
            ],
            "activeCells": {},
            "id": "49100167-07ca-48dc-ad68-b54f0dd0c3c5"
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
            "id": "58942474-5e5f-43cc-8af1-e4ecc236906e",
            "spec": "table3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "98ea14c9-dd6d-417b-9ba8-6dd7947676eb",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b9a9bff8-0de7-4d8d-ac57-11ab2abe20f8",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0045fb7f-b940-43b6-bf10-32474a8fd962",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a91eb71a-479b-4f01-8680-663973372df3",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "58942474-5e5f-43cc-8af1-e4ecc236906e",
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
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TableWithLotsOfOptions:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TableWithLotsOfOptions:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TableWithLotsOfOptions:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "TableWithLotsOfOptions:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                        "id": "98ea14c9-dd6d-417b-9ba8-6dd7947676eb"
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
                        "id": "b9a9bff8-0de7-4d8d-ac57-11ab2abe20f8"
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
                        "id": "0045fb7f-b940-43b6-bf10-32474a8fd962"
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
                        "id": "a91eb71a-479b-4f01-8680-663973372df3"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "7069c7db-dfa6-4635-8392-59d255a63479"
                  }
                ],
                "id": "c87c5c62-a417-45d5-b65b-41b941c5ffd1"
              }
            ],
            "activeCells": {},
            "id": "58942474-5e5f-43cc-8af1-e4ecc236906e"
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
            "id": "19781e2e-dc1d-4ff1-b3d5-8b25bd74f9ac",
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
            "id": "6abb7058-74b0-4d02-9f88-4b6146907d95",
            "spec": "table4",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e5ea782a-ff7b-4073-921e-11d01543e29d",
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
            "id": "19781e2e-dc1d-4ff1-b3d5-8b25bd74f9ac",
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
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "BeforeThrowsErrorBefore",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "BeforeThrowsError:Row:0",
            "start": 0,
            "end": 1,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AfterThrowsError:Row:0",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "AfterThrowsError:After",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                        "id": "6abb7058-74b0-4d02-9f88-4b6146907d95"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "a537518a-346e-4bb8-8533-01c000222cf5"
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
                        "id": "e5ea782a-ff7b-4073-921e-11d01543e29d"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "1f20c97d-3efc-48af-a024-c6e3c7506837"
              }
            ],
            "activeCells": {},
            "id": "19781e2e-dc1d-4ff1-b3d5-8b25bd74f9ac"
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
            "id": "0253eab4-0f73-49c0-9e06-a498347f4126",
            "spec": "table5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0a4d5507-82d5-4f01-82ee-87f846f4cb9a",
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
            "id": "421cb48d-a998-4cd8-8a37-2090d57bdfc3",
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
            "id": "bc8d7e37-88e3-4e04-8352-f4b560484f5d",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0a4d5507-82d5-4f01-82ee-87f846f4cb9a",
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
            "id": "2f2deedf-6ce5-422c-934d-26637df305da",
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
            "id": "2f2deedf-6ce5-422c-934d-26637df305da",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2f2deedf-6ce5-422c-934d-26637df305da",
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
            "id": "2f2deedf-6ce5-422c-934d-26637df305da",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "34429086-1023-412c-ac3f-01d42d13872e",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "34429086-1023-412c-ac3f-01d42d13872e",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "34429086-1023-412c-ac3f-01d42d13872e",
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
            "id": "34429086-1023-412c-ac3f-01d42d13872e",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "errorDisplay": "text",
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0253eab4-0f73-49c0-9e06-a498347f4126",
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
            "duration": 3,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:SetUp",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "SumBefore",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Sum:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Sum:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Sum:Row",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Sum:After",
            "start": 0,
            "end": 0,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 1,
            "end": 1,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 1,
            "end": 2,
            "duration": 1,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:0",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:1",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:2",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
          },
          {
            "type": "Fixture",
            "subject": "Table:TearDown",
            "start": 2,
            "end": 2,
            "duration": 0,
            "perfFailure": false,
            "threshold": 0
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
        "time": "8:50 AM",
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
                "id": "0697d879-c26f-4aed-821d-d4bb48ee30fa"
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
                        "id": "421cb48d-a998-4cd8-8a37-2090d57bdfc3"
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
                        "id": "bc8d7e37-88e3-4e04-8352-f4b560484f5d"
                      }
                    ],
                    "activeCells": {},
                    "id": "0a4d5507-82d5-4f01-82ee-87f846f4cb9a"
                  }
                ],
                "id": "eb4aeca8-83cc-4466-b2e1-9a68401498a8"
              },
              {
                "type": "comment",
                "text": "Table fixture from script",
                "id": "fb4ab251-c751-4dd6-bd53-1cbe48337d63"
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
                        "id": "2f2deedf-6ce5-422c-934d-26637df305da"
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
                        "id": "34429086-1023-412c-ac3f-01d42d13872e"
                      }
                    ],
                    "activeCells": {},
                    "id": "54b51a0f-20e8-4d2f-898b-b80f6b327c5d"
                  }
                ],
                "id": "f3fefb14-f636-42ee-a596-97238a95bbf0"
              }
            ],
            "activeCells": {},
            "id": "0253eab4-0f73-49c0-9e06-a498347f4126"
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "CheckObject",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CheckObjectFixture",
                "id": "1e7be92c-8097-4923-89ea-420e716f259f"
              },
              {
                "type": "comment",
                "text": "## IfTheAddressIs",
                "id": "59cd2b76-d63c-4694-98cf-7e32ab628013"
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
                "id": "703cb372-ebf7-4b33-867a-aa98fd416a81"
              },
              {
                "type": "comment",
                "text": "## TheAddressShouldBe",
                "id": "7215443f-89bb-49ea-95d3-69b4dca347ba"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "Address1",
                  "Address2": "Address2",
                  "City": "City"
                },
                "collections": [],
                "id": "37ab7fe3-f39a-48d0-9b33-ba6560316532"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "459ef2b6-1ae3-4d0a-ac96-2c7ffb5d54fa"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "4c862bbc-fb21-4ea1-a26b-446bf625c552"
              }
            ],
            "activeCells": {},
            "id": "93649b8b-7c8e-403e-81eb-dc2565a74a98"
          }
        ],
        "id": "10535f02-a179-4cbf-82e1-af371e314851"
      },
      "sampleMarkdown": "# Sample Specification for CheckObject\r\n\r\n-> id = 7398fc30-242a-4518-9acd-5021d6ca734e\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4443072-06:00\r\n-> tags = \r\n\r\n[CheckObject]\r\n|> IfTheAddressIs Address1=Address1, Address2=Address2, City=City, StateOrProvince=StateOrProvince, Country=Country, PostalCode=PostalCode\r\n|> TheAddressShouldBe Address1=Address1, Address2=Address2, City=City\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Composite",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CompositeFixture",
                "id": "e1cf0942-303d-425d-b188-e5671a3c964d"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "450b7102-beb3-4df4-84f7-8c4c5a43d4e4"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "25f003fa-49a5-4ee0-af1a-087b832a7542"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "a69778fe-5514-4775-8130-d4c6640c13fe"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "d99f16b2-394f-4665-a548-95c7724ca47d"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiply",
                "id": "e2d122a0-9410-4d02-b4c2-a76a596c1d54"
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
                "id": "f6281b1f-b513-401b-9fd8-fa379030d4d6"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyTable",
                "id": "a7f45a38-3b64-4231-a461-81d0d3d91e04"
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
                        "id": "cd9cea4e-a4fb-40ca-8558-5b896dc35579"
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
                        "id": "3e41c10d-b7bf-430d-bcbf-8ea444bf3333"
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
                        "id": "b6523019-d343-4749-9f53-3f571bbf17f6"
                      }
                    ],
                    "activeCells": {},
                    "id": "c8c7dda0-df95-4ebd-a375-c0faac1661d4"
                  }
                ],
                "id": "7842f41b-ce47-49a6-8469-12af01b245bb"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyThrow",
                "id": "c53312a4-39b2-4474-a368-090f65bb84b1"
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
                "id": "b416da5e-3d27-4ba2-853b-f4a35a80cc56"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "a542a281-2b79-427e-93b0-dfd3211c422d"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "d6a8a064-e4ce-44ba-86df-b040e3c815fe"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "6ad85762-fa3a-4fe0-bfe9-c42093aa8e30"
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
                        "id": "e69b69a2-1abc-4cbb-8c90-1885e1fc669d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "1ab6a325-6225-4f54-8a5a-6acb6a10d816"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "f4288df9-735c-47f1-8f34-0a840a8a861d"
                      }
                    ],
                    "activeCells": {},
                    "id": "f7d1e6a2-1afa-416f-b717-f7d21b15259b"
                  }
                ],
                "id": "b95614c7-6755-4036-af5f-c36ada40606f"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "5574d4f8-d868-4d3e-affa-aa34649b9541"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "db7709d2-ccdb-4b70-9df3-09b17f4bb196"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "286f6c60-351d-42bb-bc71-eb04b9c82b72"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "8a1a43ce-41ed-4015-8990-571a5435655b"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "af45e868-a8b8-42b2-ba9d-abc08b2c8fd6"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "5fa73149-f284-4a1c-b843-50b4d6e93c79"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "39465a8a-a083-4487-8187-ecb67a935860"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "1383ee38-aa2e-4656-bced-2cee02e51581"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "b1d0cb45-5708-4ac4-b055-57068bf34026"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "90495005-3368-4a93-a7b6-1f1076d644ba"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "d70883cc-e27c-4e65-8f88-aabd21c00c27"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "b60422e0-9ce4-49c7-af93-403bf3d36afc"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "8f318b92-3ea4-4875-a0fb-5a7f71bb10de"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "7ec6a809-da34-488b-a257-a91331cfa075"
              }
            ],
            "activeCells": {},
            "id": "09272e32-8f11-4743-b703-439eaf4d41fa"
          }
        ],
        "id": "3417c33e-dd43-4d5d-9546-0a0f545d8800"
      },
      "sampleMarkdown": "# Sample Specification for Composite\r\n\r\n-> id = c4d11e2e-ccb7-4d2f-b51d-0aa17d345f9d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4503072-06:00\r\n-> tags = \r\n\r\n[Composite]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> AddAndMultiply starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> AddAndMultiplyTable\r\n    [Rows]\r\n    |starting|operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n\r\n|> AddAndMultiplyThrow starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, February 07, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "5a1b77c6-ce50-4e54-a3f5-501bb2119a6c"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "f295c798-dedd-4780-aae5-23799c408b82"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "bfc48c4a-9fec-4c97-93e0-ab65decdc07e"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "b11577a3-cd92-40da-bb15-daedd31331c5"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "ec4844d9-aa64-443f-9ba6-042ffd111b92"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "101c2725-5921-4765-a593-da10997610ed"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "c7cd6b69-4027-4494-a816-3cf9ffc3bf80"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "e4bd4948-2492-40cb-9d1f-7c4954e0cd29"
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
                              "id": "4a2cb8ef-4cf8-45a6-9623-a7b2a268b106"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "75dddc75-9de6-44bf-a9bd-e100d52c5839"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "c38fee1a-8faa-4907-a722-d864c89c27fb"
                            }
                          ],
                          "activeCells": {},
                          "id": "291a9334-8453-41f2-ad0a-08896bc0eef9"
                        }
                      ],
                      "id": "06902f04-65bd-4335-a87d-a2b84d921cfb"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "86540e56-bf00-40b7-9ddb-2cdb6d6e518c"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "31dfe7ea-8c60-4270-be70-41b521faa251"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "0292ecd4-8dec-40ba-8eb9-c2ffdc04f06f"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "5bc45360-8fe2-4b9e-8d1a-8bde8abdcabb"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "12153e57-c0a9-42a1-84b3-4e0738814c9a"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "a592e773-b45e-4b88-ab87-3b4500d9afe2"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "5a536fe7-5743-4ae6-b4f7-cca8bf876478"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "249022a8-372b-4a0b-ad22-99599f258db0"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "0113da2e-870f-4cc9-af0c-c7a2971108c4"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "5431dfe2-b624-4385-a632-359fa4eddc0c"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "49e2db86-c3e4-4448-a582-eac6bd32c205"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "a765db56-0965-49eb-8dc8-46a2c9a158d1"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "1776de50-40a8-47a7-825b-1af656ccfe41"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "61fe312d-e478-466e-b7b5-c69906a7ddd8"
                    }
                  ],
                  "activeCells": {},
                  "id": "047d2746-880a-453c-9956-79d70b54a300"
                }
              ],
              "id": "c22ba60e-8611-43b4-a336-8710a59b9313"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = a9204759-7b9a-416f-a9c9-b73a21eb4271\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4553072-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Embedded",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedFixture",
                "id": "781f4f52-be2a-490d-96f4-0da872950fef"
              },
              {
                "type": "comment",
                "text": "## DoNotThrowAnExceptionOnTheNextEmbed",
                "id": "13e0843c-7460-4d7e-ac03-00b516fe2fd6"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "f966bc2c-3c49-48f5-88cc-027f351cbf1a"
              },
              {
                "type": "comment",
                "text": "## EmbeddedMath",
                "id": "6d62fac6-ede3-49b4-9a76-7f56245efa8a"
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
                        "id": "00c295cc-df02-4d88-a734-7c796cd48d32"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "8bf9d7f8-1cc9-4a4c-84d4-e6de7066faca"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "9e11ea97-f1b6-4eee-80bf-c4b77c64d9ec"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "df13ba08-5f0c-47d8-b860-fd8424d9b411"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "35aa5153-004a-4a7d-b22c-f3ff38436680"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "634bd8e9-a32f-4652-be1c-e312fd728aba"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "3f699ffa-1454-45ba-9688-ab6546f784ba"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "b33e7b7a-ebf3-4f06-96d4-d392c480840a"
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
                                "id": "c085197b-2186-408a-a790-d3370d750f2b"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "be6212bd-7a59-41f9-a13c-43f0d9a65cd7"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "54f5ee46-6b7b-4914-b239-26eb79c9f2db"
                              }
                            ],
                            "activeCells": {},
                            "id": "715d3990-19d6-4ce7-ba82-f69f3b87cbe4"
                          }
                        ],
                        "id": "1b1a0707-7fe5-4694-8508-649fe0af347e"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "b82ec9c5-2e46-45ec-b510-00c6f383c6a4"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "c83e7d37-9438-45c2-842b-75d58cc86132"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "ab96e058-089c-497e-8ed6-fa77d0aed121"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "e677a84d-46d8-43a3-9198-d73c2b8b9799"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "ad8b5fb7-83b4-4b1b-a2b8-e5b3c5af3fb7"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "f6c9e0f2-95d6-4836-85b9-bf884f0bea7c"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "85fc0842-ed12-41e4-a468-3f090183e105"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "af503ea4-6753-4d22-a923-b37f1075675c"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "b1043efc-eed7-44cc-bb60-2ced984b6b3e"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "79b8e062-2ff6-4f54-8647-fa5e6b5b1992"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "00aacfe4-e920-4782-ba71-dcc052d6ee7f"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "eef9b778-cd9a-43c8-8a12-6ec5bb4349e1"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "4ae3b9d3-f9e2-4443-847d-08fc1cc33526"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "687a337c-2de5-454b-9cf4-25e434948736"
                      }
                    ],
                    "activeCells": {},
                    "id": "5319f45c-50e0-45a1-b8c6-166c59e0f51e"
                  }
                ],
                "id": "0a91d2cb-870d-4650-bcd5-ab24b2b4ad6e"
              },
              {
                "type": "comment",
                "text": "## ThrowAnExceptionOnTheNextEmbed",
                "id": "3d4199c7-e989-4a54-8e7b-a7a7504c6c75"
              },
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "f6199cee-4821-4687-9172-ca6358e89061"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "fbded223-9f69-443e-9f78-655cbfd6d075"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "8c81dfb8-b03f-4f05-bf91-727523d3e68a"
              }
            ],
            "activeCells": {},
            "id": "fbbcbacc-a5ec-49fa-b088-58439c8d486f"
          }
        ],
        "id": "1b40f7bb-7aaf-4c09-9555-634ad1f4e3a6"
      },
      "sampleMarkdown": "# Sample Specification for Embedded\r\n\r\n-> id = 3e2c492c-e3ed-485c-b344-d13e258c2f6b\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4583072-06:00\r\n-> tags = \r\n\r\n[Embedded]\r\n|> DoNotThrowAnExceptionOnTheNextEmbed\r\n|> EmbeddedMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> ThrowAnExceptionOnTheNextEmbed\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Failure",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.FailureFixture",
                "id": "0320bf27-a862-4856-9143-83e3c1dba3bc"
              }
            ],
            "activeCells": {},
            "id": "30f1698f-dcb4-496e-9095-bec2c26ed1ee"
          }
        ],
        "id": "ecbbec60-414a-483e-be37-9ee833c38536"
      },
      "sampleMarkdown": "# Sample Specification for Failure\r\n\r\n-> id = 6b64d59f-b6ad-4334-a7a3-9f5b18aac936\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4593072-06:00\r\n-> tags = \r\n\r\n[Failure]\r\n~~~\r\n",
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
          "MaximumRuntimeInMilliseconds": 0,
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "GrammarError",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.GrammarErrorFixture",
                "id": "b7d745ea-81f7-40a3-a9e9-5b5ba1f20bf8"
              },
              {
                "type": "comment",
                "text": "##",
                "id": "bbef273b-61f9-46e1-9e73-262d77035746"
              },
              {
                "key": null,
                "cells": {},
                "collections": [],
                "id": "69cc7481-cc58-48a1-9162-88ca0df8b6c0"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "3bd10c90-0fc9-46d9-b9b8-f683bfb01936"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "91b3ae41-e44d-4e3b-9a98-ab9f632af6c4"
              }
            ],
            "activeCells": {},
            "id": "f7a3f4f4-38e1-4476-af54-d65361ddd0b1"
          }
        ],
        "id": "5f87b3a1-2515-442b-a41a-e15917677979"
      },
      "sampleMarkdown": "# Sample Specification for GrammarError\r\n\r\n-> id = 4201bb76-f6fc-4cbc-b247-dd14c06cae06\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4613072-06:00\r\n-> tags = \r\n\r\n[GrammarError]\r\n|> \r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "CurriedMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CurriedMathFixture",
                "id": "5e87889a-9a0a-4538-bdff-aa4a10fb518d"
              },
              {
                "type": "comment",
                "text": "## Add5",
                "id": "eb52b33a-dd21-411f-a5b1-7d5322c2c454"
              },
              {
                "key": "Add5",
                "cells": {},
                "collections": [],
                "id": "f347cdc4-c121-4701-987c-1c3ad7ed6eb7"
              },
              {
                "type": "comment",
                "text": "## AddingTo5",
                "id": "5a41bc67-c62b-4201-b2ae-15cc7e2480bc"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "bdb7528f-8345-4bd1-9173-6dfe01fe2978"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "e6c36ec8-b406-463d-bb1f-50f0dcdb98b4"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "dec2c2af-811b-4954-89f3-1a42098f7015"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "6de408c9-4787-4678-bd98-abf1b63c634b"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "f2adbf56-d1f7-47ae-9259-33d2563cdb17"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f377a1b4-87aa-460d-8df6-20873385c4b0"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "c251d3c8-c6d2-4ea9-8ebc-ebb578d917a3"
              }
            ],
            "activeCells": {},
            "id": "7cd1374b-8201-4652-8c98-b27285e2d550"
          }
        ],
        "id": "4ffbf93f-cd9e-4753-8eae-e05313e03f91"
      },
      "sampleMarkdown": "# Sample Specification for CurriedMath\r\n\r\n-> id = 8e222b60-3f0b-4bf9-af7f-10d1b11fabbb\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4613072-06:00\r\n-> tags = \r\n\r\n[CurriedMath]\r\n|> Add5\r\n|> AddingTo5 y=y, returnValue=NULL\r\n|> StartWith starting=11\r\n|> TheValueShouldBe expected=expected\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Math",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                "id": "4c616cdd-036b-4765-a278-baebbf1ebed8"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "c347d5b3-613a-48db-8c96-c072e4cd1e2b"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "5cfa7166-7f8e-4b03-ac52-e58c272583ad"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "06d44123-fb67-4b27-9e7e-a0e531a38f71"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "fe858eb0-9760-4bf4-bb4f-302029a791d5"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "2ea3387f-f1c9-4e10-8ee1-981b27816170"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "bc9bab50-cbd4-48d6-851b-f41c3983a913"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "77b4bfaa-ccb6-4c01-b8c8-b17889a740e0"
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
                        "id": "22ab4a0e-a4de-4e29-a999-a7a1cf1b3825"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "137324a9-66f6-409f-86f8-cdc91bf0ea29"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "1f09ba63-f641-4e63-89f5-2a806549444d"
                      }
                    ],
                    "activeCells": {},
                    "id": "bb7abb81-cd99-490c-b2bf-ce0e1bbcfeab"
                  }
                ],
                "id": "99269e1a-5d08-4cba-9c03-595138829e80"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "63fb728f-2be2-4d31-857c-5af8caf9436d"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "a814131e-dcf3-434e-83e0-59d04d6371ae"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "148852e2-1bd6-414a-96af-822c1782cfb0"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "9d83b5ef-c7ba-42af-a565-cc9e2cc16964"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "6b2bf087-f98b-450f-bd23-01e19913b97e"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "26483031-895f-49a0-98b2-1b221522b386"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "1b806eb3-ba74-4250-878e-629e42272547"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "05fad0a6-73a5-41e6-8a8d-bd9c3ae1dbdc"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "81c72ed0-8789-4336-8a8a-51fe30a3f820"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "ebd355b8-d01e-4c92-888f-83be14214370"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "a2f3608c-61de-4182-b1b8-695ab6c5755f"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "707c90fa-37f6-4757-b86c-d54d9ee293d8"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "7a27e406-9690-45d0-886d-24d9299a0976"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "71f09fa7-b1ce-4884-b23d-d4b31477b302"
              }
            ],
            "activeCells": {},
            "id": "a7ccd0b8-ecc2-4c06-a691-1c55af9e3e26"
          }
        ],
        "id": "7338bbcb-b20c-4d33-b99e-4e6a74179442"
      },
      "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = da27e804-0005-4771-9981-3f7cf65c6e3d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4613072-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, February 07, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "8333f7cb-8b21-4d8d-bb1a-9fd94d0da609"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "bc3194a4-71b0-4ef3-bdb4-ed62a5737f2b"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "f13bf02c-382b-4fef-9aa9-535d5d20fac8"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "e987da3a-7079-40c3-a1eb-98d2c1b628d0"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "d81f74bc-4691-4934-9871-4bc66c1ac75f"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "aabf6241-9f77-4568-8ac3-7b7a47c9b4ec"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "fb15e87c-0574-4825-89cb-fa7ee0263787"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "031657c1-4bbf-4ada-886e-c11a0fb5e8a3"
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
                              "id": "4d0615b3-505c-4d0e-be46-b4003a04a1b7"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "25a00f90-daa3-4a74-8882-54ef3fca8ad8"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "f8f8cd42-982b-46ab-a95b-1f56b9ef80f8"
                            }
                          ],
                          "activeCells": {},
                          "id": "d7e26528-7321-4248-8d95-e1f1aff22043"
                        }
                      ],
                      "id": "bb93c633-e44e-4094-990d-4cfea226afe7"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "e420aa22-69e6-4f62-8553-2d0341419ab5"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "83d26418-3754-40d8-b7cc-ab1102ea4204"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "55899281-8946-48b9-994a-39d8cf450a24"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "796eda2b-1d83-4083-bb02-f6b9ed8dcc67"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "f12fda20-b62d-4145-a690-4a463934d00c"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "e7292375-276d-418f-bf9a-a1a74e0c3953"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "9a050a2a-3ecd-4ad0-83c5-2c67f4c08ca1"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "ea8a2dd3-0097-445d-930f-99bdfc22c63d"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "b5dccf20-0529-42e8-b87d-e50e1ed6f90b"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "c78962b2-d7e9-47af-b1ab-756102882372"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "6e76d2cc-68ef-42da-91eb-775e8e57cb05"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "91855c0a-2ada-4dce-9954-09b8c134bafe"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "6dffa228-0189-4801-846d-54e24979b771"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "03489f5c-aeca-4335-a951-afd8b8268a6d"
                    }
                  ],
                  "activeCells": {},
                  "id": "88d91377-db3c-4de5-a789-dcdc3c9c556f"
                }
              ],
              "id": "62fc3458-2135-4885-af96-c9216d030735"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = d6c287bf-a9f1-4f97-bd6a-f3bb09a08fe0\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4623072-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "DoSomeMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DoSomeMathFixture",
                "id": "19063fbf-13fe-4782-a748-8729d76b9b93"
              },
              {
                "type": "comment",
                "text": "## DoSomeMath",
                "id": "1f3eab42-ffbb-494a-84fb-d607d2c8df3e"
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
                        "id": "4a41ce15-30b7-4462-ba4f-06af60fefd91"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "c34a9505-b765-48bb-abba-31200322e315"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "0b5fc76a-43de-47c3-9098-a22e4d65fce1"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "83357e12-eace-44e3-a158-d176142429ce"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "66e7d327-2d6e-4e87-bfa5-702785baa4de"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "ab7161d8-4e3d-4249-8f44-c02ce8bbf4d0"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "85aa340d-7d52-459c-b4f9-6aedfc60b0a3"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "354dbc69-6113-4eb9-abf1-05fa9b3a6ef2"
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
                                "id": "9ed43385-fa0d-46ad-a416-bdfc73188269"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "da242a9a-a55f-49b2-9af2-debf6bdf534c"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "33da66f4-63c3-403f-92d0-879ec5c2985e"
                              }
                            ],
                            "activeCells": {},
                            "id": "20272f7d-d735-4f98-8bf1-cf4b2a352e74"
                          }
                        ],
                        "id": "2946ff91-7e79-4d59-946d-f3799e0135cf"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "b494b3c6-0f40-4e51-8beb-f4329635e9ca"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "1c5a3c99-342d-4b3b-b1ce-5edc13218038"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "0c38fc9f-7af5-41d5-af97-d391b6135eac"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "013c059c-934c-4010-9d1b-6e0cbdafa682"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "5073d29f-55e8-4a52-ba7b-5d5b2c69bd38"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "907cf77e-a222-4e57-94f4-cd5903ec4672"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "7467c403-99e2-4bf5-a42a-b4aa9d77fd57"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "0db108f8-fba0-4277-b799-0991e1303020"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "20376a8b-39df-4fa7-a773-6077e9477642"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "4039a324-e5a7-46c1-8d72-6d07f4fc933a"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "f8140253-3647-4ffc-9f31-b160f9996535"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "15cf3770-376a-4251-aa47-a4a3ffe7e68f"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "a17d45b1-abb0-4fad-afa7-799b8d34959c"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "bb15b08a-88d4-45a9-b9ce-35f3eec2504b"
                      }
                    ],
                    "activeCells": {},
                    "id": "c7f3b992-f100-47bb-a3a7-837aeb4931f8"
                  }
                ],
                "id": "3b2d1e20-095d-4793-9364-073af4e1ab65"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "a70e9af3-e2a6-4d63-8655-d966710a5fd2"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "92c8c6ed-6d35-4ef6-9bf0-40d50a8c9a08"
              }
            ],
            "activeCells": {},
            "id": "45357131-0272-45e1-a4fa-3a5d37882ee5"
          }
        ],
        "id": "5b54cd19-0106-46cb-a4fa-26d16fab5e2d"
      },
      "sampleMarkdown": "# Sample Specification for DoSomeMath\r\n\r\n-> id = c42ba710-56e4-4516-aec4-23d1c7afcd7f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4623072-06:00\r\n-> tags = \r\n\r\n[DoSomeMath]\r\n|> DoSomeMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "ParkingExpiry",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.ParkingExpiryFixture",
                "id": "5068f478-588d-4ce0-bcb1-50d1b87c760f"
              },
              {
                "type": "comment",
                "text": "## TicketIsGiven",
                "id": "455ae0ed-2531-4558-9d8d-73327441c74d"
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
                        "id": "c6e46f68-1787-4d68-a39f-3f1e50c2d1bd"
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
                        "id": "076da10d-b337-4285-8d39-52adcd6c6689"
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
                        "id": "3c6232eb-ee8f-45af-af7c-7bd62a9cd38b"
                      }
                    ],
                    "activeCells": {},
                    "id": "8dd60786-8448-40d6-a2c9-fcd9edf65063"
                  }
                ],
                "id": "f1814df3-2093-4392-9b1f-5c385655bdc2"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "af87674d-6e49-4551-a53d-307dddfe4321"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "44b6db0f-3d22-499f-b1bc-c7e2cb5d8360"
              }
            ],
            "activeCells": {},
            "id": "5799f751-93af-43de-9975-ee6637120b45"
          }
        ],
        "id": "d0c0404e-9db2-4992-8dcf-2e9233670066"
      },
      "sampleMarkdown": "# Sample Specification for ParkingExpiry\r\n\r\n-> id = 9d3be13a-42e6-42f9-a026-9e2e58aea6e2\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4633072-06:00\r\n-> tags = \r\n\r\n[ParkingExpiry]\r\n|> TicketIsGiven\r\n    [table]\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Player",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.PlayerFixture",
                "id": "7c7a6219-5b9b-45ef-932d-849b1f87ceab"
              },
              {
                "type": "comment",
                "text": "## PositionIs",
                "id": "bfb0e6eb-d3e0-47e9-8a10-769f424c7b05"
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
                        "id": "72b1e5b6-2adf-4b76-8504-6fc44be38008"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "d17ab681-8497-4b6c-ab3f-ba2cdcae18fd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "8d2b567d-3ef5-4106-b313-a0f7e5b08a7b"
                      }
                    ],
                    "activeCells": {},
                    "id": "af0203ad-ea27-4336-84e0-fc371b7f8af0"
                  }
                ],
                "id": "32ac9a0f-bcdf-42e4-9a41-d3fd4d99fd0e"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "4333332f-bcce-499a-9b22-22bc82eb4f0e"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "caeec7f8-1123-4e10-a6e0-e6f06888b77f"
              }
            ],
            "activeCells": {},
            "id": "d77e05b8-d588-4f33-898e-9d5610fc7734"
          }
        ],
        "id": "df0ec808-87f2-45f2-841b-86b717248bb1"
      },
      "sampleMarkdown": "# Sample Specification for Player\r\n\r\n-> id = 396a5da6-179e-4d2d-a617-e0f0a5c1e5f2\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4633072-06:00\r\n-> tags = \r\n\r\n[Player]\r\n|> PositionIs\r\n    [table]\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "SelectionList",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SelectionListFixture",
                "id": "15b928cb-3cb7-43b1-aa21-23236be5bcf1"
              },
              {
                "type": "comment",
                "text": "## FirstAndLastName",
                "id": "db7526c3-56c4-46b8-9ac2-f442f78ea756"
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
                        "id": "11d265f3-bedb-4041-bc6d-f79745b8c016"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "bb5f544a-6e18-4d2e-8f70-5d6734250e32"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "1cf23012-9c56-4b1f-b3f8-9fde504ec654"
                      }
                    ],
                    "activeCells": {},
                    "id": "a7f9fc72-2117-491f-af3d-1605b9c656d6"
                  }
                ],
                "id": "fd98fa33-c8a0-447d-90ee-6fd4b7129fca"
              },
              {
                "type": "comment",
                "text": "## names",
                "id": "6162b2e8-f8e7-4289-8857-de545f4f346f"
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
                        "id": "7c86800f-4753-4e08-ab25-c5d1878f6903"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "1b7969c2-f446-4b0c-a3e4-c2980a1ab3de"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "c2157b9c-289a-41df-b505-25d91a10ad4d"
                      }
                    ],
                    "activeCells": {},
                    "id": "4f365fb8-679c-4524-895e-43cd97c39e52"
                  }
                ],
                "id": "f4c196df-86f3-4714-a9e0-75722f6bd996"
              },
              {
                "type": "comment",
                "text": "## TheEnumOptionIs",
                "id": "6e4ea794-9045-4d28-a557-c79ce41be8db"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "SecondOption",
                  "selectedOption": "selectedOption"
                },
                "collections": [],
                "id": "468218b1-c7af-49c2-81fd-a36286de2dca"
              },
              {
                "type": "comment",
                "text": "## TheNameIs",
                "id": "744f6ecc-4d30-4861-a000-e390def7e933"
              },
              {
                "key": "TheNameIs",
                "cells": {
                  "first": "first",
                  "last": "last",
                  "fullname": "fullname"
                },
                "collections": [],
                "id": "b1c9105e-8ae0-41fc-94b9-f6fa23a87c38"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "07a5462b-4c2c-4fbf-b178-d0d4ef4496b6"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "c040071f-ecc0-4d5d-a6ef-884ff9ff9503"
              }
            ],
            "activeCells": {},
            "id": "f366ca39-3411-44a4-ba5a-1c62b55c5a08"
          }
        ],
        "id": "d7bdd27d-1284-44a7-a5fd-c2e815520d3b"
      },
      "sampleMarkdown": "# Sample Specification for SelectionList\r\n\r\n-> id = 348529f3-aa75-479d-9364-fb760c7aa6eb\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4643072-06:00\r\n-> tags = \r\n\r\n[SelectionList]\r\n|> FirstAndLastName\r\n    [table]\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n\r\n|> names\r\n    [table]\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n\r\n|> TheEnumOptionIs option=SecondOption, selectedOption=selectedOption\r\n|> TheNameIs first=first, last=last, fullname=fullname\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Simple",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                "id": "b927a726-b615-4c13-964a-7255ef5c91df"
              },
              {
                "type": "comment",
                "text": "## A",
                "id": "8cf3c40b-6e33-487f-b580-83cb584b7117"
              },
              {
                "key": "A",
                "cells": {},
                "collections": [],
                "id": "92879b17-795c-4680-a27a-d4b1e4dab623"
              },
              {
                "type": "comment",
                "text": "## B",
                "id": "d97b217e-7d4d-4ff8-934e-577c9fb294ce"
              },
              {
                "key": "B",
                "cells": {},
                "collections": [],
                "id": "5263ff52-22a1-426f-8b16-216d2fefde99"
              },
              {
                "type": "comment",
                "text": "## C",
                "id": "84bd7bb2-ac4d-4051-926a-8293ba52e2c5"
              },
              {
                "key": "C",
                "cells": {},
                "collections": [],
                "id": "788a6f16-1f23-4cfe-8d44-2f3d3825bd48"
              },
              {
                "type": "comment",
                "text": "## D",
                "id": "a7311df6-5763-4089-8bd8-ebd81f159910"
              },
              {
                "key": "D",
                "cells": {},
                "collections": [],
                "id": "b5eecce9-bea5-46f6-9552-6dfeb8cd1f49"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "dcf64c8d-2ad2-4d45-81e4-4e85b395d5dd"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "8d4a5386-62e3-4a36-8aa0-a5b89ebe2024"
              }
            ],
            "activeCells": {},
            "id": "96d87e04-b3db-419a-a0e5-e9ed5c78fee1"
          }
        ],
        "id": "502df4bc-dd5c-49fd-887b-48f02a488458"
      },
      "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 48a0e759-a2cb-4467-a6e0-1999fd4d9f39\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4643072-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, February 07, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "d1b7e2d2-0350-4677-bae9-cf231d3882fc"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "fa6f9f35-e099-4cee-a6eb-2e29683d611d"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "4f09ad9a-fdbe-4943-a2e0-67d11dbac372"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "c602c5e3-c078-4dcf-a960-3bec77a9e1c3"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "20ccfc30-a075-43a6-8b0f-7d51cf6de338"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "9f616243-ec43-44fa-8901-6bba3cf45e4a"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "6376a9f3-9727-4c75-8c49-7bfff145e8c4"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "2d8676e3-b540-480c-9efb-90bb53f64408"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "37def500-f7f8-4e16-9dae-3d9d9372c220"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "1e0fcfef-d07f-499a-b5c9-1e83b212d59e"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "dc5d0b0b-1ac0-4cff-a104-1b21613211d1"
                    }
                  ],
                  "activeCells": {},
                  "id": "d2d41c82-96c0-49e0-9db7-bd5af0c352a3"
                }
              ],
              "id": "4eec5353-acd1-42b0-b63f-805c71815fb3"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = fefa1d58-96e2-40e5-acf9-33c4e4f1eaa7\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4643072-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, February 07, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "SingleSelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                      "id": "1dfe57ac-3f86-408f-be58-c8564a6b5c94"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "4f64785d-41fa-4bbe-b0d1-eae8223bd53c"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "94734968-6217-428d-96d0-98fd53c29469"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "86499a65-374f-4813-ab08-75b09f38fba2"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "840f6e8a-f7b8-45fa-a795-07de8cbcde63"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "1fda0915-f161-4952-a013-0abc38dc6aa6"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "6bb812c7-5a55-40d3-9b35-241fc725e4cf"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "0c235495-f7fa-4501-80c8-fbf0592b5c51"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "d3ab7f8e-1f59-4d48-bd32-1196272670c0"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "b8bedc29-a70a-47b7-a1ae-1aa34ad518fb"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "a45d1f0d-661d-4da7-ac55-a3ca1a082bb8"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "c2260916-0e8c-4177-9440-072d29220fe9"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "3de47381-8326-48dd-8594-44261e9fc9af"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "7b7eacca-98ad-4712-bc5a-e5835dc7d3a4"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "fb6d1201-af05-4c05-98da-351efa3bd19e"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "0cbc1e5c-ce03-44e7-bd1f-5356d9123624"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "0f24d41b-0537-46d6-957a-9175d2390fc0"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "af89a9fe-0205-4565-b3b8-443e1c19dd70"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "54e20359-d791-492d-9e29-02ff11bed221"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "0bfdecb4-f141-40f5-921b-115dde7b346f"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "fa8b3fac-be0e-46d5-9198-34af185fe337"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "3119bcc6-a94a-4f0f-89c6-3be4c68e62c8"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "747cf540-ad84-43ac-827c-4a4012845a49"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "084e7a41-8362-441b-9c6d-5ba4b393ea1e"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "8613a878-2b19-42d9-991c-34423dd19ec4"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "3c27df8a-b730-4b25-ae7f-b6168c07f6a4"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "6a8b0ab7-4a4e-4763-aca7-e3de8547d61c"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "ae9dc354-16b8-430d-925c-8ad36986eccd"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "e448ee19-2756-4200-8290-a00f2a5a0ae6"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "2d64db4e-27d2-4eca-ba8c-d61ba23bc7f9"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "c5220619-8076-4b4f-9326-9b64d5271309"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "bd237c8f-a4bd-4c32-9b23-7e90b21b6f41"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "cbaf9aa5-1a32-4168-b2ec-c1776b3b5c71"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "9cac2a7f-3076-4f74-b7f2-2da991d17e5b"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "6b082180-5d1c-4209-85fa-42951f259135"
                    }
                  ],
                  "activeCells": {},
                  "id": "446db652-b8a2-4aae-88ca-1c7aaf02807b"
                }
              ],
              "id": "b20a902d-b06a-4b86-a8ba-0a16ff7f32d8"
            },
            "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 35b87059-6f73-49e5-8a2b-0d0e159c4d31\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4653072-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
              "last-updated": "Tuesday, February 07, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "a723e665-8859-4d22-b396-9ba0289ffce5"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "9112d048-8f78-4c2d-84cb-1151723d61c9"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "a79a5f15-1401-4a63-a46d-2781081c597f"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "9dd355c5-bb76-4112-8d1b-b216e0815bde"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "35ef8ee1-f932-4b9a-9a22-c21fcd5e1218"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "ef7f9966-fd71-4388-9f36-910e66ebe0ad"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "dac9ac48-6fb4-4f32-8808-f9e12bad7064"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "b9d40418-7cd4-49b4-b1da-1e22aca89a23"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "c9deb7d2-16b4-4445-b6dd-29149dc397e5"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "1b87fda9-2391-410f-acc2-7ac348d8c2ae"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "32fd4e3a-1972-4e90-b3b8-9bdb9d5c49da"
                    }
                  ],
                  "activeCells": {},
                  "id": "004876d4-d950-4fd5-a595-5d3c599c9aca"
                }
              ],
              "id": "aa4ef48c-15e6-4b65-99dc-e458e1cf10de"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 751f98c1-c2d4-44fd-8255-bc59f6e4efe6\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4653072-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, February 07, 2017",
              "breakpoints": [],
              "steps": [
                {
                  "key": "MandatorySelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                      "id": "a7ea87b0-755f-41f3-af67-7d0a027c51ad"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "9b7b9e92-fe65-4859-9b54-79ffbc5435ac"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "d3cb5403-b171-42e2-9b27-b90591dce335"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "05cf0aec-fbc7-498b-ba2b-4207ed420cc4"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "8a8ab790-31ca-4ff9-a01d-c13f1cc5f7a4"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "a4179f92-608d-47be-aac1-0ecdfabe2dda"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "a702485d-0af2-4e9d-9f41-83ae517cc75f"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "5609ae2c-deee-49d9-8712-3f04f6227be3"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "68f75632-6aff-4d10-9063-f7bd211156bf"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "6768887f-0287-45c2-877d-d8a5e3710a98"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "c1db2f5f-be82-424f-9968-1623ac020a64"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "3f50258b-bc93-47e1-8dcf-e2f7fa189832"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "f8388918-66ac-4255-bd9f-896ab600f4d1"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "f17c2ac6-3e0c-4b02-be13-970b2dec86d0"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "f3543ece-87fa-4fdf-acae-bd29559f5922"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "5d2f4098-43dd-40fd-85f9-137172318b46"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "265e8728-9a79-42c3-8b2b-2fb004daa752"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "e15e5b6d-b37b-41cc-9420-7e6571187ce8"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "d3d86f20-3520-4331-a375-75c58916fe3d"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "d9aae54f-7030-4cff-9fd4-c8f14468ef57"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "7e0c90c1-14f7-4028-9f17-a6f4b75fd4d4"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "c735408b-b064-4ef7-ad00-69e0511ae3c3"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "a259c3d2-1559-4e5e-87e1-98190446af61"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "f5b63feb-d390-4ed4-a15d-a000e93f20d4"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "7bc05552-3502-4b6e-8cee-204d06388296"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "53884966-da41-4bfb-92df-113c62c1228e"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "6de461e6-35c8-4d36-a6a0-1c438726f56e"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "f06ef07e-4e70-46df-82c2-b313c65f202f"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "ffd73ccd-f667-41d9-82c3-dedc0f6290b5"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "c877d1ae-5808-40c2-b94d-33f6c30eb3f3"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "034ad7c2-4acb-4f10-988b-7fcd74b4c51a"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "3c3ed224-c98a-438c-8567-819fb4bc5f9a"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "e976854b-42ac-467b-9dc9-17e527b6f1e8"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "c11a12f2-6bcd-4fba-a623-1c94ddadafbd"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "a0a5391c-c71d-4832-8950-56468ad8bdbd"
                    }
                  ],
                  "activeCells": {},
                  "id": "c0438922-077d-4faf-bd46-777efaa36b97"
                }
              ],
              "id": "09d5a920-c247-4ae0-8bce-2e1672bf5f7f"
            },
            "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = f6845cc1-7d25-4a5a-9d1a-a3c34cb14913\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4663072-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "EmbeddedChoices",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedChoicesFixture",
                "id": "a9387bc8-068c-4583-9f85-3734247fb385"
              },
              {
                "type": "comment",
                "text": "## Inline",
                "id": "5aa29cde-2f8d-4860-af9f-1fd107710fa7"
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
                        "id": "8b65f8ff-ed69-49fe-8792-3cacdf7319ec"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "ff449235-d381-4553-9765-fb3d2e0c659c"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "9bfdfddf-3e15-4678-add0-2b573c317378"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "ede09a5b-cbc3-4b07-9eda-8d01bb41c6c7"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "690d9b26-e9b5-450a-862b-76f1694b7925"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "069a0db7-36d8-440e-b93c-a56d88fe33ef"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "664972a0-b2b9-47ce-95c3-c9ff81d6a2e4"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "be89572d-1aed-48b7-ad17-72cf6400014b"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "a89170c7-ca7c-4fa1-958a-3e0979198b47"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "b6fcca99-bcf2-4ffe-94a3-9cb5ee25163e"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "a640635a-29b1-42fc-8422-839735cccbff"
                      }
                    ],
                    "activeCells": {},
                    "id": "277ec9fd-2b37-4416-a27c-693c53e3d6c2"
                  }
                ],
                "id": "ce9ceea4-f797-41a2-bd4b-4a2a8c1ce69e"
              },
              {
                "type": "comment",
                "text": "## MandatorySelection",
                "id": "400bdebb-07c3-4ae3-bfa8-21c0553a2a81"
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
                        "id": "89dea30c-521d-4ea6-9fd0-635290f3714e"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "739d288e-6b57-46fd-bd5d-da6f58e45b72"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "5b761194-89a5-4888-9935-b4b0d432f9c1"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "8f1b0c02-3f49-4372-bc46-b68f90d1fc87"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "bdf2bf6e-6c3d-4eee-b566-0ff58be33660"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "8efe9141-887b-4021-8aa2-c6549231fef1"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "40d11928-6f2a-478c-beeb-8b4a8039217d"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "52eb1927-4e6d-407b-a24b-a9e0bde1df20"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "d124cac1-faf8-42d7-a605-07b50f0e1ddf"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "a2dc5736-c3c3-4aba-bd2c-c4a8b9ab1ea5"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "4aae57b0-0541-413a-9936-4903adb6495e"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "2f224ef6-2d05-41f5-ac14-e2cb6c6373be"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "4c15e47c-1064-4de4-b8bc-4132b276564a"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "bd7cdf36-91aa-414a-bbae-16aeb31e68e8"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "f051679c-aa62-4b4e-8191-01b401814e3f"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "d1f17514-8cdb-4e20-aa6a-e816c70255e5"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "03ddd047-4f56-4d95-8abc-e4605aa32c3c"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "28b42856-30db-4077-b91f-7c31785541f6"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "0ad3ccd5-67ba-4574-b95c-71bc696ed845"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "da3702b1-6bf9-48d0-8b6e-194bf42aa2a2"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "d2c06220-1369-45d1-a35a-d1764652bea4"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "acc4fc5a-7922-498b-903e-5e1ab5481151"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "ac3702bd-3f2c-4cf7-94fe-394be6b64097"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "c36de3e1-2db2-42aa-b883-397cbd00f001"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "d801f585-a587-4866-aceb-21d21911e56a"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "4435d33a-66da-4205-a8ff-6b6b07c26952"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "35ec37ee-337b-4921-a168-b3f4f890585e"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "4f26c774-ae7a-45d5-867c-647c506c58b3"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "cc9fc2b6-1f2a-4184-9169-af997653a2f5"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "753d4e59-9418-49eb-ad68-4e5ff2e12984"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "e4b2b7a9-68a1-4280-973b-11a83a70adeb"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "4c7e29fb-c39b-48ac-9230-cb9c382700ae"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "5bede2e1-bbb5-4add-a82f-13cccf4e33f8"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "c95028f4-1b4c-4ca7-b32c-714352e15f9a"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "ca334e8f-c487-41d1-bea9-9fb8e37df6ea"
                      }
                    ],
                    "activeCells": {},
                    "id": "58529cfa-1cbf-469b-94f6-fbd252ce7384"
                  }
                ],
                "id": "3a3345a7-3c93-4673-a444-4e3259aaa27f"
              },
              {
                "type": "comment",
                "text": "## Simple",
                "id": "68b12c60-83a0-40f2-88e1-bc01ed7df216"
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
                        "id": "6cb183c3-6766-4c86-ad2f-592a439ae1cc"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "34f080d6-893c-4647-b28f-208cc5fa6c9e"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "a4aac3e4-f57b-4c22-8278-ff7b339c0a58"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "47c8400f-1ec3-4ff6-9226-4ec3e52a2b79"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "2e6613ce-1b3e-41af-8bde-344d8f68937c"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "bc647990-a909-45b8-a65c-64eb95c4acaa"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "b64292aa-3ada-4e7e-a980-d2621fc43a06"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "f7edd5b3-3007-4399-829c-9aeb6163464d"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "ba5b38e3-5541-4f9d-a429-203ec0f19c4b"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "30a9f910-1421-4259-9884-ba91bbb6e474"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "bc2bc458-d4e5-4648-a55b-36508651d442"
                      }
                    ],
                    "activeCells": {},
                    "id": "c7682a0b-2afd-41da-91a0-d2bc266254b6"
                  }
                ],
                "id": "0842a5ce-a638-4858-9a92-5cc468936662"
              },
              {
                "type": "comment",
                "text": "## Single",
                "id": "bf5a991c-bdfa-4676-8b5c-91fca2d91b85"
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
                        "id": "e4177c3f-9458-4d00-8ca6-cbe0de31e791"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "ce0c6a39-3847-4801-85c0-c6f932f171ee"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "e0bc5c47-d509-485c-a4c7-978e62eefd85"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "efccfea0-f047-4b6f-ac9f-d33e31150842"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "6db67215-6a7b-434b-ae32-d86ad5f140b3"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "60eb2a5c-4732-41d5-8589-e414437a225f"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "aeb77bef-493a-4fde-936e-e27cb10e2ff1"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "19fcda69-84ab-4cbb-8611-927d9f97276e"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "885eb9f8-319e-4cf6-8c15-57c100aa3abd"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "4e376f77-9805-4de1-9e15-cdf267ea91f7"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "de0fb696-d109-4d93-ab7c-e9eea7407114"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "ff55620d-83b7-45db-9ab4-61bc699ab1f5"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "e0d8896d-0b75-4db8-a9a6-b3db2f9e2b72"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "d2a38899-7fdf-4414-bfc2-391b48d5588b"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "2360ccd1-0620-47dd-83dd-a87ea85f85a7"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "7a9c3ee7-2b82-49cc-86b0-35ed0438593f"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "34731926-f23f-419d-81e5-6a624c4637f4"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "703d0a88-f50c-460a-9a18-20a408481e47"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "f2b069e0-c5c3-4cdc-8d11-f09727497a67"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "780dc71f-8280-4465-92e7-59b18c292dcd"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "0334c937-3fc0-4396-a6ef-ad399087f6cf"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "c93db481-9b96-43e2-b1f3-2d6eb20ebb75"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "b83abdc6-ae27-4661-b7a0-66dd5d2b779c"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "0b1b525d-8ff3-439b-9117-be91323eecbb"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "c7e69091-e3ab-45fa-92fd-ff504acbbae7"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "e0395311-339a-4e8c-9865-d5b24b3f76c1"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "a0f2db5a-5caf-4b2c-9626-59c484752eaf"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "195c4cd2-4e5d-45bf-b645-e5ef83b8d8ab"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "5bda68b9-5057-4512-b0e3-80fb2bfacbd9"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "f3c33582-bd66-43ab-8e7b-d5792230dc77"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "09228ccd-1586-45e5-879f-a60ce08e9056"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "f80d3407-637b-40b6-9232-8871b3e4522c"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "b8d39adc-fedc-4ef2-926d-0775452d4f5d"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "fbe48941-7675-477d-8fe1-07fcaac4db19"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "f13142ee-c4a6-4725-b855-d771cd18a710"
                      }
                    ],
                    "activeCells": {},
                    "id": "e2af01f3-6a47-4630-bc27-4bd967ea2ec6"
                  }
                ],
                "id": "e432343b-2c2c-4016-b2b9-8e211d7a32fc"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "27d94f11-2b3c-4cbf-be0d-8c8934d24337"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "27348c21-4ae7-4eff-9f8f-a35887863edc"
              }
            ],
            "activeCells": {},
            "id": "29782416-9334-4210-9c0b-a5440d39000a"
          }
        ],
        "id": "c7095f03-7858-4b40-a761-05e18c634b3f"
      },
      "sampleMarkdown": "# Sample Specification for EmbeddedChoices\r\n\r\n-> id = 87ea8bf8-620c-4038-9ee2-2239f675e841\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4663072-06:00\r\n-> tags = \r\n\r\n[EmbeddedChoices]\r\n|> Inline\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> MandatorySelection\r\n    [MandatorySelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> Simple\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> Single\r\n    [SingleSelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "SingleSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                "id": "ac07f345-2690-417b-bbff-3ec2aac0dad6"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "29218ca9-7aaf-4b84-b863-58a9f0a1982a"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "5f36d662-5c03-4492-b93b-80977cd6d309"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "93071c92-3b2d-4410-89df-90d3a2b8314b"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "c044abfb-7fdc-4b01-ade8-736aaa98853b"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "42da3d5f-88c8-45e0-abb2-7835f12fa1cc"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "042897dd-a1ac-4091-b660-654e01026e03"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "6ad7351c-2cf1-4b37-9f34-3083887a7176"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "ebe4fcde-54ac-4d37-9e5b-46db36b1a13a"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "6961f9ad-826e-44d2-a6c4-547d20588b63"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "4d4b23d4-46bf-419b-8a2d-dc9c8ac77427"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "374890bd-c6d0-4cc8-a079-a8c5ef316ec2"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "6feb659f-b825-47d6-90ea-7cc4be96dce3"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "8c9a5cf0-d12a-488e-b5c2-50e282083fae"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "347fc0ab-b118-4f77-b424-764539d2ef94"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "855664c8-e797-4aa7-b073-b57034455558"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "79e54b4e-774e-46c5-b7cd-26adc8f36577"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "4449c0bf-0ad8-44ef-a43b-671aeccf1a23"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "73c508cb-4429-480b-b43a-6b63b345ad30"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "621a2579-c150-4477-b9b8-7b792568bccc"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "8a71e660-3ba1-4d7d-82ba-622f71b6611e"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "7a0ebf3c-425f-42f3-aff6-4b06188fbb63"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "a458bf0c-8307-4fec-9d6f-3be9e7eda9b3"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "a7100cd0-a3e6-454c-8f13-947569bb6886"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "640320e1-bba2-46a4-8112-1a11f3f27b4f"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "2f5c05e8-6fe3-4eed-a51f-5caf1564b6c6"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "7f09dadb-34b7-45f0-87fc-6772485683d4"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "310b8117-ac06-40e6-b857-009696ddcbc3"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "8d1b14f3-c2ce-4056-b3e3-ce8c48a32d88"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "ea131f0c-aa13-4568-82ad-2fafe68316e8"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "2d8f4341-25b0-42f2-81b4-f3263b4d123e"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "25ef7466-7192-4b4c-bcf3-35195559569d"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "320ccf18-2134-4853-85a2-635a5b5373c7"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "64d6bcd2-8372-42b3-8848-9ee78213c1a0"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "6b746e9f-8523-441c-8fbd-6d0ac512db19"
              }
            ],
            "activeCells": {},
            "id": "7737a370-4093-4b18-989e-dda394afbfb7"
          }
        ],
        "id": "8615190a-74cd-4de0-a490-745b6ee54cbf"
      },
      "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 38ff250d-e0a8-4c0e-b4d8-3dd00b122a24\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4673072-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "OneOrMoreSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.OneOrMoreSelectionFixture",
                "id": "fb7bc6ec-ee9d-4517-a3d5-9131920ceeaf"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "3b2a958d-5e2f-4d8c-9c49-430af5c4027a"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "b49204ff-1378-45aa-bd40-1a5e5771ed4d"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "d8626090-6cb2-46c7-91a8-9f41bbde23f8"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "cd2c055f-24d3-427d-ad2d-6fe961c1ed61"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "7b08ab1f-5aa3-4e15-b699-df8b1125b51e"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "b1ceccec-8da9-45e9-bea3-e62174f8f0d9"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "be451a37-e95f-499f-9171-d36fc86cf70f"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "86f6c11d-5d2f-40ac-9a04-135e6fc4ea90"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "c8d81978-636c-481c-b93a-68ffc87efcd8"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "496f3bb7-481f-4c53-8218-d5565d9a5d77"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "6dda9cc9-9008-4c1c-9dde-5216a6f2a3a4"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "21725ac7-a92a-4a1c-8e50-0b9f259e4462"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "ea09b409-a6e6-4b6c-aa99-1dec7be72448"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "4f2eff42-09eb-40f4-b0c3-f364e4a233a2"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "b0a8e496-bcfd-4501-9792-1286a246835d"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "a33c3578-0dea-4874-ad90-a2b70bac01d6"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "52da96ef-9b48-432d-8b08-66d232f8ba6e"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "e851748c-88eb-4d6d-acc6-95cfc9780e8c"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "5563472c-ce10-4b9c-b611-f6cc39a45b78"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "fe3a4de0-55a9-4579-a545-996c02138d38"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "9692ffba-e718-4a54-8b3a-277ed06b37c5"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "ceb2d7a7-2529-4cf0-b7ec-1343bbdff1ea"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "a67c99df-eb10-4272-a896-e69514dd1563"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "43f8aeec-623b-4946-9a33-25b239103fec"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "2bf5fd2f-a7fd-4dc6-808c-a02b76fc56fd"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "21ed4b3a-dd5b-456c-a013-af3af27a3758"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "d070ebdc-c10a-4cba-819a-ae00e0676091"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "fe537b09-3f1a-448f-aa9d-b179824dd630"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "d064295b-49d0-493e-ae05-26a16f1332ed"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "a0abfb09-2b8c-4042-bf75-1816897b2f4a"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "9ed98df8-6e9f-4462-869b-3d69758cc48f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ad75e532-6b7c-4e9b-8ed4-74fac10f1347"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "0f7909cb-277f-4ad3-b980-39877630e7db"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "95d40472-cb8b-4e73-a76f-58f3d5104892"
              }
            ],
            "activeCells": {},
            "id": "2e26b673-199e-4a7f-aa3b-bd6cb6450732"
          }
        ],
        "id": "ece07425-626d-47c0-a0b3-8a52246f5649"
      },
      "sampleMarkdown": "# Sample Specification for OneOrMoreSelection\r\n\r\n-> id = 7c4cbc6a-99e3-46b3-b516-c3892ccdc879\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4673072-06:00\r\n-> tags = \r\n\r\n[OneOrMoreSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "MandatorySelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                "id": "be5836b1-e0ab-4882-8269-c5e7a3f1ae12"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "1b4e2074-edf0-4813-90df-1ddd2888599a"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "17c5b9df-aba3-40c5-9aeb-cc9baa12194c"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "8dc5d311-9728-4002-af99-b49784fca639"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "71488071-c394-4582-b284-cb8486687366"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "f5d63fc3-48a0-44c7-86a7-c3515dd88cfc"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "dbd748c2-18a2-4cd0-b18a-2cdec5547f51"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "c645f0fa-de5b-42e6-bd7e-b490b06ff13f"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "796b0490-b9c5-4afc-b50c-4616aaa3016c"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "48f8a64b-cb27-4786-bd20-09be4ed71bf4"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "5a4cdf09-53db-45da-97f1-834c46d6c42f"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "d685a984-238a-4a25-beff-03808a483ac5"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "6cdaa09c-5255-49d5-a350-33c8e8b526da"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "da460329-9b78-482b-b6d4-9957f1b111b8"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "d5b2fb72-0f82-45c2-bb6f-d9c4ce971364"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "8467a7d8-a26a-4245-9887-8fdacaca60d9"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "8f9b5eb2-6548-4cdc-8fda-aad2157974ca"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "c0ab0bb4-dde7-4e9c-93bf-e226b01827a5"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "6c530016-3483-405a-ab85-f426558ecff6"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "0a0f3e69-24e7-42d9-a5cf-66d9a31beedc"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "8db3416a-d288-42e4-9a65-f99a2f0c32d2"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "42618f7b-a83c-426a-8027-4ed3f4970499"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "53ea0d72-3dfa-4faf-913d-dd5ced0e4207"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "fda5e410-9554-45d3-b4af-6926600251a5"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "d36a751f-9862-4d75-bb4d-b55334585f19"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "2a38c97c-4f4a-40d2-8638-55494020e22e"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "f50f1116-60ba-41ff-be0d-724ddc26a8ba"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "3686dae5-2a7a-453d-9d0b-d5febceb10e8"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "01f58b77-edc9-4626-8d01-9beae12a95dd"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "838ee00a-154d-4657-a8d0-2c6595d6933f"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "dc62289e-513f-40d7-9fc4-00f7b85bd23c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "22536e0c-7ca7-4a84-a333-b64d6238da41"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "06a729ac-71db-452d-b5fc-30ac4ecd2818"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "2e4ddfc7-dce7-4f17-994b-af5afa7f132b"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "16a66630-a27a-49fc-a9af-6fff4be35d46"
              }
            ],
            "activeCells": {},
            "id": "22d9af0c-cb02-4bdf-9e65-42e76d728461"
          }
        ],
        "id": "60d7b69a-7acf-44df-8a1a-71ca8a9e1eed"
      },
      "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = d60dd4e6-6763-46f9-a7e8-46ef4d25c5be\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4683072-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SentenceFixture",
                "id": "b9492028-803a-48be-bd3f-4de76d7ba323"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "5b4e00ae-163d-4cfc-bd98-89ff788cc92b"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "9fefe665-a52c-4094-9b66-77342471f67e"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "694fcce3-2b61-4caa-be8c-40a05298b3ec"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "d92abcfb-4798-43c8-a417-60abd76aefa0"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "111d45a6-9351-41da-8b3e-78b0890d98fc"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "3c86e363-e45a-45b2-8de6-1bbd7ad85b76"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "e34ed701-0815-4bfa-8516-8c084e57d79a"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "42a0b581-bee4-4e03-b456-287faf14bd4a"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "a0db4b8f-142c-44fe-970d-2a867cda72cd"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "2c1fbe34-982a-4d64-8126-8786fdc6f342"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "75df93db-fccc-4f10-9654-d7a82795bc24"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "d64cb7ff-81f9-4db6-a1b1-46183fa601d2"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "116fd792-29e1-41b2-a4fa-92e6b1b900e6"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "e8c7cd34-548c-4fcd-990f-a076e18cca08"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "977e0049-b968-40fa-bee6-38ddfbc937c2"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "45b749d6-fd0d-4f1a-8623-a7ee52adcad7"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "f0de0048-afea-45c4-801b-26e8e9dab752"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "873d53e3-e416-4bcf-bb3b-34195b9db0d5"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "21e83fec-c89f-46fb-b6af-c235d9572c7d"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "18d27160-63a4-4610-aad6-3887dd2b17ad"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "aa669575-7d7d-4152-a2ff-4e639be61c6b"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "2c90ab10-1e9f-478d-8ffa-f3ae76433996"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "891a7dcd-2587-46bf-affa-ced99b150e15"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "b813b970-008a-4eca-a3f9-44fc4afd6689"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "13ebe420-e120-4ea1-9e5b-1ee8aca07d69"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "45719a7a-f4a6-4556-9231-b5c07303e0ea"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "7338c3e2-3345-402b-bb25-c5973e13104f"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "e916d1ce-f91d-414b-80e0-7c98b633cd51"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "8777bc13-fdb3-4286-a100-b2403147ece1"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "b3504e42-6ccd-4a36-9e52-b49ee382529c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c7580c95-f5f9-41e7-a0dc-20fd04830e6a"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "c88b3a87-c68a-4bfd-869e-0c7b17a0a7b6"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "b1d6dda7-c3b5-487a-be21-8a03d8b5be9c"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "37172684-acbf-4307-988b-3411335e5a44"
              }
            ],
            "activeCells": {},
            "id": "201fcad9-d37d-4906-9b49-60fb37e3c2e5"
          }
        ],
        "id": "46db363d-d4a7-473e-bf2a-29918a1cb5c3"
      },
      "sampleMarkdown": "# Sample Specification for Sentence\r\n\r\n-> id = fe2e812d-7584-4b44-a633-efd666ac576e\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4683072-06:00\r\n-> tags = \r\n\r\n[Sentence]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "DataTable",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DataTableFixture",
                "id": "dc132bce-d256-46ca-b540-068bb00efdcb"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "c71da14a-f46e-43c3-ae13-e8721462fa55"
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
                        "id": "a8317eda-cbd0-419e-a4f2-fc1ac2d85792"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "28179968-1b1f-4c53-8b12-dd306a571d60"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "b2bcea7a-c989-4e96-8742-d0faa717126e"
                      }
                    ],
                    "activeCells": {},
                    "id": "878a8ecb-38a0-4eb9-8571-2da89011bbf3"
                  }
                ],
                "id": "52d50272-6bd0-4dba-9f23-876e05638d98"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "94877b94-76f9-4e1a-b68e-226d16702ed7"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "bb6f5ef2-15f1-4931-8545-b454bf2c4e03"
              }
            ],
            "activeCells": {},
            "id": "fc52adbc-4e4f-43c8-a815-b43ad7e87286"
          }
        ],
        "id": "da6f3692-f254-4da3-a48d-66e7956b639e"
      },
      "sampleMarkdown": "# Sample Specification for DataTable\r\n\r\n-> id = c3faf38a-3812-44b6-818f-49d4c9c47627\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4683072-06:00\r\n-> tags = \r\n\r\n[DataTable]\r\n|> TheDataIs\r\n    [Rows]\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sets",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SetsFixture",
                "id": "a065fa52-686c-4137-aad6-f3bcf1b33a86"
              },
              {
                "type": "comment",
                "text": "## AddName",
                "id": "8283b97f-eb54-46e4-91f4-70949a9950f0"
              },
              {
                "key": "AddName",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "6cf33c2f-9873-4729-9f36-68c2effb7cd5"
              },
              {
                "type": "comment",
                "text": "## InvoiceDetailsAre",
                "id": "3b62d2a7-dfaf-403f-9e05-81567fa07ddf"
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
                        "id": "87c4f101-0493-4e12-b946-2a9ad9df573a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "3afe527c-6573-49c2-baa2-27454ce6553a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "0a0b0a55-1413-436b-a58e-5c2c2057e93a"
                      }
                    ],
                    "activeCells": {},
                    "id": "5133ab4b-4bd3-4a40-bd69-2b0339e81746"
                  }
                ],
                "id": "c68e6881-6f3e-4a69-809e-ccf7114166b6"
              },
              {
                "type": "comment",
                "text": "## OrderedDetailsAre",
                "id": "d3c46a32-0eb1-4812-afff-3fb3c104d3e5"
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
                        "id": "d05ee5bc-d6fe-4da9-ad7b-7c497161aa8d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "efed41f9-5e45-47e1-ba47-0f3417ee4252"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "1989a22a-c3ed-4532-ade6-97ae32e89fb7"
                      }
                    ],
                    "activeCells": {},
                    "id": "233b571b-8b8e-4070-a601-b04503d6f178"
                  }
                ],
                "id": "6267a39e-9456-4a27-95db-009e1d2b2d48"
              },
              {
                "type": "comment",
                "text": "## OrderedStringSet",
                "id": "6a1f3f3d-9f92-4521-a0d3-894b698310a6"
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
                        "id": "617b9add-91b0-4e4e-8acb-79815fa0e2c1"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "68cd2faf-0ebb-4b65-a3eb-776336b7b45f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "4b5a19cc-e317-4e6f-ae0c-78c87ef9df4b"
                      }
                    ],
                    "activeCells": {},
                    "id": "121aa1e5-5f2d-404a-8a81-ed155a39c80b"
                  }
                ],
                "id": "dde565e7-f5c0-4af6-8072-05c8a662e3e9"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "b169b2fe-e49f-4707-9083-e0faa585ade0"
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
                        "id": "deef5991-970d-431b-a6a3-50d7bcd5cd57"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "5f3a9457-3513-4e8a-9475-72e1258326aa"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "3e1df002-9b27-4c24-ad15-e0eeb47fe64a"
                      }
                    ],
                    "activeCells": {},
                    "id": "5f177c9b-4855-40ce-a6ed-50fcfc3f4db7"
                  }
                ],
                "id": "60d4b74c-b8a0-4e65-9351-828e54bd1918"
              },
              {
                "type": "comment",
                "text": "## ThrowsErrorOnDataFetch",
                "id": "42042144-633e-4b9e-8d69-85523b3b07cb"
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
                        "id": "c4da7362-185a-43df-92e8-5245fc214d53"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "9bca641e-7aa1-4549-b358-3945e301a234"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "b8529ef4-8a36-454c-a573-c46249b09db4"
                      }
                    ],
                    "activeCells": {},
                    "id": "51589977-23e3-48ce-a106-5d91f8bd2ec5"
                  }
                ],
                "id": "c6d379c9-adaf-43c0-891e-d741102b8f17"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "87140499-ea60-4fe6-aab6-6aba92df65b1"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "cb0ef488-db9b-43ab-bb5f-133f24f6e24b"
              },
              {
                "type": "comment",
                "text": "## UnorderedDetailsAre",
                "id": "5eb3b573-2e27-4410-87dc-3fd134976521"
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
                        "id": "4823e744-bf01-4819-9c15-25b329c35762"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "7f278b3c-ebd0-4c45-b606-e8c684f2fdad"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "45875e43-81c2-403d-b21f-b4d6e8ab8cbc"
                      }
                    ],
                    "activeCells": {},
                    "id": "40e1276a-11ea-488c-8fac-c72aa5402ad7"
                  }
                ],
                "id": "5d3f78fb-ae3b-4f5f-b46e-0c4362268fc9"
              },
              {
                "type": "comment",
                "text": "## UnorderedStringSet",
                "id": "5de9000f-4fa2-4cd6-b7a2-1f5a2a0b5089"
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
                        "id": "a59ca21b-676c-4748-8185-6f6cb04a174b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "4fa852e3-037a-425d-959b-ec01d3cdd2bf"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "d8041b78-870d-4f8b-8821-9b524ecb3520"
                      }
                    ],
                    "activeCells": {},
                    "id": "d0c9df8c-c18d-4359-a43b-44c6264c311e"
                  }
                ],
                "id": "61ff5f02-d997-4b88-ba97-d29d2e7d9691"
              }
            ],
            "activeCells": {},
            "id": "22dc5f07-f5c9-43dd-bffe-10817c7d80f9"
          }
        ],
        "id": "a1ce0be6-59d4-4646-b8f4-b9c960da531c"
      },
      "sampleMarkdown": "# Sample Specification for Sets\r\n\r\n-> id = 3f265cb1-9ace-4671-b0e8-e8e73b81403a\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4703072-06:00\r\n-> tags = \r\n\r\n[Sets]\r\n|> AddName name=name\r\n|> InvoiceDetailsAre\r\n    [Rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> OrderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n\r\n|> OrderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n|> TheDataIs\r\n    [name]\r\n    |name|\r\n    |name|\r\n    |name|\r\n    |name|\r\n\r\n|> ThrowsErrorOnDataFetch\r\n    [rows]\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n\r\n|> TODO message=message\r\n|> UnorderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> UnorderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "SometimesSlow",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SometimesSlowFixture",
                "id": "3d0e8b99-1075-442d-bc88-5efbba6eee14"
              },
              {
                "type": "comment",
                "text": "## ReadText",
                "id": "8d115e29-6a4e-43c0-8f59-01ee7f0dd6e0"
              },
              {
                "key": "ReadText",
                "cells": {
                  "text": "text"
                },
                "collections": [],
                "id": "4be59ef3-260b-44cd-9695-8300e6636324"
              },
              {
                "type": "comment",
                "text": "## Slow",
                "id": "da78570d-8fbe-4bfc-85fb-20885f91ce2c"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "f97adc27-eddd-427f-9944-8236f5f7988a"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c09a0344-8850-4e4b-8994-d5ee16e3a17f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "3ef476de-f0ad-448c-a3f6-54bc30d761fc"
              }
            ],
            "activeCells": {},
            "id": "5f3b8076-0869-40e6-aa4c-68ab2562aca4"
          }
        ],
        "id": "203e3f3b-e546-4635-9afb-22814e4c9fa3"
      },
      "sampleMarkdown": "# Sample Specification for SometimesSlow\r\n\r\n-> id = 33e03924-39f7-4172-aa10-7cd33004d160\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4713072-06:00\r\n-> tags = \r\n\r\n[SometimesSlow]\r\n|> ReadText text=text\r\n|> Slow\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, February 07, 2017",
        "breakpoints": [],
        "steps": [
          {
            "key": "Table",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.TableFixture",
                "id": "eee3621e-522b-49e8-aedf-49f201a7a151"
              },
              {
                "type": "comment",
                "text": "## AfterThrowsError",
                "id": "47ebcd8a-d99a-46d6-adba-5ec1c6ae3520"
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
                        "id": "81538bdf-e6c8-4cb9-b4e8-8f93ec964fb8"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "f4ab2307-406f-4e2c-a140-ef2f84d94b44"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "1d76665a-d291-46e2-92fb-183f0ad93884"
                      }
                    ],
                    "activeCells": {},
                    "id": "4abdbd42-e239-40ac-bd31-2b78ac36d4c2"
                  }
                ],
                "id": "861879c6-e6dc-4cdc-9a11-58a2b239dfde"
              },
              {
                "type": "comment",
                "text": "## BeforeThrowsError",
                "id": "f8ef228e-9727-4bb7-96bd-dcd5387cbb58"
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
                        "id": "3413c898-f998-4c44-bd9a-0add6bba11f4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "36b62384-2123-4553-94ef-8ffc39f132dd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "2de1e460-9b47-4dd1-afb8-78b7f6de1e78"
                      }
                    ],
                    "activeCells": {},
                    "id": "68319271-d4eb-44b0-9031-8ffe91c1b8b1"
                  }
                ],
                "id": "1f488dbc-85f8-4d6b-a11e-9109afaecdb3"
              },
              {
                "type": "comment",
                "text": "## decisions",
                "id": "b5775a30-2264-4645-a930-357ae9c790b6"
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
                        "id": "774e7b43-3f03-46bd-9492-9aecb43bf4ff"
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
                        "id": "65a2ffbe-4c1e-43d5-b96c-6ef4edc9f986"
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
                        "id": "dc132244-e96a-48db-84e0-065a16dbb420"
                      }
                    ],
                    "activeCells": {},
                    "id": "28a22a2b-b467-47bf-aa38-f0f4e5ac4eb5"
                  }
                ],
                "id": "46c68e0b-0fd0-4c27-8032-ba35dd08d228"
              },
              {
                "type": "comment",
                "text": "## Divide",
                "id": "616fefd5-5d90-4105-9574-d6421123dc87"
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
                        "id": "8c95edc0-06e3-4891-bb5d-0ad19f167ad3"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "23ef0078-66c2-4518-b8e2-24e663b24d9c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "27509986-08ab-450c-b161-762d881d9d66"
                      }
                    ],
                    "activeCells": {},
                    "id": "d96c0991-37b8-4def-a3f8-24785f303510"
                  }
                ],
                "id": "bdbc8d02-78f5-4a22-a513-daec642302b2"
              },
              {
                "type": "comment",
                "text": "## IsPositive",
                "id": "29bad7ba-c4e1-4d38-aac5-8d24a230e226"
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
                        "id": "3a3856e7-43d5-4b6e-bd47-a904fb0a2f6d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "ca851a54-7147-4955-9b46-0353f1831641"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "200deffe-3b7d-4e78-b187-c4b9dd61b41d"
                      }
                    ],
                    "activeCells": {},
                    "id": "f1087ab3-b528-4889-9018-134fab1e797a"
                  }
                ],
                "id": "76c6600e-134b-4b3d-93d1-ef8f7537bc39"
              },
              {
                "type": "comment",
                "text": "## Sum",
                "id": "dd79056f-937f-4efa-b953-1aeef8be0178"
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
                        "id": "e89e5d36-a175-4ae8-a130-d1fbee882f2e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "d5b0e9dc-edc9-4fcf-a256-cc0215e26d95"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "2c7e2da6-6961-4999-a644-4e57aad2745d"
                      }
                    ],
                    "activeCells": {},
                    "id": "3505dfcf-2bcc-4589-8412-28decb7d019e"
                  }
                ],
                "id": "d05a3aec-931e-4fa4-aa54-1f83755f93db"
              },
              {
                "type": "comment",
                "text": "## SumInternal",
                "id": "c2c3f711-3b41-4de1-930c-9c24d24495fd"
              },
              {
                "key": "SumInternal",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "db71e18d-2aa9-49d6-bf50-350f4698c13d"
              },
              {
                "type": "comment",
                "text": "## TableWithLotsOfOptions",
                "id": "c65991f9-e790-4417-a1de-58aafd49fa3e"
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
                        "id": "a9cbc8fb-dcc5-4254-a0c5-ac6d10c59bc0"
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
                        "id": "6fb6832a-646d-4a8d-99a0-dc8682471557"
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
                        "id": "26b504a0-d094-43e9-83e9-b19197785003"
                      }
                    ],
                    "activeCells": {},
                    "id": "feab1f4b-6d57-4203-94b6-7e8e8bcbe653"
                  }
                ],
                "id": "4a29a710-98b2-4dcc-9d67-940b56aded60"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "4b8fe071-273f-41e6-bf69-f868f7cd5751"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "bc178986-27e6-4d73-ba57-2cad17ed7cfd"
              }
            ],
            "activeCells": {},
            "id": "259541cb-1c7b-4054-b947-6a091ca02639"
          }
        ],
        "id": "b7de3945-3336-4704-ada1-36ec6f4756f9"
      },
      "sampleMarkdown": "# Sample Specification for Table\r\n\r\n-> id = aa74fc64-b37c-4acf-94f9-17b0d3d4a475\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2017-02-07T08:50:53.4713072-06:00\r\n-> tags = \r\n\r\n[Table]\r\n|> AfterThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> BeforeThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> decisions\r\n    [table]\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n\r\n|> Divide\r\n    [Rows]\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n\r\n|> IsPositive\r\n    [table]\r\n    |number|IsEven|\r\n    |number|true  |\r\n    |number|true  |\r\n    |number|true  |\r\n\r\n|> Sum\r\n    [sum]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> SumInternal x=x, y=y, sum=sum\r\n|> TableWithLotsOfOptions\r\n    [table]\r\n    |a|b|c|d|e|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    }
  ],
  "time": "2/7/2017 8:50 AM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}