module.exports = {
  "records": [
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "73b6059a-4294-4750-ad82-4e75ef8595de",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "92fe858c-4582-4599-a719-d1df7d1f4524",
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
            "id": "b77af2ac-8bab-4ce9-8b24-c739ae9fa93a",
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
            "id": "errors",
            "spec": "embeds",
            "position": "after",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e22ac282-a178-4800-97a6-8aa86cb18997",
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
            "id": "0dae0002-0da7-463c-924c-929ad77e323f",
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
            "id": "17dd3a0d-d3b2-4bd7-baf4-550e64592794",
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
            "id": "0a9e3adf-0033-4742-b8e5-4fbaa299b9a2",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__19.MoveNext()\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)",
            "cells": [],
            "id": "58e4c810-87ef-4bf1-bc12-9c1a5d0e5896",
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
            "id": "no-errors",
            "spec": "embeds",
            "position": "after",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "73b6059a-4294-4750-ad82-4e75ef8595de",
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
            "end": 995,
            "duration": 995
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
            "start": 982,
            "end": 984,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 985,
            "end": 987,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 987,
            "end": 989,
            "duration": 2
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 989,
            "end": 989,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
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
            "end": 991,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 991,
            "end": 991,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 991,
            "end": 991,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 991,
            "end": 991,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 991,
            "end": 991,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 991,
            "end": 991,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 992,
            "end": 992,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 992,
            "end": 993,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 993,
            "end": 993,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:After",
            "start": 993,
            "end": 993,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 993,
            "end": 993,
            "duration": 0
          }
        ],
        "duration": 995,
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
        "time": "8:56 AM",
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
                "id": "92fe858c-4582-4599-a719-d1df7d1f4524"
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
                        "id": "b77af2ac-8bab-4ce9-8b24-c739ae9fa93a"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "c8e36400-9b42-46c8-888e-b027a0bb8a31"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "e22ac282-a178-4800-97a6-8aa86cb18997"
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
                        "id": "0dae0002-0da7-463c-924c-929ad77e323f"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "17dd3a0d-d3b2-4bd7-baf4-550e64592794"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "0a9e3adf-0033-4742-b8e5-4fbaa299b9a2"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "58e4c810-87ef-4bf1-bc12-9c1a5d0e5896"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "f90e0168-904a-45c8-b77a-4acb2ae78c01"
              }
            ],
            "activeCells": {},
            "id": "73b6059a-4294-4750-ad82-4e75ef8595de"
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
            "id": "f5316410-1e35-441f-9ead-ce99c41e397f",
            "spec": "general1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9ef170db-503e-4163-9382-ba5d553bbe71",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9ef170db-503e-4163-9382-ba5d553bbe71",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9ef170db-503e-4163-9382-ba5d553bbe71",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9ef170db-503e-4163-9382-ba5d553bbe71",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9ef170db-503e-4163-9382-ba5d553bbe71",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9ef170db-503e-4163-9382-ba5d553bbe71",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9ef170db-503e-4163-9382-ba5d553bbe71",
            "spec": "general1",
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
                "cell": "Address1",
                "id": null,
                "status": "success"
              }
            ],
            "id": "1d39ec95-6a33-42dc-b5a6-5f6e2ed5b238",
            "spec": "general1",
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
                "cell": "Address2",
                "id": null,
                "status": "success"
              }
            ],
            "id": "1d39ec95-6a33-42dc-b5a6-5f6e2ed5b238",
            "spec": "general1",
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
                "cell": "City",
                "id": null,
                "status": "success"
              }
            ],
            "id": "1d39ec95-6a33-42dc-b5a6-5f6e2ed5b238",
            "spec": "general1",
            "position": null,
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
            "id": "5ff32a07-3469-40b3-974f-0bdd8930feb9",
            "spec": "general1",
            "position": null,
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
            "id": "5ff32a07-3469-40b3-974f-0bdd8930feb9",
            "spec": "general1",
            "position": null,
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
            "id": "5ff32a07-3469-40b3-974f-0bdd8930feb9",
            "spec": "general1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f5316410-1e35-441f-9ead-ce99c41e397f",
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
        "time": "8:56 AM",
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
                "id": "9ef170db-503e-4163-9382-ba5d553bbe71"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "1d39ec95-6a33-42dc-b5a6-5f6e2ed5b238"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "5ff32a07-3469-40b3-974f-0bdd8930feb9"
              }
            ],
            "activeCells": {},
            "id": "f5316410-1e35-441f-9ead-ce99c41e397f"
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
            "id": "341fd790-d1d6-4d98-997d-e1309925969d",
            "spec": "SometimesSlow",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0e8aa725-e5e7-48e3-95f2-b37b7d7c68b4",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "341fd790-d1d6-4d98-997d-e1309925969d",
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
        "time": "8:56 AM",
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
                "id": "0f64beeb-daeb-433f-b07f-5d44e48d1257"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "0e8aa725-e5e7-48e3-95f2-b37b7d7c68b4"
              }
            ],
            "activeCells": {},
            "id": "341fd790-d1d6-4d98-997d-e1309925969d"
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
            "id": "06df73de-1b4a-467e-9ade-1d662ff15c81",
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
            "id": "7de8c5d9-2d54-4b0a-8de4-39e98c71650e",
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
            "id": "dc18ae0e-6078-4748-9b28-7569d683dc55",
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
            "id": "6ad43410-9132-42d3-b6b5-af854e4afeca",
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
            "id": "98acfae6-0e9d-45e8-9cea-eee43e3dab5b",
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
            "id": "2964a526-47ba-43d7-bae7-2b4cfe3969d7",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "06df73de-1b4a-467e-9ade-1d662ff15c81",
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
        "time": "8:56 AM",
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
                "id": "7de8c5d9-2d54-4b0a-8de4-39e98c71650e"
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
                        "id": "dc18ae0e-6078-4748-9b28-7569d683dc55"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "6ad43410-9132-42d3-b6b5-af854e4afeca"
                      }
                    ],
                    "activeCells": {},
                    "id": "a08658e5-099f-49f5-b38b-d16ffc84e73c"
                  }
                ],
                "id": "a3c91654-040c-45e2-a158-f2bb832e8480"
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
                        "id": "98acfae6-0e9d-45e8-9cea-eee43e3dab5b"
                      }
                    ],
                    "activeCells": {},
                    "id": "d8928312-3dae-4108-a602-49bac1224770"
                  }
                ],
                "id": "40a211cd-ea17-4106-96aa-00841cca610f"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "2964a526-47ba-43d7-bae7-2b4cfe3969d7"
              }
            ],
            "activeCells": {},
            "id": "06df73de-1b4a-467e-9ade-1d662ff15c81"
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
            "id": "53c83bce-1d37-4742-ab13-bced5ca0d109",
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
        "time": "8:56 AM",
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
                "id": "14216741-4e4e-4de1-b81e-3067efa7ffa6"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "2b255f1f-65b9-419a-970a-c4552e6e9b68"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "ca14276d-af12-4947-8738-2a27d4c4718d"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "1d693220-0e55-4355-b43e-9d4cc61f2b13"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "3c9e65ac-5b27-4939-a074-bc4d7341f1d5"
              }
            ],
            "activeCells": {},
            "id": "53c83bce-1d37-4742-ab13-bced5ca0d109"
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
            "id": "f5991164-408e-4972-a9a9-287774e4f864",
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
            "id": "52d15733-fbd0-4b71-bd46-fee296862997",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f5991164-408e-4972-a9a9-287774e4f864",
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
        "time": "8:56 AM",
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
                "id": "e805825d-197a-4dbf-861f-46fcaf410890"
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
                        "id": "52d15733-fbd0-4b71-bd46-fee296862997"
                      }
                    ],
                    "activeCells": {},
                    "id": "7aa524db-8c31-4524-afb2-d41510b7c4bd"
                  }
                ],
                "id": "4e4e4bf8-e13b-467b-9c09-435f55edc499"
              }
            ],
            "activeCells": {},
            "id": "f5991164-408e-4972-a9a9-287774e4f864"
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
            "id": "76d3eb6a-ecb2-4b43-a213-a3eaf3b9b2ba",
            "spec": "general4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "0682c3e6-5b95-4de8-a34d-a0807a9af57e",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "b11b02d3-6d55-4e8f-8e5f-cb6d905d611a",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "c68ba23b-ef61-452d-ac6c-cdbdb33a846e",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "76d3eb6a-ecb2-4b43-a213-a3eaf3b9b2ba",
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
        "time": "8:56 AM",
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
                "id": "0682c3e6-5b95-4de8-a34d-a0807a9af57e"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "b11b02d3-6d55-4e8f-8e5f-cb6d905d611a"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "c68ba23b-ef61-452d-ac6c-cdbdb33a846e"
              }
            ],
            "activeCells": {},
            "id": "76d3eb6a-ecb2-4b43-a213-a3eaf3b9b2ba"
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
        "time": "8:56 AM",
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
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "125300e1-e145-41a1-8a6f-2a5f74c4b303",
            "spec": "paragraph1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ec63ccbd-1aad-48a5-9ee5-747cb264db10",
            "spec": "paragraph1",
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
                "cell": "operand",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "ec63ccbd-1aad-48a5-9ee5-747cb264db10",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ec63ccbd-1aad-48a5-9ee5-747cb264db10",
            "spec": "paragraph1",
            "position": null,
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
            "id": "ec63ccbd-1aad-48a5-9ee5-747cb264db10",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ec63ccbd-1aad-48a5-9ee5-747cb264db10",
            "spec": "paragraph1",
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
                "cell": "starting",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "4096886b-f6d7-4bb9-938a-0299bb79dc0f",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4096886b-f6d7-4bb9-938a-0299bb79dc0f",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4096886b-f6d7-4bb9-938a-0299bb79dc0f",
            "spec": "paragraph1",
            "position": null,
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
            "id": "4096886b-f6d7-4bb9-938a-0299bb79dc0f",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4096886b-f6d7-4bb9-938a-0299bb79dc0f",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9748e7b7-1245-439f-911e-12df62c5b65a",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9748e7b7-1245-439f-911e-12df62c5b65a",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9748e7b7-1245-439f-911e-12df62c5b65a",
            "spec": "paragraph1",
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
                "cell": "expected",
                "id": null,
                "status": "success"
              }
            ],
            "id": "9748e7b7-1245-439f-911e-12df62c5b65a",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9748e7b7-1245-439f-911e-12df62c5b65a",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "210cff00-af06-4a71-b919-dc7cf30ce6ac",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "210cff00-af06-4a71-b919-dc7cf30ce6ac",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "210cff00-af06-4a71-b919-dc7cf30ce6ac",
            "spec": "paragraph1",
            "position": null,
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
            "id": "210cff00-af06-4a71-b919-dc7cf30ce6ac",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "210cff00-af06-4a71-b919-dc7cf30ce6ac",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1a2af76c-489e-4954-a8b7-c76e3af1a199",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1a2af76c-489e-4954-a8b7-c76e3af1a199",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1a2af76c-489e-4954-a8b7-c76e3af1a199",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<>c.<.ctor>b__0_3(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "1a2af76c-489e-4954-a8b7-c76e3af1a199",
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
            "id": "1a2af76c-489e-4954-a8b7-c76e3af1a199",
            "spec": "paragraph1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "125300e1-e145-41a1-8a6f-2a5f74c4b303",
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
            "end": 3,
            "duration": 1
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
            "end": 4,
            "duration": 1
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
        "time": "8:56 AM",
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
                "id": "ec63ccbd-1aad-48a5-9ee5-747cb264db10"
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
                        "id": "4096886b-f6d7-4bb9-938a-0299bb79dc0f"
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
                        "id": "9748e7b7-1245-439f-911e-12df62c5b65a"
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
                        "id": "210cff00-af06-4a71-b919-dc7cf30ce6ac"
                      }
                    ],
                    "activeCells": {},
                    "id": "62f67f86-bc65-42ee-8a2c-d1712e95b4ff"
                  }
                ],
                "id": "7568532a-b9c6-45c1-a06a-cd80498940a7"
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
                "id": "1a2af76c-489e-4954-a8b7-c76e3af1a199"
              }
            ],
            "activeCells": {},
            "id": "125300e1-e145-41a1-8a6f-2a5f74c4b303"
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
            "id": "e5e3b840-1ddf-42df-a939-6b2928db06a2",
            "spec": "paragraph2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4e20a917-245b-45aa-bda6-c7707ce20400",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4e20a917-245b-45aa-bda6-c7707ce20400",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4e20a917-245b-45aa-bda6-c7707ce20400",
            "spec": "paragraph2",
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
                "cell": "expected",
                "id": null,
                "status": "success"
              }
            ],
            "id": "4e20a917-245b-45aa-bda6-c7707ce20400",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4e20a917-245b-45aa-bda6-c7707ce20400",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bbcb742-a1cd-4923-a0ff-fb24818a2661",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bbcb742-a1cd-4923-a0ff-fb24818a2661",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bbcb742-a1cd-4923-a0ff-fb24818a2661",
            "spec": "paragraph2",
            "position": null,
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
            "id": "7bbcb742-a1cd-4923-a0ff-fb24818a2661",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bbcb742-a1cd-4923-a0ff-fb24818a2661",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ead0f22e-b7e5-4996-a735-8121346380d9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ead0f22e-b7e5-4996-a735-8121346380d9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ead0f22e-b7e5-4996-a735-8121346380d9",
            "spec": "paragraph2",
            "position": null,
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
            "id": "ead0f22e-b7e5-4996-a735-8121346380d9",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ead0f22e-b7e5-4996-a735-8121346380d9",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d50ebc33-ed20-4339-9de8-f2b5b27117d2",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d50ebc33-ed20-4339-9de8-f2b5b27117d2",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d50ebc33-ed20-4339-9de8-f2b5b27117d2",
            "spec": "paragraph2",
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
                "cell": "expected",
                "id": null,
                "status": "success"
              }
            ],
            "id": "d50ebc33-ed20-4339-9de8-f2b5b27117d2",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d50ebc33-ed20-4339-9de8-f2b5b27117d2",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d2878df2-2902-494e-b493-f82c0c26b9a5",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d2878df2-2902-494e-b493-f82c0c26b9a5",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d2878df2-2902-494e-b493-f82c0c26b9a5",
            "spec": "paragraph2",
            "position": null,
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
            "id": "d2878df2-2902-494e-b493-f82c0c26b9a5",
            "spec": "paragraph2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d2878df2-2902-494e-b493-f82c0c26b9a5",
            "spec": "paragraph2",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e5e3b840-1ddf-42df-a939-6b2928db06a2",
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
        "time": "8:56 AM",
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
                "id": "4e20a917-245b-45aa-bda6-c7707ce20400"
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
                "id": "7bbcb742-a1cd-4923-a0ff-fb24818a2661"
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
                        "id": "ead0f22e-b7e5-4996-a735-8121346380d9"
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
                        "id": "d50ebc33-ed20-4339-9de8-f2b5b27117d2"
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
                        "id": "d2878df2-2902-494e-b493-f82c0c26b9a5"
                      }
                    ],
                    "activeCells": {},
                    "id": "10f8269d-5c80-4da1-9811-19b15d87e5e3"
                  }
                ],
                "id": "623e97ea-2c98-4d6b-85f8-e5f8986a4026"
              }
            ],
            "activeCells": {},
            "id": "e5e3b840-1ddf-42df-a939-6b2928db06a2"
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
            "id": "5b6ef0e7-691b-4b18-ba0c-0cad2a605594",
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
            "id": "99139bc7-9a36-487a-a1d4-13fa33645a9e",
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
            "id": "f0a12250-5731-441f-8cc6-c9b12f6417e7",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5b6ef0e7-691b-4b18-ba0c-0cad2a605594",
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
        "time": "8:56 AM",
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
                "id": "99139bc7-9a36-487a-a1d4-13fa33645a9e"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "f0a12250-5731-441f-8cc6-c9b12f6417e7"
              }
            ],
            "activeCells": {},
            "id": "5b6ef0e7-691b-4b18-ba0c-0cad2a605594"
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
            "id": "9c64074c-16a5-49fd-843f-6b1c55ee4a8e",
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
            "id": "9c64074c-16a5-49fd-843f-6b1c55ee4a8e",
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
        "time": "8:56 AM",
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
            "id": "9c64074c-16a5-49fd-843f-6b1c55ee4a8e"
          },
          {
            "type": "comment",
            "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
            "id": "d05712db-a198-4b97-aaca-b5c9fb626cde"
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
            "id": "b387e22c-7cbb-4030-be15-b28216c86cdf",
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
            "id": "861ed4ba-680d-43d2-b84e-0a21ab90beee",
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
            "id": "98fa56c1-23b5-45a3-92d5-5a3c4160af31",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b387e22c-7cbb-4030-be15-b28216c86cdf",
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
        "time": "8:56 AM",
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
                "id": "861ed4ba-680d-43d2-b84e-0a21ab90beee"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "98fa56c1-23b5-45a3-92d5-5a3c4160af31"
              }
            ],
            "activeCells": {},
            "id": "b387e22c-7cbb-4030-be15-b28216c86cdf"
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
            "id": "ccd9e0c7-3e5b-487f-84f0-ab8e904452dd",
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
            "id": "1e3d391d-ffc1-490a-8825-3ed92650a2ac",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "206de9d3-fcc0-4587-8070-d41dd5d34e77",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e407274f-7cdc-4f0a-8845-349e4890f3f4",
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
            "id": "8e031f2c-67db-40b9-840b-18d122b76536",
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
            "id": "ccd9e0c7-3e5b-487f-84f0-ab8e904452dd",
            "spec": "sentence4",
            "position": "teardown",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4108cc8f-805d-4c5f-a327-a6aea71f0196",
            "spec": "sentence4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4108cc8f-805d-4c5f-a327-a6aea71f0196",
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
        "time": "8:56 AM",
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
                "id": "847bc006-5d70-4e8c-beb5-a203e1658528"
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
                "id": "43bc2457-e426-4ae4-ad19-f14584353352"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "1e3d391d-ffc1-490a-8825-3ed92650a2ac"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "206de9d3-fcc0-4587-8070-d41dd5d34e77"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "e407274f-7cdc-4f0a-8845-349e4890f3f4"
              },
              {
                "type": "comment",
                "text": "Correct assertion",
                "id": "730106b6-6d87-4ed6-a8f6-b00467b30c0e"
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
                "id": "e554c799-e5a4-4501-8bb1-be19081c9e49"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "2",
                  "number2": "2",
                  "sum": "5"
                },
                "collections": [],
                "id": "8e031f2c-67db-40b9-840b-18d122b76536"
              },
              {
                "type": "comment",
                "text": "Line assertions",
                "id": "acc30cbd-fdd2-477e-ad1e-fbc9d5817184"
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
            "id": "ccd9e0c7-3e5b-487f-84f0-ab8e904452dd"
          },
          {
            "type": "comment",
            "text": "Comment\r\n\r\nAnother Comment",
            "id": "294df2ef-ece9-41f2-8e4e-627796037473"
          },
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Show a syntax failure",
                "id": "45b93b15-2121-4148-9362-2e140bdf390d"
              }
            ],
            "activeCells": {},
            "id": "4108cc8f-805d-4c5f-a327-a6aea71f0196"
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
            "id": "9a2a96e5-7756-4f44-8269-bb6599ea6dfe",
            "spec": "set1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a3e47899-8aa2-4e4e-a4f9-942e1ab7a495",
            "spec": "set1",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a230a13a-a18b-45e2-a21c-16150e8c84cf",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a230a13a-a18b-45e2-a21c-16150e8c84cf",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a230a13a-a18b-45e2-a21c-16150e8c84cf",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a230a13a-a18b-45e2-a21c-16150e8c84cf",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a230a13a-a18b-45e2-a21c-16150e8c84cf",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "681e86a8-34b3-4c82-a604-3ea3356a29bc",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "681e86a8-34b3-4c82-a604-3ea3356a29bc",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "681e86a8-34b3-4c82-a604-3ea3356a29bc",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "681e86a8-34b3-4c82-a604-3ea3356a29bc",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "681e86a8-34b3-4c82-a604-3ea3356a29bc",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ce326c5c-ad3c-4cb5-818a-800dfe98b71d",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ce326c5c-ad3c-4cb5-818a-800dfe98b71d",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ce326c5c-ad3c-4cb5-818a-800dfe98b71d",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ce326c5c-ad3c-4cb5-818a-800dfe98b71d",
            "spec": "set1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ce326c5c-ad3c-4cb5-818a-800dfe98b71d",
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
              "f9c349c5-0030-45cd-b630-bead95a6b491",
              "cf6f69a4-5b90-45be-8a7e-6f2f57ec5a8c"
            ],
            "missing": [],
            "extras": [
              {
                "Amount": "300.3",
                "Date": "12/22/2016 12:00:00 AM",
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
              "52145739-c34f-4136-af59-5fc9b56e4640",
              "511e9860-bb52-4066-be9c-def1fb1c7f24",
              "7224f90f-d9a4-41ae-96d6-46c0eada9094"
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
            "id": "9a2a96e5-7756-4f44-8269-bb6599ea6dfe",
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
            "end": 7,
            "duration": 5
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
            "start": 9,
            "end": 9,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 9,
            "end": 9,
            "duration": 0
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
        "time": "8:56 AM",
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
                        "id": "a230a13a-a18b-45e2-a21c-16150e8c84cf"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "681e86a8-34b3-4c82-a604-3ea3356a29bc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "ce326c5c-ad3c-4cb5-818a-800dfe98b71d"
                      }
                    ],
                    "activeCells": {},
                    "id": "a3e47899-8aa2-4e4e-a4f9-942e1ab7a495"
                  }
                ],
                "id": "a47774c2-59ff-45a7-af1c-b78af9224d55"
              },
              {
                "type": "comment",
                "text": "Completely successful ordering",
                "id": "a79a5fe6-faeb-457f-bf94-d8cf7af8eae1"
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
                "id": "a4db4991-f49f-4a16-916d-c16019970368"
              },
              {
                "type": "comment",
                "text": "Out of order",
                "id": "3d2424ea-2db2-4a5a-9a0a-b0fbac3c271c"
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
                "id": "1e497aec-4159-49ae-b1e6-c969c5c562c6"
              },
              {
                "type": "comment",
                "text": "Should have one exra",
                "id": "931554b5-2428-43b5-9e29-46ec37f27095"
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
                        "id": "f9c349c5-0030-45cd-b630-bead95a6b491"
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
                        "id": "cf6f69a4-5b90-45be-8a7e-6f2f57ec5a8c"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "323d4395-e735-4174-bf30-b13667a4acf1"
              },
              {
                "type": "comment",
                "text": "Should mark one expected result as missing",
                "id": "44aed21a-6e5b-42bc-b16f-bab3e7f08746"
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
                        "id": "52145739-c34f-4136-af59-5fc9b56e4640"
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
                        "id": "511e9860-bb52-4066-be9c-def1fb1c7f24"
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
                        "id": "7224f90f-d9a4-41ae-96d6-46c0eada9094"
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
                "id": "40763740-964d-448c-ba66-857892fe1874"
              },
              {
                "type": "comment",
                "text": "One syntax error",
                "id": "20c05b03-4e72-4c71-8352-279078118a9e"
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
                        "id": "c571450e-e984-423d-a79a-a95b5a1af947"
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
                        "id": "375de8fc-efef-4cb7-97f4-91d15fcb6a39"
                      }
                    ],
                    "activeCells": {},
                    "id": "4bcd0ffc-c2bc-4c87-b807-17d4a88135dc"
                  }
                ],
                "id": "796e0b07-ac72-49a7-bffc-22d70a057a88"
              }
            ],
            "activeCells": {},
            "id": "9a2a96e5-7756-4f44-8269-bb6599ea6dfe"
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
            "id": "3cc90f10-d3fc-4816-9e02-0fbf19a056bb",
            "spec": "set2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "200925e0-beb8-4806-8c42-2cfd3ac93e5d",
            "spec": "set2",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "92d9d06f-29b2-4170-961e-410f63e7a69d",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6ce846f5-ed66-4f58-86bc-08f8175d3476",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0dc0b417-a1c2-43cc-9bf5-e55b8d2e85cb",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c3555ad2-e94a-49a1-a8d8-4f8e01ca1c1b",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "966b661e-e9f3-45e9-be3f-4d6d6e920195",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "7e3ee1c7-e753-4a14-9a95-b6353d6acfdd",
              "645269fa-28ef-414d-a6f4-8a260dd1ae6a",
              "e30b8942-68b9-41a1-8ab6-2335afe30212",
              "9efa5420-f72a-40e8-81f3-a1a7c9aaaf62",
              "e0caaf8b-2274-4e5e-94e8-a00d129e5db6"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "dfa5054a-db13-4777-965d-3ac829d726bb",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "2f946fb7-8566-4a44-bef4-1a081e49d503",
              "2ed035fb-f6ff-44ca-8ff8-838a90165eaa",
              "64ffc2db-e2f5-4a28-b245-bf9fd6a45d05",
              "c79f4e02-7530-4648-aa41-94cd9afccb68",
              "e6fed3be-432f-4dfc-bbca-dd5e05118d60"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "69741c2d-1b54-481a-9e31-5cb2a12cb123",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3cc90f10-d3fc-4816-9e02-0fbf19a056bb",
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
            "start": 1,
            "end": 1,
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
        "time": "8:56 AM",
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
                        "id": "92d9d06f-29b2-4170-961e-410f63e7a69d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "6ce846f5-ed66-4f58-86bc-08f8175d3476"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "0dc0b417-a1c2-43cc-9bf5-e55b8d2e85cb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "c3555ad2-e94a-49a1-a8d8-4f8e01ca1c1b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "966b661e-e9f3-45e9-be3f-4d6d6e920195"
                      }
                    ],
                    "activeCells": {},
                    "id": "200925e0-beb8-4806-8c42-2cfd3ac93e5d"
                  }
                ],
                "id": "3e89cc07-1083-4767-a49a-e787b19aef10"
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
                        "id": "7e3ee1c7-e753-4a14-9a95-b6353d6acfdd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "645269fa-28ef-414d-a6f4-8a260dd1ae6a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "e30b8942-68b9-41a1-8ab6-2335afe30212"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "9efa5420-f72a-40e8-81f3-a1a7c9aaaf62"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "e0caaf8b-2274-4e5e-94e8-a00d129e5db6"
                      }
                    ],
                    "activeCells": {},
                    "id": "dfa5054a-db13-4777-965d-3ac829d726bb"
                  }
                ],
                "id": "7d7b8751-c236-4c19-b552-6dcdf9414f94"
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
                        "id": "2f946fb7-8566-4a44-bef4-1a081e49d503"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "2ed035fb-f6ff-44ca-8ff8-838a90165eaa"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "64ffc2db-e2f5-4a28-b245-bf9fd6a45d05"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "c79f4e02-7530-4648-aa41-94cd9afccb68"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "e6fed3be-432f-4dfc-bbca-dd5e05118d60"
                      }
                    ],
                    "activeCells": {},
                    "id": "69741c2d-1b54-481a-9e31-5cb2a12cb123"
                  }
                ],
                "id": "f17c138a-f3f6-4b72-a553-2d5c3466986f"
              }
            ],
            "activeCells": {},
            "id": "3cc90f10-d3fc-4816-9e02-0fbf19a056bb"
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
            "id": "8e2345d8-70b7-48a7-b411-885603b14620",
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
            "id": "8e2345d8-70b7-48a7-b411-885603b14620",
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
        "time": "8:56 AM",
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
                        "id": "99bc97e4-b288-4827-a518-7800edbc9351"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "5597c7bf-be82-43b2-a3fc-b15eaadab195"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "711cbb15-f362-4078-b365-79e22475222a"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "2419ad78-29ac-4a53-8a20-05c3c15bdddc"
              }
            ],
            "activeCells": {},
            "id": "8e2345d8-70b7-48a7-b411-885603b14620"
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
            "id": "e954509c-c9e5-45ac-b616-e74eb5e0f5e3",
            "spec": "set4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "272739c5-fa0a-408d-9055-8e5152d1b462",
            "spec": "set4",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b5c33fea-4e27-4d8c-8932-ced81a46d932",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b5c33fea-4e27-4d8c-8932-ced81a46d932",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b5c33fea-4e27-4d8c-8932-ced81a46d932",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b5c33fea-4e27-4d8c-8932-ced81a46d932",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b5c33fea-4e27-4d8c-8932-ced81a46d932",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "35e20c47-3cb1-4e42-8c00-7e794ceb2dc7",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "35e20c47-3cb1-4e42-8c00-7e794ceb2dc7",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "35e20c47-3cb1-4e42-8c00-7e794ceb2dc7",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "35e20c47-3cb1-4e42-8c00-7e794ceb2dc7",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "35e20c47-3cb1-4e42-8c00-7e794ceb2dc7",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "051ce76d-7f00-4bac-abe8-d570e985478d",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "051ce76d-7f00-4bac-abe8-d570e985478d",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "051ce76d-7f00-4bac-abe8-d570e985478d",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "051ce76d-7f00-4bac-abe8-d570e985478d",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "051ce76d-7f00-4bac-abe8-d570e985478d",
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
            "id": "bad44771-7047-425a-b5d5-73b2aa5fbafc",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e954509c-c9e5-45ac-b616-e74eb5e0f5e3",
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
        "time": "8:56 AM",
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
                        "id": "b5c33fea-4e27-4d8c-8932-ced81a46d932"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "35e20c47-3cb1-4e42-8c00-7e794ceb2dc7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "051ce76d-7f00-4bac-abe8-d570e985478d"
                      }
                    ],
                    "activeCells": {},
                    "id": "272739c5-fa0a-408d-9055-8e5152d1b462"
                  }
                ],
                "id": "13e79006-9904-43ed-b7f7-78ebf633da2d"
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
                        "id": "bad44771-7047-425a-b5d5-73b2aa5fbafc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "4cd94719-9ebd-4493-976e-a84371989772"
                      }
                    ],
                    "activeCells": {},
                    "id": "12ef556f-ea98-47e3-b471-7f002ae1e7c2"
                  }
                ],
                "id": "59cb33da-17e8-4a02-82ff-ef4bbc52a786"
              }
            ],
            "activeCells": {},
            "id": "e954509c-c9e5-45ac-b616-e74eb5e0f5e3"
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
            "id": "742433ab-05da-4223-8958-aebfe85c3f22",
            "spec": "set5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2f8128f3-ca80-4ee5-b1ad-5296613794ca",
            "spec": "set5",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bd958e98-00df-4b46-8935-359ea7305ea4",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a518484b-1178-4e25-a0ca-fb92936e367e",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "56f16c26-6eeb-4d76-8f94-2f15b98af5c3",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3750099b-8b7b-400a-add9-49f02491a4d8",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "94f0b828-e59b-4675-b17b-41c65068e9bd",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f960f09a-b9bd-4b9f-b8f3-b1a79128243f",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "34f2ee96-af0e-4fbe-9c7e-32c8d6daf96d",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f12a2131-2b46-487d-bde9-d5da33c39c46",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "7a91f9b2-b051-4e12-9955-50c7acd642ee",
              "adcbfce0-b077-46d4-bf67-4e461c8b1f31",
              "f12d7961-3eb4-484b-aa08-2cd6091ad21d",
              "e2a47ecf-6ee8-47fb-bfac-8d6e8b8ad784"
            ],
            "missing": [
              "76098174-8c1a-4cd8-91b2-4c6678d9c767"
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
                "id": "dabd1bdd-c729-4bba-b8c5-7fd7262db5d9"
              },
              {
                "actual": 4,
                "id": "ec60ba29-fe37-4e2a-ac3d-300315f973ad"
              }
            ],
            "id": "1aa3e323-2ce0-43f8-8547-4e2135b8899b",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "742433ab-05da-4223-8958-aebfe85c3f22",
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
        "time": "8:56 AM",
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
                        "id": "bd958e98-00df-4b46-8935-359ea7305ea4"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "a518484b-1178-4e25-a0ca-fb92936e367e"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "56f16c26-6eeb-4d76-8f94-2f15b98af5c3"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "3750099b-8b7b-400a-add9-49f02491a4d8"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "94f0b828-e59b-4675-b17b-41c65068e9bd"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "f960f09a-b9bd-4b9f-b8f3-b1a79128243f"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "34f2ee96-af0e-4fbe-9c7e-32c8d6daf96d"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "f12a2131-2b46-487d-bde9-d5da33c39c46"
                      }
                    ],
                    "activeCells": {},
                    "id": "2f8128f3-ca80-4ee5-b1ad-5296613794ca"
                  }
                ],
                "id": "2633108a-f528-491c-8c9b-03fbf5c303d2"
              },
              {
                "type": "comment",
                "text": "All data is correct, but in the wrong order",
                "id": "42a81dc1-686f-4a59-9455-3a2ef9b7cbe7"
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
                        "id": "7a91f9b2-b051-4e12-9955-50c7acd642ee"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "adcbfce0-b077-46d4-bf67-4e461c8b1f31"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "f12d7961-3eb4-484b-aa08-2cd6091ad21d"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "dabd1bdd-c729-4bba-b8c5-7fd7262db5d9"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "ec60ba29-fe37-4e2a-ac3d-300315f973ad"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "76098174-8c1a-4cd8-91b2-4c6678d9c767"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "e2a47ecf-6ee8-47fb-bfac-8d6e8b8ad784"
                      }
                    ],
                    "activeCells": {},
                    "id": "1aa3e323-2ce0-43f8-8547-4e2135b8899b"
                  }
                ],
                "id": "042e3151-1890-440d-bc4f-e4043ec0abcc"
              }
            ],
            "activeCells": {},
            "id": "742433ab-05da-4223-8958-aebfe85c3f22"
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
            "id": "01b094ed-2eec-4af5-96a3-bd9f68224320",
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
            "id": "fb4cd118-b17c-4373-ae01-8a6939a7ef0a",
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
            "id": "2d337f3c-a7c7-4c12-ba01-b4c08b700ab1",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "01b094ed-2eec-4af5-96a3-bd9f68224320",
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
        "time": "8:56 AM",
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
                        "id": "fb4cd118-b17c-4373-ae01-8a6939a7ef0a"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "2d337f3c-a7c7-4c12-ba01-b4c08b700ab1"
                      }
                    ],
                    "activeCells": {},
                    "id": "c841b45b-c2d0-409f-b543-b28fe1de1549"
                  }
                ],
                "id": "cfd18953-277f-4cbc-b967-6f0ced8a987e"
              }
            ],
            "activeCells": {},
            "id": "01b094ed-2eec-4af5-96a3-bd9f68224320"
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
            "id": "d24bdd7f-6d93-461c-973e-1efd2f1eee1e",
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
            "id": "b4225313-ef8b-470e-a898-b520d7a13c47",
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
            "id": "d456012d-a4e7-4bd8-8b1e-fc73fb9153e9",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d24bdd7f-6d93-461c-973e-1efd2f1eee1e",
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
        "time": "8:56 AM",
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
                        "id": "ea72f6bf-513a-445e-b24e-2aa381dba8c9"
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
                        "id": "7153c672-ee37-497d-8156-f2e90c51bfaa"
                      }
                    ],
                    "activeCells": {},
                    "id": "516d31d1-85cb-4c83-a585-58f18e46adc9"
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
                        "id": "b4225313-ef8b-470e-a898-b520d7a13c47"
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
                        "id": "d456012d-a4e7-4bd8-8b1e-fc73fb9153e9"
                      }
                    ],
                    "activeCells": {},
                    "id": "8eee5090-0b68-4f2b-9fc7-114102d8bdb9"
                  }
                ],
                "id": "e8e1c261-fb5a-407f-b668-0c717b50ff80"
              }
            ],
            "activeCells": {},
            "id": "d24bdd7f-6d93-461c-973e-1efd2f1eee1e"
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
            "id": "f1621fe3-081c-4241-a8ae-6f6876b73e41",
            "spec": "table3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e74f52a2-6d1e-4534-80e5-5b8549c48eef",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cfb1068e-d8e1-4205-8af3-93b596162a7e",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "940c14c0-e997-4bd1-8d1c-1af5024f8b44",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "b0dc1b9d-b306-4431-8fd6-a60c9d1b5257",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f1621fe3-081c-4241-a8ae-6f6876b73e41",
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
        "time": "8:56 AM",
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
                        "id": "e74f52a2-6d1e-4534-80e5-5b8549c48eef"
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
                        "id": "cfb1068e-d8e1-4205-8af3-93b596162a7e"
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
                        "id": "940c14c0-e997-4bd1-8d1c-1af5024f8b44"
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
                        "id": "b0dc1b9d-b306-4431-8fd6-a60c9d1b5257"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "e9595f51-db70-4e47-8407-4657fed22ec0"
                  }
                ],
                "id": "0080646e-ce65-43f9-9bdc-e6d3e8cd0a52"
              }
            ],
            "activeCells": {},
            "id": "f1621fe3-081c-4241-a8ae-6f6876b73e41"
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
            "id": "532c25d9-99c4-45f0-8692-e0f44bfde8cf",
            "spec": "table4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<>c.<BeforeThrowsError>b__6_2()\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass16_0.<Before>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
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
            "id": "19d7ed7b-5ebc-4902-b52f-1873a608ddb3",
            "spec": "table4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "914328ce-1d8d-4d5a-8fc3-9cf6bee9a82f",
            "spec": "table4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<>c.<AfterThrowsError>b__7_2()\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass18_0.<After>b__0(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
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
            "id": "532c25d9-99c4-45f0-8692-e0f44bfde8cf",
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
            "end": 1,
            "duration": 1
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
        "time": "8:56 AM",
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
                        "id": "19d7ed7b-5ebc-4902-b52f-1873a608ddb3"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "b14f6914-a8b1-4ea6-9072-728d29275882"
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
                        "id": "914328ce-1d8d-4d5a-8fc3-9cf6bee9a82f"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "cac5d9a4-2042-42fb-a40b-34e2b59051a1"
              }
            ],
            "activeCells": {},
            "id": "532c25d9-99c4-45f0-8692-e0f44bfde8cf"
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
            "id": "7fe6d93f-4a5c-4a07-af6c-f926a9c60783",
            "spec": "table5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2c5da5fc-4cdb-49eb-9e8b-3089e440214d",
            "spec": "table5",
            "position": "before",
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
            "id": "fd47c2b3-7c50-469d-91c3-cb66924a45d2",
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
            "id": "4d1a1f5b-21a9-4ba2-a57c-5f51da545bbe",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2c5da5fc-4cdb-49eb-9e8b-3089e440214d",
            "spec": "table5",
            "position": "after",
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
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4",
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
                "cell": "product",
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
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5",
            "spec": "table5",
            "position": null,
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
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0c7c77b9-40e4-425f-af1b-fd7e08ccfea1",
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
            "id": "0c7c77b9-40e4-425f-af1b-fd7e08ccfea1",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0c7c77b9-40e4-425f-af1b-fd7e08ccfea1",
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
                "error": "Invalid Format",
                "cell": "product",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "0c7c77b9-40e4-425f-af1b-fd7e08ccfea1",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "919e917c-07cb-4cb3-9a89-e4fb843bcd3f",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "919e917c-07cb-4cb3-9a89-e4fb843bcd3f",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "919e917c-07cb-4cb3-9a89-e4fb843bcd3f",
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
                "error": "Invalid Format",
                "cell": "product",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "919e917c-07cb-4cb3-9a89-e4fb843bcd3f",
            "spec": "table5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7fe6d93f-4a5c-4a07-af6c-f926a9c60783",
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
            "start": 1,
            "end": 1,
            "duration": 0
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
        "time": "8:56 AM",
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
                "id": "c7784134-c063-41d6-9ead-86df1662f4df"
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
                        "id": "fd47c2b3-7c50-469d-91c3-cb66924a45d2"
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
                        "id": "4d1a1f5b-21a9-4ba2-a57c-5f51da545bbe"
                      }
                    ],
                    "activeCells": {},
                    "id": "2c5da5fc-4cdb-49eb-9e8b-3089e440214d"
                  }
                ],
                "id": "6b9b37e0-5835-48a4-895d-309a0c2dcd0e"
              },
              {
                "type": "comment",
                "text": "Table fixture from script",
                "id": "f7e0b9f4-218b-450a-a7ad-d83f9ee84ea1"
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
                        "id": "0c7c77b9-40e4-425f-af1b-fd7e08ccfea1"
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
                        "id": "919e917c-07cb-4cb3-9a89-e4fb843bcd3f"
                      }
                    ],
                    "activeCells": {},
                    "id": "163afef5-78a5-4ac4-a441-3368efe81e00"
                  }
                ],
                "id": "43973a2a-a329-4eea-80ab-5131a367c743"
              }
            ],
            "activeCells": {},
            "id": "7fe6d93f-4a5c-4a07-af6c-f926a9c60783"
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "CheckObject",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CheckObjectFixture",
                "id": "13054bd0-bfdd-48d7-a87d-fd7dddef0644"
              },
              {
                "type": "comment",
                "text": "## IfTheAddressIs",
                "id": "a53d0869-7689-4f5d-9d9d-b417c5391d64"
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
                "id": "b17cbf20-6d0d-4f88-9011-b2a32ae370b8"
              },
              {
                "type": "comment",
                "text": "## TheAddressShouldBe",
                "id": "d5f603f3-076f-4ea3-a344-a95250dd1744"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "Address1",
                  "Address2": "Address2",
                  "City": "City"
                },
                "collections": [],
                "id": "f5775c7e-1858-4314-8d6c-99d7c1f1cfca"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "4f38cb0a-93b0-4ce8-a328-69ce67fd5a0d"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "2484449f-c39b-4914-8db0-4d1256b22a4b"
              }
            ],
            "activeCells": {},
            "id": "b568fbdb-6dfc-44bd-9525-e4cde729130b"
          }
        ],
        "id": "b415f146-49d8-4874-9641-099e5d394b62"
      },
      "sampleMarkdown": "# Sample Specification for CheckObject\r\n\r\n-> id = 5a3eaea1-57d2-4a8b-8375-03ccd7edee70\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6719337-06:00\r\n-> tags = \r\n\r\n[CheckObject]\r\n|> IfTheAddressIs Address1=Address1, Address2=Address2, City=City, StateOrProvince=StateOrProvince, Country=Country, PostalCode=PostalCode\r\n|> TheAddressShouldBe Address1=Address1, Address2=Address2, City=City\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Composite",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CompositeFixture",
                "id": "8272df46-293f-4de5-a3fd-961e56fe8312"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "1a83bb08-bd30-4a2c-8b9e-7c088d6dd344"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "186d267b-a64e-4de6-8de9-cef7bd3ecf95"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "c1d176fb-7058-4458-89db-06e1fa98533b"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "44161ca9-2768-47db-8c59-61067ddc6420"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiply",
                "id": "78755126-ca59-472d-b794-7f53f61b8d29"
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
                "id": "36743161-b12e-4144-8a12-ac09e31cbbed"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyTable",
                "id": "f0285fac-c760-4d6e-b435-dbfe2180f587"
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
                        "id": "42519920-5a2f-4d60-837c-e79f49d80a5f"
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
                        "id": "162953c9-1101-4de9-9ae0-ca92bc16e054"
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
                        "id": "1cd639f2-9d77-412d-8b84-599fcbc9e374"
                      }
                    ],
                    "activeCells": {},
                    "id": "b24a4636-38eb-4d95-9e3b-5040fa802fcf"
                  }
                ],
                "id": "382aad13-e54e-4096-a61a-e38800c9784a"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyThrow",
                "id": "246bfaa9-1cd7-4684-929f-fcce71a1004c"
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
                "id": "d7c00c89-229b-4626-b027-98f828529ae7"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "09d1d9c5-36e0-411b-8646-22cc312f7f39"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "7718386e-c13a-4715-bb0a-857afdeb49b3"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "df06e23a-ed65-4b03-a7f4-eee4b7781c5b"
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
                        "id": "eb587a93-f8f8-4806-8960-8752e4e094d8"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "968da9e4-85d8-4ab7-80ae-613d453eff31"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "d39a8310-b972-4d3b-a06b-c8fefa10a6eb"
                      }
                    ],
                    "activeCells": {},
                    "id": "2385954f-915a-470c-8d9b-3b09d24bfd4b"
                  }
                ],
                "id": "03ec95a8-2812-4b22-a63e-5b4c45793bea"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "3bd2892f-80da-4d2c-ba62-e121ad6926c9"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "00b8907c-4efb-4906-9ac8-b11008f16ca6"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "c21737c4-d51e-4c10-ae83-4898ea1d68e1"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "fd1537b3-8917-4106-b2c9-e79bb5692005"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "cac48ead-e57a-44aa-a6ab-5b479c8e836e"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "79e55a5b-eefa-4e8e-b22b-3b8d1e41c036"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "959280e4-9646-4253-a47a-430f2f02fbd1"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "9b54eb7d-e0a7-4c13-8faa-361fb86a346c"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "4b326f91-5f5f-497d-9972-5b68ff6c8e5d"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "dadf2fc0-5805-45db-bff4-5f8115b3ed8e"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "f417affb-7463-419a-a031-b1b481dd1b38"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "3578c44b-eec9-47f7-a555-73b9bdd37294"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "a367c115-239e-44aa-82ed-935e0e22939f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "a55dc762-9e07-469b-a04b-dd979d0d89c8"
              }
            ],
            "activeCells": {},
            "id": "4d589b05-a6b6-416f-8452-1954a3b355c9"
          }
        ],
        "id": "7018a970-5581-4343-b64a-a69a4bbed9f3"
      },
      "sampleMarkdown": "# Sample Specification for Composite\r\n\r\n-> id = 58f1a204-0aa7-492e-bfe8-7ae7c40680bd\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6769337-06:00\r\n-> tags = \r\n\r\n[Composite]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> AddAndMultiply starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> AddAndMultiplyTable\r\n    [Rows]\r\n    |starting|operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n\r\n|> AddAndMultiplyThrow starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, December 20, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "67efd04c-fb66-4ebc-ada7-ce3e67f03e1f"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "19f503aa-253c-4c8c-b4e9-b12a600adabe"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "2e134479-94bb-4c92-90be-62259edf0086"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "eb42afb2-c254-4a3d-83d0-1fca5344c2ff"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "516e82d6-c6bf-49ec-b900-47ebfcd87c31"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "6af33fc8-3341-4a30-9dbf-3a60333d46e9"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "d9652409-2bd9-45a5-ab8d-0100dc36d127"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "6d11b019-f598-474f-9c7f-e597fe68b04c"
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
                              "id": "5fc5e8be-ce1f-4494-81b1-5d04fa4ba0e9"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "fd5623be-b758-4169-b004-b2164f24b922"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "b34e7eb3-9bf3-4220-af5d-189eec70de46"
                            }
                          ],
                          "activeCells": {},
                          "id": "bffa1561-a29a-4000-b5f4-ce1cd2c82e1e"
                        }
                      ],
                      "id": "8869bca8-5870-4c90-ac8e-28e1166be137"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "65735f57-0953-4bea-838f-aa36848bc40e"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "964de2d0-ecfd-4c85-b35d-42ceab773d5a"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "4831fe73-f27a-407d-8ca9-1edfc1359991"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "95d1854e-b8a9-455a-9342-c2e831b27a09"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "454b9caa-e27e-465d-b665-2378ee9d215a"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "7df2d577-25dd-4f2e-ab89-74c40c64d934"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "a306f28b-a4a5-4924-84ec-1c37a3b01dea"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "537ff763-a5fd-4688-91a1-e84bd7658e87"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "5420a8a0-7154-4068-8b3b-cb01ddb44d57"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "31c46486-f61a-4170-8f1a-dc8c894913b9"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "e150adda-4b9f-418b-a479-de2b3ace9be6"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "b4a2ccd9-11fa-4c69-98c1-d17b24cba1df"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "5b535df3-e9c7-4332-878f-4e1460de4044"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "0bc843c3-a37a-401f-8e35-e63ca4d0243e"
                    }
                  ],
                  "activeCells": {},
                  "id": "22e211da-e094-4b12-a81e-c0e44174396b"
                }
              ],
              "id": "ee7f1ee1-8096-4143-9ba3-7c4ffd572eeb"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = e5e15726-04a6-48d3-85fd-5a2d23e012ea\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6819337-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Embedded",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedFixture",
                "id": "6caae215-78db-46a9-b798-4e1ea4683c97"
              },
              {
                "type": "comment",
                "text": "## DoNotThrowAnExceptionOnTheNextEmbed",
                "id": "aa83310d-8489-4a2b-8c96-8bce7ce64b30"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "313c2b6a-dede-4aee-8231-96c21fbf06ab"
              },
              {
                "type": "comment",
                "text": "## EmbeddedMath",
                "id": "9684542b-97a9-4b5f-811f-5ca5b390b44d"
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
                        "id": "7670fbad-95fc-4b85-a5f5-b1fda395cafd"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "74cc41bf-00e9-46a4-8f77-32e4d8250267"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "328e5d15-0a2e-45f5-9dc4-3cd64edc251b"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "b653d53c-3062-470c-917d-1bb38051d664"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "cdd48586-260d-4944-b324-34d851edd042"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "73a05f3f-e688-4b9c-8b98-ef4a06bf2ac7"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "80f16428-f899-4ad3-ad9a-af345111e640"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "d9c8a0db-2ef3-400d-b8b9-b74569e75a80"
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
                                "id": "6852da30-c5e8-40d1-a835-9b0eb438739c"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "da2a4be4-b2b4-4852-bda8-75dee288030c"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "e346a3c5-a2c9-402e-b465-968998b85313"
                              }
                            ],
                            "activeCells": {},
                            "id": "699af4f9-ca31-4aab-bc2b-58aa34933fc8"
                          }
                        ],
                        "id": "a5db6ea2-a646-4c94-8c13-eaca2ceca63c"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "8c06dc49-f85e-4ed0-9951-660fedbf7a2a"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "5fd6f0ab-b452-4447-acb6-77b5c197928d"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "46915fd6-c617-4354-a62c-a4a22c3f0f07"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "59daf02f-5c38-401f-aa4e-d6bdd97fea77"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "240d339b-029f-444d-82f1-fa42a7bf926c"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "72a6a629-9980-4d08-974a-fff1235b4e00"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "57ef73a2-e620-45ef-ba21-918f8f917229"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "40837c53-bcad-4b46-9d25-680de6d73676"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "5e3e4fd6-e2f2-4f0e-a467-9876363b1772"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "9d987edd-ffd2-4cc3-a1f7-4b0387ae6073"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "5210be96-d80e-465b-a475-9e47e615e5da"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "1aac635f-641a-4985-8c9a-06cbf0867d90"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "67fbdc06-38d4-4bfd-81fe-796f510bef5a"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "f2ee08e4-617b-4e6a-9dea-e6d7e53faf8b"
                      }
                    ],
                    "activeCells": {},
                    "id": "20e4b913-fb93-45b4-a1d4-b08ee71103c8"
                  }
                ],
                "id": "035e0ce3-d625-4261-a0a2-06c52b5015b8"
              },
              {
                "type": "comment",
                "text": "## ThrowAnExceptionOnTheNextEmbed",
                "id": "67e59d38-049e-40d9-ad21-8b33ad15f6ec"
              },
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "9a0c381d-8b1b-47f5-a26a-0b340874e810"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "cd556136-1097-4192-ab35-b1d2f0bd5770"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "74134f30-21ee-4e0b-8024-f875b0acd1f1"
              }
            ],
            "activeCells": {},
            "id": "3c0626ee-c609-46b9-8e33-f14c846555f5"
          }
        ],
        "id": "b14a57ed-0781-4b41-96a4-31981766f27e"
      },
      "sampleMarkdown": "# Sample Specification for Embedded\r\n\r\n-> id = 6d153c2e-c43b-4a69-9314-f754084121d8\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6829337-06:00\r\n-> tags = \r\n\r\n[Embedded]\r\n|> DoNotThrowAnExceptionOnTheNextEmbed\r\n|> EmbeddedMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> ThrowAnExceptionOnTheNextEmbed\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Failure",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.FailureFixture",
                "id": "c6e947c4-56be-4b06-a40c-5ef0c678a701"
              }
            ],
            "activeCells": {},
            "id": "2b03476c-3f04-4f75-9e25-a6cd8cb67f3b"
          }
        ],
        "id": "975c1365-1821-41d2-b478-6acdeeee7288"
      },
      "sampleMarkdown": "# Sample Specification for Failure\r\n\r\n-> id = f3632a14-e3bb-4de8-ba25-870445925da9\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6839337-06:00\r\n-> tags = \r\n\r\n[Failure]\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "GrammarError",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.GrammarErrorFixture",
                "id": "0d1a7775-3037-446f-a45d-e39866524ba5"
              },
              {
                "type": "comment",
                "text": "##",
                "id": "901cb80c-5de2-4e43-a5a7-89b00c6f0792"
              },
              {
                "key": null,
                "cells": {},
                "collections": [],
                "id": "566e8170-b350-4077-84de-a6b83b53cd76"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "605fdc21-b8cd-473a-b2ff-871c8c871b95"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "c67e3875-b38c-429f-8094-a519ab5df0f6"
              }
            ],
            "activeCells": {},
            "id": "fa32a1cf-7aa7-4039-a3ec-13cf76286449"
          }
        ],
        "id": "11551037-0c4d-4237-a599-0e536865cb20"
      },
      "sampleMarkdown": "# Sample Specification for GrammarError\r\n\r\n-> id = fa2e7f4a-1873-444a-9a42-0856ff23d271\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6849337-06:00\r\n-> tags = \r\n\r\n[GrammarError]\r\n|> \r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "CurriedMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CurriedMathFixture",
                "id": "4a8943a9-ea99-44b3-bfac-6ab3716c6348"
              },
              {
                "type": "comment",
                "text": "## Add5",
                "id": "bdee2372-48a2-4efd-883d-68ca8184ea43"
              },
              {
                "key": "Add5",
                "cells": {},
                "collections": [],
                "id": "86495277-a8cf-4b85-bac5-8fe2a2af768d"
              },
              {
                "type": "comment",
                "text": "## AddingTo5",
                "id": "3a007488-19a7-468e-9841-f3bb6228610e"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "1de1a697-cc73-4bae-b7a3-4af4c65f9f90"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "a24401f3-d7b0-42bc-931a-6f5cbba916be"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "dbc4c786-ec68-4143-9c47-73bb9a4bfb01"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "a43a55e9-d83a-4014-8840-88ae136a7f68"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "a1dcf77c-ed43-4b62-91cd-e1947917db93"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "412de170-f690-401c-a0ab-54e671e5d9d5"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "b41ca6c0-32fa-4194-a0b7-3a4968d319b0"
              }
            ],
            "activeCells": {},
            "id": "5614c654-67f1-41e9-87e3-9921c2bf6e12"
          }
        ],
        "id": "abc24d9e-1cd0-4139-af8c-86c0004c268b"
      },
      "sampleMarkdown": "# Sample Specification for CurriedMath\r\n\r\n-> id = de7cb025-f34e-4960-a50a-0990c40e4f17\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6859337-06:00\r\n-> tags = \r\n\r\n[CurriedMath]\r\n|> Add5\r\n|> AddingTo5 y=y, returnValue=NULL\r\n|> StartWith starting=11\r\n|> TheValueShouldBe expected=expected\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Math",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                "id": "d624cc8f-c9cf-4964-acdd-426c42c5c6c4"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "653b90fb-ab64-44fe-a10f-8f6e2f83a16c"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "1756221f-95e8-4e31-b787-e7e51e812b08"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "72799e38-4f37-4929-aab0-f54d23de4e0d"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "4bd69dde-c0a0-4511-bae8-07358e305ddc"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "c0927f31-d253-4f1a-a68e-669b8dd06079"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "a7644a4c-86cb-4c01-b1f5-07d2d503631d"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "8bf0ad04-ee22-4063-8d12-1ae6042e4c05"
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
                        "id": "e7fe0db9-2bda-4651-aed3-105ab7591858"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "8883c0b9-f995-4815-a3a9-045a1c020fcd"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "55334ca6-d708-4a3e-8153-0bf0864ed4e4"
                      }
                    ],
                    "activeCells": {},
                    "id": "0627cb36-8e66-42ed-8d47-ce12b28f122b"
                  }
                ],
                "id": "54f25f9c-d28f-47c0-9eef-3383a1704c02"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "2a126f50-2789-493c-8a7d-4e92d7d42be7"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "7cd570b1-4266-4db5-97ef-d2bef7ac1928"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "972ac247-490a-46c0-9597-2aa88fd6ec01"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "c30b8789-ab3d-41bd-b96c-4799a09baa20"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "30b8e16b-32c5-4852-925c-ebfdcff93e45"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "5bda54f6-91a2-46c9-ab8e-e61d6144f549"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "7361bf0f-3df0-4d88-b3a4-f35585bdc4e5"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "689a607b-4af0-4169-9769-f414088f0611"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "11abda8f-c63e-447a-b284-f647c6c9e047"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "2998fa9f-a517-4223-9cc0-75c22d582d9e"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "08ad8f31-ae31-4141-921d-a47d1cadc434"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "cc23938c-f358-4fce-abef-764da5e23eb6"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "13852146-dbf0-438c-ade5-53d914599c3b"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "f03dcda7-4b63-4c60-8b9d-163ba6ed1d62"
              }
            ],
            "activeCells": {},
            "id": "0d8ee591-f3b0-48b0-85a7-1e16543b9c37"
          }
        ],
        "id": "6003715e-a9a8-4e6a-b9e0-9dad0556b6d1"
      },
      "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 56fc0ab9-f844-4717-b520-c2b669c4d96f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6859337-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, December 20, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "46c68738-f503-466c-9beb-5b785186a634"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "3f7c22dc-c890-47f6-8746-2970bf5c128c"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "e3966120-3c43-4beb-8fcd-f476acf6eae0"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "d393140a-d5e9-41ed-91ce-3d664f648149"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "468babe4-dc37-4844-b36b-d65f26d4bdcb"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "37538843-4cea-4286-8d9b-0673c7078bdd"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "edf7352d-155d-4603-9bad-49e6aa851fb8"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "41f9be49-1895-45a4-ba35-cefe7376d3c8"
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
                              "id": "90bc3504-b816-48a3-81d1-3c3c7c091dc4"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "722b8327-15b6-467b-b241-18a38d01a5f7"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "337657bd-9cd5-419c-b59a-fd5ec55c9637"
                            }
                          ],
                          "activeCells": {},
                          "id": "4bedd0e6-ec36-4d79-aae0-877ff205405a"
                        }
                      ],
                      "id": "658a36fd-5a91-4b3d-8918-dd73e4bc31a1"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "3821a192-50fa-41e5-83b4-89c09f4e28ae"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "a7234308-b692-4d2e-8aeb-87809e4c9cf6"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "88019060-89a3-4289-93f0-648a01747538"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "c763c1a1-907c-40e5-b9c9-ad0c8f1bee78"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "a85c85a2-6e05-407e-97d7-226f6baceb29"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "9135b22b-2f2b-4e6f-a87b-f86e9ef0cded"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "fbc7deab-35e4-4e16-b5c1-f532acafcb10"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "10497763-7ac3-4d9a-a010-7d914310515c"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "5cae82f5-17fc-4189-828a-548d6231b032"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "1165beb4-a01c-4971-b87b-374dfeec897a"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "805aeb6a-5b06-4e5a-aa6c-379fc0655b32"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "f612c0b6-1f6d-4d52-b5dd-dfa664a28368"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "f000a467-cf0d-403b-8b36-729b819c3010"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "6739921c-f747-4aac-9dfb-efde3a46f669"
                    }
                  ],
                  "activeCells": {},
                  "id": "d4b6659e-e91e-4b4a-bf1e-0ee56b0cb927"
                }
              ],
              "id": "597f35d9-5aff-4a9e-87e7-c7692aacb6ad"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 27ad26b2-36cb-4df6-8836-d6dc19f4cf7e\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6859337-06:00\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "DoSomeMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DoSomeMathFixture",
                "id": "839119fb-fb60-43af-a94b-153b81de1b7a"
              },
              {
                "type": "comment",
                "text": "## DoSomeMath",
                "id": "54badeff-edb5-401a-9a29-9b00fa9c48c9"
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
                        "id": "0e009b15-dd02-4623-8768-dd9ffba7f304"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "d44f8743-7ddd-4b25-a036-5da2aa0e695d"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "6d7c7e33-5580-4d15-ba8d-f1d8694a09db"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "0de013ac-fe2b-41cb-a825-cfdfda0b4719"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "7718329e-b3d2-4214-a69d-cf916f90708a"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "9cf726dc-09ed-4456-84b3-4d4efd9213ab"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "c56ee26a-38e0-4ce3-b1ae-68557f622320"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "1e994fe6-4762-43f0-bd12-e15412d7f0fb"
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
                                "id": "23037878-98d3-4fba-907d-6b1756e563a4"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "81556cf0-590d-4da3-8aa2-e4f0c53771d1"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "d3ae878f-c302-4d62-a361-1cc8c9febe53"
                              }
                            ],
                            "activeCells": {},
                            "id": "68fc9003-ca88-4c53-a3d9-6af2d5341fce"
                          }
                        ],
                        "id": "d2690469-bf52-45b3-a235-5b6913fcb60e"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "e53f4ec2-7396-493c-85f3-4c7ccf2d3699"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "18b5162d-fd86-4933-baf0-f34ab5748684"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "027ea8df-50ba-43d4-8c21-989c004afd4b"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "a07b66d7-22eb-483a-9bf4-2bfad4e123ad"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "324dcb40-0ad9-4436-b59a-0f6f844e9ccc"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "ab187406-4f05-4cf1-b152-aac3e80be1c7"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "713de4d9-f356-406c-9738-e507bde572fa"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "c7e88ffc-6612-4084-aa5a-f6159064d4f7"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "65c622d8-3c6d-4ebf-8280-6119168d97a7"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "e8ce8d47-2173-44e7-9e17-f0ca6947167b"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "e116e937-168a-4732-a826-1adfab2a71be"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "5eea25d6-5c13-41f1-9d4b-97a9cb9aaf53"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "fa3eab60-aad1-4b8d-9d09-2aa480169540"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "ee8de601-fdba-4522-9002-6b90c55e2307"
                      }
                    ],
                    "activeCells": {},
                    "id": "1a486cd2-3648-4b2e-8cbc-7cacdd6f64d5"
                  }
                ],
                "id": "e2c20e07-de49-4a8c-abfd-6c833be3f2bb"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "201ade7d-3cb2-4be4-8484-0fd337344a95"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9e297fba-6933-44b0-bb42-dfa1127ad875"
              }
            ],
            "activeCells": {},
            "id": "ec3f2b32-e6e1-45d7-973d-884b43bef316"
          }
        ],
        "id": "beeccbfc-760a-4b68-b421-a24ba1891a7a"
      },
      "sampleMarkdown": "# Sample Specification for DoSomeMath\r\n\r\n-> id = 1ce5a85f-a681-49dc-81aa-3b8b2814c179\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6859337-06:00\r\n-> tags = \r\n\r\n[DoSomeMath]\r\n|> DoSomeMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "ParkingExpiry",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.ParkingExpiryFixture",
                "id": "8e5e3376-33bc-44ec-8bef-76e0081bb1c9"
              },
              {
                "type": "comment",
                "text": "## TicketIsGiven",
                "id": "2cd69274-f33f-458b-a0ad-4cbb6b4294fc"
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
                        "id": "4e5a91b7-7b67-471b-82e4-f9e183e30d4f"
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
                        "id": "02deab8c-9096-4639-bbcd-d73ab297bb44"
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
                        "id": "1fbd8fe6-d797-4ec4-bdfb-86a9edbfc49f"
                      }
                    ],
                    "activeCells": {},
                    "id": "e00fc3e2-1a33-45cb-866f-7a9a95115fc2"
                  }
                ],
                "id": "cd12be31-879b-46ae-b00a-05496a88ecd1"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "33e739dc-d171-4e8a-9d38-eb3944f6b05a"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "25a771bc-a118-4f9a-9386-f6a07d35d36a"
              }
            ],
            "activeCells": {},
            "id": "7db52bb9-ff5a-4880-bbdf-7d026ae4c0eb"
          }
        ],
        "id": "2e882ac1-4366-44d6-80ac-60c7c1562e6a"
      },
      "sampleMarkdown": "# Sample Specification for ParkingExpiry\r\n\r\n-> id = 63ca63bc-22f3-4913-939e-b873cec5c4ff\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6869337-06:00\r\n-> tags = \r\n\r\n[ParkingExpiry]\r\n|> TicketIsGiven\r\n    [table]\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Player",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.PlayerFixture",
                "id": "465ee23a-5047-4049-9798-c47e53cecca8"
              },
              {
                "type": "comment",
                "text": "## PositionIs",
                "id": "45148161-a3e0-4cbb-8db3-63bebdefe11e"
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
                        "id": "1976a3a4-5afe-443f-b530-6f5047b0c086"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "2d5333f5-c203-4190-9e27-752ca03e283b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "71c8645e-c05c-4c0b-9431-06d78ef6a0d3"
                      }
                    ],
                    "activeCells": {},
                    "id": "d4f92208-1102-41cf-9ffe-f12a198f826c"
                  }
                ],
                "id": "bed43ec6-7d3e-4408-9170-4c4928c5087c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "5785c8d0-eb13-4580-a583-13ee8f66e767"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9c2dd3fc-327b-487f-b8d9-7c12a1c36b16"
              }
            ],
            "activeCells": {},
            "id": "eaf13e44-e7f9-4f0f-be3c-cd7b86ea1de8"
          }
        ],
        "id": "61f921d2-a92d-47ff-bc57-727d617e968c"
      },
      "sampleMarkdown": "# Sample Specification for Player\r\n\r\n-> id = b66f7756-3d75-44f0-ad48-8d24876eea09\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6869337-06:00\r\n-> tags = \r\n\r\n[Player]\r\n|> PositionIs\r\n    [table]\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "SelectionList",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SelectionListFixture",
                "id": "3fd6c7f1-bc29-4de6-8e00-ac25f807302e"
              },
              {
                "type": "comment",
                "text": "## FirstAndLastName",
                "id": "d81cb8b6-4cbe-4780-b10a-24a0d9991839"
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
                        "id": "cecf5505-8ed9-48d0-a938-88afc07ba411"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "1b6bed23-7722-4930-af89-63dda1839806"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "f0e27598-3fe7-4399-b2eb-ca5d40b6f9f4"
                      }
                    ],
                    "activeCells": {},
                    "id": "07c25a71-732c-4101-a4f9-7f42312161b2"
                  }
                ],
                "id": "b37bb741-30d3-4ef9-9130-a5a29209b4db"
              },
              {
                "type": "comment",
                "text": "## names",
                "id": "0987ec8b-b25b-43b8-b0a2-28e90cd14f1b"
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
                        "id": "3835fa80-84fd-432e-89eb-49936aa4e4fc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "d99add46-ede0-4a55-b296-1531f1498c24"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "40da4b75-bde9-47a1-8f0f-1bd26a8eec84"
                      }
                    ],
                    "activeCells": {},
                    "id": "390824a7-bacf-4ba8-928e-1a43425e8bcf"
                  }
                ],
                "id": "b45e1d62-b530-4d75-8b47-ae451857eba3"
              },
              {
                "type": "comment",
                "text": "## TheEnumOptionIs",
                "id": "e48ab332-ef9b-452a-a91d-5a6c88b3cf78"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "SecondOption",
                  "selectedOption": "selectedOption"
                },
                "collections": [],
                "id": "e7fe747c-66fa-40fc-9597-d0514a22fcdf"
              },
              {
                "type": "comment",
                "text": "## TheNameIs",
                "id": "467a4cae-f59e-49e1-be5f-3d99cda3722c"
              },
              {
                "key": "TheNameIs",
                "cells": {
                  "first": "first",
                  "last": "last",
                  "fullname": "fullname"
                },
                "collections": [],
                "id": "638aaa45-77a0-42da-84bd-819ae418b894"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "275a9db8-9286-435a-9c04-080011cdc0d7"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "51ae46bb-1150-45f6-a047-f8acb16904fe"
              }
            ],
            "activeCells": {},
            "id": "343bdcc1-3b2f-47ae-9a6f-face53bc302c"
          }
        ],
        "id": "a253fc08-c937-4399-b108-8de75df29939"
      },
      "sampleMarkdown": "# Sample Specification for SelectionList\r\n\r\n-> id = e5bce011-fa29-41d1-a6fc-0f022fa110c4\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6869337-06:00\r\n-> tags = \r\n\r\n[SelectionList]\r\n|> FirstAndLastName\r\n    [table]\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n\r\n|> names\r\n    [table]\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n\r\n|> TheEnumOptionIs option=SecondOption, selectedOption=selectedOption\r\n|> TheNameIs first=first, last=last, fullname=fullname\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Simple",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                "id": "1c55d523-569f-4377-8ba7-c126957633fe"
              },
              {
                "type": "comment",
                "text": "## A",
                "id": "34914271-d310-4ac2-99c2-5c1bfc986b1c"
              },
              {
                "key": "A",
                "cells": {},
                "collections": [],
                "id": "f26fe8a6-850a-4f5a-b5d5-2d75946f94bd"
              },
              {
                "type": "comment",
                "text": "## B",
                "id": "4f973b11-f3a7-481b-a52c-0a4f351b4878"
              },
              {
                "key": "B",
                "cells": {},
                "collections": [],
                "id": "aa6b4c08-0323-4c1d-b801-b4a372f3248b"
              },
              {
                "type": "comment",
                "text": "## C",
                "id": "146e9512-88b4-44f2-a84c-f46c6e523e76"
              },
              {
                "key": "C",
                "cells": {},
                "collections": [],
                "id": "0a465149-57e9-44a5-a879-8357be0a0b24"
              },
              {
                "type": "comment",
                "text": "## D",
                "id": "80745904-d16a-4a69-a18e-77ffe825ca5d"
              },
              {
                "key": "D",
                "cells": {},
                "collections": [],
                "id": "0d853bf3-3843-40c6-a5de-12f6683e0f90"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "86ce36a1-23a8-46da-a40d-219d17378124"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "97d6d86a-e96a-4b53-a8b2-3e9509529e2d"
              }
            ],
            "activeCells": {},
            "id": "25499ef9-3510-4e34-adcf-26218eee0cbe"
          }
        ],
        "id": "70a25714-7e23-4199-b045-b15b88d3e47c"
      },
      "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = a897de5a-79da-4593-8f68-4748ba8a7924\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6879337-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, December 20, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "5438cf56-ff29-49a2-8869-38d05708d730"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "77e95a4a-a7d4-4c45-aa89-146647b923a0"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "86a422aa-868e-4b1a-9613-0c1549db4a2f"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "f0e1b0d1-3527-4ced-8bb4-e486cb2b53b4"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "bae6061e-e7f5-40c4-8f04-7ef2f5b779ab"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "045e88b8-f67e-42ce-ab75-be88bac2adcf"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "2c8f05e9-a066-4fd1-af55-3928ea93227c"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "6b0aad32-e4bb-4dcd-9323-0a547ed1f0cc"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "495adb8b-b46b-407b-b074-2c09c6fec9e6"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "052a079e-38ba-4a5c-af40-f290741dada7"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "6132a86e-d661-4056-b6e1-e3d057b5bbb5"
                    }
                  ],
                  "activeCells": {},
                  "id": "aa61452b-b779-4f3f-ae6b-22b94b8c2cef"
                }
              ],
              "id": "16c273a4-cef8-4454-a8c1-0a754d154985"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = f9245eca-e025-4afc-8689-15e24a2445af\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6879337-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, December 20, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "SingleSelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                      "id": "d2a35e4f-0853-453e-b476-c6686c9dda91"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "37d45d7f-b035-4fde-a7d8-502b7ebdd3c4"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "de56b982-0f3e-4e2b-b54f-e9f56871e9b1"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "e57c601c-d135-413b-ab7c-335cc6694e33"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "1295060d-fb04-4b3f-805e-93813cf3342b"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "d6b4095c-a2db-40ca-b3fe-c34f262147cc"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "830d4d06-255d-4f91-a3ab-7bd6e80d9c73"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "4dd67073-0282-4aee-a57b-84f19bf4cbe0"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "2840348b-7c76-441f-ab3d-5410bdaa01cc"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "a4ab9b21-5b21-4895-bc78-2ca5d1b2a104"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "879a0474-d682-4ab7-8a3b-a8bd6c0aa3eb"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "a8718f76-089d-4df1-9785-51ab7149648a"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "27911224-31f1-4401-ba5e-6c7681d0c3bd"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "f9168226-eb64-4549-95a4-151aaee3edff"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "d485a6c1-94ce-4101-a65c-d1b1936308a3"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "a1b77e39-f00a-45cf-af17-ec0a0f760647"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "981a15b2-2cda-40f3-9362-bfd3fc650f24"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "0e0132f2-21c8-4816-b852-698427de477d"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "2429f093-b287-49bb-a124-241dcf2fb235"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "4ff07c24-72db-4a34-beb1-7d4ce000f3af"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "2d768dfc-9578-46c5-80a5-631889360bb2"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "0812bff9-cdc1-4cb6-a12c-4fbfb12e9267"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "f9d80eee-7a66-4b32-a32e-504620694d4a"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "1edeaece-0d21-4804-a35a-3243d3d7608e"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "d900657e-3713-4cb0-a020-02d078cfdb94"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "6f3ab9dd-54c4-4291-911f-8b49fb99e45b"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "e151a1ff-ce60-4824-a377-4a7e7682b515"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "dcca8404-34c3-4dd5-868a-c81311d1c558"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "355c819f-e032-48a1-b52b-cfbe2f88001c"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "8e7b300e-2429-42c4-8379-e3b32d4124c1"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "0038e501-6ef0-4819-95cb-465decd4d804"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "1ff27152-9305-4fcd-9d78-7643d8831db0"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "3e3ac4c6-210b-41cb-818d-0b45f08b7744"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "f88dac01-0df4-43fc-8995-34f1d94bda31"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "999b0de9-b7f4-4c19-8f0a-0204f1f394bf"
                    }
                  ],
                  "activeCells": {},
                  "id": "7a2f03dd-15ed-4907-a1b8-3a6229ae91b1"
                }
              ],
              "id": "ee18af51-68d4-4215-a779-d0c7e2fb0788"
            },
            "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = f3cf4781-69db-4e8c-bf49-1ea84113aef2\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6879337-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
              "last-updated": "Tuesday, December 20, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "900cfae6-bc9c-4a71-8a95-943bae012851"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "4b08ef58-33e5-43ca-8f3a-2d7e4f36d98d"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "bceeed9c-8fb3-46ea-b080-baf8eceb2b97"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "d49750a5-d9e5-4c50-afb8-860ea1463834"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "418ce8a3-5e1d-4964-b3c8-fcf52bfcc229"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "3d9cf9ad-3450-4b4a-9b74-6cf36f6ada2f"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "db8435a4-2dc2-4219-a0e9-1b5be62f6298"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "dd4b84e3-f0fd-4765-ace0-79e94bca3706"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "a98aadcb-60e4-4b99-9254-081b8e5688de"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "69930845-b2ed-4ba2-9171-c887a96061e3"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "705aa29d-638d-4bb7-970d-ef00d5c02211"
                    }
                  ],
                  "activeCells": {},
                  "id": "781d010a-ccce-4a8b-91ca-08eb9de8ca07"
                }
              ],
              "id": "15b7ba9d-ef44-4e92-a48e-f64a9ebb6ed6"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 8092d363-bb33-4da9-90e9-8f7ff3db33eb\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6879337-06:00\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Tuesday, December 20, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "MandatorySelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                      "id": "8c550172-6d31-46fb-b412-f2714f15227b"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "66a89599-44c0-465b-ae79-bce58417e89c"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "6a450734-4807-40f9-85c4-eaf0f86a6dcb"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "5a2a3d7c-c560-47db-b7a7-138be8975e0a"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "6a751b2c-66be-4c04-b5c2-2abec7e4f803"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "bfa37f8c-634a-4279-9905-c0d4a03626f0"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "2216847d-496e-4daf-9241-c8871843459a"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "43b2c233-3d33-493c-a859-94df2b9e5f39"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "840d4a42-5c1f-4b21-a100-01aca0660767"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "fcd84ad6-872d-4ef9-b6f2-e512caba539b"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "9402f862-11a2-4c79-a974-fe7b5565fec7"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "7f01e2b9-0dfc-48b9-b09c-167f39f4327c"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "1dd86fd6-0185-4ecc-8f34-26c78ee01d4b"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "c18678ec-8734-4e29-a9be-d82e0ac4c198"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "6d809eaf-625c-4e7a-b386-164ec02fc2e0"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "724697f6-e566-4eb4-85f0-d97d73638a07"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "7a4b06a2-925f-4c78-af2e-5cb3a2b03cce"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "b9eeed54-c009-4d1e-ac05-777ecdbe6410"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "a1487570-2303-4857-af5e-287074dfb44e"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "f1a05a56-e79e-4b0e-9242-e568dbfbcdd0"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "f3863d08-550d-4d7c-ba7d-a63b4aeaf876"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "5133e8d3-ae7c-4664-9d20-9ed1c829abd0"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "0f63a1c6-4621-4653-b006-39dbf48b612a"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "fc11a9f2-40b8-48bd-9a0a-56dc9d25716d"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "e4a06567-16d4-430a-8af8-3b9b159bed64"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "e741b6f9-b28f-4b82-a76b-d17ccd9f6fbb"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "87a3117f-27d2-4175-a972-3122ac88b592"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "ead0487e-7f3e-4782-8472-59c79099388e"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "6c6ec5cb-a448-4ad6-8123-c8ce177315bb"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "fe6a45d0-71ea-4934-9746-e9a5559c7ef7"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "eb17c596-ee48-4b1c-aac0-c6d4bbdcca27"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "8659efda-7215-4194-9cfd-4902fb3e857b"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "3517ade2-36e5-4dbd-926d-6dd525421952"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "b9ff00ef-73dc-4571-a52a-cbb0eb6fac22"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "c84ec960-81ac-403f-b759-06fbba3b1719"
                    }
                  ],
                  "activeCells": {},
                  "id": "af9942c6-042f-4a45-9226-7f4191cf7190"
                }
              ],
              "id": "729f88f9-e2e0-46ff-8526-701bde1435a4"
            },
            "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = c44a7092-b343-41ea-baa2-5865d85f93b6\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6889337-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "EmbeddedChoices",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedChoicesFixture",
                "id": "1ef64253-93b9-49f8-bf26-894a154fed13"
              },
              {
                "type": "comment",
                "text": "## Inline",
                "id": "9a924dac-71ec-4ed5-ab03-46b7d4a3530e"
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
                        "id": "f1ed18f5-37bd-4bb2-8c47-5b6c30dffd8c"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "d86fb1e6-6e8b-43c4-b3c5-95435071b4c1"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "8b65dd44-1b10-4e26-b9e1-d9b281b80429"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "a0c87741-ed79-4d06-889b-332d44523370"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "0aad40cd-661a-4e4c-8b8d-5bb6f0fd8316"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "54f73aee-eb34-413e-b864-8096680be243"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "9ccc7ac9-6bac-4cac-ad43-a9187f6e981a"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "478e59a3-79d6-4157-a4b8-60c15510f825"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "0c8368c5-024e-4ece-94e9-36a6f24dcd33"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "2bf105ce-0b87-43e9-a354-4ee7698b22f3"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "3387ed82-e526-4671-8125-c0880a0dba57"
                      }
                    ],
                    "activeCells": {},
                    "id": "f1da8653-32a6-47ba-ada3-77af6a4c103a"
                  }
                ],
                "id": "f7b9f550-c41e-4650-bff6-75dd6acb774a"
              },
              {
                "type": "comment",
                "text": "## MandatorySelection",
                "id": "5dfc019c-96b5-46c5-bee4-a1c6dc850c70"
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
                        "id": "e963594b-f8d8-482c-8e07-cffe3f97a5b3"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "6ca9c34d-2e26-428e-bba0-324df3b573b1"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "d31d5a48-cdbf-438e-831b-13cb950d24fe"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "2b774950-f36a-4932-bdad-1e2956d8a94a"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "2d857ab8-50d1-4e6b-b0c1-4768b60339d0"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "0e854c62-e199-4e6c-bb19-57a2f179c47e"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "87301fc8-1c79-4601-959a-dc3d5650a698"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "973e0470-8ba5-43e6-a8b1-152fdebdf0c6"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "373396e0-2fe6-4da3-aafe-8eecdc3b3b81"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "d8b59c32-4c64-414f-9e9d-5c76b65d6f16"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "1adca280-be28-4b7e-8108-73b20c5ef302"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "f4b089d5-c971-4883-bdfe-ad79f6dabb3c"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "9575eb0f-cfa1-465d-a3f3-bccb24a292df"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "68a46599-3546-419c-89a0-d9e68fd2be26"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "d835a070-254f-4f3e-9884-8a4befb4f505"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "70d1ecd1-9118-45c8-9a94-4885ed702b59"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "19982630-00a6-4859-a13f-d51a62831b65"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "453c0492-008d-463e-935d-f239c6c73f11"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "2992282e-a829-42bf-8897-fd4ba3bd848e"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "147b61f6-3f88-4560-b04d-280bd9b719e5"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "d98bc799-14f0-4f50-a8fe-b4a63efbbe02"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "9ba54f3a-5ff7-4578-8364-71018919e88f"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "baa9b33f-b659-4470-af40-23f5e6f68bca"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "4113b625-89a0-4eb3-94d5-53c34db4af46"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "967c25bd-d6ed-442c-8b26-525a37104e4e"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "24a675ce-961d-4e5f-a0df-5d2fa52bddf0"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "cf3596c0-3de5-452b-9bc4-cda18ca6bf21"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "44c5a512-ee1c-4f29-a11f-793d0f575073"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "1e160b4b-ffc9-4cd0-8db9-f77d1cbe3c47"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "dafb1c7d-4af0-4634-a588-d29c779a3d3c"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "1a06bbbf-05cb-480c-a08c-311bba658f1a"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "a058a3cd-41b5-478c-9ce8-551b50a19ddd"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "c406d57c-9ee4-46ac-bbe5-46fc02abb530"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "79cb45e9-5799-4977-a2fa-e873213c2b29"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "2503bb4d-35dd-4c7a-b74c-3ba429a41f17"
                      }
                    ],
                    "activeCells": {},
                    "id": "b29e315f-7042-4495-9998-4a00fe8e76a0"
                  }
                ],
                "id": "0e48892a-1317-4dbf-b70f-b6536d3f0e9a"
              },
              {
                "type": "comment",
                "text": "## Simple",
                "id": "c0c248e5-4bb6-4bb1-80bc-57ed93ca775d"
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
                        "id": "49b8ee10-e432-4e50-8e05-37be525693e5"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "cfea2ddb-89e0-4003-a0cf-52be2f55a57f"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "6039235e-2752-4ed0-9de6-852b73ffeeb5"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "a3c0a6bb-6587-47da-9be3-bd2874f65336"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "7df90091-8772-4be2-8b4e-ceca09fb3555"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "fb177bd7-072b-4e42-b4bb-b080de8ec37e"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "e202f0f8-9476-4fe6-8c4d-f416f9aaf024"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "eb0de682-117a-4dd0-a05c-64de22138945"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "82237c60-1ed2-4fa4-9fa8-55747c9335ce"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "c07cce14-dd0a-4567-92ac-6c9a472bb9fe"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "6ff784e5-1687-4f97-82ab-9aaa25ce1edb"
                      }
                    ],
                    "activeCells": {},
                    "id": "b59aab78-44ed-4b50-bad2-d46abe30bd3e"
                  }
                ],
                "id": "fe3fa054-c29d-485c-9b78-d9e6014f7635"
              },
              {
                "type": "comment",
                "text": "## Single",
                "id": "c96af2be-7c05-4de6-b787-bed60d5772b3"
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
                        "id": "56439ce2-02ad-4c05-ac2f-8d80ca77013c"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "8fafc16a-c854-471d-9d95-eb24016a6ebb"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "5a353080-5e05-40a0-813f-fc9f9b46b6f5"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "7618c419-0be7-46fc-b170-a39a0edb4f1b"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "435e2f0c-1a41-4a71-8137-c08da2574074"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "16a296e1-c9e3-4bcd-9010-f3919dc4818a"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "969c9b7e-fd64-4d11-826c-fc7816675207"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "2cc3ca97-57bc-46fc-82ec-59b619ab8e3b"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "db59c237-61a1-4eea-b31c-2ae7e7adb008"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "7ee589f5-f6d3-4f12-bde3-e514e5c341d8"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "93875c30-bc6d-4f27-bd10-45cf53d59e04"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "6aefd93a-00bc-46fe-9738-1f62eed68028"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "39e4327e-ce5e-41f0-ad31-64d90f9695c8"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "893a81cd-224f-4eee-8be6-3b94e414503b"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "c98fea46-38b7-45fd-8a8f-b9c7e677a53a"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "1f8125a2-40a8-42f0-9fc8-9016b7fb29b7"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "0ac6cae3-0482-42d5-b14a-3aff5a8987ce"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "6280c257-0a04-4fc8-be8f-4a620d63f308"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "344a83f4-5bef-48de-ade1-8227217a616c"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "9c6af1f3-0e7e-4165-8d49-3d304673bd9f"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "aeb2a61a-203a-48f6-9fd7-03e46db34690"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "25868f17-e332-4b89-b043-0fd1cd0c25e8"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "f62108bb-eb1d-4826-b9c9-1ab687ea1010"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "6ff6a6bb-4c7a-4563-9938-44ac201ab129"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "0c414e8f-d9d9-47f5-bc15-1bc4b9395d44"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "87c1ef7d-08ac-48af-8e84-43892181bd29"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "eadd4781-9669-4659-b196-ac53d13c326b"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "b71b9972-b41f-44eb-8669-742401fda728"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "46faca02-0888-4fdc-b45d-a89961a4ee0b"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "ab379733-135c-4a0a-8b36-35531c6808b1"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "36d64d80-d92f-48a8-be3e-54e1df5fba5d"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "65719f95-1ee0-4a91-b64f-f29d7589f34d"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "d35a8179-6010-4589-a579-120ab76715ba"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "02707299-b86e-40d3-868f-c0efc7a41680"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "6bcaca98-57cd-4f6f-8502-bfb3cc92042a"
                      }
                    ],
                    "activeCells": {},
                    "id": "2c685d6b-d546-45ac-8d8a-fd06ce9bf869"
                  }
                ],
                "id": "1cc0a3e1-61cf-4084-a7eb-eff45c2be487"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "63cf4cfd-4e43-4671-911e-b795534dd83b"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "dff7b1c4-799e-4aeb-8759-70cb5469d0cd"
              }
            ],
            "activeCells": {},
            "id": "da4d77cc-f256-412c-b8be-4e66a17c3d60"
          }
        ],
        "id": "d18ee970-adfe-4713-a578-0a440684cd9a"
      },
      "sampleMarkdown": "# Sample Specification for EmbeddedChoices\r\n\r\n-> id = 7bbee699-515e-4119-b2cb-4bf84ba16649\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6889337-06:00\r\n-> tags = \r\n\r\n[EmbeddedChoices]\r\n|> Inline\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> MandatorySelection\r\n    [MandatorySelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> Simple\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> Single\r\n    [SingleSelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "SingleSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                "id": "dd9e2539-797b-4ce5-9b6e-e1087d8a3bf4"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "b8691665-908a-484b-9e0f-02176fb84820"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "dc4acb57-bb98-49a0-a06a-8257ff68bba9"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "ce15f29c-9550-493c-a04d-6526d28acaa3"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "11034909-432b-4db6-9eb2-0bfad98ee061"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "c1c7aecf-96d6-4232-9465-f9bce7c9f764"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "6915a227-e345-455f-a53a-ebd47e017bc1"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "36494f08-10c4-4a1f-96a5-aaabd9901581"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "76c7192a-912d-4f8e-a81d-2674df9f1d45"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "62f24529-162c-4faf-aa71-fff3dfc3b37d"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "60e2545a-ad2a-47e5-b248-cdbb726b9af0"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "e4ac16e2-833a-44fb-8cf6-1c98ce0cf9cb"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "29069a33-449e-41f2-8860-690e5df5d05d"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "90c807de-5dda-4d45-8576-1689f42ee438"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "1fd5a4f5-d03a-45aa-93e3-3171db4267a2"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "f9f593da-ac13-4243-a1fa-42d8ad5c571c"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "50efdd6a-c324-4843-898e-af9cb4946971"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "5583bc6a-faf2-44ef-bd45-34a8581f1f32"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "90692a04-3396-4821-b48f-eadcf38ba2b6"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "d8cb29f0-7f15-4d37-8805-62fa4cd5fe2a"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "16f8dcd6-ff91-4fda-a52e-70430f04ea9e"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "0109c6dd-64ac-46c9-8547-5117e425b481"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "cecd7b2d-fc1d-4bc2-9e09-dfbc5f2ac33f"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "89e91554-e7b7-40fe-968c-d38bd0d1d77b"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "2ebe2e63-de50-4221-b6e4-23a7aee436a3"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "dbe4269a-3525-4720-bf73-7695cadcbbf3"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "0ecefb92-8d2a-4108-b0c8-32cbeac9bd00"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "4dec2e73-52b9-4ca7-9589-83a3a4d6fdac"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "3557841d-bbc7-4616-ba66-f462a20b55a8"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "57b8bf9d-11c8-4252-8907-aee51826cc55"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "8d8b711d-98af-487c-b6a1-ca24ce0f9c39"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "d0ab1b75-282a-4536-bdbe-367fffac09c4"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "7c088b0e-5b6c-48ba-82cc-7a8e0a463a23"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "19c1d1ee-f6f8-456c-a047-2716845897f4"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "fd4bb696-dc36-482f-85ea-e8fbbdca0c29"
              }
            ],
            "activeCells": {},
            "id": "19c1c26f-5b6f-4d70-aeac-12ca23df44c5"
          }
        ],
        "id": "7fefd324-8cd5-4c49-ab54-eb8257ec42af"
      },
      "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 44c5cf84-4027-496e-b455-bf0901556e6d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6899337-06:00\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "OneOrMoreSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.OneOrMoreSelectionFixture",
                "id": "62db3e0d-9657-487a-abf7-0729680fcb3e"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "1acb7ea8-6255-49c3-89db-a21bb5b8b71d"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "4a9c9f8e-034d-4fe9-851d-4101f83be581"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "220050d7-0216-4455-ad58-9fa8748465c3"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "0d973fa2-2b83-4c7a-906e-b8952d40deb0"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "bdd3862c-5f00-4685-801e-cb2933322da6"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "9b7ab310-8c87-4c05-85ab-aa6f9daac20b"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "e9a470a5-12a8-4024-9bca-8d5519acaf7f"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "83e458f1-4943-456f-aff3-038f571552cc"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "49ccf861-61a6-4c69-95b8-7b1441a0906b"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "4affa802-7de1-4a11-af44-6e3c6eb4f3c1"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "18eb5013-b739-406f-8638-1338aee41028"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "b917ac0b-11c7-4502-a343-87e755d56c6d"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "62743853-c84a-46c6-ae89-1bf00513d1f8"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "8a6fc4a0-bd1b-4257-88a9-5534a996a74e"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "24ab6035-769d-4edd-910a-f04a8c7ce6e1"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "c8a2f678-2bd1-418f-8562-20ab7d52817c"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "0f9deeb6-9dde-40f0-be3e-4525603158a0"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "d0d0e04c-f745-4573-9ab6-49dd93c6c573"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "d1d7a0eb-be73-43f1-bf9b-763218c785b4"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "97d7b766-c462-41de-93a9-181fdca467aa"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "74f26a73-dc18-4629-9166-b3e6afffc6f9"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "9d547ebd-23c0-4567-ae0a-d594e6e119b3"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "4498627f-4684-4654-891a-e5b1f951f5d9"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "3541feaa-338d-488a-87b8-59433ab2c616"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "0b85064e-a35b-47a6-b4ac-0494bbe589da"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "1cf835ad-48ae-4a55-87f7-8e083555f75f"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "895d761e-4252-40a0-b303-af514fcfebdc"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "483b8368-a7c4-4a91-8330-3f4dce5c301e"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "52f3d920-5cb8-44e4-b85e-e27bdacdf24d"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "367d190a-92c0-4cfb-84db-d55b1b4a1d1a"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "be2413be-6a93-4222-8cec-b0a5056e58d7"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "55131393-7819-4357-914d-c8e8101c3418"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "a50376a1-62f5-4b5f-b69b-bfce53b3cf6c"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "7fcc6709-f44a-41b7-b7b9-f2c465bf88d4"
              }
            ],
            "activeCells": {},
            "id": "ccb0094a-c804-4b13-99a1-86117a52fbf7"
          }
        ],
        "id": "f538526b-26df-4f71-bfac-7d6cad54fb0d"
      },
      "sampleMarkdown": "# Sample Specification for OneOrMoreSelection\r\n\r\n-> id = fb08ba06-de55-4060-96ac-a84d8ef045a8\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6899337-06:00\r\n-> tags = \r\n\r\n[OneOrMoreSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "MandatorySelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                "id": "399665ce-ee11-4cdf-8231-184584242184"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "7aef88af-cc12-4de1-bb99-9ad19a0ed9ac"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "b07d36ad-f7db-4a90-92f7-6598857abb43"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "7cfcd6ca-c89d-4e72-a00f-307ad34ad413"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "1bb4559a-582e-458f-9c3e-48b04e35a57c"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "0fe67857-5631-45d6-bca7-48029a64bc5d"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "25f24611-f7fd-4195-9d80-6b05022e027d"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "b8748cff-42e9-4c83-987c-08f3a834b043"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "99903952-0bca-4713-95c2-fd345ac01f62"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "c8119d65-2fad-4435-8453-b47acb85f73b"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "21daed50-5e69-444d-b552-2fdb2cb52274"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "b8541119-d436-40b7-aacb-0f794ee5c931"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "30443611-54fc-40ff-be0d-526b6296d200"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "1a407c0a-932a-4327-aa51-6ee6ded7bcad"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "45d9607e-9e88-4d5d-b25c-928f442afca5"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "7c96d75a-34d2-4494-86e5-446a2910f0df"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "76ee159b-3bc5-4ff6-b08d-cd955a0831d5"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "6bc3b990-490f-4d80-99f6-804f95bf815c"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "eb82fefe-8bdb-46c9-bf1a-39a61edb021c"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "1239847e-4014-4da8-9b29-10b6cb2599d5"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "6a8e6e9d-4aea-48f2-9df2-bb706a2755e3"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "b4ae85ec-873a-4ee5-8f86-d032958291a3"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "1fa890f0-34cc-4405-b9b5-a2d58ffeaeff"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "86b7ea22-fc27-419d-9187-77f783acab84"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "d7056b87-f9d6-4287-a07c-16962981dd5b"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "7450a183-d11e-4801-bd1e-7d38a5e2eecf"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "9fd5de94-a495-4404-b035-64834ee1b3ec"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "b0d383b5-dbab-4de7-af23-2a09e3365c76"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "377edf49-a3e5-4c42-8ab4-d1b32344c17f"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "811dc8e1-6866-46ef-a21e-afbaeb71c033"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "c29c8130-7a13-44a8-8120-81abffa4d6b4"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "ad04e4d7-cac3-4afb-9f25-454f4687d234"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "e6a4fc36-62cb-4ad6-98b3-0c8a0947b12a"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "53262ddd-4aa8-447a-8d70-882ca5d44a7e"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "61ee1caa-dfa4-4f9d-b2ad-21ce785bd271"
              }
            ],
            "activeCells": {},
            "id": "5b40b05f-350e-4112-bd28-92db3d116670"
          }
        ],
        "id": "ac7ab825-80eb-4c4d-b1f1-6ddc2bfca88b"
      },
      "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = 120fd200-7bce-4c66-8069-28a85112eb32\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6899337-06:00\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SentenceFixture",
                "id": "961f6982-7328-43bb-ac1f-41036caf8461"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "8974f863-4ca5-40fe-b7ac-8e01ce6dda70"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "687ac9b0-ac41-4576-840a-d08fbdc7c164"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "98350c21-38e6-4ee1-b4ef-c42161005ae3"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "c8ffe8dc-340d-486d-9c20-0438b8784815"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "5f44de5c-cf0f-4d06-ae05-a02529ef8d91"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "a5867d11-5768-4a2f-802c-da64474fb0d6"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "7b851b59-b05d-4d21-b010-fa9384b6c421"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "73652360-c8b6-446a-9fe9-95baa78a49e4"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "8e73e505-23dc-41de-8299-55f21294e5e5"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "6870ceab-99f9-4951-9bcb-3f9547565efa"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "96b34787-d543-404c-96cd-fa7178bb8b4e"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "955f8e5b-f638-4c88-a938-17c6c4ecaea4"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "bf82f8aa-eef8-441f-8ee2-500602caa0d6"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "43c76390-cef3-4494-a641-b1bc6f9cf1a5"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "dadc9c9a-0961-4a45-9759-c77351d728c2"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "07ce4559-f370-476e-8f15-17dca8e1dead"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "536fb82b-23e2-4755-9e7c-405d823f63b4"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "f4bf86ed-da82-42ce-8297-1bdd9ae2c0f5"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "d482c328-bd77-4b3b-8143-0ddf5724043f"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "135c12e7-d361-43fc-8a29-33c28c6e1898"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "d3b783a9-90d6-4001-a4ec-7097c6dc3b19"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "24b91371-4af8-4687-b5e1-d703552c82b1"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "08909d81-6816-4325-9f07-388d9260bcf4"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "91efddfe-72a1-4762-850f-8dfa4b428b0c"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "93e8752b-7226-4956-a286-b2b1d8ffb7cf"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "a532b71f-5c00-43a0-85d0-395647717fa4"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "ea0b1eb9-ad4e-442c-a50f-19cfc1f2bb4d"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "ca28ac9a-d342-46c5-9fd1-b20d5ef28301"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "a3694f04-7699-4323-992a-653216a6a47f"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "cf910f0b-9866-4cd8-9b83-395423b172a5"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "14464520-a60f-4c03-8033-da6bbcdb1ec3"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "1af076eb-f5f4-49a6-8df6-21655280005c"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "46c7af0d-4157-4bc1-a71f-d0809020099b"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "b78640b3-d2a9-4b58-911a-ef747a518e08"
              }
            ],
            "activeCells": {},
            "id": "aeb7fbc9-a638-4400-84ae-0ace4dda580b"
          }
        ],
        "id": "6faf3b59-f856-4d30-b3d6-d54fa591367a"
      },
      "sampleMarkdown": "# Sample Specification for Sentence\r\n\r\n-> id = dc70f25a-9e2e-44fe-967e-e5891a47c954\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6909337-06:00\r\n-> tags = \r\n\r\n[Sentence]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "DataTable",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DataTableFixture",
                "id": "5911b80b-6a37-4591-a7d4-cece7308d64b"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "64f9bde0-7855-495f-8cde-762502d7043c"
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
                        "id": "b5ee690e-7f38-44a8-a6b7-4a96052bfa27"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "fcb5ba8b-5a4a-4b73-92d1-bf98956877bc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "d730c2b5-a279-424d-b536-b91fec586656"
                      }
                    ],
                    "activeCells": {},
                    "id": "115c6357-ffa1-4db9-9ee0-d3dc0a25844c"
                  }
                ],
                "id": "4f5d8303-6326-4fb2-9b18-a1f11cd867b6"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "be3b0d07-5cff-4d98-b8b5-5f01a52a4b22"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "e72f5711-3793-4707-855d-4d8f20f4ad1b"
              }
            ],
            "activeCells": {},
            "id": "f364d4d2-1281-4cc3-be9d-501fd92d6090"
          }
        ],
        "id": "a229a8a3-ce93-4068-b4df-ff06880628e1"
      },
      "sampleMarkdown": "# Sample Specification for DataTable\r\n\r\n-> id = a851e186-ee49-41ad-a60a-9b510a1a2b69\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6909337-06:00\r\n-> tags = \r\n\r\n[DataTable]\r\n|> TheDataIs\r\n    [Rows]\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sets",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SetsFixture",
                "id": "336e000d-c427-4432-81ed-247fd19405d6"
              },
              {
                "type": "comment",
                "text": "## AddName",
                "id": "9d882aba-62b8-4f8d-a43b-e88bbdb07c5e"
              },
              {
                "key": "AddName",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "eebf3194-778d-49a0-af66-fbbba4c99761"
              },
              {
                "type": "comment",
                "text": "## InvoiceDetailsAre",
                "id": "b706d1af-27ab-4335-9b5d-dc2c6715311e"
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
                        "id": "91fa3b00-6afd-413c-bb16-d4b294295551"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "a0d83d66-7b48-448d-9319-ada6e58bd62e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "0967a009-5861-4ed9-ab46-1e929ebd58a4"
                      }
                    ],
                    "activeCells": {},
                    "id": "ebbbfd6d-2852-47c6-9ed2-622776d7d1e1"
                  }
                ],
                "id": "6ee7ab87-94d2-4acd-be7f-d311308287c3"
              },
              {
                "type": "comment",
                "text": "## OrderedDetailsAre",
                "id": "96451f95-97cf-4621-af55-649877272271"
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
                        "id": "1f623e37-010d-43da-b19b-3db5b85bb872"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "9bfaf1b3-f72b-4b80-a2d6-a211cbad45a9"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "0e434b7a-9807-42bd-b5d1-475afbd6be2a"
                      }
                    ],
                    "activeCells": {},
                    "id": "cdad411f-d34c-424f-acec-6635f1346ee8"
                  }
                ],
                "id": "da521d94-6e38-4f1a-bc5b-6394726adfa5"
              },
              {
                "type": "comment",
                "text": "## OrderedStringSet",
                "id": "401a1852-c031-4892-8155-ff00fe99fa9c"
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
                        "id": "419c8e43-210a-4f84-9cb5-f04655356e4b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "b397a631-2dd8-4167-976f-ec88e1507070"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "3466c82d-1197-4a59-a2b3-97f7850d1581"
                      }
                    ],
                    "activeCells": {},
                    "id": "2f4ee9b2-d7ef-472f-90c2-bb076aa93fa7"
                  }
                ],
                "id": "94785270-3c37-4783-9929-dba44536c424"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "26319cb2-7255-4541-9239-b70cdd8d295c"
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
                        "id": "3e4b67aa-6e4b-4e07-b504-4b3c1bf9dd9a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "ec5655fb-6ea5-409c-82f7-7abf14aededc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "2f4c4d9d-48a9-4e28-9698-c613a2a342d1"
                      }
                    ],
                    "activeCells": {},
                    "id": "9c611e41-447f-40a4-8f75-5ea76bb48162"
                  }
                ],
                "id": "b949a4b9-6811-4c1b-b43a-e7c7b3b5e01f"
              },
              {
                "type": "comment",
                "text": "## ThrowsErrorOnDataFetch",
                "id": "6970e58b-317d-4ed3-b194-fec21492e86f"
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
                        "id": "bb9b1cc8-a4be-4b12-956d-64478e4724d3"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "2d26ddfd-d475-4951-9038-b84e2a6c3c6e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "5a1ad030-f0f5-4b20-b430-b8df28a939fb"
                      }
                    ],
                    "activeCells": {},
                    "id": "d0104340-bba0-466f-ae6f-21005a1b5014"
                  }
                ],
                "id": "8b3ab8db-8b16-48c3-a62c-84da5c26fafb"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "322d7ada-29db-4137-9ab0-6fe9f753a01e"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "1ba34309-532c-4597-b186-2645747a77f1"
              },
              {
                "type": "comment",
                "text": "## UnorderedDetailsAre",
                "id": "56aee1d1-c4a4-4f8c-9fd1-7f29e8c6a62a"
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
                        "id": "41949def-ea00-487e-a74d-ecfcba3cc4d4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "310297a6-7ebc-402c-804c-59fcdc43b93c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "b7d940b3-311a-448d-b65b-fa0701befa02"
                      }
                    ],
                    "activeCells": {},
                    "id": "49ce9a98-c371-4d1f-ac79-4d06681153a3"
                  }
                ],
                "id": "68e73d32-591e-4bfc-82cc-c5e3a451fe9e"
              },
              {
                "type": "comment",
                "text": "## UnorderedStringSet",
                "id": "db3ae473-0d22-423f-9273-1c467337478f"
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
                        "id": "6c6e90b5-6618-4721-8128-4ff956c30beb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "3495d226-059d-42c7-bdeb-f0378fe94a8b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "1994b0fb-a1e5-4a52-a650-9cd2b3dc6f83"
                      }
                    ],
                    "activeCells": {},
                    "id": "59c1fd74-4dfc-4baf-afb9-a566c7cc7796"
                  }
                ],
                "id": "8e5525de-f05b-4746-8c7a-71d5f48392df"
              }
            ],
            "activeCells": {},
            "id": "715b43a8-9051-454c-91ed-1d58bf8526f5"
          }
        ],
        "id": "0f0150e3-1244-4a9c-87f2-82fc44f7ce0e"
      },
      "sampleMarkdown": "# Sample Specification for Sets\r\n\r\n-> id = c12c3f93-26bb-4b2b-93a6-6c2187ca0f1d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6929337-06:00\r\n-> tags = \r\n\r\n[Sets]\r\n|> AddName name=name\r\n|> InvoiceDetailsAre\r\n    [Rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> OrderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n\r\n|> OrderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n|> TheDataIs\r\n    [name]\r\n    |name|\r\n    |name|\r\n    |name|\r\n    |name|\r\n\r\n|> ThrowsErrorOnDataFetch\r\n    [rows]\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n\r\n|> TODO message=message\r\n|> UnorderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> UnorderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "SometimesSlow",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SometimesSlowFixture",
                "id": "053d8ccb-935b-439e-8a38-5b19503b5b42"
              },
              {
                "type": "comment",
                "text": "## ReadText",
                "id": "37ce0fa7-5a27-4334-b0e2-d756f327d241"
              },
              {
                "key": "ReadText",
                "cells": {
                  "text": "text"
                },
                "collections": [],
                "id": "7a1d1d91-a0bb-4265-897f-68c8c3251fad"
              },
              {
                "type": "comment",
                "text": "## Slow",
                "id": "ab8876fa-d393-4b6b-b434-9683a4248f37"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "c52fda66-055e-4cb0-8efc-86e1a03824a0"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "4c666628-a6b7-41b6-bc59-9e39b572c1bc"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "b214aff7-9199-47a9-8fb6-0d571822a5a6"
              }
            ],
            "activeCells": {},
            "id": "c8e75209-f829-44ef-a9af-a98afc6a83d4"
          }
        ],
        "id": "3aec9d9c-e291-4744-bdaa-7c9cb0e51ce3"
      },
      "sampleMarkdown": "# Sample Specification for SometimesSlow\r\n\r\n-> id = 5f006413-4077-434f-ab3b-1b23e4dc70b6\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6929337-06:00\r\n-> tags = \r\n\r\n[SometimesSlow]\r\n|> ReadText text=text\r\n|> Slow\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Tuesday, December 20, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Table",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.TableFixture",
                "id": "23002c2e-ba77-44f8-9611-4192b5a3a948"
              },
              {
                "type": "comment",
                "text": "## AfterThrowsError",
                "id": "3c75110b-c08d-4875-8774-aca1d6ab5a9c"
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
                        "id": "c3257599-eb30-45e6-871f-9462486ab919"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "ca94395e-4e64-4e87-9c01-c24ed84d1d4d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "90a46520-5ed6-4b7b-9dde-8e124b0889b9"
                      }
                    ],
                    "activeCells": {},
                    "id": "24226a29-ebdc-4914-aed2-d93933f2b4d6"
                  }
                ],
                "id": "0560ee99-06f9-4721-be89-509bb751c57c"
              },
              {
                "type": "comment",
                "text": "## BeforeThrowsError",
                "id": "d68f8030-1ac6-4f8b-b806-d26d4e201c01"
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
                        "id": "c0ed12b0-45b3-4f52-bc34-3dd5fb435f09"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "6feabe65-2116-4611-8423-bc61573ad9c9"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "cf70c1d6-9e19-41ed-b0a5-2b0b424ba82b"
                      }
                    ],
                    "activeCells": {},
                    "id": "885221a2-811f-42f3-a4bc-fcf0f5964aa3"
                  }
                ],
                "id": "23ee04bc-b420-4b1c-82f2-0b35035aa2d1"
              },
              {
                "type": "comment",
                "text": "## decisions",
                "id": "2ed11dad-b3b0-4a3d-9e2b-8bf95605d0d5"
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
                        "id": "21470b1e-2289-4b52-86ec-49b04d8a88f3"
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
                        "id": "162d1fcb-740d-482f-83f7-1e7ef3f3467b"
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
                        "id": "89779cac-d799-4366-bf54-fa74f279b140"
                      }
                    ],
                    "activeCells": {},
                    "id": "38fadd06-523a-4974-b67b-daae83fd2777"
                  }
                ],
                "id": "7def7cd7-a5df-4f14-9a32-f173fa2aef8c"
              },
              {
                "type": "comment",
                "text": "## Divide",
                "id": "5d17487b-cf0c-4cfd-8315-0a1c037fb4c5"
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
                        "id": "c3ba6d63-921e-4ca5-b704-1b3105d10012"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "f641667b-e9eb-48a3-bdc9-a6f484c58224"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "9b6880e0-670d-42da-a891-7a9c55a23a12"
                      }
                    ],
                    "activeCells": {},
                    "id": "1d6b2b15-4f80-46da-bfd2-fa2683bc8c86"
                  }
                ],
                "id": "f62d70ef-d350-4b7a-b566-6d621aa4bdf0"
              },
              {
                "type": "comment",
                "text": "## IsPositive",
                "id": "b3f140f6-4062-4d7a-972d-fd64caeeec2c"
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
                        "id": "451ed72b-7296-49c9-b627-75b416fb3836"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "16d70ef8-db5c-44d9-8096-73b07fc82081"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "9ee4c725-2aa9-4baf-8db3-66743c36ee3a"
                      }
                    ],
                    "activeCells": {},
                    "id": "a513c365-c0b0-4d19-8c20-2ba811e7e96a"
                  }
                ],
                "id": "795c4334-5037-478a-a701-7ede3a1e2c22"
              },
              {
                "type": "comment",
                "text": "## Sum",
                "id": "a4939881-7d83-46b8-9196-d97e2c4729be"
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
                        "id": "e4ec67c4-8293-469d-9d36-c8126992037c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "b203de0c-b94d-483d-9469-3bd32b6ed7e0"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "02ce7b5e-da65-44ba-91fa-b1553442fdc8"
                      }
                    ],
                    "activeCells": {},
                    "id": "52d7b45d-680c-47aa-9ada-4d8baf1ed281"
                  }
                ],
                "id": "6aba6b53-07d4-4a13-a1d4-675e4354ac31"
              },
              {
                "type": "comment",
                "text": "## SumInternal",
                "id": "289b54f1-af99-4105-bc27-2e848a526aab"
              },
              {
                "key": "SumInternal",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "9d5545e7-2c21-4456-ac3b-029b6d091a15"
              },
              {
                "type": "comment",
                "text": "## TableWithLotsOfOptions",
                "id": "ca222c60-0b52-4764-b2c8-40c15e8a44cb"
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
                        "id": "7cf7e6a9-d414-4dc2-bf23-ccee0f96cc87"
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
                        "id": "cacede85-a5f5-49dd-a3bc-2683ecddf97b"
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
                        "id": "40f273b6-3cf3-4224-a0bf-c9eed272b48d"
                      }
                    ],
                    "activeCells": {},
                    "id": "f9b07835-5af4-4d8d-934e-f00f0612277c"
                  }
                ],
                "id": "b74de5ef-81db-46f0-866a-637ddc5afc51"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "de8931ff-3c01-4c60-a9f3-b6860b611c71"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "3b19dba5-fd4e-427c-8d9e-acfc8cbeaca6"
              }
            ],
            "activeCells": {},
            "id": "41e98ed7-8c08-4865-b26c-d309fa3d9f78"
          }
        ],
        "id": "0214cab5-2c49-45e5-abcd-40f18220ad75"
      },
      "sampleMarkdown": "# Sample Specification for Table\r\n\r\n-> id = 8dc55884-2da7-4493-a14f-2fd087c4d159\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-12-20T08:56:41.6929337-06:00\r\n-> tags = \r\n\r\n[Table]\r\n|> AfterThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> BeforeThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> decisions\r\n    [table]\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n\r\n|> Divide\r\n    [Rows]\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n\r\n|> IsPositive\r\n    [table]\r\n    |number|IsEven|\r\n    |number|true  |\r\n    |number|true  |\r\n    |number|true  |\r\n\r\n|> Sum\r\n    [sum]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> SumInternal x=x, y=y, sum=sum\r\n|> TableWithLotsOfOptions\r\n    [table]\r\n    |a|b|c|d|e|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    }
  ],
  "time": "12/20/2016 8:56 AM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}