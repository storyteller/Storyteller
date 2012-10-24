qUnitTesting(function() {
    module("Embedded Sections");

    test("the holder functionality", function() {

        var step = new Step("Test");
        var metadata = { fixture: "Sentence", leafName: "sentences" }

        var section = $('#section2').sectionEditor(metadata, step).get(0);

        equals(section.hasNoSteps(), true, "should have no steps in the initial state");

        section.addStep('ThisFactIsTrue');
        section.addStep('ThisFactIsFalse');
        section.addStep('MultiplyThenAdd');
        section.addStep('Subtract');

        equals(section.hasNoSteps(), false, "should now have steps after adding steps");

        var stepNames = section.getStepNames();

        equals(stepNames.length, 4, "should have a step div for each call to addStep");
        equals(stepNames[0], "ThisFactIsTrue", "the first step");
        equals(stepNames[1], "ThisFactIsFalse", "the second step");
        equals(stepNames[2], "MultiplyThenAdd", "the third step");
        equals(stepNames[3], "Subtract", "the fourth step");
    });


    test("can add a sentence to a section and update", function() {
        var step = new Step("Test");
        var metadata = { fixture: "Sentence", leafName: "sentences" }

        var section = $('#section1').sectionEditor(metadata, step).get(0);

        section.addStep('Subtract');

        $('.operand', section.holder).val(5);

        section.update();

        var leaf = step.childFor('sentences');

        equals(leaf.children.length, 1, "the leaf should have one child");
        equals(leaf.childFor('Subtract').operand, '5', 'should have set the cell value of the underlying step');

    });



});