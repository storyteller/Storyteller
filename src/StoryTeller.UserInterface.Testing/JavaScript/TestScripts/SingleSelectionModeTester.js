qUnitTesting(function() {
    module("Context Menus");

    test("Open a new section with a Fixture that is Single Selection Mode", function() {
        $('#testEditor').testEditor(singleTest);
        var section = $('#testEditor div.SingleSelection').get(0);

        var sectionAddLink = $('.add-section-activator', section);
        var selectorSection = $('.grammar-selector', section);



        equals(sectionAddLink.is(':visible'), false, 'the link for showing the add steps section is initially hidden');
        equals(selectorSection.is(':visible'), true, 'the grammar selector section is initially open because there are no steps selected');


        ok(true, 'now, select a comment');

        var selector = $('.grammar-selector', section).get(0);
        $('div#Comment > a', selector).click();

        equals(selectorSection.is(':visible'), true, 'the grammar selector section is open because there is still no step selected');


        ok(true, 'now, select a step');

        $('div#XplusYShouldBe', selector).click();

        equals(selectorSection.is(':visible'), false, 'the grammar selector should be closed as soon as there is a step selected');


        ok(true, 'change the step');
        $('div.XplusYShouldBe > .deleteStep', section).click();

        equals(selectorSection.is(':visible'), true, 'the grammar selector section should be reopened when the single selection is removed');


    });



});