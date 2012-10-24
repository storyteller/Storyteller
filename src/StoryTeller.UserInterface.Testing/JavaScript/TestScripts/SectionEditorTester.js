$.fn.isVisible = function(){
    return $(this.get(0)).is(':visible');
}

qUnitTesting(function() {

    module("Section Editor");

    test("add a comment to a section", function() {
        var test = new Step("Test");
        var editor = $('#section1').sectionEditor({ fixture: 'Math', leafName: 'Math' }, test).get(0);

        editor.addStep('Comment');

        $('.editor', editor).val('new comment text');

        equals(editor.getStepNames().length, 0, 'Comment should be ignored in the getStepNames call');
        ok(editor.hasNoSteps(), 'Comment should be ignored in the calculation of hasNoSteps');

        var commentCount = $('.Comment', editor).size();
        equals(commentCount, 1, 'Should be a comment tag in the section');

        editor.update();

        var comment = test.childFor("Math").children[0];

        ok(comment != null, "A comment appears in the 'Math' leaf of the test");
        equals(comment.key(), "Comment", "after the section is updated, should have a comment under the section in the test");
        equals(comment.text(), 'new comment text', 'after the section is updated, the comment text from the comment Editor should be reflected in the test structure');
    });


    test("add a sentence step to a section", function() {
        var test = new Step("Test");
        var editor = $('#section2').sectionEditor({ fixture: 'Math', leafName: 'Math' }, test).get(0);

        editor.addStep('StartWith');

        $('input.starting', editor).val(5);

        equals(editor.getStepNames().length, 1, 'should have a step name for the sentence');
        ok(!editor.hasNoSteps(), 'hasNoSteps() should be false');

        ok($('.step-holder > div.StartWith', editor).size() == 1, 'should have a sentence element in the section holder');

        editor.update();

        var step = test.childFor("Math").children[0];
        ok(step != null, "A new child step is added to the 'Math' leaf");
        equals(step.key(), 'StartWith', 'the new child step has the correct key');
        equals(step.starting, '5', 'update should update the child step');
    });

    test("add a paragraph step to a section", function() {
        var test = new Step("Test");
        var editor = $('#section3').sectionEditor({ fixture: 'Composite', leafName: 'Composite' }, test).get(0);

        editor.addStep('AddAndMultiply');

        equals(editor.getStepNames().length, 1, 'should have exactly one step name for the paragraph');
        ok(!editor.hasNoSteps(), 'hasNoSteps() should be false');
        equals(editor.getStepNames()[0], 'AddAndMultiply', 'the first step name should be for the new paragraph');

        $('input.starting', editor).val(5);
        $('input.operand', editor).val(3);
        $('input.multiplier', editor).val(2);


        editor.update();

        var step = test.childFor("Composite").children[0];
        equals(step.key(), 'AddAndMultiply', 'the first child of the test section for "Composite" should be the key of the paragraph');
        equals(step.starting, 5, 'starting property');
        equals(step.operand, 3, 'operand property');
        equals(step.multiplier, 2, 'multiplier property');
    });


    test("add an embedded section step to a section", function() {
        var test = new Step("Test");
        var editor = $('#section4').sectionEditor({ fixture: 'Embedded', leafName: 'Embedded' }, test).get(0);

        editor.addStep('EmbeddedMath');

        var embed = $('div.step', editor).get(0);

        embed.addStep('StartWith');

        $('input.starting', embed).val(6);

        editor.update();

        equals(test.childFor('Embedded').children.length, 1, 'should be one child in the Embedded section');
        equals(test.childFor('Embedded').children[0].key(), 'EmbeddedMath', 'should have the EmbeddedMath child in the Embedded leaf');

        var leaf = test.childFor('Embedded').childFor('EmbeddedMath').childFor('Math');

        equals(leaf.children.length, 1, 'should be one child in the embedded section leaf');

        var step = leaf.children[0];

        equals(step.key(), 'StartWith', 'should have the child step in the embedded leaf');
        equals(step.starting, 6, 'should have recursively updated the children down into the embedded section');
    });

    test("remove a sentence", function() {
        var test = new Step("Test");
        var editor = $('#section2').sectionEditor({ fixture: 'Math', leafName: 'Math' }, test).get(0);

        editor.addStep('StartWith');

        editor.update();

        $('.StartWith .deleteStep', editor).click();

//        editor.update();

//        equals($(editor.holder).children().size(), 0, 'should have removed the child div from the section holder');
//        equals(test.childFor('Math').children.length, 0, 'should no longer show up in the updated test');
    });

    test("remove a paragraph", function() {
        var test = new Step("Test");
        var editor = $('#section3').sectionEditor({ fixture: 'Composite', leafName: 'Composite' }, test).get(0);

        editor.addStep('AddAndMultiply');

        editor.update();

        $('.AddAndMultiply .deleteStep', editor).click();

        editor.update();

        equals($(editor.holder).children().size(), 0, 'should have removed the child div from the section holder');
        equals(test.childFor('Composite').children.length, 0, 'should no longer show up in the updated test');
    });

    test("remove an embedded section", function() {
        var test = new Step("Test");
        var editor = $('#section4').sectionEditor({ fixture: 'Embedded', leafName: 'Embedded' }, test).get(0);

        editor.addStep('EmbeddedMath');

        editor.update();

        $('.EmbeddedMath .deleteStep', editor).click();

        editor.update();

        equals($(editor.holder).children().size(), 0, 'should have removed the child div from the section holder');
        equals(test.childFor('Embedded').children.length, 0, 'should no longer show up in the updated test');
    });

    test("remove a Comment", function() {
        var test = new Step("Test");
        var editor = $('#section1').sectionEditor({ fixture: 'Math', leafName: 'Math' }, test).get(0);

        editor.addStep('Comment');

        editor.update();

        $('.Comment .deleteStep', editor).click();

        editor.update();

        equals($(editor.holder).children().size(), 0, 'should have removed the child div from the section holder');
        equals(test.childFor('Math').children.length, 0, 'should no longer show up in the updated test');
    });

    test("initial state of a section that is not single selection", function() {
        var test = new Step("Test");
        test.childFor('Simple');
        $('#testEditor').testEditor(test);

        var editor = $('#testEditor div.Simple').get(0);

        equals($('.grammar-selector', editor).isVisible(), false, 'grammar selector should be hidden by default');
        equals($('.add-section-activator', editor).isVisible(), true, 'add grammar activator should be visible by default');

        $('.add-section-activator', editor).click();

        equals($('.grammar-selector', editor).isVisible(), true, 'after clicking the "add grammar activator," the grammar selector should be visible');
        equals($('.add-section-activator', editor).isVisible(), false, 'after clicking the "add grammar activator," the add grammar activator should be hidden');

        $('.closer', editor).click();

        equals($('.grammar-selector', editor).isVisible(), false, 'grammar selector should be hidden after the closer is clicked');
        equals($('.add-section-activator', editor).isVisible(), true, 'add grammar activator should be visible after the closer is clicked');

    });
});