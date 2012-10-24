qUnitTesting(function() {
    module("Context Menus");

    test("Open a new section with a Fixture that is Single Selection Mode", function() {
        $('#testEditor').testEditor(mandatoryTest);
        var section = $('#testEditor div.MandatorySelection').get(0);

        var sectionAddLink = $('.add-section-activator', section);
        var selectorSection = $('.grammar-selector', section);

        equals(sectionAddLink.length, 0, 'the link for showing the add steps section should not be there');
        equals(selectorSection.length, 0, 'the grammar selector section should not exist');

        equals($('.StartWithTheNumber', section).length, 1, "should be a step editor for the auto select grammar");


        section.update();

        equals(section.leaf.children.length, 1, 'should be one step in the section leaf after an update');
        equals(section.leaf.children[0].key(), 'StartWithTheNumber', 'should have the auto select grammar for the first step');

    });



});