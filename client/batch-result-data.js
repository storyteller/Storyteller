module.exports = {
  "records": [
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "81884da3-dcfa-4497-93b7-cf49b615b56d",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "929bfbc7-6760-4438-851a-88cc836d46a6",
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
            "id": "44274812-2518-4fc7-9464-8b90f89503a9",
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
            "id": "77dbdc98-7e5d-4905-ad7c-61f83102623f",
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
            "id": "3b807f5d-4db9-446f-9b49-0c152c826e1f",
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
            "id": "e4b1196b-5ea7-4c31-8e78-40224f2fd400",
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
            "id": "1e7d762b-d534-4a92-8e6e-0eb3985477b0",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__19.MoveNext()\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)",
            "cells": [],
            "id": "4e1ccd72-00df-4cd8-bcc7-fded59ceb7b7",
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
            "id": "81884da3-dcfa-4497-93b7-cf49b615b56d",
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
            "end": 1162,
            "duration": 1162
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
            "start": 1146,
            "end": 1149,
            "duration": 3
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 1150,
            "end": 1152,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 1152,
            "end": 1155,
            "duration": 3
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 1155,
            "end": 1155,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1155,
            "end": 1156,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 1156,
            "end": 1156,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 1157,
            "end": 1157,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 1157,
            "end": 1157,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 1157,
            "end": 1157,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1157,
            "end": 1157,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1157,
            "end": 1157,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1158,
            "end": 1158,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 1158,
            "end": 1159,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 1159,
            "end": 1159,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 1159,
            "end": 1159,
            "duration": 0
          }
        ],
        "duration": 1162,
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
        "time": "8:22 AM",
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
                "id": "929bfbc7-6760-4438-851a-88cc836d46a6"
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
                        "id": "44274812-2518-4fc7-9464-8b90f89503a9"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "e273194b-1d39-4a96-aba3-39533a8ae6cb"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "77dbdc98-7e5d-4905-ad7c-61f83102623f"
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
                        "id": "3b807f5d-4db9-446f-9b49-0c152c826e1f"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "e4b1196b-5ea7-4c31-8e78-40224f2fd400"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "1e7d762b-d534-4a92-8e6e-0eb3985477b0"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "4e1ccd72-00df-4cd8-bcc7-fded59ceb7b7"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "fc5f551b-873d-4cd1-8944-88c90a9505c2"
              }
            ],
            "activeCells": {},
            "id": "81884da3-dcfa-4497-93b7-cf49b615b56d"
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
            "id": "eeabf68a-5f2b-4f8d-996c-c210ecebdc61",
            "spec": "general1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "da586b82-72d3-42e0-ba43-4875851b9336",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "da586b82-72d3-42e0-ba43-4875851b9336",
            "spec": "general1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "da586b82-72d3-42e0-ba43-4875851b9336",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "da586b82-72d3-42e0-ba43-4875851b9336",
            "spec": "general1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "da586b82-72d3-42e0-ba43-4875851b9336",
            "spec": "general1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "da586b82-72d3-42e0-ba43-4875851b9336",
            "spec": "general1",
            "position": "5",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "da586b82-72d3-42e0-ba43-4875851b9336",
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
            "id": "a59fb2ee-ff0c-4430-9814-5409fb216043",
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
            "id": "a59fb2ee-ff0c-4430-9814-5409fb216043",
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
            "id": "a59fb2ee-ff0c-4430-9814-5409fb216043",
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
            "id": "e5b025b6-f163-4d6c-af58-e0c5327c38a8",
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
            "id": "e5b025b6-f163-4d6c-af58-e0c5327c38a8",
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
            "id": "e5b025b6-f163-4d6c-af58-e0c5327c38a8",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eeabf68a-5f2b-4f8d-996c-c210ecebdc61",
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
            "end": 2,
            "duration": 1
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
            "end": 4,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 4,
            "end": 4,
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
        "time": "8:22 AM",
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
                "id": "da586b82-72d3-42e0-ba43-4875851b9336"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "a59fb2ee-ff0c-4430-9814-5409fb216043"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "e5b025b6-f163-4d6c-af58-e0c5327c38a8"
              }
            ],
            "activeCells": {},
            "id": "eeabf68a-5f2b-4f8d-996c-c210ecebdc61"
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
            "id": "5e91e9fc-31fa-42df-8700-153b30f58606",
            "spec": "SometimesSlow",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "60629d6f-bbfc-4738-85f3-6a22760dddc4",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5e91e9fc-31fa-42df-8700-153b30f58606",
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
        "time": "8:22 AM",
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
                "id": "3fdc8ab1-8ff2-4aad-9363-8714405c6f98"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "60629d6f-bbfc-4738-85f3-6a22760dddc4"
              }
            ],
            "activeCells": {},
            "id": "5e91e9fc-31fa-42df-8700-153b30f58606"
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
            "id": "65082aad-c3a0-474f-8a0f-fbabb38d06b5",
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
            "id": "4cbde94d-740a-4a93-9ad7-bacf8eb77e59",
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
            "id": "a8bc813b-45df-4766-9de1-1e9f28d60170",
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
            "id": "8cab8dc8-6f27-4773-b0e3-0043e4b6cd03",
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
            "id": "4da8dcb8-56f9-4c23-87db-a35bf4da5024",
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
            "id": "21af5fe8-f7fc-4cb8-98d6-e70d9fe0a902",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "65082aad-c3a0-474f-8a0f-fbabb38d06b5",
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
        "time": "8:22 AM",
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
                "id": "4cbde94d-740a-4a93-9ad7-bacf8eb77e59"
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
                        "id": "a8bc813b-45df-4766-9de1-1e9f28d60170"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "8cab8dc8-6f27-4773-b0e3-0043e4b6cd03"
                      }
                    ],
                    "activeCells": {},
                    "id": "fcc3d2d5-509e-4f6a-b519-57041332b0b9"
                  }
                ],
                "id": "3441e02f-d011-4eb0-aa5c-00057899982c"
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
                        "id": "4da8dcb8-56f9-4c23-87db-a35bf4da5024"
                      }
                    ],
                    "activeCells": {},
                    "id": "818475f4-521e-443e-87d4-d61b0c95d171"
                  }
                ],
                "id": "c06e3165-3520-4c06-82c4-9c31071efe4b"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "21af5fe8-f7fc-4cb8-98d6-e70d9fe0a902"
              }
            ],
            "activeCells": {},
            "id": "65082aad-c3a0-474f-8a0f-fbabb38d06b5"
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
            "id": "6b077fde-75b3-4063-acad-39fe8c4bf0b8",
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
        "time": "8:22 AM",
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
                "id": "f5e9b2a1-75c5-4b81-8afc-7bdc16dd484c"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "8ad0766c-59f5-4f0a-b6cb-830794705018"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "54632b29-5402-4b14-93ee-ab0725f7d332"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "ca831bf6-b406-40fd-9569-fbb1b11ddf27"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "2f8548b9-c18b-4984-aaa4-b697ab665311"
              }
            ],
            "activeCells": {},
            "id": "6b077fde-75b3-4063-acad-39fe8c4bf0b8"
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
            "id": "628e7ddf-5337-4ae4-8b64-b2b0ded40a7e",
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
            "id": "85b20779-4f79-41d5-b975-1450eecac20c",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "628e7ddf-5337-4ae4-8b64-b2b0ded40a7e",
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
        "time": "8:22 AM",
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
                "id": "188cf1e3-dfbe-4d08-818d-c71aacbbef93"
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
                        "id": "85b20779-4f79-41d5-b975-1450eecac20c"
                      }
                    ],
                    "activeCells": {},
                    "id": "80ada908-5d5f-4a04-867d-d53a1d543cbb"
                  }
                ],
                "id": "f040ed5d-479d-4cad-af0b-8e9ed22420ab"
              }
            ],
            "activeCells": {},
            "id": "628e7ddf-5337-4ae4-8b64-b2b0ded40a7e"
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
            "id": "986ab701-6f34-448f-b6eb-7eb8d1833266",
            "spec": "general4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "dbc1100b-4844-4fd9-97aa-e9b1f86527af",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "80262946-156c-486e-9c32-cf80fc1f6ce9",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "f9d262fd-d0aa-4324-aafc-f3cfd0e4434e",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "986ab701-6f34-448f-b6eb-7eb8d1833266",
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
        "time": "8:22 AM",
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
                "id": "dbc1100b-4844-4fd9-97aa-e9b1f86527af"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "80262946-156c-486e-9c32-cf80fc1f6ce9"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "f9d262fd-d0aa-4324-aafc-f3cfd0e4434e"
              }
            ],
            "activeCells": {},
            "id": "986ab701-6f34-448f-b6eb-7eb8d1833266"
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
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#x27;setup&#x27; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#x27;FixtureThatDoesNotExist&#x27; does not exist&#xD;&#xA;   at StoryTeller.Model.MissingFixture.SetUp()&#xD;&#xA;   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass13_0.&lt;toExecutionSteps&gt;b__0(ISpecContext x)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c)&#xD;&#xA;   --- End of inner exception stack trace ---&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass3_0.&lt;AsCritical&gt;b__0(ISpecContext c)&#xD;&#xA;   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "8:22 AM",
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
            "id": "2d8f79ae-05f7-4713-bd5b-afbec86a7965",
            "spec": "paragraph1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "301d6a00-3010-4088-bace-1aafdb552cff",
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
            "id": "301d6a00-3010-4088-bace-1aafdb552cff",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "301d6a00-3010-4088-bace-1aafdb552cff",
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
            "id": "301d6a00-3010-4088-bace-1aafdb552cff",
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
            "id": "f10ac15b-e986-433d-8e42-faa823dd7fd4",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f10ac15b-e986-433d-8e42-faa823dd7fd4",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f10ac15b-e986-433d-8e42-faa823dd7fd4",
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
            "id": "f10ac15b-e986-433d-8e42-faa823dd7fd4",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9c8fac1a-02da-4df2-9c02-e9da90a4a555",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9c8fac1a-02da-4df2-9c02-e9da90a4a555",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9c8fac1a-02da-4df2-9c02-e9da90a4a555",
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
            "id": "9c8fac1a-02da-4df2-9c02-e9da90a4a555",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "724c309e-457c-4ce0-8600-a4515a56887f",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "724c309e-457c-4ce0-8600-a4515a56887f",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "724c309e-457c-4ce0-8600-a4515a56887f",
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
            "id": "724c309e-457c-4ce0-8600-a4515a56887f",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8b29393d-440b-4699-89ef-384a031184d4",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8b29393d-440b-4699-89ef-384a031184d4",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8b29393d-440b-4699-89ef-384a031184d4",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<>c.<.ctor>b__0_2(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "8b29393d-440b-4699-89ef-384a031184d4",
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
            "id": "8b29393d-440b-4699-89ef-384a031184d4",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2d8f79ae-05f7-4713-bd5b-afbec86a7965",
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
            "subject": "StartWith",
            "start": 3,
            "end": 4,
            "duration": 1
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
            "subject": "TheValueShouldBe",
            "start": 4,
            "end": 4,
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
            "subject": "TheValueShouldBe",
            "start": 4,
            "end": 4,
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
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "MultiplyBy",
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
            "subject": "TheValueShouldBe",
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
        "time": "8:22 AM",
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
                "id": "301d6a00-3010-4088-bace-1aafdb552cff"
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
                        "id": "f10ac15b-e986-433d-8e42-faa823dd7fd4"
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
                        "id": "9c8fac1a-02da-4df2-9c02-e9da90a4a555"
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
                        "id": "724c309e-457c-4ce0-8600-a4515a56887f"
                      }
                    ],
                    "activeCells": {},
                    "id": "d1441b0e-5a99-497c-b35e-543b8b39acbf"
                  }
                ],
                "id": "6767c42e-146c-457a-81b6-51111236fd03"
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
                "id": "8b29393d-440b-4699-89ef-384a031184d4"
              }
            ],
            "activeCells": {},
            "id": "2d8f79ae-05f7-4713-bd5b-afbec86a7965"
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
            "id": "39912c4c-ca24-46ab-9f20-b721f6287a00",
            "spec": "paragraph2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2bb4c5ef-e406-42aa-9bfd-32cd63c73475",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2bb4c5ef-e406-42aa-9bfd-32cd63c73475",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2bb4c5ef-e406-42aa-9bfd-32cd63c73475",
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
            "id": "2bb4c5ef-e406-42aa-9bfd-32cd63c73475",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "147c4a85-b0c7-4575-b99d-104daf0ba0f0",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "147c4a85-b0c7-4575-b99d-104daf0ba0f0",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "147c4a85-b0c7-4575-b99d-104daf0ba0f0",
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
            "id": "147c4a85-b0c7-4575-b99d-104daf0ba0f0",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "924eb8d1-caf2-4867-ae25-ccdc76b604f1",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "924eb8d1-caf2-4867-ae25-ccdc76b604f1",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "924eb8d1-caf2-4867-ae25-ccdc76b604f1",
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
            "id": "924eb8d1-caf2-4867-ae25-ccdc76b604f1",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "18873769-7032-4277-9d05-8cb24a51b38c",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "18873769-7032-4277-9d05-8cb24a51b38c",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "18873769-7032-4277-9d05-8cb24a51b38c",
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
            "id": "18873769-7032-4277-9d05-8cb24a51b38c",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a8da613a-5ffa-48e3-b434-7b767725d3bf",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a8da613a-5ffa-48e3-b434-7b767725d3bf",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a8da613a-5ffa-48e3-b434-7b767725d3bf",
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
            "id": "a8da613a-5ffa-48e3-b434-7b767725d3bf",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "39912c4c-ca24-46ab-9f20-b721f6287a00",
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
            "type": "Fixture",
            "subject": "Composite:TearDown",
            "start": 1,
            "end": 1,
            "duration": 0
          }
        ],
        "duration": 2,
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
        "time": "8:22 AM",
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
                "id": "2bb4c5ef-e406-42aa-9bfd-32cd63c73475"
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
                "id": "147c4a85-b0c7-4575-b99d-104daf0ba0f0"
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
                        "id": "924eb8d1-caf2-4867-ae25-ccdc76b604f1"
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
                        "id": "18873769-7032-4277-9d05-8cb24a51b38c"
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
                        "id": "a8da613a-5ffa-48e3-b434-7b767725d3bf"
                      }
                    ],
                    "activeCells": {},
                    "id": "18f7d998-d74b-4b77-9589-a54599fe092b"
                  }
                ],
                "id": "1d7955ef-25e9-40b2-89a4-41242c31e83d"
              }
            ],
            "activeCells": {},
            "id": "39912c4c-ca24-46ab-9f20-b721f6287a00"
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
            "id": "ab8edef8-c5ae-4bb7-bff1-8f18277bfebe",
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
            "id": "dcb00b5e-789b-49d0-a8a7-60a9ebc1ee0f",
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
            "id": "ad8a48ed-d013-46f7-826c-9408d0226f40",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ab8edef8-c5ae-4bb7-bff1-8f18277bfebe",
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
        "time": "8:22 AM",
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
                "id": "dcb00b5e-789b-49d0-a8a7-60a9ebc1ee0f"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "ad8a48ed-d013-46f7-826c-9408d0226f40"
              }
            ],
            "activeCells": {},
            "id": "ab8edef8-c5ae-4bb7-bff1-8f18277bfebe"
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
            "id": "d44485d0-cf21-4fdc-b1bf-cfa3e0de6333",
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
            "id": "d44485d0-cf21-4fdc-b1bf-cfa3e0de6333",
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
        "time": "8:22 AM",
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
            "id": "d44485d0-cf21-4fdc-b1bf-cfa3e0de6333"
          },
          {
            "type": "comment",
            "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
            "id": "07b3ed53-8e43-474c-8dcc-4b3d869927bc"
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
            "id": "caf0993d-37b9-4a55-aca7-26f659dbc1c6",
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
            "id": "5882e039-93e3-4e69-935b-44e6aa4855a4",
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
            "id": "34298d03-bf8d-4e9b-b558-2dfef20ab9e8",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "caf0993d-37b9-4a55-aca7-26f659dbc1c6",
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
        "time": "8:22 AM",
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
                "id": "5882e039-93e3-4e69-935b-44e6aa4855a4"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "34298d03-bf8d-4e9b-b558-2dfef20ab9e8"
              }
            ],
            "activeCells": {},
            "id": "caf0993d-37b9-4a55-aca7-26f659dbc1c6"
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
            "id": "c87eac6e-4b35-466b-ab55-f8679c13b310",
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
            "id": "029189a0-cf7a-4b9a-8feb-a22bc1d48e51",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "33ac768c-4d3a-4b6a-8ccf-0d2a5ccde8b7",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "901402e2-59a6-4ef2-91ac-8d0a01e85699",
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
            "id": "113b1c6f-8bcb-413d-8a46-ab2aec91ff86",
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
            "id": "c87eac6e-4b35-466b-ab55-f8679c13b310",
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
        "time": "8:22 AM",
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
                "id": "ec080c1e-d06f-451e-8ebb-a91e23b802d2"
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
                "id": "b93663f6-fef1-486c-8948-a120eaa88f5a"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "029189a0-cf7a-4b9a-8feb-a22bc1d48e51"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "33ac768c-4d3a-4b6a-8ccf-0d2a5ccde8b7"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "901402e2-59a6-4ef2-91ac-8d0a01e85699"
              },
              {
                "type": "comment",
                "text": "Correct assertion",
                "id": "0f5eaaeb-0f00-4781-b68b-d496afbc7b1c"
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
                "id": "8377b7f8-f2a9-4d2e-9ae5-2eca6ead02f7"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "2",
                  "number2": "2",
                  "sum": "5"
                },
                "collections": [],
                "id": "113b1c6f-8bcb-413d-8a46-ab2aec91ff86"
              },
              {
                "type": "comment",
                "text": "Line assertions",
                "id": "d5fdab22-eaf3-4404-b1fb-01f8d73b385c"
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
            "id": "c87eac6e-4b35-466b-ab55-f8679c13b310"
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
            "id": "f7ed84d7-f2b2-4f0a-b96c-c2e3eaa70871",
            "spec": "set1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bc7d4ce2-46c8-487e-bdbc-36a0df8f5fd3",
            "spec": "set1",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9d3d28bc-d693-4fc5-ba87-b71b0ede3748",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9d3d28bc-d693-4fc5-ba87-b71b0ede3748",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9d3d28bc-d693-4fc5-ba87-b71b0ede3748",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9d3d28bc-d693-4fc5-ba87-b71b0ede3748",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9d3d28bc-d693-4fc5-ba87-b71b0ede3748",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f309da1f-e069-4c95-890d-d3b67e841e2a",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f309da1f-e069-4c95-890d-d3b67e841e2a",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f309da1f-e069-4c95-890d-d3b67e841e2a",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f309da1f-e069-4c95-890d-d3b67e841e2a",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f309da1f-e069-4c95-890d-d3b67e841e2a",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9e2b2a07-9190-4029-b8e9-b897e817574c",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9e2b2a07-9190-4029-b8e9-b897e817574c",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9e2b2a07-9190-4029-b8e9-b897e817574c",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9e2b2a07-9190-4029-b8e9-b897e817574c",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9e2b2a07-9190-4029-b8e9-b897e817574c",
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
              "75f56afe-477d-4225-83b0-2a5a5388f5ff",
              "ad3a3faa-0b33-48b6-bc9a-5bffea3c5237"
            ],
            "missing": [],
            "extras": [
              {
                "Amount": "300.3",
                "Date": "11/25/2016 12:00:00 AM",
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
              "af852b0a-250b-48d0-a339-1c52dce57775",
              "229476e8-9d39-4516-a4ea-bb3df3ded1b3",
              "e5950cb0-f0c2-488f-8420-a2cc9f01ea22"
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
            "id": "f7ed84d7-f2b2-4f0a-b96c-c2e3eaa70871",
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
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 0,
            "end": 1,
            "duration": 1
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
            "end": 2,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:0",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:1",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:2",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:3",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "InvoiceDetailsAre:Row:4",
            "start": 2,
            "end": 2,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 4,
            "end": 12,
            "duration": 8
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 12,
            "end": 13,
            "duration": 1
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
            "end": 14,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 14,
            "end": 14,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Sets:TearDown",
            "start": 14,
            "end": 14,
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
        "time": "8:22 AM",
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
                        "id": "9d3d28bc-d693-4fc5-ba87-b71b0ede3748"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "f309da1f-e069-4c95-890d-d3b67e841e2a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "9e2b2a07-9190-4029-b8e9-b897e817574c"
                      }
                    ],
                    "activeCells": {},
                    "id": "bc7d4ce2-46c8-487e-bdbc-36a0df8f5fd3"
                  }
                ],
                "id": "28a532b3-d349-4073-b785-b214fe784068"
              },
              {
                "type": "comment",
                "text": "Completely successful ordering",
                "id": "9857030b-ca2f-4e5a-bfd5-de7813617d29"
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
                "id": "c2fcb62d-0473-46d9-8b22-d814495fea0f"
              },
              {
                "type": "comment",
                "text": "Out of order",
                "id": "71d7f25e-3219-4e88-a218-ab01ef8c1dac"
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
                "id": "1eea377c-60cb-4985-8eee-43dd805d8f9f"
              },
              {
                "type": "comment",
                "text": "Should have one exra",
                "id": "42d71ec6-86e8-4a8c-a3ba-7d019bdf6450"
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
                        "id": "75f56afe-477d-4225-83b0-2a5a5388f5ff"
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
                        "id": "ad3a3faa-0b33-48b6-bc9a-5bffea3c5237"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "abff90f9-082b-4c88-87a5-170813598a82"
              },
              {
                "type": "comment",
                "text": "Should mark one expected result as missing",
                "id": "89f81367-c42b-4d7d-8b6a-5a9b1d024a2d"
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
                        "id": "af852b0a-250b-48d0-a339-1c52dce57775"
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
                        "id": "229476e8-9d39-4516-a4ea-bb3df3ded1b3"
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
                        "id": "e5950cb0-f0c2-488f-8420-a2cc9f01ea22"
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
                "id": "734a2950-b529-4d7f-a642-4d0022ea4b04"
              },
              {
                "type": "comment",
                "text": "One syntax error",
                "id": "cc058936-cdbb-4a3a-98a9-414f995f3a7e"
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
                        "id": "5d90e51d-ee4d-484e-844e-cf78f1be3953"
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
                        "id": "d4cf1803-44d4-4fe7-9f23-1b988fbf4a23"
                      }
                    ],
                    "activeCells": {},
                    "id": "4fbf1d18-9afc-4517-97bc-03c2fc21585c"
                  }
                ],
                "id": "f0a61901-c8f4-4d0b-8cc1-062e6952576d"
              }
            ],
            "activeCells": {},
            "id": "f7ed84d7-f2b2-4f0a-b96c-c2e3eaa70871"
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
            "id": "842a240f-823f-46ba-bd75-c85b146f1679",
            "spec": "set2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c4328d6d-4379-4ad4-a7fc-930e4814c66c",
            "spec": "set2",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "901f722e-1486-4bf4-8aef-8c3650590dba",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3045a3f5-ad55-477f-b8a3-cd6c532b2a94",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3b94e4f5-60d2-47f8-aab2-f4997c096d52",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "066f3a94-08ac-4baf-a93f-35402a6038d2",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "882d6b3b-c720-474e-8a9e-8cb1cee9ba85",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "b7d56a6d-7bdb-4293-b422-b217bab2dd8d",
              "4a4efd34-3a86-4a1f-b9c1-0187c79644e8",
              "65555c00-bc0a-4ce4-85be-8523a9b2a2de",
              "db8fc71b-830d-4110-a17b-e6fa0a5f9b2d",
              "ed3d07b6-f004-4d01-9bac-2aa2729de977"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "3fa06ee8-b2f2-41b6-8cf4-5c0f16162ce9",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "6da81364-aac8-4d04-8896-392c8fde8112",
              "dc7f7baf-5192-4ced-9350-d78e2365e7ec",
              "4a364198-1170-465f-b265-3486de782bd3",
              "aec0c83c-59a9-47b5-b1c8-e44cb08d2707",
              "b87ac2f1-f766-4e49-958c-f0b46fcabc01"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "f418c516-51f7-420d-a785-124508deeba8",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "842a240f-823f-46ba-bd75-c85b146f1679",
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
        "time": "8:22 AM",
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
                        "id": "901f722e-1486-4bf4-8aef-8c3650590dba"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "3045a3f5-ad55-477f-b8a3-cd6c532b2a94"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "3b94e4f5-60d2-47f8-aab2-f4997c096d52"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "066f3a94-08ac-4baf-a93f-35402a6038d2"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "882d6b3b-c720-474e-8a9e-8cb1cee9ba85"
                      }
                    ],
                    "activeCells": {},
                    "id": "c4328d6d-4379-4ad4-a7fc-930e4814c66c"
                  }
                ],
                "id": "eb6993c8-f561-4a01-bdb9-18bff35798d0"
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
                        "id": "b7d56a6d-7bdb-4293-b422-b217bab2dd8d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "4a4efd34-3a86-4a1f-b9c1-0187c79644e8"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "65555c00-bc0a-4ce4-85be-8523a9b2a2de"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "db8fc71b-830d-4110-a17b-e6fa0a5f9b2d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "ed3d07b6-f004-4d01-9bac-2aa2729de977"
                      }
                    ],
                    "activeCells": {},
                    "id": "3fa06ee8-b2f2-41b6-8cf4-5c0f16162ce9"
                  }
                ],
                "id": "6d8553ab-0724-4e01-bd2c-3c9411990018"
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
                        "id": "6da81364-aac8-4d04-8896-392c8fde8112"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "dc7f7baf-5192-4ced-9350-d78e2365e7ec"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "4a364198-1170-465f-b265-3486de782bd3"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "aec0c83c-59a9-47b5-b1c8-e44cb08d2707"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "b87ac2f1-f766-4e49-958c-f0b46fcabc01"
                      }
                    ],
                    "activeCells": {},
                    "id": "f418c516-51f7-420d-a785-124508deeba8"
                  }
                ],
                "id": "2e8cc325-92a7-41ef-b81b-4f3691df6552"
              }
            ],
            "activeCells": {},
            "id": "842a240f-823f-46ba-bd75-c85b146f1679"
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
            "id": "e2a39215-d8e8-4185-a263-933282efa17e",
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
            "id": "e2a39215-d8e8-4185-a263-933282efa17e",
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
        "duration": 1,
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
        "time": "8:22 AM",
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
                        "id": "ecabc1b8-3ca2-4cda-90d7-47c7ee0cfe5c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "6005c43c-2b68-4ab0-907f-f35f55c1c4dc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "5a3a82ef-ffa8-4ac5-bdbf-3655d3c3ae8d"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "2043bb49-e452-4fcd-9c6b-198d249be5fb"
              }
            ],
            "activeCells": {},
            "id": "e2a39215-d8e8-4185-a263-933282efa17e"
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
            "id": "0c108fa6-337c-424c-8e50-3c342fcb8304",
            "spec": "set4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a379f5e2-d626-40ba-b72c-3253ed8f55e3",
            "spec": "set4",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad55c956-a5ae-4343-a244-29e576e728cf",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad55c956-a5ae-4343-a244-29e576e728cf",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad55c956-a5ae-4343-a244-29e576e728cf",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad55c956-a5ae-4343-a244-29e576e728cf",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad55c956-a5ae-4343-a244-29e576e728cf",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ec677a8-a2f3-46b3-8c62-17ef362ce155",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ec677a8-a2f3-46b3-8c62-17ef362ce155",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ec677a8-a2f3-46b3-8c62-17ef362ce155",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ec677a8-a2f3-46b3-8c62-17ef362ce155",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5ec677a8-a2f3-46b3-8c62-17ef362ce155",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c1912445-daf6-46c4-8f3f-0bb25a737e11",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c1912445-daf6-46c4-8f3f-0bb25a737e11",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c1912445-daf6-46c4-8f3f-0bb25a737e11",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c1912445-daf6-46c4-8f3f-0bb25a737e11",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c1912445-daf6-46c4-8f3f-0bb25a737e11",
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
            "id": "3a1678e7-9553-4c5c-a7c5-30a5225e9353",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0c108fa6-337c-424c-8e50-3c342fcb8304",
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
        "time": "8:22 AM",
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
                        "id": "ad55c956-a5ae-4343-a244-29e576e728cf"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "5ec677a8-a2f3-46b3-8c62-17ef362ce155"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "c1912445-daf6-46c4-8f3f-0bb25a737e11"
                      }
                    ],
                    "activeCells": {},
                    "id": "a379f5e2-d626-40ba-b72c-3253ed8f55e3"
                  }
                ],
                "id": "88222ad3-9ce4-4b5d-be6d-8eff2aa41d97"
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
                        "id": "3a1678e7-9553-4c5c-a7c5-30a5225e9353"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "334fb7ce-15a9-4d93-b044-cbc13bd24d98"
                      }
                    ],
                    "activeCells": {},
                    "id": "5c758be4-9a65-453d-b06e-66f6913270e1"
                  }
                ],
                "id": "7af21312-6ee9-4859-ad41-28d045fefb0b"
              }
            ],
            "activeCells": {},
            "id": "0c108fa6-337c-424c-8e50-3c342fcb8304"
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
            "id": "cc7e19f0-24da-48e3-9f49-930f5c38bc8b",
            "spec": "set5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eb90e2f7-9cd8-4672-b12d-67c64a489eb3",
            "spec": "set5",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9cd421a0-f9c3-4247-9d1d-2f19fe0ed163",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f9b4854d-6e60-4ba2-b66f-e970bcefdb2b",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ed164000-2157-47f5-8b7d-b81c1617531a",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "933c275e-8801-4a08-a307-cb92e19b7383",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6232c4e2-ae20-4a8e-bdee-b7c6a49e1e2b",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5622f17d-3163-440e-8493-bfd20d7213b5",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fea32efd-6c97-4f87-ade4-8539971855ea",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8234923c-2d36-413f-9850-a0edcdd9d8ae",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "706787b4-6bd8-4e34-b040-fbf5fff8468d",
              "ea742b99-8280-4b82-92e4-8588f643cd0a",
              "41f8aa47-347a-492f-9248-484a9c59cf38",
              "f5745726-1d1c-4dc8-92d0-288b51c40359"
            ],
            "missing": [
              "9f93d592-163c-424a-a649-8846156d7612"
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
                "id": "cb8e26c8-d103-48ee-8dab-aed64aba561c"
              },
              {
                "actual": 4,
                "id": "045718cb-8482-4761-ad5d-f37c41d9d5d3"
              }
            ],
            "id": "76896160-4f62-4072-821a-43ec49f3ab08",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cc7e19f0-24da-48e3-9f49-930f5c38bc8b",
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
        "time": "8:22 AM",
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
                        "id": "9cd421a0-f9c3-4247-9d1d-2f19fe0ed163"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "f9b4854d-6e60-4ba2-b66f-e970bcefdb2b"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "ed164000-2157-47f5-8b7d-b81c1617531a"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "933c275e-8801-4a08-a307-cb92e19b7383"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "6232c4e2-ae20-4a8e-bdee-b7c6a49e1e2b"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "5622f17d-3163-440e-8493-bfd20d7213b5"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "fea32efd-6c97-4f87-ade4-8539971855ea"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "8234923c-2d36-413f-9850-a0edcdd9d8ae"
                      }
                    ],
                    "activeCells": {},
                    "id": "eb90e2f7-9cd8-4672-b12d-67c64a489eb3"
                  }
                ],
                "id": "3a3f4bbb-0e87-40b5-aa88-f32f2a79a213"
              },
              {
                "type": "comment",
                "text": "All data is correct, but in the wrong order",
                "id": "fa62b7aa-f2ae-4099-85f3-ca8f7840babb"
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
                        "id": "706787b4-6bd8-4e34-b040-fbf5fff8468d"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "ea742b99-8280-4b82-92e4-8588f643cd0a"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "41f8aa47-347a-492f-9248-484a9c59cf38"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "cb8e26c8-d103-48ee-8dab-aed64aba561c"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "045718cb-8482-4761-ad5d-f37c41d9d5d3"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "9f93d592-163c-424a-a649-8846156d7612"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "f5745726-1d1c-4dc8-92d0-288b51c40359"
                      }
                    ],
                    "activeCells": {},
                    "id": "76896160-4f62-4072-821a-43ec49f3ab08"
                  }
                ],
                "id": "d008d40f-b910-4a3f-bbdd-bf123f214d6a"
              }
            ],
            "activeCells": {},
            "id": "cc7e19f0-24da-48e3-9f49-930f5c38bc8b"
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
            "id": "c83d1c61-61b1-4f49-a4ae-293b98345c89",
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
            "id": "f04244f9-32f3-40b0-8cbb-85a571695f0d",
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
            "id": "5eb24c48-caa2-4253-b40e-de30c20bb345",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c83d1c61-61b1-4f49-a4ae-293b98345c89",
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
        "time": "8:22 AM",
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
                        "id": "f04244f9-32f3-40b0-8cbb-85a571695f0d"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "5eb24c48-caa2-4253-b40e-de30c20bb345"
                      }
                    ],
                    "activeCells": {},
                    "id": "21370639-a072-4a12-8417-a93df81ad820"
                  }
                ],
                "id": "dbf4a7c9-620a-47a9-9f81-7393b0bd37c6"
              }
            ],
            "activeCells": {},
            "id": "c83d1c61-61b1-4f49-a4ae-293b98345c89"
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
            "id": "78678ac5-7fbc-4121-a396-6cbbbddfb7ca",
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
            "id": "af8c3483-c672-4e30-a95c-3b579be6ab4f",
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
            "id": "334b9a6c-7d9b-44c6-b40a-0eddc75f68d1",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "78678ac5-7fbc-4121-a396-6cbbbddfb7ca",
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
        "time": "8:22 AM",
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
                        "id": "2494681f-d775-4042-aee9-8a2b8afefd74"
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
                        "id": "a9a10a39-3f8a-4fba-8065-ab4c82d0e1bf"
                      }
                    ],
                    "activeCells": {},
                    "id": "54eba28e-08fd-4ed7-812d-7cc309f7f43f"
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
                        "id": "af8c3483-c672-4e30-a95c-3b579be6ab4f"
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
                        "id": "334b9a6c-7d9b-44c6-b40a-0eddc75f68d1"
                      }
                    ],
                    "activeCells": {},
                    "id": "71c68165-7a9e-45f0-8f05-d7bf8234ba43"
                  }
                ],
                "id": "d228a516-6d7a-4eea-9565-65ba664c85f9"
              }
            ],
            "activeCells": {},
            "id": "78678ac5-7fbc-4121-a396-6cbbbddfb7ca"
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
            "id": "d7fd2411-7af2-4046-b479-2e98e7368cbb",
            "spec": "table3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6e9cf7ac-c667-4dd3-8bb0-bf8439bd40bf",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c871c2ee-1776-43e4-930c-f05f76c4e335",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4f64d19f-13de-46d9-b60e-f75a29aca5dc",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c4312c0a-860e-40a7-b653-25aabd68864e",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d7fd2411-7af2-4046-b479-2e98e7368cbb",
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
        "time": "8:22 AM",
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
                        "id": "6e9cf7ac-c667-4dd3-8bb0-bf8439bd40bf"
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
                        "id": "c871c2ee-1776-43e4-930c-f05f76c4e335"
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
                        "id": "4f64d19f-13de-46d9-b60e-f75a29aca5dc"
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
                        "id": "c4312c0a-860e-40a7-b653-25aabd68864e"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "332f9f7a-81f3-41de-bda2-8fabf9f361f5"
                  }
                ],
                "id": "7e420a93-9b2f-4ec7-8811-16a3f8b53e8d"
              }
            ],
            "activeCells": {},
            "id": "d7fd2411-7af2-4046-b479-2e98e7368cbb"
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
            "id": "898b0ee1-bdf9-4280-8eff-66c53581d1af",
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
            "id": "6b588913-7caf-4867-82c1-8d59b7cf4ecd",
            "spec": "table4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "72ce9419-76c2-4230-bfb6-76b52873c86a",
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
            "id": "898b0ee1-bdf9-4280-8eff-66c53581d1af",
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
        "time": "8:22 AM",
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
                        "id": "6b588913-7caf-4867-82c1-8d59b7cf4ecd"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "dc272c2f-5245-441a-833e-a63fb9eb8f2f"
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
                        "id": "72ce9419-76c2-4230-bfb6-76b52873c86a"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "8820c61b-9677-4716-94bd-75802795df4c"
              }
            ],
            "activeCells": {},
            "id": "898b0ee1-bdf9-4280-8eff-66c53581d1af"
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
            "id": "15cc7fbd-a58a-4a42-b31b-ffe4d92d2e28",
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
            "id": "0ff1f109-3c32-4041-a1f5-f265d059b832",
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
            "id": "04be374f-9185-43f3-9b43-f20b995ba726",
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
            "id": "bbb8cdec-4c4f-432f-ac0e-3922365e7573",
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
            "id": "bbb8cdec-4c4f-432f-ac0e-3922365e7573",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bbb8cdec-4c4f-432f-ac0e-3922365e7573",
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
            "id": "bbb8cdec-4c4f-432f-ac0e-3922365e7573",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "88705299-1f37-4514-98ea-86c26ead5087",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "88705299-1f37-4514-98ea-86c26ead5087",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "88705299-1f37-4514-98ea-86c26ead5087",
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
            "id": "88705299-1f37-4514-98ea-86c26ead5087",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "15cc7fbd-a58a-4a42-b31b-ffe4d92d2e28",
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
        "time": "8:22 AM",
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
                "id": "bcd93879-34f8-4744-b186-88922ce1c298"
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
                        "id": "0ff1f109-3c32-4041-a1f5-f265d059b832"
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
                        "id": "04be374f-9185-43f3-9b43-f20b995ba726"
                      }
                    ],
                    "activeCells": {},
                    "id": "c761ff46-e669-4a5e-b8d7-74c9dd1393e4"
                  }
                ],
                "id": "ff22057d-6ce9-4cc5-90ad-be5c433e076c"
              },
              {
                "type": "comment",
                "text": "Table fixture from script",
                "id": "cc01f620-e2ab-4966-8224-25f64e44d7be"
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
                        "id": "bbb8cdec-4c4f-432f-ac0e-3922365e7573"
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
                        "id": "88705299-1f37-4514-98ea-86c26ead5087"
                      }
                    ],
                    "activeCells": {},
                    "id": "191f6c1f-aad5-4ade-b874-4f8312ddc5d6"
                  }
                ],
                "id": "eb316a08-af3c-4089-ae52-192ff4362f53"
              }
            ],
            "activeCells": {},
            "id": "15cc7fbd-a58a-4a42-b31b-ffe4d92d2e28"
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "CheckObject",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CheckObjectFixture",
                "id": "32913904-c04d-4897-a239-41f7a3c03172"
              },
              {
                "type": "comment",
                "text": "## IfTheAddressIs",
                "id": "2fbdf4c4-b759-4734-a263-5f06e23655ee"
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
                "id": "e9e16ef8-1afa-4b6d-a1ff-21f907440f9b"
              },
              {
                "type": "comment",
                "text": "## TheAddressShouldBe",
                "id": "dad94060-713e-4d1c-986c-eaed51c9acdf"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "Address1",
                  "Address2": "Address2",
                  "City": "City"
                },
                "collections": [],
                "id": "229f8a73-fc80-411c-961b-aadec5806568"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "ff1e2ea3-9e19-4d32-849c-c3f36f8df92e"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "1dc9b04c-d9ee-4d90-a04a-947cfe3cc5bd"
              }
            ],
            "activeCells": {},
            "id": "77397636-7d0f-4679-bdc4-607833c08acb"
          }
        ],
        "id": "1e42f1b4-33ea-4ca9-b5de-e0d3a0a7aa71"
      },
      "sampleMarkdown": "# Sample Specification for CheckObject\r\n\r\n-> id = a9b3bb61-5d66-4bce-bff8-d0613147e538\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6480304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[CheckObject]\r\n|> IfTheAddressIs Address1=Address1, Address2=Address2, City=City, StateOrProvince=StateOrProvince, Country=Country, PostalCode=PostalCode\r\n|> TheAddressShouldBe Address1=Address1, Address2=Address2, City=City\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Composite",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CompositeFixture",
                "id": "6a9ef10c-99f0-4a81-b139-78288f4383e5"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "f6d507f0-9bc4-4967-8ca7-2e463b0c1bb1"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "196801ff-d582-4a99-9338-9f141a3cc65a"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "fee1afcf-fd2a-494f-bb60-a1db5d967cb7"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "78e93ec6-434e-4267-8cea-cebf78b58568"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiply",
                "id": "9a8e74b2-7c10-4e5b-8b03-b5532c83ad3d"
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
                "id": "1322174b-c797-4cb7-a793-96c1a2bf5df9"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyTable",
                "id": "27acf8ef-5c8c-4bbf-b0de-04ae48ce73c0"
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
                        "id": "28b773f6-b9aa-4679-9a42-6281c5bd95f3"
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
                        "id": "83c210ef-6a47-48a8-a00c-873c28b6064b"
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
                        "id": "8110f696-149e-4472-8725-d255dc1b32f3"
                      }
                    ],
                    "activeCells": {},
                    "id": "b15c6c19-e3bb-4754-88fb-7c2720873c4a"
                  }
                ],
                "id": "4eae0dc9-1f1d-4940-bc8c-56b3effb081b"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyThrow",
                "id": "ff822a5f-6820-481f-b630-95fc4914d8fc"
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
                "id": "502e321a-8067-43f3-8636-210c9bd14110"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "9b8e2196-87a4-49c7-b722-305b86b6fb5f"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "f2bd54da-0c3d-40fd-ac53-dd332571ee7e"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "63eaa736-a902-405c-98f2-9a0b7183081a"
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
                        "id": "f485637c-61ce-4ff5-a5a8-062a25f7d760"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "c194dd8c-739c-4c8a-8688-ef6545fcf040"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "1710cf66-c0e3-43d9-a38f-be866abcdf36"
                      }
                    ],
                    "activeCells": {},
                    "id": "9a90f718-7f79-433d-9622-3f8f122f6dc8"
                  }
                ],
                "id": "1e07f8f0-7bfe-444a-8e5b-4675b831aae0"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "a67ec128-1333-4771-b59b-33fa17df0eee"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "a1c925ec-f587-47bc-bc15-5da0e641a5fe"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "efc117e2-85e1-4d40-be91-95d4c39dc025"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "565209b8-e30f-4001-bd42-c36dc3734bbb"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "e21ad1af-892f-4812-b45b-52ba53f8f379"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "496672ff-79dd-42f4-a14e-fdfc629076da"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "961b4a0a-f31d-4867-940a-02b31092a419"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "bf413e77-bd4d-4b00-8e78-eba6af0e26a0"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "f72a39c1-1035-4e19-ae98-0479cc60cbbb"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "77bec06e-49b0-4d00-a6c0-49a358a17a68"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "0d0bdfbd-692d-4a79-9927-1f790cebe175"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "423d1f60-c5e9-48a8-ace4-c95779a36356"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "61a7c545-7f1e-4e2e-8186-7a842965dea3"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "0876ccb2-a04a-41d6-b835-2cab5ab0d26c"
              }
            ],
            "activeCells": {},
            "id": "9eb0abd3-aa35-42e6-98fb-5642e3324c10"
          }
        ],
        "id": "47e06619-0bfb-4ec7-8c39-8067abffb930"
      },
      "sampleMarkdown": "# Sample Specification for Composite\r\n\r\n-> id = c63789a3-c348-4fa7-a007-68b2f2cc6261\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6480304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Composite]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> AddAndMultiply starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> AddAndMultiplyTable\r\n    [Rows]\r\n    |starting|operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n\r\n|> AddAndMultiplyThrow starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Wednesday, November 23, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "d0285aba-a21c-466c-bbc4-9b2604738fc8"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "885b0cef-65ea-45fb-9261-0c48c363e727"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "1b13beca-9ac8-4e71-96f7-7972ad3efefa"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "9a09c8aa-72bb-4d62-b990-379616c3ea24"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "9a97fa05-f2b9-4ff1-ab64-d668d996bb44"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "8a8f2ae0-042f-439a-aa56-104462abe17e"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "8fca1f3d-9b9b-4d99-a044-3f87d79aa8fb"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "4104b0e7-45ab-4cfe-a062-b7e100b8f31d"
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
                              "id": "12c35d93-81a3-44b4-a386-ecb9ee879129"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "19409209-e6ae-4821-9ef4-7190f5700a0c"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "445a1aaf-98b8-4370-b606-63a3de51fc53"
                            }
                          ],
                          "activeCells": {},
                          "id": "54fc295b-5309-44c7-91f0-d87523185a94"
                        }
                      ],
                      "id": "2c8af543-59df-4170-ad68-5c05ef0ee0cf"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "e5753fed-0172-4ae9-8a26-27566afe837a"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "806dc71f-7fbd-47fd-bd72-65fc96e83bbe"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "365ceacb-a494-45d2-bc0a-fdf2df49324b"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "8c5f543c-2df6-4bdb-9b4e-a990c78ca2b0"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "be5edd50-c6c3-422d-a5ac-989f7642c878"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "3f638cdd-991f-4622-9a20-84429a47311b"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "131d5b38-26b8-4018-b34d-b1238ec08f0c"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "18791da1-2afb-490e-bda4-8dc81b4f7949"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "5c38a723-22c9-4f1b-8ed1-f91e1d489e9b"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "3677325b-6611-4588-9d7c-267a89c12bd0"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "8b3618c7-28c7-4f7b-a01a-b51a0eae5a86"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "8619d063-8d8a-46a1-8efa-7821b3362443"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "35f67df4-f313-48c6-b61f-806b03123d28"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "753be345-e59a-4ade-b87b-0b3ff1fb7474"
                    }
                  ],
                  "activeCells": {},
                  "id": "b8c7d42d-b0c4-4d2d-9a02-1eaf6d397828"
                }
              ],
              "id": "29a3deb3-6406-414b-98a1-5dcb00707dd9"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 137cbdbc-2d59-44dc-ab44-4f876d7b21ce\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6490304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Embedded",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedFixture",
                "id": "d5b4b15d-383c-4237-9c66-f51966197e72"
              },
              {
                "type": "comment",
                "text": "## DoNotThrowAnExceptionOnTheNextEmbed",
                "id": "d4940584-8257-4bbf-9b50-1b8acd692696"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "f847544a-3b93-4900-9957-86a00acb8c90"
              },
              {
                "type": "comment",
                "text": "## EmbeddedMath",
                "id": "e38c2478-810c-4d7d-a2df-4423bfbc07ec"
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
                        "id": "13ec2e67-8f3f-4a20-8705-8573641a845e"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "efc65c91-7f6f-4a71-af37-98ef09fbf354"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "fde6fb00-de27-43c3-8f66-3295e0ad7336"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "82d7bc99-605b-4007-a4f6-59f225f1d742"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "48e62902-ced5-43de-b850-88ece80600b6"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "4a977148-dfd1-4183-aa61-154555cb7d72"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "9b5f5832-869a-4820-87c8-400d1c762655"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "ef9ff34f-e718-4011-9019-a9c76996b3f5"
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
                                "id": "86f05d24-c778-4eca-8e56-668274a94b61"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "b8d21c1c-54d1-4e0f-a3bc-33af539fb024"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "745890c9-63c5-422e-b47b-29a028d0b128"
                              }
                            ],
                            "activeCells": {},
                            "id": "dd9f640e-66f8-4b95-afc9-3b658ed996be"
                          }
                        ],
                        "id": "b2afeae8-fcad-4b34-bb4f-4ec919fa40e3"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "6b3a96c6-a520-418a-9814-a19b358c1510"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "9136df3c-cd0d-4c05-afab-245776d3afb9"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "353f58ef-355a-4575-b0c6-b60ff1f19eef"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "67c5471a-722c-4a47-bf28-7d13ae661313"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "2842047c-32b5-40b6-8725-55a33479c193"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "af829278-8457-4a39-8d80-ebba456bd565"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "3741d560-3945-45b0-81e8-3a18512adb9b"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "d830814f-eab4-4437-a51b-18d39669036c"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "91fac540-baa4-4886-bbe0-ec0ed7a08ee6"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "64dc14ca-23b9-46ee-a844-66384add8d7f"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "0c2959b6-b3b5-42fc-8f84-9014243d0295"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "bbd81abf-32db-4056-800c-2735d6403a51"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "7c0cfc3e-ffa7-4c16-bb35-6498a3944537"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "4a807e98-791b-4ea5-a3c1-a21affd9b84d"
                      }
                    ],
                    "activeCells": {},
                    "id": "e1c4d7c2-8263-4351-a406-90f156d7faa5"
                  }
                ],
                "id": "f494c7dd-cfab-4983-bfa6-5f2e9ed2f244"
              },
              {
                "type": "comment",
                "text": "## ThrowAnExceptionOnTheNextEmbed",
                "id": "a7566070-fb79-458a-a5c9-d6341b78a97a"
              },
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "deeabee9-fff4-4ff2-aee2-ff7e7ce9a346"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c4bddb6b-ab9e-4d94-8711-4a42c7ba44a4"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "3da2b60d-fe03-4cf5-8248-262d9fcc1a26"
              }
            ],
            "activeCells": {},
            "id": "c59be079-50fa-4ca4-a1da-0fbb4b077fa3"
          }
        ],
        "id": "9abe53ab-df66-4983-b784-0c217960f0fc"
      },
      "sampleMarkdown": "# Sample Specification for Embedded\r\n\r\n-> id = 7c896d7d-2e66-405b-b793-74ecbe606235\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6490304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Embedded]\r\n|> DoNotThrowAnExceptionOnTheNextEmbed\r\n|> EmbeddedMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> ThrowAnExceptionOnTheNextEmbed\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Failure",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.FailureFixture",
                "id": "89c6b9ec-d014-4b06-90c1-5785edf74ca1"
              }
            ],
            "activeCells": {},
            "id": "ee6b3b41-a86c-4c56-9b85-90767d8b4399"
          }
        ],
        "id": "8c2ac419-60a1-4ebd-ba59-cc0ce9cb6422"
      },
      "sampleMarkdown": "# Sample Specification for Failure\r\n\r\n-> id = 9603c0f4-7beb-4896-8c39-7cf5ccf9b2ec\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6490304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Failure]\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "GrammarError",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.GrammarErrorFixture",
                "id": "55038ec1-f614-4b7f-8474-5cded90879ec"
              },
              {
                "type": "comment",
                "text": "##",
                "id": "bc466e3a-e899-41d5-a286-0340380f6b8a"
              },
              {
                "key": null,
                "cells": {},
                "collections": [],
                "id": "7c4ff340-303a-4f4d-a2fb-f1d6bcdd8c70"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "3a1d62a3-fc27-460e-885e-806e8a8fbd9b"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ca88ee41-7001-4f5e-bb1c-5600942b8b97"
              }
            ],
            "activeCells": {},
            "id": "a3c45b4d-d7bc-4464-84f6-a27ad34e24d7"
          }
        ],
        "id": "bcec1ef3-1ea5-43fd-a051-aa7a754fdd68"
      },
      "sampleMarkdown": "# Sample Specification for GrammarError\r\n\r\n-> id = 8618796b-cf46-45bf-ab06-a3e2e25bd7a0\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6490304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[GrammarError]\r\n|> \r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "CurriedMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.CurriedMathFixture",
                "id": "183a1eef-3f67-421d-b8d9-b95f5b7b3193"
              },
              {
                "type": "comment",
                "text": "## Add5",
                "id": "eed143eb-805f-42d2-a6bf-839b2faf7f34"
              },
              {
                "key": "Add5",
                "cells": {},
                "collections": [],
                "id": "c03128a6-433e-4635-985c-4096e444f2ca"
              },
              {
                "type": "comment",
                "text": "## AddingTo5",
                "id": "25c869fe-00d1-494e-80c5-f09c827dbbc0"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "ae56141d-9759-4325-892a-d83f158bf358"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "e7523560-de3c-48b3-bd00-7467a5deffe4"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "ccb5bec9-59b4-4a52-b395-3d53b7c1bb35"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "27fab4cd-7abe-4320-8868-2d3353e798b2"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "2382f129-5032-4eb7-971e-92e33ad2f63b"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "bbbd6377-e06c-4c4e-91f1-7fb9ce8b1d0b"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ea9be8c8-02c8-4a07-8d80-5e176515dfa3"
              }
            ],
            "activeCells": {},
            "id": "76fa9723-997c-423d-9c0c-537682e19a3a"
          }
        ],
        "id": "5c74e7e4-7fb5-432b-8760-a5ef24a2d716"
      },
      "sampleMarkdown": "# Sample Specification for CurriedMath\r\n\r\n-> id = 09f6faf2-5ae6-42a0-a8d7-bb457a9b9fee\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6490304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[CurriedMath]\r\n|> Add5\r\n|> AddingTo5 y=y, returnValue=NULL\r\n|> StartWith starting=11\r\n|> TheValueShouldBe expected=expected\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Math",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                "id": "967fe476-b9a2-4d03-8453-d45e310e4e62"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "34110354-252a-4b9d-b76d-95ffa4cf7067"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "1575b186-4e6f-4ef6-b699-66a357f57fab"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "fed822c7-1ae2-4d9c-a042-a32cca984985"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "63f02832-c491-487a-82e5-f56bbdf238c8"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "c6bd9c91-e20a-44ad-ab9f-afa9306ab74a"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "8133f9d3-a75a-44e8-b2be-1d22d19a391f"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "75df5901-6549-4366-afde-116392157aaf"
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
                        "id": "f82f401d-8884-4fa8-a68a-a4b32f6a2fcc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "5afd1733-5b51-47fc-90d0-1989da3efd0b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "72eb9181-a994-407d-a8a3-51ce0c7bf77b"
                      }
                    ],
                    "activeCells": {},
                    "id": "107f89b5-3b5e-428f-b1ec-953671cd6843"
                  }
                ],
                "id": "0be835c6-1532-4f20-b7fc-99ca66a14b8c"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "359ba522-4b17-421b-9644-eff08bdc55ea"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "5f0c8b60-13b3-4b03-83b4-4888c19090d6"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "702ab66b-aa5e-406d-b423-e5def3d86c58"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "c73354b3-a499-46c7-8868-ca1e19b14e8d"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "7ff7fb8f-b562-4702-99e0-14e1768c9891"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "73e7ff3b-27b9-49a6-bffc-a76fcce21a5c"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "a0305918-746f-40c2-ac2a-6f2635662df4"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "40a0527e-8dbc-44ba-95fc-3cb4fcb5d7a8"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "fad2f8db-db75-4763-b08b-5cfbf2dce9f5"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "ad6b1aea-34d0-44d9-8c71-fbc5d6de67ee"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "82ab01d5-d4cb-4740-8d1a-5cc83abbede3"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "a0fce6ae-c4c9-4826-9b8f-d0ed32a37df2"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "ed833584-f639-4276-8c4f-7a1390f03acb"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "91d2c3b3-4016-4f14-9119-05f15caee12b"
              }
            ],
            "activeCells": {},
            "id": "257ec8f3-5ec1-4a4a-9ba6-7278ed47e2bc"
          }
        ],
        "id": "11c18283-8cbd-4b09-8e4e-59d9ce89d314"
      },
      "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 72141d5f-f9c2-47e2-8b48-1afbf5637ae9\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6500304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Wednesday, November 23, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Math",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MathFixture",
                      "id": "9ed8859c-7730-47ab-9e34-5d21a7a96813"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "9bc752f8-c225-4fd8-b3b8-476110e5fcf3"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "c1cbaed3-af9e-44e2-9cb6-478a7ec80e32"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "9446b464-ab1c-43c5-91ab-5d1d66b09306"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "7154037b-fb7f-4289-9ddb-bb3a72a7c765"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "1b8fec59-07b7-447b-81de-cccbf27a2660"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "ec28a0b7-3442-45ae-ad7d-08bcd77de0d0"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "eb7ab96f-9c1a-4468-ad9d-144ce5e85947"
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
                              "id": "488474c0-711e-4bd7-abcd-1b0cdf68baa7"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "5e1faa1f-bda7-47a4-a4c1-028fe7a73520"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "4cc6c821-03b3-4ef7-aa52-37e3928b8e36"
                            }
                          ],
                          "activeCells": {},
                          "id": "b903adc8-9d54-4a60-85d0-153aef68af7c"
                        }
                      ],
                      "id": "ad26a76f-1a7a-4bde-8775-e5e4fe4db2a2"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "1d12c2fc-5bb5-4e21-96c7-b6203d9f28dd"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "2d1a3509-9bf1-4ace-8bbf-aa342e2d7bb1"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "78103a7c-777f-4638-958a-1919f2d07cac"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "492c97e3-48ad-419d-94a5-a40603e26490"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "73f92cd5-4c5d-4861-a719-03bdd8123268"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "7d80c3d3-ea19-476a-bd92-4623c43b645e"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "23b708ee-f4dd-4ed6-b2ed-b07f4f327ed9"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "1167714e-0630-438e-93c0-be997fcf64aa"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "55771fde-e9b7-40f0-a6aa-75c6aa1f3e43"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "0b852710-61b3-4ba2-acaf-95fc1fbb5fa0"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "55190d90-7c13-4c06-9d58-5f034914e20e"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "1abd1413-4d6d-499c-badf-5aea61b2bba2"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "52268728-35c2-41dc-ba98-f8587fb23271"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "2fd8c2e6-e7af-424d-b81d-0b6c78708d60"
                    }
                  ],
                  "activeCells": {},
                  "id": "a5268bc5-5ca5-48f7-9992-8dae6ec8ff7a"
                }
              ],
              "id": "91d50bec-c070-4289-b885-010395905a35"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = f98640ed-f57f-4e23-89d9-d6323b91f092\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6500304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "DoSomeMath",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DoSomeMathFixture",
                "id": "f157c045-71c0-4aaf-8c37-4511af09aeee"
              },
              {
                "type": "comment",
                "text": "## DoSomeMath",
                "id": "80748bbb-2d40-4104-b956-ee33a8c699a5"
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
                        "id": "f3b03e8b-a8bd-4206-9f3f-25d6b3c5f918"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "feed2d52-2064-4673-baf1-e2c7b788336d"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "8cc5ad85-3a4e-4068-a3bf-d62a024c7429"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "7bffe022-9556-4295-9553-5316a44ddb60"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "078e0f6d-e99a-4902-a8b2-9cc69a6c8674"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "d7f8e633-9d1c-418c-8679-4645c06bb533"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "6f46c779-0950-4cee-b9ef-b949450f00e9"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "fd7c4b7e-6a75-4966-84be-6f4be07cd56e"
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
                                "id": "e317f7d5-23c9-4d25-9b10-0e3dc9698970"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "ec65d44b-744c-4561-8a9d-added7daab73"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "69538cb8-5f20-45e2-a166-dd37f695672f"
                              }
                            ],
                            "activeCells": {},
                            "id": "1b0a2332-e120-4186-bebb-d86d125d626b"
                          }
                        ],
                        "id": "ba686845-176b-44da-a071-342a17acbede"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "2fe142fa-11ad-49e3-a910-bbe437e9c1bd"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "21dff5c6-6de2-4755-954f-c508821d79c2"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "25d8565b-6881-4343-9e39-266c0e607d73"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "14e84b8f-b45a-4fa9-abd7-288275b23711"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "7f70d03c-e0a9-47ba-96a3-0f7fd242f097"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "634fd69d-f0c1-46d1-9094-25e6a3030a29"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "3aeba8b5-2d06-49b7-b76f-cfd9ac075854"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "84b3c20a-807b-41ae-affa-1c8c305b7f3f"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "9ec6053c-10ae-4fb6-94de-58645064632b"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "706c4fc7-70ad-495e-a5a7-41178f2af937"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "4744dc5c-4f36-4acf-96df-79058dfda62f"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "3abab204-74c2-4eef-88c8-8a8a489bbe6c"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "2953341d-b68c-4dd4-9745-96f430e28976"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "3bf3bbe6-292e-42de-8046-a54c9153deba"
                      }
                    ],
                    "activeCells": {},
                    "id": "f35d53d1-aaa6-475c-b36c-a50c2b5ee9ac"
                  }
                ],
                "id": "b0527128-c10e-4bb5-9a50-f769e8feb825"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "f719a4c5-1f88-4b23-8ad5-e802b404781f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "b46afd93-ed6e-47be-ba14-6bbbbefc893b"
              }
            ],
            "activeCells": {},
            "id": "a1cd609a-b959-4901-b078-6c1e9336cc2e"
          }
        ],
        "id": "d9aaae28-690d-434e-8be6-1f804387e169"
      },
      "sampleMarkdown": "# Sample Specification for DoSomeMath\r\n\r\n-> id = 1faa31e2-582f-4934-81c1-b8038fda6c37\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6500304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[DoSomeMath]\r\n|> DoSomeMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "ParkingExpiry",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.ParkingExpiryFixture",
                "id": "ee44e32d-8e99-4a17-a4eb-85602059dbf7"
              },
              {
                "type": "comment",
                "text": "## TicketIsGiven",
                "id": "f5ca1e68-89cf-4f69-97f3-18b65ebe968c"
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
                        "id": "1e858d83-a7a0-4d0f-b3c5-46bb1f09ee4e"
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
                        "id": "3f922164-6e0b-4f73-b83b-a26a28413ac4"
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
                        "id": "5464f357-50bc-49d2-8f50-a73e5363ce72"
                      }
                    ],
                    "activeCells": {},
                    "id": "aca75165-6616-4b8f-a4cd-e80ec52d9e04"
                  }
                ],
                "id": "dacc0225-1289-4fc8-9975-c2650a27ec12"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "dda7d442-f610-4db3-9fef-a4eaee15e8cd"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "612ae130-3162-4203-9697-6a23dcb70132"
              }
            ],
            "activeCells": {},
            "id": "f48863a4-74e0-42d8-bab4-b1ca933b17e5"
          }
        ],
        "id": "05703361-905a-4b96-85b1-04723662dfb1"
      },
      "sampleMarkdown": "# Sample Specification for ParkingExpiry\r\n\r\n-> id = f3e27225-4421-43a8-aedd-8bdf724223e1\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6510304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[ParkingExpiry]\r\n|> TicketIsGiven\r\n    [table]\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Player",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.PlayerFixture",
                "id": "3d0ed248-063d-4454-8e3f-bf5c2e0465f8"
              },
              {
                "type": "comment",
                "text": "## PositionIs",
                "id": "413fa917-1a3c-4dfd-b56d-f2a128fd0a61"
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
                        "id": "a0e5efe3-8d65-46df-a88a-185f402d4e2f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "e9fbdfcf-fcda-4116-82b5-201d26db0599"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "af0b27ee-6794-4f51-8733-2ada07ae5bb5"
                      }
                    ],
                    "activeCells": {},
                    "id": "35a52d24-dfcc-4c23-8e96-65179454b864"
                  }
                ],
                "id": "7b023090-d7d1-4262-801d-a332d7bb8c57"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c43fa520-a44b-4d86-b671-97578f6bd9a3"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "7a404015-3c8e-4aae-bd38-b8dd4d6db46f"
              }
            ],
            "activeCells": {},
            "id": "8723d80b-21c0-4bfd-b311-f29ed4ef5fc3"
          }
        ],
        "id": "579af219-62e0-4783-9c08-77f2a0b30993"
      },
      "sampleMarkdown": "# Sample Specification for Player\r\n\r\n-> id = b71ed83e-154c-4c15-bbf6-ae2a115c31a3\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6510304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Player]\r\n|> PositionIs\r\n    [table]\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "SelectionList",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SelectionListFixture",
                "id": "f0eea01b-cdf1-460f-8850-e964c9e57232"
              },
              {
                "type": "comment",
                "text": "## FirstAndLastName",
                "id": "bf3f5253-45f6-4576-ae9e-2e7c820f5d24"
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
                        "id": "719a2cd5-c3be-4c46-8e4e-f8f3dc976c6e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "58218c12-1081-4a31-b0ba-9da1aac1c611"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "7301dc30-23dc-4ab3-bc4a-7398e8b97c0a"
                      }
                    ],
                    "activeCells": {},
                    "id": "c9f95fed-b78f-463f-989c-e84dc54e98be"
                  }
                ],
                "id": "eb5d9eca-1ac9-4930-ae19-d3c305449080"
              },
              {
                "type": "comment",
                "text": "## names",
                "id": "344d3e71-c595-409e-858f-f2c7d2a59ce4"
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
                        "id": "1894a0e1-ace5-4d1c-8ab2-aba7517b306f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "5f2b944d-a152-467b-96f1-35f63af5a0ae"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "0d444381-e75d-4151-93a1-7a35f7e91d81"
                      }
                    ],
                    "activeCells": {},
                    "id": "faabc688-2e4b-49e9-b13a-9957a3745f03"
                  }
                ],
                "id": "1629700b-c963-4d89-b097-720a5d7d4836"
              },
              {
                "type": "comment",
                "text": "## TheEnumOptionIs",
                "id": "d767c283-b8c1-4106-aa24-dd54fa79d30b"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "SecondOption",
                  "selectedOption": "selectedOption"
                },
                "collections": [],
                "id": "69f50efc-cbef-40f5-80f9-3760b031cdfe"
              },
              {
                "type": "comment",
                "text": "## TheNameIs",
                "id": "1245094e-9a0b-4cb2-9b1d-bf986274383f"
              },
              {
                "key": "TheNameIs",
                "cells": {
                  "first": "first",
                  "last": "last",
                  "fullname": "fullname"
                },
                "collections": [],
                "id": "39fa5d94-2d29-4c78-a6e5-e96998034424"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "715b2e84-3617-4ff2-bf6e-b5caf55d6a70"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "797e7882-3893-4724-8f14-cf09a01d4703"
              }
            ],
            "activeCells": {},
            "id": "68724eb8-e686-4d01-adc5-dba00c10edba"
          }
        ],
        "id": "7d26f75f-ff2b-4667-9294-3304837982c9"
      },
      "sampleMarkdown": "# Sample Specification for SelectionList\r\n\r\n-> id = 63647bf0-a528-44b6-aa5d-3791eb8dcbd3\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6510304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SelectionList]\r\n|> FirstAndLastName\r\n    [table]\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n\r\n|> names\r\n    [table]\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n\r\n|> TheEnumOptionIs option=SecondOption, selectedOption=selectedOption\r\n|> TheNameIs first=first, last=last, fullname=fullname\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Simple",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                "id": "24a0b103-cd37-4533-97a4-a0ba9f94f81e"
              },
              {
                "type": "comment",
                "text": "## A",
                "id": "7c028de1-6df1-4e7e-b088-d7d5cae24b72"
              },
              {
                "key": "A",
                "cells": {},
                "collections": [],
                "id": "daa71fc0-b502-43d0-b63b-5f6c53b5e46f"
              },
              {
                "type": "comment",
                "text": "## B",
                "id": "852fa783-967d-475d-9f0a-55b9e355acb4"
              },
              {
                "key": "B",
                "cells": {},
                "collections": [],
                "id": "bdf3d920-7a70-460c-b365-0e60de470e48"
              },
              {
                "type": "comment",
                "text": "## C",
                "id": "777b9a52-9f49-4728-b96c-4cbdc0a7a18a"
              },
              {
                "key": "C",
                "cells": {},
                "collections": [],
                "id": "f885f834-d039-4ef4-94f9-dca0adaa1e72"
              },
              {
                "type": "comment",
                "text": "## D",
                "id": "65851cc6-190c-4d80-b78c-acbd0902a98d"
              },
              {
                "key": "D",
                "cells": {},
                "collections": [],
                "id": "19b88c7e-3c45-42a7-a9dc-ab4b68a9b4ce"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "cb44d963-862f-44db-980d-fcf52ea036ca"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "d9198414-ee4d-4561-82eb-a46d374193dc"
              }
            ],
            "activeCells": {},
            "id": "25921ced-8106-4d54-b83e-cffe57ae6d39"
          }
        ],
        "id": "b0d5393a-5cce-49f7-a309-f359c59adf4a"
      },
      "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = fcc25018-601e-4db8-8bd6-10d10b63fac7\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6510304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Wednesday, November 23, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "0b03ab2f-44ca-450a-9826-0dd7e98eef2d"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "5ee8d8af-1c53-4547-bf3b-e6ec176a4e48"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "63502e0e-4fc1-42de-8292-a2d70e8288cd"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "df83e3b6-129d-4317-9c70-93a97223e14c"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "d7865c67-2c07-42e3-a681-b6aaa624d742"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "73370e93-a2eb-4883-a3ee-9742dfea2dd5"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "c26ee17d-fe53-46e1-875a-8d8856274cba"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "d7d99d8d-e9b0-4d85-939d-d44a4040223b"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "d4e89599-9d2b-4bb4-84ee-56c07dd38134"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "b0fc48e4-e377-4a42-bef3-e1d69bfac2f4"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "7859b464-7c98-47ec-8dd6-ebee0f377d38"
                    }
                  ],
                  "activeCells": {},
                  "id": "62e0fc51-2173-496e-94f6-389860dd2c04"
                }
              ],
              "id": "fc30991d-f1f0-4874-8d80-acdbafdc0455"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 594551c9-d0c8-4992-8db9-3bfcaecbf3e3\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6510304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Wednesday, November 23, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "SingleSelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                      "id": "443007bd-2a2d-4df7-bb56-599d8028a7d3"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "75e70301-61e5-40a2-8275-475b42c68bc6"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "f73f799d-0288-4ae6-a2e0-8ae0a88b935c"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "39b11430-8c77-4dfc-b25e-698c5f8c14b3"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "b455a05a-4b0c-462e-b08e-933691c65f9f"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "567ee43e-095c-454f-81c3-0abd67988358"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "75d7de48-7c39-4bf9-940a-83577afa343d"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "aa55dd34-0bb7-4a17-a65f-a187de1b5502"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "0e3e44fb-0caf-4766-9ae5-f6c852932ac6"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "0f5b205b-3e2d-4fe2-8d36-a10c4300a88f"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "7d015338-0141-4334-93d5-c9119fff64c6"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "4de7df7b-c157-4828-a0b7-694cd9e6c7b8"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "79751879-7b9f-44c9-a60e-5a817bdf4467"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "0b362342-b23e-4463-a867-5e64654722a4"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "32f23808-2e0a-41c8-b116-d4d2caa146f2"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "75521c92-6f85-4deb-9552-7c0b3900887c"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "297ece3c-bac0-48ee-b26c-4c7909595f59"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "4a1927f0-c7c4-41e4-9904-2b7d45f6d2f4"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "ea9c0279-f4e8-497d-9343-4badd8dd0129"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "4f523506-1ba8-4ded-ade4-f25f6b9533f5"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "5ce5eb4c-c239-4ef9-a5ee-ad89f99f6376"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "bf070105-9eac-4a40-83a2-d9ea5fbd3fa9"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "bdabf92b-6fca-40e6-a7d6-50fd6022feb3"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "2377bb7e-33c5-469e-8563-e6ad26f7c768"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "e88f0cfe-8017-4a37-9a28-efceeef12f66"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "7c3911f6-c1d1-45f9-ba2b-956f6857a0ca"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "11dafc6a-be6f-499d-90d9-d0e707f6a56e"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "5ad9d328-82e9-47a0-abf1-eb2a89326ec0"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "b53ca520-a864-4c0e-a073-d2f69fcde4c1"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "8abd9bed-4254-478a-a787-b4cfbd4cb80f"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "2a3d71e9-396a-4818-b87f-94b8b8af6b7e"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "9500d860-b975-443e-94b8-1a3c03f5519a"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "112243fa-69d7-4d12-abee-3906d071ab3b"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "78916ddb-8d9e-455f-9bb6-830cf3ee2dcf"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "7ecce414-0e33-4656-aed0-bc885fe169cf"
                    }
                  ],
                  "activeCells": {},
                  "id": "ed4e56d9-9580-4f6e-8636-608776061672"
                }
              ],
              "id": "46463160-85f7-41cc-877b-ae5e1f56dd74"
            },
            "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 779780e4-797c-4bef-a3ab-74b5b9a32313\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6520304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
              "last-updated": "Wednesday, November 23, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "Simple",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.SimpleFixture",
                      "id": "0b344453-e304-4292-8f25-59d04ccc488e"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "e9c8e481-921b-4ac1-9d00-98fd425446d0"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "395b2c5a-235f-4071-966f-a5f480c7575a"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "2ffb68fc-02f6-442d-ac45-d7961be677c5"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "e0cd5a5d-ec26-4de6-bce3-5c91c6eb04d4"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "81f02f20-3464-45f4-8820-8677b8064c12"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "8c69c5c5-f805-408b-90db-85d4f4c5e9b1"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "f8380199-7f60-4bd5-a63f-70789ee10269"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "f60511b1-2516-460c-82cf-66da26a9b1d6"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "a9b2c1bb-1512-47e7-be07-03045dc263d1"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "86a3c48b-4a86-4eb1-adb4-0804d882b6a3"
                    }
                  ],
                  "activeCells": {},
                  "id": "9530e76a-c383-4d35-b0a0-d4b3cb3c5ccb"
                }
              ],
              "id": "a3b5d855-ca34-4a3d-b1ee-b028db8a6745"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = a1dc186b-2f30-45b2-a1a6-00eca1c78669\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6520304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
              "last-updated": "Wednesday, November 23, 2016",
              "breakpoints": [],
              "steps": [
                {
                  "key": "MandatorySelection",
                  "type": "section",
                  "steps": [
                    {
                      "type": "comment",
                      "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                      "id": "751d1290-cb2b-4742-820a-b84bf4be3417"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "41728a5b-eb48-4e6c-a548-8bde452cafa7"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "6c7dc4a3-2273-4098-b8c9-d74b6199d371"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "c161ba36-7627-4efa-8ccb-14dd6866c10f"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "02c774ef-ba1c-4705-97df-ba1932e155b7"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "c691c168-ad61-4ac5-9c1d-b11b5a6b8356"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "d27f1b67-5672-4b28-9c7c-f2d2c5a695cd"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "2b1f5e1d-b2f9-43eb-a4f6-9ad5f00283c2"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "06b36487-2d28-404a-9843-95700601d61a"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "f75db111-7180-4f2a-83c8-f7a1fb4a9f8e"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "f69307b1-cd79-45ee-9593-b46be1da6f33"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "d17ef045-c73d-4074-a68c-7d77b15aef18"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "20a35a32-1f5f-46ca-abf3-c72e63c02bed"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "f20f6924-1f65-4e85-9334-4f552a80b6b1"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "ab24d0a7-049a-4695-a87e-01582bce3c07"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "0ce30117-11b9-4193-a222-adba9e210a3c"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "a036c2c6-5e74-4b7c-b5ce-5e658a26a21d"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "7d65a7cb-9eed-4bcd-a809-bb29c9790c65"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "eba4bc47-141d-436e-a287-d890cee733b8"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "e914755f-0e94-40f4-be65-6406602007b8"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "3c063892-b5ac-4343-97e4-45c1e7894a4d"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "8c4fefe8-5449-454d-bebc-b9789fca4647"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "b61ecb8c-5812-4ae0-bd1f-7869c867b9a4"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "ecef2aa4-8e81-4b01-afa1-9ae7b50fe9b6"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "f8e64df9-96d1-44be-8581-06df2e693865"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "eeb8186c-1769-4db4-aeb5-042874b4c2e5"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "08bced14-59e5-48ba-9e40-a0393c0b75b2"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "70b87991-15a4-43e3-a130-80f70a875a8a"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "60dbb6d1-3fa0-47ab-8ec9-30a6cfe86046"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "49eea84d-edc0-4653-8c1f-03b04544d5e7"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "62d5c03f-c17f-4ff3-b71c-c24d5368c99c"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "3a2073b1-0b68-4e9e-8d0f-32cec426bd14"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "01f69443-bef8-4f88-a9c5-285fa1cfc32b"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "e3376e0f-c0b8-4f28-b56c-45c45427396a"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "9917a04f-c93f-4871-ae56-ca4dfd8c3810"
                    }
                  ],
                  "activeCells": {},
                  "id": "7c8a4d7d-1fe8-4e13-90aa-cd0f3bc02845"
                }
              ],
              "id": "23ecf59c-ffc7-46c2-bb07-f18137a4da42"
            },
            "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = fc6bc7cc-12f5-41ae-8664-9db2f9363f68\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6520304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "EmbeddedChoices",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.EmbeddedChoicesFixture",
                "id": "fc79bab7-28f6-4a46-82c3-c36658c0f8d8"
              },
              {
                "type": "comment",
                "text": "## Inline",
                "id": "b9e76305-d1d2-44b7-b936-ea4b921bdb5b"
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
                        "id": "84214cd8-0cbd-4073-bbe6-1f889c83584b"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "bfaf91e3-9768-4c81-b897-2da5018a3182"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "cf701b4c-5929-4794-80fc-4819f5d7d3ba"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "bf9b9264-e27b-43d5-ad06-aea15fda2a16"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "be19e5f0-5e33-4d11-99a9-78721fd74221"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "363c5eb2-7e8e-495b-973a-8a376694bc5d"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "5661c742-7e27-41f5-849b-b065a9c64e2d"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "21de9b74-4390-4f85-8790-df162b5edb77"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "e106e700-a8e5-44ae-8242-5b1ef707db84"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "4db5c331-df66-4026-81f3-eef5a57c11d2"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "f03bcfa7-3980-4eb1-8ae9-c8763ace8b03"
                      }
                    ],
                    "activeCells": {},
                    "id": "8298ace0-0bae-41c4-a6ff-a98eb7b9bce2"
                  }
                ],
                "id": "ad1de5a3-dee4-4ac8-ad2c-5038e507bc97"
              },
              {
                "type": "comment",
                "text": "## MandatorySelection",
                "id": "91d67896-82da-4acf-aead-1a62f370a2b1"
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
                        "id": "b138d327-5ec6-4c3f-a394-d0ea8776d9a6"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "451f835f-92e6-4df3-8c85-f79df71e05e2"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "61c308b7-097e-4e1f-b29f-b4267bc29d7d"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "a3270327-7da1-44f0-ba7d-b6a30b422299"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "49e9fa84-1c87-40a0-a7ef-9b742186bc21"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "9464c93f-4bae-40ae-8294-7202d3190420"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "0583e39e-d1f1-441c-93b9-a3d06cba356c"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "88a02f86-62b2-4d97-965e-ac9705f4852f"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "29f40e95-8937-4305-befe-83738151a4d5"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "8eccb54b-009e-4b46-9697-f923daf6be27"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "fa41f4ac-6528-4b62-8434-d054e4e877bb"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "42068011-e4ad-45aa-89a3-abd47191d604"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "8968fc6d-7f0a-4a58-b7da-2b25b1e114eb"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "c239e59b-fbf0-46da-90f9-12b62750253f"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "29879e55-30e6-4d6c-a335-85ea3c67c46a"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "2008aedb-a7cd-4902-b63a-7f0594720bed"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "2557fe5d-72c2-4265-8bd5-c7d1d05cb3a5"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "7f645c40-d31d-4cd6-8ff8-ea33a7ef9b12"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "01231956-88d1-44cb-9f0b-d9811f65ee94"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "35d3380c-a477-4da6-ba06-a60cd7d810aa"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "19ec59da-b788-4886-8883-4a895225b5cf"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "675a2f2a-8c4a-47db-8efc-06f9c11baece"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "93e254d6-a407-4dec-8bbb-05f420260784"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "9e13db49-a4b7-4ab0-809f-0818cf786aaa"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "2f42d085-18f3-4858-ac3a-2c42cf6355cb"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "482043a7-8fc5-489c-bb93-a8a50992c4f9"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "2b12618d-9e3e-40dc-af81-195b59cd5bd6"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "8b46e2bb-545e-4411-9823-5eb27d0092e5"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "0756e7cc-ec07-4006-aefa-3aafb0e0b92e"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "ef23e5ec-b800-4168-abd5-fa5486bc2506"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "2b057aa5-67f3-45f9-b8cb-4d90a66e9e7e"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "3186f07c-85da-4c8a-afd8-e36b51ce817e"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "0da8d7da-2203-4033-ac4a-ce65d68daf5f"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "e393268e-ba52-48e9-bbce-68d535219524"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "e39b24bc-107b-4562-8df7-1ceecb725720"
                      }
                    ],
                    "activeCells": {},
                    "id": "f8b4a84c-ff20-4a43-9ef2-325ebff5d0ef"
                  }
                ],
                "id": "fabd2fa1-0f65-412b-a857-db57214d5bab"
              },
              {
                "type": "comment",
                "text": "## Simple",
                "id": "d4d81dc6-2464-4a00-9c07-2af932d7d92b"
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
                        "id": "47247e7e-06f9-4258-a4df-91dfe4aa22e8"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "d814cf83-f78a-4f35-82d1-48b43c6232a9"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "de0eda1b-d712-4177-984d-e5822bd0466e"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "7bc9f173-96e6-4630-a34e-f0350b32aba4"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "e71fe21c-fadb-42e3-b8e8-90f36b155377"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "ac88ef08-2e91-41c9-a70e-11d54c200370"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "900602a2-dc29-4b38-aa6e-82bd0679c726"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "4c986bd1-2a4c-47dc-bef2-5c3560494b84"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "0bf6eedd-ff24-42d1-b929-3e3073cc3d00"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "23987227-b37a-401a-a90a-ddc010a57c35"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "ef2c93d7-3822-4186-8de4-559c4b4e0002"
                      }
                    ],
                    "activeCells": {},
                    "id": "8f6a8dde-6188-4f41-bf2e-9a6da99708c1"
                  }
                ],
                "id": "fe6a61c5-ca72-424b-93ab-ff2452571a6c"
              },
              {
                "type": "comment",
                "text": "## Single",
                "id": "415c8394-8140-4af7-8879-32a8d66bf327"
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
                        "id": "30ca165c-bb5b-4c3e-8a28-14867c6d40a0"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "b03da948-6acf-4d4c-9519-33e3fe84adc1"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "d11e663c-efbe-4bc7-bf33-c9df6c0586ca"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "67b59b41-62c2-4368-857b-35b9b066ef7d"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "9f224d51-147f-4e53-838a-ff146161ad7b"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "11f52087-2781-4fef-b0d1-af2e8aff0f81"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "415ac830-7848-4b87-93a1-59c263c1705f"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "c5a5be89-b1a3-4b8d-8d0b-e29eb144e791"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "01c5bac8-2dbc-4be9-a4f8-b50dcd8a4eca"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "83cf4428-5dd1-418f-b235-f9fd9b80a58f"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "4433d2c5-80ce-4c3c-b312-167da5dff52b"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "6cabc6e7-f1a6-42ed-a14b-c59ceb55f01a"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "64412d18-02da-426f-92a5-b774c1775880"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "0e6e614c-9c48-473b-a76d-b634b597c9e4"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "654e4a4b-9e96-487c-8263-16839ba7779f"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "95f67acc-8fe3-4c3b-aee0-ee02930017e8"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "090f625d-ff35-4397-bff4-2e4ffad8e456"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "b478a8c7-0cd7-4853-a73d-ebac90d9c2a6"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "a95285f2-e800-4f77-ba22-d7f349842913"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "21d7ddfb-3bdf-4aed-ad9d-2f4e2ac06c3c"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "2f434b59-3926-4ae3-ba10-61b7c4586f77"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "4b4181d3-bb16-464f-ae70-a0a9b7f5e145"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "94223659-daef-4ab7-82a7-f3efe89bb1aa"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "66d5edf1-66b6-4e7b-9b20-15b84ab116c7"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "b4d66570-e179-4f56-b874-0417b3ae8e8c"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "0a606203-913e-45cb-b9db-6eed6a9df42a"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "4de6275a-a63e-43a8-b819-1ff4aaaa115c"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "c1f0f730-3604-4ad3-b7ed-1ff6dfc0e380"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "a9cc694a-0ecb-407f-b974-9da6daf97692"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "c240e0da-4d60-4175-8912-250da930c0af"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "86c575bf-3e59-4e21-bca5-37ba71c91415"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "0b373474-d2c8-4b86-a784-d25c97d5ac84"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "34c09041-488d-47b5-a6a2-0d2f91000b4a"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "6e7001a2-37da-4e3d-becc-9df5a1d28496"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "d00a3156-9c41-4592-84f3-8a6343da75ff"
                      }
                    ],
                    "activeCells": {},
                    "id": "7fcb7337-fb0f-45cd-83a2-25d8577e7e6f"
                  }
                ],
                "id": "b8751d6d-1945-44f2-b15a-10c925f88635"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "1456e587-a6f8-44ea-a94e-4fdc26af597f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ec68795e-45de-41fa-9709-2cb49b15a18c"
              }
            ],
            "activeCells": {},
            "id": "6b73b56f-41f5-4e3a-82ad-18591edc9ee2"
          }
        ],
        "id": "8fa0f283-3b66-4f11-b88c-2d0808228794"
      },
      "sampleMarkdown": "# Sample Specification for EmbeddedChoices\r\n\r\n-> id = e14c3c7c-df28-476c-8153-65681ff19724\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6520304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[EmbeddedChoices]\r\n|> Inline\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> MandatorySelection\r\n    [MandatorySelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> Simple\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> Single\r\n    [SingleSelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "SingleSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture",
                "id": "af08a583-668b-4aee-b412-e02a88a51d1a"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "bc0e88ac-db33-47d3-a459-dd359b8edca0"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "043ae5f8-564b-4ab5-a9d6-f4d1a9aba09c"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "067bb8af-c35a-4384-a23a-74365f503f74"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "737ae02a-6819-445e-b278-820466c94420"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "997800ff-4fbf-4142-b3ca-aeedd3c9a6d7"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "3f33cb03-b2ae-437c-b94b-bf7b544610e2"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "9723ec09-f7d4-4129-a709-ff2e1aaaefc8"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "125860ca-440e-4854-9505-5ef82ed27d03"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "bd9401bb-9eb1-4554-8558-6f667eca1faa"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "eae79719-a994-4623-9ba0-c95fdca08494"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "a3e27b09-2e1c-45a5-90cf-d6b38081c01d"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "131b26bd-ae65-4f07-82f8-aa8d472d5699"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "0cb4f600-5fe2-4b14-b416-8dd028f26cdd"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "9c97de90-82bc-48ac-809e-0944f753a260"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "9edbcf54-909a-4f70-a63e-5b3a2ce7c0ed"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "14bf83b8-62b8-4b5e-8c21-8752b8672454"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "5dc59c0b-07a9-4461-a3a7-4cab6b022454"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "e9de29cb-17d0-4333-ab78-67dd2118bccc"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "c2082a3a-8be8-4b9e-a80c-84ee622073ee"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "cc19c5b0-c285-4e2f-b2c2-85871c4c8d03"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "ee671de9-c726-464c-b96b-324c50ec908c"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "e421a122-ee22-428a-b1cc-2ca2e0b4d64f"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "b0cc967a-8e67-4462-a93a-69a03ab0bcdc"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "feed5148-4ef9-4b93-8231-441c85d5051d"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "ede5609b-c6fb-4ec0-bbbf-469059248337"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "813cae79-d3af-474d-b508-3f8ed843a4a5"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "321ce6b9-a1b4-4fa8-b877-01cec75dfa82"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "b96c55aa-7e87-478c-add6-e13dc551426b"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "0f268384-1830-42fd-af5a-3cae1643ceac"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "951cf8ad-275f-496e-b1f8-730069339205"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "20630eae-28b9-4150-aa1a-a54b08e8f8f9"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "fd2e27c9-c249-445a-b96c-c66c5ed17728"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "fa42198e-6be7-4b38-aeca-266715d02e87"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "9bfce86a-8cde-49ab-9bc1-81899469094f"
              }
            ],
            "activeCells": {},
            "id": "59ba00be-4960-4fed-be9e-3328df306702"
          }
        ],
        "id": "508817ba-f443-4f7f-9441-0db990470ef5"
      },
      "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 0bac0f63-6f3a-4e05-bfb7-6de4ef8fd780\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6530304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "OneOrMoreSelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.OneOrMoreSelectionFixture",
                "id": "251f2560-f37c-4b3a-9cc0-5e21ca1d2e44"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "ac962f7c-6bae-4bbe-91f2-1c6471744536"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "90a187e5-9674-4c7c-a1ce-0fafc73b1287"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "f9b5a86e-8b8e-4cbf-bd15-68c9cc49cf9f"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "13821253-5c7c-4079-bfda-d6f90e31ee1d"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "e596f651-87f2-41b8-937b-9fd3972f854d"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "8fc107d7-2488-45f8-87a1-08d27edbd962"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "11e99853-e5c5-41a2-8f45-da7c69fccd9a"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "62fc26ea-2ede-4279-8fd8-99f2dff48bb4"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "da1ec30c-657e-45dc-bd45-f04cdb70dfe8"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "bd9db403-fda6-49ad-8a45-9a81d8d9a782"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "c81dbefa-5ce9-4809-b5df-459be166e406"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "886009cf-bf0f-4b78-b5a4-c4cec7dba5ad"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "6c94a684-180f-48df-b599-6813603d2e9c"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "d54dc3f3-1c6e-4d1e-9323-52abed19110b"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "f02abc80-96c1-4527-b560-1ecb82f6f627"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "ff5593e2-1026-44b6-bcf6-78b8710dec16"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "e879d94f-b730-4a39-afaf-1145ac0ae84c"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "94cd2b02-b765-4485-925d-badec39888f0"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "369ef2c2-5813-4f10-a9fd-1a1cb8b83eb4"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "7abe0ec1-a143-4b16-9ecd-46711df4cf82"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "1ee80275-aecf-49ae-9d30-cf4f39250e81"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "170691b7-ec1b-4f76-98b4-1aff6ce8220d"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "54d7923b-b87e-45c5-bdab-a4f347e8a93f"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "e1a83608-bdef-4d8b-841e-d38a8a444d74"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "e092b2bf-b8ca-436a-901e-66d1cf82953a"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "16283aef-fd7e-42ad-9278-e8d9f9e44b26"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "92e5eab1-e9e1-481e-9d6b-89b41621bea7"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "e9537d8c-079c-41d5-98a3-305d29f9f1cf"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "88774aa4-7fad-42ae-b804-0eab9a4d4b3b"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "fa06fee4-b210-4345-a2ee-d202e3a2df6e"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "b3a1c01f-7bce-4795-a560-7e12853f6f0a"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9087412b-0254-427b-ba16-ddf7ce0444ca"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "a70e8f36-267d-4bcb-bade-b87ab1ad293b"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "3b28d0b9-079b-46a8-8ad8-b3a49082b613"
              }
            ],
            "activeCells": {},
            "id": "6d4e12c6-68d9-4fab-a08c-141933ab9e47"
          }
        ],
        "id": "7e6b80e8-4584-445f-9d1d-ead442bde963"
      },
      "sampleMarkdown": "# Sample Specification for OneOrMoreSelection\r\n\r\n-> id = 70097153-c54b-4c63-a0e7-84a385fefeb7\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6530304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[OneOrMoreSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "MandatorySelection",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture",
                "id": "dd76d6b8-d188-4054-ac9f-d5012abbcd55"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "4a345b3a-4e52-4e64-881c-106fb14e9bef"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "70fc0a46-f4e1-4c33-9f37-221058154616"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "4a4fc035-42a8-4b16-a1a5-fae65d298229"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "ada690bc-8b89-4986-95d8-683f388bbb23"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "a2f051d1-19f3-4ee5-ad97-5070929226ff"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "56e20609-6e97-422f-9769-ec4809c3f19f"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "5bdd8036-c2ed-4013-a63e-5b0652fdbec8"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "bc8b4a11-4a9f-424c-8444-7d95a4de7a25"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "815f19b2-c62c-4dd0-9b4e-be08c7310390"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "c898726b-acb6-4f71-b962-122e53b6c2dc"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "2a63d003-856c-4fde-95f7-193ca139165e"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "a9796297-5bb7-475f-8a10-28f8e6f81ff8"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "c83563c0-f508-41ba-ab29-f41c5c1bc4c5"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "f3f41bc3-5c6c-4819-a067-fa033bf33048"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "dca8c183-5300-487c-933b-900a9708f2f0"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "6c5ac0e5-fa3d-4c03-8174-bab32a3a66b8"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "9bf36210-7855-450c-bc04-dea4d1ac3c69"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "63c02e21-44e6-441b-a3e7-b13b4d46f675"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "121ed0f0-cb1c-442f-b466-760a12d28f8f"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "dbdbdb9e-7907-4cec-ba7f-936e41d16ac5"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "b6893e5d-eca7-4462-9e14-17ed8fcd695b"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "eb02a81b-30e8-47dd-8752-47ce66cab957"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "f22d19ca-b1f3-4b66-a419-67eeb1c109d6"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "ebf6a52a-4fce-4915-923b-5614271e13f5"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "8efc023b-9535-4b6e-b544-25cc207fc86d"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "b862ee96-7787-4bed-9a19-97cd5e3ec4cc"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "64ff588a-0252-4008-913a-61f9542349a9"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "1e398a53-27cc-4d0a-9430-bec03beb2b20"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "211c721b-9c1b-4baf-b87c-18e2214d923b"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "aefbf82e-a2b1-4ed1-a32e-31ffe81057c6"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "8b82a564-60a9-404a-9ac0-3acf12eb13ea"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "cd0c0910-2763-4fec-ac1b-246c420b35d2"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "ed100c35-ab4d-4ce4-837d-25084f5f1c22"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "f9cb6112-6a3b-4c5a-9869-9ff975e13129"
              }
            ],
            "activeCells": {},
            "id": "e12183de-6b84-4c3c-9171-c7fc9e5e059f"
          }
        ],
        "id": "4373267d-e5df-43dc-8670-9e04f739c16c"
      },
      "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = 7ba311e5-1e99-41a0-b665-949c16f9511f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6530304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sentence",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SentenceFixture",
                "id": "28b3a254-097c-45ca-935b-347fd08fa6af"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "be9cc0d5-5623-48dd-9b18-bbc1cc20af59"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "470a1e60-3e4a-4758-b0c8-68b4dc8c909d"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "995813e7-60ed-4361-bcdb-a86aba3da748"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "31cfabf6-46c4-4a1f-ab9b-2e248e36cf45"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "8da2a8ba-6942-46ec-981c-09ed18b9ce47"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "e1cb552c-c856-4d9b-8d53-569a83bb77ad"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "feb6fc0e-6b75-48b8-a521-cbeb079b27c6"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "399052d0-9d93-4d29-a547-5b29c59789e6"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "1a0c03d0-fbd9-4b04-89b9-b9c30771c784"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "31e75c90-c285-425e-8179-d5c6c78ca672"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "7257d62d-8b93-4d1d-b49c-9586beed6bc2"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "5b4effc0-a056-4814-8aa0-6359ecd26ad1"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "efab4c6c-6090-4a4d-af1b-e0e94e3c719a"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "106c8c03-f5aa-4e95-a069-1fa669e2d7fb"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "3e6249da-e8ff-4536-8401-c7cbf05624e8"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "ad50aaf7-a337-4fd0-8b20-ef2dc7ccaf8f"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "64009ceb-8d1a-4840-b4a3-5ced9e2ac8ff"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "b7a6227a-5fdb-434e-9312-6d5156cd85ac"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "6f42963b-9bd4-4814-95de-afc2d680251f"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "dc07258f-92a8-4e45-8a8e-48965cf54705"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "2fbcfd8d-1943-42c7-af67-fc455c316095"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "e133d075-29b0-424b-a23f-e203ef2f687f"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "afd3274e-26ef-4be2-b751-32cc09e29f21"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "366c2f96-f6d5-410e-9d78-7b6b01d8a443"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "783384e2-3b44-4301-a5c7-ef7e7869980f"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "0940c877-33f2-42e9-80fd-b1a14f5e20ba"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "ac6fd2c4-abf3-416c-adc9-9eb171271993"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "244a80b1-31a8-4263-939f-c792f0f51107"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "09a826f0-2bf2-4fa7-97e3-4a5ab1e1c2e7"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "de023aaa-2142-4573-9e50-a03a823373fd"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "4e777573-eb6b-4e4d-9583-5efbf2cafb24"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "eb939f78-dda0-4f94-b15f-74b83178f2d5"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "37a0a2d6-f0ea-4bab-b261-36a3b2844bde"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "0ef41e95-72a2-4b99-a580-69a65082ff38"
              }
            ],
            "activeCells": {},
            "id": "aeda471e-aa60-4ad2-bdf2-2e5658252c7a"
          }
        ],
        "id": "6b67fa71-f6eb-4c1d-a8c6-a86582210c81"
      },
      "sampleMarkdown": "# Sample Specification for Sentence\r\n\r\n-> id = 4f28c61c-151e-46e0-80a5-26284a2b975d\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6540304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Sentence]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "DataTable",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.DataTableFixture",
                "id": "bedbb7b8-6fb8-436b-bd78-9b3f854ca194"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "1214b060-8283-40f5-8eb2-91713ffe5b3e"
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
                        "id": "cdcd5c7c-4d2c-47dd-a9fa-03ef8f8d7dae"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "f52046ba-6072-4bd9-9691-c34cd4555f40"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "cee98852-cba0-43b5-807f-3ab52d7b4b78"
                      }
                    ],
                    "activeCells": {},
                    "id": "c201c6e4-678f-4379-a330-ea1cf4f9e509"
                  }
                ],
                "id": "bdb13b44-d3bd-418c-bf67-75d86f91e18e"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "ebd170aa-c245-4a2d-9808-323a612a8bf4"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "6b00bf30-0174-4fa5-b134-06c241f2b53b"
              }
            ],
            "activeCells": {},
            "id": "6115133a-92f6-4c2d-b631-d14bd8f7d76f"
          }
        ],
        "id": "ae3e7423-c52b-4a28-8487-c7ac5f29cc54"
      },
      "sampleMarkdown": "# Sample Specification for DataTable\r\n\r\n-> id = 611c2bab-f7a0-49bd-808d-288f2ae54bf2\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6540304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[DataTable]\r\n|> TheDataIs\r\n    [Rows]\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Sets",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SetsFixture",
                "id": "c84b2cd8-a0df-41b6-a345-02edbc9530dd"
              },
              {
                "type": "comment",
                "text": "## AddName",
                "id": "d090f01b-5b67-49a8-a846-5834668f8170"
              },
              {
                "key": "AddName",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "a108f78b-8d9f-49da-8b19-7515e863801b"
              },
              {
                "type": "comment",
                "text": "## InvoiceDetailsAre",
                "id": "02ff860d-3eca-4c59-bf6b-4df28b9e8bcf"
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
                        "id": "6edc1530-4a67-4acb-9576-f4b4bfcd2ad2"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "fdf988c0-99d1-455f-8283-58701c885a79"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "17433e0b-f6be-485e-9135-9b5a6ddfa372"
                      }
                    ],
                    "activeCells": {},
                    "id": "c4782b37-982d-4d63-a87e-63bfb3dfd821"
                  }
                ],
                "id": "1655cc9d-1243-4296-8b1f-485b319049ec"
              },
              {
                "type": "comment",
                "text": "## OrderedDetailsAre",
                "id": "5b99bf2c-6d8d-4132-973a-78359aee964d"
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
                        "id": "4fd6b748-46ec-4acb-a72c-36fc52d66a1e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "b5b0db52-cecd-472a-85b9-a742fa8f1931"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "518134fc-0a0b-4ad7-b542-937821ec47a5"
                      }
                    ],
                    "activeCells": {},
                    "id": "9ac5593c-7529-4606-a112-c42fa43c0904"
                  }
                ],
                "id": "222c13d1-b955-4988-b0f2-b6e01a73837a"
              },
              {
                "type": "comment",
                "text": "## OrderedStringSet",
                "id": "54ad7843-4530-47b6-980b-725da72079e0"
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
                        "id": "c25148ef-5556-4239-b6e3-96e74d651242"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "1080bddb-e20c-4a17-b59c-56fa8f59dd4f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "64031f96-76a0-4966-acda-3648f26a333a"
                      }
                    ],
                    "activeCells": {},
                    "id": "16a6a5c9-550d-4ddd-ae7e-317d7e90b2d2"
                  }
                ],
                "id": "e08875ac-8007-48b4-85c9-d773f4099b76"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "3c9fe47c-fb5e-42f4-8610-b1ed9c2849b7"
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
                        "id": "bcef327d-64b0-4055-a354-e5ba1e5faaec"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "36145f16-09b7-4a74-93b6-afe84220bae0"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "0f90626a-78c8-408c-9a36-c660a9c9794d"
                      }
                    ],
                    "activeCells": {},
                    "id": "10f52b9e-de46-4272-9262-9eb9fc53731d"
                  }
                ],
                "id": "fea7c627-686a-4cd3-97c7-c3e4c3e19c7b"
              },
              {
                "type": "comment",
                "text": "## ThrowsErrorOnDataFetch",
                "id": "f8c5fd62-8f2e-4706-b0e1-924b531c0235"
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
                        "id": "44524bc4-8bb0-4986-9d9c-3dfc188416b1"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "b7e4202c-ce5a-4cdc-aff3-82bcde8ce41d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "9499f2ae-ece0-4d04-acc9-11de460c049e"
                      }
                    ],
                    "activeCells": {},
                    "id": "0a665be7-31ff-4e20-b02b-f994e4cd6136"
                  }
                ],
                "id": "22966c36-66eb-43b7-b411-9449919e523c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "231ff4d1-4300-4a3f-b788-2479831bc02d"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "9e1caa2c-3862-409e-a9d8-d36c22432e11"
              },
              {
                "type": "comment",
                "text": "## UnorderedDetailsAre",
                "id": "70666dab-3f55-4c36-b6ea-903c23e70c29"
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
                        "id": "4271dbf9-3155-4df2-a901-6fea11fca185"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "938d529c-1c33-4547-92b4-a92804eb272a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "837c2108-604e-4f42-9187-135bdae17eb7"
                      }
                    ],
                    "activeCells": {},
                    "id": "b8101fe1-4a68-4efd-b21f-65ae2e20f12b"
                  }
                ],
                "id": "7e763045-b836-49a0-9eef-a9dd3b19a14d"
              },
              {
                "type": "comment",
                "text": "## UnorderedStringSet",
                "id": "c89ef091-7e9b-4ccf-978e-5ffe5d213db8"
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
                        "id": "3e445017-79ad-4286-b74c-c85b0741d0ab"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "d75acd8c-ba7b-49fe-9e7e-e40e629b4951"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "f1e25319-acad-40c1-a3d5-cf7a57f572f0"
                      }
                    ],
                    "activeCells": {},
                    "id": "b892e7d6-e0ce-43d8-8063-6d41b1b01ef6"
                  }
                ],
                "id": "db99a790-71e9-4820-b70d-9353e095d040"
              }
            ],
            "activeCells": {},
            "id": "728978ea-68cd-4395-86ad-613e66fc871c"
          }
        ],
        "id": "85c1bbed-ed1b-46af-924e-c09f9b5f5ce7"
      },
      "sampleMarkdown": "# Sample Specification for Sets\r\n\r\n-> id = 0b26f988-f802-448a-9178-593e9e2deb72\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6540304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Sets]\r\n|> AddName name=name\r\n|> InvoiceDetailsAre\r\n    [Rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> OrderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n\r\n|> OrderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n|> TheDataIs\r\n    [name]\r\n    |name|\r\n    |name|\r\n    |name|\r\n    |name|\r\n\r\n|> ThrowsErrorOnDataFetch\r\n    [rows]\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n\r\n|> TODO message=message\r\n|> UnorderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> UnorderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "SometimesSlow",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.SometimesSlowFixture",
                "id": "89763ae3-fd29-4f0a-bf8d-295944619ba5"
              },
              {
                "type": "comment",
                "text": "## ReadText",
                "id": "67e68587-5ef1-4617-abe3-46d71d36ffba"
              },
              {
                "key": "ReadText",
                "cells": {
                  "text": "text"
                },
                "collections": [],
                "id": "b3771d04-6059-4063-af24-d0ff6ede435e"
              },
              {
                "type": "comment",
                "text": "## Slow",
                "id": "9d792ab6-c80f-4bcf-8f22-00c64a35e40e"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "5a26eb0e-561f-4013-b279-80a064b544e7"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c56f55f6-bf80-4b19-ac60-7281691fc1a2"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "2f350081-1dd7-49c3-9dc8-cd4ef70bd675"
              }
            ],
            "activeCells": {},
            "id": "6138b9be-faec-4bef-857f-ad3787347990"
          }
        ],
        "id": "82ad201d-09fc-4ca9-8ddb-46a6950da02a"
      },
      "sampleMarkdown": "# Sample Specification for SometimesSlow\r\n\r\n-> id = d6ed863e-bf4a-43b1-bc9e-a8407e02607e\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6540304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SometimesSlow]\r\n|> ReadText text=text\r\n|> Slow\r\n|> TODO message=message\r\n~~~\r\n",
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
        "last-updated": "Wednesday, November 23, 2016",
        "breakpoints": [],
        "steps": [
          {
            "key": "Table",
            "type": "section",
            "steps": [
              {
                "type": "comment",
                "text": "Implemented by StoryTeller.Samples.Fixtures.TableFixture",
                "id": "05c72909-73f6-464d-8e3a-6b009ce9bc95"
              },
              {
                "type": "comment",
                "text": "## AfterThrowsError",
                "id": "898a70b3-c807-4677-827a-d69fcf473213"
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
                        "id": "cfec25da-cdbd-42c7-a8b0-a677593817c5"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "6ee347ff-8174-4483-9aa6-42935b2aa26f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "fcabff18-87de-4372-a335-20f5dce84dfc"
                      }
                    ],
                    "activeCells": {},
                    "id": "c10ff519-dc90-4567-aaba-b1ae3330c42f"
                  }
                ],
                "id": "e74978f7-4192-4691-8b91-375daf19c2aa"
              },
              {
                "type": "comment",
                "text": "## BeforeThrowsError",
                "id": "5949dc1f-2412-44e3-a022-2ba3ad831576"
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
                        "id": "bacb5822-524e-49d5-b3cb-2b228b817327"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "ddaad40c-9fa6-43b5-8bf5-a3cca7b371cf"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "227420fb-b69a-4396-830b-74f3b50ed577"
                      }
                    ],
                    "activeCells": {},
                    "id": "b7ff3aec-7e60-4d97-8102-0635be040b9b"
                  }
                ],
                "id": "f37bfa05-9a1d-4f17-8cbf-215419b95f12"
              },
              {
                "type": "comment",
                "text": "## decisions",
                "id": "b0c54f23-3d66-4822-b858-c503bbc37288"
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
                        "id": "7f112c3f-e770-4fe2-8a02-1de937b4026e"
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
                        "id": "3d16a7b4-7a8e-4a7b-9fac-f20e2087b477"
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
                        "id": "92274ec4-d9f0-4bc4-b33c-45da9f52d5db"
                      }
                    ],
                    "activeCells": {},
                    "id": "5b08b4af-d46f-4c43-815c-8902ec3e3f2c"
                  }
                ],
                "id": "4327f69e-a954-4912-87fc-f98c44457758"
              },
              {
                "type": "comment",
                "text": "## Divide",
                "id": "95bab072-57e2-4e8f-919a-ad5db1c5ccbd"
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
                        "id": "4511803b-e4f3-4f4c-9093-0f54a9631517"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "5244d26e-70d1-4336-9b94-59bc35d33f31"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "faf12cdf-382a-48c0-a071-96928e4021a5"
                      }
                    ],
                    "activeCells": {},
                    "id": "6f942229-590a-43de-bedb-47af20a3957c"
                  }
                ],
                "id": "9b3b7645-60fd-4d0f-adb2-2a1262ba9d2f"
              },
              {
                "type": "comment",
                "text": "## IsPositive",
                "id": "ffbe8b4d-95fd-4b64-8066-7162d6ed35b7"
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
                        "id": "53ef1197-4a23-434d-9dde-a32545bbb3bb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "af89a6cf-9962-494b-bf02-64d695f99e1d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "1e34b3ea-ad2b-4968-ae4e-fdf9099dcc16"
                      }
                    ],
                    "activeCells": {},
                    "id": "9b57b031-62aa-4b83-be88-a72b228cc2f8"
                  }
                ],
                "id": "90385f36-cd60-4a6e-bf35-cea6c434207c"
              },
              {
                "type": "comment",
                "text": "## Sum",
                "id": "12110efb-35dc-49af-ba58-ea20fdd71b37"
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
                        "id": "18b6c710-a465-4136-a01e-53f0aab9d278"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "521395b6-d562-4851-a29d-9d5ff0133621"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "18f609d3-74c1-4b5f-9b65-db012b04458c"
                      }
                    ],
                    "activeCells": {},
                    "id": "53c50f93-f45c-4de8-b452-b88e1c2b1e37"
                  }
                ],
                "id": "17eae341-0b77-46d6-9398-26c415148342"
              },
              {
                "type": "comment",
                "text": "## TableWithLotsOfOptions",
                "id": "811ffe90-e11d-4345-a86e-f9546ba3141d"
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
                        "id": "f526031a-3a95-4083-abdf-940857344233"
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
                        "id": "a92e1d1d-45c6-4562-bf8f-be1a5fbf648c"
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
                        "id": "9cb30251-a156-4b97-9496-3592ccceec9b"
                      }
                    ],
                    "activeCells": {},
                    "id": "ec116a94-3aad-4ff3-aa11-c41f0e4048de"
                  }
                ],
                "id": "398cb67b-e2f9-482f-bdc5-1dc15c05efd5"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "b878bd92-5461-47c6-a5b4-eaab5cf6de52"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "a6d355c4-e68d-4712-a711-1a726454b6af"
              }
            ],
            "activeCells": {},
            "id": "502cb836-bae0-4af5-8097-2a849649926b"
          }
        ],
        "id": "9c7403ab-6171-481a-97d2-ee191fc31bdc"
      },
      "sampleMarkdown": "# Sample Specification for Table\r\n\r\n-> id = 1bda512d-9a6e-4eed-a943-35a19d2f0ab6\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T08:22:37.6550304-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Table]\r\n|> AfterThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> BeforeThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> decisions\r\n    [table]\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n\r\n|> Divide\r\n    [Rows]\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n\r\n|> IsPositive\r\n    [table]\r\n    |number|IsEven|\r\n    |number|true  |\r\n    |number|true  |\r\n    |number|true  |\r\n\r\n|> Sum\r\n    [sum]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> TableWithLotsOfOptions\r\n    [table]\r\n    |a|b|c|d|e|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    }
  ],
  "time": "11/23/2016 8:22 AM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}