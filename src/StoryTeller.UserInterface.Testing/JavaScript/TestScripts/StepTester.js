qUnitTesting(function() {
    module("Step");

    test("create a new step by key name", function() {
        var step = new Step('grammar1');
        equals(step.x_Name, 'grammar1', "should set the x_Name property");

        var leaf = step.childFor("leaf1");

        ok(leaf != null, "The leaf should not be null");

        var leaf2 = step.childFor("leaf1");

        equals(leaf, leaf2, "Should retrieve the same step object from 2nd call to leafFor");
    });

    test("get the property names for a step", function() {
        var step = new Step('grammar1');

        step.a = "1";
        step.b = "2";
        step.c = "3";

        var names = step.propertyNames();

        equals(names.length, 3, "should have 3 properties");
        equals(names[0], "a", "first property");
        equals(names[1], "b", "second property");
        equals(names[2], "c", "third property");
    });

    test("remove a property from a step", function() {
        var step = new Step('grammar1');

        step.a = "1";
        step.b = "2";
        step.c = "3";

        step.remove('a');

        var names = step.propertyNames();

        equals(names.length, 2, "should have 3 properties");
        equals(names[0], "b", "first property");
        equals(names[1], "c", "second property");
    });

    test("read a reentrant step", function() {
        var step = { x_Name: 'EmailRule', children: [
        { x_Name: 'ConfigureEmailRules', children: [
        { x_Name: 'a', prop: 'the text', children: [] }
        ]
        }
        ]
        }

        Step(step);

        equals(step.key(), 'EmailRule', 'should read the key');
        equals(step.childFor('ConfigureEmailRules').key(), 'ConfigureEmailRules', 'leafFor should be attached');
        equals(step.childFor('ConfigureEmailRules').childFor('a').prop, 'the text', 'makes every child a step');
    });

    test("read a reentrant step 2", function() {
        var rules = {
            "x_Name": "Test",
            "children": [
            {
                "x_Name": "RuleConfiguration",
                "children": [
                {
                    "x_Name": "ForCase",
                    "children": [
                    {
                        "x_Name": "WorkflowItemEvent",
                        "children": [
                        {
                            "x_Name": "Assigned",
                            "children": []
                        }
                      ]
                    },
                    {
                        "x_Name": "CaseIf",
                        "children": []
                    },
                    {
                        "x_Name": "WorkflowItemAction",
                        "children": [
                        {
                            "x_Name": "SendNotification",
                            "children": [
                            {
                                "x_Name": "NotificationTo",
                                "children": [
                                {
                                    "x_Name": "ToCurrentOwnerNotificationGroup",
                                    "children": []
                                }
                              ]
                            }
                          ],
                            "template": "AssignedToYou"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
            "name": "Notify owner when a case is assigned",
            "lifecycle": "Acceptance"
        }

        var step = new Step(rules);



        equals(rules.childFor("RuleConfiguration").children[0].key(), "ForCase", "can read the first level of children");
        equals(rules.childFor("RuleConfiguration").childFor("ForCase").childFor("WorkflowItemEvent").children[0].key(), "Assigned", 'reads the step in recursively');
    });

    test("when cloning a Step", function() {
        var step = new Step("row");
        step.a = "1";
        step.b = "2";
        step.c = "3";

        var clone = step.simpleClone();

        equals(clone.a, "1", "first property");
        equals(clone.b, "2", "second property");
        equals(clone.c, "3", "third property");
    });
});