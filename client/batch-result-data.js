module.exports = {
  "records": [
    {
      "results": {
        "results": [
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "20d8f466-3acb-4958-9828-3883b66ca76c",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.EmbeddedFixture.<.ctor>b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\EmbeddedFixture.cs:line 13\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
            "cells": [],
            "id": "errors",
            "spec": "embeds",
            "position": "before",
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
            "id": "bed7d39b-ac73-4093-8e1e-9c0db25fd1c5",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fd077e55-0f51-4540-bcc9-574b849bbb5c",
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
                "error": null,
                "cell": "returnValue",
                "id": null,
                "status": "success"
              }
            ],
            "id": "3a2aed17-1da8-4384-91b0-c6e333ca331f",
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
            "id": "7e5b6eff-9fcb-442b-8a38-d9794d7494c3",
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
            "id": "614d1a13-0e00-4c77-9154-bbb5779e8f22",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\MathFixture.cs:line 122\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.<Invoke>d__e.MoveNext() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 81\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
            "cells": [],
            "id": "d90c2cf1-e3d7-4d16-8cbd-224d089a0cd8",
            "spec": "embeds",
            "position": null,
            "type": "step-result"
          }
        ],
        "performance": [
          {
            "type": "Specification",
            "subject": "Embeds",
            "start": 0,
            "end": 190,
            "duration": 190
          },
          {
            "type": "Context",
            "subject": "Creation",
            "start": 4,
            "end": 8,
            "duration": 4
          },
          {
            "type": "Fixture",
            "subject": "Embedded:SetUp",
            "start": 177,
            "end": 181,
            "duration": 4
          },
          {
            "type": "Grammar",
            "subject": "ThrowAnExceptionOnTheNextEmbed",
            "start": 181,
            "end": 185,
            "duration": 4
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 185,
            "end": 186,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 186,
            "end": 186,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 186,
            "end": 187,
            "duration": 1
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 187,
            "end": 187,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "DoNotThrowAnExceptionOnTheNextEmbed",
            "start": 187,
            "end": 187,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "EmbeddedMath:Before",
            "start": 187,
            "end": 187,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Math:SetUp",
            "start": 187,
            "end": 187,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 187,
            "end": 187,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 187,
            "end": 188,
            "duration": 1
          },
          {
            "type": "Grammar",
            "subject": "Adding",
            "start": 188,
            "end": 188,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Throw",
            "start": 188,
            "end": 190,
            "duration": 2
          },
          {
            "type": "Fixture",
            "subject": "Math:TearDown",
            "start": 190,
            "end": 190,
            "duration": 0
          },
          {
            "type": "Fixture",
            "subject": "Embedded:TearDown",
            "start": 190,
            "end": 190,
            "duration": 0
          }
        ],
        "duration": 191,
        "logging": [
          {
            "html": "<pre class=\"debug-output\">EmbeddedFixture.Setup sent this debug message\r\n</pre>",
            "title": "Debug Output",
            "count": 1,
            "short_title": "Debug"
          },
          {
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.EmbeddedFixture.&lt;.ctor&gt;b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\EmbeddedFixture.cs:line 13\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>\n<pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.MathFixture.Throw() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\MathFixture.cs:line 122\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__e.MoveNext() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 81\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "2:43 PM",
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
        "steps": [
          {
            "key": "Embedded",
            "type": "section",
            "steps": [
              {
                "key": "ThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "20d8f466-3acb-4958-9828-3883b66ca76c"
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
                        "id": "bed7d39b-ac73-4093-8e1e-9c0db25fd1c5"
                      }
                    ],
                    "activeCells": {},
                    "id": "errors"
                  }
                ],
                "id": "73ba2f45-69d1-4f9b-a7f6-aaac24dd493f"
              },
              {
                "key": "DoNotThrowAnExceptionOnTheNextEmbed",
                "cells": {},
                "collections": [],
                "id": "fd077e55-0f51-4540-bcc9-574b849bbb5c"
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
                        "id": "3a2aed17-1da8-4384-91b0-c6e333ca331f"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "5",
                          "returnValue": "11"
                        },
                        "collections": [],
                        "id": "7e5b6eff-9fcb-442b-8a38-d9794d7494c3"
                      },
                      {
                        "key": "Adding",
                        "cells": {
                          "x": "5",
                          "y": "6",
                          "returnValue": "abc"
                        },
                        "collections": [],
                        "id": "614d1a13-0e00-4c77-9154-bbb5779e8f22"
                      },
                      {
                        "key": "Throw",
                        "cells": {},
                        "collections": [],
                        "id": "d90c2cf1-e3d7-4d16-8cbd-224d089a0cd8"
                      }
                    ],
                    "activeCells": {},
                    "id": "no-errors"
                  }
                ],
                "id": "95a0b7e5-9fd2-4c22-a299-57d4487de496"
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
            "id": "c0719038-a5d2-4be8-80e5-ae716aaff213",
            "spec": "general1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c0719038-a5d2-4be8-80e5-ae716aaff213",
            "spec": "general1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c0719038-a5d2-4be8-80e5-ae716aaff213",
            "spec": "general1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c0719038-a5d2-4be8-80e5-ae716aaff213",
            "spec": "general1",
            "position": "4",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c0719038-a5d2-4be8-80e5-ae716aaff213",
            "spec": "general1",
            "position": "5",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c0719038-a5d2-4be8-80e5-ae716aaff213",
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
            "id": "26d78797-3de9-4449-88a9-c817a17e7b16",
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
            "id": "26d78797-3de9-4449-88a9-c817a17e7b16",
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
            "id": "26d78797-3de9-4449-88a9-c817a17e7b16",
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
            "id": "e41f5f7c-06a0-4e60-ac49-6c2c035586fc",
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
            "id": "e41f5f7c-06a0-4e60-ac49-6c2c035586fc",
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
            "id": "e41f5f7c-06a0-4e60-ac49-6c2c035586fc",
            "spec": "general1",
            "position": "2",
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
            "end": 1,
            "duration": 1
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                "id": "c0719038-a5d2-4be8-80e5-ae716aaff213"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "2035 Ozark",
                  "Address2": "Apt 3",
                  "City": "Carthage"
                },
                "collections": [],
                "id": "26d78797-3de9-4449-88a9-c817a17e7b16"
              },
              {
                "key": "TheAddressShouldBe",
                "cells": {
                  "Address1": "wrong",
                  "Address2": "wrong",
                  "City": "wrong"
                },
                "collections": [],
                "id": "e41f5f7c-06a0-4e60-ac49-6c2c035586fc"
              }
            ],
            "activeCells": {},
            "id": "0abf2ce3-a2e5-4f79-be2e-5f484bee71c5"
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
            "id": "a865ec65-ab77-4d44-8827-cd96b97e87c1",
            "spec": "SometimesSlow",
            "position": null,
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                "id": "a865ec65-ab77-4d44-8827-cd96b97e87c1"
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
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "fullname",
                "id": null,
                "status": "success"
              }
            ],
            "id": "50f9eb3c-f2fa-40bd-b74d-1e094c8abaf3",
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
            "id": "631f2aa0-f27b-4548-add9-9d872b026746",
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
            "id": "99c89e41-57c8-4668-a0ad-abc3f33bf981",
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
            "id": "ffe799ae-3327-4d35-9319-148121a26bcb",
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
            "id": "b196727b-7791-4c14-bbe1-29b0901ef376",
            "spec": "general2",
            "position": null,
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                "id": "50f9eb3c-f2fa-40bd-b74d-1e094c8abaf3"
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
                        "id": "631f2aa0-f27b-4548-add9-9d872b026746"
                      },
                      {
                        "key": "table",
                        "cells": {
                          "first": "Harold",
                          "last": "Miller",
                          "fullname": "Harold Mueller"
                        },
                        "collections": [],
                        "id": "99c89e41-57c8-4668-a0ad-abc3f33bf981"
                      }
                    ],
                    "activeCells": {},
                    "id": "77db439d-be7b-4d9d-83c5-d6b920e52d62"
                  }
                ],
                "id": "79590487-963e-4691-bc79-a1d65169d0bb"
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
                        "id": "ffe799ae-3327-4d35-9319-148121a26bcb"
                      }
                    ],
                    "activeCells": {},
                    "id": "5998a6b4-e233-4b20-b5da-a5996ea0a17f"
                  }
                ],
                "id": "b4f33624-74b8-42bb-9bb5-b72ba95ba645"
              },
              {
                "key": "TheEnumOptionIs",
                "cells": {
                  "option": "FirstOption",
                  "selectedOption": "0"
                },
                "collections": [],
                "id": "b196727b-7791-4c14-bbe1-29b0901ef376"
              }
            ],
            "activeCells": {},
            "id": "adf14ae0-9672-4bc7-b09b-074899746a21"
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
            "id": "c8cef432-dddc-4abc-b4a8-0d5dce5fa849",
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
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#39;setup&#39; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#39;Service&#39; does not exist\r\n   at StoryTeller.Model.MissingFixture.SetUp() in z:\\code\\storyteller\\src\\StoryTeller\\Model\\MissingFixture.cs:line 15\r\n   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass2.&lt;toExecutionSteps&gt;b__0(ISpecContext x) in z:\\code\\storyteller\\src\\StoryTeller\\Model\\Section.cs:line 66\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass1.&lt;AsCritical&gt;b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 20\r\n   --- End of inner exception stack trace ---\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass1.&lt;AsCritical&gt;b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 32\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                "id": "c6577b30-0132-4892-9e58-c599875a2fde"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "5"
                },
                "collections": [],
                "id": "2db9b29d-ced3-44b5-b464-630beb18894f"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "6"
                },
                "collections": [],
                "id": "d8af0b90-eefc-49c1-97d9-54b92ccc3a7b"
              },
              {
                "key": "Check",
                "cells": {
                  "value": "7"
                },
                "collections": [],
                "id": "0fbec11d-3f54-49e9-bb3b-732938ea3499"
              },
              {
                "key": "Set",
                "cells": {
                  "value": "abc"
                },
                "collections": [],
                "id": "a1bc3026-2905-4616-aa28-db21ad5fc2b9"
              }
            ],
            "activeCells": {},
            "id": "c8cef432-dddc-4abc-b4a8-0d5dce5fa849"
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
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "Position",
                "id": null,
                "status": "success"
              }
            ],
            "id": "1bbcbc36-aaee-40c6-8573-b8d34deda985",
            "spec": "runtime-converter",
            "position": null,
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                        "id": "1bbcbc36-aaee-40c6-8573-b8d34deda985"
                      }
                    ],
                    "activeCells": {},
                    "id": "2e87da8f-d2bb-45a0-a375-39e38e3f9564"
                  }
                ],
                "id": "2ac1870c-8d98-4a0c-b71a-375f3ecf4eb1"
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
            "status": "error",
            "error": "Grammar 'BadGrammar1' is not implemented",
            "cells": [],
            "id": "a0e528a0-1165-4da0-9f35-02f58704456c",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar2' is not implemented",
            "cells": [],
            "id": "f7dd17f5-9219-43aa-a2d8-5c3be5da8b5d",
            "spec": "general4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "Grammar 'BadGrammar3' is not implemented",
            "cells": [],
            "id": "340144d0-5570-41e7-b83c-43ec0e512600",
            "spec": "general4",
            "position": null,
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
        "steps": [
          {
            "key": "Math",
            "type": "section",
            "steps": [
              {
                "key": "BadGrammar1",
                "cells": {},
                "collections": [],
                "id": "a0e528a0-1165-4da0-9f35-02f58704456c"
              },
              {
                "key": "BadGrammar2",
                "cells": {},
                "collections": [],
                "id": "f7dd17f5-9219-43aa-a2d8-5c3be5da8b5d"
              },
              {
                "key": "BadGrammar3",
                "cells": {},
                "collections": [],
                "id": "340144d0-5570-41e7-b83c-43ec0e512600"
              }
            ],
            "activeCells": {},
            "id": "64779d85-2722-431a-9f87-cfad00b34d78"
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
            "html": "<pre class=\"bg-warning\">StoryTeller.StorytellerCriticalException: Failed at position &#39;setup&#39; ---&gt; StoryTeller.Model.MissingFixtureException: Fixture with key &#39;FixtureThatDoesNotExist&#39; does not exist\r\n   at StoryTeller.Model.MissingFixture.SetUp() in z:\\code\\storyteller\\src\\StoryTeller\\Model\\MissingFixture.cs:line 15\r\n   at StoryTeller.Model.Section.&lt;&gt;c__DisplayClass2.&lt;toExecutionSteps&gt;b__0(ISpecContext x) in z:\\code\\storyteller\\src\\StoryTeller\\Model\\Section.cs:line 66\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass1.&lt;AsCritical&gt;b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 20\r\n   --- End of inner exception stack trace ---\r\n   at StoryTeller.Grammars.SilentAction.&lt;&gt;c__DisplayClass1.&lt;AsCritical&gt;b__0(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 32\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
            "id": "60c43aef-c750-46f6-a422-2286df12b597",
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
            "id": "60c43aef-c750-46f6-a422-2286df12b597",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "60c43aef-c750-46f6-a422-2286df12b597",
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
            "id": "60c43aef-c750-46f6-a422-2286df12b597",
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
            "id": "2787d625-169b-44f6-9dff-d1b702efc7e1",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2787d625-169b-44f6-9dff-d1b702efc7e1",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2787d625-169b-44f6-9dff-d1b702efc7e1",
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
            "id": "2787d625-169b-44f6-9dff-d1b702efc7e1",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fc5398d7-10e3-4c1e-b03a-420a96bf965e",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fc5398d7-10e3-4c1e-b03a-420a96bf965e",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "fc5398d7-10e3-4c1e-b03a-420a96bf965e",
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
            "id": "fc5398d7-10e3-4c1e-b03a-420a96bf965e",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cf7cc83c-b043-4061-8b8d-c49eeb245bff",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cf7cc83c-b043-4061-8b8d-c49eeb245bff",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "cf7cc83c-b043-4061-8b8d-c49eeb245bff",
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
            "id": "cf7cc83c-b043-4061-8b8d-c49eeb245bff",
            "spec": "paragraph1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "75f94fd0-c70f-458c-8a2d-cf96922de460",
            "spec": "paragraph1",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "75f94fd0-c70f-458c-8a2d-cf96922de460",
            "spec": "paragraph1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "75f94fd0-c70f-458c-8a2d-cf96922de460",
            "spec": "paragraph1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.<.ctor>b__3(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\CompositeFixture.cs:line 25\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
            "cells": [],
            "id": "75f94fd0-c70f-458c-8a2d-cf96922de460",
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
            "id": "75f94fd0-c70f-458c-8a2d-cf96922de460",
            "spec": "paragraph1",
            "position": "4",
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
            "subject": "AddAndCheck:0",
            "start": 0,
            "end": 3,
            "duration": 3
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndMultiplyThrow:2",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:2",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:0",
            "start": 3,
            "end": 3,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "AddAndCheck:1",
            "start": 3,
            "end": 4,
            "duration": 1
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
            "subject": "AddAndMultiplyThrow:3",
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
            "html": "<pre class=\"debug-output\">the number is 5\r\nthe number is 50\r\nthe number is 54\r\nthe number is 540\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nthe number is 3\r\nthe number is 5\r\nthe number is 20\r\n</pre>",
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.CompositeFixture.&lt;.ctor&gt;b__3(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\CompositeFixture.cs:line 25\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                "id": "60c43aef-c750-46f6-a422-2286df12b597"
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
                        "id": "2787d625-169b-44f6-9dff-d1b702efc7e1"
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
                        "id": "fc5398d7-10e3-4c1e-b03a-420a96bf965e"
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
                        "id": "cf7cc83c-b043-4061-8b8d-c49eeb245bff"
                      }
                    ],
                    "activeCells": {},
                    "id": "171dd0dd-c30a-47ee-9ee6-cf43025a3088"
                  }
                ],
                "id": "a7773d47-2a2e-4662-97f7-913f98c74f3a"
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
                "id": "75f94fd0-c70f-458c-8a2d-cf96922de460"
              }
            ],
            "activeCells": {},
            "id": "5351e34f-4d1e-4cc3-a5e7-f805989bea2e"
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
            "id": "0ecf9c6e-8020-4c33-b612-78eb31489347",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0ecf9c6e-8020-4c33-b612-78eb31489347",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "0ecf9c6e-8020-4c33-b612-78eb31489347",
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
            "id": "0ecf9c6e-8020-4c33-b612-78eb31489347",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6b551dc1-dab3-4e5e-ae71-c097d9ce9949",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6b551dc1-dab3-4e5e-ae71-c097d9ce9949",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6b551dc1-dab3-4e5e-ae71-c097d9ce9949",
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
            "id": "6b551dc1-dab3-4e5e-ae71-c097d9ce9949",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38282469-2c7d-419c-8538-ba797c829d84",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38282469-2c7d-419c-8538-ba797c829d84",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "38282469-2c7d-419c-8538-ba797c829d84",
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
            "id": "38282469-2c7d-419c-8538-ba797c829d84",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "08049308-a231-404c-8732-ce3a0ff09ccf",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "08049308-a231-404c-8732-ce3a0ff09ccf",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "08049308-a231-404c-8732-ce3a0ff09ccf",
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
            "id": "08049308-a231-404c-8732-ce3a0ff09ccf",
            "spec": "paragraph2",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3b0d06be-6da6-49d1-b7f8-d027c39f23b3",
            "spec": "paragraph2",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3b0d06be-6da6-49d1-b7f8-d027c39f23b3",
            "spec": "paragraph2",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "3b0d06be-6da6-49d1-b7f8-d027c39f23b3",
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
            "id": "3b0d06be-6da6-49d1-b7f8-d027c39f23b3",
            "spec": "paragraph2",
            "position": "3",
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
            "html": "<pre class=\"debug-output\">the number is 5\r\nthe number is 8\r\nthe number is 80\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nthe number is 3\r\nthe number is 7\r\nthe number is 70\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\nthe number is 5\r\nthe number is 8\r\nthe number is 80\r\n</pre>",
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                "id": "0ecf9c6e-8020-4c33-b612-78eb31489347"
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
                "id": "6b551dc1-dab3-4e5e-ae71-c097d9ce9949"
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
                        "id": "38282469-2c7d-419c-8538-ba797c829d84"
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
                        "id": "08049308-a231-404c-8732-ce3a0ff09ccf"
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
                        "id": "3b0d06be-6da6-49d1-b7f8-d027c39f23b3"
                      }
                    ],
                    "activeCells": {},
                    "id": "62a4b278-7fea-4f57-ae81-626dee6a0209"
                  }
                ],
                "id": "d7009898-5889-4441-951b-f6faf5116ac6"
              }
            ],
            "activeCells": {},
            "id": "627f568f-4c13-4d1a-a89d-e12974614924"
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
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "returnValue",
                "id": null,
                "status": "success"
              }
            ],
            "id": "08b460e9-8f44-4185-8b4a-20cb603d5319",
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
            "id": "ab49935b-49ee-4873-b2d4-930e2e5de4a5",
            "spec": "sentence1",
            "position": null,
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                "id": "08b460e9-8f44-4185-8b4a-20cb603d5319"
              },
              {
                "key": "AddTo5",
                "cells": {
                  "x": "5",
                  "returnValue": "9",
                  "y": "5"
                },
                "collections": [],
                "id": "ab49935b-49ee-4873-b2d4-930e2e5de4a5"
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
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.<.ctor>b__2() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 64\r\n   at StoryTeller.Fixture.FactExpression.<>c__DisplayClass28.<VerifiedBy>b__27(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 314\r\n   at StoryTeller.Grammars.FactGrammar.PerformTest(StepValues values, ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 36\r\n   at StoryTeller.Grammars.FactPlan.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 63\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38",
            "cells": [],
            "id": "3",
            "spec": "sentence2",
            "position": null,
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.&lt;.ctor&gt;b__2() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 64\r\n   at StoryTeller.Fixture.FactExpression.&lt;&gt;c__DisplayClass28.&lt;VerifiedBy&gt;b__27(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 314\r\n   at StoryTeller.Grammars.FactGrammar.PerformTest(StepValues values, ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 36\r\n   at StoryTeller.Grammars.FactPlan.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\FactPlan.cs:line 63\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 4,
        "aborted": false,
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "returnValue",
                "id": null,
                "status": "success"
              }
            ],
            "id": "162b9259-bd6e-4ccf-99f8-bd6606276ddb",
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
            "id": "7181b424-b333-4f29-a489-66afbbee2e01",
            "spec": "sentence3",
            "position": null,
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                "id": "162b9259-bd6e-4ccf-99f8-bd6606276ddb"
              },
              {
                "key": "AddingTo5",
                "cells": {
                  "y": "12",
                  "returnValue": "15",
                  "x": "5"
                },
                "collections": [],
                "id": "7181b424-b333-4f29-a489-66afbbee2e01"
              }
            ],
            "activeCells": {},
            "id": "b2b187ea-a9a9-4181-8bcb-0aa1d86d3b5f"
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
            "id": "63f9737b-3ea2-4f2a-aaa6-495e7d1e99c0",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "7d6aab07-9a6e-40fa-adf1-0d72d94a2a51",
            "spec": "sentence4",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "587cfdb7-64ef-40c3-96ae-7d777793f04e",
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
            "id": "eece218c-31a0-444a-abd1-07cebffa735d",
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
            "html": "<pre class=\"debug-output\">the number is 5\r\nthe number is 19\r\nthe number is 17\r\n</pre>",
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
            "html": "<pre class=\"bg-warning\">System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; StoryTeller.StorytellerAssertionException: No go!\r\n   at StoryTeller.StoryTellerAssert.Fail(String message) in z:\\code\\storyteller\\src\\StoryTeller\\StoryTellerAssert.cs:line 17\r\n   at StoryTeller.Samples.Fixtures.SentenceFixture.ThisLineAlwaysThrowsExceptions() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SentenceFixture.cs:line 133\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.Reflection.MethodInvocation.&lt;Invoke&gt;d__e.MoveNext() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Reflection\\MethodInvocation.cs:line 81\r\n   at System.Linq.Buffer`1..ctor(IEnumerable`1 source)\r\n   at System.Linq.Enumerable.ToArray[TSource](IEnumerable`1 source)\r\n   at StoryTeller.Grammars.LineStep.execute(ISpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LinePlan.cs:line 20\r\n   at StoryTeller.Grammars.LineStepBase.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\LineStepBase.cs:line 38</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                "id": "63f9737b-3ea2-4f2a-aaa6-495e7d1e99c0"
              },
              {
                "key": "MultiplyThenAdd",
                "cells": {
                  "multiplier": "3",
                  "delta": "4"
                },
                "collections": [],
                "id": "7d6aab07-9a6e-40fa-adf1-0d72d94a2a51"
              },
              {
                "key": "Subtract",
                "cells": {
                  "operand": "2"
                },
                "collections": [],
                "id": "587cfdb7-64ef-40c3-96ae-7d777793f04e"
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
                "id": "eece218c-31a0-444a-abd1-07cebffa735d"
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
            "id": "feecac00-bda6-4b12-ac55-a5b7009c8445",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "feecac00-bda6-4b12-ac55-a5b7009c8445",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "feecac00-bda6-4b12-ac55-a5b7009c8445",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a9778a23-52f0-45ee-92e8-88ecbac6bf97",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a9778a23-52f0-45ee-92e8-88ecbac6bf97",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a9778a23-52f0-45ee-92e8-88ecbac6bf97",
            "spec": "set1",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "675f675f-409c-457b-b3f4-bd2167bb45b9",
            "spec": "set1",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "675f675f-409c-457b-b3f4-bd2167bb45b9",
            "spec": "set1",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "675f675f-409c-457b-b3f4-bd2167bb45b9",
            "spec": "set1",
            "position": "3",
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
              "78960c2b-b8c8-446d-ab46-c442d60a452f",
              "3b437390-3ec6-4447-8f98-1d50894fc437"
            ],
            "missing": [],
            "extras": [
              {
                "Amount": 300.3,
                "Date": "2015-09-04T00:00:00-05:00",
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
              "f0e0895c-9f7b-4f57-8872-9d664dd62ff4",
              "94b1363f-e94a-4abc-a152-cfa67d9d8cad",
              "5261c6b5-0f7c-4f02-a93b-29154aa82751"
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                        "id": "feecac00-bda6-4b12-ac55-a5b7009c8445"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "Name": "Drill",
                          "Amount": "200.2",
                          "Date": "TODAY+1"
                        },
                        "collections": [],
                        "id": "a9778a23-52f0-45ee-92e8-88ecbac6bf97"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "Name": "Hammer",
                          "Amount": "300.3",
                          "Date": "TODAY+2"
                        },
                        "collections": [],
                        "id": "675f675f-409c-457b-b3f4-bd2167bb45b9"
                      }
                    ],
                    "activeCells": {},
                    "id": "82ec6228-3073-4911-9e7a-a403649e2c4b"
                  }
                ],
                "id": "569d4ca6-95fe-4006-ad25-55f389895328"
              },
              {
                "text": "Completely successful ordering",
                "type": "comment",
                "id": "7fa17d35-a674-4dcb-85c2-e455083d91e8"
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
                "id": "f79415e8-e6e8-42ab-8307-271906707e00"
              },
              {
                "text": "Out of order",
                "type": "comment",
                "id": "94c5fbb8-ef30-43ae-9324-8955363349d5"
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
                "id": "aa3ed8b7-16de-416e-bda7-8421450f3dfe"
              },
              {
                "text": "Should have one exra",
                "type": "comment",
                "id": "77f95818-9b3b-449b-8a32-20e97e8399f8"
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
                        "id": "78960c2b-b8c8-446d-ab46-c442d60a452f"
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
                        "id": "3b437390-3ec6-4447-8f98-1d50894fc437"
                      }
                    ],
                    "activeCells": {},
                    "id": "9"
                  }
                ],
                "id": "67297960-e499-48eb-aed4-0166d1cdd245"
              },
              {
                "text": "Should mark one expected result as missing",
                "type": "comment",
                "id": "4b84c1ed-39ce-46b6-8b3b-e12bf0a589c1"
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
                        "id": "f0e0895c-9f7b-4f57-8872-9d664dd62ff4"
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
                        "id": "94b1363f-e94a-4abc-a152-cfa67d9d8cad"
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
                        "id": "5261c6b5-0f7c-4f02-a93b-29154aa82751"
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
                "id": "50cb1f6f-d31c-4cfb-8ddf-15e75eb4e642"
              },
              {
                "text": "One syntax error",
                "type": "comment",
                "id": "3b0b24f2-2f11-4f0b-9746-eb8e3f0fdfb3"
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
                        "id": "c7f31a4d-52ac-4c2f-9248-42d2bfa16ad1"
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
                        "id": "399ab197-9f63-4529-9a3a-daa04a02a793"
                      }
                    ],
                    "activeCells": {},
                    "id": "feb6e99f-caa9-4d42-b516-f956729eb4a0"
                  }
                ],
                "id": "12531c57-aabc-4db1-9e92-03f3456201d1"
              }
            ],
            "activeCells": {},
            "id": "45fda07f-ca6c-4645-ac1d-becd55b3bfba"
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
            "id": "2f48ac5a-48e6-4c4f-b41c-540d88628bd3",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "44c7338b-9e6f-4ed3-9bd8-c16e3a832a08",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "56eea655-12fa-4a51-b83c-b83c87e97452",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "bef21a3a-4f9c-4c7a-9a8d-7cc46e9fef82",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "2eb6e21d-a69c-4d26-a3e7-495e4845f5e3",
            "spec": "set2",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set2",
            "matches": [
              "357d73db-61fa-4348-a334-35d5d77cbabe",
              "e00aae64-36f5-46cf-b510-639716f50b34",
              "353b9d6e-1047-4e6c-bd2d-72e8a5e0166e",
              "44f17774-5283-425a-a4d3-efd88d5877fc",
              "73e4cb81-1bd2-4aea-9fae-43c0367c6ea6"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "7f45d7bb-3702-474a-ae46-0645075265f6",
            "type": "set-verification-result"
          },
          {
            "spec": "set2",
            "matches": [
              "037e1a24-8e8a-4cdf-95b5-513b164f861d",
              "076feb49-67e0-4971-b3e5-d11b4e6834bb",
              "a62b8447-0a18-4e48-8483-ada3f7f79415",
              "ba78085c-44ac-4c5e-859a-31b284ad9916",
              "40411d27-3fad-4921-9a5d-58cb9a316c1b"
            ],
            "missing": [],
            "extras": [],
            "wrongOrdered": [],
            "id": "f9a407ac-039a-4e8e-b763-112f11f39d27",
            "type": "set-verification-result"
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
            "end": 2,
            "duration": 1
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                        "id": "2f48ac5a-48e6-4c4f-b41c-540d88628bd3"
                      },
                      {
                        "key": "name",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "44c7338b-9e6f-4ed3-9bd8-c16e3a832a08"
                      },
                      {
                        "key": "name",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "56eea655-12fa-4a51-b83c-b83c87e97452"
                      },
                      {
                        "key": "name",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "bef21a3a-4f9c-4c7a-9a8d-7cc46e9fef82"
                      },
                      {
                        "key": "name",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "2eb6e21d-a69c-4d26-a3e7-495e4845f5e3"
                      }
                    ],
                    "activeCells": {},
                    "id": "6b2156bf-6adb-421e-84f8-a749f023dd4e"
                  }
                ],
                "id": "1653ab90-58c0-426b-933a-ac69b86c71d8"
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
                        "id": "357d73db-61fa-4348-a334-35d5d77cbabe"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "e00aae64-36f5-46cf-b510-639716f50b34"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "353b9d6e-1047-4e6c-bd2d-72e8a5e0166e"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Kevin",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "44f17774-5283-425a-a4d3-efd88d5877fc"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "73e4cb81-1bd2-4aea-9fae-43c0367c6ea6"
                      }
                    ],
                    "activeCells": {},
                    "id": "7f45d7bb-3702-474a-ae46-0645075265f6"
                  }
                ],
                "id": "cf749071-8d5a-4120-962a-149436dc2937"
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
                        "id": "037e1a24-8e8a-4cdf-95b5-513b164f861d"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Chad",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "076feb49-67e0-4971-b3e5-d11b4e6834bb"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Jeremy",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "a62b8447-0a18-4e48-8483-ada3f7f79415"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Josh",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "ba78085c-44ac-4c5e-859a-31b284ad9916"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "expected": "Gary",
                          "Index": ""
                        },
                        "collections": [],
                        "id": "40411d27-3fad-4921-9a5d-58cb9a316c1b"
                      }
                    ],
                    "activeCells": {},
                    "id": "f9a407ac-039a-4e8e-b763-112f11f39d27"
                  }
                ],
                "id": "9cee4bab-165a-4d2b-a272-6deca90a5940"
              }
            ],
            "activeCells": {},
            "id": "fe9012fc-23bc-49d3-b310-6833c110e597"
          }
        ],
        "id": "set2"
      }
    },
    {
      "results": {
        "results": [
          {
            "status": "error",
            "error": "System.AggregateException: One or more errors occurred. ---> System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<ThrowsErrorOnDataFetch>b__11() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.<>c__DisplayClass21`1.<VerifySetOf>b__20(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 493\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3.<Fetch>b__0() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 50\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---> (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.<ThrowsErrorOnDataFetch>b__11() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.<>c__DisplayClass21`1.<VerifySetOf>b__20(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 493\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.<>c__DisplayClass3.<Fetch>b__0() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 50\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()<---\r\n",
            "cells": [],
            "id": "1",
            "spec": "set3",
            "position": "before",
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
          },
          {
            "html": "<pre class=\"bg-warning\">System.AggregateException: One or more errors occurred. ---&gt; System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;ThrowsErrorOnDataFetch&gt;b__11() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass21`1.&lt;VerifySetOf&gt;b__20(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 493\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3.&lt;Fetch&gt;b__0() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 50\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()\r\n   --- End of inner exception stack trace ---\r\n---&gt; (Inner Exception #0) System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.SetsFixture.&lt;ThrowsErrorOnDataFetch&gt;b__11() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\SetsFixture.cs:line 89\r\n   at StoryTeller.Fixture.&lt;&gt;c__DisplayClass21`1.&lt;VerifySetOf&gt;b__20(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Fixture.cs:line 493\r\n   at StoryTeller.Grammars.Sets.ObjectComparison`1.&lt;&gt;c__DisplayClass3.&lt;Fetch&gt;b__0() in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Sets\\ObjectComparison.cs:line 50\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.Tasks.Task.Execute()&lt;---\r\n</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 1,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                        "id": "848bac88-e5ef-441e-b824-4f35ab83c9e8"
                      },
                      {
                        "key": "rows",
                        "cells": {
                          "Name": "b"
                        },
                        "collections": [],
                        "id": "a8542e97-968b-400c-a889-82e66c23b86e"
                      },
                      {
                        "key": "rows",
                        "cells": {
                          "Name": "c"
                        },
                        "collections": [],
                        "id": "f68a43a1-dbfc-4a76-8072-cb63e9b7d3d5"
                      }
                    ],
                    "activeCells": {},
                    "id": "1"
                  }
                ],
                "id": "259707fc-0584-4950-823d-b96373be34ad"
              }
            ],
            "activeCells": {},
            "id": "84df70c5-c15e-47cf-97ad-38a115f42240"
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
            "id": "351e2d17-2809-4188-a030-e460a9e88e1e",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "351e2d17-2809-4188-a030-e460a9e88e1e",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "351e2d17-2809-4188-a030-e460a9e88e1e",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eca51e6f-42e0-471f-b88c-29e15166aa74",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eca51e6f-42e0-471f-b88c-29e15166aa74",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eca51e6f-42e0-471f-b88c-29e15166aa74",
            "spec": "set4",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad6ec9f3-ca78-400a-b2e3-d66dd68a7dc2",
            "spec": "set4",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad6ec9f3-ca78-400a-b2e3-d66dd68a7dc2",
            "spec": "set4",
            "position": "2",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "ad6ec9f3-ca78-400a-b2e3-d66dd68a7dc2",
            "spec": "set4",
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
                "cell": "Amount",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "436384f9-98d9-4e4a-b65f-d76efa44fcba",
            "spec": "set4",
            "position": null,
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                        "id": "351e2d17-2809-4188-a030-e460a9e88e1e"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "Amount": "200.2",
                          "Date": "TODAY+1",
                          "Name": "Drill"
                        },
                        "collections": [],
                        "id": "eca51e6f-42e0-471f-b88c-29e15166aa74"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "ad6ec9f3-ca78-400a-b2e3-d66dd68a7dc2"
                      }
                    ],
                    "activeCells": {},
                    "id": "8c247026-c2d3-4b1b-9aeb-c871f536419e"
                  }
                ],
                "id": "6339f212-5075-40aa-83f2-ec1867c0eb26"
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
                        "id": "436384f9-98d9-4e4a-b65f-d76efa44fcba"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "Amount": "300.3",
                          "Date": "TODAY+2",
                          "Name": "Hammer"
                        },
                        "collections": [],
                        "id": "f7113260-2663-425a-abcd-838142de6127"
                      }
                    ],
                    "activeCells": {},
                    "id": "19140569-dd2f-4464-8b85-772b5ca5467a"
                  }
                ],
                "id": "f66596f4-8e8a-4d91-8260-fe841b35c1f4"
              }
            ],
            "activeCells": {},
            "id": "e41a2f50-1051-4f86-9e4e-eb5bcd23e9c0"
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
            "id": "1e94fc81-b036-4215-9a10-d7929dd05724",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a256f264-a328-4897-8b8c-02889e7d4f19",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "4ba707ca-eb53-4e4a-b858-e7dfbdfab950",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "eda80fcb-e0c6-4070-90e0-53c393bb44c5",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "8da930cf-28f2-4a9a-b483-8e307d9bce87",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "dff11e04-7475-4e4f-8eaa-9800ef0597a9",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "6be64e70-1eb0-4c31-87d5-949860595851",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "5a897f79-e535-4b0f-88e1-49a91e512933",
            "spec": "set5",
            "position": null,
            "type": "step-result"
          },
          {
            "spec": "set5",
            "matches": [
              "f3146ea0-cae1-4761-8d96-ca1dc605ea3b",
              "7c4ead63-0a31-4be0-8d1b-795b86466d44",
              "a35f1c1b-6abc-436c-ae68-f3be93e59b39",
              "5b9b4c9a-0917-45cd-aac8-f21853e9b096"
            ],
            "missing": [
              "3f21a66d-e34c-42eb-b170-623cdf48952c"
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
                "id": "8e9f6149-791d-4a82-8fc5-68c1ad46f6b7"
              },
              {
                "actual": 4,
                "id": "86ff05bd-567b-4de7-a634-b9f587773f2e"
              }
            ],
            "id": "4f091fff-8c47-4a91-90c4-19c01477dddb",
            "type": "set-verification-result"
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                        "id": "1e94fc81-b036-4215-9a10-d7929dd05724"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Josh"
                        },
                        "collections": [],
                        "id": "a256f264-a328-4897-8b8c-02889e7d4f19"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Gary"
                        },
                        "collections": [],
                        "id": "4ba707ca-eb53-4e4a-b858-e7dfbdfab950"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Kevin"
                        },
                        "collections": [],
                        "id": "eda80fcb-e0c6-4070-90e0-53c393bb44c5"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Chad"
                        },
                        "collections": [],
                        "id": "8da930cf-28f2-4a9a-b483-8e307d9bce87"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Rand"
                        },
                        "collections": [],
                        "id": "dff11e04-7475-4e4f-8eaa-9800ef0597a9"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Perrin"
                        },
                        "collections": [],
                        "id": "6be64e70-1eb0-4c31-87d5-949860595851"
                      },
                      {
                        "key": "TheDataIs-row",
                        "cells": {
                          "name": "Mat"
                        },
                        "collections": [],
                        "id": "5a897f79-e535-4b0f-88e1-49a91e512933"
                      }
                    ],
                    "activeCells": {},
                    "id": "61c521ec-1d41-4492-b00c-695d8cc4440b"
                  }
                ],
                "id": "c8586fcc-9d66-4b59-bc55-17d9ed9976d4"
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
                        "id": "f3146ea0-cae1-4761-8d96-ca1dc605ea3b"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Josh"
                        },
                        "collections": [],
                        "id": "7c4ead63-0a31-4be0-8d1b-795b86466d44"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Gary"
                        },
                        "collections": [],
                        "id": "a35f1c1b-6abc-436c-ae68-f3be93e59b39"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Chad"
                        },
                        "collections": [],
                        "id": "8e9f6149-791d-4a82-8fc5-68c1ad46f6b7"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Kevin"
                        },
                        "collections": [],
                        "id": "86ff05bd-567b-4de7-a634-b9f587773f2e"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Egwene"
                        },
                        "collections": [],
                        "id": "3f21a66d-e34c-42eb-b170-623cdf48952c"
                      },
                      {
                        "key": "OrderedStringSet-row",
                        "cells": {
                          "expected": "Perrin"
                        },
                        "collections": [],
                        "id": "5b9b4c9a-0917-45cd-aac8-f21853e9b096"
                      }
                    ],
                    "activeCells": {},
                    "id": "4f091fff-8c47-4a91-90c4-19c01477dddb"
                  }
                ],
                "id": "fa8d447a-ec69-4e60-a840-e645d8c26900"
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
            "cells": [
              {
                "actual": null,
                "error": null,
                "cell": "IsEven",
                "id": null,
                "status": "success"
              }
            ],
            "id": "a5f4e7b3-d352-4bdf-8e92-02c93691ace7",
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
            "id": "a2d6e4ef-ad3f-4394-aed5-51fa906d3df1",
            "spec": "table1",
            "position": null,
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                        "id": "a5f4e7b3-d352-4bdf-8e92-02c93691ace7"
                      },
                      {
                        "key": "IsPositive-row",
                        "cells": {
                          "number": "-5",
                          "IsEven": "false"
                        },
                        "collections": [],
                        "id": "a2d6e4ef-ad3f-4394-aed5-51fa906d3df1"
                      }
                    ],
                    "activeCells": {},
                    "id": "a481d76f-66ae-464f-8c6f-2739e4c39d3e"
                  }
                ],
                "id": "03363fe9-5ec0-4bfc-bc75-2bf88fdd03ff"
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
            "id": "e7e14826-3f2a-4178-8300-23b7190e1dec",
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
            "id": "976d63d0-11e7-4bf9-a828-7c25c11e5e39",
            "spec": "table2",
            "position": null,
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                        "id": "f0e8be72-e1d3-49a4-9698-cb5e59d4aaf5"
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
                        "id": "3b9a6ca6-6beb-4609-9402-5a6a9d2651f4"
                      }
                    ],
                    "activeCells": {},
                    "id": "bbf9f8e5-8f2b-43af-abc1-dda473548d7d"
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
                        "id": "e7e14826-3f2a-4178-8300-23b7190e1dec"
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
                        "id": "976d63d0-11e7-4bf9-a828-7c25c11e5e39"
                      }
                    ],
                    "activeCells": {},
                    "id": "ce2cc598-d4bb-4f79-9d14-0c94e1629c01"
                  }
                ],
                "id": "1c13c47e-94e5-40f8-a2a2-d2db4484c4d2"
              }
            ],
            "activeCells": {},
            "id": "52388717-bad4-4038-9163-8a0cf2a99ed1"
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
            "id": "8aed6e14-2801-45ff-9b1c-c828cc3520c4",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "82efa494-4be0-4e70-820c-2bb734c27c14",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "c9c165f8-5613-4962-a2cf-92e2339794bb",
            "spec": "table3",
            "position": null,
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e82aac35-5a79-4eec-821c-35907d9e36c3",
            "spec": "table3",
            "position": null,
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                        "id": "8aed6e14-2801-45ff-9b1c-c828cc3520c4"
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
                        "id": "82efa494-4be0-4e70-820c-2bb734c27c14"
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
                        "id": "c9c165f8-5613-4962-a2cf-92e2339794bb"
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
                        "id": "e82aac35-5a79-4eec-821c-35907d9e36c3"
                      }
                    ],
                    "activeCells": {
                      "b": false,
                      "c": false
                    },
                    "id": "3c402eda-44ab-48b2-bc1e-e83730c123cf"
                  }
                ],
                "id": "cf25e441-afaa-4bb1-b1e4-3a688de73da2"
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
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<BeforeThrowsError>b__5() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 39\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass2.<Before>b__1(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 65\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
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
            "id": "260754f6-e351-441b-8a96-d49ff684a081",
            "spec": "table4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "e53ccfda-917a-4d0c-bc1a-f2735fc1f464",
            "spec": "table4",
            "position": "0",
            "type": "step-result"
          },
          {
            "status": "error",
            "error": "System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.<AfterThrowsError>b__b() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 46\r\n   at StoryTeller.Grammars.Tables.TableGrammar.<>c__DisplayClass5.<After>b__4(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 76\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89",
            "cells": [],
            "id": "after",
            "spec": "table4",
            "position": "after",
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
            "start": 1,
            "end": 2,
            "duration": 1
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
            "html": "<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.&lt;BeforeThrowsError&gt;b__5() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 39\r\n   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass2.&lt;Before&gt;b__1(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 65\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>\n<pre class=\"bg-warning\">System.NotImplementedException: The method or operation is not implemented.\r\n   at StoryTeller.Samples.Fixtures.TableFixture.&lt;AfterThrowsError&gt;b__b() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\TableFixture.cs:line 46\r\n   at StoryTeller.Grammars.Tables.TableGrammar.&lt;&gt;c__DisplayClass5.&lt;After&gt;b__4(ISpecContext c) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\Tables\\TableGrammar.cs:line 76\r\n   at StoryTeller.Grammars.SilentAction.Execute(SpecContext context) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\SilentAction.cs:line 89</pre>",
            "title": "Logged Exceptions in Storyteller",
            "count": 2,
            "short_title": "Exceptions"
          }
        ],
        "attempts": 1,
        "aborted": false,
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
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
                        "id": "260754f6-e351-441b-8a96-d49ff684a081"
                      }
                    ],
                    "activeCells": {},
                    "id": "before"
                  }
                ],
                "id": "90a00b3e-9ff4-4aba-af34-cd1880b2bd65"
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
                        "id": "e53ccfda-917a-4d0c-bc1a-f2735fc1f464"
                      }
                    ],
                    "activeCells": {},
                    "id": "after"
                  }
                ],
                "id": "22ca136d-48fe-42ce-825c-decb05aa8097"
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
            "id": "9aa337f1-8141-467b-aa28-a30d35828e9c",
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
            "id": "c370ec49-61d8-4968-bbe8-8e8de28116e1",
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
            "cells": [
              {
                "actual": null,
                "error": "Invalid Format",
                "cell": "x",
                "id": null,
                "status": "invalid"
              }
            ],
            "id": "88f5a6c1-0e92-4cbc-aeae-4255cd223ec2",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "88f5a6c1-0e92-4cbc-aeae-4255cd223ec2",
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
            "id": "88f5a6c1-0e92-4cbc-aeae-4255cd223ec2",
            "spec": "table5",
            "position": "3",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a66fd3ad-7758-42d9-a7d4-5b6b61aaf0fc",
            "spec": "table5",
            "position": "1",
            "type": "step-result"
          },
          {
            "status": "ok",
            "error": null,
            "cells": [],
            "id": "a66fd3ad-7758-42d9-a7d4-5b6b61aaf0fc",
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
            "id": "a66fd3ad-7758-42d9-a7d4-5b6b61aaf0fc",
            "spec": "table5",
            "position": "3",
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
            "end": 0,
            "duration": 0
          },
          {
            "type": "Grammar",
            "subject": "Divide:Row:3",
            "start": 0,
            "end": 3,
            "duration": 3
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
        "time": "2:43 PM",
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
        "last-updated": "Wednesday, September 02, 2015",
        "steps": [
          {
            "key": "Table",
            "type": "section",
            "steps": [
              {
                "text": "Table by the ExposeAsTable attribute",
                "type": "comment",
                "id": "daa5135d-df87-45f4-b861-ca82fdba5214"
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
                        "id": "9aa337f1-8141-467b-aa28-a30d35828e9c"
                      },
                      {
                        "key": "sum",
                        "cells": {
                          "x": "2",
                          "y": "2",
                          "sum": "5"
                        },
                        "collections": [],
                        "id": "c370ec49-61d8-4968-bbe8-8e8de28116e1"
                      }
                    ],
                    "activeCells": {},
                    "id": "0aff7ea1-80c9-4704-8b50-a3ea0e3e08b5"
                  }
                ],
                "id": "1b81232c-afa4-40b1-967d-56fdc447f5ce"
              },
              {
                "text": "Table fixture from script",
                "type": "comment",
                "id": "9be4bffb-cbd9-4034-9466-26e8af3c55de"
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
                        "id": "88f5a6c1-0e92-4cbc-aeae-4255cd223ec2"
                      },
                      {
                        "key": "Rows",
                        "cells": {
                          "x": "3",
                          "y": "3",
                          "product": "****"
                        },
                        "collections": [],
                        "id": "a66fd3ad-7758-42d9-a7d4-5b6b61aaf0fc"
                      }
                    ],
                    "activeCells": {},
                    "id": "22a34ab3-cf01-4b2d-8dd5-888020426b58"
                  }
                ],
                "id": "5b6a6e1f-54ec-411c-8034-d257d31cef6d"
              }
            ],
            "activeCells": {},
            "id": "9cf68609-5bd2-4047-a853-194caafb24f3"
          }
        ],
        "id": "table5"
      }
    }
  ],
  "fixtures": [
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
        }
      ],
      "type": "fixture",
      "errors": []
    },
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
          "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.Exception: This fixture ctor blew up\r\n   at StoryTeller.Samples.Fixtures.FailureFixture..ctor() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\FailureFixture.cs:line 9\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeTypeHandle.CreateInstance(RuntimeType type, Boolean publicOnly, Boolean noCheck, Boolean& canBeCached, RuntimeMethodHandleInternal& ctor, Boolean& bNeedSecurityCheck)\r\n   at System.RuntimeType.CreateInstanceSlow(Boolean publicOnly, Boolean skipCheckThis, Boolean fillCache, StackCrawlMark& stackMark)\r\n   at System.Activator.CreateInstance(Type type, Boolean nonPublic)\r\n   at System.Activator.CreateInstance(Type type)\r\n   at StoryTeller.Model.FixtureLibrary.CreateCompiledFixture(CellHandling cellHandling, Type type) in z:\\code\\storyteller\\src\\StoryTeller\\Model\\FixtureLibrary.cs:line 126"
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
              "error": "System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.DivideByZeroException: Attempted to divide by zero.\r\n   at StoryTeller.Samples.Fixtures.GrammarErrorFixture.Bad() in z:\\code\\storyteller\\src\\StoryTeller.Samples\\Fixtures\\FailureFixture.cs:line 17\r\n   --- End of inner exception stack trace ---\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Object[] arguments, Signature sig, Boolean constructor)\r\n   at System.Reflection.RuntimeMethodInfo.UnsafeInvokeInternal(Object obj, Object[] parameters, Object[] arguments)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at StoryTeller.Grammars.ProgrammaticGrammarBuilder.Build(MethodInfo method, Fixture fixture) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\GrammarBuilder.cs:line 68\r\n   at StoryTeller.Grammars.GrammarBuilder.BuildGrammar(MethodInfo method, Fixture fixture) in z:\\code\\storyteller\\src\\StoryTeller\\Grammars\\GrammarBuilder.cs:line 35"
            }
          ]
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
                "cells": null,
                "errors": []
              },
              {
                "format": "This fact is always false",
                "key": "ThisFactIsFalse",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "This fact throws an exception",
                "key": "ThisFactThrowsException",
                "type": "sentence",
                "cells": null,
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
                "cells": null,
                "errors": []
              },
              {
                "format": "This fact is always false",
                "key": "ThisFactIsFalse",
                "type": "sentence",
                "cells": null,
                "errors": []
              },
              {
                "format": "This fact throws an exception",
                "key": "ThisFactThrowsException",
                "type": "sentence",
                "cells": null,
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
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact is always false",
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact throws an exception",
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": null,
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
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact is always false",
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact throws an exception",
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": null,
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
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact is always false",
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact throws an exception",
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": null,
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
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact is always false",
          "key": "ThisFactIsFalse",
          "type": "sentence",
          "cells": null,
          "errors": []
        },
        {
          "format": "This fact throws an exception",
          "key": "ThisFactThrowsException",
          "type": "sentence",
          "cells": null,
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
    }
  ],
  "time": "9/2/2015 2:43 PM",
  "system": null,
  "suite": null,
  "success": false,
  "type": "batch-run-response"
}