qUnitTesting(function() {
    module("Selector");

    test("show and hide the selector with no validation rules", function() {
        $('#testEditor').testEditor(math);

        var section = $('#testEditor div.Math').get(0);

        var sectionAddLink = $('.add-section-activator', section);
        var selectorSection = $('.grammar-selector', section);

        equals(sectionAddLink.is(':visible'), true, 'the link for showing the add steps section is initially visible');
        equals(selectorSection.is(':visible'), false, 'the grammar selector section is initially hidden');

        sectionAddLink.click();
        ok(true, "click the add section activator link");

        equals(sectionAddLink.is(':visible'), false, 'the link for showing the add steps section should now be hidden');
        equals(selectorSection.is(':visible'), true, 'the grammar selector section should be shown');

        ok(true, "click the close section link");
        $('.grammar-selector .closer', section).click();

        equals(sectionAddLink.is(':visible'), true, 'the link for showing the add steps section is now visible');
        equals(selectorSection.is(':visible'), false, 'the grammar selector section is now hidden');
    });


    test("add a comment and a step from the selector", function() {
        $('#testEditor').testEditor(math);

        var section = $('#testEditor div.Math').get(0);
        $('.add-section-activator', section).click();

        $('#Comment > a', section).click();

        $('.editor', section).val('new comment text');

        equals(section.getStepNames().length, 0, 'Comment should be ignored in the getStepNames call');
        ok(section.hasNoSteps(), 'Comment should be ignored in the calculation of hasNoSteps');

        section.update();


        var comment = section.leaf.children[0];
        equals(comment.key(), "Comment", "after updating the section, there is a Comment added to the section");
        equals(comment.text(), 'new comment text', "the comment text is captured");




        $('#StartWith > a', section).click();

        $('input.starting', section).val(5);

        equals(section.getStepNames().length, 1, 'should have a step name for the sentence');
        ok(!section.hasNoSteps(), 'hasNoSteps() should be false');

        ok($('.step-holder > div.StartWith', section).size() == 1, 'should have a sentence element in the section holder');

        section.update();

        var step = section.leaf.children[1];
        ok(step != null, "A new child step is added to the 'Math' leaf");
        equals(step.key(), 'StartWith', 'the new child step has the correct key');
        equals(step.starting, '5', 'update should update the child step');
    });



});