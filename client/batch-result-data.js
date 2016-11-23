module.exports = {
  "records": [
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "59710f8c-db4c-4eaa-a04d-9187c355f5c0",
            "spec": "embeds",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0080cd04-cba3-4d6c-8bde-d62e98890344",
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
            "id": "a350dc7a-0db8-4cc3-9718-d3a4c46bef4f",
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
            "id": "1058fb94-fae2-4ba1-9247-e36d6130ca5a",
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
            "id": "3e855c70-1742-4c2e-b72c-4e1474a31b0c",
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
            "id": "5341a47e-8c74-4c89-9ef2-e58fd97c5ea5",
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
            "id": "c32d71c2-60d0-486b-af6f-af71d6444807",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw()\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__19.MoveNext()\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context)\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context)",
            "cells": [],
            "id": "e65082a9-02b8-4394-a7b3-7899b7e39a69",
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
            "id": "59710f8c-db4c-4eaa-a04d-9187c355f5c0",
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
            "end": 1085,
            "duration": 1085
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
            "start": 1071,
            "end": 1073,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 1074,
            "end": 1077,
            "duration": 3
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 1077,
            "end": 1079,
            "duration": 2
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 1079,
            "end": 1079,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1079,
            "end": 1080,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 1080,
            "end": 1080,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 1080,
            "end": 1080,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 1080,
            "end": 1080,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 1080,
            "end": 1080,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1080,
            "end": 1080,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1081,
            "end": 1081,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 1081,
            "end": 1081,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 1082,
            "end": 1083,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 1083,
            "end": 1083,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 1083,
            "end": 1083,
            "duration": 0
          }
        ],
        "duration": 1085,
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
        "time": "3:54 PM",
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
                "id": "0080cd04-cba3-4d6c-8bde-d62e98890344"
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
                        "id": "a350dc7a-0db8-4cc3-9718-d3a4c46bef4f"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "06c77573-3b97-4ec9-801f-5992c69e6107"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "1058fb94-fae2-4ba1-9247-e36d6130ca5a"
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
                        "id": "3e855c70-1742-4c2e-b72c-4e1474a31b0c"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "5341a47e-8c74-4c89-9ef2-e58fd97c5ea5"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "c32d71c2-60d0-486b-af6f-af71d6444807"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "e65082a9-02b8-4394-a7b3-7899b7e39a69"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "afb740d5-f8f8-4aad-a27a-14af309700c5"
              }
            ],
            "activeCells": {},
            "id": "59710f8c-db4c-4eaa-a04d-9187c355f5c0"
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
            "id": "4d611937-b1d7-49e1-a81b-bcaf44983f47",
            "spec": "general1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f30d245e-90a0-42bd-93b6-de563fb97b47",
            "spec": "general1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f30d245e-90a0-42bd-93b6-de563fb97b47",
            "spec": "general1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f30d245e-90a0-42bd-93b6-de563fb97b47",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f30d245e-90a0-42bd-93b6-de563fb97b47",
            "spec": "general1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f30d245e-90a0-42bd-93b6-de563fb97b47",
            "spec": "general1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f30d245e-90a0-42bd-93b6-de563fb97b47",
            "spec": "general1",
            "position": "5",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f30d245e-90a0-42bd-93b6-de563fb97b47",
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
            "id": "04de22af-728c-4358-b680-b85929e4f58a",
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
            "id": "04de22af-728c-4358-b680-b85929e4f58a",
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
            "id": "04de22af-728c-4358-b680-b85929e4f58a",
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
            "id": "25685418-d194-47fa-9bff-e529f3a286dc",
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
            "id": "25685418-d194-47fa-9bff-e529f3a286dc",
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
            "id": "25685418-d194-47fa-9bff-e529f3a286dc",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4d611937-b1d7-49e1-a81b-bcaf44983f47",
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
            "start": 1,
            "end": 2,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:2",
            "start": 2,
            "end": 2,
            "duration": 0
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
            "end": 3,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:5",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "IfTheAddressIs:6",
            "start": 3,
            "end": 3,
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
            "type": "Grammar",
            "subject": "TheAddressShouldBe:0",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:1",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "TheAddressShouldBe:2",
            "start": 5,
            "end": 5,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "CheckObject:TearDown",
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
        "time": "3:54 PM",
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
                "id": "f30d245e-90a0-42bd-93b6-de563fb97b47"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "04de22af-728c-4358-b680-b85929e4f58a"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "25685418-d194-47fa-9bff-e529f3a286dc"
              }
            ],
            "activeCells": {},
            "id": "4d611937-b1d7-49e1-a81b-bcaf44983f47"
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
            "id": "a17c458c-c22e-4d00-8625-db1228449950",
            "spec": "SometimesSlow",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "096037a1-7b6d-4bfc-a5c0-bd9d55847278",
            "spec": "SometimesSlow",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a17c458c-c22e-4d00-8625-db1228449950",
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
        "time": "3:54 PM",
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
                "id": "05b1f82e-f030-492d-8019-6bdbddfb521c"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "096037a1-7b6d-4bfc-a5c0-bd9d55847278"
              }
            ],
            "activeCells": {},
            "id": "a17c458c-c22e-4d00-8625-db1228449950"
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
            "id": "060e2cc5-5fbf-4450-8bfd-aa58d460aec5",
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
            "id": "cc5c66cb-55b6-466e-b5b2-78a1bf92db1f",
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
            "id": "cf8f4a93-5f99-45a0-a759-926e0226d7cb",
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
            "id": "86cd30f1-8c2e-47cb-b6e3-b2be067bc61d",
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
            "id": "7e9efca3-8f1a-4fff-aed6-c4bb9680ec7a",
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
            "id": "425ceefa-dd8f-42fb-bcc5-6d2a1fdec944",
            "spec": "general2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "060e2cc5-5fbf-4450-8bfd-aa58d460aec5",
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
            "end": 3,
            "duration": 2
          },
          {
            "type": "Grammar",
            "subject": "TheEnumOptionIs",
            "start": 3,
            "end": 4,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "SelectionList:TearDown",
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
        "time": "3:54 PM",
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
                "id": "cc5c66cb-55b6-466e-b5b2-78a1bf92db1f"
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
                        "id": "cf8f4a93-5f99-45a0-a759-926e0226d7cb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "86cd30f1-8c2e-47cb-b6e3-b2be067bc61d"
                      }
                    ],
                    "activeCells": {},
                    "id": "ea0f07d2-7bda-41a6-9271-b74a34567caf"
                  }
                ],
                "id": "32deed59-e2cf-486e-9f96-0ea9090c772c"
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
                        "id": "7e9efca3-8f1a-4fff-aed6-c4bb9680ec7a"
                      }
                    ],
                    "activeCells": {},
                    "id": "8d2c0b51-386d-46f8-9013-6ff488c3e9bc"
                  }
                ],
                "id": "9fe0f5de-8baa-4274-8c95-20e01d1da01b"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "425ceefa-dd8f-42fb-bcc5-6d2a1fdec944"
              }
            ],
            "activeCells": {},
            "id": "060e2cc5-5fbf-4450-8bfd-aa58d460aec5"
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
            "id": "ed838113-da45-4ae1-92ae-2b4172609fca",
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
        "time": "3:54 PM",
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
                "id": "df410b11-f988-45b5-90df-b3932d757840"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "34bf063d-58d6-4eae-aa67-c17ed9639951"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "e554ad5c-36f6-490d-8321-b06b16e3f5d9"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "390f30ca-2e7c-403c-b2e0-878c3befd55c"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "43db20b9-e6c4-4ec6-aa18-06b656db0214"
              }
            ],
            "activeCells": {},
            "id": "ed838113-da45-4ae1-92ae-2b4172609fca"
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
            "id": "f3136478-3b64-4b00-b9c2-8fbb797cd5fb",
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
            "id": "29827f2b-ffd3-4005-aa80-db968ec3594f",
            "spec": "runtime-converter",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f3136478-3b64-4b00-b9c2-8fbb797cd5fb",
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
        "time": "3:54 PM",
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
                "id": "3cc6079b-4d69-4d36-a022-fdfb53b91af0"
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
                        "id": "29827f2b-ffd3-4005-aa80-db968ec3594f"
                      }
                    ],
                    "activeCells": {},
                    "id": "ddf4854c-5c71-4136-9048-88f583be634d"
                  }
                ],
                "id": "11d5aebc-226a-464b-8dfc-d15bfbe2df74"
              }
            ],
            "activeCells": {},
            "id": "f3136478-3b64-4b00-b9c2-8fbb797cd5fb"
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
            "id": "21333b5f-1ab7-4edf-9207-8643999fc69b",
            "spec": "general4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "b49b86fd-7705-4d2c-8559-627fba08f565",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "0ee08cef-54d6-4e39-a99a-5a0805787e72",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "4a7002ea-1866-4843-abfe-bffea41c9db4",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "21333b5f-1ab7-4edf-9207-8643999fc69b",
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
        "time": "3:54 PM",
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
                "id": "b49b86fd-7705-4d2c-8559-627fba08f565"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "0ee08cef-54d6-4e39-a99a-5a0805787e72"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "4a7002ea-1866-4843-abfe-bffea41c9db4"
              }
            ],
            "activeCells": {},
            "id": "21333b5f-1ab7-4edf-9207-8643999fc69b"
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
        "time": "3:54 PM",
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
            "id": "3437cbcb-7aba-436c-a96e-3f5b2f51fa68",
            "spec": "paragraph1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c1b4c1d3-7047-4426-a581-95a767a43f2a",
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
            "id": "c1b4c1d3-7047-4426-a581-95a767a43f2a",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c1b4c1d3-7047-4426-a581-95a767a43f2a",
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
            "id": "c1b4c1d3-7047-4426-a581-95a767a43f2a",
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
            "id": "6c831539-46a1-4439-bb79-033410266fb1",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6c831539-46a1-4439-bb79-033410266fb1",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6c831539-46a1-4439-bb79-033410266fb1",
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
            "id": "6c831539-46a1-4439-bb79-033410266fb1",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "266ad10a-28bf-49fc-8a50-0fabb8f184a7",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "266ad10a-28bf-49fc-8a50-0fabb8f184a7",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "266ad10a-28bf-49fc-8a50-0fabb8f184a7",
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
            "id": "266ad10a-28bf-49fc-8a50-0fabb8f184a7",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c3cdbaa3-409b-473b-be47-8a34cc145320",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c3cdbaa3-409b-473b-be47-8a34cc145320",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c3cdbaa3-409b-473b-be47-8a34cc145320",
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
            "id": "c3cdbaa3-409b-473b-be47-8a34cc145320",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "53abdd85-dd5a-48a6-8db7-4dd6c3f71ff0",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "53abdd85-dd5a-48a6-8db7-4dd6c3f71ff0",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "53abdd85-dd5a-48a6-8db7-4dd6c3f71ff0",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<>c.<.ctor>b__0_2(ISpecContext c)\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context)",
            "cells": [],
            "id": "53abdd85-dd5a-48a6-8db7-4dd6c3f71ff0",
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
            "id": "53abdd85-dd5a-48a6-8db7-4dd6c3f71ff0",
            "spec": "paragraph1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3437cbcb-7aba-436c-a96e-3f5b2f51fa68",
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
            "subject": "AddAndMultiplyThrow:3",
            "start": 4,
            "end": 5,
            "duration": 1
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
        "time": "3:54 PM",
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
                "id": "c1b4c1d3-7047-4426-a581-95a767a43f2a"
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
                        "id": "6c831539-46a1-4439-bb79-033410266fb1"
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
                        "id": "266ad10a-28bf-49fc-8a50-0fabb8f184a7"
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
                        "id": "c3cdbaa3-409b-473b-be47-8a34cc145320"
                      }
                    ],
                    "activeCells": {},
                    "id": "f81f5e7d-e284-4c54-af5a-e91ebd3c9bee"
                  }
                ],
                "id": "b8631c01-cd97-4e61-816e-9e72cb17880b"
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
                "id": "53abdd85-dd5a-48a6-8db7-4dd6c3f71ff0"
              }
            ],
            "activeCells": {},
            "id": "3437cbcb-7aba-436c-a96e-3f5b2f51fa68"
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
            "id": "8d98e507-fa4d-4cbb-b54f-8af92ae01fbf",
            "spec": "paragraph2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "32e6cccd-0df2-4b55-a2d7-8a300c3088fc",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "32e6cccd-0df2-4b55-a2d7-8a300c3088fc",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "32e6cccd-0df2-4b55-a2d7-8a300c3088fc",
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
            "id": "32e6cccd-0df2-4b55-a2d7-8a300c3088fc",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e5eaca90-b9c6-45c9-b5a6-b9346e492330",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e5eaca90-b9c6-45c9-b5a6-b9346e492330",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e5eaca90-b9c6-45c9-b5a6-b9346e492330",
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
            "id": "e5eaca90-b9c6-45c9-b5a6-b9346e492330",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4b29ca14-c69f-476d-893c-8602a46b71a4",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4b29ca14-c69f-476d-893c-8602a46b71a4",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4b29ca14-c69f-476d-893c-8602a46b71a4",
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
            "id": "4b29ca14-c69f-476d-893c-8602a46b71a4",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0f926b3d-7b09-403b-b0a4-21448e038e96",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0f926b3d-7b09-403b-b0a4-21448e038e96",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0f926b3d-7b09-403b-b0a4-21448e038e96",
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
            "id": "0f926b3d-7b09-403b-b0a4-21448e038e96",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d69c940d-e4b6-40da-ae30-5c71efa9734c",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d69c940d-e4b6-40da-ae30-5c71efa9734c",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "d69c940d-e4b6-40da-ae30-5c71efa9734c",
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
            "id": "d69c940d-e4b6-40da-ae30-5c71efa9734c",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8d98e507-fa4d-4cbb-b54f-8af92ae01fbf",
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
            "end": 1,
            "duration": 1
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
        "duration": 1,
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
        "time": "3:54 PM",
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
                "id": "32e6cccd-0df2-4b55-a2d7-8a300c3088fc"
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
                "id": "e5eaca90-b9c6-45c9-b5a6-b9346e492330"
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
                        "id": "4b29ca14-c69f-476d-893c-8602a46b71a4"
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
                        "id": "0f926b3d-7b09-403b-b0a4-21448e038e96"
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
                        "id": "d69c940d-e4b6-40da-ae30-5c71efa9734c"
                      }
                    ],
                    "activeCells": {},
                    "id": "876eb926-f022-4028-aa13-45cc07dd3e59"
                  }
                ],
                "id": "fa845151-bb52-4101-8e70-2dd744e5c759"
              }
            ],
            "activeCells": {},
            "id": "8d98e507-fa4d-4cbb-b54f-8af92ae01fbf"
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
            "id": "9038f8cc-185b-4855-a1f5-96021070a8b4",
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
            "id": "b5a3802f-5b13-44c4-8b7b-051eee1cfeb2",
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
            "id": "25e3b3ea-ddd2-4a8a-aaff-a59384908628",
            "spec": "sentence1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9038f8cc-185b-4855-a1f5-96021070a8b4",
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
        "time": "3:54 PM",
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
                "id": "b5a3802f-5b13-44c4-8b7b-051eee1cfeb2"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "25e3b3ea-ddd2-4a8a-aaff-a59384908628"
              }
            ],
            "activeCells": {},
            "id": "9038f8cc-185b-4855-a1f5-96021070a8b4"
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
            "id": "4315d0bf-06ea-4e0e-8bd5-3f2b74745659",
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
            "id": "4315d0bf-06ea-4e0e-8bd5-3f2b74745659",
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
        "time": "3:54 PM",
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
            "id": "4315d0bf-06ea-4e0e-8bd5-3f2b74745659"
          },
          {
            "type": "comment",
            "text": "comment text..;aslkdfjfaslkjfas;lkjfl;askjf;lkasjf;lkasjflksajfl;kasjflksajflksjafllkasjdflksajddflkasjflkjasdlfkjaslkdfjlaskjflakskjfl;kasjflk;asjdflksjaddfl;ksjgiih;oaishhdl;kklkh;alkjt;aihalkjbiaeia;slkjasssssssssssssssssssssssssss.",
            "id": "9b80f1b4-2f2f-46fb-8ee3-bf2e92a4b538"
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
            "id": "409bae7c-5b53-424c-803d-625c294a72b7",
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
            "id": "547a0f5d-3fa0-4850-b186-6fd4f9b915f6",
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
            "id": "1500b497-e5d6-4daf-a879-a10b72e1f6e0",
            "spec": "sentence3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "409bae7c-5b53-424c-803d-625c294a72b7",
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
        "time": "3:54 PM",
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
                "id": "547a0f5d-3fa0-4850-b186-6fd4f9b915f6"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "1500b497-e5d6-4daf-a879-a10b72e1f6e0"
              }
            ],
            "activeCells": {},
            "id": "409bae7c-5b53-424c-803d-625c294a72b7"
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
            "id": "4dad85a3-bb7d-4afa-af81-b1f77c6c89b0",
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
            "id": "4823c091-c6a1-4c88-9432-903a76fd9fc8",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ae273387-c382-4853-8828-9142b55ae8c2",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7565e26d-5b9a-402c-98c4-66cfe41be24d",
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
            "id": "fc85b705-c065-48d0-bd1e-2d897ce90ad8",
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
            "id": "4dad85a3-bb7d-4afa-af81-b1f77c6c89b0",
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
            "end": 1,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Subtract",
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
            "subject": "TheSumOf",
            "start": 2,
            "end": 2,
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
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "ThisLineAlwaysThrowsExceptions",
            "start": 3,
            "end": 4,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Sentence:TearDown",
            "start": 4,
            "end": 4,
            "duration": 0
          }
        ],
        "duration": 4,
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
        "time": "3:54 PM",
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
                "id": "7a0f0f48-918e-4775-8144-3d292991bde5"
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
                "id": "f0d2dfb3-28da-4700-93a9-e2024a59d2a0"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "4823c091-c6a1-4c88-9432-903a76fd9fc8"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "ae273387-c382-4853-8828-9142b55ae8c2"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "7565e26d-5b9a-402c-98c4-66cfe41be24d"
              },
              {
                "type": "comment",
                "text": "Correct assertion",
                "id": "32e996ea-a2ae-4a8a-b711-bfaa363cbb87"
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
                "id": "2b552375-239c-4a43-a9fe-27d99e3f07e1"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "2",
                  "number2": "2",
                  "sum": "5"
                },
                "collections": [],
                "id": "fc85b705-c065-48d0-bd1e-2d897ce90ad8"
              },
              {
                "type": "comment",
                "text": "Line assertions",
                "id": "6faee337-70d9-44e0-b6a2-aafe971e97d3"
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
            "id": "4dad85a3-bb7d-4afa-af81-b1f77c6c89b0"
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
            "id": "ab70b7a6-1a8e-4fb5-a61d-5780cf6702d5",
            "spec": "set1",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "06b4fda9-089b-48de-a742-562a7d3e5326",
            "spec": "set1",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ed75f86b-dd4a-4ee7-aac9-98cac92781eb",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ed75f86b-dd4a-4ee7-aac9-98cac92781eb",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ed75f86b-dd4a-4ee7-aac9-98cac92781eb",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ed75f86b-dd4a-4ee7-aac9-98cac92781eb",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ed75f86b-dd4a-4ee7-aac9-98cac92781eb",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "97d20940-e7a0-4867-8b17-09ec9b2a1a55",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "97d20940-e7a0-4867-8b17-09ec9b2a1a55",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "97d20940-e7a0-4867-8b17-09ec9b2a1a55",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "97d20940-e7a0-4867-8b17-09ec9b2a1a55",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "97d20940-e7a0-4867-8b17-09ec9b2a1a55",
            "spec": "set1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ec00789a-4cd7-4f24-81ce-85ef1f8ee3ba",
            "spec": "set1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ec00789a-4cd7-4f24-81ce-85ef1f8ee3ba",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ec00789a-4cd7-4f24-81ce-85ef1f8ee3ba",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ec00789a-4cd7-4f24-81ce-85ef1f8ee3ba",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ec00789a-4cd7-4f24-81ce-85ef1f8ee3ba",
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
              "5beab0d6-e7c7-42f6-9528-0e8304176f5b",
              "9203fe44-7491-45ab-9b17-8150bd254e41"
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
              "b1ae3103-a518-40fa-b029-5f533ef8241f",
              "8f9c8fa4-4674-4591-a4a8-d7ebca12650c",
              "6ce88047-9c17-4154-9048-46885446abcd"
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
            "id": "ab70b7a6-1a8e-4fb5-a61d-5780cf6702d5",
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
            "end": 14,
            "duration": 14
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
            "end": 2,
            "duration": 1
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
            "start": 3,
            "end": 12,
            "duration": 9
          },
          {
            "type": "Grammar",
            "subject": "rows",
            "start": 12,
            "end": 12,
            "duration": 0
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
            "type": "Fixture",
            "subject": "Sets:TearDown",
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
        "time": "3:54 PM",
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
                        "id": "ed75f86b-dd4a-4ee7-aac9-98cac92781eb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "97d20940-e7a0-4867-8b17-09ec9b2a1a55"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "ec00789a-4cd7-4f24-81ce-85ef1f8ee3ba"
                      }
                    ],
                    "activeCells": {},
                    "id": "06b4fda9-089b-48de-a742-562a7d3e5326"
                  }
                ],
                "id": "f1c00333-1dd3-4f7f-9444-daf6979043db"
              },
              {
                "type": "comment",
                "text": "Completely successful ordering",
                "id": "df34372d-adaa-44b1-aa6a-549af1dfe8af"
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
                "id": "44855f8b-eee1-4c7e-a303-aaea034f6573"
              },
              {
                "type": "comment",
                "text": "Out of order",
                "id": "2f08c6c5-4797-446a-a6f6-b6bf2930a526"
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
                "id": "d361d6a9-1787-4a1a-92c1-67d49d164e7a"
              },
              {
                "type": "comment",
                "text": "Should have one exra",
                "id": "7f5538e4-a273-4b0c-887d-bf3f2cf7cad5"
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
                        "id": "5beab0d6-e7c7-42f6-9528-0e8304176f5b"
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
                        "id": "9203fe44-7491-45ab-9b17-8150bd254e41"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "2ccfa4e6-4b59-48e0-b15c-7f271655c914"
              },
              {
                "type": "comment",
                "text": "Should mark one expected result as missing",
                "id": "8d28ca55-4e29-4796-ae10-ac2179c1a043"
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
                        "id": "b1ae3103-a518-40fa-b029-5f533ef8241f"
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
                        "id": "8f9c8fa4-4674-4591-a4a8-d7ebca12650c"
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
                        "id": "6ce88047-9c17-4154-9048-46885446abcd"
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
                "id": "270b170a-1774-43d4-a217-9235aa19bad9"
              },
              {
                "type": "comment",
                "text": "One syntax error",
                "id": "79015c9a-e41f-49ba-9ea5-556dd85a7ea7"
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
                        "id": "a7ae249a-346d-4783-9d14-3a73d66cb7d0"
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
                        "id": "e4e24225-1d82-4853-86b0-95d38bf31f6e"
                      }
                    ],
                    "activeCells": {},
                    "id": "00bfd580-d7e2-478b-8a66-ff647d668a78"
                  }
                ],
                "id": "f1507d07-f42f-40a9-959a-f7275728869e"
              }
            ],
            "activeCells": {},
            "id": "ab70b7a6-1a8e-4fb5-a61d-5780cf6702d5"
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
            "id": "9f115d88-9591-440d-96f3-390151c0c1fc",
            "spec": "set2",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "483b7518-5a34-4f9f-879b-2d9c67dd9351",
            "spec": "set2",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e162e3e5-1e25-4446-b41b-c9c03b81d6eb",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "830000b2-509d-4005-bec3-ed3097b41916",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7398fb86-7043-4ff2-84fb-659cbd07284e",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c6665c60-13c7-440c-9536-ceb42cff6555",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "25a9b7d0-cad1-4b23-a0b7-5ae0297ae679",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "41a095bf-6ac3-428e-bbf1-7188cf1a6495",
              "11e5525b-7a1a-4d9a-9f01-dac1d76d295d",
              "db3fd684-3ffe-40ad-a0df-454e0fa9ea97",
              "31102711-d36d-4196-a33e-33204018be9a",
              "14283736-75ab-4eb6-b985-b55a7361bea5"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "912fa478-df80-4ad8-8e7e-13bda5e99bc4",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "e88dccaa-d6a2-42cb-993d-7a0c8dee59a7",
              "aabb662b-885b-4c4a-b858-a852245818be",
              "daa6f913-3be8-4399-b37d-e34bdfac8fc3",
              "a1ebd2d4-e8bd-4f49-bcac-e28a4a65fb2f",
              "afa842c2-8471-490e-96a6-9e8cb5d2f191"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "8aaf279e-2317-4fa4-9651-4d78493d2f11",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9f115d88-9591-440d-96f3-390151c0c1fc",
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
            "start": 1,
            "end": 2,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Rows",
            "start": 2,
            "end": 3,
            "duration": 1
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
        "time": "3:54 PM",
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
                        "id": "e162e3e5-1e25-4446-b41b-c9c03b81d6eb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "830000b2-509d-4005-bec3-ed3097b41916"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "7398fb86-7043-4ff2-84fb-659cbd07284e"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "c6665c60-13c7-440c-9536-ceb42cff6555"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "25a9b7d0-cad1-4b23-a0b7-5ae0297ae679"
                      }
                    ],
                    "activeCells": {},
                    "id": "483b7518-5a34-4f9f-879b-2d9c67dd9351"
                  }
                ],
                "id": "4f9df253-9b7f-435f-8f47-f3c3e180132b"
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
                        "id": "41a095bf-6ac3-428e-bbf1-7188cf1a6495"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "11e5525b-7a1a-4d9a-9f01-dac1d76d295d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "db3fd684-3ffe-40ad-a0df-454e0fa9ea97"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "31102711-d36d-4196-a33e-33204018be9a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "14283736-75ab-4eb6-b985-b55a7361bea5"
                      }
                    ],
                    "activeCells": {},
                    "id": "912fa478-df80-4ad8-8e7e-13bda5e99bc4"
                  }
                ],
                "id": "0fc9b12a-c2ba-4beb-adb5-adb32689cbac"
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
                        "id": "e88dccaa-d6a2-42cb-993d-7a0c8dee59a7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "aabb662b-885b-4c4a-b858-a852245818be"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "daa6f913-3be8-4399-b37d-e34bdfac8fc3"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "a1ebd2d4-e8bd-4f49-bcac-e28a4a65fb2f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "afa842c2-8471-490e-96a6-9e8cb5d2f191"
                      }
                    ],
                    "activeCells": {},
                    "id": "8aaf279e-2317-4fa4-9651-4d78493d2f11"
                  }
                ],
                "id": "0a367aba-b349-4e45-81e4-9d592cf2e8ee"
              }
            ],
            "activeCells": {},
            "id": "9f115d88-9591-440d-96f3-390151c0c1fc"
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
            "id": "b11200a5-40bb-4fda-bf47-38b039a922d6",
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
            "id": "b11200a5-40bb-4fda-bf47-38b039a922d6",
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
        "time": "3:54 PM",
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
                        "id": "408a52c3-372e-4f57-b868-060ecf5d2234"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "59412567-9437-49bb-a2d1-d7464c12631b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "31422951-33d2-4a3f-abdf-3d06be842576"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "b4aa4caa-fb26-463c-b04c-a0413a1b9164"
              }
            ],
            "activeCells": {},
            "id": "b11200a5-40bb-4fda-bf47-38b039a922d6"
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
            "id": "ac500bc9-6fe7-4b68-83e5-e076bd7be2b5",
            "spec": "set4",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ef3b93de-a5b2-4da7-b46f-9e192748e953",
            "spec": "set4",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "409d3d3d-567f-4f31-9648-2cf7d32ef723",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "409d3d3d-567f-4f31-9648-2cf7d32ef723",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "409d3d3d-567f-4f31-9648-2cf7d32ef723",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "409d3d3d-567f-4f31-9648-2cf7d32ef723",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "409d3d3d-567f-4f31-9648-2cf7d32ef723",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e214f1d5-9a40-4a75-bfa4-2db763c67de7",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e214f1d5-9a40-4a75-bfa4-2db763c67de7",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e214f1d5-9a40-4a75-bfa4-2db763c67de7",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e214f1d5-9a40-4a75-bfa4-2db763c67de7",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e214f1d5-9a40-4a75-bfa4-2db763c67de7",
            "spec": "set4",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f18dcca0-91c7-46da-be09-adcfe0e5e96b",
            "spec": "set4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f18dcca0-91c7-46da-be09-adcfe0e5e96b",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f18dcca0-91c7-46da-be09-adcfe0e5e96b",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f18dcca0-91c7-46da-be09-adcfe0e5e96b",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f18dcca0-91c7-46da-be09-adcfe0e5e96b",
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
            "id": "b81f645e-f027-4867-8f4a-26eee628b7f9",
            "spec": "set4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ac500bc9-6fe7-4b68-83e5-e076bd7be2b5",
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
        "time": "3:54 PM",
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
                        "id": "409d3d3d-567f-4f31-9648-2cf7d32ef723"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "e214f1d5-9a40-4a75-bfa4-2db763c67de7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "f18dcca0-91c7-46da-be09-adcfe0e5e96b"
                      }
                    ],
                    "activeCells": {},
                    "id": "ef3b93de-a5b2-4da7-b46f-9e192748e953"
                  }
                ],
                "id": "6cfb1bd3-6099-4c81-b138-4fee18f3eb3b"
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
                        "id": "b81f645e-f027-4867-8f4a-26eee628b7f9"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "d7a3eac7-827d-4e59-a4cc-44761bdf48c2"
                      }
                    ],
                    "activeCells": {},
                    "id": "56c7a94d-37ef-4b49-b8df-21e8afe5397f"
                  }
                ],
                "id": "27fca8cf-0507-48d8-9135-254a3791551b"
              }
            ],
            "activeCells": {},
            "id": "ac500bc9-6fe7-4b68-83e5-e076bd7be2b5"
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
            "id": "c9e45bb6-f716-4e45-a8de-d5969d38ab1d",
            "spec": "set5",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ac9544a2-1c34-4ef3-91a0-2285c4e18e57",
            "spec": "set5",
            "position": "before",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5bd21657-de5e-45a2-b634-76047c72c85c",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "db63fc3c-07b1-49d0-b48c-5b83bec8ddd8",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4c4e3aa1-e376-48d7-a899-98067973199e",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "9d4ad317-5e35-4c6e-b4a4-0d0f8cc296ab",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4db71bc6-4832-4d6b-9ea0-8a89893bc02c",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "1d295123-7568-4434-895d-cfdb3aa7fc6d",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cdc64ea4-3736-487b-bfd7-6374b57f5c3c",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "f8f11004-ad48-4f23-bc59-a33d4ea79de9",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "1fb38677-9dc0-4bea-88c7-0dfc8e8800fa",
              "942213a1-9d6f-4b7e-be51-7532af05064b",
              "2b951cb1-9c99-4cab-b1b6-fbc3a7f1fd5b",
              "63f38797-cec5-4f70-83e0-d3cd2103988c"
            ],
            "missing": [
              "163feb08-44f0-4a50-a960-8fd41ed07abb"
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
                "id": "e14cca21-e210-4be2-ad63-2c36c9b28de3"
              },
              {
                "actual": 4,
                "id": "253c2cac-4775-4070-8da4-9c1901ea5aeb"
              }
            ],
            "id": "7c713f91-77c7-45e2-9480-030e68e1590f",
            "type": "set-verification-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c9e45bb6-f716-4e45-a8de-d5969d38ab1d",
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
        "time": "3:54 PM",
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
                        "id": "5bd21657-de5e-45a2-b634-76047c72c85c"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "db63fc3c-07b1-49d0-b48c-5b83bec8ddd8"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "4c4e3aa1-e376-48d7-a899-98067973199e"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "9d4ad317-5e35-4c6e-b4a4-0d0f8cc296ab"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "4db71bc6-4832-4d6b-9ea0-8a89893bc02c"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "1d295123-7568-4434-895d-cfdb3aa7fc6d"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "cdc64ea4-3736-487b-bfd7-6374b57f5c3c"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "f8f11004-ad48-4f23-bc59-a33d4ea79de9"
                      }
                    ],
                    "activeCells": {},
                    "id": "ac9544a2-1c34-4ef3-91a0-2285c4e18e57"
                  }
                ],
                "id": "f645b3f2-06cb-4ccc-923a-f5acb063c4cc"
              },
              {
                "type": "comment",
                "text": "All data is correct, but in the wrong order",
                "id": "f20a57ac-fdc3-406b-b244-723843664729"
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
                        "id": "1fb38677-9dc0-4bea-88c7-0dfc8e8800fa"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "942213a1-9d6f-4b7e-be51-7532af05064b"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "2b951cb1-9c99-4cab-b1b6-fbc3a7f1fd5b"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "e14cca21-e210-4be2-ad63-2c36c9b28de3"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "253c2cac-4775-4070-8da4-9c1901ea5aeb"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "163feb08-44f0-4a50-a960-8fd41ed07abb"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "63f38797-cec5-4f70-83e0-d3cd2103988c"
                      }
                    ],
                    "activeCells": {},
                    "id": "7c713f91-77c7-45e2-9480-030e68e1590f"
                  }
                ],
                "id": "012cc335-2384-46b2-8be3-0ebf0443ee38"
              }
            ],
            "activeCells": {},
            "id": "c9e45bb6-f716-4e45-a8de-d5969d38ab1d"
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
            "id": "266f797c-5d34-4591-aa91-5ea7f44244f2",
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
            "id": "fccfb26c-a9dc-4e96-a9b8-20192081c066",
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
            "id": "9f9e3912-e351-43e9-a76b-cc9525fb216c",
            "spec": "table1",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "266f797c-5d34-4591-aa91-5ea7f44244f2",
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
            "end": 1,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "IsPositive:Row",
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
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "3:54 PM",
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
                        "id": "fccfb26c-a9dc-4e96-a9b8-20192081c066"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "9f9e3912-e351-43e9-a76b-cc9525fb216c"
                      }
                    ],
                    "activeCells": {},
                    "id": "f02333b2-ab32-449a-b287-dc5f66831330"
                  }
                ],
                "id": "fbe9cb84-c97a-4b46-bf75-9b8bbf161984"
              }
            ],
            "activeCells": {},
            "id": "266f797c-5d34-4591-aa91-5ea7f44244f2"
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
            "id": "71f974f2-a1f6-4d7b-9189-16637f4af798",
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
            "id": "b82b5035-083b-4ef3-bafd-18ab12755a3e",
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
            "id": "ba2b44b1-1325-4fc7-b725-877519587488",
            "spec": "table2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "71f974f2-a1f6-4d7b-9189-16637f4af798",
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
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "3:54 PM",
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
                        "id": "ed54406e-7db4-47e5-b2aa-bd573bfaf78f"
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
                        "id": "4c826e2a-0d1d-49d6-b7a2-cd37d7955f42"
                      }
                    ],
                    "activeCells": {},
                    "id": "a570720f-eabc-45ee-92e4-d893861b751a"
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
                        "id": "b82b5035-083b-4ef3-bafd-18ab12755a3e"
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
                        "id": "ba2b44b1-1325-4fc7-b725-877519587488"
                      }
                    ],
                    "activeCells": {},
                    "id": "737cef6d-6169-4912-b5e4-eff7f676de9b"
                  }
                ],
                "id": "7ffb7d70-e685-4da1-b3f8-932e70eab0a5"
              }
            ],
            "activeCells": {},
            "id": "71f974f2-a1f6-4d7b-9189-16637f4af798"
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
            "id": "2d323088-4332-4480-b4b7-3feda2926026",
            "spec": "table3",
            "position": "setup",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3c46d426-cc6f-4085-b5a8-27a9cca9b2f5",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "53ba7909-028b-49be-b1b7-4c4a43db2bd4",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "76c0865b-de84-4232-93a7-48fdb56c3010",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5b357867-4d9b-4266-8084-4414471808ff",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2d323088-4332-4480-b4b7-3feda2926026",
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
        "time": "3:54 PM",
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
                        "id": "3c46d426-cc6f-4085-b5a8-27a9cca9b2f5"
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
                        "id": "53ba7909-028b-49be-b1b7-4c4a43db2bd4"
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
                        "id": "76c0865b-de84-4232-93a7-48fdb56c3010"
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
                        "id": "5b357867-4d9b-4266-8084-4414471808ff"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "6d744031-c04d-40de-8db5-8e03842b2c16"
                  }
                ],
                "id": "76f6bcaf-872d-4a27-be57-1e7fd6f42057"
              }
            ],
            "activeCells": {},
            "id": "2d323088-4332-4480-b4b7-3feda2926026"
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
            "id": "771faa47-b29e-424d-ad62-e6ee9766ef33",
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
            "id": "6c454af4-433c-4b5a-9466-1af31b1a079e",
            "spec": "table4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "08d975e6-d80a-4190-b1d0-4e7c00df9d6d",
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
            "id": "771faa47-b29e-424d-ad62-e6ee9766ef33",
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
        "time": "3:54 PM",
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
                        "id": "6c454af4-433c-4b5a-9466-1af31b1a079e"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "02550f73-c706-45e5-b414-279fa2b28b90"
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
                        "id": "08d975e6-d80a-4190-b1d0-4e7c00df9d6d"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "88e5bbe0-9bc0-4229-92cd-e32d61206618"
              }
            ],
            "activeCells": {},
            "id": "771faa47-b29e-424d-ad62-e6ee9766ef33"
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
            "id": "e1db1fc5-477b-49c0-92b2-5673b5035aec",
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
            "id": "8f3e9681-9765-4b33-b16a-d1d975457685",
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
            "id": "354c5ba5-c925-4130-9ed7-34f94a5c5e3b",
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
            "id": "ef10ca6b-2654-4a81-8a4d-d1fdb31fe7be",
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
            "id": "ef10ca6b-2654-4a81-8a4d-d1fdb31fe7be",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ef10ca6b-2654-4a81-8a4d-d1fdb31fe7be",
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
            "id": "ef10ca6b-2654-4a81-8a4d-d1fdb31fe7be",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bd98568-27be-4014-b0e1-f2e8ac9aa820",
            "spec": "table5",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bd98568-27be-4014-b0e1-f2e8ac9aa820",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7bd98568-27be-4014-b0e1-f2e8ac9aa820",
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
            "id": "7bd98568-27be-4014-b0e1-f2e8ac9aa820",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e1db1fc5-477b-49c0-92b2-5673b5035aec",
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
            "end": 1,
            "duration": 1
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
        "time": "3:54 PM",
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
                "id": "54594ec0-e82e-4d97-be17-e12f2d95455f"
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
                        "id": "8f3e9681-9765-4b33-b16a-d1d975457685"
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
                        "id": "354c5ba5-c925-4130-9ed7-34f94a5c5e3b"
                      }
                    ],
                    "activeCells": {},
                    "id": "5a8980ee-c868-4c82-82b9-a58885db7184"
                  }
                ],
                "id": "da88c3c5-6e9e-41b0-ab19-4b1e2ad9594e"
              },
              {
                "type": "comment",
                "text": "Table fixture from script",
                "id": "500ac600-4f30-47d7-b087-e1d81ae5b68c"
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
                        "id": "ef10ca6b-2654-4a81-8a4d-d1fdb31fe7be"
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
                        "id": "7bd98568-27be-4014-b0e1-f2e8ac9aa820"
                      }
                    ],
                    "activeCells": {},
                    "id": "d613ec9b-e9a5-48da-bd40-81a6bda38832"
                  }
                ],
                "id": "d18b8c2f-57d4-47ff-a948-e7bbd4345fc0"
              }
            ],
            "activeCells": {},
            "id": "e1db1fc5-477b-49c0-92b2-5673b5035aec"
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
                "id": "70f1de6e-6368-4d5b-ba52-9d1cf0db238c"
              },
              {
                "type": "comment",
                "text": "## IfTheAddressIs",
                "id": "237bece1-d643-4774-ad36-b86de5561d56"
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
                "id": "4d5b16eb-536f-4a52-8c62-a8b9a54e64ff"
              },
              {
                "type": "comment",
                "text": "## TheAddressShouldBe",
                "id": "6f7fa6be-7470-4fa5-a37a-d8326ebeced7"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "Address1",
                  "Address2": "Address2",
                  "City": "City"
                },
                "collections": [],
                "id": "d6df3b60-f5bf-4e7b-a0c4-bf433183ada6"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "662c1da3-4629-44fd-801a-abd328907c6d"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "84f71806-a665-4030-bed8-c901e2dd1216"
              }
            ],
            "activeCells": {},
            "id": "84478fd6-0985-401c-9779-8f2a8fec341c"
          }
        ],
        "id": "30c2b07c-7d38-49bf-8bdd-449a11244de0"
      },
      "sampleMarkdown": "# Sample Specification for CheckObject\r\n\r\n-> id = 026989f2-3a81-4b2c-9ea4-f4c72d86673f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9358143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[CheckObject]\r\n|> IfTheAddressIs Address1=Address1, Address2=Address2, City=City, StateOrProvince=StateOrProvince, Country=Country, PostalCode=PostalCode\r\n|> TheAddressShouldBe Address1=Address1, Address2=Address2, City=City\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "ea75741e-5242-4fc5-be3f-2c3f0945024e"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "5792e083-e457-4ae9-bac1-90ed96ecadd1"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "f10420bf-622c-448b-a485-f967288df72c"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "3ef40070-2d03-4edc-8650-94e8fd5ec6a2"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "7f57ce01-82f6-4334-8cd0-f1eb09dea612"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiply",
                "id": "8b5e004a-d6e9-4a08-8bd3-a4b21201f6bf"
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
                "id": "1d82a895-a9f1-430a-a498-20a88d0d1093"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyTable",
                "id": "359aae88-a389-4724-aeed-497eb8c1734c"
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
                        "id": "fa0c0283-0baf-442e-9dfe-5b012e86b8be"
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
                        "id": "7229f300-7831-43ac-a7a6-3ad9f6205945"
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
                        "id": "5f770ef3-1e13-4804-a51e-ad605b925bb6"
                      }
                    ],
                    "activeCells": {},
                    "id": "a28f3215-71e9-4182-acee-c8ec5223367a"
                  }
                ],
                "id": "5615e465-6c7f-4dc3-9c23-c060911b743c"
              },
              {
                "type": "comment",
                "text": "## AddAndMultiplyThrow",
                "id": "0b8feaf9-dd14-4572-bda5-943b95cbf5cb"
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
                "id": "a7f595b4-2d2f-4d61-b48e-49fe70ffd7c7"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "ff646788-0856-44a6-992f-b4f9f2cbcca4"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "8b27eb39-77c2-4cf2-a3c7-274611244f92"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "0ecc662f-091d-4a5d-8b34-490bb503d70f"
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
                        "id": "40ffcde5-f1f2-4750-a05e-7641e83d7820"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "005598dd-4441-49e3-8ff9-b4b338caedae"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "0dcb0a15-4943-4c9a-991d-6b799e31f7d6"
                      }
                    ],
                    "activeCells": {},
                    "id": "3d37a2f9-fc3a-46e1-9307-a3d50de055bc"
                  }
                ],
                "id": "8960aac8-ff2a-463e-a0ff-3993e4ef36a4"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "0b9c8e55-b377-4601-a5e1-aeb653a99fd2"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "41a55822-1bb4-4d8d-b016-3f2e6f56fd64"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "ed2585a9-e3c7-4776-8553-e05bd8ff7e57"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "149514f4-7310-4047-b9fe-6be206c82b88"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "50db78f6-cc58-4d0e-9dad-e44c81e0a159"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "e6015e81-b7c9-43f0-942e-fd971a7ff54a"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "659cec64-2c8b-4cbd-bbcf-3769ca412361"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "00debd40-cc53-434b-b834-bcf6a888cb47"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "01b51d94-e33d-4927-b73d-2e7a755f56f4"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "19b2db5c-669a-491d-8800-c1b62471016e"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "737df675-9b18-4241-8f6f-bc69e7a69018"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "850eb989-1ae0-4d47-b350-8cff6a811c38"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "2ab1e114-c604-4a4b-9d49-ebfdae4e4ec4"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "f21ba085-962c-4a17-8ba8-0b74f4ba09cc"
              }
            ],
            "activeCells": {},
            "id": "2209dd98-a012-4073-a30c-68b751b8f966"
          }
        ],
        "id": "9a42232b-af9d-43f9-af1a-04dbccb5a06f"
      },
      "sampleMarkdown": "# Sample Specification for Composite\r\n\r\n-> id = 4e24056f-ec2f-4e73-8973-c1281af83e62\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9418143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Composite]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> AddAndMultiply starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> AddAndMultiplyTable\r\n    [Rows]\r\n    |starting|operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n    |11      |operand|multiplier|expected|\r\n\r\n|> AddAndMultiplyThrow starting=11, operand=operand, multiplier=multiplier, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "ce4a31d2-6fb1-4eaa-b85b-6b7639947e0d"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "0307f3b0-65ba-4a7c-8041-02f94e1ad22b"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "1bf329a4-7d3d-4b12-9831-9ca6d7a71990"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "e89a94b3-b75a-4daa-8209-1d9bf5850313"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "282698f9-1b3e-41bf-9390-b40624656984"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "6ef1cece-5ab8-4d27-985c-e6d242c3d3c6"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "c27af2ec-3b55-4f5b-b5a1-aa528773d98e"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "a505a304-ba7a-48eb-a126-e2707ef23e1f"
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
                              "id": "badd8410-f123-48d5-a05b-b7058c600796"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "d43ce04f-33b7-4bf9-b309-6ec86b36e056"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "2f5587bb-bbce-45e8-bacf-f136325eb427"
                            }
                          ],
                          "activeCells": {},
                          "id": "60583b18-6318-4eb6-b50a-0c8ce7e5699a"
                        }
                      ],
                      "id": "2ec2d7b1-039b-46d8-9cee-f382f30343d6"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "ac7ddc13-0828-420c-a7a6-78f3fa579f96"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "3ecf5468-7821-4ec5-af36-b5b36d9598d0"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "520612ab-ed4c-4fe2-8f80-09393fdeced8"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "4b996dc2-baa3-4c7a-b09f-cd87ba36f4b6"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "567c49d0-b804-4801-a1a3-f1a54052cf24"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "2ffb7226-89e3-463b-99eb-aaf70962c731"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "2b63a38b-0694-4e31-b997-b091af2534cc"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "ecc3f82e-e4ac-46fd-861d-6a6e8ed06700"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "ead3207a-ef1a-47b0-89bf-be9d38ddc931"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "e2e8a6e8-7393-4420-b804-80d1aa4ea54c"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "8173f2e6-d027-42c8-bae7-a5252e8d2452"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "cfe7a1ea-b18f-444c-bbc8-809d447ad059"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "e5692ec1-1d4b-4352-844d-d8f542db310a"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "56c6ea28-18a3-4e24-9d6b-6dddc07fd194"
                    }
                  ],
                  "activeCells": {},
                  "id": "e163de8a-abf5-4a8a-af52-e9c1cb765537"
                }
              ],
              "id": "110654c0-3053-4b04-801c-a0511d855739"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 12fb1df0-eb65-4d09-9524-c0b49643d9c1\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9478143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "bd17de4f-74f2-4ec2-a019-9000f966c767"
              },
              {
                "type": "comment",
                "text": "## DoNotThrowAnExceptionOnTheNextEmbed",
                "id": "4023a923-a2d9-48fa-8be3-799f6c36d46e"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "cbda6953-a5dd-4020-be0d-6e9283bdbccf"
              },
              {
                "type": "comment",
                "text": "## EmbeddedMath",
                "id": "2125841d-ade9-4e7d-84dd-84121ef92ea6"
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
                        "id": "6354e5ba-5229-4146-83c9-c21ccd3e7cdb"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "97f5253b-81d3-4e93-82c9-2ee63acf89f3"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "8e6d86e6-6a1c-424f-b088-7d12712bd47f"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "e8b95f1b-cf9c-4062-9973-7624c53e3014"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "ff29f54e-c9d4-4e74-bbef-ae9ea4102a59"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "7b5e5282-29c0-4897-9c75-7194f1bb485b"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "88029f6b-baee-4947-8932-3f09b7f2833e"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "d74696dd-908f-467a-a4b7-b5c5639f9b18"
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
                                "id": "bca8dcab-6dd7-4cf4-96df-9e0f18ae961a"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "7b757ab3-45ee-49e5-aa43-27e3b9cf8288"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "31a41090-cad0-4e47-a6df-fd00e302082c"
                              }
                            ],
                            "activeCells": {},
                            "id": "37b7b28d-437e-4f38-aa95-1e57ca652e99"
                          }
                        ],
                        "id": "c9cdf4ca-66ae-42d1-9de6-22d6b31a040a"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "da25950d-a8ab-48f6-8aa4-8c1c22db7b79"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "860efa27-8d40-45ef-b445-914abf04dcd2"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "86782560-8260-4985-b7b8-38580ad52828"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "c63bab84-bc5e-44a5-952e-86875feb4790"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "0de11dbc-00a9-447f-be20-d5864c37a302"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "a67ed934-8f09-41a9-85d1-898a0074cb87"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "8c27ecca-409c-404d-9acd-1b3a63417874"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "e13fd4e5-f2a7-4920-be98-3aa3ae1b0ced"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "168e3c71-04f2-4709-b666-e1569bd5e57a"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "17725399-a6b0-4dc0-bcd6-cce146184de7"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "2d14b557-6ec0-4c74-8d70-9b5693723028"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "50e5c520-1463-48a3-92f8-464032c5a5d2"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "1b6cdcbb-cee8-43c8-81f6-6f55c6b32876"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "caae175c-78c2-456c-a7dc-b5fff5430a92"
                      }
                    ],
                    "activeCells": {},
                    "id": "ae310a4b-0550-48a4-8484-c795046813bc"
                  }
                ],
                "id": "c3c74078-779b-4547-817e-97fe75d5ef44"
              },
              {
                "type": "comment",
                "text": "## ThrowAnExceptionOnTheNextEmbed",
                "id": "8d04c20a-3c14-44d9-b332-ea7206dca803"
              },
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "8eb86641-479a-4718-8ee8-746e4d7b2f35"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "bae31a22-6025-4519-afb1-be515578ec74"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "25dc6c6f-33a8-41ee-92a7-56b91ecdc917"
              }
            ],
            "activeCells": {},
            "id": "e839c3a4-daf4-43e7-a2d0-9b7468ab105d"
          }
        ],
        "id": "0de140b9-87cb-41a6-9058-2c1cdfd32a68"
      },
      "sampleMarkdown": "# Sample Specification for Embedded\r\n\r\n-> id = b5666202-1a9a-45ac-88e4-8fc420a61d39\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9488143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Embedded]\r\n|> DoNotThrowAnExceptionOnTheNextEmbed\r\n|> EmbeddedMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> ThrowAnExceptionOnTheNextEmbed\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "10a368e9-23f4-463e-9b25-4a7d63b12abf"
              }
            ],
            "activeCells": {},
            "id": "8ebd63f1-8df8-4b41-8f81-82bfca503734"
          }
        ],
        "id": "c3427c83-838f-4c4a-83e8-71f373cc0783"
      },
      "sampleMarkdown": "# Sample Specification for Failure\r\n\r\n-> id = 8ef91dd0-7bb6-4e88-88ce-20992869ed08\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9508143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Failure]\r\n~~~\r\n",
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
                "id": "484ef77c-99a8-4b2d-ba8c-481c1a2d37f5"
              },
              {
                "type": "comment",
                "text": "##",
                "id": "4a13d312-b951-487d-8cc9-16c9a096ee3c"
              },
              {
                "key": null,
                "cells": {},
                "collections": [],
                "id": "ecde23ea-cbf0-4a9b-9be6-99765eedad8a"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "e92df26a-e68f-4991-951c-26b60857214b"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "a3339708-3510-4d33-904d-46182259126a"
              }
            ],
            "activeCells": {},
            "id": "5375b332-3825-4a68-86bb-fafb17efd982"
          }
        ],
        "id": "aa8d78cb-8ae2-406e-a8a4-aec464f78631"
      },
      "sampleMarkdown": "# Sample Specification for GrammarError\r\n\r\n-> id = 53930bd9-a30d-48cc-82e6-162c5564503c\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9528143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[GrammarError]\r\n|> \r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "2377fef7-b474-48ee-8b6d-3a60c2addd75"
              },
              {
                "type": "comment",
                "text": "## Add5",
                "id": "5a10f0c2-8326-447a-adaa-12fe95064a46"
              },
              {
                "key": "Add5",
                "cells": {},
                "collections": [],
                "id": "8193c078-30ca-4703-8e70-3a33fca16e39"
              },
              {
                "type": "comment",
                "text": "## AddingTo5",
                "id": "f936fbc5-bee6-4e13-84d8-392d2206a215"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "eaf1e9d0-4b38-4876-b5c7-4384adf7b42e"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "cb37fbf3-aa59-4d54-94b7-b17c1c24e421"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "f1c70eca-d343-4c03-baf9-7c63fdb0e499"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "31f00855-fb96-45b9-b2cf-1ea96d75d920"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "2ac7b941-cf77-4a50-9569-9255e94fe84f"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c5e8e4bc-882a-4109-bf7c-c77384042765"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "aa707fc1-1c06-4193-925a-eebdb7f988db"
              }
            ],
            "activeCells": {},
            "id": "18afa40b-00cc-459d-8e87-b10222f4592c"
          }
        ],
        "id": "c9c26e8c-8631-4173-9ae9-8285a06615e6"
      },
      "sampleMarkdown": "# Sample Specification for CurriedMath\r\n\r\n-> id = 3b928667-7b63-4af5-85d2-7a7a9c1b677b\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9528143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[CurriedMath]\r\n|> Add5\r\n|> AddingTo5 y=y, returnValue=NULL\r\n|> StartWith starting=11\r\n|> TheValueShouldBe expected=expected\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "1f8dc204-f953-4b39-bd91-b610dfb47f16"
              },
              {
                "type": "comment",
                "text": "## Add",
                "id": "df259465-d4c9-4111-95a7-684a4d7b6c54"
              },
              {
                "key": "Add",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "08df28a4-a32a-4fff-b5fd-36fe2a7a76ba"
              },
              {
                "type": "comment",
                "text": "## AddAndCheck",
                "id": "7fa3f5c4-c504-405c-8c5d-dc81a0c9f5a1"
              },
              {
                "key": "AddAndCheck",
                "cells": {
                  "starting": "11",
                  "operand": "operand",
                  "expected": "expected"
                },
                "collections": [],
                "id": "dfd15081-01f7-40dc-b548-52fc4ad5d46a"
              },
              {
                "type": "comment",
                "text": "## Adding",
                "id": "afb022db-70e8-4946-b6a5-a146cef4101a"
              },
              {
                "key": "Adding",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "acc7ab55-bb43-4ad1-a3b0-5c6c8aa88a81"
              },
              {
                "type": "comment",
                "text": "## AddTable",
                "id": "3513f857-0a93-4491-882a-e68640605738"
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
                        "id": "1e9f2324-5cd4-44d2-9a41-f3220c78069c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "26b34b77-7042-458d-90b2-7d1269d25430"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "6d260a81-be07-4f0e-9182-70997a5b06a6"
                      }
                    ],
                    "activeCells": {},
                    "id": "752e31a9-fda2-4dc8-ab73-838707601275"
                  }
                ],
                "id": "b9b650ae-cb6e-4abd-a4e7-30aa092ca02d"
              },
              {
                "type": "comment",
                "text": "## AddTo5",
                "id": "e0b1cc64-41f5-4bb8-8107-b8fc82b28e6a"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "x",
                  "returnValue": "NULL"
                },
                "collections": [],
                "id": "f0c893f3-cf43-4c16-932b-ff3a4e76db5f"
              },
              {
                "type": "comment",
                "text": "## MultiplyBy",
                "id": "eafe8954-3cbf-4cd2-bacc-88a39a390437"
              },
              {
                "key": "MultiplyBy",
                "cells": {
                  "multiplier": "multiplier"
                },
                "collections": [],
                "id": "69770456-5a1a-436e-bcfc-f6a2b29277df"
              },
              {
                "type": "comment",
                "text": "## StartWith",
                "id": "435fe334-8c4e-4d0a-9166-fdc38ebe8631"
              },
              {
                "key": "StartWith",
                "cells": {
                  "starting": "11"
                },
                "collections": [],
                "id": "d769a9da-5454-4318-8b96-0a6a7d422dec"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "fba28d0e-7a1e-42c2-9bff-063caf92f706"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "650cf587-d4a0-4395-89c2-2ba6b73f487f"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "0a028d6c-77ee-406a-a118-32448fa89b7d"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "expected": "expected"
                },
                "collections": [],
                "id": "9916db6a-0703-4c54-98b2-fcc988d9bf73"
              },
              {
                "type": "comment",
                "text": "## Throw",
                "id": "24efbef6-9761-425a-8630-5ce8ca2f05ca"
              },
              {
                "key": "Throw",
                "cells": {},
                "collections": [],
                "id": "d5bdbbfe-c808-4206-b16f-646506886757"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "c2f739b4-eddc-49f2-a0df-eedcef1bee9e"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "1e3c9c39-483d-4b12-ab83-d9bf5426a6cf"
              }
            ],
            "activeCells": {},
            "id": "1b0dc3f0-1d13-4310-b1b5-3da37fb22090"
          }
        ],
        "id": "48fc3dee-396f-4c5f-89fe-e6d8e401d196"
      },
      "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = 9a685c57-ef05-4595-bbff-76342f6c07c7\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9538143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "44c7430e-bd7d-4732-88e8-515f94b70dd0"
                    },
                    {
                      "type": "comment",
                      "text": "## Add",
                      "id": "8d0dee01-d15d-4eba-9756-87ead4c34c4f"
                    },
                    {
                      "key": "Add",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "1fd2bb89-6267-459e-8561-1f7478b47759"
                    },
                    {
                      "type": "comment",
                      "text": "## AddAndCheck",
                      "id": "ec7ba653-4ac9-4476-88c2-9b09c36818bb"
                    },
                    {
                      "key": "AddAndCheck",
                      "cells": {
                        "starting": "11",
                        "operand": "operand",
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "9f894b63-8e79-4c4a-836c-b1f02a153781"
                    },
                    {
                      "type": "comment",
                      "text": "## Adding",
                      "id": "79d716fc-6aa5-41a1-9f2a-86845b245a18"
                    },
                    {
                      "key": "Adding",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "435b5e2c-b57e-46bd-9475-063d307f013a"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTable",
                      "id": "e3214289-07a5-4844-a877-febedb092b53"
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
                              "id": "4e33265a-b488-4c4d-8c4e-de7cf60338c9"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "f7560059-b809-4627-a643-41d63aab13c6"
                            },
                            {
                              "key": "row",
                              "cells": {
                                "x": "x",
                                "y": "y",
                                "sum": "sum"
                              },
                              "collections": [],
                              "id": "00707be2-00d6-4018-8e79-b4b00fa45256"
                            }
                          ],
                          "activeCells": {},
                          "id": "26f314bf-2c4c-4fcc-937d-a54c2b5c3da2"
                        }
                      ],
                      "id": "2880f153-782b-4082-9eed-48c89d17c317"
                    },
                    {
                      "type": "comment",
                      "text": "## AddTo5",
                      "id": "9ff5ee04-7282-4051-9aa7-ed0e3ad1b9af"
                    },
                    {
                      "key": "AddTo5",
                      "cells": {
                        "x": "x",
                        "returnValue": "NULL"
                      },
                      "collections": [],
                      "id": "855ea3b0-9b22-470c-bd2c-c40fa41d1957"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyBy",
                      "id": "e21c8e2b-24a2-4078-8fd7-6cbf3e63dbec"
                    },
                    {
                      "key": "MultiplyBy",
                      "cells": {
                        "multiplier": "multiplier"
                      },
                      "collections": [],
                      "id": "77f8ced5-315f-46c9-8c5c-f64e29e7815c"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWith",
                      "id": "c307e883-4a67-4f93-a72a-33e3b7aa431d"
                    },
                    {
                      "key": "StartWith",
                      "cells": {
                        "starting": "11"
                      },
                      "collections": [],
                      "id": "f8ce7be3-f837-479c-80c7-463afbd3edd5"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "4bb9864a-6d80-4566-a5e9-243e41090e37"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "c8f2a056-6341-469e-8930-932b17a25c33"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "db554065-9eae-4e53-bf2b-99b871e1859d"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "expected": "expected"
                      },
                      "collections": [],
                      "id": "88fc55d6-ce93-4a07-a3a6-a33a947cd870"
                    },
                    {
                      "type": "comment",
                      "text": "## Throw",
                      "id": "334cc6a2-ea7e-4b5a-800b-7fb38d7951d0"
                    },
                    {
                      "key": "Throw",
                      "cells": {},
                      "collections": [],
                      "id": "55d1f5df-f452-4e25-a442-d6abb680aa13"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "4b42c17c-cd3c-4ad4-a104-8ae849d1bab7"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "6074d0e3-0cc1-49a1-a997-b7ee99a5946e"
                    }
                  ],
                  "activeCells": {},
                  "id": "70872b9d-41c7-4db3-a9a5-4dc2c6d55eee"
                }
              ],
              "id": "a7da9cef-c89c-4fdd-8664-8045cf05843c"
            },
            "sampleMarkdown": "# Sample Specification for Math\r\n\r\n-> id = f5d58aa5-958d-49b8-958f-36ddd84a57aa\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9538143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Math]\r\n|> Add operand=operand\r\n|> AddAndCheck starting=11, operand=operand, expected=expected\r\n|> Adding x=x, y=y, returnValue=NULL\r\n|> AddTable\r\n    [operation]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> AddTo5 x=x, returnValue=NULL\r\n|> MultiplyBy multiplier=multiplier\r\n|> StartWith starting=11\r\n|> Subtract operand=operand\r\n|> TheValueShouldBe expected=expected\r\n|> Throw\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "928ea89d-6924-4372-87c4-024dd059e6ae"
              },
              {
                "type": "comment",
                "text": "## DoSomeMath",
                "id": "8027ea7d-4369-45f3-9e2f-2aff7b737def"
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
                        "id": "7bee4dd2-5002-426b-b34e-2f889714fd38"
                      },
                      {
                        "type": "comment",
                        "text": "## Add",
                        "id": "718206ee-8263-499f-99ff-4e0ba027b8fb"
                      },
                      {
                        "key": "Add",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "a13f289c-ef24-49f5-a6d8-91412cacf7e0"
                      },
                      {
                        "type": "comment",
                        "text": "## AddAndCheck",
                        "id": "c785bff0-b4d2-4a91-a4c0-60e24f9f2387"
                      },
                      {
                        "key": "AddAndCheck",
                        "cells": {
                          "starting": "11",
                          "operand": "operand",
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "9df8dc23-2fa4-4226-94f1-856608f38710"
                      },
                      {
                        "type": "comment",
                        "text": "## Adding",
                        "id": "95c78b0a-1bd2-453c-bfa8-958286105f8a"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "5a88813d-b2b9-43f9-9ddb-ee9b1596775e"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTable",
                        "id": "350c31c1-7375-4c72-858d-31919a0c9fbc"
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
                                "id": "9a7f2503-0ff2-46cd-80a7-31a2010bd474"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "dac030d5-6577-438f-8c32-eff170720459"
                              },
                              {
                                "key": "row",
                                "cells": {
                                  "x": "x",
                                  "y": "y",
                                  "sum": "sum"
                                },
                                "collections": [],
                                "id": "e3f2aa84-c6c3-4a93-ab83-ebf5cd0aa96b"
                              }
                            ],
                            "activeCells": {},
                            "id": "5518ca91-a9d3-459e-8918-c7b78e0a1d99"
                          }
                        ],
                        "id": "c78186ed-98b5-4cd9-a5d7-e93313f4846b"
                      },
                      {
                        "type": "comment",
                        "text": "## AddTo5",
                        "id": "c6208594-7f01-447f-a386-35393c7c201f"
                      },
                      {
                        "key": "AddTo5",
                        "cells": {
                          "x": "x",
                          "returnValue": "NULL"
                        },
                        "collections": [],
                        "id": "9cafa79f-e891-44ee-a6d0-86a7b485abf7"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyBy",
                        "id": "35e8f902-4802-42b2-9d71-a58b6c650f8d"
                      },
                      {
                        "key": "MultiplyBy",
                        "cells": {
                          "multiplier": "multiplier"
                        },
                        "collections": [],
                        "id": "d594e66d-aa9a-4c19-be0c-5edc220e623e"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWith",
                        "id": "7796d4bf-ca4c-4ff0-91e8-2f7ec57f08ba"
                      },
                      {
                        "key": "StartWith",
                        "cells": {
                          "starting": "11"
                        },
                        "collections": [],
                        "id": "cb5b42da-4ba5-405e-8403-c890441e0ddc"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "e406d5ee-a158-47d9-b1ce-f1802ca9f961"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "e64bd087-c63f-421a-9978-77c61e1bb6fa"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "9fef0fc6-b78b-4168-9d56-f24a546a61ca"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "e0f939f3-c2d4-435c-8afe-9e11c0464e37"
                      },
                      {
                        "type": "comment",
                        "text": "## Throw",
                        "id": "c230188c-31a1-4e13-bba9-d87738925c7a"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "3d52199c-d07a-47d5-88af-18caae1edbd5"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "c876bf1a-dee9-441d-b783-1cc8b0dcf6c7"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "36ba6886-bcf2-4df7-94fe-6f55707d2908"
                      }
                    ],
                    "activeCells": {},
                    "id": "7c1dcc39-1dce-4a56-b04c-dbcb71cfab9e"
                  }
                ],
                "id": "e781cf0c-03bb-4370-b28d-6e1daadfc24e"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "d28d3593-a024-4847-880b-5bdba46eca54"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "c7b720fb-1109-47dc-a728-3f21db7159cc"
              }
            ],
            "activeCells": {},
            "id": "e8326eff-41d0-4d8b-b6d0-1c2cd0ba024d"
          }
        ],
        "id": "8b306b56-52ad-45fa-8388-81570b6db4f5"
      },
      "sampleMarkdown": "# Sample Specification for DoSomeMath\r\n\r\n-> id = 65035777-c8ed-420a-b144-45793d84344c\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9538143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[DoSomeMath]\r\n|> DoSomeMath\r\n    [Math]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MathFixture\r\n\r\n\r\n    ## Add\r\n\r\n    |> Add operand=operand\r\n\r\n    ## AddAndCheck\r\n\r\n    |> AddAndCheck starting=11, operand=operand, expected=expected\r\n\r\n    ## Adding\r\n\r\n    |> Adding x=x, y=y, returnValue=NULL\r\n\r\n    ## AddTable\r\n\r\n    |> AddTable\r\n        [operation]\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n        |x|y|sum|\r\n\r\n\r\n    ## AddTo5\r\n\r\n    |> AddTo5 x=x, returnValue=NULL\r\n\r\n    ## MultiplyBy\r\n\r\n    |> MultiplyBy multiplier=multiplier\r\n\r\n    ## StartWith\r\n\r\n    |> StartWith starting=11\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe expected=expected\r\n\r\n    ## Throw\r\n\r\n    |> Throw\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "191248d2-d82a-4fbb-9ed5-2f01f2bb89ec"
              },
              {
                "type": "comment",
                "text": "## TicketIsGiven",
                "id": "a424bb62-b493-4ac5-9565-6be8b5ddca3c"
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
                        "id": "ed6d7615-c072-4831-9818-81a24a43e932"
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
                        "id": "2e58a407-8431-405c-aa54-e1b95af6ebdc"
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
                        "id": "e9026d2b-33a5-430f-b014-cbc4673e8c81"
                      }
                    ],
                    "activeCells": {},
                    "id": "08a07c27-cd09-4d3b-94a8-e39add6b76a0"
                  }
                ],
                "id": "62d15f92-b0d4-4e7b-a2e6-ee4c4df6a8dd"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "89193e5b-b834-4ee8-8583-b2fee252f85f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "301a094e-7e90-4239-900e-40e1298fed6b"
              }
            ],
            "activeCells": {},
            "id": "6036549f-d4ab-4f25-8806-7111286b5185"
          }
        ],
        "id": "972a4858-4c64-4a63-9f71-ca48e39dcce1"
      },
      "sampleMarkdown": "# Sample Specification for ParkingExpiry\r\n\r\n-> id = 88c42084-ed48-41e8-b37b-4ccff8b00a49\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9548143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[ParkingExpiry]\r\n|> TicketIsGiven\r\n    [table]\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n    |day|minutes|amount|ticketedAmount|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "07a45f08-4d83-4861-acb6-ca7e078e2a19"
              },
              {
                "type": "comment",
                "text": "## PositionIs",
                "id": "3fa3d5b7-0fc9-4bd7-9795-83240a872e74"
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
                        "id": "09fcea8e-636d-49a6-a685-629d2714181c"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "474dc972-989b-4446-a26a-f9bf559c33f3"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Player": "Player",
                          "Position": "Position"
                        },
                        "collections": [],
                        "id": "4a046d0a-8ebb-4564-8878-127ab7b66649"
                      }
                    ],
                    "activeCells": {},
                    "id": "a0cdbe8b-42fe-40c2-9df7-4872f8da4c9c"
                  }
                ],
                "id": "a02fb2bb-3e3a-430a-8e3c-0722e37a90a8"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "e6328386-4037-4823-afae-8036fafb4fb5"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "14e2e7af-6f22-4708-932e-bb9c0e6012b0"
              }
            ],
            "activeCells": {},
            "id": "79ffff7d-2f4b-48de-a664-6452152c3921"
          }
        ],
        "id": "b74e4e23-c7e1-45a0-9c5b-792104dab4d8"
      },
      "sampleMarkdown": "# Sample Specification for Player\r\n\r\n-> id = 717a22f9-3471-4409-a0e4-b03431bd41ee\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9548143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Player]\r\n|> PositionIs\r\n    [table]\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n    |Player|Position|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "89be2449-3dcb-4845-9f0f-9c6e098aa197"
              },
              {
                "type": "comment",
                "text": "## FirstAndLastName",
                "id": "3397883b-30a9-4afb-8a32-ce6bb975a22f"
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
                        "id": "db8556b1-81ef-4b83-843f-7389a81fe51a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "01c07fc5-3854-4ccf-a543-31591834dcd4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "first": "first",
                          "last": "last",
                          "fullname": "fullname"
                        },
                        "collections": [],
                        "id": "160b2bf7-c4b5-4c60-9734-be1f423b69e3"
                      }
                    ],
                    "activeCells": {},
                    "id": "e6da454c-c7c9-4fa0-ba77-33221b2ef10d"
                  }
                ],
                "id": "6bbcd62a-8100-4cd8-b0a7-dbbfeed89c58"
              },
              {
                "type": "comment",
                "text": "## names",
                "id": "80e8fa71-cd08-4dcb-83d4-c24192d05d00"
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
                        "id": "8705dbaa-d98a-4b3a-b0a4-6dbcbf1c698f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "16e77d83-f007-42b7-be11-bb4bf982efe4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "First": "First",
                          "Last": "Last",
                          "Fullname": "Fullname"
                        },
                        "collections": [],
                        "id": "5e7c15c8-0c4b-4bcd-91d8-6579c395918d"
                      }
                    ],
                    "activeCells": {},
                    "id": "dc5c564b-da99-4328-b014-dfe8e9933d41"
                  }
                ],
                "id": "49bfd7be-1064-4bd1-a440-f574ede1042b"
              },
              {
                "type": "comment",
                "text": "## TheEnumOptionIs",
                "id": "06dc83c8-2265-4195-a539-dc0738ebc913"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "SecondOption",
                  "selectedOption": "selectedOption"
                },
                "collections": [],
                "id": "545fff12-8f52-4c5d-b121-c65605d565b5"
              },
              {
                "type": "comment",
                "text": "## TheNameIs",
                "id": "40fa62de-79e9-4f83-944a-738ba681d27c"
              },
              {
                "key": "TheNameIs",
                "cells": {
                  "first": "first",
                  "last": "last",
                  "fullname": "fullname"
                },
                "collections": [],
                "id": "9d95c90e-80da-4b47-a288-4e43e109b30c"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "001afd32-d132-4c7c-9d90-faef58ce0db6"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "bdd36143-150a-4362-b992-d53e39807566"
              }
            ],
            "activeCells": {},
            "id": "1245bc92-4d67-4d3b-aa6c-22040dc070a8"
          }
        ],
        "id": "651ea6c0-9b71-43a4-8f7b-33f783b0981d"
      },
      "sampleMarkdown": "# Sample Specification for SelectionList\r\n\r\n-> id = 51c3c365-1809-453f-b4b8-ae66f0e2633a\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9558143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SelectionList]\r\n|> FirstAndLastName\r\n    [table]\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n    |first|last|fullname|\r\n\r\n|> names\r\n    [table]\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n    |First|Last|Fullname|\r\n\r\n|> TheEnumOptionIs option=SecondOption, selectedOption=selectedOption\r\n|> TheNameIs first=first, last=last, fullname=fullname\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "e87fc3c9-0e62-4812-b269-2a258868182a"
              },
              {
                "type": "comment",
                "text": "## A",
                "id": "00d19417-01fc-4f45-8bd8-e85fce745824"
              },
              {
                "key": "A",
                "cells": {},
                "collections": [],
                "id": "d936ded9-ae7e-4f2f-bb72-cd9cd18e143f"
              },
              {
                "type": "comment",
                "text": "## B",
                "id": "ed898941-bf33-4f90-a162-4d19bd882697"
              },
              {
                "key": "B",
                "cells": {},
                "collections": [],
                "id": "2b6261bb-08d8-48a6-9456-ec05d895c07c"
              },
              {
                "type": "comment",
                "text": "## C",
                "id": "8f5f814d-675b-441f-83fc-f57920eb059e"
              },
              {
                "key": "C",
                "cells": {},
                "collections": [],
                "id": "c9b7d319-669d-4224-9764-2c4c000b1e01"
              },
              {
                "type": "comment",
                "text": "## D",
                "id": "a62860f9-cc8b-4d1e-b814-ef0c4567bef5"
              },
              {
                "key": "D",
                "cells": {},
                "collections": [],
                "id": "cee5c27d-23ed-45e0-9444-4f426b622209"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "244d8d33-5d5c-4acc-b85b-2e5d350b065a"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "4008661a-f09b-436b-be14-db3d4ad12f0e"
              }
            ],
            "activeCells": {},
            "id": "5478df84-92b4-467d-abbc-cf9290723a87"
          }
        ],
        "id": "78f44de9-5f5c-4e8c-9cb6-2156e8984b48"
      },
      "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = fe22baac-d90e-4b8b-a669-35b2e4524243\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9558143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "97d91d8d-fc30-4751-a495-3518bb2ed03e"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "54818d91-25c7-45d4-82e6-4ef41dd0a648"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "b7bacaf2-3636-4e28-9de2-8be8aa432063"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "ecf64174-1d63-4dc5-b1db-919afc268213"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "d31d7391-37ef-425e-8e18-b394447caeda"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "650764f3-e7c7-454e-be42-978c9282c316"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "51b5332e-1054-46ec-b260-9d1e2555590e"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "1feed64d-1373-44c4-aec5-36a084f5fe03"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "5cd90ba1-76c3-4f2a-8b43-31a815f0f586"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "114356fc-b49c-4f99-8bfd-c1c092ba5584"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "08b212ea-a5d3-4bae-bdd8-b4317d64c2ed"
                    }
                  ],
                  "activeCells": {},
                  "id": "942fdb76-11e0-4f05-85bd-e7a99037294a"
                }
              ],
              "id": "40a72cd9-5f18-451a-833a-1d4b0cdd6381"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = 458904ba-b9f8-4da4-be90-a289754cb1cb\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9558143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "70d065ac-cba7-487f-9ba9-ff6904f91350"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "15156f1e-6c96-4d43-b802-06760ec6b3d8"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "7d55f972-9dd6-473f-8c8f-340faf3b6a96"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "a7197934-9388-454f-ad13-3e933b743cf4"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "4d6d0157-53e5-44b7-8d67-5988e79f8a17"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "df008210-b3be-4285-97ab-e04ec9cda1a8"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "1e24ccd2-28f2-4ab0-ba45-9e1f849f8cca"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "671ed095-3e06-499e-938a-fd2b7b1d5d45"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "b813793b-2786-4843-a44e-fc61f7d5890a"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "24ce8bdf-e2d4-4bf5-8d8b-e030ba350347"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "7cc1f481-a77a-45cc-a110-f36672bb5cea"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "febcb0e8-e105-40c1-acd6-dc8c05730ca2"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "1aa4ab55-8134-4ffb-8076-d5331ee2d223"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "0302844a-7308-43c8-93eb-8780a86da55f"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "7cb7f691-95aa-47f8-b321-04cf694537e8"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "eafbbfca-795c-4233-a82e-809102aba463"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "d374c685-c842-4ea3-820e-0b93a90dcfc0"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "34a8ae43-7970-4a06-b038-f6ab43bdf549"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "43ffdde0-113f-458f-a6ea-369a8ac2e284"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "53bb1252-5b3b-415c-b87e-fdab44f60901"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "556a68b0-1c83-44f8-ba32-6a7bd55c2adc"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "9705e5d0-d97a-4f4e-81ab-2a408c060f09"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "6937840d-15a7-49f6-b0e4-398970843e69"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "0abdaf24-535a-48a8-8ba1-8829dc625579"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "e6e8ea7b-c8cb-40a6-8080-201c33040c49"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "43eeca40-6cdf-44ac-9038-7bbb252be4f6"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "385f5bdc-dd48-4f28-88bf-c02c930edeef"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "f7e07158-e2c4-4eca-a840-44585a1d4d57"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "5f866971-042c-4f82-9f5e-9ced35def5a5"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "3aa2bb89-8f3a-4c1d-b986-6e715bf0b4fe"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "6b0e7363-0739-457b-adaa-9d611fe347cb"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "621c8d00-e6ea-4c54-ba2c-50132c063d5c"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "f7e26b3c-2577-4037-8f0a-6e782718adb0"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "e43bdf22-e578-4900-9b47-3265c8f65d7b"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "81405bb2-016a-4579-b95e-112c395e5097"
                    }
                  ],
                  "activeCells": {},
                  "id": "2e280bfb-dc77-4b80-ac6e-359cbfea73c9"
                }
              ],
              "id": "22e5a589-36ba-4de3-8827-ac1c416d5345"
            },
            "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = a98bb137-1574-4519-97c1-fdaafa2d800f\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9558143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                      "id": "2bdede79-942e-4fb2-852b-228959acebd8"
                    },
                    {
                      "type": "comment",
                      "text": "## A",
                      "id": "44c07154-c095-4faa-9385-7e2c6d19490a"
                    },
                    {
                      "key": "A",
                      "cells": {},
                      "collections": [],
                      "id": "3559302c-7aa2-436c-9258-1c3f4f764f66"
                    },
                    {
                      "type": "comment",
                      "text": "## B",
                      "id": "c41bc9ab-8e46-49b9-9aa3-bb4c6ec2e47d"
                    },
                    {
                      "key": "B",
                      "cells": {},
                      "collections": [],
                      "id": "98c4ba4e-e74b-400f-af40-54c66b59a865"
                    },
                    {
                      "type": "comment",
                      "text": "## C",
                      "id": "05697810-f083-493b-9f86-07cf61b93c35"
                    },
                    {
                      "key": "C",
                      "cells": {},
                      "collections": [],
                      "id": "87fc3827-8efb-4768-906b-397d14d422d2"
                    },
                    {
                      "type": "comment",
                      "text": "## D",
                      "id": "23b4356d-ff82-42f7-ae7b-0a654bcacf50"
                    },
                    {
                      "key": "D",
                      "cells": {},
                      "collections": [],
                      "id": "31a1814f-2a99-4735-8738-04268a957d4c"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "ca4dcaa7-c46a-4a73-8091-c0ae105130e9"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "c37ca02f-9752-4a40-bf2e-978b420e2aff"
                    }
                  ],
                  "activeCells": {},
                  "id": "e47a32d7-fcb5-49b3-bb35-5651b9763d9b"
                }
              ],
              "id": "717b8fcb-d3d1-49b3-b572-4665212c1829"
            },
            "sampleMarkdown": "# Sample Specification for Simple\r\n\r\n-> id = cd914709-5f7c-4c20-b77e-6e80545dac6b\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9558143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Simple]\r\n|> A\r\n|> B\r\n|> C\r\n|> D\r\n|> TODO message=message\r\n~~~\r\n",
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
                      "id": "9be20661-af97-495c-9c09-a928ebed93c5"
                    },
                    {
                      "type": "comment",
                      "text": "## BadGrammar",
                      "id": "bbd4740c-a98a-4821-9ded-1d6dc07f7689"
                    },
                    {
                      "key": "BadGrammar",
                      "cells": {
                        "one": "one",
                        "two": "two"
                      },
                      "collections": [],
                      "id": "de81132e-10bb-43c1-aa48-025832e8824b"
                    },
                    {
                      "type": "comment",
                      "text": "## BadSentence",
                      "id": "7feae988-1dc1-439b-a77f-81c912ef233e"
                    },
                    {
                      "key": "BadSentence",
                      "cells": {
                        "name": "name"
                      },
                      "collections": [],
                      "id": "09995c22-fe3d-4d0a-9e81-0e40451f3c6a"
                    },
                    {
                      "type": "comment",
                      "text": "## DivideBy",
                      "id": "f77efa5b-e9a7-4ff0-b947-a333bfa6be4e"
                    },
                    {
                      "key": "DivideBy",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "02540eb5-871f-4ee0-9445-ac31acd6065a"
                    },
                    {
                      "type": "comment",
                      "text": "## JustGo",
                      "id": "4eb88b09-0779-419a-aed3-74cb7fc2771d"
                    },
                    {
                      "key": "JustGo",
                      "cells": {},
                      "collections": [],
                      "id": "01271605-e326-4b6c-9b76-42bde093f543"
                    },
                    {
                      "type": "comment",
                      "text": "## MultiplyThenAdd",
                      "id": "d166591e-d016-4e0e-bf99-c2d1e0acc43d"
                    },
                    {
                      "key": "MultiplyThenAdd",
                      "cells": {
                        "multiplier": "multiplier",
                        "delta": "delta"
                      },
                      "collections": [],
                      "id": "c1ba47f7-b785-4627-b89d-4c1aefcccb6d"
                    },
                    {
                      "type": "comment",
                      "text": "## StartWithTheNumber",
                      "id": "f0d6b7f4-3865-4d79-9f23-b6b385945223"
                    },
                    {
                      "key": "StartWithTheNumber",
                      "cells": {
                        "number": "5"
                      },
                      "collections": [],
                      "id": "f3387bc4-022c-4053-ade0-5a6b4faf9356"
                    },
                    {
                      "type": "comment",
                      "text": "## Subtract",
                      "id": "1b2e7c9d-a551-4cfe-8e1e-8ac49f206bfa"
                    },
                    {
                      "key": "Subtract",
                      "cells": {
                        "operand": "operand"
                      },
                      "collections": [],
                      "id": "a56abfe7-8a68-4b77-a187-20878694a55f"
                    },
                    {
                      "type": "comment",
                      "text": "## TheSumOf",
                      "id": "1abc2237-c8ab-452f-b9a0-2098b19e384c"
                    },
                    {
                      "key": "TheSumOf",
                      "cells": {
                        "number1": "number1",
                        "number2": "number2",
                        "sum": "NULL"
                      },
                      "collections": [],
                      "id": "db50ff8f-171e-4580-9fa2-7cbe109f348e"
                    },
                    {
                      "type": "comment",
                      "text": "## TheValueShouldBe",
                      "id": "dd910ffa-bcda-483b-998d-c2742ae98090"
                    },
                    {
                      "key": "TheValueShouldBe",
                      "cells": {
                        "number": "number"
                      },
                      "collections": [],
                      "id": "e2a01b3c-9d4e-4cc1-a68f-9b3361bd09ee"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsFalse",
                      "id": "ad705068-9c41-49a7-8c23-5d5b2f13d642"
                    },
                    {
                      "key": "ThisFactIsFalse",
                      "cells": {},
                      "collections": [],
                      "id": "aede6d5c-e043-4e5d-86b8-4fb8eac57735"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactIsTrue",
                      "id": "01f61283-c96c-4241-bcc7-c25d21d5be2c"
                    },
                    {
                      "key": "ThisFactIsTrue",
                      "cells": {},
                      "collections": [],
                      "id": "c6702f6d-011a-4d3d-b02a-dc04d59879b1"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisFactThrowsException",
                      "id": "01562fb7-532b-4495-ac8c-491eb572cd4a"
                    },
                    {
                      "key": "ThisFactThrowsException",
                      "cells": {},
                      "collections": [],
                      "id": "8f46719c-745c-424b-b351-539a09f9789b"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineAlwaysThrowsExceptions",
                      "id": "a79e78c0-c7ed-4a1d-8dec-2368019c14b3"
                    },
                    {
                      "key": "ThisLineAlwaysThrowsExceptions",
                      "cells": {},
                      "collections": [],
                      "id": "b945849f-24fd-4b92-b30b-ff786dfe5c69"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysFalse",
                      "id": "251cd58e-661a-4af8-8293-d4ccde0c91a9"
                    },
                    {
                      "key": "ThisLineIsAlwaysFalse",
                      "cells": {},
                      "collections": [],
                      "id": "e9d192cc-a178-4631-883a-66e40e5f20f0"
                    },
                    {
                      "type": "comment",
                      "text": "## ThisLineIsAlwaysTrue",
                      "id": "ea5653ce-0c41-4959-9818-49434da55177"
                    },
                    {
                      "key": "ThisLineIsAlwaysTrue",
                      "cells": {},
                      "collections": [],
                      "id": "ac76f621-9862-498e-b264-c8240093139a"
                    },
                    {
                      "type": "comment",
                      "text": "## TODO",
                      "id": "27a9268b-0008-4629-8377-d737affb57ea"
                    },
                    {
                      "key": "TODO",
                      "cells": {
                        "message": "message"
                      },
                      "collections": [],
                      "id": "89801042-13c6-4014-8e2e-e11e29e1d35e"
                    },
                    {
                      "type": "comment",
                      "text": "## XplusYShouldBe",
                      "id": "3fbdcdf3-2afe-43c8-9b18-83fd03d61bcc"
                    },
                    {
                      "key": "XplusYShouldBe",
                      "cells": {
                        "x": "x",
                        "y": "y",
                        "sum": "sum"
                      },
                      "collections": [],
                      "id": "a546cb71-b347-4d20-9823-660681ba57de"
                    }
                  ],
                  "activeCells": {},
                  "id": "17e9472e-3a66-4c35-a516-de922132ea04"
                }
              ],
              "id": "581b352a-817b-45ed-af1a-0bfa001e8c89"
            },
            "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = 1d68d77e-6571-4f6c-9c37-cce23c9e20d0\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9568143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "749617a5-5a6e-4309-a0c3-f55c7bf3cd30"
              },
              {
                "type": "comment",
                "text": "## Inline",
                "id": "2be169f8-bc06-4f75-823a-851482b37d26"
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
                        "id": "adf6e97a-548b-4064-9bb6-dda857ad10c7"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "04a6a550-0daf-47c7-9c22-82cfba095e56"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "eb8d15f8-ddc7-4f3b-b5ee-46095920804b"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "c3b74aff-8ec3-4c57-a744-197e9ec3f933"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "a07e2c75-e57b-4483-ad1d-9da0af8a5d3e"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "2f8ed192-af69-4d33-a6bd-346a52132b2f"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "d71b8870-c308-42c1-860e-c60d3a8b2d02"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "67e30bfa-beea-43d3-95f6-8c4a000de4c1"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "29f4f7b4-bbf4-4a8f-9e48-4726aedb1b1d"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "94202371-ea56-4a27-ae8c-b19b8dbffd10"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "f88999f7-ca84-4d1f-9730-0494e0acc1b8"
                      }
                    ],
                    "activeCells": {},
                    "id": "572413d7-328f-4eeb-b002-2185af71e684"
                  }
                ],
                "id": "94f2acbe-9770-43a5-9722-75d9619f9794"
              },
              {
                "type": "comment",
                "text": "## MandatorySelection",
                "id": "6d643275-ec14-4610-b141-28d26c494005"
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
                        "id": "a24cfc6c-dabf-4b77-b806-ddd6bb45375b"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "02dfac80-9c2c-4926-b8bd-7b8243a58a24"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "07ed66c0-58d9-4da7-a852-20e1315e5eb4"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "71ad0563-0402-489e-bd36-2014e539a641"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "37ee8956-016f-48b4-bfc6-311ae97c1d2b"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "64bc8daf-a036-49f8-9e2f-bfcf5792d87b"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "79aac533-debb-4a98-afd9-635e87c7a3fb"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "d0644ba9-e5a9-4967-bf3d-31838d0b57ab"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "4dc5e62b-7ae7-42b3-9ae3-7e5f1ac1415e"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "a0d81d59-8e34-4bda-be92-86f73bb05716"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "d5935fde-59e2-4b6c-8143-fe107739db93"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "a419048d-3b31-49d5-aa8b-c7218e59f113"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "bb31ec8d-2277-4cda-9bc7-0a77722f1735"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "0d836576-ea50-4390-9c93-de5311086c53"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "43733095-d71e-4b5e-93d3-ec5bac5fdafa"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "c90b319c-f768-4f36-998e-aaa8edb1306b"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "a5225fe6-0f9c-46c8-bb90-e641e578a495"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "2f766a51-e3a1-453b-b443-36bd19ae304d"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "d23c5697-8907-4fc2-abb3-c71b48bbd21b"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "d72bad4e-eed3-41a9-8199-ed16e7a0995f"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "56142360-a13c-490b-a0f0-fda6104022ba"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "09e9acd9-fbee-4057-a203-be350fa714f2"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "51dd8814-6918-47d3-b71e-b61c778a3e25"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "eff62483-a375-4121-9a83-5af0baf0f600"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "ff5eea2f-2f2f-4fe4-9804-6f363a3d5527"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "07a73258-174a-4fa9-9ed6-c01646258621"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "ab9e28bc-cadf-4079-8a56-31a83ab2dc7f"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "742d7e72-3cdc-4772-b3ba-5dd3478e004f"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "8261dde8-3ebe-4864-9dd4-e9b3e107754e"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "8128e408-e972-4566-90a7-bf8c2520aa07"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "285f5af9-c00c-41c1-af2d-5225145ab013"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "1d9f592c-a623-4c1a-815b-14bd62e0d2fe"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "f1685075-3d53-42eb-99c8-01375b3e19ca"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "a4559718-a112-4d0f-b2ab-7fb565b15b28"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "9c3581ec-7e6f-415c-9cf4-4429862d95dc"
                      }
                    ],
                    "activeCells": {},
                    "id": "6ce53dfb-a8db-4634-9412-3a75345d245a"
                  }
                ],
                "id": "d4536b50-09e0-4e80-8e19-a8557736b9f8"
              },
              {
                "type": "comment",
                "text": "## Simple",
                "id": "b35e68f9-19c6-4137-96ea-f09de36f126f"
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
                        "id": "627428a6-1850-410e-8ab0-0a04378f5bfd"
                      },
                      {
                        "type": "comment",
                        "text": "## A",
                        "id": "73dc1c80-0d1a-49f8-a324-bc18f833c2e2"
                      },
                      {
                        "key": "A",
                        "cells": {},
                        "collections": [],
                        "id": "969effe0-643d-4c01-b08d-f74f7da1ddc1"
                      },
                      {
                        "type": "comment",
                        "text": "## B",
                        "id": "12759550-4952-4c3f-94ef-a2558048afa8"
                      },
                      {
                        "key": "B",
                        "cells": {},
                        "collections": [],
                        "id": "81358610-cb9f-47bc-b170-1d9bc8c7e59b"
                      },
                      {
                        "type": "comment",
                        "text": "## C",
                        "id": "faa0ea05-3990-4231-afba-a366eb7f9890"
                      },
                      {
                        "key": "C",
                        "cells": {},
                        "collections": [],
                        "id": "fda5e3f2-7c46-4474-a76d-acf2e1e84ddd"
                      },
                      {
                        "type": "comment",
                        "text": "## D",
                        "id": "22b57aa9-de85-43f6-bd5e-37ac232c3e60"
                      },
                      {
                        "key": "D",
                        "cells": {},
                        "collections": [],
                        "id": "705dc061-0170-4668-9974-114188eb818f"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "e8e673f7-1c83-477b-98cc-6e4a20988d9f"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "15404d5b-5f36-4887-bd04-e13e007b27f0"
                      }
                    ],
                    "activeCells": {},
                    "id": "accc6f3b-d1b2-440c-ac53-87116f008da8"
                  }
                ],
                "id": "14090276-8b7a-4c7d-9ba2-f794e471bb16"
              },
              {
                "type": "comment",
                "text": "## Single",
                "id": "ce35ba5c-75e7-4fbd-82dc-f7a65ee5000e"
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
                        "id": "eb3ec3ff-33da-4e7d-9820-44cb8fc8a40e"
                      },
                      {
                        "type": "comment",
                        "text": "## BadGrammar",
                        "id": "e81f4e1d-96eb-40ad-a141-d7ac6f8b380d"
                      },
                      {
                        "key": "BadGrammar",
                        "cells": {
                          "one": "one",
                          "two": "two"
                        },
                        "collections": [],
                        "id": "03673673-dc00-4b88-b86d-fbda61319d8b"
                      },
                      {
                        "type": "comment",
                        "text": "## BadSentence",
                        "id": "293033bc-1d50-4cd9-98b6-74853a4e227a"
                      },
                      {
                        "key": "BadSentence",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "a77506b8-a793-4998-9088-1c9f1dcfbf7a"
                      },
                      {
                        "type": "comment",
                        "text": "## DivideBy",
                        "id": "2f85b025-797c-4f7c-ab6a-71d82804e933"
                      },
                      {
                        "key": "DivideBy",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "3bfe4203-8cf0-476d-a1fe-d8119fff96bb"
                      },
                      {
                        "type": "comment",
                        "text": "## JustGo",
                        "id": "875b5db9-6818-4d62-9815-23f00362ee7b"
                      },
                      {
                        "key": "JustGo",
                        "cells": {},
                        "collections": [],
                        "id": "024c7a61-52fc-4aea-b062-70c1a7a3eaaa"
                      },
                      {
                        "type": "comment",
                        "text": "## MultiplyThenAdd",
                        "id": "d2d43c3a-acc2-4283-af14-4ccb6f3d57a8"
                      },
                      {
                        "key": "MultiplyThenAdd",
                        "cells": {
                          "multiplier": "multiplier",
                          "delta": "delta"
                        },
                        "collections": [],
                        "id": "7946dd6b-2778-4575-a3c6-44decb947370"
                      },
                      {
                        "type": "comment",
                        "text": "## StartWithTheNumber",
                        "id": "8dd19c7c-224d-4844-9955-58a0eae92310"
                      },
                      {
                        "key": "StartWithTheNumber",
                        "cells": {
                          "number": "5"
                        },
                        "collections": [],
                        "id": "b5c7c164-35af-42d5-baa4-a17c106696c2"
                      },
                      {
                        "type": "comment",
                        "text": "## Subtract",
                        "id": "a94869a5-9acd-45f7-b45d-e636e45cf1b8"
                      },
                      {
                        "key": "Subtract",
                        "cells": {
                          "operand": "operand"
                        },
                        "collections": [],
                        "id": "243be0a8-b6ef-482e-bd6e-64566741baa7"
                      },
                      {
                        "type": "comment",
                        "text": "## TheSumOf",
                        "id": "aa80099f-2a81-4381-a707-ae9f73bcf187"
                      },
                      {
                        "key": "TheSumOf",
                        "cells": {
                          "number1": "number1",
                          "number2": "number2",
                          "sum": "NULL"
                        },
                        "collections": [],
                        "id": "07f99ba9-240b-4782-8222-a31d44815f1f"
                      },
                      {
                        "type": "comment",
                        "text": "## TheValueShouldBe",
                        "id": "5bd5bfad-4604-4813-99c7-b5d7195850c8"
                      },
                      {
                        "key": "TheValueShouldBe",
                        "cells": {
                          "number": "number"
                        },
                        "collections": [],
                        "id": "02c1f477-a91e-4531-835f-c666fbbc356f"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsFalse",
                        "id": "67be4f0a-a9b2-4958-b51f-caebd8850728"
                      },
                      {
                        "key": "ThisFactIsFalse",
                        "cells": {},
                        "collections": [],
                        "id": "c5ef29c0-157d-4b85-b1c9-35be04522cec"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactIsTrue",
                        "id": "c19cc7a7-0b90-4409-aacd-6dc4b4661634"
                      },
                      {
                        "key": "ThisFactIsTrue",
                        "cells": {},
                        "collections": [],
                        "id": "0b315248-10a3-478e-b776-0d4e3f445097"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisFactThrowsException",
                        "id": "616110d6-f8dd-4d61-aca1-be9e4293ee0b"
                      },
                      {
                        "key": "ThisFactThrowsException",
                        "cells": {},
                        "collections": [],
                        "id": "9bd9b81a-6e9b-450c-bc1a-8cb50fea7d6b"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineAlwaysThrowsExceptions",
                        "id": "2a7d5381-d00d-42d4-92ba-9f547e2f5013"
                      },
                      {
                        "key": "ThisLineAlwaysThrowsExceptions",
                        "cells": {},
                        "collections": [],
                        "id": "634b11e4-2edd-4c83-af95-5e7aeb087319"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysFalse",
                        "id": "2f189772-e6c4-4fee-bf7d-85f8236d3929"
                      },
                      {
                        "key": "ThisLineIsAlwaysFalse",
                        "cells": {},
                        "collections": [],
                        "id": "d8e9dbd3-5f08-4c7a-a133-9d0dffade396"
                      },
                      {
                        "type": "comment",
                        "text": "## ThisLineIsAlwaysTrue",
                        "id": "ccf57f89-410a-4d43-a5d1-7cb81c76b77d"
                      },
                      {
                        "key": "ThisLineIsAlwaysTrue",
                        "cells": {},
                        "collections": [],
                        "id": "b57218fc-019c-4a1d-91ac-37b87b62084f"
                      },
                      {
                        "type": "comment",
                        "text": "## TODO",
                        "id": "47786a5b-99ed-473e-b4d0-82ee256e01f9"
                      },
                      {
                        "key": "TODO",
                        "cells": {
                          "message": "message"
                        },
                        "collections": [],
                        "id": "3c1ee949-795a-4c91-a0af-72f899703cc1"
                      },
                      {
                        "type": "comment",
                        "text": "## XplusYShouldBe",
                        "id": "592521c2-0ad4-42dd-94da-0f5239c109cc"
                      },
                      {
                        "key": "XplusYShouldBe",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "beb3698b-1df0-4ca5-898f-0e0b4fad9749"
                      }
                    ],
                    "activeCells": {},
                    "id": "7570428f-a63f-46df-9692-e988e0d923d1"
                  }
                ],
                "id": "b6815e9f-7054-48e5-91ec-24680f764bd7"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "23ee9b28-e47c-4dd2-9fc3-0805840b4f0f"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "5a896c4c-9574-42ec-bd84-c171fa01f920"
              }
            ],
            "activeCells": {},
            "id": "e3d248ce-9fa1-4ce4-a292-c9d333cbd998"
          }
        ],
        "id": "4ee3582f-aaa8-4961-acc1-c21c49ee6202"
      },
      "sampleMarkdown": "# Sample Specification for EmbeddedChoices\r\n\r\n-> id = 36a908e5-2abf-4305-b8d8-c99e68a0d0fe\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9568143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[EmbeddedChoices]\r\n|> Inline\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> MandatorySelection\r\n    [MandatorySelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.MandatorySelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> Simple\r\n    [Simple]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SimpleFixture\r\n\r\n\r\n    ## A\r\n\r\n    |> A\r\n\r\n    ## B\r\n\r\n    |> B\r\n\r\n    ## C\r\n\r\n    |> C\r\n\r\n    ## D\r\n\r\n    |> D\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n|> Single\r\n    [SingleSelection]\r\n\r\n    Implemented by StoryTeller.Samples.Fixtures.SingleSelectionFixture\r\n\r\n\r\n    ## BadGrammar\r\n\r\n    |> BadGrammar one=one, two=two\r\n\r\n    ## BadSentence\r\n\r\n    |> BadSentence name=name\r\n\r\n    ## DivideBy\r\n\r\n    |> DivideBy operand=operand\r\n\r\n    ## JustGo\r\n\r\n    |> JustGo\r\n\r\n    ## MultiplyThenAdd\r\n\r\n    |> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n\r\n    ## StartWithTheNumber\r\n\r\n    |> StartWithTheNumber number=5\r\n\r\n    ## Subtract\r\n\r\n    |> Subtract operand=operand\r\n\r\n    ## TheSumOf\r\n\r\n    |> TheSumOf number1=number1, number2=number2, sum=NULL\r\n\r\n    ## TheValueShouldBe\r\n\r\n    |> TheValueShouldBe number=number\r\n\r\n    ## ThisFactIsFalse\r\n\r\n    |> ThisFactIsFalse\r\n\r\n    ## ThisFactIsTrue\r\n\r\n    |> ThisFactIsTrue\r\n\r\n    ## ThisFactThrowsException\r\n\r\n    |> ThisFactThrowsException\r\n\r\n    ## ThisLineAlwaysThrowsExceptions\r\n\r\n    |> ThisLineAlwaysThrowsExceptions\r\n\r\n    ## ThisLineIsAlwaysFalse\r\n\r\n    |> ThisLineIsAlwaysFalse\r\n\r\n    ## ThisLineIsAlwaysTrue\r\n\r\n    |> ThisLineIsAlwaysTrue\r\n\r\n    ## TODO\r\n\r\n    |> TODO message=message\r\n\r\n    ## XplusYShouldBe\r\n\r\n    |> XplusYShouldBe x=x, y=y, sum=sum\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "3f7610bd-f82e-43b7-85e6-2064e5ad4584"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "f3e48877-ad8b-43f3-9309-de4032697140"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "d7680000-3e33-4fd9-841e-a07b463a083f"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "a67736cd-84ea-4b6d-8e57-0dd6931d4abd"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "033e100a-fba2-46ec-a227-f3b9e18e68af"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "4eacee6a-6a08-4f4f-80df-2df6e3da4365"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "04f1a546-98a4-44e8-989a-d9f54fcf8d4d"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "3b805c01-46d2-4e84-ba14-acdf165de274"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "3d403fc1-67d4-46f6-88aa-759581d44b58"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "a53a4a82-6a52-4439-a7d4-f3ca6abb34dc"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "a106cab5-c3da-4a46-8fb5-480296a61968"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "121e136f-ebaf-4b69-b817-e31770766677"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "54d98b52-5f7c-4333-818e-aec29849d323"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "41c3ff83-432a-49be-84ba-50632bee318a"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "12b9e746-b748-4512-b329-798ab19c8ab9"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "6f2066f5-c3ea-44b9-a82e-515cc998394d"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "c519a1ab-d215-40ed-a089-e3bbfc961ef5"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "f9fd58ed-bdc9-4021-be6c-68d85316e6b1"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "3e2b023d-2827-4890-bf61-60e409fc9c54"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "effaee3c-e348-4841-ab9a-fbdf99c6db1f"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "d49008ac-bc8c-41f3-bd82-776ce6de7b74"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "1b9e140f-8d30-4a2b-afa7-eb22a069ceb6"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "c9d7cd21-1f17-4a98-8f45-bc64ff9f1094"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "f12d986a-bc4e-4a83-9647-a4cd87fb0f7a"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "ac2ce9a9-88cb-4b52-ae6a-ddba199c0886"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "8b93f6a0-7283-4956-b1c8-221c41634fd5"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "2bf624c2-ea19-4897-8013-ffb200d16c50"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "e2e781ec-69db-4f66-8646-0caceec5c62b"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "f819acbd-7ef3-42e5-92b7-c948f7d60536"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "1ed99c7e-d166-4785-b048-a7070e7f823c"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "7f634672-08cb-457e-8434-6ac82fa8f33d"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "36cec5e9-39ca-4dfd-94b3-6b2c2beb01d9"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "6ffac6f4-c8a6-4ed3-8ec9-a86e42e85cbf"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "94d1d2b7-f24d-4fe9-bb71-5fa8bbb75ac8"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "8c132206-2b7f-465a-a119-394c1c22fe98"
              }
            ],
            "activeCells": {},
            "id": "c637b82e-1621-41c7-93bc-31c700caf1cc"
          }
        ],
        "id": "409d10eb-5a8e-4996-b95c-ade233ea9d7b"
      },
      "sampleMarkdown": "# Sample Specification for SingleSelection\r\n\r\n-> id = 1c4eb8f7-95ae-4744-af4e-2c7444f8a71c\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9578143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SingleSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "315815a2-a58d-4e29-a644-fdf3fedc4730"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "ed42f15c-f680-4663-a05e-b5e19a66b036"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "ba3f18e9-ed5b-4da2-9e64-4ec1c13bf8cb"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "81a9e108-4fbc-42b3-91c8-4b1ad6db0747"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "fd6e5aa8-600f-405d-9f16-096f539b0c25"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "5afc46de-3aa0-4f6c-8685-acd58c51400f"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "d1ba4548-a6bc-4bea-9bcf-626f9db88dc0"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "0dfc6f44-86ff-445c-9701-f5c12ca802d1"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "58b960ce-804f-4097-8d03-4b9ad73acc65"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "fe670172-c251-404b-b617-8ffe4b2c6ab6"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "a5a2f683-3801-4c7e-972f-3280f9baa334"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "e819fd50-3567-46ba-b486-09937cdbb607"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "3a6f1d2b-b182-4fec-9f69-04b374888270"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "c49ba892-7a5a-4662-b18d-bf544e0ca51a"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "b0c9f85f-2b59-4cbf-92c8-f3aa8d2c928a"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "32893cdf-7f8c-4762-bf0d-4806ffcfcfb7"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "5a88ae47-0993-4236-9aad-51fb9b225a13"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "da6a71ec-7d9f-44f6-93fa-ec45e55e26d9"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "97439fc1-7fbc-48fa-9ea8-460179a93bcf"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "bd50617a-2a92-40c6-8aea-5c93fade5d9a"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "f93e8567-6934-475c-b7c9-c1b2c94e765c"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "530fe4bb-3d35-4cf2-a2aa-b18c6c8e6824"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "e9edfda6-7ee1-4d28-bdf5-a5c8b718ecda"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "203349bf-8966-422a-9361-7d51046a761f"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "d18d30d1-8027-4678-ac32-d2e0d186fcd7"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "834098b5-911d-428c-bdf0-4c8de9789320"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "56de70e8-1c3e-45f5-ac35-6786e90fadc0"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "17a0f6c6-246d-4d15-a592-9b4bcc661138"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "9ad925d8-0fd0-4398-ada7-a96bdca8b7ec"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "8cf10ea6-2675-4425-b44e-221f199c57f6"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "8fa4cd89-3e4d-4689-a128-bb625e851260"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "76fcb61b-421a-41bc-9b98-6d745e998398"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "ea6b3446-e6a9-464d-a132-30aafbdadac1"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "7ededa1f-1c5e-48b4-86f7-e9b89bd04612"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "0be7c666-6607-489f-af6d-905dd6fb0a77"
              }
            ],
            "activeCells": {},
            "id": "b0da8ade-05c9-48e0-afcd-52e843f28348"
          }
        ],
        "id": "eb1e2a13-bf44-419a-9b41-408d867417c4"
      },
      "sampleMarkdown": "# Sample Specification for OneOrMoreSelection\r\n\r\n-> id = 88311def-ffcb-485f-b0e6-c8058752c668\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9578143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[OneOrMoreSelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "60486564-ad35-4212-a4da-4a7b74ab32f1"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "672680e3-a59b-4d6d-91fc-766262ddfddd"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "4bca1294-3eef-4958-a8ef-4c803bb187dc"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "e7b076ef-2acf-4644-aa1e-06bbbdc0f7de"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "cd4d7157-aeae-4790-8c07-995069d5928a"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "88afb49f-fb37-407e-a4db-d1cdbe8ef3cf"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "741a0bf7-496e-4f9c-8e17-a57adca073bb"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "c7d2733f-02c2-4506-b461-8f298df81509"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "ebff1ee1-4268-410d-ade8-1e339bad1c69"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "bf545702-b18b-42a8-a579-25c256b382c0"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "410b8e44-126c-44ad-84ed-49d1384546ae"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "c4c37a95-36e5-4bd8-bb27-2d5ba622d908"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "b35a0e66-cc44-4cd1-9b16-aa963f76271b"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "6e8c0e29-3377-4c57-8aee-c0daf174ca05"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "3b932948-9565-4878-8662-14eef30f5a7e"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "2f8f79a9-2e57-4166-95a5-9a1a7b24f1bf"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "fc11aa89-76b3-47df-a603-3c88124280c6"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "f1a743c2-b6cf-4d82-b1cc-7d9fc84c1fc4"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "e61fcb7f-fdd9-4423-b882-1a6129919946"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "48576aff-039f-4205-988b-f744173b1263"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "a59226b1-9a41-4b7c-9adf-8739cad32ff4"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "a80db317-63eb-43f9-85a3-e91e2bc0312d"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "8c25ab4b-5549-4bc5-ba72-b13eef286565"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "7b37ab41-decb-40fc-86ed-bb3fe943ab99"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "032bf3ba-6447-467b-b303-b290912e7ac8"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "a958ee88-e98b-4915-8296-425b92acc0ac"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "f617da1c-0cb4-41d7-824b-3735695299d6"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "6c2b8fc8-1532-4c4a-ac1d-3fb218276e01"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "d61f6c83-7d2e-4605-8a1b-0f4f7460bcb6"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "8325a57c-b2d0-4531-ab5d-fed29084cf24"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "98f4cb64-4caa-4f36-be22-d805db7583b7"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "5a50fc0f-fc2f-405f-8601-0ac9aa46448d"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "f6864571-9c6c-43b7-bb67-2fc454ad31c6"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "f459c360-db1a-41a4-934d-ec21533d9695"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "df3e042d-59a8-4321-9f91-d95bd018f7fc"
              }
            ],
            "activeCells": {},
            "id": "46708183-6c04-47c3-8325-4b64f5596680"
          }
        ],
        "id": "5ccbbeea-41cb-48dd-ae00-46f6d55c150c"
      },
      "sampleMarkdown": "# Sample Specification for MandatorySelection\r\n\r\n-> id = 5e0f78f2-b94a-4c05-9367-1e03b701f13a\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9578143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[MandatorySelection]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "e416160b-0b76-47a0-bfa0-bb3980ca74c9"
              },
              {
                "type": "comment",
                "text": "## BadGrammar",
                "id": "c3df62df-7e45-45b6-b631-c755b79dd8e8"
              },
              {
                "key": "BadGrammar",
                "cells": {
                  "one": "one",
                  "two": "two"
                },
                "collections": [],
                "id": "2eb01d64-18b2-4ce4-a795-61cbb2e405df"
              },
              {
                "type": "comment",
                "text": "## BadSentence",
                "id": "02fd7bb1-48e0-41a1-b36d-00d0cc0a94f1"
              },
              {
                "key": "BadSentence",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "59c3bc3c-5788-40be-bd94-549684ef5620"
              },
              {
                "type": "comment",
                "text": "## DivideBy",
                "id": "baf1f18f-2745-4b90-98df-4a7d7ec5157a"
              },
              {
                "key": "DivideBy",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "92675ab8-73c0-4ce3-9eed-6e05ce8da8d7"
              },
              {
                "type": "comment",
                "text": "## JustGo",
                "id": "bb849372-01e4-4f10-b807-67aefe82b31b"
              },
              {
                "key": "JustGo",
                "cells": {},
                "collections": [],
                "id": "bf8c2fa8-ab3f-44fb-8886-5f9b1474e59a"
              },
              {
                "type": "comment",
                "text": "## MultiplyThenAdd",
                "id": "5b89d469-2d68-4961-a283-09ae99851128"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "multiplier",
                  "delta": "delta"
                },
                "collections": [],
                "id": "1520a293-6cab-41c1-ac11-c98e8e5ef7b4"
              },
              {
                "type": "comment",
                "text": "## StartWithTheNumber",
                "id": "bae0d64e-ed27-48bb-b7e6-f345bb6c65a2"
              },
              {
                "key": "StartWithTheNumber",
                "cells": {
                  "number": "5"
                },
                "collections": [],
                "id": "75ca6b20-034b-43e4-bfe6-35569e31931b"
              },
              {
                "type": "comment",
                "text": "## Subtract",
                "id": "2b1f91bb-d1c5-4984-905f-9c6f60dbff8e"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "operand"
                },
                "collections": [],
                "id": "71e29720-b803-4634-b3db-cefd4761afcc"
              },
              {
                "type": "comment",
                "text": "## TheSumOf",
                "id": "a85cb852-533d-4791-8a30-7606dba78973"
              },
              {
                "key": "TheSumOf",
                "cells": {
                  "number1": "number1",
                  "number2": "number2",
                  "sum": "NULL"
                },
                "collections": [],
                "id": "c2b01d28-da64-41b5-bff9-4ad67530fa0e"
              },
              {
                "type": "comment",
                "text": "## TheValueShouldBe",
                "id": "6b56a55a-ef0b-4859-a9f5-1f856b2fd782"
              },
              {
                "key": "TheValueShouldBe",
                "cells": {
                  "number": "number"
                },
                "collections": [],
                "id": "9c5d1fdd-ad33-487e-91d6-5508bd2b139e"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsFalse",
                "id": "3d631917-2b54-47a1-8e9d-0fa04ff9a4e0"
              },
              {
                "key": "ThisFactIsFalse",
                "cells": {},
                "collections": [],
                "id": "b5f818d3-9497-45ea-bcd7-5abe6e7c72db"
              },
              {
                "type": "comment",
                "text": "## ThisFactIsTrue",
                "id": "dab2aec1-0df9-4103-83e6-a18d155794ed"
              },
              {
                "key": "ThisFactIsTrue",
                "cells": {},
                "collections": [],
                "id": "ec4d51eb-a599-4ed5-a439-bef95ae32bf4"
              },
              {
                "type": "comment",
                "text": "## ThisFactThrowsException",
                "id": "67d55bbe-e399-4a45-907c-18ced9d2d4a8"
              },
              {
                "key": "ThisFactThrowsException",
                "cells": {},
                "collections": [],
                "id": "b29c0206-4e6a-4c2e-ae74-61a184f52430"
              },
              {
                "type": "comment",
                "text": "## ThisLineAlwaysThrowsExceptions",
                "id": "e163137e-5ae6-444c-8d50-8d75e1963111"
              },
              {
                "key": "ThisLineAlwaysThrowsExceptions",
                "cells": {},
                "collections": [],
                "id": "203fde13-38c8-4ffd-9294-958ae1c4ad4a"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysFalse",
                "id": "d26f777f-0d2c-47ee-b7c0-1e0f35930a0c"
              },
              {
                "key": "ThisLineIsAlwaysFalse",
                "cells": {},
                "collections": [],
                "id": "077667c6-445e-4d5d-85d9-d0d886f41db4"
              },
              {
                "type": "comment",
                "text": "## ThisLineIsAlwaysTrue",
                "id": "4e578d9c-8574-4d54-a371-420b78b0ebb0"
              },
              {
                "key": "ThisLineIsAlwaysTrue",
                "cells": {},
                "collections": [],
                "id": "95eb4f88-e9f7-4768-abc3-0f57c79432d1"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "6729c0b0-2242-49a4-835e-797640336b55"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "14c665cb-5955-4646-9d66-e2850006680e"
              },
              {
                "type": "comment",
                "text": "## XplusYShouldBe",
                "id": "6ea85a91-bccc-4fb1-9cae-163ea6a53129"
              },
              {
                "key": "XplusYShouldBe",
                "cells": {
                  "x": "x",
                  "y": "y",
                  "sum": "sum"
                },
                "collections": [],
                "id": "22fb8bb8-f937-4980-87bf-cbdee08a4d79"
              }
            ],
            "activeCells": {},
            "id": "4bc2efae-7a7f-4bce-a8ef-a304292958d1"
          }
        ],
        "id": "53e3a8d5-9760-44bf-80a7-b4fcaabb5041"
      },
      "sampleMarkdown": "# Sample Specification for Sentence\r\n\r\n-> id = de79b0c5-372e-498e-b713-a70eb61120b7\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9588143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Sentence]\r\n|> BadGrammar one=one, two=two\r\n|> BadSentence name=name\r\n|> DivideBy operand=operand\r\n|> JustGo\r\n|> MultiplyThenAdd multiplier=multiplier, delta=delta\r\n|> StartWithTheNumber number=5\r\n|> Subtract operand=operand\r\n|> TheSumOf number1=number1, number2=number2, sum=NULL\r\n|> TheValueShouldBe number=number\r\n|> ThisFactIsFalse\r\n|> ThisFactIsTrue\r\n|> ThisFactThrowsException\r\n|> ThisLineAlwaysThrowsExceptions\r\n|> ThisLineIsAlwaysFalse\r\n|> ThisLineIsAlwaysTrue\r\n|> TODO message=message\r\n|> XplusYShouldBe x=x, y=y, sum=sum\r\n~~~\r\n",
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
                "id": "6899041f-1bf5-40a4-8f2d-1f78a4875bf0"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "a663907d-5d44-4ad0-a778-358ebb541b67"
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
                        "id": "f0cc6615-7070-450c-9dcd-f4cea2caa350"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "14be2d96-32fc-4e62-b1c6-c4164169f098"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "firstName": "firstName",
                          "lastName": "lastName"
                        },
                        "collections": [],
                        "id": "af756500-ae52-46be-9488-8ccac64b5692"
                      }
                    ],
                    "activeCells": {},
                    "id": "a42f34db-7657-47c7-853a-7f4824a851bf"
                  }
                ],
                "id": "42b79275-f700-4629-8236-85bbea6d12a0"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "3b62eac0-ad30-430a-8075-1005e5d2a638"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "a943e08f-6b22-4772-9f4c-a9f0845b415e"
              }
            ],
            "activeCells": {},
            "id": "65ec3db4-8976-4b6c-9383-253e1b0cc9e3"
          }
        ],
        "id": "200e9d80-7be3-4881-a878-40dfceb2a1b5"
      },
      "sampleMarkdown": "# Sample Specification for DataTable\r\n\r\n-> id = 768337dc-281f-4af8-8301-1be8c6546564\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9588143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[DataTable]\r\n|> TheDataIs\r\n    [Rows]\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n    |firstName|lastName|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "b635f592-832f-4f4e-814f-ea9de6c75d3e"
              },
              {
                "type": "comment",
                "text": "## AddName",
                "id": "d06f2539-91d8-47a0-829d-96b24325ca2b"
              },
              {
                "key": "AddName",
                "cells": {
                  "name": "name"
                },
                "collections": [],
                "id": "94062f2d-3885-4da7-841a-53bb227a42fa"
              },
              {
                "type": "comment",
                "text": "## InvoiceDetailsAre",
                "id": "ebb57bcc-ce2d-4e7e-8ccc-40487940798d"
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
                        "id": "1220c073-484f-4b22-8e7b-6fc7adf566c4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "6b1834bf-b16b-436c-924f-311a92aa624f"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "8d482ab2-bb80-4597-b419-1dbaf8b0b182"
                      }
                    ],
                    "activeCells": {},
                    "id": "c9559e63-c4d1-47c0-af20-9da56930e44c"
                  }
                ],
                "id": "44460098-eceb-412e-968f-54dada624fca"
              },
              {
                "type": "comment",
                "text": "## OrderedDetailsAre",
                "id": "90797ca2-0e89-493b-97df-50d9fde80043"
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
                        "id": "745e556f-3831-440c-b63f-15f8188a48c4"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "dff99274-9ef4-4b40-85f1-f55dc3e096c6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "100",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "0b063551-35e1-4352-b0df-bf463a3033a1"
                      }
                    ],
                    "activeCells": {},
                    "id": "c94b6faf-90bc-4f3e-9e3b-b2898e3509a5"
                  }
                ],
                "id": "00b95ab3-a99f-4824-95f5-e04e7e6f88c8"
              },
              {
                "type": "comment",
                "text": "## OrderedStringSet",
                "id": "d403b405-52c2-4c78-bd7b-d74adc3a84a8"
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
                        "id": "b4e20f1d-c97a-419f-b5d1-00c82b75ebeb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "275133d3-3700-4314-8a56-627a35e5762a"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "e30ecf08-b47c-4c18-a4b6-0863c4f51fe9"
                      }
                    ],
                    "activeCells": {},
                    "id": "3ae5ebb1-c7a4-4b72-b801-20514d0d0326"
                  }
                ],
                "id": "7dfd6c8d-8c52-49db-bece-a29773df7bf2"
              },
              {
                "type": "comment",
                "text": "## TheDataIs",
                "id": "e0a1120e-dd70-473c-aafb-8081bb37e390"
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
                        "id": "9f4f09b7-28c2-4c0e-860e-753bf37740f7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "45c89d13-ae09-4a85-900c-36c11dd694ee"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "name": "name"
                        },
                        "collections": [],
                        "id": "b3d56dca-71ee-4b9f-93ff-c6503e4d5ba3"
                      }
                    ],
                    "activeCells": {},
                    "id": "238f5ba0-2aa4-4f19-8aa7-663e7a9c80f4"
                  }
                ],
                "id": "2f08f7b5-b9ae-4289-8111-d664d1ee7bf4"
              },
              {
                "type": "comment",
                "text": "## ThrowsErrorOnDataFetch",
                "id": "304bd9a2-d7e3-4864-8ed6-bcaa9d783edf"
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
                        "id": "2540314f-db12-4940-943a-67a595fcfb71"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "76de30ca-5d3f-4589-bfb4-2d011da44b9d"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "25cc5f3d-8f21-4a04-9b13-71e29b980551"
                      }
                    ],
                    "activeCells": {},
                    "id": "3e8ac637-c9bf-4c80-a2ed-967046993486"
                  }
                ],
                "id": "8f9e31c0-66d6-4796-ba33-115b9a22aacc"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "3f73fb8c-a1d9-40f4-91c9-fa281e689a1c"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "7784ba0b-e5a0-4d83-8129-8db0e96da9ea"
              },
              {
                "type": "comment",
                "text": "## UnorderedDetailsAre",
                "id": "e3308fd8-b4a3-4209-8d77-9262607c1fec"
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
                        "id": "92df5bc5-4d39-4371-8190-69b13aea4901"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "0cca7c53-17fa-4bbb-be3a-1ea2b4654efc"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "Amount": "Amount",
                          "Date": "Date",
                          "Name": "Name"
                        },
                        "collections": [],
                        "id": "664921c0-a50a-4c61-9f6d-76c330944e99"
                      }
                    ],
                    "activeCells": {},
                    "id": "db15a575-6ebd-466e-b0b4-021f15c080d4"
                  }
                ],
                "id": "b2477f9e-3005-4b30-8f86-c45ecf8e911a"
              },
              {
                "type": "comment",
                "text": "## UnorderedStringSet",
                "id": "5594eb67-45c8-4682-a894-5292b6550da2"
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
                        "id": "cd45ce2b-5bc2-4e5a-810c-7ab204b59dc0"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "d3bfa38e-aa26-4e73-9609-e74570280562"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "expected": "expected"
                        },
                        "collections": [],
                        "id": "780fcccf-804b-41bc-8129-44c568184d74"
                      }
                    ],
                    "activeCells": {},
                    "id": "a4b46b2f-487d-4205-8e5a-6ea992abe5c5"
                  }
                ],
                "id": "499e0233-98dd-43a4-b550-1d99c3f91f53"
              }
            ],
            "activeCells": {},
            "id": "a65e7211-081a-4f38-82a3-3fec2a37fcfb"
          }
        ],
        "id": "5bfeb745-0c04-46b1-83d4-f665189c0de3"
      },
      "sampleMarkdown": "# Sample Specification for Sets\r\n\r\n-> id = 4529ffb8-54ae-4ae7-94fe-ded9da9e4950\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9608143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Sets]\r\n|> AddName name=name\r\n|> InvoiceDetailsAre\r\n    [Rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> OrderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n    |100   |Date|Name|\r\n\r\n|> OrderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n|> TheDataIs\r\n    [name]\r\n    |name|\r\n    |name|\r\n    |name|\r\n    |name|\r\n\r\n|> ThrowsErrorOnDataFetch\r\n    [rows]\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n    |Name|\r\n\r\n|> TODO message=message\r\n|> UnorderedDetailsAre\r\n    [rows]\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n    |Amount|Date|Name|\r\n\r\n|> UnorderedStringSet\r\n    [Rows]\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n    |expected|\r\n\r\n~~~\r\n",
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
                "id": "1ac0259f-72e8-4d35-863c-1e49ce06f424"
              },
              {
                "type": "comment",
                "text": "## ReadText",
                "id": "13dd3217-4122-48cb-b4bb-0626a8a15311"
              },
              {
                "key": "ReadText",
                "cells": {
                  "text": "text"
                },
                "collections": [],
                "id": "163736a4-8d2a-4654-9c90-7795d8d2a29b"
              },
              {
                "type": "comment",
                "text": "## Slow",
                "id": "2e8b7750-0dba-4c42-a672-fb7ec2948a27"
              },
              {
                "key": "Slow",
                "cells": {},
                "collections": [],
                "id": "bbb30ce3-fe02-438f-bdb7-99ae283c8406"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "900de79a-4ae3-426e-89ae-5f330154333b"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "4562e1d0-97fa-41ad-bdec-3d505799e073"
              }
            ],
            "activeCells": {},
            "id": "0b2925f6-51f2-45ec-9273-423cbb5381b3"
          }
        ],
        "id": "e998f975-dde2-4bf8-8977-8dd6c8301eb8"
      },
      "sampleMarkdown": "# Sample Specification for SometimesSlow\r\n\r\n-> id = 45e0d41e-bb5c-4ec0-80ec-ff60de935130\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9608143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[SometimesSlow]\r\n|> ReadText text=text\r\n|> Slow\r\n|> TODO message=message\r\n~~~\r\n",
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
                "id": "43beaf54-0ec7-4b7c-9243-b7c72d30c363"
              },
              {
                "type": "comment",
                "text": "## AfterThrowsError",
                "id": "a0ae3873-b184-462b-82c5-4dd36e350c1b"
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
                        "id": "b1d084e0-9076-45a9-91b1-b535a40b1439"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "e2eaa875-4f4a-4310-b51c-014554964deb"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "dcfc3a5f-e5fd-4fa4-bc6c-36d46602d50f"
                      }
                    ],
                    "activeCells": {},
                    "id": "1ba62b46-5a94-4d63-b985-6f87336dfa41"
                  }
                ],
                "id": "51667d74-72b6-462a-bb00-f6f760d6a4fc"
              },
              {
                "type": "comment",
                "text": "## BeforeThrowsError",
                "id": "a12a3e53-04a5-48d8-b215-2cf642a17f2f"
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
                        "id": "aad74696-ddc0-46e2-820c-9254d2ac52c9"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "5ee09383-0d98-4b66-864e-54ffa9ff6c61"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x"
                        },
                        "collections": [],
                        "id": "8aff3747-9b36-41e7-bf56-103bcf1672cd"
                      }
                    ],
                    "activeCells": {},
                    "id": "dcf4199b-a025-4068-9e90-57f7604b5f33"
                  }
                ],
                "id": "cf34f997-c75b-42e1-8eee-9c36ac4ff266"
              },
              {
                "type": "comment",
                "text": "## decisions",
                "id": "807ab106-416b-4913-aa6f-f22ee703d240"
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
                        "id": "08e251f0-848b-44d3-ac2b-85e96a83de41"
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
                        "id": "7faa460e-e7d4-4f1b-822b-fbac7547376d"
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
                        "id": "da78384a-9ef3-4d55-a488-37203a853789"
                      }
                    ],
                    "activeCells": {},
                    "id": "ca8f371f-6f3f-4e6a-8790-74a3cfe6c51d"
                  }
                ],
                "id": "6fd4ac39-b6ed-45aa-831f-f291309a703e"
              },
              {
                "type": "comment",
                "text": "## Divide",
                "id": "4ce7a165-8805-49da-97da-f92929742c0d"
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
                        "id": "868ec6fc-9f18-4d7e-b83d-4456b074f062"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "a1ba1ba7-df18-4a88-8bf2-a48182a2c513"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "product": "product"
                        },
                        "collections": [],
                        "id": "e5163293-f982-42ac-94fa-d64899d53bbe"
                      }
                    ],
                    "activeCells": {},
                    "id": "3ec1e509-8ad9-4ab8-9d7e-2b225b667822"
                  }
                ],
                "id": "d7aae2fd-a7b3-4400-86b3-b7c820e12811"
              },
              {
                "type": "comment",
                "text": "## IsPositive",
                "id": "ace17efa-321d-43d9-9e78-08895acd9afc"
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
                        "id": "a344e0e2-bd8a-4d28-9c86-67f0cb892876"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "2b86ffd8-537e-40ba-8bbf-62fcaae859d6"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "number": "number",
                          "IsEven": "true"
                        },
                        "collections": [],
                        "id": "b30ba5ab-fee8-4160-9ce9-67a5e7ed2ea2"
                      }
                    ],
                    "activeCells": {},
                    "id": "a97b6ed9-874c-4102-94de-30518d77d87b"
                  }
                ],
                "id": "8ea8fa8b-6824-4aef-83c5-2cc240d27ec6"
              },
              {
                "type": "comment",
                "text": "## Sum",
                "id": "81b7fe71-19c7-417c-b58e-a65259ce62d7"
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
                        "id": "bbf15c07-3743-4b1e-b0b4-fa709605145b"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "88ad9044-733b-437d-9615-37f0cf5d62c7"
                      },
                      {
                        "key": "row",
                        "cells": {
                          "x": "x",
                          "y": "y",
                          "sum": "sum"
                        },
                        "collections": [],
                        "id": "292130e6-f901-4499-a282-cde9ea9d12f6"
                      }
                    ],
                    "activeCells": {},
                    "id": "bf4359a3-fbaa-47c3-b161-1db80dd91249"
                  }
                ],
                "id": "9f140a2f-55ef-45b0-9d09-8e4467f722a1"
              },
              {
                "type": "comment",
                "text": "## TableWithLotsOfOptions",
                "id": "51b3bb1d-8c4c-40a6-bd3a-32824d3caa27"
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
                        "id": "aca88448-a4d6-43c4-b41f-175905ee13ab"
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
                        "id": "390743c7-8fb5-4c94-b417-35472a2a47c5"
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
                        "id": "94bd448a-2533-4105-83ce-c1b27c1e1e92"
                      }
                    ],
                    "activeCells": {},
                    "id": "c0aef11f-a896-468a-80b4-fa36f1ebb902"
                  }
                ],
                "id": "920cf244-de22-4826-896a-a16dba62f3b9"
              },
              {
                "type": "comment",
                "text": "## TODO",
                "id": "00226256-8e47-4931-aa11-2e2bcfaf7048"
              },
              {
                "key": "TODO",
                "cells": {
                  "message": "message"
                },
                "collections": [],
                "id": "1bf9b228-011e-48d7-a62a-ea6810fccb0e"
              }
            ],
            "activeCells": {},
            "id": "9cf2c592-f276-4cbb-ba7b-27b23609e101"
          }
        ],
        "id": "dfe815b5-8fc6-4446-82d1-e9f1fb699ffa"
      },
      "sampleMarkdown": "# Sample Specification for Table\r\n\r\n-> id = cc2602a6-cf52-4c43-87ff-bb19e0e37e5b\r\n-> lifecycle = Acceptance\r\n-> max-retries = 0\r\n-> last-updated = 2016-11-23T15:54:50.9618143-06:00\r\n-> expiration-period = 0\r\n-> tags = \r\n\r\n[Table]\r\n|> AfterThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> BeforeThrowsError\r\n    [Rows]\r\n    |x|\r\n    |x|\r\n    |x|\r\n    |x|\r\n\r\n|> decisions\r\n    [table]\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n    |FirstName|LastName|FullName|LastNameFirst|\r\n\r\n|> Divide\r\n    [Rows]\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n    |x|y|product|\r\n\r\n|> IsPositive\r\n    [table]\r\n    |number|IsEven|\r\n    |number|true  |\r\n    |number|true  |\r\n    |number|true  |\r\n\r\n|> Sum\r\n    [sum]\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n    |x|y|sum|\r\n\r\n|> TableWithLotsOfOptions\r\n    [table]\r\n    |a|b|c|d|e|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n    |a|2|3|4|5|\r\n\r\n|> TODO message=message\r\n~~~\r\n",
      "errors": [],
      "missing": false
    }
  ],
  "time": "11/23/2016 3:54 PM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}